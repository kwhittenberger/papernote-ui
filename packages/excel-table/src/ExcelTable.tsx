import React, { useRef, useCallback, useMemo } from 'react';
import { HotTable, HotTableRef } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import { HyperFormula } from 'hyperformula';
import { Download, Save } from 'lucide-react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Stack,
  addSuccessMessage,
  addErrorMessage,
} from '@papernote/ui';

// Import Handsontable styles
import 'handsontable/styles/handsontable.min.css';
import 'handsontable/styles/ht-theme-main.min.css';
import './ExcelTable.css';

// Register all Handsontable modules
registerAllModules();

/**
 * Column configuration for ExcelTable
 */
export interface ExcelTableColumn {
  /** Column data key or index */
  data: string | number;
  /** Column header text */
  title?: string;
  /** Column type */
  type?: 'text' | 'numeric' | 'date' | 'checkbox' | 'dropdown' | 'autocomplete';
  /** Column width in pixels */
  width?: number;
  /** Read-only column */
  readOnly?: boolean;
  /** Dropdown/autocomplete source options */
  source?: string[];
  /** Date format (for date type) */
  dateFormat?: string;
  /** Numeric format (for numeric type) */
  numericFormat?: {
    pattern: string;
    culture?: string;
  };
  /** Text alignment */
  className?: string;
}

/**
 * ExcelTable component props
 */
export interface ExcelTableProps {
  /** Data array - can be array of arrays or array of objects */
  data: any[][];
  /** Callback when data changes */
  onChange?: (data: any[][], changes: any) => void;
  /** Column configurations */
  columns?: ExcelTableColumn[];
  /** Column headers - if not using columns prop */
  colHeaders?: boolean | string[];
  /** Row headers */
  rowHeaders?: boolean | string[];
  /** Fixed/frozen rows at top */
  fixedRowsTop?: number;
  /** Fixed/frozen columns at left */
  fixedColumnsStart?: number;
  /** Enable sorting */
  sortable?: boolean;
  /** Enable filtering */
  filterable?: boolean;
  /** Enable Excel-like formulas (HyperFormula) */
  formulas?: boolean;
  /** Enable context menu */
  contextMenu?: boolean;
  /** Enable column resizing */
  resizableColumns?: boolean;
  /** Enable row resizing */
  resizableRows?: boolean;
  /** Enable dropdown menus in headers */
  dropdownMenu?: boolean;
  /** Height of the table */
  height?: number | string;
  /** Width of the table */
  width?: number | string;
  /** Minimum number of spare rows at bottom */
  minSpareRows?: number;
  /** Minimum number of spare columns at right */
  minSpareCols?: number;
  /** Read-only mode */
  readOnly?: boolean;
  /** Enable Excel-like selection */
  selectionMode?: 'single' | 'range' | 'multiple';
  /** Enable undo/redo */
  undoRedo?: boolean;
  /** Zebra striping for rows */
  zebraStripes?: boolean;
  /** Show toolbar */
  showToolbar?: boolean;
  /** Toolbar title */
  title?: string;
  /** Enable export button */
  enableExport?: boolean;
  /** Export filename */
  exportFileName?: string;
  /** Enable save button */
  enableSave?: boolean;
  /** Save handler */
  onSave?: (data: any[][]) => Promise<void> | void;
  /** Custom toolbar actions */
  actions?: React.ReactNode;
  /** Wrap in Card component */
  wrapInCard?: boolean;
  /** Custom class name */
  className?: string;
  /** License key - required for commercial use */
  licenseKey?: string;
}

/**
 * ExcelTable - Full-featured Excel-like spreadsheet component
 *
 * Built on Handsontable, providing a complete Excel-like experience including:
 * - 400+ Excel formulas (via HyperFormula)
 * - Sorting and filtering
 * - Frozen rows/columns
 * - Column resizing
 * - Context menus
 * - Copy/paste
 * - Undo/redo
 * - And much more
 *
 * **IMPORTANT: Licensing**
 * This component uses Handsontable which requires a commercial license for commercial use.
 * See https://handsontable.com/pricing for licensing options.
 * For evaluation/non-commercial use, the default 'non-commercial-and-evaluation' key is used.
 *
 * @example Basic usage
 * ```tsx
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
 *
 * @example With formulas and frozen header
 * ```tsx
 * const data = [
 *   ['Product', 'Q1', 'Q2', 'Total'],
 *   ['Widget A', 100, 150, '=SUM(B2:C2)'],
 *   ['Widget B', 200, 250, '=SUM(B3:C3)'],
 *   ['Total', '=SUM(B2:B3)', '=SUM(C2:C3)', '=SUM(D2:D3)'],
 * ];
 *
 * <ExcelTable
 *   data={data}
 *   colHeaders={true}
 *   fixedRowsTop={1}
 *   formulas
 *   sortable
 * />
 * ```
 *
 * @example Read-only data viewer
 * ```tsx
 * <ExcelTable
 *   data={csvData}
 *   colHeaders={columnNames}
 *   readOnly
 *   sortable
 *   filterable
 *   fixedRowsTop={1}
 *   zebraStripes
 * />
 * ```
 */
export const ExcelTable: React.FC<ExcelTableProps> = ({
  data: initialData,
  onChange,
  columns,
  colHeaders = true,
  rowHeaders = true,
  fixedRowsTop = 0,
  fixedColumnsStart = 0,
  sortable = false,
  filterable = false,
  formulas = false,
  contextMenu = true,
  resizableColumns = true,
  resizableRows = false,
  dropdownMenu = false,
  height = 400,
  width = '100%',
  minSpareRows = 0,
  minSpareCols = 0,
  readOnly = false,
  selectionMode = 'range',
  undoRedo = true,
  zebraStripes = false,
  showToolbar = false,
  title,
  enableExport = false,
  exportFileName = 'export.csv',
  enableSave = false,
  onSave,
  actions,
  wrapInCard = false,
  className = '',
  licenseKey = 'non-commercial-and-evaluation',
}) => {
  const hotRef = useRef<HotTableRef>(null);
  const [isSaving, setIsSaving] = React.useState(false);

  // Configure HyperFormula for formula support
  const hyperformulaInstance = useMemo(() => {
    if (!formulas) return undefined;
    return HyperFormula.buildEmpty({
      licenseKey: 'gpl-v3',
    });
  }, [formulas]);

  // Handle data changes
  const handleAfterChange = useCallback(
    (changes: any, source: string) => {
      if (source === 'loadData') return;
      if (onChange && hotRef.current?.hotInstance) {
        const currentData = hotRef.current.hotInstance.getData();
        onChange(currentData, changes);
      }
    },
    [onChange]
  );

  // Export to CSV
  const handleExport = useCallback(() => {
    if (!hotRef.current?.hotInstance) return;

    try {
      const exportPlugin = hotRef.current.hotInstance.getPlugin('exportFile');
      exportPlugin.downloadFile('csv', {
        filename: exportFileName.replace('.csv', ''),
        columnHeaders: true,
        rowHeaders: false,
      });
      addSuccessMessage('File exported successfully');
    } catch (error) {
      console.error('Export failed:', error);
      addErrorMessage('Failed to export file');
    }
  }, [exportFileName]);

  // Save handler
  const handleSave = useCallback(async () => {
    if (!onSave || !hotRef.current?.hotInstance) return;

    setIsSaving(true);
    try {
      const currentData = hotRef.current.hotInstance.getData();
      await onSave(currentData);
      addSuccessMessage('Data saved successfully');
    } catch (error) {
      console.error('Save failed:', error);
      addErrorMessage('Failed to save data');
    } finally {
      setIsSaving(false);
    }
  }, [onSave]);

  // Build Handsontable settings
  const settings = useMemo(() => {
    const baseSettings: Record<string, any> = {
      data: initialData,
      colHeaders,
      rowHeaders,
      fixedRowsTop,
      fixedColumnsStart,
      contextMenu,
      manualColumnResize: resizableColumns,
      manualRowResize: resizableRows,
      height,
      width,
      minSpareRows,
      minSpareCols,
      readOnly,
      undo: undoRedo,
      licenseKey,
      afterChange: handleAfterChange,
      stretchH: 'all' as const,
      autoWrapRow: true,
      autoWrapCol: true,
    };

    // Add columns if provided
    if (columns) {
      baseSettings.columns = columns;
    }

    // Selection mode
    if (selectionMode === 'single') {
      baseSettings.selectionMode = 'single';
    } else if (selectionMode === 'multiple') {
      baseSettings.selectionMode = 'multiple';
    }

    // Sorting
    if (sortable) {
      baseSettings.columnSorting = true;
    }

    // Filtering
    if (filterable) {
      baseSettings.filters = true;
      baseSettings.dropdownMenu =
        dropdownMenu || ['filter_by_condition', 'filter_by_value', 'filter_action_bar'];
    } else if (dropdownMenu) {
      baseSettings.dropdownMenu = true;
    }

    // Formulas
    if (formulas && hyperformulaInstance) {
      baseSettings.formulas = {
        engine: hyperformulaInstance,
      };
    }

    // Zebra striping via custom cell renderer
    if (zebraStripes) {
      baseSettings.cells = function (row: number) {
        const cellProperties: Record<string, any> = {};
        if (row % 2 === 1) {
          cellProperties.className = 'excel-table-zebra-row';
        }
        return cellProperties;
      };
    }

    return baseSettings;
  }, [
    initialData,
    columns,
    colHeaders,
    rowHeaders,
    fixedRowsTop,
    fixedColumnsStart,
    sortable,
    filterable,
    formulas,
    hyperformulaInstance,
    contextMenu,
    resizableColumns,
    resizableRows,
    dropdownMenu,
    height,
    width,
    minSpareRows,
    minSpareCols,
    readOnly,
    selectionMode,
    undoRedo,
    zebraStripes,
    licenseKey,
    handleAfterChange,
  ]);

  // Toolbar
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

  // Table component
  const table = (
    <div className={`excel-table-container ${className}`}>
      <HotTable ref={hotRef} {...settings} />
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
        <CardContent>{table}</CardContent>
      </Card>
    );
  }

  return (
    <>
      {toolbar}
      {table}
    </>
  );
};

export default ExcelTable;
