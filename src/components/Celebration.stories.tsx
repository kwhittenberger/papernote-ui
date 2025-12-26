import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Celebration, useCelebration } from './Celebration';
import { Button } from './Button';
import { Stack } from './Stack';
import { Card, CardHeader, CardTitle, CardContent } from './Card';

const meta: Meta<typeof Celebration> = {
  title: 'Feedback/Celebration',
  component: Celebration,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Celebration>;

// Interactive demo with buttons
function CelebrationDemo() {
  const [trigger, setTrigger] = useState(false);
  const [celebrationType, setCelebrationType] = useState<'confetti' | 'fireworks' | 'stars'>('confetti');

  return (
    <Card style={{ width: '400px' }}>
      <CardHeader>
        <CardTitle>Celebration Demo</CardTitle>
      </CardHeader>
      <CardContent>
        <Stack gap="md">
          <Stack direction="horizontal" gap="sm">
            <Button
              variant={celebrationType === 'confetti' ? 'primary' : 'secondary'}
              onClick={() => setCelebrationType('confetti')}
            >
              Confetti
            </Button>
            <Button
              variant={celebrationType === 'fireworks' ? 'primary' : 'secondary'}
              onClick={() => setCelebrationType('fireworks')}
            >
              Fireworks
            </Button>
            <Button
              variant={celebrationType === 'stars' ? 'primary' : 'secondary'}
              onClick={() => setCelebrationType('stars')}
            >
              Stars
            </Button>
          </Stack>
          <Button
            variant="primary"
            size="lg"
            onClick={() => setTrigger(true)}
          >
            🎉 Celebrate!
          </Button>
        </Stack>
      </CardContent>
      <Celebration
        trigger={trigger}
        type={celebrationType}
        onComplete={() => setTrigger(false)}
      />
    </Card>
  );
}

export const Interactive: Story = {
  render: () => <CelebrationDemo />,
};

// Hook demo
function HookDemo() {
  const { celebrate } = useCelebration();

  return (
    <Card style={{ width: '400px' }}>
      <CardHeader>
        <CardTitle>Using useCelebration Hook</CardTitle>
      </CardHeader>
      <CardContent>
        <Stack gap="sm">
          <Button onClick={() => celebrate()}>
            Default Confetti
          </Button>
          <Button onClick={() => celebrate({ type: 'fireworks', duration: 3000 })}>
            Fireworks (3s)
          </Button>
          <Button onClick={() => celebrate({ type: 'stars', colors: ['#ffd700', '#ffed4a', '#fff'] })}>
            Golden Stars
          </Button>
          <Button onClick={() => celebrate({ colors: ['#22c55e'], particleCount: 200 })}>
            Green Confetti
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export const WithHook: Story = {
  render: () => <HookDemo />,
};

// Goal completion scenario
function GoalCompletionDemo() {
  const [goalCompleted, setGoalCompleted] = useState(false);

  return (
    <Card style={{ width: '400px' }}>
      <CardHeader>
        <CardTitle>Goal: Save $1,000</CardTitle>
      </CardHeader>
      <CardContent>
        <Stack gap="md">
          <div style={{ 
            width: '100%', 
            height: '8px', 
            backgroundColor: '#e5e7eb', 
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              width: goalCompleted ? '100%' : '85%', 
              height: '100%', 
              backgroundColor: goalCompleted ? '#22c55e' : '#3b82f6',
              transition: 'width 0.5s ease'
            }} />
          </div>
          <Button
            variant="primary"
            onClick={() => setGoalCompleted(true)}
            disabled={goalCompleted}
          >
            {goalCompleted ? '🎉 Goal Reached!' : 'Complete Goal'}
          </Button>
        </Stack>
      </CardContent>
      <Celebration
        trigger={goalCompleted}
        type="fireworks"
        duration={3000}
        colors={['#22c55e', '#10b981', '#34d399']}
      />
    </Card>
  );
}

export const GoalCompletion: Story = {
  render: () => <GoalCompletionDemo />,
};

export const Confetti: Story = {
  args: {
    trigger: true,
    type: 'confetti',
  },
};

export const Fireworks: Story = {
  args: {
    trigger: true,
    type: 'fireworks',
    duration: 3000,
  },
};

export const Stars: Story = {
  args: {
    trigger: true,
    type: 'stars',
  },
};
