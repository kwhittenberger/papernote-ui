import React, { useState } from 'react';
import { ArrowUp, ArrowDown, ArrowUpDown, ChevronDown, ChevronRight } from 'lucide-react';

export type SortDirection = 'asc' | 'desc' | null;

export interface Column<T> {
  key: string;
  header: string;
  accessor?: (row: T) => React.ReactNode;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyExtractor: (row: T) => string;
  selectable?: boolean;
  expandable?: boolean;
  onRowSelect?: (selectedRows: string[]) => void;
  renderExpandedRow?: (row: T) => React.ReactNode;
  emptyState?: React.ReactNode;
  className?: string;
  onSort?: (columnKey: string, direction: SortDirection) => void;
  sortColumn?: string | null;
  sortDirection?: SortDirection;
}

export default function Table<T>({
  data,
  columns,
  keyExtractor,
  selectable = false,
  expandable = false,
  onRowSelect,
  renderExpandedRow,
  emptyState,
  className = '',
  onSort,
  sortColumn: externalSortColumn,
  sortDirection: externalSortDirection,
}: TableProps<T>) {
  const [internalSortColumn, setInternalSortColumn] = useState<string | null>(null);
  const [internalSortDirection, setInternalSortDirection] = useState<SortDirection>(null);

  // Use external sort state if provided, otherwise use internal state
  const sortColumn = externalSortColumn !== undefined ? externalSortColumn : internalSortColumn;
  const sortDirection = externalSortDirection !== undefined ? externalSortDirection : internalSortDirection;
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  // Handle sorting
  const handleSort = (columnKey: string) => {
    let newDirection: SortDirection;

    if (sortColumn === columnKey) {
      if (sortDirection === 'asc') {
        newDirection = 'desc';
      } else if (sortDirection === 'desc') {
        newDirection = null;
      } else {
        newDirection = 'asc';
      }
    } else {
      newDirection = 'asc';
    }

    // If using external sort control, call the callback
    if (onSort) {
      onSort(columnKey, newDirection);
    } else {
      // Otherwise update internal state
      setInternalSortColumn(newDirection === null ? null : columnKey);
      setInternalSortDirection(newDirection);
    }
  };

  // Handle row selection
  const handleRowSelect = (rowKey: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(rowKey)) {
      newSelected.delete(rowKey);
    } else {
      newSelected.add(rowKey);
    }
    setSelectedRows(newSelected);
    onRowSelect?.(Array.from(newSelected));
  };

  // Handle select all
  const handleSelectAll = () => {
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set());
      onRowSelect?.([]);
    } else {
      const allKeys = new Set(data.map(keyExtractor));
      setSelectedRows(allKeys);
      onRowSelect?.(Array.from(allKeys));
    }
  };

  // Handle row expansion
  const handleRowExpand = (rowKey: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(rowKey)) {
      newExpanded.delete(rowKey);
    } else {
      newExpanded.add(rowKey);
    }
    setExpandedRows(newExpanded);
  };

  const getSortIcon = (columnKey: string) => {
    if (sortColumn !== columnKey) {
      return <ArrowUpDown className="h-4 w-4 text-ink-400" />;
    }
    if (sortDirection === 'asc') {
      return <ArrowUp className="h-4 w-4 text-accent-600" />;
    }
    if (sortDirection === 'desc') {
      return <ArrowDown className="h-4 w-4 text-accent-600" />;
    }
    return <ArrowUpDown className="h-4 w-4 text-ink-400" />;
  };

  if (data.length === 0 && emptyState) {
    return <div>{emptyState}</div>;
  }

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="table">
        <thead className="table-header">
          <tr>
            {/* Select All Checkbox */}
            {selectable && (
              <th className="table-header-cell w-12">
                <input
                  type="checkbox"
                  checked={selectedRows.size === data.length && data.length > 0}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-accent-600 border-paper-300 rounded focus:ring-accent-400"
                  aria-label="Select all rows"
                />
              </th>
            )}

            {/* Expand Column */}
            {expandable && <th className="table-header-cell w-12"></th>}

            {/* Data Columns */}
            {columns.map((column) => (
              <th
                key={column.key}
                className="table-header-cell"
                style={{ width: column.width }}
              >
                {column.sortable ? (
                  <button
                    onClick={() => handleSort(column.key)}
                    className="group inline-flex items-center gap-2 hover:text-ink-900 transition-colors"
                  >
                    <span>{column.header}</span>
                    {getSortIcon(column.key)}
                  </button>
                ) : (
                  column.header
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            const rowKey = keyExtractor(row);
            const isSelected = selectedRows.has(rowKey);
            const isExpanded = expandedRows.has(rowKey);

            return (
              <React.Fragment key={rowKey}>
                <tr className={`table-row ${isSelected ? 'bg-accent-50 border-l-2 border-accent-500' : ''}`}>
                  {/* Selection Checkbox */}
                  {selectable && (
                    <td className="table-cell">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleRowSelect(rowKey)}
                        className="w-4 h-4 text-accent-600 border-paper-300 rounded focus:ring-accent-400"
                        aria-label={`Select row ${rowKey}`}
                      />
                    </td>
                  )}

                  {/* Expand Button */}
                  {expandable && (
                    <td className="table-cell">
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

                  {/* Data Cells */}
                  {columns.map((column) => (
                    <td key={column.key} className="table-cell">
                      {column.accessor ? column.accessor(row) : (row as any)[column.key]}
                    </td>
                  ))}
                </tr>

                {/* Expanded Row Content */}
                {expandable && isExpanded && renderExpandedRow && (
                  <tr>
                    <td
                      colSpan={columns.length + (selectable ? 1 : 0) + (expandable ? 1 : 0)}
                      className="px-6 py-4 bg-paper-50"
                    >
                      {renderExpandedRow(row)}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
