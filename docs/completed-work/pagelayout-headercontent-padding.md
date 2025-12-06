# Bug: PageLayout headerContent lacks padding

## Description

The `headerContent` prop in PageLayout renders outside the padded content container, causing breadcrumbs and other header content to appear too far up and to the left, misaligned with the page title and content.

## Current Behavior

```tsx
<Page padding="none" maxWidth={maxWidth} fixed={fixed}>
  {headerContent}  // ← Renders OUTSIDE the padding container

  <div className={`${paddingClasses} ...`}>
    {/* title, description, children - all properly padded */}
  </div>
</Page>
```

Breadcrumbs in `headerContent` render at the edge of the page without padding, while the title and content below have proper padding applied.

## Expected Behavior

The `headerContent` should have consistent padding/alignment with the title and content below it.

## Visual Example

Breadcrumbs appear flush to the top-left corner instead of aligned with the "Budgets" title below them.

## Suggested Fix

Either:
1. Move `headerContent` inside the padded container (before the title)
2. Apply consistent left/top padding to `headerContent`

```tsx
<Page padding="none" maxWidth={maxWidth} fixed={fixed}>
  <div className={`${paddingClasses} ...`}>
    {headerContent}  // ← Now inside the padding container

    <div className="mb-8">
      {/* title, description */}
    </div>

    {children}
  </div>
</Page>
```

## Affected Components

- PageLayout (when using headerContent with Breadcrumbs)
- All pages migrated to use PageLayout + Breadcrumbs pattern
