// Dashboard Component - Structured dashboard layout for notebook-style pages
// Provides consistent header, content area, and grid layouts

import React from 'react';

export interface DashboardProps {
  /** Dashboard content */
  children: React.ReactNode;
  /** Custom className */
  className?: string;
}

export interface DashboardHeaderProps {
  /** Header title */
  title: string;
  /** Optional subtitle/description */
  subtitle?: string;
  /** Optional actions (buttons, etc.) */
  actions?: React.ReactNode;
  /** Custom className */
  className?: string;
}

export interface DashboardContentProps {
  /** Content */
  children: React.ReactNode;
  /** Custom className */
  className?: string;
}

/**
 * Dashboard container component.
 * Use this inside a Page component for proper notebook styling.
 */
export const Dashboard: React.FC<DashboardProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {children}
    </div>
  );
};

/**
 * Dashboard header with title, subtitle, and action buttons.
 */
export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  subtitle,
  actions,
  className = ''
}) => {
  return (
    <div className={`flex justify-between items-start mb-8 ${className}`}>
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-ink-900">{title}</h1>
        {subtitle && (
          <p className="text-sm text-ink-600">{subtitle}</p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-3">
          {actions}
        </div>
      )}
    </div>
  );
};

/**
 * Dashboard content area.
 */
export const DashboardContent: React.FC<DashboardContentProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Dashboard;
