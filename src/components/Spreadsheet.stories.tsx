import type { Meta, StoryObj } from '@storybook/react';
import { Spreadsheet, SpreadsheetReport } from './Spreadsheet';
import type { SpreadsheetCell, Matrix } from './Spreadsheet';
import { useState } from 'react';
import Button from './Button';
import { Calculator } from 'lucide-react';

const meta: Meta<typeof Spreadsheet> = {
  title: 'Components/Spreadsheet',
  component: Spreadsheet,
  parameters: {
    docs: {
      description: {
        component:
          'Interactive spreadsheet component with Excel formula support (280+ formulas via Fast Formula Parser), import/export functionality, and save capabilities. Perfect for report designers and data editing interfaces.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spreadsheet>;

/**
 * Basic spreadsheet with default settings
 */
export const Basic: Story = {
  args: {
    rows: 10,
    columns: 5,
  },
};

/**
 * Spreadsheet with toolbar showing import/export/save actions
 */
export const WithToolbar: Story = {
  args: {
    rows: 15,
    columns: 8,
    showToolbar: true,
    enableImport: true,
    enableExport: true,
    enableSave: true,
    title: 'Data Editor',
    exportFileName: 'my-data.xlsx',
  },
  render: (args) => {
    const [data, setData] = useState<Matrix<SpreadsheetCell>>();

    return (
      <Spreadsheet
        {...args}
        data={data}
        onChange={setData}
        onSave={async (data) => {
          console.log('Saving data:', data);
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }}
      />
    );
  },
};

/**
 * Spreadsheet wrapped in Card component for better presentation
 */
export const InCard: Story = {
  args: {
    rows: 12,
    columns: 6,
    showToolbar: true,
    enableImport: true,
    enableExport: true,
    enableSave: true,
    title: 'Financial Report',
    wrapInCard: true,
  },
  render: (args) => {
    const [data, setData] = useState<Matrix<SpreadsheetCell>>();

    return (
      <Spreadsheet
        {...args}
        data={data}
        onChange={setData}
        onSave={async (data) => {
          console.log('Saving:', data);
          await new Promise((resolve) => setTimeout(resolve, 800));
        }}
      />
    );
  },
};

/**
 * Pre-populated spreadsheet with formula examples
 */
export const WithFormulas: Story = {
  render: () => {
    const initialData: Matrix<SpreadsheetCell> = [
      [
        { value: 'Product', readOnly: true, className: 'font-bold' },
        { value: 'Q1', readOnly: true, className: 'font-bold' },
        { value: 'Q2', readOnly: true, className: 'font-bold' },
        { value: 'Q3', readOnly: true, className: 'font-bold' },
        { value: 'Q4', readOnly: true, className: 'font-bold' },
        { value: 'Total', readOnly: true, className: 'font-bold' },
      ],
      [
        { value: 'Widget A' },
        { value: 15000 },
        { value: 18000 },
        { value: 22000 },
        { value: 19000 },
        { formula: '=SUM(B2:E2)' },
      ],
      [
        { value: 'Widget B' },
        { value: 12000 },
        { value: 13500 },
        { value: 14200 },
        { value: 15800 },
        { formula: '=SUM(B3:E3)' },
      ],
      [
        { value: 'Widget C' },
        { value: 8500 },
        { value: 9200 },
        { value: 11000 },
        { value: 12300 },
        { formula: '=SUM(B4:E4)' },
      ],
      [],
      [
        { value: 'Quarterly Total', readOnly: true, className: 'font-bold' },
        { formula: '=SUM(B2:B4)' },
        { formula: '=SUM(C2:C4)' },
        { formula: '=SUM(D2:D4)' },
        { formula: '=SUM(E2:E4)' },
        { formula: '=SUM(F2:F4)' },
      ],
      [
        { value: 'Average per Product', readOnly: true, className: 'font-bold' },
        { formula: '=AVERAGE(B2:B4)' },
        { formula: '=AVERAGE(C2:C4)' },
        { formula: '=AVERAGE(D2:D4)' },
        { formula: '=AVERAGE(E2:E4)' },
        { formula: '=AVERAGE(F2:F4)' },
      ],
    ];

    const [data, setData] = useState<Matrix<SpreadsheetCell>>(initialData);

    return (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Sales Report with Formulas</h3>
        <p className="text-sm text-ink-600 mb-4">
          This example demonstrates SUM and AVERAGE formulas. Try editing the values in Q1-Q4 columns
          and watch the totals update automatically!
        </p>
        <Spreadsheet
          data={data}
          onChange={setData}
          showToolbar
          enableExport
          enableSave
          title="Quarterly Sales Report"
          wrapInCard
          exportFileName="sales-report.xlsx"
          onSave={async (data) => {
            console.log('Saving report:', data);
            await new Promise((resolve) => setTimeout(resolve, 1000));
          }}
        />
      </div>
    );
  },
};

/**
 * Read-only spreadsheet for viewing reports
 */
export const ReadOnly: Story = {
  render: () => {
    const reportData: Matrix<SpreadsheetCell> = [
      [
        { value: 'Metric', readOnly: true },
        { value: 'Value', readOnly: true },
        { value: 'Target', readOnly: true },
        { value: 'Status', readOnly: true },
      ],
      [{ value: 'Revenue' }, { value: 125000 }, { value: 120000 }, { value: '✓ Met' }],
      [{ value: 'Expenses' }, { value: 85000 }, { value: 90000 }, { value: '✓ Under' }],
      [{ value: 'Profit' }, { formula: '=B2-B3' }, { formula: '=C2-C3' }, { value: '✓ Above' }],
      [{ value: 'Margin %' }, { formula: '=B4/B2*100' }, { formula: '=C4/C2*100' }, { value: '' }],
    ];

    return (
      <Spreadsheet
        data={reportData}
        readOnly
        title="Financial Summary (Read-Only)"
        showToolbar
        enableExport
        wrapInCard
        exportFileName="financial-summary.xlsx"
      />
    );
  },
};

/**
 * SpreadsheetReport component - pre-configured for report designer use
 */
export const ReportDesigner: Story = {
  render: () => {
    const [reportData, setReportData] = useState<Matrix<SpreadsheetCell>>([
      [
        { value: 'Month', readOnly: true },
        { value: 'Sales', readOnly: true },
        { value: 'Costs', readOnly: true },
        { value: 'Profit', readOnly: true },
      ],
      [{ value: 'January' }, { value: 50000 }, { value: 30000 }, { formula: '=B2-C2' }],
      [{ value: 'February' }, { value: 55000 }, { value: 32000 }, { formula: '=B3-C3' }],
      [{ value: 'March' }, { value: 62000 }, { value: 35000 }, { formula: '=B4-C4' }],
      [],
      [
        { value: 'Total', readOnly: true },
        { formula: '=SUM(B2:B4)' },
        { formula: '=SUM(C2:C4)' },
        { formula: '=SUM(D2:D4)' },
      ],
    ]);

    return (
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Report Designer</h2>
        <p className="text-ink-600 mb-6">
          The SpreadsheetReport component comes pre-configured with toolbar, import/export, and save
          functionality. Perfect for building interactive reports!
        </p>

        <SpreadsheetReport
          data={reportData}
          onChange={setReportData}
          title="Monthly Financial Report"
          exportFileName="monthly-report.xlsx"
          onSave={async (data) => {
            console.log('Saving report:', data);
            await new Promise((resolve) => setTimeout(resolve, 1200));
          }}
        />

        <div className="mt-6 p-4 bg-paper-50 border border-stone-200 rounded-lg">
          <h3 className="font-semibold mb-2">Formula Support</h3>
          <p className="text-sm text-ink-600 mb-2">
            Fast Formula Parser provides 280+ Excel formulas including:
          </p>
          <ul className="text-sm text-ink-600 list-disc list-inside space-y-1">
            <li>Math: SUM, AVERAGE, ROUND, ABS, POWER, SQRT</li>
            <li>Logical: IF, AND, OR, NOT, IFERROR</li>
            <li>Lookup: VLOOKUP, HLOOKUP, INDEX</li>
            <li>Text: CONCATENATE, LEFT, RIGHT, TRIM, UPPER, LOWER</li>
            <li>Date/Time: DATE, TODAY, YEAR, MONTH, DAY</li>
            <li>Statistical: COUNT, COUNTIF, MAX, MIN, STDEV</li>
          </ul>
        </div>
      </div>
    );
  },
};

/**
 * Spreadsheet with custom actions in toolbar
 */
export const WithCustomActions: Story = {
  render: () => {
    const [data, setData] = useState<Matrix<SpreadsheetCell>>();

    return (
      <Spreadsheet
        data={data}
        onChange={setData}
        rows={10}
        columns={6}
        showToolbar
        enableImport
        enableExport
        title="Custom Actions Demo"
        actions={
          <>
            <Button
              variant="ghost"
              size="sm"
              icon={<Calculator className="h-4 w-4" />}
              onClick={() => console.log('Calculate clicked')}
            >
              Calculate
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => console.log('Clear clicked')}
            >
              Clear
            </Button>
          </>
        }
        wrapInCard
      />
    );
  },
};

/**
 * Compact spreadsheet for smaller spaces
 */
export const Compact: Story = {
  args: {
    rows: 8,
    columns: 4,
    showToolbar: false,
    className: 'text-sm',
  },
};

/**
 * Large spreadsheet for complex data entry
 */
export const Large: Story = {
  args: {
    rows: 50,
    columns: 20,
    showToolbar: true,
    enableImport: true,
    enableExport: true,
    enableSave: true,
    title: 'Large Dataset Editor',
    wrapInCard: true,
  },
  render: (args) => {
    const [data, setData] = useState<Matrix<SpreadsheetCell>>();

    return (
      <div style={{ height: '600px' }}>
        <Spreadsheet
          {...args}
          data={data}
          onChange={setData}
          onSave={async (data) => {
            console.log('Saving large dataset');
            await new Promise((resolve) => setTimeout(resolve, 1500));
          }}
        />
      </div>
    );
  },
};
