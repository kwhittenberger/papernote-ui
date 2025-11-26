import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import SearchableList from './SearchableList';
import { SearchableListItem } from './SearchableList';
import { User, Package, Mail } from 'lucide-react';

const meta = {
  title: 'Forms/SearchableList',
  component: SearchableList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A list component with integrated search/filter functionality, keyboard navigation, and customizable item rendering.

## Features
- **Search/Filter**: Built-in search input with debounce
- **Keyboard Navigation**: Arrow keys and Enter for selection
- **Custom Rendering**: Full control over item display
- **Loading State**: Show spinner during async operations
- **Empty States**: Customizable empty and no-results messages
- **Result Count**: Optional filtered/total count display

## Usage

\`\`\`tsx
import { SearchableList } from 'notebook-ui';

<SearchableList
  items={users.map(u => ({ key: u.id, data: u }))}
  renderItem={(item) => <div>{item.data.name}</div>}
  onSelect={(item) => setSelectedUser(item.data)}
  searchPlaceholder="Search users..."
  maxHeight="300px"
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
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    showResultCount: {
      control: 'boolean',
      description: 'Show result count',
    },
    enableKeyboardNavigation: {
      control: 'boolean',
      description: 'Enable arrow key navigation',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchableList>;

export default meta;
type Story = StoryObj<typeof meta>;

interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface ProductData {
  id: string;
  name: string;
  price: number;
  category: string;
}

const users: SearchableListItem<UserData>[] = [
  { key: '1', data: { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' } },
  { key: '2', data: { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' } },
  { key: '3', data: { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer' } },
  { key: '4', data: { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'Admin' } },
  { key: '5', data: { id: '5', name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Editor' } },
  { key: '6', data: { id: '6', name: 'Diana Martinez', email: 'diana@example.com', role: 'Viewer' } },
];

const products: SearchableListItem<ProductData>[] = [
  { key: 'p1', data: { id: 'p1', name: 'Laptop Pro', price: 1299, category: 'Electronics' } },
  { key: 'p2', data: { id: 'p2', name: 'Wireless Mouse', price: 49, category: 'Electronics' } },
  { key: 'p3', data: { id: 'p3', name: 'Office Chair', price: 299, category: 'Furniture' } },
  { key: 'p4', data: { id: 'p4', name: 'Standing Desk', price: 599, category: 'Furniture' } },
  { key: 'p5', data: { id: 'p5', name: 'Monitor 27"', price: 399, category: 'Electronics' } },
  { key: 'p6', data: { id: 'p6', name: 'Keyboard', price: 129, category: 'Electronics' } },
];

export const Default: Story = {
  render: () => {
    const [selectedKey, setSelectedKey] = useState<string | undefined>();
    
    return (
      <SearchableList
        items={users}
        renderItem={(item) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <User className="h-4 w-4 text-ink-400" />
            <div>
              <div style={{ fontWeight: 500 }}>{item.data.name}</div>
              <div style={{ fontSize: '0.75rem', color: '#666' }}>{item.data.email}</div>
            </div>
          </div>
        )}
        filterFn={(item, term) => 
          item.data.name.toLowerCase().includes(term.toLowerCase()) ||
          item.data.email.toLowerCase().includes(term.toLowerCase())
        }
        selectedKey={selectedKey}
        onSelect={(item) => setSelectedKey(item.key)}
        searchPlaceholder="Search users..."
        variant="bordered"
      />
    );
  },
};

export const WithResultCount: Story = {
  render: () => {
    const [selectedKey, setSelectedKey] = useState<string | undefined>();
    
    return (
      <SearchableList
        items={users}
        renderItem={(item) => (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{item.data.name}</span>
            <span style={{ fontSize: '0.75rem', color: '#666', backgroundColor: '#f5f5f4', padding: '0.125rem 0.5rem', borderRadius: '9999px' }}>
              {item.data.role}
            </span>
          </div>
        )}
        filterFn={(item, term) => 
          item.data.name.toLowerCase().includes(term.toLowerCase()) ||
          item.data.role.toLowerCase().includes(term.toLowerCase())
        }
        selectedKey={selectedKey}
        onSelect={(item) => setSelectedKey(item.key)}
        searchPlaceholder="Search by name or role..."
        showResultCount
        variant="card"
      />
    );
  },
};

export const ProductList: Story = {
  render: () => {
    const [selectedKey, setSelectedKey] = useState<string | undefined>();
    
    return (
      <SearchableList
        items={products}
        renderItem={(item, _index, isSelected) => (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            color: isSelected ? '#1e40af' : undefined,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Package className="h-4 w-4" />
              <div>
                <div style={{ fontWeight: 500 }}>{item.data.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#666' }}>{item.data.category}</div>
              </div>
            </div>
            <div style={{ fontWeight: 600 }}>${item.data.price}</div>
          </div>
        )}
        filterFn={(item, term) => 
          item.data.name.toLowerCase().includes(term.toLowerCase()) ||
          item.data.category.toLowerCase().includes(term.toLowerCase())
        }
        selectedKey={selectedKey}
        onSelect={(item) => setSelectedKey(item.key)}
        searchPlaceholder="Search products..."
        showResultCount
        formatResultCount={(count, total) => `Showing ${count} of ${total} products`}
        maxHeight="300px"
        variant="card"
      />
    );
  },
};

export const Loading: Story = {
  render: () => {
    return (
      <SearchableList
        items={[]}
        renderItem={() => null}
        loading
        loadingMessage="Fetching users..."
        searchPlaceholder="Search users..."
        variant="bordered"
      />
    );
  },
};

export const EmptyState: Story = {
  render: () => {
    return (
      <SearchableList
        items={[]}
        renderItem={() => null}
        emptyMessage="No users found. Try adding some users first."
        searchPlaceholder="Search users..."
        variant="card"
      />
    );
  },
};

export const NoResults: Story = {
  render: () => {
    const [selectedKey, setSelectedKey] = useState<string | undefined>();
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <p style={{ fontSize: '0.875rem', color: '#666' }}>
          Try searching for "xyz" to see the no results state
        </p>
        <SearchableList
          items={users}
          renderItem={(item) => <span>{item.data.name}</span>}
          filterFn={(item, term) => 
            item.data.name.toLowerCase().includes(term.toLowerCase())
          }
          selectedKey={selectedKey}
          onSelect={(item) => setSelectedKey(item.key)}
          searchPlaceholder="Search users..."
          noResultsMessage="No users match your search. Try a different term."
          variant="bordered"
        />
      </div>
    );
  },
};

export const Small: Story = {
  render: () => {
    const [selectedKey, setSelectedKey] = useState<string | undefined>();
    
    return (
      <SearchableList
        items={users}
        renderItem={(item) => item.data.name}
        filterFn={(item, term) => 
          item.data.name.toLowerCase().includes(term.toLowerCase())
        }
        selectedKey={selectedKey}
        onSelect={(item) => setSelectedKey(item.key)}
        searchPlaceholder="Search..."
        size="sm"
        variant="bordered"
      />
    );
  },
};

export const Large: Story = {
  render: () => {
    const [selectedKey, setSelectedKey] = useState<string | undefined>();
    
    return (
      <SearchableList
        items={users}
        renderItem={(item) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              backgroundColor: '#e5e5e5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <User className="h-5 w-5 text-ink-500" />
            </div>
            <div>
              <div style={{ fontWeight: 500, fontSize: '1rem' }}>{item.data.name}</div>
              <div style={{ fontSize: '0.875rem', color: '#666' }}>{item.data.email}</div>
            </div>
          </div>
        )}
        filterFn={(item, term) => 
          item.data.name.toLowerCase().includes(term.toLowerCase())
        }
        selectedKey={selectedKey}
        onSelect={(item) => setSelectedKey(item.key)}
        searchPlaceholder="Search users..."
        size="lg"
        variant="card"
      />
    );
  },
};

export const KeyboardNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use arrow keys to navigate and Enter to select. Focus the search input and try it out!',
      },
    },
  },
  render: () => {
    const [selectedKey, setSelectedKey] = useState<string | undefined>();
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <p style={{ fontSize: '0.875rem', color: '#666' }}>
          Focus the search input, then use ↑↓ arrows to navigate and Enter to select
        </p>
        <SearchableList
          items={users}
          renderItem={(item, _index, isSelected, isHighlighted) => (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              fontWeight: isHighlighted ? 500 : 400,
            }}>
              <Mail className="h-4 w-4" />
              <div>
                <div>{item.data.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#666' }}>{item.data.email}</div>
              </div>
              {isSelected && (
                <span style={{ marginLeft: 'auto', color: '#22c55e' }}>✓</span>
              )}
            </div>
          )}
          filterFn={(item, term) => 
            item.data.name.toLowerCase().includes(term.toLowerCase()) ||
            item.data.email.toLowerCase().includes(term.toLowerCase())
          }
          selectedKey={selectedKey}
          onSelect={(item) => setSelectedKey(item.key)}
          searchPlaceholder="Search users..."
          enableKeyboardNavigation
          autoFocus
          variant="card"
        />
      </div>
    );
  },
};

export const TableSelector: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Example of a table selector for a report builder.',
      },
    },
  },
  render: () => {
    interface TableData {
      name: string;
      displayName: string;
      rowCount: number;
    }
    
    const tables: SearchableListItem<TableData>[] = [
      { key: 'users', data: { name: 'users', displayName: 'Users', rowCount: 1250 } },
      { key: 'orders', data: { name: 'orders', displayName: 'Orders', rowCount: 8420 } },
      { key: 'products', data: { name: 'products', displayName: 'Products', rowCount: 342 } },
      { key: 'categories', data: { name: 'categories', displayName: 'Categories', rowCount: 24 } },
      { key: 'reviews', data: { name: 'reviews', displayName: 'Reviews', rowCount: 15680 } },
      { key: 'inventory', data: { name: 'inventory', displayName: 'Inventory', rowCount: 890 } },
    ];
    
    const [selectedKey, setSelectedKey] = useState<string | undefined>('users');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Select Base Table</h3>
        <SearchableList
          items={tables}
          renderItem={(item, _index, isSelected) => (
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
            }}>
              <div>
                <div style={{ fontWeight: isSelected ? 600 : 500 }}>{item.data.displayName}</div>
                <div style={{ fontSize: '0.75rem', color: '#666' }}>{item.data.name}</div>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#666' }}>
                {item.data.rowCount.toLocaleString()} rows
              </div>
            </div>
          )}
          filterFn={(item, term) => 
            item.data.name.toLowerCase().includes(term.toLowerCase()) ||
            item.data.displayName.toLowerCase().includes(term.toLowerCase())
          }
          selectedKey={selectedKey}
          onSelect={(item) => setSelectedKey(item.key)}
          searchPlaceholder="Search tables..."
          showResultCount
          variant="card"
        />
        <div style={{ fontSize: '0.875rem', color: '#666' }}>
          Selected: {selectedKey || 'None'}
        </div>
      </div>
    );
  },
};
