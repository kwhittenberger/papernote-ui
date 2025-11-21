import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TwoColumnContent from './TwoColumnContent';
import Page from './Page';
import Card, { CardHeader, CardTitle, CardContent } from './Card';
import Button from './Button';
import { User, Mail, Phone, MapPin, Calendar, Briefcase, Award, Settings } from 'lucide-react';

const meta = {
  title: 'Layout/TwoColumnContent',
  component: TwoColumnContent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Two-column layout primitive with 1/3 sidebar and 2/3 main content areas.

## Features
- **Fixed proportions**: 1/3 sidebar width, 2/3 main content width
- **Responsive**: Maintains aspect ratio across screen sizes
- **Gap spacing**: Consistent 1.5rem gap between columns
- **Flexible content**: Place any components in either column
- **Composable**: Works inside Page or other layout components

## Usage

\`\`\`tsx
import { TwoColumnContent, Card } from 'notebook-ui';

<TwoColumnContent
  sidebar={
    <Card>
      <CardHeader>
        <CardTitle>Sidebar Content</CardTitle>
      </CardHeader>
      <CardContent>
        Narrow column for secondary content
      </CardContent>
    </Card>
  }
>
  <Card>
    <CardHeader>
      <CardTitle>Main Content</CardTitle>
    </CardHeader>
    <CardContent>
      Wide column for primary content
    </CardContent>
  </Card>
</TwoColumnContent>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    sidebar: {
      description: 'Content for narrow sidebar column (1/3 width)',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    children: {
      description: 'Content for main column (2/3 width)',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
} satisfies Meta<typeof TwoColumnContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Page>
      <div style={{ padding: '2rem' }}>
        <TwoColumnContent
          sidebar={
            <Card>
              <CardHeader>
                <CardTitle>Sidebar</CardTitle>
              </CardHeader>
              <CardContent>
                <p>This column takes 1/3 of the width</p>
              </CardContent>
            </Card>
          }
        >
          <Card>
            <CardHeader>
              <CardTitle>Main Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This column takes 2/3 of the width</p>
            </CardContent>
          </Card>
        </TwoColumnContent>
      </div>
    </Page>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <Page>
      <div style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          User Profile
        </h1>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>
          View and manage user information
        </p>

        <TwoColumnContent
          sidebar={
            <>
              <Card>
                <CardContent>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '96px',
                      height: '96px',
                      borderRadius: '50%',
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      margin: '0 auto 1rem'
                    }}>
                      JD
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                      John Doe
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>
                      Software Engineer
                    </p>
                    <Button variant="primary" size="sm" style={{ width: '100%' }}>
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <Mail className="h-5 w-5" style={{ color: '#64748b', flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Email</div>
                        <div style={{ fontSize: '0.875rem' }}>john@example.com</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <Phone className="h-5 w-5" style={{ color: '#64748b', flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Phone</div>
                        <div style={{ fontSize: '0.875rem' }}>+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <MapPin className="h-5 w-5" style={{ color: '#64748b', flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Location</div>
                        <div style={{ fontSize: '0.875rem' }}>San Francisco, CA</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          }
        >
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
                Experienced software engineer with a passion for building scalable web applications. 
                Specializing in React, TypeScript, and Node.js with over 5 years of professional experience.
              </p>
              <p style={{ lineHeight: 1.7 }}>
                Currently working on cloud-native solutions and microservices architecture. 
                Always eager to learn new technologies and share knowledge with the community.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <Briefcase className="h-5 w-5" style={{ color: '#3b82f6', flexShrink: 0, marginTop: '0.125rem' }} />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                        Senior Software Engineer
                      </h4>
                      <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>
                        Tech Corp • 2020 - Present
                      </p>
                      <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                        Leading development of cloud-based microservices platform. 
                        Mentoring junior developers and conducting code reviews.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <Briefcase className="h-5 w-5" style={{ color: '#3b82f6', flexShrink: 0, marginTop: '0.125rem' }} />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                        Software Engineer
                      </h4>
                      <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>
                        StartupXYZ • 2018 - 2020
                      </p>
                      <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                        Built and maintained React applications. Implemented CI/CD pipelines 
                        and improved deployment processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills & Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>Technical Skills</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['React', 'TypeScript', 'Node.js', 'GraphQL', 'Docker', 'AWS', 'PostgreSQL', 'Redis'].map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: '0.375rem 0.75rem',
                        backgroundColor: '#eff6ff',
                        color: '#1e40af',
                        borderRadius: '0.375rem',
                        fontSize: '0.875rem'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Award className="h-4 w-4" style={{ color: '#f59e0b' }} />
                  Certifications
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li style={{ fontSize: '0.875rem' }}>AWS Certified Solutions Architect</li>
                  <li style={{ fontSize: '0.875rem' }}>Google Cloud Professional</li>
                  <li style={{ fontSize: '0.875rem' }}>React Advanced Certification</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TwoColumnContent>
      </div>
    </Page>
  ),
};

export const ArticleWithSidebar: Story = {
  render: () => (
    <Page>
      <div style={{ padding: '2rem' }}>
        <TwoColumnContent
          sidebar={
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Table of Contents</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <a href="#intro" style={{ fontSize: '0.875rem', color: '#3b82f6', textDecoration: 'none' }}>
                      Introduction
                    </a>
                    <a href="#getting-started" style={{ fontSize: '0.875rem', color: '#3b82f6', textDecoration: 'none' }}>
                      Getting Started
                    </a>
                    <a href="#features" style={{ fontSize: '0.875rem', color: '#3b82f6', textDecoration: 'none' }}>
                      Key Features
                    </a>
                    <a href="#examples" style={{ fontSize: '0.875rem', color: '#3b82f6', textDecoration: 'none' }}>
                      Examples
                    </a>
                    <a href="#conclusion" style={{ fontSize: '0.875rem', color: '#3b82f6', textDecoration: 'none' }}>
                      Conclusion
                    </a>
                  </nav>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Related Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <a href="#" style={{ fontSize: '0.875rem', color: '#3b82f6', textDecoration: 'none' }}>
                      Advanced React Patterns
                    </a>
                    <a href="#" style={{ fontSize: '0.875rem', color: '#3b82f6', textDecoration: 'none' }}>
                      TypeScript Best Practices
                    </a>
                    <a href="#" style={{ fontSize: '0.875rem', color: '#3b82f6', textDecoration: 'none' }}>
                      Building Scalable Apps
                    </a>
                  </div>
                </CardContent>
              </Card>
            </>
          }
        >
          <article>
            <h1 id="intro" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              Getting Started with React and TypeScript
            </h1>
            <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '2rem' }}>
              Published on November 20, 2025 • 10 min read
            </div>

            <Card>
              <CardContent>
                <h2 id="getting-started" style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
                  Introduction
                </h2>
                <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
                  React and TypeScript together provide a powerful combination for building modern web applications. 
                  This guide will walk you through the fundamentals of setting up and using both technologies effectively.
                </p>
                <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h2 id="features" style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                  Key Features
                </h2>
                <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', lineHeight: 1.7 }}>
                  <li>Type safety and IntelliSense support</li>
                  <li>Better refactoring capabilities</li>
                  <li>Improved code documentation</li>
                  <li>Enhanced developer experience</li>
                </ul>

                <h2 id="examples" style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                  Code Examples
                </h2>
                <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
                  Here's how you can create a simple component with TypeScript:
                </p>
                <pre style={{
                  padding: '1rem',
                  backgroundColor: '#f5f5f4',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  overflow: 'auto',
                  marginBottom: '1rem'
                }}>
                  {`interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};`}
                </pre>

                <h2 id="conclusion" style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                  Conclusion
                </h2>
                <p style={{ lineHeight: 1.7 }}>
                  React and TypeScript are powerful tools that, when combined, create a robust development environment. 
                  Start small, learn incrementally, and gradually adopt more advanced patterns as you grow comfortable with the basics.
                </p>
              </CardContent>
            </Card>
          </article>
        </TwoColumnContent>
      </div>
    </Page>
  ),
};

export const SettingsLayout: Story = {
  render: () => (
    <Page>
      <div style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
          Settings
        </h1>

        <TwoColumnContent
          sidebar={
            <Card>
              <CardContent>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {[
                    { icon: <User />, label: 'Profile', active: true },
                    { icon: <Mail />, label: 'Notifications' },
                    { icon: <Settings />, label: 'Preferences' },
                    { icon: <Award />, label: 'Billing' },
                  ].map((item, i) => (
                    <button
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.75rem',
                        backgroundColor: item.active ? '#eff6ff' : 'transparent',
                        border: 'none',
                        borderRadius: '0.375rem',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        fontWeight: item.active ? 600 : 400,
                        color: item.active ? '#1e40af' : '#0f172a',
                        textAlign: 'left',
                        width: '100%'
                      }}
                    >
                      <span style={{ color: item.active ? '#3b82f6' : '#64748b' }}>
                        {React.cloneElement(item.icon as React.ReactElement, { className: 'h-4 w-4' })}
                      </span>
                      {item.label}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John"
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
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      style={{
                        width: '100%',
                        padding: '0.5rem 0.75rem',
                        border: '1px solid #e5e5e5',
                        borderRadius: '0.375rem',
                        fontSize: '0.875rem'
                      }}
                    />
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                      Email
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
                <CardTitle>Bio</CardTitle>
              </CardHeader>
              <CardContent>
                <textarea
                  rows={4}
                  placeholder="Tell us about yourself..."
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    border: '1px solid #e5e5e5',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    fontFamily: 'inherit'
                  }}
                  defaultValue="Software engineer passionate about building great products."
                />
              </CardContent>
            </Card>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <Button variant="ghost">Cancel</Button>
              <Button variant="primary">Save Changes</Button>
            </div>
          </div>
        </TwoColumnContent>
      </div>
    </Page>
  ),
};

export const ProductDetails: Story = {
  render: () => (
    <Page>
      <div style={{ padding: '2rem' }}>
        <TwoColumnContent
          sidebar={
            <>
              <Card>
                <CardContent>
                  <div style={{
                    width: '100%',
                    aspectRatio: '1',
                    backgroundColor: '#f5f5f4',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <span style={{ fontSize: '3rem' }}>📦</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    Wireless Headphones
                  </h3>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#3b82f6', marginBottom: '1rem' }}>
                    $299.99
                  </div>
                  <Button variant="primary" size="md" style={{ width: '100%', marginBottom: '0.5rem' }}>
                    Add to Cart
                  </Button>
                  <Button variant="ghost" size="md" style={{ width: '100%' }}>
                    Add to Wishlist
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#64748b' }}>Brand</span>
                      <span style={{ fontWeight: 500 }}>AudioTech</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#64748b' }}>Weight</span>
                      <span style={{ fontWeight: 500 }}>250g</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#64748b' }}>Battery Life</span>
                      <span style={{ fontWeight: 500 }}>30 hours</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#64748b' }}>Connectivity</span>
                      <span style={{ fontWeight: 500 }}>Bluetooth 5.0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Card>
              <CardHeader>
                <CardTitle>Product Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
                  Experience premium sound quality with our latest wireless headphones. Featuring active noise cancellation, 
                  30-hour battery life, and comfortable over-ear design perfect for all-day listening.
                </p>
                <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
                  The advanced Bluetooth 5.0 technology ensures stable connection up to 10 meters away. Quick charge 
                  feature provides 5 hours of playback with just 10 minutes of charging.
                </p>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                  Key Features:
                </h4>
                <ul style={{ marginLeft: '1.5rem', lineHeight: 1.7 }}>
                  <li>Active Noise Cancellation (ANC)</li>
                  <li>30-hour battery life</li>
                  <li>Quick charge technology</li>
                  <li>Premium sound quality</li>
                  <li>Comfortable over-ear design</li>
                  <li>Foldable for easy storage</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <div style={{ fontSize: '3rem', fontWeight: 700 }}>4.8</div>
                    <div>
                      <div style={{ color: '#f59e0b', marginBottom: '0.25rem' }}>★★★★★</div>
                      <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Based on 234 reviews</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[
                    { author: 'Sarah M.', rating: 5, text: 'Amazing sound quality! Best headphones I\'ve ever owned.' },
                    { author: 'Mike T.', rating: 5, text: 'Comfortable for all-day wear. Battery life is excellent.' },
                    { author: 'Emily R.', rating: 4, text: 'Great product, slightly pricey but worth it for the quality.' },
                  ].map((review, i) => (
                    <div key={i} style={{ paddingBottom: '1rem', borderBottom: i < 2 ? '1px solid #e5e5e5' : 'none' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span style={{ fontWeight: 600 }}>{review.author}</span>
                        <span style={{ color: '#f59e0b', fontSize: '0.875rem' }}>
                          {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#64748b' }}>
                        {review.text}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TwoColumnContent>
      </div>
    </Page>
  ),
};
