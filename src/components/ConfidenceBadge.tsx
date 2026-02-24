// =============================================================================
// Types & Interfaces
// =============================================================================

export interface ConfidenceBadgeProps {
  /** Confidence score (0-100) */
  score: number;
  /** Whether to show the score as text */
  showScore?: boolean;
  /** Size variant */
  size?: 'sm' | 'md';
  /** Additional className */
  className?: string;
}

// =============================================================================
// Component
// =============================================================================

/**
 * ConfidenceBadge — Compact inline confidence display
 *
 * Shows a color-coded badge with optional score text.
 * Used in table cells, Kanban cards, and list items where
 * the full ConfidenceIndicator gauge would be too large.
 */
export default function ConfidenceBadge({
  score,
  showScore = true,
  size = 'md',
  className = '',
}: ConfidenceBadgeProps) {
  const normalizedScore = Math.min(100, Math.max(0, score));

  const colorClasses = normalizedScore >= 80
    ? 'bg-success-50 text-success-700 border-success-200'
    : normalizedScore >= 50
    ? 'bg-warning-50 text-warning-700 border-warning-200'
    : 'bg-error-50 text-error-700 border-error-200';

  const dotColor = normalizedScore >= 80
    ? 'bg-success-500'
    : normalizedScore >= 50
    ? 'bg-warning-500'
    : 'bg-error-500';

  const sizeClasses = {
    sm: { wrapper: 'px-1.5 py-0.5 text-[10px]', dot: 'w-1.5 h-1.5' },
    md: { wrapper: 'px-2 py-0.5 text-xs', dot: 'w-2 h-2' },
  };
  const sizes = sizeClasses[size];

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border font-medium ${sizes.wrapper} ${colorClasses} ${className}`}
      title={`${normalizedScore}% confidence`}
    >
      <span className={`${sizes.dot} rounded-full ${dotColor} flex-shrink-0`} />
      {showScore && <span>{normalizedScore}%</span>}
    </span>
  );
}
