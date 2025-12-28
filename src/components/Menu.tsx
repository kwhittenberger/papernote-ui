import { useState, useRef, useEffect, ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

export interface MenuItem {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  danger?: boolean;
  divider?: boolean;
  submenu?: MenuItem[];
  /**
   * Custom data attributes to spread on the rendered element.
   * Useful for product tours (e.g., Driver.js) and E2E testing (Playwright, Cypress).
   * @example { 'data-tour': 'menu-settings', 'data-testid': 'menu-settings' }
   */
  dataAttributes?: Record<string, string>;
}

export interface MenuProps {
  items: MenuItem[];
  className?: string;
  onClose?: () => void;
  position?: { x: number; y: number };
  anchor?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default function Menu({
  items,
  className = '',
  onClose,
  position,
  anchor = 'bottom-left',
}: MenuProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Get non-divider items for keyboard navigation
  const navigableItems = items.filter((item) => !item.divider && !item.disabled);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!menuRef.current) return;

      switch (e.key) {
        case 'Escape':
          onClose?.();
          break;

        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex((prev) => {
            const next = (prev + 1) % navigableItems.length;
            itemRefs.current[next]?.focus();
            return next;
          });
          break;

        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex((prev) => {
            const next = (prev - 1 + navigableItems.length) % navigableItems.length;
            itemRefs.current[next]?.focus();
            return next;
          });
          break;

        case 'ArrowRight':
          e.preventDefault();
          const currentItem = navigableItems[focusedIndex];
          if (currentItem?.submenu) {
            setOpenSubmenu(currentItem.id);
          }
          break;

        case 'ArrowLeft':
          e.preventDefault();
          setOpenSubmenu(null);
          break;

        case 'Enter':
        case ' ':
          e.preventDefault();
          const activeItem = navigableItems[focusedIndex];
          if (activeItem && !activeItem.disabled && activeItem.onClick) {
            activeItem.onClick();
            onClose?.();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [focusedIndex, navigableItems, onClose]);

  // Focus first item on mount
  useEffect(() => {
    if (itemRefs.current[0]) {
      itemRefs.current[0].focus();
    }
  }, []);

  const handleItemClick = (item: MenuItem) => {
    if (item.disabled) return;

    if (item.submenu) {
      setOpenSubmenu(openSubmenu === item.id ? null : item.id);
    } else {
      item.onClick?.();
      onClose?.();
    }
  };

  const handleMouseEnter = (item: MenuItem) => {
    if (item.submenu && !item.disabled) {
      setOpenSubmenu(item.id);
    }
  };

  const anchorClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };

  const positionStyle = position
    ? { position: 'fixed' as const, top: position.y, left: position.x }
    : {};

  let navIndex = 0;

  return (
    <div
      ref={menuRef}
      className={`
        bg-white rounded-lg shadow-lg border border-ink-200 py-1 min-w-[200px]
        ${position ? 'fixed' : anchorClasses[anchor]}
        ${className}
      `}
      style={positionStyle}
      role="menu"
      aria-orientation="vertical"
    >
      {items.map((item, index) => {
        // Handle divider
        if (item.divider) {
          return (
            <div
              key={`divider-${index}`}
              className="h-px bg-ink-200 my-1"
              role="separator"
              data-testid={item.dataAttributes?.['data-testid'] || `menu-divider-${index}`}
              {...item.dataAttributes}
            />
          );
        }

        const currentNavIndex = navIndex;
        navIndex++;

        const isSubmenuOpen = openSubmenu === item.id;
        const hasSubmenu = item.submenu && item.submenu.length > 0;

        return (
          <div key={item.id} className="relative">
            <button
              ref={(el) => { itemRefs.current[currentNavIndex] = el; }}
              onClick={() => handleItemClick(item)}
              onMouseEnter={() => handleMouseEnter(item)}
              disabled={item.disabled}
              className={`
                w-full px-3 py-2 text-left text-sm flex items-center justify-between gap-2
                transition-colors
                ${
                  item.disabled
                    ? 'text-ink-400 cursor-not-allowed'
                    : item.danger
                    ? 'text-error-600 hover:bg-error-50'
                    : 'text-ink-900 hover:bg-accent-100'
                }
                ${focusedIndex === currentNavIndex ? 'bg-accent-100' : ''}
              `}
              role="menuitem"
              aria-haspopup={hasSubmenu}
              aria-expanded={hasSubmenu && isSubmenuOpen}
              data-testid={item.dataAttributes?.['data-testid'] || `menu-item-${item.id}`}
              {...item.dataAttributes}
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                {item.icon && (
                  <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center">
                    {item.icon}
                  </span>
                )}
                <span className="truncate">{item.label}</span>
              </div>

              {hasSubmenu && (
                <ChevronRight className="h-4 w-4 flex-shrink-0 text-ink-400" />
              )}
            </button>

            {/* Submenu */}
            {hasSubmenu && isSubmenuOpen && (
              <div className="absolute left-full top-0 ml-1 z-10">
                <Menu
                  items={item.submenu!}
                  onClose={onClose}
                  anchor="top-left"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Convenience component for MenuDivider
export function MenuDivider() {
  return { divider: true, id: `divider-${Date.now()}`, label: '' } as MenuItem;
}
