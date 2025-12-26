import { forwardRef } from 'react';
import Tooltip from './Tooltip';

export interface Collaborator {
  /** Collaborator's name */
  name: string;
  /** Optional avatar URL */
  avatar?: string;
}

export interface CollaboratorAvatarsProps {
  /** Array of collaborators to display */
  collaborators: Collaborator[];
  /** Maximum number of avatars to display before showing overflow */
  max?: number;
  /** Size of the avatars */
  size?: 'sm' | 'md' | 'lg';
  /** Click handler for the avatar stack */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

const sizeStyles = {
  sm: {
    container: 'w-6 h-6 text-xs',
    overlap: '-ml-2',
    border: 'ring-2',
  },
  md: {
    container: 'w-8 h-8 text-sm',
    overlap: '-ml-2.5',
    border: 'ring-2',
  },
  lg: {
    container: 'w-10 h-10 text-base',
    overlap: '-ml-3',
    border: 'ring-2',
  },
};

// Generate consistent color from name
function getAvatarColor(name: string): string {
  const colors = [
    'bg-accent-500',
    'bg-success-500',
    'bg-warning-500',
    'bg-error-500',
    'bg-primary-500',
  ];
  
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
}

// Get initials from name
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

/**
 * CollaboratorAvatars - Stacked avatar display for collaborators.
 * 
 * Features:
 * - Displays avatars in an overlapping stack
 * - Shows overflow indicator (+N) when exceeding max
 * - Falls back to initials when no avatar image
 * - Consistent color generation from names
 * - Tooltip showing collaborator names
 * - Three sizes: sm, md, lg
 * - Optional click handler
 */
export const CollaboratorAvatars = forwardRef<HTMLDivElement, CollaboratorAvatarsProps>(
  function CollaboratorAvatars(
    {
      collaborators,
      max = 3,
      size = 'md',
      onClick,
      className = '',
    },
    ref
  ) {
    const styles = sizeStyles[size];
    const visible = collaborators.slice(0, max);
    const overflow = collaborators.length - max;
    const hasOverflow = overflow > 0;

    const allNames = collaborators.map((c) => c.name).join(', ');
    const tooltipContent = (
      <div className="text-center">
        <div className="font-medium mb-1">Collaborators</div>
        <div className="text-ink-300">{allNames}</div>
      </div>
    );

    const avatarStack = (
      <div
        ref={ref}
        className={`
          inline-flex items-center
          ${onClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}
          ${className}
        `}
        onClick={onClick}
        role={onClick ? 'button' : 'group'}
        aria-label={`${collaborators.length} collaborator${collaborators.length !== 1 ? 's' : ''}`}
      >
        {visible.map((collaborator, index) => (
          <div
            key={`${collaborator.name}-${index}`}
            className={`
              ${styles.container}
              ${index > 0 ? styles.overlap : ''}
              ${styles.border}
              ring-white
              rounded-full
              flex items-center justify-center
              overflow-hidden
              ${collaborator.avatar ? '' : getAvatarColor(collaborator.name)}
              text-white font-medium
              shrink-0
            `}
            style={{ zIndex: visible.length - index }}
          >
            {collaborator.avatar ? (
              <img
                src={collaborator.avatar}
                alt={collaborator.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span>{getInitials(collaborator.name)}</span>
            )}
          </div>
        ))}

        {hasOverflow && (
          <div
            className={`
              ${styles.container}
              ${styles.overlap}
              ${styles.border}
              ring-white
              rounded-full
              flex items-center justify-center
              bg-paper-300
              text-ink-600 font-medium
              shrink-0
            `}
            style={{ zIndex: 0 }}
          >
            +{overflow}
          </div>
        )}
      </div>
    );

    return (
      <Tooltip content={tooltipContent} position="top">
        {avatarStack}
      </Tooltip>
    );
  }
);

export default CollaboratorAvatars;
