/**
 * @papernote/excel-table
 *
 * Excel-like spreadsheet component built on Handsontable
 *
 * IMPORTANT: Licensing
 * This package uses Handsontable which requires a commercial license for commercial use.
 * See https://handsontable.com/pricing for licensing options.
 *
 * For evaluation/non-commercial use, the default 'non-commercial-and-evaluation' key is used.
 *
 * @example
 * ```tsx
 * import { ExcelTable } from '@papernote/excel-table';
 * import '@papernote/excel-table/styles';
 *
 * const data = [
 *   ['Name', 'Age', 'City'],
 *   ['John', 30, 'New York'],
 *   ['Jane', 25, 'Los Angeles'],
 * ];
 *
 * <ExcelTable
 *   data={data}
 *   colHeaders={true}
 *   sortable
 *   filterable
 * />
 * ```
 */

export { ExcelTable, default } from './ExcelTable';
export type { ExcelTableProps, ExcelTableColumn } from './ExcelTable';
