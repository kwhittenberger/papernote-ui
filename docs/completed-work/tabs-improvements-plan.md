# Tabs Component Improvements - Implementation Plan

## Overview

Enhance the Tabs component based on feature request in `docs/feature-requests/notebook-ui-tabs-improvements.md`.

## Current State

The current Tabs component (`src/components/Tabs.tsx`) provides:
- Data-driven API via `tabs` array prop
- Controlled/uncontrolled modes
- Variants: 'underline' | 'pill'
- Orientation: 'horizontal' | 'vertical'
- Sizes: 'sm' | 'md' | 'lg'
- Icon support on tabs
- Disabled tab support

## Implementation Phases

### Phase 1: Quick Wins (v1.10.0)

#### 1.1 Badge Support on Tab Triggers
Add `badge` and `badgeVariant` to Tab interface:
```tsx
interface Tab {
  // existing...
  badge?: number | string;
  badgeVariant?: 'primary' | 'success' | 'warning' | 'error';
}
```

#### 1.2 Keyboard Navigation
Enhance accessibility with proper keyboard support:
- Arrow Left/Right (horizontal) or Up/Down (vertical) to move focus
- Home/End for first/last tab
- Enter/Space to activate focused tab
- Proper focus management with `tabIndex`

### Phase 2: Lazy Loading & Dynamic Tabs (v1.11.0)

#### 2.1 Lazy Content Loading
Add props to control content rendering:
```tsx
interface TabsProps {
  // existing...
  lazy?: boolean;           // Only render active tab content
  preserveState?: boolean;  // Keep mounted after first render (requires lazy=true)
}
```

#### 2.2 Closeable/Dynamic Tabs
Add support for editor-like tab interfaces:
```tsx
interface Tab {
  // existing...
  closeable?: boolean;  // Per-tab closeable control
}

interface TabsProps {
  // existing...
  closeable?: boolean;      // Global closeable (all tabs)
  onClose?: (tabId: string) => void;
  showAddButton?: boolean;
  onAdd?: () => void;
  addButtonLabel?: string;
}
```

### Phase 3: Compound Components (v1.12.0)

#### 3.1 Compound Component Pattern
Create additional exports for flexible composition:
```tsx
// New exports
export { TabsList, TabsTrigger, TabsContent } from './Tabs';

// Usage
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

Implementation approach:
- Use React Context to share state between compound components
- Keep existing data-driven API working (backward compatible)
- Export both patterns

## Files to Modify

- `src/components/Tabs.tsx` - Main component
- `src/components/Tabs.stories.tsx` - Storybook stories
- `src/components/index.ts` - Exports

## Testing Strategy

- Add stories for each new feature
- Test keyboard navigation manually in Storybook
- Verify backward compatibility with existing API
- Test controlled and uncontrolled modes

## Notes

- DataTable maxHeight is listed as "Related" but should be a separate enhancement to DataTable component
- All changes must maintain backward compatibility
- Follow existing notebook-ui patterns and design tokens
