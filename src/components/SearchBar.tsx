// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the notebook-ui component library.
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

import { Search } from 'lucide-react';

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  onSearch?: (value: string) => void;
  disabled?: boolean;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
  onSearch,
  disabled = false,
}: SearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className={`flex-1 max-w-2xl relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-ink-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className="block w-full pl-11 pr-4 py-3 border border-paper-300 rounded-lg leading-5 bg-white placeholder-ink-400 text-ink-800 focus:outline-none focus:placeholder-ink-300 focus:ring-2 focus:ring-accent-400 focus:border-accent-400 hover:border-paper-400 transition-all sm:text-sm disabled:bg-paper-100 disabled:cursor-not-allowed"
        placeholder={placeholder}
      />
    </div>
  );
}
