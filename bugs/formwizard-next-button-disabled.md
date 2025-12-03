# Bug Report: FormWizard Next Button Disabled Until Step Already Completed

## Summary

The FormWizard component's "Next" button is disabled until the current step is already marked as completed, making it impossible for users to advance through the wizard.

## Component

`src/components/FormWizard.tsx`

## Environment

- notebook-ui version: 1.7.3
- Discovered in: personal-finances project (AddInvestmentModal)

## Steps to Reproduce

1. Use `FormWizard` component with `allowSkip={false}` (the default)
2. Define steps with `validate` functions
3. Fill out the first step correctly (so validation would pass)
4. Observe the "Next" button is disabled and cannot be clicked

## Expected Behavior

The "Next" button should be clickable. When clicked:
1. The `validate()` function should be called
2. If validation passes, the step should be marked as completed and the wizard should advance
3. If validation fails, the wizard should remain on the current step

## Actual Behavior

The "Next" button is disabled because:
1. `canGoNext` is set to `allowSkip || completedSteps.has(currentStep)` (line 37)
2. The button uses `disabled={!allowSkip && !canGoNext && !isLastStep || isSubmitting}` (line 194)
3. A step is only added to `completedSteps` AFTER clicking Next and passing validation (line 59)

This creates a chicken-and-egg problem: you can't click Next until the step is complete, but the step can't be marked complete until you click Next.

## Root Cause Analysis

The logic at line 194:
```typescript
disabled={!allowSkip && !canGoNext && !isLastStep || isSubmitting}
```

Where `canGoNext = allowSkip || completedSteps.has(currentStep)` (line 37)

When `allowSkip=false` (default):
- `canGoNext` = `completedSteps.has(currentStep)` = `false` (initially)
- `!allowSkip` = `true`
- `!canGoNext` = `true`
- For non-last steps: `!isLastStep` = `true`
- Result: `true && true && true || false` = **`true` (disabled)**

## Proposed Fix

Change the Next button's disabled logic from:
```typescript
disabled={!allowSkip && !canGoNext && !isLastStep || isSubmitting}
```

To simply:
```typescript
disabled={isSubmitting}
```

The validation logic in `nextStep()` already handles preventing advancement when validation fails. The button should always be clickable so users can attempt to proceed (and see validation errors if applicable).

Additionally, remove the unused `canGoNext` variable after this change.

## Impact

- **Severity**: High (wizard is non-functional with default settings)
- **Affected Users**: Any user of FormWizard with `allowSkip={false}`

## Files to Modify

- `src/components/FormWizard.tsx`:
  - Line 37: Remove `canGoNext` variable
  - Line 194: Change disabled logic to just `disabled={isSubmitting}`

## Testing Notes

After fix, verify:
1. Next button is clickable on all steps
2. Validation runs when Next is clicked
3. If validation fails, wizard stays on current step
4. If validation passes, wizard advances to next step
5. Step indicators properly show completed state after advancing
6. Previous button still works correctly
7. Complete button on final step works correctly
