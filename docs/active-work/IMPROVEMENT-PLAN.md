# Notebook-UI Improvement Implementation Plan

## Overview

This document outlines the phased implementation plan for improving notebook-ui with a focus on:
1. DataTable usability enhancements
2. Critical missing components
3. Design token fixes
4. Responsive improvements

---

## Phase 1: DataTable Usability Enhancements

**Goal:** Make DataTable the most feature-rich, usable data display component

### 1.1 Visual Customization Props

**New Props to Add:**

```typescript
interface DataTableProps<T> {
  // ... existing props

  // Row styling
  striped?: boolean | 'odd' | 'even';
  stripedColor?: string;  // Custom stripe color (Tailwind class or hex)
  hoverHighlight?: boolean;
  rowClassName?: string | ((item: T, index: number) => string);

  // Borders and density
  bordered?: boolean;
  borderColor?: string;
  density?: 'compact' | 'normal' | 'comfortable';

  // Header styling
  stickyHeader?: boolean;
  headerClassName?: string;

  // Column features
  resizableColumns?: boolean;
  columnOrder?: string[];  // Array of column keys for custom ordering
  hiddenColumns?: string[];  // Array of column keys to hide

  // Row features
  rowHighlight?: (item: T) => string | undefined;  // Returns color class for row
  highlightedRowId?: string | number;  // Single highlighted row
}
```

### 1.2 Specific Features

#### Zebra Striping
- `striped={true}` - Default alternating colors
- `striped="odd"` - Stripe odd rows
- `striped="even"` - Stripe even rows
- `stripedColor="bg-blue-50"` - Custom stripe color

#### Row Density
- `density="compact"` - py-1, text-xs
- `density="normal"` - py-2, text-sm (default)
- `density="comfortable"` - py-4, text-base

#### Custom Row Styling
```typescript
// Static class
<DataTable rowClassName="font-medium" />

// Dynamic based on data
<DataTable
  rowClassName={(item, index) =>
    item.status === 'overdue' ? 'bg-error-50' : ''
  }
/>

// Highlight specific conditions
<DataTable
  rowHighlight={(item) =>
    item.priority === 'high' ? 'bg-warning-50' : undefined
  }
/>
```

#### Borders
- `bordered={true}` - Full cell borders
- `borderColor="border-paper-200"` - Custom border color

#### Sticky Header
- `stickyHeader={true}` - Keep header visible when scrolling

#### Column Visibility
- `hiddenColumns={['internalId', 'createdAt']}` - Hide specific columns
- Future: UI toggle for user column selection

### 1.3 Implementation Priority

1. **striped** and **stripedColor** - Quick win, high value
2. **density** - Easy, improves usability
3. **rowClassName** and **rowHighlight** - Flexible customization
4. **bordered** and **borderColor** - Visual options
5. **stickyHeader** - Already partially implemented
6. **hiddenColumns** - Moderate complexity
7. **resizableColumns** - Complex, lower priority

---

## Phase 2: Design Token Fixes

**Goal:** Remove all hardcoded colors, use design tokens consistently

### Components to Fix

1. **Avatar** (`src/components/Avatar.tsx`)
   - Change `bg-slate-500` → `bg-primary-500`
   - Change `text-white` → keep (contrast)

2. **StatusBadge** (`src/components/StatusBadge.tsx`)
   - Change `bg-green-100` → `bg-success-100`
   - Change `text-green-800` → `text-success-800`
   - Change `bg-yellow-100` → `bg-warning-100`
   - Change `text-yellow-800` → `text-warning-800`
   - Change `bg-red-100` → `bg-error-100`
   - Change `text-red-800` → `text-error-800`
   - Change `bg-blue-100` → `bg-primary-100`
   - Change `text-blue-800` → `text-primary-800`

3. **DataTable** (`src/components/DataTable.tsx`)
   - Review and fix any hardcoded `gray-*` colors

### Audit Checklist

- [ ] Avatar
- [ ] StatusBadge
- [ ] DataTable
- [ ] ActionMenu in DataTable
- [ ] Badge
- [ ] Loading skeletons

---

## Phase 3: Critical Missing Components

### 3.1 DatePicker (HIGH PRIORITY)

**File:** `src/components/DatePicker.tsx`

**Features:**
- Single date selection
- Calendar dropdown
- Min/max date constraints
- Disabled dates
- Locale support (Intl.DateTimeFormat)
- Keyboard navigation
- Today button
- Clear button
- Validation states (error/success/warning)
- Label and helper text

**Props:**
```typescript
interface DatePickerProps {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  label?: string;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[] | ((date: Date) => boolean);
  locale?: string;
  format?: 'short' | 'medium' | 'long';
  validationState?: 'error' | 'success' | 'warning' | null;
  validationMessage?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  showTodayButton?: boolean;
  showClearButton?: boolean;
  className?: string;
}
```

### 3.2 Combobox (HIGH PRIORITY)

**File:** `src/components/Combobox.tsx`

**Features:**
- Typeahead search
- Free-form input option
- Create new option
- Async loading
- Keyboard navigation
- Clear button
- Validation states

**Props:**
```typescript
interface ComboboxProps {
  value?: string;
  onChange?: (value: string) => void;
  options: ComboboxOption[];
  onSearch?: (query: string) => void;
  onCreateOption?: (value: string) => void;
  label?: string;
  placeholder?: string;
  allowCustomValue?: boolean;
  loading?: boolean;
  validationState?: 'error' | 'success' | 'warning' | null;
  validationMessage?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

interface ComboboxOption {
  value: string;
  label: string;
  icon?: React.ComponentType<any>;
  disabled?: boolean;
}
```

### 3.3 FormField Wrapper (MEDIUM PRIORITY)

**File:** `src/components/FormField.tsx`

**Features:**
- Consistent label/error/helper layout
- Works with any form input
- Required indicator
- Validation state propagation

**Props:**
```typescript
interface FormFieldProps {
  label?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  children: React.ReactNode;
  className?: string;
}
```

**Usage:**
```typescript
<FormField label="Email" required error={errors.email}>
  <Input {...register('email')} />
</FormField>
```

---

## Phase 4: Responsive Grid

**Goal:** Add responsive breakpoint support to Grid component

### Current Grid
```typescript
<Grid columns={4} gap="md">
```

### Enhanced Grid
```typescript
<Grid
  columns={1}
  sm={2}
  md={3}
  lg={4}
  gap="md"
>
```

**Props to Add:**
```typescript
interface GridProps {
  columns?: 1 | 2 | 3 | 4 | 6 | 12;
  sm?: 1 | 2 | 3 | 4 | 6 | 12;
  md?: 1 | 2 | 3 | 4 | 6 | 12;
  lg?: 1 | 2 | 3 | 4 | 6 | 12;
  xl?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children?: React.ReactNode;
}
```

---

## Phase 5: Text Enhancements

**Goal:** Add truncation and text transform to Text component

### New Props
```typescript
interface TextProps {
  // ... existing props

  truncate?: boolean;  // Single line with ellipsis
  lineClamp?: 1 | 2 | 3 | 4 | 5 | 6;  // Multi-line clamp
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal';
}
```

---

## Implementation Sessions

### Session 1: DataTable Usability (This Session)
1. Add striped/stripedColor props
2. Add density prop
3. Add rowClassName/rowHighlight props
4. Add bordered/borderColor props
5. Add hiddenColumns prop
6. Fix hardcoded colors in DataTable

### Session 2: Design Token Fixes
1. Fix Avatar colors
2. Fix StatusBadge colors
3. Audit and fix remaining components

### Session 3: DatePicker
1. Create DatePicker component
2. Add calendar UI
3. Add keyboard navigation
4. Add validation states
5. Export from index

### Session 4: Combobox + FormField
1. Create Combobox component
2. Create FormField wrapper
3. Export from index

### Session 5: Grid & Text Enhancements
1. Add responsive props to Grid
2. Add truncate/lineClamp to Text
3. Add transform to Text

---

## Session 1 Prompt

```
Continue implementing Phase 1: DataTable Usability Enhancements for notebook-ui.

Focus on:
1. Add striped prop (boolean | 'odd' | 'even') with stripedColor
2. Add density prop ('compact' | 'normal' | 'comfortable')
3. Add rowClassName prop (string | function)
4. Add rowHighlight prop for conditional row coloring
5. Add bordered prop with borderColor
6. Add hiddenColumns prop
7. Fix any hardcoded gray-* colors to use design tokens

The DataTable is at src/components/DataTable.tsx

After implementation:
- Run npm run build to verify
- Run npm run typecheck to verify types
- Update the component's JSDoc with new props

Reference the implementation plan at docs/active-work/IMPROVEMENT-PLAN.md
```

---

## Success Criteria

- [ ] All new DataTable props implemented and typed
- [ ] Design tokens used consistently (no hardcoded colors)
- [ ] DatePicker component complete and exported
- [ ] Combobox component complete and exported
- [ ] Grid responsive props working
- [ ] Text truncation working
- [ ] All builds pass
- [ ] Documentation updated

