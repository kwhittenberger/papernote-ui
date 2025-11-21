import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Stepper from './Stepper';

const meta = {
  title: 'Navigation/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '600px', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicSteps = [
  { id: '1', label: 'Account' },
  { id: '2', label: 'Profile' },
  { id: '3', label: 'Complete' },
];

const stepsWithDescription = [
  { id: '1', label: 'Account', description: 'Create your account' },
  { id: '2', label: 'Profile', description: 'Complete your profile' },
  { id: '3', label: 'Verify', description: 'Verify your email' },
  { id: '4', label: 'Complete', description: 'All done!' },
];

export const Default: Story = {
  args: {
    steps: basicSteps,
    activeStep: '1',
  },
};

export const WithProgress: Story = {
  args: {
    steps: basicSteps,
    activeStep: '2',
    completedSteps: ['1'],
  },
};

export const WithDescriptions: Story = {
  args: {
    steps: stepsWithDescription,
    activeStep: '2',
    completedSteps: ['1'],
  },
};

export const Clickable: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState('1');
    const [completedSteps, setCompletedSteps] = useState<string[]>([]);

    return (
      <Stepper
        steps={basicSteps}
        activeStep={activeStep}
        completedSteps={completedSteps}
        clickable
        onStepClick={setActiveStep}
      />
    );
  },
};

export const Vertical: Story = {
  args: {
    steps: stepsWithDescription,
    activeStep: '2',
    completedSteps: ['1'],
    orientation: 'vertical',
  },
};

export const VerticalClickable: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState('2');
    const [completedSteps, setCompletedSteps] = useState<string[]>(['1']);

    return (
      <Stepper
        steps={stepsWithDescription}
        activeStep={activeStep}
        completedSteps={completedSteps}
        orientation="vertical"
        clickable
        onStepClick={setActiveStep}
      />
    );
  },
};

export const Complete: Story = {
  args: {
    steps: basicSteps,
    activeStep: '3',
    completedSteps: ['1', '2', '3'],
  },
};

export const InteractiveWizard: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState('1');
    const [completedSteps, setCompletedSteps] = useState<string[]>([]);

    const steps = stepsWithDescription;
    const currentStepIndex = steps.findIndex((s) => s.id === activeStep);
    const isLastStep = currentStepIndex === steps.length - 1;

    const handleNext = () => {
      if (!completedSteps.includes(activeStep)) {
        setCompletedSteps([...completedSteps, activeStep]);
      }
      if (currentStepIndex < steps.length - 1) {
        setActiveStep(steps[currentStepIndex + 1].id);
      }
    };

    const handlePrevious = () => {
      if (currentStepIndex > 0) {
        setActiveStep(steps[currentStepIndex - 1].id);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Stepper
          steps={steps}
          activeStep={activeStep}
          completedSteps={completedSteps}
          clickable
          onStepClick={(stepId) => {
            const stepIndex = steps.findIndex((s) => s.id === stepId);
            const activeIndex = steps.findIndex((s) => s.id === activeStep);
            if (stepIndex <= activeIndex || completedSteps.includes(stepId)) {
              setActiveStep(stepId);
            }
          }}
        />

        <div style={{ padding: '2rem', border: '1px solid #e5e5e5', borderRadius: '0.5rem', minHeight: '200px' }}>
          <h3 style={{ marginBottom: '1rem' }}>{steps[currentStepIndex].label}</h3>
          <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
            {steps[currentStepIndex].description}
          </p>
          <div style={{ padding: '2rem', backgroundColor: '#f5f5f4', borderRadius: '0.375rem', textAlign: 'center' }}>
            Content for step {currentStepIndex + 1} goes here
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'space-between' }}>
          <button
            onClick={handlePrevious}
            disabled={currentStepIndex === 0}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #e5e5e5',
              borderRadius: '0.375rem',
              background: 'white',
              cursor: currentStepIndex === 0 ? 'not-allowed' : 'pointer',
              opacity: currentStepIndex === 0 ? 0.5 : 1,
            }}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={isLastStep && completedSteps.includes(activeStep)}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '0.375rem',
              background: isLastStep && completedSteps.includes(activeStep) ? '#10b981' : '#3b82f6',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            {isLastStep ? 'Complete' : 'Next'}
          </button>
        </div>
      </div>
    );
  },
};

export const CheckoutProcess: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState('1');
    const [completedSteps, setCompletedSteps] = useState<string[]>([]);

    const steps = [
      { id: '1', label: 'Cart', description: 'Review your items' },
      { id: '2', label: 'Shipping', description: 'Enter shipping address' },
      { id: '3', label: 'Payment', description: 'Payment information' },
      { id: '4', label: 'Review', description: 'Review and confirm' },
      { id: '5', label: 'Complete', description: 'Order confirmation' },
    ];

    return (
      <div style={{ maxWidth: '800px' }}>
        <h2 style={{ marginBottom: '2rem' }}>Checkout</h2>
        <Stepper
          steps={steps}
          activeStep={activeStep}
          completedSteps={completedSteps}
        />
      </div>
    );
  },
};

export const RegistrationSteps: Story = {
  render: () => {
    const steps = [
      { id: '1', label: 'Personal Info', description: 'Name and email' },
      { id: '2', label: 'Company Details', description: 'Business information' },
      { id: '3', label: 'Preferences', description: 'Settings and options' },
      { id: '4', label: 'Review', description: 'Confirm details' },
    ];

    return (
      <div>
        <h2 style={{ marginBottom: '1.5rem' }}>Company Registration</h2>
        <Stepper
          steps={steps}
          activeStep='3'
          completedSteps={['1', '2']}
          orientation="vertical"
        />
      </div>
    );
  },
};

export const ProgressTracking: Story = {
  render: () => {
    const steps = [
      { id: '1', label: 'Order Placed', description: 'Jan 15, 2:30 PM' },
      { id: '2', label: 'Processing', description: 'Jan 15, 3:00 PM' },
      { id: '3', label: 'Shipped', description: 'Jan 16, 9:00 AM' },
      { id: '4', label: 'Out for Delivery', description: 'Expected today' },
      { id: '5', label: 'Delivered', description: 'Pending' },
    ];

    return (
      <div>
        <h2 style={{ marginBottom: '1rem' }}>Order #12345</h2>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>
          Track your order status
        </p>
        <Stepper
          steps={steps}
          activeStep='4'
          completedSteps={['1', '2', '3']}
          orientation="vertical"
        />
      </div>
    );
  },
};
