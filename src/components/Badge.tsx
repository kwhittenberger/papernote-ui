import React from 'react';
import { X } from 'lucide-react';

export interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onRemove?: () => void;
  className?: string;
  /** Show as dot indicator (no text, just a colored dot) */
  dot?: boolean;
  /** Use pill shape (more rounded, compact padding) for inline use */
  pill?: boolean;
}

export default function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  icon,
  onRemove,
  className = '',
  dot = false,
  pill = false,
}: BadgeProps) {
  const variantStyles = {
    success: 'bg-success-50 text-success-700 border-success-200',
    warning: 'bg-warning-50 text-warning-700 border-warning-200',
    error: 'bg-error-50 text-error-700 border-error-200',
    info: 'bg-primary-50 text-primary-700 border-primary-200',
    neutral: 'bg-paper-100 text-ink-700 border-paper-300',
  };

  const dotVariantStyles = {
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    error: 'bg-error-500',
    info: 'bg-primary-500',
    neutral: 'bg-ink-400',
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-3 py-1 text-xs gap-1.5',
    lg: 'px-3 py-1.5 text-sm gap-2',
  };

  // Pill variant has tighter horizontal padding and fully rounded ends
  const pillSizeStyles = {
    sm: 'px-1.5 py-0.5 text-xs gap-1',
    md: 'px-2 py-0.5 text-xs gap-1',
    lg: 'px-2.5 py-1 text-sm gap-1.5',
  };

  const dotSizeStyles = {
    sm: 'h-1.5 w-1.5',
    md: 'h-2 w-2',
    lg: 'h-2.5 w-2.5',
  };

  const iconSize = {
    sm: 'h-3 w-3',
    md: 'h-3.5 w-3.5',
    lg: 'h-4 w-4',
  };

  // Dot variant - just a colored circle
  if (dot) {
    return (
      <span
        className={`
          inline-block rounded-full
          ${dotVariantStyles[variant]}
          ${dotSizeStyles[size]}
          ${className}
        `}
        aria-label={`${variant} indicator`}
      />
    );
  }

  // Regular badge
  return (
    <span
      className={`
        inline-flex items-center border font-medium
        ${pill ? 'rounded-full' : 'rounded-full'}
        ${variantStyles[variant]}
        ${pill ? pillSizeStyles[size] : sizeStyles[size]}
        ${className}
      `}
    >
      {icon && <span className={iconSize[size]}>{icon}</span>}
      <span>{children}</span>
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 hover:opacity-70 transition-opacity"
          aria-label="Remove badge"
        >
          <X className={iconSize[size]} />
        </button>
      )}
    </span>
  );
}
