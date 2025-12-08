# notebook-ui Feature Requests for Assistant-First Mobile Experience

**Source:** Personal Finances UX Prototype
**Date:** 2025-12-03
**Priority:** Required for mobile Assistant-First implementation

---

## High Priority - New Components

### 1. SwipeableCard

**Purpose:** Card component with swipe-to-action functionality for mobile approval workflows.

**Use Case:** Transaction categorization approval - swipe right to approve suggested category, swipe left to see alternatives.

**Proposed API:**

```tsx
import { SwipeableCard } from 'notebook-ui';

<SwipeableCard
  onSwipeRight={() => handleApprove()}
  onSwipeLeft={() => handleShowOptions()}
  rightAction={{
    icon: <Check />,
    color: 'success',
    label: 'Approve'
  }}
  leftAction={{
    icon: <MoreHorizontal />,
    color: 'neutral', 
    label: 'Options'
  }}
  swipeThreshold={100}        // pixels before action triggers
  hapticFeedback={true}       // vibrate on action (mobile)
  disabled={false}            // disable swipe interactions
  onSwipeStart={() => {}}     // callback when swipe begins
  onSwipeEnd={() => {}}       // callback when swipe ends (regardless of trigger)
>
  <TransactionContent />
</SwipeableCard>
```

**Visual Behavior:**
- Card slides horizontally with finger/pointer
- Background reveals action indicator (icon + color)
- Snaps back if threshold not reached
- Animates away if threshold reached, then calls handler
- Shows subtle hint arrows on first use

**Implementation Notes:**
- Consider using `@use-gesture/react` for gesture handling
- Need to handle touch and mouse events
- Should work in both mobile and desktop contexts
- Haptic feedback via `navigator.vibrate()` API

---

### 2. BottomSheet

**Purpose:** Modal that slides up from bottom of screen, standard mobile pattern for contextual actions and details.

**Use Case:** Tapping a transaction or bill shows details in a bottom sheet without full page navigation.

**Proposed API:**

```tsx
import { BottomSheet, BottomSheetHeader, BottomSheetContent, BottomSheetActions } from 'notebook-ui';

<BottomSheet
  open={isOpen}
  onClose={() => setIsOpen(false)}
  height="auto"                    // 'auto' | number (px) | string (%, vh)
  maxHeight="90vh"                 // maximum height
  snapPoints={['50%', '90%']}      // optional snap positions
  closeOnOverlayClick={true}       // click backdrop to close
  closeOnEscape={true}             // ESC key closes
  showHandle={true}                // drag handle indicator
  preventScroll={true}             // prevent body scroll when open
>
  <BottomSheetHeader>
    <Text weight="bold">Transaction Details</Text>
    <Button variant="ghost" size="sm" onClick={onClose}>
      <X size={20} />
    </Button>
  </BottomSheetHeader>
  
  <BottomSheetContent>
    {/* Scrollable content area */}
  </BottomSheetContent>
  
  <BottomSheetActions>
    {/* Sticky footer with action buttons */}
    <Button variant="primary" fullWidth>Primary Action</Button>
    <Button variant="ghost" fullWidth>Secondary Action</Button>
  </BottomSheetActions>
</BottomSheet>
```

**Visual Behavior:**
- Slides up from bottom with backdrop overlay
- Drag handle at top for swipe-to-dismiss
- Swipe down to close
- Optional snap points for partial expansion
- Actions area stays visible at bottom (thumb zone)

**Implementation Notes:**
- Use CSS transforms for smooth animation
- Portal to body to escape parent overflow
- Trap focus when open
- Handle iOS Safari viewport issues
- Consider `framer-motion` for gesture + animation

---

### 3. HorizontalScroll

**Purpose:** Horizontally scrollable container with peek indicators, for carousels of cards.

**Use Case:** "Coming Up" bills shown as horizontally scrollable cards with visual hint that more exist.

**Proposed API:**

```tsx
import { HorizontalScroll } from 'notebook-ui';

<HorizontalScroll
  gap="md"                    // gap between items: 'sm' | 'md' | 'lg' | number
  peekAmount={24}             // pixels of next item visible (hint)
  showIndicators={true}       // dot indicators below
  snapToItem={true}           // snap scroll to item boundaries
  showArrows="hover"          // 'hover' | 'always' | 'never' (desktop arrows)
  scrollBehavior="smooth"     // 'smooth' | 'auto'
  className=""                // custom class
>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</HorizontalScroll>
```

**Visual Behavior:**
- Horizontal scroll with momentum
- Shows partial next item as affordance
- Optional dot indicators showing position
- Optional arrow buttons on desktop hover
- Snap-scrolls to item boundaries

**Implementation Notes:**
- Use CSS `scroll-snap-type` for snapping
- Calculate visible items for indicators
- Hide scrollbar but keep functionality
- Touch-friendly momentum scrolling

---

## Medium Priority - New Components

### 4. NotificationBanner

**Purpose:** Dismissible banner at top of screen for important alerts that need attention but aren't blocking.

**Use Case:** "Money Found" alerts, system messages, promotional info.

**Proposed API:**

```tsx
import { NotificationBanner } from 'notebook-ui';

<NotificationBanner
  variant="warning"           // 'info' | 'success' | 'warning' | 'error'
  icon={<DollarSign />}       // custom icon (optional)
  title="Found $33.98 in potential savings"
  description="Tap to review"  // optional secondary text
  action={{
    label: "Review",
    onClick: () => {}
  }}
  onDismiss={() => {}}        // if provided, shows dismiss button
  dismissible={true}          // can be swiped away
  sticky={false}              // sticky to top on scroll
/>
```

**Visual Behavior:**
- Full-width banner with icon, text, optional action
- Swipe away to dismiss (mobile)
- X button to dismiss (desktop)
- Gradient background based on variant

---

### 5. ProgressRing

**Purpose:** Circular progress indicator for goals and completion states.

**Use Case:** Savings goal progress in dashboard header.

**Proposed API:**

```tsx
import { ProgressRing } from 'notebook-ui';

<ProgressRing
  value={72}                  // 0-100
  size="md"                   // 'sm' (32px) | 'md' (48px) | 'lg' (64px) | number
  color="success"             // 'primary' | 'success' | 'warning' | 'error'
  trackColor="border"         // background track color
  strokeWidth={4}             // ring thickness
  showValue={true}            // show percentage in center
  valueFormat={(v) => `${v}%`} // custom value formatter
  animate={true}              // animate on mount
  label="Savings"             // accessible label
/>
```

**Visual Behavior:**
- SVG-based circular progress
- Smooth animation on value change
- Optional center content (percentage, icon, etc.)
- Rounded stroke ends

---

### 6. CompactStat

**Purpose:** Single stat display optimized for mobile, with label and optional trend indicator.

**Use Case:** Dashboard stats in 2-column mobile layout.

**Proposed API:**

```tsx
import { CompactStat } from 'notebook-ui';

<CompactStat
  value="$62,329"
  label="Net Worth"
  trend={{
    direction: 'up',          // 'up' | 'down' | 'neutral'
    value: '+$1,247',
    color: 'success'
  }}
  size="md"                   // 'sm' | 'md' | 'lg'
  align="center"              // 'left' | 'center' | 'right'
/>
```

---

### 7. PullToRefresh

**Purpose:** Pull-down refresh indicator and handler for mobile lists.

**Use Case:** Pull down on Assistant Dashboard to sync bank data.

**Proposed API:**

```tsx
import { PullToRefresh } from 'notebook-ui';

<PullToRefresh
  onRefresh={async () => { await syncData(); }}
  threshold={80}              // pixels to pull before triggering
  disabled={false}
  refreshingContent={<Spinner />}
  pullingContent={<Text>Pull to refresh</Text>}
  releaseContent={<Text>Release to refresh</Text>}
>
  <ScrollableContent />
</PullToRefresh>
```

---

## Low Priority - New Components

### 8. SwipeHint

**Purpose:** Visual indicator showing available swipe actions, shown on first interaction.

**Proposed API:**

```tsx
import { SwipeHint } from 'notebook-ui';

<SwipeHint
  direction="horizontal"      // 'horizontal' | 'left' | 'right'
  text="Swipe to approve"
  show={isFirstTime}
  onDismiss={() => setFirstTime(false)}
/>
```

---

### 9. HapticButton

**Purpose:** Button that triggers haptic feedback on mobile devices.

**Note:** This might be better as a prop on existing Button component:

```tsx
<Button haptic={true} hapticStyle="light">
  Approve
</Button>
```

---

## Existing Components - Mobile Enhancements

### 10. Card - Add `compact` variant

**Current:** Card has standard padding
**Needed:** Reduced padding variant for mobile density

```tsx
<Card variant="compact">  // or size="compact"
  {/* 12px padding instead of 16-24px */}
</Card>
```

---

### 11. Stack - Add `tight` spacing option

**Current:** gap options are 'sm' | 'md' | 'lg' etc.
**Needed:** 'tight' or 'xs' option for mobile-density layouts

```tsx
<Stack gap="tight">  // 4px gap
  {/* or gap="xs" */}
</Stack>
```

---

### 12. Grid - Auto-collapse columns on mobile

**Current:** Fixed column count
**Needed:** Responsive column collapse

```tsx
<Grid 
  columns={4}
  mobileColumns={2}          // or responsive={{ sm: 1, md: 2, lg: 4 }}
>
```

---

### 13. Button - Ensure touch-friendly sizes

**Current:** Various sizes
**Needed:** Ensure minimum 48px height on touch devices

```tsx
// Automatic detection or explicit prop
<Button touchFriendly={true}>  // forces 48px minimum height
```

Or automatic via CSS:
```css
@media (pointer: coarse) {
  .button { min-height: 48px; }
}
```

---

### 14. Badge - Add `pill` variant

**Current:** Standard badge shape
**Needed:** Fully rounded pill shape for inline use

```tsx
<Badge variant="pill" color="success">+12%</Badge>
```

---

### 15. Progress - Add `ring` variant

**Current:** Linear progress bar only
**Needed:** Circular ring variant

```tsx
<Progress 
  variant="ring"             // 'bar' | 'ring'
  value={72}
  size="md"
/>
```

**Note:** Could be same component or separate ProgressRing.

---

### 16. Text - Add responsive size scaling

**Current:** Fixed sizes
**Needed:** Automatic scaling or responsive size props

```tsx
<Text size="2xl" mobileSize="xl">
  Large heading
</Text>

// or automatic scaling based on viewport
<Text size="2xl" responsive={true}>
```

---

## Implementation Priority Order

1. **SwipeableCard** - Core to mobile approval workflow
2. **BottomSheet** - Essential for mobile detail views
3. **HorizontalScroll** - Needed for bill carousels
4. **Card compact variant** - Quick win for mobile density
5. **ProgressRing** - Dashboard visual
6. **Grid responsive columns** - Layout flexibility
7. **NotificationBanner** - Money Found feature
8. **Button touch sizes** - Accessibility requirement
9. **CompactStat** - Dashboard refinement
10. **PullToRefresh** - Polish feature
11. **Stack tight spacing** - Minor enhancement
12. **Badge pill variant** - Minor enhancement
13. **Text responsive** - Minor enhancement
14. **SwipeHint** - Onboarding polish
15. **HapticButton** - Polish feature

---

## Dependencies to Consider

- `@use-gesture/react` - For SwipeableCard and BottomSheet gestures
- `framer-motion` - For smooth animations (optional, could use CSS)
- Intersection Observer - For HorizontalScroll indicators

---

## Questions for Discussion

1. Should SwipeableCard be a separate component or a mode of Card?
2. Should ProgressRing be separate or a variant of Progress?
3. Do we want automatic touch-friendly sizing or explicit props?
4. Should HorizontalScroll handle virtualization for large lists?
5. BottomSheet vs Drawer - are these the same component with different defaults?
