// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React from 'react';
import { X } from 'lucide-react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onRemove?: () => void;
  className?: string;
}

export default function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  icon,
  onRemove,
  className = '',
}: BadgeProps) {
  const variantStyles = {
    success: 'bg-success-50 text-success-700 border-success-200',
    warning: 'bg-warning-50 text-warning-700 border-warning-200',
    error: 'bg-error-50 text-error-700 border-error-200',
    info: 'bg-primary-50 text-primary-700 border-primary-200',
    neutral: 'bg-paper-100 text-ink-700 border-paper-300',
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-3 py-1 text-xs gap-1.5',
    lg: 'px-3 py-1.5 text-sm gap-2',
  };

  const iconSize = {
    sm: 'h-3 w-3',
    md: 'h-3.5 w-3.5',
    lg: 'h-4 w-4',
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full border font-medium
        ${variantStyles[variant]}
        ${sizeStyles[size]}
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
