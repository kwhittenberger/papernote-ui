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
  /** Orientation of tabs (default: 'horizontal') */
  orientation?: 'horizontal' | 'vertical';
  /** Size of tabs (default: 'md') */
  size?: 'sm' | 'md' | 'lg';
  onChange?: (tabId: string) => void;
}

export default function Tabs({ tabs, defaultTab, variant = 'underline', orientation = 'horizontal', size = 'md', onChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  // Size-specific classes
  const sizeClasses = {
    sm: {
      padding: 'px-3 py-1.5',
      text: 'text-xs',
      icon: 'h-3.5 w-3.5',
      gap: orientation === 'vertical' ? 'gap-1.5' : 'gap-4',
      minWidth: orientation === 'vertical' ? 'min-w-[150px]' : '',
      spacing: orientation === 'vertical' ? 'mt-4' : 'mt-4',
    },
    md: {
      padding: 'px-4 py-2.5',
      text: 'text-sm',
      icon: 'h-4 w-4',
      gap: orientation === 'vertical' ? 'gap-2' : 'gap-6',
      minWidth: orientation === 'vertical' ? 'min-w-[200px]' : '',
      spacing: orientation === 'vertical' ? 'mt-6' : 'mt-6',
    },
    lg: {
      padding: 'px-5 py-3',
      text: 'text-base',
      icon: 'h-5 w-5',
      gap: orientation === 'vertical' ? 'gap-3' : 'gap-8',
      minWidth: orientation === 'vertical' ? 'min-w-[250px]' : '',
      spacing: orientation === 'vertical' ? 'mt-8' : 'mt-8',
    },
  };

  return (
    <div className={`w-full ${orientation === 'vertical' ? `flex ${sizeClasses[size].gap}` : ''}`}>
      {/* Tab Headers */}
      <div
        className={`
          flex ${orientation === 'vertical' ? 'flex-col' : ''}
          ${variant === 'underline'
            ? orientation === 'vertical'
              ? `border-r border-paper-200 ${sizeClasses[size].gap} pr-6`
              : `border-b border-paper-200 ${sizeClasses[size].gap}`
            : `${sizeClasses[size].gap} p-1 bg-paper-50 rounded-lg`
          }
          ${sizeClasses[size].minWidth}
        `}
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
                flex items-center gap-2 ${sizeClasses[size].padding} ${sizeClasses[size].text} font-medium transition-all duration-200
                ${orientation === 'vertical' ? 'w-full justify-start' : ''}
                ${
                  variant === 'underline'
                    ? isActive
                      ? orientation === 'vertical'
                        ? 'text-accent-900 border-r-2 border-accent-500 -mr-[1px]'
                        : 'text-accent-900 border-b-2 border-accent-500 -mb-[1px]'
                      : orientation === 'vertical'
                      ? 'text-ink-600 hover:text-ink-900 border-r-2 border-transparent'
                      : 'text-ink-600 hover:text-ink-900 border-b-2 border-transparent'
                    : isActive
                    ? 'bg-white text-accent-900 rounded-md shadow-xs'
                    : 'text-ink-600 hover:text-ink-900 hover:bg-white/50 rounded-md'
                }
                ${tab.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              {tab.icon && <span className={`flex-shrink-0 ${sizeClasses[size].icon}`}>{tab.icon}</span>}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className={`${orientation === 'vertical' ? 'flex-1' : sizeClasses[size].spacing}`}>
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
