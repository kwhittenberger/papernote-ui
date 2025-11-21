import React, { useEffect, useId } from 'react';
import { X } from 'lucide-react';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  /** Placement of drawer */
  placement?: 'left' | 'right' | 'top' | 'bottom';
  /** Size of drawer */
  size?: 'sm' | 'md' | 'lg' | 'full';
  /** Show close button */
  showCloseButton?: boolean;
  /** Show overlay backdrop */
  showOverlay?: boolean;
  /** Close on overlay click */
  closeOnOverlayClick?: boolean;
  /** Close on escape key */
  closeOnEscape?: boolean;
  /** Custom header content (replaces title) */
  header?: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Class name for drawer container */
  className?: string;
}

const sizeClasses = {
  left: {
    sm: 'w-64',
    md: 'w-96',
    lg: 'w-[32rem]',
    full: 'w-full',
  },
  right: {
    sm: 'w-64',
    md: 'w-96',
    lg: 'w-[32rem]',
    full: 'w-full',
  },
  top: {
    sm: 'h-64',
    md: 'h-96',
    lg: 'h-[32rem]',
    full: 'h-full',
  },
  bottom: {
    sm: 'h-64',
    md: 'h-96',
    lg: 'h-[32rem]',
    full: 'h-full',
  },
};

const placementClasses = {
  left: 'left-0 top-0 bottom-0',
  right: 'right-0 top-0 bottom-0',
  top: 'top-0 left-0 right-0',
  bottom: 'bottom-0 left-0 right-0',
};

const animationClasses = {
  left: {
    enter: 'animate-slide-in-left',
    exit: 'animate-slide-out-left',
  },
  right: {
    enter: 'animate-slide-in-right',
    exit: 'animate-slide-out-right',
  },
  top: {
    enter: 'animate-slide-in-top',
    exit: 'animate-slide-out-top',
  },
  bottom: {
    enter: 'animate-slide-in-bottom',
    exit: 'animate-slide-out-bottom',
  },
};

export default function Drawer({
  isOpen,
  onClose,
  title,
  children,
  placement = 'right',
  size = 'md',
  showCloseButton = true,
  showOverlay = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  header,
  footer,
  className = '',
}: DrawerProps) {
  const titleId = useId();
  
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && closeOnEscape) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, closeOnEscape]);

  // Handle overlay click
  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const isHorizontal = placement === 'left' || placement === 'right';

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-ink-900 bg-opacity-50 backdrop-blur-sm animate-fade-in"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed ${placementClasses[placement]}
          ${sizeClasses[placement][size]}
          bg-white border-paper-200 shadow-2xl
          ${isHorizontal ? 'border-r' : 'border-b'}
          ${animationClasses[placement].enter}
          ${isHorizontal ? 'flex flex-col' : 'flex flex-col'}
          ${className}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
      >
        {/* Header */}
        {(title || header) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-paper-200 flex-shrink-0">
            {header || (
              <h3 id={titleId} className="text-lg font-medium text-ink-900">
                {title}
              </h3>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="text-ink-400 hover:text-ink-600 transition-colors ml-4"
                aria-label="Close drawer"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-paper-200 bg-paper-50 flex-shrink-0">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

export function DrawerFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-paper-200 bg-paper-50">
      {children}
    </div>
  );
}
