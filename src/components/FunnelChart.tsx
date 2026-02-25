// =============================================================================
// Types & Interfaces
// =============================================================================

export interface FunnelStage {
  /** Stage name */
  name: string;
  /** Stage count */
  count: number;
  /** Display value (e.g., formatted currency) */
  value?: string;
  /** Color for this stage */
  color?: string;
}

export interface FunnelChartProps {
  /** Funnel stages in order (widest to narrowest) */
  stages: FunnelStage[];
  /** Chart height in pixels */
  height?: number;
  /** Whether to show conversion rates between stages */
  showConversion?: boolean;
  /** Label size preset — controls stage name, value, count, and conversion text */
  labelSize?: 'sm' | 'md' | 'lg';
  /** Click handler for a stage */
  onStageClick?: (stageName: string) => void;
  /** Additional className */
  className?: string;
}

// =============================================================================
// Default Colors
// =============================================================================

const defaultColors = [
  '#6366f1', // indigo
  '#8b5cf6', // violet
  '#a78bfa', // violet lighter
  '#c084fc', // purple lighter
  '#d8b4fe', // purple lightest
  '#e9d5ff', // purple very light
  '#f3e8ff', // purple ultra light
];

// =============================================================================
// Label Size Presets
// =============================================================================

const labelSizes = {
  sm: { name: '9px', value: '8px', count: '10px', conversion: '8px' },
  md: { name: '11px', value: '10px', count: '12px', conversion: '10px' },
  lg: { name: '13px', value: '12px', count: '14px', conversion: '12px' },
} as const;

// =============================================================================
// Component
// =============================================================================

/**
 * FunnelChart — SVG funnel visualization for pipeline stages
 *
 * Renders a vertical funnel where each stage's width is proportional
 * to its count relative to the first (widest) stage.
 * Shows stage names, counts, values, and optional conversion rates.
 */
export default function FunnelChart({
  stages,
  height = 300,
  showConversion = true,
  labelSize = 'md',
  onStageClick,
  className = '',
}: FunnelChartProps) {
  if (stages.length === 0) return null;

  const sizes = labelSizes[labelSize];
  const maxCount = Math.max(...stages.map(s => s.count), 1);
  const stageHeight = height / stages.length;
  const svgWidth = 450;
  const padding = 20;
  const leftLabelSpace = 50; // Space for conversion rate labels on left
  const rightLabelSpace = 160; // Space for stage name + value labels on right
  const funnelWidth = svgWidth - padding * 2 - leftLabelSpace - rightLabelSpace;

  return (
    <div className={className}>
      <svg width="100%" viewBox={`0 0 ${svgWidth} ${height}`} preserveAspectRatio="xMidYMid meet">
        {stages.map((stage, idx) => {
          const ratio = stage.count / maxCount;
          const nextRatio = idx < stages.length - 1 ? stages[idx + 1].count / maxCount : ratio;
          const y = idx * stageHeight;
          const topWidth = funnelWidth * ratio;
          const bottomWidth = funnelWidth * nextRatio;
          const centerX = padding + leftLabelSpace + funnelWidth / 2;
          const color = stage.color || defaultColors[idx % defaultColors.length];

          // Conversion rate
          const conversionRate = idx > 0 && stages[idx - 1].count > 0
            ? Math.round((stage.count / stages[idx - 1].count) * 100)
            : null;

          // Trapezoid path
          const path = `
            M ${centerX - topWidth / 2} ${y + 2}
            L ${centerX + topWidth / 2} ${y + 2}
            L ${centerX + bottomWidth / 2} ${y + stageHeight - 2}
            L ${centerX - bottomWidth / 2} ${y + stageHeight - 2}
            Z
          `;

          return (
            <g
              key={stage.name}
              onClick={() => onStageClick?.(stage.name)}
              style={onStageClick ? { cursor: 'pointer' } : undefined}
              role={onStageClick ? 'button' : undefined}
            >
              {/* Funnel segment */}
              <path
                d={path}
                fill={color}
                opacity={0.85}
                className="transition-opacity hover:opacity-100"
              />

              {/* Count inside funnel */}
              <text
                x={centerX}
                y={y + stageHeight / 2 + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-white font-bold"
                style={{ fontSize: sizes.count }}
              >
                {stage.count.toLocaleString()}
              </text>

              {/* Labels on right side */}
              <text
                x={centerX + funnelWidth / 2 + 12}
                y={y + stageHeight / 2 - 4}
                className="fill-ink-700 dark:fill-ink-300"
                style={{ fontSize: sizes.name, fontWeight: 500 }}
              >
                {stage.name}
              </text>
              {stage.value && (
                <text
                  x={centerX + funnelWidth / 2 + 12}
                  y={y + stageHeight / 2 + 7}
                  className="fill-ink-400"
                  style={{ fontSize: sizes.value }}
                >
                  {stage.value}
                </text>
              )}

              {/* Conversion rate on left — shows stage-to-stage conversion */}
              {showConversion && conversionRate !== null && (
                <text
                  x={centerX - funnelWidth / 2 - 16}
                  y={y + 4}
                  textAnchor="end"
                  className="fill-ink-500"
                  style={{ fontSize: sizes.conversion, fontWeight: 500 }}
                >
                  ↓ {conversionRate}%
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
