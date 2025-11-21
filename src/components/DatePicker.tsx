// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the notebook-ui component library.
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle, useId } from 'react';
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface DatePickerHandle {
  focus: () => void;
  blur: () => void;
  open: () => void;
  close: () => void;
}

export interface DatePickerProps {
  /** Selected date value */
  value?: Date | null;
  /** Change handler */
  onChange?: (date: Date | null) => void;
  /** Input label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Disabled dates - array or function */
  disabledDates?: Date[] | ((date: Date) => boolean);
  /** Locale for date formatting (default: 'en-US') */
  locale?: string;
  /** Date display format */
  format?: 'short' | 'medium' | 'long';
  /** Validation state */
  validationState?: 'error' | 'success' | 'warning' | null;
  /** Validation message */
  validationMessage?: string;
  /** Helper text */
  helperText?: string;
  /** Required field indicator */
  required?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Show today button */
  showTodayButton?: boolean;
  /** Show clear button */
  showClearButton?: boolean;
  /** Custom className */
  className?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

/**
 * DatePicker component for selecting dates with a calendar dropdown.
 *
 * Features:
 * - Calendar popup with month/year navigation
 * - Min/max date constraints
 * - Disabled dates support
 * - Locale-aware formatting
 * - Keyboard navigation
 * - Today and clear buttons
 * - Validation states
 *
 * @example
 * ```tsx
 * <DatePicker
 *   label="Start Date"
 *   value={startDate}
 *   onChange={setStartDate}
 *   minDate={new Date()}
 *   required
 * />
 * ```
 */
const DatePicker = forwardRef<DatePickerHandle, DatePickerProps>(({
  value,
  onChange,
  label,
  placeholder = 'Select date',
  minDate,
  maxDate,
  disabledDates,
  locale = 'en-US',
  format = 'medium',
  validationState,
  validationMessage,
  helperText,
  required = false,
  disabled = false,
  showTodayButton = true,
  showClearButton = true,
  className = '',
  size = 'md',
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(value || new Date());
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Generate unique IDs for ARIA
  const labelId = useId();
  const dialogId = useId();
  const descriptionId = useId();

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

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

  // Update view date when value changes
  useEffect(() => {
    if (value) {
      setViewDate(value);
    }
  }, [value]);

  // Format date for display
  const formatDate = (date: Date | null): string => {
    if (!date) return '';

    let options: Intl.DateTimeFormatOptions;
    switch (format) {
      case 'short':
        options = { month: 'numeric', day: 'numeric', year: 'numeric' };
        break;
      case 'medium':
        options = { month: 'short', day: 'numeric', year: 'numeric' };
        break;
      case 'long':
        options = { month: 'long', day: 'numeric', year: 'numeric' };
        break;
      default:
        options = { month: 'short', day: 'numeric', year: 'numeric' };
    }

    return new Intl.DateTimeFormat(locale, options).format(date);
  };

  // Check if a date is disabled
  const isDateDisabled = (date: Date): boolean => {
    if (minDate && date < new Date(minDate.setHours(0, 0, 0, 0))) {
      return true;
    }
    if (maxDate && date > new Date(maxDate.setHours(23, 59, 59, 999))) {
      return true;
    }
    if (disabledDates) {
      if (Array.isArray(disabledDates)) {
        return disabledDates.some(d =>
          d.getFullYear() === date.getFullYear() &&
          d.getMonth() === date.getMonth() &&
          d.getDate() === date.getDate()
        );
      }
      return disabledDates(date);
    }
    return false;
  };

  // Check if two dates are the same day
  const isSameDay = (date1: Date | null, date2: Date): boolean => {
    if (!date1) return false;
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  // Check if date is today
  const isToday = (date: Date): boolean => {
    const today = new Date();
    return isSameDay(today, date);
  };

  // Get days in month
  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get first day of month (0 = Sunday)
  const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const daysInPrevMonth = getDaysInMonth(year, month - 1);

    const days: { date: Date; isCurrentMonth: boolean }[] = [];

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, daysInPrevMonth - i),
        isCurrentMonth: false,
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
      });
    }

    // Next month days to fill grid
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
      });
    }

    return days;
  };

  // Navigate months
  const goToPrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  // Select date
  const handleSelectDate = (date: Date) => {
    if (isDateDisabled(date)) return;
    onChange?.(date);
    setIsOpen(false);
  };

  // Select today
  const handleSelectToday = () => {
    const today = new Date();
    if (!isDateDisabled(today)) {
      onChange?.(today);
      setViewDate(today);
      setIsOpen(false);
    }
  };

  // Clear date
  const handleClear = () => {
    onChange?.(null);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.focus();
    } else if (e.key === 'Enter' && !isOpen) {
      setIsOpen(true);
    }
  };

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

  // Validation state classes
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
          readOnly
          value={formatDate(value || null)}
          placeholder={placeholder}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={`
            w-full rounded-md border bg-white
            ${sizeClasses[size]}
            ${validationState ? validationClasses[validationState] : 'border-paper-300 focus:ring-primary-500 focus:border-primary-500'}
            ${disabled ? 'bg-paper-100 text-ink-400 cursor-not-allowed' : 'cursor-pointer'}
            focus:outline-none focus:ring-2
            pr-10
          `}
          aria-labelledby={label ? labelId : undefined}
          aria-label={!label ? 'Date picker' : undefined}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-controls={dialogId}
          aria-invalid={validationState === 'error' ? 'true' : undefined}
          aria-describedby={validationMessage ? descriptionId : undefined}
          role="combobox"
        />

        {/* Icons */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 gap-1">
          {showClearButton && value && !disabled && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}
              className="text-ink-400 hover:text-ink-600 focus:outline-none"
              aria-label="Clear date"
            >
              <X className={iconSizeClasses[size]} />
            </button>
          )}
          <Calendar className={`${iconSizeClasses[size]} text-ink-400`} />
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

      {/* Calendar dropdown */}
      {isOpen && (
        <div
          id={dialogId}
          className="absolute z-50 mt-1 bg-white rounded-lg shadow-lg border border-paper-200 p-3 w-72"
          role="dialog"
          aria-modal="true"
          aria-label="Date picker calendar"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={goToPrevMonth}
              className="p-1 rounded hover:bg-paper-100 text-ink-600 hover:text-ink-900"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm font-semibold text-ink-900">
              {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
            </span>
            <button
              type="button"
              onClick={goToNextMonth}
              className="p-1 rounded hover:bg-paper-100 text-ink-600 hover:text-ink-900"
              aria-label="Next month"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-1">
            {DAYS.map(day => (
              <div key={day} className="text-center text-xs font-medium text-ink-500 py-1">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7">
            {generateCalendarDays().map(({ date, isCurrentMonth }, index) => {
              const isDisabled = isDateDisabled(date);
              const isSelected = isSameDay(value || null, date);
              const isTodayDate = isToday(date);

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSelectDate(date)}
                  disabled={isDisabled}
                  className={`
                    p-2 text-sm rounded-md transition-colors
                    ${!isCurrentMonth ? 'text-ink-300' : 'text-ink-700'}
                    ${isDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-paper-100'}
                    ${isSelected ? 'bg-primary-500 text-white hover:bg-primary-600' : ''}
                    ${isTodayDate && !isSelected ? 'border border-primary-500 font-semibold' : ''}
                  `}
                  aria-label={date.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  aria-selected={isSelected}
                  aria-disabled={isDisabled}
                  aria-current={isTodayDate ? 'date' : undefined}
                  role="gridcell"
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          {/* Footer */}
          {(showTodayButton || showClearButton) && (
            <div className="mt-3 pt-3 border-t border-paper-200 flex justify-between">
              {showTodayButton && (
                <button
                  type="button"
                  onClick={handleSelectToday}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Today
                </button>
              )}
              {showClearButton && value && (
                <button
                  type="button"
                  onClick={() => {
                    handleClear();
                    setIsOpen(false);
                  }}
                  className="text-sm text-ink-500 hover:text-ink-700"
                >
                  Clear
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

DatePicker.displayName = 'DatePicker';
export default DatePicker;
