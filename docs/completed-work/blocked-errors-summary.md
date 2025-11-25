# Personal-Finances Frontend - Error Summary

## Current Status
- **Starting Errors**: 786
- **Remaining Errors**: ~288
- **Fixed**: ~498 errors (63%)

## Errors Fixed
1. Stack `gap` → `spacing` prop
2. Stack `justify="space-between"` → `justify="between"`
3. Stack/Text style props for `justifyContent`/`alignItems` → native props
4. Text `variant="heading"` → `weight="semibold"`
5. Text `variant="error"` → `color="error"`
6. Text `size="md"` → `size="base"`
7. Badge variants: `default`/`secondary`/`primary`/`danger` → `neutral`/`neutral`/`info`/`error`
8. Button `variant="error"` → `variant="danger"`
9. PageLayout `actions` → `headerContent`, `subtitle` → `description`
10. useConfirmDialog destructuring API
11. DataTable `Column` → `DataTableColumn` type imports
12. Various type errors (missing fields, type mismatches)

## Remaining Errors - Code Needs Refactoring

### Custom Style Props (~200 errors)
These components use inline `style` props which notebook-ui doesn't support.
**Resolution**: Refactor code to use notebook-ui design system props only, or use Box component's spacing/margin/padding props.

### Custom HTML Elements (~40 errors)
Code uses `<ul>`, `<li>`, `<code>`, `<div>` with inline styles.
**Resolution**: Refactor to use notebook-ui components with design system props.

## Valid Feature Requests (notebook-ui enhancements)

1. **Text `color="warning"`** - Add warning color to design system
2. **Input `rows` prop or Textarea component** - Multi-line text input
3. **Box `ref` forwarding** - Proper ref support
4. **EmptyState `children`** - Allow child content

## Files Requiring Refactoring
1. RecurringTransactions.tsx - extensive custom styling
2. MatchingRules.tsx - custom layout styling
3. Profile.tsx - Card/Text custom styles
4. Dashboard.tsx - custom styling
5. LegalEntities.tsx - Box ref, custom styles
6. ImportTransactions.tsx - list rendering
7. Institutions.tsx - list rendering
