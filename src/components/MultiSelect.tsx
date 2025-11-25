import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Check, ChevronDown, Search, X, Loader2 } from 'lucide-react';

export interface MultiSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface MultiSelectProps {
  options: MultiSelectOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  searchable?: boolean;
  disabled?: boolean;
  label?: string;
  helperText?: string;
  error?: string;
  maxHeight?: number;
  /** Maximum number of selections allowed */
  maxSelections?: number;
  /** Show loading spinner (for async options loading) */
  loading?: boolean;
  'aria-label'?: string;
}

/** Handle for imperative methods */
export interface MultiSelectHandle {
  /** Focus the select trigger button */
  focus: () => void;
  /** Open the dropdown */
  open: () => void;
  /** Close the dropdown */
  close: () => void;
}

const MultiSelect = forwardRef<MultiSelectHandle, MultiSelectProps>(({
  options,
  value = [],
  onChange,
  placeholder = 'Select options',
  searchable = false,
  disabled = false,
  label,
  helperText,
  error,
  maxHeight = 240,
  maxSelections,
  loading = false,
  'aria-label': ariaLabel,
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const selectRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Expose imperative methods
  useImperativeHandle(ref, () => ({
    focus: () => triggerRef.current?.focus(),
    open: () => !disabled && setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  const selectedOptions = options.filter(opt => value.includes(opt.value));
  const hasReachedMax = maxSelections ? value.length >= maxSelections : false;

  const filteredOptions = searchable && searchQuery
    ? options.filter(opt =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleToggle = (optionValue: string) => {
    if (value.includes(optionValue)) {
      // Allow deselection
      onChange?.(value.filter(v => v !== optionValue));
    } else {
      // Check max selections before adding
      if (!hasReachedMax) {
        onChange?.([...value, optionValue]);
      }
    }
  };

  const handleRemove = (optionValue: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(value.filter(v => v !== optionValue));
  };

  const handleClearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.([]);
  };

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label className="label">
          {label}
        </label>
      )}

      {/* Select Container */}
      <div ref={selectRef} className="relative">
        {/* Trigger Button */}
        <button
          ref={triggerRef}
          type="button"
          onClick={() => !disabled && !loading && setIsOpen(!isOpen)}
          disabled={disabled || loading}
          className={`
            input w-full flex items-center justify-between min-h-[42px]
            ${error ? 'border-error-400 focus:border-error-400 focus:ring-error-400' : ''}
            ${disabled || loading ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
          `}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label={ariaLabel || label}
        >
          <div className="flex-1 flex items-center gap-2 flex-wrap">
            {selectedOptions.length === 0 ? (
              <span className="text-ink-400">{placeholder}</span>
            ) : (
              selectedOptions.map((option) => (
                <span
                  key={option.value}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-accent-100 text-accent-800 rounded text-sm"
                >
                  {option.icon && <span className="text-xs">{option.icon}</span>}
                  {option.label}
                  <button
                    type="button"
                    onClick={(e) => handleRemove(option.value, e)}
                    className="hover:text-accent-900"
                    aria-label={`Remove ${option.label}`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))
            )}
          </div>
          <div className="flex items-center gap-2 ml-2">
            {loading && (
              <Loader2 className="h-4 w-4 text-ink-400 animate-spin" />
            )}
            {!loading && selectedOptions.length > 0 && !disabled && (
              <button
                type="button"
                onClick={handleClearAll}
                className="text-ink-400 hover:text-ink-600"
                aria-label="Clear all"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            {!loading && (
              <ChevronDown className={`h-4 w-4 text-ink-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            )}
          </div>
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div
            className="absolute z-50 w-full mt-2 bg-white bg-subtle-grain rounded-lg shadow-lg border border-paper-200 overflow-hidden animate-fade-in"
            style={{ maxHeight: `${maxHeight}px` }}
          >
            {/* Search Input */}
            {searchable && (
              <div className="p-2 border-b border-paper-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full pl-9 pr-3 py-2 text-sm border border-paper-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400"
                  />
                </div>
              </div>
            )}

            {/* Options List */}
            <div className="overflow-y-auto" style={{ maxHeight: `${maxHeight - 60}px` }} role="listbox" aria-multiselectable="true">
              {filteredOptions.length === 0 ? (
                <div className="px-4 py-3 text-sm text-ink-500 text-center">
                  No options found
                </div>
              ) : (
                filteredOptions.map((option) => {
                  const isSelected = value.includes(option.value);
                  const isDisabled = option.disabled || (hasReachedMax && !isSelected);

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => !isDisabled && handleToggle(option.value)}
                      disabled={isDisabled}
                      className={`
                        w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors
                        ${isSelected ? 'bg-accent-50 text-accent-900' : 'text-ink-700'}
                        ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-paper-50 cursor-pointer'}
                      `}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <span className="flex items-center gap-2">
                        <div className={`
                          w-4 h-4 border-2 rounded flex items-center justify-center
                          ${isSelected ? 'bg-accent-600 border-accent-600' : 'border-paper-300'}
                        `}>
                          {isSelected && <Check className="h-3 w-3 text-white" />}
                        </div>
                        {option.icon && <span>{option.icon}</span>}
                        {option.label}
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>

      {/* Helper Text, Error, or Selection Count */}
      <div className="flex justify-between items-center mt-2">
        {(helperText || error) && (
          <p className={`text-xs ${error ? 'text-error-600' : 'text-ink-600'}`}>
            {error || helperText}
          </p>
        )}
        {maxSelections && (
          <p className={`text-xs ml-auto ${hasReachedMax ? 'text-warning-600 font-medium' : 'text-ink-500'}`}>
            {value.length} / {maxSelections} selected
          </p>
        )}
      </div>
    </div>
  );
});

MultiSelect.displayName = 'MultiSelect';

export default MultiSelect;
