import type { Meta, StoryObj } from '@storybook/react';
import { Plus, Camera, Upload, FileText, Edit, Share, Trash, MessageSquare } from 'lucide-react';
import FloatingActionButton from './FloatingActionButton';

const meta: Meta<typeof FloatingActionButton> = {
  title: 'Mobile/FloatingActionButton',
  component: FloatingActionButton,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        component: 'Material Design style floating action button (FAB) for primary actions on mobile screens.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', padding: '16px', background: '#f5f5f4' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Page Content</h1>
        <p style={{ color: '#666', marginBottom: '16px' }}>The FAB floats above all content.</p>
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} style={{ padding: '16px', margin: '8px 0', background: 'white', borderRadius: '8px' }}>
            Item {i + 1}
          </div>
        ))}
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FloatingActionButton>;

export const Default: Story = {
  args: {
    onClick: () => console.log('FAB clicked'),
    label: 'Add item',
  },
};

export const CustomIcon: Story = {
  args: {
    onClick: () => console.log('Edit clicked'),
    icon: <Edit className="w-6 h-6" />,
    label: 'Edit',
  },
};

export const WithActionMenu: Story = {
  args: {
    actions: [
      { id: 'camera', icon: <Camera className="w-5 h-5" />, label: 'Take Photo', onClick: () => console.log('Camera') },
      { id: 'upload', icon: <Upload className="w-5 h-5" />, label: 'Upload File', onClick: () => console.log('Upload') },
      { id: 'note', icon: <FileText className="w-5 h-5" />, label: 'Create Note', onClick: () => console.log('Note') },
    ],
    label: 'Create options',
  },
};

export const ManyActions: Story = {
  args: {
    actions: [
      { id: 'camera', icon: <Camera className="w-5 h-5" />, label: 'Camera', onClick: () => console.log('Camera') },
      { id: 'upload', icon: <Upload className="w-5 h-5" />, label: 'Upload', onClick: () => console.log('Upload') },
      { id: 'note', icon: <FileText className="w-5 h-5" />, label: 'Note', onClick: () => console.log('Note') },
      { id: 'share', icon: <Share className="w-5 h-5" />, label: 'Share', onClick: () => console.log('Share') },
      { id: 'message', icon: <MessageSquare className="w-5 h-5" />, label: 'Message', onClick: () => console.log('Message') },
    ],
    label: 'Actions',
  },
};

export const WithDisabledAction: Story = {
  args: {
    actions: [
      { id: 'camera', icon: <Camera className="w-5 h-5" />, label: 'Take Photo', onClick: () => console.log('Camera') },
      { id: 'upload', icon: <Upload className="w-5 h-5" />, label: 'Upload (disabled)', onClick: () => console.log('Upload'), disabled: true },
      { id: 'note', icon: <FileText className="w-5 h-5" />, label: 'Create Note', onClick: () => console.log('Note') },
    ],
  },
};

export const Extended: Story = {
  args: {
    extended: true,
    extendedLabel: 'New Task',
    onClick: () => console.log('Create task'),
    icon: <Plus className="w-6 h-6" />,
  },
};

export const ExtendedWithCustomIcon: Story = {
  args: {
    extended: true,
    extendedLabel: 'Compose',
    onClick: () => console.log('Compose'),
    icon: <Edit className="w-5 h-5" />,
  },
};

export const BottomLeft: Story = {
  args: {
    position: 'bottom-left',
    onClick: () => console.log('FAB clicked'),
    label: 'Add',
  },
};

export const BottomCenter: Story = {
  args: {
    position: 'bottom-center',
    onClick: () => console.log('FAB clicked'),
    label: 'Add',
  },
};

export const SecondaryVariant: Story = {
  args: {
    variant: 'secondary',
    onClick: () => console.log('FAB clicked'),
    icon: <Edit className="w-6 h-6" />,
    label: 'Edit',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
    onClick: () => console.log('FAB clicked'),
    label: 'Add',
  },
};

export const CustomOffset: Story = {
  args: {
    onClick: () => console.log('FAB clicked'),
    offset: { x: 32, y: 100 },
    label: 'Custom position',
  },
};

export const Hidden: Story = {
  args: {
    onClick: () => console.log('FAB clicked'),
    hidden: true,
    label: 'Hidden FAB',
  },
  parameters: {
    docs: {
      description: {
        story: 'FAB can be hidden (e.g., when scrolling down). Use `useFABScroll()` hook for scroll-based visibility.',
      },
    },
  },
};

export const InteractiveScrollDemo: Story = {
  render: () => {
    // Note: In a real app, you would use useFABScroll() hook
    return (
      <div>
        <div style={{ padding: '16px', background: '#fef3c7', borderRadius: '8px', marginBottom: '16px' }}>
          <p style={{ fontWeight: 'bold' }}>Scroll Demo</p>
          <p style={{ fontSize: '14px', color: '#666' }}>
            In production, use the <code>useFABScroll()</code> hook to hide FAB when scrolling down.
          </p>
        </div>
        <FloatingActionButton
          actions={[
            { id: 'camera', icon: <Camera className="w-5 h-5" />, label: 'Photo', onClick: () => {} },
            { id: 'upload', icon: <Upload className="w-5 h-5" />, label: 'Upload', onClick: () => {} },
          ]}
        />
      </div>
    );
  },
};

export const DeleteAction: Story = {
  args: {
    icon: <Trash className="w-6 h-6" />,
    variant: 'secondary',
    onClick: () => console.log('Delete clicked'),
    label: 'Delete selected',
  },
  parameters: {
    docs: {
      description: {
        story: 'FAB can be used for contextual actions like bulk delete.',
      },
    },
  },
};
