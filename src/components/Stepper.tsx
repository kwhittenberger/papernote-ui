import React from 'react';
import { Check } from 'lucide-react';

export interface StepConfig {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface StepperProps {
  /** Step configurations */
  steps: StepConfig[];
  /** Current active step ID */
  activeStep: string;
  /** Completed step IDs */
  completedSteps?: string[];
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Allow clicking on steps to navigate */
  clickable?: boolean;
  /** Callback when step is clicked */
  onStepClick?: (stepId: string) => void;
}

export default function Stepper({
  steps,
  activeStep,
  completedSteps = [],
  orientation = 'horizontal',
  clickable = false,
  onStepClick,
}: StepperProps) {
  const activeIndex = steps.findIndex((step) => step.id === activeStep);

  const renderStep = (step: StepConfig, index: number) => {
    const isActive = step.id === activeStep;
    const isCompleted = completedSteps.includes(step.id);
    const isClickable = clickable && onStepClick;
    const isLast = index === steps.length - 1;

    return (
      <div
        key={step.id}
        className={`
          flex ${orientation === 'vertical' ? 'flex-col' : 'items-center'}
          ${isLast ? '' : 'flex-1'}
        `}
      >
        {/* Step Item */}
        <div className="flex items-center gap-3">
          {/* Step Circle */}
          <button
            type="button"
            onClick={() => isClickable && onStepClick(step.id)}
            disabled={!isClickable}
            className={`
              flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full border-2 font-medium text-sm
              transition-all duration-200
              ${isCompleted
                ? 'bg-success-500 border-success-500 text-white'
                : isActive
                ? 'bg-accent-500 border-accent-500 text-white'
                : 'bg-white border-paper-300 text-ink-500'
              }
              ${isClickable ? 'cursor-pointer hover:scale-105' : 'cursor-default'}
            `}
            aria-current={isActive ? 'step' : undefined}
          >
            {isCompleted ? (
              <Check className="h-5 w-5" />
            ) : step.icon ? (
              <span className="h-5 w-5">{step.icon}</span>
            ) : (
              index + 1
            )}
          </button>

          {/* Step Content */}
          <div className={`${orientation === 'vertical' ? 'flex-1' : 'hidden md:block'}`}>
            <div className={`text-sm font-medium ${isActive ? 'text-ink-900' : 'text-ink-600'}`}>
              {step.label}
            </div>
            {step.description && (
              <div className="text-xs text-ink-500 mt-0.5">{step.description}</div>
            )}
          </div>
        </div>

        {/* Connector Line */}
        {!isLast && (
          <div
            className={`
              ${orientation === 'vertical'
                ? 'ml-5 my-2 w-0.5 h-12 border-l-2'
                : 'flex-1 mx-4 h-0.5 border-t-2'
              }
              ${index < activeIndex || isCompleted
                ? 'border-success-500'
                : 'border-paper-300'
              }
            `}
          />
        )}
      </div>
    );
  };

  return (
    <div
      className={`
        flex ${orientation === 'vertical' ? 'flex-col' : 'items-start'}
        ${orientation === 'horizontal' ? 'w-full' : ''}
      `}
    >
      {steps.map((step, index) => renderStep(step, index))}
    </div>
  );
}
