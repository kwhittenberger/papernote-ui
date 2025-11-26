import type { Meta, StoryObj } from '@storybook/react';
import { Menu, Search, MoreVertical, Share, Heart, Check, Bell } from 'lucide-react';
import MobileHeader, { MobileHeaderSpacer } from './MobileHeader';
import Button from './Button';

const meta: Meta<typeof MobileHeader> = {
  title: 'Mobile/MobileHeader',
  component: MobileHeader,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        component: 'Mobile app header with navigation controls (menu, back, close) and optional right actions.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', background: '#f5f5f4' }}>
        <Story />
        <div style={{ padding: '16px' }}>
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} style={{ padding: '16px', margin: '8px 0', background: 'white', borderRadius: '8px' }}>
              Content Item {i + 1}
            </div>
          ))}
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MobileHeader>;

export const WithMenuButton: Story = {
  args: {
    title: 'Dashboard',
    onMenuClick: () => console.log('Menu clicked'),
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'User Details',
    subtitle: 'Profile',
    onMenuClick: () => console.log('Menu clicked'),
  },
};

export const WithBackButton: Story = {
  args: {
    title: 'Settings',
    subtitle: 'Account',
    onBackClick: () => console.log('Back clicked'),
  },
};

export const WithCloseButton: Story = {
  args: {
    title: 'New Message',
    onCloseClick: () => console.log('Close clicked'),
  },
};

export const WithRightAction: Story = {
  args: {
    title: 'Search',
    onMenuClick: () => console.log('Menu clicked'),
    rightAction: (
      <Button variant="ghost" iconOnly onClick={() => console.log('Search')}>
        <Search className="w-5 h-5" />
      </Button>
    ),
  },
};

export const WithMultipleActions: Story = {
  args: {
    title: 'Photo',
    onBackClick: () => console.log('Back'),
    rightAction: (
      <div style={{ display: 'flex', gap: '4px' }}>
        <Button variant="ghost" iconOnly onClick={() => console.log('Like')}>
          <Heart className="w-5 h-5" />
        </Button>
        <Button variant="ghost" iconOnly onClick={() => console.log('Share')}>
          <Share className="w-5 h-5" />
        </Button>
        <Button variant="ghost" iconOnly onClick={() => console.log('More')}>
          <MoreVertical className="w-5 h-5" />
        </Button>
      </div>
    ),
  },
};

export const WithPrimaryAction: Story = {
  args: {
    title: 'Edit Profile',
    onCloseClick: () => console.log('Cancel'),
    rightAction: (
      <Button variant="ghost" iconOnly onClick={() => console.log('Save')}>
        <Check className="w-5 h-5 text-accent-600" />
      </Button>
    ),
  },
};

export const TransparentVariant: Story = {
  args: {
    title: 'Photo Gallery',
    onBackClick: () => console.log('Back'),
    variant: 'transparent',
    bordered: false,
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)' }}>
        <Story />
        <div style={{ padding: '16px', color: 'white' }}>
          <p>Content with transparent header</p>
        </div>
      </div>
    ),
  ],
};

export const BlurVariant: Story = {
  args: {
    title: 'Messages',
    onBackClick: () => console.log('Back'),
    variant: 'blur',
    rightAction: (
      <Button variant="ghost" iconOnly>
        <Bell className="w-5 h-5" />
      </Button>
    ),
  },
};

export const NotSticky: Story = {
  args: {
    title: 'Non-Sticky Header',
    subtitle: 'Scrolls with content',
    onMenuClick: () => console.log('Menu'),
    sticky: false,
  },
};

export const NoBorder: Story = {
  args: {
    title: 'No Border',
    onMenuClick: () => console.log('Menu'),
    bordered: false,
  },
};

export const CustomLeftAction: Story = {
  args: {
    title: 'Custom Actions',
    leftAction: (
      <Button variant="ghost" size="sm" onClick={() => console.log('Cancel')}>
        Cancel
      </Button>
    ),
    rightAction: (
      <Button variant="primary" size="sm" onClick={() => console.log('Save')}>
        Save
      </Button>
    ),
  },
};

export const LongTitle: Story = {
  args: {
    title: 'This is a very long title that should be truncated',
    subtitle: 'And this is also a long subtitle text',
    onBackClick: () => console.log('Back'),
    rightAction: (
      <Button variant="ghost" iconOnly>
        <MoreVertical className="w-5 h-5" />
      </Button>
    ),
  },
};

export const SpacerExample: Story = {
  render: () => (
    <div style={{ minHeight: '100vh', background: '#f5f5f4' }}>
      <MobileHeader
        title="With Spacer"
        onMenuClick={() => console.log('Menu')}
        sticky={false}
      />
      <MobileHeaderSpacer />
      <div style={{ padding: '16px' }}>
        <p>The spacer maintains consistent spacing when header is not sticky.</p>
      </div>
    </div>
  ),
};
