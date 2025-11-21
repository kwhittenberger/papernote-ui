// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the notebook-ui component library.
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

import { useState, useRef, useEffect, forwardRef, useImperativeHandle, useId } from 'react';
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export interface DateRangePickerHandle {
  focus: () => void;
  blur: () => void;
  open: () => void;
  close: () => void;
}

export interface DateRangePickerProps {
  /** Selected date range */
  value?: DateRange;
  /** Change handler */
  onChange?: (range: DateRange) => void;
  /** Input label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Disabled dates function */
  disabledDates?: (date: Date) => boolean;
  /** Locale for date formatting */
  locale?: string;
  /** Date format */
  format?: 'short' | 'medium' | 'long';
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
  /** Show quick preset buttons */
  showPresets?: boolean;
  /** Custom className */
  className?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * DateRangePicker component - Select a date range with calendar UI.
 *
 * Features:
 * - Start and end date selection
 * - Visual range highlighting
 * - Quick preset ranges (Today, Last 7 days, etc.)
 * - Min/max date constraints
 * - Disabled dates
 * - Keyboard navigation
 * - Validation states
 *
 * @example
 * ```tsx
 * <DateRangePicker
 *   label="Report Period"
 *   value={dateRange}
 *   onChange={setDateRange}
 *   showPresets
 * />
 * ```
 */
const DateRangePicker = forwardRef<DateRangePickerHandle, DateRangePickerProps>(({
  value = { start: null, end: null },
  onChange,
  label,
  placeholder = 'Select date range',
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
  showPresets = false,
  className = '',
  size = 'md',
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [selectingStart, setSelectingStart] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Generate unique IDs for ARIA
  const labelId = useId();
  const dialogId = useId();
  const descriptionId = useId();
  const hintId = useId();

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  // Format date using Intl.DateTimeFormat
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
    }

    return new Intl.DateTimeFormat(locale, options).format(date);
  };

  // Check if date is in range
  const isInRange = (date: Date): boolean => {
    if (!value.start || !value.end) return false;
    const time = date.getTime();
    return time >= value.start.getTime() && time <= value.end.getTime();
  };

  // Check if date is in hover range
  const isInHoverRange = (date: Date): boolean => {
    if (!value.start || !hoverDate || value.end) return false;
    const time = date.getTime();
    const start = value.start.getTime();
    const hover = hoverDate.getTime();
    return (time >= start && time <= hover) || (time <= start && time >= hover);
  };

  // Check if date is disabled
  const isDateDisabled = (date: Date): boolean => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    if (disabledDates && disabledDates(date)) return true;
    return false;
  };

  // Handle date selection
  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date)) return;

    if (selectingStart || !value.start) {
      onChange?.({ start: date, end: null });
      setSelectingStart(false);
    } else {
      // Ensure start is before end
      if (date < value.start) {
        onChange?.({ start: date, end: value.start });
      } else {
        onChange?.({ start: value.start, end: date });
      }
      setSelectingStart(true);
      setIsOpen(false);
    }
  };

  // Handle preset selection
  const handlePreset = (preset: 'today' | 'yesterday' | 'last7days' | 'last30days' | 'thisMonth' | 'lastMonth') => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let start: Date;
    let end: Date;

    switch (preset) {
      case 'today':
        start = end = new Date(today);
        break;
      case 'yesterday':
        start = end = new Date(today);
        start.setDate(start.getDate() - 1);
        end.setDate(end.getDate() - 1);
        break;
      case 'last7days':
        start = new Date(today);
        start.setDate(start.getDate() - 6);
        end = new Date(today);
        break;
      case 'last30days':
        start = new Date(today);
        start.setDate(start.getDate() - 29);
        end = new Date(today);
        break;
      case 'thisMonth':
        start = new Date(today.getFullYear(), today.getMonth(), 1);
        end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        break;
      case 'lastMonth':
        start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        end = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
    }

    onChange?.({ start, end });
    setIsOpen(false);
  };

  // Handle clear
  const handleClear = () => {
    onChange?.({ start: null, end: null });
    setSelectingStart(true);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  // Navigate months
  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  // Generate calendar days
  const generateCalendarDays = (): Date[] => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const days: Date[] = [];
    const current = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const monthYear = currentMonth.toLocaleDateString(locale, { month: 'long', year: 'numeric' });

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
  const displayValue = value.start && value.end
    ? `${formatDate(value.start)} - ${formatDate(value.end)}`
    : value.start
    ? formatDate(value.start)
    : '';

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
          aria-label={!label ? 'Date range picker' : undefined}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-controls={dialogId}
          aria-invalid={validationState === 'error' ? 'true' : undefined}
          aria-describedby={validationMessage ? descriptionId : (isOpen ? hintId : undefined)}
          role="combobox"
        />

        {/* Icons */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-1">
          {(value.start || value.end) && !disabled && (
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

      {/* Dropdown */}
      {isOpen && (
        <div id={dialogId} className="absolute z-50 mt-1 bg-white rounded-md shadow-lg border border-paper-200 p-4" role="dialog" aria-modal="true" aria-label="Date range selection">
          <div className="flex gap-4">
            {/* Presets */}
            {showPresets && (
              <div className="flex flex-col gap-2 border-r border-paper-200 pr-4">
                <button
                  type="button"
                  onClick={() => handlePreset('today')}
                  className="text-left px-3 py-2 text-sm text-ink-700 hover:bg-primary-50 rounded whitespace-nowrap"
                >
                  Today
                </button>
                <button
                  type="button"
                  onClick={() => handlePreset('yesterday')}
                  className="text-left px-3 py-2 text-sm text-ink-700 hover:bg-primary-50 rounded whitespace-nowrap"
                >
                  Yesterday
                </button>
                <button
                  type="button"
                  onClick={() => handlePreset('last7days')}
                  className="text-left px-3 py-2 text-sm text-ink-700 hover:bg-primary-50 rounded whitespace-nowrap"
                >
                  Last 7 days
                </button>
                <button
                  type="button"
                  onClick={() => handlePreset('last30days')}
                  className="text-left px-3 py-2 text-sm text-ink-700 hover:bg-primary-50 rounded whitespace-nowrap"
                >
                  Last 30 days
                </button>
                <button
                  type="button"
                  onClick={() => handlePreset('thisMonth')}
                  className="text-left px-3 py-2 text-sm text-ink-700 hover:bg-primary-50 rounded whitespace-nowrap"
                >
                  This month
                </button>
                <button
                  type="button"
                  onClick={() => handlePreset('lastMonth')}
                  className="text-left px-3 py-2 text-sm text-ink-700 hover:bg-primary-50 rounded whitespace-nowrap"
                >
                  Last month
                </button>
              </div>
            )}

            {/* Calendar */}
            <div>
              {/* Month navigation */}
              <div className="flex items-center justify-between mb-4">
                <button
                  type="button"
                  onClick={previousMonth}
                  className="p-2 text-ink-600 hover:bg-paper-100 rounded"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="text-sm font-semibold text-ink-900">{monthYear}</div>
                <button
                  type="button"
                  onClick={nextMonth}
                  className="p-2 text-ink-600 hover:bg-paper-100 rounded"
                  aria-label="Next month"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                  <div key={day} className="text-center text-xs font-medium text-ink-500 w-8">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((date, index) => {
                  const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
                  const isToday = date.toDateString() === new Date().toDateString();
                  const isStart = value.start && date.toDateString() === value.start.toDateString();
                  const isEnd = value.end && date.toDateString() === value.end.toDateString();
                  const inRange = isInRange(date);
                  const inHoverRange = isInHoverRange(date);
                  const disabled = isDateDisabled(date);

                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleDateClick(date)}
                      onMouseEnter={() => !disabled && setHoverDate(date)}
                      onMouseLeave={() => setHoverDate(null)}
                      disabled={disabled}
                      className={`
                        w-8 h-8 text-sm rounded flex items-center justify-center
                        ${!isCurrentMonth ? 'text-ink-400' : 'text-ink-900'}
                        ${isToday ? 'font-bold ring-2 ring-primary-300' : ''}
                        ${isStart || isEnd ? 'bg-primary-500 text-white font-semibold' : ''}
                        ${inRange && !isStart && !isEnd ? 'bg-primary-100 text-primary-900' : ''}
                        ${inHoverRange && !isStart && !isEnd && !inRange ? 'bg-primary-50' : ''}
                        ${disabled ? 'text-ink-300 cursor-not-allowed line-through' : 'hover:bg-primary-50 cursor-pointer'}
                      `}
                      aria-label={formatDate(date)}
                      aria-selected={isStart || isEnd ? 'true' : 'false'}
                      role="gridcell"
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>

              {/* Selection hint */}
              <div id={hintId} className="mt-4 text-xs text-ink-500 text-center" role="status" aria-live="polite">
                {selectingStart || !value.start ? 'Select start date' : 'Select end date'}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

DateRangePicker.displayName = 'DateRangePicker';
export default DateRangePicker;
