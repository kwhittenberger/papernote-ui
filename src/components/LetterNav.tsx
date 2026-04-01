const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export interface LetterNavProps {
  activeLetter: string | null;
  onChange: (letter: string | null) => void;
  availableLetters?: string[];
  className?: string;
}

export default function LetterNav({
  activeLetter,
  onChange,
  availableLetters,
  className = '',
}: LetterNavProps) {
  const hasAvailability = availableLetters && availableLetters.length > 0;
  const availableSet = hasAvailability
    ? new Set(availableLetters!.map((l) => l.toUpperCase()))
    : null;

  return (
    <div className={`flex items-center gap-0.5 px-4 py-1.5 border-b border-paper-200 bg-white overflow-x-auto ${className}`}>
      <button
        type="button"
        onClick={() => onChange(null)}
        className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
          activeLetter === null
            ? 'bg-accent-500 text-white'
            : 'text-ink-600 hover:bg-paper-100'
        }`}
      >
        All
      </button>
      {LETTERS.map((letter) => {
        const isActive = activeLetter === letter;
        const isAvailable = !availableSet || availableSet.has(letter);
        return (
          <button
            key={letter}
            type="button"
            onClick={() => onChange(isActive ? null : letter)}
            className={`w-7 h-7 text-xs font-medium rounded transition-colors ${
              isActive
                ? 'bg-accent-500 text-white'
                : isAvailable
                  ? 'text-ink-600 hover:bg-paper-100'
                  : 'text-ink-300'
            }`}
          >
            {letter}
          </button>
        );
      })}
      <button
        type="button"
        onClick={() => onChange(activeLetter === '#' ? null : '#')}
        className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
          activeLetter === '#'
            ? 'bg-accent-500 text-white'
            : 'text-ink-600 hover:bg-paper-100'
        }`}
      >
        #
      </button>
    </div>
  );
}
