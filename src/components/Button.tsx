import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Button component props
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant of the button */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Show loading spinner and disable interaction */
  loading?: boolean;
  /** Icon to display alongside button text */
  icon?: React.ReactNode;
  /** Position of the icon relative to text */
  iconPosition?: 'left' | 'right';
  /** Make button take full width of container */
  fullWidth?: boolean;
  /** Icon-only mode - renders square button with just icon (no text padding) */
  iconOnly?: boolean;
  /** Badge content (number or text) displayed in top-right corner */
  badge?: number | string;
  /** Badge color variant */
  badgeVariant?: 'primary' | 'success' | 'warning' | 'error';
}

/**
 * Button - Interactive button component with variants, sizes, and loading states
 *
 * A versatile button component that supports multiple visual styles, sizes, icons,
 * loading states, and notification badges.
 *
 * Supports ref forwarding for DOM access.
 *
 * @example Basic usage
 * ```tsx
 * <Button variant="primary">Click me</Button>
 * ```
 *
 * @example With icon and loading
 * ```tsx
 * <Button
 *   variant="secondary"
 *   icon={<Save />}
 *   loading={isSaving}
 * >
 *   Save Changes
 * </Button>
 * ```
 *
 * @example Icon-only with badge
 * ```tsx
 * <Button
 *   iconOnly
 *   badge={5}
 *   badgeVariant="error"
 * >
 *   <Bell />
 * </Button>
 * ```
 *
 * @example With ref
 * ```tsx
 * const buttonRef = useRef<HTMLButtonElement>(null);
 * <Button ref={buttonRef}>Focusable</Button>
 * ```
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  iconOnly = false,
  badge,
  badgeVariant = 'error',
  children,
  disabled,
  className = '',
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-400 disabled:opacity-40 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-accent-500 text-white border-accent-500 hover:bg-accent-600 hover:shadow-sm active:scale-[0.98]',
    secondary: 'bg-white text-ink-700 border-paper-300 hover:bg-paper-50 hover:border-paper-400 shadow-xs hover:shadow-sm',
    ghost: 'bg-transparent text-ink-600 border-transparent hover:text-ink-800 hover:bg-paper-100 active:bg-paper-200',
    danger: 'bg-error-500 text-white border-error-500 hover:bg-error-600 hover:shadow-sm active:scale-[0.98]',
    outline: 'bg-transparent text-ink-700 border-paper-300 hover:bg-paper-50 hover:border-ink-400',
  };

  // Icon-only buttons are square
  const sizeStyles = {
    sm: iconOnly ? 'p-1.5' : 'px-3 py-1.5 text-xs gap-1.5',
    md: iconOnly ? 'p-2.5' : 'px-4 py-2.5 text-sm gap-2',
    lg: iconOnly ? 'p-3' : 'px-6 py-3 text-base gap-2.5',
  };

  const iconSize = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  const badgeColorStyles = {
    primary: 'bg-accent-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    error: 'bg-error-500',
  };

  const badgeSizeStyles = {
    sm: 'min-w-[16px] h-4 text-[10px] px-1',
    md: 'min-w-[18px] h-[18px] text-[11px] px-1.5',
    lg: 'min-w-[20px] h-5 text-xs px-1.5',
  };

  const buttonElement = (
    <button
      ref={ref}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth && !iconOnly ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled || loading}
      aria-label={iconOnly && typeof children === 'string' ? children : props['aria-label']}
      {...props}
    >
      {loading && (
        <Loader2 className={`${iconSize[size]} animate-spin`} />
      )}
      {!loading && icon && iconPosition === 'left' && (
        <span className={iconSize[size]}>{icon}</span>
      )}
      {!iconOnly && children}
      {!loading && icon && iconPosition === 'right' && !iconOnly && (
        <span className={iconSize[size]}>{icon}</span>
      )}
    </button>
  );

  // If no badge, return button directly
  if (!badge && badge !== 0) {
    return buttonElement;
  }

  // Format badge content (limit to 99+)
  const badgeContent = typeof badge === 'number' && badge > 99 ? '99+' : String(badge);

  // Wrap button with badge
  return (
    <div className="relative inline-block">
      {buttonElement}
      <span
        className={`
          absolute -top-1 -right-1
          flex items-center justify-center
          rounded-full text-white font-semibold
          ${badgeColorStyles[badgeVariant]}
          ${badgeSizeStyles[size]}
          shadow-sm
          pointer-events-none
        `}
        aria-label={`${badgeContent} notifications`}
      >
        {badgeContent}
      </span>
    </div>
  );
});

Button.displayName = 'Button';

export default Button;
