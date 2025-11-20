// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import { useState } from 'react';
import { Star } from 'lucide-react';

export interface RatingProps {
  /** Current rating value */
  value: number;
  /** Callback when rating changes */
  onChange?: (value: number) => void;
  /** Maximum rating (number of stars) */
  max?: number;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Read-only mode */
  readOnly?: boolean;
  /** Allow half-star ratings */
  allowHalf?: boolean;
  /** Color variant */
  color?: 'primary' | 'warning' | 'error';
  /** Show label with rating value */
  showLabel?: boolean;
  /** Custom label text */
  label?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Class name for container */
  className?: string;
}

export default function Rating({
  value,
  onChange,
  max = 5,
  size = 'md',
  readOnly = false,
  allowHalf = false,
  color = 'warning',
  showLabel = false,
  label,
  disabled = false,
  className = '',
}: RatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const colorClasses = {
    primary: 'text-accent-500',
    warning: 'text-warning-500',
    error: 'text-error-500',
  };

  const emptyColorClasses = {
    primary: 'text-accent-200',
    warning: 'text-warning-200',
    error: 'text-error-200',
  };

  const handleClick = (starValue: number) => {
    if (!readOnly && !disabled && onChange) {
      onChange(starValue);
    }
  };

  const handleMouseEnter = (starValue: number) => {
    if (!readOnly && !disabled) {
      setHoverValue(starValue);
    }
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const displayValue = hoverValue !== null ? hoverValue : value;

  const renderStar = (index: number) => {
    const starValue = index + 1;
    const halfValue = index + 0.5;

    // Calculate fill percentage for this star
    let fillPercentage = 0;
    if (displayValue >= starValue) {
      fillPercentage = 100;
    } else if (allowHalf && displayValue >= halfValue) {
      fillPercentage = 50;
    } else if (displayValue > index && displayValue < starValue) {
      fillPercentage = ((displayValue - index) * 100);
    }

    const isFilled = fillPercentage > 0;

    return (
      <div
        key={index}
        className="relative inline-block cursor-pointer"
        onClick={() => handleClick(starValue)}
        onMouseEnter={() => handleMouseEnter(starValue)}
        onMouseMove={(e) => {
          if (allowHalf && !readOnly && !disabled) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const isLeftHalf = x < rect.width / 2;
            handleMouseEnter(isLeftHalf ? halfValue : starValue);
          }
        }}
      >
        {/* Empty star */}
        <Star
          className={`
            ${sizeClasses[size]}
            ${emptyColorClasses[color]}
            ${!readOnly && !disabled ? 'hover:scale-110 transition-transform' : ''}
          `}
        />
        {/* Filled star overlay */}
        {isFilled && (
          <div
            className="absolute top-0 left-0 overflow-hidden"
            style={{ width: `${fillPercentage}%` }}
          >
            <Star
              className={`
                ${sizeClasses[size]}
                ${colorClasses[color]}
                fill-current
              `}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div
        className={`inline-flex gap-0.5 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onMouseLeave={handleMouseLeave}
        role="radiogroup"
        aria-label={`Rating: ${value} out of ${max}`}
      >
        {Array.from({ length: max }, (_, index) => renderStar(index))}
      </div>
      {(showLabel || label) && (
        <span className="text-sm text-ink-700 ml-1">
          {label || `${value.toFixed(allowHalf ? 1 : 0)} / ${max}`}
        </span>
      )}
    </div>
  );
}
