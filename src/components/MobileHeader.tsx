import React from 'react';
import { Menu, ChevronLeft, X } from 'lucide-react';

/**
 * MobileHeader component props
 */
export interface MobileHeaderProps {
  /** Page/section title */
  title: string;
  /** Subtitle or breadcrumb text */
  subtitle?: string;
  /** Handler for menu button click (hamburger) */
  onMenuClick?: () => void;
  /** Handler for back button click - shows back arrow instead of menu */
  onBackClick?: () => void;
  /** Handler for close button click - shows X instead of menu */
  onCloseClick?: () => void;
  /** Right side action element (button, icon, etc.) */
  rightAction?: React.ReactNode;
  /** Left side action element (overrides menu/back/close buttons) */
  leftAction?: React.ReactNode;
  /** Make header sticky at top */
  sticky?: boolean;
  /** Show border at bottom */
  bordered?: boolean;
  /** Background style */
  variant?: 'solid' | 'transparent' | 'blur';
  /** Additional CSS classes */
  className?: string;
  /** Safe area handling for notched devices */
  safeArea?: boolean;
}

/**
 * MobileHeader - Mobile app header with navigation controls
 * 
 * A flexible mobile header component with support for:
 * - Hamburger menu button (default)
 * - Back navigation arrow
 * - Close button (X)
 * - Custom left/right actions
 * - Sticky positioning
 * - Blur/transparent variants
 * 
 * @example Basic with menu button
 * ```tsx
 * <MobileHeader
 *   title="Dashboard"
 *   onMenuClick={() => setDrawerOpen(true)}
 * />
 * ```
 * 
 * @example With back button
 * ```tsx
 * <MobileHeader
 *   title="User Details"
 *   subtitle="Profile"
 *   onBackClick={() => navigate(-1)}
 * />
 * ```
 * 
 * @example With right action
 * ```tsx
 * <MobileHeader
 *   title="Settings"
 *   onMenuClick={openMenu}
 *   rightAction={
 *     <Button variant="ghost" iconOnly onClick={save}>
 *       <Check className="w-5 h-5" />
 *     </Button>
 *   }
 * />
 * ```
 * 
 * @example Transparent with blur
 * ```tsx
 * <MobileHeader
 *   title="Photo Gallery"
 *   variant="blur"
 *   onBackClick={goBack}
 * />
 * ```
 */
export default function MobileHeader({
  title,
  subtitle,
  onMenuClick,
  onBackClick,
  onCloseClick,
  rightAction,
  leftAction,
  sticky = true,
  bordered = true,
  variant = 'solid',
  className = '',
  safeArea = true,
}: MobileHeaderProps) {
  // Determine which left button to show
  const renderLeftButton = () => {
    // Custom left action takes priority
    if (leftAction) {
      return leftAction;
    }

    // Close button
    if (onCloseClick) {
      return (
        <button
          onClick={onCloseClick}
          className="
            flex items-center justify-center
            w-10 h-10 -ml-2
            text-ink-600 hover:text-ink-900
            hover:bg-paper-100 rounded-full
            transition-colors duration-200
            active:bg-paper-200
          "
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
      );
    }

    // Back button
    if (onBackClick) {
      return (
        <button
          onClick={onBackClick}
          className="
            flex items-center justify-center
            w-10 h-10 -ml-2
            text-ink-600 hover:text-ink-900
            hover:bg-paper-100 rounded-full
            transition-colors duration-200
            active:bg-paper-200
          "
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      );
    }

    // Menu button (default)
    if (onMenuClick) {
      return (
        <button
          onClick={onMenuClick}
          className="
            flex items-center justify-center
            w-10 h-10 -ml-2
            text-ink-600 hover:text-ink-900
            hover:bg-paper-100 rounded-full
            transition-colors duration-200
            active:bg-paper-200
          "
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      );
    }

    // No left button
    return <div className="w-10 h-10" />;
  };

  // Background variant styles
  const variantStyles = {
    solid: 'bg-white',
    transparent: 'bg-transparent',
    blur: 'bg-white/80 backdrop-blur-md',
  };

  return (
    <header
      className={`
        ${sticky ? 'sticky top-0 z-30' : ''}
        ${safeArea ? 'pt-[env(safe-area-inset-top)]' : ''}
        ${variantStyles[variant]}
        ${bordered ? 'border-b border-paper-200' : ''}
        ${className}
      `}
    >
      <div className="flex items-center justify-between h-14 px-4">
        {/* Left section */}
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {renderLeftButton()}

          {/* Title area */}
          <div className="flex flex-col min-w-0 flex-1">
            {subtitle && (
              <span className="text-xs text-ink-500 truncate">
                {subtitle}
              </span>
            )}
            <h1 className="text-lg font-semibold text-ink-900 truncate leading-tight">
              {title}
            </h1>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-1 ml-2 flex-shrink-0">
          {rightAction}
        </div>
      </div>
    </header>
  );
}

/**
 * MobileHeaderSpacer - Spacer to prevent content from being hidden behind sticky MobileHeader
 * 
 * Place this at the top of your content when NOT using sticky header
 * to maintain consistent spacing.
 * 
 * @example
 * ```tsx
 * <MobileHeader title="Page" sticky={false} />
 * <MobileHeaderSpacer />
 * <main>Content here</main>
 * ```
 */
export function MobileHeaderSpacer({ safeArea = true }: { safeArea?: boolean }) {
  return (
    <div
      className={`h-14 ${safeArea ? 'pt-[env(safe-area-inset-top)]' : ''}`}
      aria-hidden="true"
    />
  );
}
