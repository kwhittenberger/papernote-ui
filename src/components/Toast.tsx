// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React, { useEffect, useState } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export interface ToastProps {
  id: string;
  type: ToastType;
  title: string;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

const toastStyles: Record<ToastType, { bg: string; border: string; icon: React.ReactNode }> = {
  success: {
    bg: 'bg-white',
    border: 'border-l-4 border-success-500',
    icon: <CheckCircle className="h-5 w-5 text-success-600" />,
  },
  error: {
    bg: 'bg-white',
    border: 'border-l-4 border-error-500',
    icon: <AlertCircle className="h-5 w-5 text-error-600" />,
  },
  warning: {
    bg: 'bg-white',
    border: 'border-l-4 border-warning-500',
    icon: <AlertTriangle className="h-5 w-5 text-warning-600" />,
  },
  info: {
    bg: 'bg-white',
    border: 'border-l-4 border-primary-500',
    icon: <Info className="h-5 w-5 text-primary-600" />,
  },
};

export default function Toast({ id, type, title, message, duration = 5000, onClose }: ToastProps) {
  const [isExiting, setIsExiting] = useState(false);
  const styles = toastStyles[type];

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose(id);
    }, 300); // Match animation duration
  };

  return (
    <div
      className={`${styles.bg} ${styles.border} bg-subtle-grain rounded-lg shadow-lg p-4 min-w-[320px] max-w-md transition-all duration-300 ${
        isExiting ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0 animate-slide-in-right'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">{styles.icon}</div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-ink-900 mb-1">{title}</h4>
          <p className="text-sm text-ink-600">{message}</p>
        </div>
        <button
          onClick={handleClose}
          className="flex-shrink-0 text-ink-400 hover:text-ink-600 transition-colors"
          aria-label="Close notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

const positionStyles: Record<ToastPosition, string> = {
  'top-right': 'top-20 right-6',
  'top-left': 'top-20 left-6',
  'bottom-right': 'bottom-6 right-6',
  'bottom-left': 'bottom-6 left-6',
  'top-center': 'top-20 left-1/2 -translate-x-1/2',
  'bottom-center': 'bottom-6 left-1/2 -translate-x-1/2',
};

export function ToastContainer({
  toasts,
  onClose,
  position = 'top-right'
}: {
  toasts: ToastProps[];
  onClose: (id: string) => void;
  position?: ToastPosition;
}) {
  return (
    <div className={`fixed ${positionStyles[position]} z-50 flex flex-col gap-3 pointer-events-none`}>
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast {...toast} onClose={onClose} />
        </div>
      ))}
    </div>
  );
}
