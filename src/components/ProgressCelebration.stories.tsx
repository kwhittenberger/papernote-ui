import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { ProgressCelebration } from './ProgressCelebration';
import { Progress } from './Progress';
import { Stack } from './Stack';
import { Text } from './Text';
import { Button } from './Button';
import { Card, CardContent, CardHeader, CardTitle } from './Card';

const meta: Meta<typeof ProgressCelebration> = {
  title: 'Feedback/ProgressCelebration',
  component: ProgressCelebration,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Wrap progress indicators to celebrate milestones. Tracks previously reached milestones and only celebrates new ones. Supports pulse, glow, and confetti celebration types.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: { type: 'number', min: 0, max: 100, step: 5 },
      description: 'Current progress value (0-100)',
    },
    celebrationType: {
      control: 'select',
      options: ['pulse', 'glow', 'confetti'],
      description: 'Type of celebration to trigger',
    },
    enabled: {
      control: 'boolean',
      description: 'Whether celebrations are enabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressCelebration>;

// Interactive demo with manual control
export const Interactive: Story = {
  render: function InteractiveDemo() {
    const [progress, setProgress] = useState(0);
    const [milestones, setMilestones] = useState<number[]>([]);

    return (
      <Stack gap="lg" className="w-80">
        <ProgressCelebration
          progress={progress}
          celebrationType="confetti"
          onMilestoneReached={(m) => setMilestones((prev) => [...prev, m])}
        >
          <Progress value={progress} showLabel />
        </ProgressCelebration>

        <Stack direction="horizontal" gap="sm" wrap>
          <Button size="sm" variant="secondary" onClick={() => setProgress(0)}>0%</Button>
          <Button size="sm" variant="secondary" onClick={() => setProgress(25)}>25%</Button>
          <Button size="sm" variant="secondary" onClick={() => setProgress(50)}>50%</Button>
          <Button size="sm" variant="secondary" onClick={() => setProgress(75)}>75%</Button>
          <Button size="sm" variant="secondary" onClick={() => setProgress(100)}>100%</Button>
        </Stack>

        <Text size="sm" className="text-ink-500">
          Milestones reached: {milestones.length > 0 ? milestones.join(', ') + '%' : 'None yet'}
        </Text>
      </Stack>
    );
  },
};

// Pulse celebration type
export const PulseCelebration: Story = {
  render: function PulseDemo() {
    const [progress, setProgress] = useState(0);

    return (
      <Stack gap="lg" className="w-80">
        <Text weight="semibold">Pulse Animation</Text>
        <ProgressCelebration progress={progress} celebrationType="pulse">
          <Progress value={progress} showLabel />
        </ProgressCelebration>
        <Stack direction="horizontal" gap="sm">
          <Button size="sm" onClick={() => setProgress((p) => Math.max(0, p - 25))}>-25%</Button>
          <Button size="sm" onClick={() => setProgress((p) => Math.min(100, p + 25))}>+25%</Button>
        </Stack>
      </Stack>
    );
  },
};

// Glow celebration type
export const GlowCelebration: Story = {
  render: function GlowDemo() {
    const [progress, setProgress] = useState(0);

    return (
      <Stack gap="lg" className="w-80">
        <Text weight="semibold">Glow Animation</Text>
        <ProgressCelebration progress={progress} celebrationType="glow">
          <Progress value={progress} showLabel color="success" />
        </ProgressCelebration>
        <Stack direction="horizontal" gap="sm">
          <Button size="sm" onClick={() => setProgress((p) => Math.max(0, p - 25))}>-25%</Button>
          <Button size="sm" onClick={() => setProgress((p) => Math.min(100, p + 25))}>+25%</Button>
        </Stack>
      </Stack>
    );
  },
};

// Confetti celebration type
export const ConfettiCelebration: Story = {
  render: function ConfettiDemo() {
    const [progress, setProgress] = useState(0);

    return (
      <Stack gap="lg" className="w-80">
        <Text weight="semibold">Confetti Animation</Text>
        <ProgressCelebration progress={progress} celebrationType="confetti">
          <Progress value={progress} showLabel color="primary" />
        </ProgressCelebration>
        <Stack direction="horizontal" gap="sm">
          <Button size="sm" onClick={() => setProgress((p) => Math.max(0, p - 25))}>-25%</Button>
          <Button size="sm" onClick={() => setProgress((p) => Math.min(100, p + 25))}>+25%</Button>
        </Stack>
        <Text size="xs" className="text-ink-400">
          Tip: 100% triggers fireworks instead of confetti!
        </Text>
      </Stack>
    );
  },
};

// Custom milestones
export const CustomMilestones: Story = {
  render: function CustomMilestonesDemo() {
    const [progress, setProgress] = useState(0);
    const [reached, setReached] = useState<number[]>([]);

    return (
      <Stack gap="lg" className="w-80">
        <Text weight="semibold">Custom Milestones: 10%, 33%, 66%, 100%</Text>
        <ProgressCelebration
          progress={progress}
          milestones={[10, 33, 66, 100]}
          celebrationType="confetti"
          onMilestoneReached={(m) => setReached((prev) => [...prev, m])}
        >
          <Progress 
            value={progress} 
            showLabel 
            milestones={[10, 33, 66, 100]}
            showMilestoneLabels
          />
        </ProgressCelebration>
        <input
          type="range"
          min={0}
          max={100}
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          className="w-full"
        />
        <Text size="sm" className="text-ink-500">
          Celebrated: {reached.length > 0 ? reached.map(r => `${r}%`).join(', ') : 'None'}
        </Text>
      </Stack>
    );
  },
};

// Auto-incrementing progress
export const AutoIncrement: Story = {
  render: function AutoIncrementDemo() {
    const [progress, setProgress] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
      if (!isRunning) return;

      const interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            setIsRunning(false);
            return 100;
          }
          return p + 5;
        });
      }, 200);

      return () => clearInterval(interval);
    }, [isRunning]);

    const reset = () => {
      setProgress(0);
      setIsRunning(false);
    };

    return (
      <Stack gap="lg" className="w-80">
        <Text weight="semibold">Auto-incrementing Progress</Text>
        <ProgressCelebration progress={progress} celebrationType="confetti">
          <Progress value={progress} showLabel striped animated={isRunning} />
        </ProgressCelebration>
        <Stack direction="horizontal" gap="sm">
          <Button 
            onClick={() => setIsRunning(!isRunning)} 
            variant={isRunning ? 'secondary' : 'primary'}
          >
            {isRunning ? 'Pause' : 'Start'}
          </Button>
          <Button onClick={reset} variant="ghost">Reset</Button>
        </Stack>
      </Stack>
    );
  },
};

// With circular progress
export const WithCircularProgress: Story = {
  render: function CircularDemo() {
    const [progress, setProgress] = useState(0);

    return (
      <Stack gap="lg" align="center">
        <ProgressCelebration progress={progress} celebrationType="confetti">
          <Progress 
            value={progress} 
            variant="circular" 
            size="lg" 
            showLabel 
            color="success"
          />
        </ProgressCelebration>
        <Stack direction="horizontal" gap="sm">
          <Button size="sm" onClick={() => setProgress((p) => Math.max(0, p - 25))}>-25%</Button>
          <Button size="sm" onClick={() => setProgress((p) => Math.min(100, p + 25))}>+25%</Button>
        </Stack>
      </Stack>
    );
  },
};

// In context - Goal tracking
export const GoalTrackingContext: Story = {
  render: function GoalTrackingDemo() {
    const [saved, setSaved] = useState(750);
    const goal = 1000;
    const progress = Math.round((saved / goal) * 100);

    const addSavings = (amount: number) => {
      setSaved((s) => Math.min(goal, s + amount));
    };

    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Emergency Fund Goal</CardTitle>
        </CardHeader>
        <CardContent>
          <Stack gap="md">
            <Stack direction="horizontal" justify="between">
              <Text className="text-ink-600">${saved} saved</Text>
              <Text weight="semibold">${goal} goal</Text>
            </Stack>
            
            <ProgressCelebration
              progress={progress}
              celebrationType="confetti"
              onMilestoneReached={(m) => console.log(`Reached ${m}% of goal!`)}
            >
              <Progress 
                value={progress} 
                color="success" 
                milestones={[25, 50, 75, 100]}
              />
            </ProgressCelebration>

            <Stack direction="horizontal" gap="sm" justify="center">
              <Button size="sm" variant="secondary" onClick={() => addSavings(50)}>+$50</Button>
              <Button size="sm" variant="secondary" onClick={() => addSavings(100)}>+$100</Button>
              <Button size="sm" variant="ghost" onClick={() => setSaved(0)}>Reset</Button>
            </Stack>

            <Text size="sm" className="text-ink-500 text-center">
              {progress < 100 
                ? `$${goal - saved} to go!`
                : 'Goal achieved! 🎉'
              }
            </Text>
          </Stack>
        </CardContent>
      </Card>
    );
  },
};

// Disabled celebrations
export const DisabledCelebrations: Story = {
  render: function DisabledDemo() {
    const [progress, setProgress] = useState(0);

    return (
      <Stack gap="lg" className="w-80">
        <Text weight="semibold">Celebrations Disabled</Text>
        <ProgressCelebration progress={progress} celebrationType="confetti" enabled={false}>
          <Progress value={progress} showLabel />
        </ProgressCelebration>
        <Stack direction="horizontal" gap="sm">
          <Button size="sm" onClick={() => setProgress((p) => Math.min(100, p + 25))}>+25%</Button>
        </Stack>
        <Text size="xs" className="text-ink-400">
          No animations or confetti will appear when enabled=false
        </Text>
      </Stack>
    );
  },
};
