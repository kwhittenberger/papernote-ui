# Feature Request: Add Actions Support to PageLayout

## Problem

Currently, pages that need header actions (buttons like "Add", "Export", etc.) must use both `PageLayout` and `PageHeader` together, which causes duplicate title rendering:

```tsx
// Current problematic pattern - duplicate titles
<PageLayout title="Dashboard">
  <PageHeader
    title="Dashboard"  // Duplicates PageLayout's title!
    breadcrumbs={...}
    actions={[{ label: 'Add New', onClick: ... }]}
  />
  {content}
</PageLayout>
```

This results in the page title appearing twice on screen.

## Proposed Solution

Add `actions` prop to `PageLayout` so it can handle page-level actions directly:

```tsx
// Proposed pattern - single source of truth for title
<PageLayout
  title="Dashboard"
  description="Overview of your metrics"
  headerContent={<Breadcrumbs items={[...]} />}
  actions={[
    { label: 'Add New', icon: Plus, onClick: handleAdd },
    { label: 'Export', icon: Download, variant: 'secondary', onClick: handleExport }
  ]}
>
  {content}
</PageLayout>
```

## API Changes

Add to `PageLayoutProps`:

```typescript
interface PageLayoutProps {
  // ... existing props

  /** Page-level action buttons rendered in the header area */
  actions?: PageHeaderAction[];
}
```

## Layout Structure

The actions should render inline with the title, aligned to the right:

```
[headerContent - breadcrumbs, alerts, etc.]

[Title]                              [Action Buttons]
[Description]

[children]
```

## Benefits

1. Single component handles full page structure
2. No duplicate title rendering
3. Cleaner component composition
4. Consistent with PageLayout being the "page structure" component

## Affected Projects

- personal-finances (33 pages use PageHeader)
- Potentially other projects using notebook-ui

## Migration Path

Once implemented, projects can migrate from:
```tsx
<PageLayout title={name}>
  <PageHeader title={name} actions={actions} breadcrumbs={crumbs} />
```

To:
```tsx
<PageLayout title={name} actions={actions} headerContent={<Breadcrumbs items={crumbs} />}>
```
