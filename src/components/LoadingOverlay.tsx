// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

export interface LoadingOverlayProps {
  show: boolean;
  message?: string;
  position?: 'top-right' | 'top-left' | 'center';
  className?: string;
}

/**
 * Subtle loading overlay that doesn't interfere with existing content
 */
export default function LoadingOverlay({
  show,
  message = 'Loading...',
  position = 'top-right',
  className = ''
}: LoadingOverlayProps) {
  if (!show) return null;

  const positionClasses = {
    'top-right': 'top-2 right-2',
    'top-left': 'top-2 left-2',
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  };

  return (
    <div className={`absolute ${positionClasses[position]} z-10 ${className}`}>
      <div className="flex items-center gap-2 text-ink-500 bg-white/90 px-3 py-2 rounded-md shadow-sm border border-ink-200">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-600"></div>
        <span className="text-xs font-medium">{message}</span>
      </div>
    </div>
  );
}
