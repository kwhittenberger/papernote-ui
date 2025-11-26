import type { Preview } from '@storybook/react';
import '../src/styles/index.css';

/**
 * Custom viewport configurations for mobile testing
 * Based on common device sizes
 */
const CUSTOM_VIEWPORTS = {
  // Mobile devices
  mobileS: {
    name: 'Mobile S (320px)',
    styles: {
      width: '320px',
      height: '568px',
    },
    type: 'mobile' as const,
  },
  mobileM: {
    name: 'Mobile M (375px)',
    styles: {
      width: '375px',
      height: '667px',
    },
    type: 'mobile' as const,
  },
  mobileL: {
    name: 'Mobile L (425px)',
    styles: {
      width: '425px',
      height: '896px',
    },
    type: 'mobile' as const,
  },
  mobileLandscape: {
    name: 'Mobile Landscape',
    styles: {
      width: '667px',
      height: '375px',
    },
    type: 'mobile' as const,
  },
  // Tablet devices
  tablet: {
    name: 'Tablet (768px)',
    styles: {
      width: '768px',
      height: '1024px',
    },
    type: 'tablet' as const,
  },
  tabletLandscape: {
    name: 'Tablet Landscape',
    styles: {
      width: '1024px',
      height: '768px',
    },
    type: 'tablet' as const,
  },
  // Desktop devices
  laptop: {
    name: 'Laptop (1024px)',
    styles: {
      width: '1024px',
      height: '768px',
    },
    type: 'desktop' as const,
  },
  laptopL: {
    name: 'Laptop L (1440px)',
    styles: {
      width: '1440px',
      height: '900px',
    },
    type: 'desktop' as const,
  },
  desktop: {
    name: 'Desktop (1920px)',
    styles: {
      width: '1920px',
      height: '1080px',
    },
    type: 'desktop' as const,
  },
  // Specific devices
  iPhoneSE: {
    name: 'iPhone SE',
    styles: {
      width: '375px',
      height: '667px',
    },
    type: 'mobile' as const,
  },
  iPhone12: {
    name: 'iPhone 12/13/14',
    styles: {
      width: '390px',
      height: '844px',
    },
    type: 'mobile' as const,
  },
  iPhone14ProMax: {
    name: 'iPhone 14 Pro Max',
    styles: {
      width: '430px',
      height: '932px',
    },
    type: 'mobile' as const,
  },
  iPadMini: {
    name: 'iPad Mini',
    styles: {
      width: '768px',
      height: '1024px',
    },
    type: 'tablet' as const,
  },
  iPadPro: {
    name: 'iPad Pro 12.9"',
    styles: {
      width: '1024px',
      height: '1366px',
    },
    type: 'tablet' as const,
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#fafaf9',
        },
        {
          name: 'dark',
          value: '#1c1917',
        },
      ],
    },
    docs: {
      toc: true, // Enable table of contents
    },
    // Viewport configuration for responsive testing
    viewport: {
      viewports: CUSTOM_VIEWPORTS,
      defaultViewport: 'responsive',
    },
    // Layout defaults
    layout: 'padded',
  },
};

export default preview;
