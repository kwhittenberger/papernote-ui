import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import NotificationBell, { NotificationItem } from './NotificationBell';
import Stack from './Stack';
import Text from './Text';
import Box from './Box';

const meta = {
  title: 'Components/NotificationBell',
  component: NotificationBell,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Notification bell component with badge and dropdown panel for displaying notifications.

## Features
- **Bell icon** with unread count badge
- **Two visual variants**: compact (dot indicator) and detailed (labeled badge)
- **Flexible positioning**: bottom-left, bottom-right, top-left, top-right
- **Notification items** with type badge, title, message, and time ago
- **Mark as read** actions (single and all)
- **View all** link to navigate to full notifications page
- **Loading state** with skeleton placeholders
- **Empty state** when no notifications
- **Keyboard accessible** (Escape to close, Enter to select)

## Variants

### Compact (default)
- Dot indicator for notification type
- Stacked layout: title, message, time
- Minimal footprint

### Detailed
- Labeled badge for notification type (e.g., "Alert", "Info")
- Time aligned right of title
- Shows "(X unread)" in header

## Usage

\`\`\`tsx
import { NotificationBell } from 'notebook-ui';

// Compact variant (default)
<NotificationBell
  notifications={notifications}
  onMarkAsRead={(id) => markAsRead(id)}
  onMarkAllRead={() => markAllRead()}
  onNotificationClick={(n) => navigate(n.actionUrl)}
  onViewAll={() => navigate('/notifications')}
/>

// Detailed variant
<NotificationBell
  notifications={notifications}
  variant="detailed"
  showUnreadInHeader
  dropdownPosition="bottom-left"
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['compact', 'detailed'],
      description: 'Visual variant - compact (dot) or detailed (labeled badge)',
      table: {
        type: { summary: 'compact | detailed' },
        defaultValue: { summary: 'compact' },
      },
    },
    dropdownPosition: {
      control: 'select',
      options: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
      description: 'Position of dropdown relative to bell',
      table: {
        type: { summary: 'bottom-left | bottom-right | top-left | top-right' },
        defaultValue: { summary: 'bottom-right' },
      },
    },
    showUnreadInHeader: {
      control: 'boolean',
      description: 'Show unread count in header (e.g., "Notifications (2 unread)")',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the bell button',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    maxHeight: {
      control: 'text',
      description: 'Maximum height of notification list before scrolling',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '400px' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Show loading skeleton state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the bell button',
    },
  },
} satisfies Meta<typeof NotificationBell>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample notifications for stories
const sampleNotifications: NotificationItem[] = [
  {
    id: '1',
    title: 'Bill payment due',
    message: 'Your electricity bill of $142.50 is due in 3 days',
    type: 'warning',
    priority: 'high',
    createdAt: new Date(Date.now() - 5 * 60 * 1000),
    isRead: false,
    actionUrl: '/bills/electricity',
  },
  {
    id: '2',
    title: 'Transfer completed',
    message: 'Your transfer of $500 to John Smith has been completed successfully',
    type: 'success',
    priority: 'normal',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    isRead: false,
    actionUrl: '/transactions/123',
  },
  {
    id: '3',
    title: 'Security alert',
    message: 'New login detected from Chrome on Windows. If this was not you, please secure your account immediately.',
    type: 'error',
    priority: 'urgent',
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    isRead: false,
    actionUrl: '/security',
  },
  {
    id: '4',
    title: 'Monthly summary ready',
    message: 'Your January spending summary is now available',
    type: 'info',
    priority: 'low',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    isRead: true,
    actionUrl: '/reports/january',
  },
  {
    id: '5',
    title: 'Budget alert',
    message: 'You have reached 80% of your monthly dining budget',
    type: 'warning',
    priority: 'normal',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    isRead: true,
    actionUrl: '/budgets/dining',
  },
];

// Banking-style notifications for detailed variant
const bankingNotifications: NotificationItem[] = [
  {
    id: '1',
    title: 'Low balance in SAVINGS 9878',
    message: 'Your SAVINGS 9878 account balance ($6.62) is below your threshold of $100.00.',
    type: 'error',
    typeLabel: 'Alert',
    priority: 'high',
    createdAt: new Date(Date.now() - 35 * 60 * 1000),
    isRead: false,
  },
  {
    id: '2',
    title: 'Low balance in CHECKING 4364',
    message: 'Your CHECKING 4364 account balance ($56.54) is below your threshold of $100.00.',
    type: 'error',
    typeLabel: 'Alert',
    priority: 'high',
    createdAt: new Date(Date.now() - 35 * 60 * 1000),
    isRead: false,
  },
];

export const Default: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(sampleNotifications);

    const handleMarkAsRead = (id: string) => {
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
      );
    };

    const handleMarkAllRead = () => {
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    };

    return (
      <NotificationBell
        notifications={notifications}
        onMarkAsRead={handleMarkAsRead}
        onMarkAllRead={handleMarkAllRead}
        onNotificationClick={(n) => alert(`Navigate to: ${n.actionUrl}`)}
        onViewAll={() => alert('View all notifications')}
      />
    );
  },
};

export const Playground: Story = {
  args: {
    notifications: sampleNotifications,
    variant: 'compact',
    bellStyle: 'ghost',
    dropdownPosition: 'bottom-right',
    size: 'md',
    showUnreadInHeader: false,
    loading: false,
    disabled: false,
    maxHeight: '400px',
    emptyMessage: 'No notifications',
    viewAllText: 'View all notifications',
  },
  render: (args) => {
    const [notifications, setNotifications] = useState(args.notifications);

    const handleMarkAsRead = (id: string) => {
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
      );
    };

    const handleMarkAllRead = () => {
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    };

    return (
      <div style={{ padding: '250px', display: 'flex', justifyContent: 'center', minHeight: '600px' }}>
        <NotificationBell
          {...args}
          notifications={notifications}
          onMarkAsRead={handleMarkAsRead}
          onMarkAllRead={handleMarkAllRead}
          onNotificationClick={(n) => alert(`Navigate to: ${n.actionUrl}`)}
          onViewAll={() => alert('View all notifications')}
        />
      </div>
    );
  },
};

export const DetailedVariant: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(bankingNotifications);

    const handleMarkAsRead = (id: string) => {
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
      );
    };

    const handleMarkAllRead = () => {
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    };

    return (
      <NotificationBell
        notifications={notifications}
        variant="detailed"
        showUnreadInHeader
        onMarkAsRead={handleMarkAsRead}
        onMarkAllRead={handleMarkAllRead}
        onNotificationClick={(n) => alert(`Clicked: ${n.title}`)}
        onViewAll={() => alert('View all notifications')}
      />
    );
  },
};

export const CompactVsDetailed: Story = {
  render: () => {
    const notifications = sampleNotifications.slice(0, 3);

    return (
      <Stack direction="horizontal" spacing="xl" align="start">
        <Stack align="center" spacing="sm">
          <NotificationBell
            notifications={notifications}
            variant="compact"
            onViewAll={() => {}}
          />
          <Text size="xs" color="muted">Compact</Text>
        </Stack>
        <Stack align="center" spacing="sm">
          <NotificationBell
            notifications={notifications}
            variant="detailed"
            showUnreadInHeader
            onViewAll={() => {}}
          />
          <Text size="xs" color="muted">Detailed</Text>
        </Stack>
      </Stack>
    );
  },
};

export const DropdownPositions: Story = {
  render: () => (
    <Box padding="xl">
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '200px',
        padding: '100px',
      }}>
        <Stack align="start" spacing="xs">
          <NotificationBell
            notifications={sampleNotifications.slice(0, 2)}
            dropdownPosition="bottom-right"
            onViewAll={() => {}}
          />
          <Text size="xs" color="muted">bottom-right</Text>
        </Stack>
        <Stack align="end" spacing="xs">
          <NotificationBell
            notifications={sampleNotifications.slice(0, 2)}
            dropdownPosition="bottom-left"
            onViewAll={() => {}}
          />
          <Text size="xs" color="muted">bottom-left</Text>
        </Stack>
        <Stack align="start" spacing="xs">
          <Text size="xs" color="muted">top-right</Text>
          <NotificationBell
            notifications={sampleNotifications.slice(0, 2)}
            dropdownPosition="top-right"
            onViewAll={() => {}}
          />
        </Stack>
        <Stack align="end" spacing="xs">
          <Text size="xs" color="muted">top-left</Text>
          <NotificationBell
            notifications={sampleNotifications.slice(0, 2)}
            dropdownPosition="top-left"
            onViewAll={() => {}}
          />
        </Stack>
      </div>
    </Box>
  ),
};

export const WithUnreadBadge: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="lg" align="center">
      <Stack align="center" spacing="xs">
        <NotificationBell
          notifications={sampleNotifications}
          unreadCount={3}
        />
        <Text size="xs" color="muted">3 unread</Text>
      </Stack>
      <Stack align="center" spacing="xs">
        <NotificationBell
          notifications={sampleNotifications}
          unreadCount={99}
        />
        <Text size="xs" color="muted">99 unread</Text>
      </Stack>
      <Stack align="center" spacing="xs">
        <NotificationBell
          notifications={sampleNotifications}
          unreadCount={150}
        />
        <Text size="xs" color="muted">99+ unread</Text>
      </Stack>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="lg" align="center">
      <Stack align="center" spacing="xs">
        <NotificationBell
          notifications={sampleNotifications}
          unreadCount={5}
          size="sm"
        />
        <Text size="xs" color="muted">Small</Text>
      </Stack>
      <Stack align="center" spacing="xs">
        <NotificationBell
          notifications={sampleNotifications}
          unreadCount={5}
          size="md"
        />
        <Text size="xs" color="muted">Medium</Text>
      </Stack>
      <Stack align="center" spacing="xs">
        <NotificationBell
          notifications={sampleNotifications}
          unreadCount={5}
          size="lg"
        />
        <Text size="xs" color="muted">Large</Text>
      </Stack>
    </Stack>
  ),
};

export const EmptyState: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="xl">
      <Stack align="center" spacing="xs">
        <NotificationBell
          notifications={[]}
          variant="compact"
          onViewAll={() => {}}
        />
        <Text size="xs" color="muted">Compact</Text>
      </Stack>
      <Stack align="center" spacing="xs">
        <NotificationBell
          notifications={[]}
          variant="detailed"
          onViewAll={() => {}}
        />
        <Text size="xs" color="muted">Detailed</Text>
      </Stack>
    </Stack>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="xl">
      <Stack align="center" spacing="xs">
        <NotificationBell
          notifications={[]}
          loading
          variant="compact"
        />
        <Text size="xs" color="muted">Compact</Text>
      </Stack>
      <Stack align="center" spacing="xs">
        <NotificationBell
          notifications={[]}
          loading
          variant="detailed"
        />
        <Text size="xs" color="muted">Detailed</Text>
      </Stack>
    </Stack>
  ),
};

export const NotificationTypes: Story = {
  render: () => {
    const typeNotifications: NotificationItem[] = [
      {
        id: '1',
        title: 'Info notification',
        message: 'This is an informational message',
        type: 'info',
        priority: 'normal',
        createdAt: new Date(),
        isRead: false,
      },
      {
        id: '2',
        title: 'Success notification',
        message: 'Operation completed successfully',
        type: 'success',
        priority: 'normal',
        createdAt: new Date(),
        isRead: false,
      },
      {
        id: '3',
        title: 'Warning notification',
        message: 'Please review this item',
        type: 'warning',
        priority: 'high',
        createdAt: new Date(),
        isRead: false,
      },
      {
        id: '4',
        title: 'Error notification',
        message: 'Something went wrong',
        type: 'error',
        priority: 'urgent',
        createdAt: new Date(),
        isRead: false,
      },
    ];

    return (
      <Stack direction="horizontal" spacing="xl">
        <Stack align="center" spacing="xs">
          <NotificationBell
            notifications={typeNotifications}
            variant="compact"
          />
          <Text size="xs" color="muted">Compact</Text>
        </Stack>
        <Stack align="center" spacing="xs">
          <NotificationBell
            notifications={typeNotifications}
            variant="detailed"
            showUnreadInHeader
          />
          <Text size="xs" color="muted">Detailed</Text>
        </Stack>
      </Stack>
    );
  },
};

export const CustomTypeLabels: Story = {
  render: () => {
    const customNotifications: NotificationItem[] = [
      {
        id: '1',
        title: 'Account Update',
        message: 'Your profile has been updated',
        type: 'info',
        typeLabel: 'Update',
        priority: 'normal',
        createdAt: new Date(),
        isRead: false,
      },
      {
        id: '2',
        title: 'Payment Received',
        message: 'You received $500 from John',
        type: 'success',
        typeLabel: 'Payment',
        priority: 'normal',
        createdAt: new Date(),
        isRead: false,
      },
      {
        id: '3',
        title: 'Low Balance',
        message: 'Your checking account is below $100',
        type: 'error',
        typeLabel: 'Alert',
        priority: 'high',
        createdAt: new Date(),
        isRead: false,
      },
    ];

    return (
      <NotificationBell
        notifications={customNotifications}
        variant="detailed"
        showUnreadInHeader
        onViewAll={() => {}}
      />
    );
  },
};

export const ManyNotifications: Story = {
  render: () => {
    const manyNotifications: NotificationItem[] = Array.from(
      { length: 20 },
      (_, i) => ({
        id: String(i + 1),
        title: `Notification ${i + 1}`,
        message: `This is the message for notification ${i + 1}`,
        type: (['info', 'success', 'warning', 'error'] as const)[i % 4],
        priority: (['low', 'normal', 'high', 'urgent'] as const)[i % 4],
        createdAt: new Date(Date.now() - i * 60 * 60 * 1000),
        isRead: i > 5,
      })
    );

    return (
      <NotificationBell
        notifications={manyNotifications}
        maxHeight="300px"
        onViewAll={() => alert('View all 20 notifications')}
      />
    );
  },
};

export const InHeader: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(bankingNotifications);

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1.5rem',
          backgroundColor: 'white',
          borderBottom: '1px solid #e5e7eb',
          width: '500px',
        }}
      >
        <Text weight="semibold">Prylance</Text>
        <NotificationBell
          notifications={notifications}
          variant="detailed"
          showUnreadInHeader
          dropdownPosition="bottom-left"
          onMarkAsRead={(id) =>
            setNotifications((prev) =>
              prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
            )
          }
          onMarkAllRead={() =>
            setNotifications((prev) =>
              prev.map((n) => ({ ...n, isRead: true }))
            )
          }
          onViewAll={() => alert('View all')}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <NotificationBell
      notifications={sampleNotifications}
      unreadCount={5}
      disabled
    />
  ),
};

export const BellStyles: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="xl" align="center">
      <Stack align="center" spacing="sm">
        <NotificationBell
          notifications={sampleNotifications}
          unreadCount={2}
          bellStyle="ghost"
          onViewAll={() => {}}
        />
        <Text size="xs" color="muted">Ghost (default)</Text>
      </Stack>
      <Stack align="center" spacing="sm">
        <NotificationBell
          notifications={sampleNotifications}
          unreadCount={2}
          bellStyle="outlined"
          onViewAll={() => {}}
        />
        <Text size="xs" color="muted">Outlined</Text>
      </Stack>
    </Stack>
  ),
};

export const OutlinedSizes: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="xl" align="center">
      <Stack align="center" spacing="sm">
        <NotificationBell
          notifications={sampleNotifications}
          unreadCount={3}
          bellStyle="outlined"
          size="sm"
        />
        <Text size="xs" color="muted">Small</Text>
      </Stack>
      <Stack align="center" spacing="sm">
        <NotificationBell
          notifications={sampleNotifications}
          unreadCount={3}
          bellStyle="outlined"
          size="md"
        />
        <Text size="xs" color="muted">Medium</Text>
      </Stack>
      <Stack align="center" spacing="sm">
        <NotificationBell
          notifications={sampleNotifications}
          unreadCount={3}
          bellStyle="outlined"
          size="lg"
        />
        <Text size="xs" color="muted">Large</Text>
      </Stack>
    </Stack>
  ),
};

export const OutlinedInHeader: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(bankingNotifications);

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#fafaf9',
          borderBottom: '1px solid #e5e7eb',
          width: '500px',
        }}
      >
        <Text weight="semibold">Prylance</Text>
        <NotificationBell
          notifications={notifications}
          bellStyle="outlined"
          variant="detailed"
          showUnreadInHeader
          dropdownPosition="bottom-left"
          onMarkAsRead={(id) =>
            setNotifications((prev) =>
              prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
            )
          }
          onMarkAllRead={() =>
            setNotifications((prev) =>
              prev.map((n) => ({ ...n, isRead: true }))
            )
          }
          onViewAll={() => alert('View all')}
        />
      </div>
    );
  },
};
