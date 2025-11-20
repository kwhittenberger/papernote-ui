// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

import React, { useState } from 'react';
import { Plus, Trash2, GripVertical } from 'lucide-react';

export interface FieldArrayProps<T> {
  name?: string;
  initialValues?: T[];
  renderField: (value: T, index: number, onChange: (value: T) => void) => React.ReactNode;
  onChange?: (values: T[]) => void;
  addButtonLabel?: string;
  min?: number;
  max?: number;
  allowReorder?: boolean;
  className?: string;
}

export default function FieldArray<T>({
  initialValues = [],
  renderField,
  onChange,
  addButtonLabel = 'Add Item',
  min = 0,
  max,
  allowReorder = false,
  className = '',
}: FieldArrayProps<T>) {
  const [fields, setFields] = useState<T[]>(initialValues);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  // Add field
  const addField = (defaultValue?: T) => {
    if (max && fields.length >= max) return;

    const newFields = [...fields, defaultValue as T];
    setFields(newFields);
    onChange?.(newFields);
  };

  // Remove field
  const removeField = (index: number) => {
    if (fields.length <= min) return;

    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
    onChange?.(newFields);
  };

  // Update field
  const updateField = (index: number, value: T) => {
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
    onChange?.(newFields);
  };

  // Drag handlers
  const handleDragStart = (index: number) => {
    setDragIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (dragIndex === null || dragIndex === index) return;

    const newFields = [...fields];
    const draggedItem = newFields[dragIndex];
    newFields.splice(dragIndex, 1);
    newFields.splice(index, 0, draggedItem);

    setFields(newFields);
    setDragIndex(index);
  };

  const handleDragEnd = () => {
    setDragIndex(null);
    onChange?.(fields);
  };

  return (
    <div className={className}>
      <div className="space-y-3">
        {fields.map((field, index) => (
          <div
            key={index}
            draggable={allowReorder}
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
            className={`
              relative flex gap-3 items-start
              ${allowReorder ? 'cursor-move' : ''}
              ${dragIndex === index ? 'opacity-50' : ''}
            `}
          >
            {/* Drag Handle */}
            {allowReorder && (
              <div className="pt-2 flex-shrink-0">
                <GripVertical className="h-5 w-5 text-ink-400" />
              </div>
            )}

            {/* Field Content */}
            <div className="flex-1">
              {renderField(field, index, (value) => updateField(index, value))}
            </div>

            {/* Remove Button */}
            {fields.length > min && (
              <button
                type="button"
                onClick={() => removeField(index)}
                className="pt-2 flex-shrink-0 text-error-500 hover:text-error-700 transition-colors"
                aria-label="Remove item"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Add Button */}
      {(!max || fields.length < max) && (
        <button
          type="button"
          onClick={() => addField()}
          className="mt-3 flex items-center gap-2 px-3 py-2 text-sm font-medium text-accent-600 hover:text-accent-700 border-2 border-dashed border-accent-300 hover:border-accent-400 rounded-lg transition-all"
        >
          <Plus className="h-4 w-4" />
          {addButtonLabel}
        </button>
      )}
    </div>
  );
}
