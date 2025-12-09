# Component Reference

Detailed API documentation for notebook-ui components.

## Layout Components

### Stack
Flexbox container for vertical/horizontal layouts.
```tsx
<Stack gap="sm|md|lg|tight" direction="vertical|horizontal" align="start|center|end" justify="start|center|end|between">
```

### Grid
CSS Grid container.
```tsx
<Grid columns={1-12} gap="sm|md|lg">
```

### Box
Generic container with padding/margin.
```tsx
<Box padding="sm|md|lg" margin="sm|md|lg">
```

### Text
Typography component replacing all heading/paragraph tags.
```tsx
<Text as="h1|h2|h3|p|span" size="xs|sm|md|lg|xl|2xl" weight="normal|medium|bold" color="default|muted|primary|success|warning|error">
```
Responsive: `mdSize`, `lgSize` props for breakpoint-specific sizes.

### Card
```tsx
<Card variant="default|compact">
  <CardHeader><CardTitle>Title</CardTitle></CardHeader>
  <CardContent>...</CardContent>
  <CardFooter>...</CardFooter>
</Card>
```

---

## Form Components

### Button
```tsx
<Button 
  variant="primary|secondary|ghost|danger"
  size="sm|md|lg"
  loading={boolean}
  disabled={boolean}
  icon={<Icon />}
  iconOnly={boolean}
  badge={number}
  badgeVariant="primary|success|warning|error"
/>
```

### Input
```tsx
<Input
  label="Label"
  value={string}
  onChange={(e) => {}}
  validationState="error|warning|success"
  validationMessage="Error text"
  loading={boolean}
  clearable
  prefixIcon={<Icon />}
  suffixIcon={<Icon />}
  prefix="$"
  suffix=".00"
/>
```

### Select
```tsx
<Select
  options={[{ value: 'a', label: 'A' }]}
  value={string}
  onChange={(val) => {}}
  searchable
  clearable
  placeholder="Choose..."
/>
```

### MultiSelect
```tsx
const ref = useRef<MultiSelectHandle>(null);
<MultiSelect
  ref={ref}
  options={options}
  value={string[]}
  onChange={(vals) => {}}
  loading={boolean}
/>
// Imperative: ref.current?.open()
```

### Textarea
```tsx
<Textarea
  label="Notes"
  loading={boolean}
  autoExpand
  resize="none|vertical|horizontal|both"
/>
```

### Switch
```tsx
<Switch checked={boolean} onChange={(checked) => {}} loading={boolean} label="Enable" size="sm|md|lg" />
```

### Checkbox
```tsx
<Checkbox checked={boolean} onChange={(checked) => {}} label="Agree" icon={<Icon />} />
```

### RadioGroup
```tsx
<RadioGroup
  options={[{ value: 'a', label: 'A', icon: <Icon /> }]}
  value={string}
  onChange={(val) => {}}
/>
```

---

## Data Display

### DataTable
Primary data table with sorting, filtering, pagination, virtualization.
```tsx
<DataTable
  data={items}
  columns={[
    { key: 'name', header: 'Name', sortable: true, filterable: true },
    { key: 'status', header: 'Status', render: (item) => <Badge>{item.status}</Badge> },
    { key: 'date', header: 'Date', verticalAlign: 'top' }  // Align to top when rows vary in height
  ]}
  // Pagination
  paginated
  currentPage={number}
  pageSize={number}
  totalItems={number}
  onPageChange={(page) => {}}
  onPageSizeChange={(size) => {}}
  // Actions
  onEdit={(item) => {}}
  onDelete={(item) => {}}
  // Selection
  selectable
  onRowSelect={(ids) => {}}
  // Virtualization (10k+ rows)
  virtualized
  virtualHeight="600px"
  virtualRowHeight={60}
/>
```

### Badge
```tsx
<Badge variant="default|success|warning|error|info" size="sm|md|lg" dot pill />
```

### Spreadsheet
Excel-like spreadsheet with 280+ formulas.
```tsx
<SpreadsheetReport
  data={Matrix<SpreadsheetCell>}
  onChange={setData}
  title="Report"
  onSave={async (data) => {}}
  exportFileName="report.xlsx"
/>
```
Note: Excel import disabled due to security vulnerabilities. Export works.

---

## Feedback Components

### Toast
Global toast notifications.
```tsx
import { addSuccessMessage, addErrorMessage, addWarningMessage, addInfoMessage } from 'notebook-ui';
addSuccessMessage('Saved');
addErrorMessage('Failed');

// Container positioning
<ToastContainer position="top-right|top-left|top-center|bottom-right|bottom-left|bottom-center" />
```

### Alert
Inline alerts with optional actions.
```tsx
<Alert
  variant="info|success|warning|error"
  title="Title"
  message="Message"
  actions={[
    { label: 'Save', onClick: () => {}, variant: 'primary' },
    { label: 'Cancel', onClick: () => {}, variant: 'secondary' }
  ]}
/>
```

### Modal
```tsx
<Modal
  isOpen={boolean}
  onClose={() => {}}
  title="Title"
  size="sm|md|lg|xl|full"
  scrollable
  maxHeight="70vh"
  animation="scale|slide-up|slide-down|fade|none"
/>
```

### Drawer
Side-sliding panel.
```tsx
<Drawer
  isOpen={boolean}
  onClose={() => {}}
  title="Title"
  placement="left|right|top|bottom"
  size="sm|md|lg|full"
  footer={<Button>Save</Button>}
/>
```

### ConfirmDialog
```tsx
<ConfirmDialog
  isOpen={boolean}
  onClose={() => {}}
  onConfirm={() => {}}
  title="Confirm"
  message="Are you sure?"
  confirmLabel="Delete"
  variant="danger"
/>
```

### Popover
Rich content popovers.
```tsx
<Popover
  trigger={<Button>Menu</Button>}
  placement="top|bottom|left|right[-start|-end]"
  triggerMode="click|hover|focus"
  open={boolean}
  onOpenChange={(open) => {}}
>
  {content}
</Popover>
```

### Tooltip
Simple text tooltips.
```tsx
<Tooltip content="Help text"><Button>Hover me</Button></Tooltip>
```

---

## Navigation

### Tabs
```tsx
<Tabs
  tabs={[{ id: 'a', label: 'Tab A', content: <div>...</div> }]}
  activeTab={string}
  onChange={(id) => {}}
  variant="underline|pills"
  orientation="horizontal|vertical"
/>
```

### Breadcrumbs
```tsx
<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Current' }]} />

// Same-route reset hook
useBreadcrumbReset(() => setViewMode('list'));
```

### Pagination
```tsx
<Pagination currentPage={1} totalPages={10} onPageChange={(page) => {}} />
```

### Sidebar
App navigation sidebar. See existing implementations for patterns.

---

## Loading States

### Loading
```tsx
<Loading size="sm|md|lg" />
```

### Skeleton
```tsx
<Skeleton width="100px" height="20px" />
<SkeletonCard />
<SkeletonTable rows={5} columns={4} />
```

---

## Progress & Indicators

### Progress
```tsx
<Progress
  value={75}
  variant="linear|circular|ring"
  size="sm|md|lg"
  color="primary|success|warning|error"
  showLabel
  striped
  animated
/>
```

### Rating
```tsx
<Rating value={4} onChange={(val) => {}} max={5} allowHalf readOnly size="sm|md|lg" />
```

### Stepper
```tsx
<Stepper
  steps={[{ id: '1', label: 'Step 1', description: '...' }]}
  activeStep={string}
  completedSteps={['1']}
  orientation="horizontal|vertical"
  clickable
  onStepClick={(id) => {}}
/>
```

---

## Mobile Components

### BottomSheet
```tsx
<BottomSheet open={boolean} onClose={() => {}} title="Title" height="auto|sm|md|lg|full" showHandle showCloseButton>
  <BottomSheetContent>...</BottomSheetContent>
  <BottomSheetActions><Button fullWidth>Action</Button></BottomSheetActions>
</BottomSheet>
```

### SwipeableCard
```tsx
<SwipeableCard
  onSwipeRight={() => {}}
  onSwipeLeft={() => {}}
  rightAction={{ icon: <Check />, color: 'success', label: 'Approve' }}
  leftAction={{ icon: <X />, color: 'error', label: 'Reject' }}
  swipeThreshold={100}
  hapticFeedback
/>
```

### HorizontalScroll
```tsx
<HorizontalScroll gap="md" peekAmount={24} showIndicators snapToItem showArrows="hover">
  {children}
</HorizontalScroll>
```

### PullToRefresh
```tsx
<PullToRefresh onRefresh={async () => {}} threshold={80}>
  {children}
</PullToRefresh>
```

### NotificationBanner
```tsx
<NotificationBanner
  variant="info|success|warning|error"
  title="Title"
  description="Description"
  action={{ label: 'Action', onClick: () => {} }}
  onDismiss={() => {}}
  dismissible
  sticky
/>
```

### CompactStat
```tsx
<CompactStat
  value="$1,234"
  label="Revenue"
  trend={{ direction: 'up', value: '+12%', color: 'success' }}
  size="sm|md|lg"
/>
```

---

## Advanced Components

### CommandPalette
Keyboard-driven command launcher (Ctrl+K).
```tsx
const { open, setOpen } = useCommandPalette();
<CommandPalette
  commands={[{ id: 'home', label: 'Home', onExecute: () => {}, group: 'Nav', shortcut: 'Ctrl+H' }]}
  open={open}
  onOpenChange={setOpen}
  recentCommands={[]}
  onRecentCommandsChange={setRecent}
/>
```

### NotificationBell
```tsx
<NotificationBell
  notifications={[{ id: '1', title: 'New', message: '...', type: 'info', createdAt: new Date(), isRead: false }]}
  onMarkAsRead={(id) => {}}
  onMarkAllRead={() => {}}
  onNotificationClick={(n) => {}}
  dropdownPosition="left|right"
/>
```

### Calendar
```tsx
<Calendar
  value={Date}
  onChange={(date) => {}}
  events={[{ date, title, color }]}
  rangeMode
  rangeValue={{ start, end }}
  onRangeChange={setRange}
  showWeekNumbers
/>
```

### Timeline
```tsx
<Timeline
  items={[{ id: '1', title: 'Event', timestamp: Date, icon: <Icon />, color: 'success' }]}
  orientation="vertical|horizontal"
  position="left|right|alternate"
/>
```

### TreeView
```tsx
<TreeView
  data={[{ id: '1', label: 'Node', icon: <Icon />, children: [...] }]}
  selectedId={string}
  onSelect={(id) => {}}
  defaultExpanded={['1']}
  showLines
/>
```

### KanbanBoard
```tsx
<KanbanBoard
  columns={[{ id: 'todo', title: 'To Do', cards: [...], limit: 5 }]}
  onChange={setColumns}
  onCardClick={(card, colId) => {}}
  onAddCard={(colId) => {}}
/>
```

### Carousel
```tsx
<Carousel
  items={[{ id: '1', content: <div>...</div> }]}
  autoPlay={3000}
  loop
  itemsPerView={1}
  gap={16}
/>
```

### Transfer
Dual-list picker.
```tsx
<Transfer
  sourceItems={[{ id: '1', label: 'Item' }]}
  targetItems={[]}
  onChange={(source, target) => {}}
  titles={{ source: 'Available', target: 'Selected' }}
  showSearch
/>
```

### Slider
```tsx
<Slider
  value={50}
  onChange={(val) => {}}
  min={0}
  max={100}
  step={1}
  showValue
  showMinMax
  formatValue={(v) => `${v}%`}
/>
```

### ColorPicker
```tsx
<ColorPicker
  value="#000000"
  onChange={(color) => {}}
  presets={['#FF0000', '#00FF00']}
/>
```

### Accordion
```tsx
<Accordion
  items={[{ id: '1', title: 'Section', content: <div>...</div> }]}
  expandIcon={<Plus />}
  collapseIcon={<Minus />}
/>
```

---

## Utilities

### Excel Export
```tsx
import { exportToExcel, createMultiSheetExcel } from 'notebook-ui';

exportToExcel({
  data: items,
  filename: 'export.xlsx',
  columns: [{ key: 'name', label: 'Name', format: (v) => v.toUpperCase() }]
});

createMultiSheetExcel({
  filename: 'report.xlsx',
  sheets: [{ name: 'Sheet1', data: items }]
});
```

---

## PageLayout with Actions

```tsx
<PageLayout
  title="Page"
  description="Description"
  actions={[
    { id: 'add', label: 'Add', icon: <Plus />, onClick: () => {}, variant: 'primary' }
  ]}
  headerContent={<Breadcrumbs items={crumbs} />}
>
  {children}
</PageLayout>
```
