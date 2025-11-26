import { useState, useEffect, useCallback } from 'react';

/**
 * Tailwind breakpoint values in pixels
 */
export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

/**
 * Viewport size state
 */
export interface ViewportSize {
  width: number;
  height: number;
}

/**
 * Orientation type
 */
export type Orientation = 'portrait' | 'landscape';

/**
 * SSR-safe check for window availability
 */
const isBrowser = typeof window !== 'undefined';

/**
 * Get initial viewport size (SSR-safe)
 */
const getInitialViewportSize = (): ViewportSize => {
  if (!isBrowser) {
    return { width: 1024, height: 768 }; // Default to desktop for SSR
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

/**
 * useViewportSize - Returns current viewport dimensions
 * 
 * Updates on window resize with debouncing for performance.
 * SSR-safe with sensible defaults.
 * 
 * @example
 * const { width, height } = useViewportSize();
 * console.log(`Viewport: ${width}x${height}`);
 */
export function useViewportSize(): ViewportSize {
  const [size, setSize] = useState<ViewportSize>(getInitialViewportSize);

  useEffect(() => {
    if (!isBrowser) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 100); // Debounce 100ms
    };

    window.addEventListener('resize', handleResize);
    
    // Set initial size on mount (in case SSR default differs)
    handleResize();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
}

/**
 * useBreakpoint - Returns the current Tailwind breakpoint
 * 
 * Automatically updates when viewport crosses breakpoint thresholds.
 * 
 * @example
 * const breakpoint = useBreakpoint();
 * // Returns: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
 */
export function useBreakpoint(): Breakpoint {
  const { width } = useViewportSize();

  if (width >= BREAKPOINTS['2xl']) return '2xl';
  if (width >= BREAKPOINTS.xl) return 'xl';
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  if (width >= BREAKPOINTS.sm) return 'sm';
  return 'xs';
}

/**
 * useMediaQuery - React hook for CSS media queries
 * 
 * SSR-safe implementation that returns false during SSR and
 * updates reactively when media query match state changes.
 * 
 * @param query - CSS media query string (e.g., '(max-width: 768px)')
 * @returns boolean indicating if the media query matches
 * 
 * @example
 * const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
 * const isReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
 * const isPortrait = useMediaQuery('(orientation: portrait)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (!isBrowser) return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (!isBrowser) return;

    const media = window.matchMedia(query);
    
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query, matches]);

  return matches;
}

/**
 * useIsMobile - Returns true when viewport is mobile-sized (< 768px)
 * 
 * @example
 * const isMobile = useIsMobile();
 * return isMobile ? <MobileNav /> : <DesktopNav />;
 */
export function useIsMobile(): boolean {
  return useMediaQuery(`(max-width: ${BREAKPOINTS.md - 1}px)`);
}

/**
 * useIsTablet - Returns true when viewport is tablet-sized (768px - 1023px)
 * 
 * @example
 * const isTablet = useIsTablet();
 */
export function useIsTablet(): boolean {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`);
}

/**
 * useIsDesktop - Returns true when viewport is desktop-sized (>= 1024px)
 * 
 * @example
 * const isDesktop = useIsDesktop();
 */
export function useIsDesktop(): boolean {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);
}

/**
 * useIsTouchDevice - Detects if the device supports touch input
 * 
 * Uses multiple detection methods for reliability:
 * - Touch event support
 * - Pointer coarse media query
 * - Max touch points
 * 
 * @example
 * const isTouchDevice = useIsTouchDevice();
 * // Show swipe hints on touch devices
 */
export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState(() => {
    if (!isBrowser) return false;
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
    );
  });

  useEffect(() => {
    if (!isBrowser) return;

    // Re-check on mount for accuracy
    const touchSupported =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;

    setIsTouch(touchSupported);
  }, []);

  return isTouch;
}

/**
 * useOrientation - Returns current screen orientation
 * 
 * @returns 'portrait' | 'landscape'
 * 
 * @example
 * const orientation = useOrientation();
 * // Adjust layout based on orientation
 */
export function useOrientation(): Orientation {
  const { width, height } = useViewportSize();
  return height > width ? 'portrait' : 'landscape';
}

/**
 * useBreakpointValue - Returns different values based on breakpoint
 * 
 * Mobile-first: Returns the value for the current breakpoint or the
 * closest smaller breakpoint that has a value defined.
 * 
 * @param values - Object mapping breakpoints to values
 * @param defaultValue - Fallback value if no breakpoint matches
 * 
 * @example
 * const columns = useBreakpointValue({ xs: 1, sm: 2, lg: 4 }, 1);
 * // Returns 1 on xs, 2 on sm/md, 4 on lg/xl/2xl
 * 
 * const padding = useBreakpointValue({ xs: 'p-2', md: 'p-4', xl: 'p-8' });
 */
export function useBreakpointValue<T>(
  values: Partial<Record<Breakpoint, T>>,
  defaultValue?: T
): T | undefined {
  const breakpoint = useBreakpoint();
  
  // Breakpoints in order from largest to smallest
  const breakpointOrder: Breakpoint[] = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
  
  // Find the current breakpoint index
  const currentIndex = breakpointOrder.indexOf(breakpoint);
  
  // Look for value at current breakpoint or smaller (mobile-first)
  for (let i = currentIndex; i < breakpointOrder.length; i++) {
    const bp = breakpointOrder[i];
    if (bp in values && values[bp] !== undefined) {
      return values[bp];
    }
  }
  
  return defaultValue;
}

/**
 * useResponsiveCallback - Returns a memoized callback that receives responsive info
 * 
 * Useful for callbacks that need to behave differently based on viewport.
 * 
 * @example
 * const handleClick = useResponsiveCallback((isMobile) => {
 *   if (isMobile) {
 *     openBottomSheet();
 *   } else {
 *     openModal();
 *   }
 * });
 */
export function useResponsiveCallback<T extends (...args: any[]) => any>(
  callback: (isMobile: boolean, isTablet: boolean, isDesktop: boolean) => T
): T {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  return useCallback(
    (...args: Parameters<T>) => callback(isMobile, isTablet, isDesktop)(...args),
    [callback, isMobile, isTablet, isDesktop]
  ) as T;
}

/**
 * useSafeAreaInsets - Returns safe area insets for notched devices
 * 
 * Uses CSS environment variables (env(safe-area-inset-*)) to get
 * safe area dimensions for devices with notches or home indicators.
 * 
 * @example
 * const { top, bottom } = useSafeAreaInsets();
 * // Add padding-bottom for home indicator
 */
export function useSafeAreaInsets(): {
  top: number;
  right: number;
  bottom: number;
  left: number;
} {
  const [insets, setInsets] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  useEffect(() => {
    if (!isBrowser) return;

    // Create a temporary element to read CSS env() values
    const el = document.createElement('div');
    el.style.position = 'fixed';
    el.style.top = 'env(safe-area-inset-top, 0px)';
    el.style.right = 'env(safe-area-inset-right, 0px)';
    el.style.bottom = 'env(safe-area-inset-bottom, 0px)';
    el.style.left = 'env(safe-area-inset-left, 0px)';
    el.style.visibility = 'hidden';
    el.style.pointerEvents = 'none';
    document.body.appendChild(el);

    const computed = getComputedStyle(el);
    setInsets({
      top: parseInt(computed.top, 10) || 0,
      right: parseInt(computed.right, 10) || 0,
      bottom: parseInt(computed.bottom, 10) || 0,
      left: parseInt(computed.left, 10) || 0,
    });

    document.body.removeChild(el);
  }, []);

  return insets;
}

/**
 * usePrefersMobile - Checks if user prefers reduced data/animations (mobile-friendly)
 * 
 * Combines multiple preferences that might indicate mobile/low-power usage.
 */
export function usePrefersMobile(): boolean {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const prefersReducedData = useMediaQuery('(prefers-reduced-data: reduce)');
  const isTouchDevice = useIsTouchDevice();
  const isMobile = useIsMobile();

  return isMobile || isTouchDevice || prefersReducedMotion || prefersReducedData;
}
