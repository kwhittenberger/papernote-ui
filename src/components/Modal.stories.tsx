import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal, { ModalFooter } from './Modal';
import Button from './Button';
import Input from './Input';

const meta = {
  title: 'Feedback/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Centered modal dialog with backdrop overlay for focused user interactions.

## Features
- **Sizes**: sm, md, lg, xl, full for different content needs
- **Animations**: scale (default), slide-up, slide-down, fade, none
- **Escape key**: Close on Escape press
- **Backdrop click**: Close when clicking outside modal
- **Body scroll lock**: Prevents background scrolling when open
- **Accessible**: Proper ARIA attributes and focus management
- **ModalFooter**: Companion component for action buttons

## Usage

\`\`\`tsx
import { Modal, ModalFooter } from 'notebook-ui';
import { Button } from 'notebook-ui';

const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  size="md"
>
  <p>Are you sure you want to proceed?</p>
  <ModalFooter>
    <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
    <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
  </ModalFooter>
</Modal>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls modal visibility',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onClose: {
      description: 'Callback when modal should close (backdrop click, Escape key, or X button)',
      table: {
        type: { summary: '() => void' },
      },
    },
    title: {
      control: 'text',
      description: 'Modal title displayed in header',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Modal width (sm: 448px, md: 512px, lg: 672px, xl: 896px, full: 1280px)',
      table: {
        type: { summary: 'sm | md | lg | xl | full' },
        defaultValue: { summary: 'md' },
      },
    },
    animation: {
      control: 'select',
      options: ['scale', 'slide-up', 'slide-down', 'fade', 'none'],
      description: 'Animation variant for modal entrance',
      table: {
        type: { summary: 'scale | slide-up | slide-down | fade | none' },
        defaultValue: { summary: 'scale' },
      },
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show X button in header',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title">
          <p>This is the modal content. You can put any content here.</p>
        </Modal>
      </>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal with Footer</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm Action">
          <p>Are you sure you want to proceed with this action?</p>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>Confirm</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const Small: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Small Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Small Modal" size="sm">
          <p>This is a small modal.</p>
        </Modal>
      </>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Large Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Large Modal" size="lg">
          <p>This is a large modal with more space for content.</p>
          <p style={{ marginTop: '1rem' }}>You can add more detailed information here.</p>
        </Modal>
      </>
    );
  },
};

export const ExtraLarge: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open XL Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Extra Large Modal" size="xl">
          <p>This is an extra large modal for complex content.</p>
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f4', borderRadius: '0.375rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>Example Section</h4>
            <p>With plenty of space for detailed information.</p>
          </div>
        </Modal>
      </>
    );
  },
};

export const FullSize: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Full Size Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Full Size Modal" size="full">
          <p>This modal uses the maximum available width.</p>
          <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ padding: '1rem', backgroundColor: '#f5f5f4', borderRadius: '0.375rem' }}>
                <h4>Column {i}</h4>
                <p>Content for column {i}</p>
              </div>
            ))}
          </div>
        </Modal>
      </>
    );
  },
};

export const FormModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Create New User</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Create New User">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Input label="Full Name" placeholder="Enter full name" required />
            <Input label="Email" type="email" placeholder="user@example.com" required />
            <Input label="Password" type="password" placeholder="Create password" required />
          </div>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>Create User</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const SlideUpAnimation: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Slide Up Animation</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Slide Up" animation="slide-up">
          <p>This modal slides up from the bottom.</p>
        </Modal>
      </>
    );
  },
};

export const SlideDownAnimation: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Slide Down Animation</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Slide Down" animation="slide-down">
          <p>This modal slides down from the top.</p>
        </Modal>
      </>
    );
  },
};

export const FadeAnimation: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Fade Animation</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Fade" animation="fade">
          <p>This modal fades in.</p>
        </Modal>
      </>
    );
  },
};

export const NoCloseButton: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Modal Without Close Button</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="No Close Button" showCloseButton={false}>
          <p>This modal doesn't have a close button in the header.</p>
          <p style={{ marginTop: '0.5rem' }}>You must use the footer buttons to close it.</p>
          <ModalFooter>
            <Button variant="primary" onClick={() => setIsOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const TextSelectionTest: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Test Text Selection</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Text Selection Test">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              padding: '1rem',
              backgroundColor: '#dbeafe',
              border: '1px solid #3b82f6',
              borderRadius: '0.375rem'
            }}>
              <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.875rem', color: '#1e40af' }}>
                ✅ Bug Fix Test: Text Selection
              </h4>
              <p style={{ fontSize: '0.875rem' }}>
                Try selecting text in the input fields below by clicking and dragging <strong>outside</strong> the modal boundaries.
                The modal should <strong>NOT</strong> close when you release the mouse button outside.
              </p>
            </div>
            <Input
              label="Full Name"
              placeholder="Try selecting this text and dragging outside the modal"
              defaultValue="John Smith - Drag to select and move mouse outside modal bounds"
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="user@example.com"
              defaultValue="test.user@example.com - Select text here too"
            />
            <Input
              label="Company"
              placeholder="Company name"
              defaultValue="This is a long company name that you can select by dragging"
            />
            <div style={{
              padding: '0.75rem',
              backgroundColor: '#fef3c7',
              border: '1px solid #f59e0b',
              borderRadius: '0.375rem',
              fontSize: '0.875rem'
            }}>
              <strong>Test Instructions:</strong>
              <ol style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Click and hold inside any input field</li>
                <li>While holding, drag your mouse outside the modal</li>
                <li>Release the mouse button while outside</li>
                <li>Modal should remain open! ✅</li>
              </ol>
            </div>
          </div>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>Save</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

// Mobile-optimized stories
export const MobileSlideUp: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'On mobile devices, slide-up animation feels natural like a native bottom sheet, ideal for mobile modals.',
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Mobile Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Mobile Modal"
          animation="slide-up"
          size="lg"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p>This modal slides up from the bottom, which feels natural on mobile devices.</p>
            <Input
              label="Email"
              type="email"
              inputMode="email"
              enterKeyHint="next"
              size="lg"
              placeholder="you@example.com"
            />
          </div>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>Save</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const MobileFormModal: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Mobile form modal with touch-friendly inputs (size="lg") and appropriate keyboard hints.',
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Add Contact</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Add New Contact"
          animation="slide-up"
          size="lg"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Input
              label="Full Name"
              size="lg"
              enterKeyHint="next"
              placeholder="John Smith"
              required
            />
            <Input
              label="Phone Number"
              type="tel"
              inputMode="tel"
              enterKeyHint="next"
              size="lg"
              placeholder="(555) 123-4567"
            />
            <Input
              label="Email"
              type="email"
              inputMode="email"
              enterKeyHint="done"
              size="lg"
              placeholder="john@example.com"
            />
          </div>
          <ModalFooter>
            <Button variant="ghost" size="lg" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button variant="primary" size="lg" onClick={() => setIsOpen(false)}>Save Contact</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const MobileConfirmation: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Small confirmation modal on mobile with scale animation and touch-friendly buttons.',
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant="danger" onClick={() => setIsOpen(true)}>Delete Item</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Delete Item?"
          animation="scale"
          size="sm"
        >
          <p style={{ marginBottom: '1rem' }}>
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
          <ModalFooter>
            <Button variant="ghost" size="lg" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button variant="danger" size="lg" onClick={() => setIsOpen(false)}>Delete</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const MobileFullScreen: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Full-screen modal on mobile for complex content that needs maximum space.',
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>View Details</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Product Details"
          animation="slide-up"
          size="full"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ backgroundColor: '#f5f5f4', padding: '3rem', borderRadius: '0.5rem', textAlign: 'center' }}>
              [Product Image]
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Product Name</h3>
            <p style={{ color: '#666' }}>$99.99</p>
            <p>
              This is a detailed product description that takes advantage of the full-screen
              modal on mobile devices to show comprehensive information.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h4 style={{ fontWeight: 600 }}>Features:</h4>
              <ul style={{ marginLeft: '1.5rem' }}>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </div>
          </div>
          <ModalFooter>
            <Button variant="ghost" size="lg" onClick={() => setIsOpen(false)}>Close</Button>
            <Button variant="primary" size="lg" onClick={() => setIsOpen(false)}>Add to Cart</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};
