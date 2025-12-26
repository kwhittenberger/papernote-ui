import React from 'react';
import Tooltip from './Tooltip';

export interface AchievementBadgeData {
  /** Icon to display (React node, typically from lucide-react) */
  icon: React.ReactNode;
  /** Name of the achievement */
  name: string;
  /** Description of how to earn this achievement */
  description: string;
  /** When the achievement was earned (undefined if not earned) */
  earnedAt?: Date;
}

export interface AchievementBadgeProps {
  /** The badge data */
  badge: AchievementBadgeData;
  /** Current state of the achievement */
  variant: 'earned' | 'locked' | 'in-progress';
  /** Progress percentage (0-100) for in-progress variant */
  progress?: number;
  /** Size of the badge */
  size?: 'sm' | 'md' | 'lg';
  /** Whether to show tooltip on hover */
  showTooltip?: boolean;
  /** Additional CSS classes */
  className?: string;
}

const sizeStyles = {
  sm: {
    container: 'w-12 h-12',
    iconContainer: 'w-10 h-10',
    icon: 'w-5 h-5',
    ring: 40,
    ringStroke: 3,
  },
  md: {
    container: 'w-16 h-16',
    iconContainer: 'w-14 h-14',
    icon: 'w-7 h-7',
    ring: 56,
    ringStroke: 3,
  },
  lg: {
    container: 'w-20 h-20',
    iconContainer: 'w-18 h-18',
    icon: 'w-9 h-9',
    ring: 72,
    ringStroke: 4,
  },
};

/**
 * AchievementBadge - Display achievement badges with earned/locked/in-progress states.
 * 
 * Features:
 * - Three variants: earned (full color + glow), locked (grayscale), in-progress (with ring)
 * - Circular progress ring for in-progress state
 * - Optional tooltip showing name, description, and earned date
 * - Three sizes: sm, md, lg
 */
export function AchievementBadge({
  badge,
  variant,
  progress = 0,
  size = 'md',
  showTooltip = true,
  className = '',
}: AchievementBadgeProps) {
  const styles = sizeStyles[size];
  const clampedProgress = Math.min(100, Math.max(0, progress));

  // Calculate progress ring
  const ringSize = styles.ring;
  const ringRadius = (ringSize - styles.ringStroke) / 2;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const ringOffset = ringCircumference - (clampedProgress / 100) * ringCircumference;

  const variantStyles = {
    earned: 'bg-success-100 text-success-600 shadow-md',
    locked: 'bg-paper-200 text-ink-300 grayscale opacity-60',
    'in-progress': 'bg-accent-100 text-accent-600',
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  const tooltipContent = (
    <div className="text-center max-w-48">
      <div className="font-semibold">{badge.name}</div>
      <div className="text-ink-300 mt-1">{badge.description}</div>
      {variant === 'earned' && badge.earnedAt && (
        <div className="text-success-400 mt-2 text-2xs">
          Earned {formatDate(badge.earnedAt)}
        </div>
      )}
      {variant === 'in-progress' && (
        <div className="text-accent-400 mt-2 text-2xs">
          {clampedProgress}% complete
        </div>
      )}
      {variant === 'locked' && (
        <div className="text-ink-400 mt-2 text-2xs">
          Not yet earned
        </div>
      )}
    </div>
  );

  const badgeElement = (
    <div
      className={`
        relative
        ${styles.container}
        flex items-center justify-center
        ${className}
      `}
      role="img"
      aria-label={`${badge.name}: ${variant === 'earned' ? 'Earned' : variant === 'locked' ? 'Locked' : `${clampedProgress}% complete`}`}
    >
      {/* Progress ring for in-progress variant */}
      {variant === 'in-progress' && (
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox={`0 0 ${ringSize} ${ringSize}`}
        >
          {/* Background ring */}
          <circle
            cx={ringSize / 2}
            cy={ringSize / 2}
            r={ringRadius}
            fill="none"
            stroke="currentColor"
            strokeWidth={styles.ringStroke}
            className="text-paper-200"
          />
          {/* Progress ring */}
          <circle
            cx={ringSize / 2}
            cy={ringSize / 2}
            r={ringRadius}
            fill="none"
            stroke="currentColor"
            strokeWidth={styles.ringStroke}
            strokeLinecap="round"
            strokeDasharray={ringCircumference}
            strokeDashoffset={ringOffset}
            className="text-accent-500 transition-all duration-500"
          />
        </svg>
      )}

      {/* Badge icon container */}
      <div
        className={`
          ${styles.iconContainer}
          rounded-full
          flex items-center justify-center
          ${variantStyles[variant]}
          ${variant === 'earned' ? 'animate-scale-in' : ''}
          transition-all duration-300
        `}
      >
        <div className={styles.icon}>
          {badge.icon}
        </div>
      </div>

      {/* Glow effect for earned badges */}
      {variant === 'earned' && (
        <div
          className="absolute inset-0 rounded-full bg-success-400/20 animate-pulse-slow -z-10 blur-md"
          style={{ transform: 'scale(1.1)' }}
        />
      )}
    </div>
  );

  if (showTooltip) {
    return (
      <Tooltip content={tooltipContent} position="top">
        {badgeElement}
      </Tooltip>
    );
  }

  return badgeElement;
}

export default AchievementBadge;
