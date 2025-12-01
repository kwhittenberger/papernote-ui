---
layout: home

hero:
  name: "@papernote/ui"
  text: "Paper Notebook Aesthetic"
  tagline: A modern React component library with a paper notebook aesthetic - minimal, professional, and expressive
  image:
    src: /logo.svg
    alt: papernote ui
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: View Components
      link: /components/
    - theme: alt
      text: Live Demo
      link: https://main--691fcf89b3393605ea470e93.chromatic.com/

features:
  - icon: 🎨
    title: Paper Notebook Aesthetic
    details: Warm, muted colors and subtle grain textures inspired by quality paper notebooks. Professional and minimalist design.

  - icon: ⚡
    title: 115+ Components
    details: Comprehensive set of production-ready React components covering forms, layouts, data display, navigation, and more.

  - icon: 📚
    title: 45+ Storybook Stories
    details: Extensive documentation with 500+ interactive examples. See every component in action.

  - icon: 🎯
    title: TypeScript First
    details: Full TypeScript support with comprehensive type definitions. Excellent IntelliSense experience.

  - icon: 🎨
    title: Tailwind CSS v3
    details: Built on Tailwind with custom design tokens. Easy to customize and extend.

  - icon: ♿
    title: Accessible
    details: WCAG AA compliant with ARIA attributes and full keyboard navigation support.

  - icon: 🚀
    title: Tree-shakeable
    details: Import only what you need. Optimized bundle size with ESM support.

  - icon: 📱
    title: Responsive
    details: Mobile-first design with responsive utilities. Works beautifully on all devices.

  - icon: 🔧
    title: Virtual Scrolling
    details: High-performance rendering for large datasets. Handle 10,000+ rows with ease.
---

## Quick Start

::: code-group

```bash [npm]
npm install @papernote/ui
```

```bash [yarn]
yarn add @papernote/ui
```

```bash [pnpm]
pnpm add @papernote/ui
```

:::

### Peer Dependencies

```bash
npm install react react-dom react-router-dom lucide-react tailwindcss
```

### Basic Usage

```tsx
import '@papernote/ui/styles';
import { Button, Card, CardHeader, CardTitle, CardContent } from '@papernote/ui';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to @papernote/ui</CardTitle>
      </CardHeader>
      <CardContent>
        <p>A beautiful component library with paper notebook aesthetic</p>
        <Button variant="primary">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## Component Categories

### Form Components (15+)
Button, Input, Select, MultiSelect, DatePicker, TimePicker, Textarea, Checkbox, RadioGroup, Switch, Rating, PasswordInput, NumberInput, Slider, ColorPicker

### Layout Components (12+)
Stack, Grid, Box, Text, Card, Modal, Drawer, Page, PageLayout, Layout, AppLayout, Dashboard, TwoColumnContent

### Data Display (10+)
DataTable, Table, Badge, StatusBadge, Avatar, Timeline, KanbanBoard, Calendar, CurrencyDisplay, DateDisplay

### Navigation (10+)
Breadcrumbs, Pagination, Sidebar, Tabs, StepIndicator, Menu, Dropdown, CommandPalette, TreeView, PageNavigation

### Feedback Components (8+)
Toast, Alert, Modal, Drawer, Tooltip, EmptyState, Loading, Skeleton, LoadingOverlay, ConfirmDialog, Progress

### Advanced Components (15+)
Accordion, Transfer, Carousel, Stepper, Popover, ButtonGroup, Autocomplete, Combobox, DateRangePicker, FormWizard, RichTextEditor, MarkdownEditor, InfiniteScroll, DropZone, ErrorBoundary

## Why @papernote/ui?

### Production Ready
Published on npm, documented in Storybook with 500+ examples, used in production applications, comprehensive testing.

### Developer Experience
TypeScript first, tree-shakeable exports, virtual scrolling for large datasets, optimized bundle size, fast build times.

### Design System
Muted warm color palette, subtle paper grain textures, professional appearance, minimalist design philosophy.

### Accessibility
WCAG AA compliant, ARIA attributes throughout, full keyboard navigation, screen reader support.

## Resources

- [📖 Live Storybook](https://main--691fcf89b3393605ea470e93.chromatic.com/) - Interactive component playground
- [📦 npm Package](https://www.npmjs.com/package/@papernote/ui) - Published package
- [💬 GitHub](https://github.com/kwhittenberger/papernote-ui) - Source code and issues
- [🎨 Design System](/design-system) - Colors, typography, and patterns

## License

MIT License - Copyright (c) 2025 kwhittenberger
