import React from 'react';
import { PartyPopper, Sparkles, Lightbulb, X } from 'lucide-react';

export interface MotivationalMessageProps {
  /** The message to display */
  message: string;
  /** The tone of the message affects styling and default icon */
  tone: 'celebration' | 'encouragement' | 'tip';
  /** Custom icon to override the default */
  icon?: React.ReactNode;
  /** Whether the message can be dismissed */
  dismissible?: boolean;
  /** Callback when the message is dismissed */
  onDismiss?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Optional title for the message */
  title?: string;
}

const toneStyles = {
  celebration: {
    bg: 'bg-success-50',
    border: 'border-l-success-500',
    iconBg: 'bg-success-100',
    iconColor: 'text-success-600',
    titleColor: 'text-success-800',
  },
  encouragement: {
    bg: 'bg-accent-50',
    border: 'border-l-accent-500',
    iconBg: 'bg-accent-100',
    iconColor: 'text-accent-600',
    titleColor: 'text-accent-800',
  },
  tip: {
    bg: 'bg-warning-50',
    border: 'border-l-warning-500',
    iconBg: 'bg-warning-100',
    iconColor: 'text-warning-600',
    titleColor: 'text-warning-800',
  },
};

const defaultIcons = {
  celebration: PartyPopper,
  encouragement: Sparkles,
  tip: Lightbulb,
};

/**
 * MotivationalMessage - Display encouraging messages with different tones.
 * 
 * Features:
 * - Three tones: celebration, encouragement, tip
 * - Colored left border and background based on tone
 * - Default icons per tone (can be overridden)
 * - Optional title for emphasis
 * - Dismissible with callback
 * - Fade-in animation
 */
export function MotivationalMessage({
  message,
  tone,
  icon,
  dismissible = false,
  onDismiss,
  className = '',
  title,
}: MotivationalMessageProps) {
  const styles = toneStyles[tone];
  const DefaultIcon = defaultIcons[tone];

  return (
    <div
      className={`
        ${styles.bg} 
        border-l-4 ${styles.border}
        rounded-r-lg
        p-4
        animate-fade-in
        ${className}
      `}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className={`${styles.iconBg} ${styles.iconColor} p-2 rounded-lg shrink-0`}>
          {icon || <DefaultIcon className="w-5 h-5" />}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className={`font-semibold ${styles.titleColor} mb-1`}>
              {title}
            </h4>
          )}
          <p className="text-ink-700 text-sm leading-relaxed">
            {message}
          </p>
        </div>

        {/* Dismiss button */}
        {dismissible && (
          <button
            onClick={onDismiss}
            className="shrink-0 p-1 rounded hover:bg-black/5 transition-colors text-ink-400 hover:text-ink-600"
            aria-label="Dismiss message"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export default MotivationalMessage;
