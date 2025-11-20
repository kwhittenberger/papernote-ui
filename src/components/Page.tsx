// Page Component - Provides notebook-style page layout with max-width and padding
// Use this to wrap your page content for proper layout

import React from 'react';

export interface PageProps {
  /** Page content */
  children: React.ReactNode;
  /** Maximum width of the page content (default: 1600px) */
  maxWidth?: '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  /** Custom className */
  className?: string;
  /** Padding size (default: 'normal') */
  padding?: 'none' | 'sm' | 'normal' | 'lg';
}

/**
 * Page component that provides consistent page layout styling:
 * - Constrained max-width for readability
 * - Centered content
 * - Consistent padding
 * - Notebook-style background with ruled lines and red margin
 *
 * Wrap your page content with this component for proper layout.
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
