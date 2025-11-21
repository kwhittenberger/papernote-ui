# @papernote/ui Documentation

Welcome to the @papernote/ui component library documentation.

## Quick Links

### 🚀 Getting Started
- **[README](../README.md)** - Installation, quick start, and overview
- **[Live Storybook](https://691fcf89b3393605ea470e93-rzwuumklem.chromatic.com/)** - Interactive component playground
- **[npm Package](https://www.npmjs.com/package/@papernote/ui)** - Published package

### 📚 Reference
- **[Component Catalog](./COMPONENT-CATALOG.md)** - Comprehensive guide to all 115+ components
- **[Storybook Guide](./STORYBOOK-GUIDE.md)** - Storybook documentation standards
- **[Chromatic Setup](./CHROMATIC-SETUP.md)** - Visual testing and deployment

### 🔧 Development
- **[Developer Guide](./DEVELOPER-GUIDE.md)** - Development workflow and best practices
- **[Publishing Guide](../PUBLISHING.md)** - How to publish new versions to npm
- **[Contributing](../CONTRIBUTING.md)** - Contribution guidelines

---

## Installation

```bash
npm install @papernote/ui
```

### Peer Dependencies

```bash
npm install react react-dom react-router-dom lucide-react tailwindcss
```

---

## Quick Start

### 1. Import Styles

```tsx
import '@papernote/ui/styles';
```

### 2. Configure Tailwind

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

### 3. Use Components

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@papernote/ui';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

---

## Component Categories

### Core Form Components (15+)
Button, Input, Select, MultiSelect, DatePicker, TimePicker, Textarea, Checkbox, RadioGroup, Switch, Rating, PasswordInput, NumberInput, Slider, ColorPicker

### Layout Components (12+)
Stack, Grid, Box, Text, Card, Modal, Drawer, Page, PageLayout, Layout, AppLayout, Dashboard, TwoColumnContent

### Data Display (10+)
DataTable, Table, Badge, StatusBadge, Avatar, Timeline, KanbanBoard, Calendar, CurrencyDisplay, DateDisplay

### Feedback Components (8+)
Toast, Alert, Modal, Drawer, Tooltip, EmptyState, Loading, Skeleton, LoadingOverlay, ConfirmDialog, Progress

### Navigation (10+)
Breadcrumbs, Pagination, Sidebar, Tabs, StepIndicator, Menu, Dropdown, CommandPalette, TreeView, PageNavigation

### Advanced Components (15+)
Accordion, Transfer, Carousel, Stepper, Popover, ButtonGroup, Autocomplete, Combobox, DateRangePicker, FormWizard, RichTextEditor, MarkdownEditor, InfiniteScroll, DropZone, ErrorBoundary

**Total:** 115+ components

---

## Key Features

### 🎨 Paper Notebook Aesthetic
- Warm, muted color palette
- Subtle grain textures
- Professional appearance
- Minimalist design

### 🎯 TypeScript First
- Full TypeScript support
- Comprehensive type definitions
- Excellent IntelliSense
- Generic types for data components

### ♿ Accessible
- WCAG AA compliant
- ARIA attributes throughout
- Full keyboard navigation
- Screen reader support

### 🚀 Performance
- Tree-shakeable exports
- Virtual scrolling for large datasets
- Optimized bundle size
- Fast build times

### 📦 Production Ready
- Published on npm as @papernote/ui
- Documented in Storybook with 500+ examples
- Used in production applications
- Comprehensive testing

---

## Resources

### Documentation
- [Component Catalog](./COMPONENT-CATALOG.md) - Complete component reference
- [Developer Guide](./DEVELOPER-GUIDE.md) - Development workflow
- [Storybook Guide](./STORYBOOK-GUIDE.md) - Story documentation standards
- [Live Storybook](https://691fcf89b3393605ea470e93-rzwuumklem.chromatic.com/) - Interactive demos

### Publishing
- [Publishing Guide](../PUBLISHING.md) - Automated npm publishing
- [GitHub Actions Workflows](../.github/workflows/) - CI/CD pipelines
- [npm Package](https://www.npmjs.com/package/@papernote/ui) - Published package

### Development
- [Chromatic Setup](./CHROMATIC-SETUP.md) - Visual testing
- [Contributing Guide](../CONTRIBUTING.md) - How to contribute
- [Code of Conduct](../CODE_OF_CONDUCT.md) - Community standards

---

## Support

- **GitHub Issues**: https://github.com/kwhittenberger/papernote-ui/issues
- **GitHub Repository**: https://github.com/kwhittenberger/papernote-ui
- **npm Package**: https://www.npmjs.com/package/@papernote/ui

---

## License

MIT License - Copyright (c) 2025 kwhittenberger

See [LICENSE](../LICENSE) for full details.
