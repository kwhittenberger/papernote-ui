// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React from 'react';
import { Check } from 'lucide-react';

export interface Step {
  id: string;
  label: string;
  description?: string;
}

export interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  variant?: 'horizontal' | 'vertical';
  onStepClick?: (stepIndex: number) => void;
}

export default function StepIndicator({
  steps,
  currentStep,
  variant = 'horizontal',
  onStepClick,
}: StepIndicatorProps) {
  const isVertical = variant === 'vertical';

  return (
    <nav aria-label="Progress" className={isVertical ? 'space-y-4' : ''}>
      <ol
        className={`${
          isVertical ? 'space-y-4' : 'flex items-center justify-between'
        }`}
      >
        {steps.map((step, index) => {
          const isComplete = index < currentStep;
          const isCurrent = index === currentStep;
          const isClickable = onStepClick && (isComplete || isCurrent);

          return (
            <li
              key={step.id}
              className={`${
                isVertical ? 'relative' : 'flex-1'
              }`}
            >
              <button
                onClick={() => isClickable && onStepClick(index)}
                disabled={!isClickable}
                className={`${
                  isVertical ? 'flex items-start gap-3' : 'flex flex-col items-center'
                } ${isClickable ? 'cursor-pointer' : 'cursor-default'} group w-full`}
              >
                {/* Step Circle */}
                <div
                  className={`
                    relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200
                    ${
                      isComplete
                        ? 'bg-success-500 border-success-500'
                        : isCurrent
                        ? 'bg-accent-500 border-accent-500'
                        : 'bg-white border-paper-300'
                    }
                    ${isClickable ? 'group-hover:shadow-md' : ''}
                  `}
                >
                  {isComplete ? (
                    <Check className="h-5 w-5 text-white" />
                  ) : (
                    <span
                      className={`text-sm font-medium ${
                        isCurrent ? 'text-white' : 'text-ink-600'
                      }`}
                    >
                      {index + 1}
                    </span>
                  )}
                </div>

                {/* Step Label */}
                <div className={`${isVertical ? 'flex-1 text-left' : 'mt-2 text-center'}`}>
                  <p
                    className={`text-sm font-medium transition-colors ${
                      isComplete || isCurrent ? 'text-ink-900' : 'text-ink-600'
                    }`}
                  >
                    {step.label}
                  </p>
                  {step.description && (
                    <p className="text-xs text-ink-500 mt-1">{step.description}</p>
                  )}
                </div>

                {/* Connector Line (Vertical) */}
                {isVertical && index < steps.length - 1 && (
                  <div
                    className={`absolute left-5 top-10 w-0.5 h-full -ml-px transition-colors ${
                      isComplete ? 'bg-success-500' : 'bg-paper-300'
                    }`}
                  />
                )}
              </button>

              {/* Connector Line (Horizontal) */}
              {!isVertical && index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-4 mt-5 transition-colors ${
                    isComplete ? 'bg-success-500' : 'bg-paper-300'
                  }`}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
