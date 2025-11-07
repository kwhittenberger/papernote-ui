// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'compact' | 'flat';
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export default function Card({
  children,
  variant = 'default',
  className = '',
  onClick,
  hoverable = false,
}: CardProps) {
  const baseStyles = 'bg-white bg-subtle-grain border border-paper-200 transition-shadow duration-200';

  const variantStyles = {
    default: 'rounded-xl shadow-card p-8',
    compact: 'rounded-lg shadow-card p-5',
    flat: 'rounded-lg p-5',
  };

  const interactiveStyles = onClick || hoverable ? 'cursor-pointer hover:shadow-md' : '';

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${interactiveStyles} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mb-6 ${className}`}>{children}</div>;
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
