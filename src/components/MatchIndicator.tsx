import React from 'react';
import { Check, HelpCircle, X } from 'lucide-react';

// =============================================================================
// Types & Interfaces
// =============================================================================

export interface MatchIndicatorProps {
  /** Match quality level */
  quality: 'exact' | 'close' | 'possible' | 'unmatched';
  /** Optional match confidence score (0-100) */
  confidence?: number;
  /** Show label text alongside indicator */
  showLabel?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Additional className */
  className?: string;
}

// =============================================================================
// Config
// =============================================================================

const qualityConfig: Record<string, { icon: React.ReactNode; color: string; dot: string; label: string }> = {
  exact:     { icon: <Check className="h-3 w-3" />,       color: 'text-success-600', dot: 'bg-success-500', label: 'Exact Match' },
  close:     { icon: <Check className="h-3 w-3" />,       color: 'text-blue-600',    dot: 'bg-blue-500',    label: 'Close Match' },
  possible:  { icon: <HelpCircle className="h-3 w-3" />,  color: 'text-warning-600', dot: 'bg-warning-500', label: 'Possible Match' },
  unmatched: { icon: <X className="h-3 w-3" />,           color: 'text-error-600',   dot: 'bg-error-500',   label: 'Unmatched' },
};

// =============================================================================
// Component
// =============================================================================

/**
 * MatchIndicator — Match quality visualization for reconciliation
 *
 * Shows a color-coded dot/icon indicating match quality between
 * statement lines and invoices. Used in the Reconciliation Hub.
 */
export default function MatchIndicator({
  quality,
  confidence,
  showLabel = false,
  size = 'md',
  className = '',
}: MatchIndicatorProps) {
  const config = qualityConfig[quality] || qualityConfig.unmatched;

  const sizeClasses = {
    sm: { dot: 'w-2 h-2', text: 'text-xs', icon: 'h-3 w-3' },
    md: { dot: 'w-2.5 h-2.5', text: 'text-sm', icon: 'h-4 w-4' },
    lg: { dot: 'w-3 h-3', text: 'text-base', icon: 'h-5 w-5' },
  };
  const sizes = sizeClasses[size];

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`} title={config.label}>
      <span className={`${sizes.dot} rounded-full ${config.dot} flex-shrink-0`} />
      {showLabel && (
        <span className={`${sizes.text} ${config.color} font-medium`}>
          {config.label}
        </span>
      )}
      {confidence !== undefined && (
        <span className={`${sizes.text} text-ink-400`}>
          {confidence}%
        </span>
      )}
    </div>
  );
}
