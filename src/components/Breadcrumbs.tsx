import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
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
        const content = (
          <>
            {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
            <span>{item.label}</span>
          </>
        );

        const renderBreadcrumb = () => {
          // Active item (last item) - always render as non-clickable span
          if (isActive) {
            return (
              <span
                className="flex items-center gap-2 px-2 py-1 rounded-md bg-accent-50 text-accent-900 font-semibold transition-colors"
                aria-current="page"
              >
                {content}
              </span>
            );
          }

          // Has href - render as Link, also call onClick if provided
          if (item.href) {
            return (
              <Link
                to={item.href}
                onClick={item.onClick}
                className="flex items-center gap-2 text-ink-500 hover:text-ink-900 hover:underline transition-colors"
              >
                {content}
              </Link>
            );
          }

          // Only onClick (no href) - render as button
          if (item.onClick) {
            return (
              <button
                type="button"
                onClick={item.onClick}
                className="flex items-center gap-2 text-ink-500 hover:text-ink-900 hover:underline transition-colors bg-transparent border-none cursor-pointer p-0"
              >
                {content}
              </button>
            );
          }

          // Neither href nor onClick - render as non-clickable span
          return (
            <span className="flex items-center gap-2 text-ink-700 font-medium">
              {content}
            </span>
          );
        };

        return (
          <React.Fragment key={index}>
            {renderBreadcrumb()}
            {!isLast && <ChevronRight className="h-4 w-4 text-ink-400" />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
