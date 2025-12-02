# Bug: Breadcrumbs Component Crashes Without Router Context

## Status: OPEN

## Summary
The `Breadcrumbs` component throws a `TypeError` when used in certain rendering scenarios where the React Router context is not fully available.

## Error Message
```
TypeError: Cannot destructure property 'basename' of '_.useContext(...)' as it is null.
```

## Expected Behavior
The Breadcrumbs component should either:
1. Work correctly when used inside a Router context
2. Provide a meaningful error message if used outside Router context
3. Gracefully degrade (e.g., render plain text/spans instead of Links) when Router is unavailable

## Actual Behavior
The component crashes the entire application with a TypeError because it uses `Link` from `react-router-dom` which internally calls `useContext` on the Router context.

## Steps to Reproduce
1. Import `Breadcrumbs` from `notebook-ui`
2. Use it in a component that is inside a `<BrowserRouter>` but may render before the router context is fully initialized
3. The component crashes with the TypeError

## Environment
- notebook-ui version: latest
- react-router-dom version: 6.x
- React version: 19.x

## Potential Solutions

### Option 1: Use a try-catch wrapper
Wrap the Link usage in a try-catch and fall back to a regular anchor or span.

### Option 2: Add a RouterProvider check
Check if the router context exists before rendering Links:
```tsx
import { useInRouterContext } from 'react-router-dom';

export default function Breadcrumbs({ items, showHome = true }: BreadcrumbsProps) {
  const inRouter = useInRouterContext();

  // If not in router context, render plain text/anchors
  if (!inRouter) {
    // Render with <a href="..."> instead of <Link to="...">
  }
  // ...
}
```

### Option 3: Export a separate non-router Breadcrumbs
Create `BreadcrumbsStatic` that uses plain anchors for cases where Router may not be available.

## Affected Files
- `src/components/Breadcrumbs.tsx`

## Related
- React Router v6 requires components using `Link` to be inside a `<Router>` provider
- The error occurs in the `Link` component's internal `useHref` hook

## Date Reported
2025-11-26

## Reported From
CMMS - ReportBuilderPage.tsx
