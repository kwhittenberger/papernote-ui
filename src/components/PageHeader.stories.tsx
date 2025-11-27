import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import PageHeader from './PageHeader';
import { Plus, Download, Filter, Settings, Share2, Trash2, Edit } from 'lucide-react';

const meta: Meta<typeof PageHeader> = {
  title: 'Layout/PageHeader',
  component: PageHeader,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A standard page header component with title, breadcrumbs, and action buttons. Use this at the top of pages to provide consistent navigation and actions.',
      },
    },
  },
  argTypes: {
    // Disable controls for ReactNode props that can't be edited via text
    rightContent: { control: false },
    belowTitle: { control: false },
    actions: { control: false },
    breadcrumbs: { control: false },
    backButton: { control: false },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {
    title: 'Products',
    subtitle: 'Manage your product catalog',
  },
};

export const WithBreadcrumbs: Story = {
  args: {
    title: 'Products',
    subtitle: 'Manage your product catalog',
    breadcrumbs: [
      { label: 'Inventory' },
      { label: 'Products' },
    ],
  },
};

export const WithActions: Story = {
  args: {
    title: 'Products',
    subtitle: 'Manage your product catalog',
    breadcrumbs: [
      { label: 'Inventory' },
      { label: 'Products' },
    ],
    actions: [
      { id: 'filter', label: 'Filter', icon: <Filter className="h-4 w-4" />, onClick: () => alert('Filter clicked'), variant: 'ghost' },
      { id: 'export', label: 'Export', icon: <Download className="h-4 w-4" />, onClick: () => alert('Export clicked'), variant: 'secondary' },
      { id: 'add', label: 'Add Product', icon: <Plus className="h-4 w-4" />, onClick: () => alert('Add clicked'), variant: 'primary' },
    ],
  },
};

export const WithBackButton: Story = {
  args: {
    title: 'Edit Product',
    subtitle: 'Update product details',
    backButton: {
      label: 'Back to Products',
      onClick: () => alert('Back clicked'),
    },
  },
};

export const DetailPage: Story = {
  args: {
    title: 'Wireless Bluetooth Headphones',
    subtitle: 'SKU: WBH-2024-001 • In Stock',
    breadcrumbs: [
      { label: 'Inventory' },
      { label: 'Products', href: '/products' },
      { label: 'Wireless Bluetooth Headphones' },
    ],
    actions: [
      { id: 'share', label: 'Share', icon: <Share2 className="h-4 w-4" />, onClick: () => alert('Share'), variant: 'ghost' },
      { id: 'edit', label: 'Edit', icon: <Edit className="h-4 w-4" />, onClick: () => alert('Edit'), variant: 'secondary' },
      { id: 'delete', label: 'Delete', icon: <Trash2 className="h-4 w-4" />, onClick: () => alert('Delete'), variant: 'danger' },
    ],
  },
};

export const Sticky: Story = {
  args: {
    title: 'Products',
    subtitle: 'Scroll down to see the sticky behavior',
    breadcrumbs: [
      { label: 'Inventory' },
      { label: 'Products' },
    ],
    actions: [
      { id: 'add', label: 'Add Product', icon: <Plus className="h-4 w-4" />, onClick: () => {}, variant: 'primary' },
    ],
    sticky: true,
  },
  decorators: [
    (Story) => (
      <div style={{ height: '400px', overflow: 'auto', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
        <Story />
        <div className="p-6">
          <p className="text-ink-600 font-medium">↓ Scroll down to see the sticky header behavior</p>
          <div className="mt-4 space-y-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="p-4 bg-paper-100 rounded-lg">
                Content block {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  ],
};

export const WithLoadingAction: Story = {
  args: {
    title: 'Products',
    actions: [
      { id: 'export', label: 'Exporting...', icon: <Download className="h-4 w-4" />, onClick: () => {}, variant: 'secondary', loading: true },
      { id: 'add', label: 'Add Product', icon: <Plus className="h-4 w-4" />, onClick: () => {}, variant: 'primary' },
    ],
  },
};

export const WithDisabledAction: Story = {
  args: {
    title: 'Products',
    actions: [
      { id: 'export', label: 'Export', icon: <Download className="h-4 w-4" />, onClick: () => {}, variant: 'secondary', disabled: true },
      { id: 'add', label: 'Add Product', icon: <Plus className="h-4 w-4" />, onClick: () => {}, variant: 'primary' },
    ],
  },
};

export const SettingsPage: Story = {
  args: {
    title: 'Settings',
    subtitle: 'Manage your application preferences',
    breadcrumbs: [
      { label: 'Settings' },
    ],
    actions: [
      { id: 'reset', label: 'Reset to Defaults', onClick: () => alert('Reset'), variant: 'ghost' },
      { id: 'save', label: 'Save Changes', onClick: () => alert('Save'), variant: 'primary' },
    ],
  },
};

export const DashboardPage: Story = {
  args: {
    title: 'Dashboard',
    subtitle: 'Welcome back, John! Here\'s what\'s happening today.',
    actions: [
      { id: 'settings', label: 'Settings', icon: <Settings className="h-4 w-4" />, onClick: () => {}, variant: 'ghost' },
      { id: 'export', label: 'Export Report', icon: <Download className="h-4 w-4" />, onClick: () => {}, variant: 'secondary' },
    ],
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'Simple Page',
  },
};

export const LongTitle: Story = {
  args: {
    title: 'This Is a Very Long Page Title That Might Need to Truncate on Smaller Screens',
    subtitle: 'With an equally verbose subtitle that provides additional context about this page',
    breadcrumbs: [
      { label: 'Category' },
      { label: 'Subcategory' },
      { label: 'This Is a Very Long Page Title' },
    ],
    actions: [
      { id: 'action1', label: 'Action 1', onClick: () => {}, variant: 'ghost' },
      { id: 'action2', label: 'Action 2', onClick: () => {}, variant: 'secondary' },
      { id: 'action3', label: 'Primary Action', onClick: () => {}, variant: 'primary' },
    ],
  },
};
