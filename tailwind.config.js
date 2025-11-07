/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Warm slate tones (ink on paper feel)
        primary: {
          50: '#f8fafc',   // Very light slate
          100: '#f1f5f9',  // Light slate
          200: '#e2e8f0',  // Soft slate
          300: '#cbd5e1',  // Medium slate
          400: '#94a3b8',  // Slate
          500: '#64748b',  // Base slate (like ink)
          600: '#475569',  // Deep slate
          700: '#334155',  // Darker slate
          800: '#1e293b',  // Very dark slate
          900: '#0f172a',  // Nearly black
          950: '#020617',  // Black
        },
        // Accent: Subtle warm tone (very muted, Claude-like)
        accent: {
          50: '#fafaf8',   // Nearly white with warmth
          100: '#f5f5f0',  // Very light warm gray
          200: '#e8e7e0',  // Soft warm gray
          300: '#d4d2c8',  // Medium warm gray
          400: '#a8a599',  // Muted warm gray
          500: '#8b8878',  // Base muted warm (subtle highlight)
          600: '#6e6d5e',  // Deep muted warm
          700: '#565548',  // Darker warm gray
          800: '#3f3e35',  // Very dark warm
          900: '#2a2922',  // Nearly black warm
        },
        // Success: Muted emerald green
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#10b981',  // Softer than before
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // Warning: Soft amber (slightly different shade than accent)
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Error: Muted red
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Paper: Warm off-white backgrounds (like quality paper)
        paper: {
          50: '#fafaf9',   // Base page background (very warm white)
          100: '#f5f5f4',  // Subtle depth
          200: '#e7e5e4',  // Soft borders
          300: '#d6d3d1',  // Medium borders
          400: '#a8a29e',  // Muted elements
        },
        // Ink: Text colors (warm grays)
        ink: {
          50: '#fafaf9',   // Very light text
          100: '#f5f5f4',  // Light text
          200: '#e7e5e4',  // Subtle text
          300: '#d6d3d1',  // Muted text
          400: '#a8a29e',  // Light body text
          500: '#78716c',  // Body text
          600: '#57534e',  // Strong body text
          700: '#44403c',  // Headings
          800: '#292524',  // Strong headings
          900: '#1c1917',  // Black text
        },
        // Keep neutral for backwards compatibility
        neutral: {
          25: '#fcfcfd',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Inter',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
        mono: [
          'JetBrains Mono Variable',
          'JetBrains Mono',
          'Fira Code',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        'xs': ['0.75rem', { lineHeight: '1.125rem' }],
        'sm': ['0.875rem', { lineHeight: '1.375rem' }],      // Increased line-height
        'base': ['1rem', { lineHeight: '1.625rem' }],         // More comfortable reading (16px/26px)
        'lg': ['1.125rem', { lineHeight: '1.875rem' }],
        'xl': ['1.25rem', { lineHeight: '2rem' }],
        '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
        '5xl': ['3rem', { lineHeight: '3.25rem' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '8.5': '2.125rem',
        '9.5': '2.375rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem',
        '25': '6.25rem',
        '26': '6.5rem',
        '27': '6.75rem',
        '29': '7.25rem',
        '30': '7.5rem',
        '31': '7.75rem',
        '33': '8.25rem',
        '34': '8.5rem',
        '35': '8.75rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.03)',                // Very subtle
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',                // Soft paper lift
        'md': '0 2px 4px 0 rgb(0 0 0 / 0.06)',                // Gentle elevation
        'lg': '0 4px 6px -1px rgb(0 0 0 / 0.08)',             // Moderate elevation
        'xl': '0 10px 15px -3px rgb(0 0 0 / 0.1)',            // Strong elevation
        '2xl': '0 20px 25px -5px rgb(0 0 0 / 0.12)',          // Maximum elevation
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.04)',       // Subtle inner shadow
        'paper': '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px 0 rgb(0 0 0 / 0.03)',  // Paper-like shadow
        'card': '0 2px 4px 0 rgb(0 0 0 / 0.04), 0 1px 2px 0 rgb(0 0 0 / 0.02)',   // Card shadow
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23e2e8f0' fill-opacity='0.4'%3e%3ccircle cx='30' cy='30' r='1.5'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
        // Subtle paper texture (very fine grain)
        'paper-texture': `url("data:image/svg+xml,%3csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noise'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3e%3cfeColorMatrix type='saturate' values='0'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3e%3c/svg%3e")`,
        // Very subtle grain for cards
        'subtle-grain': `url("data:image/svg+xml,%3csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noise'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3e%3cfeColorMatrix type='saturate' values='0'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.015'/%3e%3c/svg%3e")`,
      },
    },
  },
  plugins: [],
}