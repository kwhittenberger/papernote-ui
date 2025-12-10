# Feature Request: Modal Component Should Use React Portal

## Problem

The Modal component currently renders in-place within the component tree. When a Modal is rendered inside a container with `overflow: hidden` or other constraining CSS, the modal can be clipped or not display correctly relative to the viewport.

For example, when rendering a Modal inside a DataTable expanded row, the modal extends beyond the visible area because it's positioned relative to a constrained parent rather than the viewport.

## Proposed Solution

Update the Modal component to use `createPortal` from `react-dom` to render the modal content at `document.body` level. This ensures the modal is always positioned relative to the viewport regardless of where it's placed in the component tree.

### Changes Required

1. Import `createPortal` from 'react-dom'
2. Wrap the modal's rendered content with `createPortal(..., document.body)`

### Example Implementation

```tsx
import { createPortal } from 'react-dom';

// In the render:
if (!isOpen) return null;

const modalContent = (
  <div className="fixed inset-0 z-50 ...">
    {/* modal content */}
  </div>
);

return createPortal(modalContent, document.body);
```

## Workaround

Currently, consumers can manually wrap the Modal with `createPortal`:

```tsx
import { createPortal } from 'react-dom';
import { Modal } from '@papernote/ui';

// In component:
{createPortal(
  <Modal isOpen={isOpen} onClose={onClose} title="Title">
    {content}
  </Modal>,
  document.body
)}
```

## Impact

- All modals will render at document.body level, ensuring consistent viewport-relative positioning
- No breaking changes to the API
- Better behavior out-of-the-box without requiring consumers to use portals manually

## Files Affected

- `src/components/Modal.tsx`

## Related

This affects any Modal usage within constrained containers like:
- DataTable expanded rows
- Sidebars with overflow constraints
- Nested scroll containers
