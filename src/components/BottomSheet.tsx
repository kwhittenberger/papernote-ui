import { useEffect, useRef, useState, ReactNode } from 'react';
import { X } from 'lucide-react';

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  height?: 'sm' | 'md' | 'lg' | 'full' | string;
  showHandle?: boolean;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  snapPoints?: number[]; // Snap heights as percentages (e.g., [25, 50, 90])
  className?: string;
}

const heightPresets = {
  sm: '33vh',
  md: '50vh',
  lg: '75vh',
  full: '90vh',
};

export default function BottomSheet({
  isOpen,
  onClose,
  children,
  title,
  height = 'md',
  showHandle = true,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,

  className = '',
}: BottomSheetProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [currentHeight] = useState<string>(
    typeof height === 'string' && height in heightPresets
      ? heightPresets[height as keyof typeof heightPresets]
      : height
  );
  const sheetRef = useRef<HTMLDivElement>(null);
  const startYRef = useRef<number>(0);

  // Close on Escape
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

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    startYRef.current = clientY;
  };

  const handleDragMove = (e: TouchEvent | MouseEvent) => {
    if (!isDragging) return;

    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const offset = clientY - startYRef.current;

    // Only allow dragging down
    if (offset > 0) {
      setDragOffset(offset);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);

    // Close if dragged down more than 150px
    if (dragOffset > 150) {
      onClose();
    }

    setDragOffset(0);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e: TouchEvent | MouseEvent) => handleDragMove(e);
    const handleEnd = () => handleDragEnd();

    document.addEventListener('touchmove', handleMove);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchend', handleEnd);
    document.addEventListener('mouseup', handleEnd);

    return () => {
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchend', handleEnd);
      document.removeEventListener('mouseup', handleEnd);
    };
  }, [isDragging, dragOffset]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end"
      onClick={handleOverlayClick}
    >
      {/* Overlay */}
      <div
        className={`
          absolute inset-0 bg-black/50 transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0'}
        `}
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        className={`
          relative w-full bg-white rounded-t-2xl shadow-2xl
          transition-transform duration-300 ease-out
          ${isOpen ? 'translate-y-0' : 'translate-y-full'}
          ${className}
        `}
        style={{
          height: currentHeight,
          transform: `translateY(${dragOffset}px)`,
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'bottom-sheet-title' : undefined}
      >
        {/* Handle */}
        {showHandle && (
          <div
            className="py-3 cursor-grab active:cursor-grabbing"
            onTouchStart={handleDragStart}
            onMouseDown={handleDragStart}
          >
            <div className="w-12 h-1.5 bg-ink-300 rounded-full mx-auto" />
          </div>
        )}

        {/* Header */}
        {(title || showCloseButton) && (
          <div className="px-6 py-4 border-b border-ink-200 flex items-center justify-between">
            {title && (
              <h2 id="bottom-sheet-title" className="text-lg font-semibold text-ink-900">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="text-ink-400 hover:text-ink-600 transition-colors ml-auto"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
