
import React from 'react';
import { Circle } from 'lucide-react';

export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  timestamp: Date | string;
  icon?: React.ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'error' | 'accent' | 'ink';
  metadata?: Record<string, unknown>;
  content?: React.ReactNode;
}

export interface TimelineProps {
  /** Timeline items to display */
  items: TimelineItem[];
  /** Orientation of timeline */
  orientation?: 'vertical' | 'horizontal';
  /** Position of content relative to timeline */
  position?: 'left' | 'right' | 'alternate';
  /** Show connecting line between items */
  showLine?: boolean;
  /** Size of timeline dots/icons */
  dotSize?: 'sm' | 'md' | 'lg';
  /** Format timestamp display */
  formatTimestamp?: (timestamp: Date | string) => string;
  /** Callback when item is clicked */
  onItemClick?: (item: TimelineItem) => void;
  /** Custom class name */
  className?: string;
}

export default function Timeline({
  items,
  orientation = 'vertical',
  position = 'right',
  showLine = true,
  dotSize = 'md',
  formatTimestamp = (timestamp) => {
    const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  },
  onItemClick,
  className = '',
}: TimelineProps) {
  // Color classes for dots
  const colorClasses = {
    primary: 'bg-primary-500 text-white',
    success: 'bg-success-500 text-white',
    warning: 'bg-warning-500 text-white',
    error: 'bg-error-500 text-white',
    accent: 'bg-accent-500 text-white',
    ink: 'bg-ink-500 text-white',
  };

  // Line color classes
  const lineColorClasses = {
    primary: 'bg-primary-200',
    success: 'bg-success-200',
    warning: 'bg-warning-200',
    error: 'bg-error-200',
    accent: 'bg-accent-200',
    ink: 'bg-ink-200',
  };

  // Dot size classes
  const dotSizeClasses = {
    sm: {
      dot: 'h-6 w-6',
      icon: 'h-3 w-3',
      line: orientation === 'vertical' ? 'w-0.5' : 'h-0.5',
    },
    md: {
      dot: 'h-8 w-8',
      icon: 'h-4 w-4',
      line: orientation === 'vertical' ? 'w-0.5' : 'h-0.5',
    },
    lg: {
      dot: 'h-10 w-10',
      icon: 'h-5 w-5',
      line: orientation === 'vertical' ? 'w-1' : 'h-1',
    },
  };

  // Vertical timeline
  if (orientation === 'vertical') {
    return (
      <div className={`relative ${className}`}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const itemPosition =
            position === 'alternate' ? (index % 2 === 0 ? 'right' : 'left') : position;
          const color = item.color || 'primary';

          return (
            <div
              key={item.id}
              className={`relative flex gap-4 ${
                itemPosition === 'left' ? 'flex-row-reverse text-right' : ''
              } ${index !== 0 ? 'mt-6' : ''}`}
            >
              {/* Timeline dot and line */}
              <div className="relative flex flex-col items-center flex-shrink-0">
                {/* Dot */}
                <div
                  className={`
                    ${dotSizeClasses[dotSize].dot}
                    rounded-full ${colorClasses[color]}
                    flex items-center justify-center
                    border-4 border-white shadow-sm
                    z-10
                  `}
                >
                  {item.icon ? (
                    <span className={dotSizeClasses[dotSize].icon}>{item.icon}</span>
                  ) : (
                    <Circle className={`${dotSizeClasses[dotSize].icon} fill-current`} />
                  )}
                </div>

                {/* Connecting line */}
                {showLine && !isLast && (
                  <div
                    className={`
                      ${dotSizeClasses[dotSize].line}
                      flex-1 mt-2 ${lineColorClasses[color]}
                      min-h-[40px]
                    `}
                  />
                )}
              </div>

              {/* Content */}
              <div
                className={`
                  flex-1 pb-6
                  ${onItemClick ? 'cursor-pointer' : ''}
                `}
                onClick={() => onItemClick?.(item)}
              >
                <div className="bg-white rounded-lg border border-paper-200 p-4 shadow-sm hover:shadow-md transition-shadow">
                  {/* Timestamp */}
                  <div className="text-xs text-ink-500 font-medium mb-1">
                    {formatTimestamp(item.timestamp)}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-ink-900 mb-1">{item.title}</h3>

                  {/* Description */}
                  {item.description && (
                    <p className="text-sm text-ink-600 mb-2">{item.description}</p>
                  )}

                  {/* Custom content */}
                  {item.content && <div className="mt-3">{item.content}</div>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Horizontal timeline
  return (
    <div className={`relative ${className}`}>
      <div className="flex items-start gap-6 overflow-x-auto pb-4">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const color = item.color || 'primary';

          return (
            <div key={item.id} className="relative flex flex-col items-center flex-shrink-0 min-w-[200px]">
              {/* Content */}
              <div
                className={`
                  w-full mb-4
                  ${onItemClick ? 'cursor-pointer' : ''}
                `}
                onClick={() => onItemClick?.(item)}
              >
                <div className="bg-white rounded-lg border border-paper-200 p-4 shadow-sm hover:shadow-md transition-shadow">
                  {/* Timestamp */}
                  <div className="text-xs text-ink-500 font-medium mb-1">
                    {formatTimestamp(item.timestamp)}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-ink-900 mb-1">{item.title}</h3>

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs text-ink-600 mb-2">{item.description}</p>
                  )}

                  {/* Custom content */}
                  {item.content && <div className="mt-2">{item.content}</div>}
                </div>
              </div>

              {/* Timeline dot and line container */}
              <div className="relative flex items-center w-full">
                {/* Left line half */}
                {showLine && index !== 0 && (
                  <div
                    className={`
                      flex-1 ${dotSizeClasses[dotSize].line}
                      ${lineColorClasses[color]}
                    `}
                  />
                )}

                {/* Dot */}
                <div
                  className={`
                    ${dotSizeClasses[dotSize].dot}
                    rounded-full ${colorClasses[color]}
                    flex items-center justify-center
                    border-4 border-white shadow-sm
                    flex-shrink-0
                    z-10
                  `}
                >
                  {item.icon ? (
                    <span className={dotSizeClasses[dotSize].icon}>{item.icon}</span>
                  ) : (
                    <Circle className={`${dotSizeClasses[dotSize].icon} fill-current`} />
                  )}
                </div>

                {/* Right line half */}
                {showLine && !isLast && (
                  <div
                    className={`
                      flex-1 ${dotSizeClasses[dotSize].line}
                      ${lineColorClasses[color]}
                    `}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
