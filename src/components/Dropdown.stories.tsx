import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Dropdown from './Dropdown';
import Button from './Button';
import { ChevronDown, Settings, User, LogOut, HelpCircle } from 'lucide-react';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Dropdown menu component with portal rendering and smart positioning.

## Features
- **Portal rendering**: Renders to document.body with proper z-index
- **Smart positioning**: Auto-adjusts to stay within viewport
- **Alignment**: Left or right alignment options
- **Placement**: Top or bottom placement
- **Item variants**: default, danger for destructive actions
- **Dividers**: Visual separators between groups
- **Icon support**: Icons alongside item labels
- **Disabled items**: Non-clickable items with visual feedback

## Usage

\`\`\`tsx
import { Dropdown } from 'notebook-ui';
import { User, Settings, LogOut } from 'lucide-react';

const items = [
  { id: '1', label: 'Profile', icon: <User className="h-4 w-4" />, onClick: () => {} },
  { id: '2', label: 'Settings', icon: <Settings className="h-4 w-4" />, onClick: () => {} },
  { id: '3', divider: true },
  { id: '4', label: 'Sign Out', icon: <LogOut className="h-4 w-4" />, onClick: () => {}, variant: 'danger' },
];

<Dropdown
  trigger={<Button>Menu</Button>}
  items={items}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      description: 'Element that triggers the dropdown (button, avatar, etc.)',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    items: {
      description: 'Array of dropdown menu items',
      table: {
        type: { summary: 'DropdownItem[]' },
      },
    },
    align: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Horizontal alignment of menu relative to trigger',
      table: {
        type: { summary: 'left | right' },
        defaultValue: { summary: 'right' },
      },
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom'],
      description: 'Vertical placement of menu relative to trigger',
      table: {
        type: { summary: 'top | bottom' },
        defaultValue: { summary: 'bottom' },
      },
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const items = [
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2' },
      { id: '3', label: 'Option 3' },
    ];

    return (
      <Dropdown
        trigger={<Button>Open Menu <ChevronDown className="h-4 w-4 ml-2" /></Button>}
        items={items}
        onSelect={(item) => alert(`Selected: ${item.label}`)}
      />
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const items = [
      { id: '1', label: 'Profile', icon: <User className="h-4 w-4" /> },
      { id: '2', label: 'Settings', icon: <Settings className="h-4 w-4" /> },
      { id: '3', label: 'Help', icon: <HelpCircle className="h-4 w-4" /> },
      { id: '4', label: 'Sign Out', icon: <LogOut className="h-4 w-4" /> },
    ];

    return (
      <Dropdown
        trigger={<Button>Account <ChevronDown className="h-4 w-4 ml-2" /></Button>}
        items={items}
        onSelect={(item) => alert(`Selected: ${item.label}`)}
      />
    );
  },
};

export const WithDividers: Story = {
  render: () => {
    const items = [
      { id: '1', label: 'Profile', icon: <User className="h-4 w-4" /> },
      { id: '2', label: 'Settings', icon: <Settings className="h-4 w-4" /> },
      { id: 'divider-1', divider: true },
      { id: '3', label: 'Help', icon: <HelpCircle className="h-4 w-4" /> },
      { id: 'divider-2', divider: true },
      { id: '4', label: 'Sign Out', icon: <LogOut className="h-4 w-4" />, danger: true },
    ];

    return (
      <Dropdown
        trigger={<Button>Menu <ChevronDown className="h-4 w-4 ml-2" /></Button>}
        items={items}
        onSelect={(item) => alert(`Selected: ${item.label}`)}
      />
    );
  },
};

export const WithDisabledItems: Story = {
  render: () => {
    const items = [
      { id: '1', label: 'Available Option' },
      { id: '2', label: 'Disabled Option', disabled: true },
      { id: '3', label: 'Another Available' },
      { id: '4', label: 'Also Disabled', disabled: true },
    ];

    return (
      <Dropdown
        trigger={<Button>Options <ChevronDown className="h-4 w-4 ml-2" /></Button>}
        items={items}
        onSelect={(item) => alert(`Selected: ${item.label}`)}
      />
    );
  },
};

export const UserMenu: Story = {
  render: () => {
    const items = [
      { id: 'profile', label: 'View Profile', icon: <User className="h-4 w-4" /> },
      { id: 'settings', label: 'Account Settings', icon: <Settings className="h-4 w-4" /> },
      { id: 'divider-1', divider: true },
      { id: 'help', label: 'Help & Support', icon: <HelpCircle className="h-4 w-4" /> },
      { id: 'divider-2', divider: true },
      { id: 'logout', label: 'Sign Out', icon: <LogOut className="h-4 w-4" />, danger: true },
    ];

    return (
      <Dropdown
        trigger={
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
          }}>
            <div style={{
              width: '32px',
              height: '32px',
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
            <ChevronDown className="h-4 w-4" />
          </button>
        }
        items={items}
        onSelect={(item) => {
          if (item.id === 'logout') {
            alert('Signing out...');
          } else {
            alert(`Selected: ${item.label}`);
          }
        }}
      />
    );
  },
};

export const ActionsMenu: Story = {
  render: () => {
    const items = [
      { id: 'edit', label: 'Edit' },
      { id: 'duplicate', label: 'Duplicate' },
      { id: 'archive', label: 'Archive' },
      { id: 'divider', divider: true },
      { id: 'delete', label: 'Delete', danger: true },
    ];

    return (
      <Dropdown
        trigger={<Button variant="ghost" iconOnly><span style={{ fontSize: '1.25rem' }}>⋮</span></Button>}
        items={items}
        onSelect={(item) => alert(`Action: ${item.label}`)}
      />
    );
  },
};

export const SelectLanguage: Story = {
  render: () => {
    const [selected, setSelected] = useState('en');

    const items = [
      { id: 'en', label: 'English' },
      { id: 'es', label: 'Español' },
      { id: 'fr', label: 'Français' },
      { id: 'de', label: 'Deutsch' },
      { id: 'ja', label: '日本語' },
    ];

    const selectedLabel = items.find(i => i.id === selected)?.label || 'Select';

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Language:</span>
        <Dropdown
          trigger={
            <Button variant="outline">
              {selectedLabel} <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          }
          items={items.map(item => ({
            ...item,
            selected: item.id === selected,
          }))}
          onSelect={(item) => setSelected(item.id)}
        />
      </div>
    );
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const items = [
      {
        id: 'free',
        label: 'Free Plan',
        description: 'Basic features for individuals',
      },
      {
        id: 'pro',
        label: 'Pro Plan',
        description: 'Advanced features for professionals',
      },
      {
        id: 'team',
        label: 'Team Plan',
        description: 'Collaboration tools for teams',
      },
    ];

    return (
      <Dropdown
        trigger={<Button>Choose Plan <ChevronDown className="h-4 w-4 ml-2" /></Button>}
        items={items}
        onSelect={(item) => alert(`Selected: ${item.label}`)}
      />
    );
  },
};
