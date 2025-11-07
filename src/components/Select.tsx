// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React, { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown, Search } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  searchable?: boolean;
  disabled?: boolean;
  label?: string;
  helperText?: string;
  error?: string;
}

export default function Select({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  searchable = false,
  disabled = false,
  label,
  helperText,
  error,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const selectRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  const filteredOptions = searchable && searchQuery
    ? options.filter(opt =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label className="label">
          {label}
        </label>
      )}

      {/* Select Container */}
      <div ref={selectRef} className="relative">
        {/* Trigger Button */}
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={`
            input w-full flex items-center justify-between
            ${error ? 'border-error-400 focus:border-error-400 focus:ring-error-400' : ''}
            ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
          `}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className={`flex items-center gap-2 ${selectedOption ? 'text-ink-800' : 'text-ink-400'}`}>
            {selectedOption?.icon && <span>{selectedOption.icon}</span>}
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown className={`h-4 w-4 text-ink-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-white bg-subtle-grain rounded-lg shadow-lg border border-paper-200 max-h-60 overflow-hidden animate-fade-in">
            {/* Search Input */}
            {searchable && (
              <div className="p-2 border-b border-paper-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full pl-9 pr-3 py-2 text-sm border border-paper-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400"
                  />
                </div>
              </div>
            )}

            {/* Options List */}
            <div className="overflow-y-auto max-h-48" role="listbox">
              {filteredOptions.length === 0 ? (
                <div className="px-4 py-3 text-sm text-ink-500 text-center">
                  No options found
                </div>
              ) : (
                filteredOptions.map((option) => {
                  const isSelected = option.value === value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => !option.disabled && handleSelect(option.value)}
                      disabled={option.disabled}
                      className={`
                        w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors
                        ${isSelected ? 'bg-accent-50 text-accent-900' : 'text-ink-700'}
                        ${option.disabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-paper-50 cursor-pointer'}
                      `}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <span className="flex items-center gap-2">
                        {option.icon && <span>{option.icon}</span>}
                        {option.label}
                      </span>
                      {isSelected && <Check className="h-4 w-4 text-accent-600" />}
                    </button>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>

      {/* Helper Text or Error */}
      {(helperText || error) && (
        <p className={`mt-2 text-xs ${error ? 'text-error-600' : 'text-ink-600'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
}
