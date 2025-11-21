import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DatePicker from './DatePicker';

const meta = {
  title: 'Forms/DatePicker',
  component: DatePicker,
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
