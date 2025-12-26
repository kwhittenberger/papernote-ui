
import { Flame, Sparkles } from 'lucide-react';

export interface StreakBadgeProps {
  /** The streak count */
  count: number;
  /** The unit of time for the streak */
  unit: 'days' | 'weeks' | 'months';
  /** Optional type descriptor (e.g., "budget", "savings") */
  type?: string;
  /** Whether this is a new personal record */
  isNewRecord?: boolean;
  /** Size of the badge */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

const sizeStyles = {
  sm: {
    container: 'px-2 py-1 gap-1',
    icon: 'w-3.5 h-3.5',
    count: 'text-sm font-bold',
    unit: 'text-xs',
    record: 'text-2xs px-1.5 py-0.5',
  },
  md: {
    container: 'px-3 py-1.5 gap-1.5',
    icon: 'w-4 h-4',
    count: 'text-base font-bold',
    unit: 'text-sm',
    record: 'text-xs px-2 py-0.5',
  },
  lg: {
    container: 'px-4 py-2 gap-2',
    icon: 'w-5 h-5',
    count: 'text-lg font-bold',
    unit: 'text-base',
    record: 'text-sm px-2 py-1',
  },
};

// Color intensity increases with streak length
function getFlameColor(count: number): string {
  if (count >= 100) return 'text-error-500'; // Red hot
  if (count >= 30) return 'text-warning-500'; // Orange
  if (count >= 7) return 'text-warning-400'; // Light orange
  return 'text-warning-300'; // Warm yellow
}

function getBackgroundColor(count: number): string {
  if (count >= 100) return 'bg-error-50';
  if (count >= 30) return 'bg-warning-50';
  if (count >= 7) return 'bg-warning-50/70';
  return 'bg-warning-50/50';
}

/**
 * StreakBadge - Display streak achievements with a flame icon.
 * 
 * Features:
 * - Flame icon with color intensity based on streak length
 * - Optional type descriptor (e.g., "12-day budget streak")
 * - New record indicator with sparkle animation
 * - Three sizes: sm, md, lg
 * - Compact inline display
 */
export function StreakBadge({
  count,
  unit,
  type,
  isNewRecord = false,
  size = 'md',
  className = '',
}: StreakBadgeProps) {
  const styles = sizeStyles[size];
  const flameColor = getFlameColor(count);
  const bgColor = getBackgroundColor(count);

  const unitLabel = count === 1 ? unit.slice(0, -1) : unit; // day vs days

  return (
    <div
      className={`
        inline-flex items-center
        ${bgColor}
        rounded-full
        ${styles.container}
        ${className}
      `}
      role="status"
      aria-label={`${count} ${unitLabel}${type ? ` ${type}` : ''} streak${isNewRecord ? ' - new record!' : ''}`}
    >
      {/* Flame icon */}
      <Flame 
        className={`${styles.icon} ${flameColor} ${count >= 30 ? 'animate-pulse-slow' : ''}`} 
      />
      
      {/* Count */}
      <span className={`${styles.count} text-ink-800`}>
        {count}
      </span>
      
      {/* Unit and type */}
      <span className={`${styles.unit} text-ink-500`}>
        {unitLabel}
        {type && (
          <span className="text-ink-400"> {type}</span>
        )}
      </span>

      {/* New record indicator */}
      {isNewRecord && (
        <span 
          className={`
            inline-flex items-center gap-0.5
            bg-success-500 text-white
            rounded-full
            ${styles.record}
            font-medium
            animate-bounce-subtle
          `}
        >
          <Sparkles className="w-3 h-3" />
          New!
        </span>
      )}
    </div>
  );
}

export default StreakBadge;
