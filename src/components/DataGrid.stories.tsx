import type { Meta, StoryObj } from '@storybook/react';
import { DataGrid, DataGridCell, DataGridColumn } from './DataGrid';

const meta: Meta<typeof DataGrid> = {
  title: 'Components/DataGrid',
  component: DataGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
DataGrid is an Excel-like spreadsheet component with formula support and intellisense.

## Features
- **280+ Excel formulas** via fast-formula-parser (MIT licensed)
- **Formula Intellisense** - Autocomplete with function signatures and parameter hints
- **Sorting & Filtering** - Click column headers
- **Frozen rows/columns** - Keep headers visible while scrolling
- **Cell editing** - Double-click to edit
- **Keyboard navigation** - Arrow keys, Enter, Escape, Tab
- **Zebra striping** - Alternating row colors
- **CSV Export** - Export data to CSV

## Formula Intellisense
When editing a cell with \`formulas={true}\`:
1. Type \`=\` to see all available formulas
2. Start typing a function name to filter (e.g., \`=SUM\`, \`=VL\`)
3. Use category tabs to browse (Math, Lookup, Text, Logical, Date, etc.)
4. Arrow keys navigate, Tab/Enter inserts the function
5. After inserting, see parameter hints showing what each argument means

## Supported Formulas
**Math:** SUM, AVERAGE, MIN, MAX, COUNT, ROUND, ABS, SQRT, PRODUCT, MOD...
**Lookup:** VLOOKUP, HLOOKUP, INDEX, MATCH, CHOOSE, OFFSET, INDIRECT...
**Text:** CONCATENATE, LEFT, RIGHT, MID, LEN, UPPER, LOWER, TRIM...
**Logical:** IF, IFS, AND, OR, NOT, IFERROR, SWITCH...
**Date:** TODAY, NOW, DATE, YEAR, MONTH, DAY, DATEDIF, NETWORKDAYS...
**Statistical:** COUNTIF, SUMIF, AVERAGEIF, MEDIAN, STDEV, RANK...
**Financial:** PMT, PV, FV, NPV, IRR, RATE...

## Frozen Rows
- \`'none'\` - No frozen rows
- \`'first'\` - Freeze first row (common for headers)
- \`'selected'\` - Freeze the currently selected row
- \`number\` - Freeze specific number of rows
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

// Sample data
const basicColumns: DataGridColumn[] = [
  { key: 'name', header: 'Name', width: 150, sortable: true, filterable: true },
  { key: 'age', header: 'Age', width: 80, type: 'number', sortable: true, align: 'right' },
  { key: 'city', header: 'City', width: 150, sortable: true, filterable: true },
  { key: 'country', header: 'Country', width: 120, sortable: true },
];

const basicData: DataGridCell[][] = [
  [{ value: 'John Smith' }, { value: 32 }, { value: 'New York' }, { value: 'USA' }],
  [{ value: 'Jane Doe' }, { value: 28 }, { value: 'Los Angeles' }, { value: 'USA' }],
  [{ value: 'Bob Johnson' }, { value: 45 }, { value: 'Chicago' }, { value: 'USA' }],
  [{ value: 'Alice Brown' }, { value: 36 }, { value: 'Houston' }, { value: 'USA' }],
  [{ value: 'Charlie Wilson' }, { value: 29 }, { value: 'Phoenix' }, { value: 'USA' }],
  [{ value: 'Diana Miller' }, { value: 41 }, { value: 'Philadelphia' }, { value: 'USA' }],
  [{ value: 'Edward Davis' }, { value: 33 }, { value: 'San Antonio' }, { value: 'USA' }],
  [{ value: 'Fiona Garcia' }, { value: 27 }, { value: 'San Diego' }, { value: 'USA' }],
];

const salesColumns: DataGridColumn[] = [
  { key: 'product', header: 'Product', width: 150 },
  { key: 'q1', header: 'Q1', width: 100, type: 'number', align: 'right' },
  { key: 'q2', header: 'Q2', width: 100, type: 'number', align: 'right' },
  { key: 'q3', header: 'Q3', width: 100, type: 'number', align: 'right' },
  { key: 'q4', header: 'Q4', width: 100, type: 'number', align: 'right' },
  { key: 'total', header: 'Total', width: 120, type: 'number', align: 'right' },
];

const salesData: DataGridCell[][] = [
  [
    { value: 'Widget A' },
    { value: 1200 },
    { value: 1350 },
    { value: 1100 },
    { value: 1500 },
    { value: 0, formula: '=SUM(B1:E1)' },
  ],
  [
    { value: 'Widget B' },
    { value: 800 },
    { value: 950 },
    { value: 1200 },
    { value: 1100 },
    { value: 0, formula: '=SUM(B2:E2)' },
  ],
  [
    { value: 'Widget C' },
    { value: 2100 },
    { value: 1800 },
    { value: 2200 },
    { value: 2400 },
    { value: 0, formula: '=SUM(B3:E3)' },
  ],
  [
    { value: 'Widget D' },
    { value: 650 },
    { value: 720 },
    { value: 680 },
    { value: 750 },
    { value: 0, formula: '=SUM(B4:E4)' },
  ],
  [
    { value: 'Total', readOnly: true },
    { value: 0, formula: '=SUM(B1:B4)' },
    { value: 0, formula: '=SUM(C1:C4)' },
    { value: 0, formula: '=SUM(D1:D4)' },
    { value: 0, formula: '=SUM(E1:E4)' },
    { value: 0, formula: '=SUM(F1:F4)' },
  ],
];

const flightLogColumns: DataGridColumn[] = [
  { key: 'date', header: 'Date', width: 100, sortable: true },
  { key: 'aircraft', header: 'Aircraft', width: 120, sortable: true, filterable: true },
  { key: 'registration', header: 'Registration', width: 100 },
  { key: 'departure', header: 'Departure', width: 90 },
  { key: 'arrival', header: 'Arrival', width: 90 },
  { key: 'flightTime', header: 'Flight Time', width: 100, type: 'number', align: 'right' },
  { key: 'passengers', header: 'Passengers', width: 100, type: 'number', align: 'right' },
  { key: 'pilot', header: 'Pilot', width: 120, sortable: true, filterable: true },
];

const flightLogData: DataGridCell[][] = [
  [{ value: '2024-01-15' }, { value: 'Cessna 172' }, { value: 'N12345' }, { value: 'KJFK' }, { value: 'KBOS' }, { value: 2.5 }, { value: 3 }, { value: 'John Smith' }],
  [{ value: '2024-01-16' }, { value: 'Piper PA-28' }, { value: 'N67890' }, { value: 'KBOS' }, { value: 'KPHL' }, { value: 1.8 }, { value: 2 }, { value: 'Jane Doe' }],
  [{ value: '2024-01-17' }, { value: 'Cessna 182' }, { value: 'N11111' }, { value: 'KPHL' }, { value: 'KDCA' }, { value: 1.2 }, { value: 4 }, { value: 'Bob Johnson' }],
  [{ value: '2024-01-18' }, { value: 'Beechcraft Baron' }, { value: 'N22222' }, { value: 'KDCA' }, { value: 'KATL' }, { value: 2.1 }, { value: 5 }, { value: 'Alice Brown' }],
  [{ value: '2024-01-19' }, { value: 'Cessna 172' }, { value: 'N12345' }, { value: 'KATL' }, { value: 'KMIA' }, { value: 2.8 }, { value: 3 }, { value: 'John Smith' }],
  [{ value: '2024-01-20' }, { value: 'Piper PA-28' }, { value: 'N67890' }, { value: 'KMIA' }, { value: 'KTPA' }, { value: 0.9 }, { value: 2 }, { value: 'Charlie Wilson' }],
  [{ value: '2024-01-21' }, { value: 'Cessna 182' }, { value: 'N11111' }, { value: 'KTPA' }, { value: 'KJAX' }, { value: 1.1 }, { value: 4 }, { value: 'Diana Miller' }],
  [{ value: '2024-01-22' }, { value: 'Beechcraft Baron' }, { value: 'N22222' }, { value: 'KJAX' }, { value: 'KCLT' }, { value: 1.7 }, { value: 5 }, { value: 'Edward Davis' }],
  [{ value: '2024-01-23' }, { value: 'Cessna 172' }, { value: 'N12345' }, { value: 'KCLT' }, { value: 'KRDU' }, { value: 0.8 }, { value: 3 }, { value: 'Fiona Garcia' }],
  [{ value: '2024-01-24' }, { value: 'Piper PA-28' }, { value: 'N67890' }, { value: 'KRDU' }, { value: 'KRIC' }, { value: 0.6 }, { value: 2 }, { value: 'John Smith' }],
];

/**
 * Basic grid with sorting and filtering
 */
export const Basic: Story = {
  args: {
    data: basicData,
    columns: basicColumns,
    rowHeaders: true,
    height: 350,
  },
};

/**
 * With Excel formulas - demonstrates SUM and cell references
 *
 * **Formula Intellisense:**
 * - Double-click any cell and type `=` to see formula autocomplete
 * - Use arrow keys to navigate, Tab/Enter to insert
 * - Browse by category (Math, Lookup, Text, etc.)
 * - See parameter hints as you type
 *
 * Try typing `=SUM(`, `=VLOOKUP(`, `=IF(` etc.
 */
export const WithFormulas: Story = {
  args: {
    data: salesData,
    columns: salesColumns,
    formulas: true,
    rowHeaders: true,
    height: 300,
    showToolbar: true,
    title: 'Quarterly Sales Report',
  },
};

/**
 * Frozen first row - header stays visible while scrolling
 */
export const FrozenFirstRow: Story = {
  args: {
    data: flightLogData,
    columns: flightLogColumns,
    frozenRows: 'first',
    rowHeaders: true,
    zebraStripes: true,
    height: 300,
    showToolbar: true,
    title: 'Flight Log',
    showFreezeRowToggle: true,
  },
};

/**
 * Frozen columns - first column stays visible while scrolling horizontally
 */
export const FrozenColumns: Story = {
  args: {
    data: flightLogData,
    columns: flightLogColumns,
    frozenColumns: 2,
    rowHeaders: true,
    zebraStripes: true,
    height: 300,
  },
};

/**
 * Read-only data viewer with zebra stripes
 */
export const ReadOnlyViewer: Story = {
  args: {
    data: flightLogData,
    columns: flightLogColumns,
    readOnly: true,
    zebraStripes: true,
    rowHeaders: true,
    height: 350,
    showToolbar: true,
    title: 'Flight Log Viewer',
    enableExport: true,
    exportFileName: 'flight-log.csv',
  },
};

/**
 * With toolbar - export and save functionality
 */
export const WithToolbar: Story = {
  args: {
    data: salesData,
    columns: salesColumns,
    formulas: true,
    showToolbar: true,
    title: 'Sales Dashboard',
    enableExport: true,
    enableSave: true,
    showFreezeRowToggle: true,
    onSave: async (data) => {
      console.log('Saving data:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
    height: 250,
  },
};

/**
 * Compact density - more data in less space
 */
export const CompactDensity: Story = {
  args: {
    data: flightLogData,
    columns: flightLogColumns,
    density: 'compact',
    zebraStripes: true,
    rowHeaders: true,
    height: 300,
  },
};

/**
 * Comfortable density - more space between rows
 */
export const ComfortableDensity: Story = {
  args: {
    data: basicData,
    columns: basicColumns,
    density: 'comfortable',
    zebraStripes: true,
    rowHeaders: true,
    height: 400,
  },
};

/**
 * Editable grid - double-click to edit cells
 */
export const Editable: Story = {
  args: {
    data: [
      [{ value: 'Task 1' }, { value: 'In Progress' }, { value: 'High' }, { value: '2024-02-01' }],
      [{ value: 'Task 2' }, { value: 'Done' }, { value: 'Medium' }, { value: '2024-01-28' }],
      [{ value: 'Task 3' }, { value: 'Pending' }, { value: 'Low' }, { value: '2024-02-05' }],
      [{ value: '' }, { value: '' }, { value: '' }, { value: '' }],
      [{ value: '' }, { value: '' }, { value: '' }, { value: '' }],
    ],
    columns: [
      { key: 'task', header: 'Task', width: 200 },
      { key: 'status', header: 'Status', width: 120 },
      { key: 'priority', header: 'Priority', width: 100 },
      { key: 'dueDate', header: 'Due Date', width: 120 },
    ],
    rowHeaders: true,
    height: 250,
    onChange: (data, row, col) => {
      console.log(`Cell changed at row ${row}, col ${col}:`, data[row][col]);
    },
  },
};

/**
 * Full featured example - all features enabled
 */
export const FullFeatured: Story = {
  args: {
    data: salesData,
    columns: salesColumns,
    formulas: true,
    frozenRows: 'first',
    frozenColumns: 1,
    zebraStripes: true,
    rowHeaders: true,
    showToolbar: true,
    title: 'Full Featured DataGrid',
    enableExport: true,
    enableSave: true,
    showFreezeRowToggle: true,
    onSave: async (data) => {
      console.log('Saving:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
    height: 300,
  },
};

/**
 * Currency formatting example
 */
export const CurrencyFormatting: Story = {
  args: {
    data: [
      [{ value: 'Product A' }, { value: 1234.56 }, { value: 100 }, { value: 0, formula: '=B1*C1' }],
      [{ value: 'Product B' }, { value: 789.99 }, { value: 50 }, { value: 0, formula: '=B2*C2' }],
      [{ value: 'Product C' }, { value: 2345.00 }, { value: 75 }, { value: 0, formula: '=B3*C3' }],
      [{ value: 'Total' }, { value: 0, formula: '=SUM(B1:B3)' }, { value: 0, formula: '=SUM(C1:C3)' }, { value: 0, formula: '=SUM(D1:D3)' }],
    ],
    columns: [
      { key: 'product', header: 'Product', width: 150 },
      { key: 'price', header: 'Price', width: 120, type: 'currency', align: 'right' },
      { key: 'qty', header: 'Quantity', width: 100, type: 'number', align: 'right' },
      { key: 'total', header: 'Total', width: 150, type: 'currency', align: 'right' },
    ],
    formulas: true,
    rowHeaders: true,
    height: 220,
  },
};
