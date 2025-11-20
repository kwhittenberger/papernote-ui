# Phase 2: Accessibility Implementation Plan

## Overview

Detailed implementation plan for Phase 2 (Accessibility improvements) to bring notebook-ui from 9/10 to 10/10 quality.

**Current Status:** 9/10 (Excellent - production-ready)  
**Target Status:** 10/10 (World-class)  
**Estimated Effort:** 2-3 weeks

---

## Current State Analysis

### ✅ Already Complete
- Input: Has forwardRef ✅
- Textarea: Has forwardRef ✅
- Most components have basic ARIA attributes
- Keyboard navigation partially implemented

### ⏳ Needs Implementation
- 18+ form components need forwardRef
- Prop standardization across all components
- Enhanced ARIA attributes
- Complete keyboard navigation
- Live regions for dynamic content

---

## Task 1: Add forwardRef to Form Components

### Priority: HIGH
**Effort:** 1 week

### Components Needing forwardRef (18 total)

#### Core Form Inputs (8 components)
1. **Select** - Complex (custom dropdown, not native select)
2. **MultiSelect** - Complex (custom multi-select)
3. **NumberInput** - Medium (wrapper around input)
4. **Combobox** - Complex (custom autocomplete)
5. **Autocomplete** - Complex (custom search)
6. **MaskedInput** - Medium (wrapper around input)
7. **PasswordInput** - Medium (wrapper around input)  
8. **Switch** - Simple (button-based toggle)

#### Picker Components (4 components)
9. **DatePicker** - Complex (popup calendar)
10. **TimePicker** - Medium (time selection)
11. **DateTimePicker** - Complex (date + time)
12. **DateRangePicker** - Complex (date range)

#### Advanced Inputs (6 components)
13. **Checkbox** - Simple (input type="checkbox")
14. **RadioGroup** - Medium (multiple radio inputs)
15. **FileUpload** - Medium (file input)
16. **Slider** - Medium (range input)
17. **ColorPicker** - Medium (color input)
18. **Rating** - Medium (interactive stars)

---

## Implementation Guide: forwardRef

### Pattern 1: Native Input Wrapper
**Use when:** Component wraps a native `<input>` element

**Example - NumberInput:**
```typescript
import { forwardRef } from 'react';

export interface NumberInputProps {
  // ... existing props
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      value,
      onChange,
      min,
      max,
      step,
      // ... other props
    },
    ref
  ) => {
    return (
      <div>
        <button onClick={decrement}>-</button>
        <input
          ref={ref}  // Forward ref to native input
          type="text"
          value={value}
          onChange={onChange}
          // ... other input props
        />
        <button onClick={increment}>+</button>
      </div>
    );
  }
);

NumberInput.displayName = 'NumberInput';
export default NumberInput;
```

### Pattern 2: Custom Element (No Native Input)
**Use when:** Component uses divs/buttons instead of native inputs

**Example - Select:**
```typescript
import { forwardRef, useImperativeHandle, useRef } from 'react';

export interface SelectHandle {
  focus: () => void;
  blur: () => void;
  open: () => void;
  close: () => void;
}

const Select = forwardRef<SelectHandle, SelectProps>(
  (
    {
      options,
      value,
      onChange,
      // ... other props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    // Expose methods via ref
    useImperativeHandle(ref, () => ({
      focus: () => buttonRef.current?.focus(),
      blur: () => buttonRef.current?.blur(),
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    return (
      <div>
        <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
          {value || placeholder}
        </button>
        {isOpen && <div>/* dropdown */</div>}
      </div>
    );
  }
);

Select.displayName = 'Select';
export default Select;
```

### Pattern 3: Compound Component
**Use when:** Component manages multiple inputs (RadioGroup)

```typescript
const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  ({ options, value, onChange, name }, ref) => {
    return (
      <fieldset ref={ref}>
        {options.map(option => (
          <label key={option.value}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
            />
            {option.label}
          </label>
        ))}
      </fieldset>
    );
  }
);
```

---

## Task 2: Standardize Props Across Components

### Priority: HIGH
**Effort:** 3-4 days

### Standard Form Props Interface

```typescript
interface StandardFormProps {
  // Visual
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';  // Expand to 5 sizes
  
  // State
  loading?: boolean;         // Add to all form inputs
  disabled?: boolean;        // Already exists
  readOnly?: boolean;        // Already exists
  
  // Validation
  error?: string;            // Already exists in most
  helperText?: string;       // Add to all form components
  required?: boolean;        // Already exists
  
  // Functionality
  clearable?: boolean;       // Add to all pickers
  onClear?: () => void;      // Add to clearable components
  
  // Icons (STANDARDIZE)
  leftIcon?: React.ReactNode;   // Replace icon + iconPosition
  rightIcon?: React.ReactNode;  // Replace suffixIcon, prefixIcon confusion
  
  // Accessibility
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  
  // Standard
  className?: string;
  id?: string;
  name?: string;
}
```

### Components Needing Props

#### Add `loading` prop (12 components)
- Textarea, DatePicker, TimePicker, DateTimePicker, DateRangePicker
- Autocomplete (already has), MaskedInput, PasswordInput, NumberInput
- Combobox, FileUpload, ColorPicker

#### Add `clearable` prop (8 components)
- DatePicker, TimePicker, DateTimePicker, DateRangePicker
- NumberInput, Combobox, ColorPicker, Rating

#### Add `helperText` prop (15 components)
- All pickers, NumberInput, Switch, Checkbox, RadioGroup
- Slider, ColorPicker, Rating, FileUpload

#### Standardize icon props (5 components)
- Input: Has `icon` + `iconPosition` + `prefixIcon` + `suffixIcon` (confusing!)
- Button: Has `icon` + `iconPosition`
- **Action:** Standardize all to `leftIcon` / `rightIcon`

---

## Task 3: Add ARIA Attributes

### Priority: MEDIUM
**Effort:** 1 week

### Input Components

**Add to Input, Select, Textarea:**
```typescript
<input
  aria-invalid={!!error}
  aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
  aria-required={required}
/>

{error && (
  <span id={`${id}-error`} role="alert" className="text-error-600">
    {error}
  </span>
)}

{helperText && (
  <span id={`${id}-helper`} className="text-ink-600">
    {helperText}
  </span>
)}
```

### Select/Dropdown Components

**Add to Select, MultiSelect, Combobox:**
```typescript
<button
  role="combobox"
  aria-expanded={isOpen}
  aria-haspopup="listbox"
  aria-controls="listbox-id"
  aria-activedescendant={focused ItemId}
>
  {value || placeholder}
</button>

<ul
  id="listbox-id"
  role="listbox"
  aria-label="Options"
>
  <li
    role="option"
    aria-selected={isSelected}
    id={`option-${id}`}
  >
    {option.label}
  </li>
</ul>
```

### DataTable

**Add to sortable columns:**
```typescript
<th
  aria-sort={
    sortedColumn === column.key
      ? (sortDirection === 'asc' ? 'ascending' : 'descending')
      : 'none'
  }
>
  {column.label}
</th>
```

### Progress

**Add progressbar role:**
```typescript
<div
  role="progressbar"
  aria-valuenow={value}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-label={label || 'Progress'}
>
  {/* progress UI */}
</div>
```

### Avatar

**Add image role:**
```typescript
<div
  role="img"
  aria-label={name || 'User avatar'}
>
  {/* avatar content */}
</div>
```

### Badge (for status)

**Add status role:**
```typescript
<span
  role="status"
  aria-live="polite"
  aria-label={`Status: ${children}`}
>
  {children}
</span>
```

---

## Task 4: Keyboard Navigation

### Priority: MEDIUM
**Effort:** 4-5 days

### Select Component

**Add arrow key navigation:**
```typescript
const handleKeyDown = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault();
      setFocusedIndex((prev) => Math.min(prev + 1, options.length - 1));
      break;
    case 'ArrowUp':
      e.preventDefault();
      setFocusedIndex((prev) => Math.max(prev - 1, 0));
      break;
    case 'Enter':
    case ' ':
      e.preventDefault();
      selectOption(options[focusedIndex]);
      break;
    case 'Escape':
      setIsOpen(false);
      break;
  }
};
```

### DataTable

**Add keyboard row navigation:**
```typescript
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.target !== tableRef.current) return;
  
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault();
      focusNextRow();
      break;
    case 'ArrowUp':
      e.preventDefault();
      focusPrevRow();
      break;
    case 'Enter':
      if (selectedRow) {
        onRowAction?.(selectedRow);
      }
      break;
  }
};
```

### TreeView

**Already has arrow key expand/collapse** ✅

### Accordion

**Add Home/End keys:**
```typescript
const handleKeyDown = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'Home':
      e.preventDefault();
      focusFirstItem();
      break;
    case 'End':
      e.preventDefault();
      focusLastItem();
      break;
  }
};
```

---

## Task 5: Live Regions

### Priority: LOW
**Effort:** 2-3 days

### Toast Notifications

**Add aria-live:**
```typescript
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
  {message}
</div>
```

### Error Messages

**Add assertive live region:**
```typescript
<div
  role="alert"
  aria-live="assertive"
>
  {errorMessage}
</div>
```

### Loading States

**Announce changes:**
```typescript
<div aria-live="polite" aria-busy={isLoading}>
  {isLoading ? 'Loading...' : 'Content loaded'}
</div>
```

---

## Implementation Priority

### Week 1: Critical Fixes
1. Add forwardRef to core form inputs (Input, Select, Textarea, NumberInput)
2. Add forwardRef to picker components
3. Add basic ARIA attributes to inputs

### Week 2: Standardization
4. Standardize props (loading, clearable, helperText)
5. Standardize icon props (leftIcon/rightIcon)
6. Add ARIA attributes to interactive components

### Week 3: Polish
7. Implement keyboard navigation improvements
8. Add live regions
9. Testing and verification
10. Update documentation

---

## Success Criteria

- [ ] forwardRef added to all 20+ form components
- [ ] `loading` prop on all form inputs
- [ ] `clearable` prop on all pickers
- [ ] `helperText` prop on all form components
- [ ] Icon props standardized (leftIcon/rightIcon)
- [ ] ARIA attributes on all interactive components
- [ ] Keyboard navigation on Select, DataTable, Accordion
- [ ] Live regions for dynamic content
- [ ] Build passes with 0 errors/warnings
- [ ] All components properly exported
- [ ] Documentation updated

---

## Recommended Approach

Given the scope of Phase 2 (20+ components to modify), I recommend:

### Option A: Systematic Implementation (Recommended)
- Tackle one category at a time (inputs → pickers → advanced)
- Test thoroughly after each category
- Document changes as you go
- Estimated time: 2-3 weeks

### Option B: High-Impact First
- Focus on most-used components (Input, Select, Button, Modal)
- Add forwardRef and ARIA to top 10 components
- Leave less-used components for later
- Estimated time: 1 week for core, 1-2 weeks for rest

### Option C: Partial Implementation
- Add forwardRef to components that truly need it (pickers for form libraries)
- Add critical ARIA attributes only
- Skip full prop standardization
- Estimated time: 1 week

**Recommendation:** Option B (High-Impact First) provides the best balance of effort vs. value.

---

## Next Steps

1. Review this plan and choose an approach
2. Start with highest-priority components
3. Implement forwardRef systematically
4. Add ARIA attributes as you go
5. Test each component thoroughly
6. Update exports and documentation

Once Phase 2 is complete, notebook-ui will be a **world-class, WCAG AA compliant, production-ready component library** suitable for any React application.
