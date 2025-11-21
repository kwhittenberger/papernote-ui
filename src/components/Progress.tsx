
export interface ProgressProps{
  /** Progress value (0-100) */
  value: number;
  /** Progress variant */
  variant?: 'linear' | 'circular';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Color variant */
  color?: 'primary' | 'success' | 'warning' | 'error';
  /** Show label with percentage */
  showLabel?: boolean;
  /** Custom label text (overrides percentage) */
  label?: string;
  /** Striped animation */
  striped?: boolean;
  /** Animated stripes (requires striped=true) */
  animated?: boolean;
  /** Class name for container */
  className?: string;
}

export default function Progress({
  value,
  variant = 'linear',
  size = 'md',
  color = 'primary',
  showLabel = false,
  label,
  striped = false,
  animated = false,
  className = '',
}: ProgressProps) {
  // Clamp value between 0 and 100
  const clampedValue = Math.min(100, Math.max(0, value));

  const colorClasses = {
    primary: 'bg-accent-600',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    error: 'bg-error-500',
  };

  const bgColorClasses = {
    primary: 'bg-accent-100',
    success: 'bg-success-100',
    warning: 'bg-warning-100',
    error: 'bg-error-100',
  };

  // Linear progress
  if (variant === 'linear') {
    const heightClasses = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
    };

    return (
      <div className={`w-full ${className}`}>
        <div className={`relative w-full rounded-full overflow-hidden ${bgColorClasses[color]} ${heightClasses[size]}`}>
          <div
            className={`
              h-full transition-all duration-300 ease-out
              ${colorClasses[color]}
              ${striped ? 'bg-striped' : ''}
              ${animated && striped ? 'animate-striped' : ''}
            `}
            style={{
              width: `${clampedValue}%`,
              backgroundImage: striped ? 'linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)' : undefined,
              backgroundSize: striped ? '1rem 1rem' : undefined,
            }}
            role="progressbar"
            aria-valuenow={clampedValue}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        {(showLabel || label) && (
          <p className="text-xs text-ink-600 mt-1">
            {label || `${Math.round(clampedValue)}%`}
          </p>
        )}
      </div>
    );
  }

  // Circular progress
  const sizeValues = {
    sm: { size: 40, stroke: 3, fontSize: 'text-xs' },
    md: { size: 60, stroke: 4, fontSize: 'text-sm' },
    lg: { size: 80, stroke: 5, fontSize: 'text-base' },
  };

  const { size: svgSize, stroke: strokeWidth, fontSize } = sizeValues[size];
  const radius = (svgSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (clampedValue / 100) * circumference;

  const strokeColorClasses = {
    primary: 'stroke-accent-600',
    success: 'stroke-success-500',
    warning: 'stroke-warning-500',
    error: 'stroke-error-500',
  };

  const strokeBgColorClasses = {
    primary: 'stroke-accent-100',
    success: 'stroke-success-100',
    warning: 'stroke-warning-100',
    error: 'stroke-error-100',
  };

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <div className="relative" style={{ width: svgSize, height: svgSize }}>
        <svg
          width={svgSize}
          height={svgSize}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={svgSize / 2}
            cy={svgSize / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            className={strokeBgColorClasses[color]}
          />
          {/* Progress circle */}
          <circle
            cx={svgSize / 2}
            cy={svgSize / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className={`${strokeColorClasses[color]} transition-all duration-300 ease-out`}
          />
        </svg>
        {/* Center label */}
        {(showLabel || label) && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`font-medium text-ink-900 ${fontSize}`}>
              {label || `${Math.round(clampedValue)}%`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
