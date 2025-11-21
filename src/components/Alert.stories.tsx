import type { Meta, StoryObj } from '@storybook/react';
import Alert from './Alert';
import { Info as InfoIcon, AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Alert banner for displaying important messages with contextual styling and actions.

## Features
- **Variants**: info, success, warning, error with semantic colors
- **Icons**: Automatic variant-specific icons
- **Title & Message**: Optional title with message content
- **Dismissible**: Optional close button
- **Action buttons**: Primary and secondary action buttons
- **Accessible**: Proper ARIA role and semantic markup

## Usage

\`\`\`tsx
import { Alert } from 'notebook-ui';

<Alert
  variant="warning"
  title="Unsaved Changes"
  onClose={handleDismiss}
  actions={[
    { label: 'Save', onClick: handleSave, variant: 'primary' },
    { label: 'Discard', onClick: handleDiscard, variant: 'secondary' }
  ]}
>
  You have unsaved changes that will be lost.
</Alert>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Alert variant with semantic colors and icons',
      table: {
        type: { summary: 'info | success | warning | error' },
        defaultValue: { summary: 'info' },
      },
    },
    title: {
      control: 'text',
      description: 'Alert title (optional)',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      description: 'Alert message content',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    onClose: {
      description: 'Callback when close button is clicked (enables dismiss button)',
      table: {
        type: { summary: '() => void' },
      },
    },
    actions: {
      description: 'Action buttons to display at the bottom of the alert',
      table: {
        type: { summary: 'AlertAction[]' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    message: 'This is an informational alert message.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Your changes have been saved successfully.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'You have unsaved changes that will be lost.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    message: 'An error occurred while processing your request.',
  },
};

export const WithoutTitle: Story = {
  args: {
    variant: 'info',
    message: 'This is an alert without a title.',
  },
};

export const WithActions: Story = {
  args: {
    variant: 'warning',
    title: 'Unsaved Changes',
    message: 'You have unsaved changes that will be lost if you leave this page.',
    actions: [
      { label: 'Save Changes', onClick: () => alert('Saving...'), variant: 'primary' },
      { label: 'Discard', onClick: () => alert('Discarding...'), variant: 'secondary' },
    ],
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'info',
    title: 'Dismissible Alert',
    message: 'Click the X button to dismiss this alert.',
    onClose: () => alert('Alert dismissed'),
  },
};

export const CustomIcon: Story = {
  args: {
    variant: 'success',
    title: 'Custom Icon',
    message: 'This alert uses a custom icon.',
    icon: <CheckCircle className="h-5 w-5" />,
  },
};

export const LongMessage: Story = {
  args: {
    variant: 'warning',
    title: 'Important Notice',
    message: 'This is a longer alert message that demonstrates how the component handles multiple lines of text. The alert will expand vertically to accommodate all the content while maintaining proper spacing and readability.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert variant="info" title="Information" message="This is an informational message." />
      <Alert variant="success" title="Success" message="Operation completed successfully." />
      <Alert variant="warning" title="Warning" message="Please review before proceeding." />
      <Alert variant="error" title="Error" message="Something went wrong." />
    </div>
  ),
};
