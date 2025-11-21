# @papernote/ui

[![npm version](https://img.shields.io/npm/v/@papernote/ui.svg)](https://www.npmjs.com/package/@papernote/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

A modern React component library with a paper notebook aesthetic - minimal, professional, and expressive.

**[📖 Live Demo (Storybook)](https://691fcf89b3393605ea470e93-ziadmszluo.chromatic.com/)** • **[📦 npm Package](https://www.npmjs.com/package/@papernote/ui)** • **[💬 GitHub Issues](https://github.com/kwhittenberger/papernote-ui/issues)**

## Features

- 🎨 **Paper Notebook Aesthetic** - Subtle grain textures, muted warm colors, inspired by quality paper notebooks
- ⚡ **111+ Components** - Comprehensive set of production-ready React components
- 🎯 **TypeScript First** - Full TypeScript support with comprehensive type definitions (0 errors, 0 warnings)
- 🎨 **Tailwind CSS** - Built on Tailwind CSS v3 with custom design tokens
- ♿ **Fully Accessible** - WCAG AA compliant with complete ARIA attributes, keyboard navigation, and screen reader support
- 🚀 **Tree-shakeable** - Import only what you need
- 📱 **Responsive** - Mobile-first design with responsive utilities (Show/Hide components)
- 🎯 **forwardRef Support** - All form components support ref forwarding
- 🔧 **Virtual Scrolling** - High-performance rendering for large datasets
- 🎨 **Comprehensive** - Complete CRUD patterns with DataPage, FormModal, ConfirmDialog

## Installation

```bash
npm install @papernote/ui
# or
yarn add @papernote/ui
# or
pnpm add @papernote/ui
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
import '@papernote/ui/styles';
```

### 2. Configure Tailwind

In your `tailwind.config.js`:

```javascript
import notebookConfig from '@papernote/ui/tailwind-config';

export default {
  ...notebookConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@papernote/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
};
```

## Usage

```tsx
import { Button, Card, Toast, Table } from '@papernote/ui';

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
- **Table** - Basic table with sorting, filtering, selection
- **DataTable** - Feature-rich table with actions, expansion, and advanced features
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
import { Button } from '@papernote/ui';

<Button variant="primary" size="md" loading={false}>
  Click Me
</Button>
```

### Toast Notifications

```tsx
import { ToastContainer, useToast } from '@papernote/ui';

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

### DataTable with Advanced Features

```tsx
import { DataTable } from '@papernote/ui';
import { Edit, Trash } from 'lucide-react';

const columns = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  { 
    key: 'status', 
    header: 'Status', 
    render: (row) => <Badge variant="success">{row.status}</Badge>
  },
];

const actions = [
  { label: 'Edit', icon: Edit, onClick: (row) => handleEdit(row) },
  { label: 'Delete', icon: Trash, onClick: (row) => handleDelete(row), variant: 'danger' },
];

<DataTable
  data={users}
  columns={columns}
  actions={actions}
  loading={loading}
  selectable
  onRowSelect={(selected) => console.log(selected)}
  expandable
  renderExpandedRow={(row) => <UserDetails user={row} />}
  onSortChange={(sort) => setSort(sort)}
  currentSort={sort}
/>
```

### Modal Dialog

```tsx
import { Modal, ModalFooter, Button } from '@papernote/ui';

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

## Documentation

**📚 [Documentation Index](./docs/INDEX.md)** - Complete documentation hub

**Quick Links:**
- **[Quick Start Guide](./examples/QUICK-START.md)** - Get started in minutes
- **[Component Catalog](./docs/COMPONENT-CATALOG.md)** - All 111+ components with examples
- **[Examples](./examples/README.md)** - Example applications and patterns
- **[Work Summary](./docs/WORK-SUMMARY-2025-11-20.md)** - Latest updates and status

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

MIT License - Copyright (c) 2025 kwhittenberger

See [LICENSE](./LICENSE) for full details.

## Credits

Inspired by Claude's minimal, professional interface design and the aesthetic of quality paper notebooks.
