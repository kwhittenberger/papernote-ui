// Grid Component - CSS Grid layout system
// Provides flexible grid layouts with consistent spacing

import React from 'react';

export interface GridProps {
  /** Content to arrange in grid */
  children: React.ReactNode;
  /** Number of columns */
  columns?: 1 | 2 | 3 | 4 | 6 | 12;
  /** Gap between grid items */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Custom className */
  className?: string;
}

/**
 * Grid component for arranging children in a CSS grid layout.
 * 
 * Column options: 1, 2, 3, 4, 6, 12
 * 
 * Gap scale:
 * - none: 0
 * - xs: 0.5rem (2)
 * - sm: 0.75rem (3)
 * - md: 1.5rem (6)
 * - lg: 2rem (8)
 * - xl: 3rem (12)
 */
export const Grid: React.FC<GridProps> = ({
  children,
  columns = 2,
  gap = 'md',
  className = '',
}) => {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6',
    12: 'grid-cols-12',
  };

  const gapClasses = {
    none: 'gap-0',
    xs: 'gap-2',
    sm: 'gap-3',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  };

  return (
    <div
      className={`
        grid
        ${columnClasses[columns]}
        ${gapClasses[gap]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Grid;
