# Bug: Select Dropdown Portal Positioning Gap

## Issue
When the Select component's dropdown is rendered via portal (to avoid overflow clipping from parent containers), there is a visible gap between the trigger button and the dropdown menu. The dropdown appears disconnected from its trigger.

## Current Behavior
The dropdown is positioned using `window.scrollY` offset which creates an 8px gap:

```typescript
// In Select.tsx
useEffect(() => {
  if (isOpen && !useMobileSheet && buttonRef.current) {
    const rect = buttonRef.current.getBoundingClientRect();
    setDropdownPosition({
      top: rect.bottom + window.scrollY + 8, // 8px gap - too much!
      left: rect.left + window.scrollX,
      width: rect.width,
    });
  }
}, [isOpen, useMobileSheet]);
```

## Expected Behavior
The dropdown should appear directly connected to the trigger button with minimal gap (2px), matching the previous non-portal behavior which used `mt-2` (margin-top: 0.5rem = 8px, but visually connected due to being in the same positioning context).

## Root Cause
When using `position: fixed` for the portal dropdown, the visual gap appears larger because:
1. The dropdown is no longer a child of the trigger's container
2. The 8px offset was carried over from the original `mt-2` class but doesn't account for the visual disconnect

## Proposed Fix
1. Reduce the gap to 2px for a tighter visual connection:
```typescript
setDropdownPosition({
  top: rect.bottom + window.scrollY + 2, // Reduced gap
  left: rect.left + window.scrollX,
  width: rect.width,
});
```

2. Consider adding a small CSS arrow/pointer to visually connect the dropdown to its trigger (optional enhancement)

3. Handle scroll events to reposition the dropdown if the page scrolls while it's open:
```typescript
useEffect(() => {
  if (!isOpen || useMobileSheet) return;

  const updatePosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 2,
        left: rect.left,
        width: rect.width,
      });
    }
  };

  window.addEventListener('scroll', updatePosition, true);
  window.addEventListener('resize', updatePosition);

  return () => {
    window.removeEventListener('scroll', updatePosition, true);
    window.removeEventListener('resize', updatePosition);
  };
}, [isOpen, useMobileSheet]);
```

## Additional Considerations
- The dropdown should reposition on window resize
- The dropdown should reposition on scroll (any scrollable ancestor)
- Consider flipping the dropdown above the trigger if there's not enough space below
- May want to add a prop to control portal usage (e.g., `usePortal?: boolean`) for cases where overflow isn't an issue

## Files Affected
- `src/components/Select.tsx`

## Discovered In
personal-finances app - LoanEditRow component where Select dropdowns inside DataTable expanded rows were being clipped by overflow:hidden on parent containers.
