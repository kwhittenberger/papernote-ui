import React, { useState, useRef, useEffect } from 'react';
import { Plus, X } from 'lucide-react';
import { createPortal } from 'react-dom';

/**
 * Action item for FAB menu
 */
export interface FABAction {
  /** Unique identifier */
  id: string;
  /** Icon for the action */
  icon: React.ReactNode;
  /** Label text (shown on hover/long-press) */
  label: string;
  /** Click handler */
  onClick: () => void;
  /** Disabled state */
  disabled?: boolean;
}

/**
 * FloatingActionButton component props
 */
export interface FloatingActionButtonProps {
  /** Primary action when FAB is clicked (without menu) */
  onClick?: () => void;
  /** Icon for the FAB - defaults to Plus */
  icon?: React.ReactNode;
  /** Secondary actions shown in menu */
  actions?: FABAction[];
  /** Position on screen */
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center';
  /** Color variant */
  variant?: 'primary' | 'secondary' | 'accent';
  /** Size */
  size?: 'md' | 'lg';
  /** Accessible label */
  label?: string;
  /** Extended FAB with text label */
  extended?: boolean;
  /** Text for extended FAB */
  extendedLabel?: string;
  /** Hide FAB (useful for scroll-based show/hide) */
  hidden?: boolean;
  /** Custom offset from edge (in pixels) */
  offset?: { x?: number; y?: number };
  /** Additional class names */
  className?: string;
}

const positionClasses = {
  'bottom-right': 'right-4 bottom-4',
  'bottom-left': 'left-4 bottom-4',
  'bottom-center': 'left-1/2 -translate-x-1/2 bottom-4',
};

const variantClasses = {
  primary: 'bg-accent-600 hover:bg-accent-700 text-white shadow-lg',
  secondary: 'bg-white hover:bg-paper-50 text-ink-700 shadow-lg border border-paper-200',
  accent: 'bg-accent-500 hover:bg-accent-600 text-white shadow-lg',
};

const sizeClasses = {
  md: 'w-14 h-14',
  lg: 'w-16 h-16',
};

const iconSizeClasses = {
  md: 'h-6 w-6',
  lg: 'h-7 w-7',
};

/**
 * FloatingActionButton - Material Design style FAB for mobile
 * 
 * A prominent button for the primary action on a screen.
 * Supports single action or expandable menu with multiple actions.
 * 
 * @example Simple FAB
 * ```tsx
 * <FloatingActionButton
 *   onClick={() => openCreateModal()}
 *   label="Create new item"
 * />
 * ```
 * 
 * @example FAB with action menu
 * ```tsx
 * <FloatingActionButton
 *   actions={[
 *     { id: 'photo', icon: <Camera />, label: 'Take Photo', onClick: takePhoto },
 *     { id: 'upload', icon: <Upload />, label: 'Upload File', onClick: uploadFile },
 *     { id: 'note', icon: <FileText />, label: 'Create Note', onClick: createNote },
 *   ]}
 * />
 * ```
 * 
 * @example Extended FAB
 * ```tsx
 * <FloatingActionButton
 *   extended
 *   extendedLabel="New Task"
 *   icon={<Plus />}
 *   onClick={createTask}
 * />
 * ```
 */
export default function FloatingActionButton({
  onClick,
  icon,
  actions,
  position = 'bottom-right',
  variant = 'primary',
  size = 'md',
  label = 'Action button',
  extended = false,
  extendedLabel,
  hidden = false,
  offset,
  className = '',
}: FloatingActionButtonProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fabRef = useRef<HTMLButtonElement>(null);
  const hasMenu = actions && actions.length > 0;

  // Close menu on escape
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Close menu on click outside
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (fabRef.current && !fabRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const handleClick = () => {
    if (hasMenu) {
      setIsMenuOpen(!isMenuOpen);
    } else if (onClick) {
      onClick();
    }
  };

  const handleActionClick = (action: FABAction) => {
    if (!action.disabled) {
      action.onClick();
      setIsMenuOpen(false);
    }
  };

  // Custom offset styles
  const offsetStyle = offset ? {
    ...(offset.x !== undefined && position.includes('right') ? { right: `${offset.x}px` } : {}),
    ...(offset.x !== undefined && position.includes('left') ? { left: `${offset.x}px` } : {}),
    ...(offset.y !== undefined ? { bottom: `${offset.y}px` } : {}),
  } : {};

  const fabContent = (
    <div
      className={`
        fixed z-40 transition-all duration-300
        ${positionClasses[position]}
        ${hidden ? 'translate-y-20 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}
        ${className}
      `}
      style={{
        ...offsetStyle,
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      {/* Action Menu */}
      {hasMenu && isMenuOpen && (
        <div className="absolute bottom-full mb-3 flex flex-col-reverse gap-3 items-center">
          {actions.map((action, index) => (
            <div
              key={action.id}
              className="flex items-center gap-3 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Label */}
              <span className="bg-ink-900/80 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap">
                {action.label}
              </span>
              
              {/* Mini FAB */}
              <button
                onClick={() => handleActionClick(action)}
                disabled={action.disabled}
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  transition-all duration-200
                  ${action.disabled
                    ? 'bg-paper-200 text-ink-400 cursor-not-allowed'
                    : 'bg-white text-ink-700 shadow-lg hover:bg-paper-50 active:scale-95'
                  }
                `}
                aria-label={action.label}
              >
                {action.icon}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Backdrop for menu */}
      {hasMenu && isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 -z-10 animate-fade-in"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main FAB */}
      <button
        ref={fabRef}
        onClick={handleClick}
        className={`
          ${extended ? 'px-6 rounded-full' : 'rounded-full'}
          ${extended ? 'h-14' : sizeClasses[size]}
          ${variantClasses[variant]}
          flex items-center justify-center gap-2
          transition-all duration-200
          active:scale-95
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-400
        `}
        aria-label={label}
        aria-expanded={hasMenu ? isMenuOpen : undefined}
        aria-haspopup={hasMenu ? 'menu' : undefined}
      >
        {hasMenu && isMenuOpen ? (
          <X className={iconSizeClasses[size]} />
        ) : (
          icon || <Plus className={iconSizeClasses[size]} />
        )}
        {extended && extendedLabel && (
          <span className="font-medium">{extendedLabel}</span>
        )}
      </button>
    </div>
  );

  // Render via portal to ensure proper stacking
  return createPortal(fabContent, document.body);
}

/**
 * Hook for scroll-based FAB visibility
 * 
 * @example
 * ```tsx
 * const { hidden, scrollDirection } = useFABScroll();
 * <FloatingActionButton hidden={hidden} />
 * ```
 */
export function useFABScroll(threshold = 10): { hidden: boolean; scrollDirection: 'up' | 'down' | null } {
  const [hidden, setHidden] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          setHidden(true);
          setScrollDirection('down');
        } else {
          setHidden(false);
          setScrollDirection('up');
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { hidden, scrollDirection };
}
