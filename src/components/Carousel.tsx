// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselItem {
  id: string;
  content: React.ReactNode;
}

export interface CarouselProps {
  /** Items to display in carousel */
  items: CarouselItem[];
  /** Auto-play interval in milliseconds (0 to disable) */
  autoPlay?: number;
  /** Show navigation arrows */
  showArrows?: boolean;
  /** Show dot indicators */
  showDots?: boolean;
  /** Enable infinite loop */
  loop?: boolean;
  /** Callback when slide changes */
  onSlideChange?: (index: number) => void;
  /** Number of items to show at once */
  itemsPerView?: number;
  /** Gap between items in pixels */
  gap?: number;
  /** Custom class name */
  className?: string;
}

export default function Carousel({
  items,
  autoPlay = 0,
  showArrows = true,
  showDots = true,
  loop = true,
  onSlideChange,
  itemsPerView = 1,
  gap = 16,
  className = '',
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalSlides = Math.ceil(items.length / itemsPerView);
  const maxIndex = totalSlides - 1;

  // Handle slide change
  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;

      let newIndex = index;

      if (!loop) {
        newIndex = Math.max(0, Math.min(index, maxIndex));
      } else {
        if (index > maxIndex) newIndex = 0;
        if (index < 0) newIndex = maxIndex;
      }

      setIsTransitioning(true);
      setCurrentIndex(newIndex);
      onSlideChange?.(newIndex);

      setTimeout(() => setIsTransitioning(false), 300);
    },
    [isTransitioning, loop, maxIndex, onSlideChange]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Auto-play
  useEffect(() => {
    if (autoPlay > 0) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, autoPlay);

      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }
    return undefined;
  }, [autoPlay, nextSlide]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay > 0) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, autoPlay);
    }
  };

  // Touch swipe handling
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const canGoPrev = loop || currentIndex > 0;
  const canGoNext = loop || currentIndex < maxIndex;

  const translateX = -(currentIndex * 100);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="overflow-hidden rounded-lg"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${translateX}%)`,
            gap: `${gap}px`,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0"
              style={{
                width: `calc(${100 / itemsPerView}% - ${gap * (itemsPerView - 1) / itemsPerView}px)`,
              }}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && items.length > itemsPerView && (
        <>
          <button
            onClick={prevSlide}
            disabled={!canGoPrev}
            className={`
              absolute left-2 top-1/2 -translate-y-1/2 z-10
              p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg
              hover:bg-white transition-all
              disabled:opacity-40 disabled:cursor-not-allowed
            `}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-ink-900" />
          </button>
          <button
            onClick={nextSlide}
            disabled={!canGoNext}
            className={`
              absolute right-2 top-1/2 -translate-y-1/2 z-10
              p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg
              hover:bg-white transition-all
              disabled:opacity-40 disabled:cursor-not-allowed
            `}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-ink-900" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {showDots && totalSlides > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                h-2 rounded-full transition-all
                ${currentIndex === index
                  ? 'w-8 bg-accent-600'
                  : 'w-2 bg-ink-300 hover:bg-ink-400'
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
