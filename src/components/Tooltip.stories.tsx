import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';
import Button from './Button';
import { Info, HelpCircle, Settings, Trash } from 'lucide-react';

const meta = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Simple hover tooltip for providing contextual help and additional information.

## Features
- **Positioning**: top, bottom, left, right relative to trigger
- **Hover activation**: Appears on mouse enter, hides on exit
- **Custom delay**: Configurable show delay in milliseconds
- **Text-only**: Designed for simple text content (use Popover for rich content)
- **Auto-positioning**: Arrow points to trigger element
- **Portal rendering**: Proper z-index handling

## Usage

\`\`\`tsx
import { Tooltip, Button } from 'notebook-ui';

<Tooltip content="Click to save changes" position="top">
  <Button>Save</Button>
</Tooltip>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip text content',
      table: {
        type: { summary: 'string' },
      },
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Tooltip position relative to trigger',
      table: {
        type: { summary: 'top | bottom | left | right' },
        defaultValue: { summary: 'top' },
      },
    },
    delay: {
      control: 'number',
      description: 'Show delay in milliseconds',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '200' },
      },
    },
    children: {
      description: 'Trigger element that shows tooltip on hover',
      table: {
        type: { summary: 'React.ReactElement' },
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip content="This is a tooltip">
      <Button>Hover over me</Button>
    </Tooltip>
  ),
};

export const Top: Story = {
  render: () => (
    <Tooltip content="Tooltip on top" position="top">
      <Button>Top</Button>
    </Tooltip>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Tooltip content="Tooltip on bottom" position="bottom">
      <Button>Bottom</Button>
    </Tooltip>
  ),
};

export const Left: Story = {
  render: () => (
    <Tooltip content="Tooltip on left" position="left">
      <Button>Left</Button>
    </Tooltip>
  ),
};

export const Right: Story = {
  render: () => (
    <Tooltip content="Tooltip on right" position="right">
      <Button>Right</Button>
    </Tooltip>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <span>Need help?</span>
      <Tooltip content="Click for more information">
        <button style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#64748b',
          padding: '0.25rem',
        }}>
          <HelpCircle className="h-5 w-5" />
        </button>
      </Tooltip>
    </div>
  ),
};

export const LongText: Story = {
  render: () => (
    <Tooltip content="This is a longer tooltip message that demonstrates how tooltips handle multiple lines of text">
      <Button>Long tooltip</Button>
    </Tooltip>
  ),
};

export const CustomDelay: Story = {
  render: () => (
    <Tooltip content="This tooltip has a 500ms delay" delay={500}>
      <Button>Slower tooltip (500ms)</Button>
    </Tooltip>
  ),
};

export const InstantTooltip: Story = {
  render: () => (
    <Tooltip content="This tooltip appears instantly" delay={0}>
      <Button>Instant tooltip</Button>
    </Tooltip>
  ),
};

export const AllPositions: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '3rem',
      padding: '3rem',
    }}>
      <div></div>
      <Tooltip content="Top tooltip" position="top">
        <Button fullWidth>Top</Button>
      </Tooltip>
      <div></div>

      <Tooltip content="Left tooltip" position="left">
        <Button fullWidth>Left</Button>
      </Tooltip>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#64748b', fontSize: '0.875rem' }}>Hover over buttons</span>
      </div>
      <Tooltip content="Right tooltip" position="right">
        <Button fullWidth>Right</Button>
      </Tooltip>

      <div></div>
      <Tooltip content="Bottom tooltip" position="bottom">
        <Button fullWidth>Bottom</Button>
      </Tooltip>
      <div></div>
    </div>
  ),
};

export const IconButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Tooltip content="Information">
        <button style={{
          padding: '0.5rem',
          border: '1px solid #e5e5e5',
          borderRadius: '0.375rem',
          background: 'white',
          cursor: 'pointer',
        }}>
          <Info className="h-5 w-5" />
        </button>
      </Tooltip>

      <Tooltip content="Settings">
        <button style={{
          padding: '0.5rem',
          border: '1px solid #e5e5e5',
          borderRadius: '0.375rem',
          background: 'white',
          cursor: 'pointer',
        }}>
          <Settings className="h-5 w-5" />
        </button>
      </Tooltip>

      <Tooltip content="Delete" position="bottom">
        <button style={{
          padding: '0.5rem',
          border: '1px solid #e5e5e5',
          borderRadius: '0.375rem',
          background: 'white',
          cursor: 'pointer',
          color: '#ef4444',
        }}>
          <Trash className="h-5 w-5" />
        </button>
      </Tooltip>

      <Tooltip content="Help">
        <button style={{
          padding: '0.5rem',
          border: '1px solid #e5e5e5',
          borderRadius: '0.375rem',
          background: 'white',
          cursor: 'pointer',
        }}>
          <HelpCircle className="h-5 w-5" />
        </button>
      </Tooltip>
    </div>
  ),
};

export const FormFieldHelp: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
        Email Address
        <Tooltip content="We'll never share your email with anyone else">
          <Info className="h-4 w-4 text-ink-500" style={{ cursor: 'help' }} />
        </Tooltip>
      </label>
      <input
        type="email"
        placeholder="you@example.com"
        style={{
          width: '100%',
          padding: '0.5rem 0.75rem',
          border: '1px solid #e5e5e5',
          borderRadius: '0.375rem',
          fontSize: '0.875rem',
        }}
      />
    </div>
  ),
};
