import React from 'react';
import { RotateCcw, ExternalLink } from 'lucide-react';

// =============================================================================
// Types & Interfaces
// =============================================================================

export interface SystemActionEntryProps {
  /** What the system did */
  actionDescription: string;
  /** Why it did it */
  reasoning: string;
  /** Affected entity type */
  entityType: string;
  /** Affected entity display label */
  entityLabel: string;
  /** Click handler for entity link */
  onEntityClick?: () => void;
  /** Whether this action can be reverted */
  isRevertible?: boolean;
  /** Click handler for revert */
  onRevert?: () => void;
  /** Confidence score (0-100) */
  confidence?: number;
  /** Actor (system or user name) */
  actor?: string;
  /** Timestamp display string */
  timestamp: string;
  /** Action type category */
  actionType?: string;
  /** Process domain */
  domain?: 'sales' | 'support' | 'commission' | 'reconciliation';
  /** Icon */
  icon?: React.ReactNode;
  /** Whether the action has been reverted */
  reverted?: boolean;
  /** Additional className */
  className?: string;
}

// =============================================================================
// Helpers
// =============================================================================

const domainColors: Record<string, { bg: string; text: string }> = {
  sales:          { bg: 'bg-blue-50',    text: 'text-blue-700' },
  support:        { bg: 'bg-teal-50',    text: 'text-teal-700' },
  commission:     { bg: 'bg-green-50',   text: 'text-green-700' },
  reconciliation: { bg: 'bg-indigo-50',  text: 'text-indigo-700' },
};

// =============================================================================
// Component
// =============================================================================

/**
 * SystemActionEntry — Activity feed entry showing what the system did
 *
 * Each entry shows: action description, reasoning, affected entity (clickable),
 * revert button (if applicable), confidence indicator, and timestamp.
 * Used in the Activity Center system action log.
 */
export default function SystemActionEntry({
  actionDescription,
  reasoning,
  entityType,
  entityLabel,
  onEntityClick,
  isRevertible = false,
  onRevert,
  confidence,
  actor = 'System',
  timestamp,
  actionType,
  domain,
  icon,
  reverted = false,
  className = '',
}: SystemActionEntryProps) {
  const domainColor = domain ? domainColors[domain] : undefined;

  return (
    <div
      className={`
        group relative flex gap-3 p-4 rounded-lg border
        bg-white dark:bg-ink-900 border-paper-200 dark:border-ink-700
        ${reverted ? 'opacity-60' : ''}
        ${className}
      `}
    >
      {/* Icon */}
      <div className="flex-shrink-0 mt-0.5 text-ink-400">
        {icon || <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
          <span className="text-xs text-primary-600">A</span>
        </div>}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Action description */}
        <div className="flex items-start justify-between gap-2">
          <p className={`text-sm text-ink-900 dark:text-ink-100 ${reverted ? 'line-through' : ''}`}>
            {actionDescription}
          </p>
          {reverted && (
            <span className="text-xs px-2 py-0.5 rounded bg-paper-100 text-ink-500 flex-shrink-0">
              Reverted
            </span>
          )}
        </div>

        {/* Reasoning */}
        <p className="text-xs text-ink-500 mt-1">{reasoning}</p>

        {/* Entity link + domain badge + confidence */}
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          {/* Entity link */}
          <button
            type="button"
            onClick={onEntityClick}
            className="inline-flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700 hover:underline"
          >
            {entityType}: {entityLabel}
            <ExternalLink className="h-3 w-3" />
          </button>

          {/* Domain badge */}
          {domainColor && domain && (
            <span className={`text-xs px-1.5 py-0.5 rounded ${domainColor.bg} ${domainColor.text}`}>
              {domain}
            </span>
          )}

          {/* Confidence */}
          {confidence !== undefined && (
            <span className={`text-xs px-1.5 py-0.5 rounded ${
              confidence >= 80 ? 'bg-success-50 text-success-700' :
              confidence >= 50 ? 'bg-warning-50 text-warning-700' :
              'bg-error-50 text-error-700'
            }`}>
              {confidence}%
            </span>
          )}
        </div>

        {/* Footer: actor + timestamp + revert */}
        <div className="flex items-center justify-between gap-2 mt-2">
          <div className="flex items-center gap-2 text-xs text-ink-400">
            <span>{actor}</span>
            <span>&middot;</span>
            <span>{timestamp}</span>
            {actionType && (
              <>
                <span>&middot;</span>
                <span>{actionType}</span>
              </>
            )}
          </div>

          {/* Revert button */}
          {isRevertible && !reverted && onRevert && (
            <button
              type="button"
              onClick={onRevert}
              className="inline-flex items-center gap-1 text-xs text-ink-500 hover:text-error-600 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <RotateCcw className="h-3 w-3" />
              Revert
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
