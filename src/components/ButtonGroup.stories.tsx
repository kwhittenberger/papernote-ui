import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ButtonGroup, { ButtonGroupOption } from './ButtonGroup';
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline, Grid3x3, List, LayoutGrid } from 'lucide-react';

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Toggle button group for single or multiple selection.

## Features
- **Selection modes**: Single (radio) or multiple (checkbox) selection
- **Icons**: Optional icon support for each button
- **Sizes**: sm, md, lg with consistent spacing
- **Full width**: Stretch buttons to container width
- **Disabled states**: Disable individual buttons or entire group
- **Tooltips**: Hover tooltips for additional context
- **Accessible**: Proper ARIA roles and keyboard navigation

## Usage

\`\`\`tsx
import { ButtonGroup, ButtonGroupOption } from 'notebook-ui';
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

{/* Single select */}
const alignmentOptions: ButtonGroupOption[] = [
  { value: 'left', label: 'Left', icon: AlignLeft },
  { value: 'center', label: 'Center', icon: AlignCenter },
  { value: 'right', label: 'Right', icon: AlignRight },
];

<ButtonGroup
  label="Text Alignment"
  options={alignmentOptions}
  value={alignment}
  onChange={setAlignment}
  size="md"
/>

{/* Multiple select */}
<ButtonGroup
  label="Features"
  options={features}
  values={selectedFeatures}
  onChangeMultiple={setSelectedFeatures}
  multiple
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: 'Array of button options with value, label, optional icon, disabled state, and tooltip',
      table: {
        type: { summary: 'ButtonGroupOption[]' },
      },
    },
    value: {
      control: 'text',
      description: 'Selected value for single-select mode',
      table: {
        type: { summary: 'string' },
      },
    },
    values: {
      description: 'Selected values array for multi-select mode',
      table: {
        type: { summary: 'string[]' },
      },
    },
    onChange: {
      description: 'Callback fired when selection changes (single-select)',
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
    onChangeMultiple: {
      description: 'Callback fired when selection changes (multi-select)',
      table: {
        type: { summary: '(values: string[]) => void' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Enable multiple selection mode',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'Label displayed above button group',
      table: {
        type: { summary: 'string' },
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
    fullWidth: {
      control: 'boolean',
      description: 'Make buttons stretch to full container width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the entire button group',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
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
