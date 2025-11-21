import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
}

export default function Breadcrumbs({ items, showHome = true }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm">
      {showHome && (
        <>
          <Link
            to="/"
            className="text-ink-500 hover:text-ink-900 transition-colors"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
          </Link>
          {items.length > 0 && <ChevronRight className="h-4 w-4 text-ink-400" />}
        </>
      )}

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isActive = isLast;

        return (
          <React.Fragment key={index}>
            {item.href && !isActive ? (
              <Link
                to={item.href}
                className="flex items-center gap-2 text-ink-500 hover:text-ink-900 hover:underline transition-colors"
              >
                {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
                <span>{item.label}</span>
              </Link>
            ) : (
              <span
                className={`
                  flex items-center gap-2 px-2 py-1 rounded-md transition-colors
                  ${isActive
                    ? 'bg-accent-50 text-accent-900 font-semibold'
                    : 'text-ink-700 font-medium'
                  }
                `}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
                <span>{item.label}</span>
              </span>
            )}

            {!isLast && <ChevronRight className="h-4 w-4 text-ink-400" />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
