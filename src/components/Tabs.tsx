import React, { useState, useEffect, useRef, useCallback, createContext, useContext } from 'react';
import { X, Plus } from 'lucide-react';
import Badge from './Badge';

// =============================================================================
// Types & Interfaces
// =============================================================================

export interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
  /** Badge to display on the tab trigger */
  badge?: number | string;
  /** Badge variant color */
  badgeVariant?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  /** Whether this individual tab can be closed (overrides global closeable) */
  closeable?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  /** Controlled mode: Currently active tab ID */
  activeTab?: string;
  /** Uncontrolled mode: Initial tab ID (ignored if activeTab is provided) */
  defaultTab?: string;
  variant?: 'underline' | 'pill';
  /** Orientation of tabs (default: 'horizontal') */
  orientation?: 'horizontal' | 'vertical';
  /** Size of tabs (default: 'md') */
  size?: 'sm' | 'md' | 'lg';
  /** Called when tab changes (required for controlled mode) */
  onChange?: (tabId: string) => void;
  /**
   * Lazy loading: Only render active tab content (default: false)
   * When true, inactive tabs are not rendered at all until visited.
   */
  lazy?: boolean;
  /**
   * Preserve state: Keep tabs mounted after first render (requires lazy=true)
   * When true with lazy, tabs stay in DOM after being visited once.
   */
  preserveState?: boolean;
  /**
   * Global closeable: Allow all tabs to be closed (default: false)
   * Individual tab.closeable can override this.
   */
  closeable?: boolean;
  /** Called when a tab close button is clicked */
  onClose?: (tabId: string) => void;
  /** Show an add button after the tabs (default: false) */
  showAddButton?: boolean;
  /** Called when add button is clicked */
  onAdd?: () => void;
  /** Label for the add button (default: 'Add tab') */
  addButtonLabel?: string;
}

// =============================================================================
// Compound Component Context
// =============================================================================

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
  variant: 'underline' | 'pill';
  orientation: 'horizontal' | 'vertical';
  size: 'sm' | 'md' | 'lg';
  lazy: boolean;
  preserveState: boolean;
  visitedTabs: Set<string>;
  registerTab: (value: string) => void;
  unregisterTab: (value: string) => void;
  tabValues: string[];
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs compound components must be used within a TabsRoot component');
  }
  return context;
}

// =============================================================================
// Compound Components
// =============================================================================

export interface TabsRootProps {
  children: React.ReactNode;
  /** Default active tab value (uncontrolled mode) */
  defaultValue?: string;
  /** Active tab value (controlled mode) */
  value?: string;
  /** Called when tab changes */
  onValueChange?: (value: string) => void;
  /** Visual variant */
  variant?: 'underline' | 'pill';
  /** Layout orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Size of tabs */
  size?: 'sm' | 'md' | 'lg';
  /** Only render active tab content */
  lazy?: boolean;
  /** Keep tabs mounted after first visit (requires lazy) */
  preserveState?: boolean;
  /** Additional class name */
  className?: string;
}

/**
 * TabsRoot - Root component for compound tabs pattern
 *
 * @example
 * ```tsx
 * <TabsRoot defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content 1</TabsContent>
 *   <TabsContent value="tab2">Content 2</TabsContent>
 * </TabsRoot>
 * ```
 */
export function TabsRoot({
  children,
  defaultValue,
  value: controlledValue,
  onValueChange,
  variant = 'underline',
  orientation = 'horizontal',
  size = 'md',
  lazy = false,
  preserveState = false,
  className = '',
}: TabsRootProps) {
  const [tabValues, setTabValues] = useState<string[]>([]);
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const [visitedTabs, setVisitedTabs] = useState<Set<string>>(new Set(defaultValue ? [defaultValue] : []));

  const isControlled = controlledValue !== undefined;
  const activeTab = isControlled ? controlledValue : internalValue;

  // Set initial value when tabs register
  useEffect(() => {
    if (!activeTab && tabValues.length > 0) {
      const firstTab = tabValues[0];
      if (isControlled) {
        onValueChange?.(firstTab);
      } else {
        setInternalValue(firstTab);
      }
    }
  }, [tabValues, activeTab, isControlled, onValueChange]);

  // Track visited tabs
  useEffect(() => {
    if (activeTab && preserveState) {
      setVisitedTabs(prev => new Set(prev).add(activeTab));
    }
  }, [activeTab, preserveState]);

  const setActiveTab = useCallback((value: string) => {
    if (!isControlled) {
      setInternalValue(value);
    }
    onValueChange?.(value);
  }, [isControlled, onValueChange]);

  const registerTab = useCallback((value: string) => {
    setTabValues(prev => prev.includes(value) ? prev : [...prev, value]);
  }, []);

  const unregisterTab = useCallback((value: string) => {
    setTabValues(prev => prev.filter(v => v !== value));
  }, []);

  const contextValue: TabsContextValue = {
    activeTab,
    setActiveTab,
    variant,
    orientation,
    size,
    lazy,
    preserveState,
    visitedTabs,
    registerTab,
    unregisterTab,
    tabValues,
  };

  // Size-specific gap classes
  const gapClasses = {
    sm: orientation === 'vertical' ? 'gap-1.5' : 'gap-4',
    md: orientation === 'vertical' ? 'gap-2' : 'gap-6',
    lg: orientation === 'vertical' ? 'gap-3' : 'gap-8',
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div
        className={`w-full ${orientation === 'vertical' ? `flex ${gapClasses[size]}` : ''} ${className}`}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export interface TabsListProps {
  children: React.ReactNode;
  /** Additional class name */
  className?: string;
}

/**
 * TabsList - Container for tab triggers
 */
export function TabsList({ children, className = '' }: TabsListProps) {
  const { variant, orientation, size } = useTabsContext();

  const sizeClasses = {
    sm: {
      gap: orientation === 'vertical' ? 'gap-1.5' : 'gap-4',
      minWidth: orientation === 'vertical' ? 'min-w-[150px]' : '',
    },
    md: {
      gap: orientation === 'vertical' ? 'gap-2' : 'gap-6',
      minWidth: orientation === 'vertical' ? 'min-w-[200px]' : '',
    },
    lg: {
      gap: orientation === 'vertical' ? 'gap-3' : 'gap-8',
      minWidth: orientation === 'vertical' ? 'min-w-[250px]' : '',
    },
  };

  return (
    <div
      className={`
        flex ${orientation === 'vertical' ? 'flex-col' : 'items-center'}
        ${variant === 'underline'
          ? orientation === 'vertical'
            ? `border-r border-paper-200 ${sizeClasses[size].gap} pr-6`
            : `border-b border-paper-200 ${sizeClasses[size].gap}`
          : `${sizeClasses[size].gap} p-1 bg-paper-50 rounded-lg`
        }
        ${sizeClasses[size].minWidth}
        ${className}
      `}
      role="tablist"
      aria-orientation={orientation}
    >
      {children}
    </div>
  );
}

export interface TabsTriggerProps {
  children: React.ReactNode;
  /** Unique value for this tab */
  value: string;
  /** Disabled state */
  disabled?: boolean;
  /** Icon to show before label */
  icon?: React.ReactNode;
  /** Badge to display */
  badge?: number | string;
  /** Badge variant */
  badgeVariant?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  /** Additional class name */
  className?: string;
}

/**
 * TabsTrigger - Individual tab button
 */
export function TabsTrigger({
  children,
  value,
  disabled = false,
  icon,
  badge,
  badgeVariant = 'info',
  className = '',
}: TabsTriggerProps) {
  const { activeTab, setActiveTab, variant, orientation, size, registerTab, unregisterTab } = useTabsContext();
  const isActive = activeTab === value;

  // Register this tab on mount
  useEffect(() => {
    registerTab(value);
    return () => unregisterTab(value);
  }, [value, registerTab, unregisterTab]);

  const sizeClasses = {
    sm: { padding: 'px-3 py-1.5', text: 'text-xs', icon: 'h-3.5 w-3.5', badgeSize: 'sm' as const },
    md: { padding: 'px-4 py-2.5', text: 'text-sm', icon: 'h-4 w-4', badgeSize: 'sm' as const },
    lg: { padding: 'px-5 py-3', text: 'text-base', icon: 'h-5 w-5', badgeSize: 'md' as const },
  };

  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${value}`}
      aria-disabled={disabled}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      onClick={() => !disabled && setActiveTab(value)}
      className={`
        flex items-center gap-2 ${sizeClasses[size].padding} ${sizeClasses[size].text} font-medium transition-all duration-200
        ${orientation === 'vertical' ? 'w-full justify-start' : ''}
        ${
          variant === 'underline'
            ? isActive
              ? orientation === 'vertical'
                ? 'text-accent-900 border-r-2 border-accent-500 -mr-[1px]'
                : 'text-accent-900 border-b-2 border-accent-500 -mb-[1px]'
              : orientation === 'vertical'
              ? 'text-ink-600 hover:text-ink-900 border-r-2 border-transparent'
              : 'text-ink-600 hover:text-ink-900 border-b-2 border-transparent'
            : isActive
            ? 'bg-white text-accent-900 rounded-md shadow-xs'
            : 'text-ink-600 hover:text-ink-900 hover:bg-white/50 rounded-md'
        }
        ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
        focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-1
        ${className}
      `}
    >
      {icon && <span className={`flex-shrink-0 ${sizeClasses[size].icon}`}>{icon}</span>}
      <span>{children}</span>
      {badge !== undefined && (
        <Badge variant={badgeVariant} size={sizeClasses[size].badgeSize}>
          {badge}
        </Badge>
      )}
    </button>
  );
}

export interface TabsContentProps {
  children: React.ReactNode;
  /** Value matching the corresponding TabsTrigger */
  value: string;
  /** Additional class name */
  className?: string;
}

/**
 * TabsContent - Content panel for a tab
 */
export function TabsContent({ children, value, className = '' }: TabsContentProps) {
  const { activeTab, lazy, preserveState, visitedTabs, orientation, size } = useTabsContext();
  const isActive = activeTab === value;

  // Determine if content should be rendered
  const shouldRender = !lazy || isActive || (preserveState && visitedTabs.has(value));

  if (!shouldRender) {
    return null;
  }

  const spacingClasses = {
    sm: orientation === 'vertical' ? '' : 'mt-4',
    md: orientation === 'vertical' ? '' : 'mt-6',
    lg: orientation === 'vertical' ? '' : 'mt-8',
  };

  return (
    <div
      id={`panel-${value}`}
      role="tabpanel"
      aria-labelledby={`tab-${value}`}
      hidden={!isActive}
      tabIndex={0}
      className={`
        ${orientation === 'vertical' ? 'flex-1' : spacingClasses[size]}
        ${isActive ? 'animate-fade-in focus:outline-none' : 'hidden'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// =============================================================================
// Data-Driven Component (Original API)
// =============================================================================

/**
 * Tabs - Data-driven tabs component
 *
 * Use this for simple use cases where tabs are defined as an array.
 * For more complex layouts, use the compound components (TabsRoot, TabsList, TabsTrigger, TabsContent).
 */
export default function Tabs({
  tabs,
  activeTab: controlledActiveTab,
  defaultTab,
  variant = 'underline',
  orientation = 'horizontal',
  size = 'md',
  onChange,
  lazy = false,
  preserveState = false,
  closeable = false,
  onClose,
  showAddButton = false,
  onAdd,
  addButtonLabel = 'Add tab',
}: TabsProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(defaultTab || tabs[0]?.id);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [visitedTabs, setVisitedTabs] = useState<Set<string>>(new Set([defaultTab || tabs[0]?.id]));
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Controlled mode: use activeTab prop, Uncontrolled mode: use internal state
  const isControlled = controlledActiveTab !== undefined;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

  // Track visited tabs for preserveState
  useEffect(() => {
    if (activeTab && preserveState) {
      setVisitedTabs(prev => new Set(prev).add(activeTab));
    }
  }, [activeTab, preserveState]);

  // Get enabled tab indices for keyboard navigation
  const enabledIndices = tabs.map((tab, index) => tab.disabled ? -1 : index).filter(i => i !== -1);

  // Ensure the activeTab exists in the current tabs array
  // This handles the case where tabs array reference changes at the same time as activeTab
  useEffect(() => {
    const tabExists = tabs.some(tab => tab.id === activeTab);
    if (!tabExists && tabs.length > 0) {
      // If the activeTab doesn't exist in the new tabs array, use the first tab
      if (isControlled) {
        onChange?.(tabs[0].id);
      } else {
        setInternalActiveTab(tabs[0].id);
      }
    }
  }, [tabs, activeTab, isControlled, onChange]);

  const handleTabChange = useCallback((tabId: string) => {
    if (!isControlled) {
      setInternalActiveTab(tabId);
    }
    onChange?.(tabId);
  }, [isControlled, onChange]);

  // Handle tab close
  const handleClose = useCallback((e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    onClose?.(tabId);
  }, [onClose]);

  // Keyboard navigation handler
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = focusedIndex >= 0 ? focusedIndex : tabs.findIndex(t => t.id === activeTab);
    const currentEnabledPosition = enabledIndices.indexOf(currentIndex);

    let nextIndex = -1;
    let shouldPreventDefault = true;

    // Determine navigation keys based on orientation
    const prevKey = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
    const nextKey = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';

    switch (e.key) {
      case prevKey:
        // Move to previous enabled tab
        if (currentEnabledPosition > 0) {
          nextIndex = enabledIndices[currentEnabledPosition - 1];
        } else {
          // Wrap to last enabled tab
          nextIndex = enabledIndices[enabledIndices.length - 1];
        }
        break;

      case nextKey:
        // Move to next enabled tab
        if (currentEnabledPosition < enabledIndices.length - 1) {
          nextIndex = enabledIndices[currentEnabledPosition + 1];
        } else {
          // Wrap to first enabled tab
          nextIndex = enabledIndices[0];
        }
        break;

      case 'Home':
        // Move to first enabled tab
        nextIndex = enabledIndices[0];
        break;

      case 'End':
        // Move to last enabled tab
        nextIndex = enabledIndices[enabledIndices.length - 1];
        break;

      case 'Enter':
      case ' ':
        // Activate focused tab
        if (focusedIndex >= 0 && !tabs[focusedIndex]?.disabled) {
          handleTabChange(tabs[focusedIndex].id);
        }
        break;

      case 'Delete':
      case 'Backspace':
        // Close focused tab if closeable
        if (focusedIndex >= 0) {
          const tab = tabs[focusedIndex];
          const isTabCloseable = tab.closeable !== undefined ? tab.closeable : closeable;
          if (isTabCloseable && !tab.disabled && onClose) {
            onClose(tab.id);
          }
        }
        break;

      default:
        shouldPreventDefault = false;
    }

    if (shouldPreventDefault) {
      e.preventDefault();
    }

    if (nextIndex >= 0 && nextIndex !== currentIndex) {
      setFocusedIndex(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    }
  }, [focusedIndex, tabs, activeTab, enabledIndices, orientation, handleTabChange, closeable, onClose]);

  // Handle focus events
  const handleFocus = useCallback((index: number) => {
    setFocusedIndex(index);
  }, []);

  const handleBlur = useCallback(() => {
    setFocusedIndex(-1);
  }, []);

  // Size-specific classes
  const sizeClasses = {
    sm: {
      padding: 'px-3 py-1.5',
      text: 'text-xs',
      icon: 'h-3.5 w-3.5',
      closeIcon: 'h-3 w-3',
      gap: orientation === 'vertical' ? 'gap-1.5' : 'gap-4',
      minWidth: orientation === 'vertical' ? 'min-w-[150px]' : '',
      spacing: orientation === 'vertical' ? 'mt-4' : 'mt-4',
      badgeSize: 'sm' as const,
      addPadding: 'px-2 py-1.5',
    },
    md: {
      padding: 'px-4 py-2.5',
      text: 'text-sm',
      icon: 'h-4 w-4',
      closeIcon: 'h-3.5 w-3.5',
      gap: orientation === 'vertical' ? 'gap-2' : 'gap-6',
      minWidth: orientation === 'vertical' ? 'min-w-[200px]' : '',
      spacing: orientation === 'vertical' ? 'mt-6' : 'mt-6',
      badgeSize: 'sm' as const,
      addPadding: 'px-3 py-2.5',
    },
    lg: {
      padding: 'px-5 py-3',
      text: 'text-base',
      icon: 'h-5 w-5',
      closeIcon: 'h-4 w-4',
      gap: orientation === 'vertical' ? 'gap-3' : 'gap-8',
      minWidth: orientation === 'vertical' ? 'min-w-[250px]' : '',
      spacing: orientation === 'vertical' ? 'mt-8' : 'mt-8',
      badgeSize: 'md' as const,
      addPadding: 'px-4 py-3',
    },
  };

  // Determine which tabs should be rendered
  const shouldRenderContent = useCallback((tabId: string) => {
    if (!lazy) {
      // Not lazy: render all tabs
      return true;
    }
    if (tabId === activeTab) {
      // Always render active tab
      return true;
    }
    if (preserveState && visitedTabs.has(tabId)) {
      // Preserve state: render previously visited tabs
      return true;
    }
    return false;
  }, [lazy, activeTab, preserveState, visitedTabs]);

  return (
    <div className={`w-full ${orientation === 'vertical' ? `flex ${sizeClasses[size].gap}` : ''}`}>
      {/* Tab Headers */}
      <div
        ref={tabListRef}
        className={`
          flex ${orientation === 'vertical' ? 'flex-col' : 'items-center'}
          ${variant === 'underline'
            ? orientation === 'vertical'
              ? `border-r border-paper-200 ${sizeClasses[size].gap} pr-6`
              : `border-b border-paper-200 ${sizeClasses[size].gap}`
            : `${sizeClasses[size].gap} p-1 bg-paper-50 rounded-lg`
          }
          ${sizeClasses[size].minWidth}
        `}
        role="tablist"
        aria-orientation={orientation}
        onKeyDown={handleKeyDown}
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;
          const isTabCloseable = tab.closeable !== undefined ? tab.closeable : closeable;

          return (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[index] = el; }}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              aria-disabled={tab.disabled}
              tabIndex={isActive ? 0 : -1}
              disabled={tab.disabled}
              onClick={() => !tab.disabled && handleTabChange(tab.id)}
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              className={`
                flex items-center gap-2 ${sizeClasses[size].padding} ${sizeClasses[size].text} font-medium transition-all duration-200
                ${orientation === 'vertical' ? 'w-full justify-start' : ''}
                ${
                  variant === 'underline'
                    ? isActive
                      ? orientation === 'vertical'
                        ? 'text-accent-900 border-r-2 border-accent-500 -mr-[1px]'
                        : 'text-accent-900 border-b-2 border-accent-500 -mb-[1px]'
                      : orientation === 'vertical'
                      ? 'text-ink-600 hover:text-ink-900 border-r-2 border-transparent'
                      : 'text-ink-600 hover:text-ink-900 border-b-2 border-transparent'
                    : isActive
                    ? 'bg-white text-accent-900 rounded-md shadow-xs'
                    : 'text-ink-600 hover:text-ink-900 hover:bg-white/50 rounded-md'
                }
                ${tab.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
                focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-1
                group
              `}
            >
              {tab.icon && <span className={`flex-shrink-0 ${sizeClasses[size].icon}`}>{tab.icon}</span>}
              <span className={isTabCloseable ? 'mr-1' : ''}>{tab.label}</span>
              {tab.badge !== undefined && (
                <Badge
                  variant={tab.badgeVariant || 'info'}
                  size={sizeClasses[size].badgeSize}
                >
                  {tab.badge}
                </Badge>
              )}
              {isTabCloseable && onClose && (
                <span
                  role="button"
                  aria-label={`Close ${tab.label}`}
                  onClick={(e) => handleClose(e, tab.id)}
                  className={`
                    flex-shrink-0 p-0.5 rounded
                    text-ink-400 hover:text-ink-700 hover:bg-paper-200
                    opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100
                    ${isActive ? 'opacity-100' : ''}
                    transition-opacity duration-150
                  `}
                >
                  <X className={sizeClasses[size].closeIcon} />
                </span>
              )}
            </button>
          );
        })}

        {/* Add Tab Button */}
        {showAddButton && onAdd && (
          <button
            type="button"
            onClick={onAdd}
            aria-label={addButtonLabel}
            title={addButtonLabel}
            className={`
              flex items-center justify-center ${sizeClasses[size].addPadding}
              text-ink-500 hover:text-ink-700 hover:bg-paper-100
              rounded transition-colors duration-150
              focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-1
              ${variant === 'underline'
                ? orientation === 'vertical'
                  ? 'border-r-2 border-transparent'
                  : 'border-b-2 border-transparent -mb-[1px]'
                : ''
              }
            `}
          >
            <Plus className={sizeClasses[size].icon} />
          </button>
        )}
      </div>

      {/* Tab Content */}
      <div className={`${orientation === 'vertical' ? 'flex-1' : sizeClasses[size].spacing}`}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const shouldRender = shouldRenderContent(tab.id);

          if (!shouldRender) {
            return null;
          }

          return (
            <div
              key={tab.id}
              id={`panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              hidden={!isActive}
              tabIndex={0}
              className={isActive ? 'animate-fade-in focus:outline-none' : 'hidden'}
            >
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
