# Notebook UI

A modern React component library with a paper notebook aesthetic - minimal, professional, and expressive.

## Features

- 🎨 **Paper Notebook Aesthetic** - Subtle grain textures, muted warm colors, inspired by quality paper notebooks
- ⚡ **20+ Components** - Comprehensive set of production-ready React components
- 🎯 **TypeScript First** - Full TypeScript support with comprehensive type definitions
- 🎨 **Tailwind CSS** - Built on Tailwind CSS v3 with custom design tokens
- ♿ **Accessible** - ARIA labels, keyboard navigation, screen reader support
- 🚀 **Tree-shakeable** - Import only what you need
- 📱 **Responsive** - Mobile-first design approach

## Installation

### As Git Dependency

```bash
npm install github:kwhittenberger/notebook-ui
# or
yarn add github:kwhittenberger/notebook-ui
```

### Peer Dependencies

Make sure you have these installed in your project:

```bash
npm install react react-dom react-router-dom lucide-react tailwindcss
```

## Setup

### 1. Import Styles

In your main entry file (e.g., `src/main.tsx`):

```tsx
import 'notebook-ui/styles';
```

### 2. Configure Tailwind

In your `tailwind.config.js`:

```javascript
import notebookConfig from 'notebook-ui/tailwind-config';

export default {
  ...notebookConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/notebook-ui/src/**/*.{js,ts,jsx,tsx}',
  ],
};
```

## Usage

```tsx
import { Button, Card, Toast, Table } from 'notebook-ui';

function App() {
  return (
    <Card>
      <h2>Welcome to Notebook UI</h2>
      <p>A beautiful component library with paper notebook aesthetic</p>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}
```

## Components

### Core Components
- **Button** - Multiple variants with loading states
- **Input** - Form input with validation states
- **Select** - Searchable dropdown with keyboard navigation
- **Switch** - Toggle component

### Layout Components
- **Card** - Container with header, content, footer sections
- **Modal** - Dialog with backdrop and animations
- **Tabs** - Tab navigation (underline and pill styles)
- **Accordion** - Collapsible panels

### Navigation Components
- **Breadcrumbs** - Path navigation
- **Pagination** - Page navigation
- **StepIndicator** - Progress stepper
- **Dropdown** - Menu component

### Feedback Components
- **Toast** - Notification system (4 variants)
- **Alert** - Notification banners
- **Tooltip** - Hover tooltips
- **EmptyState** - No data states

### Data Display
- **Table** - Advanced table with sorting, filtering, selection
- **Badge** - Status indicators
- **Loading** - Spinners, dots, skeleton loaders

### File Upload
- **FileUpload** - Drag-and-drop with validation

## Design System

### Color Palette

The library uses a muted, warm color palette inspired by paper and ink:

- **Paper** - Warm off-white backgrounds (#fafaf9)
- **Ink** - Warm gray text colors (#57534e)
- **Accent** - Subtle warm gray highlights (#8b8878)
- **Success** - Muted emerald (#10b981)
- **Warning** - Soft amber (#f59e0b)
- **Error** - Muted red (#ef4444)

### Typography

- Font Family: System font stack (ui-sans-serif, Inter)
- Comfortable line heights for readability
- Consistent font size scale

### Shadows & Effects

- Subtle paper-like shadows
- Paper texture using SVG noise filters
- Smooth transitions and animations

## Component Examples

### Button

```tsx
import { Button } from 'notebook-ui';

<Button variant="primary" size="md" loading={false}>
  Click Me
</Button>
```

### Toast Notifications

```tsx
import { ToastContainer, useToast } from 'notebook-ui';

function App() {
  const { toasts, addToast, removeToast } = useToast();

  return (
    <>
      <Button onClick={() => addToast({
        type: 'success',
        title: 'Success!',
        message: 'Your action was completed.'
      })}>
        Show Toast
      </Button>
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </>
  );
}
```

### Table with Sorting

```tsx
import { Table } from 'notebook-ui';

<Table
  data={data}
  columns={[
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email', sortable: true },
    { key: 'status', header: 'Status', accessor: (row) => (
      <Badge variant="success">{row.status}</Badge>
    )},
  ]}
  keyExtractor={(row) => row.id}
  selectable
  onRowSelect={(selected) => console.log(selected)}
/>
```

### Modal Dialog

```tsx
import { Modal, ModalFooter, Button } from 'notebook-ui';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  size="md"
>
  <p>Are you sure you want to proceed?</p>
  <ModalFooter>
    <Button variant="secondary" onClick={() => setIsOpen(false)}>
      Cancel
    </Button>
    <Button variant="primary" onClick={handleConfirm}>
      Confirm
    </Button>
  </ModalFooter>
</Modal>
```

## Development

```bash
# Install dependencies
npm install

# Build library
npm run build

# Type check
npm run typecheck

# Lint
npm run lint
```

## License

Proprietary - Copyright (c) 2025 kwhittenberger

## Credits

Inspired by Claude's minimal, professional interface design and the aesthetic of quality paper notebooks.
