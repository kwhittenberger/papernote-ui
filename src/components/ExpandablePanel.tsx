import { useState, useEffect, ReactNode } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export interface ExpandablePanelProps {
  /** Content shown in the collapsed header bar */
  collapsedContent: ReactNode;
  /** Full content shown when expanded */
  children: ReactNode;
  /** Position of the panel */
  position?: 'bottom' | 'top';
  /**
   * Positioning mode:
   * - 'viewport': Fixed to viewport edges (default, for standalone use)
   * - 'container': Sticky within parent container (for use inside Page/AppLayout)
   */
  mode?: 'viewport' | 'container';
  /** Whether the panel is expanded (controlled) */
  expanded?: boolean;
  /** Default expanded state (uncontrolled) */
  defaultExpanded?: boolean;
  /** Callback when expanded state changes */
  onExpandedChange?: (expanded: boolean) => void;
  /** Height when expanded */
  expandedHeight?: string | number;
  /**
   * Maximum width of the panel (e.g., '1400px', '80%', 1200)
   * When set, the panel will be centered horizontally within its container/viewport
   */
  maxWidth?: string | number;
  /** Whether to show the expand/collapse toggle button */
  showToggle?: boolean;
  /** Custom toggle button content */
  toggleContent?: ReactNode;
  /** Additional actions to show in the header (right side) */
  headerActions?: ReactNode;
  /** Close on Escape key */
  closeOnEscape?: boolean;
  /** Visual variant */
  variant?: 'default' | 'elevated' | 'bordered';
  /** Size variant affecting header height */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes for the container */
  className?: string;
  /** Additional CSS classes for the header */
  headerClassName?: string;
  /** Additional CSS classes for the content */
  contentClassName?: string;
  /** Z-index for the panel (only applies in viewport mode) */
  zIndex?: number;
}

const sizeClasses = {
  sm: {
    header: 'h-10 px-3',
    text: 'text-sm',
    icon: 'h-4 w-4',
  },
  md: {
    header: 'h-12 px-4',
    text: 'text-sm',
    icon: 'h-5 w-5',
  },
  lg: {
    header: 'h-14 px-5',
    text: 'text-base',
    icon: 'h-5 w-5',
  },
};

const variantClasses = {
  default: {
    container: 'bg-white border-ink-200',
    header: 'bg-paper-50',
  },
  elevated: {
    container: 'bg-white shadow-lg border-ink-200',
    header: 'bg-white',
  },
  bordered: {
    container: 'bg-white border-2 border-ink-300',
    header: 'bg-paper-100',
  },
};

/**
 * ExpandablePanel - A panel that sticks to the bottom (or top) and can expand/collapse
 * 
 * For bottom position: expands UPWARD (content appears above header)
 * For top position: expands DOWNWARD (content appears below header)
 * 
 * Two modes of operation:
 * - `viewport`: Fixed to the viewport (for standalone pages, covers StatusBar)
 * - `container`: Sticky within its parent container (for use inside Page/AppLayout, respects StatusBar)
 * 
 * @example Basic usage (viewport mode - full page)
 * ```tsx
 * <ExpandablePanel
 *   mode="viewport"
 *   collapsedContent={<Text>3 items selected</Text>}
 *   expandedHeight="300px"
 * >
 *   {content}
 * </ExpandablePanel>
 * ```
 * 
 * @example Inside Page/AppLayout (container mode - respects StatusBar)
 * ```tsx
 * <Page>
 *   <ExpandablePanelContainer>
 *     <div className="flex-1 overflow-auto">
 *       {pageContent}
 *     </div>
 *     <ExpandablePanel
 *       mode="container"
 *       collapsedContent={<Text>3 items selected</Text>}
 *       expandedHeight="300px"
 *     >
 *       {selectedItemsContent}
 *     </ExpandablePanel>
 *   </ExpandablePanelContainer>
 * </Page>
 * ```
 * 
 * @example With maxWidth to match page content
 * ```tsx
 * <ExpandablePanel
 *   mode="container"
 *   maxWidth="1400px"
 *   collapsedContent={<Text>Generated SQL</Text>}
 *   expandedHeight="300px"
 * >
 *   {sqlContent}
 * </ExpandablePanel>
 * ```
 */
export default function ExpandablePanel({
  collapsedContent,
  children,
  position = 'bottom',
  mode = 'viewport',
  expanded: controlledExpanded,
  defaultExpanded = false,
  onExpandedChange,
  expandedHeight = '300px',
  maxWidth,
  showToggle = true,
  toggleContent,
  headerActions,
  closeOnEscape = true,
  variant = 'elevated',
  size = 'md',
  className = '',
  headerClassName = '',
  contentClassName = '',
  zIndex = 40,
}: ExpandablePanelProps) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);

  // Determine if controlled or uncontrolled
  const isControlled = controlledExpanded !== undefined;
  const expanded = isControlled ? controlledExpanded : internalExpanded;

  const setExpanded = (value: boolean) => {
    if (!isControlled) {
      setInternalExpanded(value);
    }
    onExpandedChange?.(value);
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // Close on Escape
  useEffect(() => {
    if (!closeOnEscape || !expanded) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setExpanded(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeOnEscape, expanded]);

  const sizeStyle = sizeClasses[size];
  const variantStyle = variantClasses[variant];

  const heightValue = typeof expandedHeight === 'number' ? `${expandedHeight}px` : expandedHeight;
  const maxWidthValue = maxWidth 
    ? (typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth)
    : undefined;

  // Position classes differ based on mode
  const getPositionClasses = () => {
    if (mode === 'viewport') {
      // Fixed to viewport
      return position === 'bottom' 
        ? 'fixed bottom-0 left-0 right-0' 
        : 'fixed top-0 left-0 right-0';
    } else {
      // Absolute positioning within container - snaps to bottom
      return position === 'bottom'
        ? 'absolute bottom-0 left-0 right-0'
        : 'absolute top-0 left-0 right-0';
    }
  };

  // For bottom panel, we want chevron up to expand (reveal content above)
  // For top panel, we want chevron down to expand (reveal content below)
  const ChevronIcon = position === 'bottom'
    ? (expanded ? ChevronDown : ChevronUp)
    : (expanded ? ChevronUp : ChevronDown);

  // Header component
  const header = (
    <div
      className={`
        flex items-center justify-between
        ${sizeStyle.header}
        ${variantStyle.header}
        border-ink-200
        flex-shrink-0
        ${headerClassName}
      `}
    >
      {/* Left side: collapsed content */}
      <div className={`flex-1 flex items-center ${sizeStyle.text}`}>
        {collapsedContent}
      </div>

      {/* Right side: actions and toggle */}
      <div className="flex items-center gap-2">
        {headerActions}
        
        {showToggle && (
          <button
            type="button"
            onClick={toggleExpanded}
            className={`
              flex items-center justify-center
              p-1.5 rounded-md
              text-ink-500 hover:text-ink-700
              hover:bg-ink-100
              transition-colors
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1
            `}
            aria-expanded={expanded}
            aria-label={expanded ? 'Collapse panel' : 'Expand panel'}
          >
            {toggleContent || <ChevronIcon className={sizeStyle.icon} />}
          </button>
        )}
      </div>
    </div>
  );

  // Content component
  const content = (
    <div
      className={`
        overflow-hidden
        transition-all duration-300 ease-in-out
      `}
      style={{
        maxHeight: expanded ? heightValue : '0px',
        opacity: expanded ? 1 : 0,
      }}
    >
      <div 
        className={`
          overflow-y-auto p-4
          ${contentClassName}
        `}
        style={{ maxHeight: heightValue }}
      >
        {children}
      </div>
    </div>
  );

  // Build container styles
  const containerStyle: React.CSSProperties = {
    ...(mode === 'viewport' ? { zIndex } : {}),
    ...(maxWidthValue ? { 
      maxWidth: maxWidthValue, 
      marginLeft: 'auto', 
      marginRight: 'auto' 
    } : {}),
  };

  return (
    <div
      className={`
        ${getPositionClasses()}
        ${variantStyle.container}
        border-t rounded-t-lg
        transition-all duration-300 ease-in-out
        flex flex-col
        ${className}
      `}
      style={containerStyle}
    >
      {/* For bottom position: content ABOVE header (expands up) */}
      {/* For top position: header ABOVE content (expands down) */}
      {position === 'bottom' ? (
        <>
          {content}
          {header}
        </>
      ) : (
        <>
          {header}
          {content}
        </>
      )}
    </div>
  );
}

/**
 * ExpandablePanelSpacer - Adds spacing to prevent content from being hidden behind the panel
 * Only needed in viewport mode. In container mode, the panel is part of the flex layout.
 * 
 * @example
 * ```tsx
 * <div>
 *   <MainContent />
 *   <ExpandablePanelSpacer size="md" />
 * </div>
 * <ExpandablePanel mode="viewport" position="bottom" size="md" {...props} />
 * ```
 */
export function ExpandablePanelSpacer({ 
  size = 'md' 
}: { 
  size?: 'sm' | 'md' | 'lg' 
}) {
  const heights = {
    sm: 'h-10',
    md: 'h-12',
    lg: 'h-14',
  };

  return <div className={heights[size]} />;
}

/**
 * ExpandablePanelContainer - Wrapper that sets up proper layout for container mode
 * Use this to wrap your page content when using ExpandablePanel with mode="container"
 * 
 * This creates a relative container with full height so the panel can position absolutely
 * at the bottom while the content scrolls above it.
 * 
 * @example
 * ```tsx
 * <Page>
 *   <ExpandablePanelContainer>
 *     <div className="flex-1 overflow-auto p-4">
 *       {pageContent}
 *     </div>
 *     <ExpandablePanel mode="container" {...props}>
 *       {panelContent}
 *     </ExpandablePanel>
 *   </ExpandablePanelContainer>
 * </Page>
 * ```
 */
export function ExpandablePanelContainer({ 
  children,
  className = '',
}: { 
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative h-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
