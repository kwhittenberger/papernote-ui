
/**
 * ConfirmDialog - Confirmation dialog for destructive actions
 *
 * Replaces window.confirm() with a styled, accessible modal dialog.
 * Supports different variants (danger, warning, info) and customizable buttons.
 */

import React from 'react';
import Modal, { ModalFooter } from './Modal';
import { AlertTriangle, Info, Trash2 } from 'lucide-react';

export interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'danger' | 'warning' | 'info';
  icon?: React.ReactNode;
  isLoading?: boolean;
}

const variantStyles = {
  danger: {
    icon: Trash2,
    iconColor: 'text-error-600',
    iconBg: 'bg-error-50',
    button: 'bg-error-600 hover:bg-error-700 focus:ring-error-500',
  },
  warning: {
    icon: AlertTriangle,
    iconColor: 'text-warning-600',
    iconBg: 'bg-warning-50',
    button: 'bg-warning-600 hover:bg-warning-700 focus:ring-warning-500',
  },
  info: {
    icon: Info,
    iconColor: 'text-primary-600',
    iconBg: 'bg-primary-50',
    button: 'bg-accent-600 hover:bg-accent-700 focus:ring-accent-500',
  },
};

export default function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'danger',
  icon,
  isLoading = false,
}: ConfirmDialogProps) {
  const variantStyle = variantStyles[variant];
  const IconComponent = icon || variantStyle.icon;

  const handleConfirm = async () => {
    await onConfirm();
    // Note: onClose is called by useConfirmDialog hook after onConfirm completes
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={typeof title === 'string' ? title : String(title)} size="sm" showCloseButton={false}>
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full ${variantStyle.iconBg}`}>
          {typeof IconComponent === 'function' ? (
            <IconComponent className={`h-6 w-6 ${variantStyle.iconColor}`} />
          ) : React.isValidElement(IconComponent) ? (
            IconComponent
          ) : null}
        </div>

        {/* Message */}
        <div className="flex-1 pt-1">
          <p className="text-sm text-ink-700 leading-relaxed whitespace-pre-line">
            {typeof message === 'string' ? message : String(message)}
          </p>
        </div>
      </div>

      {/* Footer with buttons */}
      <ModalFooter>
        <button
          onClick={onClose}
          disabled={isLoading}
          className="px-4 py-2 text-sm font-medium text-ink-700 bg-white border border-paper-300 rounded-lg hover:bg-paper-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {typeof cancelLabel === 'string' ? cancelLabel : String(cancelLabel)}
        </button>
        <button
          onClick={handleConfirm}
          disabled={isLoading}
          className={`px-4 py-2 text-sm font-medium text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${variantStyle.button}`}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            typeof confirmLabel === 'string' ? confirmLabel : String(confirmLabel)
          )}
        </button>
      </ModalFooter>
    </Modal>
  );
}

/**
 * Hook for managing ConfirmDialog state
 *
 * Usage:
 * ```tsx
 * const confirmDialog = useConfirmDialog();
 *
 * const handleDelete = () => {
 *   confirmDialog.show({
 *     title: 'Delete Item',
 *     message: 'Are you sure you want to delete this item?',
 *     onConfirm: async () => {
 *       await deleteItem();
 *     }
 *   });
 * };
 *
 * return (
 *   <>
 *     <button onClick={handleDelete}>Delete</button>
 *     <ConfirmDialog {...confirmDialog.props} />
 *   </>
 * );
 * ```
 */
export function useConfirmDialog() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [config, setConfig] = React.useState<Omit<ConfirmDialogProps, 'isOpen' | 'onClose' | 'isLoading'>>({
    onConfirm: () => {},
    title: 'Confirm',
    message: 'Are you sure?',
  });

  const show = (newConfig: Omit<ConfirmDialogProps, 'isOpen' | 'onClose' | 'isLoading'>) => {
    setConfig(newConfig);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setIsLoading(false);
  };

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      await config.onConfirm();
      close();
    } catch (error) {
      console.error('Confirm action failed:', error);
      setIsLoading(false);
      throw error;
    }
  };

  return {
    show,
    close,
    props: {
      ...config,
      isOpen,
      onClose: close,
      onConfirm: handleConfirm,
      isLoading,
    } as ConfirmDialogProps,
  };
}
