import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Checkbox from './Checkbox';
import { FileText, Image, Music, Video } from 'lucide-react';

const meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ minWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
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
