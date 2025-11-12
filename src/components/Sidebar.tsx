// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  children?: SidebarItem[];
  onClick?: () => void;
  active?: boolean;
  badge?: string | number;
  separator?: boolean; // Render as a separator instead of a nav item
  external?: boolean; // Open as external link instead of SPA navigation
}

export interface SidebarProps {
  items: SidebarItem[];
  onNavigate?: (href: string, external?: boolean) => void;
  className?: string;
  header?: React.ReactNode; // Logo or header content
  footer?: React.ReactNode; // User profile or footer content
  currentPath?: string; // Current route for auto-active detection
}

export interface SidebarGroupProps {
  title?: string;
  items: SidebarItem[];
  onNavigate?: (href: string, external?: boolean) => void;
  defaultExpanded?: boolean;
  currentPath?: string;
}

function SidebarNavItem({
  item,
  onNavigate,
  level = 0,
  currentPath
}: {
  item: SidebarItem;
  onNavigate?: (href: string, external?: boolean) => void;
  level?: number;
  currentPath?: string;
}) {
  const hasChildren = item.children && item.children.length > 0;

  // Auto-detect if this item or any child is active based on currentPath
  const isItemActive = currentPath && item.href ? currentPath === item.href : item.active;
  const isChildActive = hasChildren && currentPath
    ? item.children?.some(child => currentPath === child.href || currentPath?.startsWith(child.href || ''))
    : false;
  const shouldExpandByDefault = isChildActive || (hasChildren && currentPath?.startsWith(item.href || ''));

  const [isExpanded, setIsExpanded] = useState(shouldExpandByDefault);

  const handleClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    } else if (item.href) {
      onNavigate?.(item.href, item.external);
    } else if (item.onClick) {
      item.onClick();
    }
  };

  const paddingLeft = level === 0 ? 'pl-3' : level === 1 ? 'pl-8' : 'pl-12';
  
  // For parent items: show subtle active state if child is active
  // For child items: show full active state if this item is active
  const showFullActive = isItemActive;
  const showParentActive = isChildActive && !isItemActive;

  return (
    <div>
      <button
        onClick={handleClick}
        className={`
          w-full flex items-center justify-between py-2 text-sm transition-colors
          ${showFullActive
            ? level > 0 
              ? 'bg-accent-100 text-accent-900 font-medium rounded-lg border-l-2 border-accent-500' 
              : 'bg-accent-50 text-accent-900 font-medium rounded-lg'
            : showParentActive
            ? 'text-ink-900 rounded-lg'
            : level > 0
            ? 'text-ink-600 hover:text-ink-900 hover:bg-paper-50 rounded-lg transition-colors'
            : 'text-ink-600 hover:text-ink-900 hover:bg-paper-100 rounded-lg transition-colors'
          }
          ${paddingLeft} pr-3
        `}
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {item.icon && (
            <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-ink-500">
              {item.icon}
            </span>
          )}
          <span className="truncate">{item.label}</span>
          {item.badge && (
            <span className="ml-auto flex-shrink-0 px-2 py-0.5 text-xs font-medium bg-accent-100 text-accent-700 rounded-full">
              {item.badge}
            </span>
          )}
        </div>
        {hasChildren && (
          <span className="flex-shrink-0 ml-2">
            {isExpanded ? (
              <ChevronDown className="h-4 w-4 text-ink-400" />
            ) : (
              <ChevronRight className="h-4 w-4 text-ink-400" />
            )}
          </span>
        )}
      </button>

      {hasChildren && isExpanded && (
        <div className="mt-1 space-y-1">
          {item.children?.map((child) => (
            <SidebarNavItem
              key={child.id}
              item={child}
              onNavigate={onNavigate}
              level={level + 1}
              currentPath={currentPath}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function SidebarGroup({ title, items, onNavigate, defaultExpanded = true, currentPath }: SidebarGroupProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  if (!title) {
    // No title means render items directly
    return (
      <div className="space-y-1">
        {items.map((item) => (
          <SidebarNavItem key={item.id} item={item} onNavigate={onNavigate} currentPath={currentPath} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-ink-500 uppercase tracking-wider hover:text-ink-700 transition-colors"
      >
        <span>{title}</span>
        {isExpanded ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>
      {isExpanded && (
        <div className="mt-1 space-y-1">
          {items.map((item) => (
            <SidebarNavItem key={item.id} item={item} onNavigate={onNavigate} currentPath={currentPath} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar({ items, onNavigate, className = '', header, footer, currentPath }: SidebarProps) {
  return (
    <div className={`flex flex-col h-full bg-white border-r border-paper-300 notebook-binding ${className}`}>
      {/* Header (Logo) */}
      {header && (
        <div className="px-6 pt-6 pb-4">
          {header}
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
        {items.map((item) => {
          // Render separator
          if (item.separator) {
            return <div key={item.id} className="my-4 border-t border-paper-300" />;
          }

          // Render nav item
          return (
            <SidebarNavItem
              key={item.id}
              item={item}
              onNavigate={onNavigate}
              currentPath={currentPath}
            />
          );
        })}
      </nav>

      {/* Footer (User Profile) */}
      {footer && (
        <div className="border-t border-paper-300 p-4 overflow-visible">
          {footer}
        </div>
      )}
    </div>
  );
}
