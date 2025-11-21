# Notebook-UI Developer Guide

This guide helps application developers effectively use notebook-ui to build complete, consistent applications.

---

## Quick Start

### Installation

```bash
npm install github:kwhittenberger/notebook-ui
```

### Required Peer Dependencies

```bash
npm install react react-dom react-router-dom lucide-react tailwindcss
```

### Setup

**1. Import styles in your entry file (e.g., `src/main.tsx`):**
```typescript
import 'notebook-ui/styles';
```

**2. Configure Tailwind (`tailwind.config.js`):**
```javascript
import notebookConfig from 'notebook-ui/tailwind-config';

export default {
  ...notebookConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/notebook-ui/src/**/*.{js,ts,jsx,tsx}',
  ],
};
```

---

## Core Principles

### 1. No Custom HTML/CSS

notebook-ui provides ALL UI components. You should never:
- Create custom `<div>` with Tailwind classes
- Use inline styles
- Create custom styled components

**Wrong:**
```typescript
<div className="flex gap-4 p-4 bg-white rounded-lg">
  <h2 className="text-lg font-bold">Title</h2>
</div>
```

**Correct:**
```typescript
import { Card, CardHeader, CardTitle, Stack } from 'notebook-ui';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
</Card>
```

### 2. Use Layout Primitives

Instead of flexbox/grid classes, use layout components:

```typescript
import { Stack, Grid, Box, Text } from 'notebook-ui';

// Vertical stack with spacing
<Stack spacing="md">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Stack>

// Horizontal stack
<Stack direction="horizontal" spacing="sm" align="center">
  <Button>Save</Button>
  <Button variant="secondary">Cancel</Button>
</Stack>

// Grid layout
<Grid columns={3} gap="md">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</Grid>

// Box for padding/margin/borders
<Box padding="lg" border="all">
  <Text>Content with padding and border</Text>
</Box>
```

### 3. Use Semantic Text

Always use the Text component instead of HTML elements:

```typescript
import { Text } from 'notebook-ui';

// Headings
<Text as="h1" size="2xl" weight="bold">Page Title</Text>
<Text as="h2" size="xl" weight="semibold">Section Title</Text>

// Body text
<Text>Regular paragraph text</Text>
<Text size="sm" color="muted">Helper text</Text>

// Labels
<Text as="label" weight="medium">Field Label</Text>
```

### 4. Icons from lucide-react

All icons must come from lucide-react:

```typescript
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { Button, Input } from 'notebook-ui';

<Button icon={Plus}>Add Item</Button>
<Input icon={Search} placeholder="Search..." />
```

---

## Common Patterns

### Page Layout

```typescript
import {
  Layout,
  Page,
  Sidebar,
  Breadcrumbs,
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from 'notebook-ui';

function MyPage() {
  return (
    <Layout
      sidebar={<Sidebar items={navItems} currentPath="/my-page" />}
    >
      <Page title="My Page">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'My Page' }
        ]} />

        <Card>
          <CardHeader>
            <CardTitle>Content</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Your content */}
          </CardContent>
        </Card>
      </Page>
    </Layout>
  );
}
```

### Data Table with Actions

```typescript
import { DataTable, Badge, Button } from 'notebook-ui';
import { Edit, Trash2 } from 'lucide-react';

const columns = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  {
    key: 'status',
    header: 'Status',
    render: (row) => (
      <Badge variant={row.status === 'active' ? 'success' : 'neutral'}>
        {row.status}
      </Badge>
    )
  },
];

const actions = [
  {
    label: 'Edit',
    icon: Edit,
    onClick: (row) => handleEdit(row)
  },
  {
    label: 'Delete',
    icon: Trash2,
    onClick: (row) => handleDelete(row),
    variant: 'danger'
  },
];

<DataTable
  data={users}
  columns={columns}
  actions={actions}
  loading={isLoading}
  selectable
  onRowSelect={setSelectedRows}
  onSortChange={handleSort}
  currentSort={sort}
/>
```

### Form with Validation

```typescript
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Stack,
  Input,
  Select,
  Textarea,
  Button,
  addSuccessMessage,
  addErrorMessage
} from 'notebook-ui';

function MyForm() {
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveData(formData);
      addSuccessMessage('Saved successfully');
    } catch (error) {
      addErrorMessage('Failed to save');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Stack spacing="md">
            <Input
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              validationState={errors.name ? 'error' : null}
              validationMessage={errors.name}
              required
            />

            <Select
              label="Country"
              options={countries}
              value={country}
              onChange={setCountry}
              searchable
            />

            <Textarea
              label="Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              maxLength={500}
              showCounter
            />
          </Stack>
        </CardContent>
        <CardFooter>
          <Stack direction="horizontal" spacing="sm" justify="end">
            <Button variant="secondary" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" loading={isSubmitting}>
              Save
            </Button>
          </Stack>
        </CardFooter>
      </form>
    </Card>
  );
}
```

### Modal Dialog

```typescript
import { Modal, ModalFooter, Button, Stack, Input } from 'notebook-ui';

function EditModal({ isOpen, onClose, onSave }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Item"
      size="md"
    >
      <Stack spacing="md">
        <Input label="Name" value={name} onChange={setName} />
        <Input label="Email" value={email} onChange={setEmail} />
      </Stack>

      <ModalFooter>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleSave} loading={isSaving}>
          Save Changes
        </Button>
      </ModalFooter>
    </Modal>
  );
}
```

### Confirmation Dialog

```typescript
import { ConfirmDialog, useConfirmDialog, Button } from 'notebook-ui';

function DeleteButton({ item, onDelete }) {
  const { isOpen, open, close } = useConfirmDialog();

  const handleConfirm = async () => {
    await onDelete(item.id);
    close();
  };

  return (
    <>
      <Button variant="danger" onClick={open}>
        Delete
      </Button>

      <ConfirmDialog
        isOpen={isOpen}
        onClose={close}
        onConfirm={handleConfirm}
        title="Delete Item"
        message={`Are you sure you want to delete "${item.name}"?`}
        variant="danger"
        confirmLabel="Delete"
      />
    </>
  );
}
```

### Toast Notifications

```typescript
import {
  addSuccessMessage,
  addErrorMessage,
  addWarningMessage,
  addInfoMessage
} from 'notebook-ui';

// In your component
async function handleSave() {
  try {
    await api.save(data);
    addSuccessMessage('Item saved successfully');
  } catch (error) {
    addErrorMessage('Failed to save item');
  }
}

// Warning
addWarningMessage('Your session will expire in 5 minutes');

// Info
addInfoMessage('New features are available');
```

### Loading States

```typescript
import { Loading, Skeleton, SkeletonCard, SkeletonTable } from 'notebook-ui';

// Spinner
<Loading variant="spinner" size="lg" text="Loading..." />

// Skeleton for custom content
<Skeleton className="h-8 w-full" />

// Pre-built skeletons
<SkeletonCard />
<SkeletonTable rows={5} />
```

### Empty State

```typescript
import { EmptyState } from 'notebook-ui';
import { FileText, Plus } from 'lucide-react';

<EmptyState
  icon={FileText}
  title="No Documents"
  description="Get started by creating your first document"
  primaryAction="Create Document"
  onPrimaryAction={() => setShowCreateModal(true)}
  secondaryAction="Import"
  onSecondaryAction={() => setShowImportModal(true)}
/>
```

### Tabs

```typescript
import { Tabs } from 'notebook-ui';
import { User, Settings, CreditCard } from 'lucide-react';

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'billing', label: 'Billing', icon: CreditCard },
];

<Tabs
  tabs={tabs}
  activeTab={activeTab}
  onChange={setActiveTab}
  variant="underline"
/>

{activeTab === 'profile' && <ProfilePanel />}
{activeTab === 'settings' && <SettingsPanel />}
{activeTab === 'billing' && <BillingPanel />}
```

### Filter Bar

```typescript
import { FilterBar } from 'notebook-ui';

const filters = [
  {
    key: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
    ]
  },
  {
    key: 'search',
    label: 'Search',
    type: 'text',
    placeholder: 'Search by name...'
  },
  {
    key: 'dateRange',
    label: 'Date',
    type: 'date'
  }
];

<FilterBar
  filters={filters}
  values={filterValues}
  onChange={handleFilterChange}
  onClear={handleClearFilters}
/>
```

---

## Display Components

### Currency

```typescript
import { CurrencyDisplay } from 'notebook-ui';

<CurrencyDisplay amount={1234.56} />
// $1,234.56

<CurrencyDisplay amount={1234.56} currency="EUR" />
// €1,234.56

<CurrencyDisplay amount={-500} color="error" showSign />
// -$500.00 (in red)
```

### Dates

```typescript
import { DateDisplay } from 'notebook-ui';

<DateDisplay date={new Date()} />
// Nov 19, 2025

<DateDisplay date={new Date()} format="long" />
// November 19, 2025

<DateDisplay date={null} fallback="Not set" />
// Not set
```

### Badges

```typescript
import { Badge, StatusBadge } from 'notebook-ui';
import { Star } from 'lucide-react';

// Generic badge
<Badge variant="success">Active</Badge>
<Badge variant="warning" icon={Star}>Featured</Badge>

// Status badge with auto icon
<StatusBadge status="paid" />
<StatusBadge status="pending" />
<StatusBadge status="overdue" />
```

---

## When a Component is Missing

If notebook-ui doesn't have a component you need:

### 1. Check the Inventory

Review `docs/COMPONENT-INVENTORY.md` to see if:
- The component exists under a different name
- There's a similar component that can be adapted
- It's on the roadmap

### 2. Do NOT Create It in Your App

Creating custom components in host apps violates the design system principle.

### 3. Add It to notebook-ui

**Step 1:** Create the component in `src/components/`:
```typescript
// src/components/MyNewComponent.tsx
import React from 'react';

export interface MyNewComponentProps {
  // props
}

export default function MyNewComponent(props: MyNewComponentProps) {
  return (/* implementation */);
}
```

**Step 2:** Export from `src/components/index.ts`:
```typescript
export { default as MyNewComponent } from './MyNewComponent';
export type { MyNewComponentProps } from './MyNewComponent';
```

**Step 3:** Build:
```bash
npm run build
```

**Step 4:** Update in your app:
```bash
npm update notebook-ui
```

### 4. Component Guidelines

When creating new components:

- **Use design tokens**: `text-ink-600`, `bg-paper-50`, `border-paper-200`
- **Follow existing patterns**: Look at similar components for API design
- **Support variants/sizes**: Use the standard scales (`sm | md | lg`, etc.)
- **Add TypeScript types**: Export both component and props interface
- **Include accessibility**: ARIA labels, keyboard support, focus management
- **Keep it generic**: Avoid app-specific logic

---

## Best Practices

### 1. Spacing Consistency

Use the spacing scale consistently:
- `xs`: 4px - tight spacing
- `sm`: 8px - compact layouts
- `md`: 16px - standard spacing (default)
- `lg`: 24px - comfortable breathing room
- `xl`: 32px - section separation

### 2. Validation States

Use the validation system for all form inputs:

```typescript
<Input
  validationState={error ? 'error' : success ? 'success' : null}
  validationMessage={error || successMessage}
/>
```

### 3. Loading States

Always show loading states when fetching data:

```typescript
<DataTable
  data={data}
  loading={isLoading}
  // ...
/>
```

### 4. Error Handling

Use toast messages for async operations:

```typescript
try {
  await operation();
  addSuccessMessage('Success');
} catch (error) {
  addErrorMessage(error.message || 'Operation failed');
}
```

### 5. Accessibility

- Use semantic elements via `as` prop on Text
- Provide icon buttons with `aria-label`
- Use ConfirmDialog for destructive actions
- Support keyboard navigation

---

## Type Safety

notebook-ui exports TypeScript types for all components:

```typescript
import type {
  ButtonProps,
  DataTableColumn,
  SelectOption,
  SortConfig,
  PaginationResponse
} from 'notebook-ui';

// Define typed columns
const columns: DataTableColumn<User>[] = [
  { key: 'name', header: 'Name', sortable: true },
];

// Define typed options
const options: SelectOption[] = [
  { value: '1', label: 'Option 1' },
];
```

---

## Troubleshooting

### Styles Not Applying

1. Ensure you imported styles: `import 'notebook-ui/styles';`
2. Check Tailwind content paths include notebook-ui
3. Rebuild your app after notebook-ui updates

### Component Not Found

1. Check the correct export name in `src/components/index.ts`
2. Run `npm update notebook-ui` to get latest version
3. Restart your dev server

### TypeScript Errors

1. Ensure `@types/react` and `@types/react-dom` are installed
2. Check that you're importing types correctly:
   ```typescript
   import type { ButtonProps } from 'notebook-ui';
   ```

### Docker Development

When developing with Docker:

```bash
# After notebook-ui changes, rebuild the image
docker-compose build --no-cache frontend

# Hard refresh browser
Ctrl+Shift+R
```

---

## Getting Help

1. Review this guide and the component inventory
2. Check existing components for patterns
3. Look at the README.md for examples
4. File an issue for missing features

---

## Component Quick Reference

### Form Inputs
`Button` `Input` `Textarea` `Select` `MultiSelect` `Switch` `Checkbox` `RadioGroup`

### Layout
`Stack` `Grid` `GridItem` `Box` `Text` `Card` (+ Header, Title, Content, Footer)

### Data Display
`DataTable` `Table` `Badge` `StatusBadge` `Avatar` `CurrencyDisplay` `DateDisplay` `EmptyState`

### Feedback
`Toast` (+ addSuccessMessage, etc.) `Alert` `Modal` (+ ModalFooter) `ConfirmDialog` `Tooltip`

### Navigation
`Sidebar` `Breadcrumbs` `Tabs` `Pagination` `StepIndicator` `Accordion` `Dropdown`

### Loading
`Loading` `Skeleton` `SkeletonCard` `SkeletonTable` `LoadingOverlay`

### Utilities
`FilterBar` `ControlBar` `ExportButton` `QueryTransparency`

### App Layout
`Layout` `AppLayout` `PageLayout` `Page` `Dashboard`

