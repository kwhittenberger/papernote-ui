// Text Component - Typography with consistent styling
// Provides semantic text elements with design system styling

import React from 'react';

export interface TextProps {
  /** Text content */
  children: React.ReactNode;
  /** HTML element to render */
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
  /** Size variant */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  /** Weight variant */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Color variant */
  color?: 'primary' | 'secondary' | 'muted' | 'accent' | 'error' | 'success';
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
 * Size scale:
 * - xs: 0.75rem (12px)
 * - sm: 0.875rem (14px)
 * - base: 1rem (16px)
 * - lg: 1.125rem (18px)
 * - xl: 1.25rem (20px)
 * - 2xl: 1.5rem (24px)
 */
export const Text: React.FC<TextProps> = ({
  children,
  as: Component = 'p',
  size = 'base',
  weight = 'normal',
  color = 'primary',
  align = 'left',
  truncate = false,
  lineClamp,
  transform,
  className = '',
}) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
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
    weightClasses[weight],
    colorClasses[color],
    alignClasses[align],
    transform ? transformClasses[transform] : '',
    truncate ? 'truncate' : '',
    lineClamp ? lineClampClasses[lineClamp] : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
};

export default Text;
