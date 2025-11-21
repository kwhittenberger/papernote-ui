import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import { User } from 'lucide-react';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
User avatar component displaying profile pictures or initials.

## Features
- **Initials**: Automatic generation from firstName/lastName
- **Images**: Display profile pictures from URL
- **Sizes**: xs (24px), sm (32px), md (48px), lg (64px), xl (96px)
- **Fallback**: Graceful fallback to initials when image fails
- **Customizable**: className prop for additional styling

## Usage

\`\`\`tsx
import { Avatar } from 'notebook-ui';

{/* Avatar with initials */}
<Avatar firstName="John" lastName="Doe" size="md" />

{/* Avatar with image */}
<Avatar
  firstName="John"
  lastName="Doe"
  imageUrl="https://example.com/avatar.jpg"
  size="lg"
/>

{/* Custom fallback text */}
<Avatar fallbackText="Guest" size="sm" />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    firstName: {
      control: 'text',
      description: 'User\'s first name (used for initials)',
      table: {
        type: { summary: 'string' },
      },
    },
    lastName: {
      control: 'text',
      description: 'User\'s last name (used for initials)',
      table: {
        type: { summary: 'string' },
      },
    },
    fallbackText: {
      control: 'text',
      description: 'Fallback text when firstName/lastName not provided',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'U' },
      },
    },
    imageUrl: {
      control: 'text',
      description: 'Avatar image URL (overrides initials when provided)',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Avatar size (xs: 24px, sm: 32px, md: 48px, lg: 64px, xl: 96px)',
      table: {
        type: { summary: 'xs | sm | md | lg | xl' },
        defaultValue: { summary: 'md' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for customization',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInitials: Story = {
  args: {
    name: 'John Doe',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    name: 'John Doe',
  },
};

export const Fallback: Story = {
  args: {
    src: 'invalid-url.jpg',
    name: 'John Doe',
  },
};

export const ExtraSmall: Story = {
  args: {
    name: 'John Doe',
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    name: 'John Doe',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    name: 'John Doe',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    name: 'John Doe',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    name: 'John Doe',
    size: 'xl',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar name="John Doe" size="xs" />
      <Avatar name="John Doe" size="sm" />
      <Avatar name="John Doe" size="md" />
      <Avatar name="John Doe" size="lg" />
      <Avatar name="John Doe" size="xl" />
    </div>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', marginLeft: '0.5rem' }}>
      {['Alice Brown', 'Bob Smith', 'Carol White', 'Dave Jones'].map((name, i) => (
        <div key={i} style={{ marginLeft: '-0.5rem' }}>
          <Avatar
            name={name}
            src={`https://i.pravatar.cc/150?img=${i + 1}`}
            size="md"
            style={{ border: '2px solid white' }}
          />
        </div>
      ))}
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Avatar name="Online User" src="https://i.pravatar.cc/150?img=2" />
        <div style={{
          position: 'absolute',
          bottom: '2px',
          right: '2px',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#10b981',
          border: '2px solid white',
        }} />
      </div>

      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Avatar name="Away User" src="https://i.pravatar.cc/150?img=3" />
        <div style={{
          position: 'absolute',
          bottom: '2px',
          right: '2px',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#f59e0b',
          border: '2px solid white',
        }} />
      </div>

      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Avatar name="Busy User" src="https://i.pravatar.cc/150?img=4" />
        <div style={{
          position: 'absolute',
          bottom: '2px',
          right: '2px',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#ef4444',
          border: '2px solid white',
        }} />
      </div>
    </div>
  ),
};

export const UserList: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {[
        { name: 'Alice Brown', email: 'alice@example.com', img: 1 },
        { name: 'Bob Smith', email: 'bob@example.com', img: 2 },
        { name: 'Carol White', email: 'carol@example.com', img: 3 },
      ].map((user, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', borderRadius: '0.375rem', cursor: 'pointer' }}>
          <Avatar name={user.name} src={`https://i.pravatar.cc/150?img=${user.img}`} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>{user.name}</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.email}</div>
          </div>
        </div>
      ))}
    </div>
  ),
};
