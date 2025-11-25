# Personal-Finances Frontend: API Migration Guide

## Summary
The personal-finances frontend has TypeScript errors due to using incorrect prop names and patterns. After review, **no notebook-ui changes are needed** - all issues are frontend misuse of existing APIs.

---

## Frontend Fixes Required

### 1. Stack Component
**Wrong:** `gap="md"`
**Correct:** `spacing="md"`

**Wrong:** `style={{ justifyContent: 'flex-end' }}`
**Correct:** `justify="end"`

**Wrong:** `style={{ alignItems: 'center' }}`
**Correct:** `align="center"`

**Wrong:** `style={{ justifyContent: 'space-between' }}`
**Correct:** `justify="between"`

**Wrong:** `<Stack as="ul">` (polymorphic rendering)
**Correct:** Use `<ul>` with Stack inside, or restructure

**Wrong:** `<Stack style={{ padding: '12px', marginTop: '16px' }}>`
**Correct:** Wrap with `<Box padding="sm" marginTop="md">` - Box has all spacing props

### 2. Text Component
**Wrong:** `variant="heading"`
**Correct:** Use `size` and `weight` props: `size="xl" weight="semibold"`

**Wrong:** `style={{ color: '#6b7280' }}`
**Correct:** `color="muted"` (or `secondary`, `accent`, `success`, `error`)

**Wrong:** `style={{ fontSize: '18px', fontWeight: 600 }}`
**Correct:** `size="lg" weight="semibold"`

### 3. Card Component
**Wrong:** `style={{ backgroundColor: '#f8f9fa' }}`
**Correct:** Use `variant` prop (`default`, `compact`, `flat`)

### 4. Box Component (for containers with custom styling)
Use Box instead of inline styles for:
- Padding/margin: `<Box padding="md" marginTop="lg">`
- Borders: `<Box border="all" rounded="md">`
- Background containers: Wrap content in Box or Card

### 5. Grid Component
**Wrong:** `style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}`
**Correct:** `<Grid columns={2} gap="md">`

### 6. PageLayout Component
**Wrong:** `actions={<Button>Add</Button>}`
**Correct:** `headerContent={<Button>Add</Button>}`

**Wrong:** `subtitle="Some text"`
**Correct:** `description="Some text"`

### 7. EmptyState Component
**Wrong:** `<EmptyState><CustomContent /></EmptyState>`
**Correct:** Use `action` and `secondaryAction` props

### 8. Badge Component
**Wrong variants → Correct:**
- `variant="default"` → `variant="neutral"`
- `variant="primary"` → `variant="info"`
- `variant="secondary"` → `variant="neutral"`
- `variant="danger"` → `variant="error"`

### 9. Button with Icons
**Wrong:**
```tsx
<Button>
  <Plus size={16} style={{ marginRight: '4px' }} />
  New Item
</Button>
```

**Correct:**
```tsx
<Button icon={<Plus size={16} />}>New Item</Button>
```

### 10. useConfirmDialog Hook
**Wrong:**
```tsx
const { isOpen, openDialog, closeDialog, confirm } = useConfirmDialog();
```

**Correct:**
```tsx
const confirmDialog = useConfirmDialog();
// Use: confirmDialog.show({...}), confirmDialog.close(), confirmDialog.props
```

### 11. DataTable Actions
**Wrong:** `hidden={(item) => ...}` or `disabled={(item) => ...}`
**Correct:** `show={(item) => ...}` (returns true to show, false to hide)

---

## Existing Components That Cover The Needs

| Need | Solution |
|------|----------|
| Spacing (padding/margin) | Box component |
| Grid layouts | Grid component with `columns` and `gap` |
| Styled containers | Card or Box with `border`/`rounded` |
| Icon + text in buttons | Button `icon` prop |
| Text colors | Text `color` prop (muted, secondary, accent, success, error) |
| Text sizing | Text `size` and `weight` props |

---

## Files Requiring Updates

- BankAccounts.tsx
- CapitalAssets.tsx
- Categories.tsx
- Clients.tsx
- CreateInvoice.tsx
- Dashboard.tsx
- DataExport.tsx
- DataImport.tsx
- ImportTransactions.tsx
- Institutions.tsx
- LegalEntities.tsx
- Loans.tsx
- MatchingRules.tsx
- RecurringTransactions.tsx
- Retainers.tsx
- TimeTrackingIntegrationDetails.tsx
- TimeTrackingIntegrations.tsx
- Transactions.tsx
- UserTaxProfile.tsx
