// StatsGrid Component - Responsive grid layout for displaying statistics in cards
// Provides consistent responsive layout for key metrics

import React from 'react';

export interface StatItemProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export interface StatsGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

/**
 * Individual stat display item (for non-card usage)
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
 * Responsive grid container for displaying statistics cards
 * Uses CSS custom properties for responsive behavior without Tailwind
 */
export const StatsGrid: React.FC<StatsGridProps> = ({
  children,
  columns = 3,
  className = ''
}) => {
  const gridId = `stats-grid-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          #${gridId} {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 1.5rem;
          }
          @media (min-width: 768px) {
            #${gridId} {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }
          @media (min-width: 1024px) {
            #${gridId} {
              grid-template-columns: repeat(${columns}, minmax(0, 1fr));
            }
          }
        `
      }} />
      <div id={gridId} className={className}>
        {children}
      </div>
    </>
  );
};

export default StatsGrid;
