import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { AchievementUnlock } from './AchievementUnlock';
import { Button } from './Button';
import { Stack } from './Stack';
import { Text } from './Text';
import { 
  Trophy, 
  Star, 
  Target, 
  Wallet, 
  PiggyBank,
  TrendingUp,
  Calendar,
  Award,
  Zap,
  Crown,
} from 'lucide-react';

const meta: Meta<typeof AchievementUnlock> = {
  title: 'Feedback/AchievementUnlock',
  component: AchievementUnlock,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Modal for newly unlocked achievements. Combines Modal + Celebration + AchievementBadge with configurable celebration types and optional auto-close.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    celebrationType: {
      control: 'select',
      options: ['confetti', 'glow', 'bounce'],
      description: 'Type of celebration animation',
    },
    autoClose: {
      control: 'boolean',
      description: 'Whether to auto-close after a delay',
    },
    autoCloseDelay: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
      description: 'Delay before auto-close in ms',
    },
    enabled: {
      control: 'boolean',
      description: 'Whether celebrations are enabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AchievementUnlock>;

// Basic example with trigger button
export const Default: Story = {
  render: function DefaultDemo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Stack align="center" gap="md">
        <Button onClick={() => setIsOpen(true)}>
          Unlock Achievement
        </Button>
        <AchievementUnlock
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          badge={{
            icon: <Trophy className="w-full h-full" />,
            name: 'Budget Master',
            description: 'You stayed under budget for 3 consecutive months. Keep up the great work!',
          }}
          celebrationType="confetti"
        />
      </Stack>
    );
  },
};

// Different celebration types
export const CelebrationTypes: Story = {
  render: function CelebrationTypesDemo() {
    const [openType, setOpenType] = useState<'confetti' | 'glow' | 'bounce' | null>(null);

    const badge = {
      icon: <Star className="w-full h-full" />,
      name: 'First Steps',
      description: 'You connected your first bank account and started your financial journey!',
    };

    return (
      <Stack direction="horizontal" gap="md">
        <Button onClick={() => setOpenType('confetti')}>Confetti</Button>
        <Button onClick={() => setOpenType('glow')}>Glow</Button>
        <Button onClick={() => setOpenType('bounce')}>Bounce</Button>

        {openType && (
          <AchievementUnlock
            isOpen={true}
            onClose={() => setOpenType(null)}
            badge={badge}
            celebrationType={openType}
          />
        )}
      </Stack>
    );
  },
};

// Auto-close
export const AutoClose: Story = {
  render: function AutoCloseDemo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Stack align="center" gap="md">
        <Button onClick={() => setIsOpen(true)}>
          Unlock (Auto-closes in 3s)
        </Button>
        <AchievementUnlock
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          badge={{
            icon: <Zap className="w-full h-full" />,
            name: 'Quick Start',
            description: 'You completed the onboarding in record time!',
          }}
          autoClose
          autoCloseDelay={3000}
        />
      </Stack>
    );
  },
};

// Various achievements showcase
export const AchievementShowcase: Story = {
  render: function AchievementShowcaseDemo() {
    const [currentAchievement, setCurrentAchievement] = useState<number | null>(null);

    const achievements = [
      {
        icon: <Star className="w-full h-full" />,
        name: 'First Steps',
        description: 'Connected your first bank account',
      },
      {
        icon: <Wallet className="w-full h-full" />,
        name: 'Budget Creator',
        description: 'Created your first monthly budget',
      },
      {
        icon: <Trophy className="w-full h-full" />,
        name: 'Budget Master',
        description: 'Stayed under budget for 3 consecutive months',
      },
      {
        icon: <PiggyBank className="w-full h-full" />,
        name: 'Super Saver',
        description: 'Saved $1,000 in a single month',
      },
      {
        icon: <TrendingUp className="w-full h-full" />,
        name: 'Investor',
        description: 'Started tracking your investment portfolio',
      },
      {
        icon: <Calendar className="w-full h-full" />,
        name: '30-Day Streak',
        description: 'Tracked your finances for 30 days straight',
      },
      {
        icon: <Award className="w-full h-full" />,
        name: 'Tax Pro',
        description: 'Categorized all expenses for tax season',
      },
      {
        icon: <Crown className="w-full h-full" />,
        name: 'Finance King',
        description: 'Reached $100,000 in total savings',
      },
    ];

    return (
      <Stack gap="lg">
        <Text weight="semibold">Click an achievement to see the unlock modal:</Text>
        <div className="grid grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <Button
              key={index}
              variant="ghost"
              onClick={() => setCurrentAchievement(index)}
              className="flex flex-col items-center gap-2 p-4 h-auto"
            >
              <div className="w-10 h-10 text-accent-500">
                {achievement.icon}
              </div>
              <Text size="xs" className="text-center">{achievement.name}</Text>
            </Button>
          ))}
        </div>

        {currentAchievement !== null && (
          <AchievementUnlock
            isOpen={true}
            onClose={() => setCurrentAchievement(null)}
            badge={achievements[currentAchievement]}
            celebrationType="confetti"
          />
        )}
      </Stack>
    );
  },
};

// Disabled celebrations (accessibility)
export const DisabledCelebrations: Story = {
  render: function DisabledDemo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Stack align="center" gap="md">
        <Button onClick={() => setIsOpen(true)}>
          Unlock (No Animations)
        </Button>
        <Text size="sm" className="text-ink-500">
          When enabled=false, no confetti or animations appear.
        </Text>
        <AchievementUnlock
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          badge={{
            icon: <Target className="w-full h-full" />,
            name: 'Goal Setter',
            description: 'Set and tracked 5 financial goals',
          }}
          enabled={false}
        />
      </Stack>
    );
  },
};

// Programmatic unlock simulation
export const ProgrammaticUnlock: Story = {
  render: function ProgrammaticDemo() {
    const [progress, setProgress] = useState(0);
    const [unlockedAchievement, setUnlockedAchievement] = useState<{
      icon: React.ReactNode;
      name: string;
      description: string;
    } | null>(null);

    const handleIncrement = () => {
      const newProgress = Math.min(100, progress + 20);
      setProgress(newProgress);

      // Simulate unlocking an achievement at 100%
      if (newProgress >= 100 && progress < 100) {
        setUnlockedAchievement({
          icon: <Trophy className="w-full h-full" />,
          name: 'Goal Achieved!',
          description: 'You reached 100% of your savings goal. Amazing work!',
        });
      }
    };

    return (
      <Stack align="center" gap="lg" className="w-64">
        <Text weight="semibold">Savings Goal Progress</Text>
        <div className="w-full bg-paper-200 rounded-full h-4 overflow-hidden">
          <div 
            className="bg-success-500 h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <Text size="sm" className="text-ink-500">{progress}% complete</Text>
        
        <Stack direction="horizontal" gap="sm">
          <Button onClick={handleIncrement} disabled={progress >= 100}>
            Add 20%
          </Button>
          <Button variant="ghost" onClick={() => setProgress(0)}>
            Reset
          </Button>
        </Stack>

        {unlockedAchievement && (
          <AchievementUnlock
            isOpen={true}
            onClose={() => setUnlockedAchievement(null)}
            badge={unlockedAchievement}
            celebrationType="confetti"
          />
        )}
      </Stack>
    );
  },
};

// Multiple sequential achievements
export const SequentialAchievements: Story = {
  render: function SequentialDemo() {
    const [queue, setQueue] = useState<Array<{
      icon: React.ReactNode;
      name: string;
      description: string;
    }>>([]);

    const achievements = [
      { icon: <Star className="w-full h-full" />, name: 'First Steps', description: 'Welcome to your financial journey!' },
      { icon: <Wallet className="w-full h-full" />, name: 'Budget Creator', description: 'You created your first budget!' },
      { icon: <Trophy className="w-full h-full" />, name: 'Champion', description: 'You completed the challenge!' },
    ];

    const triggerMultiple = () => {
      setQueue([...achievements]);
    };

    const handleClose = () => {
      setQueue((q) => q.slice(1));
    };

    return (
      <Stack align="center" gap="md">
        <Button onClick={triggerMultiple}>
          Unlock 3 Achievements
        </Button>
        <Text size="sm" className="text-ink-500">
          {queue.length > 0 ? `${queue.length} achievements remaining` : 'Click to start'}
        </Text>

        {queue.length > 0 && (
          <AchievementUnlock
            isOpen={true}
            onClose={handleClose}
            badge={queue[0]}
            celebrationType="confetti"
          />
        )}
      </Stack>
    );
  },
};
