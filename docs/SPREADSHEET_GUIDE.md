# Spreadsheet Component Guide

A comprehensive guide to using the Spreadsheet component in notebook-ui for building interactive reports with Excel-like formulas.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Basic Usage](#basic-usage)
- [Formula Support](#formula-support)
- [Import & Export](#import--export)
- [Saving Reports](#saving-reports)
- [Advanced Features](#advanced-features)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## Overview

The Spreadsheet component provides Excel-like functionality directly in your web application:

- ✅ **280+ Excel formulas** (SUM, AVERAGE, VLOOKUP, IF, and more)
- ✅ **Import/Export** Excel files (.xlsx, .xls, .csv)
- ✅ **Save/Load** reports to your database
- ✅ **Interactive editing** with keyboard navigation
- ✅ **Copy/Paste** support
- ✅ **Real-time calculation** - formulas update automatically

---

## Getting Started

### Installation

The Spreadsheet component is included in notebook-ui. Ensure you have the latest version:

```bash
npm update notebook-ui
```

### Import

```typescript
import { Spreadsheet, SpreadsheetReport, Matrix, SpreadsheetCell } from 'notebook-ui';
import 'notebook-ui/styles';
```

---

## Basic Usage

### Simple Spreadsheet

Create a basic editable spreadsheet:

```typescript
import { Spreadsheet } from 'notebook-ui';

function MyComponent() {
  return (
    <Spreadsheet
      rows={20}
      columns={10}
      showToolbar
      title="Data Editor"
    />
  );
}
```

### Report Designer (Recommended)

For building reports, use the `SpreadsheetReport` component which comes pre-configured:

```typescript
import { SpreadsheetReport, Matrix, SpreadsheetCell } from 'notebook-ui';
import { useState } from 'react';

function ReportDesigner() {
  const [reportData, setReportData] = useState<Matrix<SpreadsheetCell>>();

  return (
    <SpreadsheetReport
      data={reportData}
      onChange={setReportData}
      title="Monthly Sales Report"
      onSave={async (data) => {
        await api.reports.save(reportId, data);
      }}
      exportFileName="sales-report.xlsx"
    />
  );
}
```

---

## Formula Support

The Spreadsheet supports **280+ Excel formulas** through Fast Formula Parser. Formulas work exactly like Excel!

### Writing Formulas

Formulas always start with `=` and use cell references (e.g., `A1`, `B2`, `C3`):

```typescript
const reportData: Matrix<SpreadsheetCell> = [
  [{ value: 'Item' }, { value: 'Price' }, { value: 'Qty' }, { value: 'Total' }],
  [{ value: 'Widget' }, { value: 10 }, { value: 5 }, { formula: '=B2*C2' }],
  [{ value: 'Gadget' }, { value: 15 }, { value: 3 }, { formula: '=B3*C3' }],
  [{ value: 'Total' }, { value: '' }, { value: '' }, { formula: '=SUM(D2:D3)' }],
];
```

### Common Formula Categories

#### 📊 **Math & Statistical**

| Formula | Description | Example |
|---------|-------------|---------|
| `SUM(range)` | Add numbers | `=SUM(A1:A10)` |
| `AVERAGE(range)` | Calculate mean | `=AVERAGE(B1:B5)` |
| `COUNT(range)` | Count numbers | `=COUNT(C1:C20)` |
| `MAX(range)` | Find maximum | `=MAX(D1:D10)` |
| `MIN(range)` | Find minimum | `=MIN(E1:E10)` |
| `ROUND(number, digits)` | Round number | `=ROUND(A1, 2)` |
| `ABS(number)` | Absolute value | `=ABS(A1)` |

#### 🔢 **Logical**

| Formula | Description | Example |
|---------|-------------|---------|
| `IF(condition, true, false)` | Conditional logic | `=IF(A1>100, "High", "Low")` |
| `AND(expr1, expr2, ...)` | All true? | `=AND(A1>0, B1>0)` |
| `OR(expr1, expr2, ...)` | Any true? | `=OR(A1>100, B1>100)` |
| `NOT(expr)` | Negate | `=NOT(A1>0)` |
| `IFERROR(expr, fallback)` | Handle errors | `=IFERROR(A1/B1, 0)` |

#### 🔍 **Lookup & Reference**

| Formula | Description | Example |
|---------|-------------|---------|
| `VLOOKUP(value, range, col, exact)` | Vertical lookup | `=VLOOKUP(A1, B1:D10, 2, FALSE)` |
| `HLOOKUP(value, range, row, exact)` | Horizontal lookup | `=HLOOKUP(A1, B1:J3, 2, FALSE)` |
| `INDEX(range, row, col)` | Get cell by position | `=INDEX(A1:C10, 5, 2)` |

#### 📝 **Text**

| Formula | Description | Example |
|---------|-------------|---------|
| `CONCATENATE(text1, text2, ...)` | Join text | `=CONCATENATE(A1, " ", B1)` |
| `CONCAT(text1, text2, ...)` | Join text (newer) | `=CONCAT(A1, B1)` |
| `LEFT(text, num)` | First N characters | `=LEFT(A1, 3)` |
| `RIGHT(text, num)` | Last N characters | `=RIGHT(A1, 3)` |
| `UPPER(text)` | Convert to uppercase | `=UPPER(A1)` |
| `LOWER(text)` | Convert to lowercase | `=LOWER(A1)` |
| `TRIM(text)` | Remove extra spaces | `=TRIM(A1)` |

#### 📅 **Date & Time**

| Formula | Description | Example |
|---------|-------------|---------|
| `TODAY()` | Current date | `=TODAY()` |
| `NOW()` | Current date & time | `=NOW()` |
| `DATE(year, month, day)` | Create date | `=DATE(2024, 3, 15)` |
| `YEAR(date)` | Extract year | `=YEAR(A1)` |
| `MONTH(date)` | Extract month | `=MONTH(A1)` |
| `DAY(date)` | Extract day | `=DAY(A1)` |
| `DATEDIF(start, end, unit)` | Date difference | `=DATEDIF(A1, B1, "D")` |

### Formula Examples

#### Example 1: Sales Report with Calculations

```typescript
const salesData: Matrix<SpreadsheetCell> = [
  // Header row
  [
    { value: 'Product', readOnly: true },
    { value: 'Jan', readOnly: true },
    { value: 'Feb', readOnly: true },
    { value: 'Mar', readOnly: true },
    { value: 'Q1 Total', readOnly: true },
  ],
  // Data rows
  [
    { value: 'Widget A' },
    { value: 5000 },
    { value: 6200 },
    { value: 7100 },
    { formula: '=SUM(B2:D2)' },
  ],
  [
    { value: 'Widget B' },
    { value: 3200 },
    { value: 4100 },
    { value: 3800 },
    { formula: '=SUM(B3:D3)' },
  ],
  // Totals row
  [
    { value: 'Monthly Total', readOnly: true },
    { formula: '=SUM(B2:B3)' },
    { formula: '=SUM(C2:C3)' },
    { formula: '=SUM(D2:D3)' },
    { formula: '=SUM(E2:E3)' },
  ],
  // Average row
  [
    { value: 'Average', readOnly: true },
    { formula: '=AVERAGE(B2:B3)' },
    { formula: '=AVERAGE(C2:C3)' },
    { formula: '=AVERAGE(D2:D3)' },
    { formula: '=AVERAGE(E2:E3)' },
  ],
];
```

#### Example 2: Conditional Formatting with IF

```typescript
const performanceData: Matrix<SpreadsheetCell> = [
  [
    { value: 'Employee', readOnly: true },
    { value: 'Sales', readOnly: true },
    { value: 'Target', readOnly: true },
    { value: 'Status', readOnly: true },
  ],
  [
    { value: 'John' },
    { value: 125000 },
    { value: 100000 },
    { formula: '=IF(B2>=C2, "Met", "Below")' },
  ],
  [
    { value: 'Sarah' },
    { value: 95000 },
    { value: 100000 },
    { formula: '=IF(B3>=C3, "Met", "Below")' },
  ],
  [
    { value: 'Mike' },
    { value: 110000 },
    { value: 100000 },
    { formula: '=IF(B4>=C4, "Met", "Below")' },
  ],
];
```

---

## Import & Export

### Enable Import/Export

```typescript
<Spreadsheet
  data={data}
  onChange={setData}
  showToolbar
  enableImport    // Shows "Import" button
  enableExport    // Shows "Export" button
  exportFileName="my-report.xlsx"
/>
```

### Import Excel Files

Users can click the **Import** button to load Excel files (.xlsx, .xls, .csv):

1. Click "Import" button
2. Select file from computer
3. Data loads into spreadsheet
4. All formulas are preserved

### Export to Excel

Users can click the **Export** button to download:

1. Click "Export" button
2. File downloads with specified filename
3. All data and calculated values are exported
4. Open in Microsoft Excel, Google Sheets, etc.

### Programmatic Import

```typescript
import { read, utils } from 'xlsx';

const handleFileUpload = async (file: File) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const workbook = read(e.target?.result, { type: 'binary' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = utils.sheet_to_json(sheet, { header: 1 });

    // Convert to SpreadsheetCell format
    const spreadsheetData = data.map(row =>
      row.map(cell => ({ value: cell }))
    );

    setReportData(spreadsheetData);
  };
  reader.readAsBinaryString(file);
};
```

---

## Saving Reports

### Async Save Handler

The `onSave` prop accepts an async function to persist data:

```typescript
<SpreadsheetReport
  data={reportData}
  onChange={setReportData}
  enableSave
  onSave={async (data) => {
    // Save to your API
    await fetch('/api/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reportData: data }),
    });

    // Or use your API client
    await api.reports.save(reportId, data);
  }}
/>
```

### Save Button States

The Save button automatically shows:
- Loading spinner while saving
- Success toast on completion
- Error toast on failure

### Data Format

The data is saved as a `Matrix<SpreadsheetCell>`:

```typescript
type Matrix<T> = Array<Array<T | undefined>>;

interface SpreadsheetCell {
  value: string | number | boolean;
  formula?: string;
  readOnly?: boolean;
  className?: string;
}
```

Example JSON structure:

```json
[
  [
    { "value": "Product" },
    { "value": "Sales" }
  ],
  [
    { "value": "Widget" },
    { "value": 1000 }
  ],
  [
    { "value": "Total" },
    { "formula": "=SUM(B2:B2)", "value": 1000 }
  ]
]
```

---

## Advanced Features

### Read-Only Cells

Prevent users from editing specific cells:

```typescript
const reportData: Matrix<SpreadsheetCell> = [
  [
    { value: 'Header 1', readOnly: true },
    { value: 'Header 2', readOnly: true },
  ],
  [
    { value: 100 },  // Editable
    { formula: '=A2*2', readOnly: true },  // Formula cell, read-only
  ],
];
```

### Read-Only Spreadsheet

Make the entire spreadsheet view-only:

```typescript
<Spreadsheet
  data={reportData}
  readOnly
  showToolbar
  enableExport  // Still allow export
  title="Financial Summary (Read-Only)"
/>
```

### Custom Toolbar Actions

Add your own buttons to the toolbar:

```typescript
import { Calculator, Printer } from 'lucide-react';
import { Button } from 'notebook-ui';

<Spreadsheet
  data={data}
  onChange={setData}
  showToolbar
  actions={
    <>
      <Button
        variant="ghost"
        size="sm"
        icon={<Calculator className="h-4 w-4" />}
        onClick={handleCalculate}
      >
        Calculate
      </Button>
      <Button
        variant="ghost"
        size="sm"
        icon={<Printer className="h-4 w-4" />}
        onClick={handlePrint}
      >
        Print
      </Button>
    </>
  }
/>
```

### Column and Row Labels

Customize cell references:

```typescript
<Spreadsheet
  data={data}
  onChange={setData}
  columnLabels={['Product', 'Q1', 'Q2', 'Q3', 'Q4']}
  rowLabels={['2022', '2023', '2024']}
/>
```

### Wrap in Card

Display spreadsheet in a styled card:

```typescript
<Spreadsheet
  data={data}
  onChange={setData}
  showToolbar
  wrapInCard
  title="Report Title"
/>
```

---

## Keyboard Shortcuts

The spreadsheet supports Excel-like keyboard navigation:

| Key | Action |
|-----|--------|
| **Arrow Keys** | Navigate between cells |
| **Enter** | Edit cell / Move down |
| **Tab** | Move to next cell (right) |
| **Shift + Tab** | Move to previous cell (left) |
| **Escape** | Cancel editing |
| **Ctrl/Cmd + C** | Copy cell(s) |
| **Ctrl/Cmd + V** | Paste cell(s) |
| **Ctrl/Cmd + X** | Cut cell(s) |
| **Delete** | Clear cell content |
| **F2** | Edit active cell |

---

## Best Practices

### 1. Use Read-Only for Headers

Mark header cells as read-only to prevent accidental editing:

```typescript
[
  { value: 'Column 1', readOnly: true },
  { value: 'Column 2', readOnly: true },
]
```

### 2. Initialize with Empty Data

For new reports, provide initial structure:

```typescript
const [data, setData] = useState<Matrix<SpreadsheetCell>>([
  [{ value: '' }, { value: '' }, { value: '' }],
  [{ value: '' }, { value: '' }, { value: '' }],
]);
```

### 3. Handle Loading States

Show loading while fetching saved reports:

```typescript
const [isLoading, setIsLoading] = useState(true);
const [data, setData] = useState<Matrix<SpreadsheetCell>>();

useEffect(() => {
  loadReport().then(reportData => {
    setData(reportData);
    setIsLoading(false);
  });
}, []);

if (isLoading) return <Loading />;

return <SpreadsheetReport data={data} onChange={setData} />;
```

### 4. Validate Before Saving

Add validation in your save handler:

```typescript
onSave={async (data) => {
  // Check for required fields
  if (!data[0][0]?.value) {
    addErrorMessage('Report name is required');
    return;
  }

  // Validate data
  const isValid = validateReportData(data);
  if (!isValid) {
    addErrorMessage('Invalid data in report');
    return;
  }

  // Save
  await api.reports.save(reportId, data);
  addSuccessMessage('Report saved successfully');
}}
```

### 5. Provide Clear Export Filenames

Use descriptive filenames with dates:

```typescript
const filename = `sales-report-${new Date().toISOString().split('T')[0]}.xlsx`;

<SpreadsheetReport
  exportFileName={filename}
  // ... other props
/>
```

---

## Troubleshooting

### Formulas Not Calculating

**Problem**: Formulas display as text instead of calculating

**Solution**: Ensure the cell has `formula` property, not `value`:

```typescript
// ❌ Wrong
{ value: '=SUM(A1:A10)' }

// ✅ Correct
{ formula: '=SUM(A1:A10)' }
```

### #REF! Error in Formulas

**Problem**: Formula shows `#REF!` error

**Causes**:
- Invalid cell reference (e.g., `=SUM(Z99:Z999)` when spreadsheet is smaller)
- Circular reference (cell references itself)

**Solution**: Check cell references are valid for your spreadsheet size

### #DIV/0! Error

**Problem**: Division by zero error

**Solution**: Use `IFERROR` to handle:

```typescript
{ formula: '=IFERROR(A1/B1, 0)' }
```

### Data Not Saving

**Problem**: Save button doesn't persist data

**Checklist**:
1. Is `onSave` prop provided?
2. Is `enableSave` set to `true`?
3. Check browser console for errors
4. Verify API endpoint is working

### Import Button Not Working

**Problem**: Import button doesn't appear

**Solution**: Ensure `enableImport={true}` and `showToolbar={true}`

### Export Creates Empty File

**Problem**: Exported Excel file has no data

**Solution**: Ensure `data` prop has actual data:

```typescript
console.log('Data before export:', data);
```

---

## Full Example: Complete Report Designer

Here's a complete example bringing it all together:

```typescript
import { useState, useEffect } from 'react';
import { SpreadsheetReport, Matrix, SpreadsheetCell, Loading, addErrorMessage } from 'notebook-ui';

interface ReportDesignerProps {
  reportId: string;
}

export function ReportDesigner({ reportId }: ReportDesignerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [reportData, setReportData] = useState<Matrix<SpreadsheetCell>>();
  const [reportName, setReportName] = useState('');

  // Load existing report
  useEffect(() => {
    const loadReport = async () => {
      try {
        const report = await api.reports.get(reportId);
        setReportData(report.data);
        setReportName(report.name);
      } catch (error) {
        addErrorMessage('Failed to load report');
      } finally {
        setIsLoading(false);
      }
    };

    loadReport();
  }, [reportId]);

  // Save report
  const handleSave = async (data: Matrix<SpreadsheetCell>) => {
    try {
      await api.reports.update(reportId, {
        name: reportName,
        data: data,
        updatedAt: new Date().toISOString(),
      });
    } catch (error) {
      addErrorMessage('Failed to save report');
      throw error; // Re-throw to show error in UI
    }
  };

  if (isLoading) {
    return <Loading message="Loading report..." />;
  }

  const exportFilename = `${reportName.toLowerCase().replace(/\s+/g, '-')}-${
    new Date().toISOString().split('T')[0]
  }.xlsx`;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">{reportName}</h1>

      <SpreadsheetReport
        data={reportData}
        onChange={setReportData}
        title="Report Data"
        onSave={handleSave}
        exportFileName={exportFilename}
      />
    </div>
  );
}
```

---

## Additional Resources

- **Storybook Examples**: Run `npm run storybook` to see interactive examples
- **Formula Reference**: [Fast Formula Parser Documentation](https://github.com/LesterLyu/fast-formula-parser)
- **Excel Import/Export**: [SheetJS Documentation](https://docs.sheetjs.com/)
- **Component Source**: `node_modules/notebook-ui/src/components/Spreadsheet.tsx`

---

## Support

For issues or questions:
1. Check this guide first
2. Review Storybook examples
3. Check component JSDoc comments
4. Open issue in notebook-ui repository

---

**Happy Report Building!** 📊✨
