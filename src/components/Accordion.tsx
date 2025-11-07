// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  onChange?: (openItems: string[]) => void;
}

export default function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  onChange,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen));

  const toggleItem = (itemId: string) => {
    const newOpenItems = new Set(openItems);

    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      if (!allowMultiple) {
        newOpenItems.clear();
      }
      newOpenItems.add(itemId);
    }

    setOpenItems(newOpenItems);
    onChange?.(Array.from(newOpenItems));
  };

  return (
    <div className="space-y-2">
      {items.map((item) => {
        const isOpen = openItems.has(item.id);

        return (
          <div
            key={item.id}
            className="bg-white bg-subtle-grain border border-paper-200 rounded-lg overflow-hidden transition-all duration-200"
          >
            {/* Header */}
            <button
              onClick={() => !item.disabled && toggleItem(item.id)}
              disabled={item.disabled}
              className={`
                w-full flex items-center justify-between px-6 py-4 text-left transition-colors
                ${item.disabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-paper-50 cursor-pointer'}
              `}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <div className="flex items-center gap-3 flex-1">
                {item.icon && (
                  <span className="flex-shrink-0 text-ink-600">{item.icon}</span>
                )}
                <span className="text-sm font-medium text-ink-900">{item.title}</span>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-ink-500 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Content */}
            {isOpen && (
              <div
                id={`accordion-content-${item.id}`}
                className="px-6 py-4 border-t border-paper-200 bg-paper-50 animate-fade-in"
                role="region"
                aria-labelledby={`accordion-header-${item.id}`}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
