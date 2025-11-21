# Contributing to @papernote/ui

Thank you for your interest in contributing to @papernote/ui! We welcome contributions from the community.

## Code of Conduct

This project adheres to a [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs **actual behavior**
- **Screenshots** if applicable
- **Environment details** (OS, Node version, React version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use case** - Why is this enhancement valuable?
- **Proposed solution** - How should it work?
- **Alternatives considered** - What other approaches did you think about?

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Install dependencies**: `npm install`
3. **Make your changes**
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed
4. **Test your changes**:
   ```bash
   npm run typecheck  # TypeScript check
   npm run lint       # Linting
   npm test           # Run tests
   npm run build      # Build the library
   ```
5. **Commit your changes** with a clear commit message
6. **Push to your fork** and submit a pull request

### Pull Request Guidelines

- **One feature per PR** - Keep pull requests focused
- **Update tests** - Add/update tests for your changes
- **Update docs** - Update README, COMPONENT-CATALOG, or add Storybook stories
- **Follow conventions** - Match the existing code style
- **Pass all checks** - TypeScript, linting, tests, build must pass

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/papernote-ui.git
cd papernote-ui

# Install dependencies
npm install

# Run Storybook for development
npm run storybook

# Run tests in watch mode
npm run test:watch

# Build the library
npm run build
```

## Project Structure

```
papernote-ui/
├── src/
│   ├── components/       # All React components
│   ├── types/            # TypeScript types
│   ├── styles/           # Global CSS
│   └── utils/            # Utility functions
├── docs/                 # Documentation
├── examples/             # Example usage
├── .storybook/           # Storybook configuration
└── __tests__/            # Test files
```

## Component Development Guidelines

### Creating a New Component

1. **Create the component file** in `src/components/ComponentName.tsx`
2. **Export from index** - Add to `src/components/index.ts`
3. **Add TypeScript types** - Full type definitions with JSDoc comments
4. **Add Storybook stories** - Create `ComponentName.stories.tsx`
5. **Add tests** - Create `__tests__/ComponentName.test.tsx`
6. **Update documentation** - Add to COMPONENT-CATALOG.md

### Component Standards

- ✅ **TypeScript** - All components must be fully typed
- ✅ **Accessibility** - WCAG AA compliant with ARIA attributes
- ✅ **forwardRef** - Form components should support ref forwarding
- ✅ **Responsive** - Mobile-first, responsive design
- ✅ **Consistent styling** - Use Tailwind classes and design tokens
- ✅ **Props interface** - Clear, well-documented prop interfaces

### Example Component Structure

```tsx
import { forwardRef, useId } from 'react';

export interface MyComponentProps {
  /** Component label */
  label: string;
  /** Optional description */
  description?: string;
  /** Disabled state */
  disabled?: boolean;
}

/**
 * MyComponent - Brief description
 *
 * @example
 * <MyComponent label="Example" />
 */
const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
  ({ label, description, disabled = false }, ref) => {
    const id = useId();

    return (
      <div ref={ref} className="...">
        <label htmlFor={id}>{label}</label>
        {description && <p>{description}</p>}
      </div>
    );
  }
);

MyComponent.displayName = 'MyComponent';

export default MyComponent;
```

## Testing Guidelines

- **Unit tests** for all components
- **Accessibility tests** - Check ARIA attributes, keyboard navigation
- **User interaction tests** - Test clicks, typing, form submissions
- **Coverage** - Maintain 70%+ code coverage

### Test Example

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('renders with label', () => {
    render(<MyComponent label="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('handles user interaction', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<MyComponent label="Click me" onClick={handleClick} />);
    await user.click(screen.getByText('Click me'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Storybook Guidelines

Every component should have Storybook stories demonstrating:

- **Default state**
- **All variants** (if applicable)
- **Different sizes** (if applicable)
- **Interactive states** (hover, focus, active)
- **Disabled state**
- **Error states**
- **Loading states** (if applicable)

## Documentation Guidelines

- **Clear examples** - Show real-world usage
- **Props documentation** - Document all props with JSDoc
- **Accessibility notes** - Mention keyboard shortcuts, ARIA usage
- **Best practices** - Include do's and don'ts

## Commit Message Guidelines

Use clear, descriptive commit messages:

```
feat: Add DateRangePicker component
fix: Correct Button disabled state styling
docs: Update Input component examples
test: Add tests for Select component
chore: Update dependencies
```

**Prefixes:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `test:` - Test additions/changes
- `chore:` - Maintenance tasks
- `refactor:` - Code refactoring
- `style:` - Code style changes (formatting)

## Release Process

Releases are managed by maintainers:

1. Version bump in `package.json`
2. Update CHANGELOG.md
3. Create GitHub release with notes
4. Publish to npm: `npm publish --access public`
5. Deploy Storybook to Chromatic

## Questions?

- 💬 [Open an issue](https://github.com/kwhittenberger/papernote-ui/issues)
- 📖 [Read the docs](./docs/INDEX.md)
- 🎨 [View Storybook](https://papernote-ui.chromatic.com)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
