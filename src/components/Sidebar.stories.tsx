import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar';
import { Home, Users, Settings, FileText, BarChart, Bell, HelpCircle, LogOut } from 'lucide-react';

const meta = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Vertical navigation sidebar with support for nesting, badges, and custom header/footer content.

## Features
- **Nested navigation**: Support for parent items with expandable children
- **Badge indicators**: Show notification counts or status badges
- **Active state**: Highlights current page based on path matching
- **Custom slots**: Optional header and footer content areas
- **Icons**: Support for icons alongside navigation labels
- **Separators**: Visual dividers between navigation groups
- **Click handling**: Custom navigation handler or standard href links

## Usage

\`\`\`tsx
import { Sidebar } from 'notebook-ui';
import { Home, Users, Settings } from 'lucide-react';

const items = [
  { id: '1', label: 'Dashboard', icon: <Home />, href: '/dashboard' },
  { id: '2', label: 'Users', icon: <Users />, href: '/users', badge: 5 },
  { id: '3', label: 'Settings', icon: <Settings />, href: '/settings' },
];

<Sidebar items={items} currentPath="/dashboard" />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of navigation items with optional nesting, icons, badges, and children',
      table: {
        type: { summary: 'SidebarItem[]' },
      },
    },
    currentPath: {
      control: 'text',
      description: 'Current route path for highlighting active item',
      table: {
        type: { summary: 'string' },
      },
    },
    header: {
      description: 'Optional header content displayed at top of sidebar',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    footer: {
      description: 'Optional footer content displayed at bottom of sidebar',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    onNavigate: {
      description: 'Custom navigation handler - if not provided, uses standard link navigation',
      table: {
        type: { summary: '(href: string, external?: boolean) => void' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', height: '600px', border: '1px solid #e5e5e5' }}>
        <Story />
        <div style={{ flex: 1, padding: '2rem', backgroundColor: '#fafaf9' }}>
          <h2>Main Content Area</h2>
          <p>This is where your page content would appear.</p>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems = [
  { id: '1', label: 'Dashboard', icon: <Home className="h-5 w-5" />, href: '/dashboard' },
  { id: '2', label: 'Users', icon: <Users className="h-5 w-5" />, href: '/users' },
  { id: '3', label: 'Reports', icon: <BarChart className="h-5 w-5" />, href: '/reports' },
  { id: '4', label: 'Documents', icon: <FileText className="h-5 w-5" />, href: '/documents' },
  { id: '5', label: 'Settings', icon: <Settings className="h-5 w-5" />, href: '/settings' },
];

const itemsWithBadges = [
  { id: '1', label: 'Dashboard', icon: <Home className="h-5 w-5" />, href: '/dashboard' },
  { id: '2', label: 'Notifications', icon: <Bell className="h-5 w-5" />, href: '/notifications', badge: 5 },
  { id: '3', label: 'Messages', icon: <FileText className="h-5 w-5" />, href: '/messages', badge: 12 },
  { id: '4', label: 'Settings', icon: <Settings className="h-5 w-5" />, href: '/settings' },
];

const nestedItems = [
  { id: '1', label: 'Dashboard', icon: <Home className="h-5 w-5" />, href: '/dashboard', active: true },
  {
    id: '2',
    label: 'Users',
    icon: <Users className="h-5 w-5" />,
    children: [
      { id: '2-1', label: 'All Users', href: '/users/all' },
      { id: '2-2', label: 'Active Users', href: '/users/active' },
      { id: '2-3', label: 'Inactive Users', href: '/users/inactive' },
    ],
  },
  {
    id: '3',
    label: 'Reports',
    icon: <BarChart className="h-5 w-5" />,
    children: [
      { id: '3-1', label: 'Sales', href: '/reports/sales' },
      { id: '3-2', label: 'Analytics', href: '/reports/analytics' },
      { id: '3-3', label: 'Performance', href: '/reports/performance' },
    ],
  },
  { id: '4', label: 'Settings', icon: <Settings className="h-5 w-5" />, href: '/settings' },
];

export const Default: Story = {
  args: {
    items: basicItems,
    currentPath: '/dashboard',
  },
};

export const WithBadges: Story = {
  args: {
    items: itemsWithBadges,
    currentPath: '/dashboard',
  },
};

export const WithNesting: Story = {
  args: {
    items: nestedItems,
    currentPath: '/dashboard',
  },
};

export const WithHeaderAndFooter: Story = {
  args: {
    items: basicItems,
    currentPath: '/users',
    header: (
      <div style={{ padding: '1rem', borderBottom: '1px solid #e5e5e5' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0f172a' }}>My App</h2>
        <p style={{ fontSize: '0.875rem', color: '#64748b' }}>v1.0.0</p>
      </div>
    ),
    footer: (
      <div style={{ padding: '1rem', borderTop: '1px solid #e5e5e5' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#e5e5e5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.875rem',
            fontWeight: 600,
          }}>
            JD
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>John Doe</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>john@example.com</div>
          </div>
        </div>
        <button style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem',
          fontSize: '0.875rem',
          color: '#64748b',
          border: 'none',
          background: 'transparent',
          borderRadius: '0.375rem',
          cursor: 'pointer',
        }}>
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    ),
  },
};

export const ActiveChildItem: Story = {
  args: {
    items: nestedItems,
    currentPath: '/users/active',
  },
};

export const CustomNavigation: Story = {
  args: {
    items: basicItems,
    currentPath: '/reports',
    onNavigate: (href: string, external?: boolean) => {
      alert(`Navigate to: ${href}${external ? ' (external)' : ''}`);
    },
  },
};

export const Complete: Story = {
  args: {
    items: [
      { id: '1', label: 'Dashboard', icon: <Home className="h-5 w-5" />, href: '/dashboard' },
      {
        id: '2',
        label: 'Users',
        icon: <Users className="h-5 w-5" />,
        badge: 24,
        children: [
          { id: '2-1', label: 'All Users', href: '/users/all' },
          { id: '2-2', label: 'Active Users', href: '/users/active', badge: 18 },
          { id: '2-3', label: 'Pending', href: '/users/pending', badge: 6 },
        ],
      },
      {
        id: '3',
        label: 'Reports',
        icon: <BarChart className="h-5 w-5" />,
        children: [
          { id: '3-1', label: 'Sales', href: '/reports/sales' },
          { id: '3-2', label: 'Analytics', href: '/reports/analytics' },
        ],
      },
      { id: '4', label: 'Documents', icon: <FileText className="h-5 w-5" />, href: '/documents' },
      { id: 'sep', label: '', separator: true },
      { id: '5', label: 'Help', icon: <HelpCircle className="h-5 w-5" />, href: '/help' },
      { id: '6', label: 'Settings', icon: <Settings className="h-5 w-5" />, href: '/settings' },
    ],
    currentPath: '/users/active',
    header: (
      <div style={{ padding: '1.5rem 1rem', borderBottom: '1px solid #e5e5e5' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a' }}>PaperNote</h2>
      </div>
    ),
    footer: (
      <div style={{ padding: '1rem', borderTop: '1px solid #e5e5e5' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#3b82f6',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.875rem',
            fontWeight: 600,
          }}>
            JD
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>John Doe</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>john@example.com</div>
          </div>
        </div>
      </div>
    ),
  },
};

/**
 * Demonstrates custom data attributes for E2E testing and product tours.
 * Each item includes data-testid and data-tour attributes for reliable element targeting.
 *
 * Inspect the elements to see the data attributes:
 * - `data-testid`: For E2E testing with Playwright/Cypress
 * - `data-tour`: For product tours with Driver.js or similar libraries
 */
export const WithDataAttributes: Story = {
  args: {
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: <Home className="h-5 w-5" />,
        href: '/dashboard',
        dataAttributes: {
          'data-tour': 'nav-dashboard',
          'data-testid': 'sidebar-dashboard',
        },
      },
      {
        id: 'users',
        label: 'Users',
        icon: <Users className="h-5 w-5" />,
        dataAttributes: {
          'data-tour': 'nav-users',
          'data-testid': 'sidebar-users',
        },
        children: [
          {
            id: 'all-users',
            label: 'All Users',
            href: '/users/all',
            dataAttributes: {
              'data-tour': 'nav-users-all',
              'data-testid': 'sidebar-users-all',
            },
          },
          {
            id: 'active-users',
            label: 'Active Users',
            href: '/users/active',
            dataAttributes: {
              'data-tour': 'nav-users-active',
              'data-testid': 'sidebar-users-active',
            },
          },
        ],
      },
      {
        id: 'reports',
        label: 'Reports',
        icon: <BarChart className="h-5 w-5" />,
        href: '/reports',
        dataAttributes: {
          'data-tour': 'nav-reports',
          'data-testid': 'sidebar-reports',
        },
      },
      {
        id: 'sep-1',
        label: '',
        separator: true,
        dataAttributes: {
          'data-testid': 'sidebar-separator-main',
        },
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <Settings className="h-5 w-5" />,
        href: '/settings',
        dataAttributes: {
          'data-tour': 'nav-settings',
          'data-testid': 'sidebar-settings',
        },
      },
    ],
    currentPath: '/dashboard',
  },
};
