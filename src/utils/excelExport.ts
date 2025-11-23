import { utils, writeFile, WorkBook } from 'xlsx';

/**
 * Column definition for Excel export
 */
export interface ExcelColumn {
  /** Key in the data object */
  key: string;
  /** Column header label */
  label: string;
  /** Optional formatter function */
  format?: (value: any) => string | number | boolean;
}

/**
 * Options for exporting data to Excel
 */
export interface ExportToExcelOptions {
  /** Array of data objects to export */
  data: any[];
  /** Output filename (default: 'export.xlsx') */
  filename?: string;
  /** Sheet name (default: 'Sheet1') */
  sheetName?: string;
  /** Column definitions for custom headers and ordering */
  columns?: ExcelColumn[];
  /** Include headers row (default: true) */
  includeHeaders?: boolean;
  /** Custom workbook for multi-sheet exports */
  workbook?: WorkBook;
}

/**
 * Export data to Excel file
 *
 * A standalone utility for exporting any data array to Excel format.
 * Works independently of the Spreadsheet component.
 *
 * **Features:**
 * - Export arrays of objects to Excel
 * - Custom column headers and ordering
 * - Value formatting with custom functions
 * - Multi-sheet support
 * - Automatic type handling
 *
 * @example
 * ```typescript
 * // Simple export - uses object keys as headers
 * const data = [
 *   { id: 1, name: 'Product A', price: 29.99 },
 *   { id: 2, name: 'Product B', price: 49.99 },
 * ];
 * exportToExcel({ data, filename: 'products.xlsx' });
 *
 * // Custom columns with formatting
 * exportToExcel({
 *   data: users,
 *   filename: 'users.xlsx',
 *   columns: [
 *     { key: 'id', label: 'ID' },
 *     { key: 'name', label: 'Full Name' },
 *     { key: 'email', label: 'Email Address' },
 *     { key: 'createdAt', label: 'Joined', format: (date) => new Date(date).toLocaleDateString() },
 *     { key: 'isActive', label: 'Status', format: (active) => active ? 'Active' : 'Inactive' },
 *   ],
 * });
 *
 * // Multi-sheet export
 * const wb = utils.book_new();
 * exportToExcel({ data: products, sheetName: 'Products', workbook: wb });
 * exportToExcel({ data: orders, sheetName: 'Orders', workbook: wb });
 * writeFile(wb, 'multi-sheet.xlsx');
 * ```
 *
 * @param options - Export configuration options
 * @returns WorkBook if workbook option provided, otherwise void (auto-downloads)
 */
export function exportToExcel({
  data,
  filename = 'export.xlsx',
  sheetName = 'Sheet1',
  columns,
  includeHeaders = true,
  workbook,
}: ExportToExcelOptions): WorkBook | void {
  if (!data || data.length === 0) {
    throw new Error('No data provided for export');
  }

  let worksheetData: any[][];

  if (columns) {
    // Use custom columns with specific ordering and formatting
    const headers = columns.map((col) => col.label);
    const rows = data.map((row) =>
      columns.map((col) => {
        const value = row[col.key];
        return col.format ? col.format(value) : value ?? '';
      })
    );

    worksheetData = includeHeaders ? [headers, ...rows] : rows;
  } else {
    // Auto-generate from object keys
    if (includeHeaders) {
      const headers = Object.keys(data[0]);
      const rows = data.map((row) => headers.map((key) => row[key] ?? ''));
      worksheetData = [headers, ...rows];
    } else {
      const headers = Object.keys(data[0]);
      worksheetData = data.map((row) => headers.map((key) => row[key] ?? ''));
    }
  }

  const worksheet = utils.aoa_to_sheet(worksheetData);

  // If workbook provided, add sheet and return (for multi-sheet exports)
  if (workbook) {
    utils.book_append_sheet(workbook, worksheet, sheetName);
    return workbook;
  }

  // Otherwise, create workbook and download
  const newWorkbook = utils.book_new();
  utils.book_append_sheet(newWorkbook, worksheet, sheetName);
  writeFile(newWorkbook, filename);
}

/**
 * Export DataTable-compatible data to Excel
 *
 * Helper function specifically designed for exporting DataTable data.
 * Automatically handles common DataTable column configurations.
 *
 * @example
 * ```typescript
 * import { exportDataTableToExcel } from 'notebook-ui';
 *
 * const columns = [
 *   { key: 'id', header: 'ID' },
 *   { key: 'name', header: 'Name' },
 *   { key: 'price', header: 'Price' },
 * ];
 *
 * exportDataTableToExcel({
 *   data: products,
 *   columns: columns,
 *   filename: 'products.xlsx',
 * });
 * ```
 */
export interface DataTableExportOptions {
  /** Array of data objects */
  data: any[];
  /** DataTable column definitions */
  columns: Array<{ key: string; header: string }>;
  /** Output filename */
  filename?: string;
  /** Sheet name */
  sheetName?: string;
}

export function exportDataTableToExcel({
  data,
  columns,
  filename = 'export.xlsx',
  sheetName = 'Sheet1',
}: DataTableExportOptions): void {
  const excelColumns: ExcelColumn[] = columns.map((col) => ({
    key: col.key,
    label: col.header,
  }));

  exportToExcel({
    data,
    columns: excelColumns,
    filename,
    sheetName,
  });
}

/**
 * Create a multi-sheet Excel workbook
 *
 * Utility for creating Excel files with multiple sheets.
 *
 * @example
 * ```typescript
 * import { createMultiSheetExcel } from 'notebook-ui';
 *
 * createMultiSheetExcel({
 *   filename: 'report.xlsx',
 *   sheets: [
 *     { name: 'Products', data: products },
 *     { name: 'Orders', data: orders },
 *     { name: 'Customers', data: customers, columns: customerColumns },
 *   ],
 * });
 * ```
 */
export interface MultiSheetExcelOptions {
  /** Output filename */
  filename: string;
  /** Array of sheet configurations */
  sheets: Array<{
    name: string;
    data: any[];
    columns?: ExcelColumn[];
  }>;
}

export function createMultiSheetExcel({ filename, sheets }: MultiSheetExcelOptions): void {
  const workbook = utils.book_new();

  sheets.forEach((sheet) => {
    exportToExcel({
      data: sheet.data,
      sheetName: sheet.name,
      columns: sheet.columns,
      workbook,
    });
  });

  writeFile(workbook, filename);
}
