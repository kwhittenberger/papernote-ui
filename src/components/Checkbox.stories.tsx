import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Checkbox from './Checkbox';
import { FileText, Image, Music, Video } from 'lucide-react';

const meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Checkbox input component for binary selection with optional labels, descriptions, and icons.

## Features
- **Sizes**: sm, md, lg with consistent scaling
- **Label & Description**: Optional text content
- **Icons**: Display icons next to label
- **Indeterminate state**: Partial selection indicator
- **Keyboard navigation**: Space key support
- **Disabled state**: Visual and functional disabling
- **Accessible**: Proper ARIA attributes and focus management

## Usage

\`\`\`tsx
import { Checkbox } from 'notebook-ui';
import { FileText } from 'lucide-react';

<Checkbox
  checked={agreed}
  onChange={setAgreed}
  label="I agree to the terms and conditions"
  icon={<FileText className="h-4 w-4" />}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Checkbox checked state',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      description: 'Callback when checkbox state changes',
      table: {
        type: { summary: '(checked: boolean) => void' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text next to checkbox',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'Additional description text below label',
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      description: 'Icon to display next to label',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Checkbox size',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Show indeterminate/partial selection state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the checkbox',
      table: {
        type: { summary: 'boolean' },
      },
    },
    name: {
      control: 'text',
      description: 'HTML name attribute for form submission',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onChange={setChecked} />;
  },
};

export const WithLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onChange={setChecked} label="I agree to the terms and conditions" />;
  },
};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Checkbox checked={checked} onChange={setChecked} label="Subscribed to newsletter" />;
  },
};

export const Disabled: Story = {
  render: () => {
    return <Checkbox checked={false} onChange={() => {}} disabled label="Disabled checkbox" />;
  },
};

export const DisabledChecked: Story = {
  render: () => {
    return <Checkbox checked={true} onChange={() => {}} disabled label="Disabled (checked)" />;
  },
};

export const WithIcon: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        checked={checked}
        onChange={setChecked}
        label="Accept terms and conditions"
        icon={<FileText className="h-4 w-4" />}
      />
    );
  },
};

export const Small: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onChange={setChecked} size="sm" label="Small checkbox" />;
  },
};

export const Large: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onChange={setChecked} size="lg" label="Large checkbox" />;
  },
};

export const CheckboxGroup: Story = {
  render: () => {
    const [preferences, setPreferences] = useState({
      notifications: true,
      emails: false,
      updates: true,
      marketing: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h4 style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Email Preferences</h4>
        <Checkbox
          checked={preferences.notifications}
          onChange={(checked) => setPreferences({ ...preferences, notifications: checked })}
          label="Notification emails"
        />
        <Checkbox
          checked={preferences.emails}
          onChange={(checked) => setPreferences({ ...preferences, emails: checked })}
          label="Account emails"
        />
        <Checkbox
          checked={preferences.updates}
          onChange={(checked) => setPreferences({ ...preferences, updates: checked })}
          label="Product updates"
        />
        <Checkbox
          checked={preferences.marketing}
          onChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
          label="Marketing emails"
        />
      </div>
    );
  },
};

export const FileTypes: Story = {
  render: () => {
    const [selected, setSelected] = useState({
      documents: false,
      images: false,
      audio: false,
      video: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h4 style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Select File Types</h4>
        <Checkbox
          checked={selected.documents}
          onChange={(checked) => setSelected({ ...selected, documents: checked })}
          label="Documents (.pdf, .doc, .txt)"
          icon={<FileText className="h-4 w-4" />}
        />
        <Checkbox
          checked={selected.images}
          onChange={(checked) => setSelected({ ...selected, images: checked })}
          label="Images (.jpg, .png, .gif)"
          icon={<Image className="h-4 w-4" />}
        />
        <Checkbox
          checked={selected.audio}
          onChange={(checked) => setSelected({ ...selected, audio: checked })}
          label="Audio (.mp3, .wav, .flac)"
          icon={<Music className="h-4 w-4" />}
        />
        <Checkbox
          checked={selected.video}
          onChange={(checked) => setSelected({ ...selected, video: checked })}
          label="Video (.mp4, .avi, .mov)"
          icon={<Video className="h-4 w-4" />}
        />
      </div>
    );
  },
};

export const SelectAll: Story = {
  render: () => {
    const [items, setItems] = useState({
      item1: false,
      item2: false,
      item3: false,
      item4: false,
    });

    const allChecked = Object.values(items).every(Boolean);
    const someChecked = Object.values(items).some(Boolean) && !allChecked;

    const handleSelectAll = (checked: boolean) => {
      setItems({
        item1: checked,
        item2: checked,
        item3: checked,
        item4: checked,
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <Checkbox
          checked={allChecked}
          onChange={handleSelectAll}
          label="Select All"
          style={{ fontWeight: 600 }}
        />
        <div style={{ marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Checkbox
            checked={items.item1}
            onChange={(checked) => setItems({ ...items, item1: checked })}
            label="Item 1"
          />
          <Checkbox
            checked={items.item2}
            onChange={(checked) => setItems({ ...items, item2: checked })}
            label="Item 2"
          />
          <Checkbox
            checked={items.item3}
            onChange={(checked) => setItems({ ...items, item3: checked })}
            label="Item 3"
          />
          <Checkbox
            checked={items.item4}
            onChange={(checked) => setItems({ ...items, item4: checked })}
            label="Item 4"
          />
        </div>
      </div>
    );
  },
};

// Mobile-optimized stories
export const MobileLargeTouch: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Large size (lg) checkbox provides 44px minimum touch target height for mobile devices, meeting Apple HIG guidelines.',
      },
    },
  },
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        checked={checked}
        onChange={setChecked}
        size="lg"
        label="Touch-friendly checkbox with 44px target"
      />
    );
  },
};

export const MobilePreferencesList: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Mobile settings list with large touch targets and icons for easy interaction.',
      },
    },
  },
  render: () => {
    const [prefs, setPrefs] = useState({
      notifications: true,
      sounds: false,
      location: true,
      analytics: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', padding: '1rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem' }}>Settings</h3>
        <Checkbox
          checked={prefs.notifications}
          onChange={(checked) => setPrefs({ ...prefs, notifications: checked })}
          size="lg"
          label="Push Notifications"
        />
        <Checkbox
          checked={prefs.sounds}
          onChange={(checked) => setPrefs({ ...prefs, sounds: checked })}
          size="lg"
          label="Sound Effects"
        />
        <Checkbox
          checked={prefs.location}
          onChange={(checked) => setPrefs({ ...prefs, location: checked })}
          size="lg"
          label="Location Services"
        />
        <Checkbox
          checked={prefs.analytics}
          onChange={(checked) => setPrefs({ ...prefs, analytics: checked })}
          size="lg"
          label="Analytics Sharing"
        />
      </div>
    );
  },
};

export const MobileFileTypeSelector: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Mobile file type selector with icons and large touch targets.',
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState({
      documents: true,
      images: true,
      audio: false,
      video: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', padding: '1rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem' }}>Include File Types</h3>
        <Checkbox
          checked={selected.documents}
          onChange={(checked) => setSelected({ ...selected, documents: checked })}
          size="lg"
          label="Documents"
          icon={<FileText className="h-5 w-5" />}
        />
        <Checkbox
          checked={selected.images}
          onChange={(checked) => setSelected({ ...selected, images: checked })}
          size="lg"
          label="Images"
          icon={<Image className="h-5 w-5" />}
        />
        <Checkbox
          checked={selected.audio}
          onChange={(checked) => setSelected({ ...selected, audio: checked })}
          size="lg"
          label="Audio"
          icon={<Music className="h-5 w-5" />}
        />
        <Checkbox
          checked={selected.video}
          onChange={(checked) => setSelected({ ...selected, video: checked })}
          size="lg"
          label="Video"
          icon={<Video className="h-5 w-5" />}
        />
      </div>
    );
  },
};

export const MobileTermsAgreement: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Mobile terms agreement with easy-to-tap checkbox for form submissions.',
      },
    },
  },
  render: () => {
    const [agreed, setAgreed] = useState(false);
    const [newsletter, setNewsletter] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Complete Your Signup</h3>
        <Checkbox
          checked={agreed}
          onChange={setAgreed}
          size="lg"
          label="I agree to the Terms of Service and Privacy Policy"
          icon={<FileText className="h-5 w-5" />}
        />
        <Checkbox
          checked={newsletter}
          onChange={setNewsletter}
          size="lg"
          label="Subscribe to our newsletter for updates"
        />
        <p style={{ fontSize: '0.75rem', color: '#666' }}>
          Large touch targets make it easy to check on mobile
        </p>
      </div>
    );
  },
};
