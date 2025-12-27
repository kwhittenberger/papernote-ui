import type { Meta, StoryObj } from '@storybook/react';
import SkipLink from './SkipLink';
import Stack from './Stack';
import Text from './Text';
import Card from './Card';

const meta: Meta<typeof SkipLink> = {
  title: 'Accessibility/SkipLink',
  component: SkipLink,
  parameters: {
    docs: {
      description: {
        component:
          'A skip link allows keyboard users to bypass repetitive navigation and jump directly to the main content. The link is visually hidden until focused (press Tab to see it).',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {
  args: {
    targetId: 'main-content',
  },
  render: (args) => (
    <Stack gap="lg">
      <Text size="sm" className="text-ink-500">
        Press Tab to reveal the skip link
      </Text>
      <SkipLink {...args} />
      <Card>
        <Stack gap="md">
          <Text weight="bold">Fake Navigation</Text>
          <nav>
            <Stack direction="horizontal" gap="md">
              <a href="#" className="text-accent-600">Home</a>
              <a href="#" className="text-accent-600">About</a>
              <a href="#" className="text-accent-600">Contact</a>
            </Stack>
          </nav>
        </Stack>
      </Card>
      <Card id="main-content" tabIndex={-1}>
        <Stack gap="md">
          <Text weight="bold">Main Content</Text>
          <Text>This is the main content area. The skip link will focus here when activated.</Text>
        </Stack>
      </Card>
    </Stack>
  ),
};

export const CustomText: Story = {
  args: {
    targetId: 'content',
    children: 'Skip navigation',
  },
  render: (args) => (
    <Stack gap="lg">
      <Text size="sm" className="text-ink-500">
        Press Tab to reveal the skip link with custom text
      </Text>
      <SkipLink {...args} />
      <Card id="content" tabIndex={-1}>
        <Text>Target content area</Text>
      </Card>
    </Stack>
  ),
};

export const MultipleSkipLinks: Story = {
  render: () => (
    <Stack gap="lg">
      <Text size="sm" className="text-ink-500">
        Press Tab multiple times to see multiple skip links
      </Text>
      <SkipLink targetId="main">Skip to main content</SkipLink>
      <SkipLink targetId="search">Skip to search</SkipLink>
      <SkipLink targetId="footer">Skip to footer</SkipLink>
      <Card>
        <Text weight="bold">Navigation</Text>
      </Card>
      <Card id="search" tabIndex={-1}>
        <Text weight="bold">Search Section</Text>
      </Card>
      <Card id="main" tabIndex={-1}>
        <Text weight="bold">Main Content</Text>
      </Card>
      <Card id="footer" tabIndex={-1}>
        <Text weight="bold">Footer</Text>
      </Card>
    </Stack>
  ),
};
