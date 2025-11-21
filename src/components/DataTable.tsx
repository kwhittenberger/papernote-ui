
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, ChevronRight, MoreVertical, Edit, Trash } from 'lucide-react';

/**
 * Base data item interface - all data items must have an id
 */
export interface BaseDataItem {
  id: string | number;
  [key: string]: unknown;
}

/**
 * Column configuration for DataTable
 */
export interface DataTableColumn<T> {
  key: keyof T | string;
  header: string;
  width?: string | number;      // '120px', '15%', '1fr', 120
  minWidth?: string | number;   // '100px', 100
  maxWidth?: string | number;   // '300px', 300
  flex?: number;                // flex-grow value
  render?: (item: T, value: any) => React.ReactNode;
  renderSecondary?: (item: T, value: any) => React.ReactNode; // Secondary line content (smaller, muted)
  sortable?: boolean;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

/**
 * Sort configuration
 */
export interface SortConfig {
  key: string;
  direction: 'asc' | 'desc';
  label?: string;
}

/**
 * Row action configuration for DataTable
 * Defines buttons that appear in the sticky actions column
 */
export interface DataTableAction<T> {
  /** Button label text */
  label: string;
  /** Optional icon - can be component reference or JSX element */
  icon?: React.ComponentType<any> | React.ReactNode;
  /** Click handler receives the row item */
  onClick: (item: T) => void;
  /** Button styling variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Optional conditional visibility */
  show?: (item: T) => boolean;
  /** Optional tooltip text */
  tooltip?: string;
}

/**
 * Expansion mode types
 */
export type ExpansionMode = 'edit' | 'details' | string; // string allows 'addRelated-[key]' | 'manageRelated-[key]'

/**
 * Configuration for different expansion modes
 */
export interface ExpandedRowConfig<T> {
  /** Edit mode - inline editing of the record */
  edit?: {
    render: (item: T, onSave: (updated: T) => Promise<void>, onCancel: () => void) => React.ReactNode;
    triggerOnDoubleClick?: boolean; // Default: true
    menuLabel?: string; // Default: 'Edit'
    menuIcon?: React.ComponentType<any>;
  };
  
  /** View details mode - read-only expanded view */
  details?: {
    render: (item: T) => React.ReactNode;
    triggerOnExpand?: boolean; // Default: true (when clicking chevron)
    triggerOnDoubleClick?: boolean; // Default: false
    menuLabel?: string; // Default: 'View Details'
    menuIcon?: React.ComponentType<any>;
  };
  
  /** Add related modes - creating related records */
  addRelated?: Array<{
    key: string; // Unique identifier for this add related mode
    label: string; // e.g., 'Add Line Item', 'Add Contact'
    icon?: React.ComponentType<any>;
    render: (parentItem: T, onSave: (newItem: any) => Promise<void>, onCancel: () => void) => React.ReactNode;
    showInMenu?: boolean; // Default: true
  }>;
  
  /** Manage related modes - viewing/editing related records */
  manageRelated?: Array<{
    key: string; // Unique identifier for this manage related mode
    label: string; // e.g., 'Manage Contacts', 'Manage Assignments'
    icon?: React.ComponentType<any>;
    render: (parentItem: T, onClose: () => void) => React.ReactNode;
    showInMenu?: boolean; // Default: true
  }>;
}

/**
 * Expansion state - tracks which row is expanded and in what mode
 */
interface ExpansionState {
  rowKey: string;
  mode: ExpansionMode;
}

interface DataTableProps<T extends BaseDataItem = BaseDataItem> {
  data: T[];
  columns: DataTableColumn<T>[];
  loading?: boolean;
  error?: string | null;
  emptyMessage?: string;
  loadingRows?: number;
  className?: string;
  onSortChange?: (sort: SortConfig | null) => void;
  currentSort?: SortConfig | null;
  /** Built-in edit handler - adds Edit action to menu */
  onEdit?: (item: T) => void | Promise<void>;
  /** Built-in delete handler - adds Delete action to menu */
  onDelete?: (item: T) => void | Promise<void>;
  /** Optional custom row actions (in addition to edit/delete) */
  actions?: DataTableAction<T>[];
  /** Optional click handler for rows */
  onRowClick?: (item: T) => void;
  /** Optional double-click handler for rows */
  onRowDoubleClick?: (item: T) => void;
  /** Enable row selection with checkboxes */
  selectable?: boolean;
  /** Controlled selected rows (set of row keys) */
  selectedRows?: Set<string>;
  /** Selection change callback */
  onRowSelect?: (selectedRows: string[]) => void;
  /** Function to extract unique key from row (defaults to row.id) */
  keyExtractor?: (row: T) => string;
  /** Enable row expansion (legacy - use expandedRowConfig instead) */
  expandable?: boolean;
  /** Controlled expanded rows (legacy - set of row keys) */
  expandedRows?: Set<string>;
  /** Render function for expanded row content (legacy - use expandedRowConfig instead) */
  renderExpandedRow?: (row: T) => React.ReactNode;
  /** NEW: Enhanced expansion configuration with multiple modes */
  expandedRowConfig?: ExpandedRowConfig<T>;
  /** Show the expand chevron column - hidden by default when using expandedRowConfig with double-click or menu */
  showExpandChevron?: boolean;

  // Visual customization props
  /** Enable zebra striping - true for default, 'odd' or 'even' for specific rows */
  striped?: boolean | 'odd' | 'even';
  /** Custom color for striped rows (Tailwind class like 'bg-primary-50' or 'bg-accent-50') */
  stripedColor?: string;
  /** Row density - affects padding and text size */
  density?: 'compact' | 'normal' | 'comfortable';
  /** Custom class name for rows - static string or function returning class per row */
  rowClassName?: string | ((item: T, index: number) => string);
  /** Conditional row highlighting - returns color class (e.g., 'bg-warning-50') */
  rowHighlight?: (item: T) => string | undefined;
  /** ID of a single row to highlight */
  highlightedRowId?: string | number;
  /** Enable cell borders */
  bordered?: boolean;
  /** Custom border color (Tailwind class like 'border-paper-200') */
  borderColor?: string;
  /** Disable hover effect on rows */
  disableHover?: boolean;
  /** Array of column keys to hide */
  hiddenColumns?: string[];
  /** Custom header class name */
  headerClassName?: string;
  /** Custom empty state render function */
  renderEmptyState?: () => React.ReactNode;
  /** Enable column resizing */
  resizable?: boolean;
  /** Callback when column widths change */
  onColumnResize?: (columnKey: string, width: number) => void;
  /** Enable column reordering */
  reorderable?: boolean;
  /** Callback when column order changes */
  onColumnReorder?: (newOrder: string[]) => void;
  /** Enable virtual scrolling for large datasets */
  virtualized?: boolean;
  /** Container height for virtual scrolling (default: '600px') */
  virtualHeight?: string;
  /** Row height for virtual scrolling (default: 60) */
  virtualRowHeight?: number;
}

/**
 * ActionMenu - Inline dropdown menu for row actions
 */
function ActionMenu<T>({
  actions,
  item,
}: {
  actions: DataTableAction<T>[];
  item: T;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Update position when menu opens
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const menuWidth = 224; // 224px = w-56 (14rem * 16px)

      let left = rect.right - menuWidth;
      let top = rect.bottom + 4; // 4px below button (mt-1)

      // Ensure menu doesn't go off-screen to the left
      if (left < 8) {
        left = 8;
      }

      // Ensure menu doesn't go off-screen to the right
      if (left + menuWidth > window.innerWidth) {
        left = window.innerWidth - menuWidth - 8;
      }

      // Ensure menu doesn't go off-screen vertically
      const estimatedMenuHeight = 150; // rough estimate
      if (top + estimatedMenuHeight > window.innerHeight) {
        top = rect.top - estimatedMenuHeight - 4;
      }

      setPosition({ top, left });
    }
  }, [isOpen]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const visibleActions = actions.filter(action => !action.show || action.show(item));

  if (visibleActions.length === 0) return null;

  const dropdownContent = isOpen && (
    <div 
      ref={menuRef}
      className="fixed w-56 bg-white rounded-lg shadow-lg border border-paper-300 py-1" 
      style={{
        zIndex: 999999,
        top: `${position.top}px`,
        left: `${position.left}px`
      }}
    >
      {visibleActions.map((action, idx) => {
        let iconElement: React.ReactNode = null;
        if (action.icon) {
          if (React.isValidElement(action.icon)) {
            iconElement = action.icon;
          } else {
            iconElement = React.createElement(action.icon as any, { className: 'h-4 w-4 flex-shrink-0' });
          }
        }
        
        return (
          <button
            key={idx}
            type="button"
            onClick={async (e) => {
              e.stopPropagation();
              e.preventDefault();
              try {
                await action.onClick(item);
              } catch (error) {
                console.error('DataTable action error:', error);
              }
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
              action.variant === 'danger'
                ? 'text-error-600 hover:bg-error-50 hover:text-error-700'
                : 'text-ink-700 hover:bg-paper-50'
            }`}
            title={action.tooltip}
          >
            {iconElement}
            <span className="flex-1 text-left">{action.label}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <>
      <button
        ref={buttonRef}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center justify-center w-7 h-7 text-ink-600 hover:text-ink-900 hover:bg-paper-100 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent-400"
        style={{ padding: 0 }}
        aria-label="Actions"
      >
        <MoreVertical className="h-5 w-5" />
      </button>
      {dropdownContent && createPortal(dropdownContent, document.body)}
    </>
  );
}

/**
 * Helper function to generate column styles from width configuration
 */
function getColumnStyle<T>(column: DataTableColumn<T>, dynamicWidth?: number): React.CSSProperties {
  const style: React.CSSProperties = {};
  
  // Use dynamic width if provided (from resizing)
  if (dynamicWidth !== undefined) {
    style.width = `${dynamicWidth}px`;
  } else if (column.width !== undefined) {
    style.width = typeof column.width === 'number' ? `${column.width}px` : column.width;
  }
  
  if (column.minWidth !== undefined) {
    style.minWidth = typeof column.minWidth === 'number' ? `${column.minWidth}px` : column.minWidth;
  }
  
  if (column.maxWidth !== undefined) {
    style.maxWidth = typeof column.maxWidth === 'number' ? `${column.maxWidth}px` : column.maxWidth;
  }
  
  if (column.flex !== undefined) {
    style.flexGrow = column.flex;
    style.flexShrink = 1;
    style.flexBasis = 0;
  }
  
  if (column.align) {
    style.textAlign = column.align;
  }
  
  return style;
}

/**
 * DataTable - Feature-rich data table component
 * 
 * Features:
 * - Column sorting with visual indicators (3-state: asc → desc → none)
 * - Loading states (skeleton + overlay)
 * - Empty and error states
 * - Row actions with sticky column
 * - Row selection with checkboxes (individual + select all)
 * - Row expansion with custom content
 * - Click and double-click handlers
 * - Sticky header and action columns
 * - Fixed layout for stability
 * - Custom cell rendering
 * - Controlled or uncontrolled selection and expansion
 * - Column width configuration (width, minWidth, maxWidth, flex)
 * 
 * @example
 * ```tsx
 * const columns: DataTableColumn<User>[] = [
 *   { key: 'name', header: 'Name', sortable: true, width: '200px', minWidth: '150px' },
 *   { key: 'email', header: 'Email', sortable: true, width: '250px' },
 *   { key: 'role', header: 'Role', width: '120px' },
 * ];
 * 
 * const actions: DataTableAction<User>[] = [
 *   { label: 'Edit', icon: Edit, onClick: handleEdit },
 *   { label: 'Delete', icon: Trash, onClick: handleDelete, variant: 'danger' },
 * ];
 * 
 * <DataTable
 *   data={users}
 *   columns={columns}
 *   loading={loading}
 *   actions={actions}
 *   onSortChange={setSort}
 *   onRowDoubleClick={handleRowDoubleClick}
 *   selectable
 *   onRowSelect={handleSelection}
 *   expandable
 *   renderExpandedRow={(user) => <UserDetails user={user} />}
 * />
 * ```
 */
export default function DataTable<T extends BaseDataItem = BaseDataItem>({
  data,
  columns,
  loading = false,
  error = null,
  emptyMessage = 'No data available',
  loadingRows = 5,
  className = '',
  onSortChange,
  currentSort = null,
  onEdit,
  onDelete,
  actions = [],
  onRowClick,
  onRowDoubleClick,
  selectable = false,
  selectedRows: externalSelectedRows,
  onRowSelect,
  keyExtractor,
  expandable = false,
  expandedRows: externalExpandedRows,
  renderExpandedRow,
  expandedRowConfig,
  showExpandChevron = false,
  // Visual customization props
  striped = false,
  stripedColor,
  density = 'normal',
  rowClassName,
  rowHighlight,
  highlightedRowId,
  bordered = false,
  borderColor = 'border-paper-200',
  disableHover = false,
  hiddenColumns = [],
  headerClassName = '',
  renderEmptyState: customRenderEmptyState,
  resizable = false,
  onColumnResize,
  reorderable = false,
  onColumnReorder,
  virtualized = false,
  virtualHeight = '600px',
  virtualRowHeight = 60,
}: DataTableProps<T>) {
  // Column resizing state
  const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
  const [resizingColumn, setResizingColumn] = useState<string | null>(null);
  const [resizeStartX, setResizeStartX] = useState<number>(0);
  const [resizeStartWidth, setResizeStartWidth] = useState<number>(0);

  // Column reordering state
  const [columnOrder, setColumnOrder] = useState<string[]>([]);
  const [draggingColumn, setDraggingColumn] = useState<string | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<string | null>(null);

  // Virtual scrolling state
  const [scrollTop, setScrollTop] = useState(0);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  // Filter columns based on hiddenColumns
  const baseVisibleColumns = columns.filter(
    col => !hiddenColumns.includes(String(col.key))
  );

  // Initialize column order on mount or when columns change
  useEffect(() => {
    if (columnOrder.length === 0) {
      setColumnOrder(baseVisibleColumns.map(col => String(col.key)));
    }
  }, [baseVisibleColumns, columnOrder.length]);

  // Apply column order
  const visibleColumns = reorderable && columnOrder.length > 0
    ? columnOrder
        .map(key => baseVisibleColumns.find(col => String(col.key) === key))
        .filter((col): col is DataTableColumn<T> => col !== undefined)
    : baseVisibleColumns;

  // Density classes
  const densityClasses = {
    compact: {
      cell: 'px-3 py-1',
      text: 'text-xs',
      header: 'px-3 py-2',
    },
    normal: {
      cell: 'px-6 py-1.5',
      text: 'text-sm',
      header: 'px-6 py-3',
    },
    comfortable: {
      cell: 'px-6 py-3',
      text: 'text-base',
      header: 'px-6 py-4',
    },
  };

  const currentDensity = densityClasses[density];

  // Key extractor function - defined early for use in other functions
  const getRowKey = keyExtractor || ((row: T) => String(row.id));

  // Get row background class based on striping and highlighting
  const getRowBackgroundClass = (item: T, index: number): string => {
    const classes: string[] = [];

    // Check for highlighted row
    if (highlightedRowId !== undefined && getRowKey(item) === String(highlightedRowId)) {
      classes.push('bg-accent-100');
    }
    // Check for custom row highlight
    else if (rowHighlight) {
      const highlightClass = rowHighlight(item);
      if (highlightClass) {
        classes.push(highlightClass);
      }
    }
    // Check for striping
    else if (striped) {
      const isOdd = index % 2 === 0; // 0-indexed, so even index = odd row
      const shouldStripe =
        striped === true ? isOdd :
        striped === 'odd' ? isOdd :
        striped === 'even' ? !isOdd :
        false;

      if (shouldStripe) {
        classes.push(stripedColor || 'bg-paper-50');
      }
    }

    // Add custom row class
    if (rowClassName) {
      if (typeof rowClassName === 'string') {
        classes.push(rowClassName);
      } else {
        classes.push(rowClassName(item, index));
      }
    }

    return classes.join(' ');
  };
  // NEW: Expansion mode state management (for expandedRowConfig)
  const [expansionState, setExpansionState] = useState<ExpansionState | null>(null);

  // Column resize handlers
  const handleResizeStart = (e: React.MouseEvent, columnKey: string, currentWidth: number) => {
    e.preventDefault();
    e.stopPropagation();
    setResizingColumn(columnKey);
    setResizeStartX(e.clientX);
    setResizeStartWidth(currentWidth);
  };

  // Column reorder handlers
  const handleDragStart = (e: React.DragEvent, columnKey: string) => {
    setDraggingColumn(columnKey);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', columnKey);
  };

  const handleDragOver = (e: React.DragEvent, columnKey: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (draggingColumn && draggingColumn !== columnKey) {
      setDragOverColumn(columnKey);
    }
  };

  const handleDragEnd = () => {
    setDraggingColumn(null);
    setDragOverColumn(null);
  };

  const handleDrop = (e: React.DragEvent, targetColumnKey: string) => {
    e.preventDefault();
    if (!draggingColumn || draggingColumn === targetColumnKey) return;

    const newOrder = [...columnOrder];
    const dragIndex = newOrder.indexOf(draggingColumn);
    const dropIndex = newOrder.indexOf(targetColumnKey);

    // Remove from old position
    newOrder.splice(dragIndex, 1);
    // Insert at new position
    newOrder.splice(dropIndex, 0, draggingColumn);

    setColumnOrder(newOrder);
    onColumnReorder?.(newOrder);
    setDraggingColumn(null);
    setDragOverColumn(null);
  };

  useEffect(() => {
    if (!resizingColumn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const delta = e.clientX - resizeStartX;
      const newWidth = Math.max(50, resizeStartWidth + delta); // Min width 50px
      setColumnWidths(prev => ({
        ...prev,
        [resizingColumn]: newWidth,
      }));
    };

    const handleMouseUp = () => {
      if (resizingColumn && columnWidths[resizingColumn]) {
        onColumnResize?.(resizingColumn, columnWidths[resizingColumn]);
      }
      setResizingColumn(null);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [resizingColumn, resizeStartX, resizeStartWidth, columnWidths, onColumnResize]);
  // Build combined actions: built-in edit/delete + custom actions + expansion mode actions
  const builtInActions: DataTableAction<T>[] = [];
  
  // Legacy onEdit (still supported)
  if (onEdit) {
    builtInActions.push({
      label: 'Edit',
      icon: Edit,
      onClick: onEdit,
      variant: 'secondary',
      tooltip: 'Edit item'
    });
  }
  
  // NEW: Edit mode from expandedRowConfig
  if (expandedRowConfig?.edit && !onEdit) {
    const editConfig = expandedRowConfig.edit;
    builtInActions.push({
      label: editConfig.menuLabel || 'Edit',
      icon: editConfig.menuIcon || Edit,
      onClick: (item: T) => {
        const rowKey = getRowKey(item);
        handleExpansionWithMode(rowKey, 'edit');
      },
      variant: 'secondary',
      tooltip: 'Edit inline'
    });
  }
  
  // NEW: View details mode from expandedRowConfig
  if (expandedRowConfig?.details) {
    const detailsConfig = expandedRowConfig.details;
    builtInActions.push({
      label: detailsConfig.menuLabel || 'View Details',
      icon: detailsConfig.menuIcon,
      onClick: (item: T) => {
        const rowKey = getRowKey(item);
        handleExpansionWithMode(rowKey, 'details');
      },
      variant: 'ghost',
      tooltip: 'View details'
    });
  }
  
  // NEW: Add related modes from expandedRowConfig
  if (expandedRowConfig?.addRelated) {
    expandedRowConfig.addRelated.forEach(config => {
      if (config.showInMenu !== false) {
        builtInActions.push({
          label: config.label,
          icon: config.icon,
          onClick: (item: T) => {
            const rowKey = getRowKey(item);
            handleExpansionWithMode(rowKey, `addRelated-${config.key}`);
          },
          variant: 'secondary',
          tooltip: config.label
        });
      }
    });
  }
  
  // NEW: Manage related modes from expandedRowConfig
  if (expandedRowConfig?.manageRelated) {
    expandedRowConfig.manageRelated.forEach(config => {
      if (config.showInMenu !== false) {
        builtInActions.push({
          label: config.label,
          icon: config.icon,
          onClick: (item: T) => {
            const rowKey = getRowKey(item);
            handleExpansionWithMode(rowKey, `manageRelated-${config.key}`);
          },
          variant: 'ghost',
          tooltip: config.label
        });
      }
    });
  }
  
  if (onDelete) {
    builtInActions.push({
      label: 'Delete',
      icon: Trash,
      onClick: onDelete,
      variant: 'danger',
      tooltip: 'Delete item'
    });
  }
  
  const allActions = [...builtInActions, ...actions];
  
  // Selection state management
  const [internalSelectedRows, setInternalSelectedRows] = useState<Set<string>>(new Set());
  
  // Expansion state management
  const [internalExpandedRows, setInternalExpandedRows] = useState<Set<string>>(new Set());
  
  // Use external selection if provided, otherwise internal
  const selectedRowsSet = externalSelectedRows !== undefined ? externalSelectedRows : internalSelectedRows;
  const setSelectedRows = (newSet: Set<string>) => {
    if (externalSelectedRows !== undefined) {
      // Controlled component - notify parent
      onRowSelect?.(Array.from(newSet));
    } else {
      // Uncontrolled component - update internal state
      setInternalSelectedRows(newSet);
      onRowSelect?.(Array.from(newSet));
    }
  };

  // Handle row selection
  const handleRowSelect = (rowKey: string) => {
    const newSelected = new Set(selectedRowsSet);
    if (newSelected.has(rowKey)) {
      newSelected.delete(rowKey);
    } else {
      newSelected.add(rowKey);
    }
    setSelectedRows(newSelected);
  };
  
  // Handle select all
  const handleSelectAll = () => {
    if (selectedRowsSet.size === data.length && data.length > 0) {
      setSelectedRows(new Set());
    } else {
      const allKeys = new Set(data.map(getRowKey));
      setSelectedRows(allKeys);
    }
  };
  
  // Use external expansion if provided, otherwise internal
  const expandedRowsSet = externalExpandedRows !== undefined ? externalExpandedRows : internalExpandedRows;
  const setExpandedRows = (newSet: Set<string>) => {
    if (externalExpandedRows !== undefined) {
      // Controlled component - parent manages state
      // Don't update internal state
    } else {
      // Uncontrolled component - update internal state
      setInternalExpandedRows(newSet);
    }
  };
  
  // Handle row expansion
  const handleRowExpand = (rowKey: string) => {
    const newExpanded = new Set(expandedRowsSet);
    if (newExpanded.has(rowKey)) {
      newExpanded.delete(rowKey);
    } else {
      newExpanded.add(rowKey);
    }
    setExpandedRows(newExpanded);
  };

  // NEW: Handle expansion with mode (for expandedRowConfig)
  const handleExpansionWithMode = (rowKey: string, mode: ExpansionMode) => {
    // If same row and mode, collapse
    if (expansionState?.rowKey === rowKey && expansionState?.mode === mode) {
      setExpansionState(null);
    } else {
      // Expand with new mode (collapses any existing expansion)
      setExpansionState({ rowKey, mode });
    }
  };

  // NEW: Handle collapse
  const handleCollapseExpansion = () => {
    setExpansionState(null);
  };

  // Handle column header click for sorting
  const handleSort = (column: DataTableColumn<T>) => {
    if (!column.sortable || !onSortChange) return;

    const columnKey = String(column.key);
    
    // If clicking the same column, toggle direction
    if (currentSort?.key === columnKey) {
      if (currentSort.direction === 'asc') {
        onSortChange({ key: columnKey, direction: 'desc', label: column.header });
      } else {
        // Remove sort on third click
        onSortChange(null);
      }
    } else {
      // New column - start with ascending
      onSortChange({ key: columnKey, direction: 'asc', label: column.header });
    }
  };

  // Get sort icon SVG for column (matches reference ui-preview.html)
  const getSortIcon = (column: DataTableColumn<T>) => {
    if (!column.sortable) return null;

    const columnKey = String(column.key);
    const isActive = currentSort?.key === columnKey;
    const isAscending = currentSort?.direction === 'asc';

    // Inactive state - show neutral up/down arrows
    if (!isActive) {
      return (
        <svg className="ml-2 w-4 h-4 text-ink-400 group-hover:text-ink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }

    // Active ascending state - show up arrow highlighted
    if (isAscending) {
      return (
        <svg className="ml-2 w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
        </svg>
      );
    }

    // Active descending state - show down arrow highlighted
    return (
      <svg className="ml-2 w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
      </svg>
    );
  };

  // Render loading skeleton
  const renderLoadingSkeleton = () => (
    <>
      {Array.from({ length: loadingRows }, (_, i) => (
        <tr key={`loading-${i}`} className={`animate-pulse table-row-stable ${bordered ? `border-b ${borderColor}` : ''}`}>
          {selectable && (
            <td className={`sticky left-0 bg-white ${currentDensity.cell} border-b ${borderColor} z-10 align-middle`}>
              <div className="h-4 w-4 bg-paper-200 rounded"></div>
            </td>
          )}
          {expandable && (
            <td className={`sticky left-0 bg-white px-2 ${currentDensity.cell} border-b ${borderColor} z-10`}>
              <div className="h-4 w-4 bg-paper-200 rounded"></div>
            </td>
          )}
          {allActions.length > 0 && (
            <td className={`sticky left-0 bg-white px-2 ${currentDensity.cell} border-b ${borderColor} z-10`}>
              <div className="h-8 w-8 bg-paper-200 rounded"></div>
            </td>
          )}
          {visibleColumns.map((column, colIndex) => {
            const columnKey = String(column.key);
            const dynamicWidth = columnWidths[columnKey];
            return (
              <td
                key={`loading-${i}-${colIndex}`}
                className={`${currentDensity.cell} whitespace-nowrap table-row-stable ${bordered ? `border ${borderColor}` : ''}`}
                style={getColumnStyle(column, dynamicWidth)}
              >
                <div className="h-4 bg-paper-200 rounded mb-1"></div>
                <div className="h-3 bg-paper-200 rounded w-3/4"></div>
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );

  // Render empty state
  const renderEmptyStateContent = () => {
    if (customRenderEmptyState) {
      return (
        <tr>
          <td colSpan={visibleColumns.length + (allActions.length > 0 ? 1 : 0) + (selectable ? 1 : 0) + (expandable ? 1 : 0)}>
            {customRenderEmptyState()}
          </td>
        </tr>
      );
    }
    return (
      <tr>
        <td colSpan={visibleColumns.length + (allActions.length > 0 ? 1 : 0) + (selectable ? 1 : 0) + (expandable ? 1 : 0)} className={`${currentDensity.cell} py-8 text-center text-ink-500`}>
          {error || emptyMessage}
        </td>
      </tr>
    );
  };

  // Virtual scrolling calculations
  const getVisibleRange = () => {
    if (!virtualized) return { start: 0, end: data.length };
    
    const overscan = 5;
    const start = Math.max(0, Math.floor(scrollTop / virtualRowHeight) - overscan);
    const visibleCount = Math.ceil(parseInt(virtualHeight) / virtualRowHeight);
    const end = Math.min(data.length, start + visibleCount + overscan * 2);
    
    return { start, end };
  };

  const { start: visibleStart, end: visibleEnd } = getVisibleRange();

  // Handle scroll for virtual scrolling
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (virtualized) {
      setScrollTop(e.currentTarget.scrollTop);
    }
  };

  // Render data rows
  const renderDataRows = () => {
    const rowsToRender = virtualized 
      ? data.slice(visibleStart, visibleEnd)
      : data;

    return rowsToRender.map((item, idx) => {
      const index = virtualized ? visibleStart + idx : idx;
      const rowKey = getRowKey(item);
      const isSelected = selectedRowsSet.has(rowKey);
      const isExpanded = expandedRowsSet.has(rowKey);
      const rowBgClass = getRowBackgroundClass(item, index);
      const hoverClass = disableHover ? '' : 'hover:bg-paper-100';
      const borderClass = bordered ? `border-b ${borderColor}` : (!visibleColumns.some(col => !!col.renderSecondary) ? `border-b ${borderColor}` : '');

      return (
      <React.Fragment key={rowKey}>
        <tr
          className={`${hoverClass} table-row-stable ${onRowDoubleClick || onRowClick || (expandedRowConfig?.edit?.triggerOnDoubleClick !== false) || (expandedRowConfig?.details?.triggerOnDoubleClick === true) ? 'cursor-pointer' : ''} ${isSelected ? 'bg-accent-50 border-l-2 border-accent-500' : rowBgClass} ${borderClass}`}
          onClick={() => onRowClick?.(item)}
          onDoubleClick={() => {
            // Check for edit mode with triggerOnDoubleClick
            if (expandedRowConfig?.edit && expandedRowConfig.edit.triggerOnDoubleClick !== false) {
              handleExpansionWithMode(rowKey, 'edit');
            }
            // Check for details mode with triggerOnDoubleClick
            else if (expandedRowConfig?.details && expandedRowConfig.details.triggerOnDoubleClick === true) {
              handleExpansionWithMode(rowKey, 'details');
            }
            // Legacy: use onRowDoubleClick handler
            else {
              onRowDoubleClick?.(item);
            }
          }}
          title={
            expandedRowConfig?.edit && expandedRowConfig.edit.triggerOnDoubleClick !== false ? 'Double-click to edit inline' :
            expandedRowConfig?.details && expandedRowConfig.details.triggerOnDoubleClick === true ? 'Double-click to view details' :
            onRowDoubleClick ? 'Double-click to open details' : 
            onRowClick ? 'Click to select' : 
            undefined
          }
        >
          {selectable && (
          <td className={`sticky left-0 bg-white ${currentDensity.cell} z-10 align-middle ${bordered ? `border ${borderColor}` : ''}`}>
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => handleRowSelect(rowKey)}
              className="w-4 h-4 text-accent-600 border-paper-300 rounded focus:ring-accent-400"
              style={{ verticalAlign: 'middle' }}
              aria-label={`Select row ${rowKey}`}
            />
          </td>
          )}
            {((expandable || expandedRowConfig) && showExpandChevron) && (
            <td className={`sticky left-0 bg-white px-2 ${currentDensity.cell} z-10 ${bordered ? `border ${borderColor}` : ''}`}>
              <button
                onClick={() => {
                  // NEW: Enhanced logic for expandedRowConfig
                  if (expandedRowConfig?.details && expandedRowConfig.details.triggerOnExpand !== false) {
                    // Trigger details mode if configured
                    handleExpansionWithMode(rowKey, 'details');
                  } else if (expandedRowConfig?.edit && expandedRowConfig.edit.triggerOnDoubleClick !== false) {
                    // Fallback to edit mode if no details but edit is available
                    handleExpansionWithMode(rowKey, 'edit');
                  } else {
                    // Legacy: use handleRowExpand
                    handleRowExpand(rowKey);
                  }
                }}
                className="text-ink-500 hover:text-ink-900 transition-colors"
                aria-label={isExpanded || (expansionState?.rowKey === rowKey) ? 'Collapse row' : 'Expand row'}
              >
                {isExpanded || (expansionState?.rowKey === rowKey) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
            </td>
          )}
        {allActions.length > 0 && (
          <td
            className="sticky left-0 whitespace-nowrap shadow-[4px_0_6px_-2px_rgba(0,0,0,0.1)] z-10"
            style={{
              width: '28px',
              padding: '0',
              backgroundColor: 'inherit',
              verticalAlign: 'middle'
            }}
            onClick={(e) => e.stopPropagation()}
            rowSpan={visibleColumns.some(col => !!col.renderSecondary) ? 2 : 1}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '28px' }}>
              <ActionMenu actions={allActions} item={item} />
            </div>
          </td>
        )}
        {visibleColumns.map((column) => {
          const columnKey = String(column.key);
          const dynamicWidth = columnWidths[columnKey];
          const value = typeof column.key === 'string'
            ? item[column.key as keyof T]
            : item[column.key];

          const primaryContent = column.render ? column.render(item, value) : String(value || '');

          return (
            <td
              key={`${item.id}-${columnKey}`}
              className={`${currentDensity.cell} ${column.className || ''} ${bordered ? `border ${borderColor}` : ''}`}
              style={getColumnStyle(column, dynamicWidth)}
            >
              <div className={`${currentDensity.text} leading-tight`}>{primaryContent}</div>
            </td>
          );
          })}
            </tr>
            
            {/* Secondary row - only render if any column has renderSecondary */}
            {visibleColumns.some(col => !!col.renderSecondary) && (
              <tr className={`secondary-row ${hoverClass} border-b ${borderColor}`}>
                {selectable && <td className={`sticky left-0 bg-white ${currentDensity.cell} py-0.5 z-10 ${bordered ? `border ${borderColor}` : ''}`}></td>}
                {((expandable || expandedRowConfig) && showExpandChevron) && <td className={`sticky left-0 bg-white px-2 py-0.5 z-10 ${bordered ? `border ${borderColor}` : ''}`}></td>}
                {/* Actions column uses rowspan from primary row, no cell needed here */}
                {visibleColumns.map((column) => {
                  const columnKey = String(column.key);
                  const dynamicWidth = columnWidths[columnKey];
                  const value = typeof column.key === 'string'
                    ? item[column.key as keyof T]
                    : item[column.key];
                  const secondaryContent = column.renderSecondary ? column.renderSecondary(item, value) : null;

                  return (
                    <td
                      key={`${item.id}-${columnKey}-secondary`}
                      className={`${currentDensity.cell} py-0.5 ${column.className || ''} ${bordered ? `border ${borderColor}` : ''}`}
                      style={getColumnStyle(column, dynamicWidth)}
                    >
                      <div className="text-xs text-ink-500 leading-tight">
                        {secondaryContent || <span className="invisible">—</span>}
                      </div>
                    </td>
                  );                })}
              </tr>
            )}
            
              {/* Expanded row content - Legacy mode */}
        {expandable && isExpanded && renderExpandedRow && (
          <tr>
            <td
              colSpan={
                visibleColumns.length +
                (selectable ? 1 : 0) +
                (((expandable || expandedRowConfig) && showExpandChevron) ? 1 : 0) +
                (allActions.length > 0 ? 1 : 0)
              }
              className={`${currentDensity.cell} py-4 bg-paper-50`}
            >
              {renderExpandedRow(item)}
            </td>
          </tr>
        )}
        
        {/* Expanded row content - NEW: Multiple expansion modes */}
        {expansionState && expansionState.rowKey === rowKey && expandedRowConfig && (() => {
          const mode = expansionState.mode;
          let content: React.ReactNode = null;
          let bgColorClass = 'bg-paper-50'; // Default
          
          // Edit mode
          if (mode === 'edit' && expandedRowConfig.edit) {
            bgColorClass = 'bg-paper-100/80 border-t border-b border-paper-300/80';
            content = expandedRowConfig.edit.render(
              item,
              async (_updated: T) => {
                // Handle save
                handleCollapseExpansion();
              },
              () => {
                // Handle cancel
                handleCollapseExpansion();
              }
            );
          }
          
          // Details mode
          else if (mode === 'details' && expandedRowConfig.details) {
            bgColorClass = 'bg-primary-50/80 border-t border-b border-primary-200/80';
            content = expandedRowConfig.details.render(item);
          }
          
          // Add related modes
          else if (mode.startsWith('addRelated-') && expandedRowConfig.addRelated) {
            const key = mode.replace('addRelated-', '');
            const config = expandedRowConfig.addRelated.find(c => c.key === key);
            if (config) {
              bgColorClass = 'bg-success-50/80 border-t border-b border-success-200/80';
              content = config.render(
                item,
                async (_newItem: any) => {
                  // Handle save
                  handleCollapseExpansion();
                },
                () => {
                  // Handle cancel
                  handleCollapseExpansion();
                }
              );
            }
          }
          
          // Manage related modes
          else if (mode.startsWith('manageRelated-') && expandedRowConfig.manageRelated) {
            const key = mode.replace('manageRelated-', '');
            const config = expandedRowConfig.manageRelated.find(c => c.key === key);
            if (config) {
              bgColorClass = 'bg-slate-50/80 border-t border-b border-slate-200/80';
              const handleClose = () => setExpansionState(null);
              content = config.render(item, handleClose);
            }
          }
          
          if (!content) return null;
          
          return (
            <tr key={`expanded-${rowKey}`}>
              <td
                colSpan={
                  visibleColumns.length +
                  (selectable ? 1 : 0) +
                  (((expandable || expandedRowConfig) && showExpandChevron) ? 1 : 0) +
                  (allActions.length > 0 ? 1 : 0)
                }
                className={`${currentDensity.cell} py-4 ${bgColorClass} animate-expand`}
              >
                {content}
              </td>
            </tr>
          );
        })()}
      </React.Fragment>
      );
    });
  };

  const tableContent = (
    <div className={`bg-white rounded-lg shadow border-2 ${borderColor} ${virtualized ? 'overflow-hidden' : 'overflow-x-auto overflow-y-visible'} ${className}`} style={{ position: 'relative' }}>
      {/* Loading overlay for when data is being refreshed */}
      {loading && data.length > 0 && (
        <div
          className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-20"
          style={{ backdropFilter: 'blur(2px)' }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="loading-spinner" style={{ width: '32px', height: '32px', borderWidth: '3px' }}></div>
            <span className="text-sm font-medium text-ink-600">Loading...</span>
          </div>
        </div>
      )}

      <table className={`table-stable w-full ${bordered ? 'border-collapse' : ''}`}>
        <colgroup>
          {selectable && <col className="w-12" />}
          {((expandable || expandedRowConfig) && showExpandChevron) && <col className="w-10" />}
          {allActions.length > 0 && <col style={{ width: '28px' }} />}
          {visibleColumns.map((column, index) => {
            const columnKey = String(column.key);
            const dynamicWidth = columnWidths[columnKey];
            return (
              <col key={index} style={getColumnStyle(column, dynamicWidth)} />
            );
          })}
        </colgroup>
        <thead className={`bg-paper-100 sticky top-0 z-10 ${headerClassName}`}>
          <tr className="table-header-row">
            {selectable && (
              <th className={`sticky left-0 bg-paper-100 ${currentDensity.header} border-b ${borderColor} z-20 w-12 ${bordered ? `border ${borderColor}` : ''}`}>
                <input
                  type="checkbox"
                  checked={selectedRowsSet.size === data.length && data.length > 0}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-accent-600 border-paper-300 rounded focus:ring-accent-400"
                  aria-label="Select all rows"
                />
              </th>
            )}
            {((expandable || expandedRowConfig) && showExpandChevron) && (
              <th className={`sticky left-0 bg-paper-100 px-2 ${currentDensity.header} border-b ${borderColor} z-19 w-10 ${bordered ? `border ${borderColor}` : ''}`}>
                {/* Empty header for expand column */}
              </th>
            )}
            {allActions.length > 0 && (
              <th className={`sticky left-0 bg-paper-100 px-0.5 ${currentDensity.header} text-center text-xs font-medium text-ink-700 uppercase tracking-wider border-b ${borderColor} z-20 ${bordered ? `border ${borderColor}` : ''}`} style={{ width: '28px' }}>
                {/* Actions column header */}
              </th>
            )}
            {visibleColumns.map((column) => {
              const columnKey = String(column.key);
              const dynamicWidth = columnWidths[columnKey];
              const thRef = useRef<HTMLTableCellElement>(null);
              const isDragging = draggingColumn === columnKey;
              const isDragOver = dragOverColumn === columnKey;

              return (
                <th
                  key={columnKey}
                  ref={thRef}
                  draggable={reorderable}
                  onDragStart={(e) => reorderable && handleDragStart(e, columnKey)}
                  onDragOver={(e) => reorderable && handleDragOver(e, columnKey)}
                  onDragEnd={handleDragEnd}
                  onDrop={(e) => reorderable && handleDrop(e, columnKey)}
                  className={`
                    ${currentDensity.header} text-left border-b ${borderColor} ${bordered ? `border ${borderColor}` : ''} relative
                    ${reorderable ? 'cursor-move' : ''}
                    ${isDragging ? 'opacity-50' : ''}
                    ${isDragOver ? 'bg-accent-100' : ''}
                  `}
                  style={getColumnStyle(column, dynamicWidth)}
                >
                  {column.sortable ? (
                    <button
                      onClick={() => handleSort(column)}
                      className="group inline-flex items-center text-xs font-medium text-ink-500 uppercase tracking-wider hover:text-ink-900 transition-colors"
                    >
                      <span>{column.header}</span>
                      {getSortIcon(column)}
                    </button>
                  ) : (
                    <span className="text-xs font-medium text-ink-500 uppercase tracking-wider">
                      {column.header}
                    </span>
                  )}
                  {resizable && (
                    <div
                      className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-accent-400 group"
                      onMouseDown={(e) => {
                        const currentWidth = thRef.current?.offsetWidth || 100;
                        handleResizeStart(e, columnKey, currentWidth);
                      }}
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-paper-300 group-hover:bg-accent-400 transition-colors" />
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody
          className="bg-white table-loading transition-opacity duration-200"
        >
          {loading && data.length === 0 ? (
            renderLoadingSkeleton()
          ) : data.length === 0 ? (
            renderEmptyStateContent()
          ) : (
            renderDataRows()
          )}
        </tbody>
      </table>
    </div>
  );

  // Wrap in scrollable container if virtualized
  if (virtualized) {
    return (
      <div
        ref={tableContainerRef}
        onScroll={handleScroll}
        style={{ height: virtualHeight, overflow: 'auto' }}
        className="rounded-lg"
      >
        {tableContent}
      </div>
    );
  }

  return tableContent;
}
