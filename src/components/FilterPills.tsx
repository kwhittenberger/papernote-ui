import Chip from './Chip';
import { Filter } from 'lucide-react';

export interface FilterPill {
  key: string;
  label: string;
  displayValue: string;
}

export interface FilterPillsProps {
  pills: FilterPill[];
  onRemove: (key: string) => void;
  onClearAll: () => void;
  totalCount?: number;
  className?: string;
}

export default function FilterPills({
  pills,
  onRemove,
  onClearAll,
  totalCount,
  className = '',
}: FilterPillsProps) {
  if (pills.length === 0) return null;

  return (
    <div className={`flex items-center gap-2 px-4 py-2 border-b border-paper-200 bg-paper-50 ${className}`}>
      <Filter className="h-3.5 w-3.5 text-ink-400 shrink-0" />
      <div className="flex items-center gap-1.5 flex-wrap flex-1">
        {pills.map((pill) => (
          <Chip
            key={pill.key}
            size="sm"
            variant="primary"
            onClose={() => onRemove(pill.key)}
          >
            {pill.label}: {pill.displayValue}
          </Chip>
        ))}
        {pills.length >= 2 && (
          <button
            type="button"
            onClick={onClearAll}
            className="text-xs text-ink-500 hover:text-ink-700 underline underline-offset-2 ml-1"
          >
            Clear all
          </button>
        )}
      </div>
      {totalCount !== undefined && (
        <span className="text-xs text-ink-500 shrink-0 tabular-nums">
          {totalCount.toLocaleString()} {totalCount === 1 ? 'record' : 'records'}
        </span>
      )}
    </div>
  );
}
