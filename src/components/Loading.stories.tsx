import type { Meta, StoryObj } from '@storybook/react';
import Loading from './Loading';

const meta = {
  title: 'Feedback/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Loading indicator component with multiple variants for displaying async operations.

## Features
- **Variants**: spinner, dots, bar for different loading styles
- **Sizes**: sm, md, lg with consistent scaling
- **Text support**: Optional loading message
- **Skeleton loaders**: SkeletonCard, SkeletonTable for content placeholders
- **Smooth animations**: Built-in spinning/bouncing/shimmer effects

## Usage

\`\`\`tsx
import { Loading, Skeleton, SkeletonCard } from 'notebook-ui';

// Spinner
<Loading variant="spinner" size="md" text="Loading..." />

// Skeleton placeholder
<Skeleton className="h-4 w-48 mb-2" />
<SkeletonCard />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['spinner', 'dots', 'bar'],
      description: 'Loading animation style',
      table: {
        type: { summary: 'spinner | dots | bar' },
        defaultValue: { summary: 'spinner' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Loading indicator size',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    text: {
      control: 'text',
      description: 'Optional loading text displayed below indicator',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spinner: Story = {
  args: {
    variant: 'spinner',
  },
};

export const Dots: Story = {
  args: {
    variant: 'dots',
  },
};

export const Pulse: Story = {
  args: {
    variant: 'pulse',
  },
};

export const Small: Story = {
  args: {
    variant: 'spinner',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    variant: 'spinner',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    variant: 'spinner',
    size: 'lg',
  },
};

export const WithText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Loading variant="spinner" />
      <span style={{ color: '#64748b' }}>Loading...</span>
    </div>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Loading variant="spinner" size="sm" />
      <span>Saving changes...</span>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Loading variant="spinner" />
        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Spinner</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Loading variant="dots" />
        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Dots</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Loading variant="pulse" />
        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Pulse</span>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Loading variant="spinner" size="sm" />
        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Small</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Loading variant="spinner" size="md" />
        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Medium</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Loading variant="spinner" size="lg" />
        <span style={{ fontSize: '1rem', color: '#64748b' }}>Large</span>
      </div>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div style={{
      width: '400px',
      padding: '3rem 2rem',
      border: '1px solid #e5e5e5',
      borderRadius: '0.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
    }}>
      <Loading variant="spinner" size="lg" />
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Loading your data</h3>
        <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Please wait while we fetch your information...</p>
      </div>
    </div>
  ),
};

export const ButtonLoading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <button
        disabled
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '0.375rem',
          background: '#e5e5e5',
          color: '#64748b',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'not-allowed',
        }}
      >
        <Loading variant="spinner" size="sm" />
        Saving...
      </button>

      <button
        disabled
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '0.375rem',
          background: '#3b82f6',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'not-allowed',
          opacity: 0.7,
        }}
      >
        <Loading variant="spinner" size="sm" />
        Processing...
      </button>
    </div>
  ),
};

export const FullPage: Story = {
  render: () => (
    <div style={{
      width: '100vw',
      height: '400px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1.5rem',
      backgroundColor: '#fafaf9',
    }}>
      <Loading variant="spinner" size="lg" />
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>Loading Application</h2>
        <p style={{ color: '#64748b' }}>Setting up your workspace...</p>
      </div>
    </div>
  ),
};
