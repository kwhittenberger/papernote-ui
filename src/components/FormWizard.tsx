
import React, { useState } from 'react';
import { Check } from 'lucide-react';

export interface WizardStep {
  id: string;
  title: string;
  description?: string;
  content: React.ReactNode;
  validate?: () => boolean | Promise<boolean>;
}

export interface FormWizardProps {
  steps: WizardStep[];
  onComplete: (data: Record<string, unknown>) => void | Promise<void>;
  onStepChange?: (stepIndex: number) => void;
  showStepNumbers?: boolean;
  allowSkip?: boolean;
  className?: string;
}

export default function FormWizard({
  steps,
  onComplete,
  onStepChange,
  showStepNumbers = true,
  allowSkip = false,
  className = '',
}: FormWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [formData] = useState<Record<string, unknown>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  // Go to specific step
  const goToStep = (stepIndex: number) => {
    if (stepIndex < 0 || stepIndex >= steps.length) return;
    if (!allowSkip && stepIndex > currentStep && !completedSteps.has(currentStep)) return;

    setCurrentStep(stepIndex);
    onStepChange?.(stepIndex);
  };

  // Next step
  const nextStep = async () => {
    const step = steps[currentStep];

    // Validate current step
    if (step.validate) {
      const isValid = await step.validate();
      if (!isValid) return;
    }

    // Mark as completed
    setCompletedSteps((prev) => new Set(prev).add(currentStep));

    if (isLastStep) {
      // Submit form
      setIsSubmitting(true);
      try {
        await onComplete(formData);
      } catch (error) {
        console.error('Form wizard submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Advance to next step directly (don't use goToStep which checks completedSteps
      // before React has re-rendered with the updated state)
      const nextStepIndex = currentStep + 1;
      setCurrentStep(nextStepIndex);
      onStepChange?.(nextStepIndex);
    }
  };

  // Previous step
  const prevStep = () => {
    if (!isFirstStep) {
      goToStep(currentStep - 1);
    }
  };

  return (
    <div className={className}>
      {/* Step Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = completedSteps.has(index);
            const isPast = index < currentStep;
            const isClickable = allowSkip || isPast || index === currentStep;

            return (
              <React.Fragment key={step.id}>
                {/* Step */}
                <button
                  type="button"
                  onClick={() => isClickable && goToStep(index)}
                  disabled={!isClickable}
                  className={`
                    flex flex-col items-center gap-2 flex-1 max-w-[200px]
                    ${isClickable ? 'cursor-pointer' : 'cursor-not-allowed'}
                  `}
                >
                  {/* Circle */}
                  <div
                    className={`
                      h-10 w-10 rounded-full flex items-center justify-center
                      font-semibold text-sm transition-all
                      ${isCompleted
                        ? 'bg-success-500 text-white'
                        : isActive
                        ? 'bg-accent-500 text-white'
                        : 'bg-paper-200 text-ink-500'
                      }
                    `}
                  >
                    {isCompleted ? (
                      <Check className="h-5 w-5" />
                    ) : showStepNumbers ? (
                      index + 1
                    ) : (
                      <div className="h-2 w-2 rounded-full bg-current" />
                    )}
                  </div>

                  {/* Label */}
                  <div className="text-center">
                    <div
                      className={`
                        text-sm font-medium
                        ${isActive ? 'text-accent-900' : 'text-ink-600'}
                      `}
                    >
                      {step.title}
                    </div>
                    {step.description && (
                      <div className="text-xs text-ink-500 mt-0.5">{step.description}</div>
                    )}
                  </div>
                </button>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="flex-1 mx-2 mt-[-30px]">
                    <div
                      className={`
                        h-0.5 transition-colors
                        ${completedSteps.has(index)
                          ? 'bg-success-500'
                          : index < currentStep
                          ? 'bg-accent-500'
                          : 'bg-paper-200'
                        }
                      `}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="mb-8">
        {steps.map((step, index) => (
          <div key={step.id} hidden={index !== currentStep}>
            {step.content}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-6 border-t border-paper-200">
        <button
          type="button"
          onClick={prevStep}
          disabled={isFirstStep}
          className="px-4 py-2 text-sm font-medium text-ink-700 bg-white border border-paper-300 rounded-lg hover:bg-paper-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          Previous
        </button>

        <div className="text-sm text-ink-600">
          Step {currentStep + 1} of {steps.length}
        </div>

        <button
          type="button"
          onClick={nextStep}
          disabled={isSubmitting}
          className="px-4 py-2 text-sm font-medium text-white bg-accent-500 rounded-lg hover:bg-accent-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          {isSubmitting ? 'Submitting...' : isLastStep ? 'Complete' : 'Next'}
        </button>
      </div>
    </div>
  );
}
