import type { Meta, StoryObj } from '@storybook/react';
import { SharedBadge } from './SharedBadge';
import Stack from './Stack';
import Text from './Text';
import { Card, CardContent, CardHeader, CardTitle } from './Card';

const meta: Meta<typeof SharedBadge> = {
  title: 'Collaboration/SharedBadge',
  component: SharedBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Indicator showing content is shared with others. Shows collaborator avatars and count with variant for owned vs shared content.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['owned', 'shared'],
      description: 'Whether user owns or was shared with',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge',
    },
    maxDisplay: {
      control: { type: 'number', min: 1, max: 5 },
      description: 'Maximum avatars to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SharedBadge>;

const sampleCollaborators = [
  { name: 'Alice Johnson' },
  { name: 'Bob Smith' },
  { name: 'Carol Williams' },
];

// Basic examples
export const Owned: Story = {
  args: {
    sharedWith: sampleCollaborators,
    variant: 'owned',
  },
};

export const SharedWithYou: Story = {
  args: {
    sharedWith: sampleCollaborators,
    variant: 'shared',
  },
};

// Both variants
export const BothVariants: Story = {
  render: () => (
    <Stack gap="md">
      <Stack direction="horizontal" gap="md" align="center">
        <SharedBadge sharedWith={sampleCollaborators} variant="owned" />
        <Text size="sm" className="text-ink-500">You shared this</Text>
      </Stack>
      <Stack direction="horizontal" gap="md" align="center">
        <SharedBadge sharedWith={sampleCollaborators} variant="shared" />
        <Text size="sm" className="text-ink-500">Shared with you</Text>
      </Stack>
    </Stack>
  ),
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <Stack gap="md">
      <Stack direction="horizontal" gap="md" align="center">
        <Text size="sm" className="text-ink-400 w-16">Small</Text>
        <SharedBadge sharedWith={sampleCollaborators} variant="owned" size="sm" />
      </Stack>
      <Stack direction="horizontal" gap="md" align="center">
        <Text size="sm" className="text-ink-400 w-16">Medium</Text>
        <SharedBadge sharedWith={sampleCollaborators} variant="owned" size="md" />
      </Stack>
      <Stack direction="horizontal" gap="md" align="center">
        <Text size="sm" className="text-ink-400 w-16">Large</Text>
        <SharedBadge sharedWith={sampleCollaborators} variant="owned" size="lg" />
      </Stack>
    </Stack>
  ),
};

// Different collaborator counts
export const CollaboratorCounts: Story = {
  render: () => (
    <Stack gap="md">
      <Stack direction="horizontal" gap="md" align="center">
        <SharedBadge sharedWith={[{ name: 'Alice' }]} variant="owned" />
        <Text size="sm" className="text-ink-500">1 person</Text>
      </Stack>
      <Stack direction="horizontal" gap="md" align="center">
        <SharedBadge sharedWith={sampleCollaborators.slice(0, 2)} variant="owned" />
        <Text size="sm" className="text-ink-500">2 people</Text>
      </Stack>
      <Stack direction="horizontal" gap="md" align="center">
        <SharedBadge sharedWith={sampleCollaborators} variant="owned" />
        <Text size="sm" className="text-ink-500">3 people</Text>
      </Stack>
      <Stack direction="horizontal" gap="md" align="center">
        <SharedBadge
          sharedWith={[...sampleCollaborators, { name: 'David' }, { name: 'Eve' }]}
          variant="owned"
          maxDisplay={3}
        />
        <Text size="sm" className="text-ink-500">5 people (max 3)</Text>
      </Stack>
    </Stack>
  ),
};

// Clickable
export const Clickable: Story = {
  render: () => (
    <SharedBadge
      sharedWith={sampleCollaborators}
      variant="owned"
      onClick={() => alert('Show sharing settings')}
    />
  ),
};

// In context - Document card
export const DocumentCard: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <Stack direction="horizontal" justify="between" align="start">
          <CardTitle>Q4 Budget</CardTitle>
          <SharedBadge
            sharedWith={sampleCollaborators.slice(0, 2)}
            variant="owned"
            size="sm"
          />
        </Stack>
      </CardHeader>
      <CardContent>
        <Text size="sm" className="text-ink-500">
          Quarterly budget planning document shared with the finance team.
        </Text>
      </CardContent>
    </Card>
  ),
};

// In context - File list
export const FileList: Story = {
  render: () => (
    <div className="w-96 border border-paper-200 rounded-lg overflow-hidden">
      {[
        { name: 'Family Budget.xlsx', variant: 'owned' as const, sharedWith: [{ name: 'Jane' }] },
        { name: 'Tax Documents', variant: 'shared' as const, sharedWith: [{ name: 'Accountant' }] },
        { name: 'Savings Goals.pdf', variant: 'owned' as const, sharedWith: sampleCollaborators },
      ].map((file, index) => (
        <div
          key={file.name}
          className={`p-3 flex items-center justify-between ${
            index > 0 ? 'border-t border-paper-200' : ''
          }`}
        >
          <Text size="sm" weight="medium">{file.name}</Text>
          <SharedBadge
            sharedWith={file.sharedWith}
            variant={file.variant}
            size="sm"
          />
        </div>
      ))}
    </div>
  ),
};

// With avatars
export const WithAvatars: Story = {
  args: {
    sharedWith: [
      { name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/100?u=alice' },
      { name: 'Bob Smith', avatar: 'https://i.pravatar.cc/100?u=bob' },
    ],
    variant: 'owned',
  },
};

// Empty state (renders nothing)
export const EmptyState: Story = {
  render: () => (
    <Stack gap="md">
      <Text size="sm" className="text-ink-500">
        SharedBadge with no collaborators renders nothing:
      </Text>
      <div className="p-4 border border-dashed border-paper-300 rounded-lg min-h-12 flex items-center justify-center">
        <SharedBadge sharedWith={[]} variant="owned" />
        <Text size="xs" className="text-ink-400">(empty)</Text>
      </div>
    </Stack>
  ),
};
