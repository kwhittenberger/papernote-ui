import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Switch from './Switch';

const meta = {
  title: 'Forms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Toggle switch component for binary on/off state with loading support.

## Features
- **Sizes**: sm, md, lg with consistent proportions
- **Loading state**: Animated spinner inside slider
- **Label & Description**: Optional text content
- **Keyboard navigation**: Space key toggle support
- **Disabled state**: Visual and functional disabling
- **Accessible**: Proper ARIA role and attributes
- **Smooth animation**: CSS transitions for state changes

## Usage

\`\`\`tsx
import { Switch } from 'notebook-ui';

const [enabled, setEnabled] = useState(false);

<Switch
  checked={enabled}
  onChange={setEnabled}
  label="Enable notifications"
  description="Receive email notifications for updates"
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Switch checked state (on/off)',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      description: 'Callback when switch state changes',
      table: {
        type: { summary: '(checked: boolean) => void' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text next to switch',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'Additional description text below label',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Switch size',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner (disables interaction)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the switch',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} />;
  },
};

export const WithLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} label="Enable notifications" />;
  },
};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Switch checked={checked} onChange={setChecked} label="Enabled feature" />;
  },
};

export const Disabled: Story = {
  render: () => {
    return <Switch checked={false} onChange={() => {}} disabled label="Disabled switch" />;
  },
};

export const DisabledChecked: Story = {
  render: () => {
    return <Switch checked={true} onChange={() => {}} disabled label="Disabled (checked)" />;
  },
};

export const Loading: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} loading label="Saving..." />;
  },
};

export const LoadingChecked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Switch checked={checked} onChange={setChecked} loading label="Updating..." />;
  },
};

export const Small: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} size="sm" label="Small switch" />;
  },
};

export const Large: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} size="lg" label="Large switch" />;
  },
};

export const WithDescription: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
        <Switch checked={checked} onChange={setChecked} />
        <div>
          <div style={{ fontWeight: 500, marginBottom: '0.25rem' }}>Email Notifications</div>
          <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
            Receive email notifications for important updates
          </div>
        </div>
      </div>
    );
  },
};

export const AsyncToggle: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = async (newValue: boolean) => {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setChecked(newValue);
      setLoading(false);
    };

    return (
      <Switch
        checked={checked}
        onChange={handleChange}
        loading={loading}
        label="Async toggle (1.5s delay)"
      />
    );
  },
};

export const SettingsGroup: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [emails, setEmails] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [analytics, setAnalytics] = useState(true);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
        <div>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>
            Notification Settings
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 500 }}>Push Notifications</div>
                <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Receive push notifications on your device
                </div>
              </div>
              <Switch checked={notifications} onChange={setNotifications} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 500 }}>Email Notifications</div>
                <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Get notified via email for important updates
                </div>
              </div>
              <Switch checked={emails} onChange={setEmails} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 500 }}>Marketing Emails</div>
                <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Receive updates about new features and promotions
                </div>
              </div>
              <Switch checked={marketing} onChange={setMarketing} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 500 }}>Analytics</div>
                <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Help us improve by sharing anonymous usage data
                </div>
              </div>
              <Switch checked={analytics} onChange={setAnalytics} />
            </div>
          </div>
        </div>
      </div>
    );
  },
};
