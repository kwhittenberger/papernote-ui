import type { Meta, StoryObj } from '@storybook/react';
import { useState, useRef } from 'react';
import Tabs, { Tab, TabsRoot, TabsList, TabsTrigger, TabsContent } from './Tabs';
import { User, Settings, Bell, Lock, FileText, Mail, Home } from 'lucide-react';

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Tab navigation component for organizing content into separate views with multiple style variants.

## Features
- **Variants**: underline, pill styling options
- **Orientation**: horizontal or vertical layout
- **Icons**: Support for icons alongside tab labels
- **Badges**: Show notification counts on tabs with variant colors
- **Disabled tabs**: Prevent interaction with specific tabs
- **Controlled state**: Manage active tab externally
- **Lazy loading**: Only render active tab content for performance
- **Closeable tabs**: Editor-like dynamic tab management
- **Add button**: Create new tabs dynamically
- **Keyboard navigation**: Full arrow key, Home/End, Enter/Space support

## Keyboard Navigation
- **Arrow Left/Right** (horizontal) or **Up/Down** (vertical): Move focus between tabs
- **Home/End**: Jump to first/last tab
- **Enter/Space**: Activate focused tab
- **Delete/Backspace**: Close focused tab (if closeable)

## Usage

\`\`\`tsx
import { Tabs } from 'notebook-ui';

const tabs = [
  { id: 'profile', label: 'Profile', content: <ProfileContent /> },
  { id: 'settings', label: 'Settings', content: <SettingsContent />, badge: 3, badgeVariant: 'warning' },
];

<Tabs
  tabs={tabs}
  activeTab={activeTab}
  onChange={setActiveTab}
  variant="underline"
  lazy
  closeable
  onClose={(id) => removeTab(id)}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      description: 'Array of tab configurations with id, label, content, and optional icons/badges',
      table: {
        type: { summary: 'TabConfig[]' },
      },
    },
    activeTab: {
      control: 'text',
      description: 'ID of the currently active tab',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: 'Callback when active tab changes',
      table: {
        type: { summary: '(tabId: string) => void' },
      },
    },
    variant: {
      control: 'select',
      options: ['underline', 'pill'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'underline | pill' },
        defaultValue: { summary: 'underline' },
      },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation',
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicTabs = [
  { id: 'profile', label: 'Profile', content: <div style={{ padding: '1rem' }}><h3>Profile Content</h3><p>Your profile information goes here.</p></div> },
  { id: 'settings', label: 'Settings', content: <div style={{ padding: '1rem' }}><h3>Settings Content</h3><p>Application settings go here.</p></div> },
  { id: 'notifications', label: 'Notifications', content: <div style={{ padding: '1rem' }}><h3>Notifications Content</h3><p>Your notifications appear here.</p></div> },
];

const tabsWithIcons = [
  {
    id: 'profile',
    label: 'Profile',
    icon: <User className="h-4 w-4" />,
    content: <div style={{ padding: '1rem' }}><h3>Profile</h3><p>Manage your profile information.</p></div>
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings className="h-4 w-4" />,
    content: <div style={{ padding: '1rem' }}><h3>Settings</h3><p>Configure your preferences.</p></div>
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <Bell className="h-4 w-4" />,
    content: <div style={{ padding: '1rem' }}><h3>Notifications</h3><p>View your notifications.</p></div>
  },
  {
    id: 'security',
    label: 'Security',
    icon: <Lock className="h-4 w-4" />,
    content: <div style={{ padding: '1rem' }}><h3>Security</h3><p>Manage security settings.</p></div>
  },
];

const tabsWithBadges = [
  { id: 'all', label: 'All', badge: 24, content: <div style={{ padding: '1rem' }}>All items (24)</div> },
  { id: 'active', label: 'Active', badge: 18, content: <div style={{ padding: '1rem' }}>Active items (18)</div> },
  { id: 'pending', label: 'Pending', badge: 6, content: <div style={{ padding: '1rem' }}>Pending items (6)</div> },
  { id: 'archived', label: 'Archived', content: <div style={{ padding: '1rem' }}>Archived items</div> },
];

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={basicTabs} activeTab={activeTab} onChange={setActiveTab} />;
  },
};

export const Underline: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={basicTabs} activeTab={activeTab} onChange={setActiveTab} variant="underline" />;
  },
};

export const Pill: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={basicTabs} activeTab={activeTab} onChange={setActiveTab} variant="pill" />;
  },
};

export const WithIcons: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={tabsWithIcons} activeTab={activeTab} onChange={setActiveTab} />;
  },
};

export const WithBadges: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('all');
    return <Tabs tabs={tabsWithBadges} activeTab={activeTab} onChange={setActiveTab} />;
  },
};

export const WithDisabledTab: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    const tabs = [
      { id: 'profile', label: 'Profile', content: <div style={{ padding: '1rem' }}>Profile content</div> },
      { id: 'settings', label: 'Settings', content: <div style={{ padding: '1rem' }}>Settings content</div> },
      { id: 'admin', label: 'Admin', disabled: true, content: <div style={{ padding: '1rem' }}>Admin content (disabled)</div> },
    ];
    return <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />;
  },
};

export const Vertical: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={tabsWithIcons} activeTab={activeTab} onChange={setActiveTab} orientation="vertical" />;
  },
};

export const VerticalUnderline: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={tabsWithIcons} activeTab={activeTab} onChange={setActiveTab} orientation="vertical" variant="underline" />;
  },
};

export const Complete: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('all');
    const tabs = [
      {
        id: 'all',
        label: 'All Users',
        icon: <User className="h-4 w-4" />,
        badge: 156,
        content: (
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>All Users (156)</h3>
            <p style={{ color: '#64748b' }}>Complete list of all registered users.</p>
          </div>
        )
      },
      {
        id: 'active',
        label: 'Active',
        badge: 142,
        content: (
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>Active Users (142)</h3>
            <p style={{ color: '#64748b' }}>Users who have logged in recently.</p>
          </div>
        )
      },
      {
        id: 'pending',
        label: 'Pending',
        badge: 14,
        content: (
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>Pending Approval (14)</h3>
            <p style={{ color: '#64748b' }}>Users awaiting account activation.</p>
          </div>
        )
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <Settings className="h-4 w-4" />,
        content: (
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>User Management Settings</h3>
            <p style={{ color: '#64748b' }}>Configure user management preferences.</p>
          </div>
        )
      },
    ];
    return <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} variant="underline" />;
  },
};

export const ControlledMode: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return (
      <div>
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setActiveTab('profile')}
            style={{ padding: '0.5rem 1rem', background: activeTab === 'profile' ? '#334155' : '#f1f5f9', color: activeTab === 'profile' ? 'white' : '#334155', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
          >
            Go to Profile
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            style={{ padding: '0.5rem 1rem', background: activeTab === 'settings' ? '#334155' : '#f1f5f9', color: activeTab === 'settings' ? 'white' : '#334155', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
          >
            Go to Settings
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            style={{ padding: '0.5rem 1rem', background: activeTab === 'notifications' ? '#334155' : '#f1f5f9', color: activeTab === 'notifications' ? 'white' : '#334155', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
          >
            Go to Notifications
          </button>
        </div>
        <Tabs tabs={basicTabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>
    );
  },
};

export const BadgeVariants: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('inbox');
    const tabs: Tab[] = [
      { id: 'inbox', label: 'Inbox', badge: 12, badgeVariant: 'info', content: <div style={{ padding: '1rem' }}>Inbox messages (12 new)</div> },
      { id: 'alerts', label: 'Alerts', badge: 3, badgeVariant: 'error', content: <div style={{ padding: '1rem' }}>Critical alerts (3)</div> },
      { id: 'warnings', label: 'Warnings', badge: 7, badgeVariant: 'warning', content: <div style={{ padding: '1rem' }}>Warnings (7)</div> },
      { id: 'completed', label: 'Completed', badge: 24, badgeVariant: 'success', content: <div style={{ padding: '1rem' }}>Completed tasks (24)</div> },
      { id: 'all', label: 'All', badge: 46, badgeVariant: 'neutral', content: <div style={{ padding: '1rem' }}>All items (46)</div> },
    ];
    return <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />;
  },
};

export const CloseableTabs: Story = {
  render: () => {
    const [tabs, setTabs] = useState<Tab[]>([
      { id: 'home', label: 'Home', icon: <Home className="h-4 w-4" />, closeable: false, content: <div style={{ padding: '1rem' }}>Home tab (not closeable)</div> },
      { id: 'doc1', label: 'Document 1', icon: <FileText className="h-4 w-4" />, content: <div style={{ padding: '1rem' }}>Document 1 content</div> },
      { id: 'doc2', label: 'Document 2', icon: <FileText className="h-4 w-4" />, content: <div style={{ padding: '1rem' }}>Document 2 content</div> },
      { id: 'mail', label: 'Mail', icon: <Mail className="h-4 w-4" />, badge: 5, content: <div style={{ padding: '1rem' }}>Mail content</div> },
    ]);
    const [activeTab, setActiveTab] = useState('home');

    const handleClose = (tabId: string) => {
      const tabIndex = tabs.findIndex(t => t.id === tabId);
      const newTabs = tabs.filter(t => t.id !== tabId);
      setTabs(newTabs);

      // If closing active tab, switch to adjacent tab
      if (activeTab === tabId && newTabs.length > 0) {
        const newActiveIndex = Math.min(tabIndex, newTabs.length - 1);
        setActiveTab(newTabs[newActiveIndex].id);
      }
    };

    return (
      <div>
        <p style={{ marginBottom: '1rem', color: '#64748b', fontSize: '0.875rem' }}>
          Hover over tabs to see close buttons. Home tab is not closeable.
        </p>
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          closeable
          onClose={handleClose}
        />
      </div>
    );
  },
};

export const DynamicTabs: Story = {
  render: () => {
    const [tabs, setTabs] = useState<Tab[]>([
      { id: 'tab-1', label: 'Tab 1', content: <div style={{ padding: '1rem' }}>Content for Tab 1</div> },
      { id: 'tab-2', label: 'Tab 2', content: <div style={{ padding: '1rem' }}>Content for Tab 2</div> },
    ]);
    const [activeTab, setActiveTab] = useState('tab-1');
    const nextIdRef = useRef(3);

    const handleAdd = () => {
      const newId = `tab-${nextIdRef.current++}`;
      const newTab: Tab = {
        id: newId,
        label: `Tab ${nextIdRef.current - 1}`,
        content: <div style={{ padding: '1rem' }}>Content for Tab {nextIdRef.current - 1}</div>,
      };
      setTabs([...tabs, newTab]);
      setActiveTab(newId);
    };

    const handleClose = (tabId: string) => {
      const tabIndex = tabs.findIndex(t => t.id === tabId);
      const newTabs = tabs.filter(t => t.id !== tabId);
      setTabs(newTabs);

      if (activeTab === tabId && newTabs.length > 0) {
        const newActiveIndex = Math.min(tabIndex, newTabs.length - 1);
        setActiveTab(newTabs[newActiveIndex].id);
      }
    };

    return (
      <div>
        <p style={{ marginBottom: '1rem', color: '#64748b', fontSize: '0.875rem' }}>
          Click the + button to add new tabs. Tabs can be closed by clicking the X.
        </p>
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          closeable
          onClose={handleClose}
          showAddButton
          onAdd={handleAdd}
        />
      </div>
    );
  },
};

export const LazyLoading: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [renderLog, setRenderLog] = useState<string[]>(['tab1']);

    // Each tab logs when it renders
    const createContent = (id: string, name: string) => {
      // Track render
      if (!renderLog.includes(id)) {
        setRenderLog(prev => [...prev, id]);
      }
      return (
        <div style={{ padding: '1rem' }}>
          <h3>{name} Content</h3>
          <p>This tab was rendered when you first visited it.</p>
        </div>
      );
    };

    const tabs: Tab[] = [
      { id: 'tab1', label: 'Tab 1', content: createContent('tab1', 'Tab 1') },
      { id: 'tab2', label: 'Tab 2', content: createContent('tab2', 'Tab 2') },
      { id: 'tab3', label: 'Tab 3', content: createContent('tab3', 'Tab 3') },
    ];

    return (
      <div>
        <div style={{ marginBottom: '1rem', padding: '0.75rem', background: '#f8fafc', borderRadius: '0.375rem' }}>
          <strong>Rendered tabs:</strong> {renderLog.join(', ')}
          <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
            With lazy loading, only the active tab is rendered. Visit other tabs to see them added to the list.
          </p>
        </div>
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          lazy
        />
      </div>
    );
  },
};

export const LazyWithPreserveState: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('counter');
    const [count, setCount] = useState(0);

    const tabs: Tab[] = [
      {
        id: 'counter',
        label: 'Counter',
        content: (
          <div style={{ padding: '1rem' }}>
            <h3>Counter Tab</h3>
            <p>Count: {count}</p>
            <button
              onClick={() => setCount(c => c + 1)}
              style={{ padding: '0.5rem 1rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
            >
              Increment
            </button>
          </div>
        )
      },
      {
        id: 'other',
        label: 'Other Tab',
        content: (
          <div style={{ padding: '1rem' }}>
            <h3>Other Tab</h3>
            <p>Switch back to Counter tab - the count should be preserved!</p>
          </div>
        )
      },
    ];

    return (
      <div>
        <div style={{ marginBottom: '1rem', padding: '0.75rem', background: '#f8fafc', borderRadius: '0.375rem' }}>
          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
            With <code>preserveState</code>, tabs stay mounted after being visited. Increment the counter, switch tabs, then return - the state is preserved.
          </p>
        </div>
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          lazy
          preserveState
        />
      </div>
    );
  },
};

export const KeyboardNavigation: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return (
      <div>
        <div style={{ marginBottom: '1rem', padding: '0.75rem', background: '#f8fafc', borderRadius: '0.375rem' }}>
          <p style={{ fontSize: '0.875rem', color: '#334155', marginBottom: '0.5rem' }}>
            <strong>Test keyboard navigation:</strong>
          </p>
          <ul style={{ fontSize: '0.75rem', color: '#64748b', marginLeft: '1rem' }}>
            <li>Click a tab to focus, then use <strong>Arrow Left/Right</strong> to navigate</li>
            <li><strong>Home/End</strong> to jump to first/last tab</li>
            <li><strong>Enter/Space</strong> to activate the focused tab</li>
            <li>The disabled &quot;Admin&quot; tab is skipped during navigation</li>
          </ul>
        </div>
        <Tabs
          tabs={[
            { id: 'profile', label: 'Profile', icon: <User className="h-4 w-4" />, content: <div style={{ padding: '1rem' }}>Profile content</div> },
            { id: 'settings', label: 'Settings', icon: <Settings className="h-4 w-4" />, content: <div style={{ padding: '1rem' }}>Settings content</div> },
            { id: 'admin', label: 'Admin', icon: <Lock className="h-4 w-4" />, disabled: true, content: <div style={{ padding: '1rem' }}>Admin content</div> },
            { id: 'notifications', label: 'Notifications', icon: <Bell className="h-4 w-4" />, badge: 5, content: <div style={{ padding: '1rem' }}>Notifications content</div> },
          ]}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const tabs: Tab[] = [
      { id: 'tab1', label: 'Tab 1', badge: 3, content: <div style={{ padding: '1rem' }}>Tab 1 content</div> },
      { id: 'tab2', label: 'Tab 2', content: <div style={{ padding: '1rem' }}>Tab 2 content</div> },
      { id: 'tab3', label: 'Tab 3', content: <div style={{ padding: '1rem' }}>Tab 3 content</div> },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>Small</p>
          <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} size="sm" />
        </div>
        <div>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>Medium (default)</p>
          <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} size="md" />
        </div>
        <div>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>Large</p>
          <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} size="lg" />
        </div>
      </div>
    );
  },
};

export const EditorStyleTabs: Story = {
  render: () => {
    const [tabs, setTabs] = useState<Tab[]>([
      { id: 'index', label: 'index.tsx', icon: <FileText className="h-4 w-4" />, content: <div style={{ padding: '1rem', fontFamily: 'monospace', background: '#1e293b', color: '#e2e8f0', borderRadius: '0 0 0.375rem 0.375rem' }}>{'// index.tsx\nexport default function App() {\n  return <div>Hello World</div>;\n}'}</div> },
      { id: 'styles', label: 'styles.css', icon: <FileText className="h-4 w-4" />, badge: '•', badgeVariant: 'warning', content: <div style={{ padding: '1rem', fontFamily: 'monospace', background: '#1e293b', color: '#e2e8f0', borderRadius: '0 0 0.375rem 0.375rem' }}>{'/* styles.css - unsaved */\n.container {\n  display: flex;\n}'}</div> },
      { id: 'config', label: 'config.json', icon: <FileText className="h-4 w-4" />, content: <div style={{ padding: '1rem', fontFamily: 'monospace', background: '#1e293b', color: '#e2e8f0', borderRadius: '0 0 0.375rem 0.375rem' }}>{'{\n  "name": "my-app",\n  "version": "1.0.0"\n}'}</div> },
    ]);
    const [activeTab, setActiveTab] = useState('index');
    const nextIdRef = useRef(1);

    const handleAdd = () => {
      const newId = `new-${nextIdRef.current++}`;
      const newTab: Tab = {
        id: newId,
        label: `untitled-${nextIdRef.current - 1}.txt`,
        icon: <FileText className="h-4 w-4" />,
        content: <div style={{ padding: '1rem', fontFamily: 'monospace', background: '#1e293b', color: '#e2e8f0', borderRadius: '0 0 0.375rem 0.375rem' }}>{'// New file'}</div>,
      };
      setTabs([...tabs, newTab]);
      setActiveTab(newId);
    };

    const handleClose = (tabId: string) => {
      const tabIndex = tabs.findIndex(t => t.id === tabId);
      const newTabs = tabs.filter(t => t.id !== tabId);
      setTabs(newTabs);

      if (activeTab === tabId && newTabs.length > 0) {
        const newActiveIndex = Math.min(tabIndex, newTabs.length - 1);
        setActiveTab(newTabs[newActiveIndex].id);
      }
    };

    return (
      <div style={{ border: '1px solid #334155', borderRadius: '0.375rem', overflow: 'hidden' }}>
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          variant="pill"
          size="sm"
          closeable
          onClose={handleClose}
          showAddButton
          onAdd={handleAdd}
        />
      </div>
    );
  },
};

// ============================================
// COMPOUND COMPONENT PATTERN STORIES
// ============================================

export const CompoundBasic: Story = {
  render: () => (
    <TabsRoot defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div style={{ padding: '1rem' }}>
          <h3>Account Settings</h3>
          <p>Manage your account information and preferences.</p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div style={{ padding: '1rem' }}>
          <h3>Password Settings</h3>
          <p>Change your password and security settings.</p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div style={{ padding: '1rem' }}>
          <h3>Application Settings</h3>
          <p>Configure application preferences.</p>
        </div>
      </TabsContent>
    </TabsRoot>
  ),
  parameters: {
    docs: {
      description: {
        story: `
The compound component pattern provides more flexibility over the layout and structure of tabs.
This is similar to Radix UI's Tabs API.

\`\`\`tsx
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from 'notebook-ui';

<TabsRoot defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account content</TabsContent>
  <TabsContent value="password">Password content</TabsContent>
</TabsRoot>
\`\`\`
        `,
      },
    },
  },
};

export const CompoundWithIcons: Story = {
  render: () => (
    <TabsRoot defaultValue="profile" variant="underline">
      <TabsList>
        <TabsTrigger value="profile" icon={<User className="h-4 w-4" />}>
          Profile
        </TabsTrigger>
        <TabsTrigger value="settings" icon={<Settings className="h-4 w-4" />}>
          Settings
        </TabsTrigger>
        <TabsTrigger value="notifications" icon={<Bell className="h-4 w-4" />}>
          Notifications
        </TabsTrigger>
        <TabsTrigger value="security" icon={<Lock className="h-4 w-4" />} disabled>
          Security
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <div style={{ padding: '1rem' }}>
          <h3>Profile Information</h3>
          <p>Update your profile details and avatar.</p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div style={{ padding: '1rem' }}>
          <h3>Application Settings</h3>
          <p>Configure your application preferences.</p>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div style={{ padding: '1rem' }}>
          <h3>Notification Preferences</h3>
          <p>Manage how you receive notifications.</p>
        </div>
      </TabsContent>
      <TabsContent value="security">
        <div style={{ padding: '1rem' }}>
          <h3>Security Settings</h3>
          <p>This tab is disabled.</p>
        </div>
      </TabsContent>
    </TabsRoot>
  ),
};

export const CompoundWithBadges: Story = {
  render: () => (
    <TabsRoot defaultValue="inbox" variant="pill">
      <TabsList>
        <TabsTrigger value="inbox" badge={12} badgeVariant="info">
          Inbox
        </TabsTrigger>
        <TabsTrigger value="alerts" badge={3} badgeVariant="error">
          Alerts
        </TabsTrigger>
        <TabsTrigger value="drafts" badge={5} badgeVariant="warning">
          Drafts
        </TabsTrigger>
        <TabsTrigger value="sent">
          Sent
        </TabsTrigger>
      </TabsList>
      <TabsContent value="inbox">
        <div style={{ padding: '1rem' }}>You have 12 new messages.</div>
      </TabsContent>
      <TabsContent value="alerts">
        <div style={{ padding: '1rem' }}>3 critical alerts require attention.</div>
      </TabsContent>
      <TabsContent value="drafts">
        <div style={{ padding: '1rem' }}>5 drafts saved.</div>
      </TabsContent>
      <TabsContent value="sent">
        <div style={{ padding: '1rem' }}>View your sent messages.</div>
      </TabsContent>
    </TabsRoot>
  ),
};

export const CompoundControlled: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
      <div>
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setActiveTab('tab1')}
            style={{ padding: '0.5rem 1rem', background: activeTab === 'tab1' ? '#334155' : '#f1f5f9', color: activeTab === 'tab1' ? 'white' : '#334155', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
          >
            Activate Tab 1
          </button>
          <button
            onClick={() => setActiveTab('tab2')}
            style={{ padding: '0.5rem 1rem', background: activeTab === 'tab2' ? '#334155' : '#f1f5f9', color: activeTab === 'tab2' ? 'white' : '#334155', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
          >
            Activate Tab 2
          </button>
          <button
            onClick={() => setActiveTab('tab3')}
            style={{ padding: '0.5rem 1rem', background: activeTab === 'tab3' ? '#334155' : '#f1f5f9', color: activeTab === 'tab3' ? 'white' : '#334155', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
          >
            Activate Tab 3
          </button>
        </div>
        <TabsRoot value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div style={{ padding: '1rem' }}>Content for Tab 1</div>
          </TabsContent>
          <TabsContent value="tab2">
            <div style={{ padding: '1rem' }}>Content for Tab 2</div>
          </TabsContent>
          <TabsContent value="tab3">
            <div style={{ padding: '1rem' }}>Content for Tab 3</div>
          </TabsContent>
        </TabsRoot>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `value` and `onValueChange` props for controlled mode.',
      },
    },
  },
};

export const CompoundVertical: Story = {
  render: () => (
    <TabsRoot defaultValue="general" orientation="vertical">
      <TabsList>
        <TabsTrigger value="general" icon={<Settings className="h-4 w-4" />}>
          General
        </TabsTrigger>
        <TabsTrigger value="profile" icon={<User className="h-4 w-4" />}>
          Profile
        </TabsTrigger>
        <TabsTrigger value="notifications" icon={<Bell className="h-4 w-4" />}>
          Notifications
        </TabsTrigger>
        <TabsTrigger value="security" icon={<Lock className="h-4 w-4" />}>
          Security
        </TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <div style={{ padding: '1rem' }}>
          <h3>General Settings</h3>
          <p>Configure general application settings.</p>
        </div>
      </TabsContent>
      <TabsContent value="profile">
        <div style={{ padding: '1rem' }}>
          <h3>Profile Settings</h3>
          <p>Update your profile information.</p>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div style={{ padding: '1rem' }}>
          <h3>Notification Settings</h3>
          <p>Manage notification preferences.</p>
        </div>
      </TabsContent>
      <TabsContent value="security">
        <div style={{ padding: '1rem' }}>
          <h3>Security Settings</h3>
          <p>Configure security options.</p>
        </div>
      </TabsContent>
    </TabsRoot>
  ),
};

export const CompoundLazy: Story = {
  render: () => {
    const [renderLog, setRenderLog] = useState<string[]>(['tab1']);

    const LoggingContent = ({ id, name }: { id: string; name: string }) => {
      // Track render
      if (!renderLog.includes(id)) {
        setRenderLog(prev => [...prev, id]);
      }
      return (
        <div style={{ padding: '1rem' }}>
          <h3>{name} Content</h3>
          <p>This content was rendered when first visited.</p>
        </div>
      );
    };

    return (
      <div>
        <div style={{ marginBottom: '1rem', padding: '0.75rem', background: '#f8fafc', borderRadius: '0.375rem' }}>
          <strong>Rendered tabs:</strong> {renderLog.join(', ')}
          <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
            With lazy loading and preserveState, tabs are only rendered when visited and stay mounted.
          </p>
        </div>
        <TabsRoot defaultValue="tab1" lazy preserveState>
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <LoggingContent id="tab1" name="Tab 1" />
          </TabsContent>
          <TabsContent value="tab2">
            <LoggingContent id="tab2" name="Tab 2" />
          </TabsContent>
          <TabsContent value="tab3">
            <LoggingContent id="tab3" name="Tab 3" />
          </TabsContent>
        </TabsRoot>
      </div>
    );
  },
};

export const CompoundSeparatedLayout: Story = {
  render: () => (
    <TabsRoot defaultValue="overview">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0 }}>Dashboard</h2>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
        </div>
        <div style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '0.5rem', minHeight: '200px' }}>
          <TabsContent value="overview">
            <h3>Overview</h3>
            <p>Dashboard overview with key metrics.</p>
          </TabsContent>
          <TabsContent value="analytics">
            <h3>Analytics</h3>
            <p>Detailed analytics and charts.</p>
          </TabsContent>
          <TabsContent value="reports">
            <h3>Reports</h3>
            <p>Generate and view reports.</p>
          </TabsContent>
        </div>
      </div>
    </TabsRoot>
  ),
  parameters: {
    docs: {
      description: {
        story: `
The compound pattern allows flexible layouts where the tab triggers and content don't need to be adjacent.
This example places the tabs in a header row separate from the content area.
        `,
      },
    },
  },
};

/**
 * Demonstrates custom data attributes for E2E testing and product tours.
 * Each tab includes data-testid and data-tour attributes for reliable element targeting.
 *
 * Inspect the elements to see the data attributes:
 * - `data-testid`: For E2E testing with Playwright/Cypress
 * - `data-tour`: For product tours with Driver.js or similar libraries
 */
export const WithDataAttributes: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    const tabs: Tab[] = [
      {
        id: 'profile',
        label: 'Profile',
        icon: <User className="h-4 w-4" />,
        content: <div style={{ padding: '1rem' }}><h3>Profile</h3><p>Manage your profile information.</p></div>,
        dataAttributes: {
          'data-tour': 'tab-profile',
          'data-testid': 'tab-profile',
        },
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <Settings className="h-4 w-4" />,
        content: <div style={{ padding: '1rem' }}><h3>Settings</h3><p>Configure your preferences.</p></div>,
        dataAttributes: {
          'data-tour': 'tab-settings',
          'data-testid': 'tab-settings',
        },
      },
      {
        id: 'notifications',
        label: 'Notifications',
        icon: <Bell className="h-4 w-4" />,
        badge: 5,
        content: <div style={{ padding: '1rem' }}><h3>Notifications</h3><p>View your notifications.</p></div>,
        dataAttributes: {
          'data-tour': 'tab-notifications',
          'data-testid': 'tab-notifications',
        },
      },
    ];

    return (
      <div>
        <p style={{ marginBottom: '1rem', color: '#64748b', fontSize: '0.875rem' }}>
          Inspect the tab buttons to see the <code>data-tour</code> and <code>data-testid</code> attributes.
        </p>
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>
    );
  },
};

/**
 * Compound component pattern with custom data attributes for testing and product tours.
 */
export const CompoundWithDataAttributes: Story = {
  render: () => (
    <TabsRoot defaultValue="account">
      <TabsList>
        <TabsTrigger
          value="account"
          icon={<User className="h-4 w-4" />}
          dataAttributes={{
            'data-tour': 'compound-tab-account',
            'data-testid': 'compound-tab-account',
          }}
        >
          Account
        </TabsTrigger>
        <TabsTrigger
          value="password"
          icon={<Lock className="h-4 w-4" />}
          dataAttributes={{
            'data-tour': 'compound-tab-password',
            'data-testid': 'compound-tab-password',
          }}
        >
          Password
        </TabsTrigger>
        <TabsTrigger
          value="settings"
          icon={<Settings className="h-4 w-4" />}
          dataAttributes={{
            'data-tour': 'compound-tab-settings',
            'data-testid': 'compound-tab-settings',
          }}
        >
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div style={{ padding: '1rem' }}>
          <h3>Account Settings</h3>
          <p>Manage your account information and preferences.</p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div style={{ padding: '1rem' }}>
          <h3>Password Settings</h3>
          <p>Change your password and security settings.</p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div style={{ padding: '1rem' }}>
          <h3>Application Settings</h3>
          <p>Configure application preferences.</p>
        </div>
      </TabsContent>
    </TabsRoot>
  ),
  parameters: {
    docs: {
      description: {
        story: `
The compound component pattern also supports \`dataAttributes\` on the \`TabsTrigger\` component.
This allows targeting individual tabs with selectors like \`[data-tour="compound-tab-account"]\`.
        `,
      },
    },
  },
};
