# CLAUDE.md — papernote-ui (notebook-ui)

This file provides project-specific guidance for this codebase. For universal workflow rules, see the root `../CLAUDE.md`.

---

## Project Context

- **Product:** React component library with a paper notebook aesthetic — single source of truth for all UI across consuming apps (prylance, epstein-files, etc.)
- **Stack:** React 18/19, TypeScript, Tailwind CSS v3, Rollup
- **Architecture:** Component library built to CommonJS + ESM + types + CSS
- **Deploy:** Published as `@papernote/ui` npm package; consumers install and import
- **Key integrations:** lucide-react (icons), Tailwind design tokens (paper, ink, primary, accent)

## Build & Run

```bash
npm run build      # Build library (dist/)
npm run dev        # Watch mode
npm run typecheck  # Type check
npm run lint       # Lint
```

## Architecture

### Key Directories

```
src/
├── components/     # 70+ React components
├── types/          # Shared TypeScript interfaces
├── styles/         # Global CSS
└── utils/          # Helpers (excelExport, statisticsFormatter)
```

### Key Design Decisions

- **No raw HTML in consumers:** Host apps must use library components exclusively — no `<div>`, `<span>`, `<h1>`-`<h6>`, `<p>`, no `className` with Tailwind, no inline `style={{}}`
- **Rollup build:** Outputs CommonJS, ESM, types, and CSS
- **Custom design tokens:** paper, ink, primary, accent color families via Tailwind config

## Code Conventions

### Component Categories

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

### Adding Components

1. Create in `src/components/`
2. Export from `src/components/index.ts`
3. `npm run build`
4. Host app: `npm update notebook-ui`

### Key Types (`src/types/index.ts`)

- `BaseDataItem` — All table data must have `id`
- `PaginationResponse` — Standard paginated API shape
- `DataFetchParams` — Fetch params for paginated data

## Domain-Specific Rules

- All icons must come from `lucide-react` — no other icon libraries
- Consumer setup requires `import 'notebook-ui/styles'` and Tailwind config including notebook-ui paths
- Peer dependencies: react, react-dom, react-router-dom, lucide-react

## What NOT To Do (Project-Specific)

- Do NOT use raw HTML elements in consuming apps — use Stack, Grid, Box, Text instead
- Do NOT use `className` with Tailwind utilities in consuming apps
- Do NOT use inline `style={{}}` in consuming apps

---

**For detailed component API docs, see:** [docs/COMPONENT-REFERENCE.md](docs/COMPONENT-REFERENCE.md)
