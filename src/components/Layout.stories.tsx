import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Layout from './Layout';
import Sidebar from './Sidebar';
import { StatusBar } from './StatusBar';
import Page from './Page';
import Card, { CardHeader, CardTitle, CardContent } from './Card';
import { Home, Users, Settings, FileText, BarChart, Mail, Calendar, ShoppingCart } from 'lucide-react';

const meta = {
  title: 'Layout/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: <Home className="h-5 w-5" />, href: '#dashboard' },
  { id: 'users', label: 'Users', icon: <Users className="h-5 w-5" />, href: '#users' },
  { id: 'products', label: 'Products', icon: <ShoppingCart className="h-5 w-5" />, href: '#products' },
  { id: 'reports', label: 'Reports', icon: <BarChart className="h-5 w-5" />, href: '#reports' },
  { id: 'messages', label: 'Messages', icon: <Mail className="h-5 w-5" />, href: '#messages', badge: 5 },
  { id: 'calendar', label: 'Calendar', icon: <Calendar className="h-5 w-5" />, href: '#calendar' },
  { id: 'documents', label: 'Documents', icon: <FileText className="h-5 w-5" />, href: '#documents' },
  { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" />, href: '#settings' },
];

export const Default: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');

    return (
      <Layout
        sidebar={
          <Sidebar
            items={sidebarItems}
            currentPath={`#${activeItem}`}
          />
        }
        statusBar={<StatusBar />}
      >
        <Page>
          <div style={{ padding: '2rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
              Complete Layout
            </h1>
            <p style={{ color: '#64748b', marginBottom: '2rem' }}>
              This layout includes sidebar, gutter with page navigation, main content, and status bar
            </p>
            <Card>
              <CardHeader>
                <CardTitle>Content Area</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Your page content scrolls independently from the sidebar</p>
              </CardContent>
            </Card>
          </div>
        </Page>
      </Layout>
    );
  },
};

export const WithoutStatusBar: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');

    return (
      <Layout
        sidebar={
          <Sidebar
            items={sidebarItems}
            currentPath={`#${activeItem}`}
          />
        }
      >
        <Page>
          <div style={{ padding: '2rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
              Layout Without Status Bar
            </h1>
            <p style={{ color: '#64748b', marginBottom: '2rem' }}>
              Clean layout without the bottom status bar
            </p>
            <Card>
              <CardContent>
                <p>Content extends to the bottom without status bar spacing</p>
              </CardContent>
            </Card>
          </div>
        </Page>
      </Layout>
    );
  },
};

export const WithPageSections: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');

    const sections = [
      { id: 'overview', label: 'Overview' },
      { id: 'stats', label: 'Statistics' },
      { id: 'activity', label: 'Recent Activity' },
      { id: 'settings', label: 'Settings' },
    ];

    return (
      <Layout
        sidebar={
          <Sidebar
            items={sidebarItems}
            currentPath={`#${activeItem}`}
          />
        }
        statusBar={<StatusBar />}
        sections={sections}
      >
        <Page>
          <div style={{ padding: '2rem' }}>
            <section id="overview" style={{ marginBottom: '4rem', minHeight: '600px' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
                Overview
              </h1>
              <p style={{ color: '#64748b', marginBottom: '2rem' }}>
                Page navigation dots appear in the gutter area
              </p>
              <Card>
                <CardContent>
                  <p>Scroll down to see page navigation in action</p>
                </CardContent>
              </Card>
            </section>

            <section id="stats" style={{ marginBottom: '4rem', minHeight: '600px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                Statistics
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Total Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div style={{ fontSize: '2rem', fontWeight: 700 }}>1,234</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div style={{ fontSize: '2rem', fontWeight: 700 }}>$45,678</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div style={{ fontSize: '2rem', fontWeight: 700 }}>567</div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="activity" style={{ marginBottom: '4rem', minHeight: '600px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                Recent Activity
              </h2>
              <Card>
                <CardContent>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>New user registration - 2 minutes ago</div>
                    <div>Order #1234 completed - 15 minutes ago</div>
                    <div>Payment received - 1 hour ago</div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="settings" style={{ minHeight: '600px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                Settings
              </h2>
              <Card>
                <CardContent>
                  <p>Configuration options</p>
                </CardContent>
              </Card>
            </section>
          </div>
        </Page>
      </Layout>
    );
  },
};

export const DashboardLayout: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');

    return (
      <Layout
        sidebar={
          <Sidebar
            menuItems={menuItems}
            activeItem={activeItem}
            onItemClick={setActiveItem}
            title="Analytics Dashboard"
          />
        }
        statusBar={<StatusBar />}
      >
        <Page>
          <div style={{ padding: '2rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Dashboard
            </h1>
            <p style={{ color: '#64748b', marginBottom: '2rem' }}>
              Welcome back! Here's what's happening today.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              <Card>
                <CardHeader>
                  <CardTitle>Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#10b981' }}>$45,231</div>
                  <div style={{ fontSize: '0.875rem', color: '#10b981', marginTop: '0.5rem' }}>↑ 20.1% from last month</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Subscriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#3b82f6' }}>+2,350</div>
                  <div style={{ fontSize: '0.875rem', color: '#10b981', marginTop: '0.5rem' }}>↑ 180.1% from last month</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#8b5cf6' }}>+12,234</div>
                  <div style={{ fontSize: '0.875rem', color: '#10b981', marginTop: '0.5rem' }}>↑ 19% from last month</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Active Now</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#f59e0b' }}>+573</div>
                  <div style={{ fontSize: '0.875rem', color: '#10b981', marginTop: '0.5rem' }}>↑ 201 since last hour</div>
                </CardContent>
              </Card>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid #e5e5e5' }}>
                        <div>
                          <div style={{ fontWeight: 500 }}>Order #{1000 + i}</div>
                          <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Customer {i}</div>
                        </div>
                        <div style={{ fontWeight: 600 }}>+${(Math.random() * 1000).toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>Product A</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>234 sales</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>Product B</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>189 sales</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>Product C</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>156 sales</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>Product D</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>142 sales</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Page>
      </Layout>
    );
  },
};

export const CollapsedSidebar: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');

    return (
      <Layout
        sidebar={
          <Sidebar
            menuItems={menuItems}
            activeItem={activeItem}
            onItemClick={setActiveItem}
            title="My Application"
            defaultCollapsed
          />
        }
        statusBar={<StatusBar />}
      >
        <Page>
          <div style={{ padding: '2rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
              Collapsed Sidebar
            </h1>
            <p style={{ color: '#64748b', marginBottom: '2rem' }}>
              The sidebar starts in collapsed state showing only icons
            </p>
            <Card>
              <CardContent>
                <p>More horizontal space for content when sidebar is collapsed</p>
              </CardContent>
            </Card>
          </div>
        </Page>
      </Layout>
    );
  },
};

export const UserManagementApp: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('users');

    return (
      <Layout
        sidebar={
          <Sidebar
            menuItems={menuItems}
            activeItem={activeItem}
            onItemClick={setActiveItem}
            title="Admin Panel"
          />
        }
        statusBar={<StatusBar />}
      >
        <Page>
          <div style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '2rem' }}>
              <div>
                <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Users
                </h1>
                <p style={{ color: '#64748b' }}>
                  Manage user accounts and permissions
                </p>
              </div>
              <button style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '0.375rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: 500
              }}>
                Add User
              </button>
            </div>

            <Card>
              <CardContent>
                <table style={{ width: '100%', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #e5e5e5' }}>
                      <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: 600 }}>Name</th>
                      <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: 600 }}>Email</th>
                      <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: 600 }}>Role</th>
                      <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: 600 }}>Status</th>
                      <th style={{ textAlign: 'right', padding: '0.75rem', fontWeight: 600 }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
                      { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
                      { name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
                    ].map((user, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #e5e5e5' }}>
                        <td style={{ padding: '0.75rem' }}>{user.name}</td>
                        <td style={{ padding: '0.75rem', color: '#64748b' }}>{user.email}</td>
                        <td style={{ padding: '0.75rem' }}>{user.role}</td>
                        <td style={{ padding: '0.75rem' }}>
                          <span style={{
                            padding: '0.25rem 0.5rem',
                            borderRadius: '0.25rem',
                            fontSize: '0.75rem',
                            backgroundColor: user.status === 'Active' ? '#d1fae5' : '#fee2e2',
                            color: user.status === 'Active' ? '#065f46' : '#991b1b'
                          }}>
                            {user.status}
                          </span>
                        </td>
                        <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                          <button style={{
                            padding: '0.25rem 0.75rem',
                            backgroundColor: 'transparent',
                            border: '1px solid #e5e5e5',
                            borderRadius: '0.25rem',
                            cursor: 'pointer',
                            fontSize: '0.75rem'
                          }}>
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </Page>
      </Layout>
    );
  },
};
