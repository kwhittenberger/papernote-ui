import { useState, useCallback, useEffect } from 'react';
import { useCelebration } from '../components/Celebration';
import type { AchievementBadgeData } from '../components/AchievementBadge';

export type CelebrationType = 'confetti' | 'fireworks' | 'stars';

export interface CelebrationOptions {
  /** Duration of the celebration in ms */
  duration?: number;
  /** Number of particles */
  particleCount?: number;
  /** Custom colors for the celebration */
  colors?: string[];
  /** Origin point (x, y in 0-1 range) */
  origin?: { x: number; y: number };
}

export interface UseDelightersReturn {
  /** Trigger a celebration animation */
  celebrate: (type: CelebrationType, options?: CelebrationOptions) => void;
  /** Show an achievement unlock (returns a function to trigger the achievement modal) */
  showAchievement: (badge: AchievementBadgeData) => void;
  /** Whether delighters are globally enabled */
  enabled: boolean;
  /** Set the global enabled state */
  setEnabled: (enabled: boolean) => void;
  /** The currently pending achievement (for rendering AchievementUnlock) */
  pendingAchievement: AchievementBadgeData | null;
  /** Clear the pending achievement */
  clearAchievement: () => void;
}

const STORAGE_KEY = 'notebook-ui-delighters-enabled';

/**
 * useDelighters - Global control hook for celebration effects.
 * 
 * Features:
 * - Wraps useCelebration for consistent celebration API
 * - Global enabled/disabled state with localStorage persistence
 * - Respects prefers-reduced-motion automatically
 * - Provides showAchievement for achievement unlock modals
 * 
 * Usage:
 * ```tsx
 * const { celebrate, showAchievement, enabled, setEnabled } = useDelighters();
 * 
 * // Trigger a celebration
 * celebrate('confetti', { particleCount: 100 });
 * 
 * // Show an achievement
 * showAchievement({ icon: <Trophy />, name: 'Budget Master', description: '...' });
 * 
 * // Toggle celebrations globally
 * setEnabled(false);
 * ```
 */
export function useDelighters(): UseDelightersReturn {
  const { celebrate: baseCelebrate } = useCelebration();
  const [pendingAchievement, setPendingAchievement] = useState<AchievementBadgeData | null>(null);
  
  // Initialize enabled state from localStorage
  const [enabled, setEnabledState] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === null ? true : stored === 'true';
  });

  // Check for reduced motion preference
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  // Persist enabled state to localStorage
  const setEnabled = useCallback((newEnabled: boolean) => {
    setEnabledState(newEnabled);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, String(newEnabled));
    }
  }, []);

  // Sync with system preference changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        // System now prefers reduced motion, but don't change user's preference
        // Just let the celebrate function respect it
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const celebrate = useCallback((type: CelebrationType, options?: CelebrationOptions) => {
    // Skip if disabled or prefers reduced motion
    if (!enabled || prefersReducedMotion) return;

    baseCelebrate({
      type,
      duration: options?.duration,
      particleCount: options?.particleCount,
      colors: options?.colors,
      origin: options?.origin,
    });
  }, [enabled, prefersReducedMotion, baseCelebrate]);

  const showAchievement = useCallback((badge: AchievementBadgeData) => {
    // Always show achievement (unless disabled), even with reduced motion
    // The modal itself will handle reduced motion for its animations
    if (!enabled) return;
    
    setPendingAchievement(badge);
  }, [enabled]);

  const clearAchievement = useCallback(() => {
    setPendingAchievement(null);
  }, []);

  return {
    celebrate,
    showAchievement,
    enabled,
    setEnabled,
    pendingAchievement,
    clearAchievement,
  };
}

export default useDelighters;
