import { AlertTriangle, X, ArrowRight } from 'lucide-react';

// =============================================================================
// Types & Interfaces
// =============================================================================

export interface AnomalyBannerProps {
  /** Anomaly title/summary */
  title: string;
  /** Detailed description */
  description?: string;
  /** Severity level */
  severity?: 'info' | 'warning' | 'critical';
  /** Affected entity count */
  affectedCount?: number;
  /** Action button label */
  actionLabel?: string;
  /** Action button handler */
  onAction?: () => void;
  /** Dismiss handler */
  onDismiss?: () => void;
  /** Additional className */
  className?: string;
}

// =============================================================================
// Helpers
// =============================================================================

const severityConfig: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  info:     { bg: 'bg-blue-50 dark:bg-blue-900/20',   border: 'border-blue-200 dark:border-blue-800',   text: 'text-blue-800 dark:text-blue-200',   icon: 'text-blue-500' },
  warning:  { bg: 'bg-warning-50 dark:bg-warning-900/20', border: 'border-warning-200 dark:border-warning-800', text: 'text-warning-800 dark:text-warning-200', icon: 'text-warning-500' },
  critical: { bg: 'bg-error-50 dark:bg-error-900/20',  border: 'border-error-200 dark:border-error-800',  text: 'text-error-800 dark:text-error-200',  icon: 'text-error-500' },
};

// =============================================================================
// Component
// =============================================================================

/**
 * AnomalyBanner — Alert banner for anomaly detection
 *
 * Shows a prominent banner when the system detects unusual patterns.
 * Severity levels: info (FYI), warning (review recommended), critical (immediate action).
 * Used at the top of process views and dashboards.
 */
export default function AnomalyBanner({
  title,
  description,
  severity = 'warning',
  affectedCount,
  actionLabel,
  onAction,
  onDismiss,
  className = '',
}: AnomalyBannerProps) {
  const config = severityConfig[severity];

  return (
    <div
      className={`
        flex items-start gap-3 px-4 py-3 rounded-lg border
        ${config.bg} ${config.border}
        ${className}
      `}
      role="alert"
    >
      {/* Icon */}
      <AlertTriangle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${config.icon}`} />

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className={`text-sm font-medium ${config.text}`}>
            {title}
          </h4>
          {affectedCount !== undefined && (
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${config.bg} ${config.text} font-medium`}>
              {affectedCount} affected
            </span>
          )}
        </div>
        {description && (
          <p className={`text-sm mt-1 ${config.text} opacity-80`}>
            {description}
          </p>
        )}
        {actionLabel && onAction && (
          <button
            type="button"
            onClick={onAction}
            className={`inline-flex items-center gap-1 text-sm font-medium mt-2 ${config.text} hover:underline`}
          >
            {actionLabel}
            <ArrowRight className="h-3 w-3" />
          </button>
        )}
      </div>

      {/* Dismiss */}
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className={`flex-shrink-0 p-1 rounded hover:bg-white/50 transition-colors ${config.text} opacity-60 hover:opacity-100`}
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
