import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ShoppingCart, Trash2, X, FileText, Check } from 'lucide-react';
import ExpandablePanel, { ExpandablePanelSpacer, ExpandablePanelContainer } from './ExpandablePanel';
import Stack from './Stack';
import Text from './Text';
import Button from './Button';
import Badge from './Badge';
import Card, { CardContent } from './Card';
import Checkbox from './Checkbox';

const meta: Meta<typeof ExpandablePanel> = {
  title: 'Components/ExpandablePanel',
  component: ExpandablePanel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `A panel that sticks to the bottom (or top) and can expand/collapse. Useful for selection summaries, shopping carts, batch actions, and persistent toolbars.

**Two modes of operation:**
- \`viewport\` (default): Fixed to the viewport edges. Use for standalone pages.
- \`container\`: Sticky within its parent container. Use inside Page/AppLayout to respect StatusBar and other layout elements.`,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ minHeight: '500px', padding: '20px', backgroundColor: '#f5f5f4' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExpandablePanel>;

/**
 * Basic expandable panel at the bottom of the page (viewport mode).
 */
export const Default: Story = {
  render: () => (
    <>
      <div style={{ marginBottom: '100px' }}>
        <Text size="lg" weight="semibold">Page Content</Text>
        <Text color="muted">Scroll down to see more content. The panel is fixed at the bottom.</Text>
        {Array.from({ length: 10 }).map((_, i) => (
          <Card key={i} className="mt-4">
            <CardContent>
              <Text>Content block {i + 1}</Text>
            </CardContent>
          </Card>
        ))}
      </div>
      <ExpandablePanelSpacer />
      <ExpandablePanel
        collapsedContent={<Text>Click to expand</Text>}
        expandedHeight="200px"
      >
        <Text>This is the expanded content area. You can put any content here.</Text>
      </ExpandablePanel>
    </>
  ),
};

/**
 * Container mode - panel is sticky within its parent container.
 * This mode is ideal for use inside Page/AppLayout where you want the panel
 * to respect the StatusBar and only apply to the current page content.
 */
export const ContainerMode: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '500px', backgroundColor: '#f5f5f4' }}>
        <Story />
      </div>
    ),
  ],
  render: function ContainerModeStory() {
    const [selectedItems, setSelectedItems] = useState(['Item 1', 'Item 2']);

    return (
      <ExpandablePanelContainer className="h-full">
        {/* Main scrollable content area */}
        <div className="flex-1 overflow-auto p-4">
          <Text size="lg" weight="semibold">Container Mode Example</Text>
          <Text color="muted" className="mb-4">
            The panel is sticky within this container, not fixed to the viewport.
            This respects StatusBar and other layout elements.
          </Text>
          
          <Stack spacing="sm">
            {['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'].map(item => (
              <Card key={item}>
                <CardContent>
                  <Checkbox
                    checked={selectedItems.includes(item)}
                    onChange={(checked) => {
                      if (checked) {
                        setSelectedItems(prev => [...prev, item]);
                      } else {
                        setSelectedItems(prev => prev.filter(i => i !== item));
                      }
                    }}
                    label={item}
                  />
                </CardContent>
              </Card>
            ))}
          </Stack>
        </div>

        {/* Panel sticky to bottom of container */}
        {selectedItems.length > 0 && (
          <ExpandablePanel
            mode="container"
            collapsedContent={
              <Stack direction="horizontal" align="center" gap="sm">
                <Badge variant="primary">{selectedItems.length}</Badge>
                <Text>items selected</Text>
              </Stack>
            }
            headerActions={
              <Button size="sm" variant="ghost" onClick={() => setSelectedItems([])}>
                Clear
              </Button>
            }
            expandedHeight="200px"
          >
            <Stack spacing="sm">
              <Text weight="semibold">Selected:</Text>
              {selectedItems.map(item => (
                <Text key={item} size="sm">{item}</Text>
              ))}
            </Stack>
          </ExpandablePanel>
        )}
      </ExpandablePanelContainer>
    );
  },
};

/**
 * Simulates how the panel would look inside a Page layout with a status bar.
 * The container mode ensures the panel stays within the page content area.
 */
export const InsidePageLayout: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
  render: function InsidePageLayoutStory() {
    return (
      <>
        {/* Simulated header */}
        <div className="h-12 bg-white border-b border-ink-200 flex items-center px-4">
          <Text weight="semibold">App Header</Text>
        </div>

        {/* Main content area (like Page component) */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <ExpandablePanelContainer className="h-full">
            <div className="flex-1 overflow-auto p-4 bg-paper-50">
              <Text size="lg" weight="semibold">Page Content</Text>
              <Text color="muted" className="mb-4">
                This simulates a Page inside AppLayout. The expandable panel
                respects the header above and status bar below.
              </Text>
              
              {Array.from({ length: 8 }).map((_, i) => (
                <Card key={i} className="mt-4">
                  <CardContent>
                    <Text>Content row {i + 1}</Text>
                  </CardContent>
                </Card>
              ))}
            </div>

            <ExpandablePanel
              mode="container"
              collapsedContent={
                <Stack direction="horizontal" align="center" gap="sm">
                  <Check className="h-4 w-4 text-success-600" />
                  <Text>3 items ready for export</Text>
                </Stack>
              }
              headerActions={
                <Button size="sm" variant="primary">
                  Export
                </Button>
              }
              expandedHeight="180px"
            >
              <Stack spacing="sm">
                <Text weight="semibold">Export Preview</Text>
                <Text size="sm">Item A - Ready</Text>
                <Text size="sm">Item B - Ready</Text>
                <Text size="sm">Item C - Ready</Text>
              </Stack>
            </ExpandablePanel>
          </ExpandablePanelContainer>
        </div>

        {/* Simulated status bar */}
        <div className="h-8 bg-ink-800 text-white flex items-center px-4">
          <Text size="sm" className="text-white">Status Bar - This stays visible</Text>
        </div>
      </>
    );
  },
};

/**
 * Panel showing selected items count with actions.
 */
export const SelectionSummary: Story = {
  render: function SelectionSummaryStory() {
    const [selectedItems, setSelectedItems] = useState(['Item 1', 'Item 2', 'Item 3']);
    const [expanded, setExpanded] = useState(false);

    const removeItem = (item: string) => {
      setSelectedItems(prev => prev.filter(i => i !== item));
    };

    const clearAll = () => {
      setSelectedItems([]);
    };

    if (selectedItems.length === 0) {
      return (
        <div style={{ padding: '20px' }}>
          <Text color="muted">No items selected. The panel is hidden.</Text>
        </div>
      );
    }

    return (
      <>
        <div style={{ marginBottom: '80px' }}>
          <Text size="lg" weight="semibold">Select Items</Text>
          <Stack spacing="sm" className="mt-4">
            {['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].map(item => (
              <Card key={item}>
                <CardContent>
                  <Checkbox
                    checked={selectedItems.includes(item)}
                    onChange={(checked) => {
                      if (checked) {
                        setSelectedItems(prev => [...prev, item]);
                      } else {
                        removeItem(item);
                      }
                    }}
                    label={item}
                  />
                </CardContent>
              </Card>
            ))}
          </Stack>
        </div>
        <ExpandablePanelSpacer />
        <ExpandablePanel
          expanded={expanded}
          onExpandedChange={setExpanded}
          collapsedContent={
            <Stack direction="horizontal" align="center" gap="sm">
              <Badge variant="primary">{selectedItems.length}</Badge>
              <Text>items selected</Text>
            </Stack>
          }
          headerActions={
            <Button size="sm" variant="ghost" onClick={clearAll}>
              Clear All
            </Button>
          }
          expandedHeight="250px"
        >
          <Stack spacing="sm">
            <Text weight="semibold">Selected Items:</Text>
            {selectedItems.map(item => (
              <Stack key={item} direction="horizontal" justify="between" align="center">
                <Text>{item}</Text>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => removeItem(item)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </Stack>
            ))}
          </Stack>
        </ExpandablePanel>
      </>
    );
  },
};

/**
 * Shopping cart style panel.
 */
export const ShoppingCartPanel: Story = {
  render: function ShoppingCartStory() {
    const [cartItems] = useState([
      { id: 1, name: 'Product A', price: 29.99, qty: 2 },
      { id: 2, name: 'Product B', price: 49.99, qty: 1 },
      { id: 3, name: 'Product C', price: 19.99, qty: 3 },
    ]);

    const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
      <>
        <div style={{ marginBottom: '80px' }}>
          <Text size="lg" weight="semibold">Product Catalog</Text>
          <Text color="muted">Browse products below. Your cart is at the bottom.</Text>
        </div>
        <ExpandablePanelSpacer size="lg" />
        <ExpandablePanel
          collapsedContent={
            <Stack direction="horizontal" align="center" gap="md">
              <ShoppingCart className="h-5 w-5 text-ink-500" />
              <Text weight="medium">{cartItems.length} items</Text>
              <Text color="muted">|</Text>
              <Text weight="semibold">${total.toFixed(2)}</Text>
            </Stack>
          }
          headerActions={
            <Button size="sm" variant="primary">
              Checkout
            </Button>
          }
          expandedHeight="300px"
          size="lg"
          variant="elevated"
        >
          <Stack spacing="md">
            {cartItems.map(item => (
              <Stack key={item.id} direction="horizontal" justify="between" align="center">
                <Stack spacing="xs">
                  <Text weight="medium">{item.name}</Text>
                  <Text size="sm" color="muted">Qty: {item.qty}</Text>
                </Stack>
                <Text weight="semibold">${(item.price * item.qty).toFixed(2)}</Text>
              </Stack>
            ))}
            <div className="border-t border-ink-200 pt-3 mt-2">
              <Stack direction="horizontal" justify="between">
                <Text weight="semibold">Total</Text>
                <Text weight="bold" size="lg">${total.toFixed(2)}</Text>
              </Stack>
            </div>
          </Stack>
        </ExpandablePanel>
      </>
    );
  },
};

/**
 * Panel positioned at the top of the viewport.
 */
export const TopPosition: Story = {
  render: () => (
    <>
      <ExpandablePanel
        position="top"
        collapsedContent={
          <Stack direction="horizontal" align="center" gap="sm">
            <FileText className="h-4 w-4" />
            <Text>Document info</Text>
          </Stack>
        }
        expandedHeight="200px"
      >
        <Stack spacing="sm">
          <Text weight="semibold">Document Details</Text>
          <Text size="sm">Created: January 15, 2025</Text>
          <Text size="sm">Modified: January 20, 2025</Text>
          <Text size="sm">Author: John Doe</Text>
          <Text size="sm">Status: Published</Text>
        </Stack>
      </ExpandablePanel>
      <div style={{ marginTop: '80px' }}>
        <Text size="lg" weight="semibold">Page Content</Text>
        <Text color="muted">The panel is fixed at the top.</Text>
      </div>
    </>
  ),
};

/**
 * Small size variant.
 */
export const SmallSize: Story = {
  render: () => (
    <>
      <ExpandablePanelSpacer size="sm" />
      <ExpandablePanel
        size="sm"
        collapsedContent={<Text size="sm">Small panel header</Text>}
        expandedHeight="150px"
      >
        <Text size="sm">Compact content area for the small variant.</Text>
      </ExpandablePanel>
    </>
  ),
};

/**
 * Large size variant.
 */
export const LargeSize: Story = {
  render: () => (
    <>
      <ExpandablePanelSpacer size="lg" />
      <ExpandablePanel
        size="lg"
        collapsedContent={<Text>Large panel with more header space</Text>}
        expandedHeight="350px"
      >
        <Text>More spacious content area for the large variant.</Text>
      </ExpandablePanel>
    </>
  ),
};

/**
 * Different visual variants.
 */
export const Variants: Story = {
  render: function VariantsStory() {
    const [variant, setVariant] = useState<'default' | 'elevated' | 'bordered'>('elevated');

    return (
      <>
        <Stack spacing="md" style={{ marginBottom: '80px' }}>
          <Text weight="semibold">Select Variant:</Text>
          <Stack direction="horizontal" gap="sm">
            <Button
              size="sm"
              variant={variant === 'default' ? 'primary' : 'secondary'}
              onClick={() => setVariant('default')}
            >
              Default
            </Button>
            <Button
              size="sm"
              variant={variant === 'elevated' ? 'primary' : 'secondary'}
              onClick={() => setVariant('elevated')}
            >
              Elevated
            </Button>
            <Button
              size="sm"
              variant={variant === 'bordered' ? 'primary' : 'secondary'}
              onClick={() => setVariant('bordered')}
            >
              Bordered
            </Button>
          </Stack>
        </Stack>
        <ExpandablePanelSpacer />
        <ExpandablePanel
          variant={variant}
          collapsedContent={<Text>Variant: {variant}</Text>}
          expandedHeight="200px"
        >
          <Text>Content with {variant} variant styling.</Text>
        </ExpandablePanel>
      </>
    );
  },
};

/**
 * Controlled expanded state.
 */
export const Controlled: Story = {
  render: function ControlledStory() {
    const [expanded, setExpanded] = useState(false);

    return (
      <>
        <Stack spacing="md" style={{ marginBottom: '80px' }}>
          <Text weight="semibold">External Controls:</Text>
          <Stack direction="horizontal" gap="sm">
            <Button onClick={() => setExpanded(true)}>Expand</Button>
            <Button onClick={() => setExpanded(false)}>Collapse</Button>
            <Button onClick={() => setExpanded(e => !e)}>Toggle</Button>
          </Stack>
          <Text color="muted">Current state: {expanded ? 'Expanded' : 'Collapsed'}</Text>
        </Stack>
        <ExpandablePanelSpacer />
        <ExpandablePanel
          expanded={expanded}
          onExpandedChange={setExpanded}
          collapsedContent={<Text>Controlled panel</Text>}
          expandedHeight="200px"
        >
          <Text>This panel's state is controlled externally.</Text>
        </ExpandablePanel>
      </>
    );
  },
};

/**
 * Panel without the toggle button, only expandable via external controls.
 */
export const NoToggle: Story = {
  render: function NoToggleStory() {
    const [expanded, setExpanded] = useState(false);

    return (
      <>
        <Stack spacing="md" style={{ marginBottom: '80px' }}>
          <Button onClick={() => setExpanded(e => !e)}>
            {expanded ? 'Collapse' : 'Expand'} Panel
          </Button>
        </Stack>
        <ExpandablePanelSpacer />
        <ExpandablePanel
          expanded={expanded}
          onExpandedChange={setExpanded}
          showToggle={false}
          collapsedContent={<Text>Panel without built-in toggle</Text>}
          headerActions={
            <Button size="sm" variant="ghost" onClick={() => setExpanded(e => !e)}>
              {expanded ? 'Hide' : 'Show'}
            </Button>
          }
          expandedHeight="200px"
        >
          <Text>Toggle is hidden. Use external controls or header action.</Text>
        </ExpandablePanel>
      </>
    );
  },
};

/**
 * Batch actions toolbar for a data table.
 */
export const BatchActionsToolbar: Story = {
  render: function BatchActionsStory() {
    const [selectedCount] = useState(5);

    return (
      <>
        <div style={{ marginBottom: '80px' }}>
          <Text size="lg" weight="semibold">Data Table</Text>
          <Text color="muted">5 rows selected. Batch actions available in the bottom panel.</Text>
        </div>
        <ExpandablePanelSpacer />
        <ExpandablePanel
          collapsedContent={
            <Stack direction="horizontal" align="center" gap="md">
              <Check className="h-5 w-5 text-success-600" />
              <Text weight="medium">{selectedCount} rows selected</Text>
            </Stack>
          }
          headerActions={
            <Stack direction="horizontal" gap="sm">
              <Button size="sm" variant="secondary" icon={<FileText className="h-4 w-4" />}>
                Export
              </Button>
              <Button size="sm" variant="danger" icon={<Trash2 className="h-4 w-4" />}>
                Delete
              </Button>
            </Stack>
          }
          expandedHeight="150px"
          defaultExpanded={false}
        >
          <Stack spacing="sm">
            <Text weight="semibold">Batch Actions</Text>
            <Stack direction="horizontal" gap="sm" wrap>
              <Button size="sm" variant="secondary">Change Status</Button>
              <Button size="sm" variant="secondary">Assign Owner</Button>
              <Button size="sm" variant="secondary">Add Tags</Button>
              <Button size="sm" variant="secondary">Move to Folder</Button>
            </Stack>
          </Stack>
        </ExpandablePanel>
      </>
    );
  },
};

/**
 * Default expanded state.
 */
export const DefaultExpanded: Story = {
  render: () => (
    <>
      <div style={{ marginBottom: '350px' }}>
        <Text size="lg" weight="semibold">Page Content</Text>
        <Text color="muted">Panel starts expanded by default.</Text>
      </div>
      <ExpandablePanelSpacer />
      <ExpandablePanel
        defaultExpanded={true}
        collapsedContent={<Text>Panel (expanded by default)</Text>}
        expandedHeight="250px"
      >
        <Stack spacing="sm">
          <Text weight="semibold">Expanded Content</Text>
          <Text>This panel starts in the expanded state.</Text>
          <Text color="muted">Press Escape or click the toggle to collapse.</Text>
        </Stack>
      </ExpandablePanel>
    </>
  ),
};
