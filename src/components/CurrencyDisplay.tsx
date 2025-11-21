
export interface CurrencyDisplayProps {
  amount: number | null | undefined;
  currency?: string;
  locale?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'success' | 'warning' | 'error' | 'muted';
  showSign?: boolean;
  precision?: number;
}

const sizeConfig = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg font-semibold',
};

const colorConfig = {
  default: 'text-ink-900',
  success: 'text-success-600',
  warning: 'text-warning-600',
  error: 'text-error-600',
  muted: 'text-ink-500',
};

export default function CurrencyDisplay({
  amount,
  currency = 'USD',
  locale = 'en-US',
  className = '',
  size = 'md',
  color = 'default',
  showSign = false,
  precision = 2,
}: CurrencyDisplayProps) {
  // Handle null/undefined amounts - default to 0
  const safeAmount = amount ?? 0;
  
  const formatCurrency = (value: number) => {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    });

    return formatter.format(value);
  };

  const formattedAmount = formatCurrency(Math.abs(safeAmount));
  const isNegative = safeAmount < 0;
  const isPositive = safeAmount > 0;

  let displayValue = formattedAmount;

  if (showSign) {
    if (isNegative) {
      displayValue = `-${formattedAmount}`;
    } else if (isPositive) {
      displayValue = `+${formattedAmount}`;
    }
  } else if (isNegative) {
    displayValue = `-${formattedAmount}`;
  }

  const combinedClasses = [
    sizeConfig[size],
    colorConfig[color],
    'font-medium',
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={combinedClasses} title={`${currency} ${safeAmount.toFixed(precision)}`}>
      {displayValue}
    </span>
  );
}
