// MobileLayout - Auto-responsive layout that switches between desktop and mobile patterns
// Desktop: Standard sidebar layout
// Mobile: Drawer navigation + bottom navigation bar + mobile header

import React, { useState, useCallback, useEffect } from 'react';
import { useIsMobile, useIsTablet } from '../hooks/useResponsive';
import Sidebar, { SidebarItem } from './Sidebar';
import MobileHeader, { MobileHeaderProps } from './MobileHeader';
import BottomNavigation, { BottomNavItem, BottomNavigationSpacer } from './BottomNavigation';
import { PageNavigation } from './PageNavigation';

export interface Section {
  /** Unique identifier for the section */
  id: string;
  /** Display label for the section in navigation */
  label: string;
}

export interface MobileLayoutProps {
  /** Main page content */
  children: React.ReactNode;
  
  // Desktop sidebar props
  /** Sidebar navigation items (required for both desktop sidebar and mobile drawer) */
  sidebarItems: SidebarItem[];
  /** Current active path for highlighting */
  currentPath?: string;
  /** Handler for navigation clicks */
  onNavigate?: (href: string) => void;
  /** Header component for sidebar (logo, branding, etc.) */
  header?: React.ReactNode;
  /** User profile button for sidebar footer */
  userProfile?: React.ReactNode;
  /** Additional sidebar content */
  sidebarFooter?: React.ReactNode;
  
  // Mobile header props
  /** Title displayed in mobile header (required for mobile layout) */
  title: string;
  /** Subtitle displayed in mobile header */
  subtitle?: string;
  /** Right action for mobile header */
  headerRightAction?: React.ReactNode;
  /** Custom left action for mobile header (overrides menu button) */
  headerLeftAction?: React.ReactNode;
  /** Mobile header variant */
  headerVariant?: MobileHeaderProps['variant'];
  
  // Bottom navigation props
  /** Bottom navigation items for mobile (if not provided, uses sidebarItems) */
  bottomNavItems?: BottomNavItem[];
  /** Active bottom nav item ID */
  activeBottomNavId?: string;
  /** Show labels on bottom nav */
  showBottomNavLabels?: boolean;
  
  // Layout options
  /** Optional status bar component displayed at the bottom (desktop only) */
  statusBar?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Page sections for navigation dots in desktop gutter */
  sections?: Section[];
  /** Force mobile layout even on desktop */
  forceMobile?: boolean;
  /** Force desktop layout even on mobile */
  forceDesktop?: boolean;
  /** Hide bottom navigation on mobile */
  hideBottomNav?: boolean;
  /** Hide mobile header */
  hideMobileHeader?: boolean;
  /** Use safe area insets for notched devices */
  safeArea?: boolean;
}

/**
 * MobileLayout - Auto-responsive layout that switches between desktop and mobile patterns
 *
 * This component automatically detects the viewport size and renders the appropriate layout:
 * - **Desktop** (≥1024px): Standard Layout with sidebar, gutter, and scrollable content
 * - **Mobile/Tablet** (<1024px): Mobile header, drawer navigation, bottom tab bar
 *
 * The mobile layout features:
 * - Sticky header with hamburger menu to open drawer
 * - Sidebar rendered as a slide-in drawer
 * - Bottom navigation bar for primary navigation
 * - Safe area support for notched devices
 *
 * @example Basic usage
 * ```tsx
 * <MobileLayout
 *   sidebarItems={[
 *     { id: 'home', label: 'Home', icon: <Home />, href: '/' },
 *     { id: 'tasks', label: 'Tasks', icon: <CheckSquare />, href: '/tasks' },
 *     { id: 'settings', label: 'Settings', icon: <Settings />, href: '/settings' }
 *   ]}
 *   currentPath={location.pathname}
 *   onNavigate={(href) => navigate(href)}
 *   title="My App"
 *   header={<Logo />}
 *   userProfile={<UserProfileButton user={user} />}
 * >
 *   <Page>
 *     <h1>Dashboard</h1>
 *   </Page>
 * </MobileLayout>
 * ```
 *
 * @example With custom bottom nav items
 * ```tsx
 * <MobileLayout
 *   sidebarItems={fullNavItems}
 *   bottomNavItems={[
 *     { id: 'home', label: 'Home', icon: <Home />, href: '/' },
 *     { id: 'search', label: 'Search', icon: <Search />, href: '/search' },
 *     { id: 'profile', label: 'Profile', icon: <User />, href: '/profile' }
 *   ]}
 *   currentPath={location.pathname}
 *   title="My App"
 * >
 *   {children}
 * </MobileLayout>
 * ```
 *
 * @example Force mobile layout for testing
 * ```tsx
 * <MobileLayout
 *   sidebarItems={items}
 *   title="Mobile Preview"
 *   forceMobile
 * >
 *   {children}
 * </MobileLayout>
 * ```
 */
export const MobileLayout: React.FC<MobileLayoutProps> = ({
  children,
  sidebarItems,
  currentPath,
  onNavigate,
  header,
  userProfile,
  sidebarFooter,
  title,
  subtitle,
  headerRightAction,
  headerLeftAction,
  headerVariant = 'solid',
  bottomNavItems,
  activeBottomNavId,
  showBottomNavLabels = true,
  statusBar,
  className = '',
  sections,
  forceMobile = false,
  forceDesktop = false,
  hideBottomNav = false,
  hideMobileHeader = false,
  safeArea = true,
}) => {
  const isMobileViewport = useIsMobile();
  const isTabletViewport = useIsTablet();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Determine if we should use mobile layout
  const useMobileLayout = forceDesktop 
    ? false 
    : forceMobile || isMobileViewport || isTabletViewport;

  // Open/close drawer
  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  // Handle navigation from drawer - close drawer after navigation
  const handleDrawerNavigate = useCallback((href: string) => {
    closeDrawer();
    onNavigate?.(href);
  }, [closeDrawer, onNavigate]);

  // Handle bottom nav navigation - matches BottomNavigation's onNavigate signature
  const handleBottomNavNavigate = useCallback((id: string, href?: string) => {
    if (href) {
      onNavigate?.(href);
    }
    // Also check if there's a custom onClick in the bottom nav items
    const item = bottomNavItems?.find(i => i.id === id);
    item?.onClick?.();
  }, [onNavigate, bottomNavItems]);

  // Convert sidebar items to bottom nav items if not provided
  const effectiveBottomNavItems: BottomNavItem[] = bottomNavItems || sidebarItems
    .filter(item => !item.children && item.href) // Only top-level items with href
    .slice(0, 5) // Max 5 items for bottom nav
    .map(item => ({
      id: item.id,
      label: item.label,
      icon: item.icon,
      href: item.href,
      badge: typeof item.badge === 'number' ? item.badge : undefined,
    }));

  // Determine active bottom nav ID
  const effectiveActiveBottomNavId = activeBottomNavId || 
    effectiveBottomNavItems.find(item => item.href === currentPath)?.id;

  // Close drawer on escape key
  useEffect(() => {
    if (!drawerOpen) return;
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeDrawer();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [drawerOpen, closeDrawer]);

  // Desktop Layout
  if (!useMobileLayout) {
    return (
      <div className={`h-screen flex flex-col bg-paper-100 ${className}`}>
        {/* Main layout - sidebar, gutter, and content */}
        <div className="flex flex-1 overflow-hidden relative">
          {/* Sidebar */}
          <Sidebar
            items={sidebarItems}
            currentPath={currentPath}
            onNavigate={onNavigate}
            header={header}
            footer={
              <>
                {userProfile}
                {sidebarFooter}
              </>
            }
          />

          {/* Gutter area - between sidebar and content with page navigation */}
          <div className="w-8 h-full bg-paper-100 flex-shrink-0 relative flex items-center justify-center">
            <PageNavigation sections={sections} />
          </div>

          {/* Main content area - scrollable */}
          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </div>

        {/* Status Bar - at bottom (optional) */}
        {statusBar}
      </div>
    );
  }

  // Mobile Layout
  return (
    <div className={`min-h-screen flex flex-col bg-paper-100 ${className}`}>
      {/* Mobile Header */}
      {!hideMobileHeader && (
        <MobileHeader
          title={title}
          subtitle={subtitle}
          onMenuClick={headerLeftAction ? undefined : openDrawer}
          leftAction={headerLeftAction}
          rightAction={headerRightAction}
          variant={headerVariant}
          sticky
          bordered
          safeArea={safeArea}
        />
      )}

      {/* Drawer Sidebar */}
      <Sidebar
        items={sidebarItems}
        currentPath={currentPath}
        onNavigate={handleDrawerNavigate}
        header={header}
        footer={
          <>
            {userProfile}
            {sidebarFooter}
          </>
        }
        mobileOpen={drawerOpen}
        onMobileClose={closeDrawer}
      />

      {/* Main content area */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>

      {/* Bottom Navigation */}
      {!hideBottomNav && effectiveBottomNavItems.length > 0 && (
        <>
          <BottomNavigationSpacer />
          <BottomNavigation
            items={effectiveBottomNavItems}
            activeId={effectiveActiveBottomNavId}
            onNavigate={handleBottomNavNavigate}
            showLabels={showBottomNavLabels}
            safeArea={safeArea}
          />
        </>
      )}
    </div>
  );
};

export default MobileLayout;
