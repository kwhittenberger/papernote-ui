
import { Bell } from 'lucide-react';

export interface NotificationIndicatorProps {
  count?: number;
  onClick?: () => void;
  className?: string;
  maxCount?: number;
  variant?: 'default' | 'primary' | 'danger';
}

export default function NotificationIndicator({
  count = 0,
  onClick,
  className = '',
  maxCount = 99,
  variant = 'default',
}: NotificationIndicatorProps) {
  const displayCount = count > maxCount ? `${maxCount}+` : count.toString();
  const showBadge = count > 0;

  const variantClasses = {
    default: 'bg-ink-600',
    primary: 'bg-accent-600',
    danger: 'bg-error-600',
  };

  return (
    <button
      onClick={onClick}
      className={`relative bg-white p-2.5 rounded-lg text-ink-400 hover:text-ink-600 hover:bg-paper-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-400 transition-all shadow-xs dark:bg-slate-800 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-700 ${className}`}
      aria-label="View notifications"
    >
      <Bell className="h-5 w-5" />
      {showBadge && (
        <span
          className={`absolute -top-1 -right-1 ${variantClasses[variant]} text-white text-xs font-semibold rounded-full h-5 min-w-5 px-1 flex items-center justify-center`}
        >
          {displayCount}
        </span>
      )}
    </button>
  );
}
