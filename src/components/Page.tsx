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
  maxWidth: _maxWidth = '7xl',
  className = '',
  padding: _padding = 'normal'
}) => {

  return (
    <div className="min-h-screen bg-paper-100">
      <div className={`notebook-page notebook-margin notebook-ruled ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Page;
