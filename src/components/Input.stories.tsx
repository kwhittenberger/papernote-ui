import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Input from './Input';
import { Search, Mail, Lock, User } from 'lucide-react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('john@example.com');
    return (
      <Input
        label="Email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const WithPrefixIcon: Story = {
  args: {
    label: 'Search',
    prefixIcon: <Search className="h-5 w-5" />,
    placeholder: 'Search...',
  },
};

export const WithSuffixIcon: Story = {
  args: {
    label: 'Email',
    type: 'email',
    suffixIcon: <Mail className="h-5 w-5" />,
    placeholder: 'you@example.com',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    helperText: 'Choose a unique username (3-20 characters)',
    placeholder: 'Enter username',
  },
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    required: true,
    placeholder: 'Enter your full name',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    value: 'Cannot edit this',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read Only',
    value: 'This is read-only',
    readOnly: true,
  },
};

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState('Clear me!');
    return (
      <Input
        label="Clearable Input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        clearable
        onClear={() => setValue('')}
      />
    );
  },
};

export const Loading: Story = {
  args: {
    label: 'Checking availability...',
    value: 'myusername',
    loading: true,
  },
};

export const Password: Story = {
  render: () => {
    const [password, setPassword] = useState('');
    return (
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        prefixIcon={<Lock className="h-5 w-5" />}
        placeholder="Enter password"
      />
    );
  },
};

export const WithPrefix: Story = {
  args: {
    label: 'Website',
    prefix: 'https://',
    placeholder: 'example.com',
  },
};

export const WithSuffix: Story = {
  args: {
    label: 'Domain',
    suffix: '.com',
    placeholder: 'example',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Input',
    size: 'sm',
    placeholder: 'Small size',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Input',
    size: 'lg',
    placeholder: 'Large size',
  },
};

export const LoginForm: Story = {
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          prefixIcon={<Mail className="h-5 w-5" />}
          placeholder="you@example.com"
          required
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          prefixIcon={<Lock className="h-5 w-5" />}
          placeholder="Enter password"
          required
        />
      </div>
    );
  },
};
