import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from './Badge';

export interface CollapsibleSectionProps {
  /** Section title displayed in the header */
  title: string;
  /** Optional icon displayed before the title */
  icon?: ReactNode;
  /** Badge content shown next to title (typically a count) */
  badge?: number | string;
  /** Badge color variant */
  badgeVariant?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  /** URL for "View All" link (uses react-router Link) */
  viewAllHref?: string;
  /** Custom label for the view all link */
  viewAllLabel?: string;
  /** Callback when "View All" is clicked (alternative to href) */
  onViewAll?: () => void;
  /** Initial open state (uncontrolled) */
  defaultOpen?: boolean;
  /** Controlled open state */
  open?: boolean;
  /** Callback when open state changes (for persistence) */
  onOpenChange?: (open: boolean) => void;
  /** Section content */
  children: ReactNode;
  /** Additional CSS classes for the container */
  className?: string;
}

/**
 * CollapsibleSection - A card-style collapsible container for dashboard sections
 * 
 * Wraps content with a styled header that includes title, optional icon, badge count,
 * and "View All" navigation. Supports both controlled and uncontrolled modes for
 * localStorage persistence via onOpenChange callback.
 * 
 * @example Basic usage
 * ```tsx
 * <CollapsibleSection 
 *   title="Upcoming Bills" 
 *   badge={5} 
 *   badgeVariant="warning"
 *   viewAllHref="/bills"
 * >
 *   <BillsList bills={upcomingBills} />
 * </CollapsibleSection>
 * ```
 * 
 * @example With localStorage persistence
 * ```tsx
 * const [isOpen, setIsOpen] = useState(() => 
 *   localStorage.getItem('section-open') !== 'false'
 * );
 * 
 * <CollapsibleSection
 *   title="Pending Items"
 *   badge={pendingCount}
 *   open={isOpen}
 *   onOpenChange={(open) => {
 *     setIsOpen(open);
 *     localStorage.setItem('section-open', String(open));
 *   }}
 * >
 *   {children}
 * </CollapsibleSection>
 * ```
 */
export function CollapsibleSection({
  title,
  icon,
  badge,
  badgeVariant = 'neutral',
  viewAllHref,
  viewAllLabel = 'View All',
  onViewAll,
  defaultOpen = true,
  open: controlledOpen,
  onOpenChange,
  children,
  className = '',
}: CollapsibleSectionProps) {
  const isControlled = controlledOpen !== undefined;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  const handleToggle = () => {
    const newOpen = !isOpen;

    if (!isControlled) {
      setInternalOpen(newOpen);
    }

    onOpenChange?.(newOpen);
  };

  const handleViewAllClick = (e: React.MouseEvent) => {
    if (onViewAll) {
      e.preventDefault();
      onViewAll();
    }
  };

  // Update height when content changes or open state changes
  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, children]);

  // Recalculate height when window resizes
  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const ViewAllContent = (
    <>
      <span>{viewAllLabel}</span>
      <ExternalLink className="h-3.5 w-3.5" />
    </>
  );

  return (
    <div
      className={`
        bg-white bg-subtle-grain border-2 border-paper-300 rounded-xl shadow-sm
        ${className}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-paper-200">
        {/* Left side: Toggle + Icon + Title + Badge */}
        <button
          type="button"
          onClick={handleToggle}
          className="flex items-center gap-3 text-left flex-1 min-w-0 group"
          aria-expanded={isOpen}
        >
          <ChevronDown
            className={`
              h-5 w-5 text-ink-400 transition-transform duration-200 flex-shrink-0
              group-hover:text-ink-600
              ${isOpen ? 'rotate-0' : '-rotate-90'}
            `}
          />
          
          {icon && (
            <span className="flex-shrink-0 text-ink-500">
              {icon}
            </span>
          )}
          
          <span className="font-medium text-ink-900 truncate">
            {title}
          </span>
          
          {badge !== undefined && (
            <Badge variant={badgeVariant} size="sm" pill>
              {badge}
            </Badge>
          )}
        </button>

        {/* Right side: View All link */}
        {(viewAllHref || onViewAll) && (
          viewAllHref ? (
            <Link
              to={viewAllHref}
              onClick={onViewAll ? handleViewAllClick : undefined}
              className="flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-medium flex-shrink-0 ml-4"
            >
              {ViewAllContent}
            </Link>
          ) : (
            <button
              onClick={onViewAll}
              className="flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-medium flex-shrink-0 ml-4"
            >
              {ViewAllContent}
            </button>
          )
        )}
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: `${height}px` }}
        aria-hidden={!isOpen}
      >
        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  );
}

export default CollapsibleSection;
