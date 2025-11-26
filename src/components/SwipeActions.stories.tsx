import type { Meta, StoryObj } from '@storybook/react';
import SwipeActions from './SwipeActions';
import { Trash, Archive, Edit, Star, Share, Mail, MoreHorizontal } from 'lucide-react';
import Card, { CardContent } from './Card';
import Text from './Text';
import Badge from './Badge';
import Stack from './Stack';

const meta: Meta<typeof SwipeActions> = {
  title: 'Mobile/SwipeActions',
  component: SwipeActions,
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'mobileM',
    },
    docs: {
      description: {
        component: `
Touch-based swipe actions for mobile list items. Reveals action buttons when
swiping left or right, similar to iOS mail/messages.

Features:
- Left and right swipe directions
- Multiple actions per side
- Full swipe to trigger primary action
- Spring-back animation
- Touch and mouse support
- Customizable thresholds
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SwipeActions>;

const SampleListItem = ({ title, subtitle, badge }: { title: string; subtitle: string; badge?: string }) => (
  <div className="p-4 bg-white border-b border-paper-200">
    <div className="flex items-start justify-between">
      <div className="flex-1 min-w-0">
        <Text weight="medium" className="truncate">{title}</Text>
        <Text size="sm" color="muted" className="truncate mt-0.5">{subtitle}</Text>
      </div>
      {badge && (
        <Badge variant="primary" size="sm">{badge}</Badge>
      )}
    </div>
  </div>
);

/**
 * Basic swipe left to reveal delete action
 */
export const DeleteAction: Story = {
  args: {
    leftActions: [
      {
        id: 'delete',
        label: 'Delete',
        icon: <Trash className="h-5 w-5" />,
        color: 'error',
        onClick: () => alert('Delete clicked!'),
        primary: true,
      },
    ],
    children: <SampleListItem title="Swipe left to delete" subtitle="Try swiping this item to the left" />,
  },
};

/**
 * Multiple actions on the left side
 */
export const MultipleLeftActions: Story = {
  args: {
    leftActions: [
      {
        id: 'delete',
        label: 'Delete',
        icon: <Trash className="h-5 w-5" />,
        color: 'error',
        onClick: () => alert('Delete clicked!'),
        primary: true,
      },
      {
        id: 'archive',
        label: 'Archive',
        icon: <Archive className="h-5 w-5" />,
        color: 'warning',
        onClick: () => alert('Archive clicked!'),
      },
    ],
    children: <SampleListItem title="Multiple delete options" subtitle="Swipe left to see archive and delete" />,
  },
};

/**
 * Actions on both sides
 */
export const BothSides: Story = {
  args: {
    leftActions: [
      {
        id: 'delete',
        label: 'Delete',
        icon: <Trash className="h-5 w-5" />,
        color: 'error',
        onClick: () => alert('Delete clicked!'),
        primary: true,
      },
    ],
    rightActions: [
      {
        id: 'edit',
        label: 'Edit',
        icon: <Edit className="h-5 w-5" />,
        color: 'primary',
        onClick: () => alert('Edit clicked!'),
        primary: true,
      },
      {
        id: 'star',
        label: 'Star',
        icon: <Star className="h-5 w-5" />,
        color: 'warning',
        onClick: () => alert('Star clicked!'),
      },
    ],
    children: <SampleListItem title="Swipe both ways" subtitle="Left for delete, right for edit/star" />,
  },
};

/**
 * Full swipe to trigger action
 */
export const FullSwipe: Story = {
  args: {
    leftActions: [
      {
        id: 'delete',
        label: 'Delete',
        icon: <Trash className="h-5 w-5" />,
        color: 'error',
        onClick: () => alert('Deleted via full swipe!'),
        primary: true,
      },
    ],
    fullSwipe: true,
    fullSwipeThreshold: 0.4,
    children: <SampleListItem title="Full swipe to delete" subtitle="Swipe all the way left to delete instantly" badge="Full swipe" />,
  },
};

/**
 * Email-style actions (like iOS Mail)
 */
export const EmailStyle: Story = {
  render: () => (
    <Stack spacing="none">
      <SwipeActions
        leftActions={[
          {
            id: 'trash',
            label: 'Trash',
            icon: <Trash className="h-5 w-5" />,
            color: 'error',
            onClick: () => alert('Trash'),
            primary: true,
          },
        ]}
        rightActions={[
          {
            id: 'more',
            label: 'More',
            icon: <MoreHorizontal className="h-5 w-5" />,
            color: 'default',
            onClick: () => alert('More options'),
          },
          {
            id: 'star',
            label: 'Flag',
            icon: <Star className="h-5 w-5" />,
            color: 'warning',
            onClick: () => alert('Flagged'),
          },
        ]}
        fullSwipe
      >
        <SampleListItem 
          title="Meeting reminder" 
          subtitle="Don't forget the team sync at 3pm..." 
          badge="New"
        />
      </SwipeActions>
      
      <SwipeActions
        leftActions={[
          {
            id: 'trash',
            label: 'Trash',
            icon: <Trash className="h-5 w-5" />,
            color: 'error',
            onClick: () => alert('Trash'),
            primary: true,
          },
        ]}
        rightActions={[
          {
            id: 'more',
            label: 'More',
            icon: <MoreHorizontal className="h-5 w-5" />,
            color: 'default',
            onClick: () => alert('More options'),
          },
          {
            id: 'reply',
            label: 'Reply',
            icon: <Mail className="h-5 w-5" />,
            color: 'primary',
            onClick: () => alert('Reply'),
          },
        ]}
        fullSwipe
      >
        <SampleListItem 
          title="Weekly report" 
          subtitle="Here's the summary of this week's progress..." 
        />
      </SwipeActions>
      
      <SwipeActions
        leftActions={[
          {
            id: 'archive',
            label: 'Archive',
            icon: <Archive className="h-5 w-5" />,
            color: 'success',
            onClick: () => alert('Archived'),
            primary: true,
          },
        ]}
        rightActions={[
          {
            id: 'share',
            label: 'Share',
            icon: <Share className="h-5 w-5" />,
            color: 'primary',
            onClick: () => alert('Share'),
          },
        ]}
        fullSwipe
      >
        <SampleListItem 
          title="Project update" 
          subtitle="The new feature has been deployed to production..." 
        />
      </SwipeActions>
    </Stack>
  ),
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    leftActions: [
      {
        id: 'delete',
        label: 'Delete',
        icon: <Trash className="h-5 w-5" />,
        color: 'error',
        onClick: () => alert('Delete clicked!'),
      },
    ],
    disabled: true,
    children: <SampleListItem title="Swipe disabled" subtitle="This item cannot be swiped" />,
  },
};

/**
 * In a card context
 */
export const InCard: Story = {
  render: () => (
    <Card>
      <CardContent className="p-0">
        <SwipeActions
          leftActions={[
            {
              id: 'delete',
              label: 'Delete',
              icon: <Trash className="h-5 w-5" />,
              color: 'error',
              onClick: () => alert('Delete'),
              primary: true,
            },
          ]}
          rightActions={[
            {
              id: 'edit',
              label: 'Edit',
              icon: <Edit className="h-5 w-5" />,
              color: 'primary',
              onClick: () => alert('Edit'),
            },
          ]}
        >
          <div className="p-4">
            <Text weight="semibold">Card with swipe actions</Text>
            <Text size="sm" color="muted" className="mt-1">
              Swipe left to delete, right to edit
            </Text>
          </div>
        </SwipeActions>
      </CardContent>
    </Card>
  ),
};
