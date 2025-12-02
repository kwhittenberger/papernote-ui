# Bug Report: Breadcrumbs Component Missing onClick Support

**Date:** December 2, 2025
**Reported By:** Claude Code
**Component:** Breadcrumbs (`src/components/Breadcrumbs.tsx`)
**Status:** ✅ RESOLVED in v1.7.2

## Summary

The Breadcrumbs component did not support `onClick` handlers on breadcrumb items and did not handle same-route navigation properly. This prevented proper navigation in pages that use internal state management for view modes (list/detail views) rather than URL-based routing.

## Original Problem

In applications like personal-finances, pages like Budgets and FinancialGoals use internal state (`viewMode: 'list' | 'detail'`) to toggle between list and detail views. When viewing a detail and clicking a breadcrumb like "Budgets" with `href="/budgets"`, the URL didn't change (already on that route), so nothing happened - the component's internal `viewMode` state remained `'detail'`.

## Solution Implemented

### 1. Same-Route Navigation Detection

The Breadcrumbs component now detects when a breadcrumb click would navigate to the current route. When this happens, it uses `navigate()` with a unique state object instead of letting the Link handle it:

```typescript
navigate(href, { 
  state: { 
    breadcrumbReset: Date.now(),  // Unique value triggers useEffect
    from: 'breadcrumb'
  },
  replace: true 
});
```

### 2. `useBreadcrumbReset` Hook

A new hook is exported that host apps can use to easily detect breadcrumb navigation and reset state:

```typescript
import { useBreadcrumbReset } from 'notebook-ui';

function ProductsPage() {
  const [viewMode, setViewMode] = useState<'list' | 'detail'>('list');
  
  // Automatically reset to list view when breadcrumb is clicked
  useBreadcrumbReset(() => setViewMode('list'));
  
  // ... rest of component
}
```

### 3. `onClick` Support (Additional Feature)

Breadcrumb items can now include an `onClick` handler for custom actions (analytics, logging, etc.) that is called in addition to navigation:

```typescript
const breadcrumbs = [
  { 
    label: 'Products', 
    href: '/products',
    onClick: () => trackBreadcrumbClick('products')  // Custom action
  },
  { label: 'Widget' }
];
```

## Usage Examples

### Basic Usage (Just Works)

```tsx
import { Breadcrumbs, useBreadcrumbReset } from 'notebook-ui';

function BudgetsPage() {
  const [viewMode, setViewMode] = useState<'list' | 'detail'>('list');
  const [selectedBudget, setSelectedBudget] = useState<Budget | null>(null);
  
  // Reset to list view when breadcrumb navigation occurs
  useBreadcrumbReset(() => {
    setViewMode('list');
    setSelectedBudget(null);
  });

  const breadcrumbs = viewMode === 'list'
    ? [{ label: 'Budgets' }]
    : [
        { label: 'Budgets', href: '/budgets' },  // Clicking this resets view
        { label: selectedBudget?.name || 'Budget Details' }
      ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {viewMode === 'list' ? <BudgetList /> : <BudgetDetail />}
    </>
  );
}
```

### Manual State Detection (Alternative)

If you prefer not to use the hook:

```tsx
import { useLocation } from 'react-router-dom';
import type { BreadcrumbNavigationState } from 'notebook-ui';

function BudgetsPage() {
  const location = useLocation();
  const [viewMode, setViewMode] = useState<'list' | 'detail'>('list');

  useEffect(() => {
    const state = location.state as BreadcrumbNavigationState | null;
    if (state?.breadcrumbReset) {
      setViewMode('list');
    }
  }, [location.state]);

  // ...
}
```

## Architectural Recommendation

While this fix enables state-based view management, the **recommended approach** for new applications is to use URL-based routing for view modes:

```
/budgets          → List view
/budgets/:id      → Detail view
```

This approach:
- Makes breadcrumb navigation work naturally without any hooks
- Enables browser back/forward navigation
- Allows direct linking/bookmarking to specific views
- Provides better SEO and analytics tracking

The `useBreadcrumbReset` hook is provided for existing applications that already use component state for view management.

## API Reference

### `BreadcrumbItem` Interface

```typescript
interface BreadcrumbItem {
  /** Display text for the breadcrumb */
  label: string;
  /** URL to navigate to. When provided, renders as a Link */
  href?: string;
  /** 
   * Optional callback fired when breadcrumb is clicked.
   * Called in addition to navigation when href is provided.
   * Use for custom actions like analytics, state resets, etc.
   */
  onClick?: () => void;
  /** Optional icon to display before the label */
  icon?: React.ReactNode;
}
```

### `useBreadcrumbReset` Hook

```typescript
function useBreadcrumbReset(onReset: () => void): void;
```

### `BreadcrumbNavigationState` Type

```typescript
interface BreadcrumbNavigationState {
  /** Unique timestamp to detect navigation, even to the same route */
  breadcrumbReset: number;
  /** Identifies the source of navigation */
  from: 'breadcrumb';
}
```

## Files Changed

- `src/components/Breadcrumbs.tsx` - Added same-route detection, onClick support, and useBreadcrumbReset hook
- `src/components/index.ts` - Export useBreadcrumbReset and BreadcrumbNavigationState
