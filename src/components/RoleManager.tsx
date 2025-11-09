// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
/**
 * RoleManager - Dual-list role assignment component
 * 
 * Provides an intuitive interface for assigning/unassigning roles
 * with drag-and-drop support and bulk operations
 */

import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ChevronsRight, ChevronsLeft } from 'lucide-react';
import './RoleManager.css';

export interface Role {
  name: string;
  description?: string;
}

export interface RoleManagerProps {
  availableRoles: Role[];
  assignedRoles: string[];
  onChange: (assignedRoles: string[]) => void;
  height?: string;
}

export function RoleManager({
  availableRoles,
  assignedRoles,
  onChange,
  height: _height = '400px'
}: RoleManagerProps) {
  const [assigned, setAssigned] = useState<string[]>(assignedRoles);
  const [selectedAvailable, setSelectedAvailable] = useState<string[]>([]);
  const [selectedAssigned, setSelectedAssigned] = useState<string[]>([]);

  // Update local state when prop changes (for initial load)
  useEffect(() => {
    setAssigned(assignedRoles);
  }, [assignedRoles]);

  // Get unassigned roles
  const unassigned = availableRoles.filter(role => !assigned.includes(role.name));

  // Notify parent of changes
  const updateAssigned = (newAssigned: string[]) => {
    setAssigned(newAssigned);
    onChange(newAssigned);
  };

  // Assign selected roles
  const assignSelected = () => {
    const newAssigned = [...assigned, ...selectedAvailable];
    updateAssigned(newAssigned);
    setSelectedAvailable([]);
  };

  // Unassign selected roles
  const unassignSelected = () => {
    const newAssigned = assigned.filter(role => !selectedAssigned.includes(role));
    updateAssigned(newAssigned);
    setSelectedAssigned([]);
  };

  // Assign all roles
  const assignAll = () => {
    const newAssigned = availableRoles.map(role => role.name);
    updateAssigned(newAssigned);
    setSelectedAvailable([]);
  };

  // Unassign all roles
  const unassignAll = () => {
    updateAssigned([]);
    setSelectedAssigned([]);
  };

  // Toggle selection in available list
  const toggleAvailableSelection = (roleName: string) => {
    setSelectedAvailable(prev =>
      prev.includes(roleName)
        ? prev.filter(r => r !== roleName)
        : [...prev, roleName]
    );
  };

  // Toggle selection in assigned list
  const toggleAssignedSelection = (roleName: string) => {
    setSelectedAssigned(prev =>
      prev.includes(roleName)
        ? prev.filter(r => r !== roleName)
        : [...prev, roleName]
    );
  };

  return (
    <div className="flex gap-4 items-stretch">
      {/* Assigned Roles */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Assigned Roles
          </label>
          <span className="text-xs text-gray-500">{assigned.length} roles</span>
        </div>
        <div
          className="flex-1 border border-gray-300 rounded-md bg-white overflow-y-auto role-manager-list"
        >
          {assigned.length === 0 ? (
            <div className="flex items-center justify-center h-full text-sm text-gray-500">
              No roles assigned
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {assigned.map(roleName => {
                const role = availableRoles.find(r => r.name === roleName);
                return (
                  <div
                    key={roleName}
                    className={`px-3 py-2 cursor-pointer hover:bg-blue-50 transition-colors ${
                      selectedAssigned.includes(roleName) ? 'bg-blue-100' : ''
                    }`}
                    onClick={() => toggleAssignedSelection(roleName)}
                  >
                    <div className="font-medium text-sm text-gray-900">{roleName}</div>
                    {role?.description && (
                      <div className="text-xs text-gray-500 mt-0.5">{role.description}</div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex flex-col justify-center gap-2">
        <button
          type="button"
          onClick={assignSelected}
          disabled={selectedAvailable.length === 0}
          className="p-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Assign selected roles"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={assignAll}
          disabled={unassigned.length === 0}
          className="p-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Assign all roles"
        >
          <ChevronsLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={unassignSelected}
          disabled={selectedAssigned.length === 0}
          className="p-2 text-sm bg-gray-600 text-white rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Unassign selected roles"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={unassignAll}
          disabled={assigned.length === 0}
          className="p-2 text-sm bg-gray-600 text-white rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Unassign all roles"
        >
          <ChevronsRight className="h-5 w-5" />
        </button>
      </div>

      {/* Available Roles */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Available Roles
          </label>
          <span className="text-xs text-gray-500">{unassigned.length} roles</span>
        </div>
        <div
          className="flex-1 border border-gray-300 rounded-md bg-white overflow-y-auto role-manager-list"
        >
          {unassigned.length === 0 ? (
            <div className="flex items-center justify-center h-full text-sm text-gray-500">
              All roles assigned
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {unassigned.map(role => (
                <div
                  key={role.name}
                  className={`px-3 py-2 cursor-pointer hover:bg-blue-50 transition-colors ${
                    selectedAvailable.includes(role.name) ? 'bg-blue-100' : ''
                  }`}
                  onClick={() => toggleAvailableSelection(role.name)}
                >
                  <div className="font-medium text-sm text-gray-900">{role.name}</div>
                  {role.description && (
                    <div className="text-xs text-gray-500 mt-0.5">{role.description}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
