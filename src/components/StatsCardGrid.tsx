import { ReactNode } from 'react';

interface StatCard {
  icon: ReactNode;
  label: string;
  value: string | number;
  subtitle?: string;
  valueColor?: string;
  iconColor?: string;
}

interface StatsCardGridProps {
  stats: StatCard[];
  className?: string;
  /** Number of columns on large screens (default: 4) */
  columns?: 2 | 3 | 4;
}

/**
 * Grid of statistics cards for displaying key metrics
 * Supports responsive layout with 1 column on mobile, 2 on tablet, and configurable on desktop
 *
 * @example
 * ```tsx
 * <StatsCardGrid
 *   stats={statsData}
 *   columns={4}  // 1 col mobile → 2 col tablet → 4 col desktop
 * />
 * ```
 */
export function StatsCardGrid({ stats, className = '', columns = 4 }: StatsCardGridProps) {
  // Determine grid columns based on number of stats and columns prop
  const getGridCols = () => {
    if (stats.length === 1) return 'sm:grid-cols-1';
    if (stats.length === 2) return 'sm:grid-cols-2';

    // For 3+ stats, use the columns prop
    if (columns === 2) return 'sm:grid-cols-2';
    if (columns === 3) return 'sm:grid-cols-2 lg:grid-cols-3';
    return 'sm:grid-cols-2 lg:grid-cols-4'; // default: 4 columns
  };

  const gridCols = getGridCols();

  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-4 mb-6 ${className}`}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6"
        >
          <div className="flex items-center">
            <div className={`flex-shrink-0 ${stat.iconColor || 'text-blue-600'}`}>
              {stat.icon}
            </div>
            <div className="ml-4 flex-1">
              <div className="text-sm font-medium text-gray-500">{stat.label}</div>
              <div className={`text-2xl font-bold ${stat.valueColor || 'text-gray-900'}`}>
                {stat.value}
              </div>
              {stat.subtitle && (
                <div className="text-sm text-gray-500 mt-1">{stat.subtitle}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
