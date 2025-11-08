import { User, Settings, LogOut, ChevronDown } from 'lucide-react';
import Dropdown, { type DropdownItem } from './Dropdown';

export interface UserProfileButtonProps {
  userName: string;
  userEmail?: string;
  userTitle?: string;
  initials: string;
  isOnline?: boolean;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
  dropdownItems?: DropdownItem[];
  className?: string;
}

export default function UserProfileButton({
  userName,
  userEmail,
  userTitle,
  initials,
  isOnline = true,
  onProfileClick,
  onSettingsClick,
  onLogoutClick,
  dropdownItems,
  className = '',
}: UserProfileButtonProps) {
  // Build dropdown items
  const defaultItems: DropdownItem[] = [];

  if (onProfileClick) {
    defaultItems.push({
      id: 'profile',
      label: 'View Profile',
      icon: <User className="h-4 w-4" />,
      onClick: onProfileClick,
    });
  }

  if (onSettingsClick) {
    defaultItems.push({
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="h-4 w-4" />,
      onClick: onSettingsClick,
    });
  }

  if (onLogoutClick) {
    if (defaultItems.length > 0) {
      defaultItems.push({
        id: 'divider-1',
        label: '',
        divider: true,
      });
    }
    defaultItems.push({
      id: 'logout',
      label: 'Sign Out',
      icon: <LogOut className="h-4 w-4" />,
      onClick: onLogoutClick,
      variant: 'danger',
    });
  }

  // Use custom items if provided, otherwise use default items
  const items = dropdownItems || defaultItems;

  // Trigger button
  const trigger = (
    <button
      className={`
        w-full flex items-center gap-2 p-2.5 rounded-lg
        bg-white bg-subtle-grain border border-paper-300
        hover:bg-paper-50 transition-colors duration-200 group
        ${className}
      `}
      aria-haspopup="true"
    >
      {/* Avatar with Status */}
      <div className="relative flex-shrink-0">
        <div className="h-9 w-9 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white text-xs font-bold">{initials}</span>
        </div>
        {/* Online Status Indicator */}
        <div
          className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white ${
            isOnline ? 'bg-success-500' : 'bg-ink-400'
          }`}
        />
      </div>

      {/* User Info */}
      <div className="flex-1 text-left min-w-0 overflow-hidden">
        <p className="text-xs font-semibold text-ink-900 truncate leading-tight">{userName}</p>
        <p className="text-[10px] text-ink-500 truncate leading-tight mt-0.5">{userTitle || userEmail || ''}</p>
      </div>

      {/* Chevron */}
      <ChevronDown className="h-3.5 w-3.5 text-ink-400 group-hover:text-ink-600 transition-all duration-200 flex-shrink-0" />
    </button>
  );

  return (
    <Dropdown
      trigger={trigger}
      items={items}
      align="left"
    />
  );
}
