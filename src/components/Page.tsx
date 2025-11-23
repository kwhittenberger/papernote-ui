// Page Component - Provides notebook-style page layout with max-width and padding
// Use this to wrap your page content for proper layout

import React from 'react';

export interface PageProps {
  /** Page content */
  children: React.ReactNode;
  /** Maximum width constraint for the page content (default: '7xl' = 1400px) */
  maxWidth?: '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  /** Additional CSS classes to apply to the page wrapper */
  className?: string;
  /** Padding size around the content (default: 'normal') */
  padding?: 'none' | 'sm' | 'normal' | 'lg';
  /** Fix all margins/padding instead of responsive (default: false) */
  fixed?: boolean;
}

/**
 * Page - Notebook-style page container with paper aesthetic
 *
 * The foundational layout component that provides authentic notebook styling including:
 * - **Paper texture** - Subtle grain background (bg-subtle-grain)
 * - **Ruled lines** - Horizontal lines every 2rem (notebook-ruled class)
 * - **Red margin line** - Subtle red vertical line on the left at 3rem (notebook-margin class)
 * - **Shadow & depth** - Elevated paper appearance with shadow-lg
 * - **Left border** - 4px binding edge effect
 * - **Constrained width** - Max-width of 1400px for readability
 *
 * This is the lowest-level layout component. Most applications should use PageLayout or
 * Layout components which wrap Page and add additional structure.
 *
 * @example
 * ```tsx
 * <Page>
 *   <h1>My Page Title</h1>
 *   <Card>
 *     <CardContent>Your content here</CardContent>
 *   </Card>
 * </Page>
 * ```
 *
 * @example With PageLayout (recommended for most cases)
 * ```tsx
 * <PageLayout title="Dashboard" description="Overview">
 *   <Card>Content here</Card>
 * </PageLayout>
 * ```
 */
export const Page: React.FC<PageProps> = ({
  children,
  maxWidth = '7xl',
  className = '',
  padding = 'normal',
  fixed = false
}) => {
  // Max width classes
  const maxWidthClasses = {
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    'full': 'max-w-full',
  };

  // Padding classes - responsive (fixed left/top, responsive right/bottom) vs all fixed
  const paddingClasses = {
    none: fixed ? 'p-0' : 'pt-0 pl-0 pr-0 pb-0',
    sm: fixed ? 'p-4' : 'pt-4 pl-4 pr-4 pb-4 sm:pr-6 md:pr-8 sm:pb-6 md:pb-8',
    normal: fixed ? 'pt-12 pl-20 pr-16 pb-12' : 'pt-12 pl-20 pr-4 pb-4 sm:pr-8 md:pr-12 lg:pr-16 sm:pb-8 md:pb-12 lg:pb-16',
    lg: fixed ? 'pt-16 pl-24 pr-20 pb-16' : 'pt-16 pl-24 pr-6 pb-6 sm:pr-12 md:pr-16 lg:pr-20 sm:pb-12 md:pb-16 lg:pb-20',
  };

  // Margin classes - responsive (fixed left/top, responsive right/bottom) vs all fixed
  const marginClasses = fixed
    ? 'mt-4 ml-4 mr-4 mb-4'
    : 'mt-4 ml-4 mr-4 mb-4 sm:mr-6 md:mr-8 lg:mr-auto sm:mb-6 md:mb-8';

  return (
    <div className="min-h-screen bg-paper-100">
      <div className={`
        bg-white bg-subtle-grain rounded-sm shadow-lg border-l-4 border-paper-300
        min-h-[calc(100vh-2rem)] relative
        notebook-margin notebook-ruled
        ${maxWidthClasses[maxWidth]}
        ${paddingClasses[padding]}
        ${marginClasses}
        ${className}
      `.trim().replace(/\s+/g, ' ')}>
        {children}
      </div>
    </div>
  );
};

export default Page;
