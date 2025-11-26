import { useState, useMemo, useCallback } from 'react';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';
import Checkbox from './Checkbox';
import Input from './Input';

export interface CheckboxListItem<T = unknown> {
  key: string;
  label: string;
  description?: string;
  group?: string;
  disabled?: boolean;
  data?: T;
}

export interface CheckboxListProps<T = unknown> {
  /** Array of items to display */
  items: CheckboxListItem<T>[];
  /** Currently selected item keys */
  selectedKeys: string[];
  /** Callback when selection changes */
  onSelectionChange: (selectedKeys: string[]) => void;
  
  // Grouping
  /** Labels for groups (key -> display label) */
  groupLabels?: Record<string, string>;
  /** Keys of groups that should be expanded (controlled) */
  expandedGroups?: string[];
  /** Default expanded groups (uncontrolled) */
  defaultExpandedGroups?: string[];
  /** Callback when group expansion changes */
  onGroupToggle?: (groupKey: string, expanded: boolean) => void;
  
  // Search/Filter
  /** Enable search functionality */
  searchable?: boolean;
  /** Search input placeholder */
  searchPlaceholder?: string;
  /** Custom filter function */
  filterFn?: (item: CheckboxListItem<T>, searchTerm: string) => boolean;
  /** Debounce delay for search in ms */
  debounceMs?: number;
  
  // Display options
  /** Maximum height with overflow scroll */
  maxHeight?: string | number;
  /** Show select all checkbox */
  showSelectAll?: boolean;
  /** Select all label text */
  selectAllLabel?: string;
  /** Show count of selected items */
  showSelectedCount?: boolean;
  /** Message when no items available */
  emptyMessage?: string;
  /** Message when search has no results */
  noResultsMessage?: string;
  
  // Styling
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Visual variant */
  variant?: 'default' | 'bordered' | 'card';
  /** Additional CSS classes */
  className?: string;
}

const sizeClasses = {
  sm: {
    item: 'py-1.5 px-2',
    text: 'text-sm',
    description: 'text-xs',
    groupHeader: 'py-1.5 px-2 text-xs',
  },
  md: {
    item: 'py-2 px-3',
    text: 'text-sm',
    description: 'text-xs',
    groupHeader: 'py-2 px-3 text-xs',
  },
  lg: {
    item: 'py-3 px-4',
    text: 'text-base',
    description: 'text-sm',
    groupHeader: 'py-2.5 px-4 text-sm',
  },
};

const variantClasses = {
  default: 'bg-white',
  bordered: 'bg-white border border-paper-300 rounded-lg',
  card: 'bg-white border border-paper-300 rounded-lg shadow-sm',
};

/**
 * CheckboxList - Multi-select list with checkboxes, grouping, and search
 * 
 * @example Basic usage
 * ```tsx
 * <CheckboxList
 *   items={[
 *     { key: '1', label: 'Option 1' },
 *     { key: '2', label: 'Option 2' },
 *   ]}
 *   selectedKeys={selected}
 *   onSelectionChange={setSelected}
 * />
 * ```
 * 
 * @example With grouping and search
 * ```tsx
 * <CheckboxList
 *   items={fields}
 *   selectedKeys={selectedFields}
 *   onSelectionChange={setSelectedFields}
 *   groupLabels={{ table1: 'Users', table2: 'Orders' }}
 *   searchable
 *   searchPlaceholder="Search fields..."
 *   showSelectAll
 *   maxHeight="300px"
 * />
 * ```
 */
export default function CheckboxList<T = unknown>({
  items,
  selectedKeys,
  onSelectionChange,
  groupLabels = {},
  expandedGroups: controlledExpandedGroups,
  defaultExpandedGroups,
  onGroupToggle,
  searchable = false,
  searchPlaceholder = 'Search...',
  filterFn,
  debounceMs = 150,
  maxHeight,
  showSelectAll = false,
  selectAllLabel = 'Select All',
  showSelectedCount = false,
  emptyMessage = 'No items available',
  noResultsMessage = 'No items match your search',
  size = 'md',
  variant = 'default',
  className = '',
}: CheckboxListProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [internalExpandedGroups, setInternalExpandedGroups] = useState<Set<string>>(
    new Set(defaultExpandedGroups || [])
  );

  // Debounce search
  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(value);
    }, debounceMs);
    return () => clearTimeout(timer);
  }, [debounceMs]);

  // Filter items based on search
  const filteredItems = useMemo(() => {
    if (!debouncedSearchTerm) return items;
    
    const term = debouncedSearchTerm.toLowerCase();
    return items.filter(item => {
      if (filterFn) {
        return filterFn(item, debouncedSearchTerm);
      }
      return (
        item.label.toLowerCase().includes(term) ||
        item.description?.toLowerCase().includes(term) ||
        item.key.toLowerCase().includes(term)
      );
    });
  }, [items, debouncedSearchTerm, filterFn]);

  // Group items
  const groupedItems = useMemo(() => {
    const groups = new Map<string | null, CheckboxListItem<T>[]>();
    
    filteredItems.forEach(item => {
      const groupKey = item.group || null;
      if (!groups.has(groupKey)) {
        groups.set(groupKey, []);
      }
      groups.get(groupKey)!.push(item);
    });
    
    return groups;
  }, [filteredItems]);

  // Determine expanded groups
  const expandedGroups = controlledExpandedGroups 
    ? new Set(controlledExpandedGroups)
    : internalExpandedGroups;

  const handleGroupToggle = (groupKey: string) => {
    const newExpanded = !expandedGroups.has(groupKey);
    
    if (!controlledExpandedGroups) {
      setInternalExpandedGroups(prev => {
        const next = new Set(prev);
        if (newExpanded) {
          next.add(groupKey);
        } else {
          next.delete(groupKey);
        }
        return next;
      });
    }
    
    onGroupToggle?.(groupKey, newExpanded);
  };

  // Selection handlers
  const handleItemToggle = (key: string) => {
    const newSelected = selectedKeys.includes(key)
      ? selectedKeys.filter(k => k !== key)
      : [...selectedKeys, key];
    onSelectionChange(newSelected);
  };

  const handleSelectAll = () => {
    const enabledItems = filteredItems.filter(item => !item.disabled);
    const allSelected = enabledItems.every(item => selectedKeys.includes(item.key));
    
    if (allSelected) {
      // Deselect all filtered items
      const filteredKeys = new Set(enabledItems.map(item => item.key));
      onSelectionChange(selectedKeys.filter(key => !filteredKeys.has(key)));
    } else {
      // Select all filtered items
      const newKeys = new Set([...selectedKeys, ...enabledItems.map(item => item.key)]);
      onSelectionChange(Array.from(newKeys));
    }
  };

  const sizeStyle = sizeClasses[size];
  const enabledItems = filteredItems.filter(item => !item.disabled);
  const allSelected = enabledItems.length > 0 && enabledItems.every(item => selectedKeys.includes(item.key));
  const someSelected = enabledItems.some(item => selectedKeys.includes(item.key)) && !allSelected;

  // Check if we have groups
  const hasGroups = groupedItems.size > 1 || (groupedItems.size === 1 && !groupedItems.has(null));

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {/* Search Input */}
      {searchable && (
        <div className={`${sizeStyle.item} border-b border-paper-200`}>
          <Input
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder={searchPlaceholder}
            prefixIcon={<Search className="h-4 w-4" />}
            size={size === 'lg' ? 'md' : 'sm'}
            clearable
            onClear={() => {
              setSearchTerm('');
              setDebouncedSearchTerm('');
            }}
          />
        </div>
      )}

      {/* Select All & Count */}
      {(showSelectAll || showSelectedCount) && filteredItems.length > 0 && (
        <div className={`${sizeStyle.item} border-b border-paper-200 flex items-center justify-between`}>
          {showSelectAll && (
            <Checkbox
              checked={allSelected}
              indeterminate={someSelected}
              onChange={handleSelectAll}
              label={selectAllLabel}
              size={size}
            />
          )}
          {showSelectedCount && (
            <span className={`${sizeStyle.description} text-ink-500`}>
              {selectedKeys.length} selected
            </span>
          )}
        </div>
      )}

      {/* List Content */}
      <div
        className="overflow-y-auto"
        style={{ maxHeight: maxHeight || undefined }}
      >
        {/* Empty State */}
        {items.length === 0 && (
          <div className={`${sizeStyle.item} text-ink-500 ${sizeStyle.text} text-center`}>
            {emptyMessage}
          </div>
        )}

        {/* No Results */}
        {items.length > 0 && filteredItems.length === 0 && (
          <div className={`${sizeStyle.item} text-ink-500 ${sizeStyle.text} text-center`}>
            {noResultsMessage}
          </div>
        )}

        {/* Grouped Items */}
        {hasGroups ? (
          Array.from(groupedItems.entries()).map(([groupKey, groupItems]) => {
            if (groupKey === null) {
              // Ungrouped items
              return groupItems.map(item => (
                <CheckboxListItemRow
                  key={item.key}
                  item={item}
                  selected={selectedKeys.includes(item.key)}
                  onToggle={() => handleItemToggle(item.key)}
                  size={size}
                  sizeStyle={sizeStyle}
                />
              ));
            }

            const isExpanded = expandedGroups.has(groupKey);
            const groupLabel = groupLabels[groupKey] || groupKey;
            const groupSelectedCount = groupItems.filter(item => selectedKeys.includes(item.key)).length;

            return (
              <div key={groupKey}>
                {/* Group Header */}
                <button
                  type="button"
                  onClick={() => handleGroupToggle(groupKey)}
                  className={`
                    w-full flex items-center justify-between
                    ${sizeStyle.groupHeader}
                    font-medium text-ink-700 bg-paper-50
                    hover:bg-paper-100 transition-colors
                    border-b border-paper-200
                  `}
                >
                  <div className="flex items-center gap-2">
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4 text-ink-400" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-ink-400" />
                    )}
                    <span>{groupLabel}</span>
                  </div>
                  <span className="text-ink-400 font-normal">
                    {groupSelectedCount > 0 && `${groupSelectedCount}/`}{groupItems.length}
                  </span>
                </button>

                {/* Group Items */}
                {isExpanded && (
                  <div>
                    {groupItems.map(item => (
                      <CheckboxListItemRow
                        key={item.key}
                        item={item}
                        selected={selectedKeys.includes(item.key)}
                        onToggle={() => handleItemToggle(item.key)}
                        size={size}
                        sizeStyle={sizeStyle}
                        indented
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          // Flat list (no groups)
          filteredItems.map(item => (
            <CheckboxListItemRow
              key={item.key}
              item={item}
              selected={selectedKeys.includes(item.key)}
              onToggle={() => handleItemToggle(item.key)}
              size={size}
              sizeStyle={sizeStyle}
            />
          ))
        )}
      </div>
    </div>
  );
}

// Helper component for rendering individual items
function CheckboxListItemRow<T>({
  item,
  selected,
  onToggle,
  size,
  sizeStyle,
  indented = false,
}: {
  item: CheckboxListItem<T>;
  selected: boolean;
  onToggle: () => void;
  size: 'sm' | 'md' | 'lg';
  sizeStyle: typeof sizeClasses['md'];
  indented?: boolean;
}) {
  return (
    <div
      className={`
        ${sizeStyle.item}
        ${indented ? 'pl-8' : ''}
        hover:bg-paper-50 transition-colors
        border-b border-paper-100 last:border-b-0
        ${item.disabled ? 'opacity-50' : ''}
      `}
    >
      <div className="flex items-start gap-3">
        <Checkbox
          checked={selected}
          onChange={onToggle}
          disabled={item.disabled}
          size={size}
        />
        <div className="flex flex-col flex-1 min-w-0">
          <span className={sizeStyle.text}>{item.label}</span>
          {item.description && (
            <span className={`${sizeStyle.description} text-ink-500`}>
              {item.description}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
