import { ReactNode } from 'react';
import Page from './Page';

export interface PageLayoutProps {
  /** Page title displayed at the top */
  title: string;
  /** Optional subtitle/description text below the title */
  description?: string;
  /** Main page content */
  children: ReactNode;
  /** Additional CSS classes to apply to the content wrapper */
  className?: string;
  /** Optional content to render before the title (e.g., breadcrumbs, alerts, control bars) */
  headerContent?: ReactNode;
}

/**
 * PageLayout - Standard page layout with title, description, and content
 *
 * A high-level layout component that provides consistent page structure across your application.
 * Wraps content in the Page component to include notebook styling (paper texture, ruled lines,
 * red margin line).
 *
 * @example
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
 */
export function PageLayout({ 
  title, 
  description, 
  children, 
  className = '',
  headerContent
}: PageLayoutProps) {
  return (
    <Page>
      {/* Content before title (e.g., ControlBar) */}
      {headerContent}
      
      <div className={`p-6 max-w-7xl mx-auto pb-20 ${className}`}>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-ink-900 mb-2">{title}</h1>
          {description && (
            <p className="text-ink-600">{description}</p>
          )}
        </div>
        
        {children}
      </div>
    </Page>
  );
}