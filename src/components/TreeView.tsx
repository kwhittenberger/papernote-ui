// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

export interface TreeNode {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: TreeNode[];
  disabled?: boolean;
}

export interface TreeViewProps {
  /** Tree data structure */
  data: TreeNode[];
  /** Callback when node is selected */
  onSelect?: (nodeId: string) => void;
  /** Currently selected node ID */
  selectedId?: string;
  /** Initially expanded node IDs */
  defaultExpanded?: string[];
  /** Show lines connecting nodes */
  showLines?: boolean;
  /** Custom expand icon */
  expandIcon?: React.ReactNode;
  /** Custom collapse icon */
  collapseIcon?: React.ReactNode;
}

export default function TreeView({
  data,
  onSelect,
  selectedId,
  defaultExpanded = [],
  showLines = false,
  expandIcon,
  collapseIcon,
}: TreeViewProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(
    new Set(defaultExpanded)
  );

  const toggleExpand = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const renderNode = (node: TreeNode, level: number = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(node.id);
    const isSelected = selectedId === node.id;

    return (
      <div key={node.id}>
        {/* Node Item */}
        <div
          className={`
            flex items-center gap-2 px-3 py-2 text-sm transition-colors cursor-pointer rounded-md
            ${showLines ? 'relative' : ''}
            ${isSelected ? 'bg-accent-50 text-accent-900 font-medium' : 'text-ink-700 hover:bg-paper-50'}
            ${node.disabled ? 'opacity-40 cursor-not-allowed' : ''}
          `}
          style={{ paddingLeft: `${level * 24 + 12}px` }}
          onClick={() => {
            if (node.disabled) return;
            if (hasChildren) {
              toggleExpand(node.id);
            }
            if (onSelect && !node.disabled) {
              onSelect(node.id);
            }
          }}
        >
          {/* Expand/Collapse Icon */}
          {hasChildren ? (
            <span className="flex-shrink-0 text-ink-500">
              {isExpanded ? (
                collapseIcon || <ChevronDown className="h-4 w-4" />
              ) : (
                expandIcon || <ChevronRight className="h-4 w-4" />
              )}
            </span>
          ) : (
            <span className="w-4" />
          )}

          {/* Node Icon */}
          {node.icon && (
            <span className="flex-shrink-0 text-ink-600">{node.icon}</span>
          )}

          {/* Node Label */}
          <span className="flex-1 truncate">{node.label}</span>
        </div>

        {/* Children */}
        {hasChildren && isExpanded && (
          <div className={showLines ? 'relative ml-3 border-l border-paper-300' : ''}>
            {node.children!.map((child) => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full">
      {data.map((node) => renderNode(node))}
    </div>
  );
}
