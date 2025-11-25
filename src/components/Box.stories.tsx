import type { Meta, StoryObj } from '@storybook/react';
import { useRef, useEffect, useState } from 'react';
import { Box } from './Box';
import Stack from './Stack';
import Text from './Text';
import Button from './Button';

const meta = {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Box is a generic container component with design system spacing and borders.

## Features
- **Padding**: none, xs, sm, md, lg, xl (with directional variants)
- **Margin**: none, xs, sm, md, lg, xl, auto (with directional variants)
- **Border**: none, top, bottom, left, right, all
- **Border color**: default, primary, accent
- **Border radius**: none, sm, md, lg, xl, full
- **Width/Height**: auto, full, fit, screen
- **Ref forwarding**: Supports refs for DOM access

## Usage

\`\`\`tsx
import { Box } from 'notebook-ui';

// Basic container with padding
<Box padding="md">
  Content here
</Box>

// With border and rounded corners
<Box padding="lg" border="all" rounded="md">
  Card-like container
</Box>

// With ref for DOM access
const boxRef = useRef<HTMLDivElement>(null);
<Box ref={boxRef} padding="md">
  Measurable content
</Box>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Padding on all sides',
    },
    paddingTop: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    paddingBottom: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    paddingLeft: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    paddingRight: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    margin: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'auto'],
      description: 'Margin on all sides',
    },
    marginTop: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'auto'],
    },
    marginBottom: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'auto'],
    },
    marginLeft: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'auto'],
    },
    marginRight: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'auto'],
    },
    border: {
      control: 'select',
      options: ['none', 'top', 'bottom', 'left', 'right', 'all'],
      description: 'Border style',
    },
    borderColor: {
      control: 'select',
      options: ['default', 'primary', 'accent'],
      description: 'Border color',
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Border radius',
    },
    width: {
      control: 'select',
      options: [undefined, 'auto', 'full', 'fit', 'screen'],
      description: 'Width',
    },
    height: {
      control: 'select',
      options: [undefined, 'auto', 'full', 'screen'],
      description: 'Height',
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    padding: 'md',
    children: 'Basic box with medium padding',
  },
};

export const Padding: Story = {
  render: () => (
    <Stack spacing="md">
      <Box padding="xs" className="bg-paper-100">
        <Text size="sm">padding="xs"</Text>
      </Box>
      <Box padding="sm" className="bg-paper-100">
        <Text size="sm">padding="sm"</Text>
      </Box>
      <Box padding="md" className="bg-paper-100">
        <Text size="sm">padding="md"</Text>
      </Box>
      <Box padding="lg" className="bg-paper-100">
        <Text size="sm">padding="lg"</Text>
      </Box>
      <Box padding="xl" className="bg-paper-100">
        <Text size="sm">padding="xl"</Text>
      </Box>
    </Stack>
  ),
};

export const DirectionalPadding: Story = {
  render: () => (
    <Stack spacing="md">
      <Box paddingTop="lg" className="bg-paper-100">
        <Text size="sm">paddingTop="lg"</Text>
      </Box>
      <Box paddingBottom="lg" className="bg-paper-100">
        <Text size="sm">paddingBottom="lg"</Text>
      </Box>
      <Box paddingLeft="lg" className="bg-paper-100">
        <Text size="sm">paddingLeft="lg"</Text>
      </Box>
      <Box paddingRight="lg" className="bg-paper-100">
        <Text size="sm">paddingRight="lg"</Text>
      </Box>
    </Stack>
  ),
};

export const WithBorder: Story = {
  render: () => (
    <Stack spacing="md">
      <Box padding="md" border="all">
        <Text size="sm">border="all"</Text>
      </Box>
      <Box padding="md" border="top">
        <Text size="sm">border="top"</Text>
      </Box>
      <Box padding="md" border="bottom">
        <Text size="sm">border="bottom"</Text>
      </Box>
      <Box padding="md" border="left">
        <Text size="sm">border="left"</Text>
      </Box>
      <Box padding="md" border="right">
        <Text size="sm">border="right"</Text>
      </Box>
    </Stack>
  ),
};

export const BorderColors: Story = {
  render: () => (
    <Stack spacing="md">
      <Box padding="md" border="all" borderColor="default">
        <Text size="sm">borderColor="default"</Text>
      </Box>
      <Box padding="md" border="all" borderColor="primary">
        <Text size="sm">borderColor="primary"</Text>
      </Box>
      <Box padding="md" border="all" borderColor="accent">
        <Text size="sm">borderColor="accent"</Text>
      </Box>
    </Stack>
  ),
};

export const Rounded: Story = {
  render: () => (
    <Stack spacing="md">
      <Box padding="md" border="all" rounded="none">
        <Text size="sm">rounded="none"</Text>
      </Box>
      <Box padding="md" border="all" rounded="sm">
        <Text size="sm">rounded="sm"</Text>
      </Box>
      <Box padding="md" border="all" rounded="md">
        <Text size="sm">rounded="md"</Text>
      </Box>
      <Box padding="md" border="all" rounded="lg">
        <Text size="sm">rounded="lg"</Text>
      </Box>
      <Box padding="md" border="all" rounded="xl">
        <Text size="sm">rounded="xl"</Text>
      </Box>
      <Box padding="md" border="all" rounded="full" style={{ width: '150px', textAlign: 'center' }}>
        <Text size="sm">rounded="full"</Text>
      </Box>
    </Stack>
  ),
};

export const CardLike: Story = {
  render: () => (
    <Box padding="lg" border="all" rounded="lg" className="bg-white shadow-sm" style={{ width: '300px' }}>
      <Stack spacing="sm">
        <Text as="h3" size="lg" weight="semibold">Card Title</Text>
        <Text color="secondary">
          This box is styled to look like a card with padding, border, and rounded corners.
        </Text>
        <Box marginTop="sm">
          <Button variant="primary" size="sm">Action</Button>
        </Box>
      </Stack>
    </Box>
  ),
};

export const CenteredWithMargin: Story = {
  render: () => (
    <div style={{ width: '400px', border: '1px dashed #ccc' }}>
      <Box 
        padding="md" 
        margin="auto" 
        border="all" 
        rounded="md"
        style={{ width: 'fit-content' }}
      >
        <Text>Centered with margin="auto"</Text>
      </Box>
    </div>
  ),
};

/**
 * Box supports ref forwarding, allowing you to access the underlying DOM element.
 * This is useful for measuring dimensions, handling scroll, or integrating with
 * third-party libraries that need DOM access.
 */
export const WithRef: Story = {
  render: function RefExample() {
    const boxRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
      if (boxRef.current) {
        const { offsetWidth, offsetHeight } = boxRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    }, []);

    return (
      <Stack spacing="md">
        <Box 
          ref={boxRef} 
          padding="lg" 
          border="all" 
          rounded="md"
          className="bg-paper-50"
        >
          <Text>This box's dimensions are measured using a ref</Text>
        </Box>
        <Box padding="sm" border="all" rounded="sm" className="bg-success-50">
          <Text size="sm" color="success">
            Measured: {dimensions.width}px x {dimensions.height}px
          </Text>
        </Box>
      </Stack>
    );
  },
};

/**
 * Another ref example showing focus management.
 */
export const RefForFocus: Story = {
  render: function FocusExample() {
    const boxRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      if (boxRef.current) {
        boxRef.current.focus();
        setIsFocused(true);
      }
    };

    return (
      <Stack spacing="md">
        <Box 
          ref={boxRef}
          tabIndex={0}
          padding="lg" 
          border="all" 
          borderColor={isFocused ? 'accent' : 'default'}
          rounded="md"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="transition-colors outline-none focus:ring-2 focus:ring-accent-400"
        >
          <Text>Click the button or press Tab to focus this box</Text>
        </Box>
        <Button variant="secondary" onClick={handleFocus}>
          Focus the Box
        </Button>
        <Text size="sm" color="muted">
          Status: {isFocused ? 'Focused' : 'Not focused'}
        </Text>
      </Stack>
    );
  },
};

export const NestedBoxes: Story = {
  render: () => (
    <Box padding="lg" border="all" rounded="lg" className="bg-paper-50">
      <Text weight="semibold" size="lg">Outer Box</Text>
      <Box padding="md" marginTop="md" border="all" rounded="md" className="bg-white">
        <Text>Inner Box 1</Text>
      </Box>
      <Box padding="md" marginTop="md" border="all" rounded="md" className="bg-white">
        <Text>Inner Box 2</Text>
      </Box>
    </Box>
  ),
};

export const WidthOptions: Story = {
  render: () => (
    <Stack spacing="md" style={{ width: '400px' }}>
      <Box padding="sm" border="all" width="auto">
        <Text size="sm">width="auto" (shrinks to content)</Text>
      </Box>
      <Box padding="sm" border="all" width="full">
        <Text size="sm">width="full" (100% of parent)</Text>
      </Box>
      <Box padding="sm" border="all" width="fit">
        <Text size="sm">width="fit"</Text>
      </Box>
    </Stack>
  ),
};
