import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import {
  FORMULA_DEFINITIONS,
  searchFormulas,
  getFormula,
  FORMULA_CATEGORIES,
  FormulaDefinition,
  FormulaCategory,
} from '../utils/formulaDefinitions';

export interface FormulaAutocompleteProps {
  /** Current input value */
  value: string;
  /** Callback when value changes */
  onChange: (value: string) => void;
  /** Callback when editing is complete */
  onComplete: () => void;
  /** Callback to cancel editing */
  onCancel: () => void;
  /** Position for the dropdown */
  anchorRect: DOMRect | null;
  /** Auto focus the input */
  autoFocus?: boolean;
  /** Custom class name */
  className?: string;
}

interface FormulaHint {
  formula: FormulaDefinition;
  currentParamIndex: number;
}

/**
 * FormulaAutocomplete - Input with formula intellisense
 *
 * Features:
 * - Autocomplete dropdown when typing after '='
 * - Function signature hints while typing parameters
 * - Category-based browsing
 * - Keyboard navigation
 */
const FormulaAutocomplete: React.FC<FormulaAutocompleteProps> = ({
  value,
  onChange,
  onComplete,
  onCancel,
  anchorRect,
  autoFocus = true,
  className = '',
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hint, setHint] = useState<FormulaHint | null>(null);
  const [activeCategory, setActiveCategory] = useState<FormulaCategory | null>(null);

  // Parse the current formula context
  const formulaContext = useMemo(() => {
    if (!value.startsWith('=')) {
      return { isFormula: false, query: '', inFunction: false, functionName: '', paramIndex: 0 };
    }

    const formulaText = value.substring(1);

    // Check if we're typing a function name (before opening paren)
    const functionMatch = formulaText.match(/^([A-Z]+)$/i);
    if (functionMatch) {
      return {
        isFormula: true,
        query: functionMatch[1].toUpperCase(),
        inFunction: false,
        functionName: '',
        paramIndex: 0,
      };
    }

    // Check if we're inside a function (after opening paren)
    const insideFunctionMatch = formulaText.match(/^([A-Z]+)\((.*)$/i);
    if (insideFunctionMatch) {
      const functionName = insideFunctionMatch[1].toUpperCase();
      const params = insideFunctionMatch[2];

      // Count commas to determine parameter index (accounting for nested parens)
      let paramIndex = 0;
      let parenDepth = 0;
      for (const char of params) {
        if (char === '(') parenDepth++;
        else if (char === ')') parenDepth--;
        else if (char === ',' && parenDepth === 0) paramIndex++;
      }

      return {
        isFormula: true,
        query: '',
        inFunction: true,
        functionName,
        paramIndex,
      };
    }

    // Just '=' or other expression
    return {
      isFormula: true,
      query: formulaText.toUpperCase(),
      inFunction: false,
      functionName: '',
      paramIndex: 0,
    };
  }, [value]);

  // Get matching formulas for dropdown
  const matchingFormulas = useMemo(() => {
    if (!formulaContext.isFormula || formulaContext.inFunction) return [];

    if (activeCategory) {
      const categoryFormulas = FORMULA_DEFINITIONS.filter(f => f.category === activeCategory);
      if (formulaContext.query) {
        return categoryFormulas.filter(f => f.name.startsWith(formulaContext.query));
      }
      return categoryFormulas;
    }

    if (formulaContext.query) {
      return searchFormulas(formulaContext.query);
    }

    // Show all formulas grouped by first letter when just '='
    return FORMULA_DEFINITIONS.slice(0, 20); // Show first 20 as default
  }, [formulaContext, activeCategory]);

  // Update hint when inside a function
  useEffect(() => {
    if (formulaContext.inFunction && formulaContext.functionName) {
      const formula = getFormula(formulaContext.functionName);
      if (formula) {
        setHint({
          formula,
          currentParamIndex: formulaContext.paramIndex,
        });
        setShowHint(true);
        setShowDropdown(false);
      } else {
        setShowHint(false);
        setHint(null);
      }
    } else if (formulaContext.isFormula && !formulaContext.inFunction) {
      setShowDropdown(true);
      setShowHint(false);
      setHint(null);
    } else {
      setShowDropdown(false);
      setShowHint(false);
      setHint(null);
    }
  }, [formulaContext]);

  // Reset selected index when matches change
  useEffect(() => {
    setSelectedIndex(0);
  }, [matchingFormulas.length]);

  // Auto-focus
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [autoFocus]);

  // Scroll selected item into view
  useEffect(() => {
    if (dropdownRef.current && showDropdown) {
      const selectedItem = dropdownRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (selectedItem) {
        selectedItem.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex, showDropdown]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (showDropdown && matchingFormulas.length > 0) {
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            setSelectedIndex((prev) => Math.min(prev + 1, matchingFormulas.length - 1));
            break;
          case 'ArrowUp':
            e.preventDefault();
            setSelectedIndex((prev) => Math.max(prev - 1, 0));
            break;
          case 'Tab':
          case 'Enter':
            e.preventDefault();
            insertFormula(matchingFormulas[selectedIndex]);
            break;
          case 'Escape':
            e.preventDefault();
            if (showDropdown) {
              setShowDropdown(false);
            } else {
              onCancel();
            }
            break;
        }
      } else {
        if (e.key === 'Enter') {
          e.preventDefault();
          onComplete();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          onCancel();
        }
      }
    },
    [showDropdown, matchingFormulas, selectedIndex, onComplete, onCancel]
  );

  // Insert selected formula
  const insertFormula = useCallback(
    (formula: FormulaDefinition) => {
      // Replace the current query with the formula name and open paren
      const newValue = `=${formula.name}(`;
      onChange(newValue);
      setShowDropdown(false);
      inputRef.current?.focus();
    },
    [onChange]
  );

  // Calculate dropdown position
  const dropdownPosition = useMemo(() => {
    if (!anchorRect) return { top: 0, left: 0 };
    return {
      top: anchorRect.bottom + 2,
      left: anchorRect.left,
    };
  }, [anchorRect]);

  // Prevent blur when clicking inside dropdown
  const handleDropdownMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault(); // Prevents input from losing focus
  }, []);

  // Render parameter hint
  const renderHint = () => {
    if (!showHint || !hint) return null;

    return createPortal(
      <div
        className="fixed z-[9999] bg-white border border-stone-200 rounded-lg shadow-lg p-3 max-w-md"
        style={{
          top: dropdownPosition.top,
          left: dropdownPosition.left,
        }}
        onMouseDown={handleDropdownMouseDown}
      >
        {/* Function name and syntax */}
        <div className="font-mono text-sm mb-2">
          <span className="text-primary-600 font-semibold">{hint.formula.name}</span>
          <span className="text-ink-500">(</span>
          {hint.formula.parameters.map((param, idx) => (
            <span key={param.name}>
              {idx > 0 && <span className="text-ink-500">, </span>}
              <span
                className={`${
                  idx === hint.currentParamIndex
                    ? 'bg-primary-100 text-primary-700 px-1 rounded font-semibold'
                    : param.optional
                    ? 'text-ink-400'
                    : 'text-ink-600'
                }`}
              >
                {param.optional ? `[${param.name}]` : param.name}
              </span>
            </span>
          ))}
          <span className="text-ink-500">)</span>
        </div>

        {/* Description */}
        <div className="text-xs text-ink-600 mb-2">{hint.formula.description}</div>

        {/* Current parameter description */}
        {hint.formula.parameters[hint.currentParamIndex] && (
          <div className="text-xs bg-paper-50 p-2 rounded border border-stone-100">
            <span className="font-semibold text-primary-600">
              {hint.formula.parameters[hint.currentParamIndex].name}:
            </span>{' '}
            <span className="text-ink-600">
              {hint.formula.parameters[hint.currentParamIndex].description}
            </span>
          </div>
        )}
      </div>,
      document.body
    );
  };

  // Render autocomplete dropdown
  const renderDropdown = () => {
    if (!showDropdown || matchingFormulas.length === 0) return null;

    return createPortal(
      <div
        ref={dropdownRef}
        className="fixed z-[9999] bg-white border border-stone-200 rounded-lg shadow-lg overflow-hidden"
        style={{
          top: dropdownPosition.top,
          left: dropdownPosition.left,
          minWidth: 320,
          maxWidth: 450,
          maxHeight: 300,
        }}
        onMouseDown={handleDropdownMouseDown}
      >
        {/* Category tabs */}
        <div className="flex flex-wrap gap-1 p-2 border-b border-stone-100 bg-paper-50">
          <button
            className={`px-2 py-1 text-xs rounded ${
              activeCategory === null
                ? 'bg-primary-500 text-white'
                : 'bg-white text-ink-600 hover:bg-stone-100'
            }`}
            onClick={() => {
              setActiveCategory(null);
              inputRef.current?.focus();
            }}
          >
            All
          </button>
          {FORMULA_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`px-2 py-1 text-xs rounded ${
                activeCategory === cat
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-ink-600 hover:bg-stone-100'
              }`}
              onClick={() => {
                setActiveCategory(cat);
                inputRef.current?.focus();
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Formula list */}
        <div className="overflow-y-auto" style={{ maxHeight: 220 }}>
          {matchingFormulas.map((formula, index) => (
            <div
              key={formula.name}
              data-index={index}
              className={`px-3 py-2 cursor-pointer border-b border-stone-50 ${
                index === selectedIndex ? 'bg-primary-50' : 'hover:bg-paper-50'
              }`}
              onClick={() => insertFormula(formula)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono font-semibold text-primary-600 text-sm">
                  {formula.name}
                </span>
                <span className="text-xs text-ink-400 bg-stone-100 px-1.5 py-0.5 rounded">
                  {formula.category}
                </span>
              </div>
              <div className="text-xs text-ink-500 mt-0.5 truncate">{formula.description}</div>
              <div className="font-mono text-xs text-ink-400 mt-0.5">{formula.syntax}</div>
            </div>
          ))}
        </div>

        {/* Footer hint */}
        <div className="px-3 py-1.5 bg-paper-50 border-t border-stone-100 text-xs text-ink-400">
          <span className="font-medium">↑↓</span> navigate
          <span className="mx-2">·</span>
          <span className="font-medium">Tab/Enter</span> insert
          <span className="mx-2">·</span>
          <span className="font-medium">Esc</span> close
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          // Delay to allow click on dropdown
          setTimeout(() => {
            setShowDropdown(false);
            setShowHint(false);
          }, 150);
        }}
        className={`w-full h-full border-none outline-none bg-transparent font-mono text-sm ${className}`}
        style={{ margin: '-4px', padding: '4px' }}
      />
      {renderDropdown()}
      {renderHint()}
    </>
  );
};

export default FormulaAutocomplete;
