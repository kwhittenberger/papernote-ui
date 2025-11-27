# Feature Request: Modal Component Enhancements

## Component: Modal

## Status: ✅ IMPLEMENTED

**Implemented in:** `src/components/Modal.tsx`

---

### Current Behavior
The Modal component renders content in a fixed-position dialog but does not provide built-in handling for:
1. Scrollable content when content exceeds viewport height
2. Maximum height constraints

### Requested Enhancements

#### 1. Scrollable Content Option
Add a `scrollable` prop that automatically adds overflow handling to the modal content area.

```tsx
<Modal isOpen={isOpen} onClose={onClose} title="Title" scrollable>
  {/* Long content that may exceed viewport */}
</Modal>
```

**Implementation suggestion:**
- Add `scrollable?: boolean` prop
- When true, apply `max-height: calc(100vh - 200px)` and `overflow-y: auto` to the content div

#### 2. Max Height Prop
Add a `maxHeight` prop to control the maximum height of the modal content area.

```tsx
<Modal isOpen={isOpen} onClose={onClose} title="Title" maxHeight="70vh">
  {/* Content */}
</Modal>
```

**Implementation suggestion:**
- Add `maxHeight?: string` prop
- Apply to the content container div

### Use Case
When displaying document pages, images, or large data tables in a modal, the content often exceeds the viewport height. Currently, developers must wrap content in a div with inline styles:

```tsx
<Modal ...>
  <div style={{ maxHeight: '70vh', overflow: 'auto' }}>
    {/* Content */}
  </div>
</Modal>
```

This workaround breaks the pattern of using only notebook-ui components and requires inline styles.

### Priority
Medium - Affects usability of modals for data-heavy applications.

### Submitted
2025-11-27
