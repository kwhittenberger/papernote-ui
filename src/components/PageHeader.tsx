import { ReactNode } from 'react';
import Breadcrumbs, { BreadcrumbItem } from './Breadcrumbs';

export interface PageHeaderAction {
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
  /** Hide on mobile */
  hideOnMobile?: boolean;
}

export interface PageHeaderProps {
  /** Page title */
  title: string;
  /** Optional subtitle/description */
  subtitle?: string;
  /** Breadcrumb navigation items */
  breadcrumbs?: BreadcrumbItem[];
  /** Show home icon in breadcrumbs (default: true) */
  showHomeBreadcrumb?: boolean;
  /** Action buttons to display on the right */
  actions?: PageHeaderAction[];
  /** Custom content to render on the right (instead of actions) */
  rightContent?: ReactNode;
  /** Custom content to render below title */
  belowTitle?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Make header sticky at top */
  sticky?: boolean;
  /** Back button configuration */
  backButton?: {
    label?: string;
    onClick: () => void;
  };
}

/**
 * PageHeader - Standard page header with title, breadcrumbs, and actions
 *
 * A consistent header component for pages that provides:
 * - Page title and optional subtitle
 * - Breadcrumb navigation
 * - Action buttons (Create, Export, etc.)
 * - Optional back button
 * - Sticky positioning option
 *
 * @example Basic usage
 * ```tsx
 * <PageHeader
 *   title="Products"
 *   subtitle="Manage your product catalog"
 *   breadcrumbs={[{ label: 'Inventory' }, { label: 'Products' }]}
 *   actions={[
 *     { id: 'export', label: 'Export', icon: <Download />, onClick: handleExport, variant: 'ghost' },
 *     { id: 'add', label: 'Add Product', icon: <Plus />, onClick: handleAdd, variant: 'primary' },
 *   ]}
 * />
 * ```
 *
 * @example With back button
 * ```tsx
 * <PageHeader
 *   title="Edit Product"
 *   backButton={{ label: 'Back to Products', onClick: () => navigate('/products') }}
 * />
 * ```
 *
 * @example With custom right content
 * ```tsx
 * <PageHeader
 *   title="Dashboard"
 *   rightContent={<DateRangePicker value={range} onChange={setRange} />}
 * />
 * ```
 */
export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  showHomeBreadcrumb = true,
  actions,
  rightContent,
  belowTitle,
  className = '',
  sticky = false,
  backButton,
}: PageHeaderProps) {
  const variantStyles: Record<string, string> = {
    primary: 'bg-accent-500 text-white border-accent-500 hover:bg-accent-600 hover:shadow-sm',
    secondary: 'bg-white text-ink-700 border-paper-300 hover:bg-paper-50 hover:border-paper-400 shadow-xs hover:shadow-sm',
    ghost: 'bg-transparent text-ink-600 border-transparent hover:text-ink-800 hover:bg-paper-100',
    danger: 'bg-error-500 text-white border-error-500 hover:bg-error-600 hover:shadow-sm',
    outline: 'bg-transparent text-ink-700 border-paper-300 hover:bg-paper-50 hover:border-ink-400',
  };

  return (
    <div
      className={`
        bg-white border-b border-paper-200
        ${sticky ? 'sticky top-0 z-40' : ''}
        ${className}
      `}
    >
      <div className="px-6 py-4">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-3">
            <Breadcrumbs items={breadcrumbs} showHome={showHomeBreadcrumb} />
          </div>
        )}

        {/* Back button */}
        {backButton && (
          <div className="mb-3">
            <button
              onClick={backButton.onClick}
              className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-700 transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>{backButton.label || 'Back'}</span>
            </button>
          </div>
        )}

        {/* Title row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Title and subtitle */}
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-ink-900 truncate">{title}</h1>
            {subtitle && (
              <p className="mt-1 text-sm text-ink-500">{subtitle}</p>
            )}
          </div>

          {/* Actions or custom right content */}
          {(actions || rightContent) && (
            <div className="flex items-center gap-2 flex-shrink-0">
              {rightContent}
              {actions && actions.map((action) => (
                <button
                  key={action.id}
                  onClick={action.onClick}
                  disabled={action.disabled || action.loading}
                  className={`
                    inline-flex items-center justify-center gap-2
                    px-4 py-2 text-sm font-medium rounded-lg border
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-400
                    disabled:opacity-40 disabled:cursor-not-allowed
                    ${variantStyles[action.variant || 'secondary']}
                    ${action.hideOnMobile ? 'hidden sm:inline-flex' : ''}
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
          )}
        </div>

        {/* Below title content */}
        {belowTitle && (
          <div className="mt-4">
            {belowTitle}
          </div>
        )}
      </div>
    </div>
  );
}
