# Getting Started

Get up and running with @papernote/ui in minutes.

## Installation

Install the package via npm, yarn, or pnpm:

::: code-group

```bash [npm]
npm install @papernote/ui
```

```bash [yarn]
yarn add @papernote/ui
```

```bash [pnpm]
pnpm add @papernote/ui
```

:::

### Peer Dependencies

@papernote/ui requires the following peer dependencies:

```bash
npm install react react-dom react-router-dom lucide-react tailwindcss
```

**Required versions:**
- React: ^18.0.0 or ^19.0.0
- React DOM: ^18.0.0 or ^19.0.0
- React Router DOM: ^6.0.0 or ^7.0.0
- Lucide React: ^0.553.0
- Tailwind CSS: ^3.4.0

## Setup

### 1. Import Styles

In your main entry file (e.g., `src/main.tsx` or `src/index.tsx`):

```tsx
import '@papernote/ui/styles';
```

This imports the compiled CSS for all components.

### 2. Configure Tailwind CSS

Update your `tailwind.config.js` to include @papernote/ui's content paths and configuration:

```javascript
import notebookConfig from '@papernote/ui/tailwind-config';

export default {
  ...notebookConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@papernote/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  // You can override or extend the theme here
  theme: {
    extend: {
      // Your custom theme extensions
    }
  }
};
```

This ensures Tailwind generates the necessary utility classes for @papernote/ui components.

### 3. Use Components

Import and use components in your application:

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@papernote/ui';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Start building with @papernote/ui</p>
        <Button variant="primary">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## Your First Component

Let's create a simple form with validation:

```tsx
import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
  Button,
  addSuccessMessage,
  ToastContainer
} from '@papernote/ui';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSuccessMessage('Message sent successfully!');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
      <ToastContainer position="top-right" />
    </>
  );
}
```

## TypeScript Support

@papernote/ui is built with TypeScript and provides full type definitions. You'll get:

- ✅ Autocomplete for all props
- ✅ Type checking for prop values
- ✅ IntelliSense documentation
- ✅ Generic types for data components

```tsx
import { DataTable, type DataTableColumn } from '@papernote/ui';

interface User {
  id: string;
  name: string;
  email: string;
}

const columns: DataTableColumn<User>[] = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
];

function UsersTable() {
  const users: User[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
  ];

  return <DataTable data={users} columns={columns} />;
}
```

## Tree Shaking

@papernote/ui supports tree shaking. Import only what you need:

```tsx
// ✅ Good - Only imports what you use
import { Button, Input } from '@papernote/ui';

// ❌ Avoid - Imports everything
import * as NotebookUI from '@papernote/ui';
```

## Next Steps

- [Explore Components](/components/) - Browse the full component catalog
- [View Live Examples](https://691fcf89b3393605ea470e93-rzwuumklem.chromatic.com/) - See components in action
- [Design System](/design-system) - Learn about colors, typography, and design tokens
- [Developer Guide](/development/developer-guide) - Contributing and development setup

## Common Issues

### Styles Not Applied

**Problem:** Components render but don't look correct.

**Solution:** Make sure you've imported the styles:
```tsx
import '@papernote/ui/styles';
```

### Tailwind Classes Not Generated

**Problem:** Custom Tailwind classes from @papernote/ui aren't working.

**Solution:** Check your `tailwind.config.js` includes the content path:
```javascript
content: [
  './node_modules/@papernote/ui/src/**/*.{js,ts,jsx,tsx}',
]
```

### Type Errors

**Problem:** TypeScript errors for valid props.

**Solution:** Ensure TypeScript can find the type definitions:
```json
{
  "compilerOptions": {
    "moduleResolution": "bundler", // or "node"
    "skipLibCheck": true
  }
}
```

## Getting Help

- 📖 [Component Documentation](/components/)
- 💬 [GitHub Issues](https://github.com/kwhittenberger/papernote-ui/issues)
- 📦 [npm Package](https://www.npmjs.com/package/@papernote/ui)
- 🎨 [Storybook Examples](https://691fcf89b3393605ea470e93-rzwuumklem.chromatic.com/)
