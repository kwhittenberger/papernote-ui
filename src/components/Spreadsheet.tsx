import React, { useState, useCallback } from 'react';
import BaseSpreadsheet, { CellBase, Matrix } from 'react-spreadsheet';
import { utils, writeFile } from 'xlsx';
import Button from './Button';
import Card, { CardHeader, CardTitle, CardContent } from './Card';
import Stack from './Stack';
import { Download, Save } from 'lucide-react';
import { addSuccessMessage, addErrorMessage } from './StatusBar';
import './Spreadsheet.css';

// Re-export types for external use
export type { CellBase, Matrix } from 'react-spreadsheet';

/**
 * Enhanced cell type with formula support
 */
export interface SpreadsheetCell extends CellBase {
  value: string | number | boolean;
  formula?: string;
  readOnly?: boolean;
  className?: string;
}

/**
 * Spreadsheet component props
 */
export interface SpreadsheetProps {
  /** Initial data matrix */
  data?: Matrix<SpreadsheetCell>;
  /** Callback when data changes */
  onChange?: (data: Matrix<SpreadsheetCell>) => void;
  /** Number of rows to display */
  rows?: number;
  /** Number of columns to display */
  columns?: number;
  /** Column labels (A, B, C... if not provided) */
  columnLabels?: string[];
  /** Row labels (1, 2, 3... if not provided) */
  rowLabels?: string[];
  /** Show toolbar with actions */
  showToolbar?: boolean;
  /**
   * Enable Excel import
   * @deprecated Excel import has been disabled due to security vulnerabilities in the xlsx library.
   * This prop is kept for API compatibility but has no effect.
   */
  enableImport?: boolean;
  /** Enable Excel export */
  enableExport?: boolean;
  /** Enable save button */
  enableSave?: boolean;
  /** Save handler */
  onSave?: (data: Matrix<SpreadsheetCell>) => Promise<void> | void;
  /** Title to display in toolbar */
  title?: string;
  /** Additional toolbar actions */
  actions?: React.ReactNode;
  /** Wrap in Card component */
  wrapInCard?: boolean;
  /** Custom className for the spreadsheet container */
  className?: string;
  /** Make entire spreadsheet read-only */
  readOnly?: boolean;
  /** Default export filename */
  exportFileName?: string;
}

/**
 * Spreadsheet - Interactive spreadsheet component with formula support
 *
 * A full-featured spreadsheet component for report designers and data editing.
 * Built on react-spreadsheet with Fast Formula Parser (280+ Excel formulas).
 *
 * **Features:**
 * - Excel-like formula support (SUM, AVERAGE, VLOOKUP, IF, etc.)
 * - Excel import/export with SheetJS
 * - Save/load functionality
 * - Keyboard navigation
 * - Copy/paste support
 * - Customizable styling to match notebook-ui aesthetic
 *
 * @example
 * ```tsx
 * // Basic spreadsheet
 * <Spreadsheet
 *   rows={10}
 *   columns={5}
 *   showToolbar
 * />
 *
 * // Report designer with formulas
 * const [reportData, setReportData] = useState<Matrix<SpreadsheetCell>>([
 *   [{ value: 'Q1' }, { value: 100 }],
 *   [{ value: 'Q2' }, { value: 200 }],
 *   [{ value: 'Total' }, { formula: '=SUM(B1:B2)' }],
 * ]);
 *
 * <Spreadsheet
 *   data={reportData}
 *   onChange={setReportData}
 *   title="Sales Report"
 *   showToolbar
 *   enableImport
 *   enableExport
 *   enableSave
 *   onSave={async (data) => {
 *     await saveReport(data);
 *   }}
 * />
 *
 * // With custom actions
 * <Spreadsheet
 *   data={data}
 *   onChange={setData}
 *   showToolbar
 *   actions={
 *     <Button onClick={handleCustomAction}>Custom Action</Button>
 *   }
 * />
 * ```
 */
export const Spreadsheet: React.FC<SpreadsheetProps> = ({
  data: initialData,
  onChange,
  rows = 20,
  columns = 10,
  columnLabels,
  rowLabels,
  showToolbar = false,
  enableImport: _enableImport = false, // Deprecated - kept for API compatibility
  enableExport = false,
  enableSave = false,
  onSave,
  title,
  actions,
  wrapInCard = false,
  className = '',
  readOnly = false,
  exportFileName = 'spreadsheet.xlsx',
}) => {
  // Initialize data if not provided
  const [data, setData] = useState<Matrix<SpreadsheetCell>>(() => {
    if (initialData) return initialData;
    return Array(rows)
      .fill(null)
      .map(() => Array(columns).fill(null).map(() => ({ value: '' })));
  });

  const [isSaving, setIsSaving] = useState(false);

  // Handle data changes
  const handleChange = useCallback(
    (newData: Matrix<SpreadsheetCell>) => {
      setData(newData);
      onChange?.(newData);
    },
    [onChange]
  );

  // Handle Excel export
  const handleExport = useCallback(() => {
    try {
      // Convert spreadsheet data to worksheet format
      const worksheetData = data.map(row =>
        row.map(cell => {
          // If cell has a formula, export the calculated value
          if (cell?.formula) {
            return cell.value ?? cell.formula;
          }
          return cell?.value ?? '';
        })
      );

      const worksheet = utils.aoa_to_sheet(worksheetData);
      const workbook = utils.book_new();
      utils.book_append_sheet(workbook, worksheet, 'Sheet1');

      writeFile(workbook, exportFileName);
      addSuccessMessage('Excel file exported successfully');
    } catch (error) {
      console.error('Error exporting Excel file:', error);
      addErrorMessage('Failed to export Excel file');
    }
  }, [data, exportFileName]);

  // Handle save
  const handleSave = useCallback(async () => {
    if (!onSave) return;

    setIsSaving(true);
    try {
      await onSave(data);
      addSuccessMessage('Spreadsheet saved successfully');
    } catch (error) {
      console.error('Error saving spreadsheet:', error);
      addErrorMessage('Failed to save spreadsheet');
    } finally {
      setIsSaving(false);
    }
  }, [onSave, data]);

  // Build toolbar
  const toolbar = showToolbar && (
    <Stack direction="horizontal" spacing="md" align="center" className="mb-4">
      {title && <div className="text-lg font-medium text-ink-900 flex-1">{title}</div>}

      {enableExport && (
        <Button
          variant="ghost"
          size="sm"
          icon={<Download className="h-4 w-4" />}
          onClick={handleExport}
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

      {actions}
    </Stack>
  );

  // Spreadsheet component
  const spreadsheet = (
    <div className={`spreadsheet-container ${className}`}>
      <BaseSpreadsheet
        data={data}
        onChange={readOnly ? undefined : handleChange}
        columnLabels={columnLabels}
        rowLabels={rowLabels}
        className="notebook-spreadsheet"
      />
    </div>
  );

  // Wrap in card if requested
  if (wrapInCard) {
    return (
      <Card>
        {(showToolbar || title) && (
          <CardHeader>
            {title && !showToolbar && <CardTitle>{title}</CardTitle>}
            {toolbar}
          </CardHeader>
        )}
        <CardContent>{spreadsheet}</CardContent>
      </Card>
    );
  }

  return (
    <>
      {toolbar}
      {spreadsheet}
    </>
  );
};

/**
 * SpreadsheetReport - Pre-configured spreadsheet for report designer
 *
 * A ready-to-use spreadsheet component specifically designed for building
 * and editing reports with formulas, import/export, and save functionality.
 *
 * @example
 * ```tsx
 * const [reportData, setReportData] = useState<Matrix<SpreadsheetCell>>();
 *
 * <SpreadsheetReport
 *   data={reportData}
 *   onChange={setReportData}
 *   title="Monthly Sales Report"
 *   onSave={async (data) => {
 *     await api.saveReport(reportId, data);
 *   }}
 * />
 * ```
 */
export const SpreadsheetReport: React.FC<
  Omit<SpreadsheetProps, 'showToolbar' | 'enableImport' | 'enableExport' | 'enableSave' | 'wrapInCard'>
> = (props) => {
  return (
    <Spreadsheet
      {...props}
      showToolbar
      enableExport
      enableSave
      wrapInCard
    />
  );
};
