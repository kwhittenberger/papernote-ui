import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
// @ts-ignore - fast-formula-parser doesn't have types
import * as FormulaParserModule from 'fast-formula-parser';
// Handle both ESM default export and CommonJS module.exports
// @ts-ignore
const FormulaParser = FormulaParserModule.default || FormulaParserModule;
import {
  ChevronUp,
  ChevronDown,
  Filter,
  X,
  Download,
  Save,
  ArrowUpDown,
  Pin,
  PinOff,
} from 'lucide-react';
import Button from './Button';
import Input from './Input';
import Stack from './Stack';
import { addSuccessMessage, addErrorMessage } from './StatusBar';
import FormulaAutocomplete from './FormulaAutocomplete';

/**
 * Cell value type - can be primitive or formula
 */
export type CellValue = string | number | boolean | null;

/**
 * Cell data structure
 */
export interface DataGridCell {
  /** The display/computed value */
  value: CellValue;
  /** Optional formula (e.g., "=SUM(B2:B5)") */
  formula?: string;
  /** Read-only cell */
  readOnly?: boolean;
  /** Custom class name */
  className?: string;
}

/**
 * Column configuration
 */
export interface DataGridColumn {
  /** Unique column key */
  key: string;
  /** Header text */
  header: string;
  /** Column width in pixels */
  width?: number;
  /** Minimum width */
  minWidth?: number;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Enable sorting */
  sortable?: boolean;
  /** Enable filtering */
  filterable?: boolean;
  /** Read-only column */
  readOnly?: boolean;
  /** Cell type for formatting */
  type?: 'text' | 'number' | 'currency' | 'percent' | 'date';
  /** Number format options */
  format?: {
    decimals?: number;
    prefix?: string;
    suffix?: string;
  };
}

/**
 * Sort configuration
 */
export interface SortConfig {
  key: string;
  direction: 'asc' | 'desc';
}

/**
 * Filter configuration
 */
export interface FilterConfig {
  key: string;
  value: string;
}

/**
 * Frozen row mode options
 * - 'none': No frozen rows
 * - 'first': Freeze first data row (common for headers in data)
 * - 'selected': Freeze the currently selected row
 * - number: Freeze specific number of rows from top
 */
export type FrozenRowMode = 'none' | 'first' | 'selected' | number;

/**
 * DataGrid component props
 */
export interface DataGridProps {
  /** 2D array of cell data */
  data: DataGridCell[][];
  /** Column configurations */
  columns: DataGridColumn[];
  /** Callback when data changes */
  onChange?: (data: DataGridCell[][], rowIndex: number, colIndex: number) => void;
  /** Row headers (e.g., ["1", "2", "3"] or true for auto) */
  rowHeaders?: boolean | string[];
  /**
   * Frozen rows configuration:
   * - 'none' or 0: No frozen rows
   * - 'first' or 1: Freeze first data row (common for headers in data)
   * - 'selected': Freeze the currently selected row (moves with selection)
   * - number > 1: Freeze specific number of rows from top
   */
  frozenRows?: FrozenRowMode;
  /** Number of frozen columns at left */
  frozenColumns?: number;
  /** Show freeze row toggle button in toolbar */
  showFreezeRowToggle?: boolean;
  /** Enable zebra striping */
  zebraStripes?: boolean;
  /** Enable formula evaluation */
  formulas?: boolean;
  /** Read-only mode */
  readOnly?: boolean;
  /** Table height */
  height?: number | string;
  /** Table width */
  width?: number | string;
  /** Show toolbar */
  showToolbar?: boolean;
  /** Toolbar title */
  title?: string;
  /** Enable export */
  enableExport?: boolean;
  /** Export filename */
  exportFileName?: string;
  /** Enable save */
  enableSave?: boolean;
  /** Save handler */
  onSave?: (data: DataGridCell[][]) => Promise<void> | void;
  /** Custom toolbar actions */
  toolbarActions?: React.ReactNode;
  /** Custom class name */
  className?: string;
  /** Density */
  density?: 'compact' | 'normal' | 'comfortable';
}

/**
 * DataGrid imperative handle
 */
export interface DataGridHandle {
  /** Get current data */
  getData: () => DataGridCell[][];
  /** Set cell value */
  setCell: (rowIndex: number, colIndex: number, value: CellValue | DataGridCell) => void;
  /** Clear all filters */
  clearFilters: () => void;
  /** Clear sorting */
  clearSort: () => void;
  /** Export to CSV */
  exportToCSV: () => void;
  /** Freeze/unfreeze the first row */
  toggleFreezeFirstRow: () => void;
  /** Freeze/unfreeze the selected row */
  toggleFreezeSelectedRow: () => void;
  /** Set frozen rows mode */
  setFrozenRows: (mode: FrozenRowMode) => void;
}

/**
 * Convert column index to Excel-style letter (0 = A, 1 = B, ..., 26 = AA)
 */
const colIndexToLetter = (index: number): string => {
  let result = '';
  let num = index;
  while (num >= 0) {
    result = String.fromCharCode((num % 26) + 65) + result;
    num = Math.floor(num / 26) - 1;
  }
  return result;
};

// Note: parseRef is available for future formula reference parsing
// const parseRef = (ref: string): { row: number; col: number } | null => { ... }

/**
 * DataGrid - Excel-like data grid component with formulas
 *
 * A grid-based spreadsheet component that provides:
 * - Cell-level editing with formula support (280+ Excel formulas)
 * - Sorting and filtering
 * - Frozen rows and columns
 * - Zebra striping
 * - CSV export
 * - Keyboard navigation
 *
 * Uses fast-formula-parser (MIT licensed) for formula evaluation.
 *
 * @example Basic usage
 * ```tsx
 * const columns = [
 *   { key: 'name', header: 'Name' },
 *   { key: 'q1', header: 'Q1', type: 'number' },
 *   { key: 'q2', header: 'Q2', type: 'number' },
 *   { key: 'total', header: 'Total', type: 'number' },
 * ];
 *
 * const data = [
 *   [{ value: 'Widget A' }, { value: 100 }, { value: 150 }, { value: 0, formula: '=SUM(B1:C1)' }],
 *   [{ value: 'Widget B' }, { value: 200 }, { value: 250 }, { value: 0, formula: '=SUM(B2:C2)' }],
 * ];
 *
 * <DataGrid
 *   data={data}
 *   columns={columns}
 *   formulas
 *   zebraStripes
 *   frozenRows={1}
 * />
 * ```
 */
export const DataGrid = forwardRef<DataGridHandle, DataGridProps>(
  (
    {
      data: initialData,
      columns,
      onChange,
      rowHeaders = false,
      frozenRows: frozenRowsProp = 'none',
      frozenColumns = 0,
      showFreezeRowToggle = false,
      zebraStripes = false,
      formulas = false,
      readOnly = false,
      height = 400,
      width = '100%',
      showToolbar = false,
      title,
      enableExport = false,
      exportFileName = 'export.csv',
      enableSave = false,
      onSave,
      toolbarActions,
      className = '',
      density = 'normal',
    },
    ref
  ) => {
    // State
    const [data, setData] = useState<DataGridCell[][]>(initialData);
    const [editingCell, setEditingCell] = useState<{ row: number; col: number } | null>(null);
    const [editValue, setEditValue] = useState<string>('');
    const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
    const [filters, setFilters] = useState<FilterConfig[]>([]);
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const [filterValue, setFilterValue] = useState<string>('');
    const [isSaving, setIsSaving] = useState(false);
    const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
    const [frozenRowsState, setFrozenRowsState] = useState<FrozenRowMode>(frozenRowsProp);
    const [editingCellRect, setEditingCellRect] = useState<DOMRect | null>(null);

    // Update frozen rows when prop changes
    useEffect(() => {
      setFrozenRowsState(frozenRowsProp);
    }, [frozenRowsProp]);

    const tableRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Compute actual number of frozen rows based on mode
    const frozenRows = useMemo(() => {
      if (frozenRowsState === 'none') return 0;
      if (frozenRowsState === 'first') return 1;
      if (frozenRowsState === 'selected') {
        // Return selected row + 1 (to include it), or 0 if nothing selected
        return selectedCell ? selectedCell.row + 1 : 0;
      }
      if (typeof frozenRowsState === 'number') return frozenRowsState;
      return 0;
    }, [frozenRowsState, selectedCell]);

    // Check if a specific row is frozen
    const isRowFrozen = useCallback(
      (rowIndex: number) => {
        if (frozenRowsState === 'none') return false;
        if (frozenRowsState === 'first') return rowIndex === 0;
        if (frozenRowsState === 'selected') {
          return selectedCell ? rowIndex === selectedCell.row : false;
        }
        if (typeof frozenRowsState === 'number') return rowIndex < frozenRowsState;
        return false;
      },
      [frozenRowsState, selectedCell]
    );

    // Update data when initialData changes
    useEffect(() => {
      setData(initialData);
    }, [initialData]);

    // Get computed data with formulas evaluated
    // Uses a cache to handle formula dependencies (formulas referencing other formulas)
    const computedData = useMemo(() => {
      if (!formulas) return data;

      // Cache for computed cell values to handle dependencies
      const computedCache: Map<string, CellValue> = new Map();

      // Recursive function to get cell value, evaluating formulas as needed
      const getCellValue = (r: number, c: number): CellValue => {
        const cacheKey = `${r},${c}`;
        if (computedCache.has(cacheKey)) {
          return computedCache.get(cacheKey)!;
        }

        if (r < 0 || r >= data.length || c < 0 || c >= (data[r]?.length || 0)) {
          return null;
        }

        const cell = data[r][c];
        if (!cell?.formula) {
          return cell?.value ?? null;
        }

        // Mark as computing to detect circular references
        computedCache.set(cacheKey, '#CIRCULAR');

        try {
          const result = parser.parse(cell.formula.substring(1));
          computedCache.set(cacheKey, result as CellValue);
          return result as CellValue;
        } catch (error) {
          computedCache.set(cacheKey, '#ERROR');
          return '#ERROR';
        }
      };

      // Create parser with callbacks that resolve formula dependencies
      const parser = new FormulaParser({
        onCell: ({ row, col }: { sheet: string; row: number; col: number }) => {
          // row and col are 1-indexed in the parser
          return getCellValue(row - 1, col - 1);
        },
        onRange: ({ from, to }: { sheet: string; from: { row: number; col: number }; to: { row: number; col: number } }) => {
          const result: (CellValue)[][] = [];
          for (let r = from.row - 1; r <= to.row - 1; r++) {
            const rowData: (CellValue)[] = [];
            for (let c = from.col - 1; c <= to.col - 1; c++) {
              rowData.push(getCellValue(r, c));
            }
            result.push(rowData);
          }
          return result;
        },
      });

      // Compute all cells
      return data.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (cell?.formula) {
            return {
              ...cell,
              value: getCellValue(rowIndex, colIndex),
            };
          }
          return cell;
        })
      );
    }, [formulas, data]);

    // Apply sorting
    const sortedData = useMemo(() => {
      if (!sortConfig) return computedData;

      const colIndex = columns.findIndex((c) => c.key === sortConfig.key);
      if (colIndex === -1) return computedData;

      // Keep frozen rows at top
      const frozenData = computedData.slice(0, frozenRows);
      const sortableData = [...computedData.slice(frozenRows)];

      sortableData.sort((a, b) => {
        const aVal = a[colIndex]?.value ?? '';
        const bVal = b[colIndex]?.value ?? '';

        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return sortConfig.direction === 'asc' ? aVal - bVal : bVal - aVal;
        }

        const aStr = String(aVal).toLowerCase();
        const bStr = String(bVal).toLowerCase();
        const cmp = aStr.localeCompare(bStr);
        return sortConfig.direction === 'asc' ? cmp : -cmp;
      });

      return [...frozenData, ...sortableData];
    }, [computedData, sortConfig, columns, frozenRows]);

    // Apply filters
    const filteredData = useMemo(() => {
      if (filters.length === 0) return sortedData;

      // Keep frozen rows
      const frozenData = sortedData.slice(0, frozenRows);
      const filterableData = sortedData.slice(frozenRows);

      const filtered = filterableData.filter((row) => {
        return filters.every((filter) => {
          const colIndex = columns.findIndex((c) => c.key === filter.key);
          if (colIndex === -1) return true;

          const cellValue = String(row[colIndex]?.value ?? '').toLowerCase();
          return cellValue.includes(filter.value.toLowerCase());
        });
      });

      return [...frozenData, ...filtered];
    }, [sortedData, filters, columns, frozenRows]);

    // Handle cell edit start
    const handleCellDoubleClick = useCallback(
      (rowIndex: number, colIndex: number, cellElement?: HTMLElement) => {
        if (readOnly) return;
        const column = columns[colIndex];
        if (column?.readOnly) return;
        const cell = data[rowIndex]?.[colIndex];
        if (cell?.readOnly) return;

        setEditingCell({ row: rowIndex, col: colIndex });
        setEditValue(cell?.formula || String(cell?.value ?? ''));

        // Capture cell position for formula autocomplete dropdown
        if (cellElement) {
          setEditingCellRect(cellElement.getBoundingClientRect());
        }

        setTimeout(() => inputRef.current?.focus(), 0);
      },
      [readOnly, columns, data]
    );

    // Handle cell edit complete
    const handleEditComplete = useCallback(() => {
      if (!editingCell) return;

      const { row, col } = editingCell;
      const newData = [...data];
      if (!newData[row]) newData[row] = [];

      const isFormula = editValue.startsWith('=');
      const numValue = parseFloat(editValue);
      const value = isFormula ? 0 : !isNaN(numValue) ? numValue : editValue;

      newData[row][col] = {
        ...newData[row][col],
        value,
        formula: isFormula ? editValue : undefined,
      };

      setData(newData);
      setEditingCell(null);
      setEditValue('');

      if (onChange) {
        onChange(newData, row, col);
      }
    }, [editingCell, editValue, data, onChange]);

    // Handle cell edit cancel
    const handleEditCancel = useCallback(() => {
      setEditingCell(null);
      setEditValue('');
    }, []);

    // Handle key down in edit mode
    const handleEditKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleEditComplete();
        } else if (e.key === 'Escape') {
          handleEditCancel();
        } else if (e.key === 'Tab') {
          e.preventDefault();
          handleEditComplete();
          // Move to next cell
          if (editingCell) {
            const nextCol = e.shiftKey ? editingCell.col - 1 : editingCell.col + 1;
            if (nextCol >= 0 && nextCol < columns.length) {
              handleCellDoubleClick(editingCell.row, nextCol);
            }
          }
        }
      },
      [handleEditComplete, handleEditCancel, editingCell, columns.length, handleCellDoubleClick]
    );

    // Handle cell click
    const handleCellClick = useCallback((rowIndex: number, colIndex: number) => {
      setSelectedCell({ row: rowIndex, col: colIndex });
    }, []);

    // Handle keyboard navigation
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (editingCell) return;
        if (!selectedCell) return;

        const { row, col } = selectedCell;
        let newRow = row;
        let newCol = col;

        switch (e.key) {
          case 'ArrowUp':
            newRow = Math.max(0, row - 1);
            break;
          case 'ArrowDown':
            newRow = Math.min(filteredData.length - 1, row + 1);
            break;
          case 'ArrowLeft':
            newCol = Math.max(0, col - 1);
            break;
          case 'ArrowRight':
            newCol = Math.min(columns.length - 1, col + 1);
            break;
          case 'Enter':
          case 'F2':
            handleCellDoubleClick(row, col);
            e.preventDefault();
            return;
          default:
            return;
        }

        if (newRow !== row || newCol !== col) {
          setSelectedCell({ row: newRow, col: newCol });
          e.preventDefault();
        }
      },
      [editingCell, selectedCell, filteredData.length, columns.length, handleCellDoubleClick]
    );

    // Handle sort
    const handleSort = useCallback((key: string) => {
      setSortConfig((prev) => {
        if (prev?.key === key) {
          if (prev.direction === 'asc') {
            return { key, direction: 'desc' };
          }
          return null; // Clear sort
        }
        return { key, direction: 'asc' };
      });
    }, []);

    // Handle filter
    const handleFilter = useCallback((key: string) => {
      setActiveFilter((prev) => (prev === key ? null : key));
      const existing = filters.find((f) => f.key === key);
      setFilterValue(existing?.value || '');
    }, [filters]);

    // Apply filter
    const applyFilter = useCallback(() => {
      if (!activeFilter) return;

      setFilters((prev) => {
        const existing = prev.findIndex((f) => f.key === activeFilter);
        if (filterValue) {
          if (existing >= 0) {
            const newFilters = [...prev];
            newFilters[existing] = { key: activeFilter, value: filterValue };
            return newFilters;
          }
          return [...prev, { key: activeFilter, value: filterValue }];
        } else {
          return prev.filter((f) => f.key !== activeFilter);
        }
      });
      setActiveFilter(null);
    }, [activeFilter, filterValue]);

    // Clear filter
    const clearFilter = useCallback((key: string) => {
      setFilters((prev) => prev.filter((f) => f.key !== key));
    }, []);

    // Export to CSV
    const exportToCSV = useCallback(() => {
      const headers = columns.map((c) => c.header).join(',');
      const rows = filteredData.map((row) =>
        row
          .map((cell) => {
            const val = String(cell?.value ?? '');
            // Escape quotes and wrap in quotes if contains comma
            if (val.includes(',') || val.includes('"') || val.includes('\n')) {
              return `"${val.replace(/"/g, '""')}"`;
            }
            return val;
          })
          .join(',')
      );

      const csv = [headers, ...rows].join('\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = exportFileName;
      link.click();
      URL.revokeObjectURL(url);

      addSuccessMessage('Exported to CSV successfully');
    }, [columns, filteredData, exportFileName]);

    // Save handler
    const handleSave = useCallback(async () => {
      if (!onSave) return;

      setIsSaving(true);
      try {
        await onSave(data);
        addSuccessMessage('Data saved successfully');
      } catch (error) {
        console.error('Save failed:', error);
        addErrorMessage('Failed to save data');
      } finally {
        setIsSaving(false);
      }
    }, [onSave, data]);

    // Toggle freeze first row
    const toggleFreezeFirstRow = useCallback(() => {
      setFrozenRowsState((prev) => (prev === 'first' || prev === 1 ? 'none' : 'first'));
    }, []);

    // Toggle freeze selected row
    const toggleFreezeSelectedRow = useCallback(() => {
      setFrozenRowsState((prev) => (prev === 'selected' ? 'none' : 'selected'));
    }, []);

    // Expose imperative handle
    useImperativeHandle(ref, () => ({
      getData: () => data,
      setCell: (rowIndex, colIndex, value) => {
        const newData = [...data];
        if (!newData[rowIndex]) newData[rowIndex] = [];
        newData[rowIndex][colIndex] =
          typeof value === 'object' && value !== null ? value : { value: value as CellValue };
        setData(newData);
      },
      clearFilters: () => setFilters([]),
      clearSort: () => setSortConfig(null),
      exportToCSV,
      toggleFreezeFirstRow,
      toggleFreezeSelectedRow,
      setFrozenRows: setFrozenRowsState,
    }));

    // Format cell value for display
    const formatValue = useCallback(
      (value: CellValue, column: DataGridColumn): string => {
        if (value === null || value === undefined) return '';
        if (typeof value === 'boolean') return value ? 'Yes' : 'No';

        const numVal = typeof value === 'number' ? value : parseFloat(String(value));

        if (column.type === 'currency' && !isNaN(numVal)) {
          const decimals = column.format?.decimals ?? 2;
          const prefix = column.format?.prefix ?? '$';
          return `${prefix}${numVal.toFixed(decimals)}`;
        }

        if (column.type === 'percent' && !isNaN(numVal)) {
          const decimals = column.format?.decimals ?? 1;
          return `${(numVal * 100).toFixed(decimals)}%`;
        }

        if (column.type === 'number' && !isNaN(numVal)) {
          const decimals = column.format?.decimals;
          if (decimals !== undefined) {
            return numVal.toFixed(decimals);
          }
        }

        return String(value);
      },
      []
    );

    // Density classes
    const densityClasses = {
      compact: 'py-1 px-2 text-xs',
      normal: 'py-2 px-3 text-sm',
      comfortable: 'py-3 px-4 text-sm',
    };

    const cellPadding = densityClasses[density];

    return (
      <div className={`data-grid ${className}`} style={{ width }}>
        {/* Toolbar */}
        {showToolbar && (
          <Stack direction="horizontal" spacing="md" align="center" className="mb-3 px-1">
            {title && (
              <div className="text-lg font-medium text-ink-900 flex-1">{title}</div>
            )}

            {showFreezeRowToggle && (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  icon={
                    frozenRowsState !== 'none' ? (
                      <Pin className="h-4 w-4 text-primary-600" />
                    ) : (
                      <PinOff className="h-4 w-4" />
                    )
                  }
                  onClick={toggleFreezeFirstRow}
                  title={
                    frozenRowsState === 'first' || frozenRowsState === 1
                      ? 'Unfreeze first row'
                      : 'Freeze first row'
                  }
                >
                  {frozenRowsState === 'first' || frozenRowsState === 1
                    ? 'Unfreeze Row'
                    : 'Freeze Row'}
                </Button>
              </div>
            )}

            {enableExport && (
              <Button
                variant="ghost"
                size="sm"
                icon={<Download className="h-4 w-4" />}
                onClick={exportToCSV}
              >
                Export
              </Button>
            )}

            {enableSave && onSave && (
              <Button
                variant="primary"
                size="sm"
                icon={<Save className="h-4 w-4" />}
                onClick={handleSave}
                loading={isSaving}
              >
                Save
              </Button>
            )}

            {toolbarActions}
          </Stack>
        )}

        {/* Active filters display */}
        {filters.length > 0 && (
          <Stack direction="horizontal" spacing="sm" className="mb-2 px-1 flex-wrap">
            {filters.map((filter) => {
              const column = columns.find((c) => c.key === filter.key);
              return (
                <div
                  key={filter.key}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs"
                >
                  <span className="font-medium">{column?.header}:</span>
                  <span>{filter.value}</span>
                  <button
                    onClick={() => clearFilter(filter.key)}
                    className="ml-1 hover:bg-primary-200 rounded p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              );
            })}
          </Stack>
        )}

        {/* Table container */}
        <div
          ref={tableRef}
          className="relative overflow-auto border border-stone-200 rounded-lg bg-white"
          style={{ height }}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <table className="border-collapse" style={{ tableLayout: 'auto' }}>
            {/* Header */}
            <thead className="sticky top-0 z-20 bg-stone-100">
              <tr>
                {/* Row header column */}
                {rowHeaders && (
                  <th
                    className={`${cellPadding} border-b border-r border-stone-200 bg-stone-100 text-left font-semibold text-ink-600 sticky left-0 z-30`}
                    style={{ width: 50, minWidth: 50, maxWidth: 50 }}
                  >
                    #
                  </th>
                )}

                {/* Column headers */}
                {columns.map((column, colIndex) => {
                  const isFrozen = colIndex < frozenColumns;
                  const leftOffset = rowHeaders ? 50 + columns.slice(0, colIndex).reduce((sum, c) => sum + (c.width || 100), 0) : columns.slice(0, colIndex).reduce((sum, c) => sum + (c.width || 100), 0);

                  return (
                    <th
                      key={column.key}
                      className={`${cellPadding} border-b border-r border-stone-200 bg-stone-100 font-semibold text-ink-600 text-${column.align || 'left'} ${
                        isFrozen ? 'sticky z-30' : ''
                      }`}
                      style={{
                        width: column.width,
                        minWidth: column.minWidth || 80,
                        left: isFrozen ? leftOffset : undefined,
                      }}
                    >
                      <div className="flex items-center gap-1">
                        <span className="flex-1">{column.header}</span>

                        {/* Sort button */}
                        {column.sortable && (
                          <button
                            onClick={() => handleSort(column.key)}
                            className="p-0.5 hover:bg-stone-200 rounded"
                          >
                            {sortConfig?.key === column.key ? (
                              sortConfig.direction === 'asc' ? (
                                <ChevronUp className="h-4 w-4 text-primary-600" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-primary-600" />
                              )
                            ) : (
                              <ArrowUpDown className="h-4 w-4 text-ink-400" />
                            )}
                          </button>
                        )}

                        {/* Filter button */}
                        {column.filterable && (
                          <div className="relative">
                            <button
                              onClick={() => handleFilter(column.key)}
                              className={`p-0.5 hover:bg-stone-200 rounded ${
                                filters.some((f) => f.key === column.key)
                                  ? 'text-primary-600'
                                  : 'text-ink-400'
                              }`}
                            >
                              <Filter className="h-4 w-4" />
                            </button>

                            {/* Filter dropdown */}
                            {activeFilter === column.key && (
                              <div className="absolute top-full right-0 mt-1 p-2 bg-white border border-stone-200 rounded-lg shadow-lg z-50 min-w-48">
                                <Input
                                  size="sm"
                                  placeholder={`Filter ${column.header}...`}
                                  value={filterValue}
                                  onChange={(e) => setFilterValue(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') applyFilter();
                                    if (e.key === 'Escape') setActiveFilter(null);
                                  }}
                                  autoFocus
                                />
                                <Stack direction="horizontal" spacing="sm" className="mt-2">
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => setActiveFilter(null)}
                                  >
                                    Cancel
                                  </Button>
                                  <Button size="sm" variant="primary" onClick={applyFilter}>
                                    Apply
                                  </Button>
                                </Stack>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {filteredData.map((row, rowIndex) => {
                const isFrozen = isRowFrozen(rowIndex);
                const isZebra = zebraStripes && rowIndex % 2 === 1;

                return (
                  <tr
                    key={rowIndex}
                    className={`${isZebra ? 'bg-paper-50' : 'bg-white'} ${
                      isFrozen ? 'sticky z-10' : ''
                    } ${isFrozen ? 'shadow-sm' : ''}`}
                    style={{
                      top: isFrozen ? `${40 + rowIndex * 40}px` : undefined,
                    }}
                  >
                    {/* Row header */}
                    {rowHeaders && (
                      <td
                        className={`${cellPadding} border-b border-r border-stone-200 bg-stone-50 text-ink-500 font-medium sticky left-0 z-10`}
                        style={{ width: 50, minWidth: 50, maxWidth: 50 }}
                      >
                        {Array.isArray(rowHeaders) ? rowHeaders[rowIndex] : rowIndex + 1}
                      </td>
                    )}

                    {/* Data cells */}
                    {row.map((cell, colIndex) => {
                      const column = columns[colIndex];
                      const isFrozenCol = colIndex < frozenColumns;
                      const isEditing =
                        editingCell?.row === rowIndex && editingCell?.col === colIndex;
                      const isSelected =
                        selectedCell?.row === rowIndex && selectedCell?.col === colIndex;
                      const hasFormula = !!cell?.formula;
                      const leftOffset = rowHeaders
                        ? 50 + columns.slice(0, colIndex).reduce((sum, c) => sum + (c.width || 100), 0)
                        : columns.slice(0, colIndex).reduce((sum, c) => sum + (c.width || 100), 0);

                      return (
                        <td
                          key={colIndex}
                          className={`${cellPadding} border-b border-r border-stone-200 text-${
                            column?.align || 'left'
                          } ${isFrozenCol ? 'sticky z-10' : ''} ${
                            isZebra && isFrozenCol ? 'bg-paper-50' : isFrozenCol ? 'bg-white' : ''
                          } ${isSelected ? 'ring-2 ring-inset ring-primary-500' : ''} ${
                            hasFormula ? 'bg-blue-50' : ''
                          } ${cell?.className || ''}`}
                          style={{
                            left: isFrozenCol ? leftOffset : undefined,
                            minWidth: column?.minWidth || 80,
                          }}
                          onClick={() => handleCellClick(rowIndex, colIndex)}
                          onDoubleClick={(e) => handleCellDoubleClick(rowIndex, colIndex, e.currentTarget)}
                        >
                          {isEditing ? (
                            formulas ? (
                              <FormulaAutocomplete
                                value={editValue}
                                onChange={setEditValue}
                                onComplete={handleEditComplete}
                                onCancel={handleEditCancel}
                                anchorRect={editingCellRect}
                                autoFocus
                              />
                            ) : (
                              <input
                                ref={inputRef}
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                onBlur={handleEditComplete}
                                onKeyDown={handleEditKeyDown}
                                className="w-full h-full border-none outline-none bg-transparent"
                                style={{ margin: '-4px', padding: '4px' }}
                              />
                            )
                          ) : (
                            formatValue(cell?.value, column)
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-2 py-1 text-xs text-ink-500 border-t border-stone-200 bg-stone-50 rounded-b-lg">
          <span>
            {filteredData.length} row{filteredData.length !== 1 ? 's' : ''}
            {filters.length > 0 && ` (filtered)`}
          </span>
          {selectedCell && (
            <span>
              {colIndexToLetter(selectedCell.col)}
              {selectedCell.row + 1}
              {data[selectedCell.row]?.[selectedCell.col]?.formula && (
                <span className="ml-2 text-blue-600">
                  {data[selectedCell.row][selectedCell.col].formula}
                </span>
              )}
            </span>
          )}
        </div>
      </div>
    );
  }
);

DataGrid.displayName = 'DataGrid';

export default DataGrid;
