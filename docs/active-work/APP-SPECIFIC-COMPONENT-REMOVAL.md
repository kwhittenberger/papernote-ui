# Application-Specific Component Removal

## Overview

This document tracks the removal of 15 application-specific components from notebook-ui to make it a truly generic, reusable component library.

**Date:** November 2025  
**Breaking Change:** Major version bump required

---

## Components to Remove

### Confirmed App-Specific (13 components)

These are clearly CMMS-specific and must be removed:

1. **CommissionDashboardUI** (`src/components/CommissionDashboardUI.tsx`)
   - Lines 382-383 in index.ts
   - CMMS commission-specific dashboard
   
2. **PaymentHistoryTimeline** (`src/components/PaymentHistoryTimeline.tsx`)
   - Lines 378-379 in index.ts
   - CMMS payment status tracking
   
3. **SplitCommissionBadge** (`src/components/SplitCommissionBadge.tsx`)
   - Lines 334-335 in index.ts
   - CMMS commission splitting UI
   
4. **ChartVisualizationUI** (`src/components/ChartVisualizationUI.tsx`)
   - Lines 386-387 in index.ts
   - CMMS-specific chart component
   
5. **ChatUI** (`src/components/ChatUI.tsx`)
   - Lines 390-391 in index.ts
   - CMMS chat interface
   
6. **InsightsPanelUI** (`src/components/InsightsPanelUI.tsx`)
   - Lines 394-395 in index.ts
   - CMMS analytics insights
   
7. **RoleManager** (`src/components/RoleManager.tsx`)
   - Lines 398-399 in index.ts
   - CMMS role management
   
8. **RelationshipManagerUI** (`src/components/RelationshipManagerUI.tsx`)
   - Lines 402-403 in index.ts
   - CMMS account-staff relationships
   
9. **ActionButton** (`src/components/ActionButton.tsx`)
   - Lines 328-329 in index.ts
   - CMMS-specific action button (needs review - might be generic)
   
10. **AdminModal** (`src/components/AdminModal.tsx`)
    - Lines 322-323 in index.ts
    - CMMS admin interface
    
11. **ExpandableRowButton** (`src/components/ExpandableRowButton.tsx`)
    - Lines 331-332 in index.ts
    - CMMS DataTable expansion button
    
12. **ExpandableToolbar** (`src/components/ExpandableToolbar.tsx`)
    - Lines 344-345 in index.ts
    - CMMS toolbar component
    
13. **ExpandedRowEditForm** (`src/components/ExpandedRowEditForm.tsx`)
    - Lines 266-276 in index.ts
    - CMMS DataTable inline editing

### Needs Review (2 components)

These might be generic enough to keep:

14. **CardView** (`src/components/CardView.tsx`)
    - Lines 337-338 in index.ts
    - **Action:** Review implementation - if generic card grid, keep and rename to CardGrid
    
15. **StatsCardGrid** (`src/components/StatsCardGrid.tsx`)
    - Lines 326 in index.ts
    - **Action:** Review implementation - if generic stats layout, keep

---

## Migration Plan for CMMS

### Step 1: Create CMMS components package

Option A: Move to `@cmms/components` package
```
cmms-components/
├── src/
│   ├── CommissionDashboardUI.tsx
│   ├── PaymentHistoryTimeline.tsx
│   ├── SplitCommissionBadge.tsx
│   └── ... (all 13-15 components)
└── package.json
```

Option B: Move directly into CMMS frontend codebase
```
frontend/
├── src/
│   ├── components/
│   │   ├── domain/
│   │   │   ├── CommissionDashboardUI.tsx
│   │   │   ├── PaymentHistoryTimeline.tsx
│   │   │   └── ...
```

**Recommendation:** Option B (simpler, fewer dependencies)

### Step 2: Update CMMS imports

Before:
```typescript
import { 
  CommissionDashboardUI, 
  PaymentHistoryTimeline,
  SplitCommissionBadge 
} from 'notebook-ui';
```

After (Option B):
```typescript
import { CommissionDashboardUI } from '@/components/domain/CommissionDashboardUI';
import { PaymentHistoryTimeline } from '@/components/domain/PaymentHistoryTimeline';
import { SplitCommissionBadge } from '@/components/domain/SplitCommissionBadge';
```

### Step 3: Update component dependencies

All removed components depend on generic notebook-ui components:
- Button, Card, Badge, DataTable, etc. (keep these imports from notebook-ui)
- Only change the domain-specific component imports

---

## Breaking Changes Documentation

### Version: 2.0.0 (Breaking)

**Removed Exports:**

```typescript
// ❌ REMOVED - Move to CMMS codebase
export { CommissionDashboardUI } from './CommissionDashboardUI';
export { PaymentHistoryTimeline } from './PaymentHistoryTimeline';
export { SplitCommissionBadge } from './SplitCommissionBadge';
export { ChartVisualizationUI } from './ChartVisualizationUI';
export { ChatUI } from './ChatUI';
export { InsightsPanelUI } from './InsightsPanelUI';
export { RoleManager } from './RoleManager';
export { RelationshipManagerUI } from './RelationshipManagerUI';
export { ActionButton } from './ActionButton';
export { AdminModal } from './AdminModal';
export { ExpandableRowButton } from './ExpandableRowButton';
export { ExpandableToolbar } from './ExpandableToolbar';
export { ExpandedRowEditForm } from './ExpandedRowEditForm';
```

**Migration Guide:**

1. Copy removed components to your application codebase
2. Update imports to use local paths instead of `notebook-ui`
3. Generic notebook-ui components (Button, Card, etc.) remain unchanged
4. Update package.json to notebook-ui@2.0.0

---

## Files to Delete

```bash
# Application-specific components
src/components/CommissionDashboardUI.tsx
src/components/PaymentHistoryTimeline.tsx
src/components/SplitCommissionBadge.tsx
src/components/ChartVisualizationUI.tsx
src/components/ChatUI.tsx
src/components/InsightsPanelUI.tsx
src/components/RoleManager.tsx
src/components/RelationshipManagerUI.tsx
src/components/ActionButton.tsx
src/components/AdminModal.tsx
src/components/ExpandableRowButton.tsx
src/components/ExpandableToolbar.tsx
src/components/ExpandedRowEditForm.tsx
```

## index.ts Changes

Remove lines:
- 266-276 (ExpandedRowEditForm)
- 322-323 (AdminModal)
- 328-329 (ActionButton)
- 331-332 (ExpandableRowButton)
- 334-335 (SplitCommissionBadge)
- 344-345 (ExpandableToolbar)
- 378-379 (PaymentHistoryTimeline)
- 382-383 (CommissionDashboardUI)
- 386-387 (ChartVisualizationUI)
- 390-391 (ChatUI)
- 394-395 (InsightsPanelUI)
- 398-399 (RoleManager)
- 402-403 (RelationshipManagerUI)

**Review for genericization:**
- 326 (StatsCardGrid)
- 337-338 (CardView)

---

## Success Criteria

- [ ] All 13-15 app-specific components removed from notebook-ui
- [ ] All exports removed from index.ts
- [ ] Components moved to CMMS codebase
- [ ] CMMS application imports updated
- [ ] Build passes with 0 errors
- [ ] CMMS application still functions correctly
- [ ] BREAKING_CHANGES.md created
- [ ] Version bumped to 2.0.0
- [ ] Library is now 100% generic

---

## Timeline

**Priority:** HIGH - This is Phase 1 Critical Fix

**Estimated Effort:** 2-4 hours
- 30 mins: Copy components to CMMS codebase
- 1 hour: Remove from notebook-ui and update exports
- 1 hour: Update CMMS imports and test
- 30 mins: Documentation and version bump

---

## Next Steps After Removal

Once app-specific components are removed:

1. ✅ Add forwardRef to all form components
2. ✅ Standardize props (loading, clearable, helperText)
3. ✅ Add missing ARIA attributes
4. ✅ Implement 10 core missing components
5. ✅ Comprehensive JSDoc documentation

This will elevate notebook-ui from 8/10 to 10/10 quality score.
