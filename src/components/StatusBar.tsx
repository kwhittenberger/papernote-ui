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
  /** Status message to display when no toast messages */
  message?: string;
  /** Connection status (online/offline/connecting) */
  connectionStatus?: 'online' | 'offline' | 'connecting';
  /** Show connection indicator */
  showConnectionStatus?: boolean;
  /** Show current time */
  showTime?: boolean;
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
  defaultAutoHideDelay = 5000,
  message = 'Ready',
  connectionStatus = 'online',
  showConnectionStatus = true,
  showTime = true
}) => {
  const [messages, setMessages] = useState<StatusMessage[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const unsubscribe = statusManager.subscribe(setMessages);
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!showTime) return;
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [showTime]);

  const handleDismiss = (id: string) => {
    statusManager.removeMessage(id);
  };

  const getConnectionIcon = () => {
    switch (connectionStatus) {
      case 'online':
        return <div className="w-2 h-2 rounded-full bg-green-500" title="Connected" />;
      case 'offline':
        return <div className="w-2 h-2 rounded-full bg-red-500" title="Disconnected" />;
      case 'connecting':
        return <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" title="Connecting..." />;
      default:
        return null;
    }
  };

  const getConnectionText = () => {
    switch (connectionStatus) {
      case 'online':
        return 'Connected';
      case 'offline':
        return 'Offline';
      case 'connecting':
        return 'Connecting...';
      default:
        return '';
    }
  };

  const formatTime = () => {
    return currentTime.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const displayMessages = messages.slice(0, maxMessages);

  return (
    <div className={`h-8 bg-paper-200 border-t border-paper-300 px-4 flex items-center text-xs text-ink-700 flex-shrink-0 shadow-md ${className}`}>
      {displayMessages.length > 0 ? (
        <>
          {/* System status on left */}
          <div className="flex items-center gap-2">
            {showConnectionStatus && (
              <div className="flex items-center gap-1.5">
                {getConnectionIcon()}
                <span className="text-xs font-medium">{getConnectionText()}</span>
              </div>
            )}
            {message && (
              <>
                {showConnectionStatus && <span className="text-paper-500">|</span>}
                <span className="font-medium">{message}</span>
              </>
            )}
          </div>
          
          {/* Toast messages in center */}
          <div className="flex items-center space-x-2 flex-1 justify-center">
            {displayMessages.map((message, index) => (
              <div
                key={message.id}
                className={`flex items-center space-x-1 px-2 py-0.5 rounded ${getStatusStyles(message.type)}`}
              >
                {getStatusIcon(message.type)}
                <span className="text-xs font-medium">{message.message}</span>
                {!message.persistent && (
                  <button
                    onClick={() => handleDismiss(message.id)}
                    className="ml-1 text-current opacity-70 hover:opacity-100 transition-opacity"
                    aria-label="Dismiss message"
                    title="Dismiss message"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
            ))}
            {messages.length > maxMessages && (
              <span className="text-xs text-gray-500">
                +{messages.length - maxMessages} more
              </span>
            )}
          </div>
          
          {/* Time on the right */}
          <div className="flex items-center gap-3">
            {showTime && (
              <span className="font-mono text-xs text-ink-600">{formatTime()}</span>
            )}
          </div>
        </>
      ) : (
        <>
          {/* Default status when no messages - notebook-ui style */}
          <div className="flex items-center gap-2">
            {showConnectionStatus && (
              <div className="flex items-center gap-1.5">
                {getConnectionIcon()}
                <span className="text-xs font-medium">{getConnectionText()}</span>
              </div>
            )}
            {message && (
              <>
                {showConnectionStatus && <span className="text-paper-500">|</span>}
                <span className="font-medium">{message}</span>
              </>
            )}
          </div>

          {/* Right side - Time */}
          <div className="flex items-center gap-3 ml-auto">
            {showTime && (
              <span className="font-mono text-xs text-ink-600">{formatTime()}</span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default StatusBar;
