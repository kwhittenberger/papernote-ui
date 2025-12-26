import { useCallback, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export interface CelebrationProps {
  /** Whether to trigger the celebration */
  trigger?: boolean;
  /** Type of celebration animation */
  type?: 'confetti' | 'fireworks' | 'stars';
  /** Duration of the animation in milliseconds */
  duration?: number;
  /** Number of particles */
  particleCount?: number;
  /** Spread angle in degrees */
  spread?: number;
  /** Starting Y position (0-1, where 0 is top) */
  origin?: { x: number; y: number };
  /** Colors for the particles */
  colors?: string[];
  /** Callback when animation completes */
  onComplete?: () => void;
  /** Whether celebration is enabled (can be disabled in settings) */
  enabled?: boolean;
}

const defaultColors = ['#22c55e', '#3b82f6', '#a855f7', '#f59e0b', '#ef4444', '#ec4899'];

/**
 * Celebration component for triggering confetti and other celebration animations.
 * 
 * @example
 * // Basic confetti on goal completion
 * <Celebration trigger={goalCompleted} onComplete={() => setGoalCompleted(false)} />
 * 
 * @example
 * // Fireworks for major achievements
 * <Celebration trigger={achieved} type="fireworks" duration={3000} />
 * 
 * @example
 * // Stars with custom colors
 * <Celebration trigger={true} type="stars" colors={['#ffd700', '#ffed4a']} />
 */
export function Celebration({
  trigger = false,
  type = 'confetti',
  duration = 2000,
  particleCount = 100,
  spread = 70,
  origin = { x: 0.5, y: 0.6 },
  colors = defaultColors,
  onComplete,
  enabled = true,
}: CelebrationProps) {
  const animationRef = useRef<number | null>(null);
  const endTimeRef = useRef<number>(0);

  const fireConfetti = useCallback(() => {
    confetti({
      particleCount: Math.floor(particleCount / 3),
      spread,
      origin,
      colors,
      disableForReducedMotion: true,
    });
  }, [particleCount, spread, origin, colors]);

  const fireFireworks = useCallback(() => {
    const end = Date.now() + duration;
    endTimeRef.current = end;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
        disableForReducedMotion: true,
      });

      if (Date.now() < endTimeRef.current) {
        animationRef.current = requestAnimationFrame(frame);
      }
    };

    frame();
  }, [duration, colors]);

  const fireStars = useCallback(() => {
    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors,
      shapes: ['star'] as confetti.Shape[],
      disableForReducedMotion: true,
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 1.2,
        origin: { x: Math.random(), y: Math.random() * 0.5 },
      });
      confetti({
        ...defaults,
        particleCount: 5,
        scalar: 0.75,
        origin: { x: Math.random(), y: Math.random() * 0.5 },
      });
    };

    shoot();
    setTimeout(shoot, 200);
    setTimeout(shoot, 400);
  }, [colors]);

  useEffect(() => {
    if (!trigger || !enabled) return;

    switch (type) {
      case 'fireworks':
        fireFireworks();
        break;
      case 'stars':
        fireStars();
        break;
      case 'confetti':
      default:
        // Fire multiple bursts for confetti
        fireConfetti();
        setTimeout(fireConfetti, 150);
        setTimeout(fireConfetti, 300);
        break;
    }

    const timeout = setTimeout(() => {
      onComplete?.();
    }, duration);

    return () => {
      clearTimeout(timeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [trigger, type, enabled, duration, fireConfetti, fireFireworks, fireStars, onComplete]);

  // This component doesn't render anything visible
  return null;
}

/**
 * Hook for programmatically triggering celebrations
 */
export function useCelebration() {
  const celebrate = useCallback((options?: Omit<CelebrationProps, 'trigger'>) => {
    const {
      type = 'confetti',
      particleCount = 100,
      spread = 70,
      origin = { x: 0.5, y: 0.6 },
      colors = defaultColors,
      duration = 2000,
    } = options || {};

    switch (type) {
      case 'fireworks': {
        const end = Date.now() + duration;
        const frame = () => {
          confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors,
            disableForReducedMotion: true,
          });
          confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors,
            disableForReducedMotion: true,
          });
          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        };
        frame();
        break;
      }
      case 'stars': {
        const defaults = {
          spread: 360,
          ticks: 50,
          gravity: 0,
          decay: 0.94,
          startVelocity: 30,
          colors,
          shapes: ['star'] as confetti.Shape[],
          disableForReducedMotion: true,
        };
        const shoot = () => {
          confetti({
            ...defaults,
            particleCount: 10,
            scalar: 1.2,
            origin: { x: Math.random(), y: Math.random() * 0.5 },
          });
          confetti({
            ...defaults,
            particleCount: 5,
            scalar: 0.75,
            origin: { x: Math.random(), y: Math.random() * 0.5 },
          });
        };
        shoot();
        setTimeout(shoot, 200);
        setTimeout(shoot, 400);
        break;
      }
      case 'confetti':
      default: {
        const fire = () => {
          confetti({
            particleCount: Math.floor(particleCount / 3),
            spread,
            origin,
            colors,
            disableForReducedMotion: true,
          });
        };
        fire();
        setTimeout(fire, 150);
        setTimeout(fire, 300);
        break;
      }
    }
  }, []);

  return { celebrate };
}

export default Celebration;
