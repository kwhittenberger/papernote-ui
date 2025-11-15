// TwoColumnContent Component - Two-column layout for page content
// Provides a sidebar (1/3 width) and main content (2/3 width) layout pattern

import React from 'react';

export interface TwoColumnContentProps {
  /** Content for the left sidebar column */
  sidebar: React.ReactNode;
  /** Content for the main content column */
  children: React.ReactNode;
  /** Custom className for the container */
  className?: string;
}

/**
 * Two-column content layout component that provides:
 * - Sidebar column on the left (takes 1/3 of width)
 * - Main content column on the right (takes 2/3 of width)
 * - Responsive gap between columns
 * - Vertical stacking of content within each column
 *
 * This component uses a 6-column grid internally for precise control.
 */
export const TwoColumnContent: React.FC<TwoColumnContentProps> = ({
  sidebar,
  children,
  className = '',
}) => {
  return (
    <div className={`grid grid-cols-6 gap-6 ${className}`}>
      {/* Sidebar - 2 columns (1/3 width) */}
      <div className="col-span-2 space-y-6">
        {sidebar}
      </div>

      {/* Main Content - 4 columns (2/3 width) */}
      <div className="col-span-4 space-y-6">
        {children}
      </div>
    </div>
  );
};

export default TwoColumnContent;
