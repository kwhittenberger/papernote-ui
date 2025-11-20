# Component Triage Analysis

## Overview

Analysis of 13 "app-specific" components to determine which can be genericized vs which must be removed from notebook-ui.

**Date:** November 2025

---

## Decision Framework

- **KEEP**: Already generic, no changes needed
- **GENERICIZE**: Has potential, needs renaming/refactoring to remove CMMS-specific logic
- **REMOVE**: Inherently CMMS-specific, cannot be genericized

---

## Analysis Results

### ✅ KEEP AS-IS (2 components)

#### 1. CardView
**File:** `src/components/CardView.tsx`  
**Status:** KEEP - Already 100% generic

**Reasoning:**
- Generic card grid layout with loading states
- Takes `CardViewItem[]` with `title`, `subtitle`, `content`, `footer`, `actions`
- No CMMS-specific logic
- Useful for any application displaying data in card format

**Action:** None - keep as is

---

#### 2. StatsCardGrid
**File:** `src/components/StatsCardGrid.tsx`  
**Status:** KEEP - Already 100% generic

**Reasoning:**
- Generic statistics card grid layout
- Takes `StatCard[]` with `icon`, `label`, `value`, `subtitle`
- Responsive columns (1 mobile → 2 tablet → 4 desktop)
- No CMMS-specific logic
- Standard pattern for dashboard metrics

**Action:** None - keep as is

---

### 🔧 GENERICIZE (3 components)

#### 3. ActionButton
**File:** `src/components/ActionButton.tsx`  
**Status:** GENERICIZE or MERGE

**Current State:**
- Generic icon+label button
- Variants: primary, secondary, ghost, danger
- Sizes: sm, md, lg
- Loading state, tooltip support

**Issue:** Very similar to existing `Button` component

**Options:**
1. **Merge into Button**: Add these features to existing Button component
2. **Keep as IconButton**: Rename to `IconButton` for icon-focused use cases
3. **Remove**: Redundant with Button component

**Recommendation:** Review against Button component, likely merge or remove

---

#### 4. ExpandableToolbar
**File:** `src/components/ExpandableToolbar.tsx`  
**Status:** GENERICIZE - Rename to `CollapsibleToolbar`

**Current State:**
- Collapsible toolbar with expandable sections
- Takes `ToolbarSection[]` with `id`, `title`, `icon`, `content`
- Generic collapse/expand behavior

**Changes Needed:**
- ✅ Already generic - just needs better naming
- Rename `ExpandableToolbar` → `CollapsibleToolbar` (more standard naming)
- Review if it overlaps with existing Accordion component

**Action:** Rename and keep, or remove if Accordion covers this use case

---

#### 5. ExpandedRowEditForm
**File:** `src/components/ExpandedRowEditForm.tsx`  
**Status:** GENERICIZE - Could become generic inline form component

**Current State:**
- Form for editing rows in DataTable expanded mode
- Supports text, select, textarea, checkbox, switch fields
- Has save/cancel actions

**Potential:**
- Could be genericized as `InlineEditForm` or integrated into DataTable
- Remove any CMMS-specific field types
- Make field configuration fully generic

**Action:** Review and decide:
1. Genericize as standalone `InlineEditForm` component
2. Integrate into DataTable as built-in edit mode
3. Remove if Form + FieldArray already cover this use case

---

### ❌ REMOVE (8 components)

These are inherently CMMS-specific and cannot be meaningfully genericized:

#### 6. CommissionDashboardUI
**File:** `src/components/CommissionDashboardUI.tsx`  
**Status:** REMOVE - 100% CMMS-specific

**Reasoning:**
- Commission-specific data structures (`CommissionSummary`, `MonthlyCommission`)
- Business logic specific to commission tracking
- Cannot be genericized without losing all value

---

#### 7. PaymentHistoryTimeline
**File:** `src/components/PaymentHistoryTimeline.tsx`  
**Status:** REMOVE - CMMS-specific (but check vs Timeline component)

**Reasoning:**
- Payment status tracking specific to CMMS
- We already have generic `Timeline` component
- This is a specialized version for payment history

**Note:** Generic `Timeline` component already exists and covers this use case

---

#### 8. SplitCommissionBadge
**File:** `src/components/SplitCommissionBadge.tsx`  
**Status:** REMOVE - 100% CMMS-specific

**Reasoning:**
- Commission splitting UI
- CMMS business logic
- No generic equivalent

---

#### 9. ChartVisualizationUI
**File:** `src/components/ChartVisualizationUI.tsx`  
**Status:** REMOVE (likely) - Review content

**Reasoning:**
- Need to check if this is generic chart wrapper or CMMS-specific
- If generic chart component, might be worth keeping
- Most apps use libraries like recharts/chart.js anyway

---

#### 10. ChatUI
**File:** `src/components/ChatUI.tsx`  
**Status:** REMOVE - CMMS-specific

**Reasoning:**
- Chat interface specific to CMMS
- Most apps need custom chat implementations
- Too opinionated for generic library

---

#### 11. InsightsPanelUI
**File:** `src/components/InsightsPanelUI.tsx`  
**Status:** REMOVE - CMMS-specific

**Reasoning:**
- Analytics insights panel for CMMS
- Business logic specific to CMMS analytics
- Cannot be genericized

---

#### 12. RoleManager
**File:** `src/components/RoleManager.tsx`  
**Status:** REMOVE - CMMS-specific

**Reasoning:**
- Role management UI for CMMS
- CMMS-specific permissions and roles
- Each app needs custom role management

---

#### 13. RelationshipManagerUI
**File:** `src/components/RelationshipManagerUI.tsx`  
**Status:** REMOVE - 100% CMMS-specific

**Reasoning:**
- Account-staff relationship management for CMMS
- CMMS business logic and data structures
- Cannot be genericized

---

#### 14. AdminModal
**File:** `src/components/AdminModal.tsx`  
**Status:** REMOVE (likely) - Review content

**Reasoning:**
- Need to check if this is generic modal with tabs or CMMS-specific
- If generic tabbed modal, we already have Modal + Tabs components
- Likely redundant or CMMS-specific

---

#### 15. ExpandableRowButton
**File:** `src/components/ExpandableRowButton.tsx`  
**Status:** REMOVE (likely) - Review if DataTable already handles this

**Reasoning:**
- Button for expanding DataTable rows
- DataTable likely already has built-in expand button
- Check if this adds anything beyond DataTable's existing functionality

---

## Summary

| Status | Count | Components |
|--------|-------|------------|
| ✅ KEEP | 2 | CardView, StatsCardGrid |
| 🔧 GENERICIZE | 3 | ActionButton (merge/remove?), ExpandableToolbar (rename), ExpandedRowEditForm (review) |
| ❌ REMOVE | 8 | CommissionDashboardUI, PaymentHistoryTimeline, SplitCommissionBadge, ChartVisualizationUI, ChatUI, InsightsPanelUI, RoleManager, RelationshipManagerUI |
| ❓ REVIEW | 2 | AdminModal, ExpandableRowButton |

---

## Recommended Action Plan

### Phase 1: Quick Wins (30 mins)
1. Keep CardView and StatsCardGrid (already generic)
2. Remove 8 confirmed CMMS-specific components

### Phase 2: Review & Decide (1 hour)
3. Read AdminModal, ExpandableRowButton - determine if generic or CMMS-specific
4. Review ActionButton vs Button - merge or remove
5. Review ExpandableToolbar vs Accordion - rename or remove
6. Review ExpandedRowEditForm vs Form/DataTable - genericize or remove

### Phase 3: Implementation (1-2 hours)
7. Make changes based on Phase 2 decisions
8. Update index.ts exports
9. Create BREAKING_CHANGES.md
10. Build and test

---

## Next Steps

User decision needed on:
1. **ActionButton**: Merge into Button, rename to IconButton, or remove?
2. **ExpandableToolbar**: Rename to CollapsibleToolbar, or remove if Accordion covers it?
3. **ExpandedRowEditForm**: Genericize, integrate into DataTable, or remove?

Once decided, I'll implement the changes and remove the truly CMMS-specific components.
