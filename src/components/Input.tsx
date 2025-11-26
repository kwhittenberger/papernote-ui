import React, { forwardRef, useState } from 'react';
import { AlertCircle, CheckCircle, AlertTriangle, Eye, EyeOff, X, Loader2 } from 'lucide-react';

/**
 * Validation state for input components
 */
export type ValidationState = 'error' | 'success' | 'warning' | null;

/**
 * Input component props
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input label text */
  label?: string;
  /** Helper text displayed below input */
  helperText?: string;
  /** Visual validation state */
  validationState?: ValidationState;
  /** Validation message (overrides helperText when present) */
  validationMessage?: string;
  /** Icon to display in input (legacy - use prefixIcon/suffixIcon) */
  icon?: React.ReactNode;
  /** Position of icon (legacy - use prefixIcon/suffixIcon) */
  iconPosition?: 'left' | 'right';
  /** Show character counter (requires maxLength prop) */
  showCount?: boolean;
  /** Text prefix (displayed inside input, before value) */
  prefix?: string;
  /** Text suffix (displayed inside input, after value) */
  suffix?: string;
  /** Icon prefix (displayed inside input, before value) */
  prefixIcon?: React.ReactNode;
  /** Icon suffix (displayed inside input, after value) */
  suffixIcon?: React.ReactNode;
  /** Show password visibility toggle (only for type="password") */
  showPasswordToggle?: boolean;
  /** Show clearable button to clear input value */
  clearable?: boolean;
  /** Callback when clear button is clicked */
  onClear?: () => void;
  /** Show loading spinner in input */
  loading?: boolean;
  
  // Mobile optimization props
  /** 
   * Input mode hint for mobile keyboards.
   * 'none' - No virtual keyboard
   * 'text' - Standard text keyboard (default)
   * 'decimal' - Decimal number keyboard
   * 'numeric' - Numeric keyboard
   * 'tel' - Telephone keypad
   * 'search' - Search optimized keyboard
   * 'email' - Email optimized keyboard
   * 'url' - URL optimized keyboard
   */
  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
  /**
   * Enter key hint for mobile keyboards.
   * 'enter' - Standard enter key
   * 'done' - Done action
   * 'go' - Go/navigate action
   * 'next' - Move to next field
   * 'previous' - Move to previous field
   * 'search' - Search action
   * 'send' - Send action
   */
  enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
  /** Size variant - 'md' is default, 'lg' provides larger touch target (44px min) */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Input - Text input component with validation, icons, and prefixes/suffixes
 *
 * A feature-rich text input with support for validation states, character counting,
 * password visibility toggle, prefix/suffix text and icons, and clearable functionality.
 * 
 * Mobile optimizations:
 * - inputMode prop for appropriate mobile keyboard
 * - enterKeyHint prop for mobile keyboard action button
 * - Size variants with touch-friendly targets (44px for 'lg')
 *
 * @example Basic input with label
 * ```tsx
 * <Input 
 *   label="Email" 
 *   type="email" 
 *   placeholder="Enter your email"
 *   inputMode="email"
 *   enterKeyHint="next"
 * />
 * ```
 *
 * @example With validation
 * ```tsx
 * <Input
 *   label="Username"
 *   value={username}
 *   onChange={(e) => setUsername(e.target.value)}
 *   validationState={error ? 'error' : 'success'}
 *   validationMessage={error || 'Username is available'}
 * />
 * ```
 *
 * @example Password with toggle and character count
 * ```tsx
 * <Input
 *   type="password"
 *   label="Password"
 *   showPasswordToggle
 *   showCount
 *   maxLength={50}
 * />
 * ```
 *
 * @example Mobile-optimized phone input
 * ```tsx
 * <Input
 *   label="Phone Number"
 *   type="tel"
 *   inputMode="tel"
 *   enterKeyHint="done"
 *   size="lg"
 * />
 * ```
 *
 * @example With prefix/suffix
 * ```tsx
 * <Input
 *   label="Amount"
 *   type="number"
 *   inputMode="decimal"
 *   prefixIcon={<DollarSign />}
 *   suffix="USD"
 *   clearable
 * />
 * ```
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      validationState,
      validationMessage,
      icon,
      iconPosition = 'left',
      showCount = false,
      prefix,
      suffix,
      prefixIcon,
      suffixIcon,
      showPasswordToggle = false,
      clearable = false,
      onClear,
      loading = false,
      className = '',
      id,
      type = 'text',
      value,
      maxLength,
      inputMode,
      enterKeyHint,
      size = 'md',
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
    const [showPassword, setShowPassword] = useState(false);

    // Handle clear button click
    const handleClear = () => {
      if (onClear) {
        onClear();
      } else if (props.onChange) {
        // Create a synthetic event to trigger onChange
        const syntheticEvent = {
          target: { value: '' },
          currentTarget: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>;
        props.onChange(syntheticEvent);
      }
    };

    // Show clear button if clearable and has value
    const showClearButton = clearable && value && String(value).length > 0;

    // Determine actual input type (handle password toggle)
    const actualType = type === 'password' && showPassword ? 'text' : type;

    // Calculate character count
    const currentLength = value ? String(value).length : 0;
    const showCounter = showCount && maxLength;

    // Auto-detect inputMode based on type if not specified
    const effectiveInputMode = inputMode || (() => {
      switch (type) {
        case 'email': return 'email';
        case 'tel': return 'tel';
        case 'url': return 'url';
        case 'number': return 'decimal';
        case 'search': return 'search';
        default: return undefined;
      }
    })();

    // Size classes
    const sizeClasses = {
      sm: 'h-8 text-sm',
      md: 'h-10 text-base',
      lg: 'h-12 text-base min-h-touch', // 44px touch target
    };

    const buttonSizeClasses = {
      sm: 'p-1',
      md: 'p-1.5',
      lg: 'p-2 min-w-touch-sm min-h-touch-sm', // 36px touch target for buttons
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
          {/* Prefix Text */}
          {prefix && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-500 text-sm">
              {prefix}
            </div>
          )}

          {/* Prefix Icon */}
          {prefixIcon && !prefix && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-400">
              {prefixIcon}
            </div>
          )}

          {/* Left Icon (legacy support) */}
          {icon && iconPosition === 'left' && !prefix && !prefixIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-400">
              {icon}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            type={actualType}
            value={value}
            maxLength={maxLength}
            inputMode={effectiveInputMode}
            enterKeyHint={enterKeyHint}
            className={`
              input
              ${sizeClasses[size]}
              ${getValidationClasses()}
              ${prefix ? 'pl-' + (prefix.length * 8 + 12) : ''}
              ${prefixIcon && !prefix ? 'pl-10' : ''}
              ${icon && iconPosition === 'left' && !prefix && !prefixIcon ? 'pl-10' : ''}
              ${suffix ? 'pr-' + (suffix.length * 8 + 12) : ''}
              ${suffixIcon && !suffix ? 'pr-10' : ''}
              ${icon && iconPosition === 'right' && !suffix && !suffixIcon ? 'pr-10' : ''}
              ${validationState && !suffix && !suffixIcon && !showPasswordToggle ? 'pr-10' : ''}
              ${(showPasswordToggle && type === 'password') || validationState || suffix || suffixIcon ? 'pr-20' : ''}
              ${className}
            `}
            {...props}
          />

          {/* Suffix Text */}
          {suffix && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-ink-500 text-sm">
              {suffix}
            </div>
          )}

          {/* Right Icon, Validation Icon, Clear Button, or Password Toggle */}
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1">
            {/* Loading Spinner */}
            {loading && (
              <div className="pointer-events-none text-ink-400">
                <Loader2 className="h-5 w-5 animate-spin" />
              </div>
            )}

            {/* Suffix Icon */}
            {suffixIcon && !suffix && !validationState && !showPasswordToggle && !showClearButton && !loading && (
              <div className="pointer-events-none text-ink-400">
                {suffixIcon}
              </div>
            )}

            {/* Clear Button */}
            {showClearButton && (
              <button
                type="button"
                onClick={handleClear}
                className={`text-ink-400 hover:text-ink-600 focus:outline-none cursor-pointer pointer-events-auto rounded-full hover:bg-paper-100 flex items-center justify-center ${buttonSizeClasses[size]}`}
                aria-label="Clear input"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            {/* Password Toggle */}
            {type === 'password' && showPasswordToggle && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`text-ink-400 hover:text-ink-600 focus:outline-none cursor-pointer pointer-events-auto rounded-full hover:bg-paper-100 flex items-center justify-center ${buttonSizeClasses[size]}`}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            )}

            {/* Validation Icon */}
            {validationState && (
              <div className="pointer-events-none">
                {getValidationIcon()}
              </div>
            )}

            {/* Right Icon (legacy support - if no suffix/suffixIcon) */}
            {icon && iconPosition === 'right' && !suffix && !suffixIcon && !validationState && (
              <div className="pointer-events-none text-ink-400">
                {icon}
              </div>
            )}
          </div>
        </div>

        {/* Helper Text, Validation Message, or Character Counter */}
        <div className="flex justify-between items-center mt-2">
          {(helperText || validationMessage) && (
            <p className={`text-xs ${validationMessage ? getValidationMessageColor() : 'text-ink-600'}`}>
              {validationMessage || helperText}
            </p>
          )}
          {showCounter && (
            <p className={`text-xs ml-auto ${currentLength > maxLength! ? 'text-error-600' : 'text-ink-500'}`}>
              {currentLength} / {maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
