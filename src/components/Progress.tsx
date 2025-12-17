
export interface ProgressProps{
  /** Progress value (0-100) */
  value: number;
  /** Progress variant ('ring' is alias for 'circular') */
  variant?: 'linear' | 'circular' | 'ring';
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
  /** Milestone markers (array of values 0-100) */
  milestones?: number[];
  /** Show labels at milestone markers */
  showMilestoneLabels?: boolean;
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
  milestones,
  showMilestoneLabels = false,
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

  // Normalize 'ring' to 'circular'
  const normalizedVariant = variant === 'ring' ? 'circular' : variant;

  // Linear progress
  if (normalizedVariant === 'linear') {
    const heightClasses = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
    };

    const tickSizes = {
      sm: { height: 8, width: 2 },
      md: { height: 12, width: 2 },
      lg: { height: 16, width: 3 },
    };

    // Sort and clamp milestones
    const sortedMilestones = milestones
      ? [...milestones].map(m => Math.min(100, Math.max(0, m))).sort((a, b) => a - b)
      : [];

    return (
      <div className={`w-full ${className}`}>
        <div className="relative">
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
          {/* Milestone markers */}
          {sortedMilestones.length > 0 && (
            <div className="absolute inset-0 pointer-events-none">
              {sortedMilestones.map((milestone) => (
                <div
                  key={milestone}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `${milestone}%`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div
                    className={`rounded-full ${milestone <= clampedValue ? 'bg-ink-700' : 'bg-ink-400'}`}
                    style={{
                      width: tickSizes[size].width,
                      height: tickSizes[size].height,
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Milestone labels */}
        {showMilestoneLabels && sortedMilestones.length > 0 && (
          <div className="relative w-full mt-1" style={{ height: '1rem' }}>
            {sortedMilestones.map((milestone) => (
              <span
                key={milestone}
                className="absolute text-xs text-ink-500"
                style={{
                  left: `${milestone}%`,
                  transform: 'translateX(-50%)',
                }}
              >
                {milestone}%
              </span>
            ))}
          </div>
        )}
        {(showLabel || label) && !showMilestoneLabels && (
          <p className="text-xs text-ink-600 mt-1">
            {label || `${Math.round(clampedValue)}%`}
          </p>
        )}
      </div>
    );
  }

  // Circular progress
  const sizeValues = {
    sm: { size: 40, stroke: 3, fontSize: 'text-xs', dotSize: 4, labelOffset: 14 },
    md: { size: 60, stroke: 4, fontSize: 'text-sm', dotSize: 5, labelOffset: 18 },
    lg: { size: 80, stroke: 5, fontSize: 'text-base', dotSize: 6, labelOffset: 22 },
  };

  const { size: svgSize, stroke: strokeWidth, fontSize, dotSize, labelOffset } = sizeValues[size];
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

  // Sort and clamp milestones for circular
  const sortedMilestones = milestones
    ? [...milestones].map(m => Math.min(100, Math.max(0, m))).sort((a, b) => a - b)
    : [];

  // Calculate position on circle for a given percentage
  // SVG is rotated -90deg so 0% is at top
  const getMilestonePosition = (percentage: number, r: number) => {
    const angle = (percentage / 100) * 2 * Math.PI - Math.PI / 2;
    return {
      x: svgSize / 2 + r * Math.cos(angle),
      y: svgSize / 2 + r * Math.sin(angle),
    };
  };

  // Size for the container when labels are shown
  const containerSize = showMilestoneLabels && sortedMilestones.length > 0
    ? svgSize + labelOffset * 2
    : svgSize;

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <div
        className="relative"
        style={{ width: containerSize, height: containerSize }}
      >
        <svg
          width={svgSize}
          height={svgSize}
          style={{
            position: 'absolute',
            left: showMilestoneLabels && sortedMilestones.length > 0 ? labelOffset : 0,
            top: showMilestoneLabels && sortedMilestones.length > 0 ? labelOffset : 0,
          }}
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
            style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
          />
          {/* Milestone markers */}
          {sortedMilestones.map((milestone) => {
            const pos = getMilestonePosition(milestone, radius);
            return (
              <circle
                key={milestone}
                cx={pos.x}
                cy={pos.y}
                r={dotSize / 2}
                className={milestone <= clampedValue ? 'fill-ink-700' : 'fill-ink-400'}
              />
            );
          })}
        </svg>
        {/* Center label */}
        {(showLabel || label) && (
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: showMilestoneLabels && sortedMilestones.length > 0 ? labelOffset : 0,
              top: showMilestoneLabels && sortedMilestones.length > 0 ? labelOffset : 0,
              width: svgSize,
              height: svgSize,
            }}
          >
            <span className={`font-medium text-ink-900 ${fontSize}`}>
              {label || `${Math.round(clampedValue)}%`}
            </span>
          </div>
        )}
        {/* Milestone labels */}
        {showMilestoneLabels && sortedMilestones.map((milestone) => {
          const pos = getMilestonePosition(milestone, radius + labelOffset);
          return (
            <span
              key={milestone}
              className="absolute text-xs text-ink-500"
              style={{
                left: pos.x + labelOffset - 12,
                top: pos.y + labelOffset - 6,
                width: 24,
                textAlign: 'center',
              }}
            >
              {milestone}%
            </span>
          );
        })}
      </div>
    </div>
  );
}
