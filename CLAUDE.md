# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What is notebook-ui?

A React component library with a paper notebook aesthetic. This is the **single source of truth for all UI components** across multiple applications (CMMS, Conductor, epstein-files, etc.). Host applications must use notebook-ui components exclusively - no custom HTML/CSS/Tailwind is permitted.

## Quick Reference - Common Patterns

### CRITICAL: Do NOT Use Raw HTML
```tsx
// ❌ WRONG - Never do this
<div className="flex gap-4">
  <h1>Title</h1>
  <p>Content</p>
</div>

// ✅ CORRECT - Use notebook-ui components
import { Stack, Text } from 'notebook-ui';
<Stack direction="horizontal" gap="md">
  <Text as="h1" size="2xl" weight="bold">Title</Text>
  <Text>Content</Text>
</Stack>
```

### Layout Components (Use Instead of `<div>`)
```tsx
import { Stack, Grid, Box, Text, Card } from 'notebook-ui';

// Vertical stack with spacing
<Stack spacing="md">...</Stack>
<Stack gap="md">...</Stack>  // 'gap' is alias for 'spacing'

// Horizontal layout
<Stack direction="horizontal" spacing="sm" align="center">...</Stack>

// Grid layout
<Grid columns={3} gap="md">...</Grid>

// Generic container
<Box padding="md">...</Box>

// Typography (instead of h1, h2, p, span)
<Text as="h1" size="2xl" weight="bold">Heading</Text>
<Text size="sm" color="muted">Description</Text>
<Text color="warning">Warning text</Text>
```

### Form Components
```tsx
import { Button, Input, Select, Textarea, Checkbox, Switch, MultiSelect } from 'notebook-ui';

// Button with loading state
<Button loading={isSubmitting} onClick={handleSubmit}>Save</Button>
<Button variant="danger" onClick={handleDelete}>Delete</Button>

// Input with validation and loading
<Input
  label="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  validationState="error"
  validationMessage="Invalid email"
  loading={isValidating}
  clearable
/>

// Textarea with loading
<Textarea label="Notes" loading={isSaving} />

// Select with search
<Select
  options={[{ value: 'a', label: 'Option A' }]}
  value={selected}
  onChange={setSelected}
  searchable
  clearable
/>

// MultiSelect with imperative handle
const multiSelectRef = useRef<MultiSelectHandle>(null);
<MultiSelect
  ref={multiSelectRef}
  options={options}
  value={selectedItems}
  onChange={setSelectedItems}
  loading={isLoadingOptions}
/>
// Imperative: multiSelectRef.current?.open()
```

### Data Display
```tsx
import { DataTable, Badge, StatusBadge } from 'notebook-ui';

// DataTable with pagination (NEW!)
<DataTable
  data={currentPageData}
  columns={[
    { key: 'name', header: 'Name', sortable: true },
    { key: 'status', header: 'Status', render: (item) => <Badge>{item.status}</Badge> },
  ]}
  // Built-in pagination
  paginated
  currentPage={page}
  pageSize={10}
  totalItems={totalCount}  // For server-side pagination
  onPageChange={setPage}
  onPageSizeChange={setPageSize}
  // Actions
  onEdit={(item) => openEditModal(item)}
  onDelete={(item) => confirmDelete(item)}
  // Selection
  selectable
  onRowSelect={(ids) => setSelectedIds(ids)}
/>
```

### Feedback Components
```tsx
import { Modal, Toast, Alert, addSuccessMessage, addErrorMessage } from 'notebook-ui';

// Toast messages (global)
addSuccessMessage('Saved successfully');
addErrorMessage('Failed to save');

// Modal
<Modal isOpen={isOpen} onClose={handleClose} title="Edit User" size="lg">
  {/* content */}
</Modal>
```

### All Icons from lucide-react
```tsx
import { Edit, Trash, Plus, Search, Check, X } from 'lucide-react';
<Button icon={<Plus className="h-4 w-4" />}>Add Item</Button>
```

## Commands

```bash
# Build library (creates dist/)
npm run build

# Type check
npm run typecheck

# Lint
npm run lint

# Watch mode for development
npm run dev
```

## Architecture

### Build System
- **Rollup** bundles the library with TypeScript, PostCSS, and CSS output
- Outputs: CommonJS (`dist/index.js`), ESM (`dist/index.esm.js`), types (`dist/index.d.ts`), styles (`dist/styles.css`)
- Tailwind CSS v3 with custom design tokens

### Source Structure
```
src/
├── components/     # All React components (70+ exports)
├── types/          # Shared TypeScript interfaces
├── styles/         # Global CSS (index.css)
└── utils/          # Helper functions (statisticsFormatter, sqlToNaturalLanguage, excelExport)
```

### Component Categories

**Core Form Components**: Button, Input, Select, MultiSelect, Switch, Textarea, Checkbox, RadioGroup

**Layout Primitives**: Stack, Grid, GridItem, Box, Text, Card (with CardHeader, CardTitle, CardContent, CardFooter)

**Data Display**: DataTable (feature-rich with sorting/filtering/expansion), Table (basic), Badge, StatusBadge, CurrencyDisplay, DateDisplay, Spreadsheet (Excel-like with formulas)

**Feedback**: Toast (with addSuccessMessage, addErrorMessage, etc.), Alert, Modal, ConfirmDialog, Tooltip

**Navigation**: Sidebar, Breadcrumbs, Tabs, Pagination, StepIndicator, PageNavigation

**Loading**: Loading, Skeleton, SkeletonCard, SkeletonTable, LoadingOverlay

**App Layouts**: Layout, AppLayout, PageLayout, Page, Dashboard, TwoColumnContent

### Design System

The library uses a muted, warm color palette defined in `tailwind.config.js`:
- **paper**: Warm off-white backgrounds (fafaf9)
- **ink**: Text colors in warm grays
- **primary**: Slate tones for structure
- **accent**: Subtle warm gray highlights
- **success/warning/error**: Muted semantic colors

### Key Patterns

**DataTable** (`src/components/DataTable.tsx`) is the primary data display component with:
- Column definitions with sortable, filterable options
- Row actions (edit, delete, custom)
- Row expansion with multiple modes
- Selection and pagination
- Loading states

**Spreadsheet** (`src/components/Spreadsheet.tsx`) provides Excel-like functionality for report designers:
- Built on react-spreadsheet with Fast Formula Parser (280+ Excel formulas)
- Formula support: SUM, AVERAGE, VLOOKUP, IF, COUNT, DATE, and 275+ more
- Excel **export** via SheetJS (xlsx package) - **import disabled due to security vulnerabilities**
- Save/load functionality with async support
- Keyboard navigation and copy/paste
- Two components: `Spreadsheet` (configurable) and `SpreadsheetReport` (pre-configured)
- Example formulas: `=SUM(B2:B10)`, `=AVERAGE(C1:C5)`, `=IF(A1>100, "High", "Low")`

> **Note**: Excel import (`enableImport` prop) has been disabled due to security vulnerabilities
> (Prototype Pollution, ReDoS) in the xlsx library's parsing functions. Export remains safe and functional.
> A future migration to exceljs is planned to restore import functionality.

```typescript
import { SpreadsheetReport, Matrix, SpreadsheetCell } from 'notebook-ui';

const [reportData, setReportData] = useState<Matrix<SpreadsheetCell>>([
  [{ value: 'Q1' }, { value: 100 }],
  [{ value: 'Q2' }, { value: 200 }],
  [{ value: 'Total' }, { formula: '=SUM(B1:B2)' }],
]);

<SpreadsheetReport
  data={reportData}
  onChange={setReportData}
  title="Sales Report"
  onSave={async (data) => await api.saveReport(data)}
  exportFileName="sales-report.xlsx"
/>
```

**Toast system** uses a global `statusManager` with convenience functions:
```typescript
import { addSuccessMessage, addErrorMessage } from 'notebook-ui';
```

**Base types** for data operations are in `src/types/index.ts`:
- `BaseDataItem`: Interface all table data must implement (requires `id`)
- `PaginationResponse`: Standard paginated API response shape
- `DataFetchParams`: Parameters for fetching paginated data
- `SortConfig`, `AppliedFilter`: Sorting and filtering state

**Excel Export Utilities** (`src/utils/excelExport.ts`) for exporting data to Excel without the Spreadsheet component:
- `exportToExcel`: Export any data array to Excel with custom columns and formatting
- `exportDataTableToExcel`: Helper specifically for DataTable data
- `createMultiSheetExcel`: Create multi-sheet Excel workbooks

```typescript
import { exportToExcel, exportDataTableToExcel, createMultiSheetExcel } from 'notebook-ui';

// Simple export
exportToExcel({
  data: products,
  filename: 'products.xlsx',
});

// Custom columns with formatting
exportToExcel({
  data: users,
  filename: 'users.xlsx',
  columns: [
    { key: 'id', label: 'User ID' },
    { key: 'name', label: 'Full Name' },
    { key: 'createdAt', label: 'Joined', format: (date) => new Date(date).toLocaleDateString() },
    { key: 'isActive', label: 'Status', format: (active) => active ? 'Active' : 'Inactive' },
  ],
});

// Export DataTable data
exportDataTableToExcel({
  data: tableData,
  columns: tableColumns,
  filename: 'export.xlsx',
});

// Multi-sheet workbook
createMultiSheetExcel({
  filename: 'report.xlsx',
  sheets: [
    { name: 'Products', data: products },
    { name: 'Orders', data: orders, columns: orderColumns },
  ],
});
```

### Consumer Setup

Host applications must:
1. Import styles: `import 'notebook-ui/styles';`
2. Configure Tailwind to include notebook-ui's content paths
3. Install peer dependencies: react, react-dom, react-router-dom, lucide-react

## Adding New Components

When a component is missing:
1. Create it in `src/components/` following existing patterns
2. Export from `src/components/index.ts` (both component and types)
3. Run `npm run build`
4. In host app: `npm update notebook-ui`

## Recent Component Enhancements

### Switch Component (`src/components/Switch.tsx`)
**Loading State**: Added `loading` prop for async operations
- Displays animated spinner (Loader2) inside slider
- Disables interaction while loading
- Spinner size adapts to switch size (sm/md/lg)

```typescript
<Switch
  checked={enabled}
  onChange={handleToggle}
  loading={isUpdating}
  label="Enable feature"
/>
```

### Radio Component (`src/components/Radio.tsx`)
**Icon Support**: Added `icon` prop to RadioOption interface
- Icons display next to option labels
- Consistent with other form components

```typescript
const options: RadioOption[] = [
  { value: 'card', label: 'Credit Card', icon: <CreditCard className="h-4 w-4" /> },
  { value: 'bank', label: 'Bank Transfer', icon: <Building className="h-4 w-4" /> },
];
```

### Toast Component (`src/components/Toast.tsx`)
**Position Control**: Added `position` prop with 6 placement options
- Positions: `top-right` (default), `top-left`, `bottom-right`, `bottom-left`, `top-center`, `bottom-center`

```typescript
<ToastContainer position="top-center" />
```

### Alert Component (`src/components/Alert.tsx`)
**Action Buttons**: Added `actions` array prop for inline actions
- Actions can be `primary` or `secondary` variant
- Buttons styled according to alert variant (success/warning/error/info)

```typescript
<Alert
  variant="warning"
  title="Unsaved changes"
  message="You have unsaved changes that will be lost."
  actions={[
    { label: 'Save', onClick: handleSave, variant: 'primary' },
    { label: 'Discard', onClick: handleDiscard, variant: 'secondary' }
  ]}
/>
```

### Checkbox Component (`src/components/Checkbox.tsx`)
**Icon Support**: Added `icon` prop for visual enhancement
- Icons display next to label text
- Consistent with Radio component pattern

```typescript
<Checkbox
  checked={agreed}
  onChange={setAgreed}
  label="I agree to terms"
  icon={<FileText className="h-4 w-4" />}
/>
```

### Input Component (`src/components/Input.tsx`)
**Icon Slots**: Added `prefixIcon` and `suffixIcon` props
- Separate from text prefix/suffix for better flexibility
- Maintains backward compatibility with existing `icon` and `iconPosition` props

```typescript
<Input
  label="Search"
  prefixIcon={<Search className="h-5 w-5" />}
  suffixIcon={<Filter className="h-5 w-5" />}
  placeholder="Search products..."
/>
```

### Badge Component (`src/components/Badge.tsx`)
**Dot Variant**: Added `dot` boolean prop for minimal status indicators
- Renders small colored circle without text
- Size adapts to badge size (sm/md/lg)
- `children` prop is now optional

```typescript
<Badge dot variant="success" size="sm" />
<Badge dot variant="error" />
```

### Modal Component (`src/components/Modal.tsx`)
**Full Size Variant**: Added `full` to size options
- Uses `max-w-7xl` for extra-wide modals
- Size options: `sm`, `md`, `lg`, `xl`, `full`

```typescript
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Large Data View"
  size="full"
>
  {/* Wide content */}
</Modal>
```

### DataTable Component (`src/components/DataTable.tsx`)
**Virtual Scrolling**: Added virtualization for large datasets (10,000+ rows)
- `virtualized`: Enable virtual scrolling (boolean)
- `virtualHeight`: Container height (string, default: '600px')
- `virtualRowHeight`: Fixed row height in pixels (number, default: 60)
- Only renders visible rows + overscan buffer (5 rows)
- Automatic scroll handling and viewport calculation

```typescript
<DataTable
  data={largeDataset}
  columns={columns}
  virtualized={true}
  virtualHeight="800px"
  virtualRowHeight={60}
/>
```

**Performance**: Virtual scrolling dramatically improves performance for large datasets:
- Standard rendering: 10,000 rows = 10,000 DOM elements
- Virtual scrolling: 10,000 rows = ~20-30 visible DOM elements

## New Components (Latest)

### Progress Component (`src/components/Progress.tsx`)
**Linear & Circular Progress Indicators** for loading states and progress tracking
- `variant`: 'linear' (bar) or 'circular' (radial) - default: 'linear'
- `value`: Progress percentage (0-100)
- `size`: 'sm', 'md', 'lg'
- `color`: 'primary', 'success', 'warning', 'error'
- `showLabel`: Display percentage text
- `label`: Custom label text (overrides percentage)
- `striped`: Add striped pattern
- `animated`: Animate stripes (requires striped=true)

```typescript
{/* Linear progress */}
<Progress value={75} color="success" showLabel />

{/* Circular progress */}
<Progress value={60} variant="circular" size="lg" showLabel />

{/* Striped animated */}
<Progress value={45} striped animated color="primary" />
```

### Drawer Component (`src/components/Drawer.tsx`)
**Side-sliding Modal** - Alternative to centered modals for forms and content
- `placement`: 'left', 'right', 'top', 'bottom' - default: 'right'
- `size`: 'sm' (256px), 'md' (384px), 'lg' (512px), 'full' (100%)
- `showOverlay`: Show backdrop (default: true)
- `closeOnOverlayClick`: Close when clicking backdrop (default: true)
- `closeOnEscape`: Close on Escape key (default: true)
- `header`: Custom header content (replaces title)
- `footer`: Footer content area

```typescript
<Drawer
  isOpen={isOpen}
  onClose={handleClose}
  title="Edit User"
  placement="right"
  size="md"
  footer={
    <>
      <Button variant="ghost" onClick={handleClose}>Cancel</Button>
      <Button variant="primary" onClick={handleSave}>Save</Button>
    </>
  }
>
  {/* Form content */}
</Drawer>
```

### Rating Component (`src/components/Rating.tsx`)
**Star Rating Input** for reviews and feedback
- `value`: Current rating (number)
- `onChange`: Callback when rating changes
- `max`: Maximum rating (default: 5)
- `size`: 'sm', 'md', 'lg'
- `readOnly`: Display-only mode
- `allowHalf`: Enable half-star ratings
- `color`: 'primary', 'warning' (default), 'error'
- `showLabel`: Display rating value as text
- `disabled`: Disabled state

```typescript
{/* Interactive rating */}
<Rating value={rating} onChange={setRating} allowHalf showLabel />

{/* Read-only display */}
<Rating value={4.5} readOnly showLabel />

{/* Custom color and size */}
<Rating value={3} onChange={setRating} color="error" size="lg" />
```

### Input Enhancement - Clearable (`src/components/Input.tsx`)
**Clear Button** for quick input reset
- `clearable`: Show X button to clear input
- `onClear`: Custom callback when clear button clicked

```typescript
<Input
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  clearable
  placeholder="Search..."
/>
```

### Popover Component (`src/components/Popover.tsx`)
**Interactive Popover** - Rich content popovers with positioning and trigger modes
- `trigger`: Element that triggers the popover
- `placement`: 12 positions (top, bottom, left, right + start/end variants)
- `triggerMode`: 'click' (default), 'hover', 'focus'
- `showArrow`: Display arrow pointer (default: true)
- `offset`: Distance from trigger in pixels (default: 8)
- `open`/`onOpenChange`: Controlled mode
- `closeOnClickOutside`: Auto-close on outside click (default: true)
- `closeOnEscape`: Close on Escape key (default: true)
- `showDelay`/`hideDelay`: Delays for hover trigger (ms)
- **Collision Detection**: Automatically flips to fit viewport
- **Portal Rendering**: Proper z-index handling

```typescript
{/* Click trigger with menu */}
<Popover
  trigger={<Button>Options</Button>}
  placement="bottom-start"
>
  <div className="flex flex-col gap-2">
    <button onClick={handleEdit}>Edit</button>
    <button onClick={handleDelete}>Delete</button>
  </div>
</Popover>

{/* Hover trigger with info */}
<Popover
  trigger={<InfoIcon />}
  triggerMode="hover"
  placement="top"
  showDelay={200}
  hideDelay={100}
>
  <div className="max-w-xs">
    <Text size="sm">Additional information here</Text>
  </div>
</Popover>

{/* Controlled popover */}
<Popover
  trigger={<Button>Controlled</Button>}
  open={isOpen}
  onOpenChange={setIsOpen}
  placement="right"
>
  {/* Complex interactive content */}
  <FormControl>
    <Input label="Name" />
    <Button onClick={handleSave}>Save</Button>
  </FormControl>
</Popover>
```

**Key Differences from Tooltip**:
- Tooltip: Simple text-only, hover-only, non-interactive
- Popover: Rich content, multiple triggers, fully interactive with buttons/forms

### Button Enhancement - Badge (`src/components/Button.tsx`)
**Notification Badge** for displaying counts on buttons
- `badge`: Number or string to display (auto-formats 99+)
- `badgeVariant`: 'primary', 'success', 'warning', 'error' (default)
- Positioned in top-right corner with proper sizing

```typescript
{/* Message notification button */}
<Button badge={5} badgeVariant="error">
  Messages
</Button>

{/* Cart button with count */}
<Button icon={<ShoppingCart />} badge={cartItems.length} badgeVariant="primary">
  Cart
</Button>

{/* Icon-only button with badge */}
<Button iconOnly badge={12}>
  <Bell />
</Button>
```

### Select Enhancement - Clearable (`src/components/Select.tsx`)
**Clear Button** to reset selection
- `clearable`: Show X button to clear selection
- Only visible when a value is selected
- Prevents dropdown from opening when clicked

```typescript
<Select
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  clearable
  placeholder="Choose an option..."
/>
```

### Command Palette

A keyboard-driven command launcher that enables power-user workflows. Features:
- **Keyboard Navigation**: Arrow keys, Enter, Escape for full control
- **Search & Filter**: Instant filtering across all commands
- **Command Grouping**: Organize commands by category with group headers
- **Recent Commands**: Automatically tracks and prioritizes recently used commands (max 5)
- **Portal Rendering**: Always renders on top with backdrop overlay
- **Global Shortcut**: Built-in hook for Ctrl+K / Cmd+K activation
- **Rich Commands**: Support for icons, descriptions, keyboard shortcuts, and keywords

**Basic Usage with Hook:**
```tsx
import { CommandPalette, useCommandPalette, Command } from 'notebook-ui';
import { Home, Settings, Users, FileText } from 'lucide-react';

function App() {
  const { open, setOpen } = useCommandPalette(); // Automatically adds Ctrl+K listener
  const [recentCommands, setRecentCommands] = useState<string[]>([]);

  const commands: Command[] = [
    {
      id: 'home',
      label: 'Go to Dashboard',
      description: 'Navigate to the main dashboard',
      icon: <Home className="h-4 w-4" />,
      group: 'Navigation',
      shortcut: 'Ctrl+H',
      keywords: ['dashboard', 'main', 'home'],
      onExecute: () => navigate('/dashboard'),
    },
    {
      id: 'settings',
      label: 'Open Settings',
      description: 'Configure application settings',
      icon: <Settings className="h-4 w-4" />,
      group: 'Navigation',
      shortcut: 'Ctrl+,',
      keywords: ['preferences', 'config'],
      onExecute: () => navigate('/settings'),
    },
    {
      id: 'users',
      label: 'Manage Users',
      icon: <Users className="h-4 w-4" />,
      group: 'Admin',
      onExecute: () => navigate('/users'),
    },
    {
      id: 'export',
      label: 'Export Data',
      icon: <FileText className="h-4 w-4" />,
      group: 'Actions',
      onExecute: () => handleExport(),
    },
  ];

  return (
    <CommandPalette
      commands={commands}
      open={open}
      onOpenChange={setOpen}
      placeholder="Type a command or search..."
      trigger="Ctrl+K"
      recentCommands={recentCommands}
      onRecentCommandsChange={setRecentCommands}
    />
  );
}
```

**Manual Control (without global shortcut):**
```tsx
const [open, setOpen] = useState(false);

// Open from button click
<Button onClick={() => setOpen(true)}>
  Open Command Palette
</Button>

<CommandPalette
  commands={commands}
  open={open}
  onOpenChange={setOpen}
/>
```

**Command Interface:**
```typescript
interface Command {
  id: string;                    // Unique identifier
  label: string;                 // Display name
  description?: string;          // Optional help text
  icon?: React.ReactNode;        // Optional icon element
  group?: string;                // Category/section name
  shortcut?: string;             // Keyboard shortcut display (e.g., "Ctrl+K")
  onExecute: () => void;         // Handler when command runs
  keywords?: string[];           // Additional search terms
}
```

**Features in Detail:**

1. **Recent Commands**: Automatically tracks last 5 executed commands and displays them first when no search query is active

2. **Search Filtering**: Matches against:
   - Command label
   - Command description
   - Custom keywords array

3. **Keyboard Navigation**:
   - `↑/↓` - Navigate between commands
   - `Enter` - Execute selected command
   - `Esc` - Close palette

4. **Auto-positioning**: Selected command automatically scrolls into view

5. **Grouping**: Commands with a `group` property are organized under labeled sections

### Component Polish Enhancements

#### Textarea Resize Control
Added `resize` prop to control textarea resizability:
```tsx
<Textarea
  resize="none"          // No resizing
  resize="vertical"      // Vertical only (default)
  resize="horizontal"    // Horizontal only
  resize="both"          // Both directions
  // Note: autoExpand overrides resize to 'none'
/>
```

#### Accordion Custom Expand/Collapse Icons
Added `expandIcon` and `collapseIcon` props for custom expand/collapse indicators:
```tsx
import { Plus, Minus } from 'lucide-react';

<Accordion
  items={items}
  expandIcon={<Plus className="h-5 w-5" />}
  collapseIcon={<Minus className="h-5 w-5" />}
/>
```

#### Tabs Vertical Mode
Added `orientation` prop for vertical tab layout:
```tsx
<Tabs
  tabs={tabs}
  orientation="vertical"  // Tabs on left, content on right
  variant="underline"     // Works with both variants
/>
```

#### Modal Animation Variants
Added `animation` prop for different entrance animations:
```tsx
<Modal
  isOpen={open}
  onClose={handleClose}
  title="Dialog"
  animation="scale"       // Default: scale from center
  animation="slide-up"    // Slide up from bottom
  animation="slide-down"  // Slide down from top
  animation="fade"        // Simple fade in
  animation="none"        // No animation
>
  Content
</Modal>
```

### New Components

#### Slider (Range Input)
Interactive slider for numeric value selection:
```tsx
import { Slider } from 'notebook-ui';

<Slider
  value={volume}
  onChange={setVolume}
  min={0}
  max={100}
  step={5}
  showValue              // Display current value
  showMinMax             // Show min/max labels
  label="Volume"
  color="primary"        // primary | success | warning | error
  size="md"              // sm | md | lg
  formatValue={(val) => `${val}%`}
  helperText="Adjust audio volume"
/>
```

Features: Keyboard navigation (arrow keys, Home, End), mouse/touch drag, custom value formatting

#### TreeView (Hierarchical Data)
Display nested tree structures with expand/collapse:
```tsx
import { TreeView, TreeNode } from 'notebook-ui';
import { Folder, File } from 'lucide-react';

const treeData: TreeNode[] = [
  {
    id: '1',
    label: 'src',
    icon: <Folder className="h-4 w-4" />,
    children: [
      { id: '2', label: 'components', icon: <Folder className="h-4 w-4" />, children: [...] },
      { id: '3', label: 'utils', icon: <Folder className="h-4 w-4" />, children: [...] },
    ],
  },
];

<TreeView
  data={treeData}
  onSelect={(nodeId) => console.log(nodeId)}
  selectedId={selectedNode}
  defaultExpanded={['1', '2']}
  showLines                    // Show connecting lines
  expandIcon={<Plus />}        // Custom expand icon
  collapseIcon={<Minus />}     // Custom collapse icon
/>
```

#### ColorPicker
Select colors with presets and custom picker:
```tsx
import { ColorPicker } from 'notebook-ui';

<ColorPicker
  value={color}
  onChange={setColor}
  label="Theme Color"
  presets={[
    '#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6'
  ]}
  helperText="Choose your brand color"
/>
```

Features: Preset color swatches, manual hex input, native color picker fallback

#### Stepper (Wizard)
Multi-step process indicator with navigation:
```tsx
import { Stepper, StepConfig } from 'notebook-ui';

const steps: StepConfig[] = [
  { id: '1', label: 'Account', description: 'Create your account' },
  { id: '2', label: 'Profile', description: 'Complete your profile' },
  { id: '3', label: 'Verify', description: 'Verify your email' },
];

<Stepper
  steps={steps}
  activeStep={currentStep}
  completedSteps={['1']}
  orientation="horizontal"    // horizontal | vertical
  clickable                   // Allow clicking to navigate
  onStepClick={setCurrentStep}
/>
```

Features: Horizontal/vertical layouts, completed step indicators, optional click navigation

#### Calendar
Full month/year calendar view with event markers and date range selection:
```tsx
import { Calendar, CalendarEvent } from 'notebook-ui';

const events: CalendarEvent[] = [
  { date: new Date(2025, 0, 15), title: 'Meeting', color: 'primary' },
  { date: new Date(2025, 0, 20), title: 'Deadline', color: 'error' },
  { date: new Date(2025, 0, 25), title: 'Event', color: 'success' },
];

// Single date selection with events
<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
  events={events}
  onEventClick={(event) => console.log(event)}
  showWeekNumbers
  firstDayOfWeek={1}  // 0 = Sunday, 1 = Monday
/>

// Date range selection
<Calendar
  rangeMode
  rangeValue={dateRange}
  onRangeChange={setDateRange}
  minDate={new Date()}
/>
```

Features: Month/year navigation, event indicators with colors, week numbers, date range selection, hover preview, "Today" button

#### Timeline
Vertical/horizontal event timeline for chronological display:
```tsx
import { Timeline, TimelineItem } from 'notebook-ui';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

const items: TimelineItem[] = [
  {
    id: '1',
    title: 'Order Placed',
    description: 'Your order has been received',
    timestamp: new Date(2025, 0, 15, 10, 30),
    icon: <CheckCircle className="h-4 w-4" />,
    color: 'success',
  },
  {
    id: '2',
    title: 'Processing',
    description: 'Order is being prepared',
    timestamp: new Date(2025, 0, 15, 14, 15),
    icon: <Clock className="h-4 w-4" />,
    color: 'primary',
  },
];

// Vertical timeline
<Timeline
  items={items}
  orientation="vertical"
  position="right"        // left | right | alternate
  dotSize="md"            // sm | md | lg
  showLine
  onItemClick={(item) => console.log(item)}
/>

// Horizontal timeline
<Timeline items={milestones} orientation="horizontal" />
```

Features: Vertical/horizontal layouts, position control, icon support, color coding, custom content areas, alternating layout

#### Transfer (Dual List)
Move items between two lists with search and selection:
```tsx
import { Transfer, TransferItem } from 'notebook-ui';

const [sourceItems, setSourceItems] = useState<TransferItem[]>([
  { id: '1', label: 'User 1', description: 'admin@example.com' },
  { id: '2', label: 'User 2', description: 'user@example.com' },
  { id: '3', label: 'User 3', disabled: true },
]);

const [targetItems, setTargetItems] = useState<TransferItem[]>([]);

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

Features: Dual list selection, search/filter, move selected/all, item counts, disabled items, custom rendering

#### Carousel
Image/content carousel with auto-play and swipe:
```tsx
import { Carousel, CarouselItem } from 'notebook-ui';

const slides: CarouselItem[] = [
  { id: '1', content: <img src="/image1.jpg" alt="Slide 1" /> },
  { id: '2', content: <img src="/image2.jpg" alt="Slide 2" /> },
  { id: '3', content: <div>Custom Content</div> },
];

// Auto-play carousel
<Carousel
  items={slides}
  autoPlay={3000}
  loop
  onSlideChange={(index) => console.log('Slide:', index)}
/>

// Multi-item carousel
<Carousel items={products} itemsPerView={3} gap={24} />
```

Features: Auto-play with pause on hover, navigation arrows, dot indicators, touch swipe, keyboard navigation, multi-item display

#### KanbanBoard
Drag-and-drop kanban board for task management:
```tsx
import { KanbanBoard, KanbanColumn } from 'notebook-ui';

const [columns, setColumns] = useState<KanbanColumn[]>([
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
        assignee: 'John Doe',
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
]);

<KanbanBoard
  columns={columns}
  onChange={setColumns}
  onCardClick={(card, columnId) => openCardDetails(card)}
  onAddCard={(columnId) => openNewCardDialog(columnId)}
  showAddButton
/>
```

Features: HTML5 drag-and-drop, column card limits, priority badges, tags, assignee avatars, custom card rendering

## Critical Integration Rules

Per D:/repos/NOTEBOOK-UI-INTEGRATION-STANDARDS.md:
- Host apps NEVER create custom UI components
- No raw HTML tags (`<div>`, `<span>`, `<h1>`)
- No className with Tailwind utilities
- No inline styles
- All icons from lucide-react
- Use Layout primitives (Stack, Grid, Box, Text) instead of divs
