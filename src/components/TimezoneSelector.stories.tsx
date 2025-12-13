import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import TimezoneSelector, { getLocalTimezone } from './TimezoneSelector';
import Stack from './Stack';
import Text from './Text';

const meta: Meta<typeof TimezoneSelector> = {
  title: 'Forms/TimezoneSelector',
  component: TimezoneSelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A searchable dropdown for selecting IANA timezones, organized by geographic region.

## Features
- **Searchable**: Quickly filter through 80+ timezones by typing
- **Grouped by Region**: Timezones organized into Americas, Europe, Asia, etc.
- **UTC Offset Display**: Shows current UTC offset for each timezone
- **Local Detection**: Use \`getLocalTimezone()\` to detect user's timezone
- **Region Filtering**: Optionally limit to specific geographic regions

## Usage
\`\`\`tsx
import { TimezoneSelector, getLocalTimezone } from 'notebook-ui';

// Basic usage
<TimezoneSelector
  value={timezone}
  onChange={setTimezone}
  label="Timezone"
/>

// With local timezone detection
const [tz, setTz] = useState(getLocalTimezone());
<TimezoneSelector value={tz} onChange={setTz} />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Currently selected timezone (IANA identifier)',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when timezone changes',
    },
    label: {
      control: 'text',
      description: 'Label text above selector',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no timezone selected',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below selector',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the selector',
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    includeUTC: {
      control: 'boolean',
      description: 'Include UTC at the top as a separate option',
    },
    showOffset: {
      control: 'boolean',
      description: 'Show UTC offset in option labels',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the selector',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TimezoneSelector>;

/**
 * Default timezone selector with all standard options.
 */
export const Default: Story = {
  args: {
    label: 'Timezone',
    placeholder: 'Select timezone...',
    includeUTC: true,
    showOffset: true,
  },
  render: (args) => {
    const [value, setValue] = useState<string>('America/New_York');
    return (
      <div style={{ width: '320px' }}>
        <TimezoneSelector
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

/**
 * Demonstrates detecting and using the user's local timezone.
 */
export const WithLocalTimezone: Story = {
  args: {
    label: 'Your Timezone',
    helperText: 'Automatically detected from your browser',
    clearable: true,
  },
  render: (args) => {
    const [value, setValue] = useState<string>(getLocalTimezone());
    return (
      <div style={{ width: '320px' }}>
        <TimezoneSelector
          {...args}
          value={value}
          onChange={setValue}
        />
        <Text size="sm" className="mt-2 text-ink-500">
          Detected: {getLocalTimezone()}
        </Text>
      </div>
    );
  },
};

/**
 * Filter to show only specific geographic regions.
 */
export const FilteredRegions: Story = {
  args: {
    label: 'US/Europe Timezones Only',
    placeholder: 'Select timezone...',
    regions: ['America', 'Europe'],
  },
  render: (args) => {
    const [value, setValue] = useState<string>('');
    return (
      <div style={{ width: '320px' }}>
        <TimezoneSelector
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

/**
 * Without UTC offset display for a cleaner look.
 */
export const WithoutOffset: Story = {
  args: {
    label: 'Timezone',
    showOffset: false,
    includeUTC: false,
  },
  render: (args) => {
    const [value, setValue] = useState<string>('Europe/London');
    return (
      <div style={{ width: '280px' }}>
        <TimezoneSelector
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

/**
 * Different sizes for various use cases.
 */
export const Sizes: Story = {
  render: () => {
    const [small, setSmall] = useState('America/New_York');
    const [medium, setMedium] = useState('America/New_York');
    const [large, setLarge] = useState('America/New_York');
    
    return (
      <Stack gap="lg" style={{ width: '320px' }}>
        <TimezoneSelector
          label="Small"
          size="sm"
          value={small}
          onChange={setSmall}
        />
        <TimezoneSelector
          label="Medium (Default)"
          size="md"
          value={medium}
          onChange={setMedium}
        />
        <TimezoneSelector
          label="Large"
          size="lg"
          value={large}
          onChange={setLarge}
        />
      </Stack>
    );
  },
};

/**
 * Validation and error states.
 */
export const WithValidation: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const hasError = !value;
    
    return (
      <div style={{ width: '320px' }}>
        <TimezoneSelector
          label="Required Timezone"
          value={value}
          onChange={setValue}
          error={hasError ? 'Please select a timezone' : undefined}
          clearable
        />
      </div>
    );
  },
};

/**
 * Disabled state.
 */
export const Disabled: Story = {
  args: {
    label: 'Timezone (Disabled)',
    disabled: true,
  },
  render: (args) => {
    return (
      <div style={{ width: '320px' }}>
        <TimezoneSelector
          {...args}
          value="America/Los_Angeles"
        />
      </div>
    );
  },
};

/**
 * Loading state while fetching timezone data.
 */
export const Loading: Story = {
  args: {
    label: 'Timezone',
    loading: true,
    placeholder: 'Loading timezones...',
  },
  render: (args) => {
    return (
      <div style={{ width: '320px' }}>
        <TimezoneSelector
          {...args}
          value=""
        />
      </div>
    );
  },
};

/**
 * Asia-Pacific regions only for a focused selection.
 */
export const AsiaPacific: Story = {
  args: {
    label: 'Asia-Pacific Timezone',
    regions: ['Asia', 'Australia', 'Pacific'],
    helperText: 'Select a timezone in the Asia-Pacific region',
  },
  render: (args) => {
    const [value, setValue] = useState<string>('Asia/Tokyo');
    return (
      <div style={{ width: '320px' }}>
        <TimezoneSelector
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};
