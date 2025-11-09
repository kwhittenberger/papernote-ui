// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
/**
 * RelationshipManager Component
 * 
 * Manages account-user staff assignments (Account Manager, Technical Contact, etc.)
 * Displays inline editable table with add/edit/delete functionality
 * 
 * Features:
 * - Add/Edit/Delete staff assignments
 * - Dropdown for User selection
 * - Dropdown for Relationship Type (Account Manager, Technical Contact, etc.)
 * - Conditional Split Rate field (only for relationship types that allow it)
 * - Assignment Sequence for ordering
 * - Effective Date and End Date for temporal tracking
 * - Notes field for additional context
 * - Primary checkbox (mark primary relationship for each type)
 * - Active checkbox (soft delete capability)
 * 
 * Integration:
 * - Used within Accounts FormModal on the Relationships tab
 * - Manages AccountStaffAssignmentDto[] array
 * - Emits onChange events for parent form tracking
 */

import { useState } from 'react';
import { Plus, Edit2, Trash2, Check, X } from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface AccountStaffAssignmentDto {
  id?: string;
  accountId: string;
  userId: string;
  relationshipTypeId: number;
  relationshipTypeName?: string;
  userName?: string;
  userFullName?: string;
  splitRate?: number;
  assignmentSequence?: number;
  isPrimary: boolean;
  isActive: boolean;
  effectiveDate?: string;
  endDate?: string;
  notes?: string;
}

export interface RelationshipType {
  id: number;
  name: string;
  description?: string;
  allowsSplitRate: boolean;
}

export interface UserLookup {
  id: string;
  userName: string;
  displayName: string;
  territory?: string;
}

export interface RelationshipManagerUIProps {
  accountId?: string;
  relationships: AccountStaffAssignmentDto[];
  relationshipTypes: RelationshipType[];
  users: UserLookup[];
  onChange: (relationships: AccountStaffAssignmentDto[]) => void;
  readOnly?: boolean;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function RelationshipManagerUI({
  accountId = '',
  relationships,
  relationshipTypes,
  users,
  onChange,
  readOnly = false,
}: RelationshipManagerUIProps) {
  // ============================================================================
  // STATE
  // ============================================================================

  // Lookup data provided via props
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  
  // Form state for add/edit
  const [formData, setFormData] = useState<Partial<AccountStaffAssignmentDto>>({
    userId: '',
    relationshipTypeId: 0,
    splitRate: undefined,
    assignmentSequence: undefined,
    isPrimary: false,
    isActive: true,
    effectiveDate: undefined,
    endDate: undefined,
    notes: undefined,
  });

  // ============================================================================
  // EFFECTS
  // ============================================================================

  // Lookup data provided via props - no data loading needed

  // ============================================================================
  // HANDLERS - CRUD OPERATIONS
  // ============================================================================

  const handleAdd = () => {
    setIsAdding(true);
    setEditingIndex(null);
    // Find Account Manager relationship type (should be ID 1)
    const accountManagerType = relationshipTypes.find(t => t.name === 'Account Manager');
    setFormData({
      userId: '',
      relationshipTypeId: accountManagerType?.id || 1, // Default to Account Manager
      splitRate: undefined,
      assignmentSequence: undefined,
      isPrimary: false,
      isActive: true,
      effectiveDate: undefined,
      endDate: undefined,
      notes: undefined,
    });
  };

  const handleEdit = (index: number) => {
    const relationship = relationships[index];
    setEditingIndex(index);
    setIsAdding(false);
    setFormData({
      userId: relationship.userId,
      relationshipTypeId: relationship.relationshipTypeId,
      splitRate: relationship.splitRate,
      assignmentSequence: relationship.assignmentSequence,
      isPrimary: relationship.isPrimary,
      isActive: relationship.isActive,
      effectiveDate: relationship.effectiveDate,
      endDate: relationship.endDate,
      notes: relationship.notes,
    });
  };

  const handleSave = () => {
    // Validate required fields
    if (!formData.userId) {
      alert('Please select an Account Manager');
      return;
    }

    // Ensure relationship type is set to Account Manager
    const accountManagerType = relationshipTypes.find(t => t.name === 'Account Manager');
    if (!formData.relationshipTypeId && accountManagerType) {
      formData.relationshipTypeId = accountManagerType.id;
    }

    // Validate split rate is required for Account Manager
    if (!formData.splitRate || formData.splitRate <= 0) {
      alert('Split Rate is required for Account Managers');
      return;
    }

    // Get user and type details for display
    const user = users.find((u) => u.id === formData.userId);
    const type = relationshipTypes.find((t) => t.id === formData.relationshipTypeId);

    const newRelationship: AccountStaffAssignmentDto = {
      id: isAdding ? undefined : relationships[editingIndex!]?.id,
      accountId: accountId,
      userId: formData.userId!,
      relationshipTypeId: formData.relationshipTypeId!,
      relationshipTypeName: type?.name,
      userName: user?.userName,
      userFullName: user?.displayName,
      splitRate: formData.splitRate, // Always include split rate for Account Managers
      assignmentSequence: formData.assignmentSequence,
      isPrimary: formData.isPrimary ?? false,
      isActive: formData.isActive ?? true,
      effectiveDate: formData.effectiveDate,
      endDate: formData.endDate,
      notes: formData.notes,
    };

    let updatedRelationships: AccountStaffAssignmentDto[];
    if (isAdding) {
      // Add new relationship
      updatedRelationships = [...relationships, newRelationship];
    } else {
      // Update existing relationship
      updatedRelationships = [...relationships];
      updatedRelationships[editingIndex!] = newRelationship;
    }

    onChange(updatedRelationships);
    handleCancel();
  };

  const handleDelete = (index: number) => {
    if (window.confirm('Are you sure you want to remove this relationship?')) {
      const updatedRelationships = relationships.filter((_, i) => i !== index);
      onChange(updatedRelationships);
    }
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingIndex(null);
    setFormData({
      userId: '',
      relationshipTypeId: 0,
      splitRate: undefined,
      assignmentSequence: undefined,
      isPrimary: false,
      isActive: true,
      effectiveDate: undefined,
      endDate: undefined,
      notes: undefined,
    });
  };

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
    <div className="space-y-4">
      {/* Relationships Table */}
      {relationships.length > 0 ? (
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Account Manager
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Split Rate
                </th>
                <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Primary
                </th>
                <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Active
                </th>
                {!readOnly && (
                                    <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {relationships.map((relationship, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm">
                    <div className="font-medium text-gray-900">
                      {relationship.userFullName || relationship.userName || 'Unknown User'}
                    </div>
                  </td>
                  <td className="px-3 py-3 text-sm text-gray-700">
                    {relationship.splitRate !== undefined && relationship.splitRate !== null
                      ? `${relationship.splitRate.toFixed(2)}%`
                      : '—'}
                  </td>
                  <td className="px-3 py-3 text-sm text-center">
                    {relationship.isPrimary ? (
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        Primary
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-3 py-3 text-sm text-center">
                    {relationship.isActive ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    ) : (
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                        Inactive
                      </span>
                    )}
                  </td>
                  {!readOnly && (
                    <td className="px-3 py-3 text-sm text-right space-x-2">
                      <button
                        onClick={() => handleEdit(index)}
                        disabled={isAdding || editingIndex !== null}
                        className="inline-flex items-center text-blue-600 hover:text-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Edit relationship"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        disabled={isAdding || editingIndex !== null}
                                                className="inline-flex items-center text-red-600 hover:text-red-900 disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Remove relationship"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
                <div className="text-center py-8 text-sm text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
          <p>No account managers assigned</p>
          {!readOnly && (
            <p className="mt-1 text-xs">Click "Add Account Manager" to get started</p>
          )}
        </div>
      )}

      {/* Add button */}
      <div className="flex items-center justify-end">
        {!readOnly && !isAdding && editingIndex === null && (
          <button
            onClick={handleAdd}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Account Manager
          </button>
        )}
      </div>

      {/* Add/Edit Form */}
      {(isAdding || editingIndex !== null) && (
        <div className="border rounded-lg p-4 bg-gray-50 space-y-3">
          <div className="grid grid-cols-1 gap-3">
            {/* User Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Manager <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.userId || ''}
                onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                aria-label="Account Manager"
              >
                <option value="">Select Account Manager...</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.displayName}
                  </option>
                ))}
              </select>
            </div>

            {/* Split Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Split Rate (%) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="100"
                value={formData.splitRate || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    splitRate: e.target.value ? parseFloat(e.target.value) : undefined,
                  })
                }
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="0.00"
              />
            </div>

            {/* Assignment Sequence */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Assignment Sequence
              </label>
              <input
                type="number"
                min="0"
                value={formData.assignmentSequence ?? ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    assignmentSequence: e.target.value ? parseInt(e.target.value, 10) : undefined,
                  })
                }
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Optional ordering sequence"
              />
            </div>

            {/* Effective Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Effective Date
              </label>
              <input
                type="date"
                value={formData.effectiveDate || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    effectiveDate: e.target.value || undefined,
                  })
                }
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                aria-label="Effective Date"
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                value={formData.endDate || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    endDate: e.target.value || undefined,
                  })
                }
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                aria-label="End Date"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes
              </label>
              <textarea
                value={formData.notes || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    notes: e.target.value || undefined,
                  })
                }
                rows={3}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Additional notes or context"
              />
            </div>

            {/* Checkboxes */}
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.isPrimary ?? false}
                  onChange={(e) =>
                    setFormData({ ...formData, isPrimary: e.target.checked })
                  }
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Primary</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.isActive ?? true}
                  onChange={(e) =>
                    setFormData({ ...formData, isActive: e.target.checked })
                  }
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Active</span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-2 pt-2 border-t">
            <button
              onClick={handleCancel}
              className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <X className="h-3 w-3 mr-1" />
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Check className="h-3 w-3 mr-1" />
              {isAdding ? 'Add' : 'Save'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
