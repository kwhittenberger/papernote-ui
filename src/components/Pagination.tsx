// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPageNumbers?: boolean;
  maxPageNumbers?: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showPageNumbers = true,
  maxPageNumbers = 5,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const halfMax = Math.floor(maxPageNumbers / 2);

    let startPage = Math.max(1, currentPage - halfMax);
    let endPage = Math.min(totalPages, currentPage + halfMax);

    // Adjust if we're near the start or end
    if (currentPage <= halfMax) {
      endPage = Math.min(maxPageNumbers, totalPages);
    }
    if (currentPage > totalPages - halfMax) {
      startPage = Math.max(1, totalPages - maxPageNumbers + 1);
    }

    // Add first page and ellipsis if needed
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) pages.push('...');
    }

    // Add page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add ellipsis and last page if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = showPageNumbers ? getPageNumbers() : [];

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-ink-700 bg-white border border-paper-300 rounded-lg hover:bg-paper-50 hover:border-paper-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs hover:shadow-sm"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Numbers */}
      {showPageNumbers && (
        <div className="flex items-center gap-1">
          {pageNumbers.map((page, index) => {
            if (page === '...') {
              return (
                <span key={`ellipsis-${index}`} className="px-3 py-2 text-ink-500">
                  ...
                </span>
              );
            }

            const pageNum = page as number;
            const isActive = pageNum === currentPage;

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? 'bg-accent-500 text-white shadow-sm'
                    : 'text-ink-700 bg-white border border-paper-300 hover:bg-paper-50 hover:border-paper-400'
                }`}
                aria-label={`Page ${pageNum}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {pageNum}
              </button>
            );
          })}
        </div>
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-ink-700 bg-white border border-paper-300 rounded-lg hover:bg-paper-50 hover:border-paper-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs hover:shadow-sm"
        aria-label="Next page"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
