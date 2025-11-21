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
