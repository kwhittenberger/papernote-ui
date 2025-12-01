# Contributing to notebook-ui

## Versioning Policy

We use a **conservative SemVer** approach to avoid rapid major version increases:

### Patch Releases (1.7.x)
- New components
- New features on existing components
- Bug fixes
- Performance improvements
- Documentation updates

### Minor Releases (1.x.0)
- Significant architectural changes
- Major new feature sets (e.g., new component categories)
- Substantial API additions

### Major Releases (x.0.0)
- Breaking changes to existing APIs
- Removal of deprecated features
- Major dependency upgrades that affect consumers

### Examples

| Change | Version Bump |
|--------|--------------|
| Add new `Rating` component | Patch (1.7.1) |
| Add `loading` prop to `Button` | Patch (1.7.2) |
| Fix tooltip positioning bug | Patch (1.7.3) |
| Add complete form validation system | Minor (1.8.0) |
| Rename `onClick` to `onPress` across all components | Major (2.0.0) |

## Publishing

Releases are published to npm automatically when:
1. A git tag matching `v*.*.*` is pushed, OR
2. A GitHub Release is created

To release a new version:
```bash
# Bump version (usually patch)
npm version patch --no-git-tag-version

# Commit the version bump
git add package.json package-lock.json
git commit -m "1.7.x - Description of changes"

# Push to main
git push

# Create release (triggers npm publish)
gh release create v1.7.x --title "v1.7.x - Description" --notes "Release notes here"
```

## Development

```bash
# Install dependencies
npm install

# Run Storybook for development
npm run storybook

# Build library
npm run build

# Type check
npm run typecheck

# Lint
npm run lint
```
