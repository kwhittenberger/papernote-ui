import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface ActionButtonProps {
  icon?: React.ReactNode | LucideIcon;
  label?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  tooltip?: string;
  className?: string;
}

const variantConfig = {
  primary: 'text-blue-600 hover:text-blue-900 hover:bg-blue-50',
  secondary: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
  ghost: 'text-gray-400 hover:text-gray-600 hover:bg-gray-50',
  danger: 'text-red-600 hover:text-red-900 hover:bg-red-50',
};

const sizeConfig = {
  sm: {
    container: 'p-1',
    icon: 'h-3 w-3',
    text: 'text-xs',
  },
  md: {
    container: 'p-1',
    icon: 'h-4 w-4',
    text: 'text-sm',
  },
  lg: {
    container: 'p-2',
    icon: 'h-5 w-5',
    text: 'text-base',
  },
};

export default function ActionButton({
  icon,
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  tooltip,
  className = '',
}: ActionButtonProps) {
  const variantStyles = variantConfig[variant];
  const sizeStyles = sizeConfig[size];

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  // Handle both component and icon class
  const renderIcon = () => {
    if (loading) {
      return (
        <svg 
          className={`${sizeStyles.icon} animate-spin`} 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      );
    }
    
    if (!icon) return null;
    
    // If it's a Lucide icon component
    if (typeof icon === 'function') {
      const IconComponent = icon as LucideIcon;
      return <IconComponent className={sizeStyles.icon} />;
    }
    
    // If it's already a React element, clone with className
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon, {
        className: sizeStyles.icon,
      } as any);
    }

    return null;
  };

  const buttonClasses = [
    'inline-flex items-center justify-center rounded transition-colors duration-150',
    variantStyles,
    sizeStyles.container,
    disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      onClick={handleClick}
      disabled={disabled || loading}
      title={tooltip || label}
      aria-label={tooltip || label}
      className={buttonClasses}
    >
      {renderIcon()}
      {label && label.trim() !== '' && (
        <span className={`ml-1 ${sizeStyles.text}`}>
          {label}
        </span>
      )}
    </button>
  );
}