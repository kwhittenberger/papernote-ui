import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DataTable from './DataTable';
import Badge from './Badge';
import Button from './Button';
import { Edit, Trash, Eye } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joinedAt: string;
}

const sampleUsers: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', joinedAt: '2024-01-15' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active', joinedAt: '2024-02-20' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'inactive', joinedAt: '2024-03-10' },
  { id: '4', name: 'Alice Williams', email: 'alice@example.com', role: 'Manager', status: 'active', joinedAt: '2024-01-05' },
  { id: '5', name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'pending', joinedAt: '2024-04-01' },
];

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Feature-rich data table component with sorting, filtering, selection, row expansion, and virtual scrolling.

## Features
- **Sorting**: Click column headers to sort ascending/descending
- **Selection**: Single or multi-select rows with checkboxes
- **Row actions**: Sticky actions column with Edit/Delete/Custom buttons
- **Expansion modes**: Edit, details view, add/manage related records
- **Virtual scrolling**: Handle 10,000+ rows efficiently
- **Loading states**: Skeleton loading and empty states
- **Column width control**: Fixed, flex, min/max width constraints
- **Custom rendering**: Per-column custom cell content
- **Double-click triggers**: Open edit mode on row double-click
- **Responsive**: Horizontal scroll for wide tables

## Usage

\`\`\`tsx
import { DataTable } from 'notebook-ui';
import { Edit, Trash } from 'lucide-react';

const columns = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  { 
    key: 'status', 
    header: 'Status',
    render: (user) => <Badge variant={user.status === 'active' ? 'success' : 'error'}>{user.status}</Badge>
  },
];

const actions = [
  { label: 'Edit', icon: <Edit />, onClick: (row) => handleEdit(row) },
  { label: 'Delete', icon: <Trash />, onClick: (row) => handleDelete(row), variant: 'danger' },
];

<DataTable
  data={users}
  columns={columns}
  actions={actions}
  selectable
  onSelectionChange={setSelected}
  expandedRow={{
    edit: {
      render: (item, onSave, onCancel) => <EditForm item={item} onSave={onSave} onCancel={onCancel} />,
      triggerOnDoubleClick: true
    }
  }}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'Array of data items to display (must have id property)',
      table: {
        type: { summary: 'T[]' },
      },
    },
    columns: {
      description: 'Column definitions with headers, keys, and optional custom rendering',
      table: {
        type: { summary: 'DataTableColumn<T>[]' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Show loading skeleton',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      control: 'text',
      description: 'Error message to display',
      table: {
        type: { summary: 'string | null' },
      },
    },
    emptyMessage: {
      control: 'text',
      description: 'Message shown when data array is empty',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'No data available' },
      },
    },
    selectable: {
      control: 'boolean',
      description: 'Enable row selection with checkboxes',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    actions: {
      description: 'Row actions displayed in sticky actions column',
      table: {
        type: { summary: 'DataTableAction<T>[]' },
      },
    },
    expandedRow: {
      description: 'Configuration for row expansion modes (edit, details, addRelated, manageRelated)',
      table: {
        type: { summary: 'ExpandedRowConfig<T>' },
      },
    },
    virtualized: {
      control: 'boolean',
      description: 'Enable virtual scrolling for large datasets (10,000+ rows)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    virtualHeight: {
      control: 'text',
      description: 'Container height for virtual scrolling',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '600px' },
      },
    },
    virtualRowHeight: {
      control: 'number',
      description: 'Fixed row height in pixels for virtual scrolling',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '60' },
      },
    },
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
  {
    key: 'name',
    header: 'Name',
    sortable: true,
  },
  {
    key: 'email',
    header: 'Email',
    sortable: true,
  },
  {
    key: 'role',
    header: 'Role',
  },
  {
    key: 'status',
    header: 'Status',
    render: (user: User) => {
      const variant = user.status === 'active' ? 'success' : user.status === 'inactive' ? 'error' : 'warning';
      return <Badge variant={variant}>{user.status}</Badge>;
    },
  },
  {
    key: 'joinedAt',
    header: 'Joined',
    sortable: true,
  },
];

export const Default: Story = {
  args: {
    data: sampleUsers,
    columns,
  },
};

export const WithActions: Story = {
  args: {
    data: sampleUsers,
    columns,
    actions: [
      {
        label: 'View',
        icon: <Eye className="h-4 w-4" />,
        onClick: (user: User) => alert(`View ${user.name}`),
      },
      {
        label: 'Edit',
        icon: <Edit className="h-4 w-4" />,
        onClick: (user: User) => alert(`Edit ${user.name}`),
      },
      {
        label: 'Delete',
        icon: <Trash className="h-4 w-4" />,
        onClick: (user: User) => alert(`Delete ${user.name}`),
        variant: 'danger',
      },
    ],
  },
};

export const Selectable: Story = {
  args: {
    data: sampleUsers,
    columns,
    selectable: true,
    onRowSelect: (selected: string[]) => console.log('Selected:', selected),
  },
};

export const Paginated: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(2);

    // Simulate client-side pagination
    const paginatedData = sampleUsers.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

    return (
      <DataTable
        data={paginatedData}
        columns={columns}
        paginated
        currentPage={currentPage}
        pageSize={pageSize}
        totalItems={sampleUsers.length}
        onPageChange={setCurrentPage}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setCurrentPage(1);
        }}
      />
    );
  },
};

export const WithExpandedRows: Story = {
  args: {
    data: sampleUsers,
    columns,
    expandable: true,
    showExpandChevron: true,
    renderExpandedRow: (user: User) => (
      <div style={{ padding: '1rem', backgroundColor: '#f5f5f4' }}>
        <h4 style={{ marginBottom: '0.5rem', fontWeight: 600 }}>User Details</h4>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Status:</strong> {user.status}</p>
      </div>
    ),
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};

export const Compact: Story = {
  args: {
    data: sampleUsers,
    columns,
    density: 'compact',
  },
};

export const Comfortable: Story = {
  args: {
    data: sampleUsers,
    columns,
    density: 'comfortable',
  },
};

export const FullFeatured: Story = {
  args: {
    data: sampleUsers,
    columns,
    selectable: true,
    actions: [
      {
        label: 'Edit',
        icon: <Edit className="h-4 w-4" />,
        onClick: (user: User) => alert(`Edit ${user.name}`),
      },
      {
        label: 'Delete',
        icon: <Trash className="h-4 w-4" />,
        onClick: (user: User) => alert(`Delete ${user.name}`),
        variant: 'danger',
      },
    ],
    expandable: true,
    showExpandChevron: true,
    renderExpandedRow: (user: User) => (
      <div style={{ padding: '1rem' }}>
        <p>Additional details for {user.name}</p>
      </div>
    ),
  },
};

export const WithSecondaryRows: Story = {
  args: {
    data: sampleUsers,
    columns: [
      {
        key: 'name',
        header: 'Name',
        sortable: true,
        renderSecondary: (user: User) => (
          <span className="text-xs text-ink-500">Member since {user.joinedAt}</span>
        ),
      },
      {
        key: 'email',
        header: 'Email',
        sortable: true,
        renderSecondary: (user: User) => (
          <span className="text-xs text-ink-500">{user.role}</span>
        ),
      },
      {
        key: 'status',
        header: 'Status',
        render: (user: User) => (
          <Badge variant={user.status === 'active' ? 'success' : user.status === 'inactive' ? 'error' : 'warning'}>
            {user.status}
          </Badge>
        ),
      },
    ],
    selectable: true,
    actions: [
      {
        label: 'Edit',
        icon: <Edit className="h-4 w-4" />,
        onClick: (user: User) => alert(`Edit ${user.name}`),
      },
      {
        label: 'View',
        icon: <Eye className="h-4 w-4" />,
        onClick: (user: User) => alert(`View ${user.name}`),
      },
    ],
  },
};

export const FullWidthWrappingText: Story = {
  args: {
    data: [
      { id: '1', name: 'ADOBE Adobe Systems SAN JOSE CA - Expense - Monthly subscription for creative cloud services' },
      { id: '2', name: 'AMAZON PRIME Amazon.com SEATTLE WA - Entertainment - Annual membership fee' },
      { id: '3', name: 'SPOTIFY Spotify USA NEW YORK NY - Music streaming service monthly payment' },
      { id: '4', name: 'NETFLIX Netflix.com LOS GATOS CA - Video streaming monthly subscription' },
      { id: '5', name: 'MICROSOFT Microsoft Corporation REDMOND WA - Office 365 business subscription annual fee' },
    ],
    columns: [
      {
        key: 'name',
        header: 'Transaction Name',
        flex: 1,
      },
    ],
  },
};

export const FullWidthWithSecondaryRow: Story = {
  args: {
    data: [
      { id: '1', name: 'ADOBE Adobe Systems SAN JOSE CA - Expense', frequency: 'Monthly', amount: '$16.52' },
      { id: '2', name: 'AMAZON PRIME Amazon.com SEATTLE WA - Entertainment', frequency: 'Monthly', amount: '$25.00' },
      { id: '3', name: 'SPOTIFY Spotify USA NEW YORK NY - Music streaming service', frequency: 'Monthly', amount: '$9.99' },
      { id: '4', name: 'NETFLIX Netflix.com LOS GATOS CA - Video streaming', frequency: 'Monthly', amount: '$15.49' },
      { id: '5', name: 'MICROSOFT Microsoft Corporation REDMOND WA - Office 365 business subscription', frequency: 'Annual', amount: '$132.14' },
    ],
    columns: [
      {
        key: 'name',
        header: 'Name',
        flex: 1,
        renderSecondary: (item: any) => (
          <span className="text-xs text-ink-500">{item.frequency} • {item.amount}</span>
        ),
      },
    ],
  },
};

export const RowHighlighting: Story = {
  render: () => {
    const [highlightedRows, setHighlightedRows] = useState<string[]>([]);

    const simulateSave = (rowId: string) => {
      setHighlightedRows([rowId]);
      // Clear after animation completes
      setTimeout(() => setHighlightedRows([]), 2000);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Button variant="secondary" size="sm" onClick={() => simulateSave('1')}>
            Flash Row 1
          </Button>
          <Button variant="secondary" size="sm" onClick={() => simulateSave('2')}>
            Flash Row 2
          </Button>
          <Button variant="secondary" size="sm" onClick={() => simulateSave('3')}>
            Flash Row 3
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              setHighlightedRows(['1', '3', '5']);
              setTimeout(() => setHighlightedRows([]), 2000);
            }}
          >
            Flash Multiple
          </Button>
        </div>
        <DataTable
          data={sampleUsers}
          columns={[
            { key: 'name', header: 'Name', sortable: true },
            { key: 'email', header: 'Email', sortable: true },
            { key: 'role', header: 'Role' },
            {
              key: 'status',
              header: 'Status',
              render: (user: User) => (
                <Badge variant={user.status === 'active' ? 'success' : user.status === 'inactive' ? 'error' : 'warning'}>
                  {user.status}
                </Badge>
              ),
            },
          ]}
          highlightedRows={highlightedRows}
          highlightDuration={2000}
        />
        <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
          Click a button to see the row flash green and fade back to normal.
          This is useful for indicating successful saves or updates.
        </p>
      </div>
    );
  },
};
