import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Radio from './Radio';
import { CreditCard, Building2, Wallet, Smartphone } from 'lucide-react';

const meta = {
  title: 'Forms/Radio',
  component: Radio,
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const subscriptionOptions = [
  { value: 'free', label: 'Free', description: 'Basic features for individual use' },
  { value: 'pro', label: 'Pro - $9/month', description: 'Advanced features for professionals' },
  { value: 'team', label: 'Team - $29/month', description: 'Collaboration tools for teams' },
  { value: 'enterprise', label: 'Enterprise', description: 'Custom solutions for large organizations' },
];

const paymentOptions = [
  { value: 'card', label: 'Credit Card', icon: <CreditCard className="h-4 w-4" /> },
  { value: 'bank', label: 'Bank Transfer', icon: <Building2 className="h-4 w-4" /> },
  { value: 'wallet', label: 'Digital Wallet', icon: <Wallet className="h-4 w-4" /> },
  { value: 'mobile', label: 'Mobile Payment', icon: <Smartphone className="h-4 w-4" /> },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Radio
        label="Select an option"
        options={basicOptions}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('option2');
    return (
      <Radio
        label="Choose one"
        options={basicOptions}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <Radio
        label="Layout direction"
        options={basicOptions}
        value={value}
        onChange={setValue}
        orientation="horizontal"
      />
    );
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const [value, setValue] = useState('free');
    return (
      <Radio
        label="Select a plan"
        options={subscriptionOptions}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState('card');
    return (
      <Radio
        label="Payment Method"
        options={paymentOptions}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Radio
        label="Required selection"
        options={basicOptions}
        value={value}
        onChange={setValue}
        error="Please select an option"
      />
    );
  },
};

export const WithHelperText: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Radio
        label="Notification Preference"
        options={[
          { value: 'all', label: 'All notifications' },
          { value: 'important', label: 'Important only' },
          { value: 'none', label: 'None' },
        ]}
        value={value}
        onChange={setValue}
        helperText="Choose how you want to receive notifications"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <Radio
        label="Disabled Radio Group"
        options={basicOptions}
        value="option1"
        onChange={() => {}}
        disabled
      />
    );
  },
};

export const DisabledOption: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <Radio
        label="Some options disabled"
        options={[
          { value: 'option1', label: 'Available Option 1' },
          { value: 'option2', label: 'Unavailable Option', disabled: true },
          { value: 'option3', label: 'Available Option 2' },
          { value: 'option4', label: 'Coming Soon', disabled: true },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Radio
        label="Required field"
        options={basicOptions}
        value={value}
        onChange={setValue}
        required
      />
    );
  },
};

export const SubscriptionForm: Story = {
  render: () => {
    const [plan, setPlan] = useState('pro');
    const [billing, setBilling] = useState('monthly');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Radio
          label="Choose your plan"
          options={subscriptionOptions}
          value={plan}
          onChange={setPlan}
        />
        <Radio
          label="Billing cycle"
          options={[
            { value: 'monthly', label: 'Monthly', description: 'Pay month-to-month' },
            { value: 'annual', label: 'Annual', description: 'Save 20% with annual billing' },
          ]}
          value={billing}
          onChange={setBilling}
        />
        <div style={{ padding: '1rem', backgroundColor: '#f5f5f4', borderRadius: '0.375rem' }}>
          <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Summary</div>
          <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
            Plan: {subscriptionOptions.find(o => o.value === plan)?.label}<br />
            Billing: {billing === 'monthly' ? 'Monthly' : 'Annual (20% savings)'}
          </div>
        </div>
      </div>
    );
  },
};
