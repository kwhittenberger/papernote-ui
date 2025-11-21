
import { useState, useRef, useEffect, forwardRef, useImperativeHandle, useId } from 'react';
import { Clock, ChevronUp, ChevronDown, X } from 'lucide-react';

export interface TimePickerHandle {
  focus: () => void;
  blur: () => void;
  open: () => void;
  close: () => void;
}

export interface TimePickerProps {
  /** Selected time value (24-hour format: "HH:mm" or "HH:mm:ss") */
  value?: string | null;
  /** Change handler */
  onChange?: (time: string | null) => void;
  /** Input label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Use 12-hour format */
  use12Hour?: boolean;
  /** Show seconds picker */
  showSeconds?: boolean;
  /** Minute step interval (1, 5, 10, 15, 30) */
  minuteStep?: 1 | 5 | 10 | 15 | 30;
  /** Minimum time (24-hour format: "HH:mm") */
  minTime?: string;
  /** Maximum time (24-hour format: "HH:mm") */
  maxTime?: string;
  /** Validation state */
  validationState?: 'error' | 'success' | 'warning' | null;
  /** Validation message */
  validationMessage?: string;
  /** Helper text */
  helperText?: string;
  /** Required field */
  required?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Custom className */
  className?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

interface TimeValue {
  hours: number;
  minutes: number;
  seconds: number;
  period?: 'AM' | 'PM';
}

/**
 * TimePicker component - Time selection with dropdown spinners.
 *
 * Features:
 * - 12-hour or 24-hour format
 * - Optional seconds
 * - Minute step intervals
 * - Min/max time constraints
 * - Keyboard navigation
 * - Validation states
 * - Spinner controls
 *
 * @example
 * ```tsx
 * <TimePicker
 *   label="Meeting Time"
 *   value={meetingTime}
 *   onChange={setMeetingTime}
 *   use12Hour
 *   minuteStep={15}
 * />
 * ```
 */
const TimePicker = forwardRef<TimePickerHandle, TimePickerProps>(({
  value = null,
  onChange,
  label,
  placeholder = 'Select time',
  use12Hour = false,
  showSeconds = false,
  minuteStep = 1,
  minTime,
  maxTime,
  validationState,
  validationMessage,
  helperText,
  required = false,
  disabled = false,
  className = '',
  size = 'md',
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeValue, setTimeValue] = useState<TimeValue>(() => parseTimeString(value, use12Hour));
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Generate unique IDs for ARIA
  const labelId = useId();
  const dropdownId = useId();
  const descriptionId = useId();

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  // Parse time string to TimeValue object
  function parseTimeString(timeStr: string | null, is12Hour: boolean): TimeValue {
    if (!timeStr) {
      const now = new Date();
      return {
        hours: is12Hour ? (now.getHours() % 12 || 12) : now.getHours(),
        minutes: 0,
        seconds: 0,
        period: is12Hour ? (now.getHours() >= 12 ? 'PM' : 'AM') : undefined,
      };
    }

    const [time, period] = timeStr.split(' ');
    const parts = time.split(':');
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1] || '0', 10);
    const seconds = parseInt(parts[2] || '0', 10);

    if (is12Hour) {
      return {
        hours: hours % 12 || 12,
        minutes,
        seconds,
        period: (period as 'AM' | 'PM') || (hours >= 12 ? 'PM' : 'AM'),
      };
    }

    return { hours, minutes, seconds };
  }

  // Format TimeValue to string
  function formatTimeValue(tv: TimeValue, is12Hour: boolean, includeSeconds: boolean): string {
    let hours = tv.hours;

    if (is12Hour) {
      const formatted = `${hours.toString().padStart(2, '0')}:${tv.minutes.toString().padStart(2, '0')}${includeSeconds ? ':' + tv.seconds.toString().padStart(2, '0') : ''} ${tv.period}`;
      return formatted;
    }

    const formatted = `${hours.toString().padStart(2, '0')}:${tv.minutes.toString().padStart(2, '0')}${includeSeconds ? ':' + tv.seconds.toString().padStart(2, '0') : ''}`;
    return formatted;
  }

  // Convert TimeValue to 24-hour format string for onChange
  function to24HourFormat(tv: TimeValue): string {
    let hours = tv.hours;
    if (tv.period === 'PM' && hours !== 12) {
      hours += 12;
    } else if (tv.period === 'AM' && hours === 12) {
      hours = 0;
    }
    return `${hours.toString().padStart(2, '0')}:${tv.minutes.toString().padStart(2, '0')}${showSeconds ? ':' + tv.seconds.toString().padStart(2, '0') : ''}`;
  }

  // Check if time is within constraints
  function isTimeValid(tv: TimeValue): boolean {
    const timeStr = to24HourFormat(tv);
    const [hours, minutes] = timeStr.split(':').map(Number);
    const timeInMinutes = hours * 60 + minutes;

    if (minTime) {
      const [minH, minM] = minTime.split(':').map(Number);
      const minInMinutes = minH * 60 + minM;
      if (timeInMinutes < minInMinutes) return false;
    }

    if (maxTime) {
      const [maxH, maxM] = maxTime.split(':').map(Number);
      const maxInMinutes = maxH * 60 + maxM;
      if (timeInMinutes > maxInMinutes) return false;
    }

    return true;
  }

  // Update time value and trigger onChange
  const updateTime = (updates: Partial<TimeValue>) => {
    const newTime = { ...timeValue, ...updates };
    setTimeValue(newTime);

    if (isTimeValid(newTime)) {
      onChange?.(to24HourFormat(newTime));
    }
  };

  // Handle clear
  const handleClear = () => {
    onChange?.(null);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Update internal state when value prop changes
  useEffect(() => {
    setTimeValue(parseTimeString(value, use12Hour));
  }, [value, use12Hour]);

  // Size classes
  const sizeClasses = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-sm py-2 px-3',
    lg: 'text-base py-2.5 px-4',
  };

  const iconSizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  // Validation classes
  const validationClasses = {
    error: 'border-error-500 focus:ring-error-500 focus:border-error-500',
    success: 'border-success-500 focus:ring-success-500 focus:border-success-500',
    warning: 'border-warning-500 focus:ring-warning-500 focus:border-warning-500',
  };

  const validationMessageColors = {
    error: 'text-error-600',
    success: 'text-success-600',
    warning: 'text-warning-600',
  };

  // Display value
  const displayValue = value ? formatTimeValue(timeValue, use12Hour, showSeconds) : '';

  // Generate minute options based on step
  const minuteOptions = Array.from({ length: 60 / minuteStep }, (_, i) => i * minuteStep);

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Label */}
      {label && (
        <label id={labelId} className="block text-sm font-medium text-ink-700 mb-1">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}

      {/* Input */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={displayValue}
          onClick={() => !disabled && setIsOpen(true)}
          onFocus={() => !disabled && setIsOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
          readOnly
          className={`
            w-full rounded-md border bg-white cursor-pointer
            ${sizeClasses[size]}
            ${validationState ? validationClasses[validationState] : 'border-paper-300 focus:ring-primary-500 focus:border-primary-500'}
            ${disabled ? 'bg-paper-100 text-ink-400 cursor-not-allowed' : ''}
            focus:outline-none focus:ring-2
            pr-20
          `}
          aria-labelledby={label ? labelId : undefined}
          aria-label={!label ? 'Time picker' : undefined}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-controls={dropdownId}
          aria-invalid={validationState === 'error' ? 'true' : undefined}
          aria-describedby={validationMessage ? descriptionId : undefined}
          role="combobox"
        />

        {/* Icons */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-1">
          {value && !disabled && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}
              className="p-0.5 text-ink-400 hover:text-ink-600 focus:outline-none"
              aria-label="Clear"
              tabIndex={-1}
            >
              <X className={iconSizeClasses[size]} />
            </button>
          )}
          <Clock className={`${iconSizeClasses[size]} text-ink-400`} />
        </div>
      </div>

      {/* Helper text or validation message */}
      {validationMessage && (
        <p id={descriptionId} className={`mt-1 text-xs ${validationState ? validationMessageColors[validationState] : 'text-ink-500'}`} role="alert" aria-live="polite">
          {validationMessage}
        </p>
      )}
      {helperText && !validationMessage && (
        <p className="mt-1 text-xs text-ink-500">
          {helperText}
        </p>
      )}

      {/* Dropdown */}
      {isOpen && (
        <div id={dropdownId} className="absolute z-50 mt-1 bg-white rounded-md shadow-lg border border-paper-200" role="dialog" aria-modal="true" aria-label="Time selection">
          <div className="p-4 flex items-center gap-4">
            {/* Hours */}
            <TimeSpinner
              value={timeValue.hours}
              min={use12Hour ? 1 : 0}
              max={use12Hour ? 12 : 23}
              onChange={(hours) => updateTime({ hours })}
              label="Hour"
            />

            <span className="text-2xl font-bold text-ink-600">:</span>

            {/* Minutes */}
            <TimeSpinner
              value={timeValue.minutes}
              min={0}
              max={59}
              step={minuteStep}
              options={minuteOptions}
              onChange={(minutes) => updateTime({ minutes })}
              label="Min"
            />

            {/* Seconds */}
            {showSeconds && (
              <>
                <span className="text-2xl font-bold text-ink-600">:</span>
                <TimeSpinner
                  value={timeValue.seconds}
                  min={0}
                  max={59}
                  onChange={(seconds) => updateTime({ seconds })}
                  label="Sec"
                />
              </>
            )}

            {/* AM/PM */}
            {use12Hour && (
              <div className="flex flex-col gap-1">
                <button
                  type="button"
                  onClick={() => updateTime({ period: 'AM' })}
                  className={`
                    px-3 py-1 text-sm font-medium rounded
                    ${timeValue.period === 'AM' ? 'bg-primary-500 text-white' : 'bg-paper-100 text-ink-600 hover:bg-paper-200'}
                  `}
                >
                  AM
                </button>
                <button
                  type="button"
                  onClick={() => updateTime({ period: 'PM' })}
                  className={`
                    px-3 py-1 text-sm font-medium rounded
                    ${timeValue.period === 'PM' ? 'bg-primary-500 text-white' : 'bg-paper-100 text-ink-600 hover:bg-paper-200'}
                  `}
                >
                  PM
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
});

TimePicker.displayName = 'TimePicker';
export default TimePicker;

/**
 * TimeSpinner - Individual time unit spinner component
 */
interface TimeSpinnerProps {
  value: number;
  min: number;
  max: number;
  step?: number;
  options?: number[];
  onChange: (value: number) => void;
  label: string;
}

function TimeSpinner({ value, min, max, step = 1, options, onChange, label }: TimeSpinnerProps) {
  const increment = () => {
    if (options) {
      const currentIndex = options.indexOf(value);
      const nextIndex = (currentIndex + 1) % options.length;
      onChange(options[nextIndex]);
    } else {
      const next = value + step;
      onChange(next > max ? min : next);
    }
  };

  const decrement = () => {
    if (options) {
      const currentIndex = options.indexOf(value);
      const prevIndex = currentIndex - 1 < 0 ? options.length - 1 : currentIndex - 1;
      onChange(options[prevIndex]);
    } else {
      const prev = value - step;
      onChange(prev < min ? max : prev);
    }
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        type="button"
        onClick={increment}
        className="p-1 text-ink-600 hover:bg-paper-100 rounded"
        aria-label={`Increase ${label}`}
      >
        <ChevronUp className="h-4 w-4" />
      </button>
      <div className="w-12 text-center">
        <input
          type="text"
          value={value.toString().padStart(2, '0')}
          readOnly
          className="w-full text-center text-2xl font-bold text-ink-900 bg-transparent border-none focus:outline-none"
          aria-label={label}
        />
      </div>
      <button
        type="button"
        onClick={decrement}
        className="p-1 text-ink-600 hover:bg-paper-100 rounded"
        aria-label={`Decrease ${label}`}
      >
        <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  );
}
