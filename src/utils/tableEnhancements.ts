// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

/**
 * Utility functions for DataTable enhancements
 */

export interface ColumnResize {
  columnId: string;
  width: number;
}

export interface ColumnOrder {
  columnId: string;
  order: number;
}

/**
 * Calculate new column width during resize
 */
export function calculateColumnWidth(
  startX: number,
  currentX: number,
  initialWidth: number,
  minWidth: number = 100,
  maxWidth: number = 1000
): number {
  const delta = currentX - startX;
  const newWidth = initialWidth + delta;
  return Math.max(minWidth, Math.min(maxWidth, newWidth));
}

/**
 * Reorder array based on drag-and-drop indices
 */
export function reorderArray<T>(array: T[], fromIndex: number, toIndex: number): T[] {
  const result = Array.from(array);
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result;
}

/**
 * Save column widths to localStorage
 */
export function saveColumnWidths(tableId: string, widths: Record<string, number>): void {
  try {
    localStorage.setItem(`table-widths-${tableId}`, JSON.stringify(widths));
  } catch (e) {
    console.warn('Failed to save column widths:', e);
  }
}

/**
 * Load column widths from localStorage
 */
export function loadColumnWidths(tableId: string): Record<string, number> | null {
  try {
    const saved = localStorage.getItem(`table-widths-${tableId}`);
    return saved ? JSON.parse(saved) : null;
  } catch (e) {
    console.warn('Failed to load column widths:', e);
    return null;
  }
}

/**
 * Save column order to localStorage
 */
export function saveColumnOrder(tableId: string, order: string[]): void {
  try {
    localStorage.setItem(`table-order-${tableId}`, JSON.stringify(order));
  } catch (e) {
    console.warn('Failed to save column order:', e);
  }
}

/**
 * Load column order from localStorage
 */
export function loadColumnOrder(tableId: string): string[] | null {
  try {
    const saved = localStorage.getItem(`table-order-${tableId}`);
    return saved ? JSON.parse(saved) : null;
  } catch (e) {
    console.warn('Failed to load column order:', e);
    return null;
  }
}
