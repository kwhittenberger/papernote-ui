import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '@papernote/ui',
  description: 'A modern React component library with a paper notebook aesthetic',
  base: '/papernote-ui/',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/papernote-ui/favicon.svg' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Guide', link: '/getting-started' },
      { text: 'Components', link: '/components/' },
      { text: 'Storybook', link: 'https://main--691fcf89b3393605ea470e93.chromatic.com/' },
      { text: 'npm', link: 'https://www.npmjs.com/package/@papernote/ui' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is @papernote/ui?', link: '/' },
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'Design System', link: '/design-system' },
          ]
        },
        {
          text: 'Components',
          items: [
            { text: 'Overview', link: '/components/' },
            { text: 'Form Components', link: '/components/form-components' },
            { text: 'Layout Components', link: '/components/layout-components' },
            { text: 'Data Display', link: '/components/data-display' },
            { text: 'Navigation', link: '/components/navigation' },
            { text: 'Feedback', link: '/components/feedback' },
            { text: 'Advanced', link: '/components/advanced' },
          ]
        },
        {
          text: 'Development',
          items: [
            { text: 'Developer Guide', link: '/development/developer-guide' },
            { text: 'Testing Guide', link: '/development/testing-guide' },
            { text: 'Storybook Guide', link: '/development/storybook-guide' },
            { text: 'Publishing', link: '/development/publishing' },
            { text: 'Contributing', link: '/development/contributing' },
            { text: 'Code of Conduct', link: '/development/code-of-conduct' },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kwhittenberger/papernote-ui' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@papernote/ui' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 kwhittenberger'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/kwhittenberger/papernote-ui/edit/main/docs-site/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
