// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React from 'react';
import { Loader2 } from 'lucide-react';

export interface LoadingProps {
  variant?: 'spinner' | 'dots' | 'bar';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export default function Loading({ variant = 'spinner', size = 'md', text }: LoadingProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  if (variant === 'spinner') {
    return (
      <div className="flex flex-col items-center justify-center gap-3">
        <Loader2 className={`${sizeClasses[size]} text-accent-500 animate-spin`} />
        {text && <p className="text-sm text-ink-600">{text}</p>}
      </div>
    );
  }

  if (variant === 'dots') {
    const dotSize = size === 'sm' ? 'h-2 w-2' : size === 'md' ? 'h-3 w-3' : 'h-4 w-4';
    return (
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          <div className={`${dotSize} bg-accent-500 rounded-full animate-bounce`} style={{ animationDelay: '0ms' }} />
          <div className={`${dotSize} bg-accent-500 rounded-full animate-bounce`} style={{ animationDelay: '150ms' }} />
          <div className={`${dotSize} bg-accent-500 rounded-full animate-bounce`} style={{ animationDelay: '300ms' }} />
        </div>
        {text && <p className="text-sm text-ink-600">{text}</p>}
      </div>
    );
  }

  if (variant === 'bar') {
    return (
      <div className="flex flex-col items-center justify-center gap-3 w-full">
        <div className="w-full h-1 bg-paper-200 rounded-full overflow-hidden">
          <div className="h-full bg-accent-500 animate-shimmer" style={{ width: '30%' }} />
        </div>
        {text && <p className="text-sm text-ink-600">{text}</p>}
      </div>
    );
  }

  return null;
}

export function Skeleton({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-pulse bg-paper-200 rounded ${className}`}
      {...props}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="card">
      <Skeleton className="h-6 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-2" />
      <Skeleton className="h-4 w-4/6" />
    </div>
  );
}

export function SkeletonTable({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex gap-4">
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} className="h-4 flex-1" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-4">
          {Array.from({ length: columns }).map((_, j) => (
            <Skeleton key={j} className="h-8 flex-1" />
          ))}
        </div>
      ))}
    </div>
  );
}
