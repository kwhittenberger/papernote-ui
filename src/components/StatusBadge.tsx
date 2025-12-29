
import { CheckCircle, Clock, AlertCircle, XCircle, Info } from 'lucide-react';

export interface StatusBadgeProps {
  status: 'paid' | 'pending' | 'overdue' | 'cancelled' | 'success' | 'warning' | 'caution' | 'error' | 'info';
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

const statusConfig = {
  paid: {
    icon: CheckCircle,
    defaultLabel: 'Paid',
    className: 'bg-success-100 text-success-800',
  },
  success: {
    icon: CheckCircle,
    defaultLabel: 'Success',
    className: 'bg-success-100 text-success-800',
  },
  pending: {
    icon: Clock,
    defaultLabel: 'Pending',
    className: 'bg-warning-100 text-warning-800',
  },
  warning: {
    icon: AlertCircle,
    defaultLabel: 'Warning',
    className: 'bg-warning-100 text-warning-800',
  },
  caution: {
    icon: Info,
    defaultLabel: 'Caution',
    className: 'bg-warning-100 text-warning-700',
  },
  overdue: {
    icon: AlertCircle,
    defaultLabel: 'Overdue',
    className: 'bg-error-100 text-error-800',
  },
  error: {
    icon: XCircle,
    defaultLabel: 'Error',
    className: 'bg-error-100 text-error-800',
  },
  cancelled: {
    icon: XCircle,
    defaultLabel: 'Cancelled',
    className: 'bg-paper-200 text-ink-700',
  },
  info: {
    icon: CheckCircle,
    defaultLabel: 'Info',
    className: 'bg-primary-100 text-primary-800',
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
