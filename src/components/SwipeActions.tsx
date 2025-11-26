// SwipeActions - Touch gesture-based swipe actions component
// Provides left/right swipe actions commonly used in mobile list items

import React, { useState, useRef, useCallback, useEffect } from 'react';

/**
 * Single swipe action configuration
 */
export interface SwipeAction {
  /** Unique identifier */
  id: string;
  /** Action label (shown on the button) */
  label: string;
  /** Icon to display */
  icon?: React.ReactNode;
  /** Background color class (Tailwind) */
  color?: 'primary' | 'success' | 'warning' | 'error' | 'default';
  /** Click handler */
  onClick: () => void;
  /** Whether this is the primary action (full swipe triggers it) */
  primary?: boolean;
}

/**
 * SwipeActions component props
 */
export interface SwipeActionsProps {
  /** Content to wrap with swipe actions */
  children: React.ReactNode;
  /** Actions shown when swiping left (appears on right side) */
  leftActions?: SwipeAction[];
  /** Actions shown when swiping right (appears on left side) */
  rightActions?: SwipeAction[];
  /** Swipe threshold in pixels to reveal actions (default: 80) */
  threshold?: number;
  /** Full swipe threshold percentage to trigger primary action (default: 0.5) */
  fullSwipeThreshold?: number;
  /** Enable full swipe to trigger primary action */
  fullSwipe?: boolean;
  /** Disable swipe gestures */
  disabled?: boolean;
  /** Callback when actions are revealed/hidden */
  onSwipeChange?: (direction: 'left' | 'right' | null) => void;
  /** Additional CSS classes */
  className?: string;
}

// Color mapping for action buttons
const colorClasses = {
  primary: 'bg-accent-500 text-white',
  success: 'bg-success-500 text-white',
  warning: 'bg-warning-500 text-white',
  error: 'bg-error-500 text-white',
  default: 'bg-paper-500 text-white',
};

/**
 * SwipeActions - Touch-based swipe actions for list items
 *
 * Wraps any content with swipe-to-reveal actions, commonly used in mobile
 * list items for quick actions like delete, archive, edit, etc.
 *
 * Features:
 * - Left and right swipe actions
 * - Full swipe to trigger primary action
 * - Spring-back animation
 * - Touch and mouse support
 * - Customizable thresholds
 *
 * @example Basic delete action
 * ```tsx
 * <SwipeActions
 *   leftActions={[
 *     {
 *       id: 'delete',
 *       label: 'Delete',
 *       icon: <Trash className="h-5 w-5" />,
 *       color: 'error',
 *       onClick: () => handleDelete(item),
 *       primary: true,
 *     },
 *   ]}
 * >
 *   <div className="p-4 bg-white">
 *     List item content
 *   </div>
 * </SwipeActions>
 * ```
 *
 * @example Multiple actions on both sides
 * ```tsx
 * <SwipeActions
 *   leftActions={[
 *     { id: 'delete', label: 'Delete', icon: <Trash />, color: 'error', onClick: handleDelete },
 *     { id: 'archive', label: 'Archive', icon: <Archive />, color: 'warning', onClick: handleArchive },
 *   ]}
 *   rightActions={[
 *     { id: 'edit', label: 'Edit', icon: <Edit />, color: 'primary', onClick: handleEdit },
 *   ]}
 *   fullSwipe
 * >
 *   <ListItem />
 * </SwipeActions>
 * ```
 */
export function SwipeActions({
  children,
  leftActions = [],
  rightActions = [],
  threshold = 80,
  fullSwipeThreshold = 0.5,
  fullSwipe = false,
  disabled = false,
  onSwipeChange,
  className = '',
}: SwipeActionsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Swipe state
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [activeDirection, setActiveDirection] = useState<'left' | 'right' | null>(null);
  
  // Touch/mouse tracking
  const startX = useRef(0);
  const currentX = useRef(0);
  const startTime = useRef(0);

  // Calculate action widths
  const leftActionsWidth = leftActions.length * 72; // 72px per action
  const rightActionsWidth = rightActions.length * 72;

  // Reset position
  const resetPosition = useCallback(() => {
    setTranslateX(0);
    setActiveDirection(null);
    onSwipeChange?.(null);
  }, [onSwipeChange]);

  // Handle touch/mouse start
  const handleStart = useCallback((clientX: number) => {
    if (disabled) return;
    
    startX.current = clientX;
    currentX.current = clientX;
    startTime.current = Date.now();
    setIsDragging(true);
  }, [disabled]);

  // Handle touch/mouse move
  const handleMove = useCallback((clientX: number) => {
    if (!isDragging || disabled) return;

    const deltaX = clientX - startX.current;
    currentX.current = clientX;

    // Determine direction and apply resistance at boundaries
    let newTranslateX = deltaX;
    
    // Swiping left (reveals left actions on right side)
    if (deltaX < 0) {
      if (leftActions.length === 0) {
        newTranslateX = deltaX * 0.2; // Heavy resistance if no actions
      } else {
        const maxSwipe = fullSwipe 
          ? -(containerRef.current?.offsetWidth || 300) 
          : -leftActionsWidth;
        newTranslateX = Math.max(maxSwipe, deltaX);
        
        // Apply resistance past the action buttons
        if (newTranslateX < -leftActionsWidth) {
          const overSwipe = newTranslateX + leftActionsWidth;
          newTranslateX = -leftActionsWidth + overSwipe * 0.3;
        }
      }
      setActiveDirection('left');
      onSwipeChange?.('left');
    }
    // Swiping right (reveals right actions on left side)
    else if (deltaX > 0) {
      if (rightActions.length === 0) {
        newTranslateX = deltaX * 0.2; // Heavy resistance if no actions
      } else {
        const maxSwipe = fullSwipe 
          ? (containerRef.current?.offsetWidth || 300) 
          : rightActionsWidth;
        newTranslateX = Math.min(maxSwipe, deltaX);
        
        // Apply resistance past the action buttons
        if (newTranslateX > rightActionsWidth) {
          const overSwipe = newTranslateX - rightActionsWidth;
          newTranslateX = rightActionsWidth + overSwipe * 0.3;
        }
      }
      setActiveDirection('right');
      onSwipeChange?.('right');
    }

    setTranslateX(newTranslateX);
  }, [isDragging, disabled, leftActions.length, rightActions.length, leftActionsWidth, rightActionsWidth, fullSwipe, onSwipeChange]);

  // Handle touch/mouse end
  const handleEnd = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    const deltaX = currentX.current - startX.current;
    const velocity = Math.abs(deltaX) / (Date.now() - startTime.current);
    const containerWidth = containerRef.current?.offsetWidth || 300;
    
    // Check for full swipe trigger
    if (fullSwipe) {
      const swipePercentage = Math.abs(translateX) / containerWidth;
      
      if (swipePercentage >= fullSwipeThreshold || velocity > 0.5) {
        // Find primary action and trigger it
        if (translateX < 0 && leftActions.length > 0) {
          const primaryAction = leftActions.find(a => a.primary) || leftActions[0];
          primaryAction.onClick();
          resetPosition();
          return;
        } else if (translateX > 0 && rightActions.length > 0) {
          const primaryAction = rightActions.find(a => a.primary) || rightActions[0];
          primaryAction.onClick();
          resetPosition();
          return;
        }
      }
    }

    // Snap to open or closed position
    if (Math.abs(translateX) >= threshold || velocity > 0.3) {
      // Snap open
      if (translateX < 0 && leftActions.length > 0) {
        setTranslateX(-leftActionsWidth);
        setActiveDirection('left');
        onSwipeChange?.('left');
      } else if (translateX > 0 && rightActions.length > 0) {
        setTranslateX(rightActionsWidth);
        setActiveDirection('right');
        onSwipeChange?.('right');
      } else {
        resetPosition();
      }
    } else {
      // Snap closed
      resetPosition();
    }
  }, [isDragging, translateX, threshold, fullSwipe, fullSwipeThreshold, leftActions, rightActions, leftActionsWidth, rightActionsWidth, resetPosition, onSwipeChange]);

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Mouse event handlers (for testing/desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

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

  // Handle mouse leave during drag
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseLeave = () => {
      handleEnd();
    };

    document.addEventListener('mouseup', handleMouseLeave);
    return () => document.removeEventListener('mouseup', handleMouseLeave);
  }, [isDragging, handleEnd]);

  // Render action button
  const renderActionButton = (action: SwipeAction) => {
    const colorClass = colorClasses[action.color || 'default'];
    
    return (
      <button
        key={action.id}
        onClick={(e) => {
          e.stopPropagation();
          action.onClick();
          resetPosition();
        }}
        className={`
          flex flex-col items-center justify-center
          w-18 h-full min-w-[72px]
          ${colorClass}
          transition-transform duration-150
        `}
        style={{
          transform: isDragging ? 'scale(1)' : 'scale(1)',
        }}
      >
        {action.icon && (
          <div className="mb-1">
            {action.icon}
          </div>
        )}
        <span className="text-xs font-medium">{action.label}</span>
      </button>
    );
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={isDragging ? handleMouseMove : undefined}
      onMouseUp={handleMouseUp}
      onMouseLeave={isDragging ? handleEnd : undefined}
    >
      {/* Right actions (revealed when swiping right) */}
      {rightActions.length > 0 && (
        <div
          className="absolute left-0 top-0 bottom-0 flex"
          style={{ width: rightActionsWidth }}
        >
          {rightActions.map((action) => renderActionButton(action))}
        </div>
      )}

      {/* Left actions (revealed when swiping left) */}
      {leftActions.length > 0 && (
        <div
          className="absolute right-0 top-0 bottom-0 flex"
          style={{ width: leftActionsWidth }}
        >
          {leftActions.map((action) => renderActionButton(action))}
        </div>
      )}

      {/* Main content */}
      <div
        ref={contentRef}
        className={`
          relative bg-white
          ${isDragging ? '' : 'transition-transform duration-200 ease-out'}
        `}
        style={{
          transform: `translateX(${translateX}px)`,
          touchAction: 'pan-y', // Allow vertical scrolling
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default SwipeActions;
