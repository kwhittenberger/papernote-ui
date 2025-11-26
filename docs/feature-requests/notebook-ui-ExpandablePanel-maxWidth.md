# Feature Request: ExpandablePanel maxWidth Prop

## Target: notebook-ui

## Status: ✅ IMPLEMENTED

**Implemented in:** `src/components/ExpandablePanel.tsx`

---

## Summary
Add a `maxWidth` prop to the ExpandablePanel component to allow constraining the panel width and centering it horizontally within its container or viewport.

## Use Case
In the CMMS Report Builder page, the page content is constrained to `maxWidth: 1400px` and centered. The ExpandablePanel (used for the SQL preview panel) currently spans the full width of the viewport/container, creating a visual mismatch where the panel extends beyond the content above it.

The panel should be able to match the same max-width constraint as the page content to maintain visual alignment.

## Implemented API

```tsx
interface ExpandablePanelProps {
  // ... existing props ...

  /**
   * Maximum width of the panel (e.g., '1400px', '80%', 1200)
   * When set, the panel will be centered horizontally within its container/viewport
   */
  maxWidth?: string | number;
}
```

## Example Usage

```tsx
import { ExpandablePanel, ExpandablePanelContainer } from 'notebook-ui';

// Page with constrained content width - panel should match
<ExpandablePanelContainer>
  <Box style={{ maxWidth: '1400px', margin: '0 auto' }}>
    {/* Page content */}
  </Box>

  <ExpandablePanel
    mode="container"
    maxWidth="1400px"  // Matches page content width
    collapsedContent={<Text>Generated SQL</Text>}
    expandedHeight="300px"
  >
    {sqlContent}
  </ExpandablePanel>
</ExpandablePanelContainer>
```

## Implementation Details

When `maxWidth` is provided:
1. Applies `max-width` style to the panel container
2. Applies `margin-left: auto; margin-right: auto` to center the panel
3. Works with both `mode="viewport"` and `mode="container"`

## Priority
Medium - Visual polish issue, not blocking functionality.

## Requesting Application
CMMS (commissions-management) - Report Builder page (`src/frontend/cmms-web/src/pages/reports/ReportBuilderPage.tsx`)

## Related Components
- ExpandablePanelContainer
- Box (for comparison of maxWidth styling)
