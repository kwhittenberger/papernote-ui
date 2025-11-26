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

// Mobile-optimized stories
export const MobileLargeTouch: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Large size (lg) input provides 44px minimum touch target for mobile devices, meeting Apple HIG guidelines.',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Input
        label="Mobile-Friendly Input"
        size="lg"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="44px touch target"
        helperText="Large size for easy touch interaction"
      />
    );
  },
};

export const MobilePhoneInput: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Phone input with inputMode="tel" shows numeric keyboard on mobile devices.',
      },
    },
  },
  render: () => {
    const [phone, setPhone] = useState('');
    return (
      <Input
        label="Phone Number"
        type="tel"
        inputMode="tel"
        enterKeyHint="done"
        size="lg"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="(555) 123-4567"
        helperText="Shows numeric keyboard on mobile"
      />
    );
  },
};

export const MobileEmailInput: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Email input with inputMode="email" shows email-optimized keyboard with @ and .com buttons.',
      },
    },
  },
  render: () => {
    const [email, setEmail] = useState('');
    return (
      <Input
        label="Email Address"
        type="email"
        inputMode="email"
        enterKeyHint="next"
        size="lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        prefixIcon={<Mail className="h-5 w-5" />}
        placeholder="you@example.com"
        helperText="Shows email keyboard with @ button"
      />
    );
  },
};

export const MobileSearchInput: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Search input with inputMode="search" and enterKeyHint="search" shows search-optimized keyboard.',
      },
    },
  },
  render: () => {
    const [search, setSearch] = useState('');
    return (
      <Input
        label="Search"
        type="search"
        inputMode="search"
        enterKeyHint="search"
        size="lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        prefixIcon={<Search className="h-5 w-5" />}
        placeholder="Search products..."
        clearable
        onClear={() => setSearch('')}
        helperText="Shows search keyboard with Search button"
      />
    );
  },
};

export const MobileNumericInput: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Numeric input with inputMode="decimal" shows decimal number keyboard for currency/amounts.',
      },
    },
  },
  render: () => {
    const [amount, setAmount] = useState('');
    return (
      <Input
        label="Amount"
        type="text"
        inputMode="decimal"
        enterKeyHint="done"
        size="lg"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        prefix="$"
        placeholder="0.00"
        helperText="Shows decimal keyboard on mobile"
      />
    );
  },
};

export const MobileLoginForm: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Complete mobile login form with appropriate keyboard types and enter key hints for smooth form flow.',
      },
    },
  },
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Sign In</h2>
        <Input
          label="Email"
          type="email"
          inputMode="email"
          enterKeyHint="next"
          size="lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          prefixIcon={<Mail className="h-5 w-5" />}
          placeholder="you@example.com"
          required
        />
        <Input
          label="Password"
          type="password"
          enterKeyHint="done"
          size="lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          prefixIcon={<Lock className="h-5 w-5" />}
          placeholder="Enter password"
          showPasswordToggle
          required
        />
        <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.5rem' }}>
          Tap inputs to see mobile keyboard optimizations
        </p>
      </div>
    );
  },
};

export const MobileURLInput: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'URL input with inputMode="url" shows URL-optimized keyboard with / and .com buttons.',
      },
    },
  },
  render: () => {
    const [url, setUrl] = useState('');
    return (
      <Input
        label="Website URL"
        type="url"
        inputMode="url"
        enterKeyHint="go"
        size="lg"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        prefix="https://"
        placeholder="example.com"
        helperText="Shows URL keyboard with / and .com"
      />
    );
  },
};
