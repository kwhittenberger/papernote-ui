import { useEffect, useState, useRef } from 'react';

export interface SuccessCheckProps {
  /** Size of the checkmark */
  size?: 'sm' | 'md' | 'lg';
  /** Color of the checkmark (defaults to success green) */
  color?: string;
  /** Delay in ms before animation starts */
  delay?: number;
  /** Callback when animation completes */
  onComplete?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Whether the animation is enabled (respects prefers-reduced-motion) */
  enabled?: boolean;
}

const sizeStyles = {
  sm: { size: 24, strokeWidth: 3 },
  md: { size: 32, strokeWidth: 3 },
  lg: { size: 48, strokeWidth: 4 },
};

/**
 * SuccessCheck - An animated checkmark for completed actions.
 * 
 * Features:
 * - SVG checkmark with stroke animation
 * - Configurable size and color
 * - Optional delay before animation
 * - Respects prefers-reduced-motion
 * - Callback on animation complete
 */
export function SuccessCheck({
  size = 'md',
  color,
  delay = 0,
  onComplete,
  className = '',
  enabled = true,
}: SuccessCheckProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const animationTimeoutRef = useRef<number | null>(null);

  const { size: dimensions, strokeWidth } = sizeStyles[size];
  const checkColor = color || '#10b981'; // success-500

  // Check for reduced motion preference
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!enabled) {
      setShowCheck(true);
      return;
    }

    // Start animation after delay
    timeoutRef.current = window.setTimeout(() => {
      setShowCheck(true);
      setIsAnimating(true);

      // Animation duration is 0.6s for the draw + 0.3s for the scale
      const animationDuration = prefersReducedMotion ? 0 : 900;
      
      animationTimeoutRef.current = window.setTimeout(() => {
        setIsAnimating(false);
        onComplete?.();
      }, animationDuration);
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [delay, enabled, onComplete, prefersReducedMotion]);

  if (!showCheck) {
    return (
      <div
        className={`inline-flex items-center justify-center ${className}`}
        style={{ width: dimensions, height: dimensions }}
        role="status"
        aria-label="Loading"
      />
    );
  }

  // For reduced motion, show static checkmark
  if (prefersReducedMotion || !enabled) {
    return (
      <div
        className={`inline-flex items-center justify-center ${className}`}
        style={{ width: dimensions, height: dimensions }}
        role="status"
        aria-label="Success"
      >
        <svg
          width={dimensions}
          height={dimensions}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke={checkColor}
            strokeWidth={strokeWidth * 0.8}
            fill="none"
            opacity={0.2}
          />
          <path
            d="M7 12.5L10.5 16L17 9"
            stroke={checkColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  // Animated version
  // The checkmark path length for the animation
  const pathLength = 20; // Approximate length of the check path

  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: dimensions, height: dimensions }}
      role="status"
      aria-label="Success"
    >
      <svg
        width={dimensions}
        height={dimensions}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isAnimating ? 'animate-success-check' : ''}
      >
        {/* Background circle */}
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke={checkColor}
          strokeWidth={strokeWidth * 0.8}
          fill="none"
          opacity={0.2}
          className="origin-center"
          style={{
            animation: isAnimating ? 'successCircle 0.4s ease-out forwards' : 'none',
          }}
        />
        
        {/* Checkmark path with stroke animation */}
        <path
          d="M7 12.5L10.5 16L17 9"
          stroke={checkColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: pathLength,
            strokeDashoffset: isAnimating ? 0 : pathLength,
            animation: isAnimating 
              ? `successDraw 0.4s 0.2s ease-out forwards` 
              : 'none',
          }}
        />
      </svg>
      
      {/* Inject keyframes for the animations */}
      <style>{`
        @keyframes successDraw {
          0% {
            stroke-dashoffset: ${pathLength};
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes successCircle {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}

export default SuccessCheck;
