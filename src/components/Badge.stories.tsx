import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';
import { Check, X, AlertCircle, Info as InfoIcon } from 'lucide-react';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large',
  },
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge variant="success">
        <Check className="h-3 w-3 mr-1" />
        Completed
      </Badge>
      <Badge variant="error">
        <X className="h-3 w-3 mr-1" />
        Failed
      </Badge>
      <Badge variant="warning">
        <AlertCircle className="h-3 w-3 mr-1" />
        Pending
      </Badge>
      <Badge variant="info">
        <InfoIcon className="h-3 w-3 mr-1" />
        Info
      </Badge>
    </div>
  ),
};

export const Dot: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <Badge dot variant="success" />
      <Badge dot variant="warning" />
      <Badge dot variant="error" />
      <Badge dot variant="primary" />
    </div>
  ),
};

export const DotWithText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Badge dot variant="success" size="sm" />
        <span>Active</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Badge dot variant="warning" size="sm" />
        <span>Pending</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Badge dot variant="error" size="sm" />
        <span>Inactive</span>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <Badge variant="primary" size="sm">Small</Badge>
      <Badge variant="primary" size="md">Medium</Badge>
      <Badge variant="primary" size="lg">Large</Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="error">Inactive</Badge>
      <Badge variant="info">Draft</Badge>
      <Badge variant="primary">Published</Badge>
      <Badge variant="default">Archived</Badge>
    </div>
  ),
};

export const CountBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <div style={{ position: 'relative' }}>
        <span>Notifications</span>
        <Badge variant="error" size="sm" style={{ marginLeft: '0.5rem' }}>5</Badge>
      </div>
      <div style={{ position: 'relative' }}>
        <span>Messages</span>
        <Badge variant="primary" size="sm" style={{ marginLeft: '0.5rem' }}>12</Badge>
      </div>
      <div style={{ position: 'relative' }}>
        <span>Cart</span>
        <Badge variant="success" size="sm" style={{ marginLeft: '0.5rem' }}>3</Badge>
      </div>
    </div>
  ),
};
