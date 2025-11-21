import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import KanbanBoard, { KanbanColumn, KanbanCard } from './KanbanBoard';
import { User, Calendar, Tag } from 'lucide-react';

const meta = {
  title: 'Display/KanbanBoard',
  component: KanbanBoard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ minHeight: '600px', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof KanbanBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

const initialColumns: KanbanColumn[] = [
  {
    id: 'todo',
    title: 'To Do',
    color: '#94a3b8',
    cards: [
      {
        id: '1',
        title: 'Design new homepage',
        description: 'Create mockups and wireframes for the new homepage design',
        tags: ['design', 'ui'],
        assignee: 'John Doe',
        priority: 'high',
      },
      {
        id: '2',
        title: 'Update documentation',
        description: 'Review and update API documentation',
        tags: ['docs'],
        assignee: 'Jane Smith',
        priority: 'low',
      },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    color: '#3b82f6',
    limit: 3,
    cards: [
      {
        id: '3',
        title: 'Implement authentication',
        description: 'Add OAuth 2.0 authentication flow',
        tags: ['backend', 'security'],
        assignee: 'Bob Johnson',
        priority: 'high',
      },
    ],
  },
  {
    id: 'review',
    title: 'Review',
    color: '#f59e0b',
    cards: [
      {
        id: '4',
        title: 'Code review for PR #123',
        tags: ['review'],
        assignee: 'Alice Williams',
        priority: 'medium',
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    color: '#10b981',
    cards: [
      {
        id: '5',
        title: 'Setup CI/CD pipeline',
        description: 'Configure GitHub Actions for automated testing',
        tags: ['devops', 'ci/cd'],
        assignee: 'Charlie Brown',
      },
    ],
  },
];

export const Default: Story = {
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>(initialColumns);
    return <KanbanBoard columns={columns} onChange={setColumns} />;
  },
};

export const WithCardClick: Story = {
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>(initialColumns);
    return (
      <KanbanBoard
        columns={columns}
        onChange={setColumns}
        onCardClick={(card) => alert(`Clicked: ${card.title}`)}
      />
    );
  },
};

export const WithAddCard: Story = {
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>(initialColumns);
    return (
      <KanbanBoard
        columns={columns}
        onChange={setColumns}
        onAddCard={(columnId) => alert(`Add card to column: ${columnId}`)}
        showAddButton
      />
    );
  },
};

export const WithColumnMenu: Story = {
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>(initialColumns);
    return (
      <KanbanBoard
        columns={columns}
        onChange={setColumns}
        onColumnMenu={(columnId) => alert(`Column menu: ${columnId}`)}
      />
    );
  },
};

export const NoAddButton: Story = {
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>(initialColumns);
    return (
      <KanbanBoard
        columns={columns}
        onChange={setColumns}
        showAddButton={false}
      />
    );
  },
};

export const CustomCardRenderer: Story = {
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>(initialColumns);

    return (
      <KanbanBoard
        columns={columns}
        onChange={setColumns}
        renderCard={(card) => (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h4 style={{ fontWeight: 600, fontSize: '0.875rem' }}>{card.title}</h4>
            {card.description && (
              <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{card.description}</p>
            )}
            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.75rem', color: '#64748b' }}>
              {card.assignee && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <User className="h-3 w-3" />
                  {card.assignee}
                </div>
              )}
              {card.priority && (
                <div style={{
                  padding: '0.125rem 0.5rem',
                  backgroundColor: card.priority === 'high' ? '#fef2f2' : card.priority === 'medium' ? '#fefce8' : '#f0fdf4',
                  color: card.priority === 'high' ? '#dc2626' : card.priority === 'medium' ? '#ca8a04' : '#16a34a',
                  borderRadius: '0.25rem',
                  fontSize: '0.625rem',
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}>
                  {card.priority}
                </div>
              )}
            </div>
          </div>
        )}
      />
    );
  },
};

export const ProjectManagement: Story = {
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>([
      {
        id: 'backlog',
        title: 'Backlog',
        color: '#6b7280',
        cards: [
          {
            id: '1',
            title: 'Mobile app design',
            description: 'Design mobile-first responsive layout',
            tags: ['mobile', 'design'],
            assignee: 'Sarah Lee',
            priority: 'low',
          },
          {
            id: '2',
            title: 'Performance optimization',
            description: 'Optimize database queries and caching',
            tags: ['backend', 'performance'],
            priority: 'medium',
          },
        ],
      },
      {
        id: 'todo',
        title: 'To Do',
        color: '#94a3b8',
        cards: [
          {
            id: '3',
            title: 'User profile page',
            description: 'Implement user profile with edit functionality',
            tags: ['frontend', 'feature'],
            assignee: 'Mike Davis',
            priority: 'high',
          },
        ],
      },
      {
        id: 'in-progress',
        title: 'In Progress',
        color: '#3b82f6',
        limit: 2,
        cards: [
          {
            id: '4',
            title: 'Payment integration',
            description: 'Integrate Stripe payment gateway',
            tags: ['backend', 'payments'],
            assignee: 'Emily Clark',
            priority: 'high',
          },
        ],
      },
      {
        id: 'testing',
        title: 'Testing',
        color: '#8b5cf6',
        cards: [],
      },
      {
        id: 'done',
        title: 'Done',
        color: '#10b981',
        cards: [
          {
            id: '5',
            title: 'Login system',
            description: 'Email and social login implemented',
            tags: ['auth', 'frontend'],
            assignee: 'David Wilson',
          },
        ],
      },
    ]);

    return (
      <div>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Project Dashboard
          </h2>
          <p style={{ color: '#64748b' }}>Drag cards between columns to update status</p>
        </div>
        <KanbanBoard
          columns={columns}
          onChange={setColumns}
          onCardClick={(card) => console.log('Open card details:', card)}
          onAddCard={(columnId) => console.log('Add card to:', columnId)}
        />
      </div>
    );
  },
};

export const BugTracker: Story = {
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>([
      {
        id: 'reported',
        title: 'Reported',
        color: '#ef4444',
        cards: [
          {
            id: '1',
            title: 'Button not clickable on iOS',
            description: 'Submit button does not work on Safari iOS',
            tags: ['bug', 'mobile', 'ios'],
            priority: 'high',
          },
          {
            id: '2',
            title: 'Typo in error message',
            tags: ['bug', 'text'],
            priority: 'low',
          },
        ],
      },
      {
        id: 'investigating',
        title: 'Investigating',
        color: '#f59e0b',
        cards: [
          {
            id: '3',
            title: 'Slow page load',
            description: 'Dashboard takes 5+ seconds to load',
            tags: ['bug', 'performance'],
            assignee: 'Tech Lead',
            priority: 'medium',
          },
        ],
      },
      {
        id: 'fixing',
        title: 'Fixing',
        color: '#3b82f6',
        limit: 3,
        cards: [
          {
            id: '4',
            title: 'Memory leak in carousel',
            description: 'Carousel component causes memory leak',
            tags: ['bug', 'frontend'],
            assignee: 'Frontend Dev',
            priority: 'high',
          },
        ],
      },
      {
        id: 'resolved',
        title: 'Resolved',
        color: '#10b981',
        cards: [
          {
            id: '5',
            title: 'Login redirect broken',
            tags: ['bug', 'auth'],
            assignee: 'Backend Dev',
          },
        ],
      },
    ]);

    return (
      <div>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Bug Tracking Board
          </h2>
          <div style={{ display: 'flex', gap: '1rem', color: '#64748b', fontSize: '0.875rem' }}>
            <span>🔴 High Priority: 2</span>
            <span>🟡 Medium Priority: 1</span>
            <span>🟢 Low Priority: 1</span>
          </div>
        </div>
        <KanbanBoard
          columns={columns}
          onChange={setColumns}
          onCardClick={(card) => console.log('View bug details:', card)}
          onAddCard={(columnId) => console.log('Report new bug in:', columnId)}
        />
      </div>
    );
  },
};

export const ContentCalendar: Story = {
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>([
      {
        id: 'ideas',
        title: 'Ideas',
        color: '#8b5cf6',
        cards: [
          {
            id: '1',
            title: 'Blog: React 19 Features',
            tags: ['blog', 'tutorial'],
          },
          {
            id: '2',
            title: 'Video: TypeScript Tips',
            tags: ['video', 'tutorial'],
          },
        ],
      },
      {
        id: 'writing',
        title: 'Writing',
        color: '#3b82f6',
        cards: [
          {
            id: '3',
            title: 'Blog: Component Libraries',
            description: 'Comparing popular React component libraries',
            tags: ['blog', 'comparison'],
            assignee: 'Content Writer',
          },
        ],
      },
      {
        id: 'review',
        title: 'Review',
        color: '#f59e0b',
        cards: [
          {
            id: '4',
            title: 'Blog: State Management',
            description: 'Guide to state management in React',
            tags: ['blog', 'tutorial'],
            assignee: 'Editor',
          },
        ],
      },
      {
        id: 'scheduled',
        title: 'Scheduled',
        color: '#06b6d4',
        cards: [],
      },
      {
        id: 'published',
        title: 'Published',
        color: '#10b981',
        cards: [
          {
            id: '5',
            title: 'Blog: Getting Started',
            tags: ['blog', 'beginner'],
          },
        ],
      },
    ]);

    return (
      <div>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Content Calendar
          </h2>
          <p style={{ color: '#64748b' }}>Track your content from idea to publication</p>
        </div>
        <KanbanBoard
          columns={columns}
          onChange={setColumns}
          onCardClick={(card) => console.log('Edit content:', card)}
          onAddCard={(columnId) => console.log('New content in:', columnId)}
        />
      </div>
    );
  },
};

export const SalesPipeline: Story = {
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>([
      {
        id: 'leads',
        title: 'New Leads',
        color: '#94a3b8',
        cards: [
          {
            id: '1',
            title: 'Acme Corp',
            description: 'Enterprise plan - 500 users',
            tags: ['enterprise'],
            priority: 'high',
          },
          {
            id: '2',
            title: 'TechStart Inc',
            description: 'Pro plan - 50 users',
            tags: ['startup'],
            priority: 'medium',
          },
        ],
      },
      {
        id: 'contacted',
        title: 'Contacted',
        color: '#3b82f6',
        cards: [
          {
            id: '3',
            title: 'Global Solutions',
            description: 'Business plan - 100 users',
            tags: ['business'],
            assignee: 'Sales Rep 1',
            priority: 'medium',
          },
        ],
      },
      {
        id: 'demo',
        title: 'Demo Scheduled',
        color: '#8b5cf6',
        cards: [
          {
            id: '4',
            title: 'Innovation Labs',
            description: 'Enterprise plan - demo on Friday',
            tags: ['enterprise', 'demo'],
            assignee: 'Sales Rep 2',
            priority: 'high',
          },
        ],
      },
      {
        id: 'proposal',
        title: 'Proposal Sent',
        color: '#f59e0b',
        cards: [],
      },
      {
        id: 'closed',
        title: 'Closed Won',
        color: '#10b981',
        cards: [
          {
            id: '5',
            title: 'DataTech Co',
            description: 'Pro plan - $5,000/month',
            tags: ['business'],
            assignee: 'Sales Rep 1',
          },
        ],
      },
    ]);

    return (
      <div>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Sales Pipeline
          </h2>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>
                Active Deals
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>8</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>
                Closed This Month
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#10b981' }}>$15,000</div>
            </div>
          </div>
        </div>
        <KanbanBoard
          columns={columns}
          onChange={setColumns}
          onCardClick={(card) => console.log('View deal:', card)}
          onAddCard={(columnId) => console.log('Add lead to:', columnId)}
        />
      </div>
    );
  },
};
