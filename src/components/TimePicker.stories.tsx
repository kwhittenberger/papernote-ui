import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import TimePicker from './TimePicker';

const meta = {
  title: 'Forms/TimePicker',
  component: TimePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Time selection input with dropdown picker supporting 12/24-hour formats, time ranges, and custom intervals.

## Features
- **Format support**: 12-hour (AM/PM) or 24-hour military time
- **Time ranges**: Set minimum and maximum allowed times
- **Custom intervals**: Define minute increments (e.g., 15, 30 minutes)
- **Sizes**: sm, md, lg input sizes
- **Validation**: Built-in error state and messages
- **Keyboard input**: Type times directly or use dropdown
- **Helper text**: Additional context below input

## Usage

\`\`\`tsx
import { TimePicker } from 'notebook-ui';

<TimePicker
  value={time}
  onChange={setTime}
  label="Meeting Time"
  format="12"
  minTime="09:00"
  maxTime="17:00"
  interval={15}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Current time value in HH:MM format',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: 'Callback when time changes',
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text displayed above input',
      table: {
        type: { summary: 'string' },
      },
    },
    format: {
      control: 'select',
      options: ['12', '24'],
      description: 'Time format - 12-hour with AM/PM or 24-hour military',
      table: {
        type: { summary: '12 | 24' },
        defaultValue: { summary: '12' },
      },
    },
    minTime: {
      control: 'text',
      description: 'Minimum selectable time in HH:MM format',
      table: {
        type: { summary: 'string' },
      },
    },
    maxTime: {
      control: 'text',
      description: 'Maximum selectable time in HH:MM format',
      table: {
        type: { summary: 'string' },
      },
    },
    interval: {
      control: 'number',
      description: 'Minute interval for time options (e.g., 15 = quarters)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '30' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Input size',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
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
    error: {
      control: 'text',
      description: 'Error message (overrides helperText)',
      table: {
        type: { summary: 'string' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Mark as required field',
      table: {
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
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
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} />;
  },
};

export const WithLabel: Story = {
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} label="Select Time" />;
  },
};

export const WithDefaultValue: Story = {
  render: () => {
    const [time, setTime] = useState<string>('14:30');
    return <TimePicker value={time} onChange={setTime} label="Meeting Time" />;
  },
};

export const TwelveHourFormat: Story = {
  render: () => {
    const [time, setTime] = useState<string>('');
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        label="Appointment Time"
        format="12"
      />
    );
  },
};

export const TwentyFourHourFormat: Story = {
  render: () => {
    const [time, setTime] = useState<string>('');
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        label="Military Time"
        format="24"
      />
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const [time, setTime] = useState<string>('');
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        label="Start Time"
        placeholder="Select a time"
      />
    );
  },
};

export const Required: Story = {
  render: () => {
    const [time, setTime] = useState<string>('');
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        label="Required Time"
        required
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    value: '09:00',
    label: 'Disabled Time',
    disabled: true,
  },
};

export const WithMinTime: Story = {
  render: () => {
    const [time, setTime] = useState<string>('');
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        label="After 9 AM"
        minTime="09:00"
        helperText="Business hours start at 9 AM"
      />
    );
  },
};

export const WithMaxTime: Story = {
  render: () => {
    const [time, setTime] = useState<string>('');
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        label="Before 5 PM"
        maxTime="17:00"
        helperText="Business hours end at 5 PM"
      />
    );
  },
};

export const TimeRange: Story = {
  render: () => {
    const [time, setTime] = useState<string>('');
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        label="Business Hours"
        minTime="09:00"
        maxTime="17:00"
        helperText="Select a time between 9 AM and 5 PM"
      />
    );
  },
};

export const WithInterval: Story = {
  render: () => {
    const [time, setTime] = useState<string>('');
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        label="Appointment Slot"
        interval={15}
        helperText="Available in 15-minute intervals"
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [time, setTime] = useState<string>('');
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        label="Time"
        error="Please select a valid time"
      />
    );
  },
};

export const SmallSize: Story = {
  render: () => {
    const [time, setTime] = useState<string>('');
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        label="Compact Time"
        size="sm"
      />
    );
  },
};

export const LargeSize: Story = {
  render: () => {
    const [time, setTime] = useState<string>('');
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        label="Large Time"
        size="lg"
      />
    );
  },
};

export const AppointmentScheduler: Story = {
  render: () => {
    const [startTime, setStartTime] = useState<string>('');
    const [endTime, setEndTime] = useState<string>('');

    const calculateDuration = () => {
      if (!startTime || !endTime) return null;
      const [startHour, startMin] = startTime.split(':').map(Number);
      const [endHour, endMin] = endTime.split(':').map(Number);
      const startMinutes = startHour * 60 + startMin;
      const endMinutes = endHour * 60 + endMin;
      const diff = endMinutes - startMinutes;
      if (diff <= 0) return null;
      const hours = Math.floor(diff / 60);
      const minutes = diff % 60;
      return `${hours}h ${minutes}m`;
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Schedule Appointment</h3>
        <TimePicker
          value={startTime}
          onChange={setStartTime}
          label="Start Time"
          minTime="09:00"
          maxTime="17:00"
          interval={15}
          required
        />
        <TimePicker
          value={endTime}
          onChange={setEndTime}
          label="End Time"
          minTime={startTime || "09:00"}
          maxTime="17:00"
          interval={15}
          disabled={!startTime}
          required
        />
        {calculateDuration() && (
          <div style={{ padding: '1rem', backgroundColor: '#f5f5f4', borderRadius: '0.375rem' }}>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
              Duration: {calculateDuration()}
            </div>
          </div>
        )}
      </div>
    );
  },
};

export const ShiftScheduler: Story = {
  render: () => {
    const [shift, setShift] = useState<string>('');

    const shifts = [
      { value: '06:00', label: 'Morning Shift (6 AM - 2 PM)' },
      { value: '14:00', label: 'Afternoon Shift (2 PM - 10 PM)' },
      { value: '22:00', label: 'Night Shift (10 PM - 6 AM)' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Select Your Shift</h3>
        <TimePicker
          value={shift}
          onChange={setShift}
          label="Shift Start Time"
          interval={480}
          helperText="Choose from available shift times"
        />
        {shift && (
          <div style={{ padding: '1rem', backgroundColor: '#eff6ff', border: '1px solid #3b82f6', borderRadius: '0.375rem' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>
              {shifts.find(s => s.value === shift)?.label || 'Custom shift time'}
            </div>
          </div>
        )}
      </div>
    );
  },
};

export const ReminderTime: Story = {
  render: () => {
    const [reminderTime, setReminderTime] = useState<string>('09:00');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Daily Reminder</h3>
        <TimePicker
          value={reminderTime}
          onChange={setReminderTime}
          label="Reminder Time"
          format="12"
          interval={30}
        />
        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
          You'll receive a daily reminder at {reminderTime}
        </div>
      </div>
    );
  },
};

export const MeetingPlanner: Story = {
  render: () => {
    const [meetingTime, setMeetingTime] = useState<string>('');
    const [preparationTime, setPreparationTime] = useState<number>(30);

    const calculateStartTime = () => {
      if (!meetingTime) return null;
      const [hour, minute] = meetingTime.split(':').map(Number);
      const totalMinutes = hour * 60 + minute - preparationTime;
      const startHour = Math.floor(totalMinutes / 60);
      const startMinute = totalMinutes % 60;
      return `${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}`;
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Plan Your Meeting</h3>
        <TimePicker
          value={meetingTime}
          onChange={setMeetingTime}
          label="Meeting Time"
          minTime="09:00"
          maxTime="17:00"
          interval={15}
          required
        />
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
            Preparation Time (minutes)
          </label>
          <select
            value={preparationTime}
            onChange={(e) => setPreparationTime(Number(e.target.value))}
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              border: '1px solid #e5e5e5',
              borderRadius: '0.375rem',
              fontSize: '0.875rem'
            }}
          >
            <option value={15}>15 minutes</option>
            <option value={30}>30 minutes</option>
            <option value={45}>45 minutes</option>
            <option value={60}>1 hour</option>
          </select>
        </div>
        {meetingTime && calculateStartTime() && (
          <div style={{ padding: '1rem', backgroundColor: '#f0fdf4', border: '1px solid #10b981', borderRadius: '0.375rem' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>
              Start preparing at: {calculateStartTime()}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
              Meeting starts at: {meetingTime}
            </div>
          </div>
        )}
      </div>
    );
  },
};
