import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CheckboxList from './CheckboxList';
import { CheckboxListItem } from './CheckboxList';

const meta = {
  title: 'Forms/CheckboxList',
  component: CheckboxList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A multi-select list component with checkboxes, grouping support, and search functionality.

## Features
- **Multi-select**: Click checkboxes to select/deselect items
- **Grouping**: Organize items into collapsible groups
- **Search/Filter**: Built-in search with debounce
- **Select All**: Optional select all checkbox
- **Selected Count**: Show number of selected items
- **Sizes**: sm, md, lg variants
- **Variants**: default, bordered, card styles

## Usage

\`\`\`tsx
import { CheckboxList } from 'notebook-ui';

<CheckboxList
  items={[
    { key: '1', label: 'Option 1' },
    { key: '2', label: 'Option 2', description: 'With description' },
  ]}
  selectedKeys={selected}
  onSelectionChange={setSelected}
  searchable
  showSelectAll
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'card'],
      description: 'Visual variant',
    },
    searchable: {
      control: 'boolean',
      description: 'Enable search functionality',
    },
    showSelectAll: {
      control: 'boolean',
      description: 'Show select all checkbox',
    },
    showSelectedCount: {
      control: 'boolean',
      description: 'Show selected count',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CheckboxList>;

export default meta;
type Story = StoryObj<typeof meta>;

const simpleItems: CheckboxListItem[] = [
  { key: '1', label: 'Email notifications' },
  { key: '2', label: 'Push notifications' },
  { key: '3', label: 'SMS notifications' },
  { key: '4', label: 'Marketing emails' },
  { key: '5', label: 'Weekly digest' },
];

const itemsWithDescriptions: CheckboxListItem[] = [
  { key: 'email', label: 'Email', description: 'Receive notifications via email' },
  { key: 'push', label: 'Push', description: 'Browser push notifications' },
  { key: 'sms', label: 'SMS', description: 'Text message alerts' },
  { key: 'slack', label: 'Slack', description: 'Slack channel notifications' },
];

const groupedItems: CheckboxListItem[] = [
  { key: 'users.id', label: 'ID', description: 'uuid', group: 'users' },
  { key: 'users.name', label: 'Name', description: 'string', group: 'users' },
  { key: 'users.email', label: 'Email', description: 'string', group: 'users' },
  { key: 'users.created_at', label: 'Created At', description: 'timestamp', group: 'users' },
  { key: 'orders.id', label: 'ID', description: 'uuid', group: 'orders' },
  { key: 'orders.total', label: 'Total', description: 'number', group: 'orders' },
  { key: 'orders.status', label: 'Status', description: 'string', group: 'orders' },
  { key: 'products.id', label: 'ID', description: 'uuid', group: 'products' },
  { key: 'products.name', label: 'Name', description: 'string', group: 'products' },
  { key: 'products.price', label: 'Price', description: 'number', group: 'products' },
];

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['1', '3']);
    return (
      <CheckboxList
        items={simpleItems}
        selectedKeys={selected}
        onSelectionChange={setSelected}
      />
    );
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['email']);
    return (
      <CheckboxList
        items={itemsWithDescriptions}
        selectedKeys={selected}
        onSelectionChange={setSelected}
        variant="bordered"
      />
    );
  },
};

export const Searchable: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <CheckboxList
        items={itemsWithDescriptions}
        selectedKeys={selected}
        onSelectionChange={setSelected}
        searchable
        searchPlaceholder="Search notifications..."
        variant="card"
      />
    );
  },
};

export const WithSelectAll: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['1', '2']);
    return (
      <CheckboxList
        items={simpleItems}
        selectedKeys={selected}
        onSelectionChange={setSelected}
        showSelectAll
        showSelectedCount
        variant="bordered"
      />
    );
  },
};

export const Grouped: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['users.id', 'users.name', 'orders.total']);
    const [expandedGroups, setExpandedGroups] = useState<string[]>(['users', 'orders']);
    
    return (
      <CheckboxList
        items={groupedItems}
        selectedKeys={selected}
        onSelectionChange={setSelected}
        groupLabels={{
          users: 'Users Table',
          orders: 'Orders Table',
          products: 'Products Table',
        }}
        expandedGroups={expandedGroups}
        onGroupToggle={(group, expanded) => {
          if (expanded) {
            setExpandedGroups([...expandedGroups, group]);
          } else {
            setExpandedGroups(expandedGroups.filter(g => g !== group));
          }
        }}
        searchable
        searchPlaceholder="Search fields..."
        showSelectAll
        showSelectedCount
        maxHeight="350px"
        variant="card"
      />
    );
  },
};

export const Small: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['1']);
    return (
      <CheckboxList
        items={simpleItems}
        selectedKeys={selected}
        onSelectionChange={setSelected}
        size="sm"
        variant="bordered"
      />
    );
  },
};

export const Large: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['email', 'push']);
    return (
      <CheckboxList
        items={itemsWithDescriptions}
        selectedKeys={selected}
        onSelectionChange={setSelected}
        size="lg"
        variant="card"
      />
    );
  },
};

export const WithDisabledItems: Story = {
  render: () => {
    const items: CheckboxListItem[] = [
      { key: '1', label: 'Available option' },
      { key: '2', label: 'Another available option' },
      { key: '3', label: 'Disabled option', disabled: true },
      { key: '4', label: 'Also disabled', disabled: true },
      { key: '5', label: 'Last available option' },
    ];
    const [selected, setSelected] = useState<string[]>(['1']);
    
    return (
      <CheckboxList
        items={items}
        selectedKeys={selected}
        onSelectionChange={setSelected}
        showSelectAll
        variant="bordered"
      />
    );
  },
};

export const EmptyState: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <CheckboxList
        items={[]}
        selectedKeys={selected}
        onSelectionChange={setSelected}
        emptyMessage="No items available"
        variant="card"
      />
    );
  },
};

export const FieldSelector: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Example of a field selector for a report builder, with grouped database columns.',
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState<string[]>([
      'users.name',
      'users.email',
      'orders.total',
    ]);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Select Report Fields</h3>
        <CheckboxList
          items={groupedItems}
          selectedKeys={selected}
          onSelectionChange={setSelected}
          groupLabels={{
            users: 'Users (u)',
            orders: 'Orders (o)',
            products: 'Products (p)',
          }}
          defaultExpandedGroups={['users', 'orders', 'products']}
          searchable
          searchPlaceholder="Search columns..."
          showSelectedCount
          maxHeight="400px"
          variant="card"
        />
        <div style={{ fontSize: '0.875rem', color: '#666' }}>
          Selected: {selected.join(', ') || 'None'}
        </div>
      </div>
    );
  },
};
