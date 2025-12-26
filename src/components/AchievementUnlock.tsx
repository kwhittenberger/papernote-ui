import { useEffect, useRef } from 'react';
import Modal from './Modal';
import { useCelebration } from './Celebration';
import { AchievementBadge, AchievementBadgeData } from './AchievementBadge';
import Button from './Button';
import Stack from './Stack';
import Text from './Text';

export interface AchievementUnlockProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback when the modal is closed */
  onClose: () => void;
  /** The badge data for the achievement */
  badge: AchievementBadgeData;
  /** Type of celebration animation */
  celebrationType?: 'confetti' | 'glow' | 'bounce';
  /** Whether to auto-close after a delay */
  autoClose?: boolean;
  /** Delay before auto-close in ms (default: 5000) */
  autoCloseDelay?: number;
  /** Whether celebrations are enabled */
  enabled?: boolean;
}

/**
 * AchievementUnlock - Modal/toast for newly unlocked achievements.
 * 
 * Features:
 * - Composes Modal + Celebration + AchievementBadge
 * - Center the badge with scale-in animation
 * - Triggers celebration effect on open
 * - "Awesome!" dismiss button
 * - Optional auto-close after delay
 * - Mobile: uses BottomSheet via Modal's adaptive behavior
 */
export function AchievementUnlock({
  isOpen,
  onClose,
  badge,
  celebrationType = 'confetti',
  autoClose = false,
  autoCloseDelay = 5000,
  enabled = true,
}: AchievementUnlockProps) {
  const { celebrate } = useCelebration();
  const autoCloseTimeoutRef = useRef<number | null>(null);
  const hasTriggeredRef = useRef(false);

  // Check for reduced motion preference
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  // Trigger celebration when modal opens
  useEffect(() => {
    if (isOpen && enabled && !prefersReducedMotion && !hasTriggeredRef.current) {
      hasTriggeredRef.current = true;
      
      if (celebrationType === 'confetti') {
        // Delay celebration slightly for visual effect after modal animation
        setTimeout(() => {
          celebrate({
            type: 'confetti',
            particleCount: 100,
            duration: 2500,
            colors: ['#22c55e', '#3b82f6', '#a855f7', '#f59e0b', '#ec4899'],
          });
        }, 300);
      }
    }

    if (!isOpen) {
      hasTriggeredRef.current = false;
    }
  }, [isOpen, enabled, prefersReducedMotion, celebrationType, celebrate]);

  // Auto-close functionality
  useEffect(() => {
    if (isOpen && autoClose) {
      autoCloseTimeoutRef.current = window.setTimeout(() => {
        onClose();
      }, autoCloseDelay);
    }

    return () => {
      if (autoCloseTimeoutRef.current) {
        clearTimeout(autoCloseTimeoutRef.current);
      }
    };
  }, [isOpen, autoClose, autoCloseDelay, onClose]);

  // Mark badge as earned with current date
  const earnedBadge = {
    ...badge,
    earnedAt: badge.earnedAt || new Date(),
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Achievement Unlocked!"
      size="sm"
      animation="scale"
      showCloseButton={false}
      mobileMode="auto"
      mobileHeight="md"
    >
      <Stack align="center" gap="lg" className="py-6">
        {/* Achievement badge with glow/bounce effect */}
        <div 
          className={`
            ${celebrationType === 'glow' && enabled && !prefersReducedMotion ? 'animate-pulse' : ''}
            ${celebrationType === 'bounce' && enabled && !prefersReducedMotion ? 'animate-bounce-subtle' : ''}
          `}
        >
          <AchievementBadge
            badge={earnedBadge}
            variant="earned"
            size="lg"
            showTooltip={false}
          />
        </div>

        {/* Achievement details */}
        <Stack align="center" gap="sm">
          <Text size="xl" weight="bold" className="text-ink-800">
            {badge.name}
          </Text>
          <Text size="sm" className="text-ink-500 text-center max-w-64">
            {badge.description}
          </Text>
        </Stack>

        {/* Dismiss button */}
        <Button
          onClick={onClose}
          variant="primary"
          size="lg"
          className="min-w-32"
        >
          Awesome!
        </Button>

        {/* Auto-close indicator */}
        {autoClose && (
          <Text size="xs" className="text-ink-400">
            Closing in {Math.ceil(autoCloseDelay / 1000)} seconds...
          </Text>
        )}
      </Stack>
    </Modal>
  );
}

export default AchievementUnlock;
