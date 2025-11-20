import { useState, useRef, useEffect, ReactNode, cloneElement, isValidElement } from 'react';

export interface HoverCardProps {
  trigger: ReactNode;
  children: ReactNode;
  delay?: number;
  closeDelay?: number;
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  className?: string;
}

export default function HoverCard({
  trigger,
  children,
  delay = 200,
  closeDelay = 300,
  side = 'bottom',
  align = 'center',
  sideOffset = 8,
  className = '',
}: HoverCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const isMouseOverRef = useRef(false);

  const updatePosition = () => {
    if (!triggerRef.current || !cardRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const cardRect = cardRef.current.getBoundingClientRect();
    let top = 0;
    let left = 0;

    // Calculate position based on side
    switch (side) {
      case 'top':
        top = triggerRect.top - cardRect.height - sideOffset;
        break;
      case 'bottom':
        top = triggerRect.bottom + sideOffset;
        break;
      case 'left':
        left = triggerRect.left - cardRect.width - sideOffset;
        break;
      case 'right':
        left = triggerRect.right + sideOffset;
        break;
    }

    // Calculate alignment
    if (side === 'top' || side === 'bottom') {
      switch (align) {
        case 'start':
          left = triggerRect.left;
          break;
        case 'center':
          left = triggerRect.left + triggerRect.width / 2 - cardRect.width / 2;
          break;
        case 'end':
          left = triggerRect.right - cardRect.width;
          break;
      }
    } else {
      switch (align) {
        case 'start':
          top = triggerRect.top;
          break;
        case 'center':
          top = triggerRect.top + triggerRect.height / 2 - cardRect.height / 2;
          break;
        case 'end':
          top = triggerRect.bottom - cardRect.height;
          break;
      }
    }

    // Ensure card stays within viewport
    const maxLeft = window.innerWidth - cardRect.width - 8;
    const maxTop = window.innerHeight - cardRect.height - 8;
    left = Math.max(8, Math.min(left, maxLeft));
    top = Math.max(8, Math.min(top, maxTop));

    setPosition({ top, left });
  };

  useEffect(() => {
    if (isOpen) {
      updatePosition();
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
      return () => {
        window.removeEventListener('scroll', updatePosition);
        window.removeEventListener('resize', updatePosition);
      };
    }
    return undefined;
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = undefined;
    }

    openTimeoutRef.current = setTimeout(() => {
      isMouseOverRef.current = true;
      setIsOpen(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = undefined;
    }

    closeTimeoutRef.current = setTimeout(() => {
      if (!isMouseOverRef.current) {
        setIsOpen(false);
      }
    }, closeDelay);
  };

  const handleCardMouseEnter = () => {
    isMouseOverRef.current = true;
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = undefined;
    }
  };

  const handleCardMouseLeave = () => {
    isMouseOverRef.current = false;
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, closeDelay);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <>
      {/* Trigger */}
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        {isValidElement(trigger)
          ? cloneElement(trigger as React.ReactElement<any>)
          : trigger}
      </div>

      {/* Hover Card Portal */}
      {isOpen && (
        <div
          ref={cardRef}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
          className={`
            fixed z-50
            bg-white rounded-lg shadow-lg border border-ink-200
            p-4 max-w-xs
            animate-in fade-in zoom-in duration-200
            ${className}
          `}
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
          role="tooltip"
        >
          {children}
        </div>
      )}
    </>
  );
}
