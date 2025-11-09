import { ReactNode } from 'react';
import { Search, Filter, Download } from 'lucide-react';

interface FilterControl {
  type: 'search' | 'select' | 'button' | 'toggle' | 'custom';
  key?: string;
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
  options?: Array<{ value: any; label: string }>;
  label?: string;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'filter' | 'active';
  className?: string;
  children?: ReactNode;
}

interface FilterControlsProps {
  controls: FilterControl[];
  className?: string;
}

/**
 * Flexible filter controls bar supporting search, dropdowns, buttons, and custom controls
 */
export function FilterControls({ controls, className = '' }: FilterControlsProps) {
  const renderControl = (control: FilterControl, index: number) => {
    switch (control.type) {
      case 'search':
        return (
          <div key={index} className="flex-1 min-w-64">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={control.placeholder || 'Search...'}
                className="pl-10 pr-4 py-2.5 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                value={control.value || ''}
                onChange={(e) => control.onChange?.(e.target.value)}
              />
            </div>
          </div>
        );

      case 'select':
        return (
          <select
            key={index}
            className={`px-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-sm ${control.className || 'min-w-32'}`}
            value={control.value || ''}
            onChange={(e) => control.onChange?.(e.target.value)}
            aria-label={control.label}
          >
            {control.options?.map((option) => (
              <option key={String(option.value)} value={String(option.value)}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'button':
        const buttonVariants = {
          primary: 'text-white bg-blue-600 border-transparent hover:bg-blue-700',
          secondary: 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50',
          filter: 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50',
          active: 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
        };
        
        return (
          <button
            key={index}
            className={`px-4 py-2.5 text-sm font-medium border rounded-md focus:ring-2 focus:ring-blue-500 transition-colors inline-flex items-center gap-2 ${
              buttonVariants[control.variant || 'secondary']
            } ${control.className || ''}`}
            onClick={() => control.onChange?.(control.value)}
            title={control.label}
          >
            {control.icon}
            {control.label}
          </button>
        );

      case 'toggle':
        return (
          <div key={index} className="flex border border-gray-300 rounded-md">
            {control.options?.map((option, optIndex) => (
              <button
                key={optIndex}
                className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                  optIndex > 0 ? 'border-l' : ''
                } ${
                  control.value === option.value
                    ? 'bg-blue-50 text-blue-700 border-blue-200'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => control.onChange?.(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        );

      case 'custom':
        return (
          <div key={index} className={control.className}>
            {control.children}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow p-4 mb-6 ${className}`}>
      <div className="flex flex-wrap items-center gap-4">
        {controls.map((control, index) => renderControl(control, index))}
      </div>
    </div>
  );
}