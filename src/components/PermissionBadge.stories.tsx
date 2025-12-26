import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PermissionBadge, PermissionLevel } from './PermissionBadge';
import Stack from './Stack';
import Text from './Text';
import Card, { CardContent, CardHeader, CardTitle } from './Card';
import { CollaboratorAvatars } from './CollaboratorAvatars';

const meta: Meta<typeof PermissionBadge> = {
  title: 'Collaboration/PermissionBadge',
  component: PermissionBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Shows permission level (view/edit/admin) with optional dropdown for editing. Color-coded badges with descriptive icons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: ['view', 'edit', 'admin'],
      description: 'Current permission level',
    },
    editable: {
      control: 'boolean',
      description: 'Whether permission can be changed',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PermissionBadge>;

// Basic examples for each level
export const ViewOnly: Story = {
  args: {
    level: 'view',
  },
};

export const Edit: Story = {
  args: {
    level: 'edit',
  },
};

export const Admin: Story = {
  args: {
    level: 'admin',
  },
};

// All levels
export const AllLevels: Story = {
  render: () => (
    <Stack direction="horizontal" gap="md">
      <PermissionBadge level="view" />
      <PermissionBadge level="edit" />
      <PermissionBadge level="admin" />
    </Stack>
  ),
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <Stack gap="lg">
      <Stack direction="horizontal" gap="md" align="center">
        <Text size="sm" className="text-ink-400 w-16">Small</Text>
        <PermissionBadge level="view" size="sm" />
        <PermissionBadge level="edit" size="sm" />
        <PermissionBadge level="admin" size="sm" />
      </Stack>
      <Stack direction="horizontal" gap="md" align="center">
        <Text size="sm" className="text-ink-400 w-16">Medium</Text>
        <PermissionBadge level="view" size="md" />
        <PermissionBadge level="edit" size="md" />
        <PermissionBadge level="admin" size="md" />
      </Stack>
      <Stack direction="horizontal" gap="md" align="center">
        <Text size="sm" className="text-ink-400 w-16">Large</Text>
        <PermissionBadge level="view" size="lg" />
        <PermissionBadge level="edit" size="lg" />
        <PermissionBadge level="admin" size="lg" />
      </Stack>
    </Stack>
  ),
};

// Editable
export const Editable: Story = {
  render: function EditableDemo() {
    const [level, setLevel] = useState<PermissionLevel>('view');

    return (
      <Stack align="center" gap="md">
        <PermissionBadge
          level={level}
          editable
          onChange={setLevel}
        />
        <Text size="sm" className="text-ink-500">
          Click to change permission level
        </Text>
      </Stack>
    );
  },
};

// In context - Collaborator list
export const CollaboratorList: Story = {
  render: function CollaboratorListDemo() {
    const [permissions, setPermissions] = useState<Record<string, PermissionLevel>>({
      alice: 'admin',
      bob: 'edit',
      carol: 'view',
    });

    const updatePermission = (user: string, level: PermissionLevel) => {
      setPermissions((prev) => ({ ...prev, [user]: level }));
    };

    const collaborators = [
      { id: 'alice', name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/100?u=alice' },
      { id: 'bob', name: 'Bob Smith', avatar: 'https://i.pravatar.cc/100?u=bob' },
      { id: 'carol', name: 'Carol Williams' },
    ];

    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Shared with</CardTitle>
        </CardHeader>
        <CardContent>
          <Stack gap="md">
            {collaborators.map((collab) => (
              <Stack key={collab.id} direction="horizontal" justify="between" align="center">
                <Stack direction="horizontal" gap="sm" align="center">
                  <CollaboratorAvatars
                    collaborators={[collab]}
                    max={1}
                    size="sm"
                  />
                  <Text size="sm" weight="medium">{collab.name}</Text>
                </Stack>
                <PermissionBadge
                  level={permissions[collab.id]}
                  editable={collab.id !== 'alice'} // Owner can't change their own
                  onChange={(level) => updatePermission(collab.id, level)}
                  size="sm"
                />
              </Stack>
            ))}
          </Stack>
        </CardContent>
      </Card>
    );
  },
};

// In context - Document info
export const DocumentInfo: Story = {
  render: () => (
    <div className="bg-white p-4 rounded-lg shadow-card border border-paper-200 w-80">
      <Stack gap="sm">
        <Stack direction="horizontal" justify="between" align="center">
          <Text weight="semibold">Q4 Budget</Text>
          <PermissionBadge level="edit" size="sm" />
        </Stack>
        <Text size="sm" className="text-ink-500">
          You have edit access to this document.
        </Text>
      </Stack>
    </div>
  ),
};

// Static vs editable comparison
export const StaticVsEditable: Story = {
  render: () => (
    <Stack gap="lg">
      <Stack gap="sm">
        <Text size="sm" weight="semibold" className="text-ink-600">Static (read-only)</Text>
        <Stack direction="horizontal" gap="md">
          <PermissionBadge level="view" />
          <PermissionBadge level="edit" />
          <PermissionBadge level="admin" />
        </Stack>
      </Stack>
      <Stack gap="sm">
        <Text size="sm" weight="semibold" className="text-ink-600">Editable (click to change)</Text>
        <Stack direction="horizontal" gap="md">
          <PermissionBadge level="view" editable onChange={() => {}} />
          <PermissionBadge level="edit" editable onChange={() => {}} />
          <PermissionBadge level="admin" editable onChange={() => {}} />
        </Stack>
      </Stack>
    </Stack>
  ),
};
