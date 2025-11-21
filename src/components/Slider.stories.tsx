import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Slider from './Slider';

const meta = {
  title: 'Forms/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ minWidth: '400px', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error'],
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return <Slider value={value} onChange={setValue} />;
  },
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState(75);
    return <Slider value={value} onChange={setValue} label="Volume" />;
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState(60);
    return <Slider value={value} onChange={setValue} label="Brightness" showValue />;
  },
};

export const WithMinMax: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return <Slider value={value} onChange={setValue} label="Temperature" showMinMax />;
  },
};

export const CustomRange: Story = {
  render: () => {
    const [value, setValue] = useState(20);
    return (
      <Slider
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        label="Price Range"
        showValue
        showMinMax
      />
    );
  },
};

export const WithStep: Story = {
  render: () => {
    const [value, setValue] = useState(25);
    return (
      <Slider
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        step={25}
        label="Quality"
        showValue
        showMinMax
      />
    );
  },
};

export const Small: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return <Slider value={value} onChange={setValue} size="sm" label="Small Slider" />;
  },
};

export const Large: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return <Slider value={value} onChange={setValue} size="lg" label="Large Slider" />;
  },
};

export const SuccessColor: Story = {
  render: () => {
    const [value, setValue] = useState(80);
    return <Slider value={value} onChange={setValue} color="success" label="Success" showValue />;
  },
};

export const WarningColor: Story = {
  render: () => {
    const [value, setValue] = useState(60);
    return <Slider value={value} onChange={setValue} color="warning" label="Warning" showValue />;
  },
};

export const ErrorColor: Story = {
  render: () => {
    const [value, setValue] = useState(30);
    return <Slider value={value} onChange={setValue} color="error" label="Error" showValue />;
  },
};

export const WithHelperText: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return (
      <Slider
        value={value}
        onChange={setValue}
        label="Volume"
        helperText="Adjust the volume level"
        showValue
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    value: 50,
    disabled: true,
    label: 'Disabled Slider',
  },
};

export const CustomFormatter: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return (
      <Slider
        value={value}
        onChange={setValue}
        label="Volume"
        showValue
        formatValue={(val) => `${val}%`}
      />
    );
  },
};

export const PriceRange: Story = {
  render: () => {
    const [value, setValue] = useState(500);
    return (
      <Slider
        value={value}
        onChange={setValue}
        min={0}
        max={1000}
        step={50}
        label="Maximum Price"
        showValue
        showMinMax
        formatValue={(val) => `$${val}`}
      />
    );
  },
};

export const MultipleSliders: Story = {
  render: () => {
    const [volume, setVolume] = useState(70);
    const [brightness, setBrightness] = useState(80);
    const [contrast, setContrast] = useState(50);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
        <Slider
          value={volume}
          onChange={setVolume}
          label="Volume"
          showValue
          formatValue={(val) => `${val}%`}
          color="primary"
        />
        <Slider
          value={brightness}
          onChange={setBrightness}
          label="Brightness"
          showValue
          formatValue={(val) => `${val}%`}
          color="warning"
        />
        <Slider
          value={contrast}
          onChange={setContrast}
          label="Contrast"
          showValue
          formatValue={(val) => `${val}%`}
          color="success"
        />
      </div>
    );
  },
};

export const SettingsPanel: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      volume: 75,
      brightness: 80,
      textSize: 16,
      animationSpeed: 500,
    });

    return (
      <div style={{ width: '500px', padding: '1.5rem', border: '1px solid #e5e5e5', borderRadius: '0.5rem' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Display Settings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <Slider
            value={settings.volume}
            onChange={(val) => setSettings({ ...settings, volume: val })}
            label="System Volume"
            min={0}
            max={100}
            showValue
            showMinMax
            formatValue={(val) => `${val}%`}
          />
          <Slider
            value={settings.brightness}
            onChange={(val) => setSettings({ ...settings, brightness: val })}
            label="Screen Brightness"
            min={0}
            max={100}
            showValue
            showMinMax
            formatValue={(val) => `${val}%`}
            color="warning"
          />
          <Slider
            value={settings.textSize}
            onChange={(val) => setSettings({ ...settings, textSize: val })}
            label="Text Size"
            min={12}
            max={24}
            step={2}
            showValue
            showMinMax
            formatValue={(val) => `${val}px`}
          />
          <Slider
            value={settings.animationSpeed}
            onChange={(val) => setSettings({ ...settings, animationSpeed: val })}
            label="Animation Speed"
            min={100}
            max={1000}
            step={100}
            showValue
            showMinMax
            formatValue={(val) => `${val}ms`}
            color="success"
          />
        </div>
      </div>
    );
  },
};
