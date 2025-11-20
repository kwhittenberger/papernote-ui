// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import { forwardRef } from 'react';
import { Check, Minus } from 'lucide-react';

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  className?: string;
  id?: string;
  name?: string;
  /** Optional icon to display next to label */
  icon?: React.ReactNode;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  indeterminate = false,
  className = '',
  id,
  name,
  icon,
}, ref) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;

  const handleChange = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' && !disabled) {
      e.preventDefault();
      onChange(!checked);
    }
  };

  return (
    <label
      htmlFor={checkboxId}
      className={`flex items-start gap-3 ${
        disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
    >
      {/* Checkbox */}
      <div className="relative inline-block flex-shrink-0 mt-0.5">
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          name={name}
          checked={checked}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className="sr-only"
          aria-checked={indeterminate ? 'mixed' : checked}
        />
        <div
          className={`
            w-4 h-4 rounded border transition-all duration-200
            flex items-center justify-center
            ${
              checked || indeterminate
                ? 'bg-accent-600 border-accent-600'
                : 'bg-white border-paper-300 hover:border-paper-400'
            }
            ${!disabled && 'focus-within:ring-2 focus-within:ring-accent-400 focus-within:ring-offset-2'}
          `}
        >
          {indeterminate ? (
            <Minus className="h-3 w-3 text-white" />
          ) : checked ? (
            <Check className="h-3 w-3 text-white" />
          ) : null}
        </div>
      </div>

      {/* Label & Description */}
      {(label || description) && (
        <div className="flex-1">
          {label && (
            <div className="flex items-center gap-2">
              {icon && <span className="text-ink-700">{icon}</span>}
              <p className="text-sm font-medium text-ink-900">{label}</p>
            </div>
          )}
          {description && (
            <p className="text-xs text-ink-600 mt-0.5">{description}</p>
          )}
        </div>
      )}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
export default Checkbox;
