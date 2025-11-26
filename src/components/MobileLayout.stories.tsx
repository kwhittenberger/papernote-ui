import type { Meta, StoryObj } from '@storybook/react';
import MobileLayout from './MobileLayout';
import { Home, CheckSquare, Settings, Users, Calendar, Bell, Search, Plus, User } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from './Card';
import Text from './Text';
import Stack from './Stack';
import Button from './Button';
import Badge from './Badge';

const meta: Meta<typeof MobileLayout> = {
  title: 'Layout/MobileLayout',
  component: MobileLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Auto-responsive layout that switches between desktop and mobile patterns:

- **Desktop (≥1024px)**: Standard sidebar layout with gutter and page navigation
- **Mobile/Tablet (<1024px)**: Mobile header with drawer navigation and bottom tab bar

Key features:
- Automatic viewport detection
- Drawer navigation on mobile
- Bottom navigation bar
- Safe area support for notched devices
- Force mobile/desktop mode for testing
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MobileLayout>;

const sampleSidebarItems = [
  { id: 'home', label: 'Dashboard', icon: <Home className="h-5 w-5" />, href: '/' },
  { id: 'tasks', label: 'Tasks', icon: <CheckSquare className="h-5 w-5" />, href: '/tasks', badge: 5 },
  { id: 'calendar', label: 'Calendar', icon: <Calendar className="h-5 w-5" />, href: '/calendar' },
  { id: 'users', label: 'Users', icon: <Users className="h-5 w-5" />, href: '/users' },
  { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" />, href: '/settings' },
];

const DemoContent = () => (
  <Stack spacing="md" className="p-4">
    <Card>
      <CardHeader>
        <CardTitle>Welcome to MobileLayout</CardTitle>
      </CardHeader>
      <CardContent>
        <Text>
          This layout automatically adapts to your screen size. On desktop, you'll see 
          the standard sidebar layout. On mobile, you'll see a hamburger menu, drawer 
          navigation, and bottom tab bar.
        </Text>
      </CardContent>
    </Card>
    
    <Card>
      <CardHeader>
        <CardTitle>Try Resizing</CardTitle>
      </CardHeader>
      <CardContent>
        <Text>
          Resize your browser window or use Storybook's viewport controls to see the 
          layout switch between desktop and mobile modes.
        </Text>
      </CardContent>
    </Card>
    
    <Card>
      <CardHeader>
        <CardTitle>Sample Data Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Stack spacing="sm">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex justify-between items-center p-2 bg-paper-50 rounded">
              <Text>Item {i}</Text>
              <Badge variant="primary">Active</Badge>
            </div>
          ))}
        </Stack>
      </CardContent>
    </Card>
  </Stack>
);

const SimpleHeader = () => (
  <div className="flex items-center gap-2 px-4 py-3">
    <div className="w-8 h-8 rounded bg-accent-500 flex items-center justify-center text-white font-bold">
      N
    </div>
    <Text weight="semibold">Notebook</Text>
  </div>
);

const SimpleUserProfile = () => (
  <div className="flex items-center gap-2 px-4 py-3 border-t border-paper-200">
    <div className="w-8 h-8 rounded-full bg-paper-300 flex items-center justify-center">
      <User className="h-4 w-4 text-ink-500" />
    </div>
    <div className="flex-1 min-w-0">
      <Text size="sm" weight="medium" className="truncate">John Doe</Text>
      <Text size="xs" color="muted" className="truncate">john@example.com</Text>
    </div>
  </div>
);

/**
 * Default layout - automatically switches between desktop and mobile based on viewport.
 */
export const Default: Story = {
  args: {
    sidebarItems: sampleSidebarItems,
    currentPath: '/',
    title: 'Dashboard',
    header: <SimpleHeader />,
    userProfile: <SimpleUserProfile />,
  },
  render: (args) => (
    <MobileLayout {...args}>
      <DemoContent />
    </MobileLayout>
  ),
};

/**
 * Force mobile layout regardless of viewport size - useful for testing.
 */
export const ForceMobile: Story = {
  args: {
    sidebarItems: sampleSidebarItems,
    currentPath: '/',
    title: 'Mobile Preview',
    subtitle: 'Forced mobile layout',
    header: <SimpleHeader />,
    userProfile: <SimpleUserProfile />,
    forceMobile: true,
    headerRightAction: (
      <Button variant="ghost" size="sm" iconOnly>
        <Bell className="h-5 w-5" />
      </Button>
    ),
  },
  render: (args) => (
    <MobileLayout {...args}>
      <DemoContent />
    </MobileLayout>
  ),
};

/**
 * Force desktop layout regardless of viewport size - useful for testing.
 */
export const ForceDesktop: Story = {
  args: {
    sidebarItems: sampleSidebarItems,
    currentPath: '/',
    title: 'Desktop Preview',
    header: <SimpleHeader />,
    userProfile: <SimpleUserProfile />,
    forceDesktop: true,
  },
  render: (args) => (
    <MobileLayout {...args}>
      <DemoContent />
    </MobileLayout>
  ),
};

/**
 * Mobile layout with custom bottom navigation items - useful when you want
 * different items in the bottom nav than in the drawer.
 */
export const CustomBottomNav: Story = {
  args: {
    sidebarItems: sampleSidebarItems,
    currentPath: '/',
    title: 'My App',
    forceMobile: true,
    bottomNavItems: [
      { id: 'home', label: 'Home', icon: <Home className="h-5 w-5" />, href: '/' },
      { id: 'search', label: 'Search', icon: <Search className="h-5 w-5" />, href: '/search' },
      { id: 'add', label: 'Add', icon: <Plus className="h-5 w-5" />, onClick: () => alert('Add clicked!') },
      { id: 'notifications', label: 'Alerts', icon: <Bell className="h-5 w-5" />, href: '/notifications', badge: 3 },
      { id: 'profile', label: 'Profile', icon: <User className="h-5 w-5" />, href: '/profile' },
    ],
    activeBottomNavId: 'home',
  },
  render: (args) => (
    <MobileLayout {...args}>
      <DemoContent />
    </MobileLayout>
  ),
};

/**
 * Mobile layout without bottom navigation - useful for single-purpose screens.
 */
export const NoBottomNav: Story = {
  args: {
    sidebarItems: sampleSidebarItems,
    currentPath: '/',
    title: 'Detail View',
    forceMobile: true,
    hideBottomNav: true,
    headerRightAction: (
      <Button variant="primary" size="sm">
        Save
      </Button>
    ),
  },
  render: (args) => (
    <MobileLayout {...args}>
      <DemoContent />
    </MobileLayout>
  ),
};

/**
 * Mobile layout with primary variant header - uses accent color background.
 */
export const PrimaryHeader: Story = {
  args: {
    sidebarItems: sampleSidebarItems,
    currentPath: '/',
    title: 'Notebook App',
    subtitle: 'Your daily companion',
    forceMobile: true,
    headerVariant: 'primary',
    headerRightAction: (
      <Button variant="ghost" size="sm" iconOnly className="text-white hover:bg-white/10">
        <Bell className="h-5 w-5" />
      </Button>
    ),
  },
  render: (args) => (
    <MobileLayout {...args}>
      <DemoContent />
    </MobileLayout>
  ),
};

/**
 * Desktop layout with page sections for gutter navigation.
 */
export const WithSections: Story = {
  args: {
    sidebarItems: sampleSidebarItems,
    currentPath: '/',
    title: 'With Sections',
    header: <SimpleHeader />,
    userProfile: <SimpleUserProfile />,
    forceDesktop: true,
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'stats', label: 'Statistics' },
      { id: 'activity', label: 'Activity' },
    ],
  },
  render: (args) => (
    <MobileLayout {...args}>
      <div className="p-4 space-y-8">
        <section id="overview">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <Text>Overview section content goes here.</Text>
            </CardContent>
          </Card>
        </section>
        
        <section id="stats">
          <Card>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <Text>Statistics section content goes here.</Text>
            </CardContent>
          </Card>
        </section>
        
        <section id="activity">
          <Card>
            <CardHeader>
              <CardTitle>Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <Text>Activity section content goes here.</Text>
            </CardContent>
          </Card>
        </section>
      </div>
    </MobileLayout>
  ),
};

/**
 * Mobile layout without header - useful for full-screen content.
 */
export const NoHeader: Story = {
  args: {
    sidebarItems: sampleSidebarItems,
    currentPath: '/',
    forceMobile: true,
    hideMobileHeader: true,
  },
  render: (args) => (
    <MobileLayout {...args}>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Full Screen Content</CardTitle>
          </CardHeader>
          <CardContent>
            <Text>
              This layout has no mobile header, giving you full control over the 
              screen. The drawer can still be accessed programmatically.
            </Text>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  ),
};
