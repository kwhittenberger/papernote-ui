import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Input from './Input';
import { Search, Mail, Lock, User } from 'lucide-react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Text input component with validation, icons, prefixes/suffixes, and advanced features.

## Features
- **Sizes**: sm, md, lg with consistent height scaling
- **Validation states**: error, success, warning with icons and messages
- **Icons**: prefixIcon and suffixIcon support
- **Prefixes/Suffixes**: Text prefixes (https://) and suffixes (.com)
- **Password toggle**: Built-in show/hide password button
- **Character counter**: Display current/max length
- **Clearable**: X button to clear input value
- **Loading state**: Spinner indicator for async operations
- **Helper text**: Additional context below input

## Usage

\`\`\`tsx
import { Input } from 'notebook-ui';
import { Mail } from 'lucide-react';

<Input
  label="Email"
  type="email"
  prefixIcon={<Mail className="h-5 w-5" />}
  placeholder="you@example.com"
  required
  helperText="We'll never share your email"
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Input label text displayed above the input',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'HTML input type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Input size affecting height and padding',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when input is empty',
      table: {
        type: { summary: 'string' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below input',
      table: {
        type: { summary: 'string' },
      },
    },
    validationState: {
      control: 'select',
      options: ['error', 'success', 'warning', null],
      description: 'Visual validation state with colored border and icon',
      table: {
        type: { summary: 'error | success | warning | null' },
      },
    },
    validationMessage: {
      control: 'text',
      description: 'Validation message (overrides helperText when present)',
      table: {
        type: { summary: 'string' },
      },
    },
    prefixIcon: {
      description: 'Icon displayed inside input before value',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    suffixIcon: {
      description: 'Icon displayed inside input after value',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    prefix: {
      control: 'text',
      description: 'Text prefix displayed inside input before value (e.g., "https://")',
      table: {
        type: { summary: 'string' },
      },
    },
    suffix: {
      control: 'text',
      description: 'Text suffix displayed inside input after value (e.g., ".com")',
      table: {
        type: { summary: 'string' },
      },
    },
    showPasswordToggle: {
      control: 'boolean',
      description: 'Show password visibility toggle (only for type="password")',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    clearable: {
      control: 'boolean',
      description: 'Show clearable button to clear input value',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showCount: {
      control: 'boolean',
      description: 'Show character counter (requires maxLength prop)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length',
      table: {
        type: { summary: 'number' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Mark input as required with red asterisk',
      table: {
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
      table: {
        type: { summary: 'boolean' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Make input read-only',
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
