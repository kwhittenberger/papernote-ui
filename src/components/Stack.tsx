// Stack Component - Vertical or horizontal stacking layout
// Provides consistent spacing between child elements

import React from 'react';

export interface StackProps {
  /** Content to stack */
  children: React.ReactNode;
  /** Direction of stack */
  direction?: 'vertical' | 'horizontal';
  /** Spacing between items */
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Alignment of items */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** Justify content */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  /** Enable wrapping (for horizontal stacks) */
  wrap?: boolean;
  /** Custom className */
  className?: string;
}

/**
 * Stack component for arranging children vertically or horizontally with consistent spacing.
 * 
 * Spacing scale:
 * - none: 0
 * - xs: 0.5rem (2)
 * - sm: 0.75rem (3)
 * - md: 1.5rem (6)
 * - lg: 2rem (8)
 * - xl: 3rem (12)
 */
export const Stack: React.FC<StackProps> = ({
  children,
  direction = 'vertical',
  spacing = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  className = '',
}) => {
  const spacingClasses = {
    vertical: {
      none: '',
      xs: 'space-y-2',
      sm: 'space-y-3',
      md: 'space-y-6',
      lg: 'space-y-8',
      xl: 'space-y-12',
    },
    horizontal: {
      none: '',
      xs: 'space-x-2',
      sm: 'space-x-3',
      md: 'space-x-6',
      lg: 'space-x-8',
      xl: 'space-x-12',
    },
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
  };

  return (
    <div
      className={`
        flex
        ${direction === 'vertical' ? 'flex-col' : 'flex-row'}
        ${wrap ? 'flex-wrap' : ''}
        ${spacingClasses[direction][spacing]}
        ${alignClasses[align]}
        ${justifyClasses[justify]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Stack;
