import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import AppLayout from './AppLayout';
import { ToolbarSection } from './ExpandableToolbar';
import Card, { CardHeader, CardTitle, CardContent } from './Card';
import Button from './Button';
import { Save, Download, Upload, Copy, Trash2, Settings, FileText, Image, Filter, SortAsc } from 'lucide-react';

const meta = {
  title: 'Layout/AppLayout',
  component: AppLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleToolbarSections: ToolbarSection[] = [
  {
    id: 'file',
    label: 'File',
    items: [
      { id: 'save', label: 'Save', icon: <Save className="h-4 w-4" />, onClick: () => console.log('Save') },
      { id: 'download', label: 'Download', icon: <Download className="h-4 w-4" />, onClick: () => console.log('Download') },
      { id: 'upload', label: 'Upload', icon: <Upload className="h-4 w-4" />, onClick: () => console.log('Upload') },
    ],
  },
  {
    id: 'edit',
    label: 'Edit',
    items: [
      { id: 'copy', label: 'Copy', icon: <Copy className="h-4 w-4" />, onClick: () => console.log('Copy') },
      { id: 'delete', label: 'Delete', icon: <Trash2 className="h-4 w-4" />, onClick: () => console.log('Delete') },
    ],
  },
  {
    id: 'view',
    label: 'View',
    items: [
      { id: 'filter', label: 'Filter', icon: <Filter className="h-4 w-4" />, onClick: () => console.log('Filter') },
      { id: 'sort', label: 'Sort', icon: <SortAsc className="h-4 w-4" />, onClick: () => console.log('Sort') },
    ],
  },
];

export const Default: Story = {
  render: () => (
    <AppLayout toolbarSections={sampleToolbarSections}>
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
          Application Layout
        </h1>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>
          This layout includes an expandable toolbar and status bar
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Content Area</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Your application content goes here</p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  ),
};

export const WithoutToolbar: Story = {
  render: () => (
    <AppLayout showToolbar={false}>
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
          No Toolbar
        </h1>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>
          Layout without the toolbar, only status bar
        </p>
        <Card>
          <CardContent>
            <p>Content without toolbar above</p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  ),
};

export const WithoutStatusBar: Story = {
  render: () => (
    <AppLayout toolbarSections={sampleToolbarSections} showStatusBar={false}>
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
          No Status Bar
        </h1>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>
          Layout with toolbar but without status bar at bottom
        </p>
        <Card>
          <CardContent>
            <p>Content without status bar below</p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  ),
};

export const MinimalLayout: Story = {
  render: () => (
    <AppLayout showToolbar={false} showStatusBar={false}>
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
          Minimal Layout
        </h1>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>
          No toolbar or status bar - just the content
        </p>
        <Card>
          <CardContent>
            <p>Clean, minimal layout for focused content</p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  ),
};

export const ControlledToolbar: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
      <div>
        <div style={{ padding: '1rem', backgroundColor: '#eff6ff', borderBottom: '1px solid #e5e5e5' }}>
          <Button onClick={() => setCollapsed(!collapsed)} size="sm">
            {collapsed ? 'Expand' : 'Collapse'} Toolbar
          </Button>
        </div>
        <AppLayout
          toolbarSections={sampleToolbarSections}
          toolbarCollapsed={collapsed}
          onToolbarCollapseChange={setCollapsed}
        >
          <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
              Controlled Toolbar State
            </h1>
            <p style={{ color: '#64748b', marginBottom: '2rem' }}>
              Toolbar collapse state: {collapsed ? 'collapsed' : 'expanded'}
            </p>
            <Card>
              <CardContent>
                <p>The toolbar state is controlled externally</p>
              </CardContent>
            </Card>
          </div>
        </AppLayout>
      </div>
    );
  },
};

export const DocumentEditor: Story = {
  render: () => {
    const editorToolbar: ToolbarSection[] = [
      {
        id: 'file',
        label: 'File',
        items: [
          { id: 'new', label: 'New', icon: <FileText className="h-4 w-4" />, onClick: () => console.log('New') },
          { id: 'save', label: 'Save', icon: <Save className="h-4 w-4" />, onClick: () => console.log('Save'), shortcut: 'Ctrl+S' },
          { id: 'export', label: 'Export', icon: <Download className="h-4 w-4" />, onClick: () => console.log('Export') },
        ],
      },
      {
        id: 'edit',
        label: 'Edit',
        items: [
          { id: 'copy', label: 'Copy', icon: <Copy className="h-4 w-4" />, onClick: () => console.log('Copy'), shortcut: 'Ctrl+C' },
          { id: 'delete', label: 'Delete', icon: <Trash2 className="h-4 w-4" />, onClick: () => console.log('Delete') },
        ],
      },
      {
        id: 'insert',
        label: 'Insert',
        items: [
          { id: 'image', label: 'Image', icon: <Image className="h-4 w-4" />, onClick: () => console.log('Insert image') },
        ],
      },
    ];

    return (
      <AppLayout toolbarSections={editorToolbar}>
        <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem' }}>
            <input
              type="text"
              placeholder="Document Title"
              style={{
                width: '100%',
                fontSize: '2rem',
                fontWeight: 700,
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
                marginBottom: '1rem'
              }}
              defaultValue="Untitled Document"
            />
          </div>
          <Card>
            <CardContent>
              <div style={{ minHeight: '400px', fontSize: '1rem', lineHeight: 1.7 }}>
                <p style={{ marginBottom: '1rem' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </AppLayout>
    );
  },
};

export const DataManagementApp: Story = {
  render: () => {
    const dataToolbar: ToolbarSection[] = [
      {
        id: 'actions',
        label: 'Actions',
        items: [
          { id: 'import', label: 'Import', icon: <Upload className="h-4 w-4" />, onClick: () => console.log('Import') },
          { id: 'export', label: 'Export', icon: <Download className="h-4 w-4" />, onClick: () => console.log('Export') },
        ],
      },
      {
        id: 'view',
        label: 'View',
        items: [
          { id: 'filter', label: 'Filter', icon: <Filter className="h-4 w-4" />, onClick: () => console.log('Filter') },
          { id: 'sort', label: 'Sort', icon: <SortAsc className="h-4 w-4" />, onClick: () => console.log('Sort') },
        ],
      },
      {
        id: 'settings',
        label: 'Settings',
        items: [
          { id: 'preferences', label: 'Preferences', icon: <Settings className="h-4 w-4" />, onClick: () => console.log('Preferences') },
        ],
      },
    ];

    return (
      <AppLayout toolbarSections={dataToolbar}>
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Data Management
          </h1>
          <p style={{ color: '#64748b', marginBottom: '2rem' }}>
            View and manage your data
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            <Card>
              <CardHeader>
                <CardTitle>Records</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#3b82f6' }}>1,234</div>
                <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Total records</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Active</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#10b981' }}>987</div>
                <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Active items</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Archived</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#64748b' }}>247</div>
                <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Archived items</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AppLayout>
    );
  },
};
