import React, { useMemo } from 'react';
import Select, { SelectOptionGroup, SelectHandle } from './Select';

/**
 * Timezone data structure with IANA identifier and display information
 */
export interface TimezoneOption {
  /** IANA timezone identifier (e.g., 'America/New_York') */
  value: string;
  /** Display label with city name */
  label: string;
  /** UTC offset string (e.g., 'UTC-05:00') */
  offset: string;
  /** Numeric offset in minutes for sorting */
  offsetMinutes: number;
}

/**
 * TimezoneSelector component props
 */
export interface TimezoneSelectorProps {
  /** Currently selected timezone (IANA identifier) */
  value?: string;
  /** Callback when timezone changes */
  onChange?: (timezone: string) => void;
  /** Label text above selector */
  label?: string;
  /** Helper text below selector */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Disable the selector */
  disabled?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Show clear button */
  clearable?: boolean;
  /** Show loading state */
  loading?: boolean;
  /** Size of the selector */
  size?: 'sm' | 'md' | 'lg';
  /** Include UTC at the top as a separate option */
  includeUTC?: boolean;
  /** Filter to only show specific regions */
  regions?: TimezoneRegion[];
  /** Show the offset in the option label */
  showOffset?: boolean;
}

/**
 * Supported timezone regions for filtering
 */
export type TimezoneRegion = 
  | 'Africa'
  | 'America'
  | 'Antarctica'
  | 'Asia'
  | 'Atlantic'
  | 'Australia'
  | 'Europe'
  | 'Indian'
  | 'Pacific';

/**
 * Get the current UTC offset for a timezone
 */
function getTimezoneOffset(timezone: string): { offset: string; offsetMinutes: number } {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      timeZoneName: 'longOffset',
    });
    
    const parts = formatter.formatToParts(now);
    const tzPart = parts.find(p => p.type === 'timeZoneName');
    
    if (tzPart?.value) {
      // Extract offset from format like "GMT-05:00" or "GMT+05:30"
      const match = tzPart.value.match(/GMT([+-]\d{2}:\d{2})/);
      if (match) {
        const offsetStr = match[1];
        const [hours, minutes] = offsetStr.split(':').map(Number);
        const sign = offsetStr.startsWith('-') ? -1 : 1;
        const totalMinutes = sign * (Math.abs(hours) * 60 + minutes);
        return {
          offset: `UTC${offsetStr}`,
          offsetMinutes: totalMinutes,
        };
      }
      // Handle "GMT" (UTC+00:00)
      if (tzPart.value === 'GMT') {
        return { offset: 'UTC+00:00', offsetMinutes: 0 };
      }
    }
    
    // Fallback: calculate manually
    const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
    const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    const diffMinutes = (tzDate.getTime() - utcDate.getTime()) / 60000;
    const hours = Math.floor(Math.abs(diffMinutes) / 60);
    const mins = Math.abs(diffMinutes) % 60;
    const sign = diffMinutes >= 0 ? '+' : '-';
    const offset = `UTC${sign}${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
    
    return { offset, offsetMinutes: diffMinutes };
  } catch {
    return { offset: 'UTC+00:00', offsetMinutes: 0 };
  }
}

/**
 * Comprehensive list of common timezones organized by region
 */
const TIMEZONE_DATA: Record<TimezoneRegion, string[]> = {
  Africa: [
    'Africa/Cairo',
    'Africa/Casablanca',
    'Africa/Johannesburg',
    'Africa/Lagos',
    'Africa/Nairobi',
    'Africa/Tunis',
  ],
  America: [
    'America/Anchorage',
    'America/Argentina/Buenos_Aires',
    'America/Bogota',
    'America/Caracas',
    'America/Chicago',
    'America/Denver',
    'America/Halifax',
    'America/Lima',
    'America/Los_Angeles',
    'America/Mexico_City',
    'America/New_York',
    'America/Phoenix',
    'America/Santiago',
    'America/Sao_Paulo',
    'America/Toronto',
    'America/Vancouver',
  ],
  Antarctica: [
    'Antarctica/McMurdo',
    'Antarctica/Palmer',
    'Antarctica/Syowa',
  ],
  Asia: [
    'Asia/Bangkok',
    'Asia/Colombo',
    'Asia/Dhaka',
    'Asia/Dubai',
    'Asia/Hong_Kong',
    'Asia/Jakarta',
    'Asia/Jerusalem',
    'Asia/Karachi',
    'Asia/Kathmandu',
    'Asia/Kolkata',
    'Asia/Kuala_Lumpur',
    'Asia/Manila',
    'Asia/Qatar',
    'Asia/Riyadh',
    'Asia/Seoul',
    'Asia/Shanghai',
    'Asia/Singapore',
    'Asia/Taipei',
    'Asia/Tehran',
    'Asia/Tokyo',
  ],
  Atlantic: [
    'Atlantic/Azores',
    'Atlantic/Bermuda',
    'Atlantic/Canary',
    'Atlantic/Cape_Verde',
    'Atlantic/Reykjavik',
  ],
  Australia: [
    'Australia/Adelaide',
    'Australia/Brisbane',
    'Australia/Darwin',
    'Australia/Hobart',
    'Australia/Melbourne',
    'Australia/Perth',
    'Australia/Sydney',
  ],
  Europe: [
    'Europe/Amsterdam',
    'Europe/Athens',
    'Europe/Berlin',
    'Europe/Brussels',
    'Europe/Bucharest',
    'Europe/Budapest',
    'Europe/Copenhagen',
    'Europe/Dublin',
    'Europe/Helsinki',
    'Europe/Istanbul',
    'Europe/Lisbon',
    'Europe/London',
    'Europe/Madrid',
    'Europe/Moscow',
    'Europe/Oslo',
    'Europe/Paris',
    'Europe/Prague',
    'Europe/Rome',
    'Europe/Stockholm',
    'Europe/Vienna',
    'Europe/Warsaw',
    'Europe/Zurich',
  ],
  Indian: [
    'Indian/Maldives',
    'Indian/Mauritius',
  ],
  Pacific: [
    'Pacific/Auckland',
    'Pacific/Fiji',
    'Pacific/Guam',
    'Pacific/Honolulu',
    'Pacific/Noumea',
    'Pacific/Pago_Pago',
    'Pacific/Tahiti',
  ],
};

/**
 * Region display names
 */
const REGION_LABELS: Record<TimezoneRegion, string> = {
  Africa: 'Africa',
  America: 'Americas',
  Antarctica: 'Antarctica',
  Asia: 'Asia',
  Atlantic: 'Atlantic',
  Australia: 'Australia',
  Europe: 'Europe',
  Indian: 'Indian Ocean',
  Pacific: 'Pacific',
};

/**
 * Get the user's local timezone
 */
export function getLocalTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return 'UTC';
  }
}

/**
 * Check if a timezone string is valid
 */
export function isValidTimezone(timezone: string): boolean {
  try {
    Intl.DateTimeFormat(undefined, { timeZone: timezone });
    return true;
  } catch {
    return false;
  }
}

/**
 * TimezoneSelector - A searchable dropdown for selecting timezones
 * 
 * Provides a user-friendly way to select from IANA timezones, organized by
 * geographic region with UTC offset display.
 * 
 * @example Basic usage
 * ```tsx
 * const [timezone, setTimezone] = useState('America/New_York');
 * 
 * <TimezoneSelector
 *   label="Select Timezone"
 *   value={timezone}
 *   onChange={setTimezone}
 * />
 * ```
 * 
 * @example With local timezone detection
 * ```tsx
 * import { TimezoneSelector, getLocalTimezone } from 'notebook-ui';
 * 
 * const [timezone, setTimezone] = useState(getLocalTimezone());
 * 
 * <TimezoneSelector
 *   value={timezone}
 *   onChange={setTimezone}
 *   includeUTC
 *   clearable
 * />
 * ```
 * 
 * @example Filter to specific regions
 * ```tsx
 * <TimezoneSelector
 *   value={timezone}
 *   onChange={setTimezone}
 *   regions={['America', 'Europe']}
 *   placeholder="Select US or European timezone..."
 * />
 * ```
 */
const TimezoneSelector = React.forwardRef<SelectHandle, TimezoneSelectorProps>(
  (
    {
      value,
      onChange,
      label,
      helperText,
      error,
      disabled = false,
      placeholder = 'Select timezone...',
      clearable = false,
      loading = false,
      size = 'md',
      includeUTC = true,
      regions,
      showOffset = true,
    },
    ref
  ) => {
    // Build timezone options grouped by region
    const groups = useMemo<SelectOptionGroup[]>(() => {
      const result: SelectOptionGroup[] = [];
      
      // Add UTC as a special option at the top
      if (includeUTC) {
        result.push({
          label: 'Universal',
          options: [
            {
              value: 'UTC',
              label: showOffset ? 'UTC (UTC+00:00)' : 'UTC',
            },
          ],
        });
      }
      
      // Determine which regions to include
      const activeRegions = regions || (Object.keys(TIMEZONE_DATA) as TimezoneRegion[]);
      
      // Build groups for each region
      for (const region of activeRegions) {
        const timezones = TIMEZONE_DATA[region];
        if (!timezones) continue;
        
        // Build options with offset info and sort by offset
        const options = timezones
          .map(tz => {
            const { offset, offsetMinutes } = getTimezoneOffset(tz);
            const city = tz.split('/').pop()?.replace(/_/g, ' ') || tz;
            return {
              value: tz,
              label: showOffset ? `${city} (${offset})` : city,
              offsetMinutes,
            };
          })
          .sort((a, b) => a.offsetMinutes - b.offsetMinutes)
          .map(({ value, label }) => ({ value, label }));
        
        result.push({
          label: REGION_LABELS[region],
          options,
        });
      }
      
      return result;
    }, [includeUTC, regions, showOffset]);

    return (
      <Select
        ref={ref}
        groups={groups}
        value={value}
        onChange={onChange}
        label={label}
        helperText={helperText}
        error={error}
        disabled={disabled}
        placeholder={placeholder}
        clearable={clearable}
        loading={loading}
        size={size}
        searchable
        virtualized={false}
      />
    );
  }
);

TimezoneSelector.displayName = 'TimezoneSelector';

export default TimezoneSelector;
