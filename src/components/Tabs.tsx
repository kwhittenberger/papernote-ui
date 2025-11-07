// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React, { useState } from 'react';

export interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  variant?: 'underline' | 'pill';
  onChange?: (tabId: string) => void;
}

export default function Tabs({ tabs, defaultTab, variant = 'underline', onChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div
        className={`flex ${
          variant === 'underline' ? 'border-b border-paper-200 gap-6' : 'gap-2 p-1 bg-paper-50 rounded-lg'
        }`}
        role="tablist"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              disabled={tab.disabled}
              onClick={() => !tab.disabled && handleTabChange(tab.id)}
              className={`
                flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-200
                ${
                  variant === 'underline'
                    ? isActive
                      ? 'text-accent-900 border-b-2 border-accent-500 -mb-[1px]'
                      : 'text-ink-600 hover:text-ink-900 border-b-2 border-transparent'
                    : isActive
                    ? 'bg-white text-accent-900 rounded-md shadow-xs'
                    : 'text-ink-600 hover:text-ink-900 hover:bg-white/50 rounded-md'
                }
                ${tab.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              {tab.icon && <span className="flex-shrink-0">{tab.icon}</span>}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={tab.id}
            hidden={activeTab !== tab.id}
            className={activeTab === tab.id ? 'animate-fade-in' : ''}
          >
            {activeTab === tab.id && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
