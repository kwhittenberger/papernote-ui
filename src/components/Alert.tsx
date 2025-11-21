import React from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export interface AlertAction {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export interface AlertProps {
  variant?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
  /** Action buttons to display at the bottom of the alert */
  actions?: AlertAction[];
}

export default function Alert({
  variant = 'info',
  title,
  children,
  onClose,
  className = '',
  actions = [],
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

  const getButtonStyles = (actionVariant: 'primary' | 'secondary' = 'primary') => {
    const base = 'px-3 py-1.5 rounded text-sm font-medium transition-colors';

    if (actionVariant === 'primary') {
      const variantClasses = {
        success: 'bg-success-600 text-white hover:bg-success-700',
        error: 'bg-error-600 text-white hover:bg-error-700',
        warning: 'bg-warning-600 text-white hover:bg-warning-700',
        info: 'bg-primary-600 text-white hover:bg-primary-700',
      };
      return `${base} ${variantClasses[variant]}`;
    }

    // Secondary
    const variantClasses = {
      success: 'bg-white border border-success-300 text-success-700 hover:bg-success-50',
      error: 'bg-white border border-error-300 text-error-700 hover:bg-error-50',
      warning: 'bg-white border border-warning-300 text-warning-700 hover:bg-warning-50',
      info: 'bg-white border border-primary-300 text-primary-700 hover:bg-primary-50',
    };
    return `${base} ${variantClasses[variant]}`;
  };

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

          {actions.length > 0 && (
            <div className="flex gap-2 mt-3">
              {actions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.onClick}
                  className={getButtonStyles(action.variant)}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
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
