// DataTableCardView - Mobile-friendly card-based view for data tables
// Renders each row as a card with configurable primary/secondary fields

import React from 'react';
import { MoreVertical, ChevronRight } from 'lucide-react';
import { BaseDataItem, DataTableColumn, DataTableAction } from './DataTable';
import Checkbox from './Checkbox';

/**
 * Configuration for how data should display in card view
 */
export interface CardViewConfig<T> {
  /** Column key to use as the main title */
  titleKey: keyof T | string;
  /** Column key to use as subtitle (optional) */
  subtitleKey?: keyof T | string;
  /** Column keys to show as metadata rows */
  metadataKeys?: (keyof T | string)[];
  /** Column key to use for badge/status display */
  badgeKey?: keyof T | string;
  /** Column key for avatar/image (renders circular image) */
  avatarKey?: keyof T | string;
  /** Custom render function for entire card content */
  renderCard?: (item: T, columns: DataTableColumn<T>[]) => React.ReactNode;
  /** Show chevron indicator for clickable cards */
  showChevron?: boolean;
}

export interface DataTableCardViewProps<T extends BaseDataItem> {
  /** Data items to display */
  data: T[];
  /** Column definitions (used for rendering values and getting column info) */
  columns: DataTableColumn<T>[];
  /** Card view configuration */
  cardConfig?: CardViewConfig<T>;
  /** Loading state */
  loading?: boolean;
  /** Number of skeleton cards to show while loading */
  loadingRows?: number;
  /** Empty state message */
  emptyMessage?: string;
  /** Click handler for card tap */
  onCardClick?: (item: T) => void;
  /** Long press / context menu handler */
  onCardLongPress?: (item: T, event: React.TouchEvent | React.MouseEvent) => void;
  /** Enable selection mode */
  selectable?: boolean;
  /** Currently selected row keys */
  selectedRows?: Set<string>;
  /** Selection change handler */
  onSelectionChange?: (selectedRows: string[]) => void;
  /** Function to extract unique key from row */
  keyExtractor?: (row: T) => string;
  /** Row actions (shown in action menu) */
  actions?: DataTableAction<T>[];
  /** Built-in edit handler */
  onEdit?: (item: T) => void;
  /** Built-in delete handler */
  onDelete?: (item: T) => void;
  /** Additional CSS classes */
  className?: string;
  /** Custom card class name */
  cardClassName?: string;
  /** Gap between cards */
  gap?: 'sm' | 'md' | 'lg';
}

/**
 * Get value from item by key path (supports nested keys like 'user.name')
 */
function getValueByKey<T>(item: T, key: keyof T | string): any {
  if (typeof key !== 'string') {
    return item[key];
  }
  
  const keys = key.split('.');
  let value: any = item;
  for (const k of keys) {
    if (value == null) return undefined;
    value = value[k];
  }
  return value;
}

/**
 * Skeleton card for loading state
 */
function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white rounded-lg border border-paper-200 p-4 animate-pulse ${className}`}>
      <div className="flex items-start gap-3">
        {/* Avatar skeleton */}
        <div className="w-10 h-10 rounded-full bg-paper-200 flex-shrink-0" />
        
        <div className="flex-1 min-w-0">
          {/* Title skeleton */}
          <div className="h-5 bg-paper-200 rounded w-3/4 mb-2" />
          {/* Subtitle skeleton */}
          <div className="h-4 bg-paper-100 rounded w-1/2 mb-3" />
          {/* Metadata skeleton */}
          <div className="space-y-2">
            <div className="h-3 bg-paper-100 rounded w-2/3" />
            <div className="h-3 bg-paper-100 rounded w-1/2" />
          </div>
        </div>
        
        {/* Badge skeleton */}
        <div className="h-6 w-16 bg-paper-200 rounded-full" />
      </div>
    </div>
  );
}

/**
 * DataTableCardView - Mobile-friendly card view for data tables
 *
 * Renders data as cards instead of table rows, optimized for touch interaction.
 * Automatically uses column render functions for consistent data display.
 *
 * @example Basic usage
 * ```tsx
 * <DataTableCardView
 *   data={users}
 *   columns={columns}
 *   cardConfig={{
 *     titleKey: 'name',
 *     subtitleKey: 'email',
 *     metadataKeys: ['department', 'role'],
 *     badgeKey: 'status',
 *   }}
 *   onCardClick={(user) => navigate(`/users/${user.id}`)}
 * />
 * ```
 *
 * @example With selection
 * ```tsx
 * <DataTableCardView
 *   data={orders}
 *   columns={columns}
 *   cardConfig={{
 *     titleKey: 'orderNumber',
 *     subtitleKey: 'customer',
 *     badgeKey: 'status',
 *   }}
 *   selectable
 *   selectedRows={selectedOrders}
 *   onSelectionChange={setSelectedOrders}
 * />
 * ```
 */
export function DataTableCardView<T extends BaseDataItem>({
  data,
  columns,
  cardConfig,
  loading = false,
  loadingRows = 5,
  emptyMessage = 'No items to display',
  onCardClick,
  onCardLongPress,
  selectable = false,
  selectedRows = new Set(),
  onSelectionChange,
  keyExtractor = (row) => String(row.id),
  actions,
  onEdit,
  onDelete,
  className = '',
  cardClassName = '',
  gap = 'md',
}: DataTableCardViewProps<T>) {
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4',
  };

  // Find column by key to use its render function
  const getColumn = (key: keyof T | string): DataTableColumn<T> | undefined => {
    return columns.find(col => col.key === key);
  };

  // Render a value using column's render function if available
  const renderValue = (item: T, key: keyof T | string): React.ReactNode => {
    const column = getColumn(key);
    const value = getValueByKey(item, key);
    
    if (column?.render) {
      return column.render(item, value);
    }
    
    if (value == null) return '-';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (value instanceof Date) return value.toLocaleDateString();
    return String(value);
  };

  // Handle card selection toggle
  const handleSelectionToggle = (item: T, event: React.MouseEvent) => {
    event.stopPropagation();
    const key = keyExtractor(item);
    const newSelected = new Set(selectedRows);
    
    if (newSelected.has(key)) {
      newSelected.delete(key);
    } else {
      newSelected.add(key);
    }
    
    onSelectionChange?.(Array.from(newSelected));
  };

  // Handle card click
  const handleCardClick = (item: T) => {
    if (selectable && selectedRows.size > 0) {
      // If in selection mode, toggle selection instead
      const key = keyExtractor(item);
      const newSelected = new Set(selectedRows);
      if (newSelected.has(key)) {
        newSelected.delete(key);
      } else {
        newSelected.add(key);
      }
      onSelectionChange?.(Array.from(newSelected));
    } else {
      onCardClick?.(item);
    }
  };

  // Handle long press for context actions
  const handleLongPress = (item: T, event: React.TouchEvent | React.MouseEvent) => {
    onCardLongPress?.(item, event);
  };

  // Loading state
  if (loading) {
    return (
      <div className={`flex flex-col ${gapClasses[gap]} ${className}`}>
        {Array.from({ length: loadingRows }).map((_, i) => (
          <SkeletonCard key={i} className={cardClassName} />
        ))}
      </div>
    );
  }

  // Empty state
  if (data.length === 0) {
    return (
      <div className={`flex items-center justify-center py-12 px-4 ${className}`}>
        <p className="text-ink-500 text-center">{emptyMessage}</p>
      </div>
    );
  }

  // Determine default card config if not provided
  const config: CardViewConfig<T> = cardConfig || {
    titleKey: columns[0]?.key || 'id',
    subtitleKey: columns[1]?.key,
    metadataKeys: columns.slice(2, 5).map(c => c.key),
  };

  return (
    <div className={`flex flex-col ${gapClasses[gap]} ${className}`}>
      {data.map((item) => {
        const key = keyExtractor(item);
        const isSelected = selectedRows.has(key);
        
        // Custom card render
        if (config.renderCard) {
          return (
            <div
              key={key}
              onClick={() => handleCardClick(item)}
              onContextMenu={(e) => {
                e.preventDefault();
                handleLongPress(item, e);
              }}
              className={`
                cursor-pointer transition-all duration-200
                ${isSelected ? 'ring-2 ring-accent-500' : ''}
                ${cardClassName}
              `}
            >
              {config.renderCard(item, columns)}
            </div>
          );
        }

        // Default card layout
        const titleColumn = getColumn(config.titleKey);
        const titleValue = getValueByKey(item, config.titleKey);
        
        return (
          <div
            key={key}
            onClick={() => handleCardClick(item)}
            onContextMenu={(e) => {
              e.preventDefault();
              handleLongPress(item, e);
            }}
            className={`
              bg-white rounded-lg border border-paper-200 p-4
              transition-all duration-200 cursor-pointer
              active:scale-[0.98] active:bg-paper-50
              ${isSelected ? 'ring-2 ring-accent-500 bg-accent-50/30' : 'hover:shadow-md hover:border-paper-300'}
              ${cardClassName}
            `}
          >
            <div className="flex items-start gap-3">
              {/* Selection checkbox */}
              {selectable && (
                <div 
                  className="flex-shrink-0 pt-0.5"
                  onClick={(e) => handleSelectionToggle(item, e)}
                >
                  <Checkbox
                    checked={isSelected}
                    onChange={() => {}}
                  />
                </div>
              )}

              {/* Avatar (if configured) */}
              {config.avatarKey && (
                <div className="flex-shrink-0">
                  {(() => {
                    const avatarValue = getValueByKey(item, config.avatarKey!);
                    if (typeof avatarValue === 'string' && avatarValue.startsWith('http')) {
                      return (
                        <img
                          src={avatarValue}
                          alt=""
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      );
                    }
                    // Render initials or placeholder
                    const initials = String(titleValue || '').slice(0, 2).toUpperCase();
                    return (
                      <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center text-accent-700 font-medium text-sm">
                        {initials}
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Main content */}
              <div className="flex-1 min-w-0">
                {/* Title */}
                <div className="font-medium text-ink-900 truncate">
                  {titleColumn?.render 
                    ? titleColumn.render(item, titleValue)
                    : String(titleValue || '-')
                  }
                </div>

                {/* Subtitle */}
                {config.subtitleKey && (
                  <div className="text-sm text-ink-500 truncate mt-0.5">
                    {renderValue(item, config.subtitleKey)}
                  </div>
                )}

                {/* Metadata rows */}
                {config.metadataKeys && config.metadataKeys.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {config.metadataKeys.map((metaKey) => {
                      const column = getColumn(metaKey);
                      return (
                        <div key={String(metaKey)} className="flex items-center text-xs">
                          <span className="text-ink-400 w-20 flex-shrink-0 truncate">
                            {column?.header || String(metaKey)}:
                          </span>
                          <span className="text-ink-600 truncate">
                            {renderValue(item, metaKey)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right side: Badge and/or actions */}
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                {/* Badge/Status */}
                {config.badgeKey && (
                  <div>
                    {renderValue(item, config.badgeKey)}
                  </div>
                )}

                {/* Chevron indicator */}
                {config.showChevron && onCardClick && (
                  <ChevronRight className="h-5 w-5 text-ink-300" />
                )}

                {/* Actions menu trigger */}
                {(actions || onEdit || onDelete) && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLongPress(item, e);
                    }}
                    className="p-1 rounded hover:bg-paper-100 text-ink-400 hover:text-ink-600 -mr-1"
                  >
                    <MoreVertical className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DataTableCardView;
