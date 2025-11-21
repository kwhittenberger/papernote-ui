import type { Meta, StoryObj } from '@storybook/react';
import Page from './Page';
import Card, { CardHeader, CardTitle, CardContent } from './Card';
import Button from './Button';

const meta = {
  title: 'Layout/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Core page wrapper with authentic notebook paper styling - the visual foundation of the notebook-ui aesthetic.

## Features
- **Notebook paper texture**: Subtle grain background for authentic paper feel
- **Red margin line**: Vertical line 3rem from left edge (classic notebook style)
- **Ruled lines**: Horizontal guide lines every 2rem for that lined paper effect
- **Shadow & depth**: Elevated paper appearance with subtle shadow
- **Binding edge**: 4px left border simulating notebook binding
- **Max width**: 1400px with centered layout for optimal readability
- **Proper padding**: Internal spacing for content comfort

## Usage

\`\`\`tsx
import { Page, Card } from 'notebook-ui';

<Page>
  <div style={{ padding: '2rem' }}>
    <h1>Page Title</h1>
    <Card>
      <CardContent>Your content here</CardContent>
    </Card>
  </div>
</Page>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Page content displayed on the notebook paper',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Page>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
        📓 Notebook Page Component
      </h1>
      <p style={{ color: '#64748b', marginBottom: '1rem' }}>
        This is the Page component with authentic notebook styling - look for these features:
      </p>
      <Card style={{ marginBottom: '1.5rem', backgroundColor: '#fffbeb', border: '1px solid #fbbf24' }}>
        <CardContent>
          <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.875rem' }}>✨ Notebook Features to Notice:</h3>
          <ul style={{ marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
            <li><strong>Red margin line</strong> - Very subtle red line on the left (3rem from edge)</li>
            <li><strong>Ruled lines</strong> - Horizontal lines every 2rem creating that lined paper effect</li>
            <li><strong>Paper texture</strong> - Subtle grain background (look closely at the white area)</li>
            <li><strong>Shadow & depth</strong> - Elevated paper appearance with shadow</li>
            <li><strong>Left border</strong> - Binding edge effect (4px border-left)</li>
            <li><strong>Margins</strong> - Proper spacing and max-width (1400px) for readability</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Content Area</CardTitle>
        </CardHeader>
        <CardContent>
          <p style={{ marginBottom: '1rem' }}>
            Your content goes here with the classic notebook aesthetic. The CSS classes <code style={{ backgroundColor: '#f5f5f5', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>notebook-page</code>,{' '}
            <code style={{ backgroundColor: '#f5f5f5', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>notebook-margin</code>, and{' '}
            <code style={{ backgroundColor: '#f5f5f5', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>notebook-ruled</code> work together
            to create this effect.
          </p>
          <p>
            The ruled lines are intentionally subtle (rgba(231, 229, 228, 0.3)) to not interfere with content readability.
            Scroll down through other stories to see how this background continues.
          </p>
        </CardContent>
      </Card>
    </Page>
  ),
};

export const WithMultipleCards: Story = {
  render: () => (
    <Page>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        Dashboard
      </h1>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>
        Overview of your data
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ fontSize: '2rem', fontWeight: 700 }}>1,234</div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Total Users</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ fontSize: '2rem', fontWeight: 700 }}>$12,345</div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>This Month</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ fontSize: '2rem', fontWeight: 700 }}>567</div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Pending</div>
          </CardContent>
        </Card>
      </div>
    </Page>
  ),
};

export const ArticleLayout: Story = {
  render: () => (
    <Page>
      <article>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
          Getting Started with React
        </h1>
        <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '2rem' }}>
          Published on November 20, 2025 by John Doe
        </div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
          Core Concepts
        </h2>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </article>
    </Page>
  ),
};

export const FormPage: Story = {
  render: () => (
    <Page>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        Create New Project
      </h1>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>
        Fill in the details below to create a new project
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                Project Name
              </label>
              <input
                type="text"
                placeholder="Enter project name"
                style={{
                  width: '100%',
                  padding: '0.5rem 0.75rem',
                  border: '1px solid #e5e5e5',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                Description
              </label>
              <textarea
                placeholder="Enter project description"
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.5rem 0.75rem',
                  border: '1px solid #e5e5e5',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <Button variant="ghost">Cancel</Button>
              <Button variant="primary">Create Project</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Page>
  ),
};

export const SettingsPage: Story = {
  render: () => (
    <Page>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        Settings
      </h1>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>
        Manage your account settings and preferences
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
              Update your profile information and email address
            </p>
            <Button variant="primary" size="sm" style={{ marginTop: '1rem' }}>
              Edit Profile
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
              Manage your password and security settings
            </p>
            <Button variant="primary" size="sm" style={{ marginTop: '1rem' }}>
              Change Password
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
              Configure how you receive notifications
            </p>
            <Button variant="primary" size="sm" style={{ marginTop: '1rem' }}>
              Manage Notifications
            </Button>
          </CardContent>
        </Card>
      </div>
    </Page>
  ),
};
