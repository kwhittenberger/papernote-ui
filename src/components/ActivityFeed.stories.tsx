import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ActivityFeed, ActivityItem } from './ActivityFeed';
import Stack from './Stack';
import Text from './Text';
import Card, { CardContent, CardHeader, CardTitle } from './Card';
import { FileEdit, Upload, MessageSquare, UserPlus, Trash2, Eye } from 'lucide-react';

const meta: Meta<typeof ActivityFeed> = {
  title: 'Collaboration/ActivityFeed',
  component: ActivityFeed,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Timeline of collaborative activity. Shows user avatars with actions and relative timestamps. Supports load more functionality.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    maxItems: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Maximum items to display',
    },
    showTimestamps: {
      control: 'boolean',
      description: 'Whether to show timestamps',
    },
    loading: {
      control: 'boolean',
      description: 'Whether more items are loading',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActivityFeed>;

const now = new Date();
const sampleActivities: ActivityItem[] = [
  {
    id: '1',
    user: { name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/100?u=alice' },
    action: 'edited',
    target: 'Q4 Budget.xlsx',
    timestamp: new Date(now.getTime() - 5 * 60000), // 5 mins ago
    icon: <FileEdit className="w-4 h-4" />,
  },
  {
    id: '2',
    user: { name: 'Bob Smith' },
    action: 'added a comment on',
    target: 'Expense Report',
    timestamp: new Date(now.getTime() - 30 * 60000), // 30 mins ago
    icon: <MessageSquare className="w-4 h-4" />,
  },
  {
    id: '3',
    user: { name: 'Carol Williams', avatar: 'https://i.pravatar.cc/100?u=carol' },
    action: 'uploaded',
    target: 'Invoice-2024-001.pdf',
    timestamp: new Date(now.getTime() - 2 * 3600000), // 2 hours ago
    icon: <Upload className="w-4 h-4" />,
  },
  {
    id: '4',
    user: { name: 'David Brown' },
    action: 'invited',
    target: 'Eve Davis',
    timestamp: new Date(now.getTime() - 24 * 3600000), // 1 day ago
    icon: <UserPlus className="w-4 h-4" />,
  },
  {
    id: '5',
    user: { name: 'Eve Davis', avatar: 'https://i.pravatar.cc/100?u=eve' },
    action: 'viewed',
    target: 'Annual Report',
    timestamp: new Date(now.getTime() - 3 * 24 * 3600000), // 3 days ago
    icon: <Eye className="w-4 h-4" />,
  },
];

// Basic example
export const Default: Story = {
  args: {
    activities: sampleActivities,
  },
};

// With max items
export const WithMaxItems: Story = {
  args: {
    activities: sampleActivities,
    maxItems: 3,
    onLoadMore: () => alert('Load more clicked'),
  },
};

// Without timestamps
export const WithoutTimestamps: Story = {
  args: {
    activities: sampleActivities,
    showTimestamps: false,
  },
};

// Empty state
export const Empty: Story = {
  args: {
    activities: [],
  },
};

// Loading more
export const LoadingMore: Story = {
  args: {
    activities: sampleActivities.slice(0, 3),
    loading: true,
    onLoadMore: () => {},
  },
};

// Interactive with load more
export const Interactive: Story = {
  render: function InteractiveDemo() {
    const [items, setItems] = useState(sampleActivities.slice(0, 3));
    const [loading, setLoading] = useState(false);

    const loadMore = () => {
      setLoading(true);
      setTimeout(() => {
        setItems(sampleActivities);
        setLoading(false);
      }, 1000);
    };

    return (
      <div className="w-96">
        <ActivityFeed
          activities={items}
          onLoadMore={items.length < sampleActivities.length ? loadMore : undefined}
          loading={loading}
        />
      </div>
    );
  },
};

// In context - Sidebar panel
export const SidebarPanel: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ActivityFeed
          activities={sampleActivities.slice(0, 4)}
          maxItems={4}
        />
      </CardContent>
    </Card>
  ),
};

// Without icons
export const WithoutIcons: Story = {
  args: {
    activities: sampleActivities.map(({ icon, ...rest }) => rest),
  },
};

// Various action types
export const ActionTypes: Story = {
  render: () => {
    const actions: ActivityItem[] = [
      {
        id: '1',
        user: { name: 'User' },
        action: 'created',
        target: 'New Document',
        timestamp: new Date(),
        icon: <FileEdit className="w-4 h-4" />,
      },
      {
        id: '2',
        user: { name: 'User' },
        action: 'shared',
        target: 'Budget.xlsx',
        timestamp: new Date(),
        icon: <UserPlus className="w-4 h-4" />,
      },
      {
        id: '3',
        user: { name: 'User' },
        action: 'commented on',
        target: 'Report',
        timestamp: new Date(),
        icon: <MessageSquare className="w-4 h-4" />,
      },
      {
        id: '4',
        user: { name: 'User' },
        action: 'deleted',
        target: 'Old File.pdf',
        timestamp: new Date(),
        icon: <Trash2 className="w-4 h-4" />,
      },
    ];

    return (
      <div className="w-96">
        <ActivityFeed activities={actions} showTimestamps={false} />
      </div>
    );
  },
};

// Full page activity log
export const FullPageLog: Story = {
  render: () => (
    <div className="bg-white p-6 rounded-xl shadow-card border border-paper-200 w-[500px]">
      <Stack gap="md">
        <Stack direction="horizontal" justify="between" align="center">
          <Text size="lg" weight="semibold">Activity Log</Text>
          <Text size="sm" className="text-ink-400">Last 7 days</Text>
        </Stack>
        <ActivityFeed
          activities={sampleActivities}
          onLoadMore={() => alert('Load more')}
        />
      </Stack>
    </div>
  ),
};
