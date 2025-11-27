import { ReactNode } from 'react';
import { X } from 'lucide-react';

export interface ActionBarAction {
  /** Unique identifier for the action */
  id: string;
  /** Button label text */
  label: string;
  /** Icon to display (from lucide-react) */
  icon?: ReactNode;
  /** Click handler */
  onClick: () => void;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
  /** Disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
}

export interface ActionBarProps {
  /** Content to display on the left side (e.g., selection count, status text) */
  leftContent?: ReactNode;
  /** Content to display in the center */
  centerContent?: ReactNode;
  /** Content to display on the right side (overrides actions) */
  rightContent?: ReactNode;
  /** Action buttons to display on the right */
  actions?: ActionBarAction[];
  /** Position of the action bar */
  position?: 'top' | 'bottom';
  /** Make the bar sticky */
  sticky?: boolean;
  /** Show the action bar (useful for conditional display like bulk selection) */
  visible?: boolean;
  /** Callback when close/dismiss button is clicked */
  onDismiss?: () => void;
  /** Show dismiss button */
  showDismiss?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Background variant */
  variant?: 'default' | 'primary' | 'warning' | 'info';
  /** Compact mode with less padding */
  compact?: boolean;
}

/**
 * ActionBar - Flexible toolbar for page-level and contextual actions
 *
 * A versatile action container that can be used for:
 * - Bulk actions when rows are selected
 * - Page-level actions and controls
 * - Form action buttons (Save/Cancel)
 * - Contextual toolbars
 *
 * @example Basic bulk actions bar
 * ```tsx
 * <ActionBar
 *   visible={selectedIds.length > 0}
 *   leftContent={<Text weight="medium">{selectedIds.length} selected</Text>}
 *   actions={[
 *     { id: 'export', label: 'Export', icon: <Download />, onClick: handleExport },
 *     { id: 'delete', label: 'Delete', icon: <Trash />, onClick: handleDelete, variant: 'danger' },
 *   ]}
 *   onDismiss={() => setSelectedIds([])}
 *   showDismiss
 * />
 * ```
 *
 * @example Sticky bottom form actions
 * ```tsx
 * <ActionBar
 *   position="bottom"
 *   sticky
 *   rightContent={
 *     <>
 *       <Button variant="ghost" onClick={handleCancel}>Cancel</Button>
 *       <Button variant="primary" onClick={handleSave} loading={isSaving}>Save Changes</Button>
 *     </>
 *   }
 * />
 * ```
 *
 * @example Info bar with center content
 * ```tsx
 * <ActionBar
 *   variant="info"
 *   centerContent={
 *     <Text size="sm">Showing results for "search term" - 42 items found</Text>
 *   }
 *   onDismiss={clearSearch}
 *   showDismiss
 * />
 * ```
 */
export default function ActionBar({
  leftContent,
  centerContent,
  rightContent,
  actions,
  position = 'top',
  sticky = false,
  visible = true,
  onDismiss,
  showDismiss = false,
  className = '',
  variant = 'default',
  compact = false,
}: ActionBarProps) {
  if (!visible) {
    return null;
  }

  const variantStyles = {
    default: 'bg-white border-paper-200',
    primary: 'bg-accent-50 border-accent-200',
    warning: 'bg-warning-50 border-warning-200',
    info: 'bg-blue-50 border-blue-200',
  };

  const buttonVariantStyles: Record<string, string> = {
    primary: 'bg-accent-500 text-white border-accent-500 hover:bg-accent-600 hover:shadow-sm',
    secondary: 'bg-white text-ink-700 border-paper-300 hover:bg-paper-50 hover:border-paper-400 shadow-xs hover:shadow-sm',
    ghost: 'bg-transparent text-ink-600 border-transparent hover:text-ink-800 hover:bg-paper-100',
    danger: 'bg-error-500 text-white border-error-500 hover:bg-error-600 hover:shadow-sm',
    outline: 'bg-transparent text-ink-700 border-paper-300 hover:bg-paper-50 hover:border-ink-400',
  };

  const positionStyles = {
    top: sticky ? 'sticky top-0 z-40 border-b' : 'border-b',
    bottom: sticky ? 'sticky bottom-0 z-40 border-t' : 'border-t',
  };

  return (
    <div
      className={`
        ${variantStyles[variant]}
        ${positionStyles[position]}
        ${compact ? 'px-4 py-2' : 'px-6 py-3'}
        ${className}
      `}
      role="toolbar"
      aria-label="Action bar"
    >
      <div className="flex items-center justify-between gap-4">
        {/* Left section */}
        <div className="flex items-center gap-3 min-w-0 flex-shrink-0">
          {showDismiss && onDismiss && (
            <button
              onClick={onDismiss}
              className="
                flex items-center justify-center
                w-8 h-8 rounded-full
                text-ink-400 hover:text-ink-600
                hover:bg-paper-100
                transition-colors
              "
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          {leftContent}
        </div>

        {/* Center section */}
        {centerContent && (
          <div className="flex-1 flex items-center justify-center min-w-0">
            {centerContent}
          </div>
        )}

        {/* Right section */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {rightContent}
          {actions && actions.map((action) => (
            <button
              key={action.id}
              onClick={action.onClick}
              disabled={action.disabled || action.loading}
              className={`
                inline-flex items-center justify-center gap-2
                px-3 py-1.5 text-sm font-medium rounded-lg border
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-400
                disabled:opacity-40 disabled:cursor-not-allowed
                ${buttonVariantStyles[action.variant || 'secondary']}
              `}
            >
              {action.loading ? (
                <svg
                  className="h-4 w-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : action.icon ? (
                <span className="h-4 w-4">{action.icon}</span>
              ) : null}
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * ActionBar.Left - Semantic wrapper for left content
 */
export function ActionBarLeft({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

/**
 * ActionBar.Center - Semantic wrapper for center content
 */
export function ActionBarCenter({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

/**
 * ActionBar.Right - Semantic wrapper for right content
 */
export function ActionBarRight({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
