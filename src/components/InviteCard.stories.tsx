import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { InviteCard, PendingInvite } from './InviteCard';
import Stack from './Stack';
import Text from './Text';

const meta: Meta<typeof InviteCard> = {
  title: 'Collaboration/InviteCard',
  component: InviteCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Card for inviting collaborators via email. Features email input with validation, pending invitations list, and cancel functionality.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Whether an invitation is being sent',
    },
    maxPending: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Maximum pending invites to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InviteCard>;

const now = new Date();
const samplePending: PendingInvite[] = [
  { email: 'alice@example.com', sentAt: new Date(now.getTime() - 5 * 60000) },
  { email: 'bob@example.com', sentAt: new Date(now.getTime() - 2 * 3600000) },
  { email: 'carol@example.com', sentAt: new Date(now.getTime() - 24 * 3600000) },
];

// Basic example
export const Default: Story = {
  args: {
    onInvite: (email) => alert(`Invited: ${email}`),
  },
};

// With pending invites
export const WithPending: Story = {
  args: {
    onInvite: (email) => alert(`Invited: ${email}`),
    pending: samplePending,
    onCancelInvite: (email) => alert(`Cancelled: ${email}`),
  },
};

// Loading state
export const Loading: Story = {
  args: {
    onInvite: () => {},
    loading: true,
  },
};

// Interactive demo
export const Interactive: Story = {
  render: function InteractiveDemo() {
    const [pending, setPending] = useState<PendingInvite[]>([]);
    const [loading, setLoading] = useState(false);

    const handleInvite = (email: string) => {
      setLoading(true);
      setTimeout(() => {
        setPending((prev) => [
          { email, sentAt: new Date() },
          ...prev,
        ]);
        setLoading(false);
      }, 1000);
    };

    const handleCancel = (email: string) => {
      setPending((prev) => prev.filter((p) => p.email !== email));
    };

    return (
      <div className="w-96">
        <InviteCard
          onInvite={handleInvite}
          pending={pending}
          loading={loading}
          onCancelInvite={handleCancel}
        />
      </div>
    );
  },
};

// Many pending invites
export const ManyPending: Story = {
  args: {
    onInvite: (email) => alert(`Invited: ${email}`),
    pending: [
      ...samplePending,
      { email: 'david@example.com', sentAt: new Date() },
      { email: 'eve@example.com', sentAt: new Date() },
      { email: 'frank@example.com', sentAt: new Date() },
      { email: 'grace@example.com', sentAt: new Date() },
    ],
    maxPending: 3,
    onCancelInvite: (email) => alert(`Cancelled: ${email}`),
  },
};

// Without cancel functionality
export const WithoutCancel: Story = {
  args: {
    onInvite: (email) => alert(`Invited: ${email}`),
    pending: samplePending,
  },
};

// In context - Modal content
export const ModalContext: Story = {
  render: () => (
    <div className="bg-paper-50 p-6 rounded-xl w-[450px]">
      <Stack gap="lg">
        <div>
          <Text size="xl" weight="bold">Share "Q4 Budget"</Text>
          <Text size="sm" className="text-ink-500 mt-1">
            Invite team members to collaborate on this document.
          </Text>
        </div>
        <InviteCard
          onInvite={(email) => alert(`Invited: ${email}`)}
          pending={samplePending.slice(0, 2)}
          onCancelInvite={(email) => alert(`Cancelled: ${email}`)}
        />
      </Stack>
    </div>
  ),
};

// Empty state
export const EmptyState: Story = {
  render: () => (
    <div className="w-96">
      <InviteCard
        onInvite={(email) => alert(`Invited: ${email}`)}
        pending={[]}
      />
    </div>
  ),
};

// Validation demo
export const ValidationDemo: Story = {
  render: () => (
    <Stack gap="md" className="w-96">
      <Text size="sm" className="text-ink-500">
        Try submitting with:
      </Text>
      <ul className="text-sm text-ink-500 list-disc list-inside">
        <li>Empty email</li>
        <li>Invalid email format</li>
        <li>Already invited email (alice@example.com)</li>
      </ul>
      <InviteCard
        onInvite={(email) => alert(`Would invite: ${email}`)}
        pending={[{ email: 'alice@example.com', sentAt: new Date() }]}
      />
    </Stack>
  ),
};
