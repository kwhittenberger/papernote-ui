// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React from 'react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatUIProps {
  messages: ChatMessage[];
  inputValue: string;
  isLoading: boolean;
  suggestedQuestions?: string[];
  isMinimized?: boolean;
  className?: string;
  messagesEndRef?: React.RefObject<HTMLDivElement | null>;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onSuggestedQuestion?: (question: string) => void;
  onMinimize?: (minimized: boolean) => void;
}

export const ChatUI: React.FC<ChatUIProps> = ({
  messages,
  inputValue,
  isLoading,
  suggestedQuestions = [],
  isMinimized = false,
  className = '',
  messagesEndRef,
  onInputChange,
  onSendMessage,
  onKeyPress,
  onSuggestedQuestion,
  onMinimize
}) => {
  if (isMinimized) {
    return (
      <button
        onClick={() => onMinimize?.(false)}
        className="fixed bottom-6 right-6 h-16 w-16 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white rounded-2xl shadow-2xl shadow-primary-500/30 hover:shadow-3xl hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center z-50 border border-primary-400/30 backdrop-blur-sm"
        title="Open AI Assistant"
      >
        <span className="text-3xl animate-bounce-subtle">🤖</span>
        <div className="absolute -top-1 -right-1 h-4 w-4 bg-accent-400 border-2 border-white rounded-full animate-pulse"></div>
      </button>
    );
  }

  return (
    <div className={`bg-white/80 backdrop-blur-2xl rounded-2xl border border-neutral-200/60 shadow-2xl shadow-neutral-900/10 flex flex-col ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200/60 bg-gradient-to-r from-primary-50/80 to-primary-100/40 rounded-t-2xl">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="h-10 w-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25">
              <span className="text-white text-xl">🤖</span>
            </div>
            <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-success-500 border-2 border-white rounded-full animate-pulse"></div>
          </div>
          <div>
            <h3 className="font-bold text-neutral-900 tracking-tight">AI Analytics Assistant</h3>
            <p className="text-xs text-neutral-600 font-medium">Ask me about your commission data</p>
          </div>
        </div>
        {onMinimize && (
          <button
            onClick={() => onMinimize(true)}
            className="text-neutral-400 hover:text-neutral-600 text-xl p-2 rounded-xl hover:bg-neutral-100/80 transition-all duration-200"
            title="Minimize"
          >
            ➖
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 max-h-96 min-h-64 bg-gradient-to-b from-neutral-25/50 to-white/80">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-3/4 px-5 py-3 rounded-2xl whitespace-pre-wrap text-sm font-medium shadow-sm ${
                message.role === 'user'
                  ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-primary-500/20'
                  : 'bg-white/90 backdrop-blur-sm text-neutral-800 border border-neutral-200/60 shadow-neutral-900/5'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg max-w-3/4">
              <div className="flex items-center gap-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:100ms]"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:200ms]"></div>
                </div>
                <span className="text-xs">Analyzing your data...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length <= 2 && suggestedQuestions.length > 0 && (
        <div className="px-4 py-2 border-t border-gray-100 bg-gray-50">
          <p className="text-xs text-gray-600 mb-2">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.slice(0, 3).map((question) => (
              <button
                key={question}
                onClick={() => onSuggestedQuestion?.(question)}
                className="text-xs bg-white border border-gray-300 px-2 py-1 rounded hover:bg-gray-50 text-left"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-6 border-t border-neutral-200/60 bg-gradient-to-r from-white/90 to-neutral-50/80 rounded-b-2xl">
        <div className="flex gap-3">
          <textarea
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={onKeyPress}
            placeholder="Ask about your commissions, trends, or insights..."
            className="flex-1 px-4 py-3 border border-neutral-300/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-400 resize-none bg-white/80 backdrop-blur-sm font-medium placeholder:text-neutral-500 shadow-sm hover:shadow-md transition-all duration-200"
            rows={1}
            disabled={isLoading}
          />
          <button
            onClick={onSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="px-5 py-3 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 disabled:from-neutral-300 disabled:to-neutral-400 disabled:cursor-not-allowed text-sm font-semibold transition-all duration-200 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:scale-105"
          >
            {isLoading ? '⏳' : '📤'}
          </button>
        </div>
      </div>
    </div>
  );
};
