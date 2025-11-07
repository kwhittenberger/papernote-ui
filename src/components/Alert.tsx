// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export interface AlertProps {
  variant?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export default function Alert({
  variant = 'info',
  title,
  children,
  onClose,
  className = '',
}: AlertProps) {
  const variantStyles = {
    success: {
      container: 'bg-success-50 border-success-200 text-success-900',
      icon: <CheckCircle className="h-5 w-5 text-success-600" />,
    },
    error: {
      container: 'bg-error-50 border-error-200 text-error-900',
      icon: <AlertCircle className="h-5 w-5 text-error-600" />,
    },
    warning: {
      container: 'bg-warning-50 border-warning-200 text-warning-900',
      icon: <AlertTriangle className="h-5 w-5 text-warning-600" />,
    },
    info: {
      container: 'bg-primary-50 border-primary-200 text-primary-900',
      icon: <Info className="h-5 w-5 text-primary-600" />,
    },
  };

  const styles = variantStyles[variant];

  return (
    <div
      className={`rounded-lg border p-4 ${styles.container} ${className}`}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">{styles.icon}</div>
        <div className="flex-1 min-w-0">
          {title && <h4 className="text-sm font-medium mb-1">{title}</h4>}
          <div className="text-sm">{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 text-current opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Close alert"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
