import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ColorPicker from './ColorPicker';

const meta = {
  title: 'Forms/ColorPicker',
  component: ColorPicker,
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
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [color, setColor] = useState('#3B82F6');
    return <ColorPicker value={color} onChange={setColor} />;
  },
};

export const WithLabel: Story = {
  render: () => {
    const [color, setColor] = useState('#3B82F6');
    return <ColorPicker value={color} onChange={setColor} label="Choose Color" />;
  },
};

export const WithHelperText: Story = {
  render: () => {
    const [color, setColor] = useState('#3B82F6');
    return (
      <ColorPicker
        value={color}
        onChange={setColor}
        label="Brand Color"
        helperText="Select your primary brand color"
      />
    );
  },
};

export const CustomPresets: Story = {
  render: () => {
    const [color, setColor] = useState('#FF6B6B');
    const customPresets = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
      '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B195', '#C06C84',
    ];
    return (
      <ColorPicker
        value={color}
        onChange={setColor}
        label="Pastel Colors"
        presets={customPresets}
      />
    );
  },
};

export const BrandColors: Story = {
  render: () => {
    const [color, setColor] = useState('#0066CC');
    const brandPresets = [
      '#0066CC', '#00AA66', '#FF9900', '#CC0000', '#6600CC',
      '#0099CC', '#33CC33', '#FFCC00', '#FF3300', '#9933FF',
    ];
    return (
      <ColorPicker
        value={color}
        onChange={setColor}
        label="Brand Palette"
        presets={brandPresets}
        helperText="Choose from approved brand colors"
      />
    );
  },
};

export const GrayscalePresets: Story = {
  render: () => {
    const [color, setColor] = useState('#808080');
    const grayscalePresets = [
      '#000000', '#1A1A1A', '#333333', '#4D4D4D', '#666666',
      '#808080', '#999999', '#B3B3B3', '#CCCCCC', '#E6E6E6',
      '#F2F2F2', '#FFFFFF',
    ];
    return (
      <ColorPicker
        value={color}
        onChange={setColor}
        label="Grayscale"
        presets={grayscalePresets}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    value: '#3B82F6',
    label: 'Disabled Color Picker',
    disabled: true,
  },
};

export const ThemeCustomizer: Story = {
  render: () => {
    const [theme, setTheme] = useState({
      primary: '#3B82F6',
      secondary: '#8B5CF6',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Theme Colors</h3>
        <ColorPicker
          value={theme.primary}
          onChange={(color) => setTheme({ ...theme, primary: color })}
          label="Primary Color"
        />
        <ColorPicker
          value={theme.secondary}
          onChange={(color) => setTheme({ ...theme, secondary: color })}
          label="Secondary Color"
        />
        <ColorPicker
          value={theme.success}
          onChange={(color) => setTheme({ ...theme, success: color })}
          label="Success Color"
        />
        <ColorPicker
          value={theme.warning}
          onChange={(color) => setTheme({ ...theme, warning: color })}
          label="Warning Color"
        />
        <ColorPicker
          value={theme.error}
          onChange={(color) => setTheme({ ...theme, error: color })}
          label="Error Color"
        />
        <div style={{
          padding: '1.5rem',
          backgroundColor: '#f5f5f4',
          borderRadius: '0.5rem',
          marginTop: '1rem'
        }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
            Theme Preview
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.75rem' }}>
            {Object.entries(theme).map(([name, color]) => (
              <div key={name} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '100%',
                    height: '60px',
                    backgroundColor: color,
                    borderRadius: '0.375rem',
                    marginBottom: '0.5rem'
                  }}
                />
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'capitalize' }}>
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

export const BackgroundColorPicker: Story = {
  render: () => {
    const [bgColor, setBgColor] = useState('#FFFFFF');
    const [textColor, setTextColor] = useState('#000000');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Design Tool</h3>
        <ColorPicker
          value={bgColor}
          onChange={setBgColor}
          label="Background Color"
        />
        <ColorPicker
          value={textColor}
          onChange={setTextColor}
          label="Text Color"
        />
        <div style={{
          padding: '2rem',
          backgroundColor: bgColor,
          color: textColor,
          borderRadius: '0.5rem',
          border: '1px solid #e5e5e5',
          textAlign: 'center',
          fontSize: '1.125rem',
          fontWeight: 500,
          transition: 'all 0.2s'
        }}>
          Sample Text Preview
        </div>
      </div>
    );
  },
};

export const ChartColorPicker: Story = {
  render: () => {
    const [colors, setColors] = useState([
      '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'
    ]);

    const updateColor = (index: number, color: string) => {
      const newColors = [...colors];
      newColors[index] = color;
      setColors(newColors);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Chart Series Colors</h3>
        {colors.map((color, index) => (
          <ColorPicker
            key={index}
            value={color}
            onChange={(newColor) => updateColor(index, newColor)}
            label={`Series ${index + 1}`}
          />
        ))}
        <div style={{
          padding: '1.5rem',
          backgroundColor: '#f5f5f4',
          borderRadius: '0.5rem'
        }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
            Chart Preview
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', height: '150px', alignItems: 'flex-end' }}>
            {colors.map((color, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  height: `${(index + 1) * 20}%`,
                  backgroundColor: color,
                  borderRadius: '0.25rem 0.25rem 0 0'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  },
};

export const StatusColors: Story = {
  render: () => {
    const [statusColors, setStatusColors] = useState({
      active: '#10B981',
      pending: '#F59E0B',
      inactive: '#6B7280',
      error: '#EF4444',
    });

    const statuses = [
      { key: 'active', label: 'Active', count: 24 },
      { key: 'pending', label: 'Pending', count: 7 },
      { key: 'inactive', label: 'Inactive', count: 12 },
      { key: 'error', label: 'Error', count: 3 },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Status Color Configuration</h3>
        {Object.entries(statusColors).map(([status, color]) => (
          <ColorPicker
            key={status}
            value={color}
            onChange={(newColor) => setStatusColors({ ...statusColors, [status]: newColor })}
            label={`${status.charAt(0).toUpperCase() + status.slice(1)} Status`}
          />
        ))}
        <div style={{
          padding: '1.5rem',
          backgroundColor: '#f5f5f4',
          borderRadius: '0.5rem'
        }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
            Status Dashboard
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {statuses.map(({ key, label, count }) => (
              <div
                key={key}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.75rem',
                  backgroundColor: 'white',
                  borderRadius: '0.375rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: statusColors[key as keyof typeof statusColors]
                    }}
                  />
                  <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{label}</span>
                </div>
                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

export const HighlightColorPicker: Story = {
  render: () => {
    const [highlightColor, setHighlightColor] = useState('#FFEB3B');
    const [text] = useState('This is important text that needs to be highlighted for emphasis.');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Text Highlighter</h3>
        <ColorPicker
          value={highlightColor}
          onChange={setHighlightColor}
          label="Highlight Color"
          presets={[
            '#FFEB3B', '#FFC107', '#FF9800', '#8BC34A', '#4CAF50',
            '#00BCD4', '#03A9F4', '#E91E63', '#9C27B0', '#F44336',
          ]}
        />
        <div style={{
          padding: '1.5rem',
          backgroundColor: '#f5f5f4',
          borderRadius: '0.5rem'
        }}>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
            {text.split(' ').map((word, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: i % 3 === 0 ? highlightColor : 'transparent',
                  padding: i % 3 === 0 ? '0.125rem 0.25rem' : '0',
                  borderRadius: '0.125rem'
                }}
              >
                {word}{' '}
              </span>
            ))}
          </p>
        </div>
      </div>
    );
  },
};
