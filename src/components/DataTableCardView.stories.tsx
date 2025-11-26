import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DataTableCardView from './DataTableCardView';
import { DataTableColumn } from './DataTable';
import Badge from './Badge';
import { Edit, Trash, Eye, Mail } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  department: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  avatar?: string;
  joinDate: string;
}

const sampleUsers: User[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    department: 'Engineering',
    role: 'Senior Developer',
    status: 'active',
    joinDate: '2023-01-15',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    department: 'Design',
    role: 'UX Designer',
    status: 'active',
    joinDate: '2023-03-22',
  },
  {
    id: '3',
    name: 'Mike Wilson',
    email: 'mike.w@example.com',
    department: 'Marketing',
    role: 'Marketing Manager',
    status: 'pending',
    joinDate: '2024-01-10',
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.d@example.com',
    department: 'Engineering',
    role: 'DevOps Engineer',
    status: 'inactive',
    joinDate: '2022-06-05',
  },
  {
    id: '5',
    name: 'Alex Chen',
    email: 'alex.c@example.com',
    department: 'Product',
    role: 'Product Manager',
    status: 'active',
    joinDate: '2023-09-01',
  },
];

const columns: DataTableColumn<User>[] = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'department', header: 'Department' },
  { key: 'role', header: 'Role' },
  {
    key: 'status',
    header: 'Status',
    render: (item) => {
      const variants = {
        active: 'success',
        inactive: 'default',
        pending: 'warning',
      } as const;
      return (
        <Badge variant={variants[item.status]} size="sm">
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </Badge>
      );
    },
  },
  { key: 'joinDate', header: 'Join Date' },
];

const meta: Meta<typeof DataTableCardView> = {
  title: 'Data Display/DataTableCardView',
  component: DataTableCardView,
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'mobileM',
    },
    docs: {
      description: {
        component: `
Mobile-friendly card view for data tables. Renders each row as a touchable card
with configurable title, subtitle, metadata fields, and status badge.

Features:
- Touch-optimized with active states
- Configurable card layout
- Selection mode support
- Loading skeletons
- Column render function reuse
- Long-press for context actions
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataTableCardView<User>>;

/**
 * Default card view with basic configuration
 */
export const Default: Story = {
  args: {
    data: sampleUsers,
    columns,
    cardConfig: {
      titleKey: 'name',
      subtitleKey: 'email',
      metadataKeys: ['department', 'role'],
      badgeKey: 'status',
    },
    onCardClick: (user) => alert(`Clicked: ${user.name}`),
  },
};

/**
 * Card view with avatar/initials display
 */
export const WithAvatar: Story = {
  args: {
    data: sampleUsers,
    columns,
    cardConfig: {
      titleKey: 'name',
      subtitleKey: 'role',
      metadataKeys: ['email', 'department'],
      badgeKey: 'status',
      avatarKey: 'name', // Will show initials since no avatar URL
    },
    onCardClick: (user) => alert(`Clicked: ${user.name}`),
  },
};

/**
 * Card view with chevron indicator for navigation
 */
export const WithChevron: Story = {
  args: {
    data: sampleUsers,
    columns,
    cardConfig: {
      titleKey: 'name',
      subtitleKey: 'email',
      metadataKeys: ['department'],
      badgeKey: 'status',
      showChevron: true,
    },
    onCardClick: (user) => alert(`Navigate to: ${user.name}`),
  },
};

/**
 * Card view with selection enabled
 */
export const WithSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<Set<string>>(new Set(['1', '3']));
    
    return (
      <div className="space-y-4">
        <div className="text-sm text-ink-600">
          Selected: {selected.size} items
        </div>
        <DataTableCardView
          data={sampleUsers}
          columns={columns}
          cardConfig={{
            titleKey: 'name',
            subtitleKey: 'email',
            metadataKeys: ['department', 'role'],
            badgeKey: 'status',
          }}
          selectable
          selectedRows={selected}
          onSelectionChange={(rows) => setSelected(new Set(rows))}
        />
      </div>
    );
  },
};

/**
 * Card view with action menu
 */
export const WithActions: Story = {
  args: {
    data: sampleUsers,
    columns,
    cardConfig: {
      titleKey: 'name',
      subtitleKey: 'email',
      metadataKeys: ['department'],
      badgeKey: 'status',
    },
    onEdit: (user) => alert(`Edit: ${user.name}`),
    onDelete: (user) => alert(`Delete: ${user.name}`),
    actions: [
      {
        label: 'View Profile',
        icon: <Eye className="h-4 w-4" />,
        onClick: (user) => alert(`View: ${user.name}`),
      },
      {
        label: 'Send Email',
        icon: <Mail className="h-4 w-4" />,
        onClick: (user) => alert(`Email: ${user.email}`),
      },
    ],
    onCardLongPress: (user, event) => {
      // In a real app, this would open an action menu
      console.log('Long press on:', user.name, event);
    },
  },
};

/**
 * Loading state with skeleton cards
 */
export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
    loadingRows: 5,
  },
};

/**
 * Empty state
 */
export const Empty: Story = {
  args: {
    data: [],
    columns,
    emptyMessage: 'No users found. Try adjusting your filters.',
  },
};

/**
 * Compact gap spacing
 */
export const CompactGap: Story = {
  args: {
    data: sampleUsers,
    columns,
    cardConfig: {
      titleKey: 'name',
      subtitleKey: 'email',
      badgeKey: 'status',
    },
    gap: 'sm',
  },
};

/**
 * Large gap spacing
 */
export const LargeGap: Story = {
  args: {
    data: sampleUsers,
    columns,
    cardConfig: {
      titleKey: 'name',
      subtitleKey: 'email',
      metadataKeys: ['department', 'role', 'joinDate'],
      badgeKey: 'status',
    },
    gap: 'lg',
  },
};

/**
 * Minimal card (title only)
 */
export const MinimalCard: Story = {
  args: {
    data: sampleUsers,
    columns,
    cardConfig: {
      titleKey: 'name',
      showChevron: true,
    },
    onCardClick: (user) => alert(`Clicked: ${user.name}`),
  },
};
