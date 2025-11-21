import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown } from 'lucide-react';

export interface DropdownItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
  variant?: 'default' | 'danger';
}

export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: 'left' | 'right';
  placement?: 'top' | 'bottom';
}

export default function Dropdown({ trigger, items, align = 'right', placement = 'bottom' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Calculate menu position when opened
  useEffect(() => {
    if (isOpen && triggerRef.current && menuRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const menuWidth = 224; // w-56 = 14rem = 224px
      const menuHeight = menuRef.current.offsetHeight || 200; // Get actual menu height
      
      // For 'top' placement, position menu above the trigger (subtract menu height)
      let top = placement === 'top' ? rect.top - menuHeight - 8 : rect.bottom + 8;
      let left = align === 'right' ? rect.right - menuWidth : rect.left;
      
      // Ensure menu doesn't go off-screen
      if (left + menuWidth > window.innerWidth) {
        left = window.innerWidth - menuWidth - 8;
      }
      if (left < 8) {
        left = 8;
      }
      
      // Ensure menu doesn't go off top of screen
      if (top < 8) {
        top = 8;
      }
      
      setMenuPosition({ top, left });
    }
  }, [isOpen, align, placement]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current && !triggerRef.current.contains(event.target as Node) &&
        menuRef.current && !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleItemClick = (item: DropdownItem) => {
    if (!item.disabled && item.onClick) {
      item.onClick();
      setIsOpen(false);
    }
  };

  const menu = isOpen ? (
    <div
      ref={menuRef}
      style={{
        position: 'fixed',
        top: `${menuPosition.top}px`,
        left: `${menuPosition.left}px`,
        zIndex: 9999
      }}
      className="w-56 bg-white bg-subtle-grain rounded-lg shadow-lg border border-paper-200 py-1 animate-fade-in"
    >
      {items.map((item) => (
        <React.Fragment key={item.id}>
          {item.divider ? (
            <div className="my-1 border-t border-paper-200" />
          ) : (
            <button
              onClick={() => handleItemClick(item)}
              disabled={item.disabled}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                item.disabled
                  ? 'text-ink-400 cursor-not-allowed'
                  : item.variant === 'danger'
                  ? 'text-error-600 hover:bg-error-50 hover:text-error-700'
                  : 'text-ink-700 hover:bg-paper-50 hover:text-ink-900'
              }`}
            >
              {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
              <span className="flex-1 text-left">{item.label}</span>
            </button>
          )}
        </React.Fragment>
      ))}
    </div>
  ) : null;

  return (
    <div className="relative inline-block" ref={triggerRef}>
      <div 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }} 
        className="cursor-pointer"
      >
        {trigger}
      </div>
      {menu && createPortal(menu, document.body)}
    </div>
  );
}

export function DropdownTrigger({ children, isOpen }: { children: React.ReactNode; isOpen?: boolean }) {
  return (
    <button className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-ink-700 bg-white border border-paper-300 rounded-lg hover:bg-paper-50 hover:border-paper-400 transition-all shadow-xs hover:shadow-sm">
      {children}
      <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
  );
}
