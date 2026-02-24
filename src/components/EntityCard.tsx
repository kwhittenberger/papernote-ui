import React from 'react';
import { MoreHorizontal } from 'lucide-react';

// =============================================================================
// Types & Interfaces
// =============================================================================

export interface EntityCardProps {
  /** Card title (e.g., deal name, case subject) */
  title: string;
  /** Optional subtitle (e.g., account name, contact) */
  subtitle?: string;
  /** Primary value display (e.g., deal amount, case priority) */
  value?: string | React.ReactNode;
  /** Status label */
  status?: string;
  /** Status color variant */
  statusColor?: 'slate' | 'blue' | 'indigo' | 'purple' | 'green' | 'red' | 'yellow' | 'orange' | 'teal';
  /** Assignee name (rendered as avatar initials) */
  assignee?: string;
  /** Progress percentage (0-100) */
  progress?: number;
  /** Additional metadata key-value pairs */
  metadata?: Array<{ label: string; value: string | React.ReactNode }>;
  /** Icon to display */
  icon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Context menu handler */
  onContextMenu?: () => void;
  /** Whether the card is selected */
  selected?: boolean;
  /** Whether the card is draggable (adds visual indicator) */
  draggable?: boolean;
  /** Size variant */
  size?: 'sm' | 'md';
  /** Additional className */
  className?: string;
  /** Confidence score (0-100), shown as a small indicator */
  confidence?: number;
}

// =============================================================================
// Helpers
// =============================================================================

const statusColors: Record<string, { bg: string; text: string }> = {
  slate:  { bg: 'bg-slate-100',  text: 'text-slate-700' },
  blue:   { bg: 'bg-blue-100',   text: 'text-blue-700' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-700' },
  green:  { bg: 'bg-green-100',  text: 'text-green-700' },
  red:    { bg: 'bg-red-100',    text: 'text-red-700' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-700' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-700' },
  teal:   { bg: 'bg-teal-100',   text: 'text-teal-700' },
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

// =============================================================================
// Component
// =============================================================================

/**
 * EntityCard — Standardized card for pipeline/board views
 *
 * Renders a compact card with title, value, status, assignee, and metadata.
 * Designed for use in KanbanBoard columns and process view lists.
 */
export default function EntityCard({
  title,
  subtitle,
  value,
  status,
  statusColor = 'slate',
  assignee,
  progress,
  metadata,
  icon,
  onClick,
  onContextMenu,
  selected = false,
  draggable = false,
  size = 'md',
  className = '',
  confidence,
}: EntityCardProps) {
  const isCompact = size === 'sm';
  const colors = statusColors[statusColor];

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
      className={`
        group relative rounded-lg border bg-white dark:bg-ink-900
        ${selected ? 'border-primary-400 ring-2 ring-primary-100' : 'border-paper-200 dark:border-ink-700'}
        ${onClick ? 'cursor-pointer hover:shadow-md hover:border-primary-300 transition-all' : ''}
        ${draggable ? 'cursor-grab active:cursor-grabbing' : ''}
        ${isCompact ? 'p-3' : 'p-4'}
        ${className}
      `}
    >
      {/* Drag handle indicator */}
      {draggable && (
        <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full bg-ink-200 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}

      {/* Header row: icon + title + context menu */}
      <div className="flex items-start gap-2">
        {icon && (
          <div className="flex-shrink-0 text-ink-400 mt-0.5">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h4 className={`font-medium text-ink-900 dark:text-ink-100 truncate ${isCompact ? 'text-sm' : 'text-base'}`}>
            {title}
          </h4>
          {subtitle && (
            <p className={`text-ink-500 dark:text-ink-400 truncate ${isCompact ? 'text-xs' : 'text-sm'}`}>
              {subtitle}
            </p>
          )}
        </div>
        {onContextMenu && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onContextMenu(); }}
            className="flex-shrink-0 opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-paper-100 transition-opacity"
            aria-label="More options"
          >
            <MoreHorizontal className="h-4 w-4 text-ink-400" />
          </button>
        )}
      </div>

      {/* Value + Status row */}
      {(value || status) && (
        <div className={`flex items-center justify-between gap-2 ${isCompact ? 'mt-2' : 'mt-3'}`}>
          {value && (
            <span className={`font-semibold text-ink-900 dark:text-ink-100 ${isCompact ? 'text-sm' : 'text-lg'}`}>
              {value}
            </span>
          )}
          {status && colors && (
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
              {status}
            </span>
          )}
        </div>
      )}

      {/* Metadata */}
      {metadata && metadata.length > 0 && (
        <div className={`grid grid-cols-2 gap-x-3 gap-y-1 ${isCompact ? 'mt-2' : 'mt-3'}`}>
          {metadata.map((item, idx) => (
            <div key={idx} className="min-w-0">
              <span className="text-xs text-ink-400">{item.label}</span>
              <div className="text-xs text-ink-600 dark:text-ink-300 truncate">{item.value}</div>
            </div>
          ))}
        </div>
      )}

      {/* Footer row: progress + assignee + confidence */}
      {(progress !== undefined || assignee || confidence !== undefined) && (
        <div className={`flex items-center justify-between gap-2 ${isCompact ? 'mt-2' : 'mt-3'}`}>
          {/* Progress bar */}
          {progress !== undefined && (
            <div className="flex-1 min-w-0">
              <div className="h-1.5 bg-paper-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-500 rounded-full transition-all"
                  style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                />
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Confidence badge */}
            {confidence !== undefined && (
              <span className={`text-xs px-1.5 py-0.5 rounded ${
                confidence >= 80 ? 'bg-success-50 text-success-700' :
                confidence >= 50 ? 'bg-warning-50 text-warning-700' :
                'bg-error-50 text-error-700'
              }`}>
                {confidence}%
              </span>
            )}

            {/* Assignee avatar */}
            {assignee && (
              <div
                className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0"
                title={assignee}
              >
                <span className="text-xs font-medium text-primary-700">
                  {getInitials(assignee)}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
