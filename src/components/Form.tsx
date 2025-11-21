
import React, { useState, FormEvent } from 'react';

export type ValidationRule<T = unknown> = {
  required?: boolean | string;
  min?: number | { value: number; message: string };
  max?: number | { value: number; message: string };
  minLength?: number | { value: number; message: string };
  maxLength?: number | { value: number; message: string };
  pattern?: RegExp | { value: RegExp; message: string };
  validate?: (value: T) => boolean | string | Promise<boolean | string>;
};

export type FieldErrors = Record<string, string>;

export interface FormProps {
  children: React.ReactNode;
  onSubmit: (data: Record<string, unknown>) => void | Promise<void>;
  validationRules?: Record<string, ValidationRule>;
  className?: string;
}

export interface FormContextValue {
  errors: FieldErrors;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  registerField: (name: string, value: unknown) => void;
  setFieldError: (name: string, error: string) => void;
  setFieldTouched: (name: string) => void;
}

export const FormContext = React.createContext<FormContextValue | null>(null);

export function useFormContext() {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a Form component');
  }
  return context;
}

export default function Form({
  children,
  onSubmit,
  validationRules = {},
  className = '',
}: FormProps) {
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate a single field
  const validateField = async (name: string, value: unknown): Promise<string | null> => {
    const rules = validationRules[name];
    if (!rules) return null;

    // Required check
    if (rules.required) {
      const isEmpty =
        value === undefined ||
        value === null ||
        value === '' ||
        (Array.isArray(value) && value.length === 0);

      if (isEmpty) {
        return typeof rules.required === 'string'
          ? rules.required
          : 'This field is required';
      }
    }

    // Min/Max for numbers
    if (typeof value === 'number') {
      if (rules.min !== undefined) {
        const minValue = typeof rules.min === 'object' ? rules.min.value : rules.min;
        const minMessage =
          typeof rules.min === 'object'
            ? rules.min.message
            : `Value must be at least ${minValue}`;
        if (value < minValue) return minMessage;
      }

      if (rules.max !== undefined) {
        const maxValue = typeof rules.max === 'object' ? rules.max.value : rules.max;
        const maxMessage =
          typeof rules.max === 'object'
            ? rules.max.message
            : `Value must be at most ${maxValue}`;
        if (value > maxValue) return maxMessage;
      }
    }

    // MinLength/MaxLength for strings
    if (typeof value === 'string') {
      if (rules.minLength !== undefined) {
        const minLen =
          typeof rules.minLength === 'object' ? rules.minLength.value : rules.minLength;
        const minMessage =
          typeof rules.minLength === 'object'
            ? rules.minLength.message
            : `Must be at least ${minLen} characters`;
        if (value.length < minLen) return minMessage;
      }

      if (rules.maxLength !== undefined) {
        const maxLen =
          typeof rules.maxLength === 'object' ? rules.maxLength.value : rules.maxLength;
        const maxMessage =
          typeof rules.maxLength === 'object'
            ? rules.maxLength.message
            : `Must be at most ${maxLen} characters`;
        if (value.length > maxLen) return maxMessage;
      }

      // Pattern check
      if (rules.pattern) {
        const isRegExpObject = typeof rules.pattern === 'object' && 'value' in rules.pattern;
        const pattern = isRegExpObject ? (rules.pattern as { value: RegExp; message: string }).value : (rules.pattern as RegExp);
        const patternMessage = isRegExpObject
          ? (rules.pattern as { value: RegExp; message: string }).message
          : 'Invalid format';
        if (!pattern.test(value)) return patternMessage;
      }
    }

    // Custom validation
    if (rules.validate) {
      const result = await rules.validate(value);
      if (typeof result === 'string') return result;
      if (result === false) return 'Validation failed';
    }

    return null;
  };

  // Validate all fields
  const validateForm = async (): Promise<boolean> => {
    const newErrors: FieldErrors = {};

    for (const [name, value] of Object.entries(formData)) {
      const error = await validateField(name, value);
      if (error) {
        newErrors[name] = error;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Register field
  const registerField = (name: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Set field error
  const setFieldError = (name: string, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Set field touched
  const setFieldTouched = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  // Handle submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);

    // Validate
    const isValid = await validateForm();
    if (!isValid) return;

    // Submit
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contextValue: FormContextValue = {
    errors,
    touched,
    isSubmitting,
    registerField,
    setFieldError,
    setFieldTouched,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form onSubmit={handleSubmit} className={className} noValidate>
        {children}
      </form>
    </FormContext.Provider>
  );
}
