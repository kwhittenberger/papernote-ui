# Mobile Support Implementation Plan

## Overview

This plan outlines the implementation of comprehensive mobile support for notebook-ui, targeting PWA/Hybrid applications with auto-responsive behavior. All host applications (CMMS, Conductor, epstein-files) will automatically benefit from these changes.

## Current State Summary

### Existing Mobile-Ready Components
- **BottomSheet**: Touch gestures, drag-to-dismiss, viewport heights
- **Drawer**: Multi-directional, responsive sizing
- **Carousel**: Touch swipe support
- **Grid**: Responsive column breakpoints
- **ResponsiveUtilities**: Show/Hide components, useMediaQuery hook
- **Pagination**: Responsive text hiding

### Critical Gaps
1. **DataTable**: No mobile card view, no touch-optimized actions
2. **Layout/Sidebar**: No hamburger menu, no mobile drawer collapse
3. **Modal**: Doesn't auto-adapt to mobile (should use BottomSheet)
4. **Forms**: Touch targets may be too small (<44px)
5. **Navigation**: No bottom navigation component

---

## Phase 1: Foundation & Infrastructure

**Goal**: Establish the core responsive infrastructure that all components will use.

### 1.1 Enhanced Responsive Hooks

**File**: `src/hooks/useResponsive.ts` (new file)

```typescript
// Breakpoint-aware hooks with SSR safety
export const useBreakpoint = () => {...}
export const useIsMobile = () => {...}  // < 768px
export const useIsTablet = () => {...}  // 768-1024px
export const useIsDesktop = () => {...} // > 1024px
export const useTouchDevice = () => {...}
export const useViewportSize = () => {...}
export const useOrientation = () => {...}
```

### 1.2 Mobile Context Provider

**File**: `src/context/MobileContext.tsx` (new file)

```typescript
// Global mobile state for auto-responsive components
interface MobileContextValue {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouchDevice: boolean;
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  orientation: 'portrait' | 'landscape';
}

export const MobileProvider: React.FC
export const useMobileContext: () => MobileContextValue
```

### 1.3 Touch Target Sizing Standards

**File**: `tailwind.config.js` - Add touch-optimized spacing

```javascript
// Add to theme.extend
touchTarget: {
  sm: '36px',   // Minimum for secondary actions
  md: '44px',   // Standard touch target (Apple HIG)
  lg: '48px',   // Large buttons, primary actions
}
```

### 1.4 Storybook Mobile Viewport Configuration

**File**: `.storybook/preview.ts` - Add viewport addon config

```typescript
export const parameters = {
  viewport: {
    viewports: {
      mobile: { name: 'Mobile', styles: { width: '375px', height: '667px' } },
      mobileLandscape: { name: 'Mobile Landscape', styles: { width: '667px', height: '375px' } },
      tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
      desktop: { name: 'Desktop', styles: { width: '1280px', height: '800px' } },
    },
  },
};
```

---

## Phase 2: Navigation & Layout

**Goal**: Mobile-first navigation with auto-collapsing sidebar and bottom navigation.

### 2.1 MobileLayout Component

**File**: `src/components/MobileLayout.tsx` (new file)

Auto-responsive layout that switches between desktop and mobile patterns:
- Desktop: Standard sidebar layout
- Mobile: Drawer navigation + bottom navigation bar

```typescript
interface MobileLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  bottomNavItems?: BottomNavItem[];
  statusBar?: React.ReactNode;
  // Auto-detects mobile and switches layout
}
```

### 2.2 BottomNavigation Component

**File**: `src/components/BottomNavigation.tsx` (new file)

iOS/Android-style bottom tab bar:
- Fixed to bottom of viewport
- 4-5 primary navigation items
- Active state indication
- Badge support for notifications
- Safe area inset handling (notch/home indicator)

```typescript
interface BottomNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  badge?: number;
  onClick?: () => void;
}

interface BottomNavigationProps {
  items: BottomNavItem[];
  activeId?: string;
  onNavigate?: (id: string) => void;
}
```

### 2.3 Enhanced Sidebar with Mobile Drawer

**File**: `src/components/Sidebar.tsx` - Enhance existing

Add props for mobile behavior:
```typescript
interface SidebarProps {
  // ... existing props
  mobileOpen?: boolean;
  onMobileClose?: () => void;
  mobileVariant?: 'drawer' | 'overlay';
}
```

When on mobile:
- Renders as Drawer component
- Swipe-to-close gesture
- Backdrop overlay

### 2.4 MobileHeader Component

**File**: `src/components/MobileHeader.tsx` (new file)

Mobile app header with hamburger menu:
```typescript
interface MobileHeaderProps {
  title: string;
  onMenuClick: () => void;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  sticky?: boolean;
}
```

---

## Phase 3: DataTable Mobile View

**Goal**: DataTable automatically switches to card view on mobile with touch-optimized actions.

### 3.1 DataTableCardView Internal Component

**File**: `src/components/DataTable.tsx` - Internal component

Card-based view for mobile:
- Each row becomes a Card
- Primary column prominent
- Secondary columns in detail section
- Swipe actions (edit/delete)
- Tap to expand details

### 3.2 DataTable Auto-Responsive Props

Add to DataTable:
```typescript
interface DataTableProps {
  // ... existing props
  
  // Mobile behavior (auto by default)
  mobileView?: 'auto' | 'cards' | 'scroll' | 'none';
  mobileBreakpoint?: number; // Default: 768
  
  // Card view configuration
  mobileCardConfig?: {
    primaryColumn: string;
    secondaryColumns?: string[];
    showImage?: string; // Column key for image
    actions?: 'swipe' | 'menu' | 'both';
  };
}
```

### 3.3 SwipeActions Component

**File**: `src/components/SwipeActions.tsx` (new file)

iOS-style swipe-to-reveal actions:
```typescript
interface SwipeActionsProps {
  children: React.ReactNode;
  leftActions?: SwipeAction[];
  rightActions?: SwipeAction[];
  threshold?: number;
}

interface SwipeAction {
  label: string;
  icon?: React.ReactNode;
  color: 'primary' | 'danger' | 'warning';
  onClick: () => void;
}
```

---

## Phase 4: Modal & Dialog Mobile Optimization

**Goal**: Modals automatically use BottomSheet pattern on mobile.

### 4.1 ResponsiveModal Component

**File**: `src/components/Modal.tsx` - Enhance existing

Add auto-responsive behavior:
```typescript
interface ModalProps {
  // ... existing props
  
  // Mobile behavior
  mobilePresentation?: 'auto' | 'modal' | 'bottomSheet' | 'fullScreen';
  mobileSize?: 'sm' | 'md' | 'lg' | 'full'; // BottomSheet height
}
```

When `mobilePresentation='auto'` (default):
- Mobile portrait: BottomSheet
- Mobile landscape: Centered modal (smaller)
- Tablet/Desktop: Standard modal

### 4.2 ConfirmDialog Mobile Enhancement

**File**: `src/components/ConfirmDialog.tsx` - Enhance

- Use BottomSheet on mobile
- Larger touch targets for buttons
- Swipe down to dismiss (cancel)

### 4.3 FormModal Mobile Enhancement

- Full-screen on mobile
- Sticky header with title/close
- Sticky footer with action buttons
- Keyboard-aware scrolling

---

## Phase 5: Form Components Touch Optimization

**Goal**: All form components meet 44px minimum touch target and handle mobile keyboards.

### 5.1 Input Component Enhancement

**File**: `src/components/Input.tsx` - Enhance

- Increase touch target to 44px minimum
- Add `inputMode` prop for mobile keyboard optimization
- Add `enterKeyHint` prop for form flow
- Larger clear/toggle buttons on mobile

### 5.2 Select Component Mobile Mode

**File**: `src/components/Select.tsx` - Enhance

On mobile:
- Use native `<select>` or BottomSheet picker
- Larger touch targets
- Full-width dropdown
- Search input with mobile keyboard

### 5.3 MultiSelect Mobile Enhancement

- BottomSheet picker on mobile
- Checkbox list with touch targets
- Search at top
- "Done" button to confirm

### 5.4 DatePicker/TimePicker Mobile

**Files**: `src/components/DatePicker.tsx`, `src/components/TimePicker.tsx`

- Use native date/time inputs on mobile
- Or BottomSheet with scrollable wheels
- Large touch targets for increment/decrement

### 5.5 Textarea Mobile Enhancement

- Auto-grow with content
- Keyboard-aware positioning
- Character count visible

---

## Phase 6: Additional Mobile Components

### 6.1 PullToRefresh Component

**File**: `src/components/PullToRefresh.tsx` (new file)

```typescript
interface PullToRefreshProps {
  children: React.ReactNode;
  onRefresh: () => Promise<void>;
  threshold?: number;
  disabled?: boolean;
}
```

### 6.2 InfiniteScroll Component

**File**: `src/components/InfiniteScroll.tsx` (new file)

```typescript
interface InfiniteScrollProps {
  children: React.ReactNode;
  hasMore: boolean;
  loadMore: () => Promise<void>;
  loader?: React.ReactNode;
  threshold?: number;
}
```

### 6.3 FloatingActionButton (FAB)

**File**: `src/components/FloatingActionButton.tsx` (new file)

```typescript
interface FABProps {
  icon: React.ReactNode;
  onClick: () => void;
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center';
  extended?: boolean;
  label?: string;
}
```

### 6.4 MobileSearchBar

**File**: `src/components/MobileSearchBar.tsx` (new file)

Expandable search bar for mobile headers:
- Collapsed: Search icon
- Expanded: Full-width input with cancel
- iOS/Android style animations

---

## Phase 7: Testing & Documentation

### 7.1 Storybook Mobile Stories

Add mobile-specific stories for all enhanced components:
- `ComponentName.mobile.stories.tsx`
- Test at multiple viewport sizes
- Document mobile-specific props

### 7.2 Touch Interaction Testing

- Test swipe gestures
- Test touch targets (44px minimum)
- Test keyboard interactions
- Test with screen readers

### 7.3 Documentation Updates

- Update CLAUDE.md with mobile patterns
- Add mobile section to component docs
- Document PWA considerations
- Add responsive design guidelines

---

## Implementation Order

### Sprint 1 (Foundation)
1. Phase 1.1: useResponsive hooks
2. Phase 1.2: MobileContext provider
3. Phase 1.3: Touch target Tailwind config
4. Phase 1.4: Storybook viewports

### Sprint 2 (Navigation)
1. Phase 2.2: BottomNavigation
2. Phase 2.4: MobileHeader
3. Phase 2.3: Sidebar mobile drawer
4. Phase 2.1: MobileLayout

### Sprint 3 (DataTable)
1. Phase 3.3: SwipeActions
2. Phase 3.1: DataTableCardView
3. Phase 3.2: DataTable auto-responsive

### Sprint 4 (Modals & Forms)
1. Phase 4.1: ResponsiveModal
2. Phase 4.2: ConfirmDialog mobile
3. Phase 5.1: Input touch optimization
4. Phase 5.2: Select mobile mode

### Sprint 5 (Polish)
1. Phase 5.3-5.5: Remaining form components
2. Phase 6.1-6.4: Additional mobile components
3. Phase 7: Testing & documentation

---

## Success Criteria

1. All components pass 44px touch target minimum
2. DataTable shows card view on mobile automatically
3. Layout uses drawer navigation on mobile automatically
4. Modals use BottomSheet on mobile automatically
5. All Storybook stories render correctly at mobile viewports
6. No horizontal scroll on mobile (except DataTable scroll mode)
7. PWA installable and functional

---

## Files to Create

New files:
- `src/hooks/useResponsive.ts`
- `src/context/MobileContext.tsx`
- `src/components/MobileLayout.tsx`
- `src/components/BottomNavigation.tsx`
- `src/components/MobileHeader.tsx`
- `src/components/SwipeActions.tsx`
- `src/components/PullToRefresh.tsx`
- `src/components/InfiniteScroll.tsx`
- `src/components/FloatingActionButton.tsx`
- `src/components/MobileSearchBar.tsx`

Files to enhance:
- `src/components/Sidebar.tsx`
- `src/components/Layout.tsx`
- `src/components/DataTable.tsx`
- `src/components/Modal.tsx`
- `src/components/ConfirmDialog.tsx`
- `src/components/Input.tsx`
- `src/components/Select.tsx`
- `src/components/MultiSelect.tsx`
- `src/components/Textarea.tsx`
- `tailwind.config.js`
- `.storybook/preview.ts`

---

## Risk Mitigation

1. **Breaking changes**: All mobile features are additive or auto-detected, preserving existing API
2. **Performance**: Use CSS-based responsive where possible, JS hooks only when needed
3. **Touch vs Click**: Support both input methods simultaneously
4. **SSR compatibility**: Hooks include SSR safety with typeof window checks
