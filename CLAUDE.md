# CLAUDE.md

This file provides guidance to Claude Code when working with notebook-ui.

## What is notebook-ui?

A React component library with a paper notebook aesthetic. **Single source of truth for all UI** across applications (CMMS, Conductor, epstein-files). Host apps use notebook-ui exclusively - no custom HTML/CSS/Tailwind.

## Commands

```bash
npm run build      # Build library (dist/)
npm run typecheck  # Type check
npm run lint       # Lint
npm run dev        # Watch mode
```

## Critical Rules

**NO raw HTML in host apps:**
```tsx
// WRONG
<div className="flex gap-4"><h1>Title</h1></div>

// CORRECT
<Stack direction="horizontal" gap="md">
  <Text as="h1" size="2xl" weight="bold">Title</Text>
</Stack>
```

- No `<div>`, `<span>`, `<h1>`-`<h6>`, `<p>` - use `Stack`, `Grid`, `Box`, `Text`
- No `className` with Tailwind utilities
- No inline `style={{}}` 
- All icons from `lucide-react`

## Architecture

```
src/
├── components/     # 70+ React components
├── types/          # Shared TypeScript interfaces
├── styles/         # Global CSS
└── utils/          # Helpers (excelExport, statisticsFormatter)
```

**Build**: Rollup → CommonJS, ESM, types, CSS
**Styling**: Tailwind CSS v3 with custom design tokens (paper, ink, primary, accent)

## Component Categories

| Category | Components |
|----------|------------|
| **Layout** | Stack, Grid, Box, Text, Card, CardHeader, CardTitle, CardContent |
| **Forms** | Button, Input, Select, MultiSelect, Switch, Textarea, Checkbox, RadioGroup |
| **Data** | DataTable, Table, Badge, StatusBadge, Spreadsheet |
| **Feedback** | Toast, Alert, Modal, ConfirmDialog, Tooltip, Drawer |
| **Navigation** | Sidebar, Breadcrumbs, Tabs, Pagination |
| **Loading** | Loading, Skeleton, SkeletonCard, SkeletonTable |
| **Mobile** | BottomSheet, SwipeableCard, PullToRefresh, HorizontalScroll |
| **Advanced** | CommandPalette, KanbanBoard, Calendar, Timeline, TreeView |

## Quick Patterns

**Layout:**
```tsx
<Stack gap="md">...</Stack>                    // Vertical
<Stack direction="horizontal" gap="sm">...</Stack>  // Horizontal
<Grid columns={3} gap="md">...</Grid>          // Grid
<Text as="h1" size="2xl" weight="bold">...</Text>   // Typography
```

**Forms:**
```tsx
<Button loading={saving} onClick={save}>Save</Button>
<Input label="Email" validationState="error" validationMessage="Invalid" clearable />
<Select options={opts} value={val} onChange={setVal} searchable clearable />
```

**Data:**
```tsx
<DataTable
  data={items}
  columns={[{ key: 'name', header: 'Name', sortable: true }]}
  paginated currentPage={page} totalItems={total}
  onEdit={edit} onDelete={del}
/>
```

**Feedback:**
```tsx
addSuccessMessage('Saved');
addErrorMessage('Failed');
<Modal isOpen={open} onClose={close} title="Edit" size="lg" scrollable>...</Modal>
```

## Adding Components

1. Create in `src/components/`
2. Export from `src/components/index.ts`
3. `npm run build`
4. Host app: `npm update notebook-ui`

## Key Types (src/types/index.ts)

- `BaseDataItem` - All table data must have `id`
- `PaginationResponse` - Standard paginated API shape
- `DataFetchParams` - Fetch params for paginated data

## Consumer Setup

```tsx
import 'notebook-ui/styles';
```

Configure Tailwind to include notebook-ui paths. Install peers: react, react-dom, react-router-dom, lucide-react.

---

**For detailed component API docs, see:** [docs/COMPONENT-REFERENCE.md](docs/COMPONENT-REFERENCE.md)
