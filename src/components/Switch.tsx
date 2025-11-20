// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  /** Show loading spinner (disables interaction) */
  loading?: boolean;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  size = 'md',
  loading = false,
}, ref) => {
  const sizeStyles = {
    sm: {
      switch: 'w-9 h-5',
      slider: 'h-4 w-4',
      translate: 'translate-x-4',
      spinner: 'h-3 w-3',
    },
    md: {
      switch: 'w-11 h-6',
      slider: 'h-5 w-5',
      translate: 'translate-x-5',
      spinner: 'h-4 w-4',
    },
    lg: {
      switch: 'w-14 h-7',
      slider: 'h-6 w-6',
      translate: 'translate-x-7',
      spinner: 'h-5 w-5',
    },
  };

  const styles = sizeStyles[size];
  const isDisabled = disabled || loading;

  const handleChange = () => {
    if (!isDisabled) {
      onChange(!checked);
    }
  };

  return (
    <label className={`flex items-center gap-3 ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}>
      {/* Switch */}
      <div className="relative inline-block flex-shrink-0">
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={isDisabled}
          className="sr-only"
        />
        <div
          className={`
            ${styles.switch}
            rounded-full transition-all duration-200
            ${checked ? 'bg-accent-500' : 'bg-paper-300'}
            ${!isDisabled && 'hover:shadow-sm'}
          `}
        >
          <div
            className={`
              ${styles.slider}
              absolute left-0.5 top-0.5 bg-white rounded-full shadow-sm transition-transform duration-200 flex items-center justify-center
              ${checked ? styles.translate : ''}
            `}
          >
            {loading && <Loader2 className={`${styles.spinner} animate-spin text-accent-600`} />}
          </div>
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
});

Switch.displayName = 'Switch';
export default Switch;
