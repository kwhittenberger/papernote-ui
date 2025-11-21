import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Transfer, { TransferItem } from './Transfer';

const meta = {
  title: 'Forms/Transfer',
  component: Transfer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Dual-list component for moving items between available and selected lists with search and bulk operations.

## Features
- **Dual lists**: Source and target lists side-by-side
- **Search/filter**: Built-in search for both lists
- **Item descriptions**: Support for label + description
- **Disabled items**: Mark specific items as non-transferable
- **Bulk operations**: Move all or selected items at once
- **Item counts**: Display total and selected counts
- **Custom height**: Configurable list height
- **Custom titles**: Label each list appropriately

## Usage

\`\`\`tsx
import { Transfer } from 'notebook-ui';

const [source, setSource] = useState([
  { id: '1', label: 'User 1', description: 'admin@example.com' },
  { id: '2', label: 'User 2', description: 'user@example.com' },
]);
const [target, setTarget] = useState([]);

<Transfer
  sourceItems={source}
  targetItems={target}
  onChange={(newSource, newTarget) => {
    setSource(newSource);
    setTarget(newTarget);
  }}
  titles={{ source: 'Available', target: 'Selected' }}
  showSearch
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    sourceItems: {
      description: 'Array of available items',
      table: {
        type: { summary: 'TransferItem[]' },
      },
    },
    targetItems: {
      description: 'Array of selected items',
      table: {
        type: { summary: 'TransferItem[]' },
      },
    },
    onChange: {
      description: 'Callback when items are moved between lists',
      table: {
        type: { summary: '(newSource: TransferItem[], newTarget: TransferItem[]) => void' },
      },
    },
    titles: {
      description: 'Custom titles for source and target lists',
      table: {
        type: { summary: '{ source?: string; target?: string }' },
        defaultValue: { summary: '{ source: "Available", target: "Selected" }' },
      },
    },
    showSearch: {
      control: 'boolean',
      description: 'Show search input for filtering items',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showCounts: {
      control: 'boolean',
      description: 'Show item counts in list headers',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    height: {
      control: 'text',
      description: 'List container height',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '400px' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '800px', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Transfer>;

export default meta;
type Story = StoryObj<typeof meta>;

const createSimpleItems = (): TransferItem[] => [
  { id: '1', label: 'Item 1' },
  { id: '2', label: 'Item 2' },
  { id: '3', label: 'Item 3' },
  { id: '4', label: 'Item 4' },
  { id: '5', label: 'Item 5' },
];

export const Default: Story = {
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>(createSimpleItems());
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);

    return (
      <Transfer
        sourceItems={sourceItems}
        targetItems={targetItems}
        onChange={(newSource, newTarget) => {
          setSourceItems(newSource);
          setTargetItems(newTarget);
        }}
      />
    );
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>([
      { id: '1', label: 'React', description: 'JavaScript library for building UIs' },
      { id: '2', label: 'Vue', description: 'Progressive framework for web interfaces' },
      { id: '3', label: 'Angular', description: 'Platform for building web applications' },
      { id: '4', label: 'Svelte', description: 'Compiler-based UI framework' },
    ]);
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);

    return (
      <Transfer
        sourceItems={sourceItems}
        targetItems={targetItems}
        onChange={(newSource, newTarget) => {
          setSourceItems(newSource);
          setTargetItems(newTarget);
        }}
        titles={{ source: 'Available Frameworks', target: 'Selected Frameworks' }}
      />
    );
  },
};

export const WithDisabledItems: Story = {
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>([
      { id: '1', label: 'Admin', description: 'Full system access' },
      { id: '2', label: 'Editor', description: 'Can edit content' },
      { id: '3', label: 'Viewer', description: 'Read-only access', disabled: true },
      { id: '4', label: 'Guest', description: 'Limited access' },
    ]);
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);

    return (
      <Transfer
        sourceItems={sourceItems}
        targetItems={targetItems}
        onChange={(newSource, newTarget) => {
          setSourceItems(newSource);
          setTargetItems(newTarget);
        }}
        titles={{ source: 'Available Roles', target: 'Assigned Roles' }}
      />
    );
  },
};

export const NoSearch: Story = {
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>(createSimpleItems());
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);

    return (
      <Transfer
        sourceItems={sourceItems}
        targetItems={targetItems}
        onChange={(newSource, newTarget) => {
          setSourceItems(newSource);
          setTargetItems(newTarget);
        }}
        showSearch={false}
      />
    );
  },
};

export const NoCounts: Story = {
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>(createSimpleItems());
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);

    return (
      <Transfer
        sourceItems={sourceItems}
        targetItems={targetItems}
        onChange={(newSource, newTarget) => {
          setSourceItems(newSource);
          setTargetItems(newTarget);
        }}
        showCounts={false}
      />
    );
  },
};

export const CustomHeight: Story = {
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>(createSimpleItems());
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);

    return (
      <Transfer
        sourceItems={sourceItems}
        targetItems={targetItems}
        onChange={(newSource, newTarget) => {
          setSourceItems(newSource);
          setTargetItems(newTarget);
        }}
        height="600px"
      />
    );
  },
};

export const UserAssignment: Story = {
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>([
      { id: '1', label: 'John Doe', description: 'john.doe@example.com' },
      { id: '2', label: 'Jane Smith', description: 'jane.smith@example.com' },
      { id: '3', label: 'Bob Johnson', description: 'bob.johnson@example.com' },
      { id: '4', label: 'Alice Williams', description: 'alice.williams@example.com' },
      { id: '5', label: 'Charlie Brown', description: 'charlie.brown@example.com' },
    ]);
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);

    return (
      <div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Assign Team Members
          </h3>
          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
            Select users to add to the project team
          </p>
        </div>
        <Transfer
          sourceItems={sourceItems}
          targetItems={targetItems}
          onChange={(newSource, newTarget) => {
            setSourceItems(newSource);
            setTargetItems(newTarget);
          }}
          titles={{ source: 'Available Users', target: 'Project Team' }}
          height="500px"
        />
      </div>
    );
  },
};

export const PermissionSelector: Story = {
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>([
      { id: '1', label: 'Read Documents', description: 'View documents and files' },
      { id: '2', label: 'Write Documents', description: 'Create and edit documents' },
      { id: '3', label: 'Delete Documents', description: 'Remove documents and files' },
      { id: '4', label: 'Manage Users', description: 'Add, edit, and remove users' },
      { id: '5', label: 'Manage Settings', description: 'Configure system settings' },
      { id: '6', label: 'View Reports', description: 'Access analytics and reports' },
      { id: '7', label: 'Export Data', description: 'Download and export data' },
    ]);
    const [targetItems, setTargetItems] = useState<TransferItem[]>([
      { id: '8', label: 'System Admin', description: 'Full system access', disabled: true },
    ]);

    return (
      <div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Role Permissions
          </h3>
          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
            Configure permissions for Editor role
          </p>
        </div>
        <Transfer
          sourceItems={sourceItems}
          targetItems={targetItems}
          onChange={(newSource, newTarget) => {
            setSourceItems(newSource);
            setTargetItems(newTarget);
          }}
          titles={{ source: 'Available Permissions', target: 'Granted Permissions' }}
        />
      </div>
    );
  },
};

export const CategorySelector: Story = {
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>([
      { id: '1', label: 'Technology', description: 'Tech news and articles' },
      { id: '2', label: 'Business', description: 'Business and finance' },
      { id: '3', label: 'Science', description: 'Scientific discoveries' },
      { id: '4', label: 'Sports', description: 'Sports news and scores' },
      { id: '5', label: 'Entertainment', description: 'Movies, TV, and music' },
      { id: '6', label: 'Health', description: 'Health and wellness' },
      { id: '7', label: 'Travel', description: 'Travel guides and tips' },
      { id: '8', label: 'Food', description: 'Recipes and restaurants' },
    ]);
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);

    return (
      <div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Newsletter Preferences
          </h3>
          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
            Choose topics you want to receive updates about
          </p>
        </div>
        <Transfer
          sourceItems={sourceItems}
          targetItems={targetItems}
          onChange={(newSource, newTarget) => {
            setSourceItems(newSource);
            setTargetItems(newTarget);
          }}
          titles={{ source: 'All Topics', target: 'My Topics' }}
          showSearch
        />
        {targetItems.length > 0 && (
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '0.375rem' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 500, color: '#1e40af' }}>
              You will receive updates about: {targetItems.map(item => item.label).join(', ')}
            </div>
          </div>
        )}
      </div>
    );
  },
};

export const SkillSelector: Story = {
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>([
      { id: '1', label: 'JavaScript', description: 'Core programming language' },
      { id: '2', label: 'TypeScript', description: 'Typed JavaScript' },
      { id: '3', label: 'React', description: 'UI library' },
      { id: '4', label: 'Node.js', description: 'Backend runtime' },
      { id: '5', label: 'Python', description: 'General-purpose language' },
      { id: '6', label: 'SQL', description: 'Database queries' },
      { id: '7', label: 'GraphQL', description: 'Query language for APIs' },
      { id: '8', label: 'Docker', description: 'Containerization' },
      { id: '9', label: 'Kubernetes', description: 'Container orchestration' },
      { id: '10', label: 'AWS', description: 'Cloud platform' },
    ]);
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);

    return (
      <div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Required Skills
          </h3>
          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
            Select the skills required for this position
          </p>
        </div>
        <Transfer
          sourceItems={sourceItems}
          targetItems={targetItems}
          onChange={(newSource, newTarget) => {
            setSourceItems(newSource);
            setTargetItems(newTarget);
          }}
          titles={{ source: 'Available Skills', target: 'Required Skills' }}
        />
      </div>
    );
  },
};

export const EmailListManager: Story = {
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>([
      { id: '1', label: 'marketing@company.com', description: 'Marketing team' },
      { id: '2', label: 'sales@company.com', description: 'Sales team' },
      { id: '3', label: 'support@company.com', description: 'Customer support' },
      { id: '4', label: 'dev@company.com', description: 'Development team' },
      { id: '5', label: 'hr@company.com', description: 'Human resources' },
    ]);
    const [targetItems, setTargetItems] = useState<TransferItem[]>([
      { id: '6', label: 'admin@company.com', description: 'Administrators', disabled: true },
    ]);

    return (
      <div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Email Distribution List
          </h3>
          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
            Add or remove email addresses from the announcement list
          </p>
        </div>
        <Transfer
          sourceItems={sourceItems}
          targetItems={targetItems}
          onChange={(newSource, newTarget) => {
            setSourceItems(newSource);
            setTargetItems(newTarget);
          }}
          titles={{ source: 'Available Recipients', target: 'Announcement Recipients' }}
        />
        <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#64748b' }}>
          Note: admin@company.com is always included and cannot be removed
        </div>
      </div>
    );
  },
};
