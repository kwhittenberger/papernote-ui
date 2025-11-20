// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

import React, { useState } from 'react';
import { MoreVertical, Plus } from 'lucide-react';

export interface KanbanCard {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  assignee?: string;
  priority?: 'low' | 'medium' | 'high';
  metadata?: Record<string, unknown>;
}

export interface KanbanColumn {
  id: string;
  title: string;
  cards: KanbanCard[];
  color?: string;
  limit?: number;
}

export interface KanbanBoardProps {
  /** Columns to display */
  columns: KanbanColumn[];
  /** Callback when columns change */
  onChange: (columns: KanbanColumn[]) => void;
  /** Callback when card is clicked */
  onCardClick?: (card: KanbanCard, columnId: string) => void;
  /** Callback when add button is clicked */
  onAddCard?: (columnId: string) => void;
  /** Callback when column menu is clicked */
  onColumnMenu?: (columnId: string) => void;
  /** Custom card renderer */
  renderCard?: (card: KanbanCard, columnId: string) => React.ReactNode;
  /** Show add card button */
  showAddButton?: boolean;
  /** Custom class name */
  className?: string;
}

export default function KanbanBoard({
  columns,
  onChange,
  onCardClick,
  onAddCard,
  onColumnMenu,
  renderCard,
  showAddButton = true,
  className = '',
}: KanbanBoardProps) {
  const [draggedCard, setDraggedCard] = useState<{ card: KanbanCard; columnId: string } | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<string | null>(null);

  // Handle drag start
  const handleDragStart = (card: KanbanCard, columnId: string) => {
    setDraggedCard({ card, columnId });
  };

  // Handle drag over
  const handleDragOver = (e: React.DragEvent, columnId: string) => {
    e.preventDefault();
    setDragOverColumn(columnId);
  };

  // Handle drag leave
  const handleDragLeave = () => {
    setDragOverColumn(null);
  };

  // Handle drop
  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();
    setDragOverColumn(null);

    if (!draggedCard) return;

    const { card, columnId: sourceColumnId } = draggedCard;

    // Don't do anything if dropped in same column
    if (sourceColumnId === targetColumnId) {
      setDraggedCard(null);
      return;
    }

    // Create new columns array with updated cards
    const newColumns = columns.map((col) => {
      if (col.id === sourceColumnId) {
        // Remove card from source column
        return {
          ...col,
          cards: col.cards.filter((c) => c.id !== card.id),
        };
      } else if (col.id === targetColumnId) {
        // Add card to target column
        return {
          ...col,
          cards: [...col.cards, card],
        };
      }
      return col;
    });

    onChange(newColumns);
    setDraggedCard(null);
  };

  // Priority badge colors
  const priorityColors = {
    low: 'bg-success-100 text-success-700',
    medium: 'bg-warning-100 text-warning-700',
    high: 'bg-error-100 text-error-700',
  };

  // Default card renderer
  const defaultRenderCard = (card: KanbanCard) => (
    <div className="space-y-2">
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-sm font-semibold text-ink-900 flex-1">{card.title}</h4>
        {card.priority && (
          <span
            className={`
              px-2 py-0.5 text-xs font-medium rounded
              ${priorityColors[card.priority]}
            `}
          >
            {card.priority}
          </span>
        )}
      </div>
      {card.description && (
        <p className="text-xs text-ink-600 line-clamp-2">{card.description}</p>
      )}
      {card.tags && card.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {card.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-xs bg-paper-100 text-ink-700 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {card.assignee && (
        <div className="flex items-center gap-2 pt-2 border-t border-paper-200">
          <div className="h-6 w-6 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center text-xs font-semibold">
            {card.assignee.charAt(0).toUpperCase()}
          </div>
          <span className="text-xs text-ink-600">{card.assignee}</span>
        </div>
      )}
    </div>
  );

  return (
    <div className={`flex gap-4 overflow-x-auto pb-4 ${className}`}>
      {columns.map((column) => {
        const isOverLimit = column.limit && column.cards.length >= column.limit;
        const isDragOver = dragOverColumn === column.id;

        return (
          <div
            key={column.id}
            className="flex-shrink-0 w-80 bg-paper-50 rounded-lg"
            onDragOver={(e) => handleDragOver(e, column.id)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, column.id)}
          >
            {/* Column Header */}
            <div className="p-4 border-b border-paper-200">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  {column.color && (
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: column.color }}
                    />
                  )}
                  <h3 className="text-sm font-semibold text-ink-900">
                    {column.title}
                  </h3>
                  <span className="text-xs text-ink-500 font-medium">
                    {column.cards.length}
                    {column.limit && ` / ${column.limit}`}
                  </span>
                </div>
                {onColumnMenu && (
                  <button
                    onClick={() => onColumnMenu(column.id)}
                    className="p-1 hover:bg-paper-200 rounded transition-colors"
                    aria-label="Column menu"
                  >
                    <MoreVertical className="h-4 w-4 text-ink-600" />
                  </button>
                )}
              </div>
              {isOverLimit && (
                <p className="text-xs text-warning-600 mt-1">
                  Card limit reached
                </p>
              )}
            </div>

            {/* Cards Container */}
            <div
              className={`
                p-3 space-y-3 min-h-[200px] max-h-[600px] overflow-y-auto
                transition-colors
                ${isDragOver ? 'bg-accent-50/50' : ''}
              `}
            >
              {column.cards.map((card) => (
                <div
                  key={card.id}
                  draggable
                  onDragStart={() => handleDragStart(card, column.id)}
                  onClick={() => onCardClick?.(card, column.id)}
                  className={`
                    p-3 bg-white rounded-lg border border-paper-200 shadow-sm
                    cursor-move hover:shadow-md transition-all
                    ${draggedCard?.card.id === card.id ? 'opacity-50' : ''}
                  `}
                >
                  {renderCard ? renderCard(card, column.id) : defaultRenderCard(card)}
                </div>
              ))}

              {/* Empty state */}
              {column.cards.length === 0 && (
                <div className="flex items-center justify-center h-32 text-sm text-ink-500">
                  No cards
                </div>
              )}
            </div>

            {/* Add Card Button */}
            {showAddButton && onAddCard && (
              <div className="p-3 border-t border-paper-200">
                <button
                  onClick={() => onAddCard(column.id)}
                  disabled={!!isOverLimit}
                  className={`
                    w-full flex items-center justify-center gap-2 px-3 py-2
                    text-sm font-medium text-ink-600
                    bg-white border-2 border-dashed border-paper-300 rounded-lg
                    hover:bg-paper-50 hover:border-accent-400 hover:text-accent-600
                    disabled:opacity-40 disabled:cursor-not-allowed
                    transition-all
                  `}
                >
                  <Plus className="h-4 w-4" />
                  Add card
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
