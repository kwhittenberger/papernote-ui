import React from 'react';

/**
 * Bottom navigation item configuration
 */
export interface BottomNavItem {
  /** Unique identifier for the nav item */
  id: string;
  /** Display label */
  label: string;
  /** Icon element (use lucide-react icons) */
  icon: React.ReactNode;
  /** Navigation URL (optional) */
  href?: string;
  /** Badge count for notifications */
  badge?: number;
  /** Click handler (alternative to href) */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
}

/**
 * BottomNavigation component props
 */
export interface BottomNavigationProps {
  /** Navigation items (max 5 recommended) */
  items: BottomNavItem[];
  /** Currently active item ID */
  activeId?: string;
  /** Navigation handler - receives item ID and href */
  onNavigate?: (id: string, href?: string) => void;
  /** Show labels below icons */
  showLabels?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Safe area handling for notched devices */
  safeArea?: boolean;
}

/**
 * BottomNavigation - Mobile-style bottom tab bar
 * 
 * iOS/Android-style fixed bottom navigation with icons, labels, and badges.
 * Handles safe area insets for notched devices automatically.
 * 
 * Best practices:
 * - Use 3-5 items maximum
 * - Keep labels short (1-2 words)
 * - Use consistent icon style
 * 
 * @example Basic usage
 * ```tsx
 * import { BottomNavigation } from 'notebook-ui';
 * import { Home, Search, Bell, User } from 'lucide-react';
 * 
 * const navItems = [
 *   { id: 'home', label: 'Home', icon: <Home />, href: '/' },
 *   { id: 'search', label: 'Search', icon: <Search />, href: '/search' },
 *   { id: 'notifications', label: 'Alerts', icon: <Bell />, badge: 3 },
 *   { id: 'profile', label: 'Profile', icon: <User />, href: '/profile' },
 * ];
 * 
 * <BottomNavigation
 *   items={navItems}
 *   activeId="home"
 *   onNavigate={(id, href) => navigate(href)}
 * />
 * ```
 * 
 * @example With onClick handlers
 * ```tsx
 * const navItems = [
 *   { id: 'home', label: 'Home', icon: <Home />, onClick: () => setTab('home') },
 *   { id: 'add', label: 'Add', icon: <Plus />, onClick: openAddModal },
 * ];
 * 
 * <BottomNavigation items={navItems} activeId={currentTab} />
 * ```
 */
export default function BottomNavigation({
  items,
  activeId,
  onNavigate,
  showLabels = true,
  className = '',
  safeArea = true,
}: BottomNavigationProps) {
  const handleItemClick = (item: BottomNavItem) => {
    if (item.disabled) return;
    
    if (item.onClick) {
      item.onClick();
    }
    
    if (onNavigate) {
      onNavigate(item.id, item.href);
    }
  };

  return (
    <nav
      className={`
        fixed bottom-0 left-0 right-0 z-40
        bg-white border-t border-paper-200 shadow-lg
        ${safeArea ? 'pb-[env(safe-area-inset-bottom)]' : ''}
        ${className}
      `}
      role="navigation"
      aria-label="Bottom navigation"
    >
      <div className="flex items-center justify-around h-14 max-w-lg mx-auto px-2">
        {items.map((item) => {
          const isActive = item.id === activeId;
          
          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              disabled={item.disabled}
              className={`
                relative flex flex-col items-center justify-center
                flex-1 h-full min-w-touch-sm
                transition-colors duration-200
                ${item.disabled 
                  ? 'opacity-40 cursor-not-allowed' 
                  : 'active:bg-paper-100'
                }
                ${isActive
                  ? 'text-accent-600'
                  : 'text-ink-500 hover:text-ink-700'
                }
              `}
              aria-current={isActive ? 'page' : undefined}
              aria-label={item.label}
            >
              {/* Icon container */}
              <div className="relative">
                {/* Icon */}
                <div
                  className={`
                    w-6 h-6 flex items-center justify-center
                    transition-transform duration-200
                    ${isActive ? 'scale-110' : 'scale-100'}
                  `}
                >
                  {React.isValidElement(item.icon)
                    ? React.cloneElement(item.icon as React.ReactElement<any>, {
                        className: 'w-6 h-6',
                      })
                    : item.icon}
                </div>

                {/* Badge */}
                {item.badge !== undefined && item.badge > 0 && (
                  <span
                    className={`
                      absolute -top-1 -right-2.5
                      min-w-[18px] h-[18px] px-1
                      flex items-center justify-center
                      text-[10px] font-bold text-white
                      bg-error-500 rounded-full
                      ${item.badge > 99 ? 'text-[8px]' : ''}
                    `}
                  >
                    {item.badge > 99 ? '99+' : item.badge}
                  </span>
                )}
              </div>

              {/* Label */}
              {showLabels && (
                <span
                  className={`
                    mt-1 text-[10px] font-medium leading-none
                    transition-opacity duration-200
                    truncate max-w-full px-1
                    ${isActive ? 'opacity-100' : 'opacity-70'}
                  `}
                >
                  {item.label}
                </span>
              )}

              {/* Active indicator */}
              {isActive && (
                <div
                  className="
                    absolute top-0 left-1/2 -translate-x-1/2
                    w-8 h-0.5 bg-accent-500 rounded-full
                  "
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

/**
 * BottomNavigationSpacer - Spacer to prevent content from being hidden behind BottomNavigation
 * 
 * Place this at the bottom of your scrollable content when using BottomNavigation.
 * 
 * @example
 * ```tsx
 * <div className="flex flex-col h-screen">
 *   <main className="flex-1 overflow-auto">
 *     {/* Your content *\/}
 *     <BottomNavigationSpacer />
 *   </main>
 *   <BottomNavigation items={navItems} />
 * </div>
 * ```
 */
export function BottomNavigationSpacer({ safeArea = true }: { safeArea?: boolean }) {
  return (
    <div
      className={`h-14 ${safeArea ? 'pb-[env(safe-area-inset-bottom)]' : ''}`}
      aria-hidden="true"
    />
  );
}
