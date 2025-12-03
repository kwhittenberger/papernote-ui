import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Loader2, ArrowDown, Check } from 'lucide-react';

export interface PullToRefreshProps {
  /** Content to wrap with pull-to-refresh functionality */
  children: React.ReactNode;
  /** Async callback when refresh is triggered - should return when refresh is complete */
  onRefresh: () => Promise<void>;
  /** Pixels to pull before triggering refresh */
  threshold?: number;
  /** Disable pull-to-refresh */
  disabled?: boolean;
  /** Custom content shown while pulling */
  pullingContent?: React.ReactNode;
  /** Custom content shown when ready to release */
  releaseContent?: React.ReactNode;
  /** Custom content shown while refreshing */
  refreshingContent?: React.ReactNode;
  /** Custom content shown when refresh completes (briefly) */
  completeContent?: React.ReactNode;
  /** Additional class name for container */
  className?: string;
}

type RefreshState = 'idle' | 'pulling' | 'ready' | 'refreshing' | 'complete';

/**
 * PullToRefresh - Pull-down refresh indicator and handler for mobile lists
 *
 * Wraps content to enable pull-to-refresh behavior on mobile:
 * - Pull down to trigger refresh
 * - Visual feedback showing progress
 * - Custom content for each state
 *
 * @example
 * ```tsx
 * <PullToRefresh onRefresh={async () => { await syncData(); }}>
 *   <TransactionList transactions={transactions} />
 * </PullToRefresh>
 * ```
 */
export function PullToRefresh({
  children,
  onRefresh,
  threshold = 80,
  disabled = false,
  pullingContent,
  releaseContent,
  refreshingContent,
  completeContent,
  className = '',
}: PullToRefreshProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RefreshState>('idle');
  const [pullDistance, setPullDistance] = useState(0);
  const startY = useRef(0);
  const currentY = useRef(0);
  const isDragging = useRef(false);

  // Check if content is at top (can pull to refresh)
  const isAtTop = useCallback(() => {
    const container = containerRef.current;
    if (!container) return false;
    
    // Check if the scrollable content is at the top
    const scrollableParent = container.querySelector('[data-ptr-scrollable]') || container;
    return (scrollableParent as HTMLElement).scrollTop <= 0;
  }, []);

  // Handle pull start
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (disabled || state === 'refreshing') return;
    if (!isAtTop()) return;

    isDragging.current = true;
    startY.current = e.touches[0].clientY;
    currentY.current = e.touches[0].clientY;
  }, [disabled, state, isAtTop]);

  // Handle pull move
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging.current || disabled || state === 'refreshing') return;

    currentY.current = e.touches[0].clientY;
    const delta = currentY.current - startY.current;

    // Only activate pull-to-refresh when pulling down
    if (delta < 0) {
      isDragging.current = false;
      setPullDistance(0);
      setState('idle');
      return;
    }

    // Check if we're at the top before allowing pull
    if (!isAtTop()) {
      isDragging.current = false;
      return;
    }

    // Apply resistance to pull
    const resistance = 0.5;
    const resistedDelta = delta * resistance;
    const maxPull = threshold * 2;
    const clampedDelta = Math.min(resistedDelta, maxPull);

    setPullDistance(clampedDelta);

    // Update state based on pull distance
    if (clampedDelta >= threshold) {
      setState('ready');
    } else if (clampedDelta > 0) {
      setState('pulling');
    }

    // Prevent default scroll when pulling
    if (delta > 0 && isAtTop()) {
      e.preventDefault();
    }
  }, [disabled, state, threshold, isAtTop]);

  // Handle pull end
  const handleTouchEnd = useCallback(async () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (state === 'ready' && pullDistance >= threshold) {
      setState('refreshing');
      setPullDistance(threshold * 0.6); // Settle at a smaller height while refreshing

      try {
        await onRefresh();
        setState('complete');
        
        // Show complete state briefly
        setTimeout(() => {
          setState('idle');
          setPullDistance(0);
        }, 500);
      } catch (error) {
        console.error('Refresh failed:', error);
        setState('idle');
        setPullDistance(0);
      }
    } else {
      // Snap back
      setState('idle');
      setPullDistance(0);
    }
  }, [state, pullDistance, threshold, onRefresh]);

  // Attach touch event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  // Calculate progress percentage
  const progress = Math.min(1, pullDistance / threshold);

  // Default content for each state
  const defaultPullingContent = (
    <div className="flex flex-col items-center gap-1">
      <ArrowDown 
        className="h-5 w-5 text-ink-400 transition-transform duration-200"
        style={{ transform: `rotate(${progress * 180}deg)` }}
      />
      <span className="text-xs text-ink-500">Pull to refresh</span>
    </div>
  );

  const defaultReleaseContent = (
    <div className="flex flex-col items-center gap-1">
      <ArrowDown 
        className="h-5 w-5 text-accent-500 rotate-180"
      />
      <span className="text-xs text-accent-600 font-medium">Release to refresh</span>
    </div>
  );

  const defaultRefreshingContent = (
    <div className="flex flex-col items-center gap-1">
      <Loader2 className="h-5 w-5 text-accent-500 animate-spin" />
      <span className="text-xs text-ink-500">Refreshing...</span>
    </div>
  );

  const defaultCompleteContent = (
    <div className="flex flex-col items-center gap-1">
      <Check className="h-5 w-5 text-success-500" />
      <span className="text-xs text-success-600">Done!</span>
    </div>
  );

  // Get content based on current state
  const getIndicatorContent = () => {
    switch (state) {
      case 'pulling':
        return pullingContent || defaultPullingContent;
      case 'ready':
        return releaseContent || defaultReleaseContent;
      case 'refreshing':
        return refreshingContent || defaultRefreshingContent;
      case 'complete':
        return completeContent || defaultCompleteContent;
      default:
        return null;
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Pull indicator */}
      <div
        className={`
          absolute top-0 left-0 right-0
          flex items-center justify-center
          bg-paper-50
          transition-all duration-200 ease-out
          ${state === 'idle' ? 'opacity-0' : 'opacity-100'}
        `}
        style={{
          height: pullDistance,
          transform: state === 'idle' ? 'translateY(-100%)' : 'translateY(0)',
        }}
      >
        {getIndicatorContent()}
      </div>

      {/* Content wrapper */}
      <div
        className="transition-transform duration-200 ease-out"
        style={{
          transform: `translateY(${pullDistance}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default PullToRefresh;
