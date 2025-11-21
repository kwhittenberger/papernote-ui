
import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';

export type MaskType = 'phone' | 'credit-card' | 'date' | 'ssn' | 'zip' | 'custom';

export interface MaskedInputHandle {
  focus: () => void;
  blur: () => void;
}

export interface MaskedInputProps {
  value: string;
  onChange: (value: string) => void;
  maskType?: MaskType;
  customMask?: string; // Format: "999-999-9999" where 9=digit, A=letter, *=any
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  className?: string;
}

const MaskedInput = forwardRef<MaskedInputHandle, MaskedInputProps>(({
  value,
  onChange,
  maskType = 'phone',
  customMask,
  label,
  placeholder,
  required = false,
  disabled = false,
  error,
  helperText,
  className = '',
}, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [displayValue, setDisplayValue] = useState(value);

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
  }));

  // Mask patterns
  const masks: Record<MaskType, string> = {
    'phone': '(999) 999-9999',
    'credit-card': '9999 9999 9999 9999',
    'date': '99/99/9999',
    'ssn': '999-99-9999',
    'zip': '99999',
    'custom': customMask || '',
  };

  const mask = customMask || masks[maskType];

  // Apply mask to raw value
  const applyMask = (rawValue: string): { masked: string; raw: string } => {
    if (!mask) return { masked: rawValue, raw: rawValue };

    // Remove all non-alphanumeric characters from input
    const cleaned = rawValue.replace(/[^a-zA-Z0-9]/g, '');

    let masked = '';
    let rawIndex = 0;

    for (let i = 0; i < mask.length && rawIndex < cleaned.length; i++) {
      const maskChar = mask[i];
      const inputChar = cleaned[rawIndex];

      if (maskChar === '9') {
        // Digit only
        if (/\d/.test(inputChar)) {
          masked += inputChar;
          rawIndex++;
        } else {
          break;
        }
      } else if (maskChar === 'A') {
        // Letter only
        if (/[a-zA-Z]/.test(inputChar)) {
          masked += inputChar.toUpperCase();
          rawIndex++;
        } else {
          break;
        }
      } else if (maskChar === '*') {
        // Any character
        masked += inputChar;
        rawIndex++;
      } else {
        // Separator character
        masked += maskChar;
      }
    }

    return { masked, raw: cleaned };
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const { masked, raw } = applyMask(inputValue);

    setDisplayValue(masked);
    onChange(raw);
  };

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    const { masked, raw } = applyMask(pastedText);

    setDisplayValue(masked);
    onChange(raw);
  };

  // Sync display value with prop value
  React.useEffect(() => {
    const { masked } = applyMask(value);
    setDisplayValue(masked);
  }, [value, mask]);

  // Get placeholder based on mask type
  const getPlaceholder = (): string => {
    if (placeholder) return placeholder;

    const placeholders: Record<MaskType, string> = {
      'phone': '(555) 123-4567',
      'credit-card': '1234 5678 9012 3456',
      'date': 'MM/DD/YYYY',
      'ssn': '123-45-6789',
      'zip': '12345',
      'custom': mask.replace(/9/g, '#').replace(/A/g, 'X'),
    };

    return placeholders[maskType] || '';
  };

  return (
    <div className={className}>
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-ink-900 mb-1.5">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}

      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        value={displayValue}
        onChange={handleChange}
        onPaste={handlePaste}
        placeholder={getPlaceholder()}
        disabled={disabled}
        className={`
          w-full px-3 py-2
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

MaskedInput.displayName = 'MaskedInput';
export default MaskedInput;
