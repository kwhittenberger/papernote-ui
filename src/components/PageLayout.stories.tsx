import type { Meta, StoryObj } from '@storybook/react';
import { PageLayout } from './PageLayout';
import Layout from './Layout';
import Sidebar from './Sidebar';
import { StatusBar } from './StatusBar';
import Card, { CardHeader, CardTitle, CardContent } from './Card';
import Button from './Button';
import { Plus, Download, Settings, Home, Users, FileText } from 'lucide-react';

const meta = {
  title: 'Layout/PageLayout',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Page Title',
    description: 'This is a standard page layout with notebook styling - notice the red margin line on the left, subtle ruled lines, and paper texture',
    children: (
      <div>
        <Card style={{ marginBottom: '1.5rem', backgroundColor: '#eff6ff', border: '1px solid #3b82f6' }}>
          <CardContent>
            <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.875rem', color: '#1e40af' }}>
              ℹ️ Note: No Sidebar or Gutter Here
            </h3>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
              PageLayout shows just the paper content with title/description. For the complete app layout
              with <strong>sidebar and gutter navigation</strong>, see the "With Sidebar And Gutter" story below
              or check out the <strong>Layout</strong> component stories.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Content Section</CardTitle>
          </CardHeader>
          <CardContent>
            <p style={{ marginBottom: '1rem' }}>
              Your page content goes here with consistent structure across the application.
              The PageLayout component wraps content in the Page component, which provides:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
              <li>• Subtle paper texture background</li>
              <li>• Red margin line on the left (look closely!)</li>
              <li>• Ruled lines for that notebook feel</li>
              <li>• Proper padding and max-width constraints</li>
              <li>• Shadow and border for depth</li>
            </ul>
            <p>Scroll down to see more content and experience the full notebook aesthetic.</p>
          </CardContent>
        </Card>

        {/* Additional content to show scrolling */}
        <Card style={{ marginTop: '1.5rem' }}>
          <CardHeader>
            <CardTitle>Another Section</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Add multiple sections to your page. The ruled lines and paper texture continue throughout.</p>
          </CardContent>
        </Card>
      </div>
    ),
  },
};

export const WithoutDescription: Story = {
  args: {
    title: 'Simple Page',
    children: (
      <Card>
        <CardContent>
          <p>Page without a description, just the title.</p>
        </CardContent>
      </Card>
    ),
  },
};

export const WithHeaderContent: Story = {
  args: {
    title: 'Page with Header Actions',
    description: 'This page has custom header content above the title',
    headerContent: (
      <div style={{
        padding: '1rem',
        backgroundColor: '#eff6ff',
        borderRadius: '0.5rem',
        marginBottom: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
          Control Bar / Breadcrumbs can go here
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button variant="ghost" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Save</Button>
        </div>
      </div>
    ),
    children: (
      <Card>
        <CardContent>
          <p>Page content with header controls above.</p>
        </CardContent>
      </Card>
    ),
  },
};

export const DashboardPage: Story = {
  render: () => (
    <PageLayout
      title="Dashboard"
      description="Overview of your application metrics and data"
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#3b82f6' }}>1,234</div>
            <div style={{ fontSize: '0.875rem', color: '#10b981', marginTop: '0.5rem' }}>↑ 12% from last month</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#10b981' }}>$45,678</div>
            <div style={{ fontSize: '0.875rem', color: '#10b981', marginTop: '0.5rem' }}>↑ 8% from last month</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#f59e0b' }}>89</div>
            <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem' }}>Pending fulfillment</div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid #e5e5e5' }}>
              <span>New user registration</span>
              <span style={{ color: '#64748b', fontSize: '0.875rem' }}>2 minutes ago</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid #e5e5e5' }}>
              <span>Order #1234 completed</span>
              <span style={{ color: '#64748b', fontSize: '0.875rem' }}>15 minutes ago</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Payment received</span>
              <span style={{ color: '#64748b', fontSize: '0.875rem' }}>1 hour ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  ),
};

export const SettingsPage: Story = {
  render: () => (
    <PageLayout
      title="Settings"
      description="Manage your account preferences and application settings"
      headerContent={
        <div style={{
          padding: '0.75rem 1rem',
          backgroundColor: '#fef3c7',
          border: '1px solid #fbbf24',
          borderRadius: '0.375rem',
          fontSize: '0.875rem',
          color: '#92400e',
          marginBottom: '1.5rem'
        }}>
          Changes will be saved automatically
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="John Doe"
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
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    border: '1px solid #e5e5e5',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem'
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked />
                <span style={{ fontSize: '0.875rem' }}>Enable email notifications</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="checkbox" />
                <span style={{ fontSize: '0.875rem' }}>Enable dark mode</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked />
                <span style={{ fontSize: '0.875rem' }}>Show usage statistics</span>
              </label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Button variant="primary" size="sm" icon={<Settings />}>
                Change Password
              </Button>
              <Button variant="ghost" size="sm">
                Enable Two-Factor Authentication
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  ),
};

export const DataTablePage: Story = {
  render: () => (
    <PageLayout
      title="Products"
      description="Manage your product catalog"
      headerContent={
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '0.75rem',
          marginBottom: '1.5rem'
        }}>
          <Button variant="ghost" icon={<Download />}>Export</Button>
          <Button variant="primary" icon={<Plus />}>Add Product</Button>
        </div>
      }
    >
      <Card>
        <CardContent>
          <table style={{ width: '100%', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e5e5' }}>
                <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: 600 }}>Product</th>
                <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: 600 }}>Category</th>
                <th style={{ textAlign: 'right', padding: '0.75rem', fontWeight: 600 }}>Price</th>
                <th style={{ textAlign: 'right', padding: '0.75rem', fontWeight: 600 }}>Stock</th>
                <th style={{ textAlign: 'right', padding: '0.75rem', fontWeight: 600 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.75rem' }}>Wireless Mouse</td>
                <td style={{ padding: '0.75rem', color: '#64748b' }}>Electronics</td>
                <td style={{ padding: '0.75rem', textAlign: 'right' }}>$29.99</td>
                <td style={{ padding: '0.75rem', textAlign: 'right' }}>145</td>
                <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                  <Button variant="ghost" size="sm">Edit</Button>
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.75rem' }}>Mechanical Keyboard</td>
                <td style={{ padding: '0.75rem', color: '#64748b' }}>Electronics</td>
                <td style={{ padding: '0.75rem', textAlign: 'right' }}>$89.99</td>
                <td style={{ padding: '0.75rem', textAlign: 'right' }}>67</td>
                <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                  <Button variant="ghost" size="sm">Edit</Button>
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.75rem' }}>USB Cable</td>
                <td style={{ padding: '0.75rem', color: '#64748b' }}>Accessories</td>
                <td style={{ padding: '0.75rem', textAlign: 'right' }}>$12.99</td>
                <td style={{ padding: '0.75rem', textAlign: 'right' }}>234</td>
                <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                  <Button variant="ghost" size="sm">Edit</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </PageLayout>
  ),
};

export const FormPage: Story = {
  render: () => (
    <PageLayout
      title="Create New Project"
      description="Fill in the details below to create a new project"
    >
      <Card>
        <CardHeader>
          <CardTitle>Project Information</CardTitle>
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
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                Category
              </label>
              <select
                style={{
                  width: '100%',
                  padding: '0.5rem 0.75rem',
                  border: '1px solid #e5e5e5',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem'
                }}
              >
                <option>Development</option>
                <option>Design</option>
                <option>Marketing</option>
                <option>Research</option>
              </select>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <Button variant="ghost">Cancel</Button>
              <Button variant="primary">Create Project</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  ),
};

export const WithSidebarAndGutter: Story = {
  render: () => {
    const sidebarItems = [
      { id: 'dashboard', label: 'Dashboard', icon: <Home className="h-5 w-5" />, href: '#dashboard' },
      { id: 'users', label: 'Users', icon: <Users className="h-5 w-5" />, href: '#users' },
      { id: 'documents', label: 'Documents', icon: <FileText className="h-5 w-5" />, href: '#documents' },
      { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" />, href: '#settings' },
    ];

    return (
      <Layout
        sidebar={
          <Sidebar
            items={sidebarItems}
            currentPath="#dashboard"
          />
        }
        statusBar={<StatusBar />}
      >
        <PageLayout
          title="Dashboard with Complete Layout"
          description="This shows PageLayout inside Layout - notice the sidebar on the left and the gutter between sidebar and content"
        >
          <Card style={{ marginBottom: '1.5rem', backgroundColor: '#d1fae5', border: '1px solid #10b981' }}>
            <CardContent>
              <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.875rem', color: '#065f46' }}>
                ✅ Complete Layout with Sidebar & Gutter
              </h3>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                Now you can see the <strong>gutter</strong> (the narrow space between the sidebar and content).
                This is where navigation dots would appear if you had page sections defined.
              </p>
              <p style={{ fontSize: '0.875rem' }}>
                Check out the <strong>Layout</strong> component stories to see the gutter navigation in action with scrollable sections.
              </p>
            </CardContent>
          </Card>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            <Card>
              <CardHeader>
                <CardTitle>Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#3b82f6' }}>1,234</div>
                <div style={{ fontSize: '0.875rem', color: '#10b981', marginTop: '0.5rem' }}>↑ 12% from last month</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#10b981' }}>$45,678</div>
                <div style={{ fontSize: '0.875rem', color: '#10b981', marginTop: '0.5rem' }}>↑ 8% from last month</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Active Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#f59e0b' }}>89</div>
                <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem' }}>Pending fulfillment</div>
              </CardContent>
            </Card>
          </div>
        </PageLayout>
      </Layout>
    );
  },
};
