import type { Meta, StoryObj } from '@storybook/react';
import { exportToExcel, exportDataTableToExcel, createMultiSheetExcel, ExcelColumn } from './excelExport';
import Button from '../components/Button';
import DataTable from '../components/DataTable';
import ExportButton from '../components/ExportButton';
import Card, { CardHeader, CardTitle, CardContent } from '../components/Card';
import Stack from '../components/Stack';
import Text from '../components/Text';
import { Download, FileSpreadsheet } from 'lucide-react';
import { DataTableColumn } from '../components/DataTable';

const meta: Meta = {
  title: 'Utils/Excel Export',
  parameters: {
    docs: {
      description: {
        component:
          'Standalone utilities for exporting any data to Excel format without requiring the Spreadsheet component. Perfect for exporting DataTable data, API responses, or any array of objects.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Sample data
const products = [
  { id: 1, name: 'Widget A', category: 'Hardware', price: 29.99, stock: 100, active: true },
  { id: 2, name: 'Widget B', category: 'Software', price: 49.99, stock: 50, active: true },
  { id: 3, name: 'Widget C', category: 'Hardware', price: 19.99, stock: 200, active: false },
  { id: 4, name: 'Gadget X', category: 'Electronics', price: 199.99, stock: 25, active: true },
  { id: 5, name: 'Gadget Y', category: 'Electronics', price: 299.99, stock: 15, active: true },
];

const orders = [
  { orderId: 'ORD-001', customer: 'Acme Corp', amount: 5000, date: new Date('2025-01-15'), status: 'Completed' },
  { orderId: 'ORD-002', customer: 'TechStart Inc', amount: 3500, date: new Date('2025-01-16'), status: 'Pending' },
  { orderId: 'ORD-003', customer: 'Global Solutions', amount: 7200, date: new Date('2025-01-17'), status: 'Completed' },
];

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', createdAt: new Date('2024-06-15'), isActive: true },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', createdAt: new Date('2024-08-20'), isActive: true },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', createdAt: new Date('2024-12-01'), isActive: false },
];

/**
 * Simple export - uses object keys as headers
 */
export const SimpleExport: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Simple Export Example</CardTitle>
      </CardHeader>
      <CardContent>
        <Stack spacing="lg">
          <Text>
            Click the button below to export the products data to Excel. The export will automatically use
            object keys as column headers.
          </Text>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-stone-200">
              <thead className="bg-paper-100">
                <tr>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Category</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Stock</th>
                  <th className="px-4 py-2 text-left">Active</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t border-stone-200">
                    <td className="px-4 py-2">{product.id}</td>
                    <td className="px-4 py-2">{product.name}</td>
                    <td className="px-4 py-2">{product.category}</td>
                    <td className="px-4 py-2">${product.price}</td>
                    <td className="px-4 py-2">{product.stock}</td>
                    <td className="px-4 py-2">{product.active ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Button
            variant="primary"
            icon={<Download className="h-4 w-4" />}
            onClick={() => {
              exportToExcel({
                data: products,
                filename: 'products.xlsx',
              });
            }}
          >
            Export to Excel
          </Button>

          <div className="bg-paper-50 border border-stone-200 rounded p-4">
            <Text size="sm" className="font-mono">
              {`exportToExcel({\n  data: products,\n  filename: 'products.xlsx'\n});`}
            </Text>
          </div>
        </Stack>
      </CardContent>
    </Card>
  ),
};

/**
 * Custom columns with formatting
 */
export const CustomColumnsWithFormatting: Story = {
  render: () => {
    const columns: ExcelColumn[] = [
      { key: 'id', label: 'Product ID' },
      { key: 'name', label: 'Product Name' },
      { key: 'category', label: 'Category' },
      {
        key: 'price',
        label: 'Unit Price',
        format: (value) => `$${value.toFixed(2)}`,
      },
      { key: 'stock', label: 'Quantity in Stock' },
      {
        key: 'active',
        label: 'Status',
        format: (value) => (value ? 'Active' : 'Inactive'),
      },
    ];

    return (
      <Card>
        <CardHeader>
          <CardTitle>Custom Columns with Formatting</CardTitle>
        </CardHeader>
        <CardContent>
          <Stack spacing="lg">
            <Text>
              This example shows how to customize column headers, reorder columns, and apply formatting to
              values before export.
            </Text>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-stone-200">
                <thead className="bg-paper-100">
                  <tr>
                    {columns.map((col) => (
                      <th key={col.key} className="px-4 py-2 text-left">
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-t border-stone-200">
                      <td className="px-4 py-2">{product.id}</td>
                      <td className="px-4 py-2">{product.name}</td>
                      <td className="px-4 py-2">{product.category}</td>
                      <td className="px-4 py-2">${product.price.toFixed(2)}</td>
                      <td className="px-4 py-2">{product.stock}</td>
                      <td className="px-4 py-2">{product.active ? 'Active' : 'Inactive'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Button
              variant="primary"
              icon={<FileSpreadsheet className="h-4 w-4" />}
              onClick={() => {
                exportToExcel({
                  data: products,
                  columns,
                  filename: 'products-formatted.xlsx',
                });
              }}
            >
              Export with Custom Formatting
            </Button>

            <div className="bg-paper-50 border border-stone-200 rounded p-4">
              <Text size="sm" className="font-mono whitespace-pre-wrap">
                {`const columns: ExcelColumn[] = [
  { key: 'id', label: 'Product ID' },
  { key: 'name', label: 'Product Name' },
  { key: 'price', label: 'Unit Price', format: (val) => \`$\${val.toFixed(2)}\` },
  { key: 'active', label: 'Status', format: (val) => val ? 'Active' : 'Inactive' }
];

exportToExcel({ data: products, columns, filename: 'products.xlsx' });`}
              </Text>
            </div>
          </Stack>
        </CardContent>
      </Card>
    );
  },
};

/**
 * Export from DataTable
 */
export const ExportFromDataTable: Story = {
  render: () => {
    const tableColumns: DataTableColumn<typeof users[0]>[] = [
      { key: 'id', header: 'ID', sortable: true },
      { key: 'name', header: 'Name', sortable: true },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role', sortable: true },
      {
        key: 'createdAt',
        header: 'Created',
        sortable: true,
        render: (user) => new Date(user.createdAt).toLocaleDateString(),
      },
      {
        key: 'isActive',
        header: 'Status',
        render: (user) => (user.isActive ? 'Active' : 'Inactive'),
      },
    ];

    return (
      <Card>
        <CardHeader>
          <CardTitle>Export DataTable Data</CardTitle>
        </CardHeader>
        <CardContent>
          <Stack spacing="lg">
            <Text>
              This example shows how to export data displayed in a DataTable component using the{' '}
              <code className="bg-paper-100 px-1 rounded">exportDataTableToExcel</code> helper function.
            </Text>

            <DataTable data={users} columns={tableColumns} />

            <Button
              variant="primary"
              icon={<Download className="h-4 w-4" />}
              onClick={() => {
                exportDataTableToExcel({
                  data: users,
                  columns: tableColumns,
                  filename: 'users.xlsx',
                });
              }}
            >
              Export Users
            </Button>

            <div className="bg-paper-50 border border-stone-200 rounded p-4">
              <Text size="sm" className="font-mono whitespace-pre-wrap">
                {`exportDataTableToExcel({
  data: users,
  columns: tableColumns,
  filename: 'users.xlsx'
});`}
              </Text>
            </div>
          </Stack>
        </CardContent>
      </Card>
    );
  },
};

/**
 * Multi-sheet export
 */
export const MultiSheetExport: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Multi-Sheet Excel Export</CardTitle>
      </CardHeader>
      <CardContent>
        <Stack spacing="lg">
          <Text>
            Export multiple datasets to a single Excel file with separate sheets using{' '}
            <code className="bg-paper-100 px-1 rounded">createMultiSheetExcel</code>.
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Text weight="semibold" className="mb-2">
                Products ({products.length} items)
              </Text>
              <div className="text-sm text-ink-600">
                {products.map((p) => (
                  <div key={p.id}>
                    {p.name} - ${p.price}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Text weight="semibold" className="mb-2">
                Orders ({orders.length} items)
              </Text>
              <div className="text-sm text-ink-600">
                {orders.map((o) => (
                  <div key={o.orderId}>
                    {o.orderId} - ${o.amount}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button
            variant="primary"
            icon={<FileSpreadsheet className="h-4 w-4" />}
            onClick={() => {
              createMultiSheetExcel({
                filename: 'business-report.xlsx',
                sheets: [
                  {
                    name: 'Products',
                    data: products,
                  },
                  {
                    name: 'Orders',
                    data: orders,
                    columns: [
                      { key: 'orderId', label: 'Order ID' },
                      { key: 'customer', label: 'Customer Name' },
                      {
                        key: 'amount',
                        label: 'Amount',
                        format: (val) => `$${val.toLocaleString()}`,
                      },
                      {
                        key: 'date',
                        label: 'Order Date',
                        format: (val) => new Date(val).toLocaleDateString(),
                      },
                      { key: 'status', label: 'Status' },
                    ],
                  },
                  {
                    name: 'Users',
                    data: users,
                  },
                ],
              });
            }}
          >
            Export Multi-Sheet Report
          </Button>

          <div className="bg-paper-50 border border-stone-200 rounded p-4">
            <Text size="sm" className="font-mono whitespace-pre-wrap">
              {`createMultiSheetExcel({
  filename: 'business-report.xlsx',
  sheets: [
    { name: 'Products', data: products },
    { name: 'Orders', data: orders, columns: orderColumns },
    { name: 'Users', data: users }
  ]
});`}
            </Text>
          </div>
        </Stack>
      </CardContent>
    </Card>
  ),
};

/**
 * Integration with ExportButton
 */
export const WithExportButton: Story = {
  render: () => {
    const handleExport = async (format: 'csv' | 'excel' | 'pdf') => {
      if (format === 'excel') {
        exportToExcel({
          data: products,
          filename: 'products.xlsx',
          columns: [
            { key: 'id', label: 'ID' },
            { key: 'name', label: 'Product Name' },
            { key: 'category', label: 'Category' },
            { key: 'price', label: 'Price', format: (val) => `$${val.toFixed(2)}` },
            { key: 'stock', label: 'Stock' },
            { key: 'active', label: 'Status', format: (val) => (val ? 'Active' : 'Inactive') },
          ],
        });
      } else if (format === 'csv') {
        console.log('CSV export not implemented in this example');
      } else if (format === 'pdf') {
        console.log('PDF export not implemented in this example');
      }
    };

    return (
      <Card>
        <CardHeader>
          <CardTitle>ExportButton Integration</CardTitle>
        </CardHeader>
        <CardContent>
          <Stack spacing="lg">
            <Text>
              Combine the <code className="bg-paper-100 px-1 rounded">exportToExcel</code> utility with the{' '}
              <code className="bg-paper-100 px-1 rounded">ExportButton</code> component for a complete export
              solution.
            </Text>

            <DataTable
              data={products}
              columns={[
                { key: 'id', header: 'ID' },
                { key: 'name', header: 'Name' },
                { key: 'category', header: 'Category' },
                { key: 'price', header: 'Price', render: (item) => `$${item.price}` },
                { key: 'stock', header: 'Stock' },
              ]}
            />

            <Stack direction="horizontal" spacing="md">
              <ExportButton onExport={handleExport} formats={['excel']} label="Export to Excel" />
              <ExportButton
                onExport={handleExport}
                formats={['excel', 'csv', 'pdf']}
                label="Export"
                showFormatMenu
              />
            </Stack>

            <div className="bg-paper-50 border border-stone-200 rounded p-4">
              <Text size="sm" className="font-mono whitespace-pre-wrap">
                {`const handleExport = async (format) => {
  if (format === 'excel') {
    exportToExcel({ data, columns, filename: 'data.xlsx' });
  }
};

<ExportButton onExport={handleExport} formats={['excel']} />`}
              </Text>
            </div>
          </Stack>
        </CardContent>
      </Card>
    );
  },
};

/**
 * Date formatting example
 */
export const DateFormatting: Story = {
  render: () => {
    const columns: ExcelColumn[] = [
      { key: 'orderId', label: 'Order ID' },
      { key: 'customer', label: 'Customer' },
      {
        key: 'amount',
        label: 'Amount',
        format: (val) => `$${val.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
      },
      {
        key: 'date',
        label: 'Order Date',
        format: (val) => new Date(val).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
      },
      { key: 'status', label: 'Status' },
    ];

    return (
      <Card>
        <CardHeader>
          <CardTitle>Date and Number Formatting</CardTitle>
        </CardHeader>
        <CardContent>
          <Stack spacing="lg">
            <Text>
              This example demonstrates how to format dates, numbers, and currency values for export.
            </Text>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-stone-200">
                <thead className="bg-paper-100">
                  <tr>
                    {columns.map((col) => (
                      <th key={col.key} className="px-4 py-2 text-left">
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, idx) => (
                    <tr key={idx} className="border-t border-stone-200">
                      <td className="px-4 py-2">{order.orderId}</td>
                      <td className="px-4 py-2">{order.customer}</td>
                      <td className="px-4 py-2">${order.amount.toLocaleString()}</td>
                      <td className="px-4 py-2">{order.date.toLocaleDateString()}</td>
                      <td className="px-4 py-2">{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Button
              variant="primary"
              icon={<Download className="h-4 w-4" />}
              onClick={() => {
                exportToExcel({
                  data: orders,
                  columns,
                  filename: 'orders.xlsx',
                });
              }}
            >
              Export Orders
            </Button>
          </Stack>
        </CardContent>
      </Card>
    );
  },
};
