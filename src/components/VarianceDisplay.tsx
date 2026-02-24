import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

// =============================================================================
// Types & Interfaces
// =============================================================================

export interface VarianceDisplayProps {
  /** Expected value */
  expected: number;
  /** Actual value */
  actual: number;
  /** Display format */
  format?: 'currency' | 'number' | 'percentage';
  /** Currency code for currency format */
  currency?: string;
  /** Tolerance percentage — within tolerance shows as neutral */
  tolerancePercent?: number;
  /** Whether to show the expected and actual values */
  showValues?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Additional className */
  className?: string;
}

// =============================================================================
// Helpers
// =============================================================================

function formatValue(value: number, format: string, currency: string): string {
  switch (format) {
    case 'currency':
      return new Intl.NumberFormat('en-US', { style: 'currency', currency, minimumFractionDigits: 2 }).format(value);
    case 'percentage':
      return `${value.toFixed(1)}%`;
    default:
      return value.toLocaleString();
  }
}

// =============================================================================
// Component
// =============================================================================

/**
 * VarianceDisplay — Expected vs actual comparison with tolerance coloring
 *
 * Shows the difference between expected and actual values, color-coded
 * by tolerance thresholds. Used in the Reconciliation Hub for variance analysis.
 */
export default function VarianceDisplay({
  expected,
  actual,
  format = 'currency',
  currency = 'USD',
  tolerancePercent = 1,
  showValues = true,
  size = 'md',
  className = '',
}: VarianceDisplayProps) {
  const variance = actual - expected;
  const variancePercent = expected !== 0 ? (variance / expected) * 100 : 0;
  const absVariancePercent = Math.abs(variancePercent);
  const isWithinTolerance = absVariancePercent <= tolerancePercent;
  const isOver = variance > 0;
  const isExact = variance === 0;

  const colorClass = isExact ? 'text-success-600' :
    isWithinTolerance ? 'text-ink-600' :
    isOver ? 'text-blue-600' : 'text-error-600';

  const bgClass = isExact ? 'bg-success-50' :
    isWithinTolerance ? 'bg-paper-100' :
    isOver ? 'bg-blue-50' : 'bg-error-50';

  const sizeClasses = {
    sm: { text: 'text-xs', value: 'text-sm' },
    md: { text: 'text-sm', value: 'text-base' },
    lg: { text: 'text-base', value: 'text-lg' },
  };
  const sizes = sizeClasses[size];

  const VarianceIcon = isExact ? Minus : isOver ? ArrowUp : ArrowDown;

  return (
    <div className={`${className}`}>
      {/* Values */}
      {showValues && (
        <div className={`flex items-center justify-between gap-4 mb-1 ${sizes.text}`}>
          <div>
            <span className="text-ink-400">Expected: </span>
            <span className="text-ink-700 font-medium">{formatValue(expected, format, currency)}</span>
          </div>
          <div>
            <span className="text-ink-400">Actual: </span>
            <span className="text-ink-700 font-medium">{formatValue(actual, format, currency)}</span>
          </div>
        </div>
      )}

      {/* Variance badge */}
      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded ${bgClass} ${colorClass}`}>
        <VarianceIcon className="h-3 w-3" />
        <span className={`${sizes.value} font-medium`}>
          {variance >= 0 ? '+' : ''}{formatValue(variance, format, currency)}
        </span>
        <span className={`${sizes.text} opacity-75`}>
          ({variancePercent >= 0 ? '+' : ''}{variancePercent.toFixed(1)}%)
        </span>
        {isWithinTolerance && !isExact && (
          <span className={`${sizes.text} text-ink-400 ml-1`}>within tolerance</span>
        )}
      </div>
    </div>
  );
}
