import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export type StatusType = 'success' | 'error' | 'warning' | 'info';

export interface StatusMessage {
  id: string;
  type: StatusType;
  message: string;
  timestamp: Date;
  autoHide?: boolean;
  autoHideDelay?: number; // in milliseconds
  persistent?: boolean;
}

export interface StatusBarProps {
  className?: string;
  maxMessages?: number;
  defaultAutoHideDelay?: number;
}

// Global status management
class StatusManager {
  private messages: StatusMessage[] = [];
  private listeners: Set<(messages: StatusMessage[]) => void> = new Set();

  addMessage(
    type: StatusType,
    message: string,
    options: {
      autoHide?: boolean;
      autoHideDelay?: number;
      persistent?: boolean;
    } = {}
  ): string {
    const id = `status_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const statusMessage: StatusMessage = {
      id,
      type,
      message,
      timestamp: new Date(),
      autoHide: options.autoHide ?? true,
      autoHideDelay: options.autoHideDelay ?? 5000,
      persistent: options.persistent ?? false
    };

    this.messages = [statusMessage, ...this.messages];
    this.notifyListeners();

    // Auto-hide logic
    if (statusMessage.autoHide && !statusMessage.persistent) {
      setTimeout(() => {
        this.removeMessage(id);
      }, statusMessage.autoHideDelay);
    }

    return id;
  }

  removeMessage(id: string): void {
    this.messages = this.messages.filter(msg => msg.id !== id);
    this.notifyListeners();
  }

  clearAll(): void {
    this.messages = [];
    this.notifyListeners();
  }

  clearByType(type: StatusType): void {
    this.messages = this.messages.filter(msg => msg.type !== type);
    this.notifyListeners();
  }

  subscribe(listener: (messages: StatusMessage[]) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener([...this.messages]));
  }

  getMessages(): StatusMessage[] {
    return [...this.messages];
  }
}

// Global instance
export const statusManager = new StatusManager();

// Convenience functions for adding different types of messages
export const addSuccessMessage = (message: string, options?: { autoHide?: boolean; autoHideDelay?: number; persistent?: boolean }) =>
  statusManager.addMessage('success', message, options);

export const addErrorMessage = (message: string, options?: { autoHide?: boolean; autoHideDelay?: number; persistent?: boolean }) =>
  statusManager.addMessage('error', message, options);

export const addWarningMessage = (message: string, options?: { autoHide?: boolean; autoHideDelay?: number; persistent?: boolean }) =>
  statusManager.addMessage('warning', message, options);

export const addInfoMessage = (message: string, options?: { autoHide?: boolean; autoHideDelay?: number; persistent?: boolean }) =>
  statusManager.addMessage('info', message, options);

const getStatusIcon = (type: StatusType) => {
  switch (type) {
    case 'success':
      return <CheckCircle className="h-4 w-4" />;
    case 'error':
      return <AlertCircle className="h-4 w-4" />;
    case 'warning':
      return <AlertTriangle className="h-4 w-4" />;
    case 'info':
      return <Info className="h-4 w-4" />;
  }
};

const getStatusStyles = (type: StatusType) => {
  switch (type) {
    case 'success':
      return 'bg-green-50 text-green-800 border-green-200';
    case 'error':
      return 'bg-red-50 text-red-800 border-red-200';
    case 'warning':
      return 'bg-yellow-50 text-yellow-800 border-yellow-200';
    case 'info':
      return 'bg-blue-50 text-blue-800 border-blue-200';
  }
};

export const StatusBar: React.FC<StatusBarProps> = ({
  className = '',
  maxMessages = 3,
  defaultAutoHideDelay = 5000
}) => {
  const [messages, setMessages] = useState<StatusMessage[]>([]);

  useEffect(() => {
    const unsubscribe = statusManager.subscribe(setMessages);
    return unsubscribe;
  }, []);

  const handleDismiss = (id: string) => {
    statusManager.removeMessage(id);
  };

  const displayMessages = messages.slice(0, maxMessages);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 ${className}`}>
      <div className="bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-2">
          {displayMessages.length > 0 ? (
            <>
              <div className="space-y-2">
                {displayMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-center justify-between p-3 rounded-lg border ${getStatusStyles(message.type)}`}
                  >
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(message.type)}
                      <span className="text-sm font-medium">{message.message}</span>
                      <span className="text-xs opacity-75">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>

                    {!message.persistent && (
                      <button
                        onClick={() => handleDismiss(message.id)}
                        className="ml-4 text-current opacity-70 hover:opacity-100 transition-opacity"
                        aria-label="Dismiss message"
                        title="Dismiss message"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {messages.length > maxMessages && (
                <div className="mt-2 text-center">
                  <span className="text-xs text-gray-500">
                    {messages.length - maxMessages} more message(s)
                  </span>
                </div>
              )}
            </>
          ) : (
            // Default status when no messages
            <div className="flex items-center justify-between p-2 text-gray-500">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">System Online</span>
                </div>
                <span className="text-xs">•</span>
                <span className="text-xs">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-xs">
                <span>Ready</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
