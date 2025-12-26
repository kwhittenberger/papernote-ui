import { useState, useRef, useEffect } from 'react';
import { Eye, Pencil, Shield, ChevronDown } from 'lucide-react';

export type PermissionLevel = 'view' | 'edit' | 'admin';

export interface PermissionBadgeProps {
  /** Current permission level */
  level: PermissionLevel;
  /** Whether the permission can be changed */
  editable?: boolean;
  /** Callback when permission level changes */
  onChange?: (level: PermissionLevel) => void;
  /** Size of the badge */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

const sizeStyles = {
  sm: {
    badge: 'px-2 py-0.5 text-xs gap-1',
    icon: 'w-3 h-3',
    dropdown: 'text-xs',
  },
  md: {
    badge: 'px-2.5 py-1 text-sm gap-1.5',
    icon: 'w-4 h-4',
    dropdown: 'text-sm',
  },
  lg: {
    badge: 'px-3 py-1.5 text-base gap-2',
    icon: 'w-5 h-5',
    dropdown: 'text-base',
  },
};

const levelConfig = {
  view: {
    icon: Eye,
    label: 'View',
    description: 'Can view content only',
    bg: 'bg-paper-100',
    text: 'text-ink-600',
    hoverBg: 'hover:bg-paper-200',
  },
  edit: {
    icon: Pencil,
    label: 'Edit',
    description: 'Can view and edit content',
    bg: 'bg-accent-100',
    text: 'text-accent-700',
    hoverBg: 'hover:bg-accent-200',
  },
  admin: {
    icon: Shield,
    label: 'Admin',
    description: 'Full access including sharing',
    bg: 'bg-primary-100',
    text: 'text-primary-700',
    hoverBg: 'hover:bg-primary-200',
  },
};

const levels: PermissionLevel[] = ['view', 'edit', 'admin'];

/**
 * PermissionBadge - Shows and optionally allows changing permission level.
 * 
 * Features:
 * - Three permission levels: view, edit, admin
 * - Color-coded badges with icons
 * - Dropdown for editable mode
 * - Three sizes: sm, md, lg
 */
export function PermissionBadge({
  level,
  editable = false,
  onChange,
  size = 'md',
  className = '',
}: PermissionBadgeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const styles = sizeStyles[size];
  const config = levelConfig[level];
  const Icon = config.icon;

  // Close dropdown on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleSelect = (newLevel: PermissionLevel) => {
    if (newLevel !== level) {
      onChange?.(newLevel);
    }
    setIsOpen(false);
  };

  const badge = (
    <span
      className={`
        inline-flex items-center
        ${styles.badge}
        ${config.bg}
        ${config.text}
        rounded-full
        font-medium
        ${editable ? `cursor-pointer ${config.hoverBg} transition-colors` : ''}
        ${className}
      `}
      onClick={editable ? () => setIsOpen(!isOpen) : undefined}
      role={editable ? 'button' : 'status'}
      aria-haspopup={editable ? 'listbox' : undefined}
      aria-expanded={editable ? isOpen : undefined}
      aria-label={`Permission: ${config.label}${editable ? '. Click to change.' : ''}`}
    >
      <Icon className={styles.icon} />
      {config.label}
      {editable && <ChevronDown className={`${styles.icon} opacity-60`} />}
    </span>
  );

  if (!editable) {
    return badge;
  }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {badge}
      
      {isOpen && (
        <div
          className={`
            absolute top-full left-0 mt-1
            bg-white rounded-lg shadow-lg border border-paper-200
            py-1 min-w-40 z-50
            animate-scale-in
          `}
          role="listbox"
          aria-label="Select permission level"
        >
          {levels.map((lvl) => {
            const lvlConfig = levelConfig[lvl];
            const LvlIcon = lvlConfig.icon;
            const isSelected = lvl === level;

            return (
              <button
                key={lvl}
                className={`
                  w-full px-3 py-2
                  flex items-center gap-2
                  ${styles.dropdown}
                  ${isSelected ? 'bg-paper-100' : 'hover:bg-paper-50'}
                  transition-colors
                  text-left
                `}
                onClick={() => handleSelect(lvl)}
                role="option"
                aria-selected={isSelected}
              >
                <LvlIcon className={`${styles.icon} ${lvlConfig.text}`} />
                <div className="flex-1">
                  <div className={`font-medium ${isSelected ? 'text-ink-800' : 'text-ink-700'}`}>
                    {lvlConfig.label}
                  </div>
                  <div className="text-ink-400 text-xs">
                    {lvlConfig.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PermissionBadge;
