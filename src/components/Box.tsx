// Box Component - Generic container with design system styling
// Provides consistent padding, borders, and other container styles

import React from 'react';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content */
  children: React.ReactNode;
  /** Padding */
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Padding top */
  paddingTop?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Padding bottom */
  paddingBottom?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Padding left */
  paddingLeft?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Padding right */
  paddingRight?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Margin */
  margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Margin top */
  marginTop?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Margin bottom */
  marginBottom?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Border */
  border?: 'none' | 'top' | 'bottom' | 'left' | 'right' | 'all';
  /** Border color */
  borderColor?: 'default' | 'primary' | 'accent';
  /** Width */
  width?: 'auto' | 'full' | 'fit' | 'screen';
  /** Custom className */
  className?: string;
}

/**
 * Box component for generic containers with design system spacing and borders.
 */
export const Box: React.FC<BoxProps> = ({
  children,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginTop,
  marginBottom,
  border = 'none',
  borderColor = 'default',
  width,
  className = '',
  ...htmlProps
}) => {
  const spacingMap = {
    none: '0',
    xs: '2',
    sm: '3',
    md: '4',
    lg: '6',
    xl: '8',
  };

  const getPaddingClass = () => {
    const classes: string[] = [];
    
    if (padding) classes.push(`p-${spacingMap[padding]}`);
    if (paddingTop) classes.push(`pt-${spacingMap[paddingTop]}`);
    if (paddingBottom) classes.push(`pb-${spacingMap[paddingBottom]}`);
    if (paddingLeft) classes.push(`pl-${spacingMap[paddingLeft]}`);
    if (paddingRight) classes.push(`pr-${spacingMap[paddingRight]}`);
    
    return classes.join(' ');
  };

  const getMarginClass = () => {
    const classes: string[] = [];
    
    if (margin) classes.push(`m-${spacingMap[margin]}`);
    if (marginTop) classes.push(`mt-${spacingMap[marginTop]}`);
    if (marginBottom) classes.push(`mb-${spacingMap[marginBottom]}`);
    
    return classes.join(' ');
  };

  const borderClasses = {
    none: '',
    top: 'border-t',
    bottom: 'border-b',
    left: 'border-l',
    right: 'border-r',
    all: 'border',
  };

  const borderColorClasses = {
    default: 'border-paper-200',
    primary: 'border-primary-500',
    accent: 'border-accent-500',
  };

  const getWidthClass = () => {
    if (!width) return '';
    const widthClasses = {
      auto: 'w-auto',
      full: 'w-full',
      fit: 'w-fit',
      screen: 'w-screen',
    };
    return widthClasses[width];
  };

  return (
    <div
      {...htmlProps}
      className={`
        ${getPaddingClass()}
        ${getMarginClass()}
        ${borderClasses[border]}
        ${border !== 'none' ? borderColorClasses[borderColor] : ''}
        ${getWidthClass()}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Box;
