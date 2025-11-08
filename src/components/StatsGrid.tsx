// StatsGrid Component - Grid layout for displaying statistics in cards
// Provides consistent 3-column layout for key metrics

import React from 'react';

export interface StatItemProps {
  label: string;
  value: string | number;
  className?: string;
}

export interface StatsGridProps {
  stats: StatItemProps[];
  columns?: 2 | 3 | 4;
  className?: string;
}

/**
 * Individual stat display item
 */
export const StatItem: React.FC<StatItemProps> = ({ label, value, className = '' }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-sm text-ink-600 mb-2">{label}</span>
      <span className="text-xl font-semibold text-ink-900">{value}</span>
    </div>
  );
};

/**
 * Grid container for displaying multiple statistics
 * Default: 3 columns with equal spacing
 */
export const StatsGrid: React.FC<StatsGridProps> = ({
  stats,
  columns = 3,
  className = ''
}) => {
  // Use flex with flex-1 to ensure equal column widths
  return (
    <div className={`flex gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="flex-1">
          <StatItem {...stat} />
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
