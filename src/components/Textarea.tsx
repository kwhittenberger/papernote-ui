import { forwardRef, useEffect, useRef } from 'react';
import { AlertCircle, CheckCircle, AlertTriangle, Loader2 } from 'lucide-react';

export type ValidationState = 'error' | 'success' | 'warning' | null;

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  validationState?: ValidationState;
  validationMessage?: string;
  maxLength?: number;
  showCharCount?: boolean;
  /** Auto-expand textarea height based on content */
  autoExpand?: boolean;
  /** Minimum rows when auto-expanding (default: 2) */
  minRows?: number;
  /** Maximum rows when auto-expanding (default: 10) */
  maxRows?: number;
  /** Resize behavior (default: 'vertical') - overridden to 'none' when autoExpand is true */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  /** Show loading spinner (for async operations like auto-save) */
  loading?: boolean;
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
      autoExpand = false,
      minRows = 2,
      maxRows = 10,
      resize = 'vertical',
      loading = false,
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
    const internalRef = useRef<HTMLTextAreaElement>(null);

    // Use forwarded ref if provided, otherwise use internal ref
    const textareaRef = (ref as React.RefObject<HTMLTextAreaElement>) || internalRef;

    // Auto-expand functionality
    useEffect(() => {
      if (autoExpand && textareaRef.current) {
        const textarea = textareaRef.current;

        // Reset height to auto to get the correct scrollHeight
        textarea.style.height = 'auto';

        // Calculate line height
        const computedStyle = window.getComputedStyle(textarea);
        const lineHeight = parseInt(computedStyle.lineHeight);

        // Calculate min and max heights
        const minHeight = lineHeight * minRows;
        const maxHeight = lineHeight * maxRows;

        // Set new height based on content
        const newHeight = Math.min(Math.max(textarea.scrollHeight, minHeight), maxHeight);
        textarea.style.height = `${newHeight}px`;
      }
    }, [value, autoExpand, minRows, maxRows, textareaRef]);

    const getResizeClass = () => {
      if (autoExpand) return 'resize-none overflow-hidden';

      switch (resize) {
        case 'none':
          return 'resize-none';
        case 'vertical':
          return 'resize-y';
        case 'horizontal':
          return 'resize-x';
        case 'both':
          return 'resize';
        default:
          return 'resize-y';
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

        {/* Textarea with loading indicator */}
        <div className="relative">
          <textarea
            ref={textareaRef}
            id={textareaId}
            value={value}
            maxLength={maxLength}
            rows={autoExpand ? minRows : rows}
            className={`
              block w-full px-4 py-3 border rounded-lg text-sm text-ink-800 placeholder-ink-400
              bg-white bg-subtle-grain transition-all duration-200
              focus:outline-none focus:ring-2 ${getResizeClass()}
              disabled:bg-paper-100 disabled:text-ink-400 disabled:cursor-not-allowed disabled:opacity-60
              ${getValidationClasses()}
              ${loading ? 'pr-10' : ''}
              ${className}
            `}
            aria-invalid={validationState === 'error'}
            aria-describedby={validationMessage || helperText ? `${textareaId}-help` : undefined}
            aria-required={props.required}
            {...props}
          />
          {loading && (
            <div className="absolute top-3 right-3 pointer-events-none">
              <Loader2 className="h-5 w-5 text-ink-400 animate-spin" />
            </div>
          )}
        </div>

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
