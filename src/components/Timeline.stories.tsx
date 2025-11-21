import type { Meta, StoryObj } from '@storybook/react';
import Timeline, { TimelineItem } from './Timeline';
import { CheckCircle, Clock, AlertCircle, Package, Truck, Home, ShoppingCart } from 'lucide-react';

const meta = {
  title: 'Display/Timeline',
  component: Timeline,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Vertical or horizontal timeline for displaying chronological events with timestamps and custom content.

## Features
- **Orientation**: vertical or horizontal layout
- **Position control**: left, right, or alternating content placement
- **Color coding**: Assign colors to different event types
- **Icons**: Custom icons for each timeline item
- **Timestamps**: Display formatted dates/times
- **Dot sizes**: sm, md, lg indicator dots
- **Custom content**: Rich content areas beyond title/description
- **Interactive**: Optional click handlers for timeline items

## Usage

\`\`\`tsx
import { Timeline } from 'notebook-ui';
import { CheckCircle, Clock } from 'lucide-react';

const items = [
  {
    id: '1',
    title: 'Order Placed',
    description: 'Your order has been received',
    timestamp: new Date(),
    icon: <CheckCircle />,
    color: 'success',
  },
  {
    id: '2',
    title: 'Processing',
    timestamp: new Date(),
    icon: <Clock />,
    color: 'primary',
  },
];

<Timeline items={items} orientation="vertical" />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of timeline events with title, description, timestamp, and optional icon/color',
      table: {
        type: { summary: 'TimelineItem[]' },
      },
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Timeline layout orientation',
      table: {
        type: { summary: 'vertical | horizontal' },
        defaultValue: { summary: 'vertical' },
      },
    },
    position: {
      control: 'select',
      options: ['left', 'right', 'alternate'],
      description: 'Content position relative to timeline (vertical only)',
      table: {
        type: { summary: 'left | right | alternate' },
        defaultValue: { summary: 'right' },
      },
    },
    showLine: {
      control: 'boolean',
      description: 'Show connecting line between items',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    dotSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of timeline dot indicators',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    onItemClick: {
      description: 'Callback when timeline item is clicked',
      table: {
        type: { summary: '(item: TimelineItem) => void' },
      },
    },
    formatTimestamp: {
      description: 'Function to format timestamp display',
      table: {
        type: { summary: '(date: Date | string) => string' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', minHeight: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems: TimelineItem[] = [
  {
    id: '1',
    title: 'Event 1',
    description: 'First event description',
    timestamp: new Date(2025, 10, 15, 10, 30),
    color: 'success',
  },
  {
    id: '2',
    title: 'Event 2',
    description: 'Second event description',
    timestamp: new Date(2025, 10, 15, 14, 15),
    color: 'primary',
  },
  {
    id: '3',
    title: 'Event 3',
    description: 'Third event description',
    timestamp: new Date(2025, 10, 15, 16, 45),
    color: 'warning',
  },
];

export const Default: Story = {
  args: {
    items: basicItems,
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Completed',
        description: 'Task completed successfully',
        timestamp: new Date(2025, 10, 15, 10, 0),
        icon: <CheckCircle className="h-4 w-4" />,
        color: 'success',
      },
      {
        id: '2',
        title: 'In Progress',
        description: 'Currently working on this task',
        timestamp: new Date(2025, 10, 15, 12, 0),
        icon: <Clock className="h-4 w-4" />,
        color: 'primary',
      },
      {
        id: '3',
        title: 'Issue Found',
        description: 'An issue needs attention',
        timestamp: new Date(2025, 10, 15, 14, 0),
        icon: <AlertCircle className="h-4 w-4" />,
        color: 'error',
      },
    ],
  },
};

export const LeftPosition: Story = {
  args: {
    items: basicItems,
    position: 'left',
  },
};

export const AlternatePosition: Story = {
  args: {
    items: basicItems,
    position: 'alternate',
  },
};

export const HorizontalOrientation: Story = {
  args: {
    items: basicItems.slice(0, 3),
    orientation: 'horizontal',
  },
};

export const NoLine: Story = {
  args: {
    items: basicItems,
    showLine: false,
  },
};

export const SmallDots: Story = {
  args: {
    items: basicItems,
    dotSize: 'sm',
  },
};

export const LargeDots: Story = {
  args: {
    items: basicItems,
    dotSize: 'lg',
  },
};

export const OrderTracking: Story = {
  render: () => {
    const orderItems: TimelineItem[] = [
      {
        id: '1',
        title: 'Order Placed',
        description: 'Your order has been received and is being processed',
        timestamp: new Date(2025, 10, 20, 9, 30),
        icon: <ShoppingCart className="h-4 w-4" />,
        color: 'success',
      },
      {
        id: '2',
        title: 'Processing',
        description: 'Your order is being prepared for shipment',
        timestamp: new Date(2025, 10, 20, 14, 0),
        icon: <Package className="h-4 w-4" />,
        color: 'success',
      },
      {
        id: '3',
        title: 'Shipped',
        description: 'Your order has been shipped via FedEx',
        timestamp: new Date(2025, 10, 21, 8, 15),
        icon: <Truck className="h-4 w-4" />,
        color: 'success',
      },
      {
        id: '4',
        title: 'Out for Delivery',
        description: 'Your package is on the delivery truck',
        timestamp: new Date(2025, 10, 22, 7, 0),
        icon: <Clock className="h-4 w-4" />,
        color: 'primary',
      },
      {
        id: '5',
        title: 'Delivered',
        description: 'Expected delivery by end of day',
        timestamp: new Date(2025, 10, 22, 18, 0),
        icon: <Home className="h-4 w-4" />,
        color: 'ink',
      },
    ];

    return (
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
          Order #12345
        </h3>
        <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '2rem' }}>
          Track your order status
        </p>
        <Timeline items={orderItems} />
      </div>
    );
  },
};

export const ProjectMilestones: Story = {
  render: () => {
    const milestones: TimelineItem[] = [
      {
        id: '1',
        title: 'Project Kickoff',
        description: 'Initial planning and team alignment meeting',
        timestamp: new Date(2025, 9, 1),
        color: 'success',
        icon: <CheckCircle className="h-4 w-4" />,
      },
      {
        id: '2',
        title: 'Design Phase Complete',
        description: 'All wireframes and mockups approved',
        timestamp: new Date(2025, 9, 15),
        color: 'success',
        icon: <CheckCircle className="h-4 w-4" />,
      },
      {
        id: '3',
        title: 'Development Sprint 1',
        description: 'Core features implementation in progress',
        timestamp: new Date(2025, 10, 1),
        color: 'primary',
        icon: <Clock className="h-4 w-4" />,
      },
      {
        id: '4',
        title: 'Beta Testing',
        description: 'User acceptance testing scheduled',
        timestamp: new Date(2025, 10, 20),
        color: 'warning',
        icon: <AlertCircle className="h-4 w-4" />,
      },
      {
        id: '5',
        title: 'Production Launch',
        description: 'Go-live date planned',
        timestamp: new Date(2025, 11, 1),
        color: 'ink',
      },
    ];

    return (
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '2rem' }}>
          Project Roadmap
        </h3>
        <Timeline items={milestones} position="alternate" />
      </div>
    );
  },
};

export const ActivityFeed: Story = {
  render: () => {
    const activities: TimelineItem[] = [
      {
        id: '1',
        title: 'John Doe commented on your post',
        description: '"Great work on the new design!"',
        timestamp: new Date(2025, 10, 22, 15, 30),
        color: 'primary',
      },
      {
        id: '2',
        title: 'Sarah Williams liked your photo',
        timestamp: new Date(2025, 10, 22, 14, 20),
        color: 'error',
      },
      {
        id: '3',
        title: 'You uploaded a new file',
        description: 'presentation-final.pdf',
        timestamp: new Date(2025, 10, 22, 12, 45),
        color: 'success',
      },
      {
        id: '4',
        title: 'Meeting reminder',
        description: 'Team sync in 30 minutes',
        timestamp: new Date(2025, 10, 22, 10, 30),
        color: 'warning',
      },
      {
        id: '5',
        title: 'Bob Johnson shared a document',
        description: 'Q4-report.docx',
        timestamp: new Date(2025, 10, 22, 9, 15),
        color: 'accent',
      },
    ];

    return (
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '2rem' }}>
          Recent Activity
        </h3>
        <Timeline items={activities} dotSize="sm" />
      </div>
    );
  },
};

export const HistoryLog: Story = {
  render: () => {
    const history: TimelineItem[] = [
      {
        id: '1',
        title: 'Document created',
        description: 'Created by John Doe',
        timestamp: new Date(2025, 10, 1, 9, 0),
        color: 'success',
      },
      {
        id: '2',
        title: 'Content updated',
        description: 'Updated by Sarah Williams',
        timestamp: new Date(2025, 10, 5, 14, 30),
        color: 'primary',
      },
      {
        id: '3',
        title: 'Review requested',
        description: 'Review requested from Bob Johnson',
        timestamp: new Date(2025, 10, 10, 11, 15),
        color: 'warning',
      },
      {
        id: '4',
        title: 'Approved',
        description: 'Approved by Bob Johnson',
        timestamp: new Date(2025, 10, 12, 16, 45),
        color: 'success',
      },
      {
        id: '5',
        title: 'Published',
        description: 'Published by John Doe',
        timestamp: new Date(2025, 10, 15, 10, 0),
        color: 'success',
      },
    ];

    return (
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '2rem' }}>
          Document History
        </h3>
        <Timeline
          items={history}
          onItemClick={(item) => console.log('Clicked:', item)}
        />
      </div>
    );
  },
};

export const VersionHistory: Story = {
  render: () => {
    const versions: TimelineItem[] = [
      {
        id: 'v3',
        title: 'Version 3.0.0',
        description: 'Major release with new features',
        timestamp: new Date(2025, 10, 20),
        color: 'success',
        content: (
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
            <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem', color: '#64748b' }}>
              <li>New dashboard redesign</li>
              <li>Performance improvements</li>
              <li>Dark mode support</li>
            </ul>
          </div>
        ),
      },
      {
        id: 'v2',
        title: 'Version 2.5.1',
        description: 'Bug fixes and improvements',
        timestamp: new Date(2025, 9, 15),
        color: 'primary',
        content: (
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
            <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem', color: '#64748b' }}>
              <li>Fixed login issue</li>
              <li>Updated dependencies</li>
            </ul>
          </div>
        ),
      },
      {
        id: 'v1',
        title: 'Version 2.0.0',
        description: 'Complete rewrite',
        timestamp: new Date(2025, 8, 1),
        color: 'accent',
      },
    ];

    return (
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '2rem' }}>
          Release History
        </h3>
        <Timeline items={versions} />
      </div>
    );
  },
};

export const HorizontalMilestones: Story = {
  render: () => {
    const milestones: TimelineItem[] = [
      {
        id: '1',
        title: 'Q1',
        description: 'Planning',
        timestamp: new Date(2025, 0, 1),
        color: 'success',
        icon: <CheckCircle className="h-4 w-4" />,
      },
      {
        id: '2',
        title: 'Q2',
        description: 'Development',
        timestamp: new Date(2025, 3, 1),
        color: 'success',
        icon: <CheckCircle className="h-4 w-4" />,
      },
      {
        id: '3',
        title: 'Q3',
        description: 'Testing',
        timestamp: new Date(2025, 6, 1),
        color: 'primary',
        icon: <Clock className="h-4 w-4" />,
      },
      {
        id: '4',
        title: 'Q4',
        description: 'Launch',
        timestamp: new Date(2025, 9, 1),
        color: 'ink',
      },
    ];

    return (
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '2rem' }}>
          2025 Roadmap
        </h3>
        <Timeline
          items={milestones}
          orientation="horizontal"
          formatTimestamp={(date) => {
            const d = typeof date === 'string' ? new Date(date) : date;
            return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
          }}
        />
      </div>
    );
  },
};
