import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SwipeableListItem } from './SwipeableListItem';
import { Check, X, Archive, Trash, Star, Mail, MailOpen } from 'lucide-react';
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
A list item component with swipe-to-action functionality for mobile touch gestures.

## Features
- **Touch gestures**: Swipe left or right to reveal actions
- **Mouse support**: Works with mouse drag for desktop testing
- **Keyboard accessible**: Arrow keys to preview, Enter to confirm, Escape to cancel
- **Async support**: Handles async callbacks with loading state
- **Haptic feedback**: Vibration on mobile devices

## Accessibility
- Use Arrow Left/Right to simulate swipe direction
- Press Enter to confirm the action when highlighted
- Press Escape to cancel and reset

## Use Cases
- Email/message lists (mark read, delete, archive)
- Transaction approvals (approve, reject)
- Todo lists (complete, delete)
- Notification management (dismiss, action)
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
  argTypes: {
    swipeThreshold: {
      control: { type: 'range', min: 50, max: 200, step: 10 },
      description: 'Pixels of swipe before action triggers',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable swipe interactions',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SwipeableListItem>;

// Sample list item content
const ListItemContent = ({ 
  title, 
  subtitle, 
  badge 
}: { 
  title: string; 
  subtitle: string; 
  badge?: string;
}) => (
  <div className="p-4 border-b border-paper-200">
    <Stack direction="horizontal" justify="between" align="center">
      <Stack gap="xs">
        <Text weight="medium">{title}</Text>
        <Text size="sm" className="text-ink-400">{subtitle}</Text>
      </Stack>
      {badge && <Badge variant="info">{badge}</Badge>}
    </Stack>
  </div>
);

/**
 * Default example with both swipe directions
 */
export const Default: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: 1, title: 'Review expense report', subtitle: '$1,234.56 - Marketing budget' },
      { id: 2, title: 'Approve vendor invoice', subtitle: '$5,678.90 - Office supplies' },
      { id: 3, title: 'Categorize transaction', subtitle: '$89.99 - Unknown merchant' },
    ]);

    const handleApprove = (id: number) => {
      console.log('Approved:', id);
      setItems(items.filter(item => item.id !== id));
    };

    const handleDismiss = (id: number) => {
      console.log('Dismissed:', id);
      setItems(items.filter(item => item.id !== id));
    };

    return (
      <Stack gap="none">
        {items.map((item) => (
          <SwipeableListItem
            key={item.id}
            onSwipeRight={() => handleApprove(item.id)}
            onSwipeLeft={() => handleDismiss(item.id)}
            rightAction={{
              icon: Check,
              color: 'success',
              label: 'Approve',
            }}
            leftAction={{
              icon: X,
              color: 'destructive',
              label: 'Dismiss',
            }}
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
 * Right swipe only (approve action)
 */
export const RightSwipeOnly: Story = {
  render: () => (
    <SwipeableListItem
      onSwipeRight={() => console.log('Approved!')}
      rightAction={{
        icon: Check,
        color: 'success',
        label: 'Approve',
      }}
    >
      <ListItemContent 
        title="Swipe right to approve" 
        subtitle="Only right swipe is enabled"
        badge="Pending"
      />
    </SwipeableListItem>
  ),
};

/**
 * Left swipe only (delete action)
 */
export const LeftSwipeOnly: Story = {
  render: () => (
    <SwipeableListItem
      onSwipeLeft={() => console.log('Deleted!')}
      leftAction={{
        icon: Trash,
        color: 'destructive',
        label: 'Delete',
      }}
    >
      <ListItemContent 
        title="Swipe left to delete" 
        subtitle="Only left swipe is enabled"
      />
    </SwipeableListItem>
  ),
};

/**
 * With async callbacks showing loading state
 */
export const AsyncCallbacks: Story = {
  render: () => {
    const [status, setStatus] = useState<string>('Ready');

    const handleAsyncAction = async (action: string) => {
      setStatus(`Processing ${action}...`);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus(`${action} complete!`);
      setTimeout(() => setStatus('Ready'), 2000);
    };

    return (
      <Stack gap="md">
        <Text size="sm" className="text-ink-500">Status: {status}</Text>
        <SwipeableListItem
          onSwipeRight={() => handleAsyncAction('approval')}
          onSwipeLeft={() => handleAsyncAction('rejection')}
          rightAction={{
            icon: Check,
            color: 'success',
            label: 'Approve',
          }}
          leftAction={{
            icon: X,
            color: 'destructive',
            label: 'Reject',
          }}
        >
          <ListItemContent 
            title="Async action demo" 
            subtitle="Watch for loading spinner during action"
          />
        </SwipeableListItem>
      </Stack>
    );
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  render: () => (
    <SwipeableListItem
      onSwipeRight={() => console.log('Approved!')}
      onSwipeLeft={() => console.log('Dismissed!')}
      rightAction={{
        icon: Check,
        color: 'success',
        label: 'Approve',
      }}
      leftAction={{
        icon: X,
        color: 'destructive',
        label: 'Dismiss',
      }}
      disabled
    >
      <ListItemContent 
        title="Disabled list item" 
        subtitle="Swipe gestures are disabled"
      />
    </SwipeableListItem>
  ),
};

/**
 * Custom colors
 */
export const CustomColors: Story = {
  render: () => (
    <Stack gap="none">
      <SwipeableListItem
        onSwipeRight={() => console.log('Starred!')}
        onSwipeLeft={() => console.log('Archived!')}
        rightAction={{
          icon: Star,
          color: 'warning',
          label: 'Star',
        }}
        leftAction={{
          icon: Archive,
          color: 'primary',
          label: 'Archive',
        }}
      >
        <ListItemContent 
          title="Custom action colors" 
          subtitle="Warning (star) and Primary (archive)"
        />
      </SwipeableListItem>
    </Stack>
  ),
};

/**
 * Email inbox example
 */
export const EmailInbox: Story = {
  render: () => {
    const [emails, setEmails] = useState([
      { id: 1, from: 'boss@company.com', subject: 'Q4 Budget Review', time: '10:30 AM', unread: true },
      { id: 2, from: 'team@company.com', subject: 'Sprint Planning Notes', time: '9:15 AM', unread: true },
      { id: 3, from: 'hr@company.com', subject: 'Holiday Schedule Update', time: 'Yesterday', unread: false },
    ]);

    return (
      <Stack gap="none" className="border border-paper-200 rounded-lg overflow-hidden">
        {emails.map((email) => (
          <SwipeableListItem
            key={email.id}
            onSwipeRight={() => {
              console.log('Marked as read:', email.id);
              setEmails(emails.map(e => 
                e.id === email.id ? { ...e, unread: false } : e
              ));
            }}
            onSwipeLeft={() => {
              console.log('Deleted:', email.id);
              setEmails(emails.filter(e => e.id !== email.id));
            }}
            rightAction={{
              icon: email.unread ? MailOpen : Mail,
              color: 'primary',
              label: email.unread ? 'Mark as read' : 'Mark as unread',
            }}
            leftAction={{
              icon: Trash,
              color: 'destructive',
              label: 'Delete',
            }}
          >
            <div className="p-4 border-b border-paper-100">
              <Stack direction="horizontal" justify="between" align="start">
                <Stack gap="xs" className="flex-1 min-w-0">
                  <Stack direction="horizontal" gap="sm" align="center">
                    {email.unread && (
                      <div className="w-2 h-2 rounded-full bg-accent-500 flex-shrink-0" />
                    )}
                    <Text 
                      weight={email.unread ? 'semibold' : 'normal'}
                      className="truncate"
                    >
                      {email.from}
                    </Text>
                  </Stack>
                  <Text 
                    size="sm" 
                    className={email.unread ? 'text-ink-700' : 'text-ink-400'}
                  >
                    {email.subject}
                  </Text>
                </Stack>
                <Text size="xs" className="text-ink-400 flex-shrink-0 ml-2">
                  {email.time}
                </Text>
              </Stack>
            </div>
          </SwipeableListItem>
        ))}
        {emails.length === 0 && (
          <div className="p-8 text-center text-ink-400">
            Inbox empty!
          </div>
        )}
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
        <Text size="sm" weight="medium">Keyboard Instructions:</Text>
        <ul className="mt-2 text-sm text-ink-600 space-y-1">
          <li>• <kbd className="px-1 bg-paper-200 rounded">Tab</kbd> to focus the item</li>
          <li>• <kbd className="px-1 bg-paper-200 rounded">→</kbd> to preview right action</li>
          <li>• <kbd className="px-1 bg-paper-200 rounded">←</kbd> to preview left action</li>
          <li>• <kbd className="px-1 bg-paper-200 rounded">Enter</kbd> to confirm</li>
          <li>• <kbd className="px-1 bg-paper-200 rounded">Esc</kbd> to cancel</li>
        </ul>
      </div>
      <SwipeableListItem
        onSwipeRight={() => alert('Approved via keyboard!')}
        onSwipeLeft={() => alert('Dismissed via keyboard!')}
        rightAction={{
          icon: Check,
          color: 'success',
          label: 'Approve',
        }}
        leftAction={{
          icon: X,
          color: 'destructive',
          label: 'Dismiss',
        }}
      >
        <ListItemContent 
          title="Focus me and use arrow keys" 
          subtitle="Then press Enter to confirm or Escape to cancel"
        />
      </SwipeableListItem>
    </Stack>
  ),
};

/**
 * Multiple items in a list
 */
export const MultipleItems: Story = {
  render: () => {
    const [todos, setTodos] = useState([
      { id: 1, text: 'Review pull request', done: false },
      { id: 2, text: 'Update documentation', done: false },
      { id: 3, text: 'Fix CI pipeline', done: false },
      { id: 4, text: 'Deploy to staging', done: false },
      { id: 5, text: 'Write unit tests', done: false },
    ]);

    const handleComplete = (id: number) => {
      setTodos(todos.map(t => 
        t.id === id ? { ...t, done: true } : t
      ));
    };

    const handleDelete = (id: number) => {
      setTodos(todos.filter(t => t.id !== id));
    };

    return (
      <Stack gap="none" className="border border-paper-200 rounded-lg overflow-hidden">
        {todos.map((todo) => (
          <SwipeableListItem
            key={todo.id}
            onSwipeRight={() => handleComplete(todo.id)}
            onSwipeLeft={() => handleDelete(todo.id)}
            rightAction={{
              icon: Check,
              color: 'success',
              label: 'Complete',
            }}
            leftAction={{
              icon: Trash,
              color: 'destructive',
              label: 'Delete',
            }}
            disabled={todo.done}
          >
            <div className={`p-4 border-b border-paper-100 ${todo.done ? 'bg-paper-50' : ''}`}>
              <Text className={todo.done ? 'line-through text-ink-400' : ''}>
                {todo.text}
              </Text>
            </div>
          </SwipeableListItem>
        ))}
      </Stack>
    );
  },
};
