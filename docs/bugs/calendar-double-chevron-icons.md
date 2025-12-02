# Bug: Calendar Double-Chevron Navigation Icons Render Incorrectly

## Status: ✅ RESOLVED in v1.7.3

## Issue

The Calendar component's year navigation buttons use two overlapping `ChevronLeft`/`ChevronRight` icons with negative margin (`-ml-3`) to create a double-chevron effect. This renders incorrectly and looks confusing to users.

## Current Implementation (Calendar.tsx lines 247-248, 284-285)

```tsx
// Previous year button
<ChevronLeft className="h-4 w-4 text-ink-600" />
<ChevronLeft className="h-4 w-4 text-ink-600 -ml-3" />

// Next year button
<ChevronRight className="h-4 w-4 text-ink-600" />
<ChevronRight className="h-4 w-4 text-ink-600 -ml-3" />
```

## Expected Behavior

Year navigation should display proper double-chevron icons (`<<` and `>>`) that are visually distinct from the single-chevron month navigation.

## Recommended Fix

Use `ChevronsLeft` and `ChevronsRight` icons from lucide-react instead of overlapping single chevrons:

```tsx
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

// Previous year button
<ChevronsLeft className="h-4 w-4 text-ink-600" />

// Next year button  
<ChevronsRight className="h-4 w-4 text-ink-600" />
```

## Screenshot

The current implementation shows 4 separate arrows on each side, making it confusing what each button does.

## Priority

Low - Visual/UX issue, functionality works correctly.

## Reported

2024-12-02
