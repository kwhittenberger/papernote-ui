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
  maxWidth = '7xl',
  className = '',
  padding = 'normal'
}) => {
  const maxWidthClasses = {
    '4xl': 'max-w-4xl',   // 896px
    '5xl': 'max-w-5xl',   // 1024px
    '6xl': 'max-w-6xl',   // 1152px
    '7xl': 'max-w-7xl',   // 1280px
    'full': 'max-w-full'
  };

  const paddingClasses = {
    'none': '',
    'sm': 'p-4',
    'normal': 'p-8',
    'lg': 'p-12'
  };

  return (
    <div className={`min-h-full bg-paper-100 p-8 ${className}`}>
      <div className={`${maxWidthClasses[maxWidth]} mx-auto ${paddingClasses[padding]} bg-white shadow-xl rounded-lg relative overflow-hidden`}>
        {/* Red margin line on the left - like a notebook */}
        <div className="absolute left-16 top-0 bottom-0 w-px bg-error-500"></div>

        {/* Ruled paper effect - subtle horizontal lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 31px, #000 31px, #000 32px)',
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 pl-20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;
