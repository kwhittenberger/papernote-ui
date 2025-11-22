# AI Guide: Integrating Spreadsheet Component into Applications

This guide is optimized for AI assistants (like Claude) to help developers integrate the notebook-ui Spreadsheet component into applications. It provides clear patterns, code examples, and integration strategies.

## Quick Reference

**Component Location**: `notebook-ui` package
**Import Path**: `import { Spreadsheet, SpreadsheetReport } from 'notebook-ui'`
**Formula Engine**: Fast Formula Parser (280+ Excel formulas built-in)
**Excel Support**: SheetJS (xlsx) for import/export
**License**: MIT (no restrictions)

---

## Component Overview

### Two Components Available

1. **`Spreadsheet`** - Fully configurable base component
2. **`SpreadsheetReport`** - Pre-configured for report designers (recommended)

### Key Features

- ✅ Excel formula support (280+ functions: SUM, AVERAGE, VLOOKUP, IF, etc.)
- ✅ Import Excel files (.xlsx, .xls, .csv)
- ✅ Export to Excel (.xlsx)
- ✅ Async save/load with database persistence
- ✅ Read-only mode for viewing reports
- ✅ Keyboard navigation (arrows, tab, enter, copy/paste)
- ✅ Styled to match notebook-ui paper aesthetic
- ✅ TypeScript with full type definitions

---

## Installation & Setup

### Step 1: Ensure notebook-ui is Updated

```bash
npm update notebook-ui
```

### Step 2: Import in Your Component

```typescript
import { SpreadsheetReport, Matrix, SpreadsheetCell } from 'notebook-ui';
import { useState } from 'react';
```

**Note**: `'notebook-ui/styles'` should already be imported in your app root.

---

## Basic Integration Patterns

### Pattern 1: New Report Designer (Empty Spreadsheet)

Use when creating a new report from scratch:

```typescript
import { SpreadsheetReport, Matrix, SpreadsheetCell } from 'notebook-ui';
import { useState } from 'react';

export function NewReportDesigner() {
  const [reportData, setReportData] = useState<Matrix<SpreadsheetCell>>([
    // Initialize with header row
    [
      { value: 'Column 1', readOnly: true },
      { value: 'Column 2', readOnly: true },
      { value: 'Column 3', readOnly: true },
    ],
    // Empty data rows
    ...Array(20).fill(null).map(() => [
      { value: '' },
      { value: '' },
      { value: '' },
    ]),
  ]);

  const handleSave = async (data: Matrix<SpreadsheetCell>) => {
    await fetch('/api/reports', {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  return (
    <SpreadsheetReport
      data={reportData}
      onChange={setReportData}
      title="New Report"
      onSave={handleSave}
      exportFileName="new-report.xlsx"
    />
  );
}
```

### Pattern 2: Edit Existing Report (Load from Database)

Use when editing a saved report:

```typescript
import { SpreadsheetReport, Matrix, SpreadsheetCell, Loading } from 'notebook-ui';
import { useState, useEffect } from 'react';

interface ReportEditorProps {
  reportId: string;
}

export function ReportEditor({ reportId }: ReportEditorProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [reportData, setReportData] = useState<Matrix<SpreadsheetCell>>();

  // Load existing report
  useEffect(() => {
    const loadReport = async () => {
      const response = await fetch(`/api/reports/${reportId}`);
      const report = await response.json();
      setReportData(report.data);
      setIsLoading(false);
    };
    loadReport();
  }, [reportId]);

  // Save changes
  const handleSave = async (data: Matrix<SpreadsheetCell>) => {
    await fetch(`/api/reports/${reportId}`, {
      method: 'PUT',
      body: JSON.stringify({ data }),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  if (isLoading) return <Loading />;

  return (
    <SpreadsheetReport
      data={reportData}
      onChange={setReportData}
      title="Edit Report"
      onSave={handleSave}
      exportFileName={`report-${reportId}.xlsx`}
    />
  );
}
```

### Pattern 3: Read-Only Report Viewer

Use when displaying reports without editing:

```typescript
import { Spreadsheet, Matrix, SpreadsheetCell, Loading } from 'notebook-ui';
import { useState, useEffect } from 'react';

export function ReportViewer({ reportId }: { reportId: string }) {
  const [reportData, setReportData] = useState<Matrix<SpreadsheetCell>>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/reports/${reportId}`)
      .then(res => res.json())
      .then(report => {
        setReportData(report.data);
        setIsLoading(false);
      });
  }, [reportId]);

  if (isLoading) return <Loading />;

  return (
    <Spreadsheet
      data={reportData}
      readOnly
      showToolbar
      enableExport
      wrapInCard
      title="Report (Read-Only)"
      exportFileName={`report-${reportId}.xlsx`}
    />
  );
}
```

---

## Data Structure

### Type Definitions

```typescript
// Matrix is a 2D array of cells
type Matrix<T> = Array<Array<T | undefined>>;

// SpreadsheetCell defines a single cell
interface SpreadsheetCell {
  value: string | number | boolean;  // Cell display value
  formula?: string;                  // Optional Excel formula (e.g., "=SUM(A1:A10)")
  readOnly?: boolean;                // Prevent editing
  className?: string;                // Custom CSS class
}
```

### Example Data Structure

```typescript
const reportData: Matrix<SpreadsheetCell> = [
  // Row 1: Headers (read-only)
  [
    { value: 'Product', readOnly: true },
    { value: 'Q1', readOnly: true },
    { value: 'Q2', readOnly: true },
    { value: 'Total', readOnly: true },
  ],
  // Row 2: Data with formula
  [
    { value: 'Widget A' },
    { value: 5000 },
    { value: 6200 },
    { formula: '=SUM(B2:C2)' },  // Auto-calculates to 11200
  ],
  // Row 3: More data
  [
    { value: 'Widget B' },
    { value: 3200 },
    { value: 4100 },
    { formula: '=SUM(B3:C3)' },  // Auto-calculates to 7300
  ],
  // Row 4: Totals row
  [
    { value: 'Total', readOnly: true },
    { formula: '=SUM(B2:B3)' },  // Sums column B
    { formula: '=SUM(C2:C3)' },  // Sums column C
    { formula: '=SUM(D2:D3)' },  // Sums column D
  ],
];
```

### Database Storage

Store as JSON in your database:

**PostgreSQL Example**:
```sql
CREATE TABLE reports (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  data JSONB NOT NULL,  -- Store Matrix<SpreadsheetCell> as JSON
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Save to Database**:
```typescript
const handleSave = async (data: Matrix<SpreadsheetCell>) => {
  await db.reports.update({
    where: { id: reportId },
    data: {
      data: data,  // PostgreSQL JSONB automatically handles the conversion
      updatedAt: new Date(),
    },
  });
};
```

---

## Formula Examples

### Common Business Formulas

```typescript
// Financial calculations
{ formula: '=B2*C2' }                          // Unit price * quantity
{ formula: '=SUM(D2:D10)' }                    // Total revenue
{ formula: '=(B2-C2)/C2*100' }                 // Profit margin %
{ formula: '=ROUND(B2/C2, 2)' }                // Average, rounded to 2 decimals

// Conditional logic
{ formula: '=IF(B2>1000, "High", "Low")' }     // Sales tier
{ formula: '=IF(C2>=D2, "Met", "Below")' }     // Target status
{ formula: '=IF(AND(B2>0, C2>0), B2/C2, 0)' }  // Safe division

// Date calculations
{ formula: '=TODAY()' }                        // Current date
{ formula: '=DATEDIF(A2, B2, "D")' }          // Days between dates
{ formula: '=YEAR(A2)' }                       // Extract year

// Lookups
{ formula: '=VLOOKUP(A2, $E$2:$G$10, 2, FALSE)' }  // Find matching value
{ formula: '=INDEX(B2:D10, 3, 2)' }                // Get cell by row/col

// Aggregations
{ formula: '=AVERAGE(B2:B100)' }               // Mean
{ formula: '=MAX(C2:C100)' }                   // Maximum
{ formula: '=COUNT(D2:D100)' }                 // Count numbers
{ formula: '=COUNTIF(E2:E100, ">100")' }       // Conditional count
```

### Error Handling in Formulas

```typescript
// Handle division by zero
{ formula: '=IFERROR(A2/B2, 0)' }

// Handle missing data
{ formula: '=IFERROR(VLOOKUP(A2, C2:D10, 2, FALSE), "Not Found")' }

// Multiple fallbacks
{ formula: '=IFERROR(A2/B2, IFERROR(A2/C2, 0))' }
```

---

## Component Props Reference

### SpreadsheetReport (Recommended)

Pre-configured component with all features enabled.

```typescript
interface SpreadsheetReportProps {
  data?: Matrix<SpreadsheetCell>;           // Current spreadsheet data
  onChange?: (data: Matrix<SpreadsheetCell>) => void;  // Data change handler
  title?: string;                           // Title in toolbar
  onSave?: (data: Matrix<SpreadsheetCell>) => Promise<void> | void;  // Save handler
  exportFileName?: string;                  // Default: "spreadsheet.xlsx"
  rows?: number;                            // Default: 20
  columns?: number;                         // Default: 10
  columnLabels?: string[];                  // Custom column headers
  rowLabels?: string[];                     // Custom row headers
  readOnly?: boolean;                       // Make entire spreadsheet read-only
  className?: string;                       // Additional CSS classes
  actions?: React.ReactNode;                // Custom toolbar buttons
}
```

**Default Settings**:
- `showToolbar={true}`
- `enableImport={true}`
- `enableExport={true}`
- `enableSave={true}`
- `wrapInCard={true}`

### Spreadsheet (Configurable)

Base component with full control over features.

```typescript
interface SpreadsheetProps {
  data?: Matrix<SpreadsheetCell>;
  onChange?: (data: Matrix<SpreadsheetCell>) => void;
  rows?: number;
  columns?: number;
  columnLabels?: string[];
  rowLabels?: string[];
  showToolbar?: boolean;                    // Show toolbar (default: false)
  enableImport?: boolean;                   // Show import button (default: false)
  enableExport?: boolean;                   // Show export button (default: false)
  enableSave?: boolean;                     // Show save button (default: false)
  onSave?: (data: Matrix<SpreadsheetCell>) => Promise<void> | void;
  title?: string;
  actions?: React.ReactNode;                // Custom toolbar actions
  wrapInCard?: boolean;                     // Wrap in Card component (default: false)
  className?: string;
  readOnly?: boolean;
  exportFileName?: string;
}
```

---

## Integration with Existing Pages

### Add to Existing Page Layout

```typescript
import { Page } from 'notebook-ui';
import { SpreadsheetReport } from 'notebook-ui';

export function ReportDesignerPage() {
  const [reportData, setReportData] = useState<Matrix<SpreadsheetCell>>();

  return (
    <Page title="Report Designer" breadcrumbs={[/* ... */]}>
      <SpreadsheetReport
        data={reportData}
        onChange={setReportData}
        title="Quarterly Report"
        onSave={handleSave}
      />
    </Page>
  );
}
```

### Add to Modal/Dialog

```typescript
import { Modal, SpreadsheetReport } from 'notebook-ui';

export function ReportEditorModal({ isOpen, onClose, reportId }) {
  const [data, setData] = useState<Matrix<SpreadsheetCell>>();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Report"
      size="full"  // Use full size for spreadsheets
    >
      <SpreadsheetReport
        data={data}
        onChange={setData}
        onSave={async (data) => {
          await saveReport(reportId, data);
          onClose();
        }}
      />
    </Modal>
  );
}
```

### Add to Dashboard

```typescript
import { Dashboard, SpreadsheetReport } from 'notebook-ui';

export function DashboardWithReport() {
  return (
    <Dashboard>
      <DashboardHeader title="Analytics Dashboard" />
      <DashboardContent>
        <div className="grid grid-cols-2 gap-6">
          <StatCard title="Revenue" value="$125,000" />
          <StatCard title="Orders" value="1,234" />
        </div>

        <div className="mt-6">
          <SpreadsheetReport
            data={reportData}
            onChange={setReportData}
            title="Detailed Report"
            onSave={handleSave}
          />
        </div>
      </DashboardContent>
    </Dashboard>
  );
}
```

---

## Common Integration Scenarios

### Scenario 1: Generate Report from Query Results

Convert database query results into spreadsheet format:

```typescript
async function generateReportFromQuery() {
  // Fetch data from API
  const queryResults = await fetch('/api/sales').then(r => r.json());

  // Convert to spreadsheet format
  const spreadsheetData: Matrix<SpreadsheetCell> = [
    // Header row
    [
      { value: 'Date', readOnly: true },
      { value: 'Product', readOnly: true },
      { value: 'Quantity', readOnly: true },
      { value: 'Revenue', readOnly: true },
    ],
    // Data rows
    ...queryResults.map(row => [
      { value: row.date },
      { value: row.product },
      { value: row.quantity },
      { value: row.revenue },
    ]),
    // Total row with formulas
    [
      { value: 'Total', readOnly: true },
      { value: '', readOnly: true },
      { formula: `=SUM(C2:C${queryResults.length + 1})` },
      { formula: `=SUM(D2:D${queryResults.length + 1})` },
    ],
  ];

  setReportData(spreadsheetData);
}
```

### Scenario 2: Allow Users to Import Template

Let users upload a pre-built Excel template:

```typescript
export function TemplateBasedReport() {
  const [data, setData] = useState<Matrix<SpreadsheetCell>>();

  return (
    <div>
      <Alert variant="info">
        Import your Excel template to get started. The template should include
        formulas and formatting.
      </Alert>

      <SpreadsheetReport
        data={data}
        onChange={setData}
        title="Template-Based Report"
        onSave={handleSave}
        // enableImport is true by default in SpreadsheetReport
      />
    </div>
  );
}
```

### Scenario 3: Multi-Sheet Reports

Handle multiple sheets by using tabs:

```typescript
import { Tabs, SpreadsheetReport } from 'notebook-ui';

export function MultiSheetReport() {
  const [sheet1Data, setSheet1Data] = useState<Matrix<SpreadsheetCell>>();
  const [sheet2Data, setSheet2Data] = useState<Matrix<SpreadsheetCell>>();

  const tabs = [
    {
      id: 'summary',
      label: 'Summary',
      content: (
        <SpreadsheetReport
          data={sheet1Data}
          onChange={setSheet1Data}
          title="Summary Sheet"
          onSave={handleSaveSummary}
        />
      ),
    },
    {
      id: 'details',
      label: 'Details',
      content: (
        <SpreadsheetReport
          data={sheet2Data}
          onChange={setSheet2Data}
          title="Details Sheet"
          onSave={handleSaveDetails}
        />
      ),
    },
  ];

  return <Tabs tabs={tabs} />;
}
```

---

## API Integration Examples

### REST API

```typescript
// Create new report
async function createReport(data: Matrix<SpreadsheetCell>) {
  const response = await fetch('/api/reports', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'New Report', data }),
  });
  return response.json();
}

// Update existing report
async function updateReport(id: string, data: Matrix<SpreadsheetCell>) {
  await fetch(`/api/reports/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  });
}

// Load report
async function loadReport(id: string) {
  const response = await fetch(`/api/reports/${id}`);
  const report = await response.json();
  return report.data as Matrix<SpreadsheetCell>;
}
```

### GraphQL

```typescript
import { gql, useMutation, useQuery } from '@apollo/client';

const GET_REPORT = gql`
  query GetReport($id: ID!) {
    report(id: $id) {
      id
      name
      data
    }
  }
`;

const UPDATE_REPORT = gql`
  mutation UpdateReport($id: ID!, $data: JSON!) {
    updateReport(id: $id, data: $data) {
      id
      data
    }
  }
`;

export function GraphQLReport({ reportId }: { reportId: string }) {
  const { data: queryData, loading } = useQuery(GET_REPORT, {
    variables: { id: reportId },
  });
  const [updateReport] = useMutation(UPDATE_REPORT);

  const [reportData, setReportData] = useState<Matrix<SpreadsheetCell>>();

  useEffect(() => {
    if (queryData?.report?.data) {
      setReportData(queryData.report.data);
    }
  }, [queryData]);

  const handleSave = async (data: Matrix<SpreadsheetCell>) => {
    await updateReport({
      variables: { id: reportId, data },
    });
  };

  if (loading) return <Loading />;

  return (
    <SpreadsheetReport
      data={reportData}
      onChange={setReportData}
      onSave={handleSave}
    />
  );
}
```

---

## Error Handling

### Handle Save Errors

```typescript
import { addErrorMessage, addSuccessMessage } from 'notebook-ui';

const handleSave = async (data: Matrix<SpreadsheetCell>) => {
  try {
    await api.reports.save(reportId, data);
    addSuccessMessage('Report saved successfully');
  } catch (error) {
    console.error('Save error:', error);
    addErrorMessage('Failed to save report. Please try again.');
    throw error; // Re-throw to show loading state in component
  }
};
```

### Handle Load Errors

```typescript
useEffect(() => {
  const loadReport = async () => {
    try {
      const report = await api.reports.get(reportId);
      setReportData(report.data);
    } catch (error) {
      console.error('Load error:', error);
      addErrorMessage('Failed to load report');
      // Optionally redirect or show error state
    } finally {
      setIsLoading(false);
    }
  };

  loadReport();
}, [reportId]);
```

---

## Testing

### Unit Test Example

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { SpreadsheetReport } from 'notebook-ui';

describe('SpreadsheetReport', () => {
  it('calls onSave when save button clicked', async () => {
    const mockSave = jest.fn();
    const data = [[{ value: 'test' }]];

    render(
      <SpreadsheetReport
        data={data}
        onSave={mockSave}
      />
    );

    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    expect(mockSave).toHaveBeenCalledWith(data);
  });
});
```

---

## Performance Considerations

### Large Datasets

For reports with 1000+ rows:

```typescript
// Use pagination or limit initial rows
const [displayRows, setDisplayRows] = useState(100);

const visibleData = reportData?.slice(0, displayRows);

<SpreadsheetReport
  data={visibleData}
  onChange={setReportData}
  actions={
    <Button onClick={() => setDisplayRows(prev => prev + 100)}>
      Load More Rows
    </Button>
  }
/>
```

### Debounce onChange

For auto-save functionality:

```typescript
import { useMemo } from 'react';
import debounce from 'lodash/debounce';

const debouncedSave = useMemo(
  () => debounce((data: Matrix<SpreadsheetCell>) => {
    api.reports.save(reportId, data);
  }, 2000),
  [reportId]
);

<SpreadsheetReport
  data={data}
  onChange={(newData) => {
    setData(newData);
    debouncedSave(newData);
  }}
/>
```

---

## Quick Checklist for Integration

- [ ] Import `SpreadsheetReport` or `Spreadsheet` from `notebook-ui`
- [ ] Define state: `useState<Matrix<SpreadsheetCell>>()`
- [ ] Implement `onSave` handler (async function)
- [ ] Handle loading state when fetching existing reports
- [ ] Provide `onChange` handler to track data changes
- [ ] Set descriptive `exportFileName` with date/id
- [ ] Add error handling for save/load operations
- [ ] Test import/export functionality
- [ ] Verify formulas calculate correctly
- [ ] Test read-only mode if applicable

---

## Common Mistakes to Avoid

### ❌ Wrong: Using value for formulas

```typescript
{ value: '=SUM(A1:A10)' }  // This displays as text, doesn't calculate
```

### ✅ Correct: Using formula property

```typescript
{ formula: '=SUM(A1:A10)' }  // This calculates and displays result
```

### ❌ Wrong: Not providing onChange

```typescript
<SpreadsheetReport data={data} />  // Data won't update when user edits
```

### ✅ Correct: Provide onChange

```typescript
<SpreadsheetReport data={data} onChange={setData} />
```

### ❌ Wrong: Blocking save handler

```typescript
onSave={(data) => {
  api.save(data);  // Missing async/await, no error handling
}}
```

### ✅ Correct: Async with error handling

```typescript
onSave={async (data) => {
  try {
    await api.save(data);
  } catch (error) {
    addErrorMessage('Save failed');
    throw error;
  }
}}
```

---

## Additional Resources

- **User Guide**: `docs/SPREADSHEET_GUIDE.md` - End-user documentation
- **Storybook**: Run `npm run storybook` in notebook-ui for live examples
- **Source Code**: `node_modules/notebook-ui/src/components/Spreadsheet.tsx`
- **Formula Reference**: [Fast Formula Parser](https://github.com/LesterLyu/fast-formula-parser)

---

**This guide should enable AI assistants to quickly and correctly integrate the Spreadsheet component into any application.** 🤖✨
