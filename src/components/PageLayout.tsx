import { ReactNode } from 'react';
import Page from './Page';
import { PageHeaderAction } from './PageHeader';
import Button from './Button';
import Stack from './Stack';
import Text from './Text';

export interface PageLayoutProps {
  /** Page title displayed at the top (also used for document title) */
  title: string;
  /** Optional subtitle/description text below the title */
  description?: string;
  /** Main page content */
  children: ReactNode;
  /** Additional CSS classes to apply to the content wrapper */
  className?: string;
  /** Optional content to render before the title (e.g., breadcrumbs, alerts, control bars) */
  headerContent?: ReactNode;
  /** Maximum width constraint for the page content (default: '7xl' = 1400px) */
  maxWidth?: '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  /** Fix all margins/padding instead of responsive (default: false) */
  fixed?: boolean;
  /** Page-level action buttons rendered inline with title */
  actions?: PageHeaderAction[];
  /** Custom content to render on the right (instead of actions) */
  rightContent?: ReactNode;
}

/**
 * PageLayout - Standard page layout with title, description, and content
 *
 * A high-level layout component that provides consistent page structure across your application.
 * Wraps content in the Page component to include notebook styling (paper texture, ruled lines,
 * red margin line).
 *
 * **Note**: PageLayout does NOT include the sidebar or gutter. For a complete app layout with
 * sidebar and gutter navigation, use the Layout component instead and wrap this inside it.
 *
 * **Component Hierarchy**:
 * - **Page** - Just paper with notebook styling (lowest level)
 * - **PageLayout** - Page + title + description (this component)
 * - **Layout** - Sidebar + gutter + content area (includes PageLayout or Page inside)
 *
 * @example Basic page with title
 * ```tsx
 * <PageLayout
 *   title="Dashboard"
 *   description="Overview of your metrics"
 *   headerContent={<Breadcrumbs />}
 * >
 *   <Card>
 *     <CardContent>Your dashboard content</CardContent>
 *   </Card>
 * </PageLayout>
 * ```
 *
 * @example With actions
 * ```tsx
 * <PageLayout
 *   title="Products"
 *   description="Manage your product catalog"
 *   headerContent={<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Products' }]} />}
 *   actions={[
 *     { id: 'export', label: 'Export', icon: <Download />, onClick: handleExport, variant: 'ghost' },
 *     { id: 'add', label: 'Add Product', icon: <Plus />, onClick: handleAdd, variant: 'primary' },
 *   ]}
 * >
 *   <DataTable data={products} columns={columns} />
 * </PageLayout>
 * ```
 *
 * @example With Layout for sidebar and gutter
 * ```tsx
 * <Layout sidebar={<Sidebar items={items} />}>
 *   <PageLayout title="Dashboard" description="Overview">
 *     <Card>Content</Card>
 *   </PageLayout>
 * </Layout>
 * ```
 */
export function PageLayout({
  title,
  description,
  children,
  className = '',
  headerContent,
  maxWidth = 'full',
  fixed = false,
  actions,
  rightContent,
}: PageLayoutProps) {
  // Responsive padding classes - fixed left/top, responsive right/bottom
  const paddingClasses = fixed
    ? 'p-6 pb-20'
    : 'pt-6 pl-6 pr-2 pb-8 sm:pr-4 md:pr-6 sm:pb-12 md:pb-16 lg:pb-20';

  const maxWidthClasses = {
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    'full': 'max-w-full',
  };

  return (
    <Page padding="none" maxWidth={maxWidth} fixed={fixed}>
      <div className={`${paddingClasses} ${maxWidthClasses[maxWidth]} mx-auto ${className}`}>
        {/* Content before title (e.g., Breadcrumbs) */}
        {headerContent && <div className="mb-4">{headerContent}</div>}

        {/* Header */}
        <div className="mb-8">
          <Stack direction="horizontal" justify="between" align="start" gap="md">
            <div className="min-w-0 flex-1">
              <Text as="h1" size="2xl" weight="bold" className="text-3xl mb-2">{title}</Text>
              {description && (
                <Text color="muted">{description}</Text>
              )}
            </div>
            {(actions || rightContent) && (
              <Stack direction="horizontal" gap="sm" className="flex-shrink-0">
                {rightContent}
                {actions?.map((action) => (
                  <Button
                    key={action.id}
                    variant={action.variant || 'secondary'}
                    icon={action.icon}
                    onClick={action.onClick}
                    disabled={action.disabled}
                    loading={action.loading}
                    className={action.hideOnMobile ? 'hidden sm:inline-flex' : ''}
                  >
                    {action.label}
                  </Button>
                ))}
              </Stack>
            )}
          </Stack>
        </div>

        {children}
      </div>
    </Page>
  );
}