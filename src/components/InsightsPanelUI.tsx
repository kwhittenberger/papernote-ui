import { forwardRef } from 'react';
import { TrendingUp, AlertTriangle, Target, Lightbulb, RefreshCw, BrainCircuit } from 'lucide-react';

/** A structured analytics insight */
export interface AnalyticsInsight {
  /** Unique insight identifier */
  id: string;
  /** Short insight title */
  title: string;
  /** Descriptive summary */
  summary: string;
  /** Insight category */
  type: 'trend' | 'anomaly' | 'forecast' | 'recommendation';
  /** Confidence score (0–1) */
  confidence: number;
  /** Optional payload */
  data?: any;
  /** When the insight was generated */
  timestamp: Date;
}

export interface InsightsPanelUIProps {
  /** Array of insights to display */
  insights: AnalyticsInsight[];
  /** Show loading skeleton */
  isLoading?: boolean;
  /** Active filter value */
  filter?: string;
  /** Maximum number of insights to show */
  maxInsights?: number;
  /** Filter change handler */
  onFilterChange?: (filter: string) => void;
  /** Refresh handler */
  onRefresh?: () => void;
  /** Additional CSS classes */
  className?: string;
}

const FILTER_OPTIONS = [
  { key: 'all', label: 'All' },
  { key: 'trend', label: 'Trends' },
  { key: 'anomaly', label: 'Anomalies' },
  { key: 'forecast', label: 'Forecasts' },
  { key: 'recommendation', label: 'Recommendations' },
] as const;

function getTypeIcon(type: AnalyticsInsight['type']) {
  switch (type) {
    case 'trend':
      return <TrendingUp className="w-4 h-4 text-green-600" />;
    case 'anomaly':
      return <AlertTriangle className="w-4 h-4 text-red-600" />;
    case 'forecast':
      return <Target className="w-4 h-4 text-purple-600" />;
    case 'recommendation':
      return <Lightbulb className="w-4 h-4 text-amber-600" />;
  }
}

function getTypeBgColor(type: AnalyticsInsight['type']): string {
  switch (type) {
    case 'trend': return 'bg-green-50';
    case 'anomaly': return 'bg-red-50';
    case 'forecast': return 'bg-purple-50';
    case 'recommendation': return 'bg-amber-50';
  }
}

function getConfidenceBadge(confidence: number) {
  const pct = Math.round(confidence * 100);
  let colorClasses: string;

  if (confidence >= 0.8) {
    colorClasses = 'bg-green-100 text-green-700';
  } else if (confidence >= 0.6) {
    colorClasses = 'bg-yellow-100 text-yellow-700';
  } else {
    colorClasses = 'bg-red-100 text-red-700';
  }

  return (
    <span className={`inline-flex items-center text-[10px] font-medium px-1.5 py-0.5 rounded-full ${colorClasses}`}>
      {pct}%
    </span>
  );
}

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

/**
 * InsightsPanelUI - Structured display of analytics insights.
 *
 * Renders a header with title and refresh button, filter chips
 * (All / Trends / Anomalies / Forecasts / Recommendations), and
 * insight cards with type icon, title, summary, confidence badge,
 * and relative timestamp. Includes loading skeleton and empty state.
 *
 * @example
 * ```tsx
 * <InsightsPanelUI
 *   insights={insights}
 *   isLoading={loading}
 *   filter={activeFilter}
 *   maxInsights={8}
 *   onFilterChange={setFilter}
 *   onRefresh={refreshInsights}
 * />
 * ```
 */
const InsightsPanelUI = forwardRef<HTMLDivElement, InsightsPanelUIProps>(({
  insights,
  isLoading = false,
  filter = 'all',
  maxInsights,
  onFilterChange,
  onRefresh,
  className = '',
}, ref) => {
  const filtered = filter === 'all'
    ? insights
    : insights.filter((i) => i.type === filter);

  const displayed = maxInsights ? filtered.slice(0, maxInsights) : filtered;

  return (
    <div ref={ref} className={`bg-white rounded-lg border border-paper-200 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-paper-200">
        <h3 className="text-lg font-semibold text-ink-900">AI Insights</h3>
        {onRefresh && (
          <button
            onClick={onRefresh}
            disabled={isLoading}
            className="p-1.5 rounded-md text-ink-500 hover:text-ink-700 hover:bg-paper-100 disabled:opacity-40 transition-colors"
            aria-label="Refresh insights"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        )}
      </div>

      {/* Filter chips */}
      {onFilterChange && (
        <div className="px-5 pt-3 pb-1 flex flex-wrap gap-2">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              onClick={() => onFilterChange(opt.key)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                filter === opt.key
                  ? 'bg-primary-500 text-white'
                  : 'bg-paper-100 text-ink-600 hover:bg-paper-200'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Loading skeleton */}
        {isLoading && displayed.length === 0 && (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse rounded-lg border border-paper-200 p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-paper-200 rounded-lg" />
                  <div className="flex-1">
                    <div className="h-4 bg-paper-200 rounded w-2/3 mb-1" />
                    <div className="h-3 bg-paper-100 rounded w-1/3" />
                  </div>
                </div>
                <div className="h-3 bg-paper-100 rounded w-full mb-1" />
                <div className="h-3 bg-paper-100 rounded w-4/5" />
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && displayed.length === 0 && (
          <div className="text-center py-8">
            <BrainCircuit className="w-10 h-10 text-ink-300 mx-auto mb-3" />
            <p className="text-ink-500 text-sm">
              {filter === 'all'
                ? 'No insights available yet.'
                : `No ${filter} insights found.`}
            </p>
          </div>
        )}

        {/* Insight cards */}
        {displayed.map((insight) => (
          <div
            key={insight.id}
            className="rounded-lg border border-paper-200 p-4 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-start gap-3">
              {/* Type icon */}
              <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${getTypeBgColor(insight.type)}`}>
                {getTypeIcon(insight.type)}
              </div>

              <div className="flex-1 min-w-0">
                {/* Title row */}
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-sm font-medium text-ink-900 truncate">{insight.title}</h4>
                  {getConfidenceBadge(insight.confidence)}
                </div>

                {/* Summary */}
                <p className="text-xs text-ink-600 leading-relaxed">{insight.summary}</p>

                {/* Timestamp */}
                <p className="text-[10px] text-ink-400 mt-1.5">
                  {formatRelativeTime(insight.timestamp)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

InsightsPanelUI.displayName = 'InsightsPanelUI';

export default InsightsPanelUI;
