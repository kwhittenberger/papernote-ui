import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import { Home, Users, Settings, FileText } from 'lucide-react';

const meta = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ minWidth: '600px' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Users', href: '/users' },
      { label: 'Active Users' },
    ],
  },
};

export const WithoutHome: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Users', href: '/users' },
      { label: 'John Doe' },
    ],
    showHome: false,
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Users', href: '/users', icon: <Users className="h-4 w-4" /> },
      { label: 'Settings', href: '/users/settings', icon: <Settings className="h-4 w-4" /> },
      { label: 'Profile' },
    ],
  },
};

export const SingleLevel: Story = {
  args: {
    items: [
      { label: 'Dashboard' },
    ],
  },
};

export const DeepNesting: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/' },
      { label: 'Users', href: '/users' },
      { label: 'Active Users', href: '/users/active' },
      { label: 'Details', href: '/users/active/details' },
      { label: 'John Doe' },
    ],
  },
};

export const WithCurrentPath: Story = {
  args: {
    items: [
      { label: 'Users', href: '/users' },
      { label: 'Active Users', href: '/users/active' },
      { label: 'John Doe', href: '/users/active/john' },
    ],
    currentPath: '/users/active/john',
  },
};

export const DocumentPath: Story = {
  args: {
    items: [
      { label: 'Documents', href: '/documents', icon: <FileText className="h-4 w-4" /> },
      { label: '2024', href: '/documents/2024' },
      { label: 'Reports', href: '/documents/2024/reports' },
      { label: 'Q1-Report.pdf' },
    ],
  },
};
