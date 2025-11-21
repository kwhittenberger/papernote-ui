import type { Meta, StoryObj } from '@storybook/react';
import EmptyState from './EmptyState';
import Button from './Button';
import { Inbox, Users, FileText, Search, Database, ShoppingCart } from 'lucide-react';

const meta = {
  title: 'Feedback/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ minWidth: '500px', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'No items found',
    message: 'There are no items to display at this time.',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <Inbox className="h-12 w-12" />,
    title: 'Your inbox is empty',
    message: 'No new messages at this time.',
  },
};

export const WithAction: Story = {
  args: {
    icon: <Users className="h-12 w-12" />,
    title: 'No users yet',
    message: 'Get started by adding your first user.',
    action: <Button variant="primary">Add User</Button>,
  },
};

export const WithMultipleActions: Story = {
  render: () => (
    <EmptyState
      icon={<FileText className="h-12 w-12" />}
      title="No documents"
      message="You haven't created any documents yet. Create a new one or upload existing files."
      action={
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Button variant="primary">Create New</Button>
          <Button variant="outline">Upload Files</Button>
        </div>
      }
    />
  ),
};

export const SearchResults: Story = {
  args: {
    icon: <Search className="h-12 w-12" />,
    title: 'No results found',
    message: 'Try adjusting your search or filter to find what you\'re looking for.',
  },
};

export const NoData: Story = {
  args: {
    icon: <Database className="h-12 w-12" />,
    title: 'No data available',
    message: 'There is no data to display for the selected time period.',
  },
};

export const EmptyCart: Story = {
  render: () => (
    <EmptyState
      icon={<ShoppingCart className="h-12 w-12" />}
      title="Your cart is empty"
      message="Looks like you haven't added anything to your cart yet."
      action={<Button variant="primary">Continue Shopping</Button>}
    />
  ),
};

export const WithDescription: Story = {
  render: () => (
    <EmptyState
      icon={<FileText className="h-12 w-12" />}
      title="No projects yet"
      message="Projects help you organize your work and collaborate with team members."
      action={
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <Button variant="primary">Create Your First Project</Button>
          <a href="#" style={{ fontSize: '0.875rem', color: '#3b82f6', textDecoration: 'none' }}>
            Learn more about projects →
          </a>
        </div>
      }
    />
  ),
};

export const ErrorState: Story = {
  render: () => (
    <EmptyState
      icon={
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: '#fef2f2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{ fontSize: '2rem' }}>⚠️</span>
        </div>
      }
      title="Something went wrong"
      message="We encountered an error while loading your data. Please try again."
      action={<Button variant="primary">Retry</Button>}
    />
  ),
};

export const MinimalStyle: Story = {
  args: {
    title: 'No notifications',
    message: 'You\'re all caught up!',
  },
};

export const InCard: Story = {
  render: () => (
    <div style={{
      width: '600px',
      border: '1px solid #e5e5e5',
      borderRadius: '0.5rem',
      padding: '2rem',
    }}>
      <h2 style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e5e5e5' }}>
        Recent Activity
      </h2>
      <EmptyState
        icon={<Inbox className="h-10 w-10" />}
        title="No recent activity"
        message="Your recent activity will appear here."
      />
    </div>
  ),
};

export const FullPage: Story = {
  render: () => (
    <div style={{
      width: '100vw',
      height: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fafaf9',
    }}>
      <EmptyState
        icon={<Users className="h-16 w-16" />}
        title="Welcome to Your Dashboard"
        message="Get started by inviting team members or creating your first project."
        action={
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Button variant="primary">Invite Team</Button>
            <Button variant="outline">Create Project</Button>
          </div>
        }
      />
    </div>
  ),
};
