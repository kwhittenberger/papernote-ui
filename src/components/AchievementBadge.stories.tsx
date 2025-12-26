import type { Meta, StoryObj } from '@storybook/react';
import { AchievementBadge } from './AchievementBadge';
import Stack from './Stack';
import Text from './Text';
import Card, { CardContent, CardHeader, CardTitle } from './Card';
import { 
  Trophy, 
  Target, 
  Wallet, 
  PiggyBank, 
  TrendingUp,
  Calendar,
  Star,
  Zap,
  Award,
  Crown,
} from 'lucide-react';

const meta: Meta<typeof AchievementBadge> = {
  title: 'Feedback/AchievementBadge',
  component: AchievementBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Display achievement badges with earned/locked/in-progress states. Features circular progress ring, tooltip with details, and visual states for different achievement statuses.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['earned', 'locked', 'in-progress'],
      description: 'Current state of the achievement',
    },
    progress: {
      control: { type: 'number', min: 0, max: 100, step: 5 },
      description: 'Progress percentage for in-progress variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge',
    },
    showTooltip: {
      control: 'boolean',
      description: 'Whether to show tooltip on hover',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AchievementBadge>;

const sampleBadge = {
  icon: <Trophy className="w-full h-full" />,
  name: 'Budget Master',
  description: 'Stay under budget for 3 consecutive months',
  earnedAt: new Date('2024-03-15'),
};

// Basic examples for each variant
export const Earned: Story = {
  args: {
    badge: sampleBadge,
    variant: 'earned',
  },
};

export const Locked: Story = {
  args: {
    badge: {
      icon: <Crown className="w-full h-full" />,
      name: 'Finance King',
      description: 'Reach $100,000 in total savings',
    },
    variant: 'locked',
  },
};

export const InProgress: Story = {
  args: {
    badge: {
      icon: <Target className="w-full h-full" />,
      name: 'Goal Setter',
      description: 'Set and track 5 financial goals',
    },
    variant: 'in-progress',
    progress: 60,
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <Stack direction="horizontal" gap="lg" align="center">
      <Stack align="center" gap="sm">
        <AchievementBadge badge={sampleBadge} variant="earned" size="sm" />
        <Text size="xs" className="text-ink-400">Small</Text>
      </Stack>
      <Stack align="center" gap="sm">
        <AchievementBadge badge={sampleBadge} variant="earned" size="md" />
        <Text size="xs" className="text-ink-400">Medium</Text>
      </Stack>
      <Stack align="center" gap="sm">
        <AchievementBadge badge={sampleBadge} variant="earned" size="lg" />
        <Text size="xs" className="text-ink-400">Large</Text>
      </Stack>
    </Stack>
  ),
};

// Progress levels
export const ProgressLevels: Story = {
  render: () => (
    <Stack direction="horizontal" gap="md" align="center">
      {[0, 25, 50, 75, 100].map((progress) => (
        <Stack key={progress} align="center" gap="sm">
          <AchievementBadge
            badge={{
              icon: <Target className="w-full h-full" />,
              name: 'Goal Setter',
              description: 'Set and track 5 financial goals',
            }}
            variant={progress === 100 ? 'earned' : 'in-progress'}
            progress={progress}
          />
          <Text size="xs" className="text-ink-400">{progress}%</Text>
        </Stack>
      ))}
    </Stack>
  ),
};

// Collection of badges
export const BadgeCollection: Story = {
  render: () => {
    const badges = [
      {
        badge: { icon: <Star className="w-full h-full" />, name: 'First Steps', description: 'Connect your first bank account', earnedAt: new Date('2024-01-10') },
        variant: 'earned' as const,
      },
      {
        badge: { icon: <Wallet className="w-full h-full" />, name: 'Budget Beginner', description: 'Create your first budget', earnedAt: new Date('2024-01-15') },
        variant: 'earned' as const,
      },
      {
        badge: { icon: <Trophy className="w-full h-full" />, name: 'Budget Master', description: 'Stay under budget for 3 months', earnedAt: new Date('2024-03-15') },
        variant: 'earned' as const,
      },
      {
        badge: { icon: <PiggyBank className="w-full h-full" />, name: 'Super Saver', description: 'Save $1,000 in a month' },
        variant: 'in-progress' as const,
        progress: 75,
      },
      {
        badge: { icon: <TrendingUp className="w-full h-full" />, name: 'Investor', description: 'Track investment portfolio' },
        variant: 'in-progress' as const,
        progress: 30,
      },
      {
        badge: { icon: <Crown className="w-full h-full" />, name: 'Finance King', description: 'Reach $100k in savings' },
        variant: 'locked' as const,
      },
    ];

    return (
      <div className="grid grid-cols-3 gap-6">
        {badges.map((item, index) => (
          <Stack key={index} align="center" gap="sm">
            <AchievementBadge {...item} />
            <Text size="xs" className="text-ink-500 text-center max-w-20">
              {item.badge.name}
            </Text>
          </Stack>
        ))}
      </div>
    );
  },
};

// Profile card context
export const ProfileContext: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <Stack gap="md">
          <Stack direction="horizontal" gap="sm" justify="center">
            <AchievementBadge
              badge={{ icon: <Star className="w-full h-full" />, name: 'First Steps', description: 'Connect your first account', earnedAt: new Date() }}
              variant="earned"
              size="sm"
            />
            <AchievementBadge
              badge={{ icon: <Trophy className="w-full h-full" />, name: 'Budget Master', description: 'Stay under budget 3 months', earnedAt: new Date() }}
              variant="earned"
              size="sm"
            />
            <AchievementBadge
              badge={{ icon: <Zap className="w-full h-full" />, name: 'Quick Start', description: 'Complete onboarding', earnedAt: new Date() }}
              variant="earned"
              size="sm"
            />
            <AchievementBadge
              badge={{ icon: <Calendar className="w-full h-full" />, name: '30-Day Streak', description: 'Track for 30 days' }}
              variant="in-progress"
              progress={45}
              size="sm"
            />
            <AchievementBadge
              badge={{ icon: <Award className="w-full h-full" />, name: 'Tax Pro', description: 'Categorize all expenses' }}
              variant="locked"
              size="sm"
            />
          </Stack>
          <Stack direction="horizontal" justify="between" className="pt-2 border-t border-paper-200">
            <Text size="sm" className="text-ink-500">Total Earned</Text>
            <Text size="sm" weight="semibold" className="text-ink-700">3 of 12</Text>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  ),
};

// Without tooltip
export const WithoutTooltip: Story = {
  args: {
    badge: sampleBadge,
    variant: 'earned',
    showTooltip: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'When `showTooltip` is false, hovering over the badge does not show the tooltip.',
      },
    },
  },
};

// Showcase with labels
export const ShowcaseWithLabels: Story = {
  render: () => (
    <Stack gap="xl">
      <Stack direction="horizontal" gap="lg" align="start">
        <Stack align="center" gap="md" className="p-6 bg-paper-50 rounded-xl">
          <AchievementBadge
            badge={{ icon: <Trophy className="w-full h-full" />, name: 'Budget Master', description: 'Stay under budget for 3 months', earnedAt: new Date() }}
            variant="earned"
            size="lg"
          />
          <Stack align="center" gap="xs">
            <Text weight="semibold" className="text-ink-700">Budget Master</Text>
            <Text size="sm" className="text-ink-500">Earned Mar 15, 2024</Text>
          </Stack>
        </Stack>

        <Stack align="center" gap="md" className="p-6 bg-paper-50 rounded-xl">
          <AchievementBadge
            badge={{ icon: <PiggyBank className="w-full h-full" />, name: 'Super Saver', description: 'Save $1,000 in a month' }}
            variant="in-progress"
            progress={75}
            size="lg"
          />
          <Stack align="center" gap="xs">
            <Text weight="semibold" className="text-ink-700">Super Saver</Text>
            <Text size="sm" className="text-ink-500">75% complete</Text>
          </Stack>
        </Stack>

        <Stack align="center" gap="md" className="p-6 bg-paper-50 rounded-xl">
          <AchievementBadge
            badge={{ icon: <Crown className="w-full h-full" />, name: 'Finance King', description: 'Reach $100k in savings' }}
            variant="locked"
            size="lg"
          />
          <Stack align="center" gap="xs">
            <Text weight="semibold" className="text-ink-400">Finance King</Text>
            <Text size="sm" className="text-ink-400">Locked</Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  ),
};
