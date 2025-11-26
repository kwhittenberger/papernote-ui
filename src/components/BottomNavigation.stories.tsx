import type { Meta, StoryObj } from '@storybook/react';
import { Home, Search, Bell, User, Plus, Settings } from 'lucide-react';
import BottomNavigation, { BottomNavigationSpacer } from './BottomNavigation';

const meta: Meta<typeof BottomNavigation> = {
  title: 'Mobile/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        component: 'iOS/Android-style fixed bottom navigation bar with icons, labels, and badges.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', paddingBottom: '80px', background: '#f5f5f4' }}>
        <div style={{ padding: '16px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Page Content</h1>
          <p style={{ color: '#666' }}>Scroll down to see the bottom navigation stays fixed.</p>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} style={{ padding: '16px', margin: '8px 0', background: 'white', borderRadius: '8px' }}>
              Item {i + 1}
            </div>
          ))}
        </div>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BottomNavigation>;

const defaultItems = [
  { id: 'home', label: 'Home', icon: <Home className="w-6 h-6" />, href: '/' },
  { id: 'search', label: 'Search', icon: <Search className="w-6 h-6" />, href: '/search' },
  { id: 'notifications', label: 'Alerts', icon: <Bell className="w-6 h-6" />, badge: 3 },
  { id: 'profile', label: 'Profile', icon: <User className="w-6 h-6" />, href: '/profile' },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    activeId: 'home',
    onNavigate: (id, href) => console.log('Navigate:', id, href),
  },
};

export const WithBadges: Story = {
  args: {
    items: [
      { id: 'home', label: 'Home', icon: <Home className="w-6 h-6" /> },
      { id: 'search', label: 'Search', icon: <Search className="w-6 h-6" /> },
      { id: 'notifications', label: 'Alerts', icon: <Bell className="w-6 h-6" />, badge: 12 },
      { id: 'profile', label: 'Profile', icon: <User className="w-6 h-6" />, badge: 99 },
    ],
    activeId: 'notifications',
    onNavigate: (id) => console.log('Navigate:', id),
  },
};

export const LargeBadge: Story = {
  args: {
    items: [
      { id: 'home', label: 'Home', icon: <Home className="w-6 h-6" /> },
      { id: 'notifications', label: 'Alerts', icon: <Bell className="w-6 h-6" />, badge: 150 },
      { id: 'profile', label: 'Profile', icon: <User className="w-6 h-6" /> },
    ],
    activeId: 'home',
  },
};

export const FiveItems: Story = {
  args: {
    items: [
      { id: 'home', label: 'Home', icon: <Home className="w-6 h-6" /> },
      { id: 'search', label: 'Search', icon: <Search className="w-6 h-6" /> },
      { id: 'add', label: 'Add', icon: <Plus className="w-6 h-6" /> },
      { id: 'notifications', label: 'Alerts', icon: <Bell className="w-6 h-6" />, badge: 5 },
      { id: 'settings', label: 'Settings', icon: <Settings className="w-6 h-6" /> },
    ],
    activeId: 'home',
  },
};

export const WithoutLabels: Story = {
  args: {
    items: defaultItems,
    activeId: 'home',
    showLabels: false,
  },
};

export const WithDisabledItem: Story = {
  args: {
    items: [
      { id: 'home', label: 'Home', icon: <Home className="w-6 h-6" /> },
      { id: 'search', label: 'Search', icon: <Search className="w-6 h-6" />, disabled: true },
      { id: 'notifications', label: 'Alerts', icon: <Bell className="w-6 h-6" /> },
      { id: 'profile', label: 'Profile', icon: <User className="w-6 h-6" /> },
    ],
    activeId: 'home',
  },
};

export const WithClickHandlers: Story = {
  args: {
    items: [
      { id: 'home', label: 'Home', icon: <Home className="w-6 h-6" />, onClick: () => alert('Home clicked!') },
      { id: 'add', label: 'Add', icon: <Plus className="w-6 h-6" />, onClick: () => alert('Add clicked!') },
      { id: 'profile', label: 'Profile', icon: <User className="w-6 h-6" />, onClick: () => alert('Profile clicked!') },
    ],
    activeId: 'home',
  },
};

export const SpacerExample: Story = {
  render: () => (
    <div style={{ minHeight: '100vh', background: '#f5f5f4' }}>
      <div style={{ padding: '16px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>With Spacer</h1>
        <p>The spacer prevents content from being hidden behind the navigation.</p>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} style={{ padding: '16px', margin: '8px 0', background: 'white', borderRadius: '8px' }}>
            Content Item {i + 1}
          </div>
        ))}
        <BottomNavigationSpacer />
      </div>
      <BottomNavigation
        items={defaultItems}
        activeId="home"
      />
    </div>
  ),
};
