// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the notebook-ui component library.
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

export interface DateDisplayProps {
  date?: string | Date | null;
  format?: 'short' | 'long' | 'medium' | 'numeric';
  fallback?: string;
  label?: string;
  showLabel?: boolean;
  className?: string;
  locale?: string;
  minValidYear?: number;
}

const formatOptions = {
  short: {
    year: 'numeric' as const,
    month: 'short' as const,
    day: 'numeric' as const,
  },
  medium: {
    year: 'numeric' as const,
    month: 'short' as const,
    day: 'numeric' as const,
    weekday: 'short' as const,
  },
  long: {
    year: 'numeric' as const,
    month: 'long' as const,
    day: 'numeric' as const,
    weekday: 'long' as const,
  },
  numeric: {
    year: 'numeric' as const,
    month: '2-digit' as const,
    day: '2-digit' as const,
  },
};

export default function DateDisplay({
  date,
  format = 'short',
  fallback = 'N/A',
  label,
  showLabel = false,
  className = '',
  locale = 'en-US',
  minValidYear = 1990,
}: DateDisplayProps) {
  const formatDate = (dateInput?: string | Date | null) => {
    if (!dateInput) return fallback;

    try {
      const dateObj = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;

      // Check if the date is valid and not from Unix epoch (1969/1970)
      if (isNaN(dateObj.getTime()) || dateObj.getFullYear() < minValidYear) {
        return fallback;
      }

      return dateObj.toLocaleDateString(locale, formatOptions[format]);
    } catch {
      return fallback;
    }
  };

  const formattedDate = formatDate(date);

  const content = (
    <span className={className} title={date ? String(date) : undefined}>
      {formattedDate}
    </span>
  );

  if (showLabel && label) {
    return (
      <div className="space-y-1">
        <div className="text-xs text-ink-500">{label}:</div>
        {content}
      </div>
    );
  }

  return content;
}
