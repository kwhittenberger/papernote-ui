# ExcelJS Migration Plan

## Overview

Migrate from `xlsx` (SheetJS) to `exceljs` to resolve security vulnerabilities and restore Excel import functionality.

## Current State

- **xlsx package**: v0.18.5 (latest) with known vulnerabilities:
  - GHSA-4r6h-8v6p-xvw6: Prototype Pollution (HIGH)
  - GHSA-5pgg-2g8v-p4x9: ReDoS (HIGH)
- **Import disabled**: As of v1.3.0, Excel import is disabled in Spreadsheet component
- **Export working**: Export functionality remains functional (not affected by vulnerabilities)

## Files Affected

1. `src/components/Spreadsheet.tsx` - Main spreadsheet with import/export
2. `src/utils/excelExport.ts` - Standalone Excel export utilities

## ExcelJS vs xlsx Comparison

| Feature | xlsx (current) | exceljs |
|---------|---------------|---------|
| Vulnerabilities | 2 HIGH | None known |
| Bundle size | ~1.1MB | ~1.3MB |
| Import Excel | Yes (disabled) | Yes |
| Export Excel | Yes | Yes |
| Streaming | Limited | Yes |
| Styling | Basic | Rich |
| Formulas | Read/Write | Read/Write |
| Browser support | Yes | Yes |
| Active maintenance | Infrequent | Active |

## Migration Tasks

### Phase 1: Research & Prototype (Session 1)

- [ ] Install exceljs alongside xlsx for testing
- [ ] Create prototype import function using exceljs
- [ ] Create prototype export function using exceljs
- [ ] Verify formula handling compatibility
- [ ] Test with sample Excel files

### Phase 2: Spreadsheet Component Migration (Session 2)

- [ ] Replace xlsx imports with exceljs in Spreadsheet.tsx
- [ ] Update handleImport to use exceljs Workbook.xlsx.load()
- [ ] Update handleExport to use exceljs Workbook.xlsx.writeBuffer()
- [ ] Re-enable enableImport prop
- [ ] Test import/export roundtrip

### Phase 3: excelExport Utility Migration (Session 3)

- [ ] Update exportToExcel function to use exceljs
- [ ] Update exportDataTableToExcel function
- [ ] Update createMultiSheetExcel function
- [ ] Maintain backward compatibility with existing API

### Phase 4: Cleanup & Release (Session 4)

- [ ] Remove xlsx package from dependencies
- [ ] Run npm audit to verify vulnerabilities resolved
- [ ] Update CLAUDE.md documentation
- [ ] Update component JSDoc
- [ ] Bump version and release

## API Comparison

### Current xlsx API (to replace)

```typescript
// Import
import { read, utils, writeFile, WorkBook } from 'xlsx';

// Read Excel file
const workbook: WorkBook = read(binaryData, { type: 'binary' });
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = utils.sheet_to_json(sheet, { header: 1 });

// Write Excel file
const ws = utils.aoa_to_sheet(data);
const wb = utils.book_new();
utils.book_append_sheet(wb, ws, 'Sheet1');
writeFile(wb, 'output.xlsx');
```

### New exceljs API (replacement)

```typescript
// Import
import ExcelJS from 'exceljs';

// Read Excel file
const workbook = new ExcelJS.Workbook();
await workbook.xlsx.load(arrayBuffer);
const sheet = workbook.worksheets[0];
const data = [];
sheet.eachRow((row, rowNumber) => {
  data.push(row.values.slice(1)); // slice(1) removes empty first element
});

// Write Excel file
const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('Sheet1');
data.forEach(row => sheet.addRow(row));
const buffer = await workbook.xlsx.writeBuffer();
// Download buffer as file
```

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| API differences | Create wrapper functions to match existing API |
| Formula handling | Test formula preservation in roundtrip |
| Bundle size increase (~200KB) | Accept tradeoff for security |
| Breaking changes | Maintain same component props interface |

## Success Criteria

1. npm audit shows no HIGH/CRITICAL vulnerabilities
2. Excel import works with .xlsx, .xls files
3. Excel export produces valid files
4. Formulas preserved in import/export
5. No breaking changes to component API
6. All existing tests pass

## References

- [exceljs GitHub](https://github.com/exceljs/exceljs)
- [exceljs Documentation](https://github.com/exceljs/exceljs#readme)
- [xlsx vulnerability GHSA-4r6h-8v6p-xvw6](https://github.com/advisories/GHSA-4r6h-8v6p-xvw6)
- [xlsx vulnerability GHSA-5pgg-2g8v-p4x9](https://github.com/advisories/GHSA-5pgg-2g8v-p4x9)
