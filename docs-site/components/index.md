# Component Overview

@papernote/ui provides 115+ production-ready React components with a beautiful paper notebook aesthetic.

## Browse by Category

### [Form Components](/components/form-components)
Interactive form controls with validation, icons, and accessibility features.

**15+ components:** Button, Input, Select, MultiSelect, DatePicker, TimePicker, Textarea, Checkbox, RadioGroup, Switch, Rating, PasswordInput, NumberInput, Slider, ColorPicker

### [Layout Components](/components/layout-components)
Flexible layout primitives and container components for building interfaces.

**12+ components:** Stack, Grid, Box, Text, Card, Modal, Drawer, Page, PageLayout, Layout, AppLayout, Dashboard, TwoColumnContent

### [Data Display](/components/data-display)
Components for displaying data, lists, and complex information.

**10+ components:** DataTable, Table, Badge, StatusBadge, Avatar, Timeline, KanbanBoard, Calendar, CurrencyDisplay, DateDisplay

### [Navigation](/components/navigation)
Navigation patterns and menu components for app structure.

**10+ components:** Breadcrumbs, Pagination, Sidebar, Tabs, StepIndicator, Menu, Dropdown, CommandPalette, TreeView, PageNavigation

### [Feedback](/components/feedback)
User feedback components for notifications, loading states, and dialogs.

**8+ components:** Toast, Alert, Modal, Drawer, Tooltip, EmptyState, Loading, Skeleton, LoadingOverlay, ConfirmDialog, Progress

### [Advanced](/components/advanced)
Complex, feature-rich components for specialized use cases.

**15+ components:** Accordion, Transfer, Carousel, Stepper, Popover, ButtonGroup, Autocomplete, Combobox, DateRangePicker, FormWizard, RichTextEditor, MarkdownEditor, InfiniteScroll, DropZone, ErrorBoundary

## Quick Examples

### Button

```tsx
import { Button } from '@papernote/ui';
import { Save } from 'lucide-react';

<Button variant="primary" icon={<Save />} loading={saving}>
  Save Changes
</Button>
```

### DataTable

```tsx
import { DataTable } from '@papernote/ui';

const columns = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', filterable: true },
];

<DataTable data={users} columns={columns} selectable />
```

### Toast Notifications

```tsx
import { addSuccessMessage, ToastContainer } from '@papernote/ui';

function MyComponent() {
  const handleClick = () => {
    addSuccessMessage('Operation completed!');
  };

  return (
    <>
      <button onClick={handleClick}>Show Toast</button>
      <ToastContainer position="top-right" />
    </>
  );
}
```

## Live Examples

View all components in action in our **[Live Storybook](https://691fcf89b3393605ea470e93-rzwuumklem.chromatic.com/)** with 500+ interactive examples.

## Component Features

### TypeScript First
All components are built with TypeScript and include comprehensive type definitions.

### Accessible by Default
WCAG AA compliant with ARIA attributes and keyboard navigation.

### Customizable
Use props to customize appearance and behavior. Built on Tailwind for easy styling.

### Tree-shakeable
Import only what you need. Optimized bundle sizes.

### forwardRef Support
All form components support ref forwarding for advanced use cases.

## Common Patterns

### Form with Validation

```tsx
import { Input, Button, Card } from '@papernote/ui';

function LoginForm() {
  return (
    <Card>
      <form>
        <Input
          label="Email"
          type="email"
          validationState={error ? 'error' : 'success'}
          validationMessage={error || 'Valid email'}
          required
        />
        <Input
          label="Password"
          type="password"
          showPasswordToggle
          required
        />
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </form>
    </Card>
  );
}
```

### Data Table with Actions

```tsx
import { DataTable } from '@papernote/ui';
import { Edit, Trash } from 'lucide-react';

const actions = [
  {
    label: 'Edit',
    icon: <Edit className="h-4 w-4" />,
    onClick: (row) => handleEdit(row)
  },
  {
    label: 'Delete',
    icon: <Trash className="h-4 w-4" />,
    onClick: (row) => handleDelete(row),
    variant: 'danger'
  }
];

<DataTable data={items} columns={columns} actions={actions} />
```

### Layout with Sidebar

```tsx
import { Layout, Sidebar, Page } from '@papernote/ui';
import { Home, Users, Settings } from 'lucide-react';

const menuItems = [
  { id: 'home', label: 'Home', icon: <Home />, href: '/' },
  { id: 'users', label: 'Users', icon: <Users />, href: '/users' },
  { id: 'settings', label: 'Settings', icon: <Settings />, href: '/settings' },
];

<Layout sidebar={<Sidebar items={menuItems} />}>
  <Page>{/* Your content */}</Page>
</Layout>
```

## Need Help?

- Browse component categories above for detailed documentation
- Check out the [Live Storybook](https://691fcf89b3393605ea470e93-rzwuumklem.chromatic.com/) for interactive examples
- See the [Testing Guide](/development/testing-guide) for testing patterns
- Report issues on [GitHub](https://github.com/kwhittenberger/papernote-ui/issues)
