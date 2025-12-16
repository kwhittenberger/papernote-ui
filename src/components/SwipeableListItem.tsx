// SwipeableListItem - Touch gesture-based swipe actions for list items
// Provides left/right swipe actions with keyboard accessibility

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Single action configuration for swipe gestures
 */
export interface SwipeListAction {
  /** Unique identifier for the action */
  id: string;
  /** Background color variant or custom Tailwind class */
  color: 'destructive' | 'warning' | 'success' | 'primary' | 'neutral' | string;
  /** Lucide icon to display */
  icon: LucideIcon;
  /** Label shown below icon */
  label: string;
  /** Click handler (can be async) */
  onClick: () => void | Promise<void>;
}

/**
 * SwipeableListItem component props
 */
export interface SwipeableListItemProps {
  /** List item content */
  children: React.ReactNode;
  /** Actions shown when swiping left (appear on right side) */
  leftActions?: SwipeListAction[];
  /** Actions shown when swiping right (appear on left side) */
  rightActions?: SwipeListAction[];
  /** Width per action button in pixels (default: 72) */
  actionWidth?: number;
  /** Enable full swipe to trigger first action (default: true) */
  fullSwipe?: boolean;
  /** Full swipe threshold as percentage of container width (default: 0.5) */
  fullSwipeThreshold?: number;
  /** Disable swipe interactions */
  disabled?: boolean;
  /** Additional class name */
  className?: string;
  /** Callback when swipe state changes */
  onSwipeChange?: (direction: 'left' | 'right' | null) => void;
}

// Color classes for action backgrounds
const getColorClasses = (color: SwipeListAction['color']): { bg: string; hover: string } => {
  const colorMap: Record<string, { bg: string; hover: string }> = {
    destructive: { bg: 'bg-gradient-to-r from-error-500 to-error-600', hover: 'hover:from-error-600 hover:to-error-700' },
    warning: { bg: 'bg-gradient-to-r from-warning-500 to-warning-600', hover: 'hover:from-warning-600 hover:to-warning-700' },
    success: { bg: 'bg-gradient-to-r from-success-500 to-success-600', hover: 'hover:from-success-600 hover:to-success-700' },
    primary: { bg: 'bg-gradient-to-r from-accent-500 to-accent-600', hover: 'hover:from-accent-600 hover:to-accent-700' },
    neutral: { bg: 'bg-gradient-to-r from-paper-400 to-paper-500', hover: 'hover:from-paper-500 hover:to-paper-600' },
  };
  return colorMap[color] || { bg: color, hover: '' };
};

/**
 * SwipeableListItem - List item with swipe-to-reveal action buttons
 *
 * Features:
 * - Multiple actions per side (like email apps)
 * - Full swipe to trigger primary action
 * - Keyboard accessibility (Arrow keys + Tab + Enter)
 * - Async callback support with loading state
 * - Haptic feedback on mobile
 * - Smooth animations and visual polish
 *
 * @example Single action per side
 * ```tsx
 * <SwipeableListItem
 *   rightActions={[
 *     { id: 'approve', icon: Check, color: 'success', label: 'Approve', onClick: handleApprove }
 *   ]}
 *   leftActions={[
 *     { id: 'delete', icon: Trash, color: 'destructive', label: 'Delete', onClick: handleDelete }
 *   ]}
 * >
 *   <div className="p-4">List item content</div>
 * </SwipeableListItem>
 * ```
 *
 * @example Multiple actions (email-style)
 * ```tsx
 * <SwipeableListItem
 *   leftActions={[
 *     { id: 'delete', icon: Trash, color: 'destructive', label: 'Delete', onClick: handleDelete },
 *     { id: 'archive', icon: Archive, color: 'warning', label: 'Archive', onClick: handleArchive },
 *   ]}
 *   rightActions={[
 *     { id: 'read', icon: Mail, color: 'primary', label: 'Read', onClick: handleRead },
 *     { id: 'star', icon: Star, color: 'warning', label: 'Star', onClick: handleStar },
 *   ]}
 *   fullSwipe
 * >
 *   <EmailListItem />
 * </SwipeableListItem>
 * ```
 */
export function SwipeableListItem({
  children,
  leftActions = [],
  rightActions = [],
  actionWidth = 72,
  fullSwipe = true,
  fullSwipeThreshold = 0.5,
  disabled = false,
  className = '',
  onSwipeChange,
}: SwipeableListItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [activeDirection, setActiveDirection] = useState<'left' | 'right' | null>(null);
  const [loadingActionId, setLoadingActionId] = useState<string | null>(null);
  const [focusedActionIndex, setFocusedActionIndex] = useState<number>(-1);
  const [isCommitted, setIsCommitted] = useState(false); // Tracks if past full-swipe threshold
  
  const startX = useRef(0);
  const startY = useRef(0);
  const startTime = useRef(0);
  const isHorizontalSwipe = useRef<boolean | null>(null);
  const wasCommitted = useRef(false); // Track previous committed state for haptic

  // Calculate total widths
  const leftActionsWidth = leftActions.length * actionWidth;
  const rightActionsWidth = rightActions.length * actionWidth;

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

  // Reset position
  const resetPosition = useCallback(() => {
    setOffsetX(0);
    setActiveDirection(null);
    setFocusedActionIndex(-1);
    setIsCommitted(false);
    wasCommitted.current = false;
    onSwipeChange?.(null);
  }, [onSwipeChange]);

  // Execute action with async support
  const executeAction = useCallback(async (action: SwipeListAction) => {
    setLoadingActionId(action.id);
    triggerHaptic('heavy');

    try {
      await action.onClick();
    } finally {
      setLoadingActionId(null);
      resetPosition();
    }
  }, [triggerHaptic, resetPosition]);

  // Handle drag start
  const handleDragStart = useCallback((clientX: number, clientY: number) => {
    if (disabled || loadingActionId) return;
    
    setIsDragging(true);
    startX.current = clientX;
    startY.current = clientY;
    startTime.current = Date.now();
    isHorizontalSwipe.current = null;
  }, [disabled, loadingActionId]);

  // Handle drag move
  const handleDragMove = useCallback((clientX: number, clientY: number) => {
    if (!isDragging || disabled || loadingActionId) return;

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

    let newOffset = deltaX;
    const containerWidth = containerRef.current?.offsetWidth || 300;
    
    // Swiping left (reveals left actions on right side)
    if (deltaX < 0) {
      if (leftActions.length === 0) {
        newOffset = deltaX * 0.2; // Heavy resistance if no actions
      } else {
        const maxSwipe = fullSwipe 
          ? -containerWidth 
          : -leftActionsWidth;
        newOffset = Math.max(maxSwipe, deltaX);
        
        // Apply resistance past the action buttons
        if (newOffset < -leftActionsWidth && !fullSwipe) {
          const overSwipe = newOffset + leftActionsWidth;
          newOffset = -leftActionsWidth + overSwipe * 0.3;
        }
      }
      if (activeDirection !== 'left') {
        setActiveDirection('left');
        onSwipeChange?.('left');
      }
    }
    // Swiping right (reveals right actions on left side)
    else if (deltaX > 0) {
      if (rightActions.length === 0) {
        newOffset = deltaX * 0.2; // Heavy resistance if no actions
      } else {
        const maxSwipe = fullSwipe 
          ? containerWidth 
          : rightActionsWidth;
        newOffset = Math.min(maxSwipe, deltaX);
        
        // Apply resistance past the action buttons
        if (newOffset > rightActionsWidth && !fullSwipe) {
          const overSwipe = newOffset - rightActionsWidth;
          newOffset = rightActionsWidth + overSwipe * 0.3;
        }
      }
      if (activeDirection !== 'right') {
        setActiveDirection('right');
        onSwipeChange?.('right');
      }
    }

    // Check if we've crossed the full-swipe threshold
    if (fullSwipe) {
      const swipePercentage = Math.abs(newOffset) / containerWidth;
      const nowCommitted = swipePercentage >= fullSwipeThreshold;
      
      // Haptic feedback when crossing threshold (both directions)
      if (nowCommitted !== wasCommitted.current) {
        triggerHaptic(nowCommitted ? 'heavy' : 'light');
        wasCommitted.current = nowCommitted;
      }
      
      setIsCommitted(nowCommitted);
    }

    setOffsetX(newOffset);
  }, [isDragging, disabled, loadingActionId, leftActions.length, rightActions.length, leftActionsWidth, rightActionsWidth, fullSwipe, fullSwipeThreshold, activeDirection, onSwipeChange, triggerHaptic]);

  // Handle drag end
  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    const velocity = Math.abs(offsetX) / (Date.now() - startTime.current);
    const containerWidth = containerRef.current?.offsetWidth || 300;
    
    // Check for full swipe trigger - use isCommitted state for more reliable detection
    if (fullSwipe && isCommitted) {
      if (offsetX < 0 && leftActions.length > 0) {
        executeAction(leftActions[0]);
        return;
      } else if (offsetX > 0 && rightActions.length > 0) {
        executeAction(rightActions[0]);
        return;
      }
    }
    
    // Also check velocity-based trigger for quick swipes
    if (fullSwipe && velocity > 0.5) {
      const swipePercentage = Math.abs(offsetX) / containerWidth;
      if (swipePercentage >= fullSwipeThreshold * 0.5) { // Lower threshold for fast swipes
        if (offsetX < 0 && leftActions.length > 0) {
          executeAction(leftActions[0]);
          return;
        } else if (offsetX > 0 && rightActions.length > 0) {
          executeAction(rightActions[0]);
          return;
        }
      }
    }
    
    // Reset committed state
    setIsCommitted(false);
    wasCommitted.current = false;

    // Snap to open or closed position
    const threshold = actionWidth * 0.5;
    if (Math.abs(offsetX) >= threshold || velocity > 0.3) {
      // Snap open
      if (offsetX < 0 && leftActions.length > 0) {
        setOffsetX(-leftActionsWidth);
        setActiveDirection('left');
        onSwipeChange?.('left');
      } else if (offsetX > 0 && rightActions.length > 0) {
        setOffsetX(rightActionsWidth);
        setActiveDirection('right');
        onSwipeChange?.('right');
      } else {
        resetPosition();
      }
    } else {
      resetPosition();
    }
  }, [isDragging, offsetX, fullSwipe, fullSwipeThreshold, isCommitted, leftActions, rightActions, leftActionsWidth, rightActionsWidth, actionWidth, executeAction, resetPosition, onSwipeChange]);

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
    if (isHorizontalSwipe.current === true) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Mouse event handlers
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

  // Close on outside click
  useEffect(() => {
    if (activeDirection === null) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        resetPosition();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDirection, resetPosition]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (disabled || loadingActionId) return;

    const currentActions = activeDirection === 'left' ? leftActions : 
                          activeDirection === 'right' ? rightActions : [];

    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        if (activeDirection === null && rightActions.length > 0) {
          setOffsetX(rightActionsWidth);
          setActiveDirection('right');
          setFocusedActionIndex(0);
          onSwipeChange?.('right');
          triggerHaptic('light');
        } else if (activeDirection === 'right' && focusedActionIndex < rightActions.length - 1) {
          setFocusedActionIndex(prev => prev + 1);
        } else if (activeDirection === 'left') {
          resetPosition();
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (activeDirection === null && leftActions.length > 0) {
          setOffsetX(-leftActionsWidth);
          setActiveDirection('left');
          setFocusedActionIndex(0);
          onSwipeChange?.('left');
          triggerHaptic('light');
        } else if (activeDirection === 'left' && focusedActionIndex < leftActions.length - 1) {
          setFocusedActionIndex(prev => prev + 1);
        } else if (activeDirection === 'right') {
          resetPosition();
        }
        break;
      case 'Tab':
        if (activeDirection !== null && currentActions.length > 0) {
          e.preventDefault();
          if (e.shiftKey) {
            setFocusedActionIndex(prev => prev <= 0 ? currentActions.length - 1 : prev - 1);
          } else {
            setFocusedActionIndex(prev => prev >= currentActions.length - 1 ? 0 : prev + 1);
          }
        }
        break;
      case 'Enter':
      case ' ':
        if (activeDirection !== null && focusedActionIndex >= 0 && focusedActionIndex < currentActions.length) {
          e.preventDefault();
          executeAction(currentActions[focusedActionIndex]);
        }
        break;
      case 'Escape':
        if (activeDirection !== null) {
          e.preventDefault();
          resetPosition();
        }
        break;
    }
  }, [disabled, loadingActionId, activeDirection, leftActions, rightActions, leftActionsWidth, rightActionsWidth, focusedActionIndex, executeAction, resetPosition, onSwipeChange, triggerHaptic]);

  // Render action button
  const renderActionButton = (action: SwipeListAction, index: number, side: 'left' | 'right') => {
    const { bg, hover } = getColorClasses(action.color);
    const isLoading = loadingActionId === action.id;
    const isFocused = activeDirection === side && focusedActionIndex === index;
    const IconComponent = action.icon;
    
    return (
      <button
        key={action.id}
        onClick={(e) => {
          e.stopPropagation();
          executeAction(action);
        }}
        disabled={!!loadingActionId}
        className={`
          flex flex-col items-center justify-center gap-1
          h-full text-white
          ${bg} ${hover}
          transition-all duration-150 ease-out
          focus:outline-none
          ${isFocused ? 'ring-2 ring-white ring-inset scale-105' : ''}
          ${isLoading ? 'opacity-75' : 'active:scale-95'}
          disabled:cursor-not-allowed
        `}
        style={{ width: actionWidth }}
        aria-label={action.label}
      >
        <div className={`transition-transform duration-200 ${isFocused ? 'scale-110' : ''}`}>
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <IconComponent className="h-5 w-5" />
          )}
        </div>
        <span className="text-[10px] font-medium uppercase tracking-wide opacity-90">
          {action.label}
        </span>
      </button>
    );
  };

  // Build aria-label
  const ariaLabel = [
    'Swipeable list item.',
    rightActions.length > 0 ? `Swipe right for ${rightActions.map(a => a.label).join(', ')}.` : '',
    leftActions.length > 0 ? `Swipe left for ${leftActions.map(a => a.label).join(', ')}.` : '',
  ].filter(Boolean).join(' ');

  // Calculate visual progress for full swipe indicator
  const fullSwipeProgress = fullSwipe 
    ? Math.min(1, Math.abs(offsetX) / ((containerRef.current?.offsetWidth || 300) * fullSwipeThreshold))
    : 0;

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Right actions (revealed when swiping right) */}
      {rightActions.length > 0 && (
        <div
          className="absolute left-0 top-0 bottom-0 flex shadow-inner"
          style={{ width: rightActionsWidth }}
        >
          {rightActions.map((action, index) => renderActionButton(action, index, 'right'))}
        </div>
      )}

      {/* Left actions (revealed when swiping left) */}
      {leftActions.length > 0 && (
        <div
          className="absolute right-0 top-0 bottom-0 flex shadow-inner"
          style={{ width: leftActionsWidth }}
        >
          {leftActions.map((action, index) => renderActionButton(action, index, 'left'))}
        </div>
      )}

      {/* Committed full-swipe indicator - shows action that will trigger on release */}
      {fullSwipe && isCommitted && isDragging && (
        <div 
          className={`
            absolute inset-0 z-10 flex items-center
            ${offsetX > 0 ? 'justify-start pl-6' : 'justify-end pr-6'}
            ${offsetX > 0 && rightActions.length > 0 
              ? getColorClasses(rightActions[0].color).bg 
              : offsetX < 0 && leftActions.length > 0 
                ? getColorClasses(leftActions[0].color).bg 
                : ''}
            transition-opacity duration-150
          `}
        >
          {offsetX > 0 && rightActions.length > 0 && (() => {
            const action = rightActions[0];
            const IconComponent = action.icon;
            return (
              <div className="flex items-center gap-3 text-white animate-pulse">
                <IconComponent className="h-8 w-8" />
                <span className="text-lg font-semibold uppercase tracking-wide">
                  Release to {action.label}
                </span>
              </div>
            );
          })()}
          {offsetX < 0 && leftActions.length > 0 && (() => {
            const action = leftActions[0];
            const IconComponent = action.icon;
            return (
              <div className="flex items-center gap-3 text-white animate-pulse">
                <span className="text-lg font-semibold uppercase tracking-wide">
                  Release to {action.label}
                </span>
                <IconComponent className="h-8 w-8" />
              </div>
            );
          })()}
        </div>
      )}

      {/* Full swipe progress indicator (before committed) */}
      {fullSwipe && fullSwipeProgress > 0.3 && !isCommitted && (
        <div 
          className={`
            absolute inset-0 pointer-events-none
            ${offsetX > 0 ? 'bg-gradient-to-r from-success-500/20 to-transparent' : 'bg-gradient-to-l from-error-500/20 to-transparent'}
          `}
          style={{ opacity: fullSwipeProgress }}
        />
      )}

      {/* Main content */}
      <div
        className={`
          relative bg-white
          ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
          ${isDragging ? '' : 'transition-transform duration-200 ease-out'}
          ${disabled ? 'opacity-50 pointer-events-none' : ''}
          ${isDragging ? 'shadow-lg' : activeDirection ? 'shadow-md' : ''}
        `}
        style={{
          transform: `translateX(${offsetX}px)`,
          touchAction: 'pan-y',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
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
