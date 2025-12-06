import React, { useState, useCallback, useRef, useEffect } from 'react';
import { X, Info, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';

export interface NotificationBannerAction {
  /** Button label */
  label: string;
  /** Click handler */
  onClick: () => void;
}

export interface NotificationBannerProps {
  /** Banner variant determining color scheme */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /** Custom icon (defaults based on variant) */
  icon?: React.ReactNode;
  /** Primary message/title */
  title: string;
  /** Optional secondary description text */
  description?: string;
  /** Optional action button */
  action?: NotificationBannerAction;
  /** Callback when dismissed - if provided, shows dismiss button */
  onDismiss?: () => void;
  /** Can be swiped away on mobile */
  dismissible?: boolean;
  /** Stick to top of container on scroll */
  sticky?: boolean;
  /** Additional class name */
  className?: string;
}

/**
 * NotificationBanner - Dismissible banner for important alerts
 *
 * Displays at top of screen for alerts that need attention but aren't blocking:
 * - Money Found alerts
 * - System messages
 * - Promotional info
 *
 * @example
 * ```tsx
 * <NotificationBanner
 *   variant="warning"
 *   icon={<DollarSign />}
 *   title="Found $33.98 in potential savings"
 *   description="Tap to review"
 *   action={{
 *     label: "Review",
 *     onClick: handleReview
 *   }}
 *   onDismiss={() => setShowBanner(false)}
 * />
 * ```
 */
export function NotificationBanner({
  variant = 'info',
  icon,
  title,
  description,
  action,
  onDismiss,
  dismissible = true,
  sticky = false,
  className = '',
}: NotificationBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);
  const startX = useRef(0);

  // Default icons based on variant
  const defaultIcons: Record<typeof variant, React.ReactNode> = {
    info: <Info className="h-5 w-5" />,
    success: <CheckCircle className="h-5 w-5" />,
    warning: <AlertTriangle className="h-5 w-5" />,
    error: <AlertCircle className="h-5 w-5" />,
  };

  // Color classes
  const variantClasses: Record<typeof variant, string> = {
    info: 'bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200 text-primary-900',
    success: 'bg-gradient-to-r from-success-50 to-success-100 border-success-200 text-success-900',
    warning: 'bg-gradient-to-r from-warning-50 to-warning-100 border-warning-200 text-warning-900',
    error: 'bg-gradient-to-r from-error-50 to-error-100 border-error-200 text-error-900',
  };

  const iconColorClasses: Record<typeof variant, string> = {
    info: 'text-primary-600',
    success: 'text-success-600',
    warning: 'text-warning-600',
    error: 'text-error-600',
  };

  const buttonClasses: Record<typeof variant, string> = {
    info: 'bg-primary-600 hover:bg-primary-700 text-white',
    success: 'bg-success-600 hover:bg-success-700 text-white',
    warning: 'bg-warning-600 hover:bg-warning-700 text-white',
    error: 'bg-error-600 hover:bg-error-700 text-white',
  };

  // Handle swipe dismiss
  const handleDragStart = useCallback((clientX: number) => {
    if (!dismissible) return;
    setIsDragging(true);
    startX.current = clientX;
  }, [dismissible]);

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    const delta = clientX - startX.current;
    setOffsetX(delta);
  }, [isDragging]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 100;
    if (Math.abs(offsetX) > threshold) {
      // Animate out
      setOffsetX(offsetX > 0 ? window.innerWidth : -window.innerWidth);
      setIsDismissed(true);
      setTimeout(() => {
        onDismiss?.();
      }, 200);
    } else {
      // Snap back
      setOffsetX(0);
    }
  }, [isDragging, offsetX, onDismiss]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Mouse handlers for desktop testing
  const handleMouseDown = (e: React.MouseEvent) => {
    if (dismissible) {
      handleDragStart(e.clientX);
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      handleDragMove(e.clientX);
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

  if (isDismissed) return null;

  return (
    <div
      ref={bannerRef}
      className={`
        w-full border-b
        ${variantClasses[variant]}
        ${sticky ? 'sticky top-0 z-40' : ''}
        ${isDragging ? '' : 'transition-transform duration-200 ease-out'}
        ${className}
      `}
      style={{
        transform: `translateX(${offsetX}px)`,
        opacity: Math.max(0, 1 - Math.abs(offsetX) / 200),
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      role="alert"
    >
      <div className="flex items-center gap-3 px-4 py-3">
        {/* Icon */}
        <div className={`flex-shrink-0 ${iconColorClasses[variant]}`}>
          {icon || defaultIcons[variant]}
        </div>

        {/* Text content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{title}</p>
          {description && (
            <p className="text-xs opacity-80 truncate">{description}</p>
          )}
        </div>

        {/* Action button */}
        {action && (
          <button
            onClick={action.onClick}
            className={`
              flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-md
              transition-colors duration-200
              ${buttonClasses[variant]}
            `}
          >
            {action.label}
          </button>
        )}

        {/* Dismiss button */}
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="flex-shrink-0 p-1 rounded-full hover:bg-black/10 transition-colors duration-200"
            aria-label="Dismiss notification"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export default NotificationBanner;
