// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

import { useState, useMemo, useRef, forwardRef, useImperativeHandle } from 'react';
import { Eye, EyeOff, Check, X } from 'lucide-react';

export interface PasswordInputHandle {
  focus: () => void;
  blur: () => void;
}

export interface PasswordStrength {
  score: number; // 0-4
  label: string;
  color: string;
  feedback: string[];
}

export interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  showStrength?: boolean;
  showRequirements?: boolean;
  requirements?: {
    minLength?: number;
    requireUppercase?: boolean;
    requireLowercase?: boolean;
    requireNumber?: boolean;
    requireSpecial?: boolean;
  };
  className?: string;
}

const PasswordInput = forwardRef<PasswordInputHandle, PasswordInputProps>(({
  value,
  onChange,
  label,
  placeholder = 'Enter password',
  required = false,
  disabled = false,
  error,
  helperText,
  showStrength = true,
  showRequirements = true,
  requirements = {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumber: true,
    requireSpecial: true,
  },
  className = '',
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
  }));

  // Calculate password strength
  const strength = useMemo((): PasswordStrength => {
    if (!value) {
      return { score: 0, label: 'Too weak', color: 'bg-ink-300', feedback: [] };
    }

    let score = 0;
    const feedback: string[] = [];

    // Length check
    if (value.length >= (requirements.minLength || 8)) {
      score++;
    } else {
      feedback.push(`At least ${requirements.minLength || 8} characters`);
    }

    // Uppercase check
    if (requirements.requireUppercase && /[A-Z]/.test(value)) {
      score++;
    } else if (requirements.requireUppercase) {
      feedback.push('One uppercase letter');
    }

    // Lowercase check
    if (requirements.requireLowercase && /[a-z]/.test(value)) {
      score++;
    } else if (requirements.requireLowercase) {
      feedback.push('One lowercase letter');
    }

    // Number check
    if (requirements.requireNumber && /[0-9]/.test(value)) {
      score++;
    } else if (requirements.requireNumber) {
      feedback.push('One number');
    }

    // Special character check
    if (requirements.requireSpecial && /[^A-Za-z0-9]/.test(value)) {
      score++;
    } else if (requirements.requireSpecial) {
      feedback.push('One special character');
    }

    // Determine label and color based on score
    const maxScore = [
      requirements.minLength,
      requirements.requireUppercase,
      requirements.requireLowercase,
      requirements.requireNumber,
      requirements.requireSpecial,
    ].filter(Boolean).length;

    const percentage = (score / maxScore) * 100;

    if (percentage === 100) {
      return { score, label: 'Strong', color: 'bg-success-500', feedback };
    } else if (percentage >= 75) {
      return { score, label: 'Good', color: 'bg-success-400', feedback };
    } else if (percentage >= 50) {
      return { score, label: 'Fair', color: 'bg-warning-500', feedback };
    } else if (percentage >= 25) {
      return { score, label: 'Weak', color: 'bg-error-400', feedback };
    } else {
      return { score, label: 'Too weak', color: 'bg-error-500', feedback };
    }
  }, [value, requirements]);

  // Check individual requirements
  const requirementsMet = useMemo(() => {
    return {
      length: value.length >= (requirements.minLength || 8),
      uppercase: !requirements.requireUppercase || /[A-Z]/.test(value),
      lowercase: !requirements.requireLowercase || /[a-z]/.test(value),
      number: !requirements.requireNumber || /[0-9]/.test(value),
      special: !requirements.requireSpecial || /[^A-Za-z0-9]/.test(value),
    };
  }, [value, requirements]);

  return (
    <div className={className}>
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-ink-900 mb-1.5">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        <input
          ref={inputRef}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full px-3 py-2 pr-10
            text-sm text-ink-900 placeholder-ink-400
            bg-white border rounded-lg
            focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400
            disabled:bg-paper-100 disabled:cursor-not-allowed
            transition-colors
            ${error
              ? 'border-error-500 focus:ring-error-400 focus:border-error-400'
              : 'border-paper-300'
            }
          `}
        />

        {/* Toggle Password Visibility */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-500 hover:text-ink-700 transition-colors"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Strength Indicator */}
      {showStrength && value && (
        <div className="mt-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-ink-600">Password strength:</span>
            <span className={`text-xs font-semibold ${strength.color.replace('bg-', 'text-')}`}>
              {strength.label}
            </span>
          </div>
          <div className="h-1.5 bg-paper-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${strength.color} transition-all duration-300`}
              style={{ width: `${(strength.score / 5) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Requirements Checklist */}
      {showRequirements && value && (
        <div className="mt-3 space-y-1">
          {requirements.minLength && (
            <div className="flex items-center gap-2 text-xs">
              {requirementsMet.length ? (
                <Check className="h-3.5 w-3.5 text-success-500 flex-shrink-0" />
              ) : (
                <X className="h-3.5 w-3.5 text-error-500 flex-shrink-0" />
              )}
              <span className={requirementsMet.length ? 'text-success-700' : 'text-ink-600'}>
                At least {requirements.minLength} characters
              </span>
            </div>
          )}
          {requirements.requireUppercase && (
            <div className="flex items-center gap-2 text-xs">
              {requirementsMet.uppercase ? (
                <Check className="h-3.5 w-3.5 text-success-500 flex-shrink-0" />
              ) : (
                <X className="h-3.5 w-3.5 text-error-500 flex-shrink-0" />
              )}
              <span className={requirementsMet.uppercase ? 'text-success-700' : 'text-ink-600'}>
                One uppercase letter
              </span>
            </div>
          )}
          {requirements.requireLowercase && (
            <div className="flex items-center gap-2 text-xs">
              {requirementsMet.lowercase ? (
                <Check className="h-3.5 w-3.5 text-success-500 flex-shrink-0" />
              ) : (
                <X className="h-3.5 w-3.5 text-error-500 flex-shrink-0" />
              )}
              <span className={requirementsMet.lowercase ? 'text-success-700' : 'text-ink-600'}>
                One lowercase letter
              </span>
            </div>
          )}
          {requirements.requireNumber && (
            <div className="flex items-center gap-2 text-xs">
              {requirementsMet.number ? (
                <Check className="h-3.5 w-3.5 text-success-500 flex-shrink-0" />
              ) : (
                <X className="h-3.5 w-3.5 text-error-500 flex-shrink-0" />
              )}
              <span className={requirementsMet.number ? 'text-success-700' : 'text-ink-600'}>
                One number
              </span>
            </div>
          )}
          {requirements.requireSpecial && (
            <div className="flex items-center gap-2 text-xs">
              {requirementsMet.special ? (
                <Check className="h-3.5 w-3.5 text-success-500 flex-shrink-0" />
              ) : (
                <X className="h-3.5 w-3.5 text-error-500 flex-shrink-0" />
              )}
              <span className={requirementsMet.special ? 'text-success-700' : 'text-ink-600'}>
                One special character
              </span>
            </div>
          )}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="mt-1.5 text-xs text-error-600">{error}</p>
      )}

      {/* Helper Text */}
      {helperText && !error && (
        <p className="mt-1.5 text-xs text-ink-600">{helperText}</p>
      )}
    </div>
  );
});

PasswordInput.displayName = 'PasswordInput';
export default PasswordInput;
