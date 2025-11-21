
import { useState } from 'react';
import { Eye, Code, Info } from 'lucide-react';

export interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  minHeight?: string;
  maxHeight?: string;
  showPreview?: boolean;
  showHelp?: boolean;
  className?: string;
}

export default function MarkdownEditor({
  value,
  onChange,
  label,
  placeholder = '# Start writing markdown...',
  disabled = false,
  minHeight = '300px',
  maxHeight = '600px',
  showPreview = true,
  showHelp = true,
  className = '',
}: MarkdownEditorProps) {
  const [mode, setMode] = useState<'edit' | 'preview' | 'split'>('edit');
  const [showHelpPanel, setShowHelpPanel] = useState(false);

  // Simple markdown to HTML converter (basic implementation)
  const markdownToHtml = (markdown: string): string => {
    let html = markdown;

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/\_\_(.*?)\_\_/gim, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
    html = html.replace(/\_(.*?)\_/gim, '<em>$1</em>');

    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Images
    html = html.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" />');

    // Code blocks
    html = html.replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>');

    // Inline code
    html = html.replace(/`(.*?)`/gim, '<code>$1</code>');

    // Lists
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    html = html.replace(/^\d+\. (.*$)/gim, '<li>$1</li>');

    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

    // Line breaks
    html = html.replace(/\n/gim, '<br/>');

    return html;
  };

  const helpContent = [
    { syntax: '# Heading 1', description: 'Largest heading' },
    { syntax: '## Heading 2', description: 'Second level heading' },
    { syntax: '**bold text**', description: 'Bold' },
    { syntax: '*italic text*', description: 'Italic' },
    { syntax: '[text](url)', description: 'Link' },
    { syntax: '![alt](url)', description: 'Image' },
    { syntax: '`code`', description: 'Inline code' },
    { syntax: '```code block```', description: 'Code block' },
    { syntax: '* list item', description: 'Bullet list' },
    { syntax: '1. list item', description: 'Numbered list' },
    { syntax: '> quote', description: 'Blockquote' },
  ];

  return (
    <div className={className}>
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-ink-900 mb-1.5">{label}</label>
      )}

      {/* Toolbar */}
      <div className="flex items-center justify-between p-2 border border-b-0 border-paper-300 rounded-t-lg bg-paper-50">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setMode('edit')}
            className={`
              flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded transition-colors
              ${mode === 'edit'
                ? 'bg-white text-accent-900 shadow-sm'
                : 'text-ink-600 hover:bg-white/50'
              }
            `}
          >
            <Code className="h-3.5 w-3.5" />
            Edit
          </button>

          {showPreview && (
            <>
              <button
                type="button"
                onClick={() => setMode('preview')}
                className={`
                  flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded transition-colors
                  ${mode === 'preview'
                    ? 'bg-white text-accent-900 shadow-sm'
                    : 'text-ink-600 hover:bg-white/50'
                  }
                `}
              >
                <Eye className="h-3.5 w-3.5" />
                Preview
              </button>

              <button
                type="button"
                onClick={() => setMode('split')}
                className={`
                  flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded transition-colors
                  ${mode === 'split'
                    ? 'bg-white text-accent-900 shadow-sm'
                    : 'text-ink-600 hover:bg-white/50'
                  }
                `}
              >
                Split
              </button>
            </>
          )}
        </div>

        {showHelp && (
          <button
            type="button"
            onClick={() => setShowHelpPanel(!showHelpPanel)}
            className="flex items-center gap-1 px-2 py-1 text-xs text-ink-600 hover:text-ink-900 transition-colors"
          >
            <Info className="h-3.5 w-3.5" />
            Markdown Help
          </button>
        )}
      </div>

      {/* Help Panel */}
      {showHelpPanel && (
        <div className="p-3 border border-b-0 border-paper-300 bg-accent-50 text-xs">
          <div className="grid grid-cols-2 gap-2">
            {helpContent.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <code className="px-2 py-0.5 bg-white rounded text-ink-900 font-mono">
                  {item.syntax}
                </code>
                <span className="text-ink-600">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Editor/Preview Container */}
      <div className={`flex border border-paper-300 rounded-b-lg overflow-hidden ${mode === 'split' ? '' : ''}`}>
        {/* Editor */}
        {(mode === 'edit' || mode === 'split') && (
          <div className={`${mode === 'split' ? 'w-1/2 border-r border-paper-300' : 'w-full'}`}>
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              disabled={disabled}
              className={`
                w-full p-3 outline-none resize-none
                text-sm text-ink-900 font-mono placeholder-ink-400
                ${disabled ? 'bg-paper-100 cursor-not-allowed' : 'bg-white'}
              `}
              style={{ minHeight, maxHeight }}
            />
          </div>
        )}

        {/* Preview */}
        {(mode === 'preview' || mode === 'split') && (
          <div className={`${mode === 'split' ? 'w-1/2' : 'w-full'} overflow-y-auto bg-white`}>
            <div
              className="p-3 prose prose-sm max-w-none"
              style={{ minHeight, maxHeight }}
              dangerouslySetInnerHTML={{ __html: markdownToHtml(value) }}
            />
          </div>
        )}
      </div>

      <style>{`
        .prose h1 { font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; }
        .prose h2 { font-size: 1.5rem; font-weight: 600; margin-bottom: 0.75rem; }
        .prose h3 { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; }
        .prose p { margin-bottom: 1rem; }
        .prose ul, .prose ol { margin-left: 1.5rem; margin-bottom: 1rem; }
        .prose li { margin-bottom: 0.25rem; }
        .prose code { background-color: #f3f4f6; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: monospace; }
        .prose pre { background-color: #1f2937; color: #f3f4f6; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin-bottom: 1rem; }
        .prose pre code { background-color: transparent; padding: 0; }
        .prose blockquote { border-left: 4px solid #e5e7eb; padding-left: 1rem; margin-bottom: 1rem; color: #6b7280; }
        .prose a { color: #3b82f6; text-decoration: underline; }
        .prose img { max-width: 100%; height: auto; border-radius: 0.5rem; margin-bottom: 1rem; }
      `}</style>
    </div>
  );
}
