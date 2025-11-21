# Publishing Guide - @papernote/ui

This guide walks through publishing `@papernote/ui` to npm.

## Prerequisites

### 1. npm Account Setup

If you don't have an npm account:

1. Go to [npmjs.com/signup](https://www.npmjs.com/signup)
2. Create account with email verification
3. **Enable 2FA** (required for publishing):
   - Go to Account Settings → Two-Factor Authentication
   - Enable 2FA using authenticator app (recommended)
4. Create `@papernote` organization:
   - Go to your profile → "Add Organization"
   - Organization name: `papernote`
   - Make it **public** (free for open source)

### 2. Login to npm Locally

```bash
npm login
```

Enter your npm credentials when prompted.

Verify you're logged in:
```bash
npm whoami
# Should output your npm username
```

## Pre-Publishing Checklist

Before publishing, ensure everything is ready:

### ✅ Code Quality

```bash
# TypeScript check
npm run typecheck

# Linting
npm run lint

# Tests
npm test

# Build
npm run build
```

All commands should pass without errors.

### ✅ Package Configuration

Verify `package.json`:
- ✅ Name: `@papernote/ui`
- ✅ Version: Correct semver version
- ✅ License: `MIT`
- ✅ Main/Module/Types exports configured
- ✅ Files array includes `dist`, `src`, `tailwind.config.js`, `README.md`
- ✅ Peer dependencies specified

### ✅ Documentation

- ✅ README.md updated with `@papernote/ui` branding
- ✅ LICENSE file present (MIT)
- ✅ CONTRIBUTING.md and CODE_OF_CONDUCT.md present
- ✅ CHANGELOG.md updated (if exists)

### ✅ Git Status

```bash
# Commit all changes
git status
# Should show clean working tree
```

## Publishing Steps

### 1. Dry Run (Recommended)

First, do a dry run to see what will be published:

```bash
npm publish --dry-run --access public
```

This shows:
- Package size
- Files that will be included
- Any warnings or errors

Review the output carefully.

### 2. Publish to npm

When ready, publish:

```bash
npm publish --access public
```

**Note:** The `--access public` flag is required for scoped packages that should be publicly accessible.

### 3. Verify Publication

Check that your package is live:

```bash
npm view @papernote/ui
```

Or visit: https://www.npmjs.com/package/@papernote/ui

### 4. Test Installation

Test installing your published package:

```bash
# In a test directory
mkdir test-papernote
cd test-papernote
npm init -y
npm install @papernote/ui
```

## Post-Publishing

### 1. Tag the Release

Create a git tag for the release:

```bash
git tag v1.0.0
git push origin v1.0.0
```

### 2. Create GitHub Release

1. Go to GitHub repository
2. Click **Releases** → **Create a new release**
3. Choose the tag `v1.0.0`
4. Release title: `v1.0.0 - Initial Public Release`
5. Description: Summarize the release (see template below)
6. Publish release

**Release Description Template:**
```markdown
## 🎉 Initial Public Release

@papernote/ui v1.0.0 is now available on npm!

### Features
- 111+ production-ready React components
- Paper notebook aesthetic with muted, warm colors
- Full TypeScript support with 0 errors
- WCAG AA accessibility compliance
- Storybook documentation
- Comprehensive test coverage

### Installation
\`\`\`bash
npm install @papernote/ui
\`\`\`

### Documentation
- 📖 [Storybook](https://papernote-ui.chromatic.com)
- 📚 [Component Catalog](./docs/COMPONENT-CATALOG.md)
- 🚀 [Quick Start Guide](./examples/QUICK-START.md)

### Contributors
Thank you to all contributors! 🙏
```

### 3. Update README Badges

After first publish, the npm version badge will work:
```markdown
[![npm version](https://img.shields.io/npm/v/@papernote/ui.svg)](https://www.npmjs.com/package/@papernote/ui)
```

### 4. Announce the Release

Share your library:
- Tweet about it
- Post on Reddit (r/reactjs)
- Share in React communities
- Write a blog post

## Version Management

### Semantic Versioning

Follow [semver](https://semver.org/):
- **Major** (1.0.0 → 2.0.0): Breaking changes
- **Minor** (1.0.0 → 1.1.0): New features (backward compatible)
- **Patch** (1.0.0 → 1.0.1): Bug fixes

### Updating Version

Use npm version commands:

```bash
# Patch release (1.0.0 → 1.0.1)
npm version patch

# Minor release (1.0.0 → 1.1.0)
npm version minor

# Major release (1.0.0 → 2.0.0)
npm version major
```

This automatically:
- Updates package.json
- Creates a git commit
- Creates a git tag

Then publish:
```bash
git push && git push --tags
npm publish --access public
```

## Troubleshooting

### "You do not have permission to publish"

Solution: Make sure you're logged in and own the `@papernote` organization:
```bash
npm whoami
npm org ls papernote
```

### "Package name too similar to existing package"

Solution: This shouldn't happen with scoped packages, but if it does, choose a different name.

### "402 Payment Required"

Solution: Make sure the `@papernote` organization is public:
- Go to npmjs.com
- Organization settings → Make public

### Build Errors

If `npm run build` fails:
1. Check TypeScript errors: `npm run typecheck`
2. Check for missing dependencies
3. Ensure dist/ directory is generated

### Large Package Size

Check what's being published:
```bash
npm publish --dry-run --access public
```

Exclude unnecessary files in `.npmignore`.

## Best Practices

### Before Each Release

1. ✅ Run full test suite
2. ✅ Update CHANGELOG.md
3. ✅ Update version in package.json
4. ✅ Build and verify dist/
5. ✅ Test in a fresh project
6. ✅ Commit all changes
7. ✅ Create git tag
8. ✅ Publish to npm
9. ✅ Create GitHub release
10. ✅ Update documentation

### Maintenance

- Respond to issues promptly
- Review pull requests
- Keep dependencies updated
- Monitor npm download stats
- Gather user feedback

## Resources

- 📖 [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- 🔒 [npm 2FA Setup](https://docs.npmjs.com/configuring-two-factor-authentication)
- 📦 [Semantic Versioning](https://semver.org/)
- 🏷️ [Git Tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

## Support

Questions? Open an issue or discussion on GitHub:
- 💬 [GitHub Issues](https://github.com/kwhittenberger/notebook-ui/issues)
