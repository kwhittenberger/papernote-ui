// SwipeableListItem - Touch gesture-based swipe actions for list items
// Provides left/right swipe actions with keyboard accessibility

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Action configuration for swipe gestures
 */
export interface SwipeListAction {
  /** Background color variant or custom Tailwind class */
  color: 'destructive' | 'warning' | 'success' | 'primary' | string;
  /** Lucide icon to display */
  icon: LucideIcon;
  /** Label for accessibility */
  label: string;
}

/**
 * SwipeableListItem component props
 */
export interface SwipeableListItemProps {
  /** List item content */
  children: React.ReactNode;
  /** Handler called when swiped right past threshold (can be async) */
  onSwipeRight?: () => void | Promise<void>;
  /** Handler called when swiped left past threshold (can be async) */
  onSwipeLeft?: () => void | Promise<void>;
  /** Right swipe action configuration (revealed when swiping right) */
  rightAction?: SwipeListAction;
  /** Left swipe action configuration (revealed when swiping left) */
  leftAction?: SwipeListAction;
  /** Pixels of swipe before action triggers (default: 100) */
  swipeThreshold?: number;
  /** Disable swipe interactions */
  disabled?: boolean;
  /** Additional class name */
  className?: string;
}

// Color classes for action backgrounds
const getColorClass = (color: SwipeListAction['color']): string => {
  const colorMap: Record<string, string> = {
    destructive: 'bg-error-500',
    warning: 'bg-warning-500',
    success: 'bg-success-500',
    primary: 'bg-accent-500',
  };
  return colorMap[color] || color;
};

/**
 * SwipeableListItem - List item with swipe-to-action functionality
 *
 * Designed for mobile workflows with keyboard accessibility:
 * - Swipe right to approve/confirm
 * - Swipe left to dismiss/delete
 * - Arrow keys for keyboard navigation
 * - Async callback support with loading state
 *
 * @example
 * ```tsx
 * <SwipeableListItem
 *   onSwipeRight={() => handleApprove()}
 *   onSwipeLeft={() => handleDismiss()}
 *   rightAction={{
 *     icon: Check,
 *     color: 'success',
 *     label: 'Approve'
 *   }}
 *   leftAction={{
 *     icon: X,
 *     color: 'destructive',
 *     label: 'Dismiss'
 *   }}
 * >
 *   <div className="p-4">List item content</div>
 * </SwipeableListItem>
 * ```
 */
export function SwipeableListItem({
  children,
  onSwipeRight,
  onSwipeLeft,
  rightAction,
  leftAction,
  swipeThreshold = 100,
  disabled = false,
  className = '',
}: SwipeableListItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [isTriggered, setIsTriggered] = useState<'left' | 'right' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [keyboardDirection, setKeyboardDirection] = useState<'left' | 'right' | null>(null);
  
  const startX = useRef(0);
  const startY = useRef(0);
  const isHorizontalSwipe = useRef<boolean | null>(null);

  // Trigger haptic feedback
  const triggerHaptic = useCallback((style: 'light' | 'medium' | 'heavy' = 'medium') => {
    if ('vibrate' in navigator) {
      const patterns: Record<string, number | number[]> = {
        light: 10,
        medium: 25,
        heavy: [50, 30, 50],
      };
      navigator.vibrate(patterns[style]);
    }
  }, []);

  // Execute action with async support
  const executeAction = useCallback(async (direction: 'left' | 'right') => {
    const handler = direction === 'right' ? onSwipeRight : onSwipeLeft;
    if (!handler) return;

    setIsLoading(true);
    triggerHaptic('heavy');
    
    // Animate out
    const slideDistance = direction === 'right' ? window.innerWidth : -window.innerWidth;
    setOffsetX(slideDistance);

    try {
      await handler();
    } finally {
      // Reset state after animation
      setTimeout(() => {
        setOffsetX(0);
        setIsTriggered(null);
        setIsLoading(false);
        setKeyboardDirection(null);
      }, 200);
    }
  }, [onSwipeRight, onSwipeLeft, triggerHaptic]);

  // Handle drag start
  const handleDragStart = useCallback((clientX: number, clientY: number) => {
    if (disabled || isLoading) return;
    
    setIsDragging(true);
    startX.current = clientX;
    startY.current = clientY;
    isHorizontalSwipe.current = null;
  }, [disabled, isLoading]);

  // Handle drag move
  const handleDragMove = useCallback((clientX: number, clientY: number) => {
    if (!isDragging || disabled || isLoading) return;

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
    const canSwipeRight = onSwipeRight !== undefined && rightAction !== undefined;
    const canSwipeLeft = onSwipeLeft !== undefined && leftAction !== undefined;

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
  }, [isDragging, disabled, isLoading, onSwipeRight, onSwipeLeft, rightAction, leftAction, swipeThreshold, isTriggered, triggerHaptic]);

  // Handle drag end
  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);

    // Check if action should be triggered
    if (Math.abs(offsetX) >= swipeThreshold) {
      if (offsetX > 0 && onSwipeRight && rightAction) {
        executeAction('right');
        return;
      } else if (offsetX < 0 && onSwipeLeft && leftAction) {
        executeAction('left');
        return;
      }
    }

    // Snap back
    setOffsetX(0);
    setIsTriggered(null);
  }, [isDragging, offsetX, swipeThreshold, onSwipeRight, onSwipeLeft, rightAction, leftAction, executeAction]);

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

  // Keyboard event handlers
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (disabled || isLoading) return;

    const canSwipeRight = onSwipeRight !== undefined && rightAction !== undefined;
    const canSwipeLeft = onSwipeLeft !== undefined && leftAction !== undefined;

    switch (e.key) {
      case 'ArrowRight':
        if (canSwipeRight) {
          e.preventDefault();
          setKeyboardDirection('right');
          setOffsetX(swipeThreshold);
          setIsTriggered('right');
          triggerHaptic('medium');
        }
        break;
      case 'ArrowLeft':
        if (canSwipeLeft) {
          e.preventDefault();
          setKeyboardDirection('left');
          setOffsetX(-swipeThreshold);
          setIsTriggered('left');
          triggerHaptic('medium');
        }
        break;
      case 'Enter':
        if (keyboardDirection) {
          e.preventDefault();
          executeAction(keyboardDirection);
        }
        break;
      case 'Escape':
        if (keyboardDirection) {
          e.preventDefault();
          setKeyboardDirection(null);
          setOffsetX(0);
          setIsTriggered(null);
        }
        break;
    }
  }, [disabled, isLoading, onSwipeRight, onSwipeLeft, rightAction, leftAction, swipeThreshold, keyboardDirection, executeAction, triggerHaptic]);

  // Reset keyboard state on blur
  const handleBlur = useCallback(() => {
    if (keyboardDirection) {
      setKeyboardDirection(null);
      setOffsetX(0);
      setIsTriggered(null);
    }
  }, [keyboardDirection]);

  // Calculate action opacity based on swipe distance
  const rightActionOpacity = offsetX > 0 ? Math.min(1, offsetX / swipeThreshold) : 0;
  const leftActionOpacity = offsetX < 0 ? Math.min(1, Math.abs(offsetX) / swipeThreshold) : 0;

  // Build aria-label
  const ariaLabel = [
    'Swipeable list item.',
    rightAction && onSwipeRight ? `Swipe right or press Arrow Right to ${rightAction.label}.` : '',
    leftAction && onSwipeLeft ? `Swipe left or press Arrow Left to ${leftAction.label}.` : '',
    keyboardDirection ? `Press Enter to confirm or Escape to cancel.` : '',
  ].filter(Boolean).join(' ');

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Right action background (revealed when swiping right) */}
      {rightAction && onSwipeRight && (
        <div
          className={`
            absolute inset-y-0 left-0 flex items-center justify-start pl-6
            ${getColorClass(rightAction.color)}
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
            {isLoading && isTriggered === 'right' ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              <rightAction.icon className="h-6 w-6" />
            )}
          </div>
        </div>
      )}

      {/* Left action background (revealed when swiping left) */}
      {leftAction && onSwipeLeft && (
        <div
          className={`
            absolute inset-y-0 right-0 flex items-center justify-end pr-6
            ${getColorClass(leftAction.color)}
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
            {isLoading && isTriggered === 'left' ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              <leftAction.icon className="h-6 w-6" />
            )}
          </div>
        </div>
      )}

      {/* List item content */}
      <div
        className={`
          relative bg-white
          ${isDragging ? '' : 'transition-transform duration-200 ease-out'}
          ${disabled ? 'opacity-50 pointer-events-none' : ''}
          ${keyboardDirection ? 'ring-2 ring-accent-500 ring-inset' : ''}
        `}
        style={{
          transform: `translateX(${offsetX}px)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        role="button"
        aria-label={ariaLabel}
        tabIndex={disabled ? -1 : 0}
      >
        {children}
      </div>
    </div>
  );
}

export default SwipeableListItem;
