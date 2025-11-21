import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Textarea from './Textarea';

const meta = {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ minWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Textarea
        label="Description"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter description..."
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('This is some initial text content that demonstrates how the textarea displays pre-filled content.');
    return (
      <Textarea
        label="Bio"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Textarea
        label="Message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        placeholder="Enter your message..."
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Textarea
        label="Comments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error="This field is required"
      />
    );
  },
};

export const WithHelperText: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Textarea
        label="Feedback"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="Please provide detailed feedback (min 50 characters)"
        placeholder="Your feedback..."
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <Textarea
        label="Disabled Textarea"
        value="This textarea is disabled"
        onChange={() => {}}
        disabled
      />
    );
  },
};

export const ReadOnly: Story = {
  render: () => {
    return (
      <Textarea
        label="Read Only"
        value="This content is read-only and cannot be edited."
        onChange={() => {}}
        readOnly
      />
    );
  },
};

export const CustomRows: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Textarea
        label="Large Text Area"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={8}
        placeholder="This textarea has 8 rows..."
      />
    );
  },
};

export const AutoExpand: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Textarea
        label="Auto-expanding"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoExpand
        placeholder="Type multiple lines and watch this textarea grow automatically..."
      />
    );
  },
};

export const ResizeNone: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Textarea
        label="No Resize"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        resize="none"
        placeholder="This textarea cannot be resized"
      />
    );
  },
};

export const ResizeHorizontal: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Textarea
        label="Horizontal Resize"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        resize="horizontal"
        placeholder="This textarea can only be resized horizontally"
      />
    );
  },
};

export const ResizeBoth: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Textarea
        label="Resize Both Directions"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        resize="both"
        placeholder="This textarea can be resized in both directions"
      />
    );
  },
};

export const CharacterCount: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const maxLength = 200;
    return (
      <div>
        <Textarea
          label="Comment"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your comment (max 200 characters)..."
          maxLength={maxLength}
        />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#64748b', textAlign: 'right' }}>
          {value.length} / {maxLength}
        </div>
      </div>
    );
  },
};

export const CommentForm: Story = {
  render: () => {
    const [comment, setComment] = useState('');
    const handleSubmit = () => {
      alert(`Submitted: ${comment}`);
      setComment('');
    };
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Textarea
          label="Add a Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          placeholder="Share your thoughts..."
          helperText="Be respectful and constructive"
        />
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
          <button
            onClick={() => setComment('')}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #e5e5e5',
              borderRadius: '0.375rem',
              background: 'white',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!comment.trim()}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '0.375rem',
              background: comment.trim() ? '#3b82f6' : '#e5e5e5',
              color: 'white',
              cursor: comment.trim() ? 'pointer' : 'not-allowed',
            }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  },
};
