interface ActiveFilter {
  key: string;
  label: string;
  value: string;
}

interface FilterStatusBannerProps {
  activeFilters: ActiveFilter[];
  resultCount?: number;
  totalCount?: number;
  onClearFilter?: (key: string) => void;
  onClearAll?: () => void;
  className?: string;
}

/**
 * Banner showing active filters and result counts
 */
export function FilterStatusBanner({
  activeFilters,
  resultCount,
  totalCount,
  onClearFilter,
  onClearAll,
  className = ''
}: FilterStatusBannerProps) {
  if (activeFilters.length === 0) return null;

  return (
    <div className={`mb-4 p-3 bg-primary-50 rounded-lg border border-primary-200 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-primary-800 flex-wrap">
          <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span className="flex-shrink-0">Filters active:</span>
          <div className="flex flex-wrap gap-1">
            {activeFilters.map((filter) => (
              <span
                key={filter.key}
                className="inline-flex items-center gap-1 px-2 py-1 bg-primary-100 rounded text-xs"
              >
                {filter.label}: "{filter.value}"
                {onClearFilter && (
                  <button
                    onClick={() => onClearFilter(filter.key)}
                    className="text-primary-600 hover:text-primary-800 ml-1"
                    title={`Remove ${filter.label} filter`}
                  >
                    ×
                  </button>
                )}
              </span>
            ))}
          </div>
          {onClearAll && activeFilters.length > 1 && (
            <button
              onClick={onClearAll}
              className="text-primary-600 hover:text-primary-800 underline text-xs"
            >
              Clear all
            </button>
          )}
        </div>
        {(resultCount !== undefined || totalCount !== undefined) && (
          <div className="text-sm font-medium text-primary-800 flex-shrink-0">
            {resultCount !== undefined && totalCount !== undefined
              ? `${resultCount} of ${totalCount} records`
              : resultCount !== undefined
              ? `${resultCount} records`
              : `${totalCount} records`
            }
          </div>
        )}
      </div>
    </div>
  );
}