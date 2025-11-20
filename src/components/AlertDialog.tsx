import { ReactNode, useEffect } from 'react';
import { AlertTriangle, AlertCircle, CheckCircle, Info, X } from 'lucide-react';
import Button from './Button';

export interface AlertDialogAction {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  loading?: boolean;
  disabled?: boolean;
}

export interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: 'info' | 'success' | 'warning' | 'error';
  icon?: ReactNode;
  title: string;
  description?: string;
  actions?: AlertDialogAction[];
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  children?: ReactNode;
}

const variantConfig = {
  info: {
    icon: Info,
    iconColor: 'text-accent-600',
    iconBg: 'bg-accent-100',
    borderColor: 'border-accent-200',
  },
  success: {
    icon: CheckCircle,
    iconColor: 'text-success-600',
    iconBg: 'bg-success-100',
    borderColor: 'border-success-200',
  },
  warning: {
    icon: AlertTriangle,
    iconColor: 'text-warning-600',
    iconBg: 'bg-warning-100',
    borderColor: 'border-warning-200',
  },
  error: {
    icon: AlertCircle,
    iconColor: 'text-error-600',
    iconBg: 'bg-error-100',
    borderColor: 'border-error-200',
  },
};

export default function AlertDialog({
  isOpen,
  onClose,
  variant = 'info',
  icon,
  title,
  description,
  actions,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  children,
}: AlertDialogProps) {
  const config = variantConfig[variant];
  const IconComponent = icon || config.icon;

  // Close on Escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div
        className={`
          bg-white rounded-lg shadow-xl max-w-md w-full
          border-2 ${config.borderColor}
          animate-in fade-in zoom-in duration-200
        `}
      >
        {/* Header with Icon */}
        <div className="p-6 pb-4">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className={`
                flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                ${config.iconBg}
              `}
            >
              {typeof IconComponent === 'function' ? (
                <IconComponent className={`h-6 w-6 ${config.iconColor}`} />
              ) : (
                IconComponent
              )}
            </div>

            {/* Title & Close */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3
                  id="alert-dialog-title"
                  className="text-lg font-semibold text-ink-900"
                >
                  {title}
                </h3>

                {showCloseButton && (
                  <button
                    onClick={onClose}
                    className="flex-shrink-0 text-ink-400 hover:text-ink-600 transition-colors"
                    aria-label="Close dialog"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Description */}
              {description && (
                <p
                  id="alert-dialog-description"
                  className="mt-2 text-sm text-ink-600"
                >
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Custom Content */}
        {children && <div className="px-6 pb-4">{children}</div>}

        {/* Actions */}
        {actions && actions.length > 0 && (
          <div className="px-6 pb-6 flex items-center justify-end gap-3">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || 'secondary'}
                onClick={action.onClick}
                loading={action.loading}
                disabled={action.disabled}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
