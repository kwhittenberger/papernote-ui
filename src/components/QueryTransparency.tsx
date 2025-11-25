
import { useState } from 'react';

export interface QueryTransparencyInfo {
  appliedFilters?: Array<{
    key: string;
    label: string;
    value: any;
    displayValue?: string;
    type?: 'text' | 'select' | 'date' | 'number' | 'boolean' | 'range';
  }>;
  pagination?: {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalCount: number;
    startIndex?: number;
    endIndex?: number;
  };
  sorting?: {
    field: string;
    direction: 'asc' | 'desc';
    label?: string;
  };
  // REST API transparency (optional)
  apiEndpoint?: string;
  queryParameters?: Record<string, any>;
  // SQL transparency (optional)
  sqlQuery?: string;
  sqlParameters?: Record<string, any>;
  // Common fields
  executionTime?: number;
  totalCount?: number;
  lastUpdated?: Date;
  rawQuery?: string;
  // Related data information
  relatedData?: Array<{
    entity: string;
    description: string;
    type: 'primary' | 'join' | 'include' | 'lookup';
  }>;
  // Backend calculations
  calculations?: Array<{
    field: string;
    description: string;
    formula?: string;
    type: 'computed' | 'aggregation' | 'derived' | 'lookup';
    example?: string;
  }>;
}

export interface QueryTransparencyProps {
  queryInfo: QueryTransparencyInfo;
  className?: string;
  collapsed?: boolean;
  showRawQuery?: boolean;
  showExecutionTime?: boolean;
  onToggleCollapse?: () => void;
}

/**
 * QueryTransparency component provides a consistent way to display
 * the exact filters, query parameters, and dataset information
 * being used across all pages for data transparency.
 */
export default function QueryTransparency({
  queryInfo,
  className = '',
  collapsed: initialCollapsed = true,
  showRawQuery = false,
  showExecutionTime = true,
  onToggleCollapse,
}: QueryTransparencyProps) {
  const [isCollapsed, setIsCollapsed] = useState(initialCollapsed);

  const handleToggleCollapse = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    onToggleCollapse?.();
  };

  const formatValue = (value: any): string => {
    if (value === null || value === undefined || value === '') {
      return 'Not set';
    }
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }
    if (typeof value === 'object') {
      return JSON.stringify(value);
    }
    return String(value);
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleString();
  };

  // Add null check for queryInfo
  if (!queryInfo) {
    return null;
  }

  const hasActiveFilters = queryInfo.appliedFilters?.some(
    filter => filter.value !== null && filter.value !== undefined && filter.value !== ''
  ) || false;

  return (
    <div className={`border border-ink-200 rounded-lg bg-paper-50 ${className}`}>
      {/* Header */}
      <div
        className="flex items-center justify-between p-3 cursor-pointer hover:bg-paper-100 transition-colors"
        onClick={handleToggleCollapse}
      >
        <div className="flex items-center space-x-2">
          <svg
            className={`w-4 h-4 text-ink-500 transition-transform duration-200 ${
              isCollapsed ? 'rotate-0' : 'rotate-90'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <h3 className="text-sm font-medium text-ink-700">
            Dataset Query Information
          </h3>
          {hasActiveFilters && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
              {queryInfo.appliedFilters?.filter(f => f.value !== null && f.value !== undefined && f.value !== '').length || 0} active filter{(queryInfo.appliedFilters?.filter(f => f.value !== null && f.value !== undefined && f.value !== '').length || 0) !== 1 ? 's' : ''}
            </span>
          )}
        </div>
        <div className="text-xs text-ink-500">
          {queryInfo.totalCount !== undefined && (
            <span>{queryInfo.totalCount.toLocaleString()} total records</span>
          )}
        </div>
      </div>

      {/* Collapsed Content */}
      {!isCollapsed && (
        <div className="border-t border-ink-200 p-4 space-y-4">
          {/* API Endpoint */}
          <div className="grid grid-cols-4 gap-4">
            <div className="font-medium text-sm text-ink-700">API Endpoint:</div>
            <div className="col-span-3 text-sm text-ink-600 font-mono break-all">
              {queryInfo.apiEndpoint}
            </div>
          </div>

          {/* Pagination Info */}
          <div className="grid grid-cols-4 gap-4">
            <div className="font-medium text-sm text-ink-700">Pagination:</div>
            <div className="col-span-3 text-sm text-ink-600">
              Page {queryInfo.pagination?.currentPage || 1} of {queryInfo.pagination?.totalPages || 1}
              ({queryInfo.pagination?.pageSize || 0} items per page)
              {(queryInfo.pagination?.totalCount || 0) > 0 && (
                <span className="ml-2 text-ink-500">
                  Showing {(queryInfo.pagination?.startIndex || 0) + 1}-{Math.min(queryInfo.pagination?.endIndex || 0, queryInfo.pagination?.totalCount || 0)}
                  of {(queryInfo.pagination?.totalCount || 0).toLocaleString()}
                </span>
              )}
            </div>
          </div>

          {/* Sorting */}
          {queryInfo.sorting?.field && (
            <div className="grid grid-cols-4 gap-4">
              <div className="font-medium text-sm text-ink-700">Sorting:</div>
              <div className="col-span-3 text-sm text-ink-600">
                {queryInfo.sorting.label || queryInfo.sorting.field} ({queryInfo.sorting.direction === 'asc' ? 'Ascending' : 'Descending'})
              </div>
            </div>
          )}

          {/* Applied Filters */}
          <div className="grid grid-cols-4 gap-4">
            <div className="font-medium text-sm text-ink-700">Applied Filters:</div>
            <div className="col-span-3">
              {hasActiveFilters ? (
                <div className="space-y-2">
                  {(queryInfo.appliedFilters || [])
                    .filter(filter => filter.value !== null && filter.value !== undefined && filter.value !== '')
                    .map((filter, index) => {
                      // Create a unique key based on all filter properties
                      const uniqueKey = `filter-${filter.key}-${JSON.stringify(filter.value)}-${index}`;
                      return (
                        <div key={uniqueKey} className="flex items-center space-x-2">
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-accent-100 text-accent-800">
                            {filter.label}
                          </span>
                          <span className="text-sm text-ink-600">
                            = {filter.displayValue || formatValue(filter.value)}
                          </span>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <span className="text-sm text-ink-500 italic">No filters applied</span>
              )}
            </div>
          </div>

          {/* Related Data Included */}
          {queryInfo.relatedData && queryInfo.relatedData.length > 0 && (
            <div className="grid grid-cols-4 gap-4">
              <div className="font-medium text-sm text-ink-700">Related Data Included:</div>
              <div className="col-span-3">
                <div className="space-y-2">
                  {queryInfo.relatedData.map((related, index) => (
                    <div key={`related-${related.entity}-${index}`} className="flex items-start space-x-2">
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-success-100 text-success-800">
                        {related.entity}
                      </span>
                      <div className="flex-1">
                        <span className="text-sm text-ink-600">{related.description}</span>
                        <span className="ml-2 text-xs text-ink-500">({related.type})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Query Parameters */}
          <div className="grid grid-cols-4 gap-4">
            <div className="font-medium text-sm text-ink-700">Query Parameters:</div>
            <div className="col-span-3">
              <div className="bg-white border border-ink-200 rounded p-2 text-xs font-mono text-ink-600 max-h-32 overflow-y-auto">
                {queryInfo.queryParameters && Object.keys(queryInfo.queryParameters).length > 0 ? (
                  <pre>{JSON.stringify(queryInfo.queryParameters, null, 2)}</pre>
                ) : (
                  <span className="text-ink-500 italic">No query parameters</span>
                )}
              </div>
            </div>
          </div>

          {/* Raw Query (if available and enabled) */}
          {showRawQuery && queryInfo.rawQuery && (
            <div className="grid grid-cols-4 gap-4">
              <div className="font-medium text-sm text-ink-700">Raw Query:</div>
              <div className="col-span-3">
                <div className="bg-white border border-ink-200 rounded p-2 text-xs font-mono text-ink-600 max-h-32 overflow-y-auto">
                  <pre>{queryInfo.rawQuery}</pre>
                </div>
              </div>
            </div>
          )}

          {/* Execution Time and Last Updated */}
          <div className="grid grid-cols-4 gap-4 text-xs text-ink-500 border-t border-ink-200 pt-3">
            <div>Last Updated:</div>
            <div className="col-span-3">{queryInfo.lastUpdated ? formatDate(queryInfo.lastUpdated) : 'Unknown'}</div>
            {showExecutionTime && queryInfo.executionTime !== undefined && (
              <>
                <div>Execution Time:</div>
                <div className="col-span-3">{queryInfo.executionTime}ms</div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
