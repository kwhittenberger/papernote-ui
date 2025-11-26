import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Chip, { ChipGroup } from './Chip';
import { Star, Tag, User, X, Check } from 'lucide-react';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Compact element for displaying values with optional remove functionality. Commonly used for tags, selected items, and filters.

## Features
- **Variants**: primary, secondary, success, warning, error, info
- **Sizes**: sm, md, lg
- **Removable**: Optional close button with onClose callback
- **Clickable**: Optional onClick for interactive chips
- **Selected State**: Visual highlight for selected chips
- **Icons**: Optional leading icon
- **Max Width**: Truncate long text with ellipsis

## ChipGroup
Container component for multiple chips with layout and selection support.

## Usage

\`\`\`tsx
import { Chip, ChipGroup } from 'notebook-ui';

// Basic chip
<Chip>Tag Name</Chip>

// Removable chip
<Chip onClose={() => removeTag(tag)}>{tag.name}</Chip>

// Chip group with selection
<ChipGroup
  selectionMode="multiple"
  selectedKeys={selected}
  onSelectionChange={setSelected}
>
  <Chip chipKey="a">Option A</Chip>
  <Chip chipKey="b">Option B</Chip>
</ChipGroup>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Color variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the chip',
    },
    selected: {
      control: 'boolean',
      description: 'Selected state',
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Chip',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="success">Success</Chip>
      <Chip variant="warning">Warning</Chip>
      <Chip variant="error">Error</Chip>
      <Chip variant="info">Info</Chip>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
      <Chip size="lg">Large</Chip>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Chip icon={<Star className="h-3 w-3" />} variant="warning">Featured</Chip>
      <Chip icon={<Tag className="h-3 w-3" />} variant="info">Tagged</Chip>
      <Chip icon={<User className="h-3 w-3" />} variant="primary">Admin</Chip>
    </div>
  ),
};

export const Removable: Story = {
  render: () => {
    const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind', 'Storybook']);
    
    return (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {tags.map(tag => (
          <Chip
            key={tag}
            onClose={() => setTags(tags.filter(t => t !== tag))}
          >
            {tag}
          </Chip>
        ))}
        {tags.length === 0 && (
          <span style={{ color: '#666', fontSize: '0.875rem' }}>All tags removed</span>
        )}
      </div>
    );
  },
};

export const Clickable: Story = {
  render: () => {
    const [clicked, setClicked] = useState<string | null>(null);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Chip onClick={() => setClicked('Option A')}>Option A</Chip>
          <Chip onClick={() => setClicked('Option B')}>Option B</Chip>
          <Chip onClick={() => setClicked('Option C')}>Option C</Chip>
        </div>
        <div style={{ fontSize: '0.875rem', color: '#666' }}>
          Last clicked: {clicked || 'None'}
        </div>
      </div>
    );
  },
};

export const Selected: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Chip selected variant="primary">Selected Primary</Chip>
      <Chip selected variant="success">Selected Success</Chip>
      <Chip selected variant="info">Selected Info</Chip>
      <Chip variant="primary">Not Selected</Chip>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Chip disabled>Disabled</Chip>
      <Chip disabled onClose={() => {}}>Disabled Removable</Chip>
      <Chip disabled onClick={() => {}}>Disabled Clickable</Chip>
    </div>
  ),
};

export const WithMaxWidth: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', maxWidth: '300px' }}>
      <Chip maxWidth={100}>Short</Chip>
      <Chip maxWidth={100}>This is a very long chip label that will truncate</Chip>
      <Chip maxWidth={150} onClose={() => {}}>Another long label here</Chip>
    </div>
  ),
};

// ChipGroup Stories
export const BasicGroup: Story = {
  render: () => (
    <ChipGroup gap="sm">
      <Chip>Tag 1</Chip>
      <Chip>Tag 2</Chip>
      <Chip>Tag 3</Chip>
      <Chip>Tag 4</Chip>
    </ChipGroup>
  ),
};

export const WrappingGroup: Story = {
  render: () => (
    <div style={{ maxWidth: '300px' }}>
      <ChipGroup wrap gap="xs">
        <Chip size="sm">JavaScript</Chip>
        <Chip size="sm">TypeScript</Chip>
        <Chip size="sm">React</Chip>
        <Chip size="sm">Vue</Chip>
        <Chip size="sm">Angular</Chip>
        <Chip size="sm">Svelte</Chip>
        <Chip size="sm">Node.js</Chip>
        <Chip size="sm">Python</Chip>
      </ChipGroup>
    </div>
  ),
};

export const VerticalGroup: Story = {
  render: () => (
    <ChipGroup direction="vertical" gap="sm">
      <Chip icon={<Check className="h-3 w-3" />} variant="success">Completed</Chip>
      <Chip icon={<Star className="h-3 w-3" />} variant="warning">In Progress</Chip>
      <Chip icon={<X className="h-3 w-3" />} variant="error">Cancelled</Chip>
    </ChipGroup>
  ),
};

export const SingleSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['all']);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <ChipGroup
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
          gap="sm"
        >
          <Chip chipKey="all">All</Chip>
          <Chip chipKey="active">Active</Chip>
          <Chip chipKey="pending">Pending</Chip>
          <Chip chipKey="archived">Archived</Chip>
        </ChipGroup>
        <div style={{ fontSize: '0.875rem', color: '#666' }}>
          Selected: {selected.join(', ') || 'None'}
        </div>
      </div>
    );
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['react', 'typescript']);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <ChipGroup
          selectionMode="multiple"
          selectedKeys={selected}
          onSelectionChange={setSelected}
          wrap
          gap="sm"
        >
          <Chip chipKey="react" variant="info">React</Chip>
          <Chip chipKey="vue" variant="info">Vue</Chip>
          <Chip chipKey="angular" variant="info">Angular</Chip>
          <Chip chipKey="typescript" variant="info">TypeScript</Chip>
          <Chip chipKey="javascript" variant="info">JavaScript</Chip>
        </ChipGroup>
        <div style={{ fontSize: '0.875rem', color: '#666' }}>
          Selected: {selected.join(', ') || 'None'}
        </div>
      </div>
    );
  },
};

export const RemovableGroup: Story = {
  render: () => {
    const [tags, setTags] = useState([
      { key: '1', label: 'Design' },
      { key: '2', label: 'Development' },
      { key: '3', label: 'Marketing' },
      { key: '4', label: 'Sales' },
    ]);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <ChipGroup wrap gap="xs">
          {tags.map(tag => (
            <Chip
              key={tag.key}
              onClose={() => setTags(tags.filter(t => t.key !== tag.key))}
              size="sm"
            >
              {tag.label}
            </Chip>
          ))}
        </ChipGroup>
        {tags.length === 0 && (
          <span style={{ fontSize: '0.875rem', color: '#666' }}>No tags remaining</span>
        )}
      </div>
    );
  },
};

export const FilterChips: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Example of using chips as filter toggles.',
      },
    },
  },
  render: () => {
    const [filters, setFilters] = useState<string[]>(['in-stock']);
    
    const categories = [
      { key: 'in-stock', label: 'In Stock', variant: 'success' as const },
      { key: 'on-sale', label: 'On Sale', variant: 'error' as const },
      { key: 'new', label: 'New Arrival', variant: 'info' as const },
      { key: 'featured', label: 'Featured', variant: 'warning' as const },
    ];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>Filter Products:</div>
        <ChipGroup
          selectionMode="multiple"
          selectedKeys={filters}
          onSelectionChange={setFilters}
          gap="sm"
        >
          {categories.map(cat => (
            <Chip key={cat.key} chipKey={cat.key} variant={cat.variant}>
              {cat.label}
            </Chip>
          ))}
        </ChipGroup>
        <div style={{ fontSize: '0.75rem', color: '#666' }}>
          Active filters: {filters.length > 0 ? filters.join(', ') : 'None'}
        </div>
      </div>
    );
  },
};

export const SelectedFields: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Example from a report builder showing selected fields as removable chips.',
      },
    },
  },
  render: () => {
    const [fields, setFields] = useState([
      { key: 'users.name', label: 'Name', table: 'users' },
      { key: 'users.email', label: 'Email', table: 'users' },
      { key: 'orders.total', label: 'Total', table: 'orders' },
      { key: 'orders.date', label: 'Date', table: 'orders' },
    ]);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>Selected Fields:</div>
        <ChipGroup wrap gap="xs">
          {fields.map(field => (
            <Chip
              key={field.key}
              size="sm"
              variant="info"
              onClose={() => setFields(fields.filter(f => f.key !== field.key))}
            >
              {field.table}.{field.label}
            </Chip>
          ))}
        </ChipGroup>
        {fields.length === 0 && (
          <span style={{ fontSize: '0.875rem', color: '#666' }}>No fields selected</span>
        )}
      </div>
    );
  },
};
