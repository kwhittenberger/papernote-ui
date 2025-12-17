import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Button from './Button';
import { Save, Trash, Plus, Download } from 'lucide-react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Interactive button component with multiple variants, sizes, icons, loading states, and notification badges.

## Features
- **Variants**: primary, secondary, ghost, danger, outline
- **Sizes**: sm, md, lg
- **Icons**: Support for left/right positioned icons
- **Loading state**: Shows spinner and disables interaction
- **Badge**: Display notification counts in top-right corner
- **Icon-only mode**: Square buttons with just icons
- **Full width**: Stretch to container width

## Usage

\`\`\`tsx
import { Button } from 'notebook-ui';
import { Save } from 'lucide-react';

<Button variant="primary" icon={<Save />}>
  Save Changes
</Button>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'outline'],
      description: 'Visual style variant of the button',
      table: {
        type: { summary: 'primary | secondary | ghost | danger | outline' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner and disable interaction',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
      table: {
        type: { summary: 'boolean' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make button take full width of container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconOnly: {
      control: 'boolean',
      description: 'Icon-only mode - renders square button with just icon (no text padding)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      description: 'Icon to display alongside button text',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the icon relative to text',
      table: {
        type: { summary: 'left | right' },
        defaultValue: { summary: 'left' },
      },
    },
    badge: {
      description: 'Badge content (number or text) displayed in top-right corner',
      table: {
        type: { summary: 'number | string' },
      },
    },
    badgeVariant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error'],
      description: 'Badge color variant',
      table: {
        type: { summary: 'primary | success | warning | error' },
        defaultValue: { summary: 'error' },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    icon: <Save className="h-4 w-4" />,
    iconPosition: 'left',
    children: 'Save Changes',
  },
};

export const IconRight: Story = {
  args: {
    variant: 'primary',
    icon: <Download className="h-4 w-4" />,
    iconPosition: 'right',
    children: 'Download',
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'primary',
    iconOnly: true,
    children: <Plus className="h-4 w-4" />,
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    children: 'Loading...',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const WithBadge: Story = {
  args: {
    variant: 'primary',
    badge: 5,
    badgeVariant: 'error',
    children: 'Messages',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Button',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
  ),
};

export const SuccessAnimation: Story = {
  args: {
    variant: 'primary',
    showSuccess: true,
    children: 'Saved!',
  },
};

export const SaveWithSuccess: Story = {
  render: () => {
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleSave = async () => {
      setSaving(true);
      setSaved(false);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSaving(false);
      setSaved(true);
      
      // Reset after animation completes
      setTimeout(() => setSaved(false), 1500);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
        <Button
          variant="primary"
          icon={<Save />}
          loading={saving}
          showSuccess={saved}
          onClick={handleSave}
        >
          Save Changes
        </Button>
        <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
          Click to simulate save with success animation
        </p>
      </div>
    );
  },
};

export const SuccessAnimationVariants: Story = {
  render: () => {
    const [successStates, setSuccessStates] = useState<Record<string, boolean>>({});

    const triggerSuccess = (key: string) => {
      setSuccessStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setSuccessStates(prev => ({ ...prev, [key]: false }));
      }, 1500);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>
          Click any button to see the success animation
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button
            variant="primary"
            showSuccess={successStates['primary']}
            onClick={() => triggerSuccess('primary')}
          >
            Primary
          </Button>
          <Button
            variant="secondary"
            showSuccess={successStates['secondary']}
            onClick={() => triggerSuccess('secondary')}
          >
            Secondary
          </Button>
          <Button
            variant="outline"
            showSuccess={successStates['outline']}
            onClick={() => triggerSuccess('outline')}
          >
            Outline
          </Button>
          <Button
            variant="ghost"
            showSuccess={successStates['ghost']}
            onClick={() => triggerSuccess('ghost')}
          >
            Ghost
          </Button>
        </div>
      </div>
    );
  },
};
