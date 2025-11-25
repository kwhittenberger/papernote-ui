// Grid Component - CSS Grid layout system
// Provides flexible grid layouts with consistent spacing

import React, { forwardRef } from 'react';

type ColumnCount = 1 | 2 | 3 | 4 | 6 | 12;

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content to arrange in grid */
  children: React.ReactNode;
  /** Number of columns (default, or mobile-first base) */
  columns?: ColumnCount;
  /** Columns at sm breakpoint (640px+) */
  sm?: ColumnCount;
  /** Columns at md breakpoint (768px+) */
  md?: ColumnCount;
  /** Columns at lg breakpoint (1024px+) */
  lg?: ColumnCount;
  /** Columns at xl breakpoint (1280px+) */
  xl?: ColumnCount;
  /** Gap between grid items */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Custom className */
  className?: string;
}

/**
 * Grid component for arranging children in a CSS grid layout.
 * 
 * Supports ref forwarding for DOM access.
 *
 * Column options: 1, 2, 3, 4, 6, 12
 *
 * Responsive breakpoints (mobile-first):
 * - columns: Base (all sizes)
 * - sm: 640px and up
 * - md: 768px and up
 * - lg: 1024px and up
 * - xl: 1280px and up
 *
 * Gap scale:
 * - none: 0
 * - xs: 0.5rem (2)
 * - sm: 0.75rem (3)
 * - md: 1.5rem (6)
 * - lg: 2rem (8)
 * - xl: 3rem (12)
 *
 * @example
 * // Responsive grid: 1 column on mobile, 2 on tablet, 4 on desktop
 * <Grid columns={1} md={2} lg={4} gap="md">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 * </Grid>
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(({
  children,
  columns = 1,
  sm,
  md,
  lg,
  xl,
  gap = 'md',
  className = '',
  ...htmlProps
}, ref) => {
  // Base column classes
  const baseColumnClasses: Record<ColumnCount, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6',
    12: 'grid-cols-12',
  };

  // Responsive column classes
  const smColumnClasses: Record<ColumnCount, string> = {
    1: 'sm:grid-cols-1',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-3',
    4: 'sm:grid-cols-4',
    6: 'sm:grid-cols-6',
    12: 'sm:grid-cols-12',
  };

  const mdColumnClasses: Record<ColumnCount, string> = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    6: 'md:grid-cols-6',
    12: 'md:grid-cols-12',
  };

  const lgColumnClasses: Record<ColumnCount, string> = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    6: 'lg:grid-cols-6',
    12: 'lg:grid-cols-12',
  };

  const xlColumnClasses: Record<ColumnCount, string> = {
    1: 'xl:grid-cols-1',
    2: 'xl:grid-cols-2',
    3: 'xl:grid-cols-3',
    4: 'xl:grid-cols-4',
    6: 'xl:grid-cols-6',
    12: 'xl:grid-cols-12',
  };

  const gapClasses = {
    none: 'gap-0',
    xs: 'gap-2',
    sm: 'gap-3',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  };

  // Build responsive column classes
  const columnClassList = [
    baseColumnClasses[columns],
    sm ? smColumnClasses[sm] : '',
    md ? mdColumnClasses[md] : '',
    lg ? lgColumnClasses[lg] : '',
    xl ? xlColumnClasses[xl] : '',
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={ref}
      {...htmlProps}
      className={`
        grid
        ${columnClassList}
        ${gapClasses[gap]}
        ${className}
      `}
    >
      {children}
    </div>
  );
});

Grid.displayName = 'Grid';

export default Grid;
