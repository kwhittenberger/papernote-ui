// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React, { forwardRef } from 'react';
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

export type ValidationState = 'error' | 'success' | 'warning' | null;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  validationState?: ValidationState;
  validationMessage?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      validationState,
      validationMessage,
      icon,
      iconPosition = 'left',
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;

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
          <label htmlFor={inputId} className="label">
            {label}
            {props.required && <span className="text-error-500 ml-1">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {icon && iconPosition === 'left' && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-400">
              {icon}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            className={`
              input
              ${getValidationClasses()}
              ${icon && iconPosition === 'left' ? 'pl-10' : ''}
              ${icon && iconPosition === 'right' ? 'pr-10' : ''}
              ${validationState ? 'pr-10' : ''}
              ${className}
            `}
            {...props}
          />

          {/* Right Icon or Validation Icon */}
          {(icon && iconPosition === 'right') || validationState ? (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              {validationState ? getValidationIcon() : icon}
            </div>
          ) : null}
        </div>

        {/* Helper Text or Validation Message */}
        {(helperText || validationMessage) && (
          <p className={`mt-2 text-xs ${validationMessage ? getValidationMessageColor() : 'text-ink-600'}`}>
            {validationMessage || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
