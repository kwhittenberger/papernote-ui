// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React, { useState, useRef, useEffect } from 'react';
import { Check } from 'lucide-react';

export interface ColorPickerProps {
  /** Current color value (hex format: #RRGGBB) */
  value?: string;
  /** Callback when color changes */
  onChange?: (color: string) => void;
  /** Preset color swatches */
  presets?: string[];
  /** Label text */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Show alpha/transparency control */
  showAlpha?: boolean;
}

const defaultPresets = [
  '#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899',
  '#6B7280', '#000000', '#FFFFFF', '#DC2626', '#F97316', '#84CC16',
  '#14B8A6', '#06B6D4', '#6366F1', '#A855F7', '#D946EF', '#F43F5E',
];

export default function ColorPicker({
  value = '#3B82F6',
  onChange,
  presets = defaultPresets,
  label,
  helperText,
  disabled = false,
  showAlpha: _showAlpha = false,
}: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hexInput, setHexInput] = useState(value);
  const pickerRef = useRef<HTMLDivElement>(null);

  // Sync hex input when value changes
  useEffect(() => {
    setHexInput(value);
  }, [value]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleColorChange = (color: string) => {
    setHexInput(color);
    onChange?.(color);
  };

  const handleHexInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setHexInput(input);

    // Validate hex color
    if (/^#([0-9A-F]{3}){1,2}$/i.test(input)) {
      onChange?.(input);
    }
  };

  return (
    <div className="w-full">
      {/* Label */}
      {label && <label className="label">{label}</label>}

      {/* Color Picker Container */}
      <div ref={pickerRef} className="relative">
        {/* Trigger Button */}
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={`
            w-full flex items-center justify-between px-4 py-3 border rounded-lg
            transition-all duration-200 bg-white bg-subtle-grain
            ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:border-paper-400'}
            ${isOpen ? 'border-accent-400 ring-2 ring-accent-400' : 'border-paper-300'}
          `}
        >
          <div className="flex items-center gap-3">
            {/* Color Swatch */}
            <div
              className="h-6 w-6 rounded border border-paper-300 shadow-sm"
              style={{ backgroundColor: value }}
            />
            {/* Hex Value */}
            <span className="text-sm text-ink-800 font-mono">{value.toUpperCase()}</span>
          </div>
        </button>

        {/* Dropdown Picker */}
        {isOpen && (
          <div className="absolute z-50 w-full mt-2 p-4 bg-white bg-subtle-grain rounded-lg shadow-lg border border-paper-200 animate-fade-in">
            {/* Hex Input */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-ink-700 mb-2">
                Hex Color
              </label>
              <input
                type="text"
                value={hexInput}
                onChange={handleHexInputChange}
                className="input w-full font-mono text-sm"
                placeholder="#000000"
                maxLength={7}
              />
            </div>

            {/* Preset Swatches */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-ink-700 mb-2">
                Preset Colors
              </label>
              <div className="grid grid-cols-6 gap-2">
                {presets.map((preset) => {
                  const isSelected = preset.toLowerCase() === value.toLowerCase();
                  return (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handleColorChange(preset)}
                      className={`
                        relative h-10 w-full rounded border-2 transition-all duration-200
                        ${isSelected ? 'border-accent-500 scale-105' : 'border-paper-300 hover:border-accent-300'}
                      `}
                      style={{ backgroundColor: preset }}
                      aria-label={preset}
                    >
                      {isSelected && (
                        <Check className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-white drop-shadow" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Native Color Picker */}
            <div>
              <label className="block text-xs font-medium text-ink-700 mb-2">
                Custom Color
              </label>
              <input
                type="color"
                value={value}
                onChange={(e) => handleColorChange(e.target.value)}
                className="w-full h-10 rounded border border-paper-300 cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>

      {/* Helper Text */}
      {helperText && (
        <p className="mt-2 text-xs text-ink-600">{helperText}</p>
      )}
    </div>
  );
}
