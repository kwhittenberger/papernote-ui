/**
 * Formula definitions for DataGrid intellisense
 * Based on fast-formula-parser supported functions
 */

export interface FormulaParameter {
  name: string;
  description: string;
  optional?: boolean;
}

export interface FormulaDefinition {
  name: string;
  category: FormulaCategory;
  description: string;
  syntax: string;
  parameters: FormulaParameter[];
  example?: string;
}

export type FormulaCategory =
  | 'Math'
  | 'Statistical'
  | 'Lookup'
  | 'Text'
  | 'Logical'
  | 'Date'
  | 'Information'
  | 'Financial';

export const FORMULA_DEFINITIONS: FormulaDefinition[] = [
  // ==================== MATH ====================
  {
    name: 'SUM',
    category: 'Math',
    description: 'Adds all numbers in a range of cells',
    syntax: 'SUM(number1, [number2], ...)',
    parameters: [
      { name: 'number1', description: 'First number or range to add' },
      { name: 'number2', description: 'Additional numbers or ranges', optional: true },
    ],
    example: '=SUM(A1:A10)',
  },
  {
    name: 'AVERAGE',
    category: 'Math',
    description: 'Returns the average of the arguments',
    syntax: 'AVERAGE(number1, [number2], ...)',
    parameters: [
      { name: 'number1', description: 'First number or range' },
      { name: 'number2', description: 'Additional numbers or ranges', optional: true },
    ],
    example: '=AVERAGE(B1:B20)',
  },
  {
    name: 'MIN',
    category: 'Math',
    description: 'Returns the minimum value in a list of arguments',
    syntax: 'MIN(number1, [number2], ...)',
    parameters: [
      { name: 'number1', description: 'First number or range' },
      { name: 'number2', description: 'Additional numbers or ranges', optional: true },
    ],
    example: '=MIN(A1:A100)',
  },
  {
    name: 'MAX',
    category: 'Math',
    description: 'Returns the maximum value in a list of arguments',
    syntax: 'MAX(number1, [number2], ...)',
    parameters: [
      { name: 'number1', description: 'First number or range' },
      { name: 'number2', description: 'Additional numbers or ranges', optional: true },
    ],
    example: '=MAX(A1:A100)',
  },
  {
    name: 'COUNT',
    category: 'Math',
    description: 'Counts the number of cells that contain numbers',
    syntax: 'COUNT(value1, [value2], ...)',
    parameters: [
      { name: 'value1', description: 'First value or range' },
      { name: 'value2', description: 'Additional values or ranges', optional: true },
    ],
    example: '=COUNT(A1:A50)',
  },
  {
    name: 'COUNTA',
    category: 'Math',
    description: 'Counts the number of non-empty cells',
    syntax: 'COUNTA(value1, [value2], ...)',
    parameters: [
      { name: 'value1', description: 'First value or range' },
      { name: 'value2', description: 'Additional values or ranges', optional: true },
    ],
    example: '=COUNTA(A1:A50)',
  },
  {
    name: 'ROUND',
    category: 'Math',
    description: 'Rounds a number to a specified number of digits',
    syntax: 'ROUND(number, num_digits)',
    parameters: [
      { name: 'number', description: 'The number to round' },
      { name: 'num_digits', description: 'Number of decimal places' },
    ],
    example: '=ROUND(3.14159, 2)',
  },
  {
    name: 'ROUNDUP',
    category: 'Math',
    description: 'Rounds a number up, away from zero',
    syntax: 'ROUNDUP(number, num_digits)',
    parameters: [
      { name: 'number', description: 'The number to round up' },
      { name: 'num_digits', description: 'Number of decimal places' },
    ],
    example: '=ROUNDUP(3.14159, 2)',
  },
  {
    name: 'ROUNDDOWN',
    category: 'Math',
    description: 'Rounds a number down, toward zero',
    syntax: 'ROUNDDOWN(number, num_digits)',
    parameters: [
      { name: 'number', description: 'The number to round down' },
      { name: 'num_digits', description: 'Number of decimal places' },
    ],
    example: '=ROUNDDOWN(3.14159, 2)',
  },
  {
    name: 'ABS',
    category: 'Math',
    description: 'Returns the absolute value of a number',
    syntax: 'ABS(number)',
    parameters: [{ name: 'number', description: 'The number to get absolute value of' }],
    example: '=ABS(-5)',
  },
  {
    name: 'SQRT',
    category: 'Math',
    description: 'Returns the square root of a number',
    syntax: 'SQRT(number)',
    parameters: [{ name: 'number', description: 'The number to get square root of' }],
    example: '=SQRT(16)',
  },
  {
    name: 'POWER',
    category: 'Math',
    description: 'Returns the result of a number raised to a power',
    syntax: 'POWER(number, power)',
    parameters: [
      { name: 'number', description: 'The base number' },
      { name: 'power', description: 'The exponent' },
    ],
    example: '=POWER(2, 8)',
  },
  {
    name: 'MOD',
    category: 'Math',
    description: 'Returns the remainder after division',
    syntax: 'MOD(number, divisor)',
    parameters: [
      { name: 'number', description: 'The number to divide' },
      { name: 'divisor', description: 'The number to divide by' },
    ],
    example: '=MOD(10, 3)',
  },
  {
    name: 'INT',
    category: 'Math',
    description: 'Rounds a number down to the nearest integer',
    syntax: 'INT(number)',
    parameters: [{ name: 'number', description: 'The number to round down' }],
    example: '=INT(3.7)',
  },
  {
    name: 'CEILING',
    category: 'Math',
    description: 'Rounds a number up to the nearest multiple of significance',
    syntax: 'CEILING(number, significance)',
    parameters: [
      { name: 'number', description: 'The number to round' },
      { name: 'significance', description: 'The multiple to round to' },
    ],
    example: '=CEILING(4.3, 1)',
  },
  {
    name: 'FLOOR',
    category: 'Math',
    description: 'Rounds a number down to the nearest multiple of significance',
    syntax: 'FLOOR(number, significance)',
    parameters: [
      { name: 'number', description: 'The number to round' },
      { name: 'significance', description: 'The multiple to round to' },
    ],
    example: '=FLOOR(4.7, 1)',
  },
  {
    name: 'PRODUCT',
    category: 'Math',
    description: 'Multiplies all the numbers given as arguments',
    syntax: 'PRODUCT(number1, [number2], ...)',
    parameters: [
      { name: 'number1', description: 'First number or range' },
      { name: 'number2', description: 'Additional numbers or ranges', optional: true },
    ],
    example: '=PRODUCT(A1:A5)',
  },
  {
    name: 'SUMPRODUCT',
    category: 'Math',
    description: 'Returns the sum of the products of corresponding array components',
    syntax: 'SUMPRODUCT(array1, [array2], ...)',
    parameters: [
      { name: 'array1', description: 'First array' },
      { name: 'array2', description: 'Additional arrays', optional: true },
    ],
    example: '=SUMPRODUCT(A1:A5, B1:B5)',
  },
  {
    name: 'RAND',
    category: 'Math',
    description: 'Returns a random number between 0 and 1',
    syntax: 'RAND()',
    parameters: [],
    example: '=RAND()',
  },
  {
    name: 'RANDBETWEEN',
    category: 'Math',
    description: 'Returns a random integer between the specified values',
    syntax: 'RANDBETWEEN(bottom, top)',
    parameters: [
      { name: 'bottom', description: 'Minimum value' },
      { name: 'top', description: 'Maximum value' },
    ],
    example: '=RANDBETWEEN(1, 100)',
  },

  // ==================== STATISTICAL ====================
  {
    name: 'COUNTIF',
    category: 'Statistical',
    description: 'Counts cells that meet a single criterion',
    syntax: 'COUNTIF(range, criteria)',
    parameters: [
      { name: 'range', description: 'Range of cells to count' },
      { name: 'criteria', description: 'Condition to match' },
    ],
    example: '=COUNTIF(A1:A10, ">5")',
  },
  {
    name: 'COUNTIFS',
    category: 'Statistical',
    description: 'Counts cells that meet multiple criteria',
    syntax: 'COUNTIFS(range1, criteria1, [range2], [criteria2], ...)',
    parameters: [
      { name: 'range1', description: 'First range to evaluate' },
      { name: 'criteria1', description: 'First condition' },
      { name: 'range2', description: 'Additional range', optional: true },
      { name: 'criteria2', description: 'Additional condition', optional: true },
    ],
    example: '=COUNTIFS(A:A, ">5", B:B, "<10")',
  },
  {
    name: 'SUMIF',
    category: 'Statistical',
    description: 'Sums cells that meet a single criterion',
    syntax: 'SUMIF(range, criteria, [sum_range])',
    parameters: [
      { name: 'range', description: 'Range to evaluate' },
      { name: 'criteria', description: 'Condition to match' },
      { name: 'sum_range', description: 'Actual cells to sum', optional: true },
    ],
    example: '=SUMIF(A1:A10, ">5", B1:B10)',
  },
  {
    name: 'SUMIFS',
    category: 'Statistical',
    description: 'Sums cells that meet multiple criteria',
    syntax: 'SUMIFS(sum_range, range1, criteria1, [range2], [criteria2], ...)',
    parameters: [
      { name: 'sum_range', description: 'Cells to sum' },
      { name: 'range1', description: 'First range to evaluate' },
      { name: 'criteria1', description: 'First condition' },
      { name: 'range2', description: 'Additional range', optional: true },
      { name: 'criteria2', description: 'Additional condition', optional: true },
    ],
    example: '=SUMIFS(C:C, A:A, ">5", B:B, "<10")',
  },
  {
    name: 'AVERAGEIF',
    category: 'Statistical',
    description: 'Averages cells that meet a single criterion',
    syntax: 'AVERAGEIF(range, criteria, [average_range])',
    parameters: [
      { name: 'range', description: 'Range to evaluate' },
      { name: 'criteria', description: 'Condition to match' },
      { name: 'average_range', description: 'Actual cells to average', optional: true },
    ],
    example: '=AVERAGEIF(A1:A10, ">5", B1:B10)',
  },
  {
    name: 'MEDIAN',
    category: 'Statistical',
    description: 'Returns the median of the given numbers',
    syntax: 'MEDIAN(number1, [number2], ...)',
    parameters: [
      { name: 'number1', description: 'First number or range' },
      { name: 'number2', description: 'Additional numbers or ranges', optional: true },
    ],
    example: '=MEDIAN(A1:A100)',
  },
  {
    name: 'MODE',
    category: 'Statistical',
    description: 'Returns the most frequently occurring value',
    syntax: 'MODE(number1, [number2], ...)',
    parameters: [
      { name: 'number1', description: 'First number or range' },
      { name: 'number2', description: 'Additional numbers or ranges', optional: true },
    ],
    example: '=MODE(A1:A100)',
  },
  {
    name: 'STDEV',
    category: 'Statistical',
    description: 'Estimates standard deviation based on a sample',
    syntax: 'STDEV(number1, [number2], ...)',
    parameters: [
      { name: 'number1', description: 'First number or range' },
      { name: 'number2', description: 'Additional numbers or ranges', optional: true },
    ],
    example: '=STDEV(A1:A100)',
  },
  {
    name: 'VAR',
    category: 'Statistical',
    description: 'Estimates variance based on a sample',
    syntax: 'VAR(number1, [number2], ...)',
    parameters: [
      { name: 'number1', description: 'First number or range' },
      { name: 'number2', description: 'Additional numbers or ranges', optional: true },
    ],
    example: '=VAR(A1:A100)',
  },
  {
    name: 'LARGE',
    category: 'Statistical',
    description: 'Returns the k-th largest value in a data set',
    syntax: 'LARGE(array, k)',
    parameters: [
      { name: 'array', description: 'Range to search' },
      { name: 'k', description: 'Position from largest' },
    ],
    example: '=LARGE(A1:A100, 3)',
  },
  {
    name: 'SMALL',
    category: 'Statistical',
    description: 'Returns the k-th smallest value in a data set',
    syntax: 'SMALL(array, k)',
    parameters: [
      { name: 'array', description: 'Range to search' },
      { name: 'k', description: 'Position from smallest' },
    ],
    example: '=SMALL(A1:A100, 3)',
  },
  {
    name: 'RANK',
    category: 'Statistical',
    description: 'Returns the rank of a number in a list',
    syntax: 'RANK(number, ref, [order])',
    parameters: [
      { name: 'number', description: 'The number to rank' },
      { name: 'ref', description: 'Range of numbers' },
      { name: 'order', description: '0 for descending, non-zero for ascending', optional: true },
    ],
    example: '=RANK(A1, A1:A100)',
  },
  {
    name: 'PERCENTILE',
    category: 'Statistical',
    description: 'Returns the k-th percentile of values',
    syntax: 'PERCENTILE(array, k)',
    parameters: [
      { name: 'array', description: 'Range of data' },
      { name: 'k', description: 'Percentile value (0 to 1)' },
    ],
    example: '=PERCENTILE(A1:A100, 0.9)',
  },

  // ==================== LOOKUP ====================
  {
    name: 'VLOOKUP',
    category: 'Lookup',
    description: 'Looks for a value in the leftmost column and returns a value in the same row from a specified column',
    syntax: 'VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])',
    parameters: [
      { name: 'lookup_value', description: 'Value to search for' },
      { name: 'table_array', description: 'Table range to search' },
      { name: 'col_index_num', description: 'Column number to return (1-based)' },
      { name: 'range_lookup', description: 'FALSE for exact match, TRUE for approximate', optional: true },
    ],
    example: '=VLOOKUP(A1, B1:D10, 2, FALSE)',
  },
  {
    name: 'HLOOKUP',
    category: 'Lookup',
    description: 'Looks for a value in the top row and returns a value in the same column from a specified row',
    syntax: 'HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])',
    parameters: [
      { name: 'lookup_value', description: 'Value to search for' },
      { name: 'table_array', description: 'Table range to search' },
      { name: 'row_index_num', description: 'Row number to return (1-based)' },
      { name: 'range_lookup', description: 'FALSE for exact match, TRUE for approximate', optional: true },
    ],
    example: '=HLOOKUP(A1, A1:Z3, 2, FALSE)',
  },
  {
    name: 'INDEX',
    category: 'Lookup',
    description: 'Returns a value from a specific position in a range',
    syntax: 'INDEX(array, row_num, [col_num])',
    parameters: [
      { name: 'array', description: 'Range of cells' },
      { name: 'row_num', description: 'Row position' },
      { name: 'col_num', description: 'Column position', optional: true },
    ],
    example: '=INDEX(A1:C10, 5, 2)',
  },
  {
    name: 'MATCH',
    category: 'Lookup',
    description: 'Returns the relative position of an item in a range',
    syntax: 'MATCH(lookup_value, lookup_array, [match_type])',
    parameters: [
      { name: 'lookup_value', description: 'Value to find' },
      { name: 'lookup_array', description: 'Range to search' },
      { name: 'match_type', description: '0 for exact, 1 for less than, -1 for greater than', optional: true },
    ],
    example: '=MATCH("Apple", A1:A10, 0)',
  },
  {
    name: 'LOOKUP',
    category: 'Lookup',
    description: 'Looks up a value in a vector or array',
    syntax: 'LOOKUP(lookup_value, lookup_vector, [result_vector])',
    parameters: [
      { name: 'lookup_value', description: 'Value to find' },
      { name: 'lookup_vector', description: 'Range to search' },
      { name: 'result_vector', description: 'Range to return from', optional: true },
    ],
    example: '=LOOKUP(5, A1:A10, B1:B10)',
  },
  {
    name: 'CHOOSE',
    category: 'Lookup',
    description: 'Returns a value from a list based on an index',
    syntax: 'CHOOSE(index_num, value1, [value2], ...)',
    parameters: [
      { name: 'index_num', description: 'Which value to return (1-based)' },
      { name: 'value1', description: 'First value' },
      { name: 'value2', description: 'Additional values', optional: true },
    ],
    example: '=CHOOSE(2, "Red", "Blue", "Green")',
  },
  {
    name: 'ROW',
    category: 'Lookup',
    description: 'Returns the row number of a reference',
    syntax: 'ROW([reference])',
    parameters: [{ name: 'reference', description: 'Cell reference', optional: true }],
    example: '=ROW(A5)',
  },
  {
    name: 'COLUMN',
    category: 'Lookup',
    description: 'Returns the column number of a reference',
    syntax: 'COLUMN([reference])',
    parameters: [{ name: 'reference', description: 'Cell reference', optional: true }],
    example: '=COLUMN(C1)',
  },
  {
    name: 'ROWS',
    category: 'Lookup',
    description: 'Returns the number of rows in a reference',
    syntax: 'ROWS(array)',
    parameters: [{ name: 'array', description: 'Range reference' }],
    example: '=ROWS(A1:A10)',
  },
  {
    name: 'COLUMNS',
    category: 'Lookup',
    description: 'Returns the number of columns in a reference',
    syntax: 'COLUMNS(array)',
    parameters: [{ name: 'array', description: 'Range reference' }],
    example: '=COLUMNS(A1:D1)',
  },
  {
    name: 'OFFSET',
    category: 'Lookup',
    description: 'Returns a reference offset from a starting point',
    syntax: 'OFFSET(reference, rows, cols, [height], [width])',
    parameters: [
      { name: 'reference', description: 'Starting cell' },
      { name: 'rows', description: 'Rows to offset' },
      { name: 'cols', description: 'Columns to offset' },
      { name: 'height', description: 'Height of result', optional: true },
      { name: 'width', description: 'Width of result', optional: true },
    ],
    example: '=OFFSET(A1, 2, 3)',
  },
  {
    name: 'INDIRECT',
    category: 'Lookup',
    description: 'Returns the reference specified by a text string',
    syntax: 'INDIRECT(ref_text, [a1])',
    parameters: [
      { name: 'ref_text', description: 'Reference as text' },
      { name: 'a1', description: 'TRUE for A1 style, FALSE for R1C1', optional: true },
    ],
    example: '=INDIRECT("A" & B1)',
  },

  // ==================== TEXT ====================
  {
    name: 'CONCATENATE',
    category: 'Text',
    description: 'Joins several text strings into one',
    syntax: 'CONCATENATE(text1, [text2], ...)',
    parameters: [
      { name: 'text1', description: 'First text' },
      { name: 'text2', description: 'Additional text', optional: true },
    ],
    example: '=CONCATENATE(A1, " ", B1)',
  },
  {
    name: 'CONCAT',
    category: 'Text',
    description: 'Joins text from multiple ranges',
    syntax: 'CONCAT(text1, [text2], ...)',
    parameters: [
      { name: 'text1', description: 'First text or range' },
      { name: 'text2', description: 'Additional text or ranges', optional: true },
    ],
    example: '=CONCAT(A1:A5)',
  },
  {
    name: 'LEFT',
    category: 'Text',
    description: 'Returns the leftmost characters from a text string',
    syntax: 'LEFT(text, [num_chars])',
    parameters: [
      { name: 'text', description: 'Text string' },
      { name: 'num_chars', description: 'Number of characters', optional: true },
    ],
    example: '=LEFT(A1, 5)',
  },
  {
    name: 'RIGHT',
    category: 'Text',
    description: 'Returns the rightmost characters from a text string',
    syntax: 'RIGHT(text, [num_chars])',
    parameters: [
      { name: 'text', description: 'Text string' },
      { name: 'num_chars', description: 'Number of characters', optional: true },
    ],
    example: '=RIGHT(A1, 5)',
  },
  {
    name: 'MID',
    category: 'Text',
    description: 'Returns characters from the middle of a text string',
    syntax: 'MID(text, start_num, num_chars)',
    parameters: [
      { name: 'text', description: 'Text string' },
      { name: 'start_num', description: 'Starting position' },
      { name: 'num_chars', description: 'Number of characters' },
    ],
    example: '=MID(A1, 3, 5)',
  },
  {
    name: 'LEN',
    category: 'Text',
    description: 'Returns the number of characters in a text string',
    syntax: 'LEN(text)',
    parameters: [{ name: 'text', description: 'Text string' }],
    example: '=LEN(A1)',
  },
  {
    name: 'UPPER',
    category: 'Text',
    description: 'Converts text to uppercase',
    syntax: 'UPPER(text)',
    parameters: [{ name: 'text', description: 'Text to convert' }],
    example: '=UPPER(A1)',
  },
  {
    name: 'LOWER',
    category: 'Text',
    description: 'Converts text to lowercase',
    syntax: 'LOWER(text)',
    parameters: [{ name: 'text', description: 'Text to convert' }],
    example: '=LOWER(A1)',
  },
  {
    name: 'PROPER',
    category: 'Text',
    description: 'Capitalizes the first letter of each word',
    syntax: 'PROPER(text)',
    parameters: [{ name: 'text', description: 'Text to convert' }],
    example: '=PROPER(A1)',
  },
  {
    name: 'TRIM',
    category: 'Text',
    description: 'Removes extra spaces from text',
    syntax: 'TRIM(text)',
    parameters: [{ name: 'text', description: 'Text to trim' }],
    example: '=TRIM(A1)',
  },
  {
    name: 'CLEAN',
    category: 'Text',
    description: 'Removes non-printable characters from text',
    syntax: 'CLEAN(text)',
    parameters: [{ name: 'text', description: 'Text to clean' }],
    example: '=CLEAN(A1)',
  },
  {
    name: 'FIND',
    category: 'Text',
    description: 'Finds one text string within another (case-sensitive)',
    syntax: 'FIND(find_text, within_text, [start_num])',
    parameters: [
      { name: 'find_text', description: 'Text to find' },
      { name: 'within_text', description: 'Text to search in' },
      { name: 'start_num', description: 'Starting position', optional: true },
    ],
    example: '=FIND("@", A1)',
  },
  {
    name: 'SEARCH',
    category: 'Text',
    description: 'Finds one text string within another (case-insensitive)',
    syntax: 'SEARCH(find_text, within_text, [start_num])',
    parameters: [
      { name: 'find_text', description: 'Text to find' },
      { name: 'within_text', description: 'Text to search in' },
      { name: 'start_num', description: 'Starting position', optional: true },
    ],
    example: '=SEARCH("test", A1)',
  },
  {
    name: 'REPLACE',
    category: 'Text',
    description: 'Replaces part of a text string with different text',
    syntax: 'REPLACE(old_text, start_num, num_chars, new_text)',
    parameters: [
      { name: 'old_text', description: 'Original text' },
      { name: 'start_num', description: 'Starting position' },
      { name: 'num_chars', description: 'Number of characters to replace' },
      { name: 'new_text', description: 'Replacement text' },
    ],
    example: '=REPLACE(A1, 1, 3, "New")',
  },
  {
    name: 'SUBSTITUTE',
    category: 'Text',
    description: 'Substitutes new text for old text in a string',
    syntax: 'SUBSTITUTE(text, old_text, new_text, [instance_num])',
    parameters: [
      { name: 'text', description: 'Original text' },
      { name: 'old_text', description: 'Text to replace' },
      { name: 'new_text', description: 'Replacement text' },
      { name: 'instance_num', description: 'Which occurrence to replace', optional: true },
    ],
    example: '=SUBSTITUTE(A1, "old", "new")',
  },
  {
    name: 'TEXT',
    category: 'Text',
    description: 'Formats a number as text with a specified format',
    syntax: 'TEXT(value, format_text)',
    parameters: [
      { name: 'value', description: 'Value to format' },
      { name: 'format_text', description: 'Format code' },
    ],
    example: '=TEXT(A1, "$#,##0.00")',
  },
  {
    name: 'VALUE',
    category: 'Text',
    description: 'Converts a text string that represents a number to a number',
    syntax: 'VALUE(text)',
    parameters: [{ name: 'text', description: 'Text to convert' }],
    example: '=VALUE("123.45")',
  },
  {
    name: 'REPT',
    category: 'Text',
    description: 'Repeats text a specified number of times',
    syntax: 'REPT(text, number_times)',
    parameters: [
      { name: 'text', description: 'Text to repeat' },
      { name: 'number_times', description: 'Number of repetitions' },
    ],
    example: '=REPT("*", 5)',
  },
  {
    name: 'EXACT',
    category: 'Text',
    description: 'Checks if two text strings are exactly the same',
    syntax: 'EXACT(text1, text2)',
    parameters: [
      { name: 'text1', description: 'First text' },
      { name: 'text2', description: 'Second text' },
    ],
    example: '=EXACT(A1, B1)',
  },

  // ==================== LOGICAL ====================
  {
    name: 'IF',
    category: 'Logical',
    description: 'Returns one value if a condition is true, another if false',
    syntax: 'IF(logical_test, value_if_true, [value_if_false])',
    parameters: [
      { name: 'logical_test', description: 'Condition to test' },
      { name: 'value_if_true', description: 'Value if condition is true' },
      { name: 'value_if_false', description: 'Value if condition is false', optional: true },
    ],
    example: '=IF(A1>10, "High", "Low")',
  },
  {
    name: 'IFS',
    category: 'Logical',
    description: 'Checks multiple conditions and returns the first TRUE result',
    syntax: 'IFS(condition1, value1, [condition2, value2], ...)',
    parameters: [
      { name: 'condition1', description: 'First condition' },
      { name: 'value1', description: 'Value if first condition is true' },
      { name: 'condition2', description: 'Second condition', optional: true },
      { name: 'value2', description: 'Value if second condition is true', optional: true },
    ],
    example: '=IFS(A1>90, "A", A1>80, "B", A1>70, "C")',
  },
  {
    name: 'AND',
    category: 'Logical',
    description: 'Returns TRUE if all arguments are true',
    syntax: 'AND(logical1, [logical2], ...)',
    parameters: [
      { name: 'logical1', description: 'First condition' },
      { name: 'logical2', description: 'Additional conditions', optional: true },
    ],
    example: '=AND(A1>5, A1<10)',
  },
  {
    name: 'OR',
    category: 'Logical',
    description: 'Returns TRUE if any argument is true',
    syntax: 'OR(logical1, [logical2], ...)',
    parameters: [
      { name: 'logical1', description: 'First condition' },
      { name: 'logical2', description: 'Additional conditions', optional: true },
    ],
    example: '=OR(A1="Yes", A1="Y")',
  },
  {
    name: 'NOT',
    category: 'Logical',
    description: 'Reverses the logic of its argument',
    syntax: 'NOT(logical)',
    parameters: [{ name: 'logical', description: 'Value to reverse' }],
    example: '=NOT(A1>10)',
  },
  {
    name: 'XOR',
    category: 'Logical',
    description: 'Returns TRUE if an odd number of arguments are true',
    syntax: 'XOR(logical1, [logical2], ...)',
    parameters: [
      { name: 'logical1', description: 'First condition' },
      { name: 'logical2', description: 'Additional conditions', optional: true },
    ],
    example: '=XOR(A1>5, B1>5)',
  },
  {
    name: 'IFERROR',
    category: 'Logical',
    description: 'Returns a value if an expression results in an error',
    syntax: 'IFERROR(value, value_if_error)',
    parameters: [
      { name: 'value', description: 'Expression to check' },
      { name: 'value_if_error', description: 'Value to return on error' },
    ],
    example: '=IFERROR(A1/B1, 0)',
  },
  {
    name: 'IFNA',
    category: 'Logical',
    description: 'Returns a value if an expression results in #N/A',
    syntax: 'IFNA(value, value_if_na)',
    parameters: [
      { name: 'value', description: 'Expression to check' },
      { name: 'value_if_na', description: 'Value to return if #N/A' },
    ],
    example: '=IFNA(VLOOKUP(A1, B:C, 2, FALSE), "Not found")',
  },
  {
    name: 'TRUE',
    category: 'Logical',
    description: 'Returns the logical value TRUE',
    syntax: 'TRUE()',
    parameters: [],
    example: '=TRUE()',
  },
  {
    name: 'FALSE',
    category: 'Logical',
    description: 'Returns the logical value FALSE',
    syntax: 'FALSE()',
    parameters: [],
    example: '=FALSE()',
  },
  {
    name: 'SWITCH',
    category: 'Logical',
    description: 'Evaluates an expression against a list of values',
    syntax: 'SWITCH(expression, value1, result1, [value2, result2], ..., [default])',
    parameters: [
      { name: 'expression', description: 'Value to compare' },
      { name: 'value1', description: 'First value to match' },
      { name: 'result1', description: 'Result if first value matches' },
      { name: 'default', description: 'Default result if no match', optional: true },
    ],
    example: '=SWITCH(A1, 1, "One", 2, "Two", "Other")',
  },

  // ==================== DATE ====================
  {
    name: 'DATE',
    category: 'Date',
    description: 'Creates a date from year, month, and day',
    syntax: 'DATE(year, month, day)',
    parameters: [
      { name: 'year', description: 'Year number' },
      { name: 'month', description: 'Month number (1-12)' },
      { name: 'day', description: 'Day number' },
    ],
    example: '=DATE(2025, 1, 15)',
  },
  {
    name: 'TODAY',
    category: 'Date',
    description: 'Returns the current date',
    syntax: 'TODAY()',
    parameters: [],
    example: '=TODAY()',
  },
  {
    name: 'NOW',
    category: 'Date',
    description: 'Returns the current date and time',
    syntax: 'NOW()',
    parameters: [],
    example: '=NOW()',
  },
  {
    name: 'YEAR',
    category: 'Date',
    description: 'Returns the year of a date',
    syntax: 'YEAR(serial_number)',
    parameters: [{ name: 'serial_number', description: 'Date value' }],
    example: '=YEAR(A1)',
  },
  {
    name: 'MONTH',
    category: 'Date',
    description: 'Returns the month of a date (1-12)',
    syntax: 'MONTH(serial_number)',
    parameters: [{ name: 'serial_number', description: 'Date value' }],
    example: '=MONTH(A1)',
  },
  {
    name: 'DAY',
    category: 'Date',
    description: 'Returns the day of a date (1-31)',
    syntax: 'DAY(serial_number)',
    parameters: [{ name: 'serial_number', description: 'Date value' }],
    example: '=DAY(A1)',
  },
  {
    name: 'HOUR',
    category: 'Date',
    description: 'Returns the hour of a time (0-23)',
    syntax: 'HOUR(serial_number)',
    parameters: [{ name: 'serial_number', description: 'Time value' }],
    example: '=HOUR(A1)',
  },
  {
    name: 'MINUTE',
    category: 'Date',
    description: 'Returns the minute of a time (0-59)',
    syntax: 'MINUTE(serial_number)',
    parameters: [{ name: 'serial_number', description: 'Time value' }],
    example: '=MINUTE(A1)',
  },
  {
    name: 'SECOND',
    category: 'Date',
    description: 'Returns the second of a time (0-59)',
    syntax: 'SECOND(serial_number)',
    parameters: [{ name: 'serial_number', description: 'Time value' }],
    example: '=SECOND(A1)',
  },
  {
    name: 'WEEKDAY',
    category: 'Date',
    description: 'Returns the day of the week (1-7)',
    syntax: 'WEEKDAY(serial_number, [return_type])',
    parameters: [
      { name: 'serial_number', description: 'Date value' },
      { name: 'return_type', description: 'Number system to use', optional: true },
    ],
    example: '=WEEKDAY(A1)',
  },
  {
    name: 'WEEKNUM',
    category: 'Date',
    description: 'Returns the week number of the year',
    syntax: 'WEEKNUM(serial_number, [return_type])',
    parameters: [
      { name: 'serial_number', description: 'Date value' },
      { name: 'return_type', description: 'Week calculation method', optional: true },
    ],
    example: '=WEEKNUM(A1)',
  },
  {
    name: 'DATEDIF',
    category: 'Date',
    description: 'Calculates the difference between two dates',
    syntax: 'DATEDIF(start_date, end_date, unit)',
    parameters: [
      { name: 'start_date', description: 'Start date' },
      { name: 'end_date', description: 'End date' },
      { name: 'unit', description: '"Y", "M", "D", "YM", "YD", or "MD"' },
    ],
    example: '=DATEDIF(A1, B1, "D")',
  },
  {
    name: 'EDATE',
    category: 'Date',
    description: 'Returns a date a specified number of months before or after',
    syntax: 'EDATE(start_date, months)',
    parameters: [
      { name: 'start_date', description: 'Starting date' },
      { name: 'months', description: 'Number of months' },
    ],
    example: '=EDATE(A1, 3)',
  },
  {
    name: 'EOMONTH',
    category: 'Date',
    description: 'Returns the last day of the month, months before or after',
    syntax: 'EOMONTH(start_date, months)',
    parameters: [
      { name: 'start_date', description: 'Starting date' },
      { name: 'months', description: 'Number of months' },
    ],
    example: '=EOMONTH(A1, 0)',
  },
  {
    name: 'NETWORKDAYS',
    category: 'Date',
    description: 'Returns the number of working days between two dates',
    syntax: 'NETWORKDAYS(start_date, end_date, [holidays])',
    parameters: [
      { name: 'start_date', description: 'Start date' },
      { name: 'end_date', description: 'End date' },
      { name: 'holidays', description: 'Range of holiday dates', optional: true },
    ],
    example: '=NETWORKDAYS(A1, B1)',
  },
  {
    name: 'WORKDAY',
    category: 'Date',
    description: 'Returns a date a specified number of workdays before or after',
    syntax: 'WORKDAY(start_date, days, [holidays])',
    parameters: [
      { name: 'start_date', description: 'Starting date' },
      { name: 'days', description: 'Number of workdays' },
      { name: 'holidays', description: 'Range of holiday dates', optional: true },
    ],
    example: '=WORKDAY(A1, 10)',
  },
  {
    name: 'TIME',
    category: 'Date',
    description: 'Creates a time from hour, minute, and second',
    syntax: 'TIME(hour, minute, second)',
    parameters: [
      { name: 'hour', description: 'Hour (0-23)' },
      { name: 'minute', description: 'Minute (0-59)' },
      { name: 'second', description: 'Second (0-59)' },
    ],
    example: '=TIME(14, 30, 0)',
  },

  // ==================== INFORMATION ====================
  {
    name: 'ISBLANK',
    category: 'Information',
    description: 'Returns TRUE if the cell is empty',
    syntax: 'ISBLANK(value)',
    parameters: [{ name: 'value', description: 'Cell to check' }],
    example: '=ISBLANK(A1)',
  },
  {
    name: 'ISNUMBER',
    category: 'Information',
    description: 'Returns TRUE if the value is a number',
    syntax: 'ISNUMBER(value)',
    parameters: [{ name: 'value', description: 'Value to check' }],
    example: '=ISNUMBER(A1)',
  },
  {
    name: 'ISTEXT',
    category: 'Information',
    description: 'Returns TRUE if the value is text',
    syntax: 'ISTEXT(value)',
    parameters: [{ name: 'value', description: 'Value to check' }],
    example: '=ISTEXT(A1)',
  },
  {
    name: 'ISERROR',
    category: 'Information',
    description: 'Returns TRUE if the value is any error',
    syntax: 'ISERROR(value)',
    parameters: [{ name: 'value', description: 'Value to check' }],
    example: '=ISERROR(A1)',
  },
  {
    name: 'ISNA',
    category: 'Information',
    description: 'Returns TRUE if the value is #N/A',
    syntax: 'ISNA(value)',
    parameters: [{ name: 'value', description: 'Value to check' }],
    example: '=ISNA(A1)',
  },
  {
    name: 'ISLOGICAL',
    category: 'Information',
    description: 'Returns TRUE if the value is a logical value',
    syntax: 'ISLOGICAL(value)',
    parameters: [{ name: 'value', description: 'Value to check' }],
    example: '=ISLOGICAL(A1)',
  },
  {
    name: 'ISEVEN',
    category: 'Information',
    description: 'Returns TRUE if the number is even',
    syntax: 'ISEVEN(number)',
    parameters: [{ name: 'number', description: 'Number to check' }],
    example: '=ISEVEN(A1)',
  },
  {
    name: 'ISODD',
    category: 'Information',
    description: 'Returns TRUE if the number is odd',
    syntax: 'ISODD(number)',
    parameters: [{ name: 'number', description: 'Number to check' }],
    example: '=ISODD(A1)',
  },
  {
    name: 'TYPE',
    category: 'Information',
    description: 'Returns a number indicating the data type',
    syntax: 'TYPE(value)',
    parameters: [{ name: 'value', description: 'Value to check' }],
    example: '=TYPE(A1)',
  },
  {
    name: 'N',
    category: 'Information',
    description: 'Returns a value converted to a number',
    syntax: 'N(value)',
    parameters: [{ name: 'value', description: 'Value to convert' }],
    example: '=N(A1)',
  },
  {
    name: 'NA',
    category: 'Information',
    description: 'Returns the error value #N/A',
    syntax: 'NA()',
    parameters: [],
    example: '=NA()',
  },

  // ==================== FINANCIAL ====================
  {
    name: 'PMT',
    category: 'Financial',
    description: 'Calculates the payment for a loan',
    syntax: 'PMT(rate, nper, pv, [fv], [type])',
    parameters: [
      { name: 'rate', description: 'Interest rate per period' },
      { name: 'nper', description: 'Total number of payments' },
      { name: 'pv', description: 'Present value (loan amount)' },
      { name: 'fv', description: 'Future value', optional: true },
      { name: 'type', description: '0 = end of period, 1 = beginning', optional: true },
    ],
    example: '=PMT(0.05/12, 60, 10000)',
  },
  {
    name: 'PV',
    category: 'Financial',
    description: 'Returns the present value of an investment',
    syntax: 'PV(rate, nper, pmt, [fv], [type])',
    parameters: [
      { name: 'rate', description: 'Interest rate per period' },
      { name: 'nper', description: 'Total number of periods' },
      { name: 'pmt', description: 'Payment per period' },
      { name: 'fv', description: 'Future value', optional: true },
      { name: 'type', description: '0 = end, 1 = beginning', optional: true },
    ],
    example: '=PV(0.05/12, 60, -100)',
  },
  {
    name: 'FV',
    category: 'Financial',
    description: 'Returns the future value of an investment',
    syntax: 'FV(rate, nper, pmt, [pv], [type])',
    parameters: [
      { name: 'rate', description: 'Interest rate per period' },
      { name: 'nper', description: 'Total number of periods' },
      { name: 'pmt', description: 'Payment per period' },
      { name: 'pv', description: 'Present value', optional: true },
      { name: 'type', description: '0 = end, 1 = beginning', optional: true },
    ],
    example: '=FV(0.05/12, 60, -100)',
  },
  {
    name: 'NPV',
    category: 'Financial',
    description: 'Returns the net present value of an investment',
    syntax: 'NPV(rate, value1, [value2], ...)',
    parameters: [
      { name: 'rate', description: 'Discount rate' },
      { name: 'value1', description: 'First cash flow' },
      { name: 'value2', description: 'Additional cash flows', optional: true },
    ],
    example: '=NPV(0.1, -10000, 3000, 4200, 6800)',
  },
  {
    name: 'IRR',
    category: 'Financial',
    description: 'Returns the internal rate of return',
    syntax: 'IRR(values, [guess])',
    parameters: [
      { name: 'values', description: 'Range of cash flows' },
      { name: 'guess', description: 'Initial guess for rate', optional: true },
    ],
    example: '=IRR(A1:A5)',
  },
  {
    name: 'RATE',
    category: 'Financial',
    description: 'Returns the interest rate per period',
    syntax: 'RATE(nper, pmt, pv, [fv], [type], [guess])',
    parameters: [
      { name: 'nper', description: 'Total number of periods' },
      { name: 'pmt', description: 'Payment per period' },
      { name: 'pv', description: 'Present value' },
      { name: 'fv', description: 'Future value', optional: true },
      { name: 'type', description: '0 = end, 1 = beginning', optional: true },
      { name: 'guess', description: 'Initial guess', optional: true },
    ],
    example: '=RATE(60, -100, 5000)',
  },
  {
    name: 'NPER',
    category: 'Financial',
    description: 'Returns the number of periods for an investment',
    syntax: 'NPER(rate, pmt, pv, [fv], [type])',
    parameters: [
      { name: 'rate', description: 'Interest rate per period' },
      { name: 'pmt', description: 'Payment per period' },
      { name: 'pv', description: 'Present value' },
      { name: 'fv', description: 'Future value', optional: true },
      { name: 'type', description: '0 = end, 1 = beginning', optional: true },
    ],
    example: '=NPER(0.05/12, -100, 5000)',
  },
];

// Get all formula names
export const FORMULA_NAMES = FORMULA_DEFINITIONS.map((f) => f.name);

// Get formulas by category
export const getFormulasByCategory = (category: FormulaCategory): FormulaDefinition[] =>
  FORMULA_DEFINITIONS.filter((f) => f.category === category);

// Search formulas by name prefix
export const searchFormulas = (query: string): FormulaDefinition[] => {
  const upperQuery = query.toUpperCase();
  return FORMULA_DEFINITIONS.filter((f) => f.name.startsWith(upperQuery));
};

// Get formula by exact name
export const getFormula = (name: string): FormulaDefinition | undefined =>
  FORMULA_DEFINITIONS.find((f) => f.name === name.toUpperCase());

// Get all categories
export const FORMULA_CATEGORIES: FormulaCategory[] = [
  'Math',
  'Statistical',
  'Lookup',
  'Text',
  'Logical',
  'Date',
  'Information',
  'Financial',
];
