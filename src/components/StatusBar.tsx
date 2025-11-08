// StatusBar Component - Fixed bottom status bar for application-wide status messages
// Displays system status, notifications, and connection state

import React, { useState, useEffect } from 'react';

export interface StatusBarProps {
  /** Status message to display */
  message?: string;
  /** Connection status (online/offline/connecting) */
  connectionStatus?: 'online' | 'offline' | 'connecting';
  /** Show connection indicator */
  showConnectionStatus?: boolean;
  /** Custom className */
  className?: string;
  /** Additional status items to display on the right */
  rightContent?: React.ReactNode;
  /** Show current time */
  showTime?: boolean;
}

/**
 * Status bar component that displays application status at the bottom.
 * Part of the Layout component flex structure.
 */
export const StatusBar: React.FC<StatusBarProps> = ({
  message = 'Ready',
  connectionStatus = 'online',
  showConnectionStatus = true,
  className = '',
  rightContent,
  showTime = true
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (!showTime) return;
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [showTime]);

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

  return (
    <div className={`h-8 bg-paper-300 border-t border-paper-400 px-4 flex items-center justify-between text-xs text-ink-700 flex-shrink-0 shadow-md ${className}`}>
      {/* Left side - Status message */}
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

      {/* Right side - Time and custom content */}
      <div className="flex items-center gap-3">
        {rightContent}
        {showTime && (
          <span className="font-mono text-xs text-ink-600">{formatTime()}</span>
        )}
      </div>
    </div>
  );
};

export default StatusBar;
