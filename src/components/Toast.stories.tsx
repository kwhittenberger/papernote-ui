import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Toast, { ToastContainer, ToastProps, ToastType, ToastPosition } from './Toast';
import Button from './Button';
import Stack from './Stack';
import Text from './Text';
import { addSuccessMessage, addErrorMessage, addWarningMessage, addInfoMessage } from './StatusBar';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Toast notifications for displaying brief, non-blocking messages to users.

## Two Toast Systems

notebook-ui provides two toast systems:

### 1. Toast Component (Popup Style)
Traditional popup toasts that appear in corners of the screen. Good for standalone apps.

\`\`\`tsx
<ToastContainer toasts={toasts} onClose={handleClose} position="top-right" />
\`\`\`

### 2. StatusBar Toast Functions (Recommended)
Global toast functions that display in the status bar. Better for apps using the Layout component.

\`\`\`tsx
import { addSuccessMessage, addErrorMessage } from 'notebook-ui';

// Anywhere in your app:
addSuccessMessage('Changes saved successfully');
addErrorMessage('Failed to save changes');
\`\`\`

## Types
- **success** - Green, for successful operations
- **error** - Red, for errors and failures  
- **warning** - Yellow, for warnings
- **info** - Blue, for informational messages

## Features
- Auto-dismiss after configurable duration
- Manual dismiss with X button
- Optional action button (e.g., Undo)
- Slide-in/out animations
- Multiple toast stacking
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

// Helper to generate unique IDs
let toastId = 0;
const generateId = () => `toast-${++toastId}`;

/**
 * Individual Toast component - typically used via ToastContainer
 */
export const SingleToast: Story = {
  render: () => (
    <Toast
      id="demo-toast"
      type="success"
      title="Changes saved"
      message="Your changes have been saved successfully."
      duration={999999} // Don't auto-close for demo
      onClose={() => console.log('Toast closed')}
    />
  ),
};

/**
 * All toast types side by side
 */
export const AllTypes: Story = {
  render: () => (
    <Stack gap="md">
      <Toast
        id="success-toast"
        type="success"
        title="Success"
        message="Operation completed successfully."
        duration={999999}
        onClose={() => {}}
      />
      <Toast
        id="error-toast"
        type="error"
        title="Error"
        message="Something went wrong. Please try again."
        duration={999999}
        onClose={() => {}}
      />
      <Toast
        id="warning-toast"
        type="warning"
        title="Warning"
        message="This action may have unintended consequences."
        duration={999999}
        onClose={() => {}}
      />
      <Toast
        id="info-toast"
        type="info"
        title="Information"
        message="Here's some helpful information for you."
        duration={999999}
        onClose={() => {}}
      />
    </Stack>
  ),
};

/**
 * Toast with action button (e.g., Undo)
 */
export const WithAction: Story = {
  render: () => (
    <Stack gap="md">
      <Toast
        id="undo-toast"
        type="success"
        title="Item deleted"
        message="The item has been moved to trash."
        duration={999999}
        onClose={() => {}}
        action={{
          label: 'Undo',
          onClick: () => alert('Undo clicked!'),
        }}
      />
      <Toast
        id="retry-toast"
        type="error"
        title="Upload failed"
        message="Could not upload file. Check your connection."
        duration={999999}
        onClose={() => {}}
        action={{
          label: 'Retry',
          onClick: () => alert('Retry clicked!'),
        }}
      />
    </Stack>
  ),
};

/**
 * Interactive demo with ToastContainer
 */
export const InteractiveDemo: Story = {
  render: () => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);
    const [position, setPosition] = useState<ToastPosition>('top-right');

    const addToast = (type: ToastType, title: string, message: string, action?: ToastProps['action']) => {
      const newToast: ToastProps = {
        id: generateId(),
        type,
        title,
        message,
        duration: 5000,
        onClose: () => {},
        action,
      };
      setToasts(prev => [...prev, newToast]);
    };

    const handleClose = (id: string) => {
      setToasts(prev => prev.filter(t => t.id !== id));
    };

    return (
      <>
        <Stack gap="lg">
          <div>
            <Text weight="medium" className="mb-2">Position:</Text>
            <Stack direction="horizontal" gap="sm" wrap>
              {(['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'] as ToastPosition[]).map((pos) => (
                <Button
                  key={pos}
                  variant={position === pos ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setPosition(pos)}
                >
                  {pos}
                </Button>
              ))}
            </Stack>
          </div>

          <div>
            <Text weight="medium" className="mb-2">Add Toast:</Text>
            <Stack direction="horizontal" gap="sm" wrap>
              <Button
                variant="outline"
                onClick={() => addToast('success', 'Success!', 'Operation completed successfully.')}
              >
                Success
              </Button>
              <Button
                variant="outline"
                onClick={() => addToast('error', 'Error!', 'Something went wrong.')}
              >
                Error
              </Button>
              <Button
                variant="outline"
                onClick={() => addToast('warning', 'Warning!', 'Please proceed with caution.')}
              >
                Warning
              </Button>
              <Button
                variant="outline"
                onClick={() => addToast('info', 'Info', 'Here is some information.')}
              >
                Info
              </Button>
              <Button
                variant="outline"
                onClick={() => addToast('success', 'Item deleted', 'The item has been removed.', {
                  label: 'Undo',
                  onClick: () => alert('Undo action!'),
                })}
              >
                With Undo
              </Button>
            </Stack>
          </div>

          <div>
            <Text size="sm" className="text-ink-500">
              Active toasts: {toasts.length}
            </Text>
          </div>
        </Stack>

        <ToastContainer
          toasts={toasts}
          onClose={handleClose}
          position={position}
        />
      </>
    );
  },
};

/**
 * Using global status functions (recommended approach)
 */
export const GlobalStatusFunctions: Story = {
  render: () => (
    <Stack gap="lg">
      <div className="p-4 bg-paper-100 rounded-lg">
        <Text weight="medium" className="mb-2">Recommended: Use StatusBar Functions</Text>
        <Text size="sm" className="text-ink-600 mb-4">
          These functions work globally and display in the StatusBar component.
          Include StatusBar in your layout to see these messages.
        </Text>
        <pre className="text-xs bg-paper-200 p-3 rounded overflow-x-auto">
{`import { addSuccessMessage, addErrorMessage } from 'notebook-ui';

// Call from anywhere:
addSuccessMessage('Changes saved');
addErrorMessage('Failed to save');`}
        </pre>
      </div>

      <Stack direction="horizontal" gap="sm" wrap>
        <Button
          variant="outline"
          onClick={() => addSuccessMessage('Changes saved successfully!')}
        >
          Success Message
        </Button>
        <Button
          variant="outline"
          onClick={() => addErrorMessage('Failed to save changes')}
        >
          Error Message
        </Button>
        <Button
          variant="outline"
          onClick={() => addWarningMessage('This action cannot be undone')}
        >
          Warning Message
        </Button>
        <Button
          variant="outline"
          onClick={() => addInfoMessage('New version available')}
        >
          Info Message
        </Button>
      </Stack>

      <Text size="sm" className="text-ink-500">
        Note: Messages appear in the StatusBar component. 
        If you don't see them, add a StatusBar to your layout.
      </Text>
    </Stack>
  ),
};

/**
 * Long content handling
 */
export const LongContent: Story = {
  render: () => (
    <Stack gap="md">
      <Toast
        id="long-title"
        type="warning"
        title="This is a very long title that might wrap to multiple lines in the toast"
        message="Short message."
        duration={999999}
        onClose={() => {}}
      />
      <Toast
        id="long-message"
        type="info"
        title="Long Message"
        message="This is a much longer message that contains a lot of information. It demonstrates how the toast component handles longer content that might need to wrap across multiple lines while still maintaining readability and proper formatting."
        duration={999999}
        onClose={() => {}}
      />
    </Stack>
  ),
};

/**
 * Stacked toasts (multiple at once)
 */
export const StackedToasts: Story = {
  render: () => {
    const [toasts, setToasts] = useState<ToastProps[]>([
      { id: '1', type: 'success', title: 'First toast', message: 'This appeared first.', duration: 999999, onClose: () => {} },
      { id: '2', type: 'info', title: 'Second toast', message: 'This appeared second.', duration: 999999, onClose: () => {} },
      { id: '3', type: 'warning', title: 'Third toast', message: 'This appeared third.', duration: 999999, onClose: () => {} },
    ]);

    const handleClose = (id: string) => {
      setToasts(prev => prev.filter(t => t.id !== id));
    };

    const addMore = () => {
      setToasts(prev => [...prev, {
        id: generateId(),
        type: ['success', 'error', 'warning', 'info'][Math.floor(Math.random() * 4)] as ToastType,
        title: 'New toast',
        message: 'Another toast has been added.',
        duration: 5000,
        onClose: () => {},
      }]);
    };

    return (
      <>
        <Stack gap="md">
          <Button onClick={addMore}>Add Another Toast</Button>
          <Text size="sm" className="text-ink-500">
            {toasts.length} toast(s) visible
          </Text>
        </Stack>
        <ToastContainer toasts={toasts} onClose={handleClose} position="top-right" />
      </>
    );
  },
};

/**
 * Real-world example: Form submission
 */
export const FormSubmissionExample: Story = {
  render: () => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleClose = (id: string) => {
      setToasts(prev => prev.filter(t => t.id !== id));
    };

    const simulateSubmit = async (success: boolean) => {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitting(false);
      
      if (success) {
        setToasts(prev => [...prev, {
          id: generateId(),
          type: 'success',
          title: 'Form submitted',
          message: 'Your data has been saved successfully.',
          duration: 5000,
          onClose: () => {},
        }]);
      } else {
        setToasts(prev => [...prev, {
          id: generateId(),
          type: 'error',
          title: 'Submission failed',
          message: 'Could not save your data. Please try again.',
          duration: 5000,
          onClose: () => {},
          action: {
            label: 'Retry',
            onClick: () => simulateSubmit(true),
          },
        }]);
      }
    };

    return (
      <>
        <Stack gap="md" className="max-w-sm">
          <Text weight="medium">Simulated Form Submission</Text>
          <Stack direction="horizontal" gap="sm">
            <Button
              onClick={() => simulateSubmit(true)}
              loading={isSubmitting}
            >
              Submit (Success)
            </Button>
            <Button
              variant="outline"
              onClick={() => simulateSubmit(false)}
              loading={isSubmitting}
            >
              Submit (Fail)
            </Button>
          </Stack>
        </Stack>
        <ToastContainer toasts={toasts} onClose={handleClose} position="top-right" />
      </>
    );
  },
};
