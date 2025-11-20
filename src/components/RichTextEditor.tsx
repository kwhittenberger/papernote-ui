// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

import React, { useRef } from 'react';
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link as LinkIcon,
  Code,
} from 'lucide-react';

export interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  minHeight?: string;
  maxHeight?: string;
  showToolbar?: boolean;
  className?: string;
}

export default function RichTextEditor({
  value,
  onChange,
  label,
  placeholder = 'Start typing...',
  disabled = false,
  minHeight = '200px',
  maxHeight = '500px',
  showToolbar = true,
  className = '',
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  // Execute formatting command
  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    updateContent();
  };

  // Update content
  const updateContent = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  // Handle paste (strip formatting)
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  };

  // Toolbar button component
  const ToolbarButton = ({
    icon: Icon,
    command,
    value,
    title,
  }: {
    icon: React.ComponentType<{ className?: string }>;
    command: string;
    value?: string;
    title: string;
  }) => (
    <button
      type="button"
      onClick={() => execCommand(command, value)}
      disabled={disabled}
      title={title}
      className="p-2 text-ink-600 hover:bg-paper-100 rounded transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
    >
      <Icon className="h-4 w-4" />
    </button>
  );

  return (
    <div className={className}>
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-ink-900 mb-1.5">{label}</label>
      )}

      {/* Container */}
      <div className="border border-paper-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-accent-400 focus-within:border-accent-400">
        {/* Toolbar */}
        {showToolbar && (
          <div className="flex items-center gap-1 p-2 border-b border-paper-200 bg-paper-50">
            <ToolbarButton icon={Bold} command="bold" title="Bold (Ctrl+B)" />
            <ToolbarButton icon={Italic} command="italic" title="Italic (Ctrl+I)" />
            <ToolbarButton icon={Underline} command="underline" title="Underline (Ctrl+U)" />

            <div className="w-px h-6 bg-paper-300 mx-1" />

            <ToolbarButton
              icon={List}
              command="insertUnorderedList"
              title="Bullet List"
            />
            <ToolbarButton
              icon={ListOrdered}
              command="insertOrderedList"
              title="Numbered List"
            />

            <div className="w-px h-6 bg-paper-300 mx-1" />

            <ToolbarButton icon={Code} command="formatBlock" value="<pre>" title="Code Block" />
            <button
              type="button"
              onClick={() => {
                const url = prompt('Enter URL:');
                if (url) execCommand('createLink', url);
              }}
              disabled={disabled}
              title="Insert Link"
              className="p-2 text-ink-600 hover:bg-paper-100 rounded transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <LinkIcon className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Editor */}
        <div
          ref={editorRef}
          contentEditable={!disabled}
          onInput={updateContent}
          onPaste={handlePaste}
          dangerouslySetInnerHTML={{ __html: value }}
          className={`
            p-3 outline-none overflow-y-auto
            text-sm text-ink-900
            ${disabled ? 'bg-paper-100 cursor-not-allowed' : 'bg-white'}
          `}
          style={{ minHeight, maxHeight }}
          data-placeholder={placeholder}
        />
      </div>

      <style>{`
        [contenteditable][data-placeholder]:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
