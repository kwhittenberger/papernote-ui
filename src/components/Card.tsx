import React from 'react';
import { Skeleton } from './Loading';

/**
 * Card component props
 */
export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Visual style variant affecting padding and shadow */
  variant?: 'default' | 'compact' | 'flat';
  /** Predefined width constraint */
  width?: 'sm' | 'md' | 'lg' | 'xl' | 'auto' | 'full';
  /** Additional CSS classes */
  className?: string;
  /** Click handler - makes card interactive */
  onClick?: () => void;
  /** Show hover effect without onClick handler */
  hoverable?: boolean;
  /** Show loading skeleton instead of content */
  loading?: boolean;
}

/**
 * Card - Container component with paper aesthetic and subtle shadow
 *
 * A content container with paper texture, border, and shadow effects. Supports
 * different sizes, variants (padding/shadow levels), and loading states.
 *
 * Compose with CardHeader, CardTitle, CardDescription, CardContent, and CardFooter
 * for consistent internal structure.
 *
 * @example Basic card
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>User Profile</CardTitle>
 *     <CardDescription>Personal information</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     <p>Content here</p>
 *   </CardContent>
 * </Card>
 * ```
 *
 * @example Interactive card with loading
 * ```tsx
 * <Card 
 *   variant="compact" 
 *   onClick={handleClick} 
 *   loading={isLoading}
 * >
 *   <p>Content</p>
 * </Card>
 * ```
 */
export default function Card({
  children,
  variant = 'default',
  width = 'auto',
  className = '',
  onClick,
  hoverable = false,
  loading = false,
}: CardProps) {
  const baseStyles = 'bg-white bg-subtle-grain border-2 border-paper-300 transition-shadow duration-200';

  const variantStyles = {
    default: 'rounded-xl shadow-lg p-8',
    compact: 'rounded-lg shadow-md p-5',
    flat: 'rounded-lg p-5',
  };

  const widthStyles = {
    sm: 'w-64 max-w-full',
    md: 'w-80 max-w-full',
    lg: 'w-96 max-w-full',
    xl: 'w-[32rem] max-w-full',
    auto: 'w-auto',
    full: 'w-full',
  };

  const interactiveStyles = onClick || hoverable ? 'cursor-pointer hover:shadow-md' : '';

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles[width]} ${interactiveStyles} ${className}`}
      onClick={!loading ? onClick : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {loading ? (
        <div className="space-y-4">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      ) : (
        children
      )}
    </div>
  );
}

/**
 * CardHeader component props
 */
export interface CardHeaderProps {
  /** Header content - typically CardTitle and CardDescription */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Action element (button, menu, etc.) to display in header */
  action?: React.ReactNode;
}

/**
 * CardHeader - Header section for Card component
 *
 * Container for card title, description, and optional action buttons.
 * Automatically handles layout when action element is provided.
 */
export function CardHeader({
  children,
  className = '',
  action,
}: CardHeaderProps) {
  return (
    <div className={`mb-6 ${action ? 'flex items-start justify-between gap-4' : ''} ${className}`}>
      <div className="flex-1">{children}</div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}

export function CardTitle({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h3 className={`text-lg font-medium text-ink-900 ${className}`}>{children}</h3>;
}

export function CardDescription({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`text-sm text-ink-600 mt-1 ${className}`}>{children}</p>;
}

export function CardContent({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mt-6 pt-6 border-t border-paper-200 flex items-center justify-end gap-3 ${className}`}>
      {children}
    </div>
  );
}
