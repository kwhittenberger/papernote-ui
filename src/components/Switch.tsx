// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React from 'react';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Switch({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  size = 'md',
}: SwitchProps) {
  const sizeStyles = {
    sm: {
      switch: 'w-9 h-5',
      slider: 'h-4 w-4',
      translate: 'translate-x-4',
    },
    md: {
      switch: 'w-11 h-6',
      slider: 'h-5 w-5',
      translate: 'translate-x-5',
    },
    lg: {
      switch: 'w-14 h-7',
      slider: 'h-6 w-6',
      translate: 'translate-x-7',
    },
  };

  const styles = sizeStyles[size];

  const handleChange = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <label className={`flex items-center gap-3 ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}>
      {/* Switch */}
      <div className="relative inline-block flex-shrink-0">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={`
            ${styles.switch}
            rounded-full transition-all duration-200
            ${checked ? 'bg-accent-500' : 'bg-paper-300'}
            ${!disabled && 'hover:shadow-sm'}
          `}
        >
          <div
            className={`
              ${styles.slider}
              absolute left-0.5 top-0.5 bg-white rounded-full shadow-sm transition-transform duration-200
              ${checked ? styles.translate : ''}
            `}
          />
        </div>
      </div>

      {/* Label */}
      {(label || description) && (
        <div className="flex-1">
          {label && <p className="text-sm font-medium text-ink-900">{label}</p>}
          {description && <p className="text-xs text-ink-600 mt-0.5">{description}</p>}
        </div>
      )}
    </label>
  );
}
