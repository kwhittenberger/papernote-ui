# Feature Request: NotificationBell Component for notebook-ui

**Date:** December 8, 2025  
**Requested By:** Personal Finances App  
**Priority:** Medium  
**Target Repository:** D:\repos\notebook-ui

## Summary

Add a `NotificationBell` component to notebook-ui for displaying notification indicators and dropdowns in application headers/sidebars.

## Use Case

Applications need a standardized way to show notification indicators with:
- Unread count badge
- Dropdown list of recent notifications
- Mark as read / mark all read actions
- Navigation to full notifications page

## Proposed API

```tsx
import { NotificationBell } from '@papernote/ui';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  priority: 'low' | 'normal' | 'high' | 'urgent';
  createdAt: string;
  isRead: boolean;
  actionUrl?: string;
}

<NotificationBell
  unreadCount={5}
  notifications={notifications}
  onMarkAsRead={(id: string) => void}
  onMarkAllRead={() => void}
  onNotificationClick={(notification) => void}
  onViewAll={() => void}
  loading?: boolean
  dropdownPosition?: 'left' | 'right'  // Which side dropdown opens
  pollingInterval?: number  // ms, for auto-refresh
/>
```

## Features

1. **Bell Icon** with optional unread count badge
2. **Dropdown Panel** showing recent notifications
3. **Notification Items** with:
   - Title and message
   - Type badge (color-coded)
   - Time ago display
   - Mark as read button
4. **Header** with "Mark all read" action
5. **Footer** with "View all notifications" link
6. **Click Outside** to close dropdown
7. **Configurable Position** - open left or right of bell

## Design Notes

- Should integrate with existing notebook-ui design tokens
- Badge should use existing Badge component
- Dropdown should use existing Card/Stack components
- Icons from lucide-react (Bell, CheckCheck, ExternalLink)

## Reference Implementation

See `personal-finances/src/frontend/src/components/NotificationBell.tsx` for a working implementation that can be adapted.

## Acceptance Criteria

- [ ] NotificationBell component exported from @papernote/ui
- [ ] Storybook stories demonstrating all states
- [ ] TypeScript types exported
- [ ] Responsive design for mobile
- [ ] Keyboard accessibility (Escape to close, Enter to select)
- [ ] ARIA labels for screen readers

## Migration Plan

Once implemented in notebook-ui:
1. Remove `src/frontend/src/components/NotificationBell.tsx` from personal-finances
2. Import from `@papernote/ui` instead
3. Rebuild Docker images
