import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CommandPalette, { Command } from './CommandPalette';
import Button from './Button';
import { Home, Settings, User, LogOut, FileText, Search, Mail, Calendar, Bell, Download } from 'lucide-react';

const meta = {
  title: 'Navigation/CommandPalette',
  component: CommandPalette,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ minWidth: '600px', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CommandPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicCommands: Command[] = [
  {
    id: 'home',
    label: 'Go to Home',
    icon: <Home className="h-4 w-4" />,
    onExecute: () => console.log('Navigate to home'),
  },
  {
    id: 'settings',
    label: 'Open Settings',
    icon: <Settings className="h-4 w-4" />,
    onExecute: () => console.log('Open settings'),
  },
  {
    id: 'profile',
    label: 'View Profile',
    icon: <User className="h-4 w-4" />,
    onExecute: () => console.log('View profile'),
  },
  {
    id: 'logout',
    label: 'Log Out',
    icon: <LogOut className="h-4 w-4" />,
    onExecute: () => console.log('Log out'),
  },
];

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>
        <CommandPalette
          commands={basicCommands}
          open={open}
          onOpenChange={setOpen}
        />
      </div>
    );
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const commands: Command[] = [
      {
        id: 'home',
        label: 'Go to Dashboard',
        description: 'Navigate to the main dashboard',
        icon: <Home className="h-4 w-4" />,
        onExecute: () => console.log('Navigate to dashboard'),
      },
      {
        id: 'settings',
        label: 'Open Settings',
        description: 'Configure application settings',
        icon: <Settings className="h-4 w-4" />,
        onExecute: () => console.log('Open settings'),
      },
      {
        id: 'profile',
        label: 'View Profile',
        description: 'View and edit your profile',
        icon: <User className="h-4 w-4" />,
        onExecute: () => console.log('View profile'),
      },
    ];

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>
        <CommandPalette
          commands={commands}
          open={open}
          onOpenChange={setOpen}
        />
      </div>
    );
  },
};

export const WithGroups: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const commands: Command[] = [
      {
        id: 'home',
        label: 'Go to Dashboard',
        icon: <Home className="h-4 w-4" />,
        group: 'Navigation',
        onExecute: () => console.log('Navigate to dashboard'),
      },
      {
        id: 'search',
        label: 'Search',
        icon: <Search className="h-4 w-4" />,
        group: 'Navigation',
        onExecute: () => console.log('Search'),
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <Settings className="h-4 w-4" />,
        group: 'Configuration',
        onExecute: () => console.log('Open settings'),
      },
      {
        id: 'profile',
        label: 'Profile',
        icon: <User className="h-4 w-4" />,
        group: 'Account',
        onExecute: () => console.log('View profile'),
      },
      {
        id: 'logout',
        label: 'Log Out',
        icon: <LogOut className="h-4 w-4" />,
        group: 'Account',
        onExecute: () => console.log('Log out'),
      },
    ];

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>
        <CommandPalette
          commands={commands}
          open={open}
          onOpenChange={setOpen}
        />
      </div>
    );
  },
};

export const WithShortcuts: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const commands: Command[] = [
      {
        id: 'home',
        label: 'Go to Dashboard',
        icon: <Home className="h-4 w-4" />,
        shortcut: 'Ctrl+H',
        onExecute: () => console.log('Navigate to dashboard'),
      },
      {
        id: 'search',
        label: 'Search',
        icon: <Search className="h-4 w-4" />,
        shortcut: 'Ctrl+F',
        onExecute: () => console.log('Search'),
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <Settings className="h-4 w-4" />,
        shortcut: 'Ctrl+,',
        onExecute: () => console.log('Open settings'),
      },
    ];

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>
        <CommandPalette
          commands={commands}
          open={open}
          onOpenChange={setOpen}
        />
      </div>
    );
  },
};

export const WithRecentCommands: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [recentCommands, setRecentCommands] = useState<string[]>(['profile', 'settings']);

    const commands: Command[] = [
      {
        id: 'home',
        label: 'Go to Dashboard',
        icon: <Home className="h-4 w-4" />,
        group: 'Navigation',
        onExecute: () => console.log('Navigate to dashboard'),
      },
      {
        id: 'search',
        label: 'Search',
        icon: <Search className="h-4 w-4" />,
        group: 'Navigation',
        onExecute: () => console.log('Search'),
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <Settings className="h-4 w-4" />,
        group: 'Configuration',
        onExecute: () => console.log('Open settings'),
      },
      {
        id: 'profile',
        label: 'Profile',
        icon: <User className="h-4 w-4" />,
        group: 'Account',
        onExecute: () => console.log('View profile'),
      },
      {
        id: 'logout',
        label: 'Log Out',
        icon: <LogOut className="h-4 w-4" />,
        group: 'Account',
        onExecute: () => console.log('Log out'),
      },
    ];

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>
        <CommandPalette
          commands={commands}
          open={open}
          onOpenChange={setOpen}
          recentCommands={recentCommands}
          onRecentCommandsChange={setRecentCommands}
        />
      </div>
    );
  },
};

export const ApplicationCommands: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [recentCommands, setRecentCommands] = useState<string[]>([]);

    const commands: Command[] = [
      {
        id: 'dashboard',
        label: 'Go to Dashboard',
        description: 'View your main dashboard',
        icon: <Home className="h-4 w-4" />,
        group: 'Navigation',
        shortcut: 'Ctrl+D',
        keywords: ['home', 'main'],
        onExecute: () => {
          console.log('Navigate to dashboard');
          setOpen(false);
        },
      },
      {
        id: 'documents',
        label: 'View Documents',
        description: 'Browse all documents',
        icon: <FileText className="h-4 w-4" />,
        group: 'Navigation',
        keywords: ['files', 'docs'],
        onExecute: () => {
          console.log('View documents');
          setOpen(false);
        },
      },
      {
        id: 'inbox',
        label: 'Open Inbox',
        description: 'Check your messages',
        icon: <Mail className="h-4 w-4" />,
        group: 'Navigation',
        shortcut: 'Ctrl+M',
        keywords: ['messages', 'email'],
        onExecute: () => {
          console.log('Open inbox');
          setOpen(false);
        },
      },
      {
        id: 'calendar',
        label: 'Open Calendar',
        description: 'View your schedule',
        icon: <Calendar className="h-4 w-4" />,
        group: 'Navigation',
        keywords: ['schedule', 'events'],
        onExecute: () => {
          console.log('Open calendar');
          setOpen(false);
        },
      },
      {
        id: 'search',
        label: 'Global Search',
        description: 'Search across all content',
        icon: <Search className="h-4 w-4" />,
        group: 'Actions',
        shortcut: 'Ctrl+F',
        onExecute: () => {
          console.log('Open search');
          setOpen(false);
        },
      },
      {
        id: 'notifications',
        label: 'View Notifications',
        description: 'See all notifications',
        icon: <Bell className="h-4 w-4" />,
        group: 'Actions',
        shortcut: 'Ctrl+N',
        onExecute: () => {
          console.log('View notifications');
          setOpen(false);
        },
      },
      {
        id: 'export',
        label: 'Export Data',
        description: 'Download your data',
        icon: <Download className="h-4 w-4" />,
        group: 'Actions',
        onExecute: () => {
          console.log('Export data');
          setOpen(false);
        },
      },
      {
        id: 'settings',
        label: 'Settings',
        description: 'Configure application',
        icon: <Settings className="h-4 w-4" />,
        group: 'Configuration',
        shortcut: 'Ctrl+,',
        onExecute: () => {
          console.log('Open settings');
          setOpen(false);
        },
      },
      {
        id: 'profile',
        label: 'My Profile',
        description: 'View and edit profile',
        icon: <User className="h-4 w-4" />,
        group: 'Account',
        keywords: ['account', 'user'],
        onExecute: () => {
          console.log('View profile');
          setOpen(false);
        },
      },
      {
        id: 'logout',
        label: 'Log Out',
        description: 'Sign out of your account',
        icon: <LogOut className="h-4 w-4" />,
        group: 'Account',
        keywords: ['sign out', 'exit'],
        onExecute: () => {
          console.log('Log out');
          setOpen(false);
        },
      },
    ];

    return (
      <div>
        <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '0.375rem' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
            Keyboard Shortcut
          </div>
          <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
            Press <kbd style={{ padding: '0.125rem 0.375rem', backgroundColor: 'white', border: '1px solid #e5e5e5', borderRadius: '0.25rem', fontSize: '0.75rem' }}>Ctrl+K</kbd> to open the command palette
          </div>
        </div>
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>
        <CommandPalette
          commands={commands}
          open={open}
          onOpenChange={setOpen}
          recentCommands={recentCommands}
          onRecentCommandsChange={setRecentCommands}
          placeholder="Search commands..."
        />
      </div>
    );
  },
};

export const SimpleSearch: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const pages = [
      'Dashboard',
      'Analytics',
      'Reports',
      'Users',
      'Settings',
      'Billing',
      'Support',
      'Documentation',
    ];

    const commands: Command[] = pages.map((page) => ({
      id: page.toLowerCase(),
      label: page,
      onExecute: () => {
        console.log(`Navigate to ${page}`);
        setOpen(false);
      },
    }));

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Search Pages</Button>
        <CommandPalette
          commands={commands}
          open={open}
          onOpenChange={setOpen}
          placeholder="Search pages..."
        />
      </div>
    );
  },
};

export const QuickActions: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const commands: Command[] = [
      {
        id: 'new-doc',
        label: 'New Document',
        description: 'Create a new document',
        icon: <FileText className="h-4 w-4" />,
        group: 'Create',
        shortcut: 'Ctrl+N',
        onExecute: () => {
          alert('Creating new document');
          setOpen(false);
        },
      },
      {
        id: 'new-folder',
        label: 'New Folder',
        description: 'Create a new folder',
        icon: <Home className="h-4 w-4" />,
        group: 'Create',
        onExecute: () => {
          alert('Creating new folder');
          setOpen(false);
        },
      },
      {
        id: 'upload',
        label: 'Upload File',
        description: 'Upload a file from your device',
        icon: <Download className="h-4 w-4" />,
        group: 'Actions',
        shortcut: 'Ctrl+U',
        onExecute: () => {
          alert('Opening file picker');
          setOpen(false);
        },
      },
      {
        id: 'share',
        label: 'Share',
        description: 'Share with others',
        icon: <Mail className="h-4 w-4" />,
        group: 'Actions',
        onExecute: () => {
          alert('Opening share dialog');
          setOpen(false);
        },
      },
    ];

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Quick Actions</Button>
        <CommandPalette
          commands={commands}
          open={open}
          onOpenChange={setOpen}
          placeholder="What do you want to do?"
        />
      </div>
    );
  },
};
