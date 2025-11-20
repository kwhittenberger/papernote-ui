import { ReactNode } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface ResponsiveProps {
  children: ReactNode;
  above?: Breakpoint;
  below?: Breakpoint;
  only?: Breakpoint;
  className?: string;
}

// Tailwind breakpoint mappings
// sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px

/**
 * Show component - renders children only at specified breakpoints
 * 
 * @example
 * // Show on medium screens and above
 * <Show above="md">
 *   <DesktopNavigation />
 * </Show>
 * 
 * // Show only on large screens
 * <Show only="lg">
 *   <LargeScreenContent />
 * </Show>
 * 
 * // Show below medium screens
 * <Show below="md">
 *   <MobileNavigation />
 * </Show>
 */
export function Show({ children, above, below, only, className = '' }: ResponsiveProps) {
  let visibilityClasses = '';

  if (only) {
    // Show only at this breakpoint
    switch (only) {
      case 'sm':
        visibilityClasses = 'hidden sm:block md:hidden';
        break;
      case 'md':
        visibilityClasses = 'hidden md:block lg:hidden';
        break;
      case 'lg':
        visibilityClasses = 'hidden lg:block xl:hidden';
        break;
      case 'xl':
        visibilityClasses = 'hidden xl:block 2xl:hidden';
        break;
      case '2xl':
        visibilityClasses = 'hidden 2xl:block';
        break;
    }
  } else if (above) {
    // Show at this breakpoint and above
    switch (above) {
      case 'sm':
        visibilityClasses = 'hidden sm:block';
        break;
      case 'md':
        visibilityClasses = 'hidden md:block';
        break;
      case 'lg':
        visibilityClasses = 'hidden lg:block';
        break;
      case 'xl':
        visibilityClasses = 'hidden xl:block';
        break;
      case '2xl':
        visibilityClasses = 'hidden 2xl:block';
        break;
    }
  } else if (below) {
    // Show below this breakpoint
    switch (below) {
      case 'sm':
        visibilityClasses = 'block sm:hidden';
        break;
      case 'md':
        visibilityClasses = 'block md:hidden';
        break;
      case 'lg':
        visibilityClasses = 'block lg:hidden';
        break;
      case 'xl':
        visibilityClasses = 'block xl:hidden';
        break;
      case '2xl':
        visibilityClasses = 'block 2xl:hidden';
        break;
    }
  }

  return (
    <div className={`${visibilityClasses} ${className}`}>
      {children}
    </div>
  );
}

/**
 * Hide component - hides children at specified breakpoints
 * 
 * @example
 * // Hide on medium screens and above
 * <Hide above="md">
 *   <MobileOnlyContent />
 * </Hide>
 * 
 * // Hide only on large screens
 * <Hide only="lg">
 *   <NonLargeScreenContent />
 * </Hide>
 * 
 * // Hide below medium screens
 * <Hide below="md">
 *   <DesktopOnlyContent />
 * </Hide>
 */
export function Hide({ children, above, below, only, className = '' }: ResponsiveProps) {
  let visibilityClasses = '';

  if (only) {
    // Hide only at this breakpoint
    switch (only) {
      case 'sm':
        visibilityClasses = 'block sm:hidden md:block';
        break;
      case 'md':
        visibilityClasses = 'block md:hidden lg:block';
        break;
      case 'lg':
        visibilityClasses = 'block lg:hidden xl:block';
        break;
      case 'xl':
        visibilityClasses = 'block xl:hidden 2xl:block';
        break;
      case '2xl':
        visibilityClasses = 'block 2xl:hidden';
        break;
    }
  } else if (above) {
    // Hide at this breakpoint and above
    switch (above) {
      case 'sm':
        visibilityClasses = 'block sm:hidden';
        break;
      case 'md':
        visibilityClasses = 'block md:hidden';
        break;
      case 'lg':
        visibilityClasses = 'block lg:hidden';
        break;
      case 'xl':
        visibilityClasses = 'block xl:hidden';
        break;
      case '2xl':
        visibilityClasses = 'block 2xl:hidden';
        break;
    }
  } else if (below) {
    // Hide below this breakpoint
    switch (below) {
      case 'sm':
        visibilityClasses = 'hidden sm:block';
        break;
      case 'md':
        visibilityClasses = 'hidden md:block';
        break;
      case 'lg':
        visibilityClasses = 'hidden lg:block';
        break;
      case 'xl':
        visibilityClasses = 'hidden xl:block';
        break;
      case '2xl':
        visibilityClasses = 'hidden 2xl:block';
        break;
    }
  }

  return (
    <div className={`${visibilityClasses} ${className}`}>
      {children}
    </div>
  );
}

/**
 * useMediaQuery hook - React hook for responsive logic in components
 * 
 * @example
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * const isDesktop = useMediaQuery('(min-width: 1024px)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

// Add React import for the hook
import React from 'react';
