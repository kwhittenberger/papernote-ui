/**
 * Core types for notebook-ui library
 */

import type { QueryTransparencyInfo } from '../components/QueryTransparency';

/**
 * Base interface for all data items that can be displayed in tables
 */
export interface BaseDataItem {
  id: string | number;
  [key: string]: unknown;
}

/**
 * Response from paginated API endpoints
 */
export interface PaginationResponse<T = BaseDataItem> {
  items: T[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  // Query transparency fields (optional)
  executedQuery?: string;
  executionTimeMs?: number;
  // Full query transparency info for QueryTransparency component
  queryInfo?: QueryTransparencyInfo;
}

/**
 * Parameters for fetching paginated data
 */
export interface DataFetchParams {
  page: number;
  pageSize: number;
  filters: Record<string, unknown>;
  sort?: SortConfig | null;
  sortBy?: string | null;
  sortDirection?: 'asc' | 'desc' | null;
  search?: string;
}

/**
 * Sort configuration
 */
export interface SortConfig {
  key: string;
  direction: 'asc' | 'desc';
  label?: string;
}

/**
 * Filter that has been applied to data
 */
export interface AppliedFilter {
  key: string;
  label: string;
  value: unknown;
  displayValue: string;
  type?: string;
}

/**
 * Options for useDataTable hook
 */
export interface UseDataTableOptions<T = BaseDataItem> {
  pageSize?: number;
  initialFilters?: Record<string, unknown>;
  initialSort?: SortConfig | null;
  onDataFetch?: (params: DataFetchParams) => Promise<PaginationResponse<T>>;
  preventFlashing?: boolean;
}

/**
 * Return value from useDataTable hook
 */
export interface UseDataTableReturn<T = BaseDataItem> {
  data: T[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  filters: Record<string, unknown>;
  sort: SortConfig | null | undefined;
  setPage: (page: number) => void;
  setFilters: (filters: Record<string, unknown>) => void;
  setSort: (sort: SortConfig | null) => void;
  refresh: () => void;
}
