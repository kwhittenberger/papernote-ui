// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import { forwardRef } from 'react';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface RadioGroupProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: RadioOption[];
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  helperText?: string;
  disabled?: boolean;
  className?: string;
}

const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(({
  name,
  value,
  onChange,
  options,
  orientation = 'vertical',
  label,
  helperText,
  disabled = false,
  className = '',
}, ref) => {
  const groupId = `radio-group-${Math.random().toString(36).substring(2, 9)}`;

  const handleKeyDown = (e: React.KeyboardEvent, currentValue: string) => {
    if (disabled) return;

    const currentIndex = options.findIndex(opt => opt.value === currentValue);
    let nextIndex = currentIndex;

    if (
      (orientation === 'vertical' && e.key === 'ArrowDown') ||
      (orientation === 'horizontal' && e.key === 'ArrowRight')
    ) {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % options.length;
    } else if (
      (orientation === 'vertical' && e.key === 'ArrowUp') ||
      (orientation === 'horizontal' && e.key === 'ArrowLeft')
    ) {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + options.length) % options.length;
    }

    if (nextIndex !== currentIndex) {
      const nextOption = options[nextIndex];
      if (!nextOption.disabled) {
        onChange(nextOption.value);
      }
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Group Label */}
      {label && (
        <label className="label" id={groupId}>
          {label}
        </label>
      )}

      {/* Radio Options */}
      <div
        ref={ref}
        role="radiogroup"
        aria-labelledby={label ? groupId : undefined}
        aria-describedby={helperText ? `${groupId}-help` : undefined}
        className={
          orientation === 'vertical'
            ? 'space-y-3'
            : 'flex gap-4 flex-wrap'
        }
      >
        {options.map((option) => {
          const isSelected = value === option.value;
          const isDisabled = disabled || option.disabled;
          const optionId = `${name}-${option.value}`;

          return (
            <label
              key={option.value}
              htmlFor={optionId}
              className={`flex items-start gap-3 ${
                isDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              {/* Radio Button */}
              <div className="relative inline-block flex-shrink-0 mt-0.5">
                <input
                  type="radio"
                  id={optionId}
                  name={name}
                  value={option.value}
                  checked={isSelected}
                  onChange={() => !isDisabled && onChange(option.value)}
                  onKeyDown={(e) => handleKeyDown(e, option.value)}
                  disabled={isDisabled}
                  className="sr-only"
                  role="radio"
                  aria-checked={isSelected}
                />
                <div
                  className={`
                    w-4 h-4 rounded-full border transition-all duration-200
                    flex items-center justify-center
                    ${
                      isSelected
                        ? 'border-accent-600'
                        : 'border-paper-300 hover:border-paper-400'
                    }
                    ${!isDisabled && 'focus-within:ring-2 focus-within:ring-accent-400 focus-within:ring-offset-2'}
                  `}
                >
                  {isSelected && (
                    <div className="w-2 h-2 bg-accent-600 rounded-full" />
                  )}
                </div>
              </div>

              {/* Label & Description */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {option.icon && <span className="text-ink-700">{option.icon}</span>}
                  <p className="text-sm font-medium text-ink-900">{option.label}</p>
                </div>
                {option.description && (
                  <p className="text-xs text-ink-600 mt-0.5">{option.description}</p>
                )}
              </div>
            </label>
          );
        })}
      </div>

      {/* Helper Text */}
      {helperText && (
        <p id={`${groupId}-help`} className="mt-2 text-xs text-ink-600">
          {helperText}
        </p>
      )}
    </div>
  );
});

RadioGroup.displayName = 'RadioGroup';
export default RadioGroup;
