import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Drawer from './Drawer';
import Button from './Button';
import Input from './Input';

const meta = {
  title: 'Feedback/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Side-sliding panel component for forms, filters, and contextual content. Alternative to centered modals.

## Features
- **Placement**: Slide from left, right, top, or bottom
- **Sizes**: sm (256px), md (384px), lg (512px), full (100%)
- **Overlay backdrop**: Optional with click-to-close behavior
- **Footer support**: Action buttons in bottom section
- **Custom header**: Replace title with custom content
- **Keyboard control**: Escape key to close
- **Body scroll lock**: Prevents background scrolling when open

## Usage

\`\`\`tsx
import { Drawer } from 'notebook-ui';

<Drawer
  isOpen={isOpen}
  onClose={handleClose}
  title="Edit User"
  placement="right"
  size="md"
  footer={
    <>
      <Button variant="ghost" onClick={handleClose}>Cancel</Button>
      <Button variant="primary" onClick={handleSave}>Save</Button>
    </>
  }
>
  {/* Form content */}
</Drawer>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls drawer open/closed state',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onClose: {
      description: 'Callback fired when drawer should close',
      table: {
        type: { summary: '() => void' },
      },
    },
    title: {
      control: 'text',
      description: 'Drawer title displayed in header',
      table: {
        type: { summary: 'string' },
      },
    },
    placement: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Side from which drawer slides in',
      table: {
        type: { summary: 'left | right | top | bottom' },
        defaultValue: { summary: 'right' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
      description: 'Drawer size (sm: 256px, md: 384px, lg: 512px, full: 100%)',
      table: {
        type: { summary: 'sm | md | lg | full' },
        defaultValue: { summary: 'md' },
      },
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show X button in header to close drawer',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showOverlay: {
      control: 'boolean',
      description: 'Show backdrop overlay behind drawer',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Close drawer when clicking on overlay',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Close drawer when pressing Escape key',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    header: {
      description: 'Custom header content (replaces title)',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    footer: {
      description: 'Footer content area for action buttons',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Right Drawer</Button>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Drawer Title">
          <p>This is the drawer content from the right side.</p>
        </Drawer>
      </>
    );
  },
};

export const Left: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Left Drawer</Button>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Left Drawer" placement="left">
          <p>This drawer slides in from the left.</p>
        </Drawer>
      </>
    );
  },
};

export const Top: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Top Drawer</Button>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Top Drawer" placement="top">
          <p>This drawer slides down from the top.</p>
        </Drawer>
      </>
    );
  },
};

export const Bottom: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Bottom Drawer</Button>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Bottom Drawer" placement="bottom">
          <p>This drawer slides up from the bottom.</p>
        </Drawer>
      </>
    );
  },
};

export const Small: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Small Drawer</Button>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Small Drawer" size="sm">
          <p>This is a small-sized drawer.</p>
        </Drawer>
      </>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Large Drawer</Button>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Large Drawer" size="lg">
          <p>This is a large-sized drawer with more space for content.</p>
        </Drawer>
      </>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Full Width Drawer</Button>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Full Width Drawer" size="full">
          <p>This drawer takes up the full width/height.</p>
        </Drawer>
      </>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Drawer with Footer</Button>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Drawer with Footer"
          footer={
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>Save</Button>
            </div>
          }
        >
          <p>This drawer has footer buttons.</p>
        </Drawer>
      </>
    );
  },
};

export const NoOverlay: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Drawer (No Overlay)</Button>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="No Overlay"
          showOverlay={false}
        >
          <p>This drawer has no backdrop overlay.</p>
        </Drawer>
      </>
    );
  },
};

export const FormDrawer: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Create New User</Button>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Create New User"
          footer={
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>Create User</Button>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Input label="Full Name" placeholder="Enter full name" required />
            <Input label="Email" type="email" placeholder="user@example.com" required />
            <Input label="Role" placeholder="Enter role" />
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                Bio
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about yourself..."
                style={{
                  width: '100%',
                  padding: '0.5rem 0.75rem',
                  border: '1px solid #e5e5e5',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontFamily: 'inherit',
                }}
              />
            </div>
          </div>
        </Drawer>
      </>
    );
  },
};

export const FilterPanel: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Filters</Button>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Filter Products"
          placement="left"
          footer={
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button variant="ghost" fullWidth onClick={() => setIsOpen(false)}>Clear All</Button>
              <Button variant="primary" fullWidth onClick={() => setIsOpen(false)}>Apply Filters</Button>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>Category</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Electronics', 'Clothing', 'Home & Garden', 'Sports'].map((cat) => (
                  <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <input type="checkbox" />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>Price Range</h4>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Input placeholder="Min" size="sm" />
                <Input placeholder="Max" size="sm" />
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>Rating</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['4+ Stars', '3+ Stars', '2+ Stars', '1+ Stars'].map((rating) => (
                  <label key={rating} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <input type="radio" name="rating" />
                    {rating}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </Drawer>
      </>
    );
  },
};

export const NotificationPanel: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const notifications = [
      { id: 1, title: 'New message', message: 'You have a new message from John', time: '5 min ago', unread: true },
      { id: 2, title: 'Update available', message: 'Version 2.0 is now available', time: '1 hour ago', unread: true },
      { id: 3, title: 'Welcome!', message: 'Thanks for signing up', time: '2 days ago', unread: false },
    ];

    return (
      <>
        <Button onClick={() => setIsOpen(true)} badge={2} badgeVariant="error">
          Notifications
        </Button>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Notifications"
          footer={
            <Button variant="ghost" fullWidth onClick={() => setIsOpen(false)}>
              Mark all as read
            </Button>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {notifications.map((notif) => (
              <div
                key={notif.id}
                style={{
                  padding: '0.75rem',
                  borderRadius: '0.375rem',
                  backgroundColor: notif.unread ? '#eff6ff' : 'transparent',
                  border: '1px solid #e5e5e5',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>{notif.title}</div>
                  {notif.unread && (
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3b82f6' }} />
                  )}
                </div>
                <p style={{ fontSize: '0.875rem', color: '#64748b', margin: '0 0 0.5rem 0' }}>{notif.message}</p>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{notif.time}</div>
              </div>
            ))}
          </div>
        </Drawer>
      </>
    );
  },
};
