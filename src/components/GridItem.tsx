// GridItem Component - Grid item with column/row span support
// Designed to be used within Grid component

import React from 'react';
import Box, { BoxProps } from './Box';

export interface GridItemProps extends Omit<BoxProps, 'colSpan'> {
  /** Grid column span (1-12) */
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /** Grid row span (1-6) */
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * GridItem component for items within a Grid layout.
 * Provides grid-specific props like colSpan and rowSpan.
 */
export const GridItem: React.FC<GridItemProps> = ({
  colSpan,
  rowSpan,
  children,
  className = '',
  ...boxProps
}) => {
  const getColSpanClass = () => {
    if (!colSpan) return '';
    const colSpanMap: Record<number, string> = {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
      7: 'col-span-7',
      8: 'col-span-8',
      9: 'col-span-9',
      10: 'col-span-10',
      11: 'col-span-11',
      12: 'col-span-12',
    };
    return colSpanMap[colSpan];
  };

  const getRowSpanClass = () => {
    if (!rowSpan) return '';
    const rowSpanMap: Record<number, string> = {
      1: 'row-span-1',
      2: 'row-span-2',
      3: 'row-span-3',
      4: 'row-span-4',
      5: 'row-span-5',
      6: 'row-span-6',
    };
    return rowSpanMap[rowSpan];
  };

  return (
    <Box
      {...boxProps}
      className={`${getColSpanClass()} ${getRowSpanClass()} ${className}`}
    >
      {children}
    </Box>
  );
};

export default GridItem;
