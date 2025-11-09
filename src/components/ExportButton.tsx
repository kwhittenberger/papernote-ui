// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the notebook-ui component library.
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

import React, { useState } from 'react';
import { Download, FileText, File } from 'lucide-react';

export type ExportFormat = 'csv' | 'excel' | 'pdf';

export interface ExportButtonProps {
  onExport: (format: ExportFormat) => void | Promise<void>;
  formats?: ExportFormat[];
  disabled?: boolean;
  loading?: boolean;
  loadingMessage?: string;
  label?: string;
  showFormatMenu?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Custom Excel icon with green color scheme
const ExcelIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#217346" />
    <path d="M7 7L12 12M12 12L17 17M12 12L7 17M12 12L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const formatIcons: Record<ExportFormat, React.ReactNode> = {
  csv: <File className="h-4 w-4" />,
  excel: <ExcelIcon className="h-4 w-4" />,
  pdf: <FileText className="h-4 w-4" />,
};

const formatLabels: Record<ExportFormat, string> = {
  csv: 'Export CSV',
  excel: 'Export Excel',
  pdf: 'Export PDF',
};

export default function ExportButton({
  onExport,
  formats = ['csv', 'excel', 'pdf'],
  disabled = false,
  loading = false,
  loadingMessage,
  label = 'Export',
  showFormatMenu = true,
  variant = 'secondary',
  size = 'md',
  className = '',
}: ExportButtonProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [exporting, setExporting] = useState(false);
  const isLoading = loading || exporting;

  const handleExport = async (format: ExportFormat) => {
    setIsMenuOpen(false);
    setExporting(true);
    try {
      await onExport(format);
    } finally {
      setExporting(false);
    }
  };

  const buttonSizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-2.5 text-base',
  };

  const buttonVariantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 border-blue-600',
    secondary: 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 border-transparent',
  };

  const baseClasses = `inline-flex items-center gap-2 font-medium border rounded-md transition-colors ${buttonSizeClasses[size]} ${buttonVariantClasses[variant]} ${className}`;

  // Single format - direct export
  if (formats.length === 1) {
    return (
      <div className="relative inline-block">
        <button
          onClick={() => handleExport(formats[0])}
          disabled={disabled || isLoading}
          className={`${baseClasses} ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
          ) : (
            formatIcons[formats[0]]
          )}
          {formatLabels[formats[0]]}
        </button>
        {isLoading && loadingMessage && (
          <div className="absolute top-full left-0 mt-2 px-3 py-2 bg-blue-600 text-white text-xs rounded shadow-lg whitespace-nowrap z-50">
            {loadingMessage}
          </div>
        )}
      </div>
    );
  }

  // Multiple formats - show dropdown menu if enabled
  if (!showFormatMenu) {
    return (
      <div className="relative inline-block">
        <button
          onClick={() => handleExport(formats[0])}
          disabled={disabled || isLoading}
          className={`${baseClasses} ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
          ) : (
            <Download className="h-4 w-4" />
          )}
          {label}
        </button>
        {isLoading && loadingMessage && (
          <div className="absolute top-full left-0 mt-2 px-3 py-2 bg-blue-600 text-white text-xs rounded shadow-lg whitespace-nowrap z-50">
            {loadingMessage}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        disabled={disabled || isLoading}
        className={`${baseClasses} ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
        ) : (
          <Download className="h-4 w-4" />
        )}
        {label}
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isLoading && loadingMessage && (
        <div className="absolute top-full left-0 mt-2 px-3 py-2 bg-blue-600 text-white text-xs rounded shadow-lg whitespace-nowrap z-50">
          {loadingMessage}
        </div>
      )}

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-[9998]"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(false);
            }}
          />
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[9999]">
            <div className="py-1" role="menu">
              {formats.map((format) => (
                <button
                  key={format}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleExport(format);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  role="menuitem"
                >
                  {formatIcons[format]}
                  {formatLabels[format]}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
