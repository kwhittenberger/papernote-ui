// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the notebook-ui component library.
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

import React from 'react';

export interface ButtonGroupOption {
  /** Option value */
  value: string;
  /** Display label */
  label: string;
  /** Optional icon */
  icon?: React.ComponentType<any>;
  /** Disabled state */
  disabled?: boolean;
  /** Tooltip text */
  tooltip?: string;
}

export interface ButtonGroupProps {
  /** Available options */
  options: ButtonGroupOption[];
  /** Selected value (single select) */
  value?: string;
  /** Selected values (multi select) */
  values?: string[];
  /** Change handler (single select) */
  onChange?: (value: string) => void;
  /** Change handler (multi select) */
  onChangeMultiple?: (values: string[]) => void;
  /** Allow multiple selection */
  multiple?: boolean;
  /** Input label */
  label?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Full width buttons */
  fullWidth?: boolean;
  /** Disabled state for entire group */
  disabled?: boolean;
  /** Custom className */
  className?: string;
}

/**
 * ButtonGroup component - Toggle button group for single or multiple selection.
 *
 * Features:
 * - Single or multiple selection modes
 * - Icon support
 * - Full width option
 * - Disabled states
 * - Accessible keyboard navigation
 *
 * @example
 * ```tsx
 * // Single select
 * <ButtonGroup
 *   label="Text Alignment"
 *   options={[
 *     { value: 'left', label: 'Left', icon: AlignLeft },
 *     { value: 'center', label: 'Center', icon: AlignCenter },
 *     { value: 'right', label: 'Right', icon: AlignRight },
 *   ]}
 *   value={alignment}
 *   onChange={setAlignment}
 * />
 *
 * // Multi select
 * <ButtonGroup
 *   label="Text Formatting"
 *   options={[
 *     { value: 'bold', label: 'Bold', icon: Bold },
 *     { value: 'italic', label: 'Italic', icon: Italic },
 *     { value: 'underline', label: 'Underline', icon: Underline },
 *   ]}
 *   values={formatting}
 *   onChangeMultiple={setFormatting}
 *   multiple
 * />
 * ```
 */
export default function ButtonGroup({
  options,
  value,
  values = [],
  onChange,
  onChangeMultiple,
  multiple = false,
  label,
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
}: ButtonGroupProps) {
  // Handle single select
  const handleSingleSelect = (optionValue: string) => {
    if (disabled) return;
    onChange?.(optionValue);
  };

  // Handle multiple select
  const handleMultipleSelect = (optionValue: string) => {
    if (disabled) return;

    const newValues = values.includes(optionValue)
      ? values.filter(v => v !== optionValue)
      : [...values, optionValue];

    onChangeMultiple?.(newValues);
  };

  // Check if option is selected
  const isSelected = (optionValue: string): boolean => {
    if (multiple) {
      return values.includes(optionValue);
    }
    return value === optionValue;
  };

  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
  };

  const iconSizeClasses = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  return (
    <div className={`${className}`}>
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-ink-700 mb-2">
          {label}
        </label>
      )}

      {/* Button Group */}
      <div
        className={`inline-flex ${fullWidth ? 'w-full' : ''}`}
        role={multiple ? 'group' : 'radiogroup'}
        aria-label={label}
      >
        {options.map((option, index) => {
          const Icon = option.icon;
          const selected = isSelected(option.value);
          const isDisabled = disabled || option.disabled;
          const isFirst = index === 0;
          const isLast = index === options.length - 1;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => multiple ? handleMultipleSelect(option.value) : handleSingleSelect(option.value)}
              disabled={isDisabled}
              title={option.tooltip}
              role={multiple ? 'checkbox' : 'radio'}
              aria-checked={selected}
              aria-disabled={isDisabled}
              className={`
                ${sizeClasses[size]}
                ${fullWidth ? 'flex-1' : ''}
                font-medium transition-colors
                border border-paper-300
                focus:outline-none focus:ring-2 focus:ring-primary-500 focus:z-10
                ${isFirst ? 'rounded-l-md' : '-ml-px'}
                ${isLast ? 'rounded-r-md' : ''}
                ${selected
                  ? 'bg-primary-500 text-white border-primary-500 z-10'
                  : 'bg-white text-ink-700 hover:bg-paper-50'
                }
                ${isDisabled
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
                }
                ${Icon && option.label ? 'inline-flex items-center gap-2' : 'inline-flex items-center justify-center'}
              `}
            >
              {Icon && <Icon className={iconSizeClasses[size]} />}
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
