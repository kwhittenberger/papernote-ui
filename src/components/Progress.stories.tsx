import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import Progress from './Progress';

const meta = {
  title: 'Feedback/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Progress indicator component with linear and circular variants for displaying task completion.

## Features
- **Variants**: linear (bar) or circular (radial)
- **Sizes**: sm, md, lg for different contexts
- **Colors**: primary, success, warning, error
- **Label support**: Show percentage or custom text
- **Striped**: Optional striped pattern
- **Animated**: Animated stripes for active operations
- **Value clamping**: Automatically clamps to 0-100 range

## Usage

\`\`\`tsx
import { Progress } from 'notebook-ui';

// Linear progress
<Progress value={75} color="success" showLabel />

// Circular progress
<Progress value={60} variant="circular" size="lg" showLabel />

// Striped animated
<Progress value={45} striped animated color="primary" />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100)',
      table: {
        type: { summary: 'number' },
      },
    },
    variant: {
      control: 'select',
      options: ['linear', 'circular'],
      description: 'Progress bar style',
      table: {
        type: { summary: 'linear | circular' },
        defaultValue: { summary: 'linear' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Progress bar size',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error'],
      description: 'Progress bar color variant',
      table: {
        type: { summary: 'primary | success | warning | error' },
        defaultValue: { summary: 'primary' },
      },
    },
    showLabel: {
      control: 'boolean',
      description: 'Show percentage label',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'Custom label text (overrides percentage)',
      table: {
        type: { summary: 'string' },
      },
    },
    striped: {
      control: 'boolean',
      description: 'Add striped pattern to linear progress',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    animated: {
      control: 'boolean',
      description: 'Animate stripes (requires striped=true)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '400px', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Linear: Story = {
  args: {
    value: 60,
    variant: 'linear',
  },
};

export const Circular: Story = {
  args: {
    value: 75,
    variant: 'circular',
  },
};

export const WithLabel: Story = {
  args: {
    value: 60,
    variant: 'linear',
    showLabel: true,
  },
};

export const CircularWithLabel: Story = {
  args: {
    value: 75,
    variant: 'circular',
    showLabel: true,
  },
};

export const CustomLabel: Story = {
  args: {
    value: 80,
    variant: 'linear',
    label: 'Upload Progress',
    showLabel: true,
  },
};

export const SmallSize: Story = {
  args: {
    value: 45,
    size: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    value: 65,
    size: 'lg',
    showLabel: true,
  },
};

export const SuccessColor: Story = {
  args: {
    value: 100,
    color: 'success',
    showLabel: true,
  },
};

export const WarningColor: Story = {
  args: {
    value: 75,
    color: 'warning',
    showLabel: true,
  },
};

export const ErrorColor: Story = {
  args: {
    value: 30,
    color: 'error',
    showLabel: true,
  },
};

export const Striped: Story = {
  args: {
    value: 60,
    striped: true,
  },
};

export const StripedAnimated: Story = {
  args: {
    value: 60,
    striped: true,
    animated: true,
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <div style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: '#64748b' }}>Primary</div>
        <Progress value={60} color="primary" showLabel />
      </div>
      <div>
        <div style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: '#64748b' }}>Success</div>
        <Progress value={100} color="success" showLabel />
      </div>
      <div>
        <div style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: '#64748b' }}>Warning</div>
        <Progress value={75} color="warning" showLabel />
      </div>
      <div>
        <div style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: '#64748b' }}>Error</div>
        <Progress value={30} color="error" showLabel />
      </div>
    </div>
  ),
};

export const AllSizesLinear: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <div style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: '#64748b' }}>Small</div>
        <Progress value={60} size="sm" />
      </div>
      <div>
        <div style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: '#64748b' }}>Medium</div>
        <Progress value={60} size="md" />
      </div>
      <div>
        <div style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: '#64748b' }}>Large</div>
        <Progress value={60} size="lg" />
      </div>
    </div>
  ),
};

export const AllSizesCircular: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Progress value={60} variant="circular" size="sm" showLabel />
        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Small</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Progress value={60} variant="circular" size="md" showLabel />
        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Medium</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Progress value={60} variant="circular" size="lg" showLabel />
        <div style={{ fontSize: '1rem', color: '#64748b' }}>Large</div>
      </div>
    </div>
  ),
};

export const FileUpload: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);

    const startUpload = () => {
      setUploading(true);
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setUploading(false);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
        <div style={{ padding: '2rem', border: '2px dashed #e5e5e5', borderRadius: '0.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📁</div>
          <div style={{ fontSize: '0.875rem', color: '#64748b' }}>document.pdf</div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>2.5 MB</div>
        </div>
        {uploading || progress > 0 ? (
          <div>
            <Progress value={progress} color={progress === 100 ? 'success' : 'primary'} striped={progress < 100} animated={progress < 100} showLabel />
            <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem', textAlign: 'center' }}>
              {progress === 100 ? 'Upload complete!' : 'Uploading...'}
            </div>
          </div>
        ) : (
          <button
            onClick={startUpload}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '0.375rem',
              background: '#3b82f6',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Start Upload
          </button>
        )}
      </div>
    );
  },
};

export const StepProgress: Story = {
  render: () => {
    const steps = ['Account', 'Profile', 'Preferences', 'Review'];
    const [currentStep, setCurrentStep] = useState(0);
    const progress = ((currentStep + 1) / steps.length) * 100;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
        <div>
          <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>
            Step {currentStep + 1} of {steps.length}: {steps[currentStep]}
          </div>
          <Progress value={progress} color="primary" />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #e5e5e5',
              borderRadius: '0.375rem',
              background: 'white',
              cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
              opacity: currentStep === 0 ? 0.5 : 1,
            }}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '0.375rem',
              background: currentStep === steps.length - 1 ? '#e5e5e5' : '#3b82f6',
              color: currentStep === steps.length - 1 ? '#64748b' : 'white',
              cursor: currentStep === steps.length - 1 ? 'not-allowed' : 'pointer',
            }}
          >
            {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
          </button>
        </div>
      </div>
    );
  },
};

export const MultipleProgress: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>CPU Usage</span>
          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>45%</span>
        </div>
        <Progress value={45} color="primary" />
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Memory</span>
          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>78%</span>
        </div>
        <Progress value={78} color="warning" />
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Disk Space</span>
          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>92%</span>
        </div>
        <Progress value={92} color="error" />
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Network</span>
          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>23%</span>
        </div>
        <Progress value={23} color="success" />
      </div>
    </div>
  ),
};

export const WithMilestones: Story = {
  args: {
    value: 65,
    milestones: [25, 50, 75, 100],
  },
};

export const WithMilestoneLabels: Story = {
  args: {
    value: 75,
    milestones: [25, 50, 75, 100],
    showMilestoneLabels: true,
  },
};

export const CircularWithMilestones: Story = {
  args: {
    value: 60,
    variant: 'circular',
    milestones: [25, 50, 75, 100],
    showLabel: true,
  },
};

export const CircularWithMilestoneLabels: Story = {
  args: {
    value: 80,
    variant: 'circular',
    milestones: [25, 50, 75, 100],
    showMilestoneLabels: true,
    showLabel: true,
  },
};

export const BudgetTracker: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
      <div>
        <div style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: '#64748b' }}>Monthly Budget</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontWeight: 500 }}>$2,250 / $3,000</span>
          <span style={{ color: '#f59e0b' }}>75% used</span>
        </div>
        <Progress
          value={75}
          color="warning"
          milestones={[25, 50, 75, 100]}
          showMilestoneLabels
        />
      </div>
      <div>
        <div style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: '#64748b' }}>Savings Goal</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontWeight: 500 }}>$4,500 / $10,000</span>
          <span style={{ color: '#3b82f6' }}>45% complete</span>
        </div>
        <Progress
          value={45}
          color="primary"
          milestones={[25, 50, 75, 100]}
          showMilestoneLabels
        />
      </div>
    </div>
  ),
};

export const GoalProgress: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Progress
          value={85}
          variant="circular"
          size="lg"
          color="success"
          milestones={[25, 50, 75, 100]}
          showLabel
        />
        <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem' }}>Sales Target</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Progress
          value={60}
          variant="circular"
          size="lg"
          color="primary"
          milestones={[25, 50, 75, 100]}
          showLabel
        />
        <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem' }}>Project Completion</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Progress
          value={30}
          variant="circular"
          size="lg"
          color="warning"
          milestones={[25, 50, 75, 100]}
          showLabel
        />
        <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem' }}>Sprint Progress</div>
      </div>
    </div>
  ),
};

export const CustomMilestones: Story = {
  args: {
    value: 70,
    milestones: [10, 30, 50, 80, 100],
    showMilestoneLabels: true,
    color: 'success',
  },
};
