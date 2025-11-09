import { ReactNode } from 'react';

interface PageLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Standard page layout component providing consistent structure
 * across all application pages
 */
export function PageLayout({ 
  title, 
  description, 
  children, 
  className = '' 
}: PageLayoutProps) {
  return (
    <div className={`p-6 max-w-7xl mx-auto pb-20 ${className}`}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        {description && (
          <p className="text-gray-600">{description}</p>
        )}
      </div>
      
      {children}
    </div>
  );
}