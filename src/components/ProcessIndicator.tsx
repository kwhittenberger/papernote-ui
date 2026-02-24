import React from 'react';
import { ChevronRight } from 'lucide-react';

// =============================================================================
// Types & Interfaces
// =============================================================================

export interface ProcessStage {
  /** Unique stage identifier */
  id: string;
  /** Display name */
  name: string;
  /** Number of items at this stage */
  count: number;
  /** Color variant for the stage */
  color?: 'slate' | 'blue' | 'indigo' | 'purple' | 'green' | 'red' | 'yellow' | 'orange' | 'teal' | 'primary';
  /** Health status derived from thresholds */
  health?: 'good' | 'warning' | 'critical';
  /** Optional icon */
  icon?: React.ReactNode;
}

export interface ProcessIndicatorProps {
  /** Stages to display in order */
  stages: ProcessStage[];
  /** Currently selected/filtered stage ID */
  activeStageId?: string;
  /** Callback when a stage is clicked */
  onStageClick?: (stageId: string) => void;
  /** Show conversion rate between stages */
  showConversion?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Additional className */
  className?: string;
}

// =============================================================================
// Color Mappings
// =============================================================================

const stageColors: Record<string, { bg: string; text: string; border: string; activeBg: string }> = {
  slate:   { bg: 'bg-slate-50',   text: 'text-slate-700',   border: 'border-slate-200',   activeBg: 'bg-slate-100' },
  blue:    { bg: 'bg-blue-50',    text: 'text-blue-700',    border: 'border-blue-200',    activeBg: 'bg-blue-100' },
  indigo:  { bg: 'bg-indigo-50',  text: 'text-indigo-700',  border: 'border-indigo-200',  activeBg: 'bg-indigo-100' },
  purple:  { bg: 'bg-purple-50',  text: 'text-purple-700',  border: 'border-purple-200',  activeBg: 'bg-purple-100' },
  green:   { bg: 'bg-green-50',   text: 'text-green-700',   border: 'border-green-200',   activeBg: 'bg-green-100' },
  red:     { bg: 'bg-red-50',     text: 'text-red-700',     border: 'border-red-200',     activeBg: 'bg-red-100' },
  yellow:  { bg: 'bg-yellow-50',  text: 'text-yellow-700',  border: 'border-yellow-200',  activeBg: 'bg-yellow-100' },
  orange:  { bg: 'bg-orange-50',  text: 'text-orange-700',  border: 'border-orange-200',  activeBg: 'bg-orange-100' },
  teal:    { bg: 'bg-teal-50',    text: 'text-teal-700',    border: 'border-teal-200',    activeBg: 'bg-teal-100' },
  primary: { bg: 'bg-primary-50', text: 'text-primary-700', border: 'border-primary-200', activeBg: 'bg-primary-100' },
};

const healthIndicator: Record<string, string> = {
  good: 'bg-success-500',
  warning: 'bg-warning-500',
  critical: 'bg-error-500',
};

const sizeClasses = {
  sm: { wrapper: 'py-2 px-3', count: 'text-lg', label: 'text-xs', chevron: 'h-3 w-3' },
  md: { wrapper: 'py-3 px-4', count: 'text-2xl', label: 'text-sm', chevron: 'h-4 w-4' },
  lg: { wrapper: 'py-4 px-5', count: 'text-3xl', label: 'text-base', chevron: 'h-5 w-5' },
};

// =============================================================================
// Component
// =============================================================================

/**
 * ProcessIndicator — Horizontal process flow visualization
 *
 * Shows stages as connected blocks with names, item counts, and health coloring.
 * Stages are clickable for filtering. Used at the top of process views
 * (Sales Pipeline, Support Center, Commission Lifecycle).
 */
export default function ProcessIndicator({
  stages,
  activeStageId,
  onStageClick,
  showConversion = false,
  size = 'md',
  className = '',
}: ProcessIndicatorProps) {
  const sizes = sizeClasses[size];
  const totalCount = stages.reduce((sum, s) => sum + s.count, 0);

  return (
    <div className={`flex items-stretch overflow-x-auto ${className}`} role="navigation" aria-label="Process stages">
      {stages.map((stage, index) => {
        const colors = stageColors[stage.color || 'slate'];
        const isActive = stage.id === activeStageId;
        const isClickable = !!onStageClick;
        const conversionRate = showConversion && index > 0 && stages[index - 1].count > 0
          ? Math.round((stage.count / stages[index - 1].count) * 100)
          : null;

        return (
          <React.Fragment key={stage.id}>
            {/* Chevron connector between stages */}
            {index > 0 && (
              <div className="flex flex-col items-center justify-center px-1 flex-shrink-0">
                <ChevronRight className={`${sizes.chevron} text-ink-300`} />
                {conversionRate !== null && (
                  <span className="text-[10px] text-ink-400 mt-0.5">{conversionRate}%</span>
                )}
              </div>
            )}

            {/* Stage block */}
            <button
              type="button"
              onClick={() => onStageClick?.(stage.id)}
              disabled={!isClickable}
              className={`
                flex flex-col items-center justify-center ${sizes.wrapper}
                rounded-lg border transition-all min-w-0 flex-1
                ${isActive ? `${colors.activeBg} ${colors.border} border-2 shadow-sm` : `${colors.bg} ${colors.border}`}
                ${isClickable ? 'cursor-pointer hover:shadow-sm hover:border-2' : 'cursor-default'}
              `}
              aria-current={isActive ? 'step' : undefined}
              aria-label={`${stage.name}: ${stage.count} items`}
            >
              {/* Health indicator dot */}
              {stage.health && (
                <div className={`w-2 h-2 rounded-full ${healthIndicator[stage.health]} mb-1`} />
              )}

              {/* Stage icon */}
              {stage.icon && (
                <div className={`${colors.text} mb-1 opacity-60`}>
                  {stage.icon}
                </div>
              )}

              {/* Count */}
              <span className={`${sizes.count} font-bold ${colors.text} leading-none`}>
                {stage.count.toLocaleString()}
              </span>

              {/* Stage name */}
              <span className={`${sizes.label} ${colors.text} opacity-80 mt-1 whitespace-nowrap`}>
                {stage.name}
              </span>
            </button>
          </React.Fragment>
        );
      })}

      {/* Total */}
      {stages.length > 0 && (
        <>
          <div className="flex items-center justify-center px-2 flex-shrink-0">
            <div className="w-px h-8 bg-ink-200" />
          </div>
          <div className={`flex flex-col items-center justify-center ${sizes.wrapper} min-w-0`}>
            <span className={`${sizes.count} font-bold text-ink-900 leading-none`}>
              {totalCount.toLocaleString()}
            </span>
            <span className={`${sizes.label} text-ink-500 mt-1`}>Total</span>
          </div>
        </>
      )}
    </div>
  );
}
