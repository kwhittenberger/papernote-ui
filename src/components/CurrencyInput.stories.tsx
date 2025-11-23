import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CurrencyInput from './CurrencyInput';

const meta = {
  title: 'Forms/CurrencyInput',
  component: CurrencyInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Specialized input component for monetary values with automatic currency formatting.

## Features
- **Auto-formatting**: Formats currency with proper symbols and thousands separators
- **Smart parsing**: Handles user input gracefully, removing invalid characters
- **Multiple currencies**: Supports any currency code (USD, EUR, GBP, etc.)
- **Localization**: Respects locale for number formatting
- **Validation**: Built-in min/max value constraints
- **Negative values**: Optional support for negative amounts
- **Precision control**: Configurable decimal places

## Usage

\`\`\`tsx
import { CurrencyInput } from 'notebook-ui';

const [price, setPrice] = useState<number | null>(1234.56);

<CurrencyInput
  label="Price"
  value={price}
  onChange={setPrice}
  currency="USD"
  precision={2}
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
      description: 'Numeric value (unformatted)',
      table: {
        type: { summary: 'number | string' },
      },
    },
    onChange: {
      description: 'Callback when value changes (receives numeric value)',
      table: {
        type: { summary: '(value: number | null) => void' },
      },
    },
    currency: {
      control: 'text',
      description: 'Currency code (ISO 4217)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'USD' },
      },
    },
    locale: {
      control: 'text',
      description: 'Locale for formatting',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'en-US' },
      },
    },
    precision: {
      control: 'number',
      description: 'Number of decimal places',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '2' },
      },
    },
    allowNegative: {
      control: 'boolean',
      description: 'Allow negative values',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    min: {
      control: 'number',
      description: 'Minimum allowed value',
      table: {
        type: { summary: 'number' },
      },
    },
    max: {
      control: 'number',
      description: 'Maximum allowed value',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} satisfies Meta<typeof CurrencyInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(1234.56);
    return (
      <div style={{ width: '300px' }}>
        <CurrencyInput
          label="Price"
          value={value}
          onChange={setValue}
          helperText="Enter the product price"
        />
        <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
          Current value: {value !== null ? `$${value.toFixed(2)}` : 'null'}
        </div>
      </div>
    );
  },
};

export const WithValidation: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(150);
    const max = 100;
    const hasError = value !== null && value > max;

    return (
      <div style={{ width: '300px' }}>
        <CurrencyInput
          label="Budget"
          value={value}
          onChange={setValue}
          max={max}
          validationState={hasError ? 'error' : value !== null && value > 0 ? 'success' : null}
          validationMessage={hasError ? `Exceeds maximum budget of $${max}` : value !== null && value > 0 ? 'Within budget' : ''}
        />
      </div>
    );
  },
};

export const DifferentCurrencies: Story = {
  render: () => {
    const [usd, setUsd] = useState<number | null>(1234.56);
    const [eur, setEur] = useState<number | null>(1234.56);
    const [gbp, setGbp] = useState<number | null>(1234.56);
    const [jpy, setJpy] = useState<number | null>(123456);

    return (
      <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <CurrencyInput
          label="US Dollars"
          value={usd}
          onChange={setUsd}
          currency="USD"
          locale="en-US"
        />
        <CurrencyInput
          label="Euros"
          value={eur}
          onChange={setEur}
          currency="EUR"
          locale="de-DE"
        />
        <CurrencyInput
          label="British Pounds"
          value={gbp}
          onChange={setGbp}
          currency="GBP"
          locale="en-GB"
        />
        <CurrencyInput
          label="Japanese Yen"
          value={jpy}
          onChange={setJpy}
          currency="JPY"
          locale="ja-JP"
          precision={0}
        />
      </div>
    );
  },
};

export const WithNegativeValues: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(-500.75);
    return (
      <div style={{ width: '300px' }}>
        <CurrencyInput
          label="Profit/Loss"
          value={value}
          onChange={setValue}
          allowNegative
          helperText="Negative values allowed for losses"
        />
        <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
          Current value: {value !== null ? `$${value.toFixed(2)}` : 'null'}
        </div>
      </div>
    );
  },
};

export const WithMinMax: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(50);
    const min = 10;
    const max = 100;

    return (
      <div style={{ width: '300px' }}>
        <CurrencyInput
          label="Amount"
          value={value}
          onChange={setValue}
          min={min}
          max={max}
          helperText={`Min: $${min}, Max: $${max}`}
        />
        <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
          Current value: {value !== null ? `$${value.toFixed(2)}` : 'null'}
        </div>
      </div>
    );
  },
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(null);
    const hasError = value === null;

    return (
      <div style={{ width: '300px' }}>
        <CurrencyInput
          label="Donation Amount"
          value={value}
          onChange={setValue}
          required
          validationState={hasError ? 'error' : 'success'}
          validationMessage={hasError ? 'Amount is required' : 'Thank you!'}
        />
      </div>
    );
  },
};

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(1234.56);
    return (
      <div style={{ width: '300px' }}>
        <CurrencyInput
          label="Price"
          value={value}
          onChange={setValue}
          clearable
          onClear={() => setValue(null)}
          helperText="Click X to clear the value"
        />
        <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
          Current value: {value !== null ? `$${value.toFixed(2)}` : 'null'}
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <CurrencyInput
        label="Price"
        value={1234.56}
        onChange={() => {}}
        disabled
        helperText="This field is disabled"
      />
    </div>
  ),
};
