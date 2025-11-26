import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import {
  useIsMobile,
  useIsTablet,
  useIsDesktop,
  useIsTouchDevice,
  useBreakpoint,
  useOrientation,
  useViewportSize,
  useSafeAreaInsets,
  Breakpoint,
  Orientation,
  ViewportSize,
} from '../hooks/useResponsive';

/**
 * Mobile context value interface
 * 
 * Provides comprehensive responsive state for the entire application.
 */
export interface MobileContextValue {
  /** True when viewport width < 768px */
  isMobile: boolean;
  /** True when viewport width is 768px - 1023px */
  isTablet: boolean;
  /** True when viewport width >= 1024px */
  isDesktop: boolean;
  /** True when device supports touch input */
  isTouchDevice: boolean;
  /** Current Tailwind breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' */
  breakpoint: Breakpoint;
  /** Current orientation: 'portrait' | 'landscape' */
  orientation: Orientation;
  /** Current viewport dimensions */
  viewport: ViewportSize;
  /** Safe area insets for notched devices */
  safeAreaInsets: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  /** True when mobile OR touch device (useful for UI decisions) */
  useMobileUI: boolean;
}

/**
 * Default context value (SSR-safe defaults)
 */
const defaultContextValue: MobileContextValue = {
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  isTouchDevice: false,
  breakpoint: 'lg',
  orientation: 'landscape',
  viewport: { width: 1024, height: 768 },
  safeAreaInsets: { top: 0, right: 0, bottom: 0, left: 0 },
  useMobileUI: false,
};

/**
 * Mobile context
 */
const MobileContext = createContext<MobileContextValue>(defaultContextValue);

/**
 * MobileProvider props
 */
export interface MobileProviderProps {
  /** Child components that will have access to mobile context */
  children: ReactNode;
  /** 
   * Force mobile UI mode regardless of device detection.
   * Useful for testing or forcing mobile layout on tablets.
   */
  forceMobileUI?: boolean;
  /**
   * Force desktop UI mode regardless of device detection.
   * Useful for testing or forcing desktop layout on mobile.
   */
  forceDesktopUI?: boolean;
}

/**
 * MobileProvider - Provides responsive state to the entire application
 * 
 * Wrap your application with MobileProvider to enable auto-responsive
 * behavior in notebook-ui components.
 * 
 * @example Basic usage
 * ```tsx
 * import { MobileProvider } from 'notebook-ui';
 * 
 * function App() {
 *   return (
 *     <MobileProvider>
 *       <YourApplication />
 *     </MobileProvider>
 *   );
 * }
 * ```
 * 
 * @example Force mobile UI for testing
 * ```tsx
 * <MobileProvider forceMobileUI>
 *   <YourApplication />
 * </MobileProvider>
 * ```
 */
export function MobileProvider({
  children,
  forceMobileUI = false,
  forceDesktopUI = false,
}: MobileProviderProps) {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  const isTouchDevice = useIsTouchDevice();
  const breakpoint = useBreakpoint();
  const orientation = useOrientation();
  const viewport = useViewportSize();
  const safeAreaInsets = useSafeAreaInsets();

  const value = useMemo<MobileContextValue>(() => {
    // Calculate effective mobile UI state
    let useMobileUI = isMobile || isTouchDevice;
    
    // Apply force overrides
    if (forceMobileUI) {
      useMobileUI = true;
    } else if (forceDesktopUI) {
      useMobileUI = false;
    }

    return {
      isMobile: forceMobileUI ? true : forceDesktopUI ? false : isMobile,
      isTablet: forceMobileUI || forceDesktopUI ? false : isTablet,
      isDesktop: forceDesktopUI ? true : forceMobileUI ? false : isDesktop,
      isTouchDevice,
      breakpoint: forceMobileUI ? 'xs' : forceDesktopUI ? 'lg' : breakpoint,
      orientation,
      viewport,
      safeAreaInsets,
      useMobileUI,
    };
  }, [
    isMobile,
    isTablet,
    isDesktop,
    isTouchDevice,
    breakpoint,
    orientation,
    viewport,
    safeAreaInsets,
    forceMobileUI,
    forceDesktopUI,
  ]);

  return (
    <MobileContext.Provider value={value}>
      {children}
    </MobileContext.Provider>
  );
}

/**
 * useMobileContext - Hook to access mobile responsive state
 * 
 * Must be used within a MobileProvider. Returns comprehensive
 * responsive state for making UI decisions.
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { isMobile, useMobileUI, breakpoint } = useMobileContext();
 *   
 *   return useMobileUI ? <MobileView /> : <DesktopView />;
 * }
 * ```
 */
export function useMobileContext(): MobileContextValue {
  const context = useContext(MobileContext);
  
  if (context === undefined) {
    // Return default value if used outside provider (graceful degradation)
    console.warn(
      'useMobileContext was used outside of MobileProvider. ' +
      'Wrap your app with <MobileProvider> for full mobile support.'
    );
    return defaultContextValue;
  }
  
  return context;
}

/**
 * withMobileContext - HOC to inject mobile context as props
 * 
 * For class components or when you prefer props over hooks.
 * 
 * @example
 * ```tsx
 * interface Props {
 *   mobile: MobileContextValue;
 * }
 * 
 * class MyComponent extends React.Component<Props> {
 *   render() {
 *     const { isMobile } = this.props.mobile;
 *     return isMobile ? <Mobile /> : <Desktop />;
 *   }
 * }
 * 
 * export default withMobileContext(MyComponent);
 * ```
 */
export function withMobileContext<P extends { mobile: MobileContextValue }>(
  Component: React.ComponentType<P>
) {
  const displayName = Component.displayName || Component.name || 'Component';

  const WrappedComponent = (props: Omit<P, 'mobile'>) => {
    const mobile = useMobileContext();
    return <Component {...(props as P)} mobile={mobile} />;
  };

  WrappedComponent.displayName = `withMobileContext(${displayName})`;

  return WrappedComponent;
}

/**
 * MobileOnly - Renders children only on mobile devices
 * 
 * @example
 * ```tsx
 * <MobileOnly>
 *   <BottomNavigation items={navItems} />
 * </MobileOnly>
 * ```
 */
export function MobileOnly({ children }: { children: ReactNode }) {
  const { useMobileUI } = useMobileContext();
  return useMobileUI ? <>{children}</> : null;
}

/**
 * DesktopOnly - Renders children only on desktop devices
 * 
 * @example
 * ```tsx
 * <DesktopOnly>
 *   <Sidebar items={navItems} />
 * </DesktopOnly>
 * ```
 */
export function DesktopOnly({ children }: { children: ReactNode }) {
  const { useMobileUI } = useMobileContext();
  return useMobileUI ? null : <>{children}</>;
}

/**
 * Responsive - Renders different content based on device type
 * 
 * @example
 * ```tsx
 * <Responsive
 *   mobile={<MobileNavigation />}
 *   tablet={<TabletNavigation />}
 *   desktop={<DesktopNavigation />}
 * />
 * ```
 */
export function Responsive({
  mobile,
  tablet,
  desktop,
}: {
  mobile?: ReactNode;
  tablet?: ReactNode;
  desktop?: ReactNode;
}) {
  const { isMobile, isTablet, isDesktop } = useMobileContext();

  if (isMobile && mobile) return <>{mobile}</>;
  if (isTablet && tablet) return <>{tablet}</>;
  if (isDesktop && desktop) return <>{desktop}</>;
  
  // Fallback: desktop -> tablet -> mobile
  if (isDesktop) return <>{desktop || tablet || mobile}</>;
  if (isTablet) return <>{tablet || mobile || desktop}</>;
  return <>{mobile || tablet || desktop}</>;
}

export default MobileContext;
