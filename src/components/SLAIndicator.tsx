import React from 'react';
import { Clock, AlertTriangle, CheckCircle } from 'lucide-react';

// =============================================================================
// Types & Interfaces
// =============================================================================

export interface SLAIndicatorProps {
  /** Time remaining display string (e.g., "2h 15m", "45m") */
  timeRemaining?: string;
  /** Total SLA duration in minutes (for progress calculation) */
  totalMinutes?: number;
  /** Elapsed minutes (for progress calculation) */
  elapsedMinutes?: number;
  /** Current SLA status */
  status: 'on-track' | 'at-risk' | 'breached' | 'met';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Show as compact inline badge */
  compact?: boolean;
  /** Additional className */
  className?: string;
}

// =============================================================================
// Helpers
// =============================================================================

const statusConfig: Record<string, { icon: React.ReactNode; color: string; bg: string; text: string; label: string }> = {
  'on-track': { icon: <Clock className="h-4 w-4" />, color: 'text-success-600', bg: 'bg-success-50', text: 'text-success-700', label: 'On Track' },
  'at-risk':  { icon: <Clock className="h-4 w-4" />, color: 'text-warning-600', bg: 'bg-warning-50', text: 'text-warning-700', label: 'At Risk' },
  'breached': { icon: <AlertTriangle className="h-4 w-4" />, color: 'text-error-600', bg: 'bg-error-50', text: 'text-error-700', label: 'Breached' },
  'met':      { icon: <CheckCircle className="h-4 w-4" />, color: 'text-success-600', bg: 'bg-success-50', text: 'text-success-700', label: 'Met' },
};

const progressColors: Record<string, string> = {
  'on-track': 'bg-success-500',
  'at-risk': 'bg-warning-500',
  'breached': 'bg-error-500',
  'met': 'bg-success-500',
};

// =============================================================================
// Component
// =============================================================================

/**
 * SLAIndicator — Visual SLA countdown with urgency coloring
 *
 * Shows time remaining, progress bar, and status icon.
 * Used in Support Center case queue items and case detail views.
 */
export default function SLAIndicator({
  timeRemaining,
  totalMinutes,
  elapsedMinutes,
  status,
  size = 'md',
  compact = false,
  className = '',
}: SLAIndicatorProps) {
  const config = statusConfig[status] || statusConfig['on-track'];
  const progressPercent = totalMinutes && elapsedMinutes
    ? Math.min(100, (elapsedMinutes / totalMinutes) * 100)
    : undefined;

  if (compact) {
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text} ${className}`}>
        {config.icon}
        <span>{timeRemaining || config.label}</span>
      </span>
    );
  }

  const sizeClasses = {
    sm: { text: 'text-sm', icon: 'h-4 w-4', bar: 'h-1' },
    md: { text: 'text-base', icon: 'h-5 w-5', bar: 'h-1.5' },
    lg: { text: 'text-lg', icon: 'h-6 w-6', bar: 'h-2' },
  };
  const sizes = sizeClasses[size];

  return (
    <div className={`${className}`}>
      <div className="flex items-center justify-between gap-2 mb-1">
        <div className={`flex items-center gap-1.5 ${config.color}`}>
          {config.icon}
          <span className={`${sizes.text} font-medium`}>{config.label}</span>
        </div>
        {timeRemaining && (
          <span className={`${sizes.text} font-mono ${config.color}`}>
            {timeRemaining}
          </span>
        )}
      </div>

      {/* Progress bar */}
      {progressPercent !== undefined && (
        <div className={`${sizes.bar} bg-paper-200 rounded-full overflow-hidden`}>
          <div
            className={`h-full ${progressColors[status]} rounded-full transition-all`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}
    </div>
  );
}
