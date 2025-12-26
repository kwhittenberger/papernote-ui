import React, { useEffect, useRef, useState } from 'react';
import { useCelebration } from './Celebration';

export interface ProgressCelebrationProps {
  /** Current progress value (0-100) */
  progress: number;
  /** Milestone values to celebrate (default: [25, 50, 75, 100]) */
  milestones?: number[];
  /** Type of celebration to trigger */
  celebrationType?: 'pulse' | 'glow' | 'confetti';
  /** Callback when a milestone is reached */
  onMilestoneReached?: (milestone: number) => void;
  /** Children to wrap (typically a Progress component) */
  children: React.ReactNode;
  /** Whether celebrations are enabled */
  enabled?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ProgressCelebration - Wrap progress indicators to celebrate milestones.
 * 
 * Features:
 * - Tracks previously reached milestones to only celebrate new ones
 * - Three celebration types: pulse, glow, confetti
 * - Configurable milestone values
 * - Callback when milestones are reached
 * - Respects enabled prop for accessibility
 */
export function ProgressCelebration({
  progress,
  milestones = [25, 50, 75, 100],
  celebrationType = 'pulse',
  onMilestoneReached,
  children,
  enabled = true,
  className = '',
}: ProgressCelebrationProps) {
  const [reachedMilestones, setReachedMilestones] = useState<Set<number>>(new Set());
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimeoutRef = useRef<number | null>(null);
  const { celebrate } = useCelebration();

  // Check for reduced motion preference
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const clampedProgress = Math.min(100, Math.max(0, progress));

  useEffect(() => {
    if (!enabled || prefersReducedMotion) return;

    // Find milestones that have been newly crossed
    const newlyReached = milestones.filter(
      (milestone) => clampedProgress >= milestone && !reachedMilestones.has(milestone)
    );

    if (newlyReached.length > 0) {
      // Update reached milestones
      setReachedMilestones((prev) => {
        const next = new Set(prev);
        newlyReached.forEach((m) => next.add(m));
        return next;
      });

      // Trigger celebration for the highest newly reached milestone
      const highestMilestone = Math.max(...newlyReached);
      
      // Trigger animation
      setIsAnimating(true);
      
      // Clear any existing timeout
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
      
      // Trigger confetti for confetti type
      if (celebrationType === 'confetti') {
        celebrate({
          type: highestMilestone === 100 ? 'fireworks' : 'confetti',
          particleCount: highestMilestone === 100 ? 150 : 50,
          duration: highestMilestone === 100 ? 3000 : 1500,
        });
      }
      
      // Animation duration
      animationTimeoutRef.current = window.setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
      
      // Call callback for each milestone
      newlyReached.forEach((milestone) => {
        onMilestoneReached?.(milestone);
      });
    }

    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [clampedProgress, milestones, reachedMilestones, enabled, celebrationType, celebrate, onMilestoneReached, prefersReducedMotion]);

  // Reset reached milestones if progress goes back to 0
  useEffect(() => {
    if (clampedProgress === 0) {
      setReachedMilestones(new Set());
    }
  }, [clampedProgress]);

  const animationStyles = {
    pulse: isAnimating ? 'animate-pulse' : '',
    glow: isAnimating ? 'shadow-lg shadow-success-400/50' : '',
    confetti: '', // Confetti is handled separately via useCelebration
  };

  return (
    <div
      className={`
        relative
        transition-all duration-300
        ${animationStyles[celebrationType]}
        ${className}
      `}
      role="group"
      aria-label={`Progress: ${clampedProgress}%`}
    >
      {children}
      
      {/* Glow overlay for glow type */}
      {celebrationType === 'glow' && isAnimating && (
        <div 
          className="absolute inset-0 rounded-full bg-success-400/30 blur-md animate-pulse pointer-events-none"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default ProgressCelebration;
