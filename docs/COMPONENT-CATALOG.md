# notebook-ui Component Catalog

**Version:** 1.0.0
**Total Components:** 111+
**License:** Proprietary

A comprehensive React component library with a warm, paper notebook aesthetic. This library provides all the UI primitives you need to build modern web applications.

---

## 📚 Table of Contents

1. [Getting Started](#getting-started)
2. [Core Form Components](#core-form-components)
3. [Layout Components](#layout-components)
4. [Data Display](#data-display)
5. [Feedback Components](#feedback-components)
6. [Navigation](#navigation)
7. [Loading States](#loading-states)
8. [Advanced Components](#advanced-components)
9. [Utility Components](#utility-components)

---

## Getting Started

### Installation

```bash
npm install notebook-ui
```

### Setup

```tsx
// In your app's entry point
import 'notebook-ui/styles';

// Import components
import { Button, Input, DataTable } from 'notebook-ui';
```

### Tailwind Configuration

Add notebook-ui to your Tailwind content paths:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/notebook-ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  // ...
};
```

---

## Core Form Components

### Button

Versatile button component with multiple variants, loading states, and icon support.

```tsx
import { Button } from 'notebook-ui';
import { Save, Trash } from 'lucide-react';

// Basic buttons
<Button variant="primary">Save Changes</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="ghost">Clear</Button>
<Button variant="danger">Delete</Button>
<Button variant="outline">Learn More</Button>

// With icons
<Button icon={<Save />} iconPosition="left">Save</Button>
<Button icon={<Trash />} iconPosition="right">Delete</Button>

// Icon-only
<Button iconOnly icon={<Save />} />

// Loading state
<Button loading={isSubmitting}>Submit</Button>

// With badge
<Button badge={5} badgeVariant="error">Messages</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- `loading`: boolean
- `icon`: ReactNode
- `iconPosition`: 'left' | 'right'
- `iconOnly`: boolean
- `badge`: number | string
- `badgeVariant`: 'primary' | 'success' | 'warning' | 'error'
- `fullWidth`: boolean
- `disabled`: boolean

---

### Input

Text input with icon support, validation states, and various input modes.

```tsx
import { Input } from 'notebook-ui';
import { Search, Mail, Lock } from 'lucide-react';

// Basic input
<Input
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

// With icons
<Input
  label="Search"
  prefixIcon={<Search />}
  placeholder="Search..."
/>

<Input
  label="Email"
  type="email"
  suffixIcon={<Mail />}
/>

// With validation
<Input
  label="Username"
  error="Username is already taken"
  helperText="Choose a unique username"
/>

// Clearable
<Input
  label="Search"
  clearable
  onClear={() => setSearch('')}
/>

// Loading state
<Input
  label="Checking availability..."
  loading={isChecking}
/>

// Sizes
<Input size="sm" label="Small" />
<Input size="md" label="Medium" />
<Input size="lg" label="Large" />
```

**Props:**
- `label`: string
- `type`: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
- `placeholder`: string
- `value`: string
- `onChange`: (e: ChangeEvent) => void
- `error`: string
- `helperText`: string
- `prefixIcon`: ReactNode
- `suffixIcon`: ReactNode
- `prefix`: string
- `suffix`: string
- `clearable`: boolean
- `onClear`: () => void
- `loading`: boolean
- `disabled`: boolean
- `readOnly`: boolean
- `size`: 'sm' | 'md' | 'lg'

---

### Select

Dropdown select component with search, virtualization, and grouped options.

```tsx
import { Select } from 'notebook-ui';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

// Basic select
<Select
  options={options}
  value={fruit}
  onChange={setFruit}
  placeholder="Choose a fruit"
/>

// Searchable
<Select
  options={options}
  searchable
  placeholder="Search fruits..."
/>

// With groups
const groupedOptions = [
  {
    label: 'Fruits',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
    ],
  },
  {
    label: 'Vegetables',
    options: [
      { value: 'carrot', label: 'Carrot' },
      { value: 'lettuce', label: 'Lettuce' },
    ],
  },
];

<Select groups={groupedOptions} />

// Clearable
<Select
  options={options}
  clearable
/>

// Loading
<Select
  options={options}
  loading={isLoading}
/>

// Creatable (add new options)
<Select
  options={options}
  creatable
  searchable
  onCreateOption={(value) => {
    const newOption = { value, label: value };
    setOptions([...options, newOption]);
  }}
/>

// Virtual scrolling (for large lists)
<Select
  options={largeOptionsList}
  virtualized
  virtualHeight="300px"
/>
```

**Props:**
- `options`: SelectOption[]
- `groups`: SelectOptionGroup[]
- `value`: string
- `onChange`: (value: string) => void
- `placeholder`: string
- `searchable`: boolean
- `clearable`: boolean
- `creatable`: boolean
- `onCreateOption`: (value: string) => void
- `loading`: boolean
- `disabled`: boolean
- `error`: string
- `helperText`: string
- `virtualized`: boolean
- `virtualHeight`: string
- `virtualItemHeight`: number

---

### MultiSelect

Multiple selection dropdown with tags.

```tsx
import { MultiSelect } from 'notebook-ui';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

<MultiSelect
  options={options}
  value={selectedFrameworks}
  onChange={setSelectedFrameworks}
  placeholder="Select frameworks"
  searchable
/>

// With max selections
<MultiSelect
  options={options}
  maxSelections={3}
  placeholder="Choose up to 3"
/>
```

---

### DatePicker, TimePicker, DateRangePicker

Comprehensive date and time input components.

```tsx
import { DatePicker, TimePicker, DateRangePicker } from 'notebook-ui';

// Date picker
<DatePicker
  label="Start Date"
  value={startDate}
  onChange={setStartDate}
  minDate={new Date()}
/>

// Time picker
<TimePicker
  label="Appointment Time"
  value={time}
  onChange={setTime}
  format="12"
/>

// Date range picker
<DateRangePicker
  label="Date Range"
  value={dateRange}
  onChange={setDateRange}
  presets={[
    { label: 'Last 7 days', value: getLast7Days() },
    { label: 'Last 30 days', value: getLast30Days() },
  ]}
/>
```

---

### NumberInput

Numeric input with increment/decrement buttons.

```tsx
import { NumberInput } from 'notebook-ui';

<NumberInput
  label="Quantity"
  value={quantity}
  onChange={setQuantity}
  min={1}
  max={100}
  step={1}
/>

// With precision
<NumberInput
  label="Price"
  value={price}
  onChange={setPrice}
  precision={2}
  formatValue={(val) => `$${val.toFixed(2)}`}
/>
```

---

### Switch, Checkbox, RadioGroup

Toggle and selection components.

```tsx
import { Switch, Checkbox, RadioGroup } from 'notebook-ui';

// Switch
<Switch
  checked={enabled}
  onChange={setEnabled}
  label="Enable notifications"
  loading={isUpdating}
/>

// Checkbox
<Checkbox
  checked={agreed}
  onChange={setAgreed}
  label="I agree to the terms"
  description="You must accept the terms to continue"
/>

// Checkbox with indeterminate state
<Checkbox
  checked={allSelected}
  indeterminate={someSelected}
  onChange={handleSelectAll}
  label="Select all"
/>

// Radio group
const options = [
  { value: 'card', label: 'Credit Card', icon: <CreditCard /> },
  { value: 'paypal', label: 'PayPal', icon: <Wallet /> },
  { value: 'bank', label: 'Bank Transfer', icon: <Building /> },
];

<RadioGroup
  name="payment"
  value={payment}
  onChange={setPayment}
  options={options}
  label="Payment Method"
  orientation="vertical"
/>
```

---

## Layout Components

### Stack, Grid, Box

Flexible layout primitives.

```tsx
import { Stack, Grid, Box } from 'notebook-ui';

// Vertical stack
<Stack direction="vertical" spacing={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>

// Horizontal stack with alignment
<Stack direction="horizontal" spacing={2} align="center">
  <Button>Cancel</Button>
  <Button variant="primary">Save</Button>
</Stack>

// Grid layout
<Grid cols={3} gap={4}>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>

// Responsive grid
<Grid
  cols={{ sm: 1, md: 2, lg: 3, xl: 4 }}
  gap={4}
>
  {items.map(item => <Card key={item.id}>{item.name}</Card>)}
</Grid>

// Box for spacing and styling
<Box p={4} m={2} bg="white" rounded="lg" shadow="md">
  Content here
</Box>
```

---

### Card

Container component for grouping related content.

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from 'notebook-ui';

<Card>
  <CardHeader>
    <CardTitle>User Profile</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Profile information goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Edit Profile</Button>
  </CardFooter>
</Card>

// Clickable card
<Card hover clickable onClick={() => navigate(`/user/${user.id}`)}>
  <CardContent>
    <h3>{user.name}</h3>
    <p>{user.email}</p>
  </CardContent>
</Card>
```

---

## Data Display

### DataTable

Feature-rich table component with sorting, filtering, pagination, row actions, and more.

```tsx
import { DataTable } from 'notebook-ui';

const columns = [
  {
    key: 'name',
    label: 'Name',
    sortable: true,
    filterable: true,
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
  },
  {
    key: 'role',
    label: 'Role',
    render: (user) => <Badge>{user.role}</Badge>,
  },
  {
    key: 'status',
    label: 'Status',
    render: (user) => (
      <StatusBadge status={user.status}>
        {user.status}
      </StatusBadge>
    ),
  },
];

<DataTable
  data={users}
  columns={columns}

  // Sorting
  sortable
  defaultSort={{ key: 'name', direction: 'asc' }}

  // Filtering
  filterable

  // Pagination
  paginated
  pageSize={10}

  // Row actions
  actions={[
    { label: 'Edit', icon: <Edit />, onClick: handleEdit },
    { label: 'Delete', icon: <Trash />, onClick: handleDelete, danger: true },
  ]}

  // Selection
  selectable
  onSelectionChange={setSelectedRows}

  // Row expansion
  expandable
  renderExpandedRow={(user) => <UserDetails user={user} />}

  // Loading state
  loading={isLoading}

  // Empty state
  emptyState={<EmptyState message="No users found" />}

  // Density
  density="comfortable"

  // Virtual scrolling for large datasets
  virtualized
  virtualHeight="600px"
/>

// With server-side data
<DataTable
  data={users}
  columns={columns}
  paginated
  serverSide
  totalItems={totalCount}
  onPageChange={fetchPage}
  onSortChange={fetchSorted}
  onFilterChange={fetchFiltered}
/>

// With secondary row content
const columnsWithSecondary = [
  {
    key: 'name',
    label: 'Name',
    renderSecondary: (user) => <Text size="sm" color="muted">{user.email}</Text>,
  },
  // ...
];
```

---

### Badge, StatusBadge

Visual indicators for status, counts, and categories.

```tsx
import { Badge, StatusBadge } from 'notebook-ui';

// Basic badges
<Badge variant="primary">New</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Error</Badge>

// Dot indicator (no text)
<Badge dot variant="success" />

// Status badge
<StatusBadge status="active">Active</StatusBadge>
<StatusBadge status="pending">Pending</StatusBadge>
<StatusBadge status="inactive">Inactive</StatusBadge>

// Sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

---

### Calendar

Full calendar view with event markers and date range selection.

```tsx
import { Calendar } from 'notebook-ui';

// Simple date picker
<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
/>

// With events
const events = [
  { date: new Date(2025, 0, 15), title: 'Meeting', color: 'primary' },
  { date: new Date(2025, 0, 20), title: 'Deadline', color: 'error' },
];

<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
  events={events}
  onEventClick={(event) => console.log(event)}
/>

// Date range selection
<Calendar
  rangeMode
  rangeValue={dateRange}
  onRangeChange={setDateRange}
  minDate={new Date()}
/>

// With week numbers
<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
  showWeekNumbers
  firstDayOfWeek={1}
/>
```

---

## Feedback Components

### Toast

Notification system with various types and positions.

```tsx
import { Toast, ToastContainer, addSuccessMessage, addErrorMessage, addWarningMessage, addInfoMessage } from 'notebook-ui';

// Add ToastContainer to your app root
function App() {
  return (
    <>
      <ToastContainer position="top-right" />
      {/* Your app */}
    </>
  );
}

// Show toasts
addSuccessMessage('Profile updated successfully!');
addErrorMessage('Failed to save changes');
addWarningMessage('Your session will expire soon');
addInfoMessage('New features available');

// With custom duration
addSuccessMessage('Saved!', { duration: 2000 });

// Custom position
<ToastContainer position="bottom-center" />
```

---

### Alert

Inline alert messages with action buttons.

```tsx
import { Alert } from 'notebook-ui';

// Basic alerts
<Alert variant="info" title="Information" message="This is an informational message" />
<Alert variant="success" title="Success" message="Your changes have been saved" />
<Alert variant="warning" title="Warning" message="Please review before proceeding" />
<Alert variant="error" title="Error" message="An error occurred" />

// With actions
<Alert
  variant="warning"
  title="Unsaved Changes"
  message="You have unsaved changes that will be lost"
  actions={[
    { label: 'Save', onClick: handleSave, variant: 'primary' },
    { label: 'Discard', onClick: handleDiscard, variant: 'secondary' },
  ]}
/>

// Closable
<Alert
  variant="info"
  message="This is dismissible"
  onClose={() => setShowAlert(false)}
/>
```

---

### Modal, Drawer, BottomSheet

Overlay components for dialogs and side panels.

```tsx
import { Modal, Drawer, BottomSheet } from 'notebook-ui';

// Modal
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Edit Profile"
  size="lg"
  animation="scale"
>
  <form onSubmit={handleSubmit}>
    <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
    <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    <Stack direction="horizontal" spacing={2}>
      <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
      <Button type="submit">Save</Button>
    </Stack>
  </form>
</Modal>

// Drawer (side panel)
<Drawer
  isOpen={isDrawerOpen}
  onClose={() => setIsDrawerOpen(false)}
  title="Filters"
  placement="right"
  size="md"
  footer={
    <>
      <Button variant="ghost" onClick={() => setIsDrawerOpen(false)}>Cancel</Button>
      <Button onClick={applyFilters}>Apply Filters</Button>
    </>
  }
>
  <FilterForm />
</Drawer>

// Bottom sheet (mobile-friendly)
<BottomSheet
  isOpen={isSheetOpen}
  onClose={() => setIsSheetOpen(false)}
  title="Share"
>
  <ShareOptions />
</BottomSheet>
```

---

### ConfirmDialog

Confirmation dialog for destructive actions.

```tsx
import { ConfirmDialog } from 'notebook-ui';

<ConfirmDialog
  isOpen={showConfirm}
  onClose={() => setShowConfirm(false)}
  onConfirm={handleDelete}
  title="Delete Account"
  message="Are you sure you want to delete your account? This action cannot be undone."
  confirmText="Delete"
  cancelText="Cancel"
  variant="danger"
/>
```

---

## Navigation

### Breadcrumbs, Tabs, Pagination

Navigation components for hierarchies, sections, and lists.

```tsx
import { Breadcrumbs, Tabs, Pagination } from 'notebook-ui';

// Breadcrumbs
<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Users', href: '/users' },
    { label: 'John Doe', href: '/users/123' },
  ]}
/>

// Tabs
const tabs = [
  { id: 'profile', label: 'Profile', icon: <User /> },
  { id: 'settings', label: 'Settings', icon: <Settings /> },
  { id: 'billing', label: 'Billing', icon: <CreditCard /> },
];

<Tabs
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  variant="underline"
/>

// Vertical tabs
<Tabs
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  orientation="vertical"
/>

// Pagination
<Pagination
  currentPage={page}
  totalPages={totalPages}
  onPageChange={setPage}
  showPageJump
/>
```

---

### Sidebar

Application sidebar navigation.

```tsx
import { Sidebar, SidebarSection, SidebarItem } from 'notebook-ui';

<Sidebar>
  <SidebarSection title="Main">
    <SidebarItem icon={<Home />} label="Dashboard" href="/" active />
    <SidebarItem icon={<Users />} label="Users" href="/users" />
    <SidebarItem icon={<Settings />} label="Settings" href="/settings" />
  </SidebarSection>

  <SidebarSection title="Reports">
    <SidebarItem icon={<BarChart />} label="Analytics" href="/analytics" />
    <SidebarItem icon={<FileText />} label="Documents" href="/documents" />
  </SidebarSection>
</Sidebar>

// Collapsible sidebar
<Sidebar collapsed={isCollapsed} onToggle={setIsCollapsed} />
```

---

## Loading States

### Loading, Skeleton, LoadingOverlay

Loading indicators and placeholder states.

```tsx
import { Loading, Skeleton, SkeletonCard, SkeletonTable, LoadingOverlay } from 'notebook-ui';

// Spinner
<Loading size="md" />

// Skeleton placeholders
<Skeleton width="200px" height="20px" />
<Skeleton circle width="40px" height="40px" />

// Skeleton card
<SkeletonCard />

// Skeleton table
<SkeletonTable rows={5} cols={4} />

// Loading overlay
<LoadingOverlay visible={isLoading}>
  <YourContent />
</LoadingOverlay>
```

---

### Progress

Linear and circular progress indicators.

```tsx
import { Progress } from 'notebook-ui';

// Linear progress
<Progress value={75} showLabel />

// Circular progress
<Progress
  value={60}
  variant="circular"
  size="lg"
  showLabel
/>

// Striped and animated
<Progress
  value={45}
  striped
  animated
  color="primary"
/>

// Custom label
<Progress
  value={80}
  label="80% Complete"
  color="success"
/>
```

---

## Advanced Components

### DataPage

Complete CRUD page with table, filters, and modals.

```tsx
import { DataPage } from 'notebook-ui';

<DataPage
  title="Users"
  data={users}
  columns={columns}
  onAdd={handleAdd}
  onEdit={handleEdit}
  onDelete={handleDelete}
  filters={[
    { key: 'role', label: 'Role', type: 'select', options: roleOptions },
    { key: 'status', label: 'Status', type: 'select', options: statusOptions },
  ]}
  searchable
  exportable
/>
```

---

### KanbanBoard

Drag-and-drop kanban board.

```tsx
import { KanbanBoard } from 'notebook-ui';

const columns = [
  {
    id: 'todo',
    title: 'To Do',
    color: '#94a3b8',
    cards: [
      {
        id: '1',
        title: 'Design homepage',
        description: 'Create mockups',
        tags: ['design', 'ui'],
        priority: 'high',
      },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    color: '#3b82f6',
    limit: 3,
    cards: [],
  },
  {
    id: 'done',
    title: 'Done',
    color: '#10b981',
    cards: [],
  },
];

<KanbanBoard
  columns={columns}
  onChange={setColumns}
  onCardClick={(card) => openCardDetails(card)}
  onAddCard={(columnId) => openNewCardDialog(columnId)}
  showAddButton
/>
```

---

### CommandPalette

Keyboard-driven command launcher.

```tsx
import { CommandPalette, useCommandPalette } from 'notebook-ui';

function App() {
  const { open, setOpen } = useCommandPalette(); // Adds Ctrl+K listener
  const [recentCommands, setRecentCommands] = useState([]);

  const commands = [
    {
      id: 'home',
      label: 'Go to Dashboard',
      icon: <Home />,
      group: 'Navigation',
      shortcut: 'Ctrl+H',
      onExecute: () => navigate('/dashboard'),
    },
    {
      id: 'settings',
      label: 'Open Settings',
      icon: <Settings />,
      group: 'Navigation',
      onExecute: () => navigate('/settings'),
    },
  ];

  return (
    <CommandPalette
      commands={commands}
      open={open}
      onOpenChange={setOpen}
      recentCommands={recentCommands}
      onRecentCommandsChange={setRecentCommands}
    />
  );
}
```

---

### Transfer

Dual-list transfer component.

```tsx
import { Transfer } from 'notebook-ui';

const [sourceItems, setSourceItems] = useState([
  { id: '1', label: 'User 1', description: 'admin@example.com' },
  { id: '2', label: 'User 2', description: 'user@example.com' },
]);

const [targetItems, setTargetItems] = useState([]);

<Transfer
  sourceItems={sourceItems}
  targetItems={targetItems}
  onChange={(newSource, newTarget) => {
    setSourceItems(newSource);
    setTargetItems(newTarget);
  }}
  titles={{ source: 'Available Users', target: 'Selected Users' }}
  showSearch
  showCounts
  height="500px"
/>
```

---

## Utility Components

### Show / Hide

Responsive visibility utilities.

```tsx
import { Show, Hide } from 'notebook-ui';

// Show only on desktop
<Show above="md">
  <DesktopNav />
</Show>

// Show only on mobile
<Show below="md">
  <MobileNav />
</Show>

// Show only at specific breakpoint
<Show only="lg">
  <TabletContent />
</Show>

// Hide on mobile
<Hide below="md">
  <DesktopFeature />
</Hide>
```

---

### Menu, ContextMenu

Dropdown and context menus.

```tsx
import { Menu, MenuItem, MenuDivider, ContextMenu } from 'notebook-ui';

// Dropdown menu
<Menu
  trigger={<Button>Actions</Button>}
  placement="bottom-start"
>
  <MenuItem icon={<Edit />} label="Edit" onClick={handleEdit} />
  <MenuItem icon={<Copy />} label="Duplicate" onClick={handleDuplicate} />
  <MenuDivider />
  <MenuItem icon={<Trash />} label="Delete" onClick={handleDelete} danger />
</Menu>

// Context menu (right-click)
<ContextMenu>
  <ContextMenuTrigger>
    <Card>Right-click me</Card>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <MenuItem label="Edit" onClick={handleEdit} />
    <MenuItem label="Delete" onClick={handleDelete} danger />
  </ContextMenuContent>
</ContextMenu>
```

---

## Design Tokens

### Colors

```js
// Paper (backgrounds)
paper-50 → paper-900

// Ink (text)
ink-50 → ink-900

// Primary
primary-50 → primary-900

// Accent
accent-50 → accent-900

// Success, Warning, Error
success-50 → success-900
warning-50 → warning-900
error-50 → error-900
```

### Spacing

```js
// Tailwind scale: 0, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64
```

### Typography

```js
// Sizes: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl
// Weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
```

---

## Best Practices

### 1. Use Layout Primitives

```tsx
// ❌ Don't use raw divs with Tailwind
<div className="flex gap-4 p-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// ✅ Use Stack
<Stack direction="horizontal" spacing={4} p={4}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Stack>
```

### 2. Consistent Form Patterns

```tsx
// Always use label, error, and helperText
<Input
  label="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={errors.email}
  helperText="We'll never share your email"
  required
/>
```

### 3. Loading States

```tsx
// Always show loading indicators
<Button loading={isSubmitting}>
  Submit
</Button>

<DataTable
  data={users}
  columns={columns}
  loading={isLoading}
/>
```

### 4. Accessibility

```tsx
// All interactive elements should have proper ARIA
<Button aria-label="Close dialog" iconOnly>
  <X />
</Button>

// Forms should have proper labels
<Input id="email" label="Email" />
```

---

## Support

For issues, feature requests, or questions, please contact the development team.

**License:** Proprietary - Copyright © 2025 kwhittenberger
