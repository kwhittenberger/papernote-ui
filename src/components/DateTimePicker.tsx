
import { useState } from 'react';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

export interface DateTimePickerProps {
  /** Selected date-time value (ISO 8601 string) */
  value?: string | null;
  /** Change handler */
  onChange?: (dateTime: string | null) => void;
  /** Input label */
  label?: string;
  /** Date placeholder */
  datePlaceholder?: string;
  /** Time placeholder */
  timePlaceholder?: string;
  /** Use 12-hour time format */
  use12Hour?: boolean;
  /** Show seconds in time picker */
  showSeconds?: boolean;
  /** Minute step interval */
  minuteStep?: 1 | 5 | 10 | 15 | 30;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Disabled dates function */
  disabledDates?: Date[] | ((date: Date) => boolean);
  /** Locale for date formatting */
  locale?: string;
  /** Date format */
  dateFormat?: 'short' | 'medium' | 'long';
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
  /** Layout direction */
  layout?: 'horizontal' | 'vertical';
  /** Custom className */
  className?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * DateTimePicker component - Combined date and time selection.
 *
 * Features:
 * - Combines DatePicker and TimePicker
 * - Supports ISO 8601 date-time strings
 * - Flexible layout (horizontal/vertical)
 * - All DatePicker and TimePicker features
 * - Single onChange with combined value
 *
 * @example
 * ```tsx
 * <DateTimePicker
 *   label="Meeting Date & Time"
 *   value={meetingDateTime}
 *   onChange={setMeetingDateTime}
 *   use12Hour
 *   minuteStep={15}
 * />
 * ```
 */
export default function DateTimePicker({
  value = null,
  onChange,
  label,
  datePlaceholder = 'Select date',
  timePlaceholder = 'Select time',
  use12Hour = false,
  showSeconds = false,
  minuteStep = 1,
  minDate,
  maxDate,
  disabledDates,
  locale = 'en-US',
  dateFormat = 'medium',
  validationState,
  validationMessage,
  helperText,
  required = false,
  disabled = false,
  layout = 'horizontal',
  className = '',
  size = 'md',
}: DateTimePickerProps) {
  // Parse ISO 8601 string to separate date and time
  const parseDateTime = (isoString: string | null): { date: Date | null; time: string | null } => {
    if (!isoString) {
      return { date: null, time: null };
    }

    try {
      const dateTime = new Date(isoString);
      const hours = dateTime.getHours();
      const minutes = dateTime.getMinutes();
      const seconds = dateTime.getSeconds();

      const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}${showSeconds ? ':' + seconds.toString().padStart(2, '0') : ''}`;

      return { date: dateTime, time };
    } catch {
      return { date: null, time: null };
    }
  };

  const { date: initialDate, time: initialTime } = parseDateTime(value);
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate);
  const [selectedTime, setSelectedTime] = useState<string | null>(initialTime);

  // Combine date and time into ISO 8601 string
  const combineDateTime = (date: Date | null, time: string | null): string | null => {
    if (!date) return null;

    if (!time) {
      // If no time selected, use 00:00:00
      const combined = new Date(date);
      combined.setHours(0, 0, 0, 0);
      return combined.toISOString();
    }

    const [hours, minutes, seconds = '0'] = time.split(':');
    const combined = new Date(date);
    combined.setHours(parseInt(hours, 10), parseInt(minutes, 10), parseInt(seconds, 10), 0);

    return combined.toISOString();
  };

  // Handle date change
  const handleDateChange = (newDate: Date | null) => {
    setSelectedDate(newDate);
    onChange?.(combineDateTime(newDate, selectedTime));
  };

  // Handle time change
  const handleTimeChange = (newTime: string | null) => {
    setSelectedTime(newTime);
    onChange?.(combineDateTime(selectedDate, newTime));
  };

  const containerClasses = layout === 'horizontal' ? 'flex gap-4 items-start' : 'space-y-4';

  return (
    <div className={`${className}`}>
      {/* Combined Label */}
      {label && (
        <label className="block text-sm font-medium text-ink-700 mb-1">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}

      {/* Date and Time Pickers */}
      <div className={containerClasses}>
        <div className={layout === 'horizontal' ? 'flex-1' : ''}>
          <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            placeholder={datePlaceholder}
            minDate={minDate}
            maxDate={maxDate}
            disabledDates={disabledDates}
            locale={locale}
            format={dateFormat}
            disabled={disabled}
            size={size}
            validationState={validationState}
          />
        </div>

        <div className={layout === 'horizontal' ? 'flex-1' : ''}>
          <TimePicker
            value={selectedTime}
            onChange={handleTimeChange}
            placeholder={timePlaceholder}
            use12Hour={use12Hour}
            showSeconds={showSeconds}
            minuteStep={minuteStep}
            disabled={disabled}
            size={size}
            validationState={validationState}
          />
        </div>
      </div>

      {/* Helper text or validation message */}
      {(helperText || validationMessage) && (
        <p className={`mt-1 text-xs ${validationState ? validationMessageColors[validationState] : 'text-ink-500'}`}>
          {validationMessage || helperText}
        </p>
      )}
    </div>
  );
}

const validationMessageColors = {
  error: 'text-error-600',
  success: 'text-success-600',
  warning: 'text-warning-600',
};
