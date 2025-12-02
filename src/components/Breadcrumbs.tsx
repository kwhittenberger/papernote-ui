import React, { useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/** State passed during breadcrumb navigation */
export interface BreadcrumbNavigationState {
  /** Unique timestamp to detect navigation, even to the same route */
  breadcrumbReset: number;
  /** Identifies the source of navigation */
  from: 'breadcrumb';
}

/**
 * Hook to detect breadcrumb navigation and trigger callbacks.
 * Use this in host components to reset state when a breadcrumb is clicked.
 * 
 * @param onReset - Callback fired when breadcrumb navigation is detected
 * 
 * @example
 * function ProductsPage() {
 *   const [viewMode, setViewMode] = useState<'list' | 'detail'>('list');
 *   
 *   // Automatically reset to list view when breadcrumb is clicked
 *   useBreadcrumbReset(() => setViewMode('list'));
 *   
 *   // ... rest of component
 * }
 */
export function useBreadcrumbReset(onReset: () => void): void {
  const location = useLocation();
  const lastResetRef = useRef<number | null>(null);

  useEffect(() => {
    const state = location.state as BreadcrumbNavigationState | null;
    
    if (state?.breadcrumbReset && state.breadcrumbReset !== lastResetRef.current) {
      lastResetRef.current = state.breadcrumbReset;
      onReset();
    }
  }, [location.state, onReset]);
}

export interface BreadcrumbItem {
  /** Display text for the breadcrumb */
  label: string;
  /** URL to navigate to. When provided, renders as a Link */
  href?: string;
  /** 
   * Optional callback fired when breadcrumb is clicked.
   * Called in addition to navigation when href is provided.
   * Use for custom actions like analytics, state resets, etc.
   */
  onClick?: () => void;
  /** Optional icon to display before the label */
  icon?: React.ReactNode;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Whether to show the home icon link at the start. Default: true */
  showHome?: boolean;
}

/**
 * Breadcrumbs navigation component.
 * 
 * When a breadcrumb with href is clicked:
 * - If navigating to a different route: standard navigation occurs
 * - If navigating to the same route: navigation state is updated with a unique key,
 *   which can be used by host apps to detect "reset" navigation via useLocation().state
 * 
 * @example
 * // Basic usage
 * <Breadcrumbs items={[
 *   { label: 'Home', href: '/' },
 *   { label: 'Products', href: '/products' },
 *   { label: 'Widget' }  // Current page (no href)
 * ]} />
 * 
 * @example
 * // Host app detecting breadcrumb navigation for state reset
 * function ProductsPage() {
 *   const location = useLocation();
 *   const [viewMode, setViewMode] = useState<'list' | 'detail'>('list');
 * 
 *   // Reset to list view when breadcrumb navigation occurs
 *   useEffect(() => {
 *     if (location.state?.breadcrumbReset) {
 *       setViewMode('list');
 *     }
 *   }, [location.state?.breadcrumbReset]);
 * 
 *   // ... rest of component
 * }
 */
export default function Breadcrumbs({ items, showHome = true }: BreadcrumbsProps) {
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Handle breadcrumb click with same-route detection.
   * When clicking a breadcrumb that points to the current route,
   * we navigate with state to trigger a reset in the host component.
   */
  const handleBreadcrumbClick = (
    e: React.MouseEvent,
    href: string,
    onClick?: () => void
  ) => {
    // Always call onClick if provided (for custom actions)
    onClick?.();

    // Check if we're navigating to the same base path
    const targetPath = href.split('?')[0].split('#')[0];
    const currentPath = location.pathname;

    if (targetPath === currentPath) {
      // Same route - prevent default Link behavior and use navigate with state
      e.preventDefault();
      navigate(href, { 
        state: { 
          breadcrumbReset: Date.now(),
          from: 'breadcrumb'
        },
        replace: true 
      });
    }
    // Different route - let the Link handle it normally
  };

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm">
      {showHome && (
        <>
          <Link
            to="/"
            className="text-ink-500 hover:text-ink-900 transition-colors"
            aria-label="Home"
            onClick={(e) => handleBreadcrumbClick(e, '/')}
          >
            <Home className="h-4 w-4" />
          </Link>
          {items.length > 0 && <ChevronRight className="h-4 w-4 text-ink-400" />}
        </>
      )}

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isActive = isLast;
        const content = (
          <>
            {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
            <span>{item.label}</span>
          </>
        );

        const renderBreadcrumb = () => {
          // Active item (last item) - always render as non-clickable span
          if (isActive) {
            return (
              <span
                className="flex items-center gap-2 px-2 py-1 rounded-md bg-accent-50 text-accent-900 font-semibold transition-colors"
                aria-current="page"
              >
                {content}
              </span>
            );
          }

          // Has href - render as Link with same-route detection
          if (item.href) {
            return (
              <Link
                to={item.href}
                onClick={(e) => handleBreadcrumbClick(e, item.href!, item.onClick)}
                className="flex items-center gap-2 text-ink-500 hover:text-ink-900 hover:underline transition-colors"
              >
                {content}
              </Link>
            );
          }

          // Only onClick (no href) - render as button
          if (item.onClick) {
            return (
              <button
                type="button"
                onClick={item.onClick}
                className="flex items-center gap-2 text-ink-500 hover:text-ink-900 hover:underline transition-colors bg-transparent border-none cursor-pointer p-0"
              >
                {content}
              </button>
            );
          }

          // Neither href nor onClick - render as non-clickable span
          return (
            <span className="flex items-center gap-2 text-ink-700 font-medium">
              {content}
            </span>
          );
        };

        return (
          <React.Fragment key={index}>
            {renderBreadcrumb()}
            {!isLast && <ChevronRight className="h-4 w-4 text-ink-400" />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
