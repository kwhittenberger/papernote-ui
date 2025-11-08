// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import { forwardRef } from 'react';
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

export type ValidationState = 'error' | 'success' | 'warning' | null;

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  validationState?: ValidationState;
  validationMessage?: string;
  maxLength?: number;
  showCharCount?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      validationState,
      validationMessage,
      maxLength,
      showCharCount = false,
      className = '',
      id,
      value,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substring(2, 9)}`;
    const currentLength = typeof value === 'string' ? value.length : 0;

    const getValidationClasses = () => {
      switch (validationState) {
        case 'error':
          return 'border-error-400 focus:border-error-400 focus:ring-error-400';
        case 'success':
          return 'border-success-400 focus:border-success-400 focus:ring-success-400';
        case 'warning':
          return 'border-warning-400 focus:border-warning-400 focus:ring-warning-400';
        default:
          return 'border-paper-300 focus:border-accent-400 focus:ring-accent-400 hover:border-paper-400';
      }
    };

    const getValidationIcon = () => {
      switch (validationState) {
        case 'error':
          return <AlertCircle className="h-5 w-5 text-error-500" />;
        case 'success':
          return <CheckCircle className="h-5 w-5 text-success-500" />;
        case 'warning':
          return <AlertTriangle className="h-5 w-5 text-warning-500" />;
        default:
          return null;
      }
    };

    const getValidationMessageColor = () => {
      switch (validationState) {
        case 'error':
          return 'text-error-600';
        case 'success':
          return 'text-success-600';
        case 'warning':
          return 'text-warning-600';
        default:
          return 'text-ink-600';
      }
    };

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label htmlFor={textareaId} className="label">
            {label}
            {props.required && <span className="text-error-500 ml-1">*</span>}
          </label>
        )}

        {/* Textarea */}
        <textarea
          ref={ref}
          id={textareaId}
          value={value}
          maxLength={maxLength}
          rows={rows}
          className={`
            block w-full px-4 py-3 border rounded-lg text-sm text-ink-800 placeholder-ink-400
            bg-white bg-subtle-grain transition-all duration-200
            focus:outline-none focus:ring-2 resize-y
            disabled:bg-paper-100 disabled:text-ink-400 disabled:cursor-not-allowed disabled:opacity-60
            ${getValidationClasses()}
            ${className}
          `}
          aria-invalid={validationState === 'error'}
          aria-describedby={validationMessage || helperText ? `${textareaId}-help` : undefined}
          aria-required={props.required}
          {...props}
        />

        {/* Helper Text / Validation Message / Character Count */}
        {((helperText || validationMessage) || (showCharCount && maxLength)) && (
          <div className="mt-2 flex items-center justify-between">
            {/* Left: Helper/Validation */}
            <div className="flex items-center gap-2">
              {validationState && getValidationIcon()}
              {(helperText || validationMessage) && (
                <p
                  id={`${textareaId}-help`}
                  className={`text-xs ${
                    validationMessage ? getValidationMessageColor() : 'text-ink-600'
                  }`}
                >
                  {validationMessage || helperText}
                </p>
              )}
            </div>

            {/* Right: Character Count */}
            {showCharCount && maxLength && (
              <p
                className={`text-xs ${
                  currentLength >= maxLength ? 'text-error-600' : 'text-ink-500'
                }`}
              >
                {currentLength} / {maxLength}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
