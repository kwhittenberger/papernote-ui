import { ReactNode } from 'react';
import { X } from 'lucide-react';

export interface ChipProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  onClose?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const variantClasses = {
  primary: {
    default: 'bg-primary-100 text-primary-700 border-primary-200',
    hover: 'hover:bg-primary-200',
    close: 'hover:bg-primary-300 text-primary-600',
  },
  secondary: {
    default: 'bg-ink-100 text-ink-700 border-ink-200',
    hover: 'hover:bg-ink-200',
    close: 'hover:bg-ink-300 text-ink-600',
  },
  success: {
    default: 'bg-success-100 text-success-700 border-success-200',
    hover: 'hover:bg-success-200',
    close: 'hover:bg-success-300 text-success-600',
  },
  warning: {
    default: 'bg-warning-100 text-warning-700 border-warning-200',
    hover: 'hover:bg-warning-200',
    close: 'hover:bg-warning-300 text-warning-600',
  },
  error: {
    default: 'bg-error-100 text-error-700 border-error-200',
    hover: 'hover:bg-error-200',
    close: 'hover:bg-error-300 text-error-600',
  },
  info: {
    default: 'bg-accent-100 text-accent-700 border-accent-200',
    hover: 'hover:bg-accent-200',
    close: 'hover:bg-accent-300 text-accent-600',
  },
};

const sizeClasses = {
  sm: {
    container: 'h-6 px-2 text-xs gap-1',
    icon: 'h-3 w-3',
    close: 'h-3 w-3 ml-1',
  },
  md: {
    container: 'h-7 px-2.5 text-sm gap-1.5',
    icon: 'h-3.5 w-3.5',
    close: 'h-3.5 w-3.5 ml-1.5',
  },
  lg: {
    container: 'h-8 px-3 text-base gap-2',
    icon: 'h-4 w-4',
    close: 'h-4 w-4 ml-2',
  },
};

export default function Chip({
  children,
  variant = 'secondary',
  size = 'md',
  onClose,
  icon,
  disabled = false,
  className = '',
  onClick,
}: ChipProps) {
  const variantStyle = variantClasses[variant];
  const sizeStyle = sizeClasses[size];

  const isClickable = !disabled && (onClick || onClose);

  return (
    <div
      className={`
        inline-flex items-center rounded-full border font-medium
        transition-colors
        ${variantStyle.default}
        ${isClickable && !disabled ? variantStyle.hover : ''}
        ${sizeStyle.container}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${onClick && !disabled ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick && !disabled ? onClick : undefined}
      role={onClick ? 'button' : undefined}
      aria-disabled={disabled}
    >
      {icon && (
        <span className={`flex-shrink-0 ${sizeStyle.icon}`}>
          {icon}
        </span>
      )}

      <span className="truncate">{children}</span>

      {onClose && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (!disabled) onClose();
          }}
          disabled={disabled}
          className={`
            flex-shrink-0 rounded-full transition-colors
            ${variantStyle.close}
            ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
            ${sizeStyle.close}
          `}
          aria-label="Remove"
        >
          <X className="w-full h-full" />
        </button>
      )}
    </div>
  );
}
