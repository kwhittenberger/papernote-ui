# Recent Component Work - November 2025

## Overview

This document captures recent component additions, enhancements, and improvements made to notebook-ui that are not yet reflected in the improvement plan documents.

**Latest Update:** Completed all major missing components - Calendar, Timeline, Transfer, Carousel, and KanbanBoard.

---

## New Components Added

### 1. Progress Component
**File:** `src/components/Progress.tsx`

Linear and circular progress indicators for loading states and progress tracking.

**Features:**
- `variant`: 'linear' (bar) or 'circular' (radial)
- `value`: Progress percentage (0-100)
- `size`: 'sm', 'md', 'lg'
- `color`: 'primary', 'success', 'warning', 'error'
- `showLabel`: Display percentage text
- `label`: Custom label text
- `striped`: Add striped pattern
- `animated`: Animate stripes

**Example:**
```typescript
<Progress value={75} color="success" showLabel />
<Progress value={60} variant="circular" size="lg" showLabel />
```

---

### 2. Drawer Component
**File:** `src/components/Drawer.tsx`

Side-sliding modal alternative for forms and content.

**Features:**
- `placement`: 'left', 'right', 'top', 'bottom'
- `size`: 'sm' (256px), 'md' (384px), 'lg' (512px), 'full' (100%)
- `showOverlay`: Show backdrop (default: true)
- `closeOnOverlayClick`: Close when clicking backdrop
- `closeOnEscape`: Close on Escape key
- `header`: Custom header content
- `footer`: Footer content area

**Example:**
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

---

### 3. Rating Component
**File:** `src/components/Rating.tsx`

Star rating input for reviews and feedback.

**Features:**
- `value`: Current rating (number)
- `onChange`: Callback when rating changes
- `max`: Maximum rating (default: 5)
- `size`: 'sm', 'md', 'lg'
- `readOnly`: Display-only mode
- `allowHalf`: Enable half-star ratings
- `color`: 'primary', 'warning' (default), 'error'
- `showLabel`: Display rating value as text
- `disabled`: Disabled state

**Example:**
```typescript
<Rating value={rating} onChange={setRating} allowHalf showLabel />
<Rating value={4.5} readOnly showLabel />
```

---

### 4. Popover Component
**File:** `src/components/Popover.tsx`

Interactive popover with rich content, positioning, and trigger modes.

**Features:**
- `trigger`: Element that triggers the popover
- `placement`: 12 positions (top, bottom, left, right + start/end variants)
- `triggerMode`: 'click' (default), 'hover', 'focus'
- `showArrow`: Display arrow pointer (default: true)
- `offset`: Distance from trigger in pixels (default: 8)
- `open`/`onOpenChange`: Controlled mode
- `closeOnClickOutside`: Auto-close on outside click
- `closeOnEscape`: Close on Escape key
- `showDelay`/`hideDelay`: Delays for hover trigger
- **Collision Detection**: Automatically flips to fit viewport
- **Portal Rendering**: Proper z-index handling

**Example:**
```typescript
<Popover
  trigger={<Button>Options</Button>}
  placement="bottom-start"
>
  <div className="flex flex-col gap-2">
    <button onClick={handleEdit}>Edit</button>
    <button onClick={handleDelete}>Delete</button>
  </div>
</Popover>
```

**Key Difference from Tooltip:**
- Tooltip: Simple text-only, hover-only, non-interactive
- Popover: Rich content, multiple triggers, fully interactive

---

### 5. Command Palette Component
**File:** `src/components/CommandPalette.tsx`

Keyboard-driven command launcher for power-user workflows.

**Features:**
- **Keyboard Navigation**: Arrow keys, Enter, Escape
- **Search & Filter**: Instant filtering across commands
- **Command Grouping**: Organize by category with headers
- **Recent Commands**: Automatically tracks last 5 used commands
- **Portal Rendering**: Always on top with backdrop
- **Global Shortcut**: Built-in Ctrl+K / Cmd+K hook
- **Rich Commands**: Icons, descriptions, shortcuts, keywords

**Example:**
```typescript
import { CommandPalette, useCommandPalette } from 'notebook-ui';

function App() {
  const { open, setOpen } = useCommandPalette();
  const [recentCommands, setRecentCommands] = useState<string[]>([]);

  const commands: Command[] = [
    {
      id: 'home',
      label: 'Go to Dashboard',
      description: 'Navigate to the main dashboard',
      icon: <Home className="h-4 w-4" />,
      group: 'Navigation',
      shortcut: 'Ctrl+H',
      keywords: ['dashboard', 'main'],
      onExecute: () => navigate('/dashboard'),
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

### 6. Slider Component
**File:** `src/components/Slider.tsx`

Interactive slider for numeric value selection.

**Features:**
- `min`, `max`, `step`: Range configuration
- `value`, `onChange`: Controlled value
- `showValue`: Display current value
- `showMinMax`: Show min/max labels
- `color`: 'primary', 'success', 'warning', 'error'
- `size`: 'sm', 'md', 'lg'
- `formatValue`: Custom value formatting function
- Keyboard navigation (arrow keys, Home, End)

**Example:**
```typescript
<Slider
  value={volume}
  onChange={setVolume}
  min={0}
  max={100}
  step={5}
  showValue
  formatValue={(val) => `${val}%`}
/>
```

---

### 7. TreeView Component
**File:** `src/components/TreeView.tsx`

Display nested tree structures with expand/collapse.

**Features:**
- `data`: Array of TreeNode objects
- `onSelect`: Node selection callback
- `selectedId`: Currently selected node
- `defaultExpanded`: Array of initially expanded node IDs
- `showLines`: Display connecting lines
- `expandIcon`, `collapseIcon`: Custom icons

**Example:**
```typescript
const treeData: TreeNode[] = [
  {
    id: '1',
    label: 'src',
    icon: <Folder className="h-4 w-4" />,
    children: [
      { id: '2', label: 'components', children: [...] },
    ],
  },
];

<TreeView
  data={treeData}
  onSelect={(nodeId) => console.log(nodeId)}
  selectedId={selectedNode}
  showLines
/>
```

---

### 8. ColorPicker Component
**File:** `src/components/ColorPicker.tsx`

Select colors with presets and custom picker.

**Features:**
- `value`: Current color (hex string)
- `onChange`: Callback with new color
- `presets`: Array of preset colors
- Preset color swatches
- Manual hex input
- Native color picker fallback

**Example:**
```typescript
<ColorPicker
  value={color}
  onChange={setColor}
  label="Theme Color"
  presets={['#EF4444', '#F59E0B', '#10B981', '#3B82F6']}
/>
```

---

### 9. Stepper Component
**File:** `src/components/Stepper.tsx`

Multi-step process indicator with navigation.

**Features:**
- `steps`: Array of step configurations
- `activeStep`: Current step ID
- `completedSteps`: Array of completed step IDs
- `orientation`: 'horizontal' or 'vertical'
- `clickable`: Allow clicking to navigate
- `onStepClick`: Step click callback

**Example:**
```typescript
const steps: StepConfig[] = [
  { id: '1', label: 'Account', description: 'Create your account' },
  { id: '2', label: 'Profile', description: 'Complete your profile' },
  { id: '3', label: 'Verify', description: 'Verify your email' },
];

<Stepper
  steps={steps}
  activeStep={currentStep}
  completedSteps={['1']}
  orientation="horizontal"
  clickable
  onStepClick={setCurrentStep}
/>
```

---

### 10. GridItem Component
**File:** `src/components/Grid.tsx`

Span control for individual grid items within Grid component.

**Features:**
- `span`: Number of columns to span (1-12)
- Works within Grid component

**Example:**
```typescript
<Grid columns={12}>
  <GridItem span={8}>
    <Card>Main content</Card>
  </GridItem>
  <GridItem span={4}>
    <Card>Sidebar</Card>
  </GridItem>
</Grid>
```

---

### 11. DatePicker Component
**File:** `src/components/DatePicker.tsx`

Single date selection with calendar dropdown.

**Features:**
- Calendar popup with month/year navigation
- Min/max date constraints
- Disabled dates support (array or function)
- Locale-aware formatting (Intl.DateTimeFormat)
- Keyboard navigation
- Today and clear buttons
- Validation states (error/success/warning)
- Size variants (sm/md/lg)
- Multiple date formats (short/medium/long)

**Example:**
```typescript
<DatePicker
  label="Start Date"
  value={startDate}
  onChange={setStartDate}
  minDate={new Date()}
  maxDate={maxDate}
  disabledDates={(date) => date.getDay() === 0} // Disable Sundays
  format="medium"
  showTodayButton
  required
/>
```

---

### 12. TimePicker Component
**File:** `src/components/TimePicker.tsx`

Time selection with spinner controls.

**Features:**
- 12-hour or 24-hour format
- Optional seconds picker
- Minute step intervals (1, 5, 10, 15, 30)
- Min/max time constraints
- Keyboard navigation
- Spinner controls (up/down arrows)
- Validation states
- Clear button
- Size variants

**Example:**
```typescript
<TimePicker
  label="Meeting Time"
  value={meetingTime}
  onChange={setMeetingTime}
  use12Hour
  minuteStep={15}
  minTime="09:00"
  maxTime="17:00"
  required
/>
```

---

### 13. DateTimePicker Component
**File:** `src/components/DateTimePicker.tsx`

Combined date and time selection.

**Features:**
- Combines DatePicker and TimePicker
- Supports ISO 8601 date-time strings
- Flexible layout (horizontal/vertical)
- All DatePicker and TimePicker features
- Single onChange with combined value
- Automatic date-time synchronization

**Example:**
```typescript
<DateTimePicker
  label="Meeting Date & Time"
  value={meetingDateTime} // ISO 8601 string
  onChange={setMeetingDateTime}
  use12Hour
  minuteStep={15}
  layout="horizontal"
  required
/>
```

---

### 14. DateRangePicker Component
**File:** `src/components/DateRangePicker.tsx`

Select a date range with calendar UI.

**Features:**
- Start and end date selection
- Visual range highlighting in calendar
- Quick preset ranges (Today, Last 7 days, Last 30 days, This Month, Last Month)
- Min/max date constraints
- Disabled dates support
- Hover preview of range selection
- Keyboard navigation
- Validation states
- Optional presets sidebar

**Example:**
```typescript
<DateRangePicker
  label="Report Period"
  value={dateRange}
  onChange={setDateRange}
  showPresets
  minDate={startOfYear}
  maxDate={new Date()}
  required
/>
```

---

### 15. Combobox Component
**File:** `src/components/Combobox.tsx`

Searchable select with typeahead and custom value support.

**Features:**
- Typeahead search with filtering
- Create custom options
- Async search support (via onSearch callback)
- Keyboard navigation (Arrow keys, Enter, Escape)
- Validation states
- Custom value input (allowCustomValue mode)
- Icon support for options
- Loading state
- Clear button

**Example:**
```typescript
<Combobox
  label="Country"
  value={country}
  onChange={setCountry}
  options={countryOptions}
  allowCustomValue
  onCreateOption={(newCountry) => {
    const newOption = { value: newCountry, label: newCountry };
    setCountryOptions([...countryOptions, newOption]);
    setCountry(newCountry);
  }}
  onSearch={handleAsyncSearch}
  loading={isSearching}
/>
```

---

### 16. ButtonGroup Component
**File:** `src/components/ButtonGroup.tsx`

Toggle button group for single or multiple selection.

**Features:**
- Single or multiple selection modes
- Icon support for options
- Size variants (sm/md/lg)
- Full width option
- Disabled states (per option or entire group)
- Tooltip support
- Accessible keyboard navigation
- Connected button styling

**Example:**
```typescript
// Single select
<ButtonGroup
  label="Text Alignment"
  options={[
    { value: 'left', label: 'Left', icon: AlignLeft },
    { value: 'center', label: 'Center', icon: AlignCenter },
    { value: 'right', label: 'Right', icon: AlignRight },
  ]}
  value={alignment}
  onChange={setAlignment}
  size="md"
/>

// Multi select
<ButtonGroup
  label="Text Formatting"
  options={[
    { value: 'bold', label: 'Bold', icon: Bold },
    { value: 'italic', label: 'Italic', icon: Italic },
    { value: 'underline', label: 'Underline', icon: Underline },
  ]}
  values={formatting}
  onChangeMultiple={setFormatting}
  multiple
/>
```

---

### 17. FormControl Component
**File:** `src/components/FormControl.tsx`

Wrapper component for consistent form field layout.

**Features:**
- Label with required indicator
- Error message display
- Helper text
- Consistent spacing
- Works with any form input
- Accessible label association (htmlFor)

**Example:**
```typescript
<FormControl
  label="Email Address"
  required
  error={errors.email}
  helperText="We'll never share your email"
  htmlFor="email-input"
>
  <Input
    id="email-input"
    type="email"
    {...register('email')}
  />
</FormControl>
```

---

### 18. Calendar Component
**File:** `src/components/Calendar.tsx`

Full month/year calendar view with event markers and date range selection (different from DatePicker).

**Features:**
- `value`: Selected date
- `onChange`: Callback when date is selected
- `events`: Array of CalendarEvent objects to display on calendar
- `onEventClick`: Callback when event marker is clicked
- `rangeMode`: Enable date range selection
- `rangeValue`: Selected date range (start and end)
- `onRangeChange`: Callback when range is selected
- `minDate`, `maxDate`: Date constraints
- `disabledDates`: Array of dates that cannot be selected
- `showWeekNumbers`: Display week numbers
- `firstDayOfWeek`: 0 (Sunday) or 1 (Monday)
- Month/year navigation with previous/next buttons
- "Today" quick navigation button
- Event indicators with color coding (primary, success, warning, error, accent)
- Visual hover preview for range selection
- 42-day grid display (6 weeks)

**CalendarEvent Interface:**
```typescript
interface CalendarEvent {
  date: Date;
  title: string;
  color?: 'primary' | 'success' | 'warning' | 'error' | 'accent';
  metadata?: Record<string, unknown>;
}
```

**Example:**
```typescript
// Single date selection with events
<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
  events={[
    { date: new Date(2025, 0, 15), title: 'Meeting', color: 'primary' },
    { date: new Date(2025, 0, 20), title: 'Deadline', color: 'error' },
    { date: new Date(2025, 0, 25), title: 'Event', color: 'success' },
  ]}
  onEventClick={(event) => console.log(event)}
  showWeekNumbers
/>

// Date range selection
<Calendar
  rangeMode
  rangeValue={dateRange}
  onRangeChange={setDateRange}
  minDate={new Date()}
  firstDayOfWeek={1}
/>
```

**Use Cases:**
- Scheduling applications
- Event management
- Date range pickers for reports
- Availability calendars
- Booking systems

---

### 19. Timeline Component
**File:** `src/components/Timeline.tsx`

Vertical/horizontal event timeline for chronological event display (generic, different from PaymentHistoryTimeline).

**Features:**
- `items`: Array of TimelineItem objects
- `orientation`: 'vertical' (default) or 'horizontal'
- `position`: 'left', 'right', or 'alternate' (for vertical)
- `showLine`: Show connecting line between items (default: true)
- `dotSize`: 'sm', 'md' (default), 'lg'
- `formatTimestamp`: Custom timestamp formatter
- `onItemClick`: Callback when item is clicked
- Icon support for each item
- Color coding for items (primary, success, warning, error, accent, ink)
- Custom content areas for rich item display

**TimelineItem Interface:**
```typescript
interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  timestamp: Date | string;
  icon?: React.ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'error' | 'accent' | 'ink';
  metadata?: Record<string, unknown>;
  content?: React.ReactNode;
}
```

**Example:**
```typescript
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

// Vertical timeline
<Timeline
  items={[
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
    {
      id: '3',
      title: 'Delayed',
      description: 'Shipment delayed due to weather',
      timestamp: new Date(2025, 0, 16, 9, 0),
      icon: <AlertCircle className="h-4 w-4" />,
      color: 'warning',
      content: <div>Expected new delivery: Jan 18</div>,
    },
  ]}
  orientation="vertical"
  position="right"
  dotSize="md"
  onItemClick={(item) => console.log(item)}
/>

// Horizontal timeline
<Timeline
  items={milestones}
  orientation="horizontal"
  showLine
/>

// Alternating layout
<Timeline
  items={projectHistory}
  orientation="vertical"
  position="alternate"
/>
```

**Use Cases:**
- Order tracking
- Project milestones
- Activity history
- Process workflows
- Event chronology
- Status updates

---

### 20. Transfer Component
**File:** `src/components/Transfer.tsx`

Dual list component for moving items between two lists (also known as Transfer List or Dual List Box).

**Features:**
- `sourceItems`: Available items in source list
- `targetItems`: Items in target list
- `onChange`: Callback when items are transferred
- `titles`: Custom labels for source and target lists
- `showSearch`: Enable search/filter inputs (default: true)
- `filterFunction`: Custom search filter function
- `height`: Height of lists (default: '400px')
- `showCounts`: Show item counts in headers (default: true)
- `renderItem`: Custom item content renderer
- Individual item selection with multi-select
- Move selected items or move all items
- Search/filter in each list
- Item selection counts
- Disabled items support
- "Select all" functionality

**TransferItem Interface:**
```typescript
interface TransferItem {
  id: string;
  label: string;
  description?: string;
  disabled?: boolean;
  metadata?: Record<string, unknown>;
}
```

**Example:**
```typescript
import { Transfer, TransferItem } from 'notebook-ui';

const [sourceItems, setSourceItems] = useState<TransferItem[]>([
  { id: '1', label: 'Item 1', description: 'Description 1' },
  { id: '2', label: 'Item 2', description: 'Description 2' },
  { id: '3', label: 'Item 3', disabled: true },
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

// Custom item renderer
<Transfer
  sourceItems={users}
  targetItems={selectedUsers}
  onChange={handleChange}
  renderItem={(item) => (
    <div className="flex items-center gap-2">
      <Avatar src={item.metadata?.avatar} />
      <div>
        <div className="font-medium">{item.label}</div>
        <div className="text-xs text-ink-600">{item.description}</div>
      </div>
    </div>
  )}
/>
```

**Use Cases:**
- User/role assignment
- Permission management
- Category/tag selection
- Product/feature selection
- Admin interfaces

---

### 21. Carousel Component
**File:** `src/components/Carousel.tsx`

Image/content carousel with auto-play, navigation, and touch swipe support.

**Features:**
- `items`: Array of CarouselItem objects
- `autoPlay`: Auto-play interval in milliseconds (0 to disable)
- `showArrows`: Show navigation arrows (default: true)
- `showDots`: Show dot indicators (default: true)
- `loop`: Enable infinite loop (default: true)
- `onSlideChange`: Callback when slide changes
- `itemsPerView`: Number of items to show at once (default: 1)
- `gap`: Gap between items in pixels (default: 16)
- Keyboard navigation (arrow keys)
- Touch swipe support for mobile
- Auto-play with pause on hover
- Smooth transitions
- Responsive dot indicators

**CarouselItem Interface:**
```typescript
interface CarouselItem {
  id: string;
  content: React.ReactNode;
}
```

**Example:**
```typescript
import { Carousel, CarouselItem } from 'notebook-ui';

const slides: CarouselItem[] = [
  {
    id: '1',
    content: (
      <img src="/image1.jpg" alt="Slide 1" className="w-full h-64 object-cover rounded-lg" />
    ),
  },
  {
    id: '2',
    content: (
      <img src="/image2.jpg" alt="Slide 2" className="w-full h-64 object-cover rounded-lg" />
    ),
  },
  {
    id: '3',
    content: (
      <div className="bg-accent-100 h-64 flex items-center justify-center rounded-lg">
        <h2>Custom Content Slide</h2>
      </div>
    ),
  },
];

// Auto-play carousel
<Carousel
  items={slides}
  autoPlay={3000}
  loop
  onSlideChange={(index) => console.log('Slide:', index)}
/>

// Multi-item carousel
<Carousel
  items={productCards}
  itemsPerView={3}
  gap={24}
  showArrows
  showDots
/>
```

**Use Cases:**
- Image galleries
- Product showcases
- Hero sections
- Testimonials
- Featured content

---

### 22. KanbanBoard Component
**File:** `src/components/KanbanBoard.tsx`

Kanban board with drag-and-drop columns for task management and workflows.

**Features:**
- `columns`: Array of KanbanColumn objects
- `onChange`: Callback when columns change
- `onCardClick`: Callback when card is clicked
- `onAddCard`: Callback when add button is clicked
- `onColumnMenu`: Callback when column menu is clicked
- `renderCard`: Custom card renderer
- `showAddButton`: Show add card button (default: true)
- Drag-and-drop cards between columns (HTML5 API)
- Column card limits with warnings
- Priority badges (low/medium/high)
- Tags and labels
- Assignee avatars
- Custom card rendering
- Visual drag feedback

**Interfaces:**
```typescript
interface KanbanCard {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  assignee?: string;
  priority?: 'low' | 'medium' | 'high';
  metadata?: Record<string, unknown>;
}

interface KanbanColumn {
  id: string;
  title: string;
  cards: KanbanCard[];
  color?: string;
  limit?: number;
}
```

**Example:**
```typescript
import { KanbanBoard, KanbanColumn } from 'notebook-ui';

const [columns, setColumns] = useState<KanbanColumn[]>([
  {
    id: 'todo',
    title: 'To Do',
    color: '#94a3b8',
    cards: [
      {
        id: '1',
        title: 'Design new homepage',
        description: 'Create mockups for the new homepage design',
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
  onColumnMenu={(columnId) => openColumnSettings(columnId)}
  showAddButton
/>

// Custom card renderer
<KanbanBoard
  columns={columns}
  onChange={setColumns}
  renderCard={(card) => (
    <div>
      <h4 className="font-bold">{card.title}</h4>
      <p className="text-sm">{card.metadata?.customField}</p>
      <div className="flex gap-2 mt-2">
        {card.tags?.map(tag => <Badge key={tag}>{tag}</Badge>)}
      </div>
    </div>
  )}
/>
```

**Use Cases:**
- Project management
- Task tracking
- Workflow management
- Sprint planning
- Issue tracking
- Development pipelines

---

## Component Enhancements

### Switch Component
**File:** `src/components/Switch.tsx`

**New Feature: Loading State**
- `loading`: Boolean prop for async operations
- Displays animated spinner inside slider
- Disables interaction while loading
- Spinner size adapts to switch size

**Example:**
```typescript
<Switch
  checked={enabled}
  onChange={handleToggle}
  loading={isUpdating}
  label="Enable feature"
/>
```

---

### Radio Component
**File:** `src/components/Radio.tsx`

**New Feature: Icon Support**
- `icon`: ReactNode prop on RadioOption interface
- Icons display next to option labels

**Example:**
```typescript
const options: RadioOption[] = [
  { value: 'card', label: 'Credit Card', icon: <CreditCard /> },
  { value: 'bank', label: 'Bank Transfer', icon: <Building /> },
];
```

---

### Toast Component
**File:** `src/components/Toast.tsx`

**New Feature: Position Control**
- `position`: Six placement options
- Positions: 'top-right' (default), 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'

**Example:**
```typescript
<ToastContainer position="top-center" />
```

---

### Alert Component
**File:** `src/components/Alert.tsx`

**New Feature: Action Buttons**
- `actions`: Array of action button objects
- Buttons can be 'primary' or 'secondary' variant
- Styled according to alert variant

**Example:**
```typescript
<Alert
  variant="warning"
  title="Unsaved changes"
  actions={[
    { label: 'Save', onClick: handleSave, variant: 'primary' },
    { label: 'Discard', onClick: handleDiscard, variant: 'secondary' }
  ]}
/>
```

---

### Checkbox Component
**File:** `src/components/Checkbox.tsx`

**New Feature: Icon Support**
- `icon`: ReactNode prop for visual enhancement
- Icons display next to label text

**Example:**
```typescript
<Checkbox
  checked={agreed}
  onChange={setAgreed}
  label="I agree to terms"
  icon={<FileText className="h-4 w-4" />}
/>
```

---

### Input Component
**File:** `src/components/Input.tsx`

**New Features:**

1. **Icon Slots**
   - `prefixIcon`, `suffixIcon`: Separate from text prefix/suffix
   - Maintains backward compatibility with `icon` and `iconPosition`

2. **Clearable**
   - `clearable`: Show X button to clear input
   - `onClear`: Custom callback when clear button clicked

**Example:**
```typescript
<Input
  label="Search"
  prefixIcon={<Search className="h-5 w-5" />}
  suffixIcon={<Filter className="h-5 w-5" />}
  clearable
/>
```

---

### Badge Component
**File:** `src/components/Badge.tsx`

**New Feature: Dot Variant**
- `dot`: Boolean prop for minimal status indicators
- Renders small colored circle without text
- Size adapts to badge size
- `children` prop is now optional

**Example:**
```typescript
<Badge dot variant="success" size="sm" />
```

---

### Modal Component
**File:** `src/components/Modal.tsx`

**New Features:**

1. **Full Size Variant**
   - `size="full"`: Uses max-w-7xl for extra-wide modals
   - Size options: sm, md, lg, xl, full

2. **Animation Variants**
   - `animation`: Different entrance animations
   - Options: 'scale' (default), 'slide-up', 'slide-down', 'fade', 'none'

**Example:**
```typescript
<Modal
  isOpen={open}
  onClose={handleClose}
  size="full"
  animation="slide-up"
>
  Content
</Modal>
```

---

### Button Component
**File:** `src/components/Button.tsx`

**New Feature: Notification Badge**
- `badge`: Number or string to display
- `badgeVariant`: 'primary', 'success', 'warning', 'error' (default)
- Positioned in top-right corner
- Auto-formats 99+ for large numbers

**Example:**
```typescript
<Button badge={5} badgeVariant="error">
  Messages
</Button>
<Button icon={<ShoppingCart />} badge={cartItems.length}>
  Cart
</Button>
```

---

### Select Component
**File:** `src/components/Select.tsx`

**New Features:**

1. **Clearable**
   - `clearable`: Show X button to reset selection
   - Only visible when a value is selected
   - Prevents dropdown from opening when clicked

2. **Creatable Mode** (Already Implemented)
   - `creatable`: Allow creating new options
   - `onCreateOption`: Callback when new option is created
   - Works with searchable mode
   - Shows "Create" button when search doesn't match existing options

3. **Virtual Scrolling** (NEW - November 2025)
   - `virtualized`: Enable virtual scrolling for large lists (100+ items)
   - `virtualHeight`: Dropdown height when virtualized (default: '300px')
   - `virtualItemHeight`: Height of each option row (default: 42px)
   - Dramatically improves performance for large option lists
   - Automatically activates when list has 50+ items

**Example:**
```typescript
// Clearable
<Select
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  clearable
/>

// Creatable
<Select
  options={options}
  value={value}
  onChange={setValue}
  searchable
  creatable
  onCreateOption={(newValue) => {
    // Add new option to your options array
    setOptions([...options, { value: newValue, label: newValue }]);
    setValue(newValue);
  }}
/>

// Virtual Scrolling
<Select
  options={largeOptionsList} // 1000+ options
  value={value}
  onChange={setValue}
  virtualized
  virtualHeight="400px"
  virtualItemHeight={42}
/>
```

---

### Textarea Component
**File:** `src/components/Textarea.tsx`

**New Feature: Resize Control**
- `resize`: Control textarea resizability
- Options: 'none', 'vertical' (default), 'horizontal', 'both'
- Note: `autoExpand` overrides resize to 'none'

**Example:**
```typescript
<Textarea
  resize="none"
  label="Description"
/>
```

---

### Accordion Component
**File:** `src/components/Accordion.tsx`

**New Features:**

1. **Custom Icons**
   - `expandIcon`: Custom expand indicator
   - `collapseIcon`: Custom collapse indicator

2. **Step Counter Variant** (NEW - November 2025)
   - `showStepNumbers`: Show numbered steps (1, 2, 3...) instead of icons
   - Active step highlighted with accent color
   - Perfect for multi-step forms and wizards
   - Hides expand/collapse chevrons when enabled

**Example:**
```typescript
// Custom Icons
<Accordion
  items={items}
  expandIcon={<Plus className="h-5 w-5" />}
  collapseIcon={<Minus className="h-5 w-5" />}
/>

// Step Counter for Wizards
<Accordion
  items={wizardSteps}
  showStepNumbers
  allowMultiple={false}
/>
```

---

### Tabs Component
**File:** `src/components/Tabs.tsx`

**New Features:**

1. **Vertical Orientation**
   - `orientation`: 'horizontal' (default) or 'vertical'
   - Tabs on left, content on right in vertical mode
   - Works with both variants

2. **Size Variants** (NEW - November 2025)
   - `size`: 'sm', 'md' (default), 'lg'
   - Controls padding, text size, icon size, and spacing
   - Responsive to orientation mode

**Example:**
```typescript
// Vertical Orientation
<Tabs
  tabs={tabs}
  orientation="vertical"
  variant="underline"
/>

// Size Variants
<Tabs tabs={tabs} size="sm" />  // Compact tabs
<Tabs tabs={tabs} size="md" />  // Default
<Tabs tabs={tabs} size="lg" />  // Large tabs

// Combined
<Tabs
  tabs={tabs}
  orientation="vertical"
  size="lg"
  variant="pill"
/>
```

---

### DataTable Component
**File:** `src/components/DataTable.tsx`

**New Features:**

1. **Virtual Scrolling**
   - `virtualized`: Enable virtual scrolling for large datasets
   - `virtualHeight`: Container height (default: '600px')
   - `virtualRowHeight`: Fixed row height in pixels (default: 60)
   - Only renders visible rows + overscan buffer
   - Dramatic performance improvement for 10,000+ rows

2. **Double-Click Trigger for Details Mode**
   - `triggerOnDoubleClick`: Enable double-click to expand details
   - Works with details expansion mode

**Example:**
```typescript
<DataTable
  data={largeDataset}
  columns={columns}
  virtualized={true}
  virtualHeight="800px"
  virtualRowHeight={60}
/>

<DataTable
  data={items}
  columns={columns}
  expandedRowConfig={{
    details: {
      render: (item) => <Details item={item} />,
      triggerOnDoubleClick: true
    }
  }}
/>
```

---

### Box Component
**File:** `src/components/Box.tsx`

**New Feature: Width Prop**
- `width`: Explicit width control
- Useful for precise layouts

**Example:**
```typescript
<Box width="300px">
  <Card>Fixed width content</Card>
</Box>
```

---

### Pagination Component
**File:** `src/components/Pagination.tsx`

**New Feature: Page Jump Input** (NEW - November 2025)
- `showPageJump`: Show input field to jump to specific page
- Includes validation (min/max page numbers)
- Clear input after successful jump
- Responsive label ("Go to:" hidden on small screens)

**Example:**
```typescript
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  showPageJump
/>
```

---

### Breadcrumbs Component
**File:** `src/components/Breadcrumbs.tsx`

**Enhanced: Active State Styling** (NEW - November 2025)
- Active (current) page now has distinct visual treatment
- Background highlight with `bg-accent-50`
- Bold text with `text-accent-900`
- Rounded background for better visibility
- Link items show underline on hover

**Example:**
```typescript
<Breadcrumbs
  items={[
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Reports', href: '/reports' },
    { label: 'Monthly Summary' }, // Active - highlighted
  ]}
  showHome
/>
```

---

## Utilities Added

### statisticsFormatter
**File:** `src/utils/statisticsFormatter.ts`

Format numeric statistics with null/undefined handling.

**Features:**
- Handles null/undefined values gracefully
- Currency formatting
- Percentage formatting
- Number formatting with decimals
- Fallback values

**Example:**
```typescript
import { formatCurrency, formatPercentage, formatNumber } from 'notebook-ui';

formatCurrency(1234.56); // "$1,234.56"
formatCurrency(null, '--'); // "--"
formatPercentage(0.85); // "85%"
formatNumber(1234.567, 2); // "1,234.57"
```

---

## Design System Improvements

### Design Token Migration (100% Complete)

All 23 components migrated from hardcoded colors to design tokens:

**Token Mapping:**
- `gray-*` → `paper-*` (backgrounds, borders)
- `gray-*` → `ink-*` (text)
- `blue-*` → `primary-*` (primary actions, structure)
- `green-*` → `success-*` (success states)
- `red-*` → `error-*` (error states)
- `yellow-*`/`amber-*`/`orange-*` → `warning-*` (warning states)

**Components Migrated (Batch 9 - Final Cleanup):**
1. CardView - Footer border
2. ChartVisualizationUI - Custom report text
3. DataTable - Expanded row backgrounds, JSDoc example
4. ExportButton - Loading tooltip

**Result:**
- Zero hardcoded colors in TypeScript/TSX source
- Centralized color management
- Consistent notebook aesthetic
- Easier theming

---

## Bug Fixes

### ConfirmDialog Double-Close Fix
**Commit:** 9c2f2a8

Fixed React Error #31 caused by double-closing the dialog when clicking the confirmation button.

### CircularDependency Fix in PaymentHistoryTimeline
**Commit:** ab32316

Resolved circular dependency that was causing DataTable to be duplicated in the bundle.

### CurrencyDisplay Null Handling
**Commit:** 0fe5919

Enhanced CurrencyDisplay to properly handle null/undefined amounts without crashing.

---

## Documentation Status

### Updated in CLAUDE.md
- ✅ All new components documented with full API examples
- ✅ Component enhancements documented
- ✅ Design token migration complete
- ✅ Recent bug fixes captured

### Still in Active Work
- IMPROVEMENT-PLAN.md - Original phased improvement plan (mostly complete)
- ADDITIONAL-UI-IMPROVEMENTS.md - Future enhancement ideas

---

## Next Steps / Remaining Work

Based on ADDITIONAL-UI-IMPROVEMENTS.md, potential future enhancements:

1. **Major Missing Components**
   - ✅ Calendar component (month/year view with events) - COMPLETE
   - ✅ Timeline component (generic, different from PaymentHistoryTimeline) - COMPLETE
   - ✅ Transfer/Dual List component - COMPLETE
   - ✅ Kanban Board - COMPLETE
   - ✅ Carousel/Slider - COMPLETE
   - **ALL MAJOR COMPONENTS COMPLETE**

2. **Component Enhancements**
   - Input: Password strength indicator, input masking, autocomplete
   - DataTable: Column resizing, column reordering, sticky headers
   - Form: Validation wrapper, field array, form wizard
   - Advanced: Infinite scroll, drag-and-drop zones, rich text editor

3. **TypeScript Cleanup**
   - Fix unused variable warnings
   - Improve type safety
   - Better developer experience

---

## Summary

**Components Added:** 22 new components
- Progress, Drawer, Rating, Popover, CommandPalette, Slider, TreeView, ColorPicker, Stepper, GridItem (original 10)
- DatePicker, TimePicker, DateTimePicker, DateRangePicker, Combobox, ButtonGroup, FormControl (7)
- Calendar, Timeline, Transfer, Carousel, KanbanBoard (LATEST - 5)
- **ALL major missing components are now complete**

**Components Enhanced:** 19 components with new features
- Switch (loading state), Radio (icons), Toast (position), Alert (actions), Checkbox (icons)
- Input (icon slots, clearable), Badge (dot variant), Modal (full size, animations)
- Button (badge), Select (clearable, creatable, virtual scrolling), Textarea (resize control)
- Accordion (custom icons, step counter), Tabs (vertical orientation, size variants)
- DataTable (virtual scrolling, double-click trigger), Box (width prop)
- Pagination (page jump), Breadcrumbs (active state styling)

**Utilities Added:** statisticsFormatter with null handling

**Design System:** 100% design token migration complete (23 components, 0 hardcoded colors)

**Build Status:** ✅ All builds passing, 0 TypeScript errors

**Documentation:** ✅ All work captured in CLAUDE.md and this document
