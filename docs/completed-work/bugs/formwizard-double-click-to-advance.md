# Bug Report: FormWizard Requires Double-Click to Advance Steps

## Status: ✅ RESOLVED in v1.7.5

## Summary

The FormWizard component requires clicking the "Next" button twice to advance to the next step. On the first click, the step indicator turns green (completed), but the wizard doesn't advance. A second click is required to actually move to the next step.

## Component

`src/components/FormWizard.tsx`

## Environment

- notebook-ui version: 1.7.4
- Discovered in: personal-finances project (AddInvestmentModal)

## Steps to Reproduce

1. Use `FormWizard` component with multiple steps
2. Fill out the first step
3. Click "Next" button
4. Observe: Step 1 indicator turns green (checkmark), but content still shows Step 1
5. Click "Next" button again
6. Now the wizard advances to Step 2

## Expected Behavior

A single click on "Next" should:
1. Validate the current step
2. Mark the step as completed (green checkmark)
3. Advance to the next step

All in one action.

## Actual Behavior

First click:
- Validates the step ✓
- Marks step as completed (green checkmark) ✓
- Does NOT advance to next step ✗

Second click:
- Advances to next step ✓

## Root Cause Analysis

The issue is in the `nextStep` function (lines 48-73):

```typescript
const nextStep = async () => {
  // ... validation ...

  // Mark as completed
  setCompletedSteps((prev) => new Set(prev).add(currentStep));

  if (isLastStep) {
    // ... submit ...
  } else {
    // Go to next step
    goToStep(currentStep + 1);
  }
};
```

And in `goToStep` (lines 39-45):

```typescript
const goToStep = (stepIndex: number) => {
  if (stepIndex < 0 || stepIndex >= steps.length) return;
  if (!allowSkip && stepIndex > currentStep && !completedSteps.has(currentStep)) return;  // <-- PROBLEM

  setCurrentStep(stepIndex);
  onStepChange?.(stepIndex);
};
```

The problem is **React state batching**:
1. `setCompletedSteps()` is called to add the current step to completed set
2. Immediately after, `goToStep(currentStep + 1)` is called
3. Inside `goToStep`, the check `!completedSteps.has(currentStep)` still returns `true` because React hasn't re-rendered yet
4. The function returns early, not advancing the step
5. On the next click, `completedSteps` has been updated by the previous render, so `goToStep` succeeds

## Proposed Fix

Option 1: Remove the check in `goToStep` for forward navigation from `nextStep`:
```typescript
const nextStep = async () => {
  // ... validation ...

  // Mark as completed AND advance in one operation
  setCompletedSteps((prev) => new Set(prev).add(currentStep));

  if (isLastStep) {
    // ... submit ...
  } else {
    // Directly set the next step without going through goToStep's validation
    setCurrentStep(currentStep + 1);
    onStepChange?.(currentStep + 1);
  }
};
```

Option 2: Use a callback or combine state updates:
```typescript
const nextStep = async () => {
  // ... validation ...

  if (isLastStep) {
    setCompletedSteps((prev) => new Set(prev).add(currentStep));
    // ... submit ...
  } else {
    // Batch both state updates together
    setCompletedSteps((prev) => new Set(prev).add(currentStep));
    setCurrentStep((prev) => prev + 1);
    onStepChange?.(currentStep + 1);
  }
};
```

Option 3: Keep `goToStep` for manual navigation only, use direct state update in `nextStep`.

## Impact

- **Severity**: Medium (wizard works but requires confusing double-click)
- **Affected Users**: All users of FormWizard

## Files to Modify

- `src/components/FormWizard.tsx`: Update `nextStep` function to not rely on `goToStep` for forward advancement

## Testing Notes

After fix, verify:
1. Single click on Next advances the wizard AND shows green checkmark
2. Clicking on completed step indicators still allows navigation back
3. Previous button still works
4. Final Complete button still works
5. Validation still prevents advancement when it fails
