import { Clock, AlertTriangle, User } from 'lucide-react';

// =============================================================================
// Types & Interfaces
// =============================================================================

export interface CaseQueueItemProps {
  /** Case ID or number */
  caseNumber: string;
  /** Case subject/title */
  subject: string;
  /** Priority level */
  priority: 'critical' | 'high' | 'medium' | 'low';
  /** Current status */
  status: string;
  /** Status color variant */
  statusColor?: 'slate' | 'blue' | 'indigo' | 'purple' | 'green' | 'red' | 'yellow' | 'orange' | 'teal';
  /** Assignee name */
  assignee?: string;
  /** Account/customer name */
  account?: string;
  /** SLA deadline (ISO timestamp) */
  /** Whether the SLA is breached */
  slaBreach?: boolean;
  /** Time remaining display string (e.g., "2h 15m") */
  slaTimeRemaining?: string;
  /** Click handler */
  onClick?: () => void;
  /** Whether the item is selected */
  selected?: boolean;
  /** Additional className */
  className?: string;
}

// =============================================================================
// Helpers
// =============================================================================

const priorityConfig: Record<string, { bg: string; text: string; label: string; dot: string }> = {
  critical: { bg: 'bg-red-50', text: 'text-red-700', label: 'Critical', dot: 'bg-red-500' },
  high:     { bg: 'bg-orange-50', text: 'text-orange-700', label: 'High', dot: 'bg-orange-500' },
  medium:   { bg: 'bg-yellow-50', text: 'text-yellow-700', label: 'Medium', dot: 'bg-yellow-500' },
  low:      { bg: 'bg-blue-50', text: 'text-blue-700', label: 'Low', dot: 'bg-blue-500' },
};

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

// =============================================================================
// Component
// =============================================================================

/**
 * CaseQueueItem — Priority-sorted case card for support queue views
 *
 * Shows case subject, priority indicator, status, assignee, and SLA countdown.
 * Designed for use in the Support Center's case queue list.
 */
export default function CaseQueueItem({
  caseNumber,
  subject,
  priority,
  status,
  statusColor = 'slate',
  assignee,
  account,
  slaBreach = false,
  slaTimeRemaining,
  onClick,
  selected = false,
  className = '',
}: CaseQueueItemProps) {
  const prio = priorityConfig[priority] || priorityConfig.medium;
  const stColor = statusColors[statusColor];

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
      className={`
        group relative rounded-lg border bg-white dark:bg-ink-900 p-4
        ${selected ? 'border-primary-400 ring-2 ring-primary-100' : 'border-paper-200 dark:border-ink-700'}
        ${onClick ? 'cursor-pointer hover:shadow-md hover:border-primary-300 transition-all' : ''}
        ${slaBreach ? 'border-l-4 border-l-red-500' : ''}
        ${className}
      `}
      aria-label={`Case ${caseNumber}: ${subject}`}
    >
      {/* Top row: case number + priority + SLA */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-ink-400">{caseNumber}</span>
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${prio.bg} ${prio.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${prio.dot}`} />
            {prio.label}
          </span>
        </div>

        {/* SLA countdown */}
        {(slaTimeRemaining || slaBreach) && (
          <div className={`flex items-center gap-1 text-xs ${slaBreach ? 'text-red-600 font-medium' : 'text-ink-500'}`}>
            {slaBreach ? <AlertTriangle className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
            <span>{slaBreach ? 'SLA Breached' : slaTimeRemaining}</span>
          </div>
        )}
      </div>

      {/* Subject */}
      <h4 className="text-sm font-medium text-ink-900 dark:text-ink-100 mb-1 line-clamp-2">
        {subject}
      </h4>

      {/* Account */}
      {account && (
        <p className="text-xs text-ink-500 mb-2">{account}</p>
      )}

      {/* Bottom row: status + assignee */}
      <div className="flex items-center justify-between gap-2">
        {stColor && (
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${stColor.bg} ${stColor.text}`}>
            {status}
          </span>
        )}
        {assignee && (
          <div className="flex items-center gap-1 text-xs text-ink-500">
            <User className="h-3 w-3" />
            <span>{assignee}</span>
          </div>
        )}
      </div>
    </div>
  );
}
