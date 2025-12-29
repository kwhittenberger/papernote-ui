// Text Component - Typography with consistent styling
// Provides semantic text elements with design system styling

import React, { forwardRef } from 'react';

type TextElement = 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';

type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';

export interface TextProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  /** Text content */
  children: React.ReactNode;
  /** HTML element to render */
  as?: TextElement;
  /** Size variant (base size) */
  size?: TextSize;
  /** Size on small screens (640px+) - overrides base size */
  smSize?: TextSize;
  /** Size on medium screens (768px+) - overrides smaller breakpoints */
  mdSize?: TextSize;
  /** Size on large screens (1024px+) - overrides smaller breakpoints */
  lgSize?: TextSize;
  /** Weight variant */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Color variant */
  color?: 'primary' | 'secondary' | 'muted' | 'accent' | 'error' | 'success' | 'warning' | 'caution';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Truncate text with ellipsis (single line) */
  truncate?: boolean;
  /** Clamp text to specific number of lines (with ellipsis) */
  lineClamp?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Text transform */
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal';
  /** Custom className */
  className?: string;
}

/**
 * Text component for consistent typography across the application.
 * 
 * Supports ref forwarding for DOM access.
 * 
 * Size scale:
 * - xs: 0.75rem (12px)
 * - sm: 0.875rem (14px)
 * - base: 1rem (16px)
 * - lg: 1.125rem (18px)
 * - xl: 1.25rem (20px)
 * - 2xl: 1.5rem (24px)
 * 
 * @example
 * ```tsx
 * <Text size="lg" weight="semibold" color="primary">
 *   Hello World
 * </Text>
 *
 * <Text color="warning">Warning message</Text>
 * <Text color="caution">Caution message (informational, not alarming)</Text>
 *
 * // With ref
 * const textRef = useRef<HTMLParagraphElement>(null);
 * <Text ref={textRef}>Measurable text</Text>
 * ```
 */
export const Text = forwardRef<HTMLElement, TextProps>(({
  children,
  as: Component = 'p',
  size = 'base',
  smSize,
  mdSize,
  lgSize,
  weight = 'normal',
  color = 'primary',
  align = 'left',
  truncate = false,
  lineClamp,
  transform,
  className = '',
  ...htmlProps
}, ref) => {
  const sizeClasses: Record<TextSize, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  };

  // Responsive size classes
  const smSizeClasses: Record<TextSize, string> = {
    xs: 'sm:text-xs',
    sm: 'sm:text-sm',
    base: 'sm:text-base',
    lg: 'sm:text-lg',
    xl: 'sm:text-xl',
    '2xl': 'sm:text-2xl',
  };

  const mdSizeClasses: Record<TextSize, string> = {
    xs: 'md:text-xs',
    sm: 'md:text-sm',
    base: 'md:text-base',
    lg: 'md:text-lg',
    xl: 'md:text-xl',
    '2xl': 'md:text-2xl',
  };

  const lgSizeClasses: Record<TextSize, string> = {
    xs: 'lg:text-xs',
    sm: 'lg:text-sm',
    base: 'lg:text-base',
    lg: 'lg:text-lg',
    xl: 'lg:text-xl',
    '2xl': 'lg:text-2xl',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const colorClasses = {
    primary: 'text-ink-900',
    secondary: 'text-ink-700',
    muted: 'text-ink-500',
    accent: 'text-primary-600',
    error: 'text-error-600',
    success: 'text-success-600',
    warning: 'text-warning-600',
    caution: 'text-warning-700',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const transformClasses = {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    normal: 'normal-case',
  };

  const lineClampClasses = {
    1: 'line-clamp-1',
    2: 'line-clamp-2',
    3: 'line-clamp-3',
    4: 'line-clamp-4',
    5: 'line-clamp-5',
    6: 'line-clamp-6',
  };

  // Build class list
  const classes = [
    sizeClasses[size],
    smSize ? smSizeClasses[smSize] : '',
    mdSize ? mdSizeClasses[mdSize] : '',
    lgSize ? lgSizeClasses[lgSize] : '',
    weightClasses[weight],
    colorClasses[color],
    alignClasses[align],
    transform ? transformClasses[transform] : '',
    truncate ? 'truncate' : '',
    lineClamp ? lineClampClasses[lineClamp] : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component 
      ref={ref as any} 
      className={classes}
      {...htmlProps}
    >
      {children}
    </Component>
  );
});

Text.displayName = 'Text';

export default Text;
