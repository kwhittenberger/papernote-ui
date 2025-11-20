import { ChevronDown, ChevronRight } from 'lucide-react';

export interface ExpandableRowButtonProps {
  isExpanded: boolean;
  onToggle: () => void;
  expandedTooltip?: string;
  collapsedTooltip?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'chevron' | 'arrow' | 'plus';
  disabled?: boolean;
}

const sizeConfig = {
  sm: {
    container: 'p-0.5',
    icon: 'h-3 w-3',
  },
  md: {
    container: 'p-1',
    icon: 'h-4 w-4',
  },
  lg: {
    container: 'p-1.5',
    icon: 'h-5 w-5',
  },
};

export default function ExpandableRowButton({
  isExpanded,
  onToggle,
  expandedTooltip = 'Collapse details',
  collapsedTooltip = 'Expand details',
  size = 'md',
  variant = 'chevron',
  disabled = false,
}: ExpandableRowButtonProps) {
  const sizeStyles = sizeConfig[size];

  const renderIcon = () => {
    if (variant === 'chevron') {
      return isExpanded ? (
        <ChevronDown className={sizeStyles.icon} />
      ) : (
        <ChevronRight className={sizeStyles.icon} />
      );
    }

    if (variant === 'arrow') {
      return isExpanded ? (
        <svg className={sizeStyles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      ) : (
        <svg className={sizeStyles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      );
    }

    if (variant === 'plus') {
      return isExpanded ? (
        <svg className={sizeStyles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      ) : (
        <svg className={sizeStyles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      );
    }

    return null;
  };

  const buttonClasses = [
    'inline-flex items-center justify-center rounded transition-colors duration-150',
    'text-blue-600 hover:text-blue-900 hover:bg-blue-50',
    sizeStyles.container,
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
  ].filter(Boolean).join(' ');

  return (
    <button
      onClick={onToggle}
      disabled={disabled}
      title={isExpanded ? expandedTooltip : collapsedTooltip}
      className={buttonClasses}
    >
      {renderIcon()}
    </button>
  );
}