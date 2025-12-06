# Feature Request: Autocomplete Static Options with Section Headers

## Status: ✅ COMPLETED in v1.7.7

## Summary

Enhance the Autocomplete component to support showing static options when the field is focused or when the user presses down arrow on an empty input. Options should support section headers for grouping.

## Use Case

In personal-finances AddInvestmentModal, when user focuses the symbol search field, they should see:
- "Your Holdings" section with symbols they already own
- "Popular" section with common symbols for that asset type
- Once typing begins, switch to API search results

## Requirements

### 1. Static Options Support

When `options` prop is provided and input is empty/focused:
- Show the static options in the dropdown
- Allow keyboard navigation (arrow keys) and selection (Enter)

### 2. Section Headers

Support non-selectable header options for grouping:

```typescript
interface AutocompleteOption {
  value: string;
  label: string;
  description?: string;
  metadata?: Record<string, unknown>;
  isHeader?: boolean;  // NEW: If true, render as non-selectable section header
}
```

Headers should:
- Be visually distinct (bold, smaller text, different background)
- Be skipped during keyboard navigation
- Not be selectable

### 3. Focus/Arrow Behavior

When input is empty or below `minChars`:
- On focus: Show static `options` if provided
- On ArrowDown: Open dropdown with static `options`
- Once user types >= minChars characters, switch to `onSearch` results

### 4. Transition Between Static and Search

- `value.length < minChars`: Show static `options`
- `value.length >= minChars`: Show `onSearch` results (current behavior)
- Clearing input: Return to static `options`

## API Changes

```typescript
interface AutocompleteProps {
  // Existing props...
  value: string;
  onChange: (value: string, option?: AutocompleteOption) => void;
  onSearch?: (query: string) => Promise<AutocompleteOption[]>;

  // Enhanced prop
  options?: AutocompleteOption[];  // Static options shown on focus when input empty

  // New optional prop
  showOptionsOnFocus?: boolean;  // Default true - show options dropdown on focus
}
```

## Visual Design

```
┌─────────────────────────────────┐
│ 🔍 Search for Symbol...         │
├─────────────────────────────────┤
│ YOUR HOLDINGS                   │  <- Header (gray bg, small caps, not selectable)
│   AAPL - Apple Inc.             │  <- Selectable option
│   MSFT - Microsoft Corp.        │  <- Selectable option
├─────────────────────────────────┤
│ POPULAR                         │  <- Header
│   GOOGL - Alphabet Inc.         │
│   AMZN - Amazon.com             │
│   NVDA - NVIDIA Corp.           │
└─────────────────────────────────┘
```

## Implementation Notes

1. In `handleKeyDown`, when `!isOpen` and ArrowDown pressed:
   - If `options.length > 0`, show them and highlight first non-header option

2. In `onFocus`, if `value.length < minChars` and `options.length > 0`:
   - Show static options dropdown

3. When rendering options:
   - Check `option.isHeader` - if true, render as styled div instead of button
   - Skip headers when calculating `highlightedIndex` navigation

4. Add CSS for header styling:
   ```css
   .autocomplete-header {
     padding: 8px 12px 4px;
     font-size: 11px;
     font-weight: 600;
     text-transform: uppercase;
     letter-spacing: 0.05em;
     color: #6b7280;
     background: #f9fafb;
     cursor: default;
   }
   ```

## Requested By

personal-finances - AddInvestmentModal symbol lookup

## Implementation Details

### Changes to `Autocomplete.tsx`

1. Added `isHeader?: boolean` to `AutocompleteOption` interface
2. Added `showOptionsOnFocus?: boolean` prop (default: true)
3. Added helper functions:
   - `findNextSelectableIndex()` - skips headers when navigating down
   - `findPrevSelectableIndex()` - skips headers when navigating up
   - `findFirstSelectableIndex()` - finds first non-header option
   - `showStaticOptions()` - displays static options dropdown
4. Updated `onFocus` to show static options when input is empty
5. Updated `handleKeyDown` to:
   - Show static options on ArrowDown when input is empty
   - Skip headers during keyboard navigation
   - Prevent selecting headers with Enter
6. Updated dropdown rendering to differentiate headers from selectable options
