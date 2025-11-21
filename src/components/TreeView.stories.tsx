import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import TreeView, { TreeNode } from './TreeView';
import { Folder, File, Image, FileText, Music, Video, Code, Archive } from 'lucide-react';

const meta = {
  title: 'Navigation/TreeView',
  component: TreeView,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Hierarchical tree navigation for displaying nested data structures with expand/collapse functionality.

## Features
- **Nested structure**: Support for unlimited nesting levels
- **Expand/collapse**: Toggle visibility of child nodes
- **Icons**: Custom icons for each tree node
- **Selection**: Highlight selected node
- **Disabled nodes**: Mark specific nodes as non-interactive
- **Connecting lines**: Optional visual guides showing hierarchy
- **Default expansion**: Pre-expand specific branches
- **Custom expand icons**: Customize expand/collapse indicators

## Usage

\`\`\`tsx
import { TreeView } from 'notebook-ui';
import { Folder, File } from 'lucide-react';

const data = [
  {
    id: '1',
    label: 'Documents',
    icon: <Folder />,
    children: [
      { id: '1-1', label: 'file1.txt', icon: <File /> },
      { id: '1-2', label: 'file2.txt', icon: <File /> },
    ],
  },
];

<TreeView
  data={data}
  selectedId={selectedId}
  onSelect={setSelectedId}
  showLines
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'Array of tree nodes with optional children',
      table: {
        type: { summary: 'TreeNode[]' },
      },
    },
    selectedId: {
      control: 'text',
      description: 'ID of the currently selected node',
      table: {
        type: { summary: 'string' },
      },
    },
    onSelect: {
      description: 'Callback when a node is selected',
      table: {
        type: { summary: '(nodeId: string) => void' },
      },
    },
    defaultExpanded: {
      description: 'Array of node IDs that should be expanded by default',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: '[]' },
      },
    },
    showLines: {
      control: 'boolean',
      description: 'Show connecting lines between nodes',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    expandIcon: {
      description: 'Custom icon for expandable nodes',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    collapseIcon: {
      description: 'Custom icon for collapsible nodes',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '400px', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicTree: TreeNode[] = [
  {
    id: '1',
    label: 'Parent 1',
    children: [
      { id: '1-1', label: 'Child 1-1' },
      { id: '1-2', label: 'Child 1-2' },
    ],
  },
  {
    id: '2',
    label: 'Parent 2',
    children: [
      { id: '2-1', label: 'Child 2-1' },
      { id: '2-2', label: 'Child 2-2' },
    ],
  },
];

export const Default: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState<string>();
    return <TreeView data={basicTree} selectedId={selectedId} onSelect={setSelectedId} />;
  },
};

export const WithIcons: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState<string>();

    const tree: TreeNode[] = [
      {
        id: '1',
        label: 'Documents',
        icon: <Folder className="h-4 w-4" />,
        children: [
          { id: '1-1', label: 'report.pdf', icon: <FileText className="h-4 w-4" /> },
          { id: '1-2', label: 'presentation.pptx', icon: <FileText className="h-4 w-4" /> },
        ],
      },
      {
        id: '2',
        label: 'Media',
        icon: <Folder className="h-4 w-4" />,
        children: [
          { id: '2-1', label: 'photo.jpg', icon: <Image className="h-4 w-4" /> },
          { id: '2-2', label: 'song.mp3', icon: <Music className="h-4 w-4" /> },
        ],
      },
    ];

    return <TreeView data={tree} selectedId={selectedId} onSelect={setSelectedId} />;
  },
};

export const WithLines: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState<string>();
    return (
      <TreeView
        data={basicTree}
        selectedId={selectedId}
        onSelect={setSelectedId}
        showLines
      />
    );
  },
};

export const DefaultExpanded: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState<string>();
    return (
      <TreeView
        data={basicTree}
        selectedId={selectedId}
        onSelect={setSelectedId}
        defaultExpanded={['1', '2']}
      />
    );
  },
};

export const WithDisabledNodes: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState<string>();

    const tree: TreeNode[] = [
      {
        id: '1',
        label: 'Available',
        children: [
          { id: '1-1', label: 'Child 1-1' },
          { id: '1-2', label: 'Child 1-2', disabled: true },
        ],
      },
      {
        id: '2',
        label: 'Disabled Parent',
        disabled: true,
        children: [
          { id: '2-1', label: 'Child 2-1' },
        ],
      },
    ];

    return <TreeView data={tree} selectedId={selectedId} onSelect={setSelectedId} />;
  },
};

export const FileExplorer: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState<string>();

    const fileTree: TreeNode[] = [
      {
        id: 'root',
        label: 'Project',
        icon: <Folder className="h-4 w-4" />,
        children: [
          {
            id: 'src',
            label: 'src',
            icon: <Folder className="h-4 w-4" />,
            children: [
              {
                id: 'components',
                label: 'components',
                icon: <Folder className="h-4 w-4" />,
                children: [
                  { id: 'button', label: 'Button.tsx', icon: <Code className="h-4 w-4" /> },
                  { id: 'input', label: 'Input.tsx', icon: <Code className="h-4 w-4" /> },
                ],
              },
              {
                id: 'utils',
                label: 'utils',
                icon: <Folder className="h-4 w-4" />,
                children: [
                  { id: 'helpers', label: 'helpers.ts', icon: <Code className="h-4 w-4" /> },
                ],
              },
            ],
          },
          {
            id: 'public',
            label: 'public',
            icon: <Folder className="h-4 w-4" />,
            children: [
              { id: 'logo', label: 'logo.png', icon: <Image className="h-4 w-4" /> },
              { id: 'favicon', label: 'favicon.ico', icon: <Image className="h-4 w-4" /> },
            ],
          },
          { id: 'package', label: 'package.json', icon: <FileText className="h-4 w-4" /> },
          { id: 'readme', label: 'README.md', icon: <FileText className="h-4 w-4" /> },
        ],
      },
    ];

    return (
      <div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>
          File Explorer
        </h3>
        <TreeView
          data={fileTree}
          selectedId={selectedId}
          onSelect={setSelectedId}
          defaultExpanded={['root', 'src']}
          showLines
        />
        {selectedId && (
          <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#f5f5f4', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
            Selected: {selectedId}
          </div>
        )}
      </div>
    );
  },
};

export const OrganizationChart: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState<string>();

    const orgTree: TreeNode[] = [
      {
        id: 'ceo',
        label: 'CEO - John Smith',
        children: [
          {
            id: 'cto',
            label: 'CTO - Jane Doe',
            children: [
              {
                id: 'eng-lead',
                label: 'Engineering Lead - Bob Wilson',
                children: [
                  { id: 'dev-1', label: 'Senior Developer - Alice Brown' },
                  { id: 'dev-2', label: 'Developer - Charlie Davis' },
                ],
              },
              { id: 'qa-lead', label: 'QA Lead - David Johnson' },
            ],
          },
          {
            id: 'coo',
            label: 'COO - Sarah Williams',
            children: [
              { id: 'sales-lead', label: 'Sales Lead - Mike Taylor' },
              { id: 'support-lead', label: 'Support Lead - Emily White' },
            ],
          },
        ],
      },
    ];

    return (
      <div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>
          Organization Structure
        </h3>
        <TreeView
          data={orgTree}
          selectedId={selectedId}
          onSelect={setSelectedId}
          defaultExpanded={['ceo', 'cto', 'coo']}
        />
      </div>
    );
  },
};

export const CategoryNavigation: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState<string>('electronics');

    const categories: TreeNode[] = [
      {
        id: 'electronics',
        label: 'Electronics',
        children: [
          {
            id: 'computers',
            label: 'Computers',
            children: [
              { id: 'laptops', label: 'Laptops' },
              { id: 'desktops', label: 'Desktops' },
              { id: 'tablets', label: 'Tablets' },
            ],
          },
          {
            id: 'phones',
            label: 'Phones & Accessories',
            children: [
              { id: 'smartphones', label: 'Smartphones' },
              { id: 'cases', label: 'Cases & Covers' },
            ],
          },
        ],
      },
      {
        id: 'clothing',
        label: 'Clothing',
        children: [
          { id: 'mens', label: "Men's Clothing" },
          { id: 'womens', label: "Women's Clothing" },
          { id: 'kids', label: "Kids' Clothing" },
        ],
      },
      {
        id: 'home',
        label: 'Home & Garden',
        children: [
          { id: 'furniture', label: 'Furniture' },
          { id: 'decor', label: 'Home Decor' },
          { id: 'garden', label: 'Garden Tools' },
        ],
      },
    ];

    return (
      <div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>
          Product Categories
        </h3>
        <TreeView
          data={categories}
          selectedId={selectedId}
          onSelect={setSelectedId}
          defaultExpanded={['electronics', 'computers']}
        />
      </div>
    );
  },
};

export const MediaLibrary: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState<string>();

    const mediaTree: TreeNode[] = [
      {
        id: 'images',
        label: 'Images',
        icon: <Folder className="h-4 w-4" />,
        children: [
          {
            id: 'photos',
            label: 'Photos',
            icon: <Folder className="h-4 w-4" />,
            children: [
              { id: 'vacation', label: 'vacation-2024.jpg', icon: <Image className="h-4 w-4" /> },
              { id: 'family', label: 'family-portrait.jpg', icon: <Image className="h-4 w-4" /> },
            ],
          },
          {
            id: 'graphics',
            label: 'Graphics',
            icon: <Folder className="h-4 w-4" />,
            children: [
              { id: 'logo', label: 'company-logo.svg', icon: <Image className="h-4 w-4" /> },
            ],
          },
        ],
      },
      {
        id: 'videos',
        label: 'Videos',
        icon: <Folder className="h-4 w-4" />,
        children: [
          { id: 'tutorial', label: 'tutorial-1.mp4', icon: <Video className="h-4 w-4" /> },
          { id: 'promo', label: 'promo-video.mp4', icon: <Video className="h-4 w-4" /> },
        ],
      },
      {
        id: 'audio',
        label: 'Audio',
        icon: <Folder className="h-4 w-4" />,
        children: [
          { id: 'podcast', label: 'podcast-ep1.mp3', icon: <Music className="h-4 w-4" /> },
          { id: 'music', label: 'background-music.mp3', icon: <Music className="h-4 w-4" /> },
        ],
      },
      {
        id: 'archives',
        label: 'Archives',
        icon: <Folder className="h-4 w-4" />,
        children: [
          { id: 'backup', label: 'backup-2024.zip', icon: <Archive className="h-4 w-4" /> },
        ],
      },
    ];

    return (
      <div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>
          Media Library
        </h3>
        <TreeView
          data={mediaTree}
          selectedId={selectedId}
          onSelect={setSelectedId}
          defaultExpanded={['images', 'photos']}
          showLines
        />
      </div>
    );
  },
};

export const DocumentStructure: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState<string>();

    const docTree: TreeNode[] = [
      {
        id: 'toc',
        label: 'Table of Contents',
        children: [
          {
            id: 'ch1',
            label: '1. Introduction',
            children: [
              { id: 'ch1-1', label: '1.1 Background' },
              { id: 'ch1-2', label: '1.2 Objectives' },
            ],
          },
          {
            id: 'ch2',
            label: '2. Methodology',
            children: [
              { id: 'ch2-1', label: '2.1 Research Design' },
              { id: 'ch2-2', label: '2.2 Data Collection' },
              { id: 'ch2-3', label: '2.3 Analysis' },
            ],
          },
          {
            id: 'ch3',
            label: '3. Results',
            children: [
              { id: 'ch3-1', label: '3.1 Findings' },
              { id: 'ch3-2', label: '3.2 Discussion' },
            ],
          },
          { id: 'ch4', label: '4. Conclusion' },
        ],
      },
    ];

    return (
      <div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>
          Document Outline
        </h3>
        <TreeView
          data={docTree}
          selectedId={selectedId}
          onSelect={setSelectedId}
          defaultExpanded={['toc', 'ch1', 'ch2']}
        />
      </div>
    );
  },
};
