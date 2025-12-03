import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Check, MoreHorizontal } from 'lucide-react';

export interface SwipeAction {
  /** Icon to display in action area */
  icon: React.ReactNode;
  /** Background color variant */
  color: 'success' | 'error' | 'warning' | 'neutral' | 'primary';
  /** Label for accessibility */
  label: string;
}

export interface SwipeableCardProps {
  /** Card content */
  children: React.ReactNode;
  /** Handler called when swiped right past threshold */
  onSwipeRight?: () => void;
  /** Handler called when swiped left past threshold */
  onSwipeLeft?: () => void;
  /** Right swipe action configuration */
  rightAction?: SwipeAction;
  /** Left swipe action configuration */
  leftAction?: SwipeAction;
  /** Pixels of swipe before action triggers */
  swipeThreshold?: number;
  /** Enable haptic feedback on mobile (if supported) */
  hapticFeedback?: boolean;
  /** Disable swipe interactions */
  disabled?: boolean;
  /** Callback when swipe starts */
  onSwipeStart?: () => void;
  /** Callback when swipe ends (regardless of trigger) */
  onSwipeEnd?: () => void;
  /** Additional class name */
  className?: string;
}

/**
 * SwipeableCard - Card component with swipe-to-action functionality
 *
 * Designed for mobile approval workflows:
 * - Swipe right to approve/confirm
 * - Swipe left to see options/alternatives
 * - Visual feedback showing action being revealed
 * - Haptic feedback on mobile devices
 *
 * @example
 * ```tsx
 * <SwipeableCard
 *   onSwipeRight={() => handleApprove()}
 *   onSwipeLeft={() => handleShowOptions()}
 *   rightAction={{
 *     icon: <Check />,
 *     color: 'success',
 *     label: 'Approve'
 *   }}
 *   leftAction={{
 *     icon: <MoreHorizontal />,
 *     color: 'neutral',
 *     label: 'Options'
 *   }}
 * >
 *   <TransactionContent />
 * </SwipeableCard>
 * ```
 */
export function SwipeableCard({
  children,
  onSwipeRight,
  onSwipeLeft,
  rightAction = {
    icon: <Check className="h-6 w-6" />,
    color: 'success',
    label: 'Approve',
  },
  leftAction = {
    icon: <MoreHorizontal className="h-6 w-6" />,
    color: 'neutral',
    label: 'Options',
  },
  swipeThreshold = 100,
  hapticFeedback = true,
  disabled = false,
  onSwipeStart,
  onSwipeEnd,
  className = '',
}: SwipeableCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [isTriggered, setIsTriggered] = useState<'left' | 'right' | null>(null);
  const startX = useRef(0);
  const startY = useRef(0);
  const isHorizontalSwipe = useRef<boolean | null>(null);

  // Color classes for action backgrounds
  const colorClasses: Record<SwipeAction['color'], string> = {
    success: 'bg-success-500',
    error: 'bg-error-500',
    warning: 'bg-warning-500',
    neutral: 'bg-paper-400',
    primary: 'bg-accent-500',
  };

  // Trigger haptic feedback
  const triggerHaptic = useCallback((style: 'light' | 'medium' | 'heavy' = 'medium') => {
    if (!hapticFeedback) return;
    
    // Use Vibration API if available
    if ('vibrate' in navigator) {
      const patterns: Record<string, number | number[]> = {
        light: 10,
        medium: 25,
        heavy: [50, 30, 50],
      };
      navigator.vibrate(patterns[style]);
    }
  }, [hapticFeedback]);

  // Handle drag start
  const handleDragStart = useCallback((clientX: number, clientY: number) => {
    if (disabled) return;
    
    setIsDragging(true);
    startX.current = clientX;
    startY.current = clientY;
    isHorizontalSwipe.current = null;
    onSwipeStart?.();
  }, [disabled, onSwipeStart]);

  // Handle drag move
  const handleDragMove = useCallback((clientX: number, clientY: number) => {
    if (!isDragging || disabled) return;

    const deltaX = clientX - startX.current;
    const deltaY = clientY - startY.current;

    // Determine if this is a horizontal swipe on first significant movement
    if (isHorizontalSwipe.current === null) {
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);
      
      if (absDeltaX > 10 || absDeltaY > 10) {
        isHorizontalSwipe.current = absDeltaX > absDeltaY;
      }
    }

    // Only process horizontal swipes
    if (isHorizontalSwipe.current !== true) return;

    // Check if we should allow this direction
    const canSwipeRight = onSwipeRight !== undefined;
    const canSwipeLeft = onSwipeLeft !== undefined;

    let newOffset = deltaX;
    
    // Limit swipe direction based on available actions
    if (!canSwipeRight && deltaX > 0) newOffset = 0;
    if (!canSwipeLeft && deltaX < 0) newOffset = 0;

    // Add resistance when exceeding threshold
    const maxSwipe = swipeThreshold * 1.5;
    if (Math.abs(newOffset) > swipeThreshold) {
      const overflow = Math.abs(newOffset) - swipeThreshold;
      const resistance = overflow * 0.3;
      newOffset = newOffset > 0 
        ? swipeThreshold + resistance 
        : -(swipeThreshold + resistance);
      newOffset = Math.max(-maxSwipe, Math.min(maxSwipe, newOffset));
    }

    setOffsetX(newOffset);

    // Check for threshold crossing and trigger haptic
    const newTriggered = Math.abs(newOffset) >= swipeThreshold
      ? (newOffset > 0 ? 'right' : 'left')
      : null;

    if (newTriggered !== isTriggered) {
      if (newTriggered) {
        triggerHaptic('medium');
      }
      setIsTriggered(newTriggered);
    }
  }, [isDragging, disabled, onSwipeRight, onSwipeLeft, swipeThreshold, isTriggered, triggerHaptic]);

  // Handle drag end
  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    onSwipeEnd?.();

    // Check if action should be triggered
    if (Math.abs(offsetX) >= swipeThreshold) {
      if (offsetX > 0 && onSwipeRight) {
        triggerHaptic('heavy');
        // Animate card away then call handler
        setOffsetX(window.innerWidth);
        setTimeout(() => {
          onSwipeRight();
          setOffsetX(0);
          setIsTriggered(null);
        }, 200);
        return;
      } else if (offsetX < 0 && onSwipeLeft) {
        triggerHaptic('heavy');
        setOffsetX(-window.innerWidth);
        setTimeout(() => {
          onSwipeLeft();
          setOffsetX(0);
          setIsTriggered(null);
        }, 200);
        return;
      }
    }

    // Snap back
    setOffsetX(0);
    setIsTriggered(null);
  }, [isDragging, offsetX, swipeThreshold, onSwipeRight, onSwipeLeft, onSwipeEnd, triggerHaptic]);

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
    
    // Prevent vertical scroll if horizontal swipe
    if (isHorizontalSwipe.current === true) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Mouse event handlers (for desktop testing)
  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX, e.clientY);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      handleDragMove(e.clientX, e.clientY);
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

  // Calculate action opacity based on swipe distance
  const rightActionOpacity = offsetX > 0 ? Math.min(1, offsetX / swipeThreshold) : 0;
  const leftActionOpacity = offsetX < 0 ? Math.min(1, Math.abs(offsetX) / swipeThreshold) : 0;

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {/* Right action background (revealed when swiping right) */}
      {onSwipeRight && (
        <div
          className={`
            absolute inset-y-0 left-0 flex items-center justify-start pl-6
            ${colorClasses[rightAction.color]}
            transition-opacity duration-100
          `}
          style={{
            opacity: rightActionOpacity,
            width: Math.abs(offsetX) + 20,
          }}
          aria-hidden="true"
        >
          <div 
            className={`
              text-white transform transition-transform duration-200
              ${isTriggered === 'right' ? 'scale-125' : 'scale-100'}
            `}
          >
            {rightAction.icon}
          </div>
        </div>
      )}

      {/* Left action background (revealed when swiping left) */}
      {onSwipeLeft && (
        <div
          className={`
            absolute inset-y-0 right-0 flex items-center justify-end pr-6
            ${colorClasses[leftAction.color]}
            transition-opacity duration-100
          `}
          style={{
            opacity: leftActionOpacity,
            width: Math.abs(offsetX) + 20,
          }}
          aria-hidden="true"
        >
          <div 
            className={`
              text-white transform transition-transform duration-200
              ${isTriggered === 'left' ? 'scale-125' : 'scale-100'}
            `}
          >
            {leftAction.icon}
          </div>
        </div>
      )}

      {/* Card content */}
      <div
        ref={cardRef}
        className={`
          relative bg-white
          ${isDragging ? '' : 'transition-transform duration-200 ease-out'}
          ${disabled ? 'opacity-50 pointer-events-none' : ''}
        `}
        style={{
          transform: `translateX(${offsetX}px)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        role="button"
        aria-label={`Swipeable card. ${onSwipeRight ? `Swipe right to ${rightAction.label}.` : ''} ${onSwipeLeft ? `Swipe left to ${leftAction.label}.` : ''}`}
        tabIndex={disabled ? -1 : 0}
      >
        {children}
      </div>
    </div>
  );
}

export default SwipeableCard;
