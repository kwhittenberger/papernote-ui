# Quick Start Guide

Get up and running with notebook-ui in minutes.

## 1. Installation

```bash
npm install notebook-ui react react-dom react-router-dom lucide-react
```

## 2. Import Styles

Add this to your main entry file (`src/main.tsx` or `src/index.tsx`):

```tsx
import 'notebook-ui/styles';
```

## 3. Configure Tailwind (Optional but Recommended)

If you're using Tailwind CSS in your project:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/notebook-ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // notebook-ui design tokens are included automatically
    },
  },
};
```

## 4. Your First Component

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from 'notebook-ui';

function App() {
  return (
    <div className="p-8">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to notebook-ui</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            A beautiful component library with paper notebook aesthetic
          </p>
          <Button variant="primary">Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

## 5. Common Patterns

### Form with Validation

```tsx
import { useState } from 'react';
import { Input, Button, Stack } from 'notebook-ui';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    if (!email) {
      setErrors({ email: 'Email is required' });
      return;
    }
    // Submit logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="vertical" spacing={4}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          required
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit" fullWidth>
          Sign In
        </Button>
      </Stack>
    </form>
  );
}
```

### Data Table with Actions

```tsx
import { DataTable, Badge } from 'notebook-ui';
import { Edit, Trash } from 'lucide-react';

function UserList() {
  const columns = [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
    },
    {
      key: 'status',
      label: 'Status',
      render: (user) => (
        <Badge variant={user.status === 'active' ? 'success' : 'error'}>
          {user.status}
        </Badge>
      ),
    },
  ];

  const actions = [
    {
      label: 'Edit',
      icon: <Edit className="h-4 w-4" />,
      onClick: (user) => console.log('Edit', user),
    },
    {
      label: 'Delete',
      icon: <Trash className="h-4 w-4" />,
      onClick: (user) => console.log('Delete', user),
      danger: true,
    },
  ];

  return (
    <DataTable
      data={users}
      columns={columns}
      actions={actions}
      paginated
      pageSize={10}
      selectable
    />
  );
}
```

### Modal Dialog

```tsx
import { useState } from 'react';
import { Modal, Button, Input, Stack } from 'notebook-ui';

function EditUserModal({ user, onSave }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(user.name);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Edit User
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Edit User"
        size="md"
      >
        <Stack direction="vertical" spacing={4}>
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Stack direction="horizontal" spacing={2} justify="end">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                onSave({ ...user, name });
                setIsOpen(false);
              }}
            >
              Save
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
}
```

### Toast Notifications

```tsx
import { ToastContainer, addSuccessMessage, addErrorMessage } from 'notebook-ui';

function App() {
  const handleSave = async () => {
    try {
      await saveData();
      addSuccessMessage('Changes saved successfully!');
    } catch (error) {
      addErrorMessage('Failed to save changes');
    }
  };

  return (
    <div>
      {/* Add this once at app root */}
      <ToastContainer position="top-right" />

      <Button onClick={handleSave}>
        Save Changes
      </Button>
    </div>
  );
}
```

### Responsive Layout

```tsx
import { Show, Hide, Stack, Grid } from 'notebook-ui';

function ResponsiveLayout() {
  return (
    <>
      {/* Desktop navigation */}
      <Show above="md">
        <Stack direction="horizontal" spacing={4}>
          <NavItem>Dashboard</NavItem>
          <NavItem>Users</NavItem>
          <NavItem>Settings</NavItem>
        </Stack>
      </Show>

      {/* Mobile navigation */}
      <Show below="md">
        <MobileMenu />
      </Show>

      {/* Responsive grid */}
      <Grid cols={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={4}>
        <Card>Item 1</Card>
        <Card>Item 2</Card>
        <Card>Item 3</Card>
      </Grid>
    </>
  );
}
```

## 6. Common Components

### Buttons
```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button loading={true}>Loading...</Button>
<Button icon={<Plus />} iconPosition="left">Add</Button>
```

### Form Inputs
```tsx
<Input label="Text Input" />
<Select options={options} placeholder="Choose..." />
<Textarea label="Description" rows={4} />
<Checkbox label="I agree" />
<RadioGroup options={radioOptions} />
<Switch label="Enable feature" />
<DatePicker label="Start Date" />
<TimePicker label="Time" />
```

### Layout
```tsx
<Stack direction="vertical" spacing={4}>...</Stack>
<Grid cols={3} gap={4}>...</Grid>
<Card>...</Card>
```

### Feedback
```tsx
<Alert variant="info" message="Info message" />
<Modal isOpen={isOpen} onClose={close}>...</Modal>
<Loading />
<Progress value={75} />
```

## 7. TypeScript Support

notebook-ui is fully typed. Import types as needed:

```tsx
import {
  ButtonProps,
  InputProps,
  DataTableColumn,
  SelectOption,
} from 'notebook-ui';

interface User {
  id: string;
  name: string;
  email: string;
}

const columns: DataTableColumn<User>[] = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
];
```

## 8. Accessibility

All components follow WCAG AA guidelines:
- Full keyboard navigation
- ARIA attributes
- Screen reader support
- Focus management
- Semantic HTML

## 9. Next Steps

- **[Component Catalog](../docs/COMPONENT-CATALOG.md)** - Comprehensive component reference
- **[Examples](./README.md)** - Complete example applications
- **TypeScript Definitions** - Explore component interfaces in your IDE

## 10. Troubleshooting

### Styles not loading
Make sure you imported `'notebook-ui/styles'` in your entry file.

### Tailwind classes not working
Add notebook-ui to your Tailwind content paths in `tailwind.config.js`.

### TypeScript errors
Make sure you're using TypeScript 4.9+ and have all peer dependencies installed.

## Support

For issues or questions, contact the development team.

**License:** Proprietary - Copyright © 2025 kwhittenberger
