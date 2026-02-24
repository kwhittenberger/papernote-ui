// =============================================================================
// Types & Interfaces
// =============================================================================

export interface ProcessHealthMetric {
  /** Metric name */
  name: string;
  /** Health status */
  status: 'good' | 'warning' | 'critical';
  /** Display value */
  value: string;
  /** Optional trend indicator */
  trend?: 'up' | 'down' | 'stable';
}

export interface ProcessHealthBarProps {
  /** Process area name */
  processName: string;
  /** Health metrics for this process */
  metrics: ProcessHealthMetric[];
  /** Click handler for the process area */
  onClick?: () => void;
  /** Additional className */
  className?: string;
}

// =============================================================================
// Helpers
// =============================================================================

const healthDot: Record<string, string> = {
  good: 'bg-success-500',
  warning: 'bg-warning-500',
  critical: 'bg-error-500',
};

const healthText: Record<string, string> = {
  good: 'text-success-700',
  warning: 'text-warning-700',
  critical: 'text-error-700',
};

const trendSymbol: Record<string, string> = {
  up: '\u2191',
  down: '\u2193',
  stable: '\u2192',
};

// =============================================================================
// Component
// =============================================================================

/**
 * ProcessHealthBar — Compact horizontal process health overview
 *
 * Shows traffic-light indicators for a process area's KPIs.
 * Used in the persona-adaptive dashboard to show overall process health.
 */
export default function ProcessHealthBar({
  processName,
  metrics,
  onClick,
  className = '',
}: ProcessHealthBarProps) {
  // Overall health: worst of all metrics
  const overallHealth = metrics.some(m => m.status === 'critical') ? 'critical' :
    metrics.some(m => m.status === 'warning') ? 'warning' : 'good';

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
      className={`
        flex items-center gap-4 px-4 py-3 rounded-lg border
        bg-white dark:bg-ink-900 border-paper-200 dark:border-ink-700
        ${onClick ? 'cursor-pointer hover:shadow-sm hover:border-primary-300 transition-all' : ''}
        ${className}
      `}
    >
      {/* Overall health dot + process name */}
      <div className="flex items-center gap-2 min-w-0 flex-shrink-0">
        <span className={`w-3 h-3 rounded-full ${healthDot[overallHealth]}`} />
        <span className="text-sm font-medium text-ink-900 dark:text-ink-100 whitespace-nowrap">
          {processName}
        </span>
      </div>

      {/* Metrics */}
      <div className="flex items-center gap-4 overflow-x-auto flex-1">
        {metrics.map((metric, idx) => (
          <div key={idx} className="flex items-center gap-1.5 flex-shrink-0">
            <span className={`w-1.5 h-1.5 rounded-full ${healthDot[metric.status]}`} />
            <span className="text-xs text-ink-500 whitespace-nowrap">{metric.name}:</span>
            <span className={`text-xs font-medium ${healthText[metric.status]} whitespace-nowrap`}>
              {metric.value}
              {metric.trend && (
                <span className="ml-0.5">{trendSymbol[metric.trend]}</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
