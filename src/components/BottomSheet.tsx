import { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export interface BottomSheetProps {
  /** Whether the bottom sheet is open (alias: isOpen) */
  open?: boolean;
  /** Whether the bottom sheet is open (alias for open, for Modal compatibility) */
  isOpen?: boolean;
  /** Callback when the sheet should close */
  onClose: () => void;
  /** Content of the bottom sheet */
  children: React.ReactNode;
  /** Title displayed in header (if provided, renders built-in header) */
  title?: string;
  /** Height of the sheet - 'auto' adjusts to content, 'sm'/'md'/'lg'/'full' presets, or specify px/% */
  height?: 'auto' | 'sm' | 'md' | 'lg' | 'full' | number | string;
  /** Maximum height of the sheet */
  maxHeight?: string;
  /** Snap points for partial expansion (e.g., ['50%', '90%']) */
  snapPoints?: string[];
  /** Close when clicking overlay */
  closeOnOverlayClick?: boolean;
  /** Close when pressing Escape */
  closeOnEscape?: boolean;
  /** Show drag handle at top */
  showHandle?: boolean;
  /** Show close button in header (requires title) */
  showCloseButton?: boolean;
  /** Prevent body scroll when open */
  preventScroll?: boolean;
  /** Additional class name */
  className?: string;
}

export interface BottomSheetHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface BottomSheetContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface BottomSheetActionsProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * BottomSheet - Mobile-friendly modal that slides up from the bottom
 *
 * Designed for mobile contexts with touch-friendly interactions:
 * - Drag handle for swipe-to-dismiss
 * - Snap points for partial expansion
 * - Sticky action area at thumb zone
 *
 * @example
 * ```tsx
 * <BottomSheet open={isOpen} onClose={() => setIsOpen(false)}>
 *   <BottomSheetHeader>
 *     <Text weight="bold">Transaction Details</Text>
 *   </BottomSheetHeader>
 *   <BottomSheetContent>
 *     {content}
 *   </BottomSheetContent>
 *   <BottomSheetActions>
 *     <Button fullWidth>Approve</Button>
 *   </BottomSheetActions>
 * </BottomSheet>
 * ```
 */
export function BottomSheet({
  open,
  isOpen,
  onClose,
  children,
  title,
  height = 'auto',
  maxHeight = '90vh',
  snapPoints,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showHandle = true,
  showCloseButton = true,
  preventScroll = true,
  className = '',
}: BottomSheetProps) {
  // Support both 'open' and 'isOpen' props for flexibility
  const isSheetOpen = open ?? isOpen ?? false;

  // Height presets for convenience
  const heightPresets: Record<string, string> = {
    sm: '40vh',
    md: '60vh',
    lg: '80vh',
    full: '100vh',
  };
  const sheetRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [currentSnapIndex, setCurrentSnapIndex] = useState(snapPoints?.length ? snapPoints.length - 1 : 0);
  const startY = useRef(0);
  const startOffset = useRef(0);

  // Handle escape key
  useEffect(() => {
    if (!isSheetOpen || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, closeOnEscape, onClose]);

  // Prevent body scroll
  useEffect(() => {
    if (!isSheetOpen || !preventScroll) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open, preventScroll]);

  // Handle drag start
  const handleDragStart = useCallback((clientY: number) => {
    setIsDragging(true);
    startY.current = clientY;
    startOffset.current = dragOffset;
  }, [dragOffset]);

  // Handle drag move
  const handleDragMove = useCallback((clientY: number) => {
    if (!isDragging) return;
    
    const delta = clientY - startY.current;
    const newOffset = Math.max(0, startOffset.current + delta);
    setDragOffset(newOffset);
  }, [isDragging]);

  // Handle drag end
  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 100; // pixels to trigger close
    
    if (dragOffset > threshold) {
      // If we have snap points, snap to next lower point or close
      if (snapPoints && currentSnapIndex > 0) {
        setCurrentSnapIndex(currentSnapIndex - 1);
        setDragOffset(0);
      } else {
        onClose();
        setDragOffset(0);
      }
    } else {
      // Snap back
      setDragOffset(0);
    }
  }, [isDragging, dragOffset, snapPoints, currentSnapIndex, onClose]);

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Mouse event handlers (for desktop testing)
  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientY);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      handleDragMove(e.clientY);
    };

    const handleMouseUp = () => {
      handleDragEnd();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  // Calculate height based on snap points or presets
  const getSheetHeight = () => {
    if (snapPoints && snapPoints[currentSnapIndex]) {
      return snapPoints[currentSnapIndex];
    }
    if (typeof height === 'number') {
      return `${height}px`;
    }
    // Check for preset heights
    if (typeof height === 'string' && heightPresets[height]) {
      return heightPresets[height];
    }
    return height;
  };

  if (!isSheetOpen) return null;

  const sheetContent = (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className={`
          absolute inset-0 bg-black/50 transition-opacity duration-300
          ${isSheetOpen ? 'opacity-100' : 'opacity-0'}
        `}
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        className={`
          absolute bottom-0 left-0 right-0
          bg-white rounded-t-2xl shadow-2xl
          transition-transform duration-300 ease-out
          ${isDragging ? 'transition-none' : ''}
          ${className}
        `}
        style={{
          height: getSheetHeight(),
          maxHeight,
          transform: `translateY(${dragOffset}px)`,
        }}
        role="dialog"
        aria-modal="true"
      >
        {/* Drag Handle */}
        {showHandle && (
          <div
            className="flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing touch-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
          >
            <div className="w-10 h-1 bg-paper-300 rounded-full" />
          </div>
        )}

        {/* Built-in header with title (when title prop is provided) */}
        {title && (
          <div className="flex items-center justify-between px-4 py-3 border-b border-paper-200">
            <h2 className="text-lg font-medium text-ink-900">{title}</h2>
            {showCloseButton && (
              <button
                onClick={onClose}
                className="p-1 rounded-full text-ink-500 hover:text-ink-700 hover:bg-paper-100 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        )}

        {/* Content wrapper with flex layout */}
        <div className="flex flex-col h-full overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(sheetContent, document.body);
}

/**
 * BottomSheetHeader - Header section with title and optional close button
 */
export function BottomSheetHeader({ children, className = '' }: BottomSheetHeaderProps) {
  return (
    <div className={`flex items-center justify-between px-4 py-3 border-b border-paper-200 ${className}`}>
      {children}
    </div>
  );
}

/**
 * BottomSheetContent - Scrollable content area
 */
export function BottomSheetContent({ children, className = '' }: BottomSheetContentProps) {
  return (
    <div className={`flex-1 overflow-y-auto px-4 py-4 ${className}`}>
      {children}
    </div>
  );
}

/**
 * BottomSheetActions - Sticky footer for action buttons (thumb zone)
 */
export function BottomSheetActions({ children, className = '' }: BottomSheetActionsProps) {
  return (
    <div className={`flex flex-col gap-2 px-4 py-4 border-t border-paper-200 bg-white ${className}`}>
      {children}
    </div>
  );
}

export default BottomSheet;
