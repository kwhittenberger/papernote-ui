import { ReactNode, Children, isValidElement, cloneElement } from 'react';
import { X } from 'lucide-react';

export interface ChipProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  onClose?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  /** Whether the chip is in a selected state */
  selected?: boolean;
  /** Maximum width for text truncation */
  maxWidth?: string | number;
  /** Unique key for use in ChipGroup selection */
  chipKey?: string;
}

export interface ChipGroupProps {
  children: ReactNode;
  /** Layout direction */
  direction?: 'horizontal' | 'vertical';
  /** Whether chips should wrap to next line */
  wrap?: boolean;
  /** Gap between chips */
  gap?: 'xs' | 'sm' | 'md' | 'lg';
  /** Selection mode */
  selectionMode?: 'none' | 'single' | 'multiple';
  /** Selected chip keys (controlled) */
  selectedKeys?: string[];
  /** Callback when selection changes */
  onSelectionChange?: (keys: string[]) => void;
  /** Additional CSS classes */
  className?: string;
}

const variantClasses = {
  primary: {
    default: 'bg-primary-100 text-primary-700 border-primary-200',
    hover: 'hover:bg-primary-200',
    close: 'hover:bg-primary-300 text-primary-600',
    selected: 'bg-primary-200 border-primary-400 ring-2 ring-primary-300',
  },
  secondary: {
    default: 'bg-ink-100 text-ink-700 border-ink-200',
    hover: 'hover:bg-ink-200',
    close: 'hover:bg-ink-300 text-ink-600',
    selected: 'bg-ink-200 border-ink-400 ring-2 ring-ink-300',
  },
  success: {
    default: 'bg-success-100 text-success-700 border-success-200',
    hover: 'hover:bg-success-200',
    close: 'hover:bg-success-300 text-success-600',
    selected: 'bg-success-200 border-success-400 ring-2 ring-success-300',
  },
  warning: {
    default: 'bg-warning-100 text-warning-700 border-warning-200',
    hover: 'hover:bg-warning-200',
    close: 'hover:bg-warning-300 text-warning-600',
    selected: 'bg-warning-200 border-warning-400 ring-2 ring-warning-300',
  },
  error: {
    default: 'bg-error-100 text-error-700 border-error-200',
    hover: 'hover:bg-error-200',
    close: 'hover:bg-error-300 text-error-600',
    selected: 'bg-error-200 border-error-400 ring-2 ring-error-300',
  },
  info: {
    default: 'bg-accent-100 text-accent-700 border-accent-200',
    hover: 'hover:bg-accent-200',
    close: 'hover:bg-accent-300 text-accent-600',
    selected: 'bg-accent-200 border-accent-400 ring-2 ring-accent-300',
  },
};

const sizeClasses = {
  sm: {
    container: 'h-6 px-2 text-xs gap-1',
    icon: 'h-3 w-3',
    close: 'h-3 w-3 ml-1',
  },
  md: {
    container: 'h-7 px-2.5 text-sm gap-1.5',
    icon: 'h-3.5 w-3.5',
    close: 'h-3.5 w-3.5 ml-1.5',
  },
  lg: {
    container: 'h-8 px-3 text-base gap-2',
    icon: 'h-4 w-4',
    close: 'h-4 w-4 ml-2',
  },
};

const gapClasses = {
  xs: 'gap-1',
  sm: 'gap-1.5',
  md: 'gap-2',
  lg: 'gap-3',
};

/**
 * Chip - Compact element for displaying values with optional remove functionality
 * 
 * @example Basic chip
 * ```tsx
 * <Chip>Tag Name</Chip>
 * ```
 * 
 * @example Removable chip
 * ```tsx
 * <Chip onClose={() => removeTag(tag)}>
 *   {tag.name}
 * </Chip>
 * ```
 * 
 * @example With icon and selected state
 * ```tsx
 * <Chip 
 *   icon={<Star className="h-3 w-3" />}
 *   selected={isSelected}
 *   onClick={() => toggleSelection()}
 * >
 *   Favorite
 * </Chip>
 * ```
 */
export default function Chip({
  children,
  variant = 'secondary',
  size = 'md',
  onClose,
  icon,
  disabled = false,
  className = '',
  onClick,
  selected = false,
  maxWidth,
  chipKey,
}: ChipProps) {
  const variantStyle = variantClasses[variant];
  const sizeStyle = sizeClasses[size];

  const isClickable = !disabled && (onClick || onClose);

  return (
    <div
      className={`
        inline-flex items-center rounded-full border font-medium
        transition-colors
        ${selected ? variantStyle.selected : variantStyle.default}
        ${isClickable && !disabled && !selected ? variantStyle.hover : ''}
        ${sizeStyle.container}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${onClick && !disabled ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick && !disabled ? onClick : undefined}
      role={onClick ? 'button' : undefined}
      aria-disabled={disabled}
      aria-pressed={onClick ? selected : undefined}
      data-chip-key={chipKey}
      style={{ maxWidth: maxWidth || undefined }}
    >
      {icon && (
        <span className={`flex-shrink-0 ${sizeStyle.icon}`}>
          {icon}
        </span>
      )}

      <span className="truncate">{children}</span>

      {onClose && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (!disabled) onClose();
          }}
          disabled={disabled}
          className={`
            flex-shrink-0 rounded-full transition-colors
            ${variantStyle.close}
            ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
            ${sizeStyle.close}
          `}
          aria-label="Remove"
        >
          <X className="w-full h-full" />
        </button>
      )}
    </div>
  );
}

/**
 * ChipGroup - Container for multiple chips with layout and selection support
 * 
 * @example Basic group
 * ```tsx
 * <ChipGroup wrap gap="sm">
 *   {tags.map(tag => (
 *     <Chip key={tag.id} onClose={() => removeTag(tag)}>
 *       {tag.name}
 *     </Chip>
 *   ))}
 * </ChipGroup>
 * ```
 * 
 * @example Selectable group (single)
 * ```tsx
 * <ChipGroup 
 *   selectionMode="single"
 *   selectedKeys={[selectedCategory]}
 *   onSelectionChange={(keys) => setSelectedCategory(keys[0])}
 * >
 *   <Chip chipKey="all">All</Chip>
 *   <Chip chipKey="active">Active</Chip>
 *   <Chip chipKey="archived">Archived</Chip>
 * </ChipGroup>
 * ```
 * 
 * @example Multi-select group
 * ```tsx
 * <ChipGroup
 *   selectionMode="multiple"
 *   selectedKeys={selectedTags}
 *   onSelectionChange={setSelectedTags}
 *   wrap
 * >
 *   {availableTags.map(tag => (
 *     <Chip key={tag} chipKey={tag}>{tag}</Chip>
 *   ))}
 * </ChipGroup>
 * ```
 */
export function ChipGroup({
  children,
  direction = 'horizontal',
  wrap = false,
  gap = 'sm',
  selectionMode = 'none',
  selectedKeys = [],
  onSelectionChange,
  className = '',
}: ChipGroupProps) {
  const handleChipClick = (chipKey: string) => {
    if (selectionMode === 'none' || !onSelectionChange) return;

    if (selectionMode === 'single') {
      // Toggle single selection
      if (selectedKeys.includes(chipKey)) {
        onSelectionChange([]);
      } else {
        onSelectionChange([chipKey]);
      }
    } else if (selectionMode === 'multiple') {
      // Toggle in array
      if (selectedKeys.includes(chipKey)) {
        onSelectionChange(selectedKeys.filter(k => k !== chipKey));
      } else {
        onSelectionChange([...selectedKeys, chipKey]);
      }
    }
  };

  // Clone children to inject selection props
  const enhancedChildren = Children.map(children, (child) => {
    if (!isValidElement<ChipProps>(child)) return child;
    
    const chipKey = child.props.chipKey;
    if (!chipKey || selectionMode === 'none') return child;

    const isSelected = selectedKeys.includes(chipKey);
    
    return cloneElement(child, {
      ...child.props,
      selected: isSelected,
      onClick: () => {
        // Call original onClick if exists
        if (child.props.onClick) {
          child.props.onClick();
        }
        handleChipClick(chipKey);
      },
    } as ChipProps);
  });

  return (
    <div
      className={`
        flex
        ${direction === 'vertical' ? 'flex-col' : 'flex-row'}
        ${wrap ? 'flex-wrap' : ''}
        ${gapClasses[gap]}
        ${className}
      `}
      role={selectionMode !== 'none' ? 'group' : undefined}
      aria-label={selectionMode !== 'none' ? 'Chip selection group' : undefined}
    >
      {enhancedChildren}
    </div>
  );
}
