import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Calendar, { CalendarEvent } from './Calendar';

const meta = {
  title: 'Forms/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ minWidth: '600px', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar value={date} onChange={setDate} />;
  },
};

export const WithEvents: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    const events: CalendarEvent[] = [
      { date: new Date(2025, 10, 15), title: 'Team Meeting', color: 'primary' },
      { date: new Date(2025, 10, 20), title: 'Project Deadline', color: 'error' },
      { date: new Date(2025, 10, 22), title: 'Review Session', color: 'warning' },
      { date: new Date(2025, 10, 25), title: 'Product Launch', color: 'success' },
    ];

    return (
      <Calendar
        value={date}
        onChange={setDate}
        events={events}
        onEventClick={(event) => alert(event.title)}
      />
    );
  },
};

export const RangeMode: Story = {
  render: () => {
    const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
      start: null,
      end: null,
    });

    return (
      <div>
        <Calendar
          rangeMode
          rangeValue={range}
          onRangeChange={setRange}
        />
        {range.start && range.end && (
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '0.375rem' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>
              Selected Range:
            </div>
            <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.25rem' }}>
              {range.start.toLocaleDateString()} - {range.end.toLocaleDateString()}
            </div>
          </div>
        )}
      </div>
    );
  },
};

export const WithMinMaxDate: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const today = new Date();
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);

    return (
      <Calendar
        value={date}
        onChange={setDate}
        minDate={today}
        maxDate={maxDate}
      />
    );
  },
};

export const WithWeekNumbers: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar value={date} onChange={setDate} showWeekNumbers />;
  },
};

export const MondayFirstDay: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar value={date} onChange={setDate} firstDayOfWeek={1} />;
  },
};

export const WithDisabledDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    const disabledDates = [
      new Date(2025, 10, 16),
      new Date(2025, 10, 17),
      new Date(2025, 10, 23),
      new Date(2025, 10, 24),
    ];

    return (
      <Calendar
        value={date}
        onChange={setDate}
        disabledDates={disabledDates}
      />
    );
  },
};

export const EventCalendar: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    const events: CalendarEvent[] = [
      { date: new Date(2025, 10, 14), title: 'Sprint Planning', color: 'primary' },
      { date: new Date(2025, 10, 15), title: 'Client Meeting', color: 'accent' },
      { date: new Date(2025, 10, 18), title: 'Code Review', color: 'primary' },
      { date: new Date(2025, 10, 20), title: 'Project Deadline', color: 'error' },
      { date: new Date(2025, 10, 21), title: 'Team Building', color: 'success' },
      { date: new Date(2025, 10, 25), title: 'Release Day', color: 'success' },
      { date: new Date(2025, 10, 27), title: 'Retrospective', color: 'warning' },
      { date: new Date(2025, 10, 28), title: 'All Hands Meeting', color: 'primary' },
    ];

    const selectedEvent = events.find(
      (event) =>
        date &&
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );

    return (
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>
          Team Calendar
        </h3>
        <Calendar
          value={date}
          onChange={setDate}
          events={events}
          onEventClick={(event) => setDate(event.date)}
        />
        {selectedEvent && (
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#eff6ff',
            borderRadius: '0.375rem',
            border: '1px solid #3b82f6'
          }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1e40af', marginBottom: '0.25rem' }}>
              {selectedEvent.title}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
              {date?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        )}
      </div>
    );
  },
};

export const VacationPlanner: Story = {
  render: () => {
    const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
      start: null,
      end: null,
    });

    const blockedDates = [
      new Date(2025, 10, 28),
      new Date(2025, 10, 29),
      new Date(2025, 11, 24),
      new Date(2025, 11, 25),
    ];

    const calculateDays = () => {
      if (!range.start || !range.end) return 0;
      const diff = range.end.getTime() - range.start.getTime();
      return Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1;
    };

    return (
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
          Request Vacation
        </h3>
        <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1.5rem' }}>
          Select your vacation dates (excluding company holidays)
        </p>
        <Calendar
          rangeMode
          rangeValue={range}
          onRangeChange={setRange}
          disabledDates={blockedDates}
          minDate={new Date()}
        />
        {range.start && range.end && (
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#f0fdf4',
            borderRadius: '0.375rem',
            border: '1px solid #10b981'
          }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#166534', marginBottom: '0.5rem' }}>
              Vacation Request Summary
            </div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
              <div>From: {range.start.toLocaleDateString()}</div>
              <div>To: {range.end.toLocaleDateString()}</div>
              <div style={{ marginTop: '0.5rem', fontWeight: 500, color: '#166534' }}>
                Total Days: {calculateDays()}
              </div>
            </div>
          </div>
        )}
        <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#64748b' }}>
          Note: Grayed out dates are company holidays and cannot be selected
        </div>
      </div>
    );
  },
};

export const BookingCalendar: Story = {
  render: () => {
    const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
      start: null,
      end: null,
    });

    const bookedDates = [
      new Date(2025, 10, 15),
      new Date(2025, 10, 16),
      new Date(2025, 10, 22),
      new Date(2025, 10, 23),
      new Date(2025, 10, 24),
    ];

    const today = new Date();
    const threeMonthsFromNow = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate());

    const calculateCost = () => {
      if (!range.start || !range.end) return 0;
      const days = Math.ceil((range.end.getTime() - range.start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      return days * 150; // $150 per night
    };

    return (
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
          Book Your Stay
        </h3>
        <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1.5rem' }}>
          $150 per night
        </p>
        <Calendar
          rangeMode
          rangeValue={range}
          onRangeChange={setRange}
          disabledDates={bookedDates}
          minDate={today}
          maxDate={threeMonthsFromNow}
        />
        {range.start && range.end ? (
          <div style={{
            marginTop: '1rem',
            padding: '1.5rem',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            border: '1px solid #e5e5e5'
          }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              Booking Details
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
              <span style={{ color: '#64748b' }}>Check-in:</span>
              <span style={{ fontWeight: 500 }}>{range.start.toLocaleDateString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid #e5e5e5' }}>
              <span style={{ color: '#64748b' }}>Check-out:</span>
              <span style={{ fontWeight: 500 }}>{range.end.toLocaleDateString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.125rem', fontWeight: 700 }}>
              <span>Total:</span>
              <span style={{ color: '#3b82f6' }}>${calculateCost()}</span>
            </div>
            <button style={{
              width: '100%',
              marginTop: '1rem',
              padding: '0.75rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: 600
            }}>
              Reserve Now
            </button>
          </div>
        ) : (
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f4', borderRadius: '0.375rem', textAlign: 'center', fontSize: '0.875rem', color: '#64748b' }}>
            Select check-in and check-out dates
          </div>
        )}
      </div>
    );
  },
};

export const AppointmentScheduler: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);

    const events: CalendarEvent[] = [
      { date: new Date(2025, 10, 14), title: 'Fully booked', color: 'error' },
      { date: new Date(2025, 10, 21), title: 'Fully booked', color: 'error' },
      { date: new Date(2025, 10, 16), title: 'Few slots left', color: 'warning' },
      { date: new Date(2025, 10, 23), title: 'Few slots left', color: 'warning' },
      { date: new Date(2025, 10, 18), title: 'Available', color: 'success' },
      { date: new Date(2025, 10, 25), title: 'Available', color: 'success' },
      { date: new Date(2025, 10, 27), title: 'Available', color: 'success' },
    ];

    const weekends = [];
    const year = 2025;
    const month = 10;
    for (let day = 1; day <= 30; day++) {
      const d = new Date(year, month, day);
      if (d.getDay() === 0 || d.getDay() === 6) {
        weekends.push(d);
      }
    }

    const availableSlots = date ? ['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM'] : [];

    return (
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
          Schedule Appointment
        </h3>
        <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1.5rem' }}>
          Select a date to view available time slots
        </p>
        <Calendar
          value={date}
          onChange={setDate}
          events={events}
          disabledDates={weekends}
          minDate={new Date()}
        />
        {date && (
          <div style={{ marginTop: '1rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid #e5e5e5' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
              Available Times for {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  style={{
                    padding: '0.75rem',
                    backgroundColor: 'white',
                    border: '1px solid #e5e5e5',
                    borderRadius: '0.375rem',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: 500
                  }}
                  onClick={() => alert(`Booking appointment at ${slot}`)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', fontSize: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }} />
            <span style={{ color: '#64748b' }}>Available</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
            <span style={{ color: '#64748b' }}>Limited</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
            <span style={{ color: '#64748b' }}>Fully Booked</span>
          </div>
        </div>
      </div>
    );
  },
};
