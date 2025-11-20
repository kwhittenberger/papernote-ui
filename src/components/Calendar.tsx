// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CalendarEvent {
  date: Date;
  title: string;
  color?: 'primary' | 'success' | 'warning' | 'error' | 'accent';
  metadata?: Record<string, unknown>;
}

export interface CalendarProps {
  /** Selected date */
  value?: Date;
  /** Callback when date is selected */
  onChange?: (date: Date) => void;
  /** Events to display on calendar */
  events?: CalendarEvent[];
  /** Callback when event marker is clicked */
  onEventClick?: (event: CalendarEvent) => void;
  /** Enable date range selection */
  rangeMode?: boolean;
  /** Selected date range (start and end) */
  rangeValue?: { start: Date | null; end: Date | null };
  /** Callback when range is selected */
  onRangeChange?: (range: { start: Date | null; end: Date | null }) => void;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Dates that cannot be selected */
  disabledDates?: Date[];
  /** Show week numbers */
  showWeekNumbers?: boolean;
  /** First day of week (0 = Sunday, 1 = Monday) */
  firstDayOfWeek?: 0 | 1;
  /** Custom class name */
  className?: string;
}

export default function Calendar({
  value,
  onChange,
  events = [],
  onEventClick,
  rangeMode = false,
  rangeValue,
  onRangeChange,
  minDate,
  maxDate,
  disabledDates = [],
  showWeekNumbers = false,
  firstDayOfWeek = 0,
  className = '',
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(value || new Date());
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  // Generate calendar grid for current month
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    // First day of the month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // Adjust for first day of week preference
    const startingDayOfWeek = (firstDay.getDay() - firstDayOfWeek + 7) % 7;

    // Days to show from previous month
    const daysFromPrevMonth = startingDayOfWeek;
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    // Total days to display (6 weeks = 42 days)
    const totalDays = 42;

    const days: Date[] = [];

    // Previous month days
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
      days.push(new Date(year, month - 1, prevMonthLastDay - i));
    }

    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    // Next month days
    const remainingDays = totalDays - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i));
    }

    return days;
  }, [currentMonth, firstDayOfWeek]);

  // Get week number for a date
  const getWeekNumber = (date: Date): number => {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  };

  // Check if date is selected
  const isSelected = (date: Date): boolean => {
    if (!value) return false;
    return (
      date.getDate() === value.getDate() &&
      date.getMonth() === value.getMonth() &&
      date.getFullYear() === value.getFullYear()
    );
  };

  // Check if date is in selected range
  const isInRange = (date: Date): boolean => {
    if (!rangeMode || !rangeValue?.start) return false;

    const end = rangeValue.end || (hoverDate && hoverDate > rangeValue.start ? hoverDate : null);
    if (!end) return false;

    const time = date.getTime();
    const startTime = rangeValue.start.getTime();
    const endTime = end.getTime();

    return time >= startTime && time <= endTime;
  };

  // Check if date is range start or end
  const isRangeEdge = (date: Date): 'start' | 'end' | null => {
    if (!rangeMode || !rangeValue?.start) return null;

    const time = date.getTime();
    if (time === rangeValue.start.getTime()) return 'start';
    if (rangeValue.end && time === rangeValue.end.getTime()) return 'end';

    return null;
  };

  // Check if date is disabled
  const isDisabled = (date: Date): boolean => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return disabledDates.some(
      (d) =>
        d.getDate() === date.getDate() &&
        d.getMonth() === date.getMonth() &&
        d.getFullYear() === date.getFullYear()
    );
  };

  // Check if date is in current month
  const isCurrentMonth = (date: Date): boolean => {
    return date.getMonth() === currentMonth.getMonth();
  };

  // Check if date is today
  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Get events for a specific date
  const getEventsForDate = (date: Date): CalendarEvent[] => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  // Handle date click
  const handleDateClick = (date: Date) => {
    if (isDisabled(date)) return;

    if (rangeMode) {
      if (!rangeValue?.start || (rangeValue.start && rangeValue.end)) {
        // Start new range
        onRangeChange?.({ start: date, end: null });
      } else {
        // Complete range
        if (date >= rangeValue.start) {
          onRangeChange?.({ start: rangeValue.start, end: date });
        } else {
          onRangeChange?.({ start: date, end: rangeValue.start });
        }
      }
    } else {
      onChange?.(date);
    }
  };

  // Navigate months
  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Navigate years
  const previousYear = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear() - 1, currentMonth.getMonth(), 1));
  };

  const nextYear = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear() + 1, currentMonth.getMonth(), 1));
  };

  // Go to today
  const goToToday = () => {
    setCurrentMonth(new Date());
  };

  // Day names
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const adjustedDayNames = [...dayNames.slice(firstDayOfWeek), ...dayNames.slice(0, firstDayOfWeek)];

  // Event color classes
  const eventColorClasses = {
    primary: 'bg-primary-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    error: 'bg-error-500',
    accent: 'bg-accent-500',
  };

  return (
    <div className={`bg-white rounded-lg border border-paper-200 shadow-sm ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-paper-200">
        <div className="flex items-center gap-2">
          <button
            onClick={previousYear}
            className="p-1.5 hover:bg-paper-100 rounded transition-colors"
            aria-label="Previous year"
          >
            <ChevronLeft className="h-4 w-4 text-ink-600" />
            <ChevronLeft className="h-4 w-4 text-ink-600 -ml-3" />
          </button>
          <button
            onClick={previousMonth}
            className="p-1.5 hover:bg-paper-100 rounded transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="h-4 w-4 text-ink-600" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-ink-900">
            {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h2>
          <button
            onClick={goToToday}
            className="px-3 py-1 text-sm font-medium text-accent-700 hover:bg-accent-50 rounded transition-colors"
          >
            Today
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={nextMonth}
            className="p-1.5 hover:bg-paper-100 rounded transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="h-4 w-4 text-ink-600" />
          </button>
          <button
            onClick={nextYear}
            className="p-1.5 hover:bg-paper-100 rounded transition-colors"
            aria-label="Next year"
          >
            <ChevronRight className="h-4 w-4 text-ink-600" />
            <ChevronRight className="h-4 w-4 text-ink-600 -ml-3" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-4">
        <div className="grid grid-cols-7 gap-1">
          {/* Week number header */}
          {showWeekNumbers && <div className="h-8" />}

          {/* Day names */}
          {adjustedDayNames.map((day) => (
            <div
              key={day}
              className="h-8 flex items-center justify-center text-xs font-semibold text-ink-600"
            >
              {day}
            </div>
          ))}

          {/* Calendar days */}
          {Array.from({ length: 6 }).map((_, weekIndex) => (
            <React.Fragment key={weekIndex}>
              {/* Week number */}
              {showWeekNumbers && (
                <div className="flex items-center justify-center text-xs text-ink-500 font-medium">
                  {getWeekNumber(calendarDays[weekIndex * 7])}
                </div>
              )}

              {/* Days in week */}
              {calendarDays.slice(weekIndex * 7, weekIndex * 7 + 7).map((date, dayIndex) => {
                const dateEvents = getEventsForDate(date);
                const selected = isSelected(date);
                const inRange = isInRange(date);
                const rangeEdge = isRangeEdge(date);
                const disabled = isDisabled(date);
                const currentMonth = isCurrentMonth(date);
                const today = isToday(date);

                return (
                  <button
                    key={dayIndex}
                    onClick={() => handleDateClick(date)}
                    onMouseEnter={() => rangeMode && setHoverDate(date)}
                    onMouseLeave={() => rangeMode && setHoverDate(null)}
                    disabled={disabled}
                    className={`
                      relative h-16 p-1 rounded-lg border transition-all
                      ${currentMonth ? 'text-ink-900' : 'text-ink-400'}
                      ${today ? 'border-accent-400 font-semibold' : 'border-transparent'}
                      ${selected || rangeEdge ? 'bg-accent-500 text-white font-semibold' : ''}
                      ${inRange && !selected && !rangeEdge ? 'bg-accent-50' : ''}
                      ${!disabled && !selected && !rangeEdge ? 'hover:bg-paper-100' : ''}
                      ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    <div className="text-sm">{date.getDate()}</div>

                    {/* Event indicators */}
                    {dateEvents.length > 0 && (
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
                        {dateEvents.slice(0, 3).map((event, i) => (
                          <button
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation();
                              onEventClick?.(event);
                            }}
                            className={`h-1.5 w-1.5 rounded-full ${
                              eventColorClasses[event.color || 'primary']
                            }`}
                            title={event.title}
                          />
                        ))}
                        {dateEvents.length > 3 && (
                          <div className="h-1.5 w-1.5 rounded-full bg-ink-400" title={`+${dateEvents.length - 3} more`} />
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
