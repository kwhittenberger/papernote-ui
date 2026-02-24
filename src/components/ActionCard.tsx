import React from 'react';

// =============================================================================
// Types & Interfaces
// =============================================================================

export interface ActionCardAction {
  /** Button label */
  label: string;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  /** Click handler */
  onClick: () => void;
  /** Whether the action is disabled */
  disabled?: boolean;
  /** Icon to show */
  icon?: React.ReactNode;
}

export interface ActionCardProps {
  /** Card title — what needs action */
  title: string;
  /** Description — why the system flagged it */
  description?: string;
  /** Affected entity type and ID */
  entityType?: string;
  entityId?: string;
  /** Entity link click handler */
  onEntityClick?: () => void;
  /** Reasoning text — why the system flagged this */
  reasoning?: string;
  /** Available actions */
  actions: ActionCardAction[];
  /** Priority/urgency level */
  priority?: 'high' | 'medium' | 'low';
  /** Icon */
  icon?: React.ReactNode;
  /** Confidence score (0-100) */
  confidence?: number;
  /** Timestamp */
  timestamp?: string;
  /** Whether the card is selected */
  selected?: boolean;
  /** Additional className */
  className?: string;
}

// =============================================================================
// Helpers
// =============================================================================

const priorityStyles: Record<string, { border: string; dot: string }> = {
  high:   { border: 'border-l-4 border-l-red-400', dot: 'bg-red-500' },
  medium: { border: 'border-l-4 border-l-yellow-400', dot: 'bg-yellow-500' },
  low:    { border: 'border-l-4 border-l-blue-400', dot: 'bg-blue-500' },
};

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
 * ActionCard — Approval workflow card with action buttons
 *
 * Shows what needs action, why it was flagged, and provides quick-action buttons.
 * Used in the Approvals & Review queue across all process domains.
 */
export default function ActionCard({
  title,
  description,
  entityType,
  entityId,
  onEntityClick,
  reasoning,
  actions,
  priority,
  icon,
  confidence,
  timestamp,
  selected = false,
  className = '',
}: ActionCardProps) {
  const prioStyle = priority ? priorityStyles[priority] : undefined;

  return (
    <div
      className={`
        rounded-lg border bg-white dark:bg-ink-900 p-4
        ${selected ? 'border-primary-400 ring-2 ring-primary-100' : 'border-paper-200 dark:border-ink-700'}
        ${prioStyle?.border || ''}
        ${className}
      `}
    >
      {/* Header: icon + title + confidence */}
      <div className="flex items-start gap-3 mb-3">
        {icon && (
          <div className="flex-shrink-0 text-ink-400 mt-0.5">{icon}</div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-medium text-ink-900 dark:text-ink-100">
              {title}
            </h4>
            {priority && prioStyle && (
              <span className={`w-2 h-2 rounded-full ${prioStyle.dot} flex-shrink-0`} />
            )}
          </div>
          {description && (
            <p className="text-sm text-ink-500 mt-0.5">{description}</p>
          )}
        </div>
        {confidence !== undefined && (
          <span className={`text-xs px-2 py-0.5 rounded flex-shrink-0 ${
            confidence >= 80 ? 'bg-success-50 text-success-700' :
            confidence >= 50 ? 'bg-warning-50 text-warning-700' :
            'bg-error-50 text-error-700'
          }`}>
            {confidence}% confidence
          </span>
        )}
      </div>

      {/* Entity link */}
      {entityType && entityId && (
        <div className="mb-2">
          <button
            type="button"
            onClick={onEntityClick}
            className="text-xs text-primary-600 hover:text-primary-700 hover:underline"
          >
            {entityType} #{entityId}
          </button>
        </div>
      )}

      {/* Reasoning */}
      {reasoning && (
        <div className="mb-3 px-3 py-2 bg-paper-50 dark:bg-ink-800 rounded text-xs text-ink-600 dark:text-ink-400 border-l-2 border-ink-200">
          {reasoning}
        </div>
      )}

      {/* Actions + timestamp */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {actions.map((action, idx) => (
            <button
              key={idx}
              type="button"
              onClick={action.onClick}
              disabled={action.disabled}
              className={`
                inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-medium
                transition-colors disabled:opacity-50 disabled:cursor-not-allowed
                ${buttonVariants[action.variant || 'secondary']}
              `}
            >
              {action.icon}
              {action.label}
            </button>
          ))}
        </div>
        {timestamp && (
          <span className="text-xs text-ink-400 flex-shrink-0">{timestamp}</span>
        )}
      </div>
    </div>
  );
}
