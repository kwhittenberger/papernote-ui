import React, { useState, useCallback, useRef, useEffect } from 'react';

// =============================================================================
// Types & Interfaces
// =============================================================================

export interface SplitPaneProps {
  /** Content for the left/primary panel */
  left: React.ReactNode;
  /** Content for the right/secondary panel */
  right: React.ReactNode;
  /** Default width of the left panel as a fraction (0.0 - 1.0) */
  defaultSplit?: number;
  /** Minimum left panel width in pixels */
  minLeftWidth?: number;
  /** Minimum right panel width in pixels */
  minRightWidth?: number;
  /** Whether the divider is draggable */
  resizable?: boolean;
  /** Whether to show the right panel */
  showRight?: boolean;
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Callback when split ratio changes */
  onSplitChange?: (ratio: number) => void;
  /** Additional className */
  className?: string;
}

// =============================================================================
// Component
// =============================================================================

/**
 * SplitPane — Resizable two-panel layout
 *
 * Renders a left/primary panel and right/secondary panel with a draggable divider.
 * Used for list+detail patterns (case queue + case detail, statements + line items).
 *
 * The right panel can be toggled on/off via `showRight` prop.
 */
export default function SplitPane({
  left,
  right,
  defaultSplit = 0.4,
  minLeftWidth = 200,
  minRightWidth = 300,
  resizable = true,
  showRight = true,
  orientation = 'horizontal',
  onSplitChange,
  className = '',
}: SplitPaneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [splitRatio, setSplitRatio] = useState(defaultSplit);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!resizable) return;
    e.preventDefault();
    setIsDragging(true);
  }, [resizable]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isHorizontal = orientation === 'horizontal';
      const containerSize = isHorizontal ? rect.width : rect.height;
      const position = isHorizontal ? e.clientX - rect.left : e.clientY - rect.top;

      // Enforce min widths
      const minLeft = minLeftWidth / containerSize;
      const maxLeft = 1 - (minRightWidth / containerSize);
      const newRatio = Math.min(maxLeft, Math.max(minLeft, position / containerSize));

      setSplitRatio(newRatio);
      onSplitChange?.(newRatio);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, orientation, minLeftWidth, minRightWidth, onSplitChange]);

  const isHorizontal = orientation === 'horizontal';

  if (!showRight) {
    return (
      <div className={`h-full ${className}`}>
        {left}
      </div>
    );
  }

  const leftSize = `${(splitRatio * 100).toFixed(1)}%`;
  const rightSize = `${((1 - splitRatio) * 100).toFixed(1)}%`;

  return (
    <div
      ref={containerRef}
      className={`
        flex h-full overflow-hidden
        ${isHorizontal ? 'flex-row' : 'flex-col'}
        ${isDragging ? 'select-none' : ''}
        ${className}
      `}
    >
      {/* Left/Primary panel */}
      <div
        className="overflow-auto"
        style={isHorizontal ? { width: leftSize } : { height: leftSize }}
      >
        {left}
      </div>

      {/* Divider */}
      <div
        onMouseDown={handleMouseDown}
        className={`
          flex-shrink-0 bg-paper-200 dark:bg-ink-700
          ${isHorizontal ? 'w-px hover:w-1' : 'h-px hover:h-1'}
          ${resizable ? 'cursor-col-resize hover:bg-primary-300 transition-all' : ''}
          ${isDragging ? 'bg-primary-400 w-1' : ''}
        `}
        role="separator"
        aria-orientation={isHorizontal ? 'vertical' : 'horizontal'}
      />

      {/* Right/Secondary panel */}
      <div
        className="overflow-auto"
        style={isHorizontal ? { width: rightSize } : { height: rightSize }}
      >
        {right}
      </div>
    </div>
  );
}
