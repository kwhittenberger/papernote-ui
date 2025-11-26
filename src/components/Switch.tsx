import { forwardRef, useId } from 'react';
import { useIsMobile } from '../hooks/useResponsive';
import { Loader2 } from 'lucide-react';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  /** Size variant - 'lg' provides better touch targets. On mobile, 'md' auto-upgrades to 'lg'. */
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
  // Generate unique IDs for ARIA
  const switchId = useId();
  const labelId = label ? `${switchId}-label` : undefined;
  const descId = description ? `${switchId}-desc` : undefined;
  
  // Auto-size for mobile
  const isMobile = useIsMobile();
  const effectiveSize = isMobile && size === 'md' ? 'lg' : size;

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

  const styles = sizeStyles[effectiveSize];
  const isDisabled = disabled || loading;

  const handleChange = () => {
    if (!isDisabled) {
      onChange(!checked);
    }
  };

  // Touch target padding for mobile
  const touchTargetClass = effectiveSize === 'lg' ? 'min-h-touch py-1' : '';

  return (
    <label htmlFor={switchId} className={`flex items-center gap-3 ${touchTargetClass} ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}>
      {/* Switch */}
      <div className="relative inline-block flex-shrink-0">
        <input
          ref={ref}
          id={switchId}
          type="checkbox"
          role="switch"
          checked={checked}
          onChange={handleChange}
          disabled={isDisabled}
          aria-checked={checked}
          aria-labelledby={labelId}
          aria-describedby={descId}
          aria-disabled={isDisabled}
          aria-busy={loading}
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
          {label && <p id={labelId} className={`${effectiveSize === 'lg' ? 'text-base' : 'text-sm'} font-medium text-ink-900`}>{label}</p>}
          {description && <p id={descId} className="text-xs text-ink-600 mt-0.5">{description}</p>}
        </div>
      )}
    </label>
  );
});

Switch.displayName = 'Switch';
export default Switch;
