import { Users, User } from 'lucide-react';
import { CollaboratorAvatars, Collaborator } from './CollaboratorAvatars';

export interface SharedBadgeProps {
  /** Array of people this content is shared with */
  sharedWith: Collaborator[];
  /** Whether the user owns this content or was shared with them */
  variant: 'owned' | 'shared';
  /** Size of the badge */
  size?: 'sm' | 'md' | 'lg';
  /** Maximum avatars to display */
  maxDisplay?: number;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

const sizeStyles = {
  sm: {
    badge: 'px-2 py-1 gap-1.5 text-xs',
    icon: 'w-3.5 h-3.5',
  },
  md: {
    badge: 'px-2.5 py-1.5 gap-2 text-sm',
    icon: 'w-4 h-4',
  },
  lg: {
    badge: 'px-3 py-2 gap-2.5 text-base',
    icon: 'w-5 h-5',
  },
};

const variantConfig = {
  owned: {
    bg: 'bg-accent-50',
    border: 'border-accent-200',
    text: 'text-accent-700',
    icon: Users,
    label: 'Shared by you',
  },
  shared: {
    bg: 'bg-primary-50',
    border: 'border-primary-200',
    text: 'text-primary-700',
    icon: User,
    label: 'Shared with you',
  },
};

/**
 * SharedBadge - Indicator showing content is shared with others.
 * 
 * Features:
 * - Two variants: owned (you shared it) or shared (shared with you)
 * - Shows collaborator avatars
 * - Displays count of collaborators
 * - Three sizes: sm, md, lg
 * - Optional click handler
 */
export function SharedBadge({
  sharedWith,
  variant,
  size = 'md',
  maxDisplay = 3,
  onClick,
  className = '',
}: SharedBadgeProps) {
  const styles = sizeStyles[size];
  const config = variantConfig[variant];
  const Icon = config.icon;

  const count = sharedWith.length;
  
  if (count === 0) {
    return null;
  }

  return (
    <div
      className={`
        inline-flex items-center
        ${styles.badge}
        ${config.bg}
        border ${config.border}
        rounded-full
        ${onClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}
        ${className}
      `}
      onClick={onClick}
      role={onClick ? 'button' : 'status'}
      aria-label={`${config.label} with ${count} ${count === 1 ? 'person' : 'people'}`}
    >
      <Icon className={`${styles.icon} ${config.text}`} />
      
      {count <= maxDisplay ? (
        <CollaboratorAvatars
          collaborators={sharedWith}
          max={maxDisplay}
          size={size === 'lg' ? 'md' : 'sm'}
        />
      ) : (
        <span className={`font-medium ${config.text}`}>
          {count} {count === 1 ? 'person' : 'people'}
        </span>
      )}
    </div>
  );
}

export default SharedBadge;
