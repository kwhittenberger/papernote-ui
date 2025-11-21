import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Rating from './Rating';

const meta = {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Star rating component for reviews and feedback with interactive and read-only modes.

## Features
- **Interactive**: Click to set rating with hover preview
- **Read-only**: Display-only mode for showing ratings
- **Half stars**: Optional half-star precision
- **Sizes**: sm, md, lg
- **Colors**: primary, warning (default), error
- **Custom max**: Configurable number of stars (default 5)
- **Label**: Optional display of rating value
- **Disabled state**: Non-interactive disabled mode

## Usage

\`\`\`tsx
import { Rating } from 'notebook-ui';

// Interactive rating
<Rating value={rating} onChange={setRating} allowHalf showLabel />

// Read-only display
<Rating value={4.5} readOnly showLabel />

// Custom color and size
<Rating value={3} onChange={setRating} color="error" size="lg" max={10} />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 5, step: 0.5 },
      description: 'Current rating value',
      table: {
        type: { summary: 'number' },
      },
    },
    onChange: {
      description: 'Callback when rating changes',
      table: {
        type: { summary: '(value: number) => void' },
      },
    },
    max: {
      control: 'number',
      description: 'Maximum rating (number of stars)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Star size',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Read-only mode (non-interactive)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    allowHalf: {
      control: 'boolean',
      description: 'Enable half-star ratings',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'warning', 'error'],
      description: 'Star color variant',
      table: {
        type: { summary: 'primary | warning | error' },
        defaultValue: { summary: 'warning' },
      },
    },
    showLabel: {
      control: 'boolean',
      description: 'Show rating value as text',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'Custom label text',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} />;
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState(3.5);
    return <Rating value={value} onChange={setValue} />;
  },
};

export const ReadOnly: Story = {
  args: {
    value: 4,
    readOnly: true,
  },
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState(4);
    return <Rating value={value} onChange={setValue} showLabel />;
  },
};

export const HalfStars: Story = {
  render: () => {
    const [value, setValue] = useState(3.5);
    return <Rating value={value} onChange={setValue} allowHalf showLabel />;
  },
};

export const MaxTen: Story = {
  render: () => {
    const [value, setValue] = useState(7);
    return <Rating value={value} onChange={setValue} max={10} showLabel />;
  },
};

export const Small: Story = {
  render: () => {
    const [value, setValue] = useState(4);
    return <Rating value={value} onChange={setValue} size="sm" />;
  },
};

export const Large: Story = {
  render: () => {
    const [value, setValue] = useState(4);
    return <Rating value={value} onChange={setValue} size="lg" showLabel />;
  },
};

export const PrimaryColor: Story = {
  render: () => {
    const [value, setValue] = useState(4);
    return <Rating value={value} onChange={setValue} color="primary" showLabel />;
  },
};

export const ErrorColor: Story = {
  render: () => {
    const [value, setValue] = useState(2);
    return <Rating value={value} onChange={setValue} color="error" showLabel />;
  },
};

export const Disabled: Story = {
  args: {
    value: 3,
    disabled: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Small</div>
        <Rating value={4} readOnly size="sm" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Medium</div>
        <Rating value={4} readOnly size="md" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ fontSize: '1rem', color: '#64748b' }}>Large</div>
        <Rating value={4} readOnly size="lg" />
      </div>
    </div>
  ),
};

export const ProductReview: Story = {
  render: () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    return (
      <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Write a Review</h3>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
              Your Rating
            </label>
            <Rating value={rating} onChange={setRating} allowHalf showLabel />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
              Your Review
            </label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Share your thoughts about this product..."
              rows={4}
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #e5e5e5',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontFamily: 'inherit',
              }}
            />
          </div>
          <button
            disabled={rating === 0 || !review.trim()}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '0.375rem',
              background: rating === 0 || !review.trim() ? '#e5e5e5' : '#3b82f6',
              color: rating === 0 || !review.trim() ? '#64748b' : 'white',
              cursor: rating === 0 || !review.trim() ? 'not-allowed' : 'pointer',
            }}
          >
            Submit Review
          </button>
        </div>
      </div>
    );
  },
};

export const AverageRating: Story = {
  render: () => (
    <div style={{ width: '400px', padding: '1.5rem', border: '1px solid #e5e5e5', borderRadius: '0.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}>4.5</div>
          <Rating value={4.5} readOnly showLabel size="sm" />
          <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.25rem' }}>Based on 1,234 reviews</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {[
          { stars: 5, count: 823, percent: 67 },
          { stars: 4, count: 301, percent: 24 },
          { stars: 3, count: 74, percent: 6 },
          { stars: 2, count: 25, percent: 2 },
          { stars: 1, count: 11, percent: 1 },
        ].map(({ stars, count, percent }) => (
          <div key={stars} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ fontSize: '0.875rem', width: '3rem' }}>{stars} stars</div>
            <div style={{ flex: 1, height: '8px', backgroundColor: '#f5f5f4', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${percent}%`, height: '100%', backgroundColor: '#f59e0b' }} />
            </div>
            <div style={{ fontSize: '0.875rem', color: '#64748b', width: '3rem', textAlign: 'right' }}>{count}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const ReviewsList: Story = {
  render: () => (
    <div style={{ width: '600px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {[
        { name: 'Alice Brown', rating: 5, date: '2 days ago', review: 'Absolutely love this product! Exceeded all my expectations.' },
        { name: 'Bob Smith', rating: 4, date: '1 week ago', review: 'Great quality, but delivery took a bit longer than expected.' },
        { name: 'Carol White', rating: 3.5, date: '2 weeks ago', review: 'Good product overall, but could be improved in some areas.' },
      ].map((review, i) => (
        <div key={i} style={{ padding: '1rem', border: '1px solid #e5e5e5', borderRadius: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
            <div>
              <div style={{ fontWeight: 500 }}>{review.name}</div>
              <Rating value={review.rating} readOnly size="sm" />
            </div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>{review.date}</div>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#57534e', margin: 0 }}>{review.review}</p>
        </div>
      ))}
    </div>
  ),
};
