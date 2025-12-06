# Autocomplete Keyboard Navigation Issues

## Status: ✅ RESOLVED in v1.7.6

## Problem

The Autocomplete component has issues with keyboard navigation:

1. **Arrow Down doesn't open dropdown**: When the dropdown is closed and the user presses Arrow Down, it should open the dropdown and highlight the first result. Currently it only triggers a search but doesn't properly open/highlight.

2. **First result not auto-highlighted**: After search results appear, the first item should be automatically highlighted so the user can immediately press Enter to select it or use arrow keys to navigate.

## Current Behavior

- User types query, results appear
- User must use mouse to select, or press Arrow Down multiple times
- Arrow Down when closed only calls `handleSearch(value)` but doesn't set `isOpen` or `highlightedIndex`

## Expected Behavior

1. When search results appear, first result should be highlighted (`highlightedIndex = 0`)
2. When dropdown is closed and user presses Arrow Down:
   - If there are cached results, show them and highlight first item
   - If no cached results but query meets minChars, trigger search
3. User should be able to type, then immediately use Enter to select first result

## Affected File

`src/components/Autocomplete.tsx`

## Suggested Fix

### 1. In `handleSearch`, auto-highlight first result:

```typescript
if (onSearch) {
  setLoading(true);
  try {
    const results = await onSearch(query);
    setFilteredOptions(results.slice(0, maxResults));
    setIsOpen(results.length > 0);
    // Auto-highlight first result for keyboard navigation
    setHighlightedIndex(results.length > 0 ? 0 : -1);
  } catch (err) {
    // ... error handling
    setHighlightedIndex(-1);
  } finally {
    setLoading(false);
  }
}
```

### 2. In `handleKeyDown`, improve Arrow Down when closed:

```typescript
if (!isOpen) {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    // If we already have filtered options from a previous search, show them
    if (filteredOptions.length > 0) {
      setIsOpen(true);
      setHighlightedIndex(0);
    } else if (value.length >= minChars) {
      // Otherwise trigger a new search
      handleSearch(value);
    }
  }
  return;
}
```

## Reported From

personal-finances - AddInvestmentModal.tsx symbol search
