// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the notebook-ui component library.
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

import React, { useState, useEffect } from 'react';
import { Save, X } from 'lucide-react';
import Button from './Button';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';
import Checkbox from './Checkbox';
import Switch from './Switch';

/**
 * Form field type discriminator
 */
export type FormFieldType = 'text' | 'email' | 'number' | 'password' | 'date' | 'datetime-local' | 'select' | 'textarea' | 'checkbox' | 'switch';

/**
 * Base form field configuration
 */
export interface BaseFormField {
  name: string;
  label: string;
  type: FormFieldType;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  helperText?: string;
  validate?: (value: any) => string | null;
}

/**
 * Text input field
 */
export interface TextFormField extends BaseFormField {
  type: 'text' | 'email' | 'number' | 'password' | 'date' | 'datetime-local';
  min?: number | string;
  max?: number | string;
  step?: number | string;
  pattern?: string;
}

/**
 * Select dropdown field
 */
export interface SelectFormField extends BaseFormField {
  type: 'select';
  options: Array<{ value: string; label: string }>;
  multiple?: boolean;
}

/**
 * Textarea field
 */
export interface TextareaFormField extends BaseFormField {
  type: 'textarea';
  rows?: number;
  maxLength?: number;
}

/**
 * Checkbox field
 */
export interface CheckboxFormField extends BaseFormField {
  type: 'checkbox';
}

/**
 * Switch field
 */
export interface SwitchFormField extends BaseFormField {
  type: 'switch';
}

/**
 * Union type for all form fields
 */
export type FormField = TextFormField | SelectFormField | TextareaFormField | CheckboxFormField | SwitchFormField;

/**
 * Props for ExpandedRowEditForm component
 */
export interface ExpandedRowEditFormProps<T> {
  /** The item being edited */
  item: T;
  /** Form field configurations */
  fields: FormField[];
  /** Save handler - receives updated item */
  onSave: (updated: T) => Promise<void>;
  /** Cancel handler */
  onCancel: () => void;
  /** Loading state during save */
  isLoading?: boolean;
  /** Custom validation function for entire form */
  validateForm?: (data: T) => Record<string, string>;
  /** Grid layout - number of columns (default: 2) */
  columns?: 1 | 2 | 3;
}

/**
 * ExpandedRowEditForm - Inline form component for editing records within expanded DataTable rows
 * 
 * Features:
 * - Generic type support for any data model
 * - Configurable form fields with validation
 * - Multi-column responsive layout
 * - Save/Cancel actions
 * - Loading states
 * - Field-level and form-level validation
 * - Supports text, select, textarea, checkbox, and switch fields
 * 
 * @example
 * ```tsx
 * const userFormFields: FormField[] = [
 *   { name: 'name', label: 'Full Name', type: 'text', required: true },
 *   { name: 'email', label: 'Email', type: 'email', required: true },
 *   { name: 'role', label: 'Role', type: 'select', options: roleOptions },
 *   { name: 'isActive', label: 'Active', type: 'switch' },
 * ];
 * 
 * <ExpandedRowEditForm
 *   item={user}
 *   fields={userFormFields}
 *   onSave={handleSave}
 *   onCancel={handleCancel}
 *   columns={2}
 * />
 * ```
 */
export default function ExpandedRowEditForm<T extends Record<string, any>>({
  item,
  fields,
  onSave,
  onCancel,
  isLoading = false,
  validateForm,
  columns = 2,
}: ExpandedRowEditFormProps<T>) {
  const [formData, setFormData] = useState<T>({ ...item });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSaving, setIsSaving] = useState(false);

  // Reset form data when item changes
  useEffect(() => {
    setFormData({ ...item });
    setErrors({});
  }, [item]);

  /**
   * Handle field value change
   */
  const handleFieldChange = (fieldName: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[fieldName]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  /**
   * Validate all fields
   */
  const validateAllFields = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Field-level validation
    fields.forEach((field) => {
      const value = formData[field.name];

      // Required field validation
      if (field.required && (value === null || value === undefined || value === '')) {
        newErrors[field.name] = `${field.label} is required`;
      }

      // Custom field validation
      if (field.validate && value !== null && value !== undefined && value !== '') {
        const error = field.validate(value);
        if (error) {
          newErrors[field.name] = error;
        }
      }

      // Type-specific validation
      if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[field.name] = 'Invalid email address';
        }
      }

      if (field.type === 'number' && value !== null && value !== undefined && value !== '') {
        const numValue = Number(value);
        if (isNaN(numValue)) {
          newErrors[field.name] = 'Must be a valid number';
        }
        if ('min' in field && field.min !== undefined && numValue < Number(field.min)) {
          newErrors[field.name] = `Must be at least ${field.min}`;
        }
        if ('max' in field && field.max !== undefined && numValue > Number(field.max)) {
          newErrors[field.name] = `Must be at most ${field.max}`;
        }
      }
    });

    // Form-level validation
    if (validateForm) {
      const formErrors = validateForm(formData);
      Object.assign(newErrors, formErrors);
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAllFields()) {
      return;
    }

    setIsSaving(true);
    try {
      await onSave(formData);
    } catch (error) {
      console.error('Error saving form:', error);
      setErrors({ _form: error instanceof Error ? error.message : 'Failed to save changes' });
    } finally {
      setIsSaving(false);
    }
  };

  /**
   * Render individual form field
   */
  const renderField = (field: FormField) => {
    const value = formData[field.name];
    const error = errors[field.name];
    const commonProps = {
      id: field.name,
      name: field.name,
      label: field.label,
      disabled: field.disabled || isLoading || isSaving,
      required: field.required,
      helperText: field.helperText,
      validationState: error ? ('error' as const) : null,
      validationMessage: error,
    };

    switch (field.type) {
      case 'text':
      case 'email':
      case 'number':
      case 'password':
      case 'date':
      case 'datetime-local':
        return (
          <Input
            key={field.name}
            {...commonProps}
            type={field.type}
            value={value ?? ''}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            min={'min' in field ? field.min : undefined}
            max={'max' in field ? field.max : undefined}
            step={'step' in field ? field.step : undefined}
            pattern={'pattern' in field ? field.pattern : undefined}
          />
        );

      case 'select':
        return (
          <Select
            key={field.name}
            {...commonProps}
            value={value ?? ''}
            onChange={(newValue) => handleFieldChange(field.name, newValue)}
            options={field.options}
            placeholder={field.placeholder}
          />
        );

      case 'textarea':
        return (
          <Textarea
            key={field.name}
            {...commonProps}
            value={value ?? ''}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            rows={field.rows}
            maxLength={field.maxLength}
          />
        );

      case 'checkbox':
        return (
          <Checkbox
            key={field.name}
            {...commonProps}
            checked={Boolean(value)}
            onChange={(checked) => handleFieldChange(field.name, checked)}
          />
        );

      case 'switch':
        return (
          <Switch
            key={field.name}
            {...commonProps}
            checked={Boolean(value)}
            onChange={(checked) => handleFieldChange(field.name, checked)}
          />
        );

      default:
        return null;
    }
  };

  const gridColsClass = columns === 1 ? 'grid-cols-1' : columns === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Form-level error */}
      {errors._form && (
        <div className="mb-4 p-3 bg-error-50 border border-error-200 rounded-lg text-error-700 text-sm">
          {errors._form}
        </div>
      )}

      {/* Form fields */}
      <div className={`grid ${gridColsClass} gap-4 mb-6`}>
        {fields.map((field) => renderField(field))}
      </div>

      {/* Actions - Sticky to right edge of viewport */}
      <div className="flex items-center justify-end pt-4 border-t border-paper-200 sticky right-0">
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            disabled={isLoading || isSaving}
          >
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={isLoading || isSaving}
            loading={isSaving}
          >
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>
      </div>
    </form>
  );
}
