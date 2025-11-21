# Testing Guide

This guide explains how to write and run tests for @papernote/ui components.

## Technology Stack

- **Jest** - Testing framework with ESM support
- **@testing-library/react** - React component testing utilities
- **@testing-library/user-event** - User interaction simulation
- **@testing-library/jest-dom** - Custom Jest matchers for DOM assertions

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test File Location

- Test files should be placed in `src/components/__tests__/`
- Name pattern: `ComponentName.test.tsx`
- Each component should have its own test file

## Test Template

Here's a basic template for testing a component:

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import YourComponent from '../YourComponent';

describe('YourComponent', () => {
  it('renders with required props', () => {
    render(<YourComponent label="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('handles user interactions', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<YourComponent onClick={handleClick} />);

    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies correct styling', () => {
    render(<YourComponent variant="primary" />);
    const element = screen.getByRole('button');
    expect(element).toHaveClass('bg-accent-500');
  });

  it('is accessible', () => {
    render(<YourComponent label="Accessible" />);
    expect(screen.getByLabelText('Accessible')).toBeInTheDocument();
  });
});
```

## Common Testing Patterns

### 1. Testing Props and Rendering

```tsx
it('renders with all props', () => {
  render(
    <Button
      variant="primary"
      size="lg"
      disabled
    >
      Click me
    </Button>
  );

  const button = screen.getByRole('button');
  expect(button).toBeDisabled();
  expect(button).toHaveClass('text-lg');
});
```

### 2. Testing User Interactions

```tsx
it('handles click events', async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();

  render(<Button onClick={handleClick}>Click me</Button>);

  await user.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### 3. Testing Form Inputs

```tsx
it('handles input changes', async () => {
  const user = userEvent.setup();
  const handleChange = jest.fn();

  render(<Input label="Name" onChange={handleChange} />);
  const input = screen.getByLabelText('Name');

  await user.type(input, 'John Doe');
  expect(handleChange).toHaveBeenCalled();
  expect(input).toHaveValue('John Doe');
});
```

### 4. Testing Controlled Components

```tsx
it('works as controlled component', async () => {
  const user = userEvent.setup();
  const handleChange = jest.fn();

  render(
    <Input
      label="Email"
      value="test@example.com"
      onChange={handleChange}
    />
  );

  const input = screen.getByLabelText('Email') as HTMLInputElement;
  expect(input.value).toBe('test@example.com');
});
```

### 5. Testing Conditional Rendering

```tsx
it('shows error message when error prop is provided', () => {
  render(
    <Input
      label="Email"
      validationState="error"
      validationMessage="Invalid email"
    />
  );

  expect(screen.getByText('Invalid email')).toBeInTheDocument();
});
```

### 6. Testing Variants/States

```tsx
it('applies variant styles', () => {
  const { rerender } = render(<Button variant="primary">Primary</Button>);
  let button = screen.getByRole('button');
  expect(button).toHaveClass('bg-accent-500');

  rerender(<Button variant="danger">Danger</Button>);
  button = screen.getByRole('button');
  expect(button).toHaveClass('bg-error-500');
});
```

### 7. Testing Accessibility

```tsx
it('has correct ARIA attributes', () => {
  render(<Button aria-label="Close dialog">×</Button>);
  expect(screen.getByLabelText('Close dialog')).toBeInTheDocument();
});

it('is keyboard accessible', async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();

  render(<Button onClick={handleClick}>Click</Button>);
  const button = screen.getByRole('button');

  button.focus();
  await user.keyboard('{Enter}');
  expect(handleClick).toHaveBeenCalled();
});
```

## Common Query Methods

### Finding Elements

```tsx
// By role (preferred for accessibility)
screen.getByRole('button')
screen.getByRole('textbox', { name: /email/i })

// By label text (good for form inputs)
screen.getByLabelText('Email')

// By text content
screen.getByText('Submit')

// By placeholder
screen.getByPlaceholderText('Enter your email')

// By test ID (use sparingly)
screen.getByTestId('custom-element')

// Query variants
getBy     // Throws error if not found
queryBy   // Returns null if not found
findBy    // Async, waits for element to appear
```

## Best Practices

### 1. Test Behavior, Not Implementation

❌ Bad:
```tsx
expect(component.state.isOpen).toBe(true);
```

✅ Good:
```tsx
expect(screen.getByRole('dialog')).toBeVisible();
```

### 2. Use Accessible Queries

❌ Bad:
```tsx
screen.getByTestId('submit-button')
```

✅ Good:
```tsx
screen.getByRole('button', { name: /submit/i })
```

### 3. Setup userEvent Correctly

✅ Always use:
```tsx
const user = userEvent.setup();
await user.click(element);
```

### 4. Handle Async Operations

```tsx
// Wait for element to appear
const element = await screen.findByText('Loaded');

// Wait for element to disappear
await waitFor(() => {
  expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
});
```

### 5. Provide onChange for Controlled Inputs

❌ Bad (causes React warning):
```tsx
<Input value="test" />
```

✅ Good:
```tsx
<Input value="test" onChange={() => {}} />
// or
<Input value="test" readOnly />
```

## Coverage Requirements

The project has coverage thresholds set at 70%:
- Branches: 70%
- Functions: 70%
- Lines: 70%
- Statements: 70%

Run `npm run test:coverage` to see detailed coverage reports.

## Troubleshooting

### "Not wrapped in act(...)" warning

Use `userEvent` instead of `fireEvent` for user interactions:

```tsx
const user = userEvent.setup();
await user.click(button);
```

### "Unable to find element" error

- Check if element is rendered conditionally
- Use `findBy` queries for async elements
- Verify the exact text/label matches

### ESM Import Issues

Ensure your jest.config.js has proper ESM configuration:
- `preset: 'ts-jest/presets/default-esm'`
- `extensionsToTreatAsEsm: ['.ts', '.tsx']`
- `useESM: true` in transform options

## Component-Specific Testing Tips

### Button Component
- Test all variants (primary, secondary, danger, etc.)
- Test loading state
- Test disabled state
- Test click handlers
- Test icon rendering
- Test badge display

### Input Component
- Test validation states
- Test prefix/suffix rendering
- Test clearable functionality
- Test password toggle
- Test character count
- Test helper text and error messages

### DataTable Component
- Test sorting functionality
- Test filtering
- Test row selection
- Test row expansion
- Test pagination
- Test actions (edit, delete)
- Test loading state
- Test empty state

## Example: Complete Component Test

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from '../Select';

describe('Select', () => {
  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
  ];

  it('renders with label', () => {
    render(<Select label="Framework" options={options} />);
    expect(screen.getByLabelText('Framework')).toBeInTheDocument();
  });

  it('opens dropdown on click', async () => {
    const user = userEvent.setup();
    render(<Select label="Framework" options={options} />);

    await user.click(screen.getByLabelText('Framework'));
    expect(screen.getByText('React')).toBeVisible();
  });

  it('selects option', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(
      <Select
        label="Framework"
        options={options}
        onChange={handleChange}
      />
    );

    await user.click(screen.getByLabelText('Framework'));
    await user.click(screen.getByText('Vue'));

    expect(handleChange).toHaveBeenCalledWith('vue');
  });

  it('is clearable', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(
      <Select
        label="Framework"
        options={options}
        value="react"
        onChange={handleChange}
        clearable
      />
    );

    const clearButton = screen.getByLabelText('Clear selection');
    await user.click(clearButton);

    expect(handleChange).toHaveBeenCalledWith('');
  });

  it('shows validation error', () => {
    render(
      <Select
        label="Framework"
        options={options}
        validationState="error"
        validationMessage="Required field"
      />
    );

    expect(screen.getByText('Required field')).toBeInTheDocument();
  });
});
```

## Resources

- [Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Docs](https://jestjs.io/docs/getting-started)
- [User Event Docs](https://testing-library.com/docs/user-event/intro)
- [Common Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
