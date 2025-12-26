import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';
import Stack from './Stack';

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Text component for consistent typography across the application.

## Features
- **Semantic elements**: Render as p, span, div, h1-h6, or label
- **Size scale**: xs, sm, base, lg, xl, 2xl
- **Weight options**: normal, medium, semibold, bold
- **Color variants**: primary, secondary, muted, accent, error, success, warning
- **Text alignment**: left, center, right
- **Truncation**: Single line truncate or multi-line clamp (1-6 lines)
- **Transform**: uppercase, lowercase, capitalize

## Usage

\`\`\`tsx
import { Text } from 'notebook-ui';

<Text size="lg" weight="semibold" color="primary">
  Hello World
</Text>

<Text color="warning">Warning message</Text>

<Text truncate>This text will be truncated...</Text>

<Text lineClamp={2}>
  This text will be clamped to 2 lines with ellipsis...
</Text>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label'],
      description: 'HTML element to render',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'],
      description: 'Font size',
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'muted', 'accent', 'error', 'success', 'warning'],
      description: 'Text color',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
    truncate: {
      control: 'boolean',
      description: 'Truncate text with ellipsis (single line)',
    },
    lineClamp: {
      control: 'select',
      options: [undefined, 1, 2, 3, 4, 5, 6],
      description: 'Clamp text to specific number of lines',
    },
    transform: {
      control: 'select',
      options: [undefined, 'uppercase', 'lowercase', 'capitalize', 'normal'],
      description: 'Text transform',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing="sm">
      <Text size="xs">Extra Small (xs) - 12px</Text>
      <Text size="sm">Small (sm) - 14px</Text>
      <Text size="base">Base (base) - 16px</Text>
      <Text size="lg">Large (lg) - 18px</Text>
      <Text size="xl">Extra Large (xl) - 20px</Text>
      <Text size="2xl">2X Large (2xl) - 24px</Text>
    </Stack>
  ),
};

export const Weights: Story = {
  render: () => (
    <Stack spacing="sm">
      <Text weight="normal">Normal weight - 400</Text>
      <Text weight="medium">Medium weight - 500</Text>
      <Text weight="semibold">Semibold weight - 600</Text>
      <Text weight="bold">Bold weight - 700</Text>
    </Stack>
  ),
};

/**
 * All available color variants including the new `warning` color.
 */
export const Colors: Story = {
  render: () => (
    <Stack spacing="sm">
      <Text color="primary">Primary - Default text color</Text>
      <Text color="secondary">Secondary - Slightly muted</Text>
      <Text color="muted">Muted - Subdued text</Text>
      <Text color="accent">Accent - Branded color</Text>
      <Text color="success">Success - Positive feedback</Text>
      <Text color="warning">Warning - Caution messages</Text>
      <Text color="error">Error - Error messages</Text>
    </Stack>
  ),
};

/**
 * The warning color is useful for displaying caution messages,
 * threshold alerts, or status indicators that need attention.
 */
export const WarningColor: Story = {
  render: () => (
    <Stack spacing="md">
      <Text color="warning" size="lg" weight="semibold">
        Warning: Your subscription expires in 3 days
      </Text>
      <Text color="warning">
        Storage usage is at 85% capacity
      </Text>
      <Text color="warning" size="sm">
        This action cannot be undone
      </Text>
    </Stack>
  ),
};

export const Alignment: Story = {
  render: () => (
    <Stack spacing="sm" style={{ width: '300px' }}>
      <Text align="left">Left aligned text</Text>
      <Text align="center">Center aligned text</Text>
      <Text align="right">Right aligned text</Text>
    </Stack>
  ),
};

export const Truncate: Story = {
  render: () => (
    <div style={{ width: '200px' }}>
      <Text truncate>
        This is a very long text that will be truncated with an ellipsis when it overflows the container.
      </Text>
    </div>
  ),
};

export const LineClamp: Story = {
  render: () => (
    <Stack spacing="lg">
      <div style={{ width: '300px' }}>
        <Text size="sm" color="muted" weight="medium">1 Line Clamp:</Text>
        <Text lineClamp={1}>
          This is a very long text that will be clamped to one line with an ellipsis at the end.
        </Text>
      </div>
      <div style={{ width: '300px' }}>
        <Text size="sm" color="muted" weight="medium">2 Line Clamp:</Text>
        <Text lineClamp={2}>
          This is a very long text that will be clamped to two lines with an ellipsis at the end. 
          It demonstrates how multi-line truncation works with the lineClamp prop.
        </Text>
      </div>
      <div style={{ width: '300px' }}>
        <Text size="sm" color="muted" weight="medium">3 Line Clamp:</Text>
        <Text lineClamp={3}>
          This is a very long text that will be clamped to three lines with an ellipsis at the end.
          It demonstrates how multi-line truncation works with the lineClamp prop. This is useful
          for card descriptions or preview text that needs to fit a specific space.
        </Text>
      </div>
    </Stack>
  ),
};

export const Transform: Story = {
  render: () => (
    <Stack spacing="sm">
      <Text transform="uppercase">uppercase text</Text>
      <Text transform="lowercase">LOWERCASE TEXT</Text>
      <Text transform="capitalize">capitalize each word</Text>
      <Text transform="normal">Normal Text (no transform)</Text>
    </Stack>
  ),
};

export const SemanticElements: Story = {
  render: () => (
    <Stack spacing="sm">
      <Text as="h1" size="2xl" weight="bold">Heading 1</Text>
      <Text as="h2" size="xl" weight="semibold">Heading 2</Text>
      <Text as="h3" size="lg" weight="semibold">Heading 3</Text>
      <Text as="p">Paragraph text</Text>
      <Text as="span" color="muted">Inline span text</Text>
      <Text as="label" weight="medium">Label text</Text>
    </Stack>
  ),
};

export const CombinedStyles: Story = {
  render: () => (
    <Stack spacing="md">
      <Text as="h1" size="2xl" weight="bold" color="primary">
        Dashboard Overview
      </Text>
      <Text color="secondary">
        Welcome back! Here's what's happening with your projects today.
      </Text>
      <Text size="sm" color="muted">
        Last updated: 5 minutes ago
      </Text>
      <Text color="success" weight="medium">
        All systems operational
      </Text>
      <Text color="warning" weight="medium">
        2 items need attention
      </Text>
      <Text color="error" weight="medium">
        1 critical error detected
      </Text>
    </Stack>
  ),
};

export const StatusMessages: Story = {
  render: () => (
    <Stack spacing="sm">
      <Text color="success" size="sm">
        ✓ Changes saved successfully
      </Text>
      <Text color="warning" size="sm">
        ⚠ Your session will expire in 5 minutes
      </Text>
      <Text color="error" size="sm">
        ✗ Failed to connect to server
      </Text>
      <Text color="muted" size="sm">
        Last sync: 2 hours ago
      </Text>
    </Stack>
  ),
};
