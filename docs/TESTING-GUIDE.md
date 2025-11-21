# Testing Guide

## Overview

notebook-ui includes a comprehensive testing setup with Jest and React Testing Library.

---

## Running Tests

### Run All Tests

```bash
npm test
```

### Watch Mode

```bash
npm run test:watch
```

### Coverage Report

```bash
npm run test:coverage
```

---

## Test Structure

Tests are located alongside components:

```
src/components/
├── Button.tsx
├── Button.stories.tsx
├── __tests__/
│   ├── Button.test.tsx  ← Test file
│   └── Input.test.tsx
```

---

## Writing Tests

### Basic Component Test

```tsx
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

### Testing Interactions

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button interactions', () => {
  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles typing', async () => {
    const user = userEvent.setup();
    render(<Input label="Name" />);

    await user.type(screen.getByLabelText('Name'), 'John');
    expect(screen.getByLabelText('Name')).toHaveValue('John');
  });
});
```

### Testing State Changes

```tsx
it('updates state on input change', async () => {
  const user = userEvent.setup();
  const { rerender } = render(
    <Input value="" onChange={handleChange} />
  );

  await user.type(screen.getByRole('textbox'), 'test');
  // Verify state update
});
```

### Testing Accessibility

```tsx
it('has accessible label', () => {
  render(<Input label="Email" />);
  expect(screen.getByLabelText('Email')).toBeInTheDocument();
});

it('shows error with aria-invalid', () => {
  render(<Input label="Email" error="Invalid email" />);
  const input = screen.getByLabelText('Email');
  expect(input).toHaveAttribute('aria-invalid', 'true');
});
```

---

## Test Patterns

### Form Components

```tsx
describe('Input', () => {
  it('renders with label', () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('shows error message', () => {
    render(<Input label="Email" error="Invalid" />);
    expect(screen.getByText('Invalid')).toBeInTheDocument();
  });

  it('handles value changes', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Input label="Name" onChange={handleChange} />);
    await user.type(screen.getByLabelText('Name'), 'John');

    expect(handleChange).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input label="Email" disabled />);
    expect(screen.getByLabelText('Email')).toBeDisabled();
  });
});
```

### Button Components

```tsx
describe('Button', () => {
  it('applies variant styles', () => {
    render(<Button variant="primary">Primary</Button>);
    expect(screen.getByText('Primary')).toHaveClass('bg-accent-500');
  });

  it('shows loading state', () => {
    render(<Button loading>Loading</Button>);
    // Check for loading spinner
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);

    fireEvent.click(screen.getByText('Disabled'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
```

### Data Components

```tsx
describe('DataTable', () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
  ];

  const data = [
    { id: '1', name: 'John', email: 'john@example.com' },
    { id: '2', name: 'Jane', email: 'jane@example.com' },
  ];

  it('renders table with data', () => {
    render(<DataTable columns={columns} data={data} />);

    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
  });

  it('handles row selection', () => {
    const handleSelection = jest.fn();
    render(
      <DataTable
        columns={columns}
        data={data}
        selectable
        onSelectionChange={handleSelection}
      />
    );

    // Select first row
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[1]); // First data row

    expect(handleSelection).toHaveBeenCalled();
  });
});
```

---

## Mocking

### Mocking Components

```tsx
jest.mock('../ComplexComponent', () => ({
  __esModule: true,
  default: () => <div>Mocked Component</div>,
}));
```

### Mocking Functions

```tsx
const mockFetch = jest.fn();
global.fetch = mockFetch;

mockFetch.mockResolvedValue({
  json: async () => ({ data: [] }),
});
```

### Mocking Timers

```tsx
jest.useFakeTimers();

it('calls function after timeout', () => {
  const callback = jest.fn();
  setTimeout(callback, 1000);

  jest.advanceTimersByTime(1000);
  expect(callback).toHaveBeenCalled();
});

jest.useRealTimers();
```

---

## Coverage

### View Coverage Report

```bash
npm run test:coverage
```

### Coverage Thresholds

Configured in `jest.config.js`:

```js
coverageThresholds: {
  global: {
    branches: 70,
    functions: 70,
    lines: 70,
    statements: 70,
  },
}
```

### Exclude from Coverage

```js
collectCoverageFrom: [
  'src/**/*.{ts,tsx}',
  '!src/**/*.stories.tsx',  // Exclude stories
  '!src/**/*.d.ts',         // Exclude type definitions
  '!src/types/**/*',        // Exclude type files
],
```

---

## Best Practices

### 1. Test User Behavior, Not Implementation

```tsx
// ✅ Good - test what user sees
it('shows error message when email is invalid', () => {
  render(<Input label="Email" error="Invalid email" />);
  expect(screen.getByText('Invalid email')).toBeInTheDocument();
});

// ❌ Avoid - testing implementation details
it('sets error state to true', () => {
  // Don't test internal state
});
```

### 2. Use Accessibility Queries

```tsx
// ✅ Prefer these queries
screen.getByRole('button', { name: 'Submit' })
screen.getByLabelText('Email')
screen.getByText('Welcome')

// ❌ Avoid these when possible
screen.getByTestId('submit-button')
screen.getByClassName('btn-primary')
```

### 3. Test Accessibility

```tsx
it('is keyboard accessible', async () => {
  const user = userEvent.setup();
  render(<Button>Click me</Button>);

  const button = screen.getByRole('button');
  await user.tab();

  expect(button).toHaveFocus();

  await user.keyboard('{Enter}');
  // Verify action occurred
});
```

### 4. Clean Up After Tests

```tsx
afterEach(() => {
  jest.clearAllMocks();
  cleanup(); // RTL cleanup (automatic)
});
```

### 5. Group Related Tests

```tsx
describe('Button', () => {
  describe('variants', () => {
    it('renders primary variant', () => { ... });
    it('renders secondary variant', () => { ... });
  });

  describe('states', () => {
    it('handles loading state', () => { ... });
    it('handles disabled state', () => { ... });
  });
});
```

---

## Common Patterns

### Testing Forms

```tsx
describe('LoginForm', () => {
  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    const handleSubmit = jest.fn();

    render(<LoginForm onSubmit={handleSubmit} />);

    await user.type(screen.getByLabelText('Email'), 'test@example.com');
    await user.type(screen.getByLabelText('Password'), 'password123');
    await user.click(screen.getByRole('button', { name: 'Sign In' }));

    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });
});
```

### Testing Async Operations

```tsx
it('loads data on mount', async () => {
  render(<DataList />);

  expect(screen.getByText('Loading...')).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });
});
```

### Testing Error States

```tsx
it('shows error when API fails', async () => {
  mockFetch.mockRejectedValue(new Error('API Error'));

  render(<DataList />);

  await waitFor(() => {
    expect(screen.getByText('Failed to load data')).toBeInTheDocument();
  });
});
```

---

## Debugging Tests

### Show DOM

```tsx
import { render, screen } from '@testing-library/react';

it('test name', () => {
  render(<MyComponent />);

  // Print entire DOM
  screen.debug();

  // Print specific element
  screen.debug(screen.getByRole('button'));
});
```

### Find Elements

```tsx
// When element should exist
screen.getByRole('button');

// When element might not exist
screen.queryByRole('button'); // Returns null if not found

// Wait for element to appear
await screen.findByRole('button');
```

---

## CI/CD Integration

### GitHub Actions

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test -- --coverage
      - uses: codecov/codecov-action@v3
```

---

## Resources

- [React Testing Library](https://testing-library.com/react)
- [Jest Documentation](https://jestjs.io/)
- [Testing Library Queries](https://testing-library.com/docs/queries/about)
- [User Event](https://testing-library.com/docs/user-event/intro)

---

**Status:** ✅ Ready to use
**Framework:** Jest + React Testing Library
**Coverage Target:** 70%+
