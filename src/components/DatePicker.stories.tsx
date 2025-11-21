import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DatePicker from './DatePicker';

const meta = {
  title: 'Forms/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Date picker component with calendar dropdown, date constraints, and validation.

## Features
- **Calendar popup**: Month/year navigation with visual date selection
- **Date constraints**: Min/max date ranges to restrict selectable dates
- **Disabled dates**: Support array or function to disable specific dates
- **Locale-aware**: Configurable locale and format (short, medium, long)
- **Validation states**: error, success, warning with colored borders
- **Quick actions**: Today and clear buttons for convenience
- **Keyboard navigation**: Escape to close, Enter to open
- **Sizes**: sm, md, lg with consistent height scaling

## Usage

\`\`\`tsx
import { DatePicker } from 'notebook-ui';

<DatePicker
  label="Start Date"
  value={startDate}
  onChange={setStartDate}
  minDate={new Date()}
  required
  helperText="Select a date from today onwards"
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the input',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      description: 'Selected date value',
      table: {
        type: { summary: 'Date | null' },
      },
    },
    onChange: {
      description: 'Callback fired when date changes',
      table: {
        type: { summary: '(date: Date | null) => void' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no date selected',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Select date"' },
      },
    },
    minDate: {
      description: 'Minimum selectable date (dates before this are disabled)',
      table: {
        type: { summary: 'Date' },
      },
    },
    maxDate: {
      description: 'Maximum selectable date (dates after this are disabled)',
      table: {
        type: { summary: 'Date' },
      },
    },
    disabledDates: {
      description: 'Disabled dates - can be array of dates or function returning boolean',
      table: {
        type: { summary: 'Date[] | ((date: Date) => boolean)' },
      },
    },
    locale: {
      control: 'text',
      description: 'Locale string for date formatting (e.g., "en-US", "fr-FR")',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"en-US"' },
      },
    },
    format: {
      control: 'select',
      options: ['short', 'medium', 'long'],
      description: 'Date display format style',
      table: {
        type: { summary: 'short | medium | long' },
        defaultValue: { summary: '"medium"' },
      },
    },
    validationState: {
      control: 'select',
      options: ['error', 'success', 'warning', null],
      description: 'Visual validation state with colored border',
      table: {
        type: { summary: 'error | success | warning | null' },
      },
    },
    validationMessage: {
      control: 'text',
      description: 'Validation message shown below input',
      table: {
        type: { summary: 'string' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below input',
      table: {
        type: { summary: 'string' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Mark field as required with red asterisk',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the date picker',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showTodayButton: {
      control: 'boolean',
      description: 'Show "Today" button in calendar footer',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showClearButton: {
      control: 'boolean',
      description: 'Show clear button to reset date',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Input size affecting height and padding',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
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
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return <DatePicker value={date} onChange={setDate} />;
  },
};

export const WithLabel: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return <DatePicker value={date} onChange={setDate} label="Select Date" />;
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        label="Appointment Date"
        placeholder="Choose a date"
      />
    );
  },
};

export const WithDefaultValue: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        label="Meeting Date"
      />
    );
  },
};

export const Required: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        label="Birth Date"
        required
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    value: new Date(),
    label: 'Disabled Date',
    disabled: true,
  },
};

export const WithMinDate: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const today = new Date();
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        label="Future Date Only"
        minDate={today}
        helperText="Select a date from today onwards"
      />
    );
  },
};

export const WithMaxDate: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const today = new Date();
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        label="Past Date Only"
        maxDate={today}
        helperText="Select a date up to today"
      />
    );
  },
};

export const DateRange: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const minDate = new Date(2024, 0, 1);
    const maxDate = new Date(2024, 11, 31);
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        label="Date in 2024"
        minDate={minDate}
        maxDate={maxDate}
        helperText="Select any date within 2024"
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        label="Event Date"
        error="Please select a valid date"
      />
    );
  },
};

export const SmallSize: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        label="Compact Date"
        size="sm"
      />
    );
  },
};

export const LargeSize: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        label="Large Date"
        size="lg"
      />
    );
  },
};

export const BookingForm: Story = {
  render: () => {
    const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
    const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
    const today = new Date();

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
          Hotel Booking
        </h3>
        <DatePicker
          value={checkIn}
          onChange={(date) => {
            setCheckIn(date);
            if (checkOut && date && date >= checkOut) {
              setCheckOut(undefined);
            }
          }}
          label="Check-in Date"
          minDate={today}
          required
        />
        <DatePicker
          value={checkOut}
          onChange={setCheckOut}
          label="Check-out Date"
          minDate={checkIn || today}
          disabled={!checkIn}
          required
          helperText="Select check-in date first"
        />
        {checkIn && checkOut && (
          <div style={{ padding: '1rem', backgroundColor: '#f5f5f4', borderRadius: '0.375rem' }}>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
              Duration: {Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} nights
            </div>
          </div>
        )}
      </div>
    );
  },
};

export const BirthdayPicker: Story = {
  render: () => {
    const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
    const maxDate = new Date();
    const minDate = new Date(1900, 0, 1);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <DatePicker
          value={birthDate}
          onChange={setBirthDate}
          label="Date of Birth"
          maxDate={maxDate}
          minDate={minDate}
          required
          helperText="You must be 18 years or older"
        />
        {birthDate && (
          <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
            Age: {Math.floor((maxDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25))} years
          </div>
        )}
      </div>
    );
  },
};

export const EventScheduler: Story = {
  render: () => {
    const [eventDate, setEventDate] = useState<Date | undefined>(undefined);
    const today = new Date();
    const oneYearFromNow = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Schedule Event</h3>
        <DatePicker
          value={eventDate}
          onChange={setEventDate}
          label="Event Date"
          minDate={today}
          maxDate={oneYearFromNow}
          required
          helperText="Events can be scheduled up to one year in advance"
        />
        {eventDate && (
          <div style={{
            padding: '1rem',
            backgroundColor: '#eff6ff',
            border: '1px solid #3b82f6',
            borderRadius: '0.375rem'
          }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>
              Selected: {eventDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
              {Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))} days from now
            </div>
          </div>
        )}
      </div>
    );
  },
};

export const DeadlinePicker: Story = {
  render: () => {
    const [deadline, setDeadline] = useState<Date | undefined>(undefined);
    const today = new Date();

    const isUrgent = deadline && (deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) <= 7;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <DatePicker
          value={deadline}
          onChange={setDeadline}
          label="Project Deadline"
          minDate={today}
          required
        />
        {deadline && (
          <div style={{
            padding: '0.75rem',
            backgroundColor: isUrgent ? '#fef2f2' : '#f0fdf4',
            border: `1px solid ${isUrgent ? '#ef4444' : '#10b981'}`,
            borderRadius: '0.375rem',
            fontSize: '0.875rem'
          }}>
            {isUrgent ? '⚠️ Urgent deadline within 7 days' : '✓ Deadline set'}
          </div>
        )}
      </div>
    );
  },
};
