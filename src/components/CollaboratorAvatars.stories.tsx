import type { Meta, StoryObj } from '@storybook/react';
import { CollaboratorAvatars } from './CollaboratorAvatars';
import Stack from './Stack';
import Text from './Text';
import { Card, CardContent, CardHeader, CardTitle } from './Card';

const meta: Meta<typeof CollaboratorAvatars> = {
  title: 'Collaboration/CollaboratorAvatars',
  component: CollaboratorAvatars,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Stacked avatar display for collaborators. Shows overlapping avatars with overflow indicator when exceeding max count. Falls back to initials when no avatar image is provided.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    max: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Maximum avatars to display before overflow',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the avatars',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CollaboratorAvatars>;

const sampleCollaborators = [
  { name: 'Alice Johnson' },
  { name: 'Bob Smith' },
  { name: 'Carol Williams' },
  { name: 'David Brown' },
  { name: 'Eve Davis' },
];

// Basic example
export const Default: Story = {
  args: {
    collaborators: sampleCollaborators.slice(0, 3),
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <Stack direction="horizontal" gap="xl" align="center">
      <Stack align="center" gap="sm">
        <CollaboratorAvatars collaborators={sampleCollaborators.slice(0, 3)} size="sm" />
        <Text size="xs" className="text-ink-400">Small</Text>
      </Stack>
      <Stack align="center" gap="sm">
        <CollaboratorAvatars collaborators={sampleCollaborators.slice(0, 3)} size="md" />
        <Text size="xs" className="text-ink-400">Medium</Text>
      </Stack>
      <Stack align="center" gap="sm">
        <CollaboratorAvatars collaborators={sampleCollaborators.slice(0, 3)} size="lg" />
        <Text size="xs" className="text-ink-400">Large</Text>
      </Stack>
    </Stack>
  ),
};

// With overflow
export const WithOverflow: Story = {
  render: () => (
    <Stack gap="lg">
      <Stack direction="horizontal" gap="md" align="center">
        <CollaboratorAvatars collaborators={sampleCollaborators} max={3} />
        <Text size="sm" className="text-ink-500">5 collaborators, max 3</Text>
      </Stack>
      <Stack direction="horizontal" gap="md" align="center">
        <CollaboratorAvatars collaborators={sampleCollaborators} max={2} />
        <Text size="sm" className="text-ink-500">5 collaborators, max 2</Text>
      </Stack>
      <Stack direction="horizontal" gap="md" align="center">
        <CollaboratorAvatars collaborators={sampleCollaborators} max={1} />
        <Text size="sm" className="text-ink-500">5 collaborators, max 1</Text>
      </Stack>
    </Stack>
  ),
};

// With avatar images
export const WithAvatarImages: Story = {
  args: {
    collaborators: [
      { name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/100?u=alice' },
      { name: 'Bob Smith', avatar: 'https://i.pravatar.cc/100?u=bob' },
      { name: 'Carol Williams', avatar: 'https://i.pravatar.cc/100?u=carol' },
    ],
  },
};

// Mixed (some with images, some without)
export const MixedAvatars: Story = {
  args: {
    collaborators: [
      { name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/100?u=alice' },
      { name: 'Bob Smith' },
      { name: 'Carol Williams', avatar: 'https://i.pravatar.cc/100?u=carol' },
      { name: 'David Brown' },
    ],
    max: 4,
  },
};

// Single collaborator
export const SingleCollaborator: Story = {
  args: {
    collaborators: [{ name: 'Alice Johnson' }],
  },
};

// Clickable
export const Clickable: Story = {
  render: () => (
    <CollaboratorAvatars
      collaborators={sampleCollaborators}
      onClick={() => alert('Clicked! Show collaborator list modal.')}
    />
  ),
};

// In context - Document header
export const DocumentHeader: Story = {
  render: () => (
    <div className="bg-white p-4 rounded-lg shadow-card border border-paper-200 w-96">
      <Stack direction="horizontal" justify="between" align="center">
        <Stack gap="xs">
          <Text weight="semibold">Q4 Budget Planning</Text>
          <Text size="sm" className="text-ink-400">Last edited 2 hours ago</Text>
        </Stack>
        <CollaboratorAvatars
          collaborators={[
            { name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/100?u=alice' },
            { name: 'Bob Smith', avatar: 'https://i.pravatar.cc/100?u=bob' },
            { name: 'Carol Williams' },
          ]}
          size="sm"
          onClick={() => alert('Show collaborators')}
        />
      </Stack>
    </div>
  ),
};

// In context - Card
export const CardContext: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <Stack direction="horizontal" justify="between" align="start">
          <CardTitle>Family Budget</CardTitle>
          <CollaboratorAvatars
            collaborators={[
              { name: 'John Doe' },
              { name: 'Jane Doe' },
            ]}
            size="sm"
          />
        </Stack>
      </CardHeader>
      <CardContent>
        <Text size="sm" className="text-ink-500">
          Shared household budget tracker for managing monthly expenses.
        </Text>
      </CardContent>
    </Card>
  ),
};

// Many collaborators
export const ManyCollaborators: Story = {
  args: {
    collaborators: [
      { name: 'Alice Johnson' },
      { name: 'Bob Smith' },
      { name: 'Carol Williams' },
      { name: 'David Brown' },
      { name: 'Eve Davis' },
      { name: 'Frank Miller' },
      { name: 'Grace Lee' },
      { name: 'Henry Wilson' },
      { name: 'Ivy Chen' },
      { name: 'Jack Taylor' },
    ],
    max: 4,
  },
};

// Different max values
export const DifferentMaxValues: Story = {
  render: () => (
    <Stack gap="md">
      {[1, 2, 3, 4, 5].map((max) => (
        <Stack key={max} direction="horizontal" gap="md" align="center">
          <div className="w-8 text-right">
            <Text size="sm" className="text-ink-400">max={max}</Text>
          </div>
          <CollaboratorAvatars
            collaborators={sampleCollaborators}
            max={max}
          />
        </Stack>
      ))}
    </Stack>
  ),
};
