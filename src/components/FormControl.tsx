
import React from 'react';

export interface FormControlProps {
  /** Field label */
  label?: string;
  /** Required field indicator */
  required?: boolean;
  /** Error message */
  error?: string;
  /** Helper text (shown when no error) */
  helperText?: string;
  /** Form input element(s) */
  children: React.ReactNode;
  /** Custom className for container */
  className?: string;
  /** HTML id for the input (used for label association) */
  htmlFor?: string;
}

/**
 * FormControl wrapper component for consistent form field layout.
 *
 * Provides:
 * - Label with required indicator
 * - Error message display
 * - Helper text
 * - Consistent spacing
 *
 * @example
 * ```tsx
 * <FormControl label="Email" required error={errors.email} helperText="We'll never share your email">
 *   <Input {...register('email')} />
 * </FormControl>
 * ```
 */
export default function FormControl({
  label,
  required = false,
  error,
  helperText,
  children,
  className = '',
  htmlFor,
}: FormControlProps) {
  return (
    <div className={`${className}`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={htmlFor}
          className="block text-sm font-medium text-ink-700 mb-1"
        >
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}

      {/* Input */}
      <div>
        {children}
      </div>

      {/* Error message or helper text */}
      {(error || helperText) && (
        <p className={`mt-1 text-xs ${error ? 'text-error-600' : 'text-ink-500'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
}
