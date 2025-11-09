import React from 'react';
import { Users } from 'lucide-react';

export interface SplitData {
  manager: string;
  rate?: number;
  amount?: number;
  hasExplicitRate?: boolean;
}

export interface SplitCommissionBadgeProps {
  splits: SplitData[];
  totalAmount?: number;
  maxVisible?: number;
  showTooltip?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'compact' | 'detailed';
  onToggleDetails?: () => void;
  isExpanded?: boolean;
}

const sizeConfig = {
  sm: {
    badge: 'px-1.5 py-0.5 text-xs',
    icon: 'h-3 w-3',
    text: 'text-xs',
  },
  md: {
    badge: 'px-2 py-0.5 text-xs',
    icon: 'h-3 w-3',
    text: 'text-sm',
  },
  lg: {
    badge: 'px-2.5 py-1 text-sm',
    icon: 'h-4 w-4',
    text: 'text-base',
  },
};

export default function SplitCommissionBadge({
  splits,
  totalAmount,
  maxVisible = 2,
  showTooltip = true,
  size = 'md',
  variant = 'compact',
  onToggleDetails,
  isExpanded = false,
}: SplitCommissionBadgeProps) {
  const sizeStyles = sizeConfig[size];

  if (!splits || splits.length === 0) {
    return null;
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const generateTooltip = () => {
    return splits.map(split => {
      if (split.hasExplicitRate && split.rate !== undefined && split.amount !== undefined) {
        return `${split.manager}: ${split.rate.toFixed(1)}% (${formatCurrency(split.amount)})`;
      } else {
        return `${split.manager}: Account Manager`;
      }
    }).join('\n');
  };

  const visibleSplits = isExpanded ? splits : splits.slice(0, maxVisible);
  const hiddenCount = splits.length - maxVisible;

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-1">
        <span 
          className={`inline-flex items-center rounded-full font-medium bg-blue-100 text-blue-800 ${sizeStyles.badge}`}
          title={showTooltip ? generateTooltip() : undefined}
        >
          <Users className={`${sizeStyles.icon} mr-1`} />
          Split: {splits.length}
        </span>
        {onToggleDetails && (
          <button
            onClick={onToggleDetails}
            className={`text-blue-600 hover:text-blue-800 underline ${sizeStyles.text}`}
            title={generateTooltip()}
          >
            {isExpanded ? 'Hide' : 'Show'} Details
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1">
        <span 
          className={`inline-flex items-center rounded-full font-medium bg-blue-100 text-blue-800 ${sizeStyles.badge}`}
        >
          <Users className={`${sizeStyles.icon} mr-1`} />
          {splits.length} Managers
        </span>
        {onToggleDetails && hiddenCount > 0 && (
          <button
            onClick={onToggleDetails}
            className={`text-blue-600 hover:text-blue-800 underline ${sizeStyles.text}`}
          >
            {isExpanded ? 'Show Less' : `+${hiddenCount} more`}
          </button>
        )}
      </div>
      
      <div className="space-y-1">
        {visibleSplits.map((split, idx) => (
          <div key={idx} className={`flex justify-between items-center ${sizeStyles.text}`}>
            <span 
              className="text-gray-600 truncate flex-1 mr-2" 
              title={split.manager}
            >
              {split.manager.length > 25 ? split.manager.substring(0, 25) + '...' : split.manager}
            </span>
            <span className="font-medium text-green-600 whitespace-nowrap">
              {split.hasExplicitRate && split.rate !== undefined && split.amount !== undefined
                ? `${split.rate.toFixed(1)}% • ${formatCurrency(split.amount)}`
                : 'Account Mgr'
              }
            </span>
          </div>
        ))}
        
        {!isExpanded && hiddenCount > 0 && (
          <div 
            className={`text-gray-500 italic cursor-help ${sizeStyles.text}`}
            title={generateTooltip()}
          >
            +{hiddenCount} more managers...
          </div>
        )}
      </div>
    </div>
  );
}