import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Tabs from './Tabs';
import { User, Settings, Bell, Lock } from 'lucide-react';

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Tab navigation component for organizing content into separate views with multiple style variants.

## Features
- **Variants**: underline, pill styling options
- **Orientation**: horizontal or vertical layout
- **Icons**: Support for icons alongside tab labels
- **Badges**: Show notification counts on tabs
- **Disabled tabs**: Prevent interaction with specific tabs
- **Controlled state**: Manage active tab externally
- **Content management**: Automatic content switching

## Usage

\`\`\`tsx
import { Tabs } from 'notebook-ui';

const tabs = [
  { id: 'profile', label: 'Profile', content: <ProfileContent /> },
  { id: 'settings', label: 'Settings', content: <SettingsContent />, badge: 3 },
];

<Tabs
  tabs={tabs}
  activeTab={activeTab}
  onChange={setActiveTab}
  variant="underline"
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      description: 'Array of tab configurations with id, label, content, and optional icons/badges',
      table: {
        type: { summary: 'TabConfig[]' },
      },
    },
    activeTab: {
      control: 'text',
      description: 'ID of the currently active tab',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: 'Callback when active tab changes',
      table: {
        type: { summary: '(tabId: string) => void' },
      },
    },
    variant: {
      control: 'select',
      options: ['underline', 'pill'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'underline | pill' },
        defaultValue: { summary: 'underline' },
      },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation',
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicTabs = [
  { id: 'profile', label: 'Profile', content: <div style={{ padding: '1rem' }}><h3>Profile Content</h3><p>Your profile information goes here.</p></div> },
  { id: 'settings', label: 'Settings', content: <div style={{ padding: '1rem' }}><h3>Settings Content</h3><p>Application settings go here.</p></div> },
  { id: 'notifications', label: 'Notifications', content: <div style={{ padding: '1rem' }}><h3>Notifications Content</h3><p>Your notifications appear here.</p></div> },
];

const tabsWithIcons = [
  {
    id: 'profile',
    label: 'Profile',
    icon: <User className="h-4 w-4" />,
    content: <div style={{ padding: '1rem' }}><h3>Profile</h3><p>Manage your profile information.</p></div>
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings className="h-4 w-4" />,
    content: <div style={{ padding: '1rem' }}><h3>Settings</h3><p>Configure your preferences.</p></div>
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <Bell className="h-4 w-4" />,
    content: <div style={{ padding: '1rem' }}><h3>Notifications</h3><p>View your notifications.</p></div>
  },
  {
    id: 'security',
    label: 'Security',
    icon: <Lock className="h-4 w-4" />,
    content: <div style={{ padding: '1rem' }}><h3>Security</h3><p>Manage security settings.</p></div>
  },
];

const tabsWithBadges = [
  { id: 'all', label: 'All', badge: 24, content: <div style={{ padding: '1rem' }}>All items (24)</div> },
  { id: 'active', label: 'Active', badge: 18, content: <div style={{ padding: '1rem' }}>Active items (18)</div> },
  { id: 'pending', label: 'Pending', badge: 6, content: <div style={{ padding: '1rem' }}>Pending items (6)</div> },
  { id: 'archived', label: 'Archived', content: <div style={{ padding: '1rem' }}>Archived items</div> },
];

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={basicTabs} activeTab={activeTab} onChange={setActiveTab} />;
  },
};

export const Underline: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={basicTabs} activeTab={activeTab} onChange={setActiveTab} variant="underline" />;
  },
};

export const Pill: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={basicTabs} activeTab={activeTab} onChange={setActiveTab} variant="pill" />;
  },
};

export const WithIcons: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={tabsWithIcons} activeTab={activeTab} onChange={setActiveTab} />;
  },
};

export const WithBadges: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('all');
    return <Tabs tabs={tabsWithBadges} activeTab={activeTab} onChange={setActiveTab} />;
  },
};

export const WithDisabledTab: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    const tabs = [
      { id: 'profile', label: 'Profile', content: <div style={{ padding: '1rem' }}>Profile content</div> },
      { id: 'settings', label: 'Settings', content: <div style={{ padding: '1rem' }}>Settings content</div> },
      { id: 'admin', label: 'Admin', disabled: true, content: <div style={{ padding: '1rem' }}>Admin content (disabled)</div> },
    ];
    return <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />;
  },
};

export const Vertical: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={tabsWithIcons} activeTab={activeTab} onChange={setActiveTab} orientation="vertical" />;
  },
};

export const VerticalUnderline: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={tabsWithIcons} activeTab={activeTab} onChange={setActiveTab} orientation="vertical" variant="underline" />;
  },
};

export const Complete: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('all');
    const tabs = [
      {
        id: 'all',
        label: 'All Users',
        icon: <User className="h-4 w-4" />,
        badge: 156,
        content: (
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>All Users (156)</h3>
            <p style={{ color: '#64748b' }}>Complete list of all registered users.</p>
          </div>
        )
      },
      {
        id: 'active',
        label: 'Active',
        badge: 142,
        content: (
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>Active Users (142)</h3>
            <p style={{ color: '#64748b' }}>Users who have logged in recently.</p>
          </div>
        )
      },
      {
        id: 'pending',
        label: 'Pending',
        badge: 14,
        content: (
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>Pending Approval (14)</h3>
            <p style={{ color: '#64748b' }}>Users awaiting account activation.</p>
          </div>
        )
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <Settings className="h-4 w-4" />,
        content: (
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>User Management Settings</h3>
            <p style={{ color: '#64748b' }}>Configure user management preferences.</p>
          </div>
        )
      },
    ];
    return <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} variant="underline" />;
  },
};
