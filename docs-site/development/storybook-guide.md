# Storybook Guide

## Overview

notebook-ui now includes Storybook for interactive component development and documentation.

---

## Getting Started

### Install Dependencies

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Start Storybook

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006`

---

## Features

### 📖 Interactive Documentation
- Browse all 111+ components
- View component props
- Try different configurations live
- Copy code examples

### ♿ Accessibility Testing
- Built-in a11y addon
- Automated accessibility checks
- WCAG compliance testing
- Real-time violations reporting

### 🎨 Component Playground
- Modify props in real-time
- See changes instantly
- Test different states
- Experiment with variants

### 📝 Auto-Generated Docs
- Automatic prop tables
- TypeScript types displayed
- Usage examples
- Best practices

---

## Story Files

Stories are located alongside components:
```
src/components/
├── Button.tsx
├── Button.stories.tsx  ← Story file
├── Input.tsx
├── Input.stories.tsx   ← Story file
└── ...
```

---

## Writing Stories

### Basic Story

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import MyComponent from './MyComponent';

const meta = {
  title: 'Components/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Click me',
    variant: 'primary',
  },
};
```

### Interactive Story with State

```tsx
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Type something"
      />
    );
  },
};
```

### Multiple Variants

```tsx
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};
```

---

## Component Categories

Stories are organized by category:

- **Components/** - Core UI components
  - Button, Input, Select, etc.
- **Layout/** - Layout primitives
  - Stack, Grid, Card, etc.
- **Data Display/** - Data components
  - DataTable, Badge, Calendar, etc.
- **Feedback/** - User feedback
  - Toast, Alert, Modal, etc.
- **Navigation/** - Navigation components
  - Breadcrumbs, Tabs, Sidebar, etc.

---

## Addons

### Accessibility (a11y)
- Automatically checks for accessibility violations
- WCAG 2.1 compliance
- Color contrast checking
- ARIA attribute validation

**Usage:**
1. Select any component
2. Click "Accessibility" tab
3. View violations and passes

### Controls
- Modify component props live
- Try different configurations
- Test edge cases
- Experiment safely

**Usage:**
1. Select any component
2. Click "Controls" tab
3. Adjust prop values
4. See instant updates

### Actions
- Monitor component events
- Track click handlers
- View callbacks
- Debug interactions

**Usage:**
1. Select component with events
2. Click "Actions" tab
3. Interact with component
4. View logged events

---

## Build Storybook

Build static Storybook site:

```bash
npm run build-storybook
```

Output: `storybook-static/`

Deploy this folder to any static hosting:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Azure Static Web Apps

---

## Example Components

### Button Stories
- Primary, Secondary, Ghost, Danger, Outline variants
- With icons
- Icon-only
- Loading states
- Disabled states
- With badges
- All sizes

### Input Stories
- Basic input
- With prefix/suffix icons
- With error/helper text
- Required fields
- Disabled/Read-only
- Clearable
- Loading states
- Different types (email, password, etc.)

### DataTable Stories
- Basic table
- With actions
- Selectable rows
- Paginated
- Expandable rows
- Loading states
- Empty states
- Different densities

---

## Best Practices

### 1. One Component, Multiple Stories

```tsx
export const Primary: Story = { ... };
export const Secondary: Story = { ... };
export const WithIcon: Story = { ... };
export const Loading: Story = { ... };
```

### 2. Use Descriptive Names

```tsx
// ✅ Good
export const WithErrorMessage: Story = { ... };
export const DisabledState: Story = { ... };

// ❌ Avoid
export const Story1: Story = { ... };
export const Test: Story = { ... };
```

### 3. Document Props

```tsx
const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      description: 'Button visual style',
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
  },
} satisfies Meta<typeof Button>;
```

### 4. Show Real Examples

```tsx
export const RealWorld: Story = {
  render: () => (
    <form>
      <Input label="Email" type="email" required />
      <Input label="Password" type="password" required />
      <Button type="submit" fullWidth>Sign In</Button>
    </form>
  ),
};
```

---

## Keyboard Shortcuts

- `F` - Toggle fullscreen
- `S` - Toggle sidebar
- `T` - Toggle toolbar
- `A` - Toggle addons panel
- `/` - Search stories
- `Ctrl+K` - Quick search

---

## Troubleshooting

### Storybook won't start

```bash
# Clear cache and reinstall
rm -rf node_modules .storybook-cache
npm install
npm run storybook
```

### Stories not showing

1. Check story file location (`src/**/*.stories.tsx`)
2. Verify import statements
3. Check story naming (`export const MyStory`)
4. Restart Storybook

### Build errors

```bash
# Type check first
npm run typecheck

# Then build
npm run build-storybook
```

---

## Resources

- [Storybook Documentation](https://storybook.js.org/)
- [Writing Stories](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Testing with Storybook](https://storybook.js.org/docs/react/writing-tests/introduction)
- [Accessibility Addon](https://storybook.js.org/addons/@storybook/addon-a11y)

---

## Next Steps

1. **Explore Components**
   - Browse all component stories
   - Try different configurations
   - Learn component APIs

2. **Write More Stories**
   - Add stories for remaining components
   - Document edge cases
   - Show real-world examples

3. **Deploy**
   - Build static site
   - Deploy to hosting
   - Share with team

4. **Integrate Testing**
   - Use stories for visual regression testing
   - Add interaction tests
   - Automate accessibility checks

---

**Status:** ✅ Ready to use
**Version:** Storybook 10.x
**Components with Stories:** Button, Input, DataTable (+ more to come)
