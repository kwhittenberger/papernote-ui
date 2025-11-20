import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Settings } from 'lucide-react';

export interface ToolbarSection {
  id: string;
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  defaultExpanded?: boolean;
}

export interface ExpandableToolbarProps {
  sections: ToolbarSection[];
  className?: string;
  defaultCollapsed?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
}

export const ExpandableToolbar: React.FC<ExpandableToolbarProps> = ({
  sections,
  className = '',
  defaultCollapsed = false,
  onCollapseChange
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(sections.filter(s => s.defaultExpanded).map(s => s.id))
  );

  const toggleCollapse = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    onCollapseChange?.(newCollapsed);
  };

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  if (isCollapsed) {
    return (
      <div className={`bg-white border-b border-gray-200 shadow-sm ${className}`}>
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-600">
            <Settings className="h-4 w-4" />
            <span className="text-sm font-medium">Controls</span>
          </div>
          <button
            onClick={toggleCollapse}
            className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <span className="text-xs">Expand</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white border-b border-gray-200 shadow-sm ${className}`}>
      {/* Toolbar Header */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center space-x-2 text-gray-700">
          <Settings className="h-5 w-5" />
          <span className="text-sm font-semibold">Page Controls</span>
        </div>
        <button
          onClick={toggleCollapse}
          className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <span className="text-xs">Collapse</span>
          <ChevronUp className="h-4 w-4" />
        </button>
      </div>

      {/* Toolbar Sections */}
      <div className="px-4 py-2">
        <div className="space-y-3">
          {sections.map((section) => {
            const isExpanded = expandedSections.has(section.id);

            return (
              <div key={section.id} className="border border-gray-200 rounded-lg">
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-3 py-2 flex items-center justify-between text-left hover:bg-gray-50 transition-colors rounded-t-lg"
                >
                  <div className="flex items-center space-x-2">
                    {section.icon}
                    <span className="text-sm font-medium text-gray-700">
                      {section.title}
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  )}
                </button>

                {/* Section Content */}
                {isExpanded && (
                  <div className="px-3 py-3 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                    {section.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpandableToolbar;
