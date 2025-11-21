import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Accordion from './Accordion';
import { Plus, Minus } from 'lucide-react';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems = [
  {
    id: '1',
    title: 'What is your return policy?',
    content: 'We offer a 30-day return policy on all items. Items must be in original condition with tags attached.',
  },
  {
    id: '2',
    title: 'How long does shipping take?',
    content: 'Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days.',
  },
  {
    id: '3',
    title: 'Do you ship internationally?',
    content: 'Yes, we ship to over 50 countries worldwide. International shipping times vary by destination.',
  },
];

const detailedItems = [
  {
    id: '1',
    title: 'Getting Started',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <p>Follow these steps to get started:</p>
        <ol style={{ marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Create an account</li>
          <li>Complete your profile</li>
          <li>Verify your email address</li>
          <li>Start using the platform</li>
        </ol>
      </div>
    ),
  },
  {
    id: '2',
    title: 'Account Settings',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <p>Manage your account settings:</p>
        <ul style={{ marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Update profile information</li>
          <li>Change password</li>
          <li>Manage notifications</li>
          <li>Privacy settings</li>
        </ul>
      </div>
    ),
  },
  {
    id: '3',
    title: 'Billing Information',
    content: 'Update your payment methods, view invoices, and manage your subscription plan.',
  },
];

export const Default: Story = {
  args: {
    items: basicItems,
  },
};

export const DefaultExpanded: Story = {
  args: {
    items: basicItems,
    defaultExpanded: ['1'],
  },
};

export const MultipleExpanded: Story = {
  args: {
    items: basicItems,
    defaultExpanded: ['1', '2'],
    allowMultiple: true,
  },
};

export const SingleExpandOnly: Story = {
  args: {
    items: basicItems,
    allowMultiple: false,
  },
};

export const CustomIcons: Story = {
  args: {
    items: basicItems,
    expandIcon: <Plus className="h-5 w-5" />,
    collapseIcon: <Minus className="h-5 w-5" />,
  },
};

export const WithRichContent: Story = {
  args: {
    items: detailedItems,
  },
};

export const FAQ: Story = {
  render: () => {
    const faqItems = [
      {
        id: '1',
        title: 'How do I create an account?',
        content: 'Click the "Sign Up" button in the top right corner and follow the prompts to create your account.',
      },
      {
        id: '2',
        title: 'Is my data secure?',
        content: 'Yes, we use industry-standard encryption and security measures to protect your data.',
      },
      {
        id: '3',
        title: 'Can I cancel my subscription?',
        content: 'Yes, you can cancel your subscription at any time from your account settings. You\'ll continue to have access until the end of your billing period.',
      },
      {
        id: '4',
        title: 'Do you offer customer support?',
        content: 'Yes, we offer 24/7 customer support via email and live chat. Premium users also have access to phone support.',
      },
      {
        id: '5',
        title: 'What payment methods do you accept?',
        content: 'We accept all major credit cards (Visa, MasterCard, American Express) as well as PayPal and bank transfers.',
      },
    ];

    return (
      <div>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 600 }}>
          Frequently Asked Questions
        </h2>
        <Accordion items={faqItems} />
      </div>
    );
  },
};

export const ProductDetails: Story = {
  render: () => {
    const productSections = [
      {
        id: '1',
        title: 'Description',
        content: (
          <div>
            <p>This premium product features high-quality materials and expert craftsmanship. Perfect for everyday use, it combines style and functionality.</p>
            <ul style={{ marginTop: '0.75rem', marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <li>Premium materials</li>
              <li>Durable construction</li>
              <li>Modern design</li>
              <li>Available in multiple colors</li>
            </ul>
          </div>
        ),
      },
      {
        id: '2',
        title: 'Specifications',
        content: (
          <table style={{ width: '100%', fontSize: '0.875rem' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.5rem 0', fontWeight: 500 }}>Dimensions</td>
                <td style={{ padding: '0.5rem 0', color: '#64748b' }}>10" x 8" x 2"</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.5rem 0', fontWeight: 500 }}>Weight</td>
                <td style={{ padding: '0.5rem 0', color: '#64748b' }}>1.5 lbs</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.5rem 0', fontWeight: 500 }}>Material</td>
                <td style={{ padding: '0.5rem 0', color: '#64748b' }}>Premium leather</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem 0', fontWeight: 500 }}>Origin</td>
                <td style={{ padding: '0.5rem 0', color: '#64748b' }}>Made in USA</td>
              </tr>
            </tbody>
          </table>
        ),
      },
      {
        id: '3',
        title: 'Shipping & Returns',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div>
              <strong>Shipping:</strong> Free standard shipping on orders over $50. Express shipping available.
            </div>
            <div>
              <strong>Returns:</strong> 30-day return policy. Items must be in original condition.
            </div>
            <div>
              <strong>Warranty:</strong> 1-year manufacturer warranty included.
            </div>
          </div>
        ),
      },
    ];

    return (
      <Accordion items={productSections} defaultExpanded={['1']} />
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string[]>(['1']);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ padding: '1rem', backgroundColor: '#f5f5f4', borderRadius: '0.375rem' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
            Expanded sections: {expanded.length > 0 ? expanded.join(', ') : 'None'}
          </div>
          <button
            onClick={() => setExpanded(expanded.length === 3 ? [] : ['1', '2', '3'])}
            style={{
              padding: '0.25rem 0.75rem',
              fontSize: '0.875rem',
              border: '1px solid #e5e5e5',
              borderRadius: '0.375rem',
              background: 'white',
              cursor: 'pointer',
            }}
          >
            {expanded.length === 3 ? 'Collapse All' : 'Expand All'}
          </button>
        </div>
        <Accordion
          items={basicItems}
          expanded={expanded}
          onExpandedChange={setExpanded}
          allowMultiple
        />
      </div>
    );
  },
};
