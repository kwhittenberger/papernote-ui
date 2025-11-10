import { ReactNode } from 'react';
import Page from './Page';

interface PageLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Standard page layout component providing consistent structure
 * across all application pages.
 * 
 * Wraps content in the Page component for notebook styling
 * (gray background, red margin line, ruled lines).
 */
export function PageLayout({ 
  title, 
  description, 
  children, 
  className = '' 
}: PageLayoutProps) {
  return (
    <Page>
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