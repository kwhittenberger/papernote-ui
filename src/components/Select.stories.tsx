import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Select from './Select';
import { MapPin, User } from 'lucide-react';

const meta = {
  title: 'Forms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Dropdown select component with search, groups, virtual scrolling, and creation features.

## Features
- **Search**: Filter options with built-in search
- **Groups**: Organize options with section headers
- **Virtual scrolling**: Handle 1000+ options efficiently
- **Clearable**: X button to reset selection
- **Creatable**: Allow users to create new options
- **Loading state**: Spinner for async data loading
- **Icons**: Display icons alongside option labels
- **Descriptions**: Show additional context per option
- **Multiple**: Multi-select support
- **Keyboard navigation**: Full arrow key and Enter support

## Usage

\`\`\`tsx
import { Select } from 'notebook-ui';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
];

<Select
  label="Choose option"
  options={options}
  value={selected}
  onChange={setSelected}
  searchable
  clearable
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
      description: 'Label text above select',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option selected',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Select size affecting height and padding',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    searchable: {
      control: 'boolean',
      description: 'Enable search/filter functionality',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button to reset selection',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the select',
      table: {
        type: { summary: 'boolean' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Helper text below select',
      table: {
        type: { summary: 'string' },
      },
    },
    error: {
      control: 'text',
      description: 'Error message (displayed below select in red)',
      table: {
        type: { summary: 'string' },
      },
    },
    creatable: {
      control: 'boolean',
      description: 'Allow creating new options (requires searchable=true)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    virtualized: {
      control: 'boolean',
      description: 'Enable virtual scrolling for large option lists (100+ items)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    virtualHeight: {
      control: 'text',
      description: 'Height of dropdown when virtualized',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '300px' },
      },
    },
    virtualItemHeight: {
      control: 'number',
      description: 'Height of each option row in pixels',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '42' },
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
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'watermelon', label: 'Watermelon' },
];

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'cn', label: 'China' },
];

const roleOptions = [
  { value: 'admin', label: 'Administrator', description: 'Full system access' },
  { value: 'manager', label: 'Manager', description: 'Manage team and projects' },
  { value: 'user', label: 'User', description: 'Standard access' },
  { value: 'guest', label: 'Guest', description: 'Limited access' },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Select
        label="Select a Fruit"
        options={basicOptions}
        value={value}
        onChange={setValue}
        placeholder="Choose a fruit..."
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('banana');
    return (
      <Select
        label="Favorite Fruit"
        options={basicOptions}
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
      <Select
        label="Country"
        options={countryOptions}
        value={value}
        onChange={setValue}
        required
        placeholder="Select your country..."
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Select
        label="Country"
        options={countryOptions}
        value={value}
        onChange={setValue}
        error="Please select a country"
      />
    );
  },
};

export const WithHelperText: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Select
        label="Country"
        options={countryOptions}
        value={value}
        onChange={setValue}
        helperText="Select your country of residence"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <Select
        label="Disabled Select"
        options={basicOptions}
        value="apple"
        onChange={() => {}}
        disabled
      />
    );
  },
};

export const Searchable: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Select
        label="Search Countries"
        options={countryOptions}
        value={value}
        onChange={setValue}
        searchable
        placeholder="Search for a country..."
      />
    );
  },
};

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState('us');
    return (
      <Select
        label="Country"
        options={countryOptions}
        value={value}
        onChange={setValue}
        clearable
        placeholder="Select a country..."
      />
    );
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Select
        label="User Role"
        options={roleOptions}
        value={value}
        onChange={setValue}
        placeholder="Select a role..."
      />
    );
  },
};

export const Small: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Select
        label="Small Select"
        options={basicOptions}
        value={value}
        onChange={setValue}
        size="sm"
        placeholder="Choose..."
      />
    );
  },
};

export const Large: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Select
        label="Large Select"
        options={basicOptions}
        value={value}
        onChange={setValue}
        size="lg"
        placeholder="Choose..."
      />
    );
  },
};

export const Loading: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Select
        label="Loading Select"
        options={[]}
        value={value}
        onChange={setValue}
        loading
        placeholder="Loading options..."
      />
    );
  },
};

export const MultiSelect: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([]);
    return (
      <Select
        label="Select Fruits"
        options={basicOptions}
        value={values}
        onChange={setValues}
        multiple
        placeholder="Select one or more fruits..."
      />
    );
  },
};
