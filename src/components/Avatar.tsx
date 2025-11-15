// Avatar Component - User avatar with initials or image
// Displays user avatars with automatic initials generation or custom images

import React from 'react';

export interface AvatarProps {
  /** User's first name (for initials) */
  firstName?: string;
  /** User's last name (for initials) */
  lastName?: string;
  /** Fallback text (used if firstName/lastName not provided) */
  fallbackText?: string;
  /** Avatar image URL (if provided, shows image instead of initials) */
  imageUrl?: string;
  /** Size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Custom className for the container */
  className?: string;
}

/**
 * Avatar component that displays:
 * - User initials in a colored circle (default)
 * - Custom image if imageUrl is provided
 * 
 * Size variants:
 * - xs: 24px (h-6 w-6, text-xs)
 * - sm: 32px (h-8 w-8, text-sm)
 * - md: 48px (h-12 w-12, text-base)
 * - lg: 64px (h-16 w-16, text-lg)
 * - xl: 96px (h-24 w-24, text-2xl)
 */
export const Avatar: React.FC<AvatarProps> = ({
  firstName,
  lastName,
  fallbackText = 'U',
  imageUrl,
  size = 'md',
  className = '',
}) => {
  // Generate initials
  const getInitials = (): string => {
    if (firstName && lastName) {
      return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    }
    if (firstName) {
      return firstName.charAt(0).toUpperCase();
    }
    if (lastName) {
      return lastName.charAt(0).toUpperCase();
    }
    return fallbackText.charAt(0).toUpperCase();
  };

  // Size class mappings
  const sizeClasses = {
    xs: 'h-6 w-6',
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24',
  };

  const textSizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-2xl',
  };

  if (imageUrl) {
    return (
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden shadow-lg ${className}`}>
        <img
          src={imageUrl}
          alt="User avatar"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`
        ${sizeClasses[size]}
        rounded-full
        flex items-center justify-center
        shadow-lg
        bg-slate-500
        ${className}
      `}
    >
      <span
        className={`
          ${textSizeClasses[size]}
          font-bold
          text-white
          select-none
        `}
        style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
      >
        {getInitials()}
      </span>
    </div>
  );
};

export default Avatar;
