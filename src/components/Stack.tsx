// Stack Component - Vertical or horizontal stacking layout
// Provides consistent spacing between child elements

import React, { forwardRef } from 'react';

type SpacingValue = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content to stack */
  children: React.ReactNode;
  /** Direction of stack */
  direction?: 'vertical' | 'horizontal';
  /** Spacing between items (alias: gap) */
  spacing?: SpacingValue;
  /** Spacing between items (alias for spacing - for developer convenience) */
  gap?: SpacingValue;
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
 * Supports ref forwarding for DOM access.
 * 
 * Spacing scale (use either `spacing` or `gap` prop - they're aliases):
 * - none: 0
 * - xs: 0.5rem (2)
 * - sm: 0.75rem (3)
 * - md: 1.5rem (6)
 * - lg: 2rem (8)
 * - xl: 3rem (12)
 * 
 * @example
 * ```tsx
 * // Using spacing prop
 * <Stack spacing="md">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 * </Stack>
 * 
 * // Using gap prop (alias)
 * <Stack gap="md">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 * </Stack>
 * ```
 */
export const Stack = forwardRef<HTMLDivElement, StackProps>(({
  children,
  direction = 'vertical',
  spacing,
  gap,
  align = 'stretch',
  justify = 'start',
  wrap = false,
  className = '',
  ...htmlProps
}, ref) => {
  // Use gap as alias for spacing (spacing takes precedence if both provided)
  const effectiveSpacing = spacing ?? gap ?? 'md';

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
      ref={ref}
      {...htmlProps}
      className={`
        flex
        ${direction === 'vertical' ? 'flex-col' : 'flex-row'}
        ${wrap ? 'flex-wrap' : ''}
        ${spacingClasses[direction][effectiveSpacing]}
        ${alignClasses[align]}
        ${justifyClasses[justify]}
        ${className}
      `}
    >
      {children}
    </div>
  );
});

Stack.displayName = 'Stack';

export default Stack;
