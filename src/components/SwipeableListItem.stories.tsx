import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SwipeableListItem } from './SwipeableListItem';
import { Check, X, Archive, Trash, Star, Mail, MailOpen, Flag, Clock, Pin, Bell, BellOff, Edit, MoreHorizontal } from 'lucide-react';
import Stack from './Stack';
import Text from './Text';
import Badge from './Badge';

const meta: Meta<typeof SwipeableListItem> = {
  title: 'Mobile/SwipeableListItem',
  component: SwipeableListItem,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A list item component with swipe-to-reveal action buttons for mobile touch gestures.

## Features
- **Multiple actions per side** - Like email apps, reveal multiple action buttons
- **Full swipe mode** - Swipe all the way to trigger primary action
- **Touch & mouse support** - Works on mobile and desktop
- **Keyboard accessible** - Arrow keys, Tab, Enter, Escape
- **Async support** - Loading states for async operations
- **Haptic feedback** - Vibration on mobile devices
- **Polished visuals** - Gradients, shadows, smooth animations

## Keyboard Navigation
- **Arrow Left/Right** - Open action panels
- **Tab** - Navigate between actions
- **Enter/Space** - Execute focused action
- **Escape** - Close and reset

## Use Cases
- Email/message lists (mark read, delete, archive, flag)
- Transaction approvals (approve, reject, defer)
- Todo lists (complete, delete, snooze)
- Notification management (dismiss, mute, pin)
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SwipeableListItem>;

// Sample list item content
const ListItemContent = ({ 
  title, 
  subtitle, 
  badge,
  avatar,
}: { 
  title: string; 
  subtitle: string; 
  badge?: string;
  avatar?: string;
}) => (
  <div className="p-4 border-b border-paper-200 bg-white">
    <Stack direction="horizontal" gap="md" align="center">
      {avatar && (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white font-medium">
          {avatar}
        </div>
      )}
      <Stack gap="xs" className="flex-1 min-w-0">
        <Stack direction="horizontal" justify="between" align="center">
          <Text weight="medium" className="truncate">{title}</Text>
          {badge && <Badge variant="info" size="sm">{badge}</Badge>}
        </Stack>
        <Text size="sm" className="text-ink-500 truncate">{subtitle}</Text>
      </Stack>
    </Stack>
  </div>
);

/**
 * Default with single action per side
 */
export const Default: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: 1, title: 'Review expense report', subtitle: '$1,234.56 - Marketing budget' },
      { id: 2, title: 'Approve vendor invoice', subtitle: '$5,678.90 - Office supplies' },
      { id: 3, title: 'Categorize transaction', subtitle: '$89.99 - Unknown merchant' },
    ]);

    return (
      <Stack gap="none" className="border border-paper-200 rounded-lg overflow-hidden">
        {items.map((item) => (
          <SwipeableListItem
            key={item.id}
            rightActions={[
              { 
                id: 'approve', 
                icon: Check, 
                color: 'success', 
                label: 'Approve', 
                onClick: () => {
                  console.log('Approved:', item.id);
                  setItems(items.filter(i => i.id !== item.id));
                }
              }
            ]}
            leftActions={[
              { 
                id: 'dismiss', 
                icon: X, 
                color: 'destructive', 
                label: 'Dismiss', 
                onClick: () => {
                  console.log('Dismissed:', item.id);
                  setItems(items.filter(i => i.id !== item.id));
                }
              }
            ]}
          >
            <ListItemContent title={item.title} subtitle={item.subtitle} />
          </SwipeableListItem>
        ))}
        {items.length === 0 && (
          <div className="p-8 text-center text-ink-400">
            All items processed!
          </div>
        )}
      </Stack>
    );
  },
};

/**
 * Multiple actions per side (email-style)
 */
export const MultipleActions: Story = {
  render: () => {
    const [emails, setEmails] = useState([
      { id: 1, from: 'JD', name: 'John Doe', subject: 'Q4 Budget Review Meeting', time: '10:30 AM', unread: true, starred: false },
      { id: 2, from: 'TS', name: 'Team Slack', subject: 'New message in #general', time: '9:15 AM', unread: true, starred: false },
      { id: 3, from: 'HR', name: 'HR Department', subject: 'Holiday Schedule Update', time: 'Yesterday', unread: false, starred: true },
    ]);

    const toggleStar = (id: number) => {
      setEmails(emails.map(e => e.id === id ? { ...e, starred: !e.starred } : e));
    };

    const markRead = (id: number) => {
      setEmails(emails.map(e => e.id === id ? { ...e, unread: false } : e));
    };

    return (
      <Stack gap="none" className="border border-paper-200 rounded-lg overflow-hidden shadow-sm">
        <div className="bg-paper-100 px-4 py-2 border-b border-paper-200">
          <Text size="sm" weight="medium" className="text-ink-600">Inbox</Text>
        </div>
        {emails.map((email) => (
          <SwipeableListItem
            key={email.id}
            rightActions={[
              { 
                id: 'read', 
                icon: email.unread ? MailOpen : Mail, 
                color: 'primary', 
                label: email.unread ? 'Read' : 'Unread', 
                onClick: () => markRead(email.id)
              },
              { 
                id: 'star', 
                icon: Star, 
                color: 'warning', 
                label: email.starred ? 'Unstar' : 'Star', 
                onClick: () => toggleStar(email.id)
              },
            ]}
            leftActions={[
              { 
                id: 'delete', 
                icon: Trash, 
                color: 'destructive', 
                label: 'Delete', 
                onClick: () => setEmails(emails.filter(e => e.id !== email.id))
              },
              { 
                id: 'archive', 
                icon: Archive, 
                color: 'neutral', 
                label: 'Archive', 
                onClick: () => setEmails(emails.filter(e => e.id !== email.id))
              },
            ]}
          >
            <div className="p-4 border-b border-paper-100 bg-white">
              <Stack direction="horizontal" gap="md" align="start">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm
                  ${email.unread ? 'bg-gradient-to-br from-accent-500 to-accent-700' : 'bg-paper-400'}
                `}>
                  {email.from}
                </div>
                <Stack gap="xs" className="flex-1 min-w-0">
                  <Stack direction="horizontal" justify="between" align="center">
                    <Stack direction="horizontal" gap="sm" align="center">
                      {email.unread && (
                        <div className="w-2 h-2 rounded-full bg-accent-500" />
                      )}
                      <Text weight={email.unread ? 'semibold' : 'normal'} className="truncate">
                        {email.name}
                      </Text>
                    </Stack>
                    <Stack direction="horizontal" gap="sm" align="center">
                      {email.starred && <Star className="h-4 w-4 text-warning-500 fill-warning-500" />}
                      <Text size="xs" className="text-ink-400">{email.time}</Text>
                    </Stack>
                  </Stack>
                  <Text size="sm" className={email.unread ? 'text-ink-700' : 'text-ink-400'}>
                    {email.subject}
                  </Text>
                </Stack>
              </Stack>
            </div>
          </SwipeableListItem>
        ))}
      </Stack>
    );
  },
};

/**
 * Full swipe to trigger action - swipe past threshold and release
 */
export const FullSwipe: Story = {
  render: () => {
    const [todos, setTodos] = useState([
      { id: 1, text: 'Review pull request', done: false },
      { id: 2, text: 'Update documentation', done: false },
      { id: 3, text: 'Fix CI pipeline', done: false },
      { id: 4, text: 'Write unit tests', done: false },
    ]);

    return (
      <Stack gap="md">
        <div className="p-4 bg-accent-50 border border-accent-200 rounded-lg">
          <Stack gap="sm">
            <Text size="sm" weight="semibold" className="text-accent-800">
              Full Swipe Mode
            </Text>
            <Text size="sm" className="text-accent-700">
              Swipe past the threshold (40%) and the action will trigger automatically when you release. 
              Watch for the "Release to..." indicator and haptic feedback.
            </Text>
            <Stack direction="horizontal" gap="md" className="mt-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success-500" />
                <Text size="xs" className="text-ink-600">Swipe right → Done</Text>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-error-500" />
                <Text size="xs" className="text-ink-600">Swipe left → Delete</Text>
              </div>
            </Stack>
          </Stack>
        </div>
        <Stack gap="none" className="border border-paper-200 rounded-lg overflow-hidden">
          {todos.map((todo) => (
            <SwipeableListItem
              key={todo.id}
              fullSwipe
              fullSwipeThreshold={0.4}
              rightActions={[
                { 
                  id: 'complete', 
                  icon: Check, 
                  color: 'success', 
                  label: 'Done', 
                  onClick: async () => {
                    await new Promise(r => setTimeout(r, 300));
                    setTodos(prev => prev.filter(t => t.id !== todo.id));
                  }
                }
              ]}
              leftActions={[
                { 
                  id: 'delete', 
                  icon: Trash, 
                  color: 'destructive', 
                  label: 'Delete', 
                  onClick: () => setTodos(prev => prev.filter(t => t.id !== todo.id))
                }
              ]}
            >
              <div className="p-4 border-b border-paper-100 bg-white">
                <Stack direction="horizontal" gap="md" align="center">
                  <div className="w-5 h-5 rounded border-2 border-paper-300" />
                  <Text>{todo.text}</Text>
                </Stack>
              </div>
            </SwipeableListItem>
          ))}
          {todos.length === 0 && (
            <div className="p-8 text-center text-ink-400">
              All tasks completed! 🎉
            </div>
          )}
        </Stack>
      </Stack>
    );
  },
};

/**
 * With async loading states
 */
export const AsyncActions: Story = {
  render: () => {
    const [status, setStatus] = useState<string>('');

    const simulateAsync = async (action: string) => {
      setStatus(`Processing ${action}...`);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus(`${action} complete!`);
      setTimeout(() => setStatus(''), 2000);
    };

    return (
      <Stack gap="md">
        {status && (
          <div className="p-3 bg-accent-50 border border-accent-200 rounded-lg">
            <Text size="sm" className="text-accent-800">{status}</Text>
          </div>
        )}
        <SwipeableListItem
          rightActions={[
            { id: 'approve', icon: Check, color: 'success', label: 'Approve', onClick: () => simulateAsync('Approval') },
            { id: 'flag', icon: Flag, color: 'warning', label: 'Flag', onClick: () => simulateAsync('Flagging') },
          ]}
          leftActions={[
            { id: 'reject', icon: X, color: 'destructive', label: 'Reject', onClick: () => simulateAsync('Rejection') },
            { id: 'defer', icon: Clock, color: 'neutral', label: 'Defer', onClick: () => simulateAsync('Deferral') },
          ]}
        >
          <ListItemContent 
            avatar="TX"
            title="Transaction #12345" 
            subtitle="$2,500.00 - Pending review"
            badge="Pending"
          />
        </SwipeableListItem>
      </Stack>
    );
  },
};

/**
 * Notifications example with varied actions
 */
export const Notifications: Story = {
  render: () => {
    const [notifications, setNotifications] = useState([
      { id: 1, title: 'New comment on your post', subtitle: 'Sarah replied to your question', time: '2m ago', pinned: false },
      { id: 2, title: 'Meeting reminder', subtitle: 'Team standup in 15 minutes', time: '15m ago', pinned: true },
      { id: 3, title: 'Weekly report ready', subtitle: 'Your analytics report is available', time: '1h ago', pinned: false },
    ]);

    return (
      <Stack gap="none" className="border border-paper-200 rounded-lg overflow-hidden shadow-sm">
        <div className="bg-paper-100 px-4 py-2 border-b border-paper-200 flex justify-between items-center">
          <Text size="sm" weight="medium" className="text-ink-600">Notifications</Text>
          <Badge variant="primary" size="sm">{notifications.length}</Badge>
        </div>
        {notifications.map((notif) => (
          <SwipeableListItem
            key={notif.id}
            rightActions={[
              { 
                id: 'pin', 
                icon: Pin, 
                color: notif.pinned ? 'warning' : 'neutral', 
                label: notif.pinned ? 'Unpin' : 'Pin', 
                onClick: () => setNotifications(notifications.map(n => 
                  n.id === notif.id ? { ...n, pinned: !n.pinned } : n
                ))
              },
            ]}
            leftActions={[
              { 
                id: 'dismiss', 
                icon: X, 
                color: 'destructive', 
                label: 'Dismiss', 
                onClick: () => setNotifications(notifications.filter(n => n.id !== notif.id))
              },
              { 
                id: 'mute', 
                icon: BellOff, 
                color: 'neutral', 
                label: 'Mute', 
                onClick: () => console.log('Muted')
              },
            ]}
          >
            <div className="p-4 border-b border-paper-100 bg-white">
              <Stack direction="horizontal" gap="md" align="start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <Bell className="h-5 w-5 text-white" />
                </div>
                <Stack gap="xs" className="flex-1 min-w-0">
                  <Stack direction="horizontal" justify="between" align="center">
                    <Stack direction="horizontal" gap="sm" align="center">
                      {notif.pinned && <Pin className="h-3 w-3 text-warning-500" />}
                      <Text weight="medium" size="sm">{notif.title}</Text>
                    </Stack>
                    <Text size="xs" className="text-ink-400">{notif.time}</Text>
                  </Stack>
                  <Text size="sm" className="text-ink-500">{notif.subtitle}</Text>
                </Stack>
              </Stack>
            </div>
          </SwipeableListItem>
        ))}
      </Stack>
    );
  },
};

/**
 * Keyboard navigation demo
 */
export const KeyboardNavigation: Story = {
  render: () => (
    <Stack gap="md">
      <div className="p-4 bg-paper-100 rounded-lg">
        <Text size="sm" weight="medium" className="mb-3">Keyboard Controls:</Text>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-paper-200 rounded text-xs font-mono">→</kbd>
            <span className="text-ink-600">Open right actions</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-paper-200 rounded text-xs font-mono">←</kbd>
            <span className="text-ink-600">Open left actions</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-paper-200 rounded text-xs font-mono">Tab</kbd>
            <span className="text-ink-600">Navigate actions</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-paper-200 rounded text-xs font-mono">Enter</kbd>
            <span className="text-ink-600">Execute action</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-paper-200 rounded text-xs font-mono">Esc</kbd>
            <span className="text-ink-600">Close / Reset</span>
          </div>
        </div>
      </div>
      <SwipeableListItem
        rightActions={[
          { id: 'edit', icon: Edit, color: 'primary', label: 'Edit', onClick: () => alert('Edit!') },
          { id: 'star', icon: Star, color: 'warning', label: 'Star', onClick: () => alert('Star!') },
        ]}
        leftActions={[
          { id: 'delete', icon: Trash, color: 'destructive', label: 'Delete', onClick: () => alert('Delete!') },
          { id: 'archive', icon: Archive, color: 'neutral', label: 'Archive', onClick: () => alert('Archive!') },
        ]}
      >
        <ListItemContent 
          avatar="KB"
          title="Focus me and use keyboard" 
          subtitle="Press arrow keys to reveal actions, Tab to navigate"
        />
      </SwipeableListItem>
    </Stack>
  ),
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  render: () => (
    <SwipeableListItem
      disabled
      rightActions={[
        { id: 'approve', icon: Check, color: 'success', label: 'Approve', onClick: () => {} }
      ]}
      leftActions={[
        { id: 'dismiss', icon: X, color: 'destructive', label: 'Dismiss', onClick: () => {} }
      ]}
    >
      <ListItemContent 
        avatar="DI"
        title="Disabled list item" 
        subtitle="Swipe gestures are disabled"
      />
    </SwipeableListItem>
  ),
};

/**
 * Custom action width
 */
export const CustomActionWidth: Story = {
  render: () => (
    <Stack gap="md">
      <Text size="sm" className="text-ink-500">Wider action buttons (96px each)</Text>
      <SwipeableListItem
        actionWidth={96}
        rightActions={[
          { id: 'approve', icon: Check, color: 'success', label: 'Approve', onClick: () => {} },
        ]}
        leftActions={[
          { id: 'delete', icon: Trash, color: 'destructive', label: 'Delete', onClick: () => {} },
          { id: 'archive', icon: Archive, color: 'warning', label: 'Archive', onClick: () => {} },
        ]}
      >
        <ListItemContent 
          avatar="CW"
          title="Wider action buttons" 
          subtitle="actionWidth={96}"
        />
      </SwipeableListItem>
    </Stack>
  ),
};
