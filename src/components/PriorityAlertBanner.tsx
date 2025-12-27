import React from 'react';
import { X, AlertCircle, AlertTriangle, Info, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface PriorityAlert {
  /** Unique identifier for the alert */
  id: string;
  /** Severity level determining color and icon */
  severity: 'error' | 'warning' | 'info';
  /** Alert message text */
  message: string;
  /** Optional count to display (e.g., "3 overdue bills") */
  count?: number;
  /** Optional amount to display (e.g., "$1,234.56 due") */
  amount?: number;
  /** URL to navigate when clicking the alert */
  href?: string;
  /** Click handler (alternative to href) */
  onClick?: () => void;
  /** Whether this alert can be dismissed */
  dismissible?: boolean;
}

export interface PriorityAlertBannerProps {
  /** Array of alerts to display */
  alerts: PriorityAlert[];
  /** Callback when an alert is dismissed */
  onDismiss?: (alertId: string) => void;
  /** Use sticky positioning at top of viewport */
  sticky?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * PriorityAlertBanner - Displays urgent/action-required alerts
 * 
 * Shows a stack of priority alerts at the top of a page. Supports multiple
 * severity levels, dismissible alerts, and navigation to related pages.
 * Auto-hides when no alerts are present.
 * 
 * @example Basic usage
 * ```tsx
 * <PriorityAlertBanner
 *   alerts={[
 *     { id: '1', severity: 'error', message: 'overdue bills', count: 3, href: '/bills' },
 *     { id: '2', severity: 'warning', message: 'Bank sync failed', dismissible: true }
 *   ]}
 *   onDismiss={(id) => dismissAlert(id)}
 * />
 * ```
 * 
 * @example Sticky at top of page
 * ```tsx
 * <PriorityAlertBanner
 *   alerts={alerts}
 *   onDismiss={handleDismiss}
 *   sticky
 * />
 * ```
 */
export function PriorityAlertBanner({
  alerts,
  onDismiss,
  sticky = false,
  className = '',
}: PriorityAlertBannerProps) {
  // Don't render if no alerts
  if (alerts.length === 0) {
    return null;
  }

  const getSeverityStyles = (severity: PriorityAlert['severity']) => {
    switch (severity) {
      case 'error':
        return {
          container: 'bg-error-50 border-error-200 text-error-900',
          icon: <AlertCircle className="h-5 w-5 text-error-600 flex-shrink-0" />,
          hoverBg: 'hover:bg-error-100',
          dismissHover: 'hover:text-error-700 hover:bg-error-100',
        };
      case 'warning':
        return {
          container: 'bg-warning-50 border-warning-200 text-warning-900',
          icon: <AlertTriangle className="h-5 w-5 text-warning-600 flex-shrink-0" />,
          hoverBg: 'hover:bg-warning-100',
          dismissHover: 'hover:text-warning-700 hover:bg-warning-100',
        };
      case 'info':
        return {
          container: 'bg-primary-50 border-primary-200 text-primary-900',
          icon: <Info className="h-5 w-5 text-primary-600 flex-shrink-0" />,
          hoverBg: 'hover:bg-primary-100',
          dismissHover: 'hover:text-primary-700 hover:bg-primary-100',
        };
    }
  };

  const formatAlertContent = (alert: PriorityAlert) => {
    const parts: string[] = [];
    
    if (alert.count !== undefined) {
      parts.push(alert.count.toString());
    }
    
    if (alert.amount !== undefined) {
      parts.push(
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(alert.amount)
      );
    }
    
    if (parts.length > 0) {
      return `${parts.join(' • ')} ${alert.message}`;
    }
    
    return alert.message;
  };

  const renderAlert = (alert: PriorityAlert) => {
    const styles = getSeverityStyles(alert.severity);
    const isClickable = !!(alert.href || alert.onClick);
    const content = formatAlertContent(alert);

    const alertContent = (
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {styles.icon}
        <span className="text-sm font-medium truncate">{content}</span>
        {isClickable && (
          <ChevronRight className="h-4 w-4 opacity-60 flex-shrink-0" />
        )}
      </div>
    );

    const handleClick = (e: React.MouseEvent) => {
      if (alert.onClick) {
        e.preventDefault();
        alert.onClick();
      }
    };

    const handleDismiss = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onDismiss?.(alert.id);
    };

    const containerClassName = `
      flex items-center gap-2 px-4 py-3 border-b last:border-b-0
      ${styles.container}
      ${isClickable ? `cursor-pointer ${styles.hoverBg} transition-colors` : ''}
    `;

    const dismissButton = alert.dismissible && onDismiss && (
      <button
        onClick={handleDismiss}
        className={`
          p-1 rounded-md opacity-70 hover:opacity-100 transition-all
          ${styles.dismissHover}
        `}
        aria-label="Dismiss alert"
      >
        <X className="h-4 w-4" />
      </button>
    );

    if (alert.href) {
      return (
        <Link
          key={alert.id}
          to={alert.href}
          onClick={alert.onClick ? handleClick : undefined}
          className={containerClassName}
        >
          {alertContent}
          {dismissButton}
        </Link>
      );
    }

    if (alert.onClick) {
      return (
        <button
          key={alert.id}
          onClick={handleClick}
          className={`${containerClassName} w-full text-left`}
        >
          {alertContent}
          {dismissButton}
        </button>
      );
    }

    return (
      <div key={alert.id} className={containerClassName}>
        {alertContent}
        {dismissButton}
      </div>
    );
  };

  return (
    <div
      className={`
        bg-white border border-paper-300 rounded-lg shadow-sm overflow-hidden
        ${sticky ? 'sticky top-0 z-50' : ''}
        ${className}
      `}
      role="alert"
      aria-live="polite"
    >
      {alerts.map(renderAlert)}
    </div>
  );
}

export default PriorityAlertBanner;
