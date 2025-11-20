# Session Prompt: Complete Remaining notebook-ui Components

## Context
This is a continuation of the notebook-ui component library development. The library provides a comprehensive set of React + TypeScript components with Tailwind CSS to eliminate custom CSS needs in host applications (CMMS, Conductor, epstein-files, etc.).

## Completed in Previous Sessions
- **Command Palette**: Keyboard-driven command launcher with search, grouping, recent commands
- **Popover**: 12 placement options, 3 trigger modes, collision detection
- **Select Enhancements**: clearable, creatable modes
- **Button**: Badge overlay support
- **Input**: clearable with X button
- **Textarea**: Resize control (none, vertical, horizontal, both)
- **Accordion**: Custom expand/collapse icons
- **Tabs**: Vertical mode support
- **Modal**: Animation variants (scale, slide-up, slide-down, fade, none)
- **Progress**: Linear and circular progress bars
- **Drawer**: Side-sliding modal (4 placements)
- **Rating**: Star rating component with half-star support
- **Slider**: Range input with keyboard, mouse, touch support
- **TreeView**: Hierarchical tree structures with expand/collapse
- **ColorPicker**: Preset swatches + hex input + native picker
- **Stepper**: Multi-step wizard indicator (horizontal/vertical)

Total: 20+ major features/components added

## Build Status
✅ `npm run build` succeeds
✅ All components exported in src/components/index.ts
✅ Documentation updated in CLAUDE.md

## Remaining Work

### Priority 1: High-Value Missing Components

#### 1. Calendar Component (HIGH PRIORITY)
**Location**: Create `src/components/Calendar.tsx`

**Requirements**:
- Full month/year calendar grid view
- Date selection (single or range)
- Event markers/indicators support
- Navigation (prev/next month, year selector)
- Min/max date constraints
- Disabled dates support
- Custom day rendering
- First day of week configuration
- Highlight today, selected dates
- Keyboard navigation (arrow keys)

**Interface**:
```typescript
interface CalendarProps {
  value?: Date | Date[]; // Single or range
  onChange?: (date: Date | Date[]) => void;
  mode?: 'single' | 'range' | 'multiple';
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  events?: CalendarEvent[]; // { date: Date, color?: string, label?: string }
  firstDayOfWeek?: 0 | 1; // Sunday or Monday
  renderDay?: (date: Date) => React.ReactNode;
  showOutsideDays?: boolean;
  label?: string;
  helperText?: string;
}
```

**Complexity**: ~250-300 lines

#### 2. Timeline Component (MEDIUM PRIORITY)
**Location**: Create `src/components/Timeline.tsx`

**Requirements**:
- Vertical and horizontal orientations
- Timeline items with timestamps
- Icons, titles, descriptions
- Connect items with lines
- Color variants per item
- Pending/completed states
- Custom item rendering

**Interface**:
```typescript
interface TimelineItem {
  id: string;
  timestamp: Date | string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  status?: 'pending' | 'completed' | 'active';
}

interface TimelineProps {
  items: TimelineItem[];
  orientation?: 'vertical' | 'horizontal';
  showLines?: boolean;
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
}
```

**Complexity**: ~150-200 lines

### Priority 2: Advanced Components (Lower Priority)

#### 3. Transfer/Dual List Component
**Location**: Create `src/components/Transfer.tsx`

**Requirements**:
- Two lists (source and target)
- Select items and move between lists
- Search/filter in each list
- Select all / deselect all
- Move selected / move all buttons
- Custom item rendering

**Complexity**: ~200-250 lines

#### 4. Carousel/Slider Component
**Location**: Create `src/components/Carousel.tsx`

**Requirements**:
- Slide through items
- Auto-play with interval
- Navigation dots/bullets
- Prev/next arrow buttons
- Touch swipe support
- Infinite loop option
- Custom slide rendering

**Complexity**: ~200-250 lines

### Priority 3: Component Enhancements

#### 5. Input Enhancements
**Location**: Enhance `src/components/Input.tsx`

**Add**:
- Password strength indicator
- Input masking support (phone, credit card, SSN)
- Character counter for maxLength
- Copy-to-clipboard button

#### 6. Table Enhancements
**Location**: Enhance `src/components/DataTable.tsx`

**Add**:
- Column resizing (drag column borders)
- Column reordering (drag-and-drop headers)
- Sticky header option
- Row grouping/collapsible groups

#### 7. Form Components
**Location**: Create `src/components/Form.tsx`, `src/components/FieldArray.tsx`

**Requirements**:
- Form validation wrapper
- Field array (dynamic add/remove fields)
- Form-level error handling
- Submit handling with loading states

### Priority 4: Code Quality & Polish

#### 8. TypeScript Cleanup
- Fix all TS6133 warnings (unused variables)
- Fix Tooltip.tsx NodeJS.Timeout errors
- Remove unused imports across all files
- Add missing return types

#### 9. Documentation Improvements
- Add Storybook or similar component showcase
- Create migration guide for host apps
- Add prop tables for all components
- Include accessibility guidelines

#### 10. Testing
- Add unit tests for new components
- Add integration tests for complex interactions
- Test keyboard navigation
- Test screen reader compatibility

## Technical Guidelines

### Component Patterns to Follow
1. **Tailwind Design Tokens**: Use paper-*, ink-*, accent-*, success-*, warning-*, error-*
2. **Controlled/Uncontrolled**: Support both patterns with internal state fallback
3. **Accessibility**: ARIA attributes, keyboard navigation, focus management
4. **TypeScript**: Full type coverage, exported interfaces
5. **Props**: label, helperText, disabled, className as common props
6. **Portal Rendering**: Use createPortal for overlays (modals, dropdowns, popovers)
7. **Animations**: Use existing CSS animations (animate-fade-in, animate-scale-in, etc.)

### File Structure
- Component file: `src/components/ComponentName.tsx`
- Export in: `src/components/index.ts`
- Document in: `CLAUDE.md` (with examples)
- CSS animations in: `src/styles/index.css` (if needed)

### Build Process
1. Create component file
2. Add exports to index.ts
3. Run `npm run build` to verify
4. Add documentation to CLAUDE.md with usage examples
5. Update this session prompt to mark as completed

## Current File Locations
- **Main exports**: `D:\repos\notebook-ui\src\components\index.ts`
- **Documentation**: `D:\repos\notebook-ui\CLAUDE.md`
- **CSS animations**: `D:\repos\notebook-ui\src\styles\index.css`
- **Build script**: `npm run build` (uses rollup)

## Session Workflow

### For Each Component:
1. **Read existing similar components** for patterns
2. **Create the component file** with full implementation
3. **Export in index.ts** with type exports
4. **Build and test**: `npm run build`
5. **Document in CLAUDE.md** with usage examples
6. **Update this prompt** to mark completed

### Example Task Breakdown for Calendar:
1. Create `src/components/Calendar.tsx`
2. Implement month grid calculation
3. Add date selection logic (single/range/multiple)
4. Add event markers rendering
5. Add keyboard navigation
6. Add month/year navigation
7. Export in index.ts
8. Build and verify
9. Document with examples

## Success Criteria
- ✅ All components build without errors
- ✅ TypeScript types fully defined and exported
- ✅ Components follow existing patterns
- ✅ Documentation includes usage examples
- ✅ Keyboard navigation works
- ✅ Disabled states work properly
- ✅ Controlled/uncontrolled modes supported

## Notes
- Calendar is the highest priority due to frequent use in scheduling/booking apps
- Timeline is second priority as it's commonly needed for activity feeds
- Transfer and Carousel are lower priority (less common, more niche)
- Code quality improvements can be done incrementally
- Testing can be added after all components are complete

## When Starting Next Session
Say: "Continue with the missing notebook-ui components, starting with the Calendar component as documented in docs/session-prompt-missing-components.md"
