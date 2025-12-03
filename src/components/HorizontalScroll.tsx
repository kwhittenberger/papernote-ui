import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type GapSize = 'none' | 'sm' | 'md' | 'lg' | number;

export interface HorizontalScrollProps {
  /** Items to display in horizontal scroll */
  children: React.ReactNode;
  /** Gap between items */
  gap?: GapSize;
  /** Pixels of next item visible as hint that more content exists */
  peekAmount?: number;
  /** Show dot indicators below */
  showIndicators?: boolean;
  /** Snap scroll to item boundaries */
  snapToItem?: boolean;
  /** When to show navigation arrows */
  showArrows?: 'hover' | 'always' | 'never';
  /** Scroll behavior */
  scrollBehavior?: 'smooth' | 'auto';
  /** Additional class name for container */
  className?: string;
  /** Additional class name for scroll container */
  scrollClassName?: string;
}

/**
 * HorizontalScroll - Horizontally scrollable container with peek indicators
 *
 * Designed for mobile carousels of cards with:
 * - Touch-friendly momentum scrolling
 * - Peek hint showing more items exist
 * - Optional snap scrolling
 * - Navigation arrows for desktop
 *
 * @example
 * ```tsx
 * <HorizontalScroll gap="md" peekAmount={24} showIndicators>
 *   <Card>Bill 1</Card>
 *   <Card>Bill 2</Card>
 *   <Card>Bill 3</Card>
 * </HorizontalScroll>
 * ```
 */
export function HorizontalScroll({
  children,
  gap = 'md',
  peekAmount = 24,
  showIndicators = false,
  snapToItem = true,
  showArrows = 'hover',
  scrollBehavior = 'smooth',
  className = '',
  scrollClassName = '',
}: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Gap classes
  const gapClasses: Record<string, string> = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };

  const gapStyle = typeof gap === 'number' ? { gap: `${gap}px` } : {};
  const gapClass = typeof gap === 'string' ? gapClasses[gap] : '';

  // Check scroll position and update state
  const checkScrollPosition = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);

    // Calculate active index based on scroll position
    if (showIndicators && container.children.length > 0) {
      const children = Array.from(container.children) as HTMLElement[];
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      children.forEach((child, index) => {
        const childRect = child.getBoundingClientRect();
        const childCenter = childRect.left + childRect.width / 2;
        const distance = Math.abs(childCenter - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    }
  }, [showIndicators]);

  // Initialize and handle resize
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    setItemCount(React.Children.count(children));
    checkScrollPosition();

    const resizeObserver = new ResizeObserver(() => {
      checkScrollPosition();
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [children, checkScrollPosition]);

  // Handle scroll event
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      checkScrollPosition();
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [checkScrollPosition]);

  // Scroll by one item
  const scrollByItem = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;

    const firstChild = children[0];
    const itemWidth = firstChild.offsetWidth;
    const gapValue = typeof gap === 'number' ? gap : 
      gap === 'sm' ? 8 : gap === 'md' ? 16 : gap === 'lg' ? 24 : 0;

    const scrollAmount = itemWidth + gapValue;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: scrollBehavior,
    });
  };

  // Scroll to specific index
  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    if (index < 0 || index >= children.length) return;

    const child = children[index];
    child.scrollIntoView({
      behavior: scrollBehavior,
      block: 'nearest',
      inline: 'center',
    });
  };

  const showLeftArrow = showArrows === 'always' || (showArrows === 'hover' && isHovered);
  const showRightArrow = showArrows === 'always' || (showArrows === 'hover' && isHovered);

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Arrow */}
      {showLeftArrow && canScrollLeft && (
        <button
          onClick={() => scrollByItem('left')}
          className="
            absolute left-0 top-1/2 -translate-y-1/2 z-10
            w-10 h-10 flex items-center justify-center
            bg-white/90 backdrop-blur-sm rounded-full shadow-lg
            text-ink-600 hover:text-ink-900 hover:bg-white
            transition-all duration-200
            -ml-2
          "
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className={`
          flex overflow-x-auto scrollbar-hide
          ${gapClass}
          ${snapToItem ? 'snap-x snap-mandatory' : ''}
          ${scrollClassName}
        `}
        style={{
          ...gapStyle,
          paddingRight: peekAmount > 0 ? `${peekAmount}px` : undefined,
          scrollPaddingLeft: '0px',
          scrollPaddingRight: `${peekAmount}px`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={`flex-shrink-0 ${snapToItem ? 'snap-start' : ''}`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {showRightArrow && canScrollRight && (
        <button
          onClick={() => scrollByItem('right')}
          className="
            absolute right-0 top-1/2 -translate-y-1/2 z-10
            w-10 h-10 flex items-center justify-center
            bg-white/90 backdrop-blur-sm rounded-full shadow-lg
            text-ink-600 hover:text-ink-900 hover:bg-white
            transition-all duration-200
            -mr-2
          "
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {/* Dot Indicators */}
      {showIndicators && itemCount > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {Array.from({ length: itemCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-200
                ${index === activeIndex
                  ? 'bg-accent-500 w-4'
                  : 'bg-paper-300 hover:bg-paper-400'
                }
              `}
              aria-label={`Go to item ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HorizontalScroll;
