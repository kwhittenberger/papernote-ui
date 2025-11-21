# notebook-ui Examples

This directory contains example applications demonstrating how to use notebook-ui components.

## Examples

### 1. Component Showcase
A comprehensive demo application showing all components in action.

**Location:** `component-showcase/`

**Features:**
- Interactive component playground
- All 111+ components demonstrated
- Copy-paste ready code snippets
- Responsive design examples
- CRUD patterns
- Form validation examples
- Data table with all features

### 2. Dashboard Application
A complete admin dashboard built entirely with notebook-ui.

**Location:** `dashboard-app/`

**Features:**
- User management with DataTable
- Analytics dashboard
- Form examples
- Modal workflows
- Toast notifications
- Sidebar navigation

### 3. E-Commerce Product Catalog
Product listing and management interface.

**Location:** `ecommerce-catalog/`

**Features:**
- Product grid with Cards
- Filters and search
- Shopping cart
- Checkout flow
- Image galleries

## Running Examples

Each example is a standalone React application:

```bash
cd examples/component-showcase
npm install
npm run dev
```

## Integration Pattern

All examples follow the same integration pattern:

```tsx
// 1. Import styles
import 'notebook-ui/styles';

// 2. Import components
import { Button, Input, DataTable } from 'notebook-ui';

// 3. Use in your app
function App() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
```

## Component Categories

### Forms
- Input, Select, Multi Select
- Date/Time pickers
- Number Input
- Checkboxes, Radios, Switches
- Textarea, Password Input
- Masked Input, Autocomplete

### Layout
- Stack, Grid, Box
- Card, CardHeader, CardContent
- Modal, Drawer, BottomSheet
- Tabs, Accordion, Collapsible

### Data Display
- DataTable (full-featured)
- Table (simple)
- Badge, StatusBadge
- Calendar, Timeline
- KanbanBoard, Transfer

### Feedback
- Toast notifications
- Alert messages
- Modal dialogs
- ConfirmDialog
- Loading states
- Progress bars

### Navigation
- Breadcrumbs
- Pagination
- Sidebar
- Menu, ContextMenu
- CommandPalette

### Advanced
- DataPage (complete CRUD)
- FormWizard
- RichTextEditor
- MarkdownEditor
- Carousel
- TreeView
- Stepper

## Best Practices

### 1. Always use layout primitives
```tsx
// ❌ Avoid
<div className="flex gap-4">
  <div>Item</div>
</div>

// ✅ Prefer
<Stack direction="horizontal" spacing={4}>
  <Box>Item</Box>
</Stack>
```

### 2. Handle loading states
```tsx
<Button loading={isSubmitting}>Submit</Button>
<DataTable data={users} loading={isLoading} />
```

### 3. Show validation errors
```tsx
<Input
  label="Email"
  error={errors.email}
  helperText="Required field"
/>
```

### 4. Use TypeScript
```tsx
import { ButtonProps, DataTableColumn } from 'notebook-ui';

const columns: DataTableColumn<User>[] = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
];
```

## Need Help?

- **Documentation:** [Component Catalog](../docs/COMPONENT-CATALOG.md)
- **TypeScript Definitions:** All components have full TypeScript support
- **Accessibility:** All components follow WAI-ARIA guidelines

## Contributing

To add a new example:

1. Create a new directory under `examples/`
2. Add a `README.md` describing the example
3. Include a `package.json` with dependencies
4. Document any special setup required

## License

Proprietary - Copyright © 2025 kwhittenberger
