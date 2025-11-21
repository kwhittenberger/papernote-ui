import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Slider from './Slider';

const meta = {
  title: 'Forms/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Interactive range slider for numeric value selection with keyboard navigation and custom formatting.

## Features
- **Keyboard navigation**: Arrow keys, Home, End for precise control
- **Min/max display**: Optionally show range boundaries
- **Value display**: Show current value with custom formatting
- **Color variants**: primary, success, warning, error
- **Sizes**: sm, md, lg with proportional track/thumb sizing
- **Custom steps**: Define increment intervals
- **Helper text**: Additional guidance below slider

## Usage

\`\`\`tsx
import { Slider } from 'notebook-ui';

<Slider
  value={volume}
  onChange={setVolume}
  min={0}
  max={100}
  label="Volume"
  showValue
  formatValue={(val) => \`\${val}%\`}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'Current slider value',
      table: {
        type: { summary: 'number' },
      },
    },
    onChange: {
      description: 'Callback when value changes',
      table: {
        type: { summary: '(value: number) => void' },
      },
    },
    min: {
      control: 'number',
      description: 'Minimum value',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: 'number',
      description: 'Maximum value',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    step: {
      control: 'number',
      description: 'Increment step size',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Slider size affecting track height and thumb size',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error'],
      description: 'Color variant for filled track and thumb',
      table: {
        type: { summary: 'primary | success | warning | error' },
        defaultValue: { summary: 'primary' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text displayed above slider',
      table: {
        type: { summary: 'string' },
      },
    },
    showValue: {
      control: 'boolean',
      description: 'Display current value',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showMinMax: {
      control: 'boolean',
      description: 'Display min and max values',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    formatValue: {
      description: 'Function to format displayed value (e.g., add % or $)',
      table: {
        type: { summary: '(value: number) => string' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below slider',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the slider',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '400px', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
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
