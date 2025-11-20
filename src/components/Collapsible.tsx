import { useState, useRef, useEffect, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

export interface CollapsibleProps {
  trigger: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  showIcon?: boolean;
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
}

export default function Collapsible({
  trigger,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  disabled = false,
  showIcon = true,
  className = '',
  triggerClassName = '',
  contentClassName = '',
}: CollapsibleProps) {
  const isControlled = controlledOpen !== undefined;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  const handleToggle = () => {
    if (disabled) return;

    const newOpen = !isOpen;

    if (!isControlled) {
      setInternalOpen(newOpen);
    }

    onOpenChange?.(newOpen);
  };

  // Update height when content changes or open state changes
  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, children]);

  // Recalculate height when window resizes
  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <div className={className}>
      {/* Trigger */}
      <button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        className={`
          w-full flex items-center justify-between gap-2
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${triggerClassName}
        `}
        aria-expanded={isOpen}
        aria-controls="collapsible-content"
      >
        <span className="flex-1 text-left">{trigger}</span>

        {showIcon && (
          <ChevronDown
            className={`
              h-4 w-4 transition-transform duration-200
              ${isOpen ? 'rotate-180' : 'rotate-0'}
            `}
          />
        )}
      </button>

      {/* Content */}
      <div
        id="collapsible-content"
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: `${height}px` }}
        aria-hidden={!isOpen}
      >
        <div className={contentClassName}>
          {children}
        </div>
      </div>
    </div>
  );
}
