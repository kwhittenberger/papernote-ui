import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Pagination from './Pagination';

const meta = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Pagination component for navigating through paginated data with page numbers and jump functionality.

## Features
- **Page numbers**: Configurable number of visible page buttons
- **Smart ellipsis**: Automatic ... insertion for large page counts
- **Previous/Next**: Navigation buttons with disabled states
- **Page jump**: Optional input to jump to specific page
- **Responsive**: Hides text labels on small screens
- **ARIA support**: Proper labeling for accessibility

## Usage

\`\`\`tsx
import { Pagination } from 'notebook-ui';

<Pagination
  currentPage={currentPage}
  totalPages={50}
  onPageChange={setCurrentPage}
  showPageNumbers
  maxPageNumbers={5}
  showPageJump
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: 'number',
      description: 'Current active page (1-indexed)',
      table: {
        type: { summary: 'number' },
      },
    },
    totalPages: {
      control: 'number',
      description: 'Total number of pages',
      table: {
        type: { summary: 'number' },
      },
    },
    onPageChange: {
      description: 'Callback fired when page changes',
      table: {
        type: { summary: '(page: number) => void' },
      },
    },
    showPageNumbers: {
      control: 'boolean',
      description: 'Show individual page number buttons',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    maxPageNumbers: {
      control: 'number',
      description: 'Maximum number of page buttons to display',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    showPageJump: {
      control: 'boolean',
      description: 'Show "Go to page" input field',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />
    );
  },
};

export const ManyPages: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <Pagination
        currentPage={currentPage}
        totalPages={100}
        onPageChange={setCurrentPage}
      />
    );
  },
};

export const MiddlePage: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);
    return (
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />
    );
  },
};

export const LastPage: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(10);
    return (
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />
    );
  },
};

export const FewPages: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <Pagination
        currentPage={currentPage}
        totalPages={3}
        onPageChange={setCurrentPage}
      />
    );
  },
};

export const SinglePage: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <Pagination
        currentPage={currentPage}
        totalPages={1}
        onPageChange={setCurrentPage}
      />
    );
  },
};

export const SimpleVariant: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);
    return (
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
        variant="simple"
      />
    );
  },
};

export const WithPageInfo: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    const totalItems = 187;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
          Showing {startItem}-{endItem} of {totalItems} results
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};

export const WithItemsPerPage: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const totalItems = 187;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <label style={{ fontSize: '0.875rem', color: '#64748b' }}>Items per page:</label>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            style={{
              padding: '0.25rem 0.5rem',
              border: '1px solid #e5e5e5',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};

export const InTable: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalItems = 47;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
      <div style={{ width: '600px', border: '1px solid #e5e5e5', borderRadius: '0.5rem', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f4', borderBottom: '1px solid #e5e5e5' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: 600 }}>Name</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: 600 }}>Email</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: 600 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: itemsPerPage }).map((_, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>User {(currentPage - 1) * itemsPerPage + i + 1}</td>
                <td style={{ padding: '0.75rem', fontSize: '0.875rem', color: '#64748b' }}>user{i + 1}@example.com</td>
                <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>
                  <span style={{
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.75rem',
                    backgroundColor: '#dcfce7',
                    color: '#166534',
                  }}>
                    Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ padding: '1rem', borderTop: '1px solid #e5e5e5', display: 'flex', justifyContent: 'center' }}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    );
  },
};
