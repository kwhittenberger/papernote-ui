import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import PullToRefresh from './PullToRefresh';

const meta: Meta<typeof PullToRefresh> = {
  title: 'Mobile/PullToRefresh',
  component: PullToRefresh,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        component: 'Native-feeling pull-to-refresh gesture handler for mobile content. Only activates when scrolled to top.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PullToRefresh>;

// Helper component for interactive stories
const RefreshableList = ({ 
  itemCount = 10, 
  pullThreshold = 80,
  maxPull = 120,
  disabled = false,
}: { 
  itemCount?: number;
  pullThreshold?: number;
  maxPull?: number;
  disabled?: boolean;
}) => {
  const [items, setItems] = useState(() => 
    Array.from({ length: itemCount }, (_, i) => ({
      id: i + 1,
      title: `Item ${i + 1}`,
      timestamp: new Date().toLocaleTimeString(),
    }))
  );
  const [refreshCount, setRefreshCount] = useState(0);

  const handleRefresh = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setRefreshCount(prev => prev + 1);
    setItems(prev => [
      {
        id: Date.now(),
        title: `New Item (Refresh #${refreshCount + 1})`,
        timestamp: new Date().toLocaleTimeString(),
      },
      ...prev,
    ]);
  };

  return (
    <PullToRefresh 
      onRefresh={handleRefresh}
      pullThreshold={pullThreshold}
      maxPull={maxPull}
      disabled={disabled}
      className="h-screen"
    >
      <div style={{ padding: '16px', background: '#f5f5f4', minHeight: '100vh' }}>
        <div style={{ 
          padding: '12px 16px', 
          background: '#fef3c7', 
          borderRadius: '8px', 
          marginBottom: '16px',
          fontSize: '14px',
        }}>
          <strong>Pull down to refresh</strong>
          <p style={{ color: '#666', marginTop: '4px' }}>
            Refreshed {refreshCount} times. Items: {items.length}
          </p>
        </div>
        
        {items.map((item) => (
          <div 
            key={item.id} 
            style={{ 
              padding: '16px', 
              margin: '8px 0', 
              background: 'white', 
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ fontWeight: '500' }}>{item.title}</div>
            <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
              Added at {item.timestamp}
            </div>
          </div>
        ))}
      </div>
    </PullToRefresh>
  );
};

export const Default: Story = {
  render: () => <RefreshableList />,
  parameters: {
    docs: {
      description: {
        story: 'Pull down from the top to trigger a refresh. The spinner appears after pulling past the threshold.',
      },
    },
  },
};

export const LowThreshold: Story = {
  render: () => <RefreshableList pullThreshold={50} maxPull={80} />,
  parameters: {
    docs: {
      description: {
        story: 'Lower threshold (50px) makes it easier to trigger refresh.',
      },
    },
  },
};

export const HighThreshold: Story = {
  render: () => <RefreshableList pullThreshold={120} maxPull={180} />,
  parameters: {
    docs: {
      description: {
        story: 'Higher threshold (120px) requires more pull distance to trigger refresh.',
      },
    },
  },
};

export const Disabled: Story = {
  render: () => <RefreshableList disabled />,
  parameters: {
    docs: {
      description: {
        story: 'Pull-to-refresh can be disabled when not needed.',
      },
    },
  },
};

export const CustomIndicator: Story = {
  render: () => {
    const [items, setItems] = useState(
      Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`)
    );

    const handleRefresh = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setItems(prev => [`New Item ${Date.now()}`, ...prev]);
    };

    return (
      <PullToRefresh
        onRefresh={handleRefresh}
        loadingIndicator={
          <RefreshCw className="h-6 w-6 text-green-600 animate-spin" />
        }
        pullIndicator={
          <RefreshCw className="h-6 w-6 text-gray-400" />
        }
        className="h-screen"
      >
        <div style={{ padding: '16px', background: '#f5f5f4', minHeight: '100vh' }}>
          <div style={{ 
            padding: '12px 16px', 
            background: '#dcfce7', 
            borderRadius: '8px', 
            marginBottom: '16px',
          }}>
            Custom refresh indicator (green spinner)
          </div>
          {items.map((item, i) => (
            <div 
              key={i} 
              style={{ 
                padding: '16px', 
                margin: '8px 0', 
                background: 'white', 
                borderRadius: '8px' 
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </PullToRefresh>
    );
  },
};

export const WithLongContent: Story = {
  render: () => <RefreshableList itemCount={30} />,
  parameters: {
    docs: {
      description: {
        story: 'With long scrollable content. Pull-to-refresh only activates when scrolled to the very top.',
      },
    },
  },
};

export const EmptyState: Story = {
  render: () => {
    const [items, setItems] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const handleRefresh = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setItems(['Fetched Item 1', 'Fetched Item 2', 'Fetched Item 3']);
      setLoading(false);
    };

    return (
      <PullToRefresh onRefresh={handleRefresh} className="h-screen">
        <div style={{ 
          padding: '16px', 
          background: '#f5f5f4', 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {items.length === 0 ? (
            <div style={{ 
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666',
            }}>
              <RefreshCw className="h-12 w-12 mb-4 text-gray-300" />
              <p style={{ fontWeight: '500' }}>No items yet</p>
              <p style={{ fontSize: '14px' }}>Pull down to load items</p>
            </div>
          ) : (
            items.map((item, i) => (
              <div 
                key={i} 
                style={{ 
                  padding: '16px', 
                  margin: '8px 0', 
                  background: 'white', 
                  borderRadius: '8px' 
                }}
              >
                {item}
              </div>
            ))
          )}
        </div>
      </PullToRefresh>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Pull-to-refresh works well with empty states to load initial data.',
      },
    },
  },
};

export const MobileInstructions: Story = {
  render: () => (
    <div style={{ padding: '24px', background: '#f5f5f4', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>
        Pull to Refresh Component
      </h2>
      
      <div style={{ background: 'white', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
        <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>Usage</h3>
        <pre style={{ 
          background: '#f1f5f9', 
          padding: '12px', 
          borderRadius: '4px', 
          fontSize: '12px',
          overflow: 'auto',
        }}>
{`<PullToRefresh
  onRefresh={async () => {
    await fetchLatestData();
  }}
  pullThreshold={80}
  maxPull={120}
>
  {content}
</PullToRefresh>`}
        </pre>
      </div>

      <div style={{ background: 'white', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
        <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>Props</h3>
        <ul style={{ fontSize: '14px', lineHeight: '1.6' }}>
          <li><strong>onRefresh</strong>: Async function called on refresh</li>
          <li><strong>pullThreshold</strong>: Distance to trigger (default: 80px)</li>
          <li><strong>maxPull</strong>: Maximum pull distance (default: 120px)</li>
          <li><strong>disabled</strong>: Disable pull-to-refresh</li>
          <li><strong>loadingIndicator</strong>: Custom loading spinner</li>
          <li><strong>pullIndicator</strong>: Custom pull indicator</li>
        </ul>
      </div>

      <div style={{ background: '#fef3c7', padding: '16px', borderRadius: '8px' }}>
        <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>Testing</h3>
        <p style={{ fontSize: '14px' }}>
          To test on desktop, use Chrome DevTools mobile emulation with touch simulation enabled.
          Click and drag down from the top of the content area.
        </p>
      </div>
    </div>
  ),
};
