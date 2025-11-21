import type { Meta, StoryObj } from '@storybook/react';
import Stack from './Stack';
import Card from './Card';
import Button from './Button';

const meta = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    spacing: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around'],
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ children, color = '#3b82f6' }: { children: React.ReactNode; color?: string }) => (
  <div style={{
    padding: '1rem',
    backgroundColor: color,
    color: 'white',
    borderRadius: '0.375rem',
    textAlign: 'center',
    fontWeight: 500,
  }}>
    {children}
  </div>
);

export const Vertical: Story = {
  render: () => (
    <Stack direction="vertical" spacing="md">
      <Box>Item 1</Box>
      <Box color="#8b5cf6">Item 2</Box>
      <Box color="#10b981">Item 3</Box>
    </Stack>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="md">
      <Box>Item 1</Box>
      <Box color="#8b5cf6">Item 2</Box>
      <Box color="#10b981">Item 3</Box>
    </Stack>
  ),
};

export const NoSpacing: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="none">
      <Box>No</Box>
      <Box color="#8b5cf6">Spacing</Box>
      <Box color="#10b981">Here</Box>
    </Stack>
  ),
};

export const ExtraSmallSpacing: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="xs">
      <Box>XS</Box>
      <Box color="#8b5cf6">Spacing</Box>
    </Stack>
  ),
};

export const SmallSpacing: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="sm">
      <Box>SM</Box>
      <Box color="#8b5cf6">Spacing</Box>
    </Stack>
  ),
};

export const LargeSpacing: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="lg">
      <Box>LG</Box>
      <Box color="#8b5cf6">Spacing</Box>
    </Stack>
  ),
};

export const ExtraLargeSpacing: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="xl">
      <Box>XL</Box>
      <Box color="#8b5cf6">Spacing</Box>
    </Stack>
  ),
};

export const AlignStart: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="md" align="start">
      <Box>Small</Box>
      <div style={{ padding: '2rem 1rem', backgroundColor: '#8b5cf6', color: 'white', borderRadius: '0.375rem' }}>Tall</div>
      <Box color="#10b981">Small</Box>
    </Stack>
  ),
};

export const AlignCenter: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="md" align="center">
      <Box>Small</Box>
      <div style={{ padding: '2rem 1rem', backgroundColor: '#8b5cf6', color: 'white', borderRadius: '0.375rem' }}>Tall</div>
      <Box color="#10b981">Small</Box>
    </Stack>
  ),
};

export const AlignEnd: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="md" align="end">
      <Box>Small</Box>
      <div style={{ padding: '2rem 1rem', backgroundColor: '#8b5cf6', color: 'white', borderRadius: '0.375rem' }}>Tall</div>
      <Box color="#10b981">Small</Box>
    </Stack>
  ),
};

export const AlignStretch: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="md" align="stretch" style={{ height: '150px' }}>
      <Box>Stretched</Box>
      <Box color="#8b5cf6">Items</Box>
      <Box color="#10b981">Equal Height</Box>
    </Stack>
  ),
};

export const JustifyStart: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="md" justify="start" style={{ width: '100%' }}>
      <Box>Start</Box>
      <Box color="#8b5cf6">Aligned</Box>
    </Stack>
  ),
};

export const JustifyCenter: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="md" justify="center" style={{ width: '100%' }}>
      <Box>Center</Box>
      <Box color="#8b5cf6">Aligned</Box>
    </Stack>
  ),
};

export const JustifyEnd: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="md" justify="end" style={{ width: '100%' }}>
      <Box>End</Box>
      <Box color="#8b5cf6">Aligned</Box>
    </Stack>
  ),
};

export const JustifyBetween: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="md" justify="between" style={{ width: '100%' }}>
      <Box>Space</Box>
      <Box color="#8b5cf6">Between</Box>
      <Box color="#10b981">Items</Box>
    </Stack>
  ),
};

export const JustifyAround: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="md" justify="around" style={{ width: '100%' }}>
      <Box>Space</Box>
      <Box color="#8b5cf6">Around</Box>
      <Box color="#10b981">Items</Box>
    </Stack>
  ),
};

export const ButtonGroup: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="sm">
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="ghost">Reset</Button>
    </Stack>
  ),
};

export const FormLayout: Story = {
  render: () => (
    <Stack direction="vertical" spacing="lg" style={{ maxWidth: '400px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
          Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          style={{
            width: '100%',
            padding: '0.5rem 0.75rem',
            border: '1px solid #e5e5e5',
            borderRadius: '0.375rem',
          }}
        />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
          Email
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          style={{
            width: '100%',
            padding: '0.5rem 0.75rem',
            border: '1px solid #e5e5e5',
            borderRadius: '0.375rem',
          }}
        />
      </div>
      <Stack direction="horizontal" spacing="sm" justify="end">
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Submit</Button>
      </Stack>
    </Stack>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="md" style={{ flexWrap: 'wrap' }}>
      {[1, 2, 3].map(i => (
        <Card key={i} style={{ width: '200px' }}>
          <div style={{ padding: '1rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Card {i}</h3>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Card content</p>
          </div>
        </Card>
      ))}
    </Stack>
  ),
};

export const NestedStacks: Story = {
  render: () => (
    <Stack direction="vertical" spacing="lg">
      <Stack direction="horizontal" spacing="md" justify="between" align="center">
        <h2 style={{ margin: 0 }}>Dashboard</h2>
        <Button variant="primary">New Item</Button>
      </Stack>
      <Stack direction="horizontal" spacing="md">
        <Box>Stat 1</Box>
        <Box color="#8b5cf6">Stat 2</Box>
        <Box color="#10b981">Stat 3</Box>
      </Stack>
    </Stack>
  ),
};
