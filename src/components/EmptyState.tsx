import React from 'react';
import Button from './Button';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  /** Optional custom content rendered below the description */
  children?: React.ReactNode;
}

export default function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,
  children,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      {/* Icon */}
      {icon && (
        <div className="mb-6 text-ink-400">
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg font-medium text-ink-900 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-ink-600 max-w-md mb-8">{description}</p>

      {/* Custom children content */}
      {children && (
        <div className="mb-8 w-full max-w-md">
          {children}
        </div>
      )}

      {/* Actions */}
      {(action || secondaryAction) && (
        <div className="flex items-center gap-3">
          {action && (
            <Button
              variant="primary"
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          )}
          {secondaryAction && (
            <Button
              variant="secondary"
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
