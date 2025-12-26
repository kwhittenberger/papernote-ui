import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { MotivationalMessage } from './MotivationalMessage';
import Stack from './Stack';
import Text from './Text';
import { Trophy, TrendingUp, Target, Heart } from 'lucide-react';

const meta: Meta<typeof MotivationalMessage> = {
  title: 'Feedback/MotivationalMessage',
  component: MotivationalMessage,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Display encouraging messages with different tones. Features colored borders, tone-specific icons, optional titles, and dismissible functionality.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    tone: {
      control: 'select',
      options: ['celebration', 'encouragement', 'tip'],
      description: 'The tone affects styling and default icon',
    },
    message: {
      control: 'text',
      description: 'The message to display',
    },
    title: {
      control: 'text',
      description: 'Optional title for emphasis',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the message can be dismissed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MotivationalMessage>;

// Basic examples for each tone
export const Celebration: Story = {
  args: {
    tone: 'celebration',
    title: 'Congratulations!',
    message: 'You achieved your savings goal this month! Keep up the great work.',
  },
};

export const Encouragement: Story = {
  args: {
    tone: 'encouragement',
    title: 'You\'re doing great!',
    message: 'You\'re 3 months ahead of your savings goal. Your consistency is paying off!',
  },
};

export const Tip: Story = {
  args: {
    tone: 'tip',
    title: 'Pro tip',
    message: 'Setting up automatic transfers can help you save without thinking about it.',
  },
};

// All tones together
export const AllTones: Story = {
  render: () => (
    <Stack gap="md" className="w-96">
      <MotivationalMessage
        tone="celebration"
        title="Congratulations!"
        message="You achieved your savings goal this month!"
      />
      <MotivationalMessage
        tone="encouragement"
        title="Keep it up!"
        message="You're making great progress towards your financial goals."
      />
      <MotivationalMessage
        tone="tip"
        title="Quick tip"
        message="Review your subscriptions monthly to avoid unused charges."
      />
    </Stack>
  ),
};

// Without titles
export const WithoutTitles: Story = {
  render: () => (
    <Stack gap="md" className="w-96">
      <MotivationalMessage
        tone="celebration"
        message="Great week! You saved $200 more than usual."
      />
      <MotivationalMessage
        tone="encouragement"
        message="You're on track to reach your goal by December."
      />
      <MotivationalMessage
        tone="tip"
        message="Try the 50/30/20 budgeting rule for better savings."
      />
    </Stack>
  ),
};

// Custom icons
export const CustomIcons: Story = {
  render: () => (
    <Stack gap="md" className="w-96">
      <MotivationalMessage
        tone="celebration"
        icon={<Trophy className="w-5 h-5" />}
        title="Achievement Unlocked!"
        message="You've completed 30 days of budget tracking!"
      />
      <MotivationalMessage
        tone="encouragement"
        icon={<TrendingUp className="w-5 h-5" />}
        title="Trending Up!"
        message="Your savings rate increased by 15% this quarter."
      />
      <MotivationalMessage
        tone="tip"
        icon={<Target className="w-5 h-5" />}
        title="Goal Setting"
        message="Break big goals into smaller milestones for better motivation."
      />
    </Stack>
  ),
};

// Dismissible
export const Dismissible: Story = {
  render: function DismissibleDemo() {
    const [visible, setVisible] = useState(true);

    if (!visible) {
      return (
        <button 
          onClick={() => setVisible(true)}
          className="text-sm text-accent-600 hover:text-accent-700"
        >
          Show message again
        </button>
      );
    }

    return (
      <div className="w-96">
        <MotivationalMessage
          tone="celebration"
          title="Great news!"
          message="You're under budget for dining out this month. Keep it up!"
          dismissible
          onDismiss={() => setVisible(false)}
        />
      </div>
    );
  },
};

// In context - Dashboard widget
export const DashboardWidget: Story = {
  render: () => (
    <div className="bg-white p-6 rounded-xl shadow-card border border-paper-200 w-96">
      <Stack gap="md">
        <Stack direction="horizontal" justify="between" align="center">
          <Text weight="semibold" size="lg">Weekly Insights</Text>
          <Text size="sm" className="text-ink-400">This week</Text>
        </Stack>
        
        <Stack gap="sm">
          <MotivationalMessage
            tone="celebration"
            message="You saved $150 more than last week!"
          />
          <MotivationalMessage
            tone="tip"
            message="Your electricity bill is due in 3 days. You have sufficient funds."
          />
        </Stack>
      </Stack>
    </div>
  ),
};

// Empty state encouragement
export const EmptyStateEncouragement: Story = {
  render: () => (
    <div className="bg-paper-50 p-8 rounded-xl border border-paper-200 w-96 text-center">
      <Stack align="center" gap="lg">
        <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center">
          <Heart className="w-8 h-8 text-accent-500" />
        </div>
        <Stack align="center" gap="sm">
          <Text weight="semibold" size="lg">No transactions yet</Text>
          <Text size="sm" className="text-ink-500">
            Connect your first account to start tracking your finances.
          </Text>
        </Stack>
        <MotivationalMessage
          tone="encouragement"
          message="The best time to start managing your money is today!"
        />
      </Stack>
    </div>
  ),
};

// Stacked notifications
export const StackedNotifications: Story = {
  render: function StackedDemo() {
    const [messages, setMessages] = useState([
      { id: 1, tone: 'celebration' as const, message: 'Budget goal achieved!' },
      { id: 2, tone: 'tip' as const, message: 'Consider setting up emergency fund.' },
      { id: 3, tone: 'encouragement' as const, message: 'You\'re ahead of 80% of users your age!' },
    ]);

    const dismiss = (id: number) => {
      setMessages(msgs => msgs.filter(m => m.id !== id));
    };

    if (messages.length === 0) {
      return (
        <button 
          onClick={() => setMessages([
            { id: 1, tone: 'celebration' as const, message: 'Budget goal achieved!' },
            { id: 2, tone: 'tip' as const, message: 'Consider setting up emergency fund.' },
            { id: 3, tone: 'encouragement' as const, message: 'You\'re ahead of 80% of users your age!' },
          ])}
          className="text-sm text-accent-600 hover:text-accent-700"
        >
          Reset messages
        </button>
      );
    }

    return (
      <Stack gap="sm" className="w-96">
        {messages.map(msg => (
          <MotivationalMessage
            key={msg.id}
            tone={msg.tone}
            message={msg.message}
            dismissible
            onDismiss={() => dismiss(msg.id)}
          />
        ))}
      </Stack>
    );
  },
};
