// Layout Component - Complete app layout with sidebar, gutter, and content
// This enforces the notebook-style page and gutter layout pattern

import React from 'react';
import { PageNavigation } from './PageNavigation';

interface Section {
  id: string;
  label: string;
}

export interface LayoutProps {
  /** Sidebar content (usually the Sidebar component) */
  sidebar: React.ReactNode;
  /** Main page content */
  children: React.ReactNode;
  /** Status bar component (optional) */
  statusBar?: React.ReactNode;
  /** Custom className for the layout container */
  className?: string;
  /** External sections for PageNavigation (e.g., from iframe PostMessage) */
  sections?: Section[];
}

/**
 * Complete app layout component that enforces notebook-style structure:
 * - Sidebar on the left (256px wide, flex-shrink-0)
 * - Gutter area between sidebar and content (64px wide) with page navigation dots
 * - Content area that scrolls independently
 * - Optional status bar at the bottom
 *
 * This component handles all layout concerns using flexbox.
 */
export const Layout: React.FC<LayoutProps> = ({
  sidebar,
  children,
  statusBar,
  className = '',
  sections
}) => {
  console.log('🏗️ Layout render with sections:', sections);
  
  return (
    <div className={`h-screen flex flex-col bg-paper-100 ${className}`}>
      {/* Main layout - sidebar, gutter, and content */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar - fixed width, no shrink */}
        {sidebar}

        {/* Gutter area - between sidebar and content with page navigation */}
        <div className="w-8 h-full bg-paper-100 flex-shrink-0 relative flex items-center justify-center">
          <PageNavigation sections={sections} />
        </div>

        {/* Main content area - scrollable */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>

      {/* Status Bar - at bottom (optional) */}
      {statusBar}
    </div>
  );
};

export default Layout;
