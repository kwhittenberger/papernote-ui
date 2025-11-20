import { useState, useEffect, forwardRef } from 'react';
import { Plus, Minus } from 'lucide-react';

export interface NumberInputProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  readOnly?: boolean;
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  precision?: number; // Decimal places
  formatValue?: (value: number) => string;
}

const sizeClasses = {
  sm: {
    input: 'h-8 px-2 text-sm',
    button: 'h-8 w-8',
    icon: 'h-3 w-3',
    label: 'text-sm',
  },
  md: {
    input: 'h-10 px-3 text-base',
    button: 'h-10 w-10',
    icon: 'h-4 w-4',
    label: 'text-sm',
  },
  lg: {
    input: 'h-12 px-4 text-lg',
    button: 'h-12 w-12',
    icon: 'h-5 w-5',
    label: 'text-base',
  },
};

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(({
  value = 0,
  onChange,
  min,
  max,
  step = 1,
  disabled = false,
  readOnly = false,
  label,
  helperText,
  error,
  required = false,
  size = 'md',
  className = '',
  placeholder,
  id,
  name,
  precision,
  formatValue,
}, ref) {
  const [internalValue, setInternalValue] = useState<string>(String(value));
  const [isFocused, setIsFocused] = useState(false);

  const sizeStyle = sizeClasses[size];

  useEffect(() => {
    setInternalValue(String(value));
  }, [value]);

  const formatNumber = (num: number): string => {
    if (formatValue) return formatValue(num);
    if (precision !== undefined) return num.toFixed(precision);
    return String(num);
  };

  const parseNumber = (str: string): number => {
    const parsed = parseFloat(str);
    return isNaN(parsed) ? value : parsed;
  };

  const clampValue = (num: number): number => {
    let clamped = num;
    if (min !== undefined) clamped = Math.max(min, clamped);
    if (max !== undefined) clamped = Math.min(max, clamped);
    return clamped;
  };

  const handleIncrement = () => {
    if (disabled || readOnly) return;
    const newValue = clampValue(value + step);
    onChange?.(newValue);
  };

  const handleDecrement = () => {
    if (disabled || readOnly) return;
    const newValue = clampValue(value - step);
    onChange?.(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInternalValue(inputValue);

    // Allow typing negative signs and decimals
    if (inputValue === '' || inputValue === '-' || inputValue === '.') {
      return;
    }

    const parsed = parseNumber(inputValue);
    if (!isNaN(parsed)) {
      onChange?.(clampValue(parsed));
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    // Format value on blur
    setInternalValue(formatNumber(value));
  };

  const handleFocus = () => {
    setIsFocused(true);
    // Show raw number when focused
    setInternalValue(String(value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      handleIncrement();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      handleDecrement();
    }
  };

  const isMinDisabled = min !== undefined && value <= min;
  const isMaxDisabled = max !== undefined && value >= max;

  const displayValue = isFocused ? internalValue : formatNumber(value);

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className={`font-medium text-ink-700 ${sizeStyle.label}`}
        >
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}

      {/* Input Group */}
      <div className="relative flex items-center">
        {/* Decrement Button */}
        <button
          type="button"
          onClick={handleDecrement}
          disabled={disabled || readOnly || isMinDisabled}
          className={`
            ${sizeStyle.button}
            flex items-center justify-center
            border border-r-0 border-ink-300 rounded-l-lg
            bg-white hover:bg-ink-50
            transition-colors
            ${
              disabled || readOnly || isMinDisabled
                ? 'opacity-50 cursor-not-allowed'
                : 'cursor-pointer'
            }
            ${error ? 'border-error-500' : ''}
          `}
          aria-label="Decrease value"
        >
          <Minus className={sizeStyle.icon} />
        </button>

        {/* Input */}
        <input
          ref={ref}
          type="text"
          inputMode="decimal"
          id={id}
          name={name}
          value={displayValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          required={required}
          className={`
            ${sizeStyle.input}
            flex-1 text-center
            border-t border-b border-ink-300
            focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500
            disabled:bg-ink-50 disabled:text-ink-500 disabled:cursor-not-allowed
            read-only:bg-ink-50 read-only:cursor-default
            ${error ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}
          `}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        />

        {/* Increment Button */}
        <button
          type="button"
          onClick={handleIncrement}
          disabled={disabled || readOnly || isMaxDisabled}
          className={`
            ${sizeStyle.button}
            flex items-center justify-center
            border border-l-0 border-ink-300 rounded-r-lg
            bg-white hover:bg-ink-50
            transition-colors
            ${
              disabled || readOnly || isMaxDisabled
                ? 'opacity-50 cursor-not-allowed'
                : 'cursor-pointer'
            }
            ${error ? 'border-error-500' : ''}
          `}
          aria-label="Increase value"
        >
          <Plus className={sizeStyle.icon} />
        </button>
      </div>

      {/* Helper Text / Error */}
      {(error || helperText) && (
        <span
          id={error ? `${id}-error` : `${id}-helper`}
          className={`text-xs ${error ? 'text-error-600' : 'text-ink-600'}`}
          role={error ? 'alert' : undefined}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
});

NumberInput.displayName = 'NumberInput';
export default NumberInput;
