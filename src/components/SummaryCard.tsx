import React, { ReactNode } from 'react';
import { TrendingUp, TrendingDown, Minus, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from './Card';

export interface SummaryCardAction {
  /** Action label */
  label: string;
  /** URL for the action (uses react-router Link) */
  href?: string;
  /** Click handler (alternative to href) */
  onClick?: () => void;
}

export interface SummaryCardTrend {
  /** Trend direction */
  direction: 'up' | 'down' | 'neutral';
  /** Trend value (e.g., "12%", "+$500", "5 items") */
  value: string;
  /** Optional label (e.g., "vs last month") */
  label?: string;
}

export interface SummaryCardProps {
  /** Card title */
  title: string;
  /** Optional icon displayed in the header */
  icon?: ReactNode;
  /** Primary value to display (can be formatted string or number) */
  value: string | number;
  /** Optional prefix for the value (e.g., "$", "€") */
  valuePrefix?: string;
  /** Optional suffix for the value (e.g., "%", "items") */
  valueSuffix?: string;
  /** Trend indicator with direction and value */
  trend?: SummaryCardTrend;
  /** Subtitle or description below the value */
  subtitle?: string;
  /** URL to navigate to when clicking the card */
  href?: string;
  /** Click handler (alternative to href) */
  onClick?: () => void;
  /** Quick action links at the bottom */
  actions?: SummaryCardAction[];
  /** Additional CSS classes */
  className?: string;
  /** Loading state - shows skeleton */
  loading?: boolean;
}

/**
 * SummaryCard - Dashboard metric card with trend indicators and actions
 * 
 * Displays a key metric with optional trend indicator, subtitle, and quick actions.
 * Suitable for dashboard grids showing financial summaries, goal progress, etc.
 * 
 * @example Basic metric
 * ```tsx
 * <SummaryCard
 *   title="Net Worth"
 *   icon={<Wallet className="h-5 w-5" />}
 *   value={125000}
 *   valuePrefix="$"
 *   trend={{ direction: 'up', value: '12.5%', label: 'vs last month' }}
 * />
 * ```
 * 
 * @example With actions
 * ```tsx
 * <SummaryCard
 *   title="Monthly Income"
 *   value="$8,500"
 *   trend={{ direction: 'up', value: '+$500' }}
 *   subtitle="3 income sources"
 *   actions={[
 *     { label: 'View Details', href: '/income' },
 *     { label: 'Add Income', onClick: openAddModal }
 *   ]}
 * />
 * ```
 * 
 * @example Clickable card
 * ```tsx
 * <SummaryCard
 *   title="Goals Progress"
 *   value="3/5"
 *   valueSuffix=" completed"
 *   href="/goals"
 *   subtitle="2 goals due this month"
 * />
 * ```
 */
export function SummaryCard({
  title,
  icon,
  value,
  valuePrefix,
  valueSuffix,
  trend,
  subtitle,
  href,
  onClick,
  actions = [],
  className = '',
  loading = false,
}: SummaryCardProps) {
  const isClickable = !!(href || onClick);

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      handleCardClick();
    }
  };

  const getTrendColor = (direction: 'up' | 'down' | 'neutral') => {
    switch (direction) {
      case 'up':
        return 'text-success-600';
      case 'down':
        return 'text-error-600';
      case 'neutral':
        return 'text-ink-500';
    }
  };

  const getTrendIcon = (direction: 'up' | 'down' | 'neutral') => {
    switch (direction) {
      case 'up':
        return <TrendingUp className="h-4 w-4" />;
      case 'down':
        return <TrendingDown className="h-4 w-4" />;
      case 'neutral':
        return <Minus className="h-4 w-4" />;
    }
  };

  const cardContent = (
    <>
      {/* Header with icon and title */}
      <div className="flex items-center gap-2 mb-3">
        {icon && (
          <span className="flex-shrink-0 text-ink-500">
            {icon}
          </span>
        )}
        <span className="text-sm font-medium text-ink-600 truncate">
          {title}
        </span>
        {isClickable && (
          <ChevronRight className="h-4 w-4 text-ink-400 ml-auto flex-shrink-0" />
        )}
      </div>

      {/* Primary value */}
      <div className="text-3xl font-semibold text-ink-900 tracking-tight">
        {valuePrefix}
        {typeof value === 'number' ? value.toLocaleString() : value}
        {valueSuffix && (
          <span className="text-lg font-normal text-ink-500">{valueSuffix}</span>
        )}
      </div>

      {/* Trend indicator */}
      {trend && (
        <div className={`flex items-center gap-1.5 mt-2 text-sm font-medium ${getTrendColor(trend.direction)}`}>
          {getTrendIcon(trend.direction)}
          <span>{trend.value}</span>
          {trend.label && (
            <span className="text-ink-500 font-normal">{trend.label}</span>
          )}
        </div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <div className="text-sm text-ink-500 mt-2">
          {subtitle}
        </div>
      )}

      {/* Actions */}
      {actions.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-4 pt-3 border-t border-paper-200">
          {actions.map((action, index) => {
            const actionContent = (
              <span className="text-sm font-medium text-primary-600 hover:text-primary-700">
                {action.label}
              </span>
            );

            return action.href ? (
              <Link 
                key={index} 
                to={action.href}
                onClick={(e) => e.stopPropagation()}
              >
                {actionContent}
              </Link>
            ) : (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  action.onClick?.();
                }}
                className="text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                {action.label}
              </button>
            );
          })}
        </div>
      )}
    </>
  );

  const cardProps = {
    variant: 'compact' as const,
    loading,
    className: `${className} ${isClickable ? 'cursor-pointer' : ''}`,
    hoverable: isClickable,
    ...(onClick && !href && {
      onClick: handleCardClick,
      role: 'button',
      tabIndex: 0,
      onKeyDown: handleKeyDown,
    }),
  };

  // If href is provided, wrap in Link
  if (href) {
    return (
      <Link to={href} className="block">
        <Card {...cardProps}>
          {cardContent}
        </Card>
      </Link>
    );
  }

  return (
    <Card {...cardProps}>
      {cardContent}
    </Card>
  );
}

export default SummaryCard;
