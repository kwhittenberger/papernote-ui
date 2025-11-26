# Mobile Support in notebook-ui

This document describes the mobile-first features and responsive components available in notebook-ui.

## Responsive Hooks

### Core Hooks

```tsx
import {
  useIsMobile,
  useIsTablet,
  useIsDesktop,
  useIsTouchDevice,
  useViewportSize,
  useBreakpoint,
  useOrientation,
  useBreakpointValue,
  useSafeAreaInsets,
} from 'notebook-ui';
```

- **useIsMobile()** - Returns `true` when viewport < 768px
- **useIsTablet()** - Returns `true` when viewport is 768px - 1023px
- **useIsDesktop()** - Returns `true` when viewport >= 1024px
- **useIsTouchDevice()** - Detects touch capability
- **useViewportSize()** - Returns `{ width, height }`
- **useBreakpoint()** - Returns current Tailwind breakpoint ('xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl')
- **useOrientation()** - Returns 'portrait' | 'landscape'
- **useBreakpointValue({ xs: 1, md: 2, lg: 4 })** - Returns value for current breakpoint
- **useSafeAreaInsets()** - Returns `{ top, right, bottom, left }` for notched devices

## Mobile Navigation Components

### MobileHeader

Top navigation bar for mobile apps with menu, back, or close buttons.

```tsx
import { MobileHeader } from 'notebook-ui';

<MobileHeader
  title="Page Title"
  subtitle="Section"
  onMenuClick={() => setDrawerOpen(true)}
  // OR onBackClick={() => navigate(-1)}
  // OR onCloseClick={() => closeModal()}
  rightAction={<Button iconOnly><Settings /></Button>}
  variant="solid" // 'solid' | 'transparent' | 'blur'
  sticky
/>
```

### BottomNavigation

iOS/Android-style fixed bottom tab bar.

```tsx
import { BottomNavigation, BottomNavigationSpacer } from 'notebook-ui';

const navItems = [
  { id: 'home', label: 'Home', icon: <Home />, href: '/' },
  { id: 'search', label: 'Search', icon: <Search />, href: '/search' },
  { id: 'profile', label: 'Profile', icon: <User />, badge: 3 },
];

<BottomNavigation
  items={navItems}
  activeId="home"
  onNavigate={(id, href) => navigate(href)}
  showLabels
  safeArea
/>

// Add spacer at bottom of content to prevent overlap
<BottomNavigationSpacer />
```

### Sidebar (Mobile Drawer Mode)

The Sidebar component supports mobile drawer mode with backdrop and animations.

```tsx
import { Sidebar } from 'notebook-ui';

const [mobileOpen, setMobileOpen] = useState(false);

<Sidebar
  items={navItems}
  mobileOpen={mobileOpen}
  onMobileClose={() => setMobileOpen(false)}
  onNavigate={(href) => {
    navigate(href);
    setMobileOpen(false);
  }}
/>
```

### MobileLayout

Auto-responsive layout that switches between desktop sidebar and mobile drawer+bottom nav.

```tsx
import { MobileLayout } from 'notebook-ui';

<MobileLayout
  sidebarItems={navItems}
  bottomNavItems={bottomItems}
  title="Dashboard"
  header={<Logo />}
  currentPath={location.pathname}
  onNavigate={navigate}
>
  {children}
</MobileLayout>
```

## Mobile-Optimized Form Components

All form components auto-upgrade to larger touch targets on mobile.

### Input

```tsx
<Input
  label="Email"
  type="email"
  inputMode="email"        // Mobile keyboard hint
  enterKeyHint="next"      // Mobile keyboard action
  size="lg"                // 44px touch target (auto on mobile)
  clearable
/>
```

### Select

```tsx
<Select
  options={options}
  mobileMode="auto"        // Uses BottomSheet on mobile
  size="lg"                // Touch-friendly trigger
  searchable
  clearable
/>
```

Mobile modes:
- `auto` - BottomSheet on mobile, dropdown on desktop
- `dropdown` - Always use dropdown
- `native` - Use native OS picker on mobile

### Textarea

```tsx
<Textarea
  label="Notes"
  size="lg"                // Larger text and padding
  enterKeyHint="done"
  autoExpand
/>
```

### Checkbox & Switch

```tsx
<Checkbox
  label="Accept terms"
  size="lg"                // 44px touch target (auto on mobile)
/>

<Switch
  label="Enable notifications"
  size="lg"                // Auto on mobile
/>
```

## Mobile Data Display

### DataTable Card View

DataTable automatically switches to card view on mobile.

```tsx
<DataTable
  data={items}
  columns={columns}
  mobileView="auto"        // 'auto' | 'card' | 'table'
  cardConfig={{
    titleKey: 'name',
    subtitleKey: 'email',
    metadataKeys: ['status', 'date'],
    badgeKey: 'priority',
    showChevron: true,
  }}
/>
```

### SwipeActions

Swipe-to-reveal actions for mobile list items.

```tsx
import { SwipeActions } from 'notebook-ui';

<SwipeActions
  leftActions={[
    { id: 'archive', label: 'Archive', icon: <Archive />, color: 'primary', onClick: handleArchive }
  ]}
  rightActions={[
    { id: 'delete', label: 'Delete', icon: <Trash />, color: 'error', onClick: handleDelete, primary: true }
  ]}
>
  <ListItem />
</SwipeActions>
```

## Mobile Dialogs

### Modal (Auto BottomSheet)

Modal automatically renders as BottomSheet on mobile.

```tsx
<Modal
  isOpen={open}
  onClose={handleClose}
  title="Edit Item"
  mobileMode="auto"        // 'auto' | 'modal' | 'sheet'
  mobileHeight="md"        // 'sm' | 'md' | 'lg' | 'full'
  mobileShowHandle
>
  {content}
</Modal>
```

### BottomSheet

Direct use of BottomSheet component.

```tsx
import { BottomSheet } from 'notebook-ui';

<BottomSheet
  isOpen={open}
  onClose={handleClose}
  title="Options"
  height="md"
  showHandle
  closeOnOverlayClick
>
  {content}
</BottomSheet>
```

## Mobile-Specific Components

### FloatingActionButton (FAB)

Material Design style floating action button.

```tsx
import { FloatingActionButton, useFABScroll } from 'notebook-ui';

// Simple FAB
<FloatingActionButton
  onClick={createItem}
  icon={<Plus />}
  label="Create item"
/>

// FAB with action menu
<FloatingActionButton
  actions={[
    { id: 'photo', icon: <Camera />, label: 'Take Photo', onClick: takePhoto },
    { id: 'upload', icon: <Upload />, label: 'Upload', onClick: upload },
  ]}
  position="bottom-right"
/>

// Extended FAB
<FloatingActionButton
  extended
  extendedLabel="New Task"
  onClick={createTask}
/>

// Hide on scroll down
const { hidden } = useFABScroll();
<FloatingActionButton hidden={hidden} />
```

### PullToRefresh

Native-feeling pull-to-refresh gesture.

```tsx
import { PullToRefresh, usePullToRefresh } from 'notebook-ui';

<PullToRefresh
  onRefresh={async () => {
    await fetchLatestData();
  }}
  pullThreshold={80}
  maxPull={120}
>
  <div className="min-h-screen">
    {content}
  </div>
</PullToRefresh>
```

## Responsive Utilities

### Show/Hide Components

```tsx
import { Show, Hide, MobileOnly, DesktopOnly } from 'notebook-ui';

<MobileOnly>
  <BottomNavigation />
</MobileOnly>

<DesktopOnly>
  <Sidebar />
</DesktopOnly>

<Show above="md">
  {/* Visible on md and above */}
</Show>

<Hide below="lg">
  {/* Hidden below lg */}
</Hide>
```

### MobileProvider Context

```tsx
import { MobileProvider, useMobileContext } from 'notebook-ui';

<MobileProvider>
  <App />
</MobileProvider>

// In any component
const { isMobile, isTablet, isDesktop, isTouchDevice } = useMobileContext();
```

## Touch Target Guidelines

All interactive elements follow Apple Human Interface Guidelines:
- Minimum touch target: 44x44 pixels
- Components auto-upgrade on mobile with `size="lg"` or when using `useIsMobile()`
- Use `min-h-touch` Tailwind class for custom components

## Safe Area Support

Components handle notched devices automatically:
- `safeArea` prop on BottomNavigation, MobileHeader
- `env(safe-area-inset-*)` CSS values respected
- `useSafeAreaInsets()` hook for custom implementations
