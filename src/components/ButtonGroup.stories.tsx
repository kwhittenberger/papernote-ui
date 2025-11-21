import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ButtonGroup, { ButtonGroupOption } from './ButtonGroup';
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline, Grid3x3, List, LayoutGrid } from 'lucide-react';

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicOptions: ButtonGroupOption[] = [
  { value: 'first', label: 'First' },
  { value: 'second', label: 'Second' },
  { value: 'third', label: 'Third' },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('first');
    return <ButtonGroup options={basicOptions} value={value} onChange={setValue} />;
  },
};

export const WithIcons: Story = {
  render: () => {
    const [alignment, setAlignment] = useState('left');

    const options: ButtonGroupOption[] = [
      { value: 'left', label: 'Left', icon: AlignLeft },
      { value: 'center', label: 'Center', icon: AlignCenter },
      { value: 'right', label: 'Right', icon: AlignRight },
    ];

    return (
      <ButtonGroup
        label="Text Alignment"
        options={options}
        value={alignment}
        onChange={setAlignment}
      />
    );
  },
};

export const IconOnly: Story = {
  render: () => {
    const [alignment, setAlignment] = useState('left');

    const options: ButtonGroupOption[] = [
      { value: 'left', label: '', icon: AlignLeft, tooltip: 'Align Left' },
      { value: 'center', label: '', icon: AlignCenter, tooltip: 'Align Center' },
      { value: 'right', label: '', icon: AlignRight, tooltip: 'Align Right' },
    ];

    return <ButtonGroup options={options} value={alignment} onChange={setAlignment} />;
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [formats, setFormats] = useState<string[]>(['bold']);

    const options: ButtonGroupOption[] = [
      { value: 'bold', label: 'Bold', icon: Bold },
      { value: 'italic', label: 'Italic', icon: Italic },
      { value: 'underline', label: 'Underline', icon: Underline },
    ];

    return (
      <ButtonGroup
        label="Text Formatting"
        options={options}
        values={formats}
        onChangeMultiple={setFormats}
        multiple
      />
    );
  },
};

export const ViewSwitcher: Story = {
  render: () => {
    const [view, setView] = useState('grid');

    const options: ButtonGroupOption[] = [
      { value: 'list', label: 'List', icon: List },
      { value: 'grid', label: 'Grid', icon: Grid3x3 },
      { value: 'compact', label: 'Compact', icon: LayoutGrid },
    ];

    return <ButtonGroup options={options} value={view} onChange={setView} />;
  },
};

export const SmallSize: Story = {
  render: () => {
    const [value, setValue] = useState('first');
    return <ButtonGroup options={basicOptions} value={value} onChange={setValue} size="sm" />;
  },
};

export const LargeSize: Story = {
  render: () => {
    const [value, setValue] = useState('first');
    return <ButtonGroup options={basicOptions} value={value} onChange={setValue} size="lg" />;
  },
};

export const WithDisabled: Story = {
  render: () => {
    const [value, setValue] = useState('first');

    const options: ButtonGroupOption[] = [
      { value: 'first', label: 'Enabled' },
      { value: 'second', label: 'Disabled', disabled: true },
      { value: 'third', label: 'Enabled' },
    ];

    return <ButtonGroup options={options} value={value} onChange={setValue} />;
  },
};

export const FullyDisabled: Story = {
  render: () => {
    const [value, setValue] = useState('first');
    return <ButtonGroup options={basicOptions} value={value} onChange={setValue} disabled />;
  },
};

export const FullWidth: Story = {
  render: () => {
    const [value, setValue] = useState('first');
    return (
      <div style={{ width: '400px' }}>
        <ButtonGroup options={basicOptions} value={value} onChange={setValue} fullWidth />
      </div>
    );
  },
};

export const DayOfWeek: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['mon', 'wed', 'fri']);

    const days: ButtonGroupOption[] = [
      { value: 'mon', label: 'M', tooltip: 'Monday' },
      { value: 'tue', label: 'T', tooltip: 'Tuesday' },
      { value: 'wed', label: 'W', tooltip: 'Wednesday' },
      { value: 'thu', label: 'T', tooltip: 'Thursday' },
      { value: 'fri', label: 'F', tooltip: 'Friday' },
      { value: 'sat', label: 'S', tooltip: 'Saturday' },
      { value: 'sun', label: 'S', tooltip: 'Sunday' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <ButtonGroup
          label="Select Days"
          options={days}
          values={selected}
          onChangeMultiple={setSelected}
          multiple
        />
        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
          Selected: {selected.length === 0 ? 'None' : selected.join(', ')}
        </div>
      </div>
    );
  },
};

export const ColorPicker: Story = {
  render: () => {
    const [color, setColor] = useState('#3b82f6');

    const colors: ButtonGroupOption[] = [
      { value: '#ef4444', label: '', tooltip: 'Red' },
      { value: '#f59e0b', label: '', tooltip: 'Orange' },
      { value: '#10b981', label: '', tooltip: 'Green' },
      { value: '#3b82f6', label: '', tooltip: 'Blue' },
      { value: '#8b5cf6', label: '', tooltip: 'Purple' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <div className="inline-flex" role="radiogroup">
          {colors.map(c => (
            <button
              key={c.value}
              type="button"
              onClick={() => setColor(c.value)}
              title={c.tooltip}
              className={`
                px-4 py-2 border border-paper-300 transition-colors
                ${c.value === colors[0].value ? 'rounded-l-md' : '-ml-px'}
                ${c.value === colors[colors.length - 1].value ? 'rounded-r-md' : ''}
                ${color === c.value
                  ? 'bg-primary-500 border-primary-500 z-10'
                  : 'bg-white hover:bg-paper-50'
                }
              `}
            >
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: c.value }} />
            </button>
          ))}
        </div>
        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
          Selected: {colors.find(c => c.value === color)?.tooltip}
        </div>
      </div>
    );
  },
};
