import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Switch from './Switch';

const meta = {
  title: 'Forms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ minWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
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
