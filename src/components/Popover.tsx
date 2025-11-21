import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

export interface PopoverProps {
  /** Trigger element */
  trigger: React.ReactNode;
  /** Popover content */
  children: React.ReactNode;
  /** Placement of popover relative to trigger */
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
  /** Trigger mode */
  triggerMode?: 'click' | 'hover' | 'focus';
  /** Show arrow pointer */
  showArrow?: boolean;
  /** Offset from trigger (px) */
  offset?: number;
  /** Controlled open state */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Close on outside click */
  closeOnClickOutside?: boolean;
  /** Close on escape key */
  closeOnEscape?: boolean;
  /** Delay before showing (ms) - for hover trigger */
  showDelay?: number;
  /** Delay before hiding (ms) - for hover trigger */
  hideDelay?: number;
  /** Class name for popover content */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
}

export default function Popover({
  trigger: triggerElement,
  children,
  placement = 'bottom',
  triggerMode = 'click',
  showArrow = true,
  offset = 8,
  open: controlledOpen,
  onOpenChange,
  closeOnClickOutside = true,
  closeOnEscape = true,
  showDelay = 0,
  hideDelay = 0,
  className = '',
  disabled = false,
}: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [actualPlacement, setActualPlacement] = useState(placement);
  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const showTimeoutRef = useRef<number | null>(null);
  const hideTimeoutRef = useRef<number | null>(null);

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const setOpen = useCallback((open: boolean) => {
    if (disabled) return;

    if (onOpenChange) {
      onOpenChange(open);
    } else {
      setInternalOpen(open);
    }
  }, [disabled, onOpenChange]);

  // Calculate popover position
  const calculatePosition = useCallback(() => {
    if (!triggerRef.current || !popoverRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let top = 0;
    let left = 0;
    let finalPlacement = placement;

    // Calculate initial position based on placement
    switch (placement) {
      case 'top':
      case 'top-start':
      case 'top-end':
        top = triggerRect.top - popoverRect.height - offset;
        left = placement === 'top-start'
          ? triggerRect.left
          : placement === 'top-end'
          ? triggerRect.right - popoverRect.width
          : triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
        break;

      case 'bottom':
      case 'bottom-start':
      case 'bottom-end':
        top = triggerRect.bottom + offset;
        left = placement === 'bottom-start'
          ? triggerRect.left
          : placement === 'bottom-end'
          ? triggerRect.right - popoverRect.width
          : triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
        break;

      case 'left':
      case 'left-start':
      case 'left-end':
        top = placement === 'left-start'
          ? triggerRect.top
          : placement === 'left-end'
          ? triggerRect.bottom - popoverRect.height
          : triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
        left = triggerRect.left - popoverRect.width - offset;
        break;

      case 'right':
      case 'right-start':
      case 'right-end':
        top = placement === 'right-start'
          ? triggerRect.top
          : placement === 'right-end'
          ? triggerRect.bottom - popoverRect.height
          : triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
        left = triggerRect.right + offset;
        break;
    }

    // Collision detection and adjustment
    if (top < 10) {
      // Flip to bottom if not enough space on top
      if (placement.startsWith('top')) {
        top = triggerRect.bottom + offset;
        finalPlacement = placement.replace('top', 'bottom') as typeof placement;
      } else {
        top = 10;
      }
    }

    if (top + popoverRect.height > viewportHeight - 10) {
      // Flip to top if not enough space on bottom
      if (placement.startsWith('bottom')) {
        top = triggerRect.top - popoverRect.height - offset;
        finalPlacement = placement.replace('bottom', 'top') as typeof placement;
      } else {
        top = viewportHeight - popoverRect.height - 10;
      }
    }

    if (left < 10) {
      left = 10;
    }

    if (left + popoverRect.width > viewportWidth - 10) {
      left = viewportWidth - popoverRect.width - 10;
    }

    setPosition({ top, left });
    setActualPlacement(finalPlacement);
  }, [placement, offset]);

  // Update position when open or window resizes
  useEffect(() => {
    if (!isOpen) return;

    calculatePosition();

    const handleResize = () => calculatePosition();
    const handleScroll = () => calculatePosition();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isOpen, calculatePosition]);

  // Handle outside click
  useEffect(() => {
    if (!isOpen || !closeOnClickOutside) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeOnClickOutside, setOpen]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, setOpen]);

  // Trigger handlers
  const handleClick = () => {
    if (triggerMode === 'click') {
      setOpen(!isOpen);
    }
  };

  const handleMouseEnter = () => {
    if (triggerMode === 'hover') {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      showTimeoutRef.current = window.setTimeout(() => {
        setOpen(true);
      }, showDelay);
    }
  };

  const handleMouseLeave = () => {
    if (triggerMode === 'hover') {
      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current);
      }
      hideTimeoutRef.current = window.setTimeout(() => {
        setOpen(false);
      }, hideDelay);
    }
  };

  const handleFocus = () => {
    if (triggerMode === 'focus') {
      setOpen(true);
    }
  };

  const handleBlur = () => {
    if (triggerMode === 'focus') {
      setOpen(false);
    }
  };

  // Arrow position calculation
  const getArrowStyle = () => {
    if (!showArrow) return {};

    const arrowSize = 8;
    const style: React.CSSProperties = {
      position: 'absolute',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    };

    if (actualPlacement.startsWith('top')) {
      style.bottom = -arrowSize;
      style.left = '50%';
      style.transform = 'translateX(-50%)';
      style.borderWidth = `${arrowSize}px ${arrowSize}px 0 ${arrowSize}px`;
      style.borderColor = 'white transparent transparent transparent';
    } else if (actualPlacement.startsWith('bottom')) {
      style.top = -arrowSize;
      style.left = '50%';
      style.transform = 'translateX(-50%)';
      style.borderWidth = `0 ${arrowSize}px ${arrowSize}px ${arrowSize}px`;
      style.borderColor = 'transparent transparent white transparent';
    } else if (actualPlacement.startsWith('left')) {
      style.right = -arrowSize;
      style.top = '50%';
      style.transform = 'translateY(-50%)';
      style.borderWidth = `${arrowSize}px 0 ${arrowSize}px ${arrowSize}px`;
      style.borderColor = 'transparent transparent transparent white';
    } else if (actualPlacement.startsWith('right')) {
      style.left = -arrowSize;
      style.top = '50%';
      style.transform = 'translateY(-50%)';
      style.borderWidth = `${arrowSize}px ${arrowSize}px ${arrowSize}px 0`;
      style.borderColor = 'transparent white transparent transparent';
    }

    return style;
  };

  const popoverContent = isOpen && (
    <div
      ref={popoverRef}
      className={`
        fixed z-50 bg-white rounded-lg shadow-lg border border-paper-200 p-3
        animate-fade-in
        ${className}
      `}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
      onMouseEnter={triggerMode === 'hover' ? handleMouseEnter : undefined}
      onMouseLeave={triggerMode === 'hover' ? handleMouseLeave : undefined}
    >
      {children}
      {showArrow && <div style={getArrowStyle()} />}
    </div>
  );

  return (
    <>
      <div
        ref={triggerRef}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="inline-block"
      >
        {triggerElement}
      </div>
      {typeof window !== 'undefined' && createPortal(popoverContent, document.body)}
    </>
  );
}
