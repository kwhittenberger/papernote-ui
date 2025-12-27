import React from 'react';
import { HelpCircle, Info } from 'lucide-react';
import Tooltip from './Tooltip';

export interface HelpTooltipProps {
  /** The help text to display in the tooltip */
  content: React.ReactNode;
  /** Icon variant to display */
  icon?: 'help' | 'info';
  /** Size of the icon */
  size?: 'sm' | 'md' | 'lg';
  /** Position of the tooltip relative to the icon */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Additional CSS classes for the icon container */
  className?: string;
}

const sizeClasses = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

export default function HelpTooltip({
  content,
  icon = 'help',
  size = 'md',
  position = 'top',
  className = '',
}: HelpTooltipProps) {
  const IconComponent = icon === 'info' ? Info : HelpCircle;

  return (
    <Tooltip content={content} position={position}>
      <span
        className={`inline-flex items-center justify-center text-ink-400 hover:text-ink-600 cursor-help transition-colors ${className}`}
        role="button"
        aria-label="Help"
        tabIndex={0}
      >
        <IconComponent className={sizeClasses[size]} />
      </span>
    </Tooltip>
  );
}
