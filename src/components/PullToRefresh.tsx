import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Loader2, ArrowDown } from 'lucide-react';

/**
 * PullToRefresh component props
 */
export interface PullToRefreshProps {
  /** Content to wrap */
  children: React.ReactNode;
  /** Async refresh handler - should return a Promise */
  onRefresh: () => Promise<void>;
  /** Disable pull-to-refresh */
  disabled?: boolean;
  /** Pull distance required to trigger refresh (default: 80) */
  pullThreshold?: number;
  /** Maximum pull distance (default: 120) */
  maxPull?: number;
  /** Custom loading indicator */
  loadingIndicator?: React.ReactNode;
  /** Custom pull indicator */
  pullIndicator?: React.ReactNode;
  /** Additional class names for container */
  className?: string;
}

type RefreshState = 'idle' | 'pulling' | 'ready' | 'refreshing';

/**
 * PullToRefresh - Mobile pull-to-refresh gesture handler
 * 
 * Wraps content and provides native-feeling pull-to-refresh functionality.
 * Only activates when scrolled to top of content.
 * 
 * @example Basic usage
 * ```tsx
 * <PullToRefresh onRefresh={async () => {
 *   await fetchLatestData();
 * }}>
 *   <div className="min-h-screen">
 *     {content}
 *   </div>
 * </PullToRefresh>
 * ```
 * 
 * @example With custom threshold
 * ```tsx
 * <PullToRefresh
 *   onRefresh={handleRefresh}
 *   pullThreshold={100}
 *   maxPull={150}
 * >
 *   {content}
 * </PullToRefresh>
 * ```
 */
export default function PullToRefresh({
  children,
  onRefresh,
  disabled = false,
  pullThreshold = 80,
  maxPull = 120,
  loadingIndicator,
  pullIndicator,
  className = '',
}: PullToRefreshProps) {
  const [state, setState] = useState<RefreshState>('idle');
  const [pullDistance, setPullDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const currentY = useRef(0);

  // Check if at top of scroll container
  const isAtTop = useCallback(() => {
    const container = containerRef.current;
    if (!container) return false;
    return container.scrollTop <= 0;
  }, []);

  // Handle touch start
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (disabled || state === 'refreshing' || !isAtTop()) return;
    
    startY.current = e.touches[0].clientY;
    currentY.current = startY.current;
  }, [disabled, state, isAtTop]);

  // Handle touch move
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (disabled || state === 'refreshing') return;
    if (startY.current === 0) return;

    currentY.current = e.touches[0].clientY;
    const diff = currentY.current - startY.current;

    // Only allow pulling down when at top
    if (diff > 0 && isAtTop()) {
      // Apply resistance - pull slows down as distance increases
      const resistance = 0.5;
      const adjustedPull = Math.min(diff * resistance, maxPull);
      
      setPullDistance(adjustedPull);
      setState(adjustedPull >= pullThreshold ? 'ready' : 'pulling');

      // Prevent default scroll when pulling
      if (adjustedPull > 0) {
        e.preventDefault();
      }
    }
  }, [disabled, state, isAtTop, maxPull, pullThreshold]);

  // Handle touch end
  const handleTouchEnd = useCallback(async () => {
    if (disabled || state === 'refreshing') return;

    if (state === 'ready') {
      setState('refreshing');
      setPullDistance(pullThreshold); // Hold at threshold while refreshing

      try {
        await onRefresh();
      } catch (error) {
        console.error('Refresh failed:', error);
      }

      setState('idle');
    }

    setPullDistance(0);
    startY.current = 0;
    currentY.current = 0;
  }, [disabled, state, pullThreshold, onRefresh]);

  // Attach touch listeners
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

  // Calculate indicator opacity and rotation
  const progress = Math.min(pullDistance / pullThreshold, 1);
  const rotation = progress * 180;

  // Default loading indicator
  const defaultLoadingIndicator = (
    <Loader2 className="h-6 w-6 text-accent-600 animate-spin" />
  );

  // Default pull indicator
  const defaultPullIndicator = (
    <div
      className={`
        transition-transform duration-200
        ${state === 'ready' ? 'text-accent-600' : 'text-ink-400'}
      `}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <ArrowDown className="h-6 w-6" />
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-auto ${className}`}
      style={{ touchAction: pullDistance > 0 ? 'none' : 'auto' }}
    >
      {/* Pull indicator */}
      <div
        className={`
          absolute left-0 right-0 flex items-center justify-center
          transition-all duration-200 overflow-hidden
          ${state === 'idle' && pullDistance === 0 ? 'opacity-0' : 'opacity-100'}
        `}
        style={{
          height: `${pullDistance}px`,
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          className={`
            w-10 h-10 rounded-full bg-white shadow-md
            flex items-center justify-center
            transition-transform duration-200
            ${state === 'refreshing' ? 'scale-100' : progress < 0.3 ? 'scale-75' : 'scale-100'}
          `}
        >
          {state === 'refreshing'
            ? (loadingIndicator || defaultLoadingIndicator)
            : (pullIndicator || defaultPullIndicator)
          }
        </div>
      </div>

      {/* Content wrapper */}
      <div
        className="transition-transform duration-200"
        style={{
          transform: `translateY(${pullDistance}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * usePullToRefresh - Hook for custom pull-to-refresh implementations
 * 
 * @example
 * ```tsx
 * const { pullDistance, isRefreshing, bind } = usePullToRefresh({
 *   onRefresh: async () => {
 *     await fetchData();
 *   }
 * });
 * 
 * return (
 *   <div {...bind}>
 *     {isRefreshing && <Spinner />}
 *     {content}
 *   </div>
 * );
 * ```
 */
export function usePullToRefresh({
  onRefresh,
  pullThreshold = 80,
  maxPull = 120,
  disabled = false,
}: {
  onRefresh: () => Promise<void>;
  pullThreshold?: number;
  maxPull?: number;
  disabled?: boolean;
}) {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const startY = useRef(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (disabled || isRefreshing) return;
    startY.current = e.touches[0].clientY;
  }, [disabled, isRefreshing]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (disabled || isRefreshing || startY.current === 0) return;

    const diff = e.touches[0].clientY - startY.current;
    if (diff > 0) {
      const adjustedPull = Math.min(diff * 0.5, maxPull);
      setPullDistance(adjustedPull);
    }
  }, [disabled, isRefreshing, maxPull]);

  const handleTouchEnd = useCallback(async () => {
    if (disabled || isRefreshing) return;

    if (pullDistance >= pullThreshold) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
      }
    }

    setPullDistance(0);
    startY.current = 0;
  }, [disabled, isRefreshing, pullDistance, pullThreshold, onRefresh]);

  return {
    pullDistance,
    isRefreshing,
    isReady: pullDistance >= pullThreshold,
    progress: Math.min(pullDistance / pullThreshold, 1),
    bind: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    },
  };
}
