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

// Mobile Stories
export const MobileBottomSheet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'On mobile viewports, Select automatically uses a BottomSheet for option selection. Resize your browser or use mobile viewport to see the effect.',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ padding: '16px' }}>
        <Select
          label="Mobile Select"
          options={countryOptions}
          value={value}
          onChange={setValue}
          mobileMode="auto"
          searchable
          placeholder="Tap to select..."
        />
      </div>
    );
  },
};

export const MobileSearchable: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => {
    const [value, setValue] = useState('');
    // Generate many options to demonstrate mobile search
    const manyOptions = Array.from({ length: 50 }, (_, i) => ({
      value: `option-${i}`,
      label: `Option ${i + 1}`,
    }));
    return (
      <div style={{ padding: '16px' }}>
        <Select
          label="Searchable Mobile"
          options={manyOptions}
          value={value}
          onChange={setValue}
          mobileMode="auto"
          searchable
          placeholder="Search options..."
          helperText="Opens as bottom sheet with search on mobile"
        />
      </div>
    );
  },
};

export const MobileNative: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Uses the native OS select picker on mobile for familiar UX.',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ padding: '16px' }}>
        <Select
          label="Native Select"
          options={basicOptions}
          value={value}
          onChange={setValue}
          mobileMode="native"
          placeholder="Uses native picker on mobile..."
        />
      </div>
    );
  },
};

export const MobileLargeSize: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Large size provides 44px touch targets. On mobile, md size auto-upgrades to lg.',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ padding: '16px' }}>
        <Select
          label="Touch-Friendly Select"
          options={basicOptions}
          value={value}
          onChange={setValue}
          size="lg"
          clearable
          placeholder="Large touch target..."
        />
      </div>
    );
  },
};

export const MobileWithGroups: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => {
    const [value, setValue] = useState('');
    const groupedOptions = [
      {
        label: 'Fruits',
        options: [
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana' },
          { value: 'orange', label: 'Orange' },
        ],
      },
      {
        label: 'Vegetables',
        options: [
          { value: 'carrot', label: 'Carrot' },
          { value: 'broccoli', label: 'Broccoli' },
          { value: 'spinach', label: 'Spinach' },
        ],
      },
    ];
    return (
      <div style={{ padding: '16px' }}>
        <Select
          label="Grouped Options"
          groups={groupedOptions}
          value={value}
          onChange={setValue}
          mobileMode="auto"
          searchable
          placeholder="Select food..."
        />
      </div>
    );
  },
};

export const MobileWithIcons: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => {
    const [value, setValue] = useState('');
    const iconOptions = [
      { value: 'location1', label: 'New York', icon: <MapPin className="w-4 h-4" /> },
      { value: 'location2', label: 'Los Angeles', icon: <MapPin className="w-4 h-4" /> },
      { value: 'location3', label: 'Chicago', icon: <MapPin className="w-4 h-4" /> },
      { value: 'user1', label: 'John Doe', icon: <User className="w-4 h-4" /> },
      { value: 'user2', label: 'Jane Smith', icon: <User className="w-4 h-4" /> },
    ];
    return (
      <div style={{ padding: '16px' }}>
        <Select
          label="With Icons"
          options={iconOptions}
          value={value}
          onChange={setValue}
          mobileMode="auto"
          clearable
          placeholder="Select option..."
        />
      </div>
    );
  },
};
