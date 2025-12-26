import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SuccessCheck } from './SuccessCheck';
import Button from './Button';
import Stack from './Stack';
import Text from './Text';

const meta: Meta<typeof SuccessCheck> = {
  title: 'Feedback/SuccessCheck',
  component: SuccessCheck,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An animated checkmark for completed actions. Features SVG stroke animation with configurable size, color, and delay. Respects prefers-reduced-motion for accessibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the checkmark',
    },
    color: {
      control: 'color',
      description: 'Color of the checkmark',
    },
    delay: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: 'Delay in ms before animation starts',
    },
    enabled: {
      control: 'boolean',
      description: 'Whether animations are enabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SuccessCheck>;

// Basic example
export const Default: Story = {
  args: {
    size: 'md',
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <Stack direction="horizontal" gap="lg" align="center">
      <Stack align="center" gap="sm">
        <SuccessCheck size="sm" />
        <Text size="sm" className="text-ink-500">Small</Text>
      </Stack>
      <Stack align="center" gap="sm">
        <SuccessCheck size="md" />
        <Text size="sm" className="text-ink-500">Medium</Text>
      </Stack>
      <Stack align="center" gap="sm">
        <SuccessCheck size="lg" />
        <Text size="sm" className="text-ink-500">Large</Text>
      </Stack>
    </Stack>
  ),
};

// Custom colors
export const CustomColors: Story = {
  render: () => (
    <Stack direction="horizontal" gap="lg" align="center">
      <Stack align="center" gap="sm">
        <SuccessCheck color="#10b981" />
        <Text size="sm" className="text-ink-500">Success</Text>
      </Stack>
      <Stack align="center" gap="sm">
        <SuccessCheck color="#3b82f6" />
        <Text size="sm" className="text-ink-500">Blue</Text>
      </Stack>
      <Stack align="center" gap="sm">
        <SuccessCheck color="#8b5cf6" />
        <Text size="sm" className="text-ink-500">Purple</Text>
      </Stack>
      <Stack align="center" gap="sm">
        <SuccessCheck color="#f59e0b" />
        <Text size="sm" className="text-ink-500">Amber</Text>
      </Stack>
    </Stack>
  ),
};

// With delay
export const WithDelay: Story = {
  render: () => (
    <Stack direction="horizontal" gap="lg" align="center">
      <Stack align="center" gap="sm">
        <SuccessCheck delay={0} />
        <Text size="sm" className="text-ink-500">No delay</Text>
      </Stack>
      <Stack align="center" gap="sm">
        <SuccessCheck delay={500} />
        <Text size="sm" className="text-ink-500">500ms</Text>
      </Stack>
      <Stack align="center" gap="sm">
        <SuccessCheck delay={1000} />
        <Text size="sm" className="text-ink-500">1000ms</Text>
      </Stack>
    </Stack>
  ),
};

// Interactive demo with trigger
export const Interactive: Story = {
  render: function InteractiveDemo() {
    const [key, setKey] = useState(0);
    const [completed, setCompleted] = useState(false);

    const triggerAnimation = () => {
      setCompleted(false);
      setKey(prev => prev + 1);
    };

    return (
      <Stack align="center" gap="lg">
        <div className="w-24 h-24 flex items-center justify-center bg-paper-100 rounded-xl">
          <SuccessCheck 
            key={key} 
            size="lg" 
            onComplete={() => setCompleted(true)} 
          />
        </div>
        <Stack align="center" gap="sm">
          <Button onClick={triggerAnimation} variant="primary">
            Replay Animation
          </Button>
          <Text size="sm" className="text-ink-500">
            {completed ? 'Animation complete!' : 'Animating...'}
          </Text>
        </Stack>
      </Stack>
    );
  },
};

// Static (no animation)
export const Static: Story = {
  args: {
    enabled: false,
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'When `enabled` is false, the checkmark appears immediately without animation. This also happens automatically when the user prefers reduced motion.',
      },
    },
  },
};

// In context - Task completion
export const TaskCompletion: Story = {
  render: function TaskCompletionDemo() {
    const [isComplete, setIsComplete] = useState(false);

    return (
      <div className="p-6 bg-white rounded-xl shadow-card border border-paper-200 w-80">
        <Stack gap="md">
          <Stack direction="horizontal" justify="between" align="center">
            <Text weight="semibold">Complete your profile</Text>
            {isComplete && <SuccessCheck size="sm" />}
          </Stack>
          
          <Stack gap="xs">
            <Stack direction="horizontal" gap="sm" align="center">
              <SuccessCheck size="sm" />
              <Text size="sm" className="text-ink-600">Add profile photo</Text>
            </Stack>
            <Stack direction="horizontal" gap="sm" align="center">
              <SuccessCheck size="sm" />
              <Text size="sm" className="text-ink-600">Verify email address</Text>
            </Stack>
            <Stack direction="horizontal" gap="sm" align="center">
              {isComplete ? (
                <SuccessCheck size="sm" />
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-paper-300" />
              )}
              <Text size="sm" className={isComplete ? 'text-ink-600' : 'text-ink-400'}>
                Set up payment method
              </Text>
            </Stack>
          </Stack>

          {!isComplete && (
            <Button 
              onClick={() => setIsComplete(true)} 
              variant="primary" 
              size="sm"
              className="w-full"
            >
              Mark Complete
            </Button>
          )}
        </Stack>
      </div>
    );
  },
};

// Staggered animation
export const Staggered: Story = {
  render: function StaggeredDemo() {
    const [key, setKey] = useState(0);

    return (
      <Stack align="center" gap="lg">
        <Stack direction="horizontal" gap="md" align="center">
          <SuccessCheck key={`${key}-1`} delay={0} />
          <SuccessCheck key={`${key}-2`} delay={200} />
          <SuccessCheck key={`${key}-3`} delay={400} />
          <SuccessCheck key={`${key}-4`} delay={600} />
          <SuccessCheck key={`${key}-5`} delay={800} />
        </Stack>
        <Button onClick={() => setKey(k => k + 1)} variant="secondary">
          Replay Staggered
        </Button>
      </Stack>
    );
  },
};
