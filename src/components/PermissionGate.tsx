// Copyright (c) 2025 kwhittenberger. All rights reserved.
// Generic Permission Gate Component

import React from 'react';

export interface PermissionGateProps {
  children: React.ReactNode;
  /**
   * Direct boolean check - whether the user is allowed to see the content
   * Use this for simple boolean checks or when you've already computed permission logic
   */
  allowed?: boolean;
  /**
   * Single permission string to check
   * Requires permissionChecker function to be provided
   */
  permission?: string;
  /**
   * Multiple permission strings to check
   * Requires permissionChecker function to be provided
   */
  permissions?: string[];
  /**
   * If true, user must have ALL permissions. If false (default), user needs ANY permission
   */
  requireAll?: boolean;
  /**
   * Single role string to check
   * Requires roleChecker function to be provided
   */
  role?: string;
  /**
   * Multiple role strings to check
   * Requires roleChecker function to be provided
   */
  roles?: string[];
  /**
   * If true, user must have ALL roles. If false (default), user needs ANY role
   */
  requireAllRoles?: boolean;
  /**
   * Optional fallback UI when user doesn't have permission
   */
  fallback?: React.ReactNode;
  /**
   * Function to check if user has a specific permission
   * Should be provided by the consuming application (e.g., via context or props)
   */
  permissionChecker?: (permission: string) => boolean;
  /**
   * Function to check if user has a specific role
   * Should be provided by the consuming application (e.g., via context or props)
   */
  roleChecker?: (role: string) => boolean;
}

/**
 * Generic component for conditionally rendering content based on permissions or roles
 * 
 * Supports multiple usage patterns:
 * 1. Simple boolean check (allowed prop)
 * 2. Permission-based check (permission/permissions props + permissionChecker)
 * 3. Role-based check (role/roles props + roleChecker)
 * 4. Combined permission and role checks
 * 
 * @example
 * ```tsx
 * // Simple boolean check
 * const { hasPermission } = usePermissions();
 * <PermissionGate allowed={hasPermission('canManageUsers')}>
 *   <button>Delete User</button>
 * </PermissionGate>
 * ```
 * 
 * @example
 * ```tsx
 * // Using permission checker function
 * const { hasPermission } = usePermissions();
 * <PermissionGate permission="canManageUsers" permissionChecker={hasPermission}>
 *   <button>Delete User</button>
 * </PermissionGate>
 * ```
 * 
 * @example
 * ```tsx
 * // Multiple permissions (OR logic - default)
 * <PermissionGate 
 *   permissions={['canManageUsers', 'canManageRoles']} 
 *   permissionChecker={hasPermission}
 * >
 *   <Link to="/admin">Admin Panel</Link>
 * </PermissionGate>
 * ```
 * 
 * @example
 * ```tsx
 * // Multiple permissions (AND logic)
 * <PermissionGate 
 *   permissions={['canViewCommissions', 'canExportData']} 
 *   requireAll
 *   permissionChecker={hasPermission}
 * >
 *   <button>Export Commissions</button>
 * </PermissionGate>
 * ```
 * 
 * @example
 * ```tsx
 * // Role-based check
 * const { hasRole } = useAuth();
 * <PermissionGate role="Admin" roleChecker={hasRole}>
 *   <button>System Settings</button>
 * </PermissionGate>
 * ```
 * 
 * @example
 * ```tsx
 * // With fallback UI
 * <PermissionGate 
 *   permission="canManageUsers"
 *   permissionChecker={hasPermission}
 *   fallback={<div>You don't have permission</div>}
 * >
 *   <UserManagementUI />
 * </PermissionGate>
 * ```
 */
export const PermissionGate: React.FC<PermissionGateProps> = ({
  children,
  allowed,
  permission,
  permissions,
  requireAll = false,
  role,
  roles,
  requireAllRoles = false,
  fallback = null,
  permissionChecker,
  roleChecker
}) => {
  // If allowed prop is explicitly provided, use it directly
  if (allowed !== undefined) {
    return allowed ? <>{children}</> : <>{fallback}</>;
  }

  let hasAccess = true;

  // Single permission check
  if (permission && permissionChecker) {
    if (!permissionChecker(permission)) {
      hasAccess = false;
    }
  }

  // Multiple permissions check
  if (permissions && permissions.length > 0 && permissionChecker) {
    const permissionResults = permissions.map(p => permissionChecker(p));
    const permissionAccess = requireAll 
      ? permissionResults.every(r => r === true)
      : permissionResults.some(r => r === true);
    
    if (!permissionAccess) {
      hasAccess = false;
    }
  }

  // Single role check
  if (role && roleChecker) {
    if (!roleChecker(role)) {
      hasAccess = false;
    }
  }

  // Multiple roles check
  if (roles && roles.length > 0 && roleChecker) {
    const roleResults = roles.map(r => roleChecker(r));
    const roleAccess = requireAllRoles
      ? roleResults.every(r => r === true)
      : roleResults.some(r => r === true);
    
    if (!roleAccess) {
      hasAccess = false;
    }
  }

  // Render based on access check
  if (!hasAccess) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default PermissionGate;
