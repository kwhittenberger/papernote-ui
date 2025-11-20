import { ReactNode } from 'react';

export interface CardViewItem {
  id: string | number;
  title: string;
  subtitle?: string;
  content: ReactNode;
  footer?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

interface CardViewProps {
  items: CardViewItem[];
  loading?: boolean;
  emptyState?: ReactNode;
  loadingRows?: number;
  className?: string;
  cardClassName?: string;
}

/**
 * Generic card view component for displaying data in card format
 */
export function CardView({
  items,
  loading = false,
  emptyState,
  loadingRows = 6,
  className = '',
  cardClassName = ''
}: CardViewProps) {
  if (loading && items.length === 0) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {Array.from({ length: loadingRows }, (_, i) => (
          <div key={i} className={`bg-white rounded-lg shadow p-6 animate-pulse ${cardClassName}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="h-5 bg-paper-200 rounded mb-2"></div>
                <div className="h-4 bg-paper-200 rounded w-3/4"></div>
              </div>
              <div className="h-5 w-5 bg-paper-200 rounded"></div>
            </div>
            <div className="space-y-3 mb-4">
              <div className="h-4 bg-paper-200 rounded"></div>
              <div className="h-4 bg-paper-200 rounded"></div>
              <div className="h-4 bg-paper-200 rounded"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-6 bg-paper-200 rounded-full w-16"></div>
              <div className="h-6 bg-paper-200 rounded-full w-20"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return emptyState || null;
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {items.map((item) => (
        <div 
          key={item.id} 
          className={`bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow flex flex-col ${cardClassName} ${item.className || ''}`}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-ink-900 mb-1 truncate" title={item.title}>
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-sm text-ink-600 truncate" title={item.subtitle}>
                  {item.subtitle}
                </p>
              )}
            </div>
            {item.actions && (
              <div className="ml-2 flex-shrink-0">
                {item.actions}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 mb-4">
            {item.content}
          </div>

          {/* Footer */}
          {item.footer && (
            <div className="mt-auto pt-4 border-t border-paper-200">
              {item.footer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}