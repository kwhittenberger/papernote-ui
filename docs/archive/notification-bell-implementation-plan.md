# NotificationBell Component Implementation Plan

**Date:** December 8, 2025  
**Source:** docs/feature-requests/notebook-ui-notification-bell-feature-request.md

## Overview

Implement a `NotificationBell` component for displaying notification indicators and dropdowns in application headers/sidebars.

## Design Decisions

### Component Composition
- **Trigger**: Use `Button` with `iconOnly` mode and existing `badge` prop for unread count
- **Dropdown**: Use `Popover` component (already handles positioning, click-outside, escape key)
- **Content Layout**: Use `Stack`, `Card`, `Text`, `Badge` components
- **Icons**: Use lucide-react (`Bell`, `Check`, `CheckCheck`, `ExternalLink`)

### Why Popover over Custom Dropdown
- Popover already handles:
  - Portal rendering (z-index)
  - Click outside to close
  - Escape key to close
  - Positioning with collision detection
  - Keyboard accessibility
- No need to reinvent dropdown behavior

## TypeScript Interfaces

```typescript
export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  priority: 'low' | 'normal' | 'high' | 'urgent';
  createdAt: string | Date;
  isRead: boolean;
  actionUrl?: string;
}

export interface NotificationBellProps {
  /** List of notifications to display */
  notifications: NotificationItem[];
  /** Number of unread notifications (shown in badge) */
  unreadCount?: number;
  /** Callback when marking a single notification as read */
  onMarkAsRead?: (id: string) => void;
  /** Callback when marking all notifications as read */
  onMarkAllRead?: () => void;
  /** Callback when clicking a notification */
  onNotificationClick?: (notification: NotificationItem) => void;
  /** Callback when clicking "View All" */
  onViewAll?: () => void;
  /** Show loading state */
  loading?: boolean;
  /** Which side the dropdown opens */
  dropdownPosition?: 'left' | 'right';
  /** Maximum height of notification list before scrolling */
  maxHeight?: string;
  /** Size of the bell button */
  size?: 'sm' | 'md' | 'lg';
  /** Empty state message */
  emptyMessage?: string;
  /** "View All" button text */
  viewAllText?: string;
  /** Disabled state */
  disabled?: boolean;
}
```

## Component Structure

```
NotificationBell
├── Popover (handles dropdown behavior)
│   ├── trigger: Button (iconOnly, with badge)
│   └── content:
│       ├── Header
│       │   ├── Text "Notifications"
│       │   └── Button "Mark all read" (ghost, small)
│       ├── Notification List (scrollable)
│       │   └── NotificationItem[] (mapped)
│       │       ├── Type Badge (color-coded)
│       │       ├── Title + Message
│       │       ├── Time ago
│       │       └── Mark as read button
│       └── Footer
│           └── Button "View all notifications"
```

## Notification Item Design

Each notification item will have:
- **Left**: Type badge (color-coded dot or small badge)
- **Center**: 
  - Title (Text, weight="medium", truncate)
  - Message (Text, size="sm", color="muted", lineClamp={2})
  - Time ago (Text, size="xs", color="muted")
- **Right**: Mark as read button (small check icon, ghost)
- **Unread indicator**: Left border or background tint

## Type-to-Color Mapping

| Type    | Badge Variant | Use Case |
|---------|--------------|----------|
| info    | info         | General updates |
| success | success      | Completed actions |
| warning | warning      | Attention needed |
| error   | error        | Failures, urgent |

## Priority Visual Treatment

| Priority | Style |
|----------|-------|
| low      | Normal text |
| normal   | Normal text |
| high     | Bold title |
| urgent   | Bold title + error border |

## Implementation Steps

### Phase 1: Core Component
1. Create `src/components/NotificationBell.tsx`
2. Implement basic structure with Popover
3. Implement notification list rendering
4. Handle mark as read / mark all read
5. Handle notification click
6. Handle view all click

### Phase 2: Polish
1. Add loading state (Skeleton in dropdown)
2. Add empty state
3. Add time ago formatting (relative time)
4. Implement priority styling
5. Add keyboard navigation within list

### Phase 3: Export & Stories
1. Export from `src/components/index.ts`
2. Create Storybook stories demonstrating:
   - Default state
   - With unread count
   - Empty state
   - Loading state
   - Different notification types
   - Different positions (left/right)

## Time Ago Formatting

Use a simple relative time formatter:
- < 1 minute: "Just now"
- < 60 minutes: "X minutes ago"
- < 24 hours: "X hours ago"
- < 7 days: "X days ago"
- Otherwise: Date string

## Accessibility Requirements

- [ ] Bell button has aria-label with unread count
- [ ] Dropdown has role="menu" or role="listbox"
- [ ] Notification items are focusable
- [ ] Enter/Space to activate notification
- [ ] Escape closes dropdown
- [ ] Focus trapped in dropdown when open

## Files to Create/Modify

1. **Create**: `src/components/NotificationBell.tsx`
2. **Create**: `src/stories/NotificationBell.stories.tsx`
3. **Modify**: `src/components/index.ts` (add exports)
4. **Modify**: `CLAUDE.md` (document component)

## Session Prompt

```
Implement the NotificationBell component for notebook-ui following the implementation plan in docs/active-work/notification-bell-implementation-plan.md.

Key tasks:
1. Create src/components/NotificationBell.tsx
2. Use Popover for dropdown, Button for trigger
3. Use existing Stack, Text, Badge components for layout
4. Export from index.ts
5. Create Storybook stories
6. Build and verify
```
