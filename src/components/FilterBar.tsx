// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import { X } from 'lucide-react';
import Input from './Input';
import Select, { type SelectOption } from './Select';
import Button from './Button';

export interface FilterConfig {
  key: string;
  label: string;
  type: 'text' | 'select' | 'date' | 'number' | 'boolean';
  placeholder?: string;
  options?: Array<{ label: string; value: unknown }>;
}

export interface FilterBarProps {
  filters: FilterConfig[];
  values: Record<string, unknown>;
  onChange: (values: Record<string, unknown>) => void;
  className?: string;
  onClear?: () => void;
  showClearButton?: boolean;
}

export default function FilterBar({
  filters,
  values,
  onChange,
  className = '',
  onClear,
  showClearButton = false,
}: FilterBarProps) {
  const handleFilterChange = (key: string, value: unknown) => {
    onChange({
      ...values,
      [key]: value,
    });
  };

  const handleClear = () => {
    if (onClear) {
      onClear();
    } else {
      // Default clear: set all values to null/empty
      const clearedValues: Record<string, unknown> = {};
      filters.forEach(filter => {
        clearedValues[filter.key] = filter.type === 'text' ? '' : null;
      });
      onChange(clearedValues);
    }
  };

  const renderFilter = (filter: FilterConfig) => {
    const value = values[filter.key];

    switch (filter.type) {
      case 'text':
        return (
          <Input
            type="text"
            placeholder={filter.placeholder || `Filter by ${filter.label}`}
            value={(value as string) || ''}
            onChange={(e) => handleFilterChange(filter.key, e.target.value)}
          />
        );

      case 'select': {
        const selectOptions: SelectOption[] = [
          { value: '', label: `All ${filter.label}` },
          ...(filter.options?.map(opt => ({
            value: String(opt.value),
            label: opt.label,
          })) || []),
        ];

        return (
          <Select
            options={selectOptions}
            value={String(value || '')}
            onChange={(newValue) => handleFilterChange(filter.key, newValue || null)}
          />
        );
      }

      case 'date':
        return (
          <input
            type="date"
            value={(value as string) || ''}
            onChange={(e) => handleFilterChange(filter.key, e.target.value)}
            className="input"
          />
        );

      case 'number':
        return (
          <input
            type="number"
            placeholder={filter.placeholder || `Filter by ${filter.label}`}
            value={value !== null && value !== undefined ? String(value) : ''}
            onChange={(e) =>
              handleFilterChange(
                filter.key,
                e.target.value ? Number(e.target.value) : null
              )
            }
            className="input"
          />
        );

      case 'boolean': {
        const boolOptions: SelectOption[] = [
          { value: '', label: 'All' },
          { value: 'true', label: 'Yes' },
          { value: 'false', label: 'No' },
        ];

        return (
          <Select
            options={boolOptions}
            value={value === null || value === undefined ? '' : String(value)}
            onChange={(newValue) =>
              handleFilterChange(
                filter.key,
                newValue === '' ? null : newValue === 'true'
              )
            }
          />
        );
      }

      default:
        return null;
    }
  };

  if (filters.length === 0) return null;

  return (
    <div className={`bg-white bg-subtle-grain border border-paper-200 rounded-lg shadow-sm p-4 ${className}`}>
      <div className="flex items-start justify-between gap-4 flex-wrap">
        {/* Filters */}
        <div className="flex-1 flex flex-wrap gap-4">
          {filters.map((filter) => (
            <div key={filter.key} className="flex flex-col space-y-1 min-w-[200px]">
              <label className="label">{filter.label}</label>
              {renderFilter(filter)}
            </div>
          ))}
        </div>

        {/* Clear Button */}
        {showClearButton && (
          <div className="flex items-end">
            <Button
              variant="ghost"
              size="md"
              onClick={handleClear}
              icon={<X className="h-4 w-4" />}
              iconPosition="left"
            >
              Clear
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
