// Copyright (c) 2025 kwhittenberger. All rights reserved.
// Generic Permission Gate Component

import React from 'react';

export interface PermissionGateProps {
  children: React.ReactNode;
  /**
   * Whether the user is allowed to see the content
   */
  allowed: boolean;
  /**
   * Optional fallback UI when user doesn't have permission
   */
  fallback?: React.ReactNode;
}

/**
 * Generic component for conditionally rendering content based on permissions
 * 
 * This is a presentational component - permission logic should be handled
 * by the consuming application using hooks/contexts.
 * 
 * @example
 * ```tsx
 * // In your app
 * const { hasPermission } = usePermissions();
 * 
 * <PermissionGate allowed={hasPermission('canManageUsers')}>
 *   <button>Delete User</button>
 * </PermissionGate>
 * ```
 * 
 * @example
 * ```tsx
 * // With fallback
 * <PermissionGate 
 *   allowed={hasPermission('canManageUsers')}
 *   fallback={<div>You don't have permission</div>}
 * >
 *   <UserManagementUI />
 * </PermissionGate>
 * ```
 */
export const PermissionGate: React.FC<PermissionGateProps> = ({
  children,
  allowed,
  fallback = null
}) => {
  if (!allowed) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default PermissionGate;
