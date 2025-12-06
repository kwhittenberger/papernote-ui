# @papernote/excel-table

Excel-like spreadsheet component built on Handsontable - an optional addon for [@papernote/ui](https://www.npmjs.com/package/@papernote/ui).

## ⚠️ Important: Licensing

This package uses **Handsontable** which requires a **commercial license** for commercial use.

- **Non-commercial/evaluation**: Free to use with the default evaluation key
- **Commercial use**: Requires a paid license from [Handsontable](https://handsontable.com/pricing)

The base `@papernote/ui` package remains fully MIT-licensed and does not require Handsontable.

## Features

- **400+ Excel formulas** via HyperFormula (SUM, AVERAGE, VLOOKUP, IF, and more)
- **Sorting & Filtering** - Click column headers or use filter dropdowns
- **Frozen rows/columns** - Keep headers visible while scrolling
- **Cell editing** - Double-click to edit, with undo/redo support
- **Context menus** - Right-click for options
- **Copy/paste** - Full clipboard support
- **Column resizing** - Drag column borders
- **Selection** - Click, Shift+click, Ctrl+click for multi-select
- **Zebra striping** - Alternating row colors for readability
- **Export** - Export to CSV

## Installation

```bash
npm install @papernote/excel-table @papernote/ui
```

## Usage

```tsx
import { ExcelTable } from '@papernote/excel-table';
import '@papernote/excel-table/styles';
import '@papernote/ui/styles'; // Required base styles

const data = [
  ['Name', 'Age', 'City'],
  ['John', 30, 'New York'],
  ['Jane', 25, 'Los Angeles'],
];

function App() {
  return (
    <ExcelTable
      data={data}
      colHeaders={true}
      sortable
      filterable
    />
  );
}
```

### With Formulas

```tsx
const salesData = [
  ['Product', 'Q1', 'Q2', 'Total'],
  ['Widget A', 100, 150, '=SUM(B2:C2)'],
  ['Widget B', 200, 250, '=SUM(B3:C3)'],
  ['Total', '=SUM(B2:B3)', '=SUM(C2:C3)', '=SUM(D2:D3)'],
];

<ExcelTable
  data={salesData}
  colHeaders={true}
  fixedRowsTop={1}
  formulas
/>
```

### Read-only Data Viewer

```tsx
<ExcelTable
  data={csvData}
  colHeaders={columnNames}
  readOnly
  sortable
  filterable
  fixedRowsTop={1}
  zebraStripes
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `any[][]` | required | Data array (array of arrays) |
| `onChange` | `(data, changes) => void` | - | Callback when data changes |
| `columns` | `ExcelTableColumn[]` | - | Column configurations |
| `colHeaders` | `boolean \| string[]` | `true` | Column headers |
| `rowHeaders` | `boolean \| string[]` | `true` | Row headers |
| `fixedRowsTop` | `number` | `0` | Frozen rows at top |
| `fixedColumnsStart` | `number` | `0` | Frozen columns at left |
| `sortable` | `boolean` | `false` | Enable sorting |
| `filterable` | `boolean` | `false` | Enable filtering |
| `formulas` | `boolean` | `false` | Enable Excel formulas |
| `contextMenu` | `boolean` | `true` | Enable context menu |
| `resizableColumns` | `boolean` | `true` | Enable column resizing |
| `height` | `number \| string` | `400` | Table height |
| `width` | `number \| string` | `'100%'` | Table width |
| `readOnly` | `boolean` | `false` | Read-only mode |
| `zebraStripes` | `boolean` | `false` | Alternating row colors |
| `showToolbar` | `boolean` | `false` | Show toolbar |
| `title` | `string` | - | Toolbar title |
| `enableExport` | `boolean` | `false` | Show export button |
| `enableSave` | `boolean` | `false` | Show save button |
| `onSave` | `(data) => Promise<void>` | - | Save handler |
| `wrapInCard` | `boolean` | `false` | Wrap in Card component |
| `licenseKey` | `string` | `'non-commercial-and-evaluation'` | Handsontable license key |

## Commercial License

For commercial use, purchase a license from [Handsontable](https://handsontable.com/pricing) and set the `licenseKey` prop:

```tsx
<ExcelTable
  data={data}
  licenseKey="your-commercial-license-key"
  // ... other props
/>
```

## MIT Alternative

If you need a fully MIT-licensed spreadsheet, use the `Spreadsheet` component from `@papernote/ui`:

```tsx
import { Spreadsheet } from '@papernote/ui';
```

The base Spreadsheet component uses `react-spreadsheet` (MIT) with `fast-formula-parser` (MIT) for formula support. It has fewer features (no sorting, filtering, or frozen columns) but is fully MIT-licensed.

## License

This package is MIT-licensed, but it depends on Handsontable which has its own licensing terms. See [Handsontable License](https://handsontable.com/docs/license-key/) for details.
