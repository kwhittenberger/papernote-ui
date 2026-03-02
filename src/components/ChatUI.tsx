import React, { forwardRef } from 'react';
import { Send, Bot, User } from 'lucide-react';

/** A single message in the chat thread */
export interface ChatMessage {
  /** Unique message identifier */
  id: string;
  /** Who sent the message */
  role: 'user' | 'assistant';
  /** Message content */
  content: string;
  /** When the message was sent */
  timestamp: Date;
}

export interface ChatUIProps {
  /** Message thread to display */
  messages: ChatMessage[];
  /** Controlled input value */
  inputValue: string;
  /** Show typing indicator */
  isLoading?: boolean;
  /** Input placeholder text */
  placeholder?: string;
  /** Clickable suggested question chips */
  suggestedQuestions?: string[];
  /** Input change handler */
  onInputChange: (value: string) => void;
  /** Send message handler */
  onSend: () => void;
  /** Suggested question click handler */
  onSuggestedQuestionClick?: (question: string) => void;
  /** Ref for auto-scrolling to bottom of messages */
  messagesEndRef?: React.RefObject<HTMLDivElement | null>;
  /** Container height (CSS value) */
  height?: string;
  /** Additional CSS classes */
  className?: string;
}

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

/**
 * ChatUI - Conversational chat interface component.
 *
 * Renders a scrollable message thread with user/assistant bubbles,
 * a typing indicator, an input bar with send button (Enter to send,
 * Shift+Enter for newline), and optional suggested question chips.
 *
 * @example
 * ```tsx
 * <ChatUI
 *   messages={messages}
 *   inputValue={input}
 *   isLoading={loading}
 *   onInputChange={setInput}
 *   onSend={handleSend}
 *   suggestedQuestions={['What are my top deals?']}
 *   onSuggestedQuestionClick={handleQuestion}
 * />
 * ```
 */
const ChatUI = forwardRef<HTMLDivElement, ChatUIProps>(({
  messages,
  inputValue,
  isLoading = false,
  placeholder = 'Ask a question...',
  suggestedQuestions = [],
  onInputChange,
  onSend,
  onSuggestedQuestionClick,
  messagesEndRef,
  height = '600px',
  className = '',
}, ref) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim()) {
        onSend();
      }
    }
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col bg-white rounded-lg border border-paper-200 overflow-hidden ${className}`}
      style={{ height }}
    >
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && !isLoading && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Bot className="w-10 h-10 text-ink-300 mb-3" />
            <p className="text-ink-500 text-sm">No messages yet. Start a conversation!</p>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            {/* Avatar */}
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                message.role === 'user'
                  ? 'bg-primary-100 text-primary-600'
                  : 'bg-paper-200 text-ink-500'
              }`}
            >
              {message.role === 'user' ? (
                <User className="w-4 h-4" />
              ) : (
                <Bot className="w-4 h-4" />
              )}
            </div>

            {/* Bubble */}
            <div
              className={`max-w-[75%] rounded-xl px-4 py-2.5 ${
                message.role === 'user'
                  ? 'bg-primary-500 text-white rounded-br-sm'
                  : 'bg-paper-100 text-ink-800 border border-paper-200 rounded-bl-sm'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              <p
                className={`text-[10px] mt-1 ${
                  message.role === 'user' ? 'text-primary-200' : 'text-ink-400'
                }`}
              >
                {formatRelativeTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-paper-200 text-ink-500 flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-paper-100 border border-paper-200 rounded-xl rounded-bl-sm px-4 py-3">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 bg-ink-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-ink-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-ink-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        {messagesEndRef && <div ref={messagesEndRef} />}
      </div>

      {/* Suggested questions */}
      {suggestedQuestions.length > 0 && messages.length === 0 && (
        <div className="px-4 pb-2 flex flex-wrap gap-2">
          {suggestedQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => onSuggestedQuestionClick?.(question)}
              className="text-xs px-3 py-1.5 rounded-full border border-primary-200 text-primary-700 bg-primary-50 hover:bg-primary-100 transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      )}

      {/* Input area */}
      <div className="border-t border-paper-200 p-3 bg-paper-50">
        <div className="flex items-end gap-2">
          <textarea
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            rows={1}
            className="flex-1 resize-none rounded-lg border border-paper-300 bg-white px-3 py-2 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300"
          />
          <button
            onClick={onSend}
            disabled={!inputValue.trim() || isLoading}
            className="flex-shrink-0 p-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
});

ChatUI.displayName = 'ChatUI';

export default ChatUI;
