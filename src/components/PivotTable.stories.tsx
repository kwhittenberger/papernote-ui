import type { Meta, StoryObj } from '@storybook/react';
import { PivotTable } from './PivotTable';

const meta: Meta<typeof PivotTable> = {
  title: 'Data Display/PivotTable',
  component: PivotTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'PivotTable transforms flat data into a cross-tabulation table with row labels, column headers, and aggregated values. Ideal for financial reports, sales summaries, and time-based data analysis.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PivotTable>;

// Sample commission data by principal and month
const commissionData = [
  { PrincipalName: 'Allwire', CommissionFiscalMonth: 1, MonthlyCommission: 1250.5 },
  { PrincipalName: 'Allwire', CommissionFiscalMonth: 2, MonthlyCommission: 1875.25 },
  { PrincipalName: 'Allwire', CommissionFiscalMonth: 3, MonthlyCommission: 2100.0 },
  { PrincipalName: 'Allwire', CommissionFiscalMonth: 4, MonthlyCommission: 1950.75 },
  { PrincipalName: 'AMSC', CommissionFiscalMonth: 1, MonthlyCommission: 3200.0 },
  { PrincipalName: 'AMSC', CommissionFiscalMonth: 2, MonthlyCommission: 2850.5 },
  { PrincipalName: 'AMSC', CommissionFiscalMonth: 3, MonthlyCommission: 3100.25 },
  { PrincipalName: 'AMSC', CommissionFiscalMonth: 4, MonthlyCommission: 3450.0 },
  { PrincipalName: 'Buckingham', CommissionFiscalMonth: 1, MonthlyCommission: 850.0 },
  { PrincipalName: 'Buckingham', CommissionFiscalMonth: 2, MonthlyCommission: 925.75 },
  { PrincipalName: 'Buckingham', CommissionFiscalMonth: 3, MonthlyCommission: 1100.5 },
  { PrincipalName: 'Buckingham', CommissionFiscalMonth: 4, MonthlyCommission: 975.25 },
  { PrincipalName: 'Delta Corp', CommissionFiscalMonth: 1, MonthlyCommission: 5500.0 },
  { PrincipalName: 'Delta Corp', CommissionFiscalMonth: 2, MonthlyCommission: 4800.25 },
  { PrincipalName: 'Delta Corp', CommissionFiscalMonth: 3, MonthlyCommission: 5200.5 },
  { PrincipalName: 'Delta Corp', CommissionFiscalMonth: 4, MonthlyCommission: 5750.75 },
];

const monthLabels: Record<number, string> = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

/**
 * Default pivot table showing commission by principal and month
 */
export const Default: Story = {
  args: {
    data: commissionData,
    rowField: 'PrincipalName',
    columnField: 'CommissionFiscalMonth',
    valueField: 'MonthlyCommission',
    columnLabels: monthLabels,
    rowLabel: 'Principal',
    showRowTotals: true,
    showRowAverages: true,
    showColumnTotals: true,
  },
};

/**
 * Without averages column
 */
export const WithoutAverages: Story = {
  args: {
    ...Default.args,
    showRowAverages: false,
  },
};

/**
 * Without totals row
 */
export const WithoutColumnTotals: Story = {
  args: {
    ...Default.args,
    showColumnTotals: false,
  },
};

/**
 * Minimal - just the pivot data
 */
export const Minimal: Story = {
  args: {
    ...Default.args,
    showRowTotals: false,
    showRowAverages: false,
    showColumnTotals: false,
  },
};

// Sales data by region and quarter
const salesData = [
  { Region: 'North', Quarter: 'Q1', Sales: 125000 },
  { Region: 'North', Quarter: 'Q2', Sales: 145000 },
  { Region: 'North', Quarter: 'Q3', Sales: 132000 },
  { Region: 'North', Quarter: 'Q4', Sales: 178000 },
  { Region: 'South', Quarter: 'Q1', Sales: 98000 },
  { Region: 'South', Quarter: 'Q2', Sales: 112000 },
  { Region: 'South', Quarter: 'Q3', Sales: 105000 },
  { Region: 'South', Quarter: 'Q4', Sales: 142000 },
  { Region: 'East', Quarter: 'Q1', Sales: 210000 },
  { Region: 'East', Quarter: 'Q2', Sales: 195000 },
  { Region: 'East', Quarter: 'Q3', Sales: 225000 },
  { Region: 'East', Quarter: 'Q4', Sales: 248000 },
  { Region: 'West', Quarter: 'Q1', Sales: 175000 },
  { Region: 'West', Quarter: 'Q2', Sales: 168000 },
  { Region: 'West', Quarter: 'Q3', Sales: 192000 },
  { Region: 'West', Quarter: 'Q4', Sales: 215000 },
];

/**
 * Sales by region and quarter
 */
export const SalesByRegion: Story = {
  args: {
    data: salesData,
    rowField: 'Region',
    columnField: 'Quarter',
    valueField: 'Sales',
    rowLabel: 'Region',
    showRowTotals: true,
    showRowAverages: true,
    showColumnTotals: true,
  },
};

/**
 * Custom number formatter (no currency symbol)
 */
export const CustomFormatter: Story = {
  args: {
    ...Default.args,
    formatValue: (value: number | null) => {
      if (value === null) return '-';
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);
    },
  },
};

// Sparse data with missing values
const sparseData = [
  { Product: 'Widget A', Month: 1, Units: 150 },
  { Product: 'Widget A', Month: 3, Units: 200 },
  { Product: 'Widget A', Month: 4, Units: 175 },
  { Product: 'Widget B', Month: 1, Units: 300 },
  { Product: 'Widget B', Month: 2, Units: 280 },
  { Product: 'Widget B', Month: 4, Units: 320 },
  { Product: 'Widget C', Month: 2, Units: 90 },
  { Product: 'Widget C', Month: 3, Units: 110 },
];

/**
 * Sparse data with empty cells
 */
export const SparseData: Story = {
  args: {
    data: sparseData,
    rowField: 'Product',
    columnField: 'Month',
    valueField: 'Units',
    columnLabels: monthLabels,
    rowLabel: 'Product',
    showRowTotals: true,
    showColumnTotals: true,
    formatValue: (value: number | null) => {
      if (value === null) return '-';
      return value.toLocaleString();
    },
  },
};
