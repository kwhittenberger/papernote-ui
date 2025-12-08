# Feature Request: notebook-ui Tabs Component Improvements

**Target: notebook-ui repo** - Copy to `D:\repos\notebook-ui\docs\feature-requests\`

## Summary

Enhance the Tabs component to provide more flexibility, better usability patterns, and additional features for complex UI scenarios.

## Current API

The current Tabs component uses a data-driven approach:

```tsx
<Tabs 
  tabs={[
    { id: 'tab1', label: 'Tab 1', content: <Component1 /> },
    { id: 'tab2', label: 'Tab 2', content: <Component2 /> },
  ]} 
  defaultTab="tab1"
/>
```

While functional, this has limitations for some use cases.

## Proposed Improvements

### 1. Compound Component Pattern (Priority: High)

Add support for a compound component pattern similar to Radix UI for more flexibility:

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

**Benefits:**
- More control over layout (triggers and content don't need to be adjacent)
- Easier to add conditional tabs
- Better support for complex nested layouts
- Allows custom wrappers around triggers

### 2. Lazy Content Loading (Priority: Medium)

Only render the active tab's content to improve performance for heavy tab content:

```tsx
<Tabs 
  tabs={tabs}
  lazy={true}
  preserveState={true} // Keep mounted after first render
/>
```

### 3. Closeable/Dynamic Tabs (Priority: Medium)

Support for closeable tabs for editor-like interfaces:

```tsx
<Tabs
  tabs={tabs}
  closeable
  onClose={(tabId) => removeTab(tabId)}
  onAdd={() => addTab()}
  showAddButton
/>
```

### 4. DataTable maxHeight Support (Priority: Low - Related)

While not strictly Tabs, DataTable nested in tabs often needs scroll constraints:

```tsx
<DataTable
  data={data}
  columns={columns}
  maxHeight="400px" // Currently not supported
/>
```

### 5. Badge/Count on Tab Triggers (Priority: Low)

Display notification counts or badges on tab triggers:

```tsx
<Tabs 
  tabs={[
    { id: 'inbox', label: 'Inbox', badge: 5, badgeVariant: 'warning' },
    { id: 'sent', label: 'Sent' },
  ]}
/>
```

### 6. Keyboard Navigation (Priority: Medium)

Ensure proper keyboard navigation:
- Arrow keys move between tabs
- Home/End for first/last tab
- Enter/Space to activate focused tab

## Implementation Notes

- Keep backward compatibility with current `tabs` prop API
- Compound components should be optional exports
- Consider using React Context for compound pattern
- Test with screen readers for accessibility

## Related Files

- `src/components/Tabs.tsx`
- `src/components/Tabs.stories.tsx`

## Origin

Identified during implementation of Tax Rules Admin page in personal-finances project (Dec 2025).
