import React, { useState, ReactNode } from 'react';
import { MoreVertical, Settings, Filter, BarChart3, ChevronDown, Code, MessageSquare } from 'lucide-react';
import { translateSqlToNaturalLanguage } from '../utils/sqlToNaturalLanguage';

export interface ControlBarSection {
  key: string;
  icon: ReactNode;
  label: string;
  summary?: string | (() => string);
  content: ReactNode;
  position?: 'left' | 'right';
}

export interface ControlBarProps {
  sections: ControlBarSection[];
  defaultExpanded?: string | null;
  accordionMode?: boolean; // If true, only one section can be open at a time
  className?: string;
}

/**
 * ControlBar - Modular expandable control bar with multiple sections
 *
 * Features:
 * - Accordion-style expandable sections
 * - Configurable left/right positioning
 * - Optional accordion mode (only one section open at a time)
 * - Summary text on collapsed sections
 * - Responsive and accessible
 *
 * @example
 * ```tsx
 * <ControlBar
 *   sections={[
 *     {
 *       key: 'filters',
 *       icon: <Filter className="h-4 w-4" />,
 *       label: 'Filters',
 *       summary: 'Year: 2025 • Month: January',
 *       content: <FilterBar {...filterProps} />,
 *       position: 'right'
 *     },
 *     {
 *       key: 'actions',
 *       icon: <MoreVertical className="h-4 w-4" />,
 *       label: 'Actions',
 *       content: <div>Action buttons...</div>,
 *       position: 'left'
 *     }
 *   ]}
 *   accordionMode={true}
 * />
 * ```
 */
export const ControlBar: React.FC<ControlBarProps> = ({
  sections,
  defaultExpanded = null,
  accordionMode = true,
  className = ''
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(defaultExpanded);

  const toggleSection = (sectionKey: string) => {
    if (accordionMode) {
      // Accordion mode: toggle or switch to new section
      setExpandedSection(expandedSection === sectionKey ? null : sectionKey);
    } else {
      // Multi-expand mode: toggle individual section
      setExpandedSection(expandedSection === sectionKey ? null : sectionKey);
    }
  };

  const leftSections = sections.filter(s => s.position === 'left' || !s.position);
  const rightSections = sections.filter(s => s.position === 'right');

  const renderSectionButton = (section: ControlBarSection) => {
    const isExpanded = expandedSection === section.key;
    const summaryText = typeof section.summary === 'function' ? section.summary() : section.summary;

    return (
      <button
        key={section.key}
        onClick={() => toggleSection(section.key)}
        className={`inline-flex items-center space-x-2 px-3 py-2 rounded-md border transition-colors ${
          isExpanded
            ? 'bg-accent-50 text-accent-700 border-accent-200'
            : 'bg-paper-50 text-ink-700 border-ink-200 hover:bg-paper-100'
        }`}
        aria-expanded={isExpanded ? 'true' : 'false'}
        aria-controls={`control-bar-section-${section.key}`}
      >
        {section.icon}
        <span className="font-medium">{section.label}</span>
        {summaryText && !isExpanded && (
          <>
            <span className="hidden sm:inline text-ink-600">{summaryText}</span>
          </>
        )}
        <ChevronDown
          className={`h-3 w-3 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`}
        />
      </button>
    );
  };

  return (
    <div className={`bg-white border-b border-ink-200 shadow-sm ${className}`}>
      {/* Horizontal Control Bar */}
      <div className="px-6 py-3">
        <div className="flex items-center justify-between text-sm flex-wrap gap-2">
          {/* Left side sections */}
          <div className="flex items-center space-x-1 flex-wrap gap-1">
            {leftSections.map(renderSectionButton)}
          </div>

          {/* Right side sections */}
          <div className="flex items-center space-x-1 flex-wrap gap-1">
            {rightSections.map(renderSectionButton)}
          </div>
        </div>
      </div>

      {/* Expandable Content Sections */}
      {sections.map(section => {
        const isExpanded = expandedSection === section.key;
        if (!isExpanded) return null;

        return (
          <div
            key={section.key}
            id={`control-bar-section-${section.key}`}
            className="px-6 py-4 bg-paper-50 border-t border-ink-200"
            role="region"
            aria-labelledby={`control-bar-button-${section.key}`}
          >
            {section.content}
          </div>
        );
      })}
    </div>
  );
};

/**
 * Pre-configured sections for common use cases
 */

export interface PageControlsSectionProps {
  itemsPerPage: number;
  onItemsPerPageChange: (value: number) => void;
  currentPage: number;
  totalPages: number;
  totalItems?: number;
  itemsPerPageOptions?: number[];
}

export const createPageControlsSection = (props: PageControlsSectionProps): ControlBarSection => {
  const {
    itemsPerPage,
    onItemsPerPageChange,
    currentPage,
    totalPages,
    totalItems,
    itemsPerPageOptions = [10, 25, 50, 100]
  } = props;

  return {
    key: 'pageControls',
    icon: <Settings className="h-4 w-4" />,
    label: 'Page Controls',
    summary: `Page ${currentPage} of ${totalPages}`,
    position: 'left',
    content: (
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="items-per-page" className="text-sm text-ink-600">
            Items per page:
          </label>
          <select
            id="items-per-page"
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            className="text-sm border border-ink-300 rounded px-2 py-1"
            aria-label="Items per page"
          >
            {itemsPerPageOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-ink-600">Page:</span>
          <span className="text-sm font-medium">{currentPage}</span>
          <span className="text-sm text-ink-600">of</span>
          <span className="text-sm font-medium">{totalPages}</span>
        </div>
        {totalItems !== undefined && (
          <div className="text-sm text-ink-600">
            {totalItems.toLocaleString()} total items
          </div>
        )}
      </div>
    )
  };
};

export interface FiltersSectionProps {
  filterContent: ReactNode;
  filterSummary?: string;
}

export const createFiltersSection = (props: FiltersSectionProps): ControlBarSection => {
  const { filterContent, filterSummary = 'No filters applied' } = props;

  return {
    key: 'filters',
    icon: <Filter className="h-4 w-4" />,
    label: 'Search & Filters',
    summary: filterSummary,
    position: 'right',
    content: filterContent
  };
};

export interface ActionsSectionProps {
  actions: ReactNode;
  actionSummary?: string;
}

export const createActionsSection = (props: ActionsSectionProps): ControlBarSection => {
  const { actions, actionSummary } = props;

  return {
    key: 'actions',
    icon: <MoreVertical className="h-4 w-4" />,
    label: 'Actions & View Options',
    summary: actionSummary,
    position: 'left',
    content: (
      <div className="flex flex-wrap items-center gap-3">
        {actions}
      </div>
    )
  };
};

export interface QueryDetailsSectionProps {
  queryTransparencyInfo: {
    apiEndpoint?: string;
    pagination?: {
      currentPage: number;
      totalPages: number;
      pageSize: number;
      totalCount: number;
      startIndex?: number;
      endIndex?: number;
    };
    totalCount?: number;
    appliedFilters?: Array<{
      key: string;
      label: string;
      value: any;
      displayValue?: string;
    }>;
    sorting?: {
      field: string;
      direction: 'asc' | 'desc';
      label?: string;
    };
    executionTime?: number;
    lastUpdated?: Date | string;
    rawQuery?: string; // Server-side SQL query
    relatedData?: Array<{
      entity: string;
      description: string;
      type: 'join' | 'include' | 'lookup';
    }>;
    calculations?: Array<{
      field: string;
      description: string;
      formula?: string;
      type: string;
      example?: string;
    }>;
  };
  recordCount: number;
  filterSummary: string;
  showRawQuery?: boolean; // Enable display of server-side SQL query
}

// Component for query details content that can use hooks
const QueryDetailsContent: React.FC<QueryDetailsSectionProps> = (props) => {
  const { queryTransparencyInfo, recordCount: _recordCount, filterSummary: _filterSummary } = props;
  const [showTechnical, setShowTechnical] = useState(false);

  // Translate SQL to natural language if available
  const naturalLanguage = queryTransparencyInfo.rawQuery
    ? translateSqlToNaturalLanguage(
        queryTransparencyInfo.rawQuery,
        undefined,
        queryTransparencyInfo.relatedData,
        queryTransparencyInfo.appliedFilters,
        queryTransparencyInfo.calculations
      )
    : null;

  return (
    <div className="space-y-4">
      {/* Natural Language Query Description */}
      {props.showRawQuery && naturalLanguage && (
        <div className="col-span-1 lg:col-span-2 xl:col-span-3 bg-accent-50 border border-accent-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4 text-accent-600" />
              <h3 className="font-semibold text-accent-900">What This Query Does</h3>
            </div>
            <button
              onClick={() => setShowTechnical(!showTechnical)}
              className="flex items-center space-x-1 text-xs text-accent-700 hover:text-accent-900 transition-colors"
            >
              <Code className="h-3 w-3" />
              <span>{showTechnical ? 'Hide' : 'Show'} Technical Details</span>
            </button>
          </div>

          <div className="text-accent-900 font-medium text-base mb-2">
            {naturalLanguage.summary}
          </div>

          {naturalLanguage.details.length > 0 && (
            <div className="space-y-1 text-sm text-accent-800">
              {naturalLanguage.details.map((detail, index) => (
                <div key={index} className="leading-relaxed">
                  {detail.startsWith('**') ? (
                    // Bold headers
                    <div className="font-semibold mt-2">{detail.replace(/\*\*/g, '')}</div>
                  ) : detail.startsWith('  •') ? (
                    // Bullet points
                    <div className="ml-4">{detail}</div>
                  ) : (
                    // Regular text
                    <div>{detail}</div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Technical SQL Query (collapsible) */}
          {showTechnical && queryTransparencyInfo.rawQuery && (
            <div className="mt-4 pt-4 border-t border-accent-200">
              <div className="text-xs font-medium text-accent-700 mb-2">Technical SQL Query:</div>
              <div className="bg-white border border-accent-200 rounded p-3">
                <pre className="text-xs font-mono text-ink-700 whitespace-pre-wrap break-words overflow-x-auto max-h-64 overflow-y-auto">
                  {queryTransparencyInfo.rawQuery}
                </pre>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Existing Query Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 text-sm">
        {/* API Endpoint */}
        {queryTransparencyInfo.apiEndpoint && (
          <div className="space-y-1">
            <div className="font-medium text-ink-700">API Endpoint</div>
            <div className="text-ink-600 font-mono text-xs break-all bg-white px-2 py-1 rounded border">
              {queryTransparencyInfo.apiEndpoint}
            </div>
          </div>
        )}

        {/* Pagination */}
        {queryTransparencyInfo.pagination && (
          <div className="space-y-1">
            <div className="font-medium text-ink-700">Pagination</div>
            <div className="text-ink-600">
              <div>
                Page {queryTransparencyInfo.pagination.currentPage} of{' '}
                {queryTransparencyInfo.pagination.totalPages}
              </div>
              <div className="text-xs text-ink-500">
                {queryTransparencyInfo.pagination.pageSize} items per page
              </div>
            </div>
          </div>
        )}

        {/* Total Records */}
        {queryTransparencyInfo.totalCount !== undefined && (
          <div className="space-y-1">
            <div className="font-medium text-ink-700">Dataset</div>
            <div className="text-ink-600">
              <div className="font-semibold text-accent-600">
                {queryTransparencyInfo.totalCount.toLocaleString()} records
              </div>
              {queryTransparencyInfo.pagination && (
                <div className="text-xs text-ink-500">
                  Showing {(queryTransparencyInfo.pagination.startIndex || 0) + 1}-
                  {Math.min(
                    queryTransparencyInfo.pagination.endIndex || 0,
                    queryTransparencyInfo.pagination.totalCount || 0
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Applied Filters */}
        {queryTransparencyInfo.appliedFilters && (
          <div className="space-y-1">
            <div className="font-medium text-ink-700">Active Filters</div>
            <div className="text-ink-600">
              {queryTransparencyInfo.appliedFilters.filter(
                f => f.value !== null && f.value !== undefined && f.value !== ''
              ).length > 0 ? (
                <div className="flex flex-wrap gap-1">
                  {queryTransparencyInfo.appliedFilters
                    .filter(f => f.value !== null && f.value !== undefined && f.value !== '')
                    .map((filter, index) => (
                      <span
                        key={`filter-${filter.key}-${index}`}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-accent-100 text-accent-800"
                      >
                        {filter.label}: {filter.displayValue || String(filter.value)}
                      </span>
                    ))}
                </div>
              ) : (
                <span className="text-ink-500 italic text-xs">No filters applied</span>
              )}
            </div>
          </div>
        )}

        {/* Sorting */}
        {queryTransparencyInfo.sorting && (
          <div className="space-y-1">
            <div className="font-medium text-ink-700">Sorting</div>
            <div className="text-ink-600">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-paper-100 text-ink-800">
                {queryTransparencyInfo.sorting.label || queryTransparencyInfo.sorting.field} (
                {queryTransparencyInfo.sorting.direction === 'asc' ? '↑' : '↓'})
              </span>
            </div>
          </div>
        )}

        {/* Execution Info */}
        <div className="space-y-1">
          <div className="font-medium text-ink-700">Execution</div>
          <div className="text-ink-600">
            {queryTransparencyInfo.executionTime !== undefined && (
              <div className="text-xs">
                <span className="font-medium">{queryTransparencyInfo.executionTime}ms</span>
              </div>
            )}
            {queryTransparencyInfo.lastUpdated && (
              <div className="text-xs text-ink-500">
                {new Date(queryTransparencyInfo.lastUpdated).toLocaleString()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const createQueryDetailsSection = (props: QueryDetailsSectionProps): ControlBarSection => {
  const { recordCount, filterSummary } = props;

  return {
    key: 'queryDetails',
    icon: <BarChart3 className="h-4 w-4" />,
    label: 'Query:',
    summary: () => {
      return (
        <>
          <span className="text-ink-600">{filterSummary}</span>
          <span className="w-1 h-1 bg-ink-400 rounded-full mx-2"></span>
          <span className="text-ink-600">{recordCount.toLocaleString()} records</span>
          <span className="ml-1 text-xs text-ink-500">Show Details</span>
        </>
      ) as any;
    },
    position: 'right',
    content: <QueryDetailsContent {...props} />
  };
};
