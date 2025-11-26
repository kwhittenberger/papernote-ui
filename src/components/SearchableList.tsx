import { useState, useMemo, useCallback, useRef, useEffect, ReactNode } from 'react';
import { Search } from 'lucide-react';
import Input from './Input';
import { Loader2 } from 'lucide-react';

export interface SearchableListItem<T = unknown> {
  key: string;
  data: T;
}

export interface SearchableListProps<T = unknown> {
  /** Array of items to display */
  items: SearchableListItem<T>[];
  
  // Search configuration
  /** Search input placeholder */
  searchPlaceholder?: string;
  /** Controlled search value */
  searchValue?: string;
  /** Callback when search changes */
  onSearchChange?: (value: string) => void;
  /** Custom filter function */
  filterFn?: (item: SearchableListItem<T>, searchTerm: string) => boolean;
  /** Debounce delay for search in ms */
  debounceMs?: number;
  
  // Item rendering
  /** Render function for each item */
  renderItem: (item: SearchableListItem<T>, index: number, isSelected: boolean, isHighlighted: boolean) => ReactNode;
  
  // Selection (optional)
  /** Currently selected item key */
  selectedKey?: string;
  /** Callback when item is selected */
  onSelect?: (item: SearchableListItem<T>) => void;
  
  // Display
  /** Maximum height with overflow scroll */
  maxHeight?: string | number;
  /** Show result count */
  showResultCount?: boolean;
  /** Result count format function */
  formatResultCount?: (count: number, total: number) => string;
  
  // Empty/Loading states
  /** Message when no items available */
  emptyMessage?: string | ReactNode;
  /** Message when search has no results */
  noResultsMessage?: string | ReactNode;
  /** Loading state */
  loading?: boolean;
  /** Loading message */
  loadingMessage?: string | ReactNode;
  
  // Styling
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Visual variant */
  variant?: 'default' | 'bordered' | 'card';
  /** Additional CSS classes */
  className?: string;
  
  // Keyboard navigation
  /** Enable keyboard navigation (arrow keys, enter) */
  enableKeyboardNavigation?: boolean;
  /** Auto-focus search input */
  autoFocus?: boolean;
}

const sizeClasses = {
  sm: {
    container: 'text-sm',
    item: 'py-1.5 px-2',
    searchPadding: 'p-2',
    statusPadding: 'px-2 py-1.5',
  },
  md: {
    container: 'text-sm',
    item: 'py-2 px-3',
    searchPadding: 'p-3',
    statusPadding: 'px-3 py-2',
  },
  lg: {
    container: 'text-base',
    item: 'py-3 px-4',
    searchPadding: 'p-4',
    statusPadding: 'px-4 py-2.5',
  },
};

const variantClasses = {
  default: 'bg-white',
  bordered: 'bg-white border border-paper-300 rounded-lg',
  card: 'bg-white border border-paper-300 rounded-lg shadow-sm',
};

/**
 * SearchableList - List component with integrated search/filter functionality
 * 
 * @example Basic usage
 * ```tsx
 * <SearchableList
 *   items={users.map(u => ({ key: u.id, data: u }))}
 *   renderItem={(item) => <div>{item.data.name}</div>}
 *   onSelect={(item) => setSelectedUser(item.data)}
 *   searchable
 *   searchPlaceholder="Search users..."
 * />
 * ```
 * 
 * @example With custom filter and loading
 * ```tsx
 * <SearchableList
 *   items={products}
 *   renderItem={(item, index, isSelected) => (
 *     <div className={isSelected ? 'bg-accent-50' : ''}>
 *       {item.data.name} - ${item.data.price}
 *     </div>
 *   )}
 *   filterFn={(item, term) => 
 *     item.data.name.toLowerCase().includes(term.toLowerCase())
 *   }
 *   loading={isLoading}
 *   loadingMessage="Fetching products..."
 *   maxHeight="400px"
 * />
 * ```
 */
export default function SearchableList<T = unknown>({
  items,
  searchPlaceholder = 'Search...',
  searchValue: controlledSearchValue,
  onSearchChange,
  filterFn,
  debounceMs = 150,
  renderItem,
  selectedKey,
  onSelect,
  maxHeight,
  showResultCount = false,
  formatResultCount,
  emptyMessage = 'No items available',
  noResultsMessage = 'No items match your search',
  loading = false,
  loadingMessage = 'Loading...',
  size = 'md',
  variant = 'default',
  className = '',
  enableKeyboardNavigation = true,
  autoFocus = false,
}: SearchableListProps<T>) {
  const [internalSearchValue, setInternalSearchValue] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const searchValue = controlledSearchValue !== undefined ? controlledSearchValue : internalSearchValue;

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchValue);
    }, debounceMs);
    return () => clearTimeout(timer);
  }, [searchValue, debounceMs]);

  const handleSearchChange = useCallback((value: string) => {
    if (controlledSearchValue === undefined) {
      setInternalSearchValue(value);
    }
    onSearchChange?.(value);
    setHighlightedIndex(-1);
  }, [controlledSearchValue, onSearchChange]);

  // Filter items based on search
  const filteredItems = useMemo(() => {
    if (!debouncedSearchTerm) return items;
    
    return items.filter(item => {
      if (filterFn) {
        return filterFn(item, debouncedSearchTerm);
      }
      // Default filter: check if key includes search term
      return item.key.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
    });
  }, [items, debouncedSearchTerm, filterFn]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!enableKeyboardNavigation || filteredItems.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < filteredItems.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : filteredItems.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < filteredItems.length) {
          onSelect?.(filteredItems[highlightedIndex]);
        }
        break;
      case 'Escape':
        setHighlightedIndex(-1);
        break;
    }
  }, [enableKeyboardNavigation, filteredItems, highlightedIndex, onSelect]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlightedIndex >= 0) {
      const itemEl = itemRefs.current.get(highlightedIndex);
      if (itemEl) {
        itemEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [highlightedIndex]);

  const sizeStyle = sizeClasses[size];

  const resultCountText = formatResultCount 
    ? formatResultCount(filteredItems.length, items.length)
    : `${filteredItems.length} of ${items.length}`;

  return (
    <div 
      className={`${variantClasses[variant]} ${sizeStyle.container} ${className}`}
      onKeyDown={handleKeyDown}
    >
      {/* Search Input */}
      <div className={`${sizeStyle.searchPadding} border-b border-paper-200`}>
        <Input
          value={searchValue}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          prefixIcon={<Search className="h-4 w-4" />}
          size={size === 'lg' ? 'md' : 'sm'}
          clearable
          onClear={() => handleSearchChange('')}
          autoFocus={autoFocus}
        />
      </div>

      {/* Result Count */}
      {showResultCount && items.length > 0 && !loading && (
        <div className={`${sizeStyle.statusPadding} text-ink-500 text-xs border-b border-paper-100`}>
          {resultCountText}
        </div>
      )}

      {/* List Content */}
      <div
        ref={listRef}
        className="overflow-y-auto"
        style={{ maxHeight: maxHeight || undefined }}
        role="listbox"
        aria-activedescendant={highlightedIndex >= 0 ? `item-${highlightedIndex}` : undefined}
      >
        {/* Loading State */}
        {loading && (
          <div className={`${sizeStyle.item} flex items-center justify-center gap-2 text-ink-500`}>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>{loadingMessage}</span>
          </div>
        )}

        {/* Empty State */}
        {!loading && items.length === 0 && (
          <div className={`${sizeStyle.item} text-ink-500 text-center`}>
            {emptyMessage}
          </div>
        )}

        {/* No Results */}
        {!loading && items.length > 0 && filteredItems.length === 0 && (
          <div className={`${sizeStyle.item} text-ink-500 text-center`}>
            {noResultsMessage}
          </div>
        )}

        {/* Items */}
        {!loading && filteredItems.map((item, index) => {
          const isSelected = selectedKey === item.key;
          const isHighlighted = highlightedIndex === index;

          return (
            <div
              key={item.key}
              id={`item-${index}`}
              ref={(el) => {
                if (el) {
                  itemRefs.current.set(index, el);
                } else {
                  itemRefs.current.delete(index);
                }
              }}
              role="option"
              aria-selected={isSelected}
              onClick={() => onSelect?.(item)}
              className={`
                ${sizeStyle.item}
                cursor-pointer transition-colors
                ${isSelected ? 'bg-accent-50' : ''}
                ${isHighlighted ? 'bg-paper-100' : ''}
                ${!isSelected && !isHighlighted ? 'hover:bg-paper-50' : ''}
                border-b border-paper-100 last:border-b-0
              `}
            >
              {renderItem(item, index, isSelected, isHighlighted)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
