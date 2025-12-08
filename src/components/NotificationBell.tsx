import React, { useState, useCallback, useMemo } from 'react';
import { Bell, Check, ExternalLink } from 'lucide-react';
import Popover from './Popover';
import Button from './Button';
import Stack from './Stack';
import Text from './Text';
import Badge from './Badge';
import { Skeleton } from './Loading';

/**
 * Represents a single notification item
 */
export interface NotificationItem {
  /** Unique identifier for the notification */
  id: string;
  /** Title of the notification */
  title: string;
  /** Message body of the notification */
  message: string;
  /** Type determines the color coding */
  type: 'info' | 'success' | 'warning' | 'error';
  /** Priority affects visual treatment */
  priority: 'low' | 'normal' | 'high' | 'urgent';
  /** When the notification was created */
  createdAt: string | Date;
  /** Whether the notification has been read */
  isRead: boolean;
  /** Optional URL to navigate to when clicked */
  actionUrl?: string;
  /** Optional custom label for the type badge (used in detailed variant) */
  typeLabel?: string;
}

/** Dropdown position options */
export type NotificationBellPosition = 
  | 'bottom-left' 
  | 'bottom-right' 
  | 'top-left' 
  | 'top-right'
  | 'left'   // Alias for bottom-left (legacy)
  | 'right'; // Alias for bottom-right (legacy)

/** Bell button style options */
export type NotificationBellStyle = 'ghost' | 'outlined';

/**
 * NotificationBell component props
 */
export interface NotificationBellProps {
  /** List of notifications to display */
  notifications: NotificationItem[];
  /** Number of unread notifications (shown in badge). If not provided, calculated from notifications */
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
  /** Position of the dropdown relative to the bell */
  dropdownPosition?: NotificationBellPosition;
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
  /** Additional class name for the bell button */
  className?: string;
  /** 
   * Visual variant for notification items
   * - 'compact': Dot indicator, stacked layout (default)
   * - 'detailed': Labeled type badge, time aligned right
   */
  variant?: 'compact' | 'detailed';
  /** Show unread count in header (e.g., "Notifications (2 unread)") */
  showUnreadInHeader?: boolean;
  /**
   * Style of the bell button
   * - 'ghost': Transparent background, just the icon (default)
   * - 'outlined': Visible border/container with subtle background
   */
  bellStyle?: NotificationBellStyle;
}

/**
 * Format a date to a relative time string
 */
function formatTimeAgo(date: string | Date): string {
  const now = new Date();
  const then = new Date(date);
  const diffMs = now.getTime() - then.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSeconds < 60) {
    return 'Just now';
  } else if (diffMinutes < 60) {
    return `${diffMinutes}m ago`;
  } else if (diffHours < 24) {
    return `${diffHours}h ago`;
  } else if (diffDays < 7) {
    return `${diffDays}d ago`;
  } else {
    return then.toLocaleDateString();
  }
}

/**
 * Map notification type to Badge variant
 */
const typeToBadgeVariant: Record<NotificationItem['type'], 'info' | 'success' | 'warning' | 'error'> = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
};

/**
 * Default labels for notification types
 */
const defaultTypeLabels: Record<NotificationItem['type'], string> = {
  info: 'Info',
  success: 'Success',
  warning: 'Warning',
  error: 'Alert',
};

/**
 * Map dropdown position to Popover placement
 * - bottom-right: Below bell, dropdown's right edge aligns with bell
 * - bottom-left: Below bell, dropdown's left edge aligns with bell
 * - top-right: Above bell, dropdown's right edge aligns with bell
 * - top-left: Above bell, dropdown's left edge aligns with bell
 */
function getPopoverPlacement(position: NotificationBellPosition): 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' {
  switch (position) {
    case 'bottom-right':
    case 'right':
      return 'bottom-start'; // Below, extends to the right
    case 'bottom-left':
    case 'left':
      return 'bottom-end'; // Below, extends to the left
    case 'top-right':
      return 'top-start'; // Above, extends to the right
    case 'top-left':
      return 'top-end'; // Above, extends to the left
    default:
      return 'bottom-start';
  }
}

/**
 * NotificationBell - A bell icon with badge and dropdown for displaying notifications
 *
 * Displays a bell icon with an optional unread count badge. When clicked, shows a
 * dropdown panel with recent notifications, mark as read actions, and a link to
 * view all notifications.
 *
 * @example Basic usage (compact variant)
 * ```tsx
 * <NotificationBell
 *   notifications={notifications}
 *   onMarkAsRead={(id) => markRead(id)}
 *   onMarkAllRead={() => markAllRead()}
 *   onNotificationClick={(n) => navigate(n.actionUrl)}
 *   onViewAll={() => navigate('/notifications')}
 * />
 * ```
 *
 * @example Detailed variant with labeled badges
 * ```tsx
 * <NotificationBell
 *   notifications={notifications}
 *   variant="detailed"
 *   showUnreadInHeader
 *   dropdownPosition="bottom-left"
 * />
 * ```
 */
export default function NotificationBell({
  notifications,
  unreadCount: providedUnreadCount,
  onMarkAsRead,
  onMarkAllRead,
  onNotificationClick,
  onViewAll,
  loading = false,
  dropdownPosition = 'bottom-right',
  maxHeight = '400px',
  size = 'md',
  emptyMessage = 'No notifications',
  viewAllText = 'View all notifications',
  disabled = false,
  className = '',
  variant = 'compact',
  showUnreadInHeader = false,
  bellStyle = 'ghost',
}: NotificationBellProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Calculate unread count if not provided
  const unreadCount = useMemo(() => {
    if (providedUnreadCount !== undefined) {
      return providedUnreadCount;
    }
    return notifications.filter((n) => !n.isRead).length;
  }, [providedUnreadCount, notifications]);

  // Handle notification click
  const handleNotificationClick = useCallback(
    (notification: NotificationItem) => {
      onNotificationClick?.(notification);
    },
    [onNotificationClick]
  );

  // Handle mark as read
  const handleMarkAsRead = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.stopPropagation();
      onMarkAsRead?.(id);
    },
    [onMarkAsRead]
  );

  // Handle mark all as read
  const handleMarkAllRead = useCallback(() => {
    onMarkAllRead?.();
  }, [onMarkAllRead]);

  // Handle view all
  const handleViewAll = useCallback(() => {
    onViewAll?.();
    setIsOpen(false);
  }, [onViewAll]);

  // Icon sizes based on button size
  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  // Dropdown width based on size
  const dropdownWidths = {
    sm: 'w-72',
    md: 'w-80',
    lg: 'w-96',
  };

  // Outlined bell style classes
  const outlinedSizeClasses = {
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4',
  };

  // Trigger button
  const triggerButton = bellStyle === 'outlined' ? (
    <div className="relative inline-block">
      <button
        className={`
          ${outlinedSizeClasses[size]}
          bg-white border-2 border-paper-300 rounded-xl
          hover:bg-paper-50 hover:border-paper-400
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-400
          transition-all duration-200
          disabled:opacity-40 disabled:cursor-not-allowed
          ${className}
        `}
        disabled={disabled}
        aria-label={
          unreadCount > 0
            ? `Notifications - ${unreadCount} unread`
            : 'Notifications'
        }
      >
        <Bell className={`${iconSizes[size]} text-ink-600`} />
      </button>
      {unreadCount > 0 && (
        <span
          className={`
            absolute -top-1 -right-1
            flex items-center justify-center
            min-w-[18px] h-[18px] px-1.5
            rounded-full text-white font-semibold text-[11px]
            bg-error-500 shadow-sm
            pointer-events-none
          `}
          aria-label={`${unreadCount > 99 ? '99+' : unreadCount} notifications`}
        >
          {unreadCount > 99 ? '99+' : unreadCount}
        </span>
      )}
    </div>
  ) : (
    <Button
      variant="ghost"
      iconOnly
      size={size}
      disabled={disabled}
      badge={unreadCount > 0 ? unreadCount : undefined}
      badgeVariant="error"
      aria-label={
        unreadCount > 0
          ? `Notifications - ${unreadCount} unread`
          : 'Notifications'
      }
      className={className}
    >
      <Bell className={iconSizes[size]} />
    </Button>
  );

  // Header title with optional unread count
  const headerTitle = showUnreadInHeader && unreadCount > 0
    ? `Notifications (${unreadCount} unread)`
    : 'Notifications';

  // Render compact notification item
  const renderCompactItem = (notification: NotificationItem) => (
    <div className="flex gap-3">
      {/* Type indicator */}
      <div className="flex-shrink-0 pt-1">
        <Badge
          dot
          variant={typeToBadgeVariant[notification.type]}
          size="sm"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <Text
          size="sm"
          weight={
            notification.priority === 'high' ||
            notification.priority === 'urgent' ||
            !notification.isRead
              ? 'medium'
              : 'normal'
          }
          truncate
        >
          {notification.title}
        </Text>
        <Text size="xs" color="muted" lineClamp={2} className="mt-0.5">
          {notification.message}
        </Text>
        <Text size="xs" color="muted" className="mt-1">
          {formatTimeAgo(notification.createdAt)}
        </Text>
      </div>

      {/* Mark as read button */}
      {!notification.isRead && onMarkAsRead && (
        <button
          className="flex-shrink-0 p-1 text-ink-400 hover:text-ink-600 hover:bg-paper-100 rounded transition-colors"
          onClick={(e) => handleMarkAsRead(e, notification.id)}
          aria-label="Mark as read"
          title="Mark as read"
        >
          <Check className="h-4 w-4" />
        </button>
      )}
    </div>
  );

  // Render detailed notification item
  const renderDetailedItem = (notification: NotificationItem) => (
    <div className="flex gap-3">
      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Title row with time */}
        <div className="flex items-start justify-between gap-2">
          <Text
            size="sm"
            weight={
              notification.priority === 'high' ||
              notification.priority === 'urgent' ||
              !notification.isRead
                ? 'semibold'
                : 'medium'
            }
            className="flex-1"
          >
            {notification.title}
          </Text>
          <Text size="xs" color="muted" className="flex-shrink-0 whitespace-nowrap">
            {formatTimeAgo(notification.createdAt)}
          </Text>
        </div>
        
        {/* Message */}
        <Text size="xs" color="muted" lineClamp={2} className="mt-1">
          {notification.message}
        </Text>
        
        {/* Type badge */}
        <div className="mt-2">
          <Badge
            variant={typeToBadgeVariant[notification.type]}
            size="sm"
          >
            {notification.typeLabel || defaultTypeLabels[notification.type]}
          </Badge>
        </div>
      </div>

      {/* Mark as read button */}
      {!notification.isRead && onMarkAsRead && (
        <button
          className="flex-shrink-0 p-1 text-ink-400 hover:text-ink-600 hover:bg-paper-100 rounded transition-colors self-center"
          onClick={(e) => handleMarkAsRead(e, notification.id)}
          aria-label="Mark as read"
          title="Mark as read"
        >
          <Check className="h-4 w-4" />
        </button>
      )}
    </div>
  );

  // Dropdown content
  const dropdownContent = (
    <div className={`${dropdownWidths[size]} bg-white`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-paper-200">
        <Text weight="semibold" size="sm">
          {headerTitle}
        </Text>
        {unreadCount > 0 && onMarkAllRead && (
          <button
            className="flex items-center gap-1.5 text-xs text-ink-600 hover:text-ink-800 transition-colors"
            onClick={handleMarkAllRead}
          >
            <Check className="h-3.5 w-3.5" />
            Mark all read
          </button>
        )}
      </div>

      {/* Notification List */}
      <div
        className="overflow-y-auto"
        style={{ maxHeight }}
        role="list"
        aria-label="Notifications"
      >
        {loading ? (
          // Loading state
          <div className="p-4">
            <Stack spacing="sm">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3">
                  {variant === 'compact' && (
                    <Skeleton className="h-4 w-4 rounded-full flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      {variant === 'detailed' && (
                        <Skeleton className="h-3 w-12" />
                      )}
                    </div>
                    <Skeleton className="h-3 w-full mb-1" />
                    {variant === 'compact' ? (
                      <Skeleton className="h-3 w-1/4" />
                    ) : (
                      <Skeleton className="h-5 w-16 mt-2" />
                    )}
                  </div>
                </div>
              ))}
            </Stack>
          </div>
        ) : notifications.length === 0 ? (
          // Empty state
          <div className="py-8 px-4 text-center">
            <Bell className="h-10 w-10 text-ink-300 mx-auto mb-3" />
            <Text color="muted" size="sm">
              {emptyMessage}
            </Text>
          </div>
        ) : (
          // Notification items
          notifications.map((notification) => (
            <div
              key={notification.id}
              role="listitem"
              className={`
                px-4 py-3 border-b border-paper-100 last:border-b-0
                hover:bg-paper-50 transition-colors cursor-pointer
                ${!notification.isRead ? 'bg-primary-50/30' : ''}
                ${notification.priority === 'urgent' ? 'border-l-2 border-l-error-500' : ''}
              `}
              onClick={() => handleNotificationClick(notification)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleNotificationClick(notification);
                }
              }}
              tabIndex={0}
            >
              {variant === 'compact'
                ? renderCompactItem(notification)
                : renderDetailedItem(notification)}
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {onViewAll && notifications.length > 0 && (
        <div className="px-4 py-3 border-t border-paper-200">
          <Button
            variant="ghost"
            size="sm"
            fullWidth
            onClick={handleViewAll}
            icon={<ExternalLink className="h-3.5 w-3.5" />}
            iconPosition="right"
          >
            {viewAllText}
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <Popover
      trigger={triggerButton}
      placement={getPopoverPlacement(dropdownPosition)}
      triggerMode="click"
      showArrow={false}
      offset={4}
      open={isOpen}
      onOpenChange={setIsOpen}
      closeOnClickOutside
      closeOnEscape
      disabled={disabled}
      className="p-0 overflow-hidden"
    >
      {dropdownContent}
    </Popover>
  );
}
