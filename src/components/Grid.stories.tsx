import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import Box from './Box';
import Text from './Text';
import Card from './Card';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Grid component for arranging children in a CSS grid layout with responsive breakpoints.

## Features
- **Column options**: 1, 2, 3, 4, 6, 12 columns
- **Responsive breakpoints**: columns (base), sm (640px+), md (768px+), lg (1024px+), xl (1280px+)
- **Gap spacing**: none, xs, sm, md, lg, xl
- **Mobile-first**: Set base columns and override at larger breakpoints

## Usage

\`\`\`tsx
import { Grid } from 'notebook-ui';

// Simple 3-column grid
<Grid columns={3} gap="md">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>

// Responsive grid: 1 column mobile, 2 tablet, 4 desktop
<Grid columns={1} md={2} lg={4} gap="md">
  {items.map(item => <Card key={item.id}>{item.name}</Card>)}
</Grid>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [1, 2, 3, 4, 6, 12],
      description: 'Base number of columns',
    },
    sm: {
      control: 'select',
      options: [undefined, 1, 2, 3, 4, 6, 12],
      description: 'Columns at sm breakpoint (640px+)',
    },
    md: {
      control: 'select',
      options: [undefined, 1, 2, 3, 4, 6, 12],
      description: 'Columns at md breakpoint (768px+)',
    },
    lg: {
      control: 'select',
      options: [undefined, 1, 2, 3, 4, 6, 12],
      description: 'Columns at lg breakpoint (1024px+)',
    },
    xl: {
      control: 'select',
      options: [undefined, 1, 2, 3, 4, 6, 12],
      description: 'Columns at xl breakpoint (1280px+)',
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Gap between grid items',
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for demo items
const DemoItem = ({ children }: { children: React.ReactNode }) => (
  <Box padding="md" border="all" rounded="md" className="bg-paper-50">
    <Text align="center">{children}</Text>
  </Box>
);

export const Default: Story = {
  args: {
    columns: 3,
    gap: 'md',
    children: (
      <>
        <DemoItem>Item 1</DemoItem>
        <DemoItem>Item 2</DemoItem>
        <DemoItem>Item 3</DemoItem>
        <DemoItem>Item 4</DemoItem>
        <DemoItem>Item 5</DemoItem>
        <DemoItem>Item 6</DemoItem>
      </>
    ),
  },
};

export const TwoColumns: Story = {
  args: {
    columns: 2,
    gap: 'md',
    children: (
      <>
        <DemoItem>Left</DemoItem>
        <DemoItem>Right</DemoItem>
        <DemoItem>Left</DemoItem>
        <DemoItem>Right</DemoItem>
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    gap: 'md',
    children: (
      <>
        <DemoItem>1</DemoItem>
        <DemoItem>2</DemoItem>
        <DemoItem>3</DemoItem>
        <DemoItem>4</DemoItem>
        <DemoItem>5</DemoItem>
        <DemoItem>6</DemoItem>
        <DemoItem>7</DemoItem>
        <DemoItem>8</DemoItem>
      </>
    ),
  },
};

export const SixColumns: Story = {
  args: {
    columns: 6,
    gap: 'sm',
    children: (
      <>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
          <DemoItem key={n}>{n}</DemoItem>
        ))}
      </>
    ),
  },
};

export const TwelveColumns: Story = {
  args: {
    columns: 12,
    gap: 'xs',
    children: (
      <>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
          <DemoItem key={n}>{n}</DemoItem>
        ))}
      </>
    ),
  },
};

/**
 * Responsive grid that changes columns based on screen size.
 * Resize the browser to see it adapt.
 */
export const Responsive: Story = {
  args: {
    columns: 1,
    sm: 2,
    md: 3,
    lg: 4,
    gap: 'md',
    children: (
      <>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
          <DemoItem key={n}>Item {n}</DemoItem>
        ))}
      </>
    ),
  },
};

export const GapSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <Text weight="medium" size="sm" color="muted">gap="none"</Text>
        <Grid columns={4} gap="none">
          <DemoItem>1</DemoItem>
          <DemoItem>2</DemoItem>
          <DemoItem>3</DemoItem>
          <DemoItem>4</DemoItem>
        </Grid>
      </div>
      <div>
        <Text weight="medium" size="sm" color="muted">gap="xs"</Text>
        <Grid columns={4} gap="xs">
          <DemoItem>1</DemoItem>
          <DemoItem>2</DemoItem>
          <DemoItem>3</DemoItem>
          <DemoItem>4</DemoItem>
        </Grid>
      </div>
      <div>
        <Text weight="medium" size="sm" color="muted">gap="sm"</Text>
        <Grid columns={4} gap="sm">
          <DemoItem>1</DemoItem>
          <DemoItem>2</DemoItem>
          <DemoItem>3</DemoItem>
          <DemoItem>4</DemoItem>
        </Grid>
      </div>
      <div>
        <Text weight="medium" size="sm" color="muted">gap="md" (default)</Text>
        <Grid columns={4} gap="md">
          <DemoItem>1</DemoItem>
          <DemoItem>2</DemoItem>
          <DemoItem>3</DemoItem>
          <DemoItem>4</DemoItem>
        </Grid>
      </div>
      <div>
        <Text weight="medium" size="sm" color="muted">gap="lg"</Text>
        <Grid columns={4} gap="lg">
          <DemoItem>1</DemoItem>
          <DemoItem>2</DemoItem>
          <DemoItem>3</DemoItem>
          <DemoItem>4</DemoItem>
        </Grid>
      </div>
      <div>
        <Text weight="medium" size="sm" color="muted">gap="xl"</Text>
        <Grid columns={4} gap="xl">
          <DemoItem>1</DemoItem>
          <DemoItem>2</DemoItem>
          <DemoItem>3</DemoItem>
          <DemoItem>4</DemoItem>
        </Grid>
      </div>
    </div>
  ),
};

export const WithCards: Story = {
  render: () => (
    <Grid columns={1} md={2} lg={3} gap="md">
      <Card>
        <Card.Header>
          <Card.Title>Card 1</Card.Title>
        </Card.Header>
        <Card.Content>
          <Text color="secondary">Content for the first card.</Text>
        </Card.Content>
      </Card>
      <Card>
        <Card.Header>
          <Card.Title>Card 2</Card.Title>
        </Card.Header>
        <Card.Content>
          <Text color="secondary">Content for the second card.</Text>
        </Card.Content>
      </Card>
      <Card>
        <Card.Header>
          <Card.Title>Card 3</Card.Title>
        </Card.Header>
        <Card.Content>
          <Text color="secondary">Content for the third card.</Text>
        </Card.Content>
      </Card>
    </Grid>
  ),
};

export const DashboardLayout: Story = {
  render: () => (
    <Grid columns={1} md={2} lg={4} gap="md">
      <Box padding="lg" border="all" rounded="lg" className="bg-success-50">
        <Text size="sm" color="muted">Revenue</Text>
        <Text size="2xl" weight="bold">$45,231</Text>
        <Text size="sm" color="success">+20.1% from last month</Text>
      </Box>
      <Box padding="lg" border="all" rounded="lg" className="bg-primary-50">
        <Text size="sm" color="muted">Users</Text>
        <Text size="2xl" weight="bold">2,350</Text>
        <Text size="sm" color="accent">+180 new this week</Text>
      </Box>
      <Box padding="lg" border="all" rounded="lg" className="bg-warning-50">
        <Text size="sm" color="muted">Pending</Text>
        <Text size="2xl" weight="bold">12</Text>
        <Text size="sm" color="warning">Requires attention</Text>
      </Box>
      <Box padding="lg" border="all" rounded="lg" className="bg-error-50">
        <Text size="sm" color="muted">Errors</Text>
        <Text size="2xl" weight="bold">3</Text>
        <Text size="sm" color="error">Critical issues</Text>
      </Box>
    </Grid>
  ),
};

export const FormLayout: Story = {
  render: () => (
    <Box padding="lg" border="all" rounded="lg" style={{ maxWidth: '600px' }}>
      <Text as="h3" size="lg" weight="semibold">User Details</Text>
      <Box marginTop="md">
        <Grid columns={1} md={2} gap="md">
          <Box padding="sm" border="all" rounded="sm" className="bg-paper-50">
            <Text size="sm" color="muted">First Name</Text>
          </Box>
          <Box padding="sm" border="all" rounded="sm" className="bg-paper-50">
            <Text size="sm" color="muted">Last Name</Text>
          </Box>
          <Box padding="sm" border="all" rounded="sm" className="bg-paper-50">
            <Text size="sm" color="muted">Email</Text>
          </Box>
          <Box padding="sm" border="all" rounded="sm" className="bg-paper-50">
            <Text size="sm" color="muted">Phone</Text>
          </Box>
        </Grid>
      </Box>
    </Box>
  ),
};

export const ImageGallery: Story = {
  render: () => (
    <Grid columns={2} md={3} lg={4} gap="sm">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <Box 
          key={n} 
          padding="none" 
          rounded="md" 
          className="bg-paper-200 aspect-square flex items-center justify-center"
          style={{ aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Text color="muted">Image {n}</Text>
        </Box>
      ))}
    </Grid>
  ),
};
