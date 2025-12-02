# Bug: Calendar Component Missing onMonthChange Callback

## Status: ✅ RESOLVED in v1.7.3

## Issue

The Calendar component manages its `currentMonth` state internally but does not expose an `onMonthChange` callback. This prevents parent components from:

1. Knowing when the user navigates to a different month
2. Loading data for the newly visible month
3. Keeping external state in sync with the calendar's displayed month

## Current Implementation (Calendar.tsx line 56)

```tsx
const [currentMonth, setCurrentMonth] = useState(value || new Date());
```

The component:
- Initializes `currentMonth` from the `value` prop
- Does NOT sync when `value` prop changes after mount
- Does NOT notify parent when user clicks month/year navigation buttons

## Use Case

In the Bills Calendar View, we need to fetch bill occurrences from the API when the user navigates to a different month. Without `onMonthChange`, we must pre-fetch many months of data upfront, which is inefficient.

```tsx
// Current workaround - fetch 6 months of data upfront
const fetchCalendarOccurrences = async (year: number, month: number) => {
  const startDate = new Date(year, month - 3, 1);  // 3 months before
  const endDate = new Date(year, month + 4, 0);    // 3 months after
  // ...fetch all data upfront
};

// Desired behavior - fetch on demand when month changes
<Calendar
  value={selectedDate}
  onChange={handleDateSelect}
  onMonthChange={(year, month) => fetchCalendarOccurrences(year, month)}
  events={calendarEvents}
/>
```

## Recommended Fix

1. Add `onMonthChange` prop to CalendarProps:

```tsx
export interface CalendarProps {
  // ... existing props
  /** Callback when displayed month changes */
  onMonthChange?: (date: Date) => void;
}
```

2. Call the callback when navigating months/years:

```tsx
const previousMonth = () => {
  const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
  setCurrentMonth(newMonth);
  onMonthChange?.(newMonth);
};

const nextMonth = () => {
  const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
  setCurrentMonth(newMonth);
  onMonthChange?.(newMonth);
};

// Same for previousYear, nextYear, goToToday
```

3. Optionally sync with `value` prop changes:

```tsx
useEffect(() => {
  if (value) {
    setCurrentMonth(value);
  }
}, [value]);
```

## Priority

Medium - Affects data loading efficiency and UX for calendar-based features.

## Reported

2024-12-02
