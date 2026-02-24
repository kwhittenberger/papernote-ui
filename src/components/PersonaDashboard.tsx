import React from 'react';

// =============================================================================
// Types & Interfaces
// =============================================================================

export interface DashboardWidget {
  /** Widget unique ID */
  id: string;
  /** Widget display name */
  name: string;
  /** Widget size */
  size: 'sm' | 'md' | 'lg' | 'full';
  /** Render function for widget content */
  render: () => React.ReactNode;
}

export interface PersonaDashboardProps {
  /** Persona display name */
  personaName: string;
  /** System action summary component (hero position) */
  systemSummary?: React.ReactNode;
  /** Pending attention component */
  pendingAttention?: React.ReactNode;
  /** Process health indicators */
  processHealth?: React.ReactNode;
  /** Persona-specific widgets */
  widgets: DashboardWidget[];
  /** Additional className */
  className?: string;
}

// =============================================================================
// Helpers
// =============================================================================

const sizeClasses: Record<string, string> = {
  sm: 'col-span-1',
  md: 'col-span-1 md:col-span-2',
  lg: 'col-span-1 md:col-span-2 lg:col-span-3',
  full: 'col-span-full',
};

// =============================================================================
// Component
// =============================================================================

/**
 * PersonaDashboard — Adaptive dashboard shell for persona-specific widgets
 *
 * Provides the common dashboard structure:
 * 1. System action summary (hero, persona-filtered)
 * 2. Pending attention items
 * 3. Process health indicators
 * 4. Persona-specific widgets in a responsive grid
 *
 * Used as the layout container on the Home page, populated with
 * role-specific widgets based on the resolved persona.
 */
export default function PersonaDashboard({
  personaName,
  systemSummary,
  pendingAttention,
  processHealth,
  widgets,
  className = '',
}: PersonaDashboardProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* System Action Summary — Hero position */}
      {systemSummary && (
        <section aria-label="System actions">
          {systemSummary}
        </section>
      )}

      {/* Pending Attention */}
      {pendingAttention && (
        <section aria-label="Items needing attention">
          {pendingAttention}
        </section>
      )}

      {/* Process Health */}
      {processHealth && (
        <section aria-label="Process health">
          {processHealth}
        </section>
      )}

      {/* Persona Widgets Grid */}
      {widgets.length > 0 && (
        <section aria-label={`${personaName} dashboard widgets`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {widgets.map(widget => (
              <div key={widget.id} className={sizeClasses[widget.size]}>
                {widget.render()}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
