import React, { useEffect, useRef, useId } from 'react';
import { X } from 'lucide-react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  /** Animation variant for modal entrance (default: 'scale') */
  animation?: 'scale' | 'slide-up' | 'slide-down' | 'fade' | 'none';
}

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-7xl',
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  animation = 'scale',
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const mouseDownOnBackdrop = useRef(false);
  const titleId = useId();

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
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
  }, [isOpen, onClose]);

  // Track if mousedown originated on the backdrop
  const handleBackdropMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      mouseDownOnBackdrop.current = true;
    } else {
      mouseDownOnBackdrop.current = false;
    }
  };

  // Handle click outside - only close if both mousedown and click happened on backdrop
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && mouseDownOnBackdrop.current) {
      onClose();
    }
    // Reset the flag after handling click
    mouseDownOnBackdrop.current = false;
  };

  const getAnimationClass = () => {
    switch (animation) {
      case 'scale':
        return 'animate-scale-in';
      case 'slide-up':
        return 'animate-slide-in-bottom';
      case 'slide-down':
        return 'animate-slide-in-top';
      case 'fade':
        return 'animate-fade-in';
      case 'none':
        return '';
      default:
        return 'animate-scale-in';
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900 bg-opacity-50 backdrop-blur-sm animate-fade-in"
      onMouseDown={handleBackdropMouseDown}
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className={`${sizeClasses[size]} w-full bg-white bg-subtle-grain rounded-xl shadow-2xl border border-paper-200 ${getAnimationClass()}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-paper-200">
          <h3 id={titleId} className="text-lg font-medium text-ink-900">
            {title}
          </h3>
          {showCloseButton && (
            <button
              onClick={onClose}
              className="text-ink-400 hover:text-ink-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  );
}

export function ModalFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-paper-200 bg-paper-50">
      {children}
    </div>
  );
}
