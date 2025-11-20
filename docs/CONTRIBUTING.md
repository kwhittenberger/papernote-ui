# Contributing to Notebook-UI

This guide explains how to add new components and improve existing ones in notebook-ui.

---

## Development Setup

```bash
# Clone the repository
git clone https://github.com/kwhittenberger/notebook-ui.git

# Install dependencies
npm install

# Build
npm run build

# Watch mode for development
npm run dev

# Type check
npm run typecheck

# Lint
npm run lint
```

---

## Adding a New Component

### Step 1: Create the Component File

Create `src/components/YourComponent.tsx`:

```typescript
// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of notebook-ui.
// Proprietary and confidential.

import React from 'react';

export interface YourComponentProps {
  /** Description of the prop */
  variant?: 'default' | 'primary' | 'secondary';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the component is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Children content */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export default function YourComponent({
  variant = 'default',
  size = 'md',
  disabled = false,
  onClick,
  children,
  className = '',
}: YourComponentProps) {
  // Variant styles using design tokens
  const variantClasses = {
    default: 'bg-paper-50 text-ink-700 border-paper-200',
    primary: 'bg-primary-500 text-white border-primary-600',
    secondary: 'bg-accent-100 text-accent-700 border-accent-200',
  };

  // Size styles
  const sizeClasses = {
    sm: 'text-sm px-2 py-1',
    md: 'text-base px-3 py-2',
    lg: 'text-lg px-4 py-3',
  };

  return (
    <div
      className={`
        rounded-md border
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      onClick={disabled ? undefined : onClick}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
    >
      {children}
    </div>
  );
}
```

### Step 2: Export from Index

Add to `src/components/index.ts`:

```typescript
// Your Component
export { default as YourComponent } from './YourComponent';
export type { YourComponentProps } from './YourComponent';
```

### Step 3: Build and Test

```bash
npm run build
npm run typecheck
```

---

## Design Tokens

### Colors

Always use design tokens, never hardcoded colors:

```typescript
// ❌ Wrong
'bg-slate-500'
'text-gray-600'
'border-green-200'

// ✓ Correct
'bg-primary-500'
'text-ink-600'
'border-success-200'
```

**Available color tokens:**

| Token | Usage |
|-------|-------|
| `paper-50/100/200/300/400` | Backgrounds, surfaces |
| `ink-50/100/.../900` | Text colors |
| `primary-50/100/.../950` | Primary UI elements |
| `accent-50/100/.../900` | Accent/highlight colors |
| `success-50/100/.../900` | Success states |
| `warning-50/100/.../900` | Warning states |
| `error-50/100/.../900` | Error states |

### Spacing

Use the standard spacing scale:

```typescript
// Padding/Margin
'p-1'    // 4px - xs
'p-2'    // 8px - sm
'p-4'    // 16px - md
'p-6'    // 24px - lg
'p-8'    // 32px - xl

// Gap
'gap-1'  // 4px
'gap-2'  // 8px
'gap-4'  // 16px
'gap-6'  // 24px
```

### Sizes

Standard size variants:

```typescript
size?: 'sm' | 'md' | 'lg'

// Sometimes extended:
size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
```

### Typography

```typescript
// Font sizes
'text-xs'   // 12px
'text-sm'   // 14px
'text-base' // 16px
'text-lg'   // 18px
'text-xl'   // 20px
'text-2xl'  // 24px

// Font weights
'font-normal'   // 400
'font-medium'   // 500
'font-semibold' // 600
'font-bold'     // 700
```

### Shadows

```typescript
'shadow-xs'     // Very subtle
'shadow-sm'     // Soft lift
'shadow-md'     // Moderate elevation
'shadow-lg'     // Strong elevation
'shadow-paper'  // Paper-like
'shadow-card'   // Card shadow
```

### Border Radius

```typescript
'rounded-sm'    // 2px
'rounded'       // 4px
'rounded-md'    // 6px
'rounded-lg'    // 8px
'rounded-xl'    // 12px
```

---

## Component Patterns

### Variant Pattern

```typescript
export interface MyComponentProps {
  variant?: 'default' | 'primary' | 'secondary' | 'danger';
}

const variantClasses = {
  default: 'bg-paper-50 text-ink-700',
  primary: 'bg-primary-500 text-white',
  secondary: 'bg-accent-100 text-accent-700',
  danger: 'bg-error-500 text-white',
};

<div className={variantClasses[variant]}>
```

### Size Pattern

```typescript
export interface MyComponentProps {
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'text-sm px-2 py-1',
  md: 'text-base px-3 py-2',
  lg: 'text-lg px-4 py-3',
};
```

### Disabled State

```typescript
<button
  disabled={disabled}
  className={`
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `}
  aria-disabled={disabled}
>
```

### Loading State

```typescript
import { Loader2 } from 'lucide-react';

{loading ? (
  <Loader2 className="animate-spin" />
) : (
  children
)}
```

### Validation States

```typescript
export interface MyInputProps {
  validationState?: 'error' | 'success' | 'warning' | null;
  validationMessage?: string;
}

const validationClasses = {
  error: 'border-error-500 focus:ring-error-500',
  success: 'border-success-500 focus:ring-success-500',
  warning: 'border-warning-500 focus:ring-warning-500',
};
```

### Compound Components

For complex components, use compound pattern:

```typescript
// Main component
export default function Card({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

// Sub-components
export function CardHeader({ children }) {
  return <div className="px-4 py-3 border-b">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}

// Usage
<Card>
  <CardHeader>Title</CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

---

## Accessibility Requirements

### Semantic HTML

```typescript
// Use appropriate elements
<button> not <div onClick>
<nav> for navigation
<main> for main content
<aside> for sidebars
```

### ARIA Attributes

```typescript
// Required attributes
aria-label="Description"
aria-expanded={isOpen}
aria-selected={isSelected}
aria-disabled={disabled}
aria-current="page"
role="button" | "tab" | "menuitem" | etc.
```

### Keyboard Support

```typescript
// Focus management
tabIndex={0}

// Key handlers
onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleClick();
  }
  if (e.key === 'Escape') {
    handleClose();
  }
}}
```

### Focus Styles

```typescript
'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
```

---

## TypeScript Guidelines

### Export Types

Always export both component and types:

```typescript
export { default as MyComponent } from './MyComponent';
export type { MyComponentProps } from './MyComponent';
```

### Generic Components

For data-driven components:

```typescript
export interface DataTableProps<T extends BaseDataItem> {
  data: T[];
  columns: DataTableColumn<T>[];
  onRowClick?: (row: T) => void;
}

export default function DataTable<T extends BaseDataItem>({
  data,
  columns,
  onRowClick,
}: DataTableProps<T>) {
  // ...
}
```

### Event Handlers

```typescript
// Standard React events
onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;

// Value callbacks
onValueChange?: (value: string) => void;
onSelectionChange?: (selected: T[]) => void;
```

---

## Common Improvements

### Adding a Prop to Existing Component

1. Add to interface
2. Add to destructuring with default
3. Implement the functionality
4. Update any affected styles

```typescript
// Before
export interface ButtonProps {
  variant?: 'primary' | 'secondary';
}

// After
export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;  // Added
}

export default function Button({
  variant = 'primary',
  fullWidth = false,  // Added with default
  ...
}) {
  return (
    <button
      className={`
        ${fullWidth ? 'w-full' : ''}  // Implemented
      `}
    >
```

### Fixing Hardcoded Colors

Replace with design tokens:

```typescript
// Before
'bg-slate-500 text-white'

// After
'bg-primary-500 text-white'
```

### Adding Loading State

```typescript
export interface MyComponentProps {
  loading?: boolean;
}

{loading ? (
  <Loading variant="spinner" size="sm" />
) : (
  content
)}
```

---

## Testing Checklist

Before submitting changes:

- [ ] `npm run build` succeeds
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] Component renders correctly
- [ ] All variants work
- [ ] Disabled state works
- [ ] Keyboard navigation works
- [ ] Screen reader accessible
- [ ] Uses design tokens (no hardcoded colors)
- [ ] Props are documented with JSDoc comments
- [ ] Types are exported

---

## Component Wishlist

Priority components to add:

### High Priority
- [ ] DatePicker
- [ ] Combobox
- [ ] FormField wrapper

### Medium Priority
- [ ] TimePicker
- [ ] DateRangePicker
- [ ] ButtonGroup
- [ ] NumberInput
- [ ] Slider

### Nice to Have
- [ ] ColorPicker
- [ ] TreeView
- [ ] Calendar view

See `docs/COMPONENT-INVENTORY.md` for full details.

---

## Code Style

### File Structure

```typescript
// 1. Copyright header
// 2. Imports (React, then external, then internal)
// 3. Type definitions
// 4. Helper functions
// 5. Component
// 6. Sub-components (if any)
```

### Naming Conventions

- Components: PascalCase (`MyComponent`)
- Props interfaces: `MyComponentProps`
- Files: PascalCase matching component (`MyComponent.tsx`)
- CSS class objects: camelCase (`variantClasses`)

### Props Order

```typescript
export interface MyComponentProps {
  // 1. Variant/appearance
  variant?: '...';
  size?: '...';

  // 2. State
  disabled?: boolean;
  loading?: boolean;

  // 3. Data
  value?: string;
  options?: Option[];

  // 4. Event handlers
  onChange?: () => void;
  onClick?: () => void;

  // 5. Children and className
  children?: React.ReactNode;
  className?: string;
}
```

---

## Questions?

- Review existing components for patterns
- Check `docs/COMPONENT-INVENTORY.md` for API conventions
- File an issue for discussion

