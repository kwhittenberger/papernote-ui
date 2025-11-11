// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import { TrendingUp, TrendingDown } from 'lucide-react';
import Card from './Card';

export interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number | React.ReactNode;
  subtitle?: string;
  valueColor?: string;
  iconColor?: string;
  change?: {
    value: number;
    isPositive: boolean;
  };
  onClick?: () => void;
  className?: string;
}

export default function StatCard({
  icon,
  label,
  value,
  subtitle,
  valueColor = 'text-ink-900',
  iconColor = 'bg-ink-100',
  change,
  onClick,
  className = '',
}: StatCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Card
      variant="compact"
      onClick={onClick}
      hoverable={!!onClick}
      className={className}
      {...(onClick && {
        role: 'button',
        tabIndex: 0,
        onKeyDown: handleKeyDown,
      })}
    >
      {/* Icon */}
      <div className={`h-10 w-10 ${iconColor} rounded-full flex items-center justify-center mb-4`}>
        {icon}
      </div>

      {/* Value */}
      <div className={`text-3xl font-semibold tracking-tight ${valueColor}`}>
        {value}
      </div>

      {/* Label */}
      <div className="text-sm text-ink-500 mt-2">
        {label}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <div className="text-xs text-ink-400 mt-1">
          {subtitle}
        </div>
      )}

      {/* Change Indicator */}
      {change && (
        <div
          className={`flex items-center gap-1 mt-3 text-sm font-medium ${
            change.isPositive ? 'text-success-600' : 'text-error-600'
          }`}
        >
          {change.isPositive ? (
            <TrendingUp className="h-4 w-4" />
          ) : (
            <TrendingDown className="h-4 w-4" />
          )}
          <span>
            {change.isPositive ? '+' : ''}{change.value}%
          </span>
        </div>
      )}
    </Card>
  );
}
