import React from 'react';
import ConfidenceIndicator from './ConfidenceIndicator';

// =============================================================================
// Types & Interfaces
// =============================================================================

export interface ConfidenceBreakdown {
  /** Factor name */
  factor: string;
  /** Factor score (0-100) */
  score: number;
  /** Factor description */
  description?: string;
}

export interface ReviewAction {
  /** Button label */
  label: string;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  /** Click handler */
  onClick: () => void;
  /** Icon */
  icon?: React.ReactNode;
}

export interface ReviewDecisionCardProps {
  /** Card title — what needs review */
  title: string;
  /** Description */
  description?: string;
  /** Overall confidence score (0-100) */
  confidence: number;
  /** Confidence breakdown by factor */
  breakdown?: ConfidenceBreakdown[];
  /** System recommendation */
  recommendation?: string;
  /** Available actions (approve, reject, etc.) */
  actions: ReviewAction[];
  /** Entity type and identifier */
  entityType?: string;
  entityLabel?: string;
  /** Click handler for entity link */
  onEntityClick?: () => void;
  /** Additional notes/context */
  notes?: string;
  /** Timestamp */
  timestamp?: string;
  /** Additional className */
  className?: string;
}

// =============================================================================
// Helpers
// =============================================================================

const buttonVariants: Record<string, string> = {
  primary:   'bg-primary-600 text-white hover:bg-primary-700',
  secondary: 'bg-paper-100 text-ink-700 hover:bg-paper-200 border border-paper-300',
  danger:    'bg-error-600 text-white hover:bg-error-700',
  ghost:     'text-ink-600 hover:bg-paper-100',
};

// =============================================================================
// Component
// =============================================================================

/**
 * ReviewDecisionCard — Action card with confidence breakdown
 *
 * Extended ActionCard pattern that includes a confidence gauge and
 * per-factor confidence breakdown. Used in the Approvals & Review queue
 * for items requiring human judgment.
 */
export default function ReviewDecisionCard({
  title,
  description,
  confidence,
  breakdown,
  recommendation,
  actions,
  entityType,
  entityLabel,
  onEntityClick,
  notes,
  timestamp,
  className = '',
}: ReviewDecisionCardProps) {
  return (
    <div
      className={`
        rounded-lg border bg-white dark:bg-ink-900 border-paper-200 dark:border-ink-700 p-5
        ${className}
      `}
    >
      <div className="flex gap-4">
        {/* Confidence gauge */}
        <div className="flex-shrink-0">
          <ConfidenceIndicator score={confidence} size={72} strokeWidth={5} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title + entity */}
          <h4 className="text-base font-medium text-ink-900 dark:text-ink-100">{title}</h4>
          {description && (
            <p className="text-sm text-ink-500 mt-0.5">{description}</p>
          )}
          {entityType && entityLabel && (
            <button
              type="button"
              onClick={onEntityClick}
              className="text-xs text-primary-600 hover:underline mt-1"
            >
              {entityType}: {entityLabel}
            </button>
          )}

          {/* Recommendation */}
          {recommendation && (
            <div className="mt-3 px-3 py-2 bg-primary-50 dark:bg-primary-900/20 rounded text-sm text-primary-700 dark:text-primary-300">
              <span className="font-medium">Recommendation: </span>{recommendation}
            </div>
          )}
        </div>
      </div>

      {/* Confidence breakdown */}
      {breakdown && breakdown.length > 0 && (
        <div className="mt-4 pt-3 border-t border-paper-200 dark:border-ink-700">
          <h5 className="text-xs font-medium text-ink-500 mb-2">Confidence Breakdown</h5>
          <div className="space-y-2">
            {breakdown.map((factor, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-xs text-ink-600 w-28 flex-shrink-0">{factor.factor}</span>
                <div className="flex-1 h-2 bg-paper-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      factor.score >= 80 ? 'bg-success-500' :
                      factor.score >= 50 ? 'bg-warning-500' :
                      'bg-error-500'
                    }`}
                    style={{ width: `${factor.score}%` }}
                  />
                </div>
                <span className="text-xs text-ink-400 w-10 text-right">{factor.score}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Notes */}
      {notes && (
        <div className="mt-3 px-3 py-2 bg-paper-50 dark:bg-ink-800 rounded text-xs text-ink-600 border-l-2 border-ink-200">
          {notes}
        </div>
      )}

      {/* Actions + timestamp */}
      <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-paper-200 dark:border-ink-700">
        <div className="flex items-center gap-2">
          {actions.map((action, idx) => (
            <button
              key={idx}
              type="button"
              onClick={action.onClick}
              className={`
                inline-flex items-center gap-1.5 px-4 py-2 rounded text-sm font-medium
                transition-colors
                ${buttonVariants[action.variant || 'secondary']}
              `}
            >
              {action.icon}
              {action.label}
            </button>
          ))}
        </div>
        {timestamp && (
          <span className="text-xs text-ink-400">{timestamp}</span>
        )}
      </div>
    </div>
  );
}
