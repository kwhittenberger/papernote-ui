import { useMemo } from 'react';

/**
 * PivotTable - Transforms flat data into a cross-tabulation table
 *
 * Takes data like:
 *   [{ principal: 'A', month: 1, amount: 100 }, { principal: 'A', month: 2, amount: 200 }, ...]
 *
 * And displays it as:
 *   | Principal | January | February | ... | Total | Average |
 *   |-----------|---------|----------|-----|-------|---------|
 *   | A         | $100    | $200     | ... | $300  | $150    |
 */

export interface PivotTableProps<T = Record<string, unknown>> {
  /** Array of data rows to pivot */
  data: T[];
  /** Field name to use for row labels */
  rowField: string;
  /** Field name to use for column headers */
  columnField: string;
  /** Field name containing the values to display */
  valueField: string;
  /** Optional map of column field values to display labels */
  columnLabels?: Record<string | number, string>;
  /** Optional row label header text */
  rowLabel?: string;
  /** Format function for values */
  formatValue?: (value: number | null) => string;
  /** Show row totals column */
  showRowTotals?: boolean;
  /** Show row averages column */
  showRowAverages?: boolean;
  /** Show column totals row */
  showColumnTotals?: boolean;
  /** Custom className */
  className?: string;
  /** Sort columns by label or value */
  sortColumns?: 'label' | 'value' | 'none';
  /** Sort rows alphabetically */
  sortRows?: boolean;
  /** Empty cell placeholder */
  emptyValue?: string;
}

interface PivotedData {
  rowLabels: string[];
  columnLabels: string[];
  columnKeys: (string | number)[];
  matrix: (number | null)[][];
  rowTotals: number[];
  rowAverages: number[];
  columnTotals: number[];
  grandTotal: number;
}

/**
 * Default currency formatter
 */
const defaultFormatValue = (value: number | null): string => {
  if (value === null || value === undefined) return '-';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

/**
 * Transform flat data into pivoted structure
 */
function pivotData<T>(
  data: T[],
  rowField: string,
  columnField: string,
  valueField: string,
  columnLabels?: Record<string | number, string>,
  sortColumns?: 'label' | 'value' | 'none',
  sortRows?: boolean
): PivotedData {
  // Extract unique row and column values
  const rowSet = new Set<string>();
  const columnSet = new Set<string | number>();
  const valueMap = new Map<string, number>();

  for (const row of data) {
    const rowValue = String((row as Record<string, unknown>)[rowField] ?? '');
    const colValue = (row as Record<string, unknown>)[columnField];
    const val = (row as Record<string, unknown>)[valueField];

    if (rowValue) rowSet.add(rowValue);
    if (colValue !== undefined && colValue !== null) columnSet.add(colValue as string | number);

    // Create composite key for the cell
    const key = `${rowValue}|||${colValue}`;
    const numVal = typeof val === 'number' ? val : parseFloat(String(val)) || 0;
    valueMap.set(key, (valueMap.get(key) || 0) + numVal);
  }

  // Sort row labels
  let rowLabels = Array.from(rowSet);
  if (sortRows !== false) {
    rowLabels.sort((a, b) => a.localeCompare(b));
  }

  // Sort column keys
  let columnKeys = Array.from(columnSet);
  if (sortColumns === 'label') {
    columnKeys.sort((a, b) => {
      const labelA = columnLabels?.[a] ?? String(a);
      const labelB = columnLabels?.[b] ?? String(b);
      return labelA.localeCompare(labelB);
    });
  } else if (sortColumns !== 'none') {
    // Default: sort by value (numeric if possible)
    columnKeys.sort((a, b) => {
      const numA = typeof a === 'number' ? a : parseFloat(String(a));
      const numB = typeof b === 'number' ? b : parseFloat(String(b));
      if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
      return String(a).localeCompare(String(b));
    });
  }

  // Build column labels array
  const colLabels = columnKeys.map((k) => columnLabels?.[k] ?? String(k));

  // Build the matrix
  const matrix: (number | null)[][] = [];
  const rowTotals: number[] = [];
  const rowAverages: number[] = [];
  const columnTotals: number[] = new Array(columnKeys.length).fill(0);
  let grandTotal = 0;

  for (const rowLabel of rowLabels) {
    const rowData: (number | null)[] = [];
    let rowSum = 0;
    let rowCount = 0;

    for (let colIdx = 0; colIdx < columnKeys.length; colIdx++) {
      const colKey = columnKeys[colIdx];
      const key = `${rowLabel}|||${colKey}`;
      const value = valueMap.get(key) ?? null;
      rowData.push(value);

      if (value !== null) {
        rowSum += value;
        rowCount++;
        columnTotals[colIdx] += value;
        grandTotal += value;
      }
    }

    matrix.push(rowData);
    rowTotals.push(rowSum);
    rowAverages.push(rowCount > 0 ? rowSum / rowCount : 0);
  }

  return {
    rowLabels,
    columnLabels: colLabels,
    columnKeys,
    matrix,
    rowTotals,
    rowAverages,
    columnTotals,
    grandTotal,
  };
}

/**
 * PivotTable Component
 */
export function PivotTable<T = Record<string, unknown>>({
  data,
  rowField,
  columnField,
  valueField,
  columnLabels,
  rowLabel = '',
  formatValue = defaultFormatValue,
  showRowTotals = true,
  showRowAverages = false,
  showColumnTotals = true,
  className = '',
  sortColumns = 'value',
  sortRows = true,
  emptyValue = '-',
}: PivotTableProps<T>) {
  const pivoted = useMemo(
    () => pivotData(data, rowField, columnField, valueField, columnLabels, sortColumns, sortRows),
    [data, rowField, columnField, valueField, columnLabels, sortColumns, sortRows]
  );

  const formatCell = (value: number | null): string => {
    if (value === null || value === undefined) return emptyValue;
    return formatValue(value);
  };

  // Calculate column totals row average
  const columnTotalsAverage =
    pivoted.columnTotals.length > 0
      ? pivoted.columnTotals.reduce((a, b) => a + b, 0) / pivoted.columnTotals.length
      : 0;

  return (
    <div className={`pivot-table-container ${className}`} style={{ overflowX: 'auto' }}>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px',
          fontFamily: 'inherit',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
            {/* Row label header */}
            <th
              style={{
                padding: '12px 16px',
                textAlign: 'left',
                fontWeight: 600,
                color: '#334155',
                position: 'sticky',
                left: 0,
                backgroundColor: '#f8fafc',
                zIndex: 1,
                minWidth: '150px',
              }}
            >
              {rowLabel}
            </th>
            {/* Column headers */}
            {pivoted.columnLabels.map((label, idx) => (
              <th
                key={idx}
                style={{
                  padding: '12px 16px',
                  textAlign: 'right',
                  fontWeight: 600,
                  color: '#334155',
                  minWidth: '100px',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </th>
            ))}
            {/* Total header */}
            {showRowTotals && (
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'right',
                  fontWeight: 700,
                  color: '#1e40af',
                  backgroundColor: '#eff6ff',
                  minWidth: '100px',
                }}
              >
                Total
              </th>
            )}
            {/* Average header */}
            {showRowAverages && (
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'right',
                  fontWeight: 700,
                  color: '#166534',
                  backgroundColor: '#f0fdf4',
                  minWidth: '100px',
                }}
              >
                Average
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {pivoted.rowLabels.map((rowLabel, rowIdx) => (
            <tr
              key={rowIdx}
              style={{
                borderBottom: '1px solid #e2e8f0',
                backgroundColor: rowIdx % 2 === 0 ? '#ffffff' : '#f8fafc',
              }}
            >
              {/* Row label */}
              <td
                style={{
                  padding: '10px 16px',
                  fontWeight: 500,
                  color: '#1e293b',
                  position: 'sticky',
                  left: 0,
                  backgroundColor: rowIdx % 2 === 0 ? '#ffffff' : '#f8fafc',
                  zIndex: 1,
                }}
              >
                {rowLabel}
              </td>
              {/* Data cells */}
              {pivoted.matrix[rowIdx].map((value, colIdx) => (
                <td
                  key={colIdx}
                  style={{
                    padding: '10px 16px',
                    textAlign: 'right',
                    color: value === null ? '#94a3b8' : '#334155',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {formatCell(value)}
                </td>
              ))}
              {/* Row total */}
              {showRowTotals && (
                <td
                  style={{
                    padding: '10px 16px',
                    textAlign: 'right',
                    fontWeight: 600,
                    color: '#1e40af',
                    backgroundColor: '#eff6ff',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {formatCell(pivoted.rowTotals[rowIdx])}
                </td>
              )}
              {/* Row average */}
              {showRowAverages && (
                <td
                  style={{
                    padding: '10px 16px',
                    textAlign: 'right',
                    fontWeight: 600,
                    color: '#166534',
                    backgroundColor: '#f0fdf4',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {formatCell(pivoted.rowAverages[rowIdx])}
                </td>
              )}
            </tr>
          ))}
          {/* Column totals row */}
          {showColumnTotals && (
            <tr
              style={{
                borderTop: '2px solid #e2e8f0',
                backgroundColor: '#f1f5f9',
                fontWeight: 600,
              }}
            >
              <td
                style={{
                  padding: '12px 16px',
                  fontWeight: 700,
                  color: '#1e293b',
                  position: 'sticky',
                  left: 0,
                  backgroundColor: '#f1f5f9',
                  zIndex: 1,
                }}
              >
                Total
              </td>
              {pivoted.columnTotals.map((total, idx) => (
                <td
                  key={idx}
                  style={{
                    padding: '12px 16px',
                    textAlign: 'right',
                    color: '#1e293b',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {formatCell(total)}
                </td>
              ))}
              {showRowTotals && (
                <td
                  style={{
                    padding: '12px 16px',
                    textAlign: 'right',
                    fontWeight: 700,
                    color: '#1e40af',
                    backgroundColor: '#dbeafe',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {formatCell(pivoted.grandTotal)}
                </td>
              )}
              {showRowAverages && (
                <td
                  style={{
                    padding: '12px 16px',
                    textAlign: 'right',
                    fontWeight: 700,
                    color: '#166534',
                    backgroundColor: '#dcfce7',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {formatCell(columnTotalsAverage)}
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PivotTable;
