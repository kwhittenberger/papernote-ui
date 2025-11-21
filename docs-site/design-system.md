# Design System

The @papernote/ui design system is inspired by quality paper notebooks - warm, minimal, and professional.

## Color Palette

### Paper Colors
Background colors inspired by paper surfaces:

```css
paper-50:  #fafaf9  /* Off-white background */
paper-100: #f5f5f4  /* Light paper */
paper-200: #e7e5e4  /* Border gray */
paper-300: #d6d3d1  /* Subtle border */
```

### Ink Colors
Text colors with warm gray tones:

```css
ink-400: #a8a29e  /* Muted text */
ink-500: #78716c  /* Secondary text */
ink-600: #57534e  /* Body text */
ink-700: #44403c  /* Headings */
ink-900: #1c1917  /* High contrast */
```

### Accent Color
Warm gray accent for interactive elements:

```css
accent: #8b8878
```

### Primary Colors
Slate tones for structure:

```css
primary-400: #94a3b8
primary-500: #64748b
primary-600: #475569
```

### Semantic Colors
Muted colors for feedback:

```css
success: #10b981  /* Muted emerald */
warning: #f59e0b  /* Soft amber */
error:   #ef4444  /* Muted red */
info:    #3b82f6  /* Soft blue */
```

## Typography

### Font Stack
System font stack for optimal performance and readability:

```css
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
             'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Font Sizes

```css
xs:   0.75rem  (12px)
sm:   0.875rem (14px)
base: 1rem     (16px)
lg:   1.125rem (18px)
xl:   1.25rem  (20px)
2xl:  1.5rem   (24px)
3xl:  1.875rem (30px)
4xl:  2.25rem  (36px)
```

### Line Heights

- Body text: 1.5
- Headings: 1.2
- Tight: 1.25
- Loose: 1.75

### Font Weights

```css
normal:    400
medium:    500
semibold:  600
bold:      700
```

## Spacing

Based on 0.25rem (4px) increments:

```css
1:  0.25rem  (4px)
2:  0.5rem   (8px)
3:  0.75rem  (12px)
4:  1rem     (16px)
6:  1.5rem   (24px)
8:  2rem     (32px)
12: 3rem     (48px)
16: 4rem     (64px)
```

## Border Radius

```css
sm:  0.125rem  (2px)
DEFAULT: 0.375rem (6px)
md:  0.375rem  (6px)
lg:  0.5rem    (8px)
xl:  0.75rem   (12px)
```

## Shadows

Subtle paper-like shadows:

```css
sm:  0 1px 2px rgba(0, 0, 0, 0.05)
DEFAULT: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)
md:  0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)
lg:  0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)
```

## Paper Grain Texture

SVG noise texture for subtle paper grain effect:

```css
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200'...")
opacity: 0.015
```

## Component Patterns

### Cards
- Background: paper-50
- Border: paper-200 (1px)
- Border radius: 6px
- Padding: 1.5rem (24px)
- Shadow: sm

### Buttons
- Primary: accent background, white text
- Secondary: paper-100 background, ink-700 text
- Ghost: transparent background, ink-600 text
- Danger: error-500 background, white text
- Padding: 0.5rem 1rem (8px 16px)
- Border radius: 6px

### Inputs
- Background: white
- Border: paper-300 (1px)
- Focus border: accent-400
- Focus ring: accent-400 with opacity
- Padding: 0.5rem 0.75rem (8px 12px)
- Border radius: 6px

### Navigation
- Background: paper-50
- Active item: accent with 0.1 opacity
- Hover: accent with 0.05 opacity
- Text: ink-600 (normal), ink-900 (active)

## Accessibility

### Color Contrast
All color combinations meet WCAG AA standards:
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- UI components: 3:1 minimum

### Focus States
- Visible focus ring on all interactive elements
- 2px outline with accent color
- Offset by 2px for clarity

### Interactive Elements
- Minimum touch target: 44x44px
- Clear visual feedback on hover/active
- Keyboard navigation support

## Dark Mode

While not currently implemented, the color system is designed to support dark mode:

```css
/* Future dark mode colors */
dark:paper-900: #1c1917
dark:ink-50:    #fafaf9
/* etc. */
```

## Usage in Tailwind

Import the configuration in your `tailwind.config.js`:

```javascript
import notebookConfig from '@papernote/ui/tailwind-config';

export default {
  ...notebookConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@papernote/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
};
```

## Design Principles

1. **Minimal**: Remove unnecessary elements, focus on content
2. **Warm**: Muted, warm colors over stark blacks and whites
3. **Professional**: Subtle sophistication without flashiness
4. **Accessible**: WCAG AA compliance by default
5. **Consistent**: Predictable patterns across all components
6. **Paper-inspired**: Textures and colors that evoke quality stationery

## Resources

- [Component Overview](/components/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
