import React from 'react';

/**
 * SkipLink component props
 */
export interface SkipLinkProps {
  /** The target element ID to skip to (without the # prefix) */
  targetId: string;
  /** Custom link text (default: "Skip to main content") */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * SkipLink - Accessibility skip link for keyboard navigation
 *
 * A skip link allows keyboard users to bypass repetitive navigation
 * and jump directly to the main content. The link is visually hidden
 * until focused, making it invisible to mouse users while remaining
 * accessible to keyboard and screen reader users.
 *
 * Place this component at the very beginning of your page layout,
 * before any navigation elements.
 *
 * @example Basic usage
 * ```tsx
 * // In your layout component:
 * <SkipLink targetId="main-content" />
 * <Navigation />
 * <main id="main-content">
 *   {children}
 * </main>
 * ```
 *
 * @example Custom text
 * ```tsx
 * <SkipLink targetId="content">Skip navigation</SkipLink>
 * ```
 *
 * @example Multiple skip links
 * ```tsx
 * <div>
 *   <SkipLink targetId="main-content">Skip to main content</SkipLink>
 *   <SkipLink targetId="search">Skip to search</SkipLink>
 * </div>
 * ```
 */
export default function SkipLink({
  targetId,
  children = 'Skip to main content',
  className = '',
}: SkipLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      // Set tabindex to make the element focusable if it isn't already
      if (!target.hasAttribute('tabindex')) {
        target.setAttribute('tabindex', '-1');
      }
      target.focus();
      // Scroll the element into view
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={`
        sr-only focus:not-sr-only
        focus:absolute focus:z-50
        focus:top-4 focus:left-4
        focus:px-4 focus:py-2
        focus:bg-accent-600 focus:text-white
        focus:rounded-lg focus:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-400
        font-medium text-sm
        transition-none
        ${className}
      `}
    >
      {children}
    </a>
  );
}
