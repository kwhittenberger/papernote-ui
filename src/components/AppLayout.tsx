import React from 'react';
import { ExpandableToolbar, type ToolbarSection } from './ExpandableToolbar';
import { StatusBar } from './StatusBar';

export interface AppLayoutProps {
  children: React.ReactNode;
  toolbarSections?: ToolbarSection[];
  className?: string;
  showToolbar?: boolean;
  showStatusBar?: boolean;
  toolbarCollapsed?: boolean;
  onToolbarCollapseChange?: (collapsed: boolean) => void;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  toolbarSections = [],
  className = '',
  showToolbar = true,
  showStatusBar = true,
  toolbarCollapsed = false,
  onToolbarCollapseChange
}) => {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      {/* Expandable Toolbar */}
      {showToolbar && toolbarSections.length > 0 && (
        <ExpandableToolbar
          sections={toolbarSections}
          defaultCollapsed={toolbarCollapsed}
          onCollapseChange={onToolbarCollapseChange}
        />
      )}

      {/* Main Content Area */}
      <main className={`${showStatusBar ? 'pb-20' : ''}`}>
        {children}
      </main>

      {/* Global Status Bar */}
      {showStatusBar && <StatusBar />}
    </div>
  );
};

export default AppLayout;
