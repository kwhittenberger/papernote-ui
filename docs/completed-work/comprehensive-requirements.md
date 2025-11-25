# Notebook-UI Feature Requests for Personal-Finances

## Overview
The personal-finances frontend requires several features that are currently missing from notebook-ui.

---

## 1. Text Component Color Extensions

### Current Support
`"error" | "primary" | "secondary" | "success" | "muted" | "accent"`

### Required Addition
- `warning` - for warning text (amber/yellow color)

### Use Case
Displaying warning-level status messages, threshold approaching alerts.

---

## 2. Input Component Textarea Support

### Requirement
Input component needs `rows` prop for multi-line text input (textarea mode).

### Alternative
Create a separate `Textarea` component.

### Use Case
Invoice notes, description fields, multi-line text entry.

---

## 3. Box Component `ref` Support

### Requirement
Box component should forward refs properly for DOM access.

```tsx
const ref = useRef<HTMLDivElement>(null);
<Box ref={ref}>Content</Box>
```

### Use Case
Measuring dimensions, scroll handling, focus management.

---

## 4. EmptyState Component Children Support

### Current Issue
EmptyState doesn't accept children for custom content.

### Requirement
Allow passing children to render below the description.

### Use Case
Adding action buttons or additional context within empty states.

---

## Priority Order
1. Text color `warning` (design system completeness)
2. Input rows/Textarea (form functionality)
3. Box ref support (React patterns)
4. EmptyState children (component composition)
