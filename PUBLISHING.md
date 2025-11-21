# Publishing Guide for @papernote/ui

This document explains how to publish new versions of the @papernote/ui package to npm.

## Prerequisites

### One-Time Setup

1. **Create an npm Access Token**
   - Go to https://www.npmjs.com/settings/YOUR_USERNAME/tokens
   - Click "Generate New Token" → "Granular Access Token"
   - Token settings:
     - Name: `GitHub Actions - papernote-ui`
     - Expiration: 90 days (maximum with 2FA)
     - Packages and scopes: Select `@papernote/ui` with "Read and write" permission
   - Copy the token (you won't see it again!)

2. **Add NPM_TOKEN to GitHub Secrets**
   - Go to https://github.com/kwhittenberger/papernote-ui/settings/secrets/actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Paste your npm token
   - Click "Add secret"

3. **Token Renewal**
   - Granular tokens expire after 90 days
   - Set a calendar reminder to renew the token before it expires
   - Update the GitHub secret with the new token

## Publishing Methods

You have two automated publishing options:

### Option 1: GitHub Release (Recommended)

This is the easiest and most user-friendly method.

1. **Run pre-publish validation** (optional but recommended)
   ```bash
   npm run prerelease
   ```
   This checks for uncommitted changes, runs type check, linting, build, and verifies the version doesn't already exist.

2. **Update version in package.json**
   ```bash
   npm version patch  # 1.0.0 → 1.0.1
   npm version minor  # 1.0.0 → 1.1.0
   npm version major  # 1.0.0 → 2.0.0
   ```

3. **Push the version commit and tag**
   ```bash
   git push && git push --tags
   ```

4. **Create a GitHub Release**
   - Go to https://github.com/kwhittenberger/papernote-ui/releases/new
   - Click "Choose a tag" and select the tag you just pushed (e.g., `v1.0.1`)
   - Title: `v1.0.1` (or whatever version)
   - Description: Write release notes describing what changed
   - Click "Publish release"

5. **Automated Publishing**
   - The `npm-publish.yml` workflow will automatically trigger
   - It will verify versions match, run type checks, linting, build verification, and publish to npm
   - Check the Actions tab to monitor progress: https://github.com/kwhittenberger/papernote-ui/actions

### Option 2: Git Tag

This method is faster but skips the release notes on GitHub.

1. **Run pre-publish validation** (optional but recommended)
   ```bash
   npm run prerelease
   ```

2. **Update version and create tag**
   ```bash
   npm version patch  # Creates commit and tag
   git push && git push --tags
   ```

3. **Automated Publishing**
   - The `npm-publish-tag.yml` workflow will automatically trigger
   - It includes the same safety checks as the release workflow
   - Check the Actions tab to monitor: https://github.com/kwhittenberger/papernote-ui/actions

### Option 3: Manual Publishing

If you need to publish manually (not recommended for regular releases):

1. **Update version**
   ```bash
   npm version patch
   ```

2. **Build and publish**
   ```bash
   npm run build
   npm publish --access public
   ```

3. **Push to GitHub**
   ```bash
   git push && git push --tags
   ```

## Version Numbering

Follow [Semantic Versioning (SemVer)](https://semver.org/):

- **MAJOR** (1.0.0 → 2.0.0): Breaking changes that require user code updates
- **MINOR** (1.0.0 → 1.1.0): New features, backward compatible
- **PATCH** (1.0.0 → 1.0.1): Bug fixes, backward compatible

## Workflow Safety Features

Both automated workflows include comprehensive safety checks:

1. **Version Verification**
   - Ensures package.json version matches the git tag/release version
   - Prevents publishing mismatched versions

2. **Code Quality Checks**
   - Type checking with TypeScript
   - Linting with ESLint
   - All must pass before publishing

3. **Build Verification**
   - Verifies all required dist files exist (index.js, index.esm.js, index.d.ts, styles.css)
   - Ensures the build is complete and valid

4. **Publication Verification**
   - Confirms the package was successfully published to npm
   - Provides clear success/failure messages

5. **npm Provenance**
   - Includes cryptographic provenance for supply chain security
   - Proves the package was built by GitHub Actions

## Pre-Release Checklist

Before publishing a new version:

- [ ] Run validation: `npm run prerelease` (recommended)
- [ ] All tests pass: `npm test`
- [ ] Type checking passes: `npm run typecheck`
- [ ] Linting passes: `npm run lint`
- [ ] Build succeeds: `npm run build`
- [ ] Storybook builds: `npm run build-storybook`
- [ ] Update CHANGELOG.md with changes (if you create one)
- [ ] Update README.md if there are new features or breaking changes
- [ ] Commit all changes to git
- [ ] No uncommitted changes in working directory

## Troubleshooting

### Workflow Fails with "EOTP" Error

If the workflow fails with an OTP (one-time password) error:
- This shouldn't happen with automation tokens
- Verify the `NPM_TOKEN` secret is set correctly
- Regenerate the token if it expired

### Workflow Fails with "E401 Unauthorized"

- The `NPM_TOKEN` secret is missing or incorrect
- Go to GitHub Settings → Secrets and verify the token
- Regenerate the npm token and update the secret

### Workflow Fails with "E403 Forbidden"

- The token doesn't have write permission for `@papernote/ui`
- Create a new token with "Read and write" access
- Update the GitHub secret

### Build Fails in Workflow

- Run `npm run build` locally to debug
- Ensure all dependencies are in package.json
- Check the Actions logs for specific error messages

## Monitoring Published Versions

- **npm Registry**: https://www.npmjs.com/package/@papernote/ui
- **GitHub Releases**: https://github.com/kwhittenberger/papernote-ui/releases
- **GitHub Actions**: https://github.com/kwhittenberger/papernote-ui/actions

## Updating Consumer Projects

After publishing a new version, update projects that use @papernote/ui:

```bash
# In your project directory
npm update @papernote/ui

# Or install specific version
npm install @papernote/ui@1.0.1
```

## Emergency Unpublish

If you need to unpublish a version (only possible within 72 hours):

```bash
npm unpublish @papernote/ui@1.0.1
```

**Warning**: This is strongly discouraged as it can break projects depending on that version.

## Best Practices

1. **Always test before publishing** - Run the full test suite locally
2. **Write meaningful release notes** - Help users understand what changed
3. **Follow SemVer strictly** - Users depend on it for upgrade decisions
4. **Don't skip versions** - Publish sequentially (1.0.1 → 1.0.2, not 1.0.1 → 1.0.5)
5. **Tag releases in git** - Maintains version history
6. **Update documentation** - Keep README and docs in sync with code
7. **Review the diff** - Check what's being published before releasing

## Support

For issues with publishing or the package:
- GitHub Issues: https://github.com/kwhittenberger/papernote-ui/issues
- npm Support: https://www.npmjs.com/support
