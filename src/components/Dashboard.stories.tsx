import type { Meta, StoryObj } from '@storybook/react';
import Dashboard, { DashboardHeader, DashboardContent } from './Dashboard';
import Page from './Page';
import Card, { CardHeader, CardTitle, CardContent } from './Card';
import Button from './Button';
import { Plus, Download, RefreshCw, TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, Activity } from 'lucide-react';

const meta = {
  title: 'Layout/Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Structured dashboard layout for notebook-style pages.

## Features
- **DashboardHeader**: Consistent header with title, subtitle, action buttons
- **DashboardContent**: Content area with proper spacing
- **Composable**: Use inside Page or PageLayout for paper aesthetic
- **Flexible grids**: Supports any grid layout (cards, tables, charts)
- **Consistent spacing**: Built-in spacing utilities

## Usage

\`\`\`tsx
import { Dashboard, DashboardHeader, DashboardContent } from 'notebook-ui';
import { Page, Card, CardContent, Button } from 'notebook-ui';
import { Plus, Download } from 'lucide-react';

<Page>
  <Dashboard>
    <DashboardHeader
      title="Analytics Dashboard"
      subtitle="Track key metrics and performance"
      actions={
        <>
          <Button icon={<Download />}>Export</Button>
          <Button variant="primary" icon={<Plus />}>New Report</Button>
        </>
      }
    />
    <DashboardContent>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        <Card><CardContent>Metric 1</CardContent></Card>
        <Card><CardContent>Metric 2</CardContent></Card>
        <Card><CardContent>Metric 3</CardContent></Card>
      </div>
    </DashboardContent>
  </Dashboard>
</Page>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Dashboard content (Header + Content)',
      table: { type: { summary: 'React.ReactNode' } },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: { type: { summary: 'string' } },
    },
  },
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Page>
      <div style={{ padding: '2rem' }}>
        <Dashboard>
          <DashboardHeader
            title="📊 Dashboard Component"
            subtitle="Simple wrapper for consistent dashboard layouts"
          />
          <DashboardContent>
            <Card style={{ marginBottom: '1.5rem', backgroundColor: '#fffbeb', border: '2px solid #fbbf24' }}>
              <CardContent>
                <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.875rem' }}>🎯 What Dashboard Provides:</h3>
                <ul style={{ marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <li><strong>DashboardHeader</strong> - Consistent header with title, subtitle, and optional action buttons</li>
                  <li><strong>DashboardContent</strong> - Content area with proper spacing and grid support</li>
                  <li><strong>Composable</strong> - Use inside Page or PageLayout for paper aesthetic</li>
                  <li><strong>Flexible</strong> - Supports any grid layout (cards, tables, charts, etc.)</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Content Section</CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ marginBottom: '0.75rem' }}>Dashboard is a lightweight wrapper that provides consistent header and content structure.</p>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>See other stories for complete dashboard examples with metrics, analytics, and project tracking.</p>
              </CardContent>
            </Card>
          </DashboardContent>
        </Dashboard>
      </div>
    </Page>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Page>
      <div style={{ padding: '2rem' }}>
        <Dashboard>
          <DashboardHeader
            title="Analytics Dashboard"
            subtitle="Track your key metrics and performance"
            actions={
              <>
                <Button variant="ghost" icon={<Download />} size="sm">
                  Export
                </Button>
                <Button variant="ghost" icon={<RefreshCw />} size="sm">
                  Refresh
                </Button>
                <Button variant="primary" icon={<Plus />} size="sm">
                  New Report
                </Button>
              </>
            }
          />
          <DashboardContent>
            <Card>
              <CardContent>
                <p>Dashboard with action buttons in the header</p>
              </CardContent>
            </Card>
          </DashboardContent>
        </Dashboard>
      </div>
    </Page>
  ),
};

export const MetricsOverview: Story = {
  render: () => (
    <Page>
      <div style={{ padding: '2rem' }}>
        <Dashboard>
          <DashboardHeader
            title="Metrics Overview"
            subtitle="Real-time business metrics"
            actions={
              <Button variant="ghost" icon={<RefreshCw />} size="sm">
                Refresh
              </Button>
            }
          />
          <DashboardContent>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              <Card>
                <CardContent>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 500, color: '#64748b' }}>Total Revenue</div>
                    <DollarSign className="h-4 w-4" style={{ color: '#64748b' }} />
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>$45,231</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: '#10b981' }}>
                    <TrendingUp className="h-4 w-4" />
                    <span>20.1% from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 500, color: '#64748b' }}>New Users</div>
                    <Users className="h-4 w-4" style={{ color: '#64748b' }} />
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>+2,350</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: '#10b981' }}>
                    <TrendingUp className="h-4 w-4" />
                    <span>180.1% from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 500, color: '#64748b' }}>Total Sales</div>
                    <ShoppingCart className="h-4 w-4" style={{ color: '#64748b' }} />
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>+12,234</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: '#10b981' }}>
                    <TrendingUp className="h-4 w-4" />
                    <span>19% from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 500, color: '#64748b' }}>Active Users</div>
                    <Activity className="h-4 w-4" style={{ color: '#64748b' }} />
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>+573</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: '#ef4444' }}>
                    <TrendingDown className="h-4 w-4" />
                    <span>5% from last hour</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </DashboardContent>
        </Dashboard>
      </div>
    </Page>
  ),
};

export const SalesAnalytics: Story = {
  render: () => (
    <Page>
      <div style={{ padding: '2rem' }}>
        <Dashboard>
          <DashboardHeader
            title="Sales Analytics"
            subtitle="Track sales performance and trends"
            actions={
              <>
                <Button variant="ghost" icon={<Download />} size="sm">Export Report</Button>
                <Button variant="primary" icon={<Plus />} size="sm">New Sale</Button>
              </>
            }
          />
          <DashboardContent>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              <Card>
                <CardHeader>
                  <CardTitle>Today's Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#3b82f6' }}>$12,345</div>
                  <div style={{ fontSize: '0.875rem', color: '#10b981', marginTop: '0.5rem' }}>↑ 12% vs yesterday</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#10b981' }}>$345,678</div>
                  <div style={{ fontSize: '0.875rem', color: '#10b981', marginTop: '0.5rem' }}>↑ 8% vs last month</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pending Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#f59e0b' }}>89</div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem' }}>Awaiting fulfillment</div>
                </CardContent>
              </Card>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <table style={{ width: '100%', fontSize: '0.875rem' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
                        <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: 600 }}>Order ID</th>
                        <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: 600 }}>Customer</th>
                        <th style={{ textAlign: 'right', padding: '0.75rem', fontWeight: 600 }}>Amount</th>
                        <th style={{ textAlign: 'right', padding: '0.75rem', fontWeight: 600 }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: '#1234', customer: 'John Doe', amount: '$234.50', status: 'Completed' },
                        { id: '#1235', customer: 'Jane Smith', amount: '$456.00', status: 'Pending' },
                        { id: '#1236', customer: 'Bob Johnson', amount: '$178.25', status: 'Completed' },
                        { id: '#1237', customer: 'Alice Brown', amount: '$892.00', status: 'Processing' },
                        { id: '#1238', customer: 'Charlie Davis', amount: '$345.75', status: 'Completed' },
                      ].map((order, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid #e5e5e5' }}>
                          <td style={{ padding: '0.75rem' }}>{order.id}</td>
                          <td style={{ padding: '0.75rem' }}>{order.customer}</td>
                          <td style={{ padding: '0.75rem', textAlign: 'right', fontWeight: 600 }}>{order.amount}</td>
                          <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                            <span style={{
                              padding: '0.25rem 0.5rem',
                              borderRadius: '0.25rem',
                              fontSize: '0.75rem',
                              backgroundColor: order.status === 'Completed' ? '#d1fae5' : order.status === 'Pending' ? '#fef3c7' : '#dbeafe',
                              color: order.status === 'Completed' ? '#065f46' : order.status === 'Pending' ? '#92400e' : '#1e40af'
                            }}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { name: 'Product A', sales: 234 },
                      { name: 'Product B', sales: 189 },
                      { name: 'Product C', sales: 156 },
                      { name: 'Product D', sales: 142 },
                      { name: 'Product E', sales: 128 },
                    ].map((product, i) => (
                      <div key={i} style={{ paddingBottom: '0.75rem', borderBottom: '1px solid #e5e5e5' }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>{product.name}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ flex: 1, height: '0.5rem', backgroundColor: '#e5e5e5', borderRadius: '0.25rem', marginRight: '0.5rem', overflow: 'hidden' }}>
                            <div style={{ height: '100%', backgroundColor: '#3b82f6', width: `${(product.sales / 234) * 100}%` }} />
                          </div>
                          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{product.sales}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </DashboardContent>
        </Dashboard>
      </div>
    </Page>
  ),
};

export const ProjectManagement: Story = {
  render: () => (
    <Page>
      <div style={{ padding: '2rem' }}>
        <Dashboard>
          <DashboardHeader
            title="Project Dashboard"
            subtitle="Track project progress and team performance"
            actions={
              <Button variant="primary" icon={<Plus />} size="sm">New Project</Button>
            }
          />
          <DashboardContent>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              {[
                { label: 'Total Projects', value: '24', color: '#3b82f6' },
                { label: 'In Progress', value: '12', color: '#f59e0b' },
                { label: 'Completed', value: '9', color: '#10b981' },
                { label: 'On Hold', value: '3', color: '#64748b' },
              ].map((stat, i) => (
                <Card key={i}>
                  <CardContent>
                    <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>{stat.label}</div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: stat.color }}>{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[
                    { name: 'Website Redesign', progress: 75, team: 5, deadline: '2 days' },
                    { name: 'Mobile App Development', progress: 45, team: 8, deadline: '2 weeks' },
                    { name: 'Marketing Campaign', progress: 90, team: 3, deadline: '1 day' },
                    { name: 'Database Migration', progress: 30, team: 4, deadline: '1 month' },
                  ].map((project, i) => (
                    <div key={i} style={{ padding: '1rem', border: '1px solid #e5e5e5', borderRadius: '0.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                        <div>
                          <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{project.name}</div>
                          <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                            {project.team} team members • Due in {project.deadline}
                          </div>
                        </div>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#3b82f6' }}>{project.progress}%</span>
                      </div>
                      <div style={{ height: '0.5rem', backgroundColor: '#e5e5e5', borderRadius: '0.25rem', overflow: 'hidden' }}>
                        <div style={{
                          height: '100%',
                          backgroundColor: project.progress >= 75 ? '#10b981' : project.progress >= 50 ? '#3b82f6' : '#f59e0b',
                          width: `${project.progress}%`,
                          transition: 'width 0.3s ease'
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </DashboardContent>
        </Dashboard>
      </div>
    </Page>
  ),
};

export const SimpleMetrics: Story = {
  render: () => (
    <Page>
      <div style={{ padding: '2rem' }}>
        <Dashboard>
          <DashboardHeader title="Simple Dashboard" />
          <DashboardContent>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <Card>
                <CardHeader>
                  <CardTitle>Metric 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ fontSize: '2rem', fontWeight: 700 }}>1,234</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Metric 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ fontSize: '2rem', fontWeight: 700 }}>5,678</div>
                </CardContent>
              </Card>
            </div>
          </DashboardContent>
        </Dashboard>
      </div>
    </Page>
  ),
};
