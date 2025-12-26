import type { Meta, StoryObj } from '@storybook/react';
import { StreakBadge } from './StreakBadge';
import Stack from './Stack';
import Text from './Text';
import Card, { CardContent, CardHeader, CardTitle } from './Card';

const meta: Meta<typeof StreakBadge> = {
  title: 'Feedback/StreakBadge',
  component: StreakBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Display streak achievements with a flame icon. The color intensity increases with streak length, and includes optional "New Record" indicator with animation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: { type: 'number', min: 1, max: 365, step: 1 },
      description: 'The streak count',
    },
    unit: {
      control: 'select',
      options: ['days', 'weeks', 'months'],
      description: 'The unit of time for the streak',
    },
    type: {
      control: 'text',
      description: 'Optional type descriptor',
    },
    isNewRecord: {
      control: 'boolean',
      description: 'Whether this is a new personal record',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StreakBadge>;

// Basic example
export const Default: Story = {
  args: {
    count: 12,
    unit: 'days',
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <Stack direction="horizontal" gap="md" align="center">
      <Stack align="center" gap="xs">
        <StreakBadge count={7} unit="days" size="sm" />
        <Text size="xs" className="text-ink-400">Small</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <StreakBadge count={7} unit="days" size="md" />
        <Text size="xs" className="text-ink-400">Medium</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <StreakBadge count={7} unit="days" size="lg" />
        <Text size="xs" className="text-ink-400">Large</Text>
      </Stack>
    </Stack>
  ),
};

// Color intensity progression
export const ColorProgression: Story = {
  render: () => (
    <Stack gap="md">
      <Text weight="semibold" className="text-ink-600">Color intensity increases with streak length:</Text>
      <Stack direction="horizontal" gap="md" wrap>
        <Stack align="center" gap="xs">
          <StreakBadge count={3} unit="days" />
          <Text size="xs" className="text-ink-400">Starting</Text>
        </Stack>
        <Stack align="center" gap="xs">
          <StreakBadge count={7} unit="days" />
          <Text size="xs" className="text-ink-400">1 week</Text>
        </Stack>
        <Stack align="center" gap="xs">
          <StreakBadge count={30} unit="days" />
          <Text size="xs" className="text-ink-400">1 month</Text>
        </Stack>
        <Stack align="center" gap="xs">
          <StreakBadge count={100} unit="days" />
          <Text size="xs" className="text-ink-400">100 days</Text>
        </Stack>
        <Stack align="center" gap="xs">
          <StreakBadge count={365} unit="days" />
          <Text size="xs" className="text-ink-400">1 year</Text>
        </Stack>
      </Stack>
    </Stack>
  ),
};

// With type descriptor
export const WithType: Story = {
  render: () => (
    <Stack gap="md" direction="horizontal" wrap>
      <StreakBadge count={12} unit="days" type="budget" />
      <StreakBadge count={8} unit="weeks" type="savings" />
      <StreakBadge count={3} unit="months" type="tracking" />
    </Stack>
  ),
};

// New record
export const NewRecord: Story = {
  args: {
    count: 15,
    unit: 'days',
    type: 'budget',
    isNewRecord: true,
  },
};

// Different units
export const DifferentUnits: Story = {
  render: () => (
    <Stack gap="md" direction="horizontal" wrap>
      <StreakBadge count={1} unit="days" />
      <StreakBadge count={5} unit="days" />
      <StreakBadge count={1} unit="weeks" />
      <StreakBadge count={4} unit="weeks" />
      <StreakBadge count={1} unit="months" />
      <StreakBadge count={6} unit="months" />
    </Stack>
  ),
};

// In context - Profile card
export const ProfileContext: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Your Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <Stack gap="md">
          <Stack direction="horizontal" justify="between" align="center">
            <Text size="sm" className="text-ink-600">Budget Streak</Text>
            <StreakBadge count={12} unit="days" type="budget" size="sm" isNewRecord />
          </Stack>
          <Stack direction="horizontal" justify="between" align="center">
            <Text size="sm" className="text-ink-600">Savings Streak</Text>
            <StreakBadge count={8} unit="weeks" type="savings" size="sm" />
          </Stack>
          <Stack direction="horizontal" justify="between" align="center">
            <Text size="sm" className="text-ink-600">Tracking Streak</Text>
            <StreakBadge count={45} unit="days" type="tracking" size="sm" />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  ),
};

// Dashboard highlight
export const DashboardHighlight: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-warning-50 to-warning-100 p-6 rounded-xl border border-warning-200 w-80">
      <Stack align="center" gap="md">
        <StreakBadge count={30} unit="days" type="budget" size="lg" isNewRecord />
        <Stack align="center" gap="xs">
          <Text weight="semibold" className="text-ink-800">
            30-Day Milestone!
          </Text>
          <Text size="sm" className="text-ink-600 text-center">
            You've stayed under budget for a full month. 
            That's your longest streak yet!
          </Text>
        </Stack>
      </Stack>
    </div>
  ),
};

// Comparison
export const Comparison: Story = {
  render: () => (
    <Stack gap="lg">
      <Stack direction="horizontal" gap="lg" align="center">
        <Stack gap="xs" align="center" className="w-32">
          <Text size="xs" className="text-ink-400 uppercase tracking-wide">Last Month</Text>
          <StreakBadge count={5} unit="days" />
        </Stack>
        <Stack gap="xs" align="center" className="w-32">
          <Text size="xs" className="text-ink-400 uppercase tracking-wide">This Month</Text>
          <StreakBadge count={18} unit="days" isNewRecord />
        </Stack>
      </Stack>
      <div className="text-center">
        <Text size="sm" className="text-success-600">
          +260% improvement! Keep it up!
        </Text>
      </div>
    </Stack>
  ),
};

// Inline usage
export const InlineUsage: Story = {
  render: () => (
    <div className="bg-white p-4 rounded-lg shadow-card border border-paper-200 w-96">
      <Text size="sm" className="text-ink-600 leading-relaxed">
        Great job! You're on a <StreakBadge count={12} unit="days" size="sm" /> 
        budget streak. That's your best this year!
      </Text>
    </div>
  ),
};
