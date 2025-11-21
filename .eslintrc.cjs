module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Allow unused vars with underscore prefix
    '@typescript-eslint/no-unused-vars': ['warn', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],
    // Allow any type (component library needs flexibility)
    '@typescript-eslint/no-explicit-any': 'warn',
    // Allow empty interfaces (useful for extensibility)
    '@typescript-eslint/no-empty-interface': 'off',
    // React 17+ JSX transform doesn't require React in scope
    'react/react-in-jsx-scope': 'off',
    // Allow prop spreading (common in component libraries)
    'react/jsx-props-no-spreading': 'off',
    // Disable prop-types (using TypeScript)
    'react/prop-types': 'off',
    // Allow unescaped entities in JSX (common in content)
    'react/no-unescaped-entities': 'warn',
    // React hooks rules as warnings (not errors)
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    // Prefer const as warning not error
    'prefer-const': 'warn',
    // Other common issues as warnings
    '@typescript-eslint/ban-ts-comment': 'warn',
    'no-case-declarations': 'warn',
    'no-useless-escape': 'warn',
  },
  ignorePatterns: [
    'dist',
    'node_modules',
    'storybook-static',
    'coverage',
    '*.config.js',
    '*.config.ts',
    '.storybook',
    '**/*.stories.tsx',
    '**/*.stories.ts',
    '__tests__',
  ],
};
