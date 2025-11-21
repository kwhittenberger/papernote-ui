import type { Meta, StoryObj } from '@storybook/react';
import Card, { CardHeader, CardTitle, CardContent, CardFooter } from './Card';
import Button from './Button';
import Badge from './Badge';
import { Settings, TrendingUp, Users } from 'lucide-react';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ minWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is the card content. It can contain any components or text.</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Confirm Action</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Are you sure you want to proceed with this action?</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Settings className="h-5 w-5 text-ink-600" />
          <CardTitle>Settings</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p>Manage your application settings and preferences.</p>
      </CardContent>
    </Card>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <CardTitle>User Account</CardTitle>
          <Badge variant="success">Active</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p>Account status: Active</p>
        <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Last login: 2 hours ago</p>
      </CardContent>
    </Card>
  ),
};

export const StatCard: Story = {
  render: () => (
    <Card>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>Total Users</p>
            <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>1,284</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem' }}>
              <TrendingUp className="h-4 w-4 text-success-600" />
              <span style={{ fontSize: '0.875rem', color: '#10b981' }}>+12.5%</span>
              <span style={{ fontSize: '0.875rem', color: '#64748b' }}>from last month</span>
            </div>
          </div>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '0.5rem',
            backgroundColor: '#eff6ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Users className="h-6 w-6 text-primary-600" />
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const InteractiveCard: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Button variant="outline" fullWidth>
            Create New User
          </Button>
          <Button variant="outline" fullWidth>
            Generate Report
          </Button>
          <Button variant="outline" fullWidth>
            Export Data
          </Button>
        </div>
      </CardContent>
    </Card>
  ),
};

export const FormCard: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #e5e5e5',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #e5e5e5',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
              }}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="primary" fullWidth>
          Sign In
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card>
      <div style={{
        height: '200px',
        backgroundColor: '#f5f5f4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: '0.5rem',
        borderTopRightRadius: '0.5rem',
      }}>
        <span style={{ fontSize: '3rem' }}>📦</span>
      </div>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Product Name</h3>
          <Badge variant="success">In Stock</Badge>
        </div>
        <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>
          High-quality product with excellent features and great value.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>$99.99</span>
          <Button variant="primary">Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  ),
};
