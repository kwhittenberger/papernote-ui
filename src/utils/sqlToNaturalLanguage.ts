/**
 * SQL to Natural Language Translator
 * Converts technical SQL queries into user-friendly descriptions
 */

export interface QueryDescription {
  summary: string;
  details: string[];
  technical?: string;
}

/**
 * Configuration for friendly names
 * Maps technical database/field names to business-friendly terms
 */
export interface FriendlyNameConfig {
  tables?: Record<string, string>;
  fields?: Record<string, string>;
}

/**
 * Default friendly name mappings
 * Can be overridden by passing custom config to translateSqlToNaturalLanguage
 */
const DEFAULT_FRIENDLY_NAMES: FriendlyNameConfig = {
  tables: {
    'BookingLineItems': 'Backlog Items',
    'BookingLineItem': 'Backlog Item',
    'Bookings': 'Bookings',
    'Booking': 'Booking',
    'Accounts': 'Accounts',
    'Account': 'Account',
    'Users': 'Users',
    'User': 'User',
    'Commissions': 'Commissions',
    'Commission': 'Commission',
    'Territories': 'Territories',
    'Territory': 'Territory',
    'Locations': 'Locations',
    'Location': 'Location',
    'AccountDivisions': 'Account Divisions',
    'AccountDivision': 'Account Division',
    'BillingLineItems': 'Billing Line Items',
    'BillingLineItem': 'Billing Line Item',
  },
  fields: {
    // Date fields (common across all entities)
    'CreatedDate': 'Created Date',
    'ModifiedDate': 'Modified Date',
    'CreatedAt': 'Created Date',
    'UpdatedAt': 'Updated Date',
    'DeletedAt': 'Deleted Date',

    // Backlog/BookingLineItem specific dates
    'SchedDeliveryDate': 'Scheduled Delivery Date',
    'ScheduledDeliveryDate': 'Scheduled Delivery Date',
    'DaysOverdue': 'Days Overdue',

    // Commission specific dates
    'InvoiceDate': 'Invoice Date',
    'CommissionDate': 'Commission Date',
    'PaymentDate': 'Payment Date',
    'CommDate': 'Commission Date',
    'CommPaidDate': 'Commission Paid Date',

    // Booking specific dates
    'BookingDate': 'Booking Date',
    'ShipDate': 'Ship Date',
    'DueDate': 'Due Date',
    'ExpectedCloseDate': 'Expected Close Date',

    // Quantity fields (Backlog)
    'QtyPending': 'Quantity Pending',
    'QuantityPending': 'Quantity Pending',
    'QtyOrdered': 'Quantity Ordered',
    'QuantityOrdered': 'Quantity Ordered',
    'QtyShipped': 'Quantity Shipped',
    'QuantityShipped': 'Quantity Shipped',

    // Reference numbers
    'PONumber': 'Purchase Order Number',
    'PurchaseOrderNumber': 'Purchase Order Number',
    'InvoiceNumber': 'Invoice Number',
    'OrderNumber': 'Order Number',

    // People and roles
    'ClientName': 'Client Name',
    'Customer': 'Customer',
    'CustomerName': 'Customer Name',
    'AccountManager': 'Account Manager',
    'SalesRep': 'Sales Representative',
    'SalesRepresentative': 'Sales Representative',
    'Principal': 'Principal',
    'PrincipalName': 'Principal Name',

    // Organizational fields
    'TerritoryName': 'Territory',
    'LocationName': 'Location',
    'DivisionName': 'Division',
    'AccountName': 'Account Name',

    // Status and flags
    'Status': 'Status',
    'StatusCode': 'Status',
    'IsActive': 'Active Status',
    'IsSplit': 'Split Commission',
    'IsDeleted': 'Deleted',
    'ApprovalStatus': 'Approval Status',

    // Financial amounts
    'CommissionAmount': 'Commission Amount',
    'Amount': 'Amount',
    'GrossAmount': 'Gross Amount',
    'NetAmount': 'Net Amount',
    'TotalAmount': 'Total Amount',
    'SplitPercentage': 'Split Percentage',
    'Rate': 'Rate',
    'Percentage': 'Percentage',
    'BookingTotal': 'Booking Total',
    'Commission': 'Commission',
    'CommRate': 'Commission Rate',
    'LineTotal': 'Line Total',

    // Descriptions and notes
    'Description': 'Description',
    'Notes': 'Notes',
    'Comments': 'Comments',
    'Note': 'Note',
    'ProductLine': 'Product Line',

    // Split commission fields
    'CustAccountManager': 'Customer Account Manager',
    'CustAccountManager_1': 'Account Manager 1',
    'CustAccountManager_2': 'Account Manager 2',
    'CustAccountManager_3': 'Account Manager 3',
    'CustAccountManager_4': 'Account Manager 4',
    'CustAccountManager_5': 'Account Manager 5',
    'CustAccountManager_6': 'Account Manager 6',
    'CustAMSplitRate_1': 'Split Rate 1',
    'CustAMSplitRate_2': 'Split Rate 2',
    'CustAMSplitRate_3': 'Split Rate 3',
    'CustAMSplitRate_4': 'Split Rate 4',
    'CustAMSplitRate_5': 'Split Rate 5',
    'CustAMSplitRate_6': 'Split Rate 6',

    // Fiscal period fields
    'FiscalYear': 'Fiscal Year',
    'FiscalMonth': 'Fiscal Month',

    // Account relationship fields
    'CustomerAccount': 'Customer Account',
    'PrincipalAccount': 'Principal Account',
    'DistributorAccount': 'Distributor Account',
    'RepresentativeUser': 'Representative User',
    'Distributor': 'Distributor',

    // Computed/derived fields
    'Probability': 'Probability',
    'IsPaid': 'Is Paid',
    'Company': 'Company',
  }
};

/**
 * Converts a SQL query into natural language description
 * @param sql - The SQL query to translate
 * @param customNames - Optional custom friendly name mappings
 * @param relatedData - Optional related data information with entity descriptions
 * @param appliedFilters - Optional pre-processed filter information with display values
 */
export function translateSqlToNaturalLanguage(
  sql: string,
  customNames?: FriendlyNameConfig,
  relatedData?: Array<{ entity: string; description: string; type: 'join' | 'include' | 'lookup' }>,
  appliedFilters?: Array<{ key: string; label: string; value: any; displayValue?: string }>,
  calculations?: Array<{ field: string; description: string; formula?: string; type: string; example?: string }>
): QueryDescription {
  if (!sql || sql.trim().length === 0) {
    return {
      summary: 'No query information available',
      details: []
    };
  }

  // Merge custom names with defaults
  const friendlyNames: FriendlyNameConfig = {
    tables: { ...DEFAULT_FRIENDLY_NAMES.tables, ...customNames?.tables },
    fields: { ...DEFAULT_FRIENDLY_NAMES.fields, ...customNames?.fields }
  };

  const normalized = sql.toLowerCase().trim();
  const details: string[] = [];

  // Extract main action
  let summary = 'Retrieving data';

  // Detect the main table/entity being queried
  const fromMatch = normalized.match(/from\s+["']?(\w+)["']?/);
  const tableName = fromMatch ? formatTableName(fromMatch[1], friendlyNames) : 'records';

  summary = `Showing ${tableName}`;

  // Parse WHERE conditions - use appliedFilters if provided, otherwise parse SQL
  if (appliedFilters && appliedFilters.length > 0) {
    details.push('**Filters applied:**');
    appliedFilters.forEach(filter => {
      const displayText = filter.displayValue || `${filter.label} = ${filter.value}`;
      details.push(`  • ${displayText}`);
    });
  } else {
    const whereConditions = parseWhereClause(normalized, friendlyNames);
    if (whereConditions.length > 0) {
      details.push('**Filters applied:**');
      whereConditions.forEach(condition => details.push(`  • ${condition}`));
    }
  }

  // Parse ORDER BY
  const orderBy = parseOrderBy(normalized, friendlyNames);
  if (orderBy) {
    details.push(`**Sorted by:** ${orderBy}`);
  }

  // Parse LIMIT/TOP
  const limit = parseLimit(normalized);
  if (limit) {
    details.push(`**Showing:** ${limit}`);
  }

  // Parse JOINs - use relatedData if provided, otherwise parse from SQL
  if (relatedData && relatedData.length > 0) {
    details.push('**Related data included:**');
    relatedData.forEach(related => {
      details.push(`  • ${related.entity}`);
    });
  }

  // Show calculations if provided
  if (calculations && calculations.length > 0) {
    details.push('**Calculated fields:**');
    calculations.forEach(calc => {
      let calcText = `${calc.field}: ${calc.description}`;
      if (calc.formula) {
        calcText += ` (${calc.formula})`;
      }
      if (calc.example) {
        calcText += ` - Example: ${calc.example}`;
      }
      details.push(`  • ${calcText}`);
    });
  }

  // Parse aggregations (fallback if calculations not provided)
  if (!calculations || calculations.length === 0) {
    const aggregations = parseAggregations(normalized, friendlyNames);
    if (aggregations.length > 0) {
      details.push('**Calculations:**');
      aggregations.forEach(agg => details.push(`  • ${agg}`));
    }
  }

  return {
    summary,
    details,
    technical: sql
  };
}

/**
 * Format table names to be more readable
 */
function formatTableName(tableName: string, friendlyNames: FriendlyNameConfig): string {
  // Check for friendly name first (case-insensitive)
  if (friendlyNames.tables) {
    const lowerTableName = tableName.toLowerCase();
    for (const [key, value] of Object.entries(friendlyNames.tables)) {
      if (key.toLowerCase() === lowerTableName) {
        return value;
      }
    }
  }

  // Remove common prefixes
  let formatted = tableName.replace(/^(tbl|dbo\.|public\.)/, '');

  // Split camel case or pascal case
  formatted = formatted.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace underscores with spaces
  formatted = formatted.replace(/_/g, ' ');

  // Capitalize first letter of each word
  formatted = formatted.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return formatted;
}

/**
 * Parse WHERE clause conditions into natural language
 */
function parseWhereClause(sql: string, friendlyNames: FriendlyNameConfig): string[] {
  const conditions: string[] = [];

  // Extract WHERE clause
  const whereMatch = sql.match(/where\s+(.*?)(?:order by|group by|limit|offset|$)/s);
  if (!whereMatch) return conditions;

  const whereClause = whereMatch[1].trim();

  // Split by AND/OR (simplified - doesn't handle nested conditions perfectly)
  const parts = whereClause.split(/\s+(?:and|or)\s+/i);

  parts.forEach(part => {
    const condition = parseCondition(part.trim(), friendlyNames);
    if (condition) {
      conditions.push(condition);
    }
  });

  return conditions;
}

/**
 * Parse individual condition into natural language
 */
function parseCondition(condition: string, friendlyNames: FriendlyNameConfig): string | null {
  // Remove extra whitespace
  condition = condition.replace(/\s+/g, ' ').trim();

  // Date range patterns
  if (condition.includes('>=') && condition.includes('<=')) {
    const field = extractFieldName(condition, friendlyNames);
    return `${field} is within a specific date range`;
  }

  // Greater than or equal
  if (condition.includes('>=')) {
    const field = extractFieldName(condition, friendlyNames);
    const value = extractValue(condition, '>=');
    const formattedValue = formatValueForDisplay(value);
    return `${field} is on or after ${formattedValue}`;
  }

  // Less than or equal
  if (condition.includes('<=')) {
    const field = extractFieldName(condition, friendlyNames);
    const value = extractValue(condition, '<=');
    const formattedValue = formatValueForDisplay(value);
    return `${field} is on or before ${formattedValue}`;
  }

  // Greater than
  if (condition.includes('>')) {
    const field = extractFieldName(condition, friendlyNames);
    const value = extractValue(condition, '>');
    return `${field} is greater than ${value}`;
  }

  // Less than
  if (condition.includes('<')) {
    const field = extractFieldName(condition, friendlyNames);
    const value = extractValue(condition, '<');
    return `${field} is less than ${value}`;
  }

  // Equality
  if (condition.includes('=')) {
    const field = extractFieldName(condition, friendlyNames);
    const value = extractValue(condition, '=');
    if (value.toLowerCase() === 'null') {
      return `${field} is empty`;
    }
    const formattedValue = formatValueForDisplay(value);
    return `${field} equals ${formattedValue}`;
  }

  // LIKE pattern
  if (condition.includes('like')) {
    const field = extractFieldName(condition, friendlyNames);
    return `${field} contains specific text`;
  }

  // IN list
  if (condition.includes('in (')) {
    const field = extractFieldName(condition, friendlyNames);
    return `${field} is one of several values`;
  }

  // IS NULL
  if (condition.includes('is null')) {
    const field = extractFieldName(condition, friendlyNames);
    return `${field} is empty`;
  }

  // IS NOT NULL
  if (condition.includes('is not null')) {
    const field = extractFieldName(condition, friendlyNames);
    return `${field} has a value`;
  }

  // BETWEEN
  if (condition.includes('between')) {
    const field = extractFieldName(condition, friendlyNames);
    return `${field} is within a range`;
  }

  return null;
}

/**
 * Extract field name from condition
 */
function extractFieldName(condition: string, friendlyNames: FriendlyNameConfig): string {
  condition = condition.trim();

  let match = condition.match(/^(?:["']?\w+["']?\.)?["']?(\w+)["']?/);

  if (match && match[1]) {
    const fieldName = match[1];

    if (fieldName.length === 1) {
      const dotMatch = condition.match(/\.["']?(\w+)["']?/);
      if (dotMatch && dotMatch[1]) {
        return formatFieldName(dotMatch[1], friendlyNames);
      }
    }

    return formatFieldName(fieldName, friendlyNames);
  }

  return 'field';
}

/**
 * Format value for display (convert dates, etc.)
 */
function formatValueForDisplay(value: string): string {
  if (/^\d{4}-\d{2}-\d{2}/.test(value)) {
    try {
      const date = new Date(value);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch {
      return value;
    }
  }
  
  if (value === 'specified value') {
    return value;
  }
  
  return value;
}

/**
 * Extract value from condition
 */
function extractValue(condition: string, operator: string): string {
  const parts = condition.split(operator);
  if (parts.length > 1) {
    let value = parts[1].trim();

    if (value.includes("'-infinity'") || value.includes('"-infinity"')) {
      return 'the beginning of time';
    }
    if (value.includes("'infinity'") || value.includes('"infinity"')) {
      return 'the end of time';
    }

    value = value.replace(/timestamptz\s+/gi, '');
    value = value.replace(/^['"]|['"]$/g, '');
    value = value.replace(/@\w+/g, 'specified value');
    return value;
  }
  return 'a value';
}

/**
 * Format field names to be more readable
 */
function formatFieldName(fieldName: string, friendlyNames: FriendlyNameConfig): string {
  if (friendlyNames.fields) {
    const lowerFieldName = fieldName.toLowerCase();
    for (const [key, value] of Object.entries(friendlyNames.fields)) {
      if (key.toLowerCase() === lowerFieldName) {
        return value;
      }
    }
  }

  fieldName = fieldName.replace(/^\w+\./, '');
  fieldName = fieldName.replace(/([a-z])([A-Z])/g, '$1 $2');
  fieldName = fieldName.replace(/_/g, ' ');

  return fieldName.charAt(0).toUpperCase() + fieldName.slice(1).toLowerCase();
}

/**
 * Parse ORDER BY clause
 */
function parseOrderBy(sql: string, friendlyNames: FriendlyNameConfig): string | null {
  const match = sql.match(/order by\s+(.*?)(?:limit|offset|$)/s);
  if (!match) return null;

  const orderClause = match[1].trim();
  const parts = orderClause.split(',').map(p => p.trim());

  const descriptions = parts.map(part => {
    const desc = part.includes('desc');
    let field = part.replace(/\s+(asc|desc)$/i, '').trim();
    field = field.replace(/["']/g, '');
    field = field.replace(/^\w+\./, '');

    const fieldName = formatFieldName(field, friendlyNames);
    return `${fieldName} (${desc ? 'newest first' : 'oldest first'})`;
  });

  return descriptions.join(', then by ');
}

/**
 * Parse LIMIT/TOP clause
 */
function parseLimit(sql: string): string | null {
  let match = sql.match(/limit\s+(\d+)/);
  if (match) {
    return `First ${match[1]} results`;
  }

  match = sql.match(/top\s+(\d+)/);
  if (match) {
    return `First ${match[1]} results`;
  }

  return null;
}

/**
 * Parse JOIN clauses
 */
function parseJoins(sql: string, friendlyNames: FriendlyNameConfig): string[] {
  const joins: string[] = [];
  const joinMatches = sql.matchAll(/(left|right|inner|outer)?\s*join\s+["']?(\w+)["']?/gi);

  for (const match of joinMatches) {
    const joinType = match[1] ? match[1].toLowerCase() : 'inner';
    const tableName = formatTableName(match[2], friendlyNames);
    joins.push(tableName);
  }

  return joins;
}

/**
 * Parse aggregation functions
 */
function parseAggregations(sql: string, friendlyNames: FriendlyNameConfig): string[] {
  const aggregations: string[] = [];

  if (sql.includes('count(')) {
    aggregations.push('Counting records');
  }

  const sumMatches = sql.matchAll(/sum\(["']?(\w+)["']?\)/gi);
  for (const match of sumMatches) {
    const field = formatFieldName(match[1], friendlyNames);
    aggregations.push(`Totaling ${field}`);
  }

  const avgMatches = sql.matchAll(/avg\(["']?(\w+)["']?\)/gi);
  for (const match of avgMatches) {
    const field = formatFieldName(match[1], friendlyNames);
    aggregations.push(`Averaging ${field}`);
  }

  const maxMatches = sql.matchAll(/max\(["']?(\w+)["']?\)/gi);
  for (const match of maxMatches) {
    const field = formatFieldName(match[1], friendlyNames);
    aggregations.push(`Finding maximum ${field}`);
  }

  const minMatches = sql.matchAll(/min\(["']?(\w+)["']?\)/gi);
  for (const match of minMatches) {
    const field = formatFieldName(match[1], friendlyNames);
    aggregations.push(`Finding minimum ${field}`);
  }

  return aggregations;
}
