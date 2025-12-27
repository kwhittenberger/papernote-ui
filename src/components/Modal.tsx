import React, { useEffect, useRef, useId, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useIsMobile } from '../hooks/useResponsive';
import BottomSheet from './BottomSheet';

// Selector for all focusable elements
const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  /** Animation variant for modal entrance (default: 'scale') */
  animation?: 'scale' | 'slide-up' | 'slide-down' | 'fade' | 'none';
  /** Enable automatic scrolling for content that exceeds viewport height */
  scrollable?: boolean;
  /** Maximum height of the modal content area (e.g., '70vh', '500px') */
  maxHeight?: string;
  
  // Mobile behavior props
  /** Mobile display mode: 'auto' uses BottomSheet on mobile, 'modal' always uses modal, 'sheet' always uses BottomSheet */
  mobileMode?: 'auto' | 'modal' | 'sheet';
  /** Height preset for BottomSheet on mobile (default: 'lg') */
  mobileHeight?: 'sm' | 'md' | 'lg' | 'full';
  /** Show drag handle on BottomSheet (default: true) */
  mobileShowHandle?: boolean;
}

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-7xl',
};

/**
 * Modal - Adaptive dialog component
 * 
 * On desktop, renders as a centered modal dialog.
 * On mobile (when mobileMode='auto'), automatically renders as a BottomSheet
 * for better touch interaction and visibility.
 * 
 * @example Basic modal
 * ```tsx
 * <Modal isOpen={isOpen} onClose={handleClose} title="Edit User">
 *   <form>...</form>
 *   <ModalFooter>
 *     <Button onClick={handleClose}>Cancel</Button>
 *     <Button variant="primary" onClick={handleSave}>Save</Button>
 *   </ModalFooter>
 * </Modal>
 * ```
 * 
 * @example Scrollable modal for long content
 * ```tsx
 * <Modal 
 *   isOpen={isOpen} 
 *   onClose={handleClose} 
 *   title="Terms and Conditions"
 *   scrollable
 * >
 *   {longContent}
 * </Modal>
 * ```
 * 
 * @example Modal with custom max height
 * ```tsx
 * <Modal 
 *   isOpen={isOpen} 
 *   onClose={handleClose} 
 *   title="Document Preview"
 *   maxHeight="70vh"
 * >
 *   {documentContent}
 * </Modal>
 * ```
 * 
 * @example Force modal on mobile
 * ```tsx
 * <Modal 
 *   isOpen={isOpen} 
 *   onClose={handleClose} 
 *   title="Settings"
 *   mobileMode="modal"
 * >
 *   ...
 * </Modal>
 * ```
 * 
 * @example Always use BottomSheet
 * ```tsx
 * <Modal 
 *   isOpen={isOpen} 
 *   onClose={handleClose} 
 *   title="Select Option"
 *   mobileMode="sheet"
 *   mobileHeight="md"
 * >
 *   ...
 * </Modal>
 * ```
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  animation = 'scale',
  scrollable = false,
  maxHeight,
  mobileMode = 'auto',
  mobileHeight = 'lg',
  mobileShowHandle = true,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const mouseDownOnBackdrop = useRef(false);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const isMobile = useIsMobile();

  // Get all focusable elements within the modal
  const getFocusableElements = useCallback(() => {
    if (!modalRef.current) return [];
    return Array.from(modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
      .filter(el => el.offsetParent !== null); // Filter out hidden elements
  }, []);

  // Determine if we should use BottomSheet
  const useBottomSheet = 
    mobileMode === 'sheet' || 
    (mobileMode === 'auto' && isMobile);

  // Handle escape key and focus trap (only for modal mode, BottomSheet handles its own)
  useEffect(() => {
    if (useBottomSheet) return; // BottomSheet handles its own focus

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
        return;
      }

      // Focus trap: keep focus within modal
      if (e.key === 'Tab' && isOpen) {
        const focusableElements = getFocusableElements();
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Shift+Tab: if on first element, wrap to last
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab: if on last element, wrap to first
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      // Store the currently focused element to restore later
      previousActiveElement.current = document.activeElement as HTMLElement;

      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      // Set initial focus to first focusable element
      // Use requestAnimationFrame to ensure the modal is rendered
      requestAnimationFrame(() => {
        const focusableElements = getFocusableElements();
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        } else if (modalRef.current) {
          // If no focusable elements, focus the modal container
          modalRef.current.focus();
        }
      });
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';

      // Restore focus to the previously focused element
      if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, onClose, useBottomSheet, getFocusableElements]);

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

  // Render as BottomSheet on mobile
  if (useBottomSheet) {
    return createPortal(
      <BottomSheet
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        height={mobileHeight}
        showHandle={mobileShowHandle}
        showCloseButton={showCloseButton}
      >
        {children}
      </BottomSheet>,
      document.body
    );
  }

  // Render as standard modal on desktop
  const modalContent = (
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
        tabIndex={-1}
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
        <div 
          className={`px-6 py-4 ${scrollable || maxHeight ? 'overflow-y-auto' : ''}`}
          style={{
            maxHeight: maxHeight || (scrollable ? 'calc(100vh - 200px)' : undefined),
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export function ModalFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-paper-200 bg-paper-50 -mx-6 -mb-4 mt-4 rounded-b-xl">
      {children}
    </div>
  );
}
