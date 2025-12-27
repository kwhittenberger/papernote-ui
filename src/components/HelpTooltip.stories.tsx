import type { Meta, StoryObj } from '@storybook/react';
import HelpTooltip from './HelpTooltip';
import Input from './Input';
import Stack from './Stack';
import Text from './Text';

const meta = {
  title: 'Feedback/HelpTooltip',
  component: HelpTooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A convenience component that combines a help icon with a tooltip for providing contextual help.

## Features
- **Two icon variants**: HelpCircle (?) or Info (i) icon
- **Three sizes**: sm, md, lg
- **Accessible**: Includes proper ARIA labels and keyboard focus
- **Hover states**: Subtle color transition on hover

## Usage

\`\`\`tsx
import { HelpTooltip, Text, Stack } from 'notebook-ui';

// Basic usage
<Stack direction="horizontal" gap="sm" align="center">
  <Text weight="medium">Email</Text>
  <HelpTooltip content="We'll never share your email" />
</Stack>

// With info icon variant
<HelpTooltip content="Additional information" icon="info" />

// Different sizes
<HelpTooltip content="Small help" size="sm" />
<HelpTooltip content="Large help" size="lg" />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'The help text to display in the tooltip',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    icon: {
      control: 'select',
      options: ['help', 'info'],
      description: 'Icon variant to display',
      table: {
        type: { summary: 'help | info' },
        defaultValue: { summary: 'help' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the icon',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the tooltip relative to the icon',
      table: {
        type: { summary: 'top | bottom | left | right' },
        defaultValue: { summary: 'top' },
      },
    },
  },
} satisfies Meta<typeof HelpTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is helpful information',
  },
};

export const HelpIcon: Story = {
  args: {
    content: 'Need help? This explains the feature.',
    icon: 'help',
  },
};

export const InfoIcon: Story = {
  args: {
    content: 'Additional information about this field.',
    icon: 'info',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="horizontal" gap="lg" align="center">
      <Stack direction="horizontal" gap="xs" align="center">
        <Text size="sm">Small</Text>
        <HelpTooltip content="Small size tooltip" size="sm" />
      </Stack>
      <Stack direction="horizontal" gap="xs" align="center">
        <Text size="sm">Medium</Text>
        <HelpTooltip content="Medium size tooltip" size="md" />
      </Stack>
      <Stack direction="horizontal" gap="xs" align="center">
        <Text size="sm">Large</Text>
        <HelpTooltip content="Large size tooltip" size="lg" />
      </Stack>
    </Stack>
  ),
};

export const Positions: Story = {
  render: () => (
    <Stack direction="horizontal" gap="xl" align="center">
      <Stack direction="horizontal" gap="xs" align="center">
        <Text size="sm">Top</Text>
        <HelpTooltip content="Tooltip on top" position="top" />
      </Stack>
      <Stack direction="horizontal" gap="xs" align="center">
        <Text size="sm">Bottom</Text>
        <HelpTooltip content="Tooltip on bottom" position="bottom" />
      </Stack>
      <Stack direction="horizontal" gap="xs" align="center">
        <Text size="sm">Left</Text>
        <HelpTooltip content="Tooltip on left" position="left" />
      </Stack>
      <Stack direction="horizontal" gap="xs" align="center">
        <Text size="sm">Right</Text>
        <HelpTooltip content="Tooltip on right" position="right" />
      </Stack>
    </Stack>
  ),
};

export const WithFormField: Story = {
  render: () => (
    <Stack gap="md" style={{ width: '300px' }}>
      <Stack gap="xs">
        <Stack direction="horizontal" gap="xs" align="center">
          <Text as="label" size="sm" weight="medium">
            Email Address
          </Text>
          <HelpTooltip
            content="We'll never share your email with anyone else"
            size="sm"
          />
        </Stack>
        <Input placeholder="you@example.com" />
      </Stack>
      <Stack gap="xs">
        <Stack direction="horizontal" gap="xs" align="center">
          <Text as="label" size="sm" weight="medium">
            API Key
          </Text>
          <HelpTooltip
            content="Your API key is used for authentication. Keep it secret!"
            icon="info"
            size="sm"
          />
        </Stack>
        <Input type="password" placeholder="sk-..." />
      </Stack>
    </Stack>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <Text>
      This feature requires a subscription
      <HelpTooltip
        content="Premium subscriptions include unlimited access to all features"
        size="sm"
        className="ml-1"
      />
    </Text>
  ),
};

export const LongContent: Story = {
  args: {
    content:
      'This is a longer help message that provides more detailed information about the feature. It can span multiple lines if needed.',
    position: 'right',
  },
};
