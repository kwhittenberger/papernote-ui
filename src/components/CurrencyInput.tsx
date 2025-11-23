import React, { forwardRef, useState, useEffect } from 'react';
import Input, { InputProps } from './Input';

export interface CurrencyInputProps extends Omit<InputProps, 'type' | 'value' | 'onChange' | 'prefix'> {
  /** Numeric value (not formatted) */
  value?: number | string;
  /** Callback when value changes (receives numeric value) */
  onChange?: (value: number | null) => void;
  /** Currency code (default: 'USD') */
  currency?: string;
  /** Locale for formatting (default: 'en-US') */
  locale?: string;
  /** Number of decimal places (default: 2) */
  precision?: number;
  /** Allow negative values (default: false) */
  allowNegative?: boolean;
  /** Minimum allowed value */
  min?: number;
  /** Maximum allowed value */
  max?: number;
}

/**
 * CurrencyInput - Specialized input for monetary values
 *
 * Automatically formats currency values with proper symbols and thousands separators.
 * Handles parsing and validation of numeric currency input.
 *
 * @example Basic usage
 * ```tsx
 * <CurrencyInput
 *   label="Price"
 *   value={price}
 *   onChange={setPrice}
 *   currency="USD"
 * />
 * ```
 *
 * @example With validation
 * ```tsx
 * <CurrencyInput
 *   label="Budget"
 *   value={budget}
 *   onChange={setBudget}
 *   min={0}
 *   max={10000}
 *   validationState={budget > 10000 ? 'error' : null}
 *   validationMessage={budget > 10000 ? 'Exceeds maximum budget' : ''}
 * />
 * ```
 */
const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  (
    {
      value,
      onChange,
      currency = 'USD',
      locale = 'en-US',
      precision = 2,
      allowNegative = false,
      min,
      max,
      onBlur,
      onFocus,
      ...props
    },
    ref
  ) => {
    const [displayValue, setDisplayValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    // Get currency symbol
    const getCurrencySymbol = () => {
      const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
      });
      const parts = formatter.formatToParts(0);
      const symbolPart = parts.find(part => part.type === 'currency');
      return symbolPart?.value || '$';
    };

    const currencySymbol = getCurrencySymbol();

    // Format number as currency
    const formatCurrency = (num: number): string => {
      const formatter = new Intl.NumberFormat(locale, {
        minimumFractionDigits: isFocused ? 0 : precision,
        maximumFractionDigits: precision,
      });
      return formatter.format(num);
    };

    // Parse display value to number
    const parseValue = (str: string): number | null => {
      if (!str || str === '') return null;

      // Remove all non-numeric characters except decimal point and minus sign
      let cleaned = str.replace(/[^\d.-]/g, '');

      // Handle multiple decimal points
      const parts = cleaned.split('.');
      if (parts.length > 2) {
        cleaned = parts[0] + '.' + parts.slice(1).join('');
      }

      // Handle multiple minus signs (keep only first)
      const minusCount = (cleaned.match(/-/g) || []).length;
      if (minusCount > 1) {
        const hasLeadingMinus = cleaned.startsWith('-');
        cleaned = cleaned.replace(/-/g, '');
        if (hasLeadingMinus) cleaned = '-' + cleaned;
      }

      // Parse to float
      const num = parseFloat(cleaned);

      if (isNaN(num)) return null;

      // Apply precision
      return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
    };

    // Update display value when external value changes
    useEffect(() => {
      if (value === undefined || value === null || value === '') {
        setDisplayValue('');
      } else {
        const numValue = typeof value === 'string' ? parseFloat(value) : value;
        if (!isNaN(numValue)) {
          setDisplayValue(formatCurrency(numValue));
        }
      }
    }, [value, isFocused]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setDisplayValue(inputValue);

      const numValue = parseValue(inputValue);

      // Validate constraints
      if (numValue !== null) {
        if (!allowNegative && numValue < 0) return;
        if (min !== undefined && numValue < min) return;
        if (max !== undefined && numValue > max) return;
      }

      onChange?.(numValue);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      // Remove formatting when focused for easier editing
      if (value !== undefined && value !== null && value !== '') {
        const numValue = typeof value === 'string' ? parseFloat(value) : value;
        if (!isNaN(numValue)) {
          setDisplayValue(numValue.toString());
        }
      }
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      // Reformat on blur
      const numValue = parseValue(displayValue);
      if (numValue !== null) {
        setDisplayValue(formatCurrency(numValue));
      } else if (displayValue === '') {
        setDisplayValue('');
      }
      onBlur?.(e);
    };

    return (
      <Input
        ref={ref}
        type="text"
        value={displayValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        prefix={currencySymbol}
        {...props}
      />
    );
  }
);

CurrencyInput.displayName = 'CurrencyInput';

export default CurrencyInput;
