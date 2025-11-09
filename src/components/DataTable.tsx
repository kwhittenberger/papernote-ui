// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the notebook-ui component library.
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ChevronsUpDown, ChevronRight, type LucideIcon } from 'lucide-react';
import Button from './Button';

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
  width?: string;
  render?: (item: T, value: any) => React.ReactNode;
  sortable?: boolean;
  className?: string;
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
  /** Optional icon from lucide-react */
  icon?: LucideIcon;
  /** Click handler receives the row item */
  onClick: (item: T) => void;
  /** Button styling variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Optional conditional visibility */
  show?: (item: T) => boolean;
  /** Optional tooltip text */
  tooltip?: string;
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
  /** Optional row actions that appear in a sticky left column */
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
  /** Enable row expansion */
  expandable?: boolean;
  /** Controlled expanded rows (set of row keys) */
  expandedRows?: Set<string>;
  /** Render function for expanded row content */
  renderExpandedRow?: (row: T) => React.ReactNode;
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
 * 
 * @example
 * ```tsx
 * const columns: DataTableColumn<User>[] = [
 *   { key: 'name', header: 'Name', sortable: true },
 *   { key: 'email', header: 'Email', sortable: true },
 *   { key: 'role', header: 'Role' },
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
  actions,
  onRowClick,
  onRowDoubleClick,
  selectable = false,
  selectedRows: externalSelectedRows,
  onRowSelect,
  keyExtractor,
  expandable = false,
  expandedRows: externalExpandedRows,
  renderExpandedRow,
}: DataTableProps<T>) {
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
  
  // Key extractor function
  const getRowKey = keyExtractor || ((row: T) => String(row.id));
  
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

  // Get sort icon for column
  const getSortIcon = (column: DataTableColumn<T>) => {
    if (!column.sortable) return null;

    const columnKey = String(column.key);
    const isActive = currentSort?.key === columnKey;

    if (!isActive) {
      return <ChevronsUpDown className="w-4 h-4 text-gray-400" />;
    }

    return currentSort?.direction === 'asc' ? (
      <ChevronUp className="w-4 h-4 text-blue-600" />
    ) : (
      <ChevronDown className="w-4 h-4 text-blue-600" />
    );
  };

  // Render loading skeleton
  const renderLoadingSkeleton = () => (
    <>
      {Array.from({ length: loadingRows }, (_, i) => (
        <tr key={`loading-${i}`} className="animate-pulse table-row-stable">
          {columns.map((column, colIndex) => (
            <td
              key={`loading-${i}-${colIndex}`}
              className={`px-6 py-4 whitespace-nowrap ${column.width} table-row-stable`}
            >
              <div className="h-4 bg-gray-200 rounded mb-1"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
            </td>
          ))}
        </tr>
      ))}
    </>
  );

  // Render empty state
  const renderEmptyState = () => (
    <tr>
      <td colSpan={columns.length + (actions ? 1 : 0) + (selectable ? 1 : 0) + (expandable ? 1 : 0)} className="px-6 py-8 text-center text-gray-500">
        {error || emptyMessage}
      </td>
    </tr>
  );

  // Render data rows
  const renderDataRows = () =>
    data.map((item) => {
      const rowKey = getRowKey(item);
      const isSelected = selectedRowsSet.has(rowKey);
      const isExpanded = expandedRowsSet.has(rowKey);
      
      return (
      <React.Fragment key={rowKey}>
        <tr 
          className={`hover:bg-gray-50 table-row-stable ${onRowDoubleClick || onRowClick ? 'cursor-pointer' : ''} ${isSelected ? 'bg-accent-50 border-l-2 border-accent-500' : ''}`}
          onClick={() => onRowClick?.(item)}
          onDoubleClick={() => onRowDoubleClick?.(item)}
          title={
            onRowDoubleClick ? 'Double-click to open details' : 
            onRowClick ? 'Click to select' : 
            undefined
          }
        >
          {selectable && (
          <td className="sticky left-0 bg-white px-4 py-4 border-b border-gray-200 z-10">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => handleRowSelect(rowKey)}
              className="w-4 h-4 text-accent-600 border-paper-300 rounded focus:ring-accent-400"
              aria-label={`Select row ${rowKey}`}
            />
          </td>
          )}
            {expandable && (
            <td className="sticky left-0 bg-white px-2 py-4 border-b border-gray-200 z-10">
              <button
                onClick={() => handleRowExpand(rowKey)}
                className="text-ink-500 hover:text-ink-900 transition-colors"
                aria-label={isExpanded ? 'Collapse row' : 'Expand row'}
              >
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
            </td>
          )}
        {actions && (
          <td className="sticky left-0 bg-white px-0.5 py-4 whitespace-nowrap shadow-[4px_0_6px_-2px_rgba(0,0,0,0.1)] border-b border-gray-200 z-10 align-middle">
            <div className="flex items-center gap-0.5 justify-center">
              {actions.map((action, idx) => {
                const shouldShow = !action.show || action.show(item);
                if (!shouldShow) return null;
                
                const Icon = action.icon;
                return (
                  <Button
                    key={idx}
                    variant={action.variant || 'secondary'}
                    size="sm"
                    onClick={() => action.onClick(item)}
                    title={action.tooltip || action.label}
                    className="min-w-0 px-2"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span className="sr-only">{action.label}</span>
                  </Button>
                );
              })}
            </div>
          </td>
        )}
        {columns.map((column) => {
          const value = typeof column.key === 'string' 
            ? item[column.key as keyof T]
            : item[column.key];
          
          return (
            <td
              key={`${item.id}-${String(column.key)}`}
              className={`px-6 py-4 ${column.width} table-row-stable ${column.className || ''}`}
            >
              {column.render ? column.render(item, value) : String(value || '')}
            </td>
          );
          })}
            </tr>
            
              {/* Expanded row content */}
        {expandable && isExpanded && renderExpandedRow && (
          <tr>
            <td
              colSpan={
                columns.length + 
                (selectable ? 1 : 0) + 
                (expandable ? 1 : 0) + 
                (actions ? 1 : 0)
              }
              className="px-6 py-4 bg-paper-50"
            >
              {renderExpandedRow(item)}
            </td>
          </tr>
        )}
      </React.Fragment>
      );
    });

  return (
    <div className={`bg-white rounded-lg shadow border-2 border-gray-300 overflow-auto ${className}`} style={{ height: '100%', position: 'relative' }}>
      {/* Loading overlay for when data is being refreshed */}
      {loading && data.length > 0 && (
        <div 
          className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-20"
          style={{ backdropFilter: 'blur(2px)' }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="loading-spinner" style={{ width: '32px', height: '32px', borderWidth: '3px' }}></div>
            <span className="text-sm font-medium text-gray-600">Loading...</span>
          </div>
        </div>
      )}
      
      <table className="table-stable w-full table-fixed">
        <colgroup>
          {selectable && <col className="w-12" />}
          {expandable && <col className="w-10" />}
          {actions && <col className="w-12" />}
          {columns.map((column, index) => (
            <col key={index} className={column.width} />
          ))}
        </colgroup>
        <thead className="bg-gray-50 sticky top-0 z-10">
          <tr className="table-header-row">
            {selectable && (
              <th className="sticky left-0 bg-gray-50 px-4 py-3 border-b border-gray-200 z-20 w-12">
                <input
                  type="checkbox"
                  checked={selectedRowsSet.size === data.length && data.length > 0}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-accent-600 border-paper-300 rounded focus:ring-accent-400"
                  aria-label="Select all rows"
                />
              </th>
            )}
            {expandable && (
              <th className="sticky left-0 bg-gray-50 px-2 py-3 border-b border-gray-200 z-19 w-10">
                {/* Empty header for expand column */}
              </th>
            )}
            {actions && (
              <th className="sticky left-0 bg-gray-50 px-0.5 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-b border-gray-200 z-20">
                
              </th>
            )}
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={`${column.width} px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b border-gray-200 ${
                  column.sortable ? 'cursor-pointer select-none hover:bg-gray-100 transition-colors' : ''
                }`}
                onClick={() => column.sortable && handleSort(column)}
              >
                <div className="flex items-center gap-2">
                  <span>{column.header}</span>
                  {getSortIcon(column)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          className="bg-white divide-y divide-gray-200 table-loading transition-opacity duration-200"
        >
          {loading && data.length === 0 ? (
            renderLoadingSkeleton()
          ) : data.length === 0 ? (
            renderEmptyState()
          ) : (
            renderDataRows()
          )}
        </tbody>
      </table>
    </div>
  );
}
