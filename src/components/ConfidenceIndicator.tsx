// =============================================================================
// Types & Interfaces
// =============================================================================

export interface ConfidenceIndicatorProps {
  /** Confidence score (0-100) */
  score: number;
  /** Label to display below the gauge */
  label?: string;
  /** Size in pixels */
  size?: number;
  /** Stroke width */
  strokeWidth?: number;
  /** Additional className */
  className?: string;
}

// =============================================================================
// Component
// =============================================================================

/**
 * ConfidenceIndicator — Circular gauge showing confidence percentage
 *
 * Renders a circular progress arc with color based on score thresholds:
 * - >= 80: green (high confidence)
 * - >= 50: yellow (medium confidence)
 * - < 50: red (low confidence)
 *
 * Used in review workflows and process views to show system confidence
 * in automated actions.
 */
export default function ConfidenceIndicator({
  score,
  label,
  size = 80,
  strokeWidth = 6,
  className = '',
}: ConfidenceIndicatorProps) {
  const normalizedScore = Math.min(100, Math.max(0, score));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (normalizedScore / 100) * circumference;
  const center = size / 2;

  const color = normalizedScore >= 80 ? '#10b981' : // success green
    normalizedScore >= 50 ? '#f59e0b' : // warning amber
    '#ef4444'; // error red

  const bgColor = normalizedScore >= 80 ? '#d1fae5' :
    normalizedScore >= 50 ? '#fef3c7' :
    '#fee2e2';

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={bgColor}
            strokeWidth={strokeWidth}
          />
          {/* Progress arc */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-500 ease-out"
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-bold text-ink-900 dark:text-ink-100"
            style={{ fontSize: size * 0.22 }}
          >
            {normalizedScore}%
          </span>
        </div>
      </div>
      {label && (
        <span className="text-xs text-ink-500 mt-1">{label}</span>
      )}
    </div>
  );
}
