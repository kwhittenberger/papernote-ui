import type { Meta, StoryObj } from '@storybook/react';
import EmptyState from './EmptyState';
import Button from './Button';
import Input from './Input';
import Stack from './Stack';
import Text from './Text';
import { Inbox, Users, FileText, Search, Database, ShoppingCart, Plus } from 'lucide-react';

const meta = {
  title: 'Feedback/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Empty state component for displaying helpful messages when no content is available.

## Features
- **Icon support**: Optional icon for visual context
- **Title and description**: Clear messaging about empty state
- **Primary action**: Main CTA button
- **Secondary action**: Optional additional action
- **Children support**: Custom content below description
- **Centered layout**: Vertically and horizontally centered
- **Responsive**: Adapts to container width

## Usage

\`\`\`tsx
import { EmptyState } from 'notebook-ui';
import { Inbox } from 'lucide-react';

<EmptyState
  icon={<Inbox className="h-12 w-12" />}
  title="No messages"
  description="Your inbox is empty. Check back later for new messages."
  action={{
    label: 'Compose Message',
    onClick: handleCompose,
  }}
  secondaryAction={{
    label: 'View Archive',
    onClick: handleArchive,
  }}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: 'Icon element displayed above title',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    title: {
      control: 'text',
      description: 'Main heading text',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'Descriptive text explaining the empty state',
      table: {
        type: { summary: 'string' },
      },
    },
    action: {
      description: 'Primary action button configuration',
      table: {
        type: { summary: '{ label: string; onClick: () => void }' },
      },
    },
    secondaryAction: {
      description: 'Secondary action button configuration',
      table: {
        type: { summary: '{ label: string; onClick: () => void }' },
      },
    },
    children: {
      description: 'Optional custom content rendered below the description',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '500px', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'No items found',
    description: 'There are no items to display at this time.',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <Inbox className="h-12 w-12" />,
    title: 'Your inbox is empty',
    description: 'No new messages at this time.',
  },
};

export const WithAction: Story = {
  args: {
    icon: <Users className="h-12 w-12" />,
    title: 'No users yet',
    description: 'Get started by adding your first user.',
    action: {
      label: 'Add User',
      onClick: () => alert('Add user clicked'),
    },
  },
};

export const WithBothActions: Story = {
  args: {
    icon: <FileText className="h-12 w-12" />,
    title: 'No documents',
    description: "You haven't created any documents yet. Create a new one or upload existing files.",
    action: {
      label: 'Create New',
      onClick: () => alert('Create clicked'),
    },
    secondaryAction: {
      label: 'Upload Files',
      onClick: () => alert('Upload clicked'),
    },
  },
};

export const SearchResults: Story = {
  args: {
    icon: <Search className="h-12 w-12" />,
    title: 'No results found',
    description: "Try adjusting your search or filter to find what you're looking for.",
  },
};

export const NoData: Story = {
  args: {
    icon: <Database className="h-12 w-12" />,
    title: 'No data available',
    description: 'There is no data to display for the selected time period.',
  },
};

export const EmptyCart: Story = {
  args: {
    icon: <ShoppingCart className="h-12 w-12" />,
    title: 'Your cart is empty',
    description: "Looks like you haven't added anything to your cart yet.",
    action: {
      label: 'Continue Shopping',
      onClick: () => alert('Continue shopping clicked'),
    },
  },
};

/**
 * Use the `children` prop to add custom content below the description.
 * This is useful for adding forms, additional context, or complex UI elements.
 */
export const WithChildren: Story = {
  args: {
    icon: <Plus className="h-12 w-12" />,
    title: 'Create your first project',
    description: 'Projects help you organize your work and collaborate with team members.',
  },
  render: (args) => (
    <EmptyState {...args}>
      <Stack spacing="sm" align="stretch">
        <Input 
          placeholder="Enter project name..." 
          label="Project Name"
        />
        <Button variant="primary" icon={<Plus className="h-4 w-4" />}>
          Create Project
        </Button>
      </Stack>
    </EmptyState>
  ),
};

/**
 * Children can contain any custom content like search inputs for filtering.
 */
export const WithSearchInChildren: Story = {
  args: {
    icon: <Search className="h-12 w-12" />,
    title: 'No results found',
    description: 'Try a different search term or browse categories.',
  },
  render: (args) => (
    <EmptyState {...args}>
      <Stack spacing="md" align="center">
        <Input 
          placeholder="Search again..." 
          prefixIcon={<Search className="h-4 w-4" />}
          clearable
        />
        <Text size="sm" color="muted">
          Popular searches: React, TypeScript, Components
        </Text>
      </Stack>
    </EmptyState>
  ),
};

/**
 * Combine children with action buttons for maximum flexibility.
 */
export const WithChildrenAndActions: Story = {
  args: {
    icon: <Users className="h-12 w-12" />,
    title: 'Invite team members',
    description: 'Add team members to collaborate on this project.',
    action: {
      label: 'Send Invites',
      onClick: () => alert('Send invites clicked'),
    },
    secondaryAction: {
      label: 'Skip for now',
      onClick: () => alert('Skip clicked'),
    },
  },
  render: (args) => (
    <EmptyState {...args}>
      <Input 
        placeholder="Enter email addresses..." 
        helperText="Separate multiple emails with commas"
      />
    </EmptyState>
  ),
};

export const MinimalStyle: Story = {
  args: {
    title: 'No notifications',
    description: "You're all caught up!",
  },
};

export const InCard: Story = {
  render: () => (
    <div style={{
      width: '600px',
      border: '1px solid #e5e5e5',
      borderRadius: '0.5rem',
      padding: '2rem',
    }}>
      <h2 style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e5e5e5' }}>
        Recent Activity
      </h2>
      <EmptyState
        icon={<Inbox className="h-10 w-10" />}
        title="No recent activity"
        description="Your recent activity will appear here."
      />
    </div>
  ),
};

export const FullPage: Story = {
  render: () => (
    <div style={{
      width: '100vw',
      height: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fafaf9',
    }}>
      <EmptyState
        icon={<Users className="h-16 w-16" />}
        title="Welcome to Your Dashboard"
        description="Get started by inviting team members or creating your first project."
        action={{
          label: 'Invite Team',
          onClick: () => alert('Invite clicked'),
        }}
        secondaryAction={{
          label: 'Create Project',
          onClick: () => alert('Create clicked'),
        }}
      />
    </div>
  ),
};
