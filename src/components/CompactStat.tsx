
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export interface CompactStatTrend {
  /** Direction of the trend */
  direction: 'up' | 'down' | 'neutral';
  /** Value to display (e.g., "+$1,247" or "+12%") */
  value: string;
  /** Color override (defaults based on direction) */
  color?: 'success' | 'error' | 'warning' | 'neutral';
}

export interface CompactStatProps {
  /** The main value to display */
  value: string;
  /** Label describing the stat */
  label: string;
  /** Optional trend indicator */
  trend?: CompactStatTrend;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Additional class name */
  className?: string;
}

/**
 * CompactStat - Single stat display optimized for mobile
 *
 * Designed for dashboard stats in 2-column mobile layouts:
 * - Compact presentation with value, label, and optional trend
 * - Responsive sizing
 * - Trend indicators with color coding
 *
 * @example
 * ```tsx
 * <Grid columns={2} gap="sm">
 *   <CompactStat
 *     value="$62,329"
 *     label="Net Worth"
 *     trend={{
 *       direction: 'up',
 *       value: '+$1,247',
 *       color: 'success'
 *     }}
 *   />
 *   <CompactStat
 *     value="$4,521"
 *     label="Monthly Income"
 *   />
 * </Grid>
 * ```
 */
export function CompactStat({
  value,
  label,
  trend,
  size = 'md',
  align = 'left',
  className = '',
}: CompactStatProps) {
  // Size classes
  const sizeClasses = {
    sm: {
      value: 'text-lg font-semibold',
      label: 'text-xs',
      trend: 'text-xs',
      icon: 'h-3 w-3',
    },
    md: {
      value: 'text-xl font-semibold',
      label: 'text-sm',
      trend: 'text-xs',
      icon: 'h-3.5 w-3.5',
    },
    lg: {
      value: 'text-2xl font-bold',
      label: 'text-sm',
      trend: 'text-sm',
      icon: 'h-4 w-4',
    },
  };

  // Alignment classes
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // Trend color classes
  const getTrendColor = (trend: CompactStatTrend) => {
    if (trend.color) {
      const colorMap = {
        success: 'text-success-600',
        error: 'text-error-600',
        warning: 'text-warning-600',
        neutral: 'text-ink-500',
      };
      return colorMap[trend.color];
    }
    
    // Default colors based on direction
    const directionColors = {
      up: 'text-success-600',
      down: 'text-error-600',
      neutral: 'text-ink-500',
    };
    return directionColors[trend.direction];
  };

  // Trend icons
  const TrendIcon = trend ? {
    up: TrendingUp,
    down: TrendingDown,
    neutral: Minus,
  }[trend.direction] : null;

  const sizes = sizeClasses[size];

  return (
    <div className={`${alignClasses[align]} ${className}`}>
      {/* Main value */}
      <div className={`${sizes.value} text-ink-900 tracking-tight`}>
        {value}
      </div>

      {/* Label */}
      <div className={`${sizes.label} text-ink-500 mt-0.5`}>
        {label}
      </div>

      {/* Trend indicator */}
      {trend && (
        <div className={`
          flex items-center gap-1 mt-1
          ${align === 'center' ? 'justify-center' : ''}
          ${align === 'right' ? 'justify-end' : ''}
          ${sizes.trend} ${getTrendColor(trend)}
        `}>
          {TrendIcon && <TrendIcon className={sizes.icon} />}
          <span>{trend.value}</span>
        </div>
      )}
    </div>
  );
}

export default CompactStat;
