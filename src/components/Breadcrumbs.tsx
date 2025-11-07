// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
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

        return (
          <React.Fragment key={index}>
            {item.href && !isLast ? (
              <Link
                to={item.href}
                className="flex items-center gap-2 text-ink-500 hover:text-ink-900 transition-colors"
              >
                {item.icon && <span>{item.icon}</span>}
                <span>{item.label}</span>
              </Link>
            ) : (
              <span className="flex items-center gap-2 text-ink-700 font-medium" aria-current={isLast ? 'page' : undefined}>
                {item.icon && <span>{item.icon}</span>}
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
