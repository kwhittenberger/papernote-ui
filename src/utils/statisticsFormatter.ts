// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Notebook UI library.
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

/**
 * Format types for statistics values
 */
export type StatisticFormat = 'number' | 'currency' | 'percentage' | 'decimal' | 'custom';

/**
 * Configuration for a statistic value with automatic formatting
 */
export interface StatisticConfig {
  label: string;
  value: number;
  format: StatisticFormat;
  /** Custom formatter function (required if format is 'custom') */
  customFormatter?: (value: number) => string;
  /** Number of decimal places (for 'decimal' format) */
  decimals?: number;
  /** Currency code (default: 'USD') */
  currency?: string;
  /** Subtitle text */
  subtitle?: string;
  /** Icon element */
  icon?: React.ReactNode;
  /** Value text color */
  valueColor?: string;
  /** Icon background color */
  iconColor?: string;
}

/**
 * Formatted statistic card ready for display
 */
export interface FormattedStatistic {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  subtitle?: string;
  valueColor?: string;
  iconColor?: string;
}

/**
 * Format a number value according to the specified format type
 */
export function formatStatisticValue(value: number, format: StatisticFormat, options?: {
  decimals?: number;
  currency?: string;
  customFormatter?: (value: number) => string;
}): string {
  // Handle undefined/null values
  if (value === undefined || value === null || isNaN(value)) {
    return '—';
  }
  
  switch (format) {
    case 'number':
      return value.toLocaleString('en-US');
    
    case 'currency':
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: options?.currency || 'USD',
      }).format(value);
    
    case 'percentage':
      return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: options?.decimals ?? 1,
        maximumFractionDigits: options?.decimals ?? 1,
      }).format(value / 100);
    
    case 'decimal':
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: options?.decimals ?? 2,
        maximumFractionDigits: options?.decimals ?? 2,
      }).format(value);
    
    case 'custom':
      if (!options?.customFormatter) {
        throw new Error('customFormatter is required when format is "custom"');
      }
      return options.customFormatter(value);
    
    default:
      return value.toString();
  }
}

/**
 * Transform an array of statistic configs into formatted statistics ready for display
 */
export function formatStatistics(configs: StatisticConfig[]): FormattedStatistic[] {
  return configs.map(config => ({
    label: config.label,
    value: formatStatisticValue(config.value, config.format, {
      decimals: config.decimals,
      currency: config.currency,
      customFormatter: config.customFormatter,
    }),
    subtitle: config.subtitle,
    icon: config.icon,
    valueColor: config.valueColor,
    iconColor: config.iconColor,
  }));
}
