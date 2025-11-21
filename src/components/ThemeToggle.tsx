
import { Moon, Sun } from 'lucide-react';

export interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
  className?: string;
}

export default function ThemeToggle({ theme, onToggle, className = '' }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`p-2.5 rounded-lg text-ink-600 dark:text-slate-400 hover:text-ink-900 dark:hover:text-slate-100 hover:bg-paper-100 dark:hover:bg-slate-800 transition-all shadow-xs hover:shadow-sm ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}
