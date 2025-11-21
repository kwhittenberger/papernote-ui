import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline } from 'lucide-react';

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

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </ButtonGroup>
  ),
};

export const WithIcons: Story = {
  render: () => {
    const [alignment, setAlignment] = useState('left');

    return (
      <ButtonGroup>
        <Button
          variant={alignment === 'left' ? 'primary' : 'outline'}
          onClick={() => setAlignment('left')}
        >
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button
          variant={alignment === 'center' ? 'primary' : 'outline'}
          onClick={() => setAlignment('center')}
        >
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button
          variant={alignment === 'right' ? 'primary' : 'outline'}
          onClick={() => setAlignment('right')}
        >
          <AlignRight className="h-4 w-4" />
        </Button>
      </ButtonGroup>
    );
  },
};

export const TextFormatting: Story = {
  render: () => {
    const [formats, setFormats] = useState<string[]>([]);

    const toggleFormat = (format: string) => {
      if (formats.includes(format)) {
        setFormats(formats.filter(f => f !== format));
      } else {
        setFormats([...formats, format]);
      }
    };

    return (
      <ButtonGroup>
        <Button
          variant={formats.includes('bold') ? 'primary' : 'outline'}
          onClick={() => toggleFormat('bold')}
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant={formats.includes('italic') ? 'primary' : 'outline'}
          onClick={() => toggleFormat('italic')}
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant={formats.includes('underline') ? 'primary' : 'outline'}
          onClick={() => toggleFormat('underline')}
        >
          <Underline className="h-4 w-4" />
        </Button>
      </ButtonGroup>
    );
  },
};

export const ViewSwitcher: Story = {
  render: () => {
    const [view, setView] = useState('grid');

    return (
      <ButtonGroup>
        <Button
          variant={view === 'list' ? 'primary' : 'outline'}
          onClick={() => setView('list')}
        >
          List
        </Button>
        <Button
          variant={view === 'grid' ? 'primary' : 'outline'}
          onClick={() => setView('grid')}
        >
          Grid
        </Button>
        <Button
          variant={view === 'compact' ? 'primary' : 'outline'}
          onClick={() => setView('compact')}
        >
          Compact
        </Button>
      </ButtonGroup>
    );
  },
};

export const SmallSize: Story = {
  render: () => (
    <ButtonGroup>
      <Button size="sm">Small</Button>
      <Button size="sm">Buttons</Button>
      <Button size="sm">Group</Button>
    </ButtonGroup>
  ),
};

export const LargeSize: Story = {
  render: () => (
    <ButtonGroup>
      <Button size="lg">Large</Button>
      <Button size="lg">Buttons</Button>
      <Button size="lg">Group</Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button>Top</Button>
      <Button>Middle</Button>
      <Button>Bottom</Button>
    </ButtonGroup>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Enabled</Button>
      <Button disabled>Disabled</Button>
      <Button>Enabled</Button>
    </ButtonGroup>
  ),
};

export const DayOfWeek: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['mon', 'wed', 'fri']);

    const days = [
      { id: 'mon', label: 'M' },
      { id: 'tue', label: 'T' },
      { id: 'wed', label: 'W' },
      { id: 'thu', label: 'T' },
      { id: 'fri', label: 'F' },
      { id: 'sat', label: 'S' },
      { id: 'sun', label: 'S' },
    ];

    const toggleDay = (dayId: string) => {
      if (selected.includes(dayId)) {
        setSelected(selected.filter(d => d !== dayId));
      } else {
        setSelected([...selected, dayId]);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <ButtonGroup>
          {days.map(day => (
            <Button
              key={day.id}
              variant={selected.includes(day.id) ? 'primary' : 'outline'}
              onClick={() => toggleDay(day.id)}
            >
              {day.label}
            </Button>
          ))}
        </ButtonGroup>
        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
          Selected: {selected.length === 0 ? 'None' : selected.map(d => days.find(day => day.id === d)?.label).join(', ')}
        </div>
      </div>
    );
  },
};

export const Pagination: Story = {
  render: () => {
    const [page, setPage] = useState(3);
    const totalPages = 5;

    return (
      <ButtonGroup>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <Button
            key={p}
            variant={page === p ? 'primary' : 'outline'}
            onClick={() => setPage(p)}
          >
            {p}
          </Button>
        ))}
        <Button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </ButtonGroup>
    );
  },
};

export const ColorPicker: Story = {
  render: () => {
    const [color, setColor] = useState('#3b82f6');

    const colors = [
      { value: '#ef4444', label: 'Red' },
      { value: '#f59e0b', label: 'Orange' },
      { value: '#10b981', label: 'Green' },
      { value: '#3b82f6', label: 'Blue' },
      { value: '#8b5cf6', label: 'Purple' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <ButtonGroup>
          {colors.map(c => (
            <Button
              key={c.value}
              variant={color === c.value ? 'primary' : 'outline'}
              onClick={() => setColor(c.value)}
            >
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: c.value }} />
            </Button>
          ))}
        </ButtonGroup>
        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
          Selected: {colors.find(c => c.value === color)?.label}
        </div>
      </div>
    );
  },
};
