// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  children,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-400 disabled:opacity-40 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-accent-500 text-white border-accent-500 hover:bg-accent-600 hover:shadow-sm active:scale-[0.98]',
    secondary: 'bg-white text-ink-700 border-paper-300 hover:bg-paper-50 hover:border-paper-400 shadow-xs hover:shadow-sm',
    ghost: 'bg-transparent text-ink-600 border-transparent hover:text-ink-800 hover:bg-paper-100 active:bg-paper-200',
    danger: 'bg-error-500 text-white border-error-500 hover:bg-error-600 hover:shadow-sm active:scale-[0.98]',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5',
  };

  const iconSize = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <Loader2 className={`${iconSize[size]} animate-spin`} />
      )}
      {!loading && icon && iconPosition === 'left' && (
        <span className={iconSize[size]}>{icon}</span>
      )}
      {children}
      {!loading && icon && iconPosition === 'right' && (
        <span className={iconSize[size]}>{icon}</span>
      )}
    </button>
  );
}
