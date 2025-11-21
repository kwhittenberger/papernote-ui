import type { Meta, StoryObj } from '@storybook/react';
import DataTable from './DataTable';
import Badge from './Badge';
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
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
  {
    key: 'name',
    label: 'Name',
    sortable: true,
    filterable: true,
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
  },
  {
    key: 'role',
    label: 'Role',
    filterable: true,
  },
  {
    key: 'status',
    label: 'Status',
    render: (user: User) => {
      const variant = user.status === 'active' ? 'success' : user.status === 'inactive' ? 'error' : 'warning';
      return <Badge variant={variant}>{user.status}</Badge>;
    },
  },
  {
    key: 'joinedAt',
    label: 'Joined',
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
        danger: true,
      },
    ],
  },
};

export const Selectable: Story = {
  args: {
    data: sampleUsers,
    columns,
    selectable: true,
    onSelectionChange: (selected: User[]) => console.log('Selected:', selected),
  },
};

export const Paginated: Story = {
  args: {
    data: sampleUsers,
    columns,
    paginated: true,
    pageSize: 3,
  },
};

export const WithExpandedRows: Story = {
  args: {
    data: sampleUsers,
    columns,
    expandable: true,
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
    paginated: true,
    pageSize: 3,
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
        danger: true,
      },
    ],
    expandable: true,
    renderExpandedRow: (user: User) => (
      <div style={{ padding: '1rem' }}>
        <p>Additional details for {user.name}</p>
      </div>
    ),
  },
};
