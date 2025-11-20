// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import { AlertTriangle, X, CheckCircle, Info, AlertCircle } from 'lucide-react';

interface NotificationBarProps {
  notifications: Array<{
    id: string;
    type: 'warning' | 'error' | 'info' | 'success';
    title: string;
    message: string;
    dismissible?: boolean;
  }>;
  onDismiss?: (id: string) => void;
}

const notificationStyles = {
  warning: 'bg-gradient-to-r from-warning-50 to-warning-100 border-warning-300 text-warning-900 shadow-lg shadow-warning-500/20',
  error: 'bg-gradient-to-r from-error-50 to-error-100 border-error-300 text-error-900 shadow-lg shadow-error-500/20',
  info: 'bg-gradient-to-r from-primary-50 to-primary-100 border-primary-300 text-primary-900 shadow-lg shadow-primary-500/20',
  success: 'bg-gradient-to-r from-success-50 to-success-100 border-success-300 text-success-900 shadow-lg shadow-success-500/20'
};

const iconStyles = {
  warning: 'text-warning-600',
  error: 'text-error-600',
  info: 'text-primary-600',
  success: 'text-success-600'
};

const getNotificationIcon = (type: 'warning' | 'error' | 'info' | 'success') => {
  switch (type) {
    case 'success':
      return CheckCircle;
    case 'error':
      return AlertCircle;
    case 'info':
      return Info;
    case 'warning':
    default:
      return AlertTriangle;
  }
};

export default function NotificationBar({ notifications, onDismiss }: NotificationBarProps) {
  if (!notifications || notifications.length === 0) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-md">
      {notifications.map((notification) => {
        const IconComponent = getNotificationIcon(notification.type);
        return (
          <div
            key={notification.id}
            className={`border-2 rounded-xl p-4 backdrop-blur-sm transform transition-all duration-300 ease-in-out animate-slide-in ${notificationStyles[notification.type]}`}
          >
            <div className="flex items-start space-x-3">
              <div className={`flex-shrink-0 p-1 rounded-full bg-white bg-opacity-50 ${iconStyles[notification.type]}`}>
                <IconComponent className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold mb-1 leading-tight">
                  {notification.title}
                </p>
                <p className="text-sm leading-relaxed opacity-90">
                  {notification.message}
                </p>
              </div>
              {notification.dismissible && onDismiss && (
                <button
                  onClick={() => onDismiss(notification.id)}
                  className={`flex-shrink-0 p-1.5 hover:bg-white hover:bg-opacity-60 rounded-full transition-all duration-200 ${iconStyles[notification.type]} hover:scale-110`}
                  title="Dismiss notification"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
