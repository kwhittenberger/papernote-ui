# Feature Request: Badge Component - Prevent Text Wrapping

## Summary
Add `whitespace-nowrap` to the Badge component to prevent text from wrapping to multiple lines within badges.

## Problem
Badges with longer text (e.g., "Manual Time Entries") wrap to multiple lines, causing visual issues in table cells and other constrained layouts. This makes the badge look oversized and messy.

## Proposed Solution
1. Add `whitespace-nowrap` class to the Badge's outer span element
2. Optionally add `truncate` and `maxWidth` props for cases where truncation is needed

### Code Changes
In `src/components/Badge.tsx`:

```tsx
// Add to BadgeProps interface:
/** Truncate text with ellipsis if it overflows */
truncate?: boolean;
/** Maximum width for the badge (useful with truncate) */
maxWidth?: string;

// Update the className in the return statement:
className={`
  inline-flex items-center border font-medium whitespace-nowrap
  ${pill ? 'rounded-full' : 'rounded-full'}
  ${variantStyles[variant]}
  ${pill ? pillSizeStyles[size] : sizeStyles[size]}
  ${truncate ? 'max-w-full' : ''}
  ${className}
`}
style={maxWidth ? { maxWidth } : undefined}

// Update the children span:
<span className={truncate ? 'truncate' : ''}>{children}</span>
```

## Affected Apps
- personal-finances (Time Tracking page)
- Potentially other apps using Badge in constrained layouts

## Priority
Medium - visual polish issue

## Date
2025-12-12
