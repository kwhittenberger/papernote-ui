
import { useState, useCallback, useEffect } from 'react';
import {
  calculateColumnWidth,
  reorderArray,
  saveColumnWidths,
  loadColumnWidths,
  saveColumnOrder,
  loadColumnOrder,
} from '../utils/tableEnhancements';

export interface UseColumnResizeOptions {
  tableId?: string;
  persist?: boolean;
}

export function useColumnResize(options: UseColumnResizeOptions = {}) {
  const { tableId, persist = false } = options;
  const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
  const [resizing, setResizing] = useState<{
    columnId: string;
    startX: number;
    initialWidth: number;
  } | null>(null);

  // Load saved widths on mount
  useEffect(() => {
    if (persist && tableId) {
      const saved = loadColumnWidths(tableId);
      if (saved) {
        setColumnWidths(saved);
      }
    }
  }, [persist, tableId]);

  // Save widths when they change
  useEffect(() => {
    if (persist && tableId && Object.keys(columnWidths).length > 0) {
      saveColumnWidths(tableId, columnWidths);
    }
  }, [columnWidths, persist, tableId]);

  const startResize = useCallback((columnId: string, startX: number, initialWidth: number) => {
    setResizing({ columnId, startX, initialWidth });
  }, []);

  const resize = useCallback(
    (currentX: number) => {
      if (!resizing) return;

      const newWidth = calculateColumnWidth(
        resizing.startX,
        currentX,
        resizing.initialWidth
      );

      setColumnWidths((prev) => ({
        ...prev,
        [resizing.columnId]: newWidth,
      }));
    },
    [resizing]
  );

  const stopResize = useCallback(() => {
    setResizing(null);
  }, []);

  const getColumnWidth = useCallback(
    (columnId: string, defaultWidth?: number): number | undefined => {
      return columnWidths[columnId] || defaultWidth;
    },
    [columnWidths]
  );

  const resetWidths = useCallback(() => {
    setColumnWidths({});
    if (persist && tableId) {
      localStorage.removeItem(`table-widths-${tableId}`);
    }
  }, [persist, tableId]);

  return {
    columnWidths,
    resizing,
    startResize,
    resize,
    stopResize,
    getColumnWidth,
    resetWidths,
  };
}

export interface UseColumnReorderOptions {
  tableId?: string;
  persist?: boolean;
}

export function useColumnReorder<T>(
  initialColumns: T[],
  options: UseColumnReorderOptions = {}
) {
  const { tableId, persist = false } = options;
  const [columns, setColumns] = useState<T[]>(initialColumns);
  const [dragging, setDragging] = useState<number | null>(null);

  // Load saved order on mount
  useEffect(() => {
    if (persist && tableId && initialColumns.length > 0) {
      const saved = loadColumnOrder(tableId);
      if (saved && saved.length === initialColumns.length) {
        // Reorder columns based on saved order
        const columnMap = new Map<string, T>();
        initialColumns.forEach((col, idx) => {
          const anyCol = col as any;
          const id = anyCol.id || anyCol.key || String(idx);
          columnMap.set(id, col);
        });

        const reordered = saved
          .map((id) => columnMap.get(id))
          .filter((col): col is T => col !== undefined);
        if (reordered.length === initialColumns.length) {
          setColumns(reordered);
        }
      }
    }
  }, [persist, tableId, initialColumns]);

  // Save order when it changes
  useEffect(() => {
    if (persist && tableId && columns.length > 0) {
      const order = columns.map((col, idx) => {
        const anyCol = col as any;
        return anyCol.id || anyCol.key || String(idx);
      });
      saveColumnOrder(tableId, order);
    }
  }, [columns, persist, tableId]);

  const startDrag = useCallback((index: number) => {
    setDragging(index);
  }, []);

  const reorder = useCallback(
    (toIndex: number) => {
      if (dragging === null) return;

      setColumns((prev) => reorderArray(prev, dragging, toIndex));
      setDragging(null);
    },
    [dragging]
  );

  const stopDrag = useCallback(() => {
    setDragging(null);
  }, []);

  const resetOrder = useCallback(() => {
    setColumns(initialColumns);
    if (persist && tableId) {
      localStorage.removeItem(`table-order-${tableId}`);
    }
  }, [initialColumns, persist, tableId]);

  return {
    columns,
    dragging,
    startDrag,
    reorder,
    stopDrag,
    resetOrder,
  };
}
