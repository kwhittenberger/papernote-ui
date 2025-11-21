import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle, useId } from 'react';
import { Check, ChevronDown, Search, Loader2, X } from 'lucide-react';

/**
 * Single option in a select dropdown
 */
export interface SelectOption {
  /** Unique value for this option */
  value: string;
  /** Display label for this option */
  label: string;
  /** Disable selection of this option */
  disabled?: boolean;
  /** Optional icon to display before label */
  icon?: React.ReactNode;
}

/**
 * Group of options with a section header
 */
export interface SelectOptionGroup {
  /** Group header label */
  label: string;
  /** Options in this group */
  options: SelectOption[];
}

/**
 * Imperative handle for Select component (via ref)
 */
export interface SelectHandle {
  /** Focus the select button */
  focus: () => void;
  /** Blur the select button */
  blur: () => void;
  /** Open the dropdown */
  open: () => void;
  /** Close the dropdown */
  close: () => void;
}

/**
 * Select component props
 */
export interface SelectProps {
  /** Flat list of options */
  options?: SelectOption[];
  /** Grouped options with section headers */
  groups?: SelectOptionGroup[];
  /** Currently selected value */
  value?: string;
  /** Callback when selection changes */
  onChange?: (value: string) => void;
  /** Placeholder text when no option selected */
  placeholder?: string;
  /** Enable search/filter functionality */
  searchable?: boolean;
  /** Disable the select */
  disabled?: boolean;
  /** Label text above select */
  label?: string;
  /** Helper text below select */
  helperText?: string;
  /** Error message (displayed below select in red) */
  error?: string;
  /** Show loading spinner */
  loading?: boolean;
  /** Show clear button to reset selection */
  clearable?: boolean;
  /** Allow creating new options (requires searchable=true) */
  creatable?: boolean;
  /** Callback when new option is created */
  onCreateOption?: (inputValue: string) => void;
  /** Enable virtual scrolling for large option lists (100+ items) */
  virtualized?: boolean;
  /** Height of dropdown when virtualized (default: '300px') */
  virtualHeight?: string;
  /** Height of each option row in pixels (default: 42) */
  virtualItemHeight?: number;
}

/**
 * Select - Dropdown select component with search, groups, and virtual scrolling
 *
 * A feature-rich select component supporting flat or grouped options, search/filter,
 * option creation, virtual scrolling for large lists, and clear functionality.
 *
 * @example Basic select
 * ```tsx
 * const options = [
 *   { value: '1', label: 'Option 1' },
 *   { value: '2', label: 'Option 2' },
 *   { value: '3', label: 'Option 3' },
 * ];
 *
 * <Select
 *   label="Choose option"
 *   options={options}
 *   value={selected}
 *   onChange={setSelected}
 * />
 * ```
 *
 * @example Searchable with groups
 * ```tsx
 * const groups = [
 *   {
 *     label: 'Fruits',
 *     options: [
 *       { value: 'apple', label: 'Apple', icon: <Apple /> },
 *       { value: 'banana', label: 'Banana' },
 *     ]
 *   },
 *   {
 *     label: 'Vegetables',
 *     options: [
 *       { value: 'carrot', label: 'Carrot' },
 *     ]
 *   },
 * ];
 *
 * <Select
 *   groups={groups}
 *   searchable
 *   clearable
 *   placeholder="Search food..."
 * />
 * ```
 *
 * @example Creatable with virtual scrolling
 * ```tsx
 * <Select
 *   options={largeOptionList}
 *   searchable
 *   creatable
 *   onCreateOption={handleCreate}
 *   virtualized
 *   virtualHeight="400px"
 * />
 * ```
 */
const Select = forwardRef<SelectHandle, SelectProps>(
  (props, ref) => {
  const {
    options = [],
    groups = [],
    value,
    onChange,
    placeholder = 'Select an option',
    searchable = false,
    disabled = false,
    label,
    helperText,
    error,
    loading = false,
    clearable = false,
    creatable = false,
    onCreateOption,
    virtualized = false,
    virtualHeight = '300px',
    virtualItemHeight = 42,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollTop, setScrollTop] = useState(0);
  const [activeDescendant] = useState<string | undefined>(undefined);
  const selectRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  
  // Generate unique IDs for ARIA
  const labelId = useId();
  const listboxId = useId();
  const errorId = useId();
  const helperTextId = useId();

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    focus: () => buttonRef.current?.focus(),
    blur: () => buttonRef.current?.blur(),
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  // Flatten all options (from both options and groups)
  const allOptions = [
    ...options,
    ...groups.flatMap(group => group.options)
  ];

  const selectedOption = allOptions.find(opt => opt.value === value);

  // Filter options/groups based on search
  const getFilteredData = () => {
    if (!searchable || !searchQuery) {
      return { options, groups };
    }

    const query = searchQuery.toLowerCase();

    // Filter flat options
    const filteredOptions = options.filter(opt =>
      opt.label.toLowerCase().includes(query)
    );

    // Filter grouped options
    const filteredGroups = groups
      .map(group => ({
        ...group,
        options: group.options.filter(opt =>
          opt.label.toLowerCase().includes(query)
        )
      }))
      .filter(group => group.options.length > 0);

    return { options: filteredOptions, groups: filteredGroups };
  };

  const { options: filteredOptions, groups: filteredGroups } = getFilteredData();

  // Virtual scrolling calculations
  const totalItems = filteredOptions.length + filteredGroups.flatMap(g => g.options).length;
  const useVirtualScrolling = virtualized && totalItems > 50;

  const visibleRangeStart = useVirtualScrolling
    ? Math.floor(scrollTop / virtualItemHeight)
    : 0;
  const visibleRangeEnd = useVirtualScrolling
    ? Math.min(
        visibleRangeStart + Math.ceil(parseInt(virtualHeight) / virtualItemHeight) + 5,
        totalItems
      )
    : totalItems;

  // Flatten all filtered items for virtualization
  const allFilteredItems = [
    ...filteredOptions.map((opt, idx) => ({ type: 'option' as const, option: opt, groupIndex: -1, optionIndex: idx })),
    ...filteredGroups.flatMap((group, groupIdx) =>
      group.options.map((opt, optIdx) => ({ type: 'grouped' as const, option: opt, groupIndex: groupIdx, optionIndex: optIdx, groupLabel: group.label }))
    )
  ];

  const visibleItems = useVirtualScrolling
    ? allFilteredItems.slice(visibleRangeStart, visibleRangeEnd)
    : allFilteredItems;

  const offsetY = useVirtualScrolling ? visibleRangeStart * virtualItemHeight : 0;
  const totalHeight = useVirtualScrolling ? totalItems * virtualItemHeight : 'auto';

  // Check if we should show "Create" option
  const showCreateOption = creatable &&
    searchQuery.trim() !== '' &&
    !filteredOptions.some(opt => opt.label.toLowerCase() === searchQuery.toLowerCase()) &&
    !filteredGroups.some(group =>
      group.options.some(opt => opt.label.toLowerCase() === searchQuery.toLowerCase())
    );

  // Handle creating new option
  const handleCreateOption = () => {
    if (onCreateOption) {
      onCreateOption(searchQuery.trim());
    } else {
      // If no callback, just select the typed value
      onChange?.(searchQuery.trim());
    }
    setSearchQuery('');
    setIsOpen(false);
  };

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

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label id={labelId} className="label">
          {label}
        </label>
      )}

      {/* Select Container */}
      <div ref={selectRef} className="relative">
        {/* Trigger Button */}
        <button
          ref={buttonRef}
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={`
            input w-full flex items-center justify-between
            ${error ? 'border-error-400 focus:border-error-400 focus:ring-error-400' : ''}
            ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
          `}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-labelledby={label ? labelId : undefined}
          aria-label={!label ? placeholder : undefined}
          aria-activedescendant={activeDescendant}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? errorId : (helperText ? helperTextId : undefined)}
          aria-disabled={disabled}
        >
          <span className={`flex items-center gap-2 ${selectedOption ? 'text-ink-800' : 'text-ink-400'}`}>
            {loading && <Loader2 className="h-4 w-4 animate-spin text-ink-500" />}
            {!loading && selectedOption?.icon && <span>{selectedOption.icon}</span>}
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <div className="flex items-center gap-1">
            {clearable && value && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange?.('');
                  setIsOpen(false);
                }}
                className="text-ink-400 hover:text-ink-600 transition-colors p-0.5"
                aria-label="Clear selection"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <ChevronDown className={`h-4 w-4 text-ink-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-white bg-subtle-grain rounded-lg shadow-lg border border-paper-200 max-h-60 overflow-hidden animate-fade-in">
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
                    role="searchbox"
                    aria-label="Search options"
                    aria-autocomplete="list"
                    aria-controls={listboxId}
                  />
                </div>
              </div>
            )}

            {/* Options List */}
            <div
              ref={listRef}
              id={listboxId}
              className="overflow-y-auto"
              style={{ maxHeight: useVirtualScrolling ? virtualHeight : '12rem' }}
              onScroll={(e) => useVirtualScrolling && setScrollTop(e.currentTarget.scrollTop)}
              role="listbox"
              aria-label="Available options"
              aria-multiselectable="false"
            >
              {loading ? (
                <div className="px-4 py-8 flex items-center justify-center" role="status" aria-live="polite">
                  <Loader2 className="h-5 w-5 animate-spin text-ink-500" />
                  <span className="ml-2 text-sm text-ink-500">Loading...</span>
                </div>
              ) : filteredOptions.length === 0 && filteredGroups.length === 0 && !showCreateOption ? (
                <div className="px-4 py-3 text-sm text-ink-500 text-center" role="status" aria-live="polite">
                  No options found
                </div>
              ) : (
                <>
                  {/* Create new option */}
                  {showCreateOption && (
                    <button
                      type="button"
                      onClick={handleCreateOption}
                      className="w-full flex items-center px-4 py-2.5 text-sm text-accent-700 hover:bg-accent-50 transition-colors border-b border-paper-200"
                    >
                      <span className="font-medium">Create "{searchQuery}"</span>
                    </button>
                  )}

                  {/* Virtual scrolling container */}
                  {useVirtualScrolling ? (
                    <div style={{ height: totalHeight, position: 'relative' }}>
                      <div style={{ transform: `translateY(${offsetY}px)` }}>
                        {visibleItems.map((item) => {
                          const option = item.option;
                          const isSelected = option.value === value;
                          const key = `${item.type}-${item.groupIndex}-${item.optionIndex}-${option.value}`;

                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => !option.disabled && handleSelect(option.value)}
                              disabled={option.disabled}
                              style={{ height: `${virtualItemHeight}px` }}
                              className={`
                                w-full flex items-center justify-between px-4 text-sm transition-colors
                                ${isSelected ? 'bg-accent-50 text-accent-900' : 'text-ink-700'}
                                ${option.disabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-paper-50 cursor-pointer'}
                              `}
                              role="option"
                              aria-selected={isSelected}
                            >
                              <span className="flex items-center gap-2">
                                {option.icon && <span>{option.icon}</span>}
                                {option.label}
                              </span>
                              {isSelected && <Check className="h-4 w-4 text-accent-600" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Render flat options */}
                      {filteredOptions.map((option) => {
                        const isSelected = option.value === value;

                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => !option.disabled && handleSelect(option.value)}
                            disabled={option.disabled}
                            className={`
                              w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors
                              ${isSelected ? 'bg-accent-50 text-accent-900' : 'text-ink-700'}
                              ${option.disabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-paper-50 cursor-pointer'}
                            `}
                            role="option"
                            aria-selected={isSelected}
                          >
                            <span className="flex items-center gap-2">
                              {option.icon && <span>{option.icon}</span>}
                              {option.label}
                            </span>
                            {isSelected && <Check className="h-4 w-4 text-accent-600" />}
                          </button>
                        );
                      })}

                      {/* Render grouped options */}
                      {filteredGroups.map((group) => (
                        <div key={group.label}>
                          {/* Group Header */}
                          <div className="px-4 py-2 text-xs font-semibold text-ink-500 uppercase tracking-wider bg-paper-50 border-t border-b border-paper-200">
                            {group.label}
                          </div>

                          {/* Group Options */}
                          {group.options.map((option) => {
                            const isSelected = option.value === value;

                            return (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => !option.disabled && handleSelect(option.value)}
                                disabled={option.disabled}
                                className={`
                                  w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors
                                  ${isSelected ? 'bg-accent-50 text-accent-900' : 'text-ink-700'}
                                  ${option.disabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-paper-50 cursor-pointer'}
                                `}
                                role="option"
                                aria-selected={isSelected}
                              >
                                <span className="flex items-center gap-2">
                                  {option.icon && <span>{option.icon}</span>}
                                  {option.label}
                                </span>
                                {isSelected && <Check className="h-4 w-4 text-accent-600" />}
                              </button>
                            );
                          })}
                        </div>
                      ))}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Helper Text or Error */}
      {error && (
        <p id={errorId} className="mt-2 text-xs text-error-600" role="alert" aria-live="assertive">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={helperTextId} className="mt-2 text-xs text-ink-600">
          {helperText}
        </p>
      )}
    </div>
  );
});

Select.displayName = 'Select';
export default Select;
