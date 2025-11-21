import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Textarea from './Textarea';

const meta = {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Multi-line text input component with validation, character counting, and auto-expansion.

## Features
- **Auto-expand**: Automatically grow height based on content
- **Resize control**: none, vertical, horizontal, both
- **Character counter**: Display current/max length
- **Validation states**: error, success, warning with icons
- **Helper text**: Additional context below textarea
- **Custom rows**: Control initial height
- **Min/Max rows**: Constrain auto-expansion bounds

## Usage

\`\`\`tsx
import { Textarea } from 'notebook-ui';

<Textarea
  label="Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  autoExpand
  maxLength={500}
  showCharCount
  helperText="Provide a detailed description"
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text above textarea',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when textarea is empty',
      table: {
        type: { summary: 'string' },
      },
    },
    rows: {
      control: 'number',
      description: 'Initial number of visible text rows',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '4' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below textarea',
      table: {
        type: { summary: 'string' },
      },
    },
    validationState: {
      control: 'select',
      options: ['error', 'success', 'warning', null],
      description: 'Visual validation state with colored border',
      table: {
        type: { summary: 'error | success | warning | null' },
      },
    },
    validationMessage: {
      control: 'text',
      description: 'Validation message (overrides helperText when present)',
      table: {
        type: { summary: 'string' },
      },
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length',
      table: {
        type: { summary: 'number' },
      },
    },
    showCharCount: {
      control: 'boolean',
      description: 'Show character counter',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    autoExpand: {
      control: 'boolean',
      description: 'Auto-expand textarea height based on content',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    minRows: {
      control: 'number',
      description: 'Minimum rows when auto-expanding',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '2' },
      },
    },
    maxRows: {
      control: 'number',
      description: 'Maximum rows when auto-expanding',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
      },
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Resize behavior (overridden to none when autoExpand is true)',
      table: {
        type: { summary: 'none | vertical | horizontal | both' },
        defaultValue: { summary: 'vertical' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Mark textarea as required with red asterisk',
      table: {
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the textarea',
      table: {
        type: { summary: 'boolean' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Make textarea read-only',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
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
