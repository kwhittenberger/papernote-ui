// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

import React, { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';

export interface InfiniteScrollProps {
  /** Function to load more data */
  loadMore: () => Promise<void>;
  /** Whether there is more data to load */
  hasMore: boolean;
  /** Loading state */
  loading?: boolean;
  /** Children to render */
  children: React.ReactNode;
  /** Threshold in pixels from bottom to trigger load */
  threshold?: number;
  /** Custom loader component */
  loader?: React.ReactNode;
  /** Scroll container element (defaults to window) */
  scrollContainer?: HTMLElement | null;
  /** Reverse mode (load from top instead of bottom) */
  reverse?: boolean;
  /** Custom class name */
  className?: string;
}

export default function InfiniteScroll({
  loadMore,
  hasMore,
  loading = false,
  children,
  threshold = 200,
  loader,
  scrollContainer,
  reverse = false,
  className = '',
}: InfiniteScrollProps) {
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: scrollContainer,
      rootMargin: `${threshold}px`,
      threshold: 0.1,
    };

    const handleIntersection = async (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting && hasMore && !isLoading && !loading) {
        setIsLoading(true);
        try {
          await loadMore();
        } catch (error) {
          console.error('InfiniteScroll load error:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [loadMore, hasMore, isLoading, loading, threshold, scrollContainer]);

  const defaultLoader = (
    <div className="flex items-center justify-center py-4">
      <Loader2 className="h-6 w-6 text-accent-500 animate-spin" />
    </div>
  );

  return (
    <div className={className}>
      {reverse && (
        <>
          <div ref={observerTarget} />
          {(isLoading || loading) && (loader || defaultLoader)}
        </>
      )}

      {children}

      {!reverse && (
        <>
          {(isLoading || loading) && (loader || defaultLoader)}
          <div ref={observerTarget} />
        </>
      )}
    </div>
  );
}
