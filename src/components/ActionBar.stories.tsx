import type { Meta, StoryObj } from '@storybook/react';
import ActionBar from './ActionBar';
import Text from './Text';
import Button from './Button';
import { Download, Trash2, Archive, Tag, Mail, Copy, X, Search, Filter } from 'lucide-react';

const meta: Meta<typeof ActionBar> = {
  title: 'Layout/ActionBar',
  component: ActionBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A flexible toolbar component for page-level and contextual actions. Use for bulk actions, form buttons, or any contextual toolbar needs.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ActionBar>;

export const Default: Story = {
  args: {
    leftContent: <Text weight="medium">3 items selected</Text>,
    actions: [
      { id: 'export', label: 'Export', icon: <Download className="h-4 w-4" />, onClick: () => alert('Export') },
      { id: 'delete', label: 'Delete', icon: <Trash2 className="h-4 w-4" />, onClick: () => alert('Delete'), variant: 'danger' },
    ],
  },
};

export const BulkActions: Story = {
  args: {
    leftContent: <Text weight="medium">12 items selected</Text>,
    actions: [
      { id: 'archive', label: 'Archive', icon: <Archive className="h-4 w-4" />, onClick: () => {} },
      { id: 'tag', label: 'Add Tag', icon: <Tag className="h-4 w-4" />, onClick: () => {} },
      { id: 'export', label: 'Export', icon: <Download className="h-4 w-4" />, onClick: () => {} },
      { id: 'delete', label: 'Delete', icon: <Trash2 className="h-4 w-4" />, onClick: () => {}, variant: 'danger' },
    ],
    showDismiss: true,
    onDismiss: () => alert('Selection cleared'),
  },
};

export const WithDismiss: Story = {
  args: {
    leftContent: <Text weight="medium">5 emails selected</Text>,
    actions: [
      { id: 'reply', label: 'Reply All', icon: <Mail className="h-4 w-4" />, onClick: () => {} },
      { id: 'archive', label: 'Archive', icon: <Archive className="h-4 w-4" />, onClick: () => {} },
      { id: 'delete', label: 'Delete', icon: <Trash2 className="h-4 w-4" />, onClick: () => {}, variant: 'danger' },
    ],
    showDismiss: true,
    onDismiss: () => alert('Dismissed'),
  },
};

export const FormActions: Story = {
  args: {
    position: 'bottom',
    rightContent: (
      <>
        <Button variant="ghost" onClick={() => alert('Cancel')}>Cancel</Button>
        <Button variant="primary" onClick={() => alert('Save')}>Save Changes</Button>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ height: '300px', display: 'flex', flexDirection: 'column' }}>
        <div className="flex-1 p-6 bg-paper-50">
          <Text>Form content goes here...</Text>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const StickyBottom: Story = {
  args: {
    position: 'bottom',
    sticky: true,
    rightContent: (
      <>
        <Button variant="ghost" onClick={() => {}}>Discard</Button>
        <Button variant="secondary" onClick={() => {}}>Save Draft</Button>
        <Button variant="primary" onClick={() => {}}>Publish</Button>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ height: '150vh' }}>
        <div className="p-6">
          <Text size="lg" weight="bold">Scroll down to see sticky bottom bar</Text>
          <div className="mt-4 space-y-4">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="p-4 bg-paper-100 rounded-lg">
                Form field {i + 1}
              </div>
            ))}
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const InfoVariant: Story = {
  args: {
    variant: 'info',
    centerContent: <Text size="sm">Showing 42 results for "wireless headphones"</Text>,
    showDismiss: true,
    onDismiss: () => alert('Clear search'),
  },
};

export const WarningVariant: Story = {
  args: {
    variant: 'warning',
    leftContent: <Text size="sm" weight="medium">You have unsaved changes</Text>,
    actions: [
      { id: 'discard', label: 'Discard', onClick: () => {}, variant: 'ghost' },
      { id: 'save', label: 'Save Now', onClick: () => {}, variant: 'primary' },
    ],
  },
};

export const PrimaryVariant: Story = {
  args: {
    variant: 'primary',
    leftContent: <Text size="sm" weight="medium">Batch operation ready</Text>,
    actions: [
      { id: 'cancel', label: 'Cancel', onClick: () => {}, variant: 'ghost' },
      { id: 'execute', label: 'Execute', onClick: () => {}, variant: 'primary' },
    ],
  },
};

export const Compact: Story = {
  args: {
    compact: true,
    leftContent: <Text size="sm">Quick actions</Text>,
    actions: [
      { id: 'copy', label: 'Copy', icon: <Copy className="h-4 w-4" />, onClick: () => {} },
      { id: 'delete', label: 'Delete', icon: <Trash2 className="h-4 w-4" />, onClick: () => {}, variant: 'danger' },
    ],
  },
};

export const WithCenterContent: Story = {
  args: {
    leftContent: <Text size="sm" color="muted">Page 1 of 10</Text>,
    centerContent: (
      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-ink-400" />
        <Text size="sm">Filtered by: Active users</Text>
      </div>
    ),
    actions: [
      { id: 'filter', label: 'Edit Filters', icon: <Filter className="h-4 w-4" />, onClick: () => {} },
    ],
  },
};

export const LoadingAction: Story = {
  args: {
    leftContent: <Text weight="medium">Processing 50 items...</Text>,
    actions: [
      { id: 'cancel', label: 'Cancel', onClick: () => {}, variant: 'ghost' },
      { id: 'processing', label: 'Processing...', onClick: () => {}, variant: 'primary', loading: true },
    ],
  },
};

export const Hidden: Story = {
  args: {
    visible: false,
    leftContent: <Text>This bar is hidden</Text>,
  },
  parameters: {
    docs: {
      description: {
        story: 'The ActionBar can be conditionally shown/hidden using the `visible` prop. This is useful for showing bulk action bars only when items are selected.',
      },
    },
  },
};

export const ConditionalDisplay: Story = {
  render: () => {
    const selectedCount = 3; // Simulated selection
    return (
      <div>
        <ActionBar
          visible={selectedCount > 0}
          leftContent={<Text weight="medium">{selectedCount} items selected</Text>}
          actions={[
            { id: 'export', label: 'Export', icon: <Download className="h-4 w-4" />, onClick: () => {} },
            { id: 'delete', label: 'Delete', icon: <Trash2 className="h-4 w-4" />, onClick: () => {}, variant: 'danger' },
          ]}
          showDismiss
          onDismiss={() => {}}
        />
        <div className="p-6">
          <Text color="muted">
            The ActionBar above appears when items are selected. 
            In a real app, clicking dismiss would clear the selection and hide the bar.
          </Text>
        </div>
      </div>
    );
  },
};

export const MultipleRows: Story = {
  render: () => (
    <div>
      <ActionBar
        leftContent={<Text size="sm" weight="medium">Filters: Category = Electronics, Status = Active</Text>}
        actions={[
          { id: 'clear', label: 'Clear All', onClick: () => {}, variant: 'ghost' },
        ]}
        compact
      />
      <ActionBar
        variant="primary"
        leftContent={<Text size="sm" weight="medium">8 items selected</Text>}
        actions={[
          { id: 'export', label: 'Export', icon: <Download className="h-4 w-4" />, onClick: () => {} },
          { id: 'delete', label: 'Delete', icon: <Trash2 className="h-4 w-4" />, onClick: () => {}, variant: 'danger' },
        ]}
        showDismiss
        onDismiss={() => {}}
      />
      <div className="p-6">
        <Text color="muted">Multiple ActionBars can be stacked for different purposes.</Text>
      </div>
    </div>
  ),
};
