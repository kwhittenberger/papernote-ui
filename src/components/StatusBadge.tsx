// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the notebook-ui component library.
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

import React from 'react';
import { CheckCircle, Clock, AlertCircle, XCircle } from 'lucide-react';

export interface StatusBadgeProps {
  status: 'paid' | 'pending' | 'overdue' | 'cancelled' | 'success' | 'warning' | 'error' | 'info';
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

const statusConfig = {
  paid: {
    icon: CheckCircle,
    defaultLabel: 'Paid',
    className: 'bg-green-100 text-green-800',
  },
  success: {
    icon: CheckCircle,
    defaultLabel: 'Success',
    className: 'bg-green-100 text-green-800',
  },
  pending: {
    icon: Clock,
    defaultLabel: 'Pending',
    className: 'bg-yellow-100 text-yellow-800',
  },
  warning: {
    icon: AlertCircle,
    defaultLabel: 'Warning',
    className: 'bg-yellow-100 text-yellow-800',
  },
  overdue: {
    icon: AlertCircle,
    defaultLabel: 'Overdue',
    className: 'bg-red-100 text-red-800',
  },
  error: {
    icon: XCircle,
    defaultLabel: 'Error',
    className: 'bg-red-100 text-red-800',
  },
  cancelled: {
    icon: XCircle,
    defaultLabel: 'Cancelled',
    className: 'bg-gray-100 text-gray-800',
  },
  info: {
    icon: CheckCircle,
    defaultLabel: 'Info',
    className: 'bg-blue-100 text-blue-800',
  },
};

const sizeConfig = {
  sm: {
    container: 'px-2 py-0.5 text-xs',
    icon: 'h-3 w-3',
  },
  md: {
    container: 'px-2.5 py-0.5 text-xs',
    icon: 'h-3 w-3',
  },
  lg: {
    container: 'px-3 py-1 text-sm',
    icon: 'h-4 w-4',
  },
};

export default function StatusBadge({
  status,
  label,
  size = 'md',
  showIcon = true
}: StatusBadgeProps) {
  const config = statusConfig[status];
  const sizeStyles = sizeConfig[size];
  const Icon = config.icon;
  const displayLabel = label || config.defaultLabel;

  return (
    <span className={`inline-flex items-center rounded-full font-medium ${config.className} ${sizeStyles.container}`}>
      {showIcon && (
        <Icon className={`${sizeStyles.icon} ${showIcon && displayLabel ? 'mr-1' : ''}`} />
      )}
      {displayLabel}
    </span>
  );
}
