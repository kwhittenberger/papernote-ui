# Chromatic Setup Guide

This guide explains how to set up Chromatic for automatic Storybook deployment and visual regression testing.

## What is Chromatic?

Chromatic is a cloud service for Storybook that provides:
- 📖 **Public Storybook hosting** - Share your component library
- 👁️ **Visual regression testing** - Catch UI changes automatically
- 🔄 **Automatic deployments** - Deploy on every push to GitHub
- ✅ **Free for open source** - No cost for public repositories

## Setup Steps

### 1. Sign Up for Chromatic

1. Go to [chromatic.com](https://www.chromatic.com/)
2. Click **"Sign up with GitHub"**
3. Authorize Chromatic to access your GitHub account

### 2. Add Your Project

1. After signing in, click **"Add project"**
2. Select the **`notebook-ui`** repository
3. Chromatic will generate a **project token**
4. **Copy the project token** (you'll need it in the next step)

### 3. Add Token to GitHub Secrets

1. Go to your GitHub repository: `https://github.com/kwhittenberger/notebook-ui`
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Name: `CHROMATIC_PROJECT_TOKEN`
5. Value: Paste the project token from Chromatic
6. Click **"Add secret"**

### 4. Test the Workflow

The GitHub Action is already configured in `.github/workflows/chromatic.yml`.

To trigger a deployment:

```bash
# Make any change and push to main
git add .
git commit -m "test: Trigger Chromatic deployment"
git push
```

### 5. Check Deployment Status

1. Go to the **Actions** tab in your GitHub repository
2. You should see a **"Chromatic Deployment"** workflow running
3. Once complete, Chromatic will comment on your commit with the Storybook URL

### 6. Access Your Published Storybook

After the first successful deployment, your Storybook will be available at:

**https://[your-project-id].chromatic.com**

Chromatic will provide the exact URL in the GitHub Action logs.

## Workflow Details

The GitHub Action (`.github/workflows/chromatic.yml`) will:

- ✅ Run on every push to `main`
- ✅ Run on every pull request
- ✅ Install dependencies
- ✅ Build Storybook
- ✅ Publish to Chromatic
- ✅ Auto-accept visual changes on `main` branch
- ✅ Comment on PRs with preview URL

## Visual Regression Testing (Optional)

Chromatic automatically captures screenshots of all your stories. To enable visual regression testing:

1. In Chromatic dashboard, go to **"Builds"**
2. First build will be the **baseline**
3. Future builds will show **visual diffs**
4. Review and accept/reject changes in the Chromatic UI

## Updating the README

After your first deployment, update `README.md` with the actual Chromatic URL:

```markdown
**[📖 Live Demo (Storybook)](https://your-actual-url.chromatic.com)**
```

## Troubleshooting

### Build Fails with Peer Dependencies

If the build fails, the workflow uses `npm ci --legacy-peer-deps` which should handle peer dependency conflicts.

### Token Not Found

If you get "CHROMATIC_PROJECT_TOKEN not found":
1. Double-check the secret name is exactly `CHROMATIC_PROJECT_TOKEN`
2. Ensure the secret is set in the correct repository
3. Secrets may take a few seconds to become available

### Storybook Build Errors

If Storybook fails to build:
1. Test locally first: `npm run build-storybook`
2. Fix any build errors
3. Push the fix to GitHub

## Additional Features

### Branching Strategy

The workflow is configured to:
- **Auto-accept changes** on `main` branch
- **Review required** for pull requests
- **Preview URLs** for every PR

### Custom Configuration

To customize the Chromatic deployment, edit `.github/workflows/chromatic.yml`:

```yaml
- name: Build Storybook and publish to Chromatic
  uses: chromaui/action@latest
  with:
    projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
    buildScriptName: 'build-storybook'
    autoAcceptChanges: 'main'  # Change this for different behavior
    exitZeroOnChanges: true     # Set to false to fail on changes
```

## Resources

- 📖 [Chromatic Documentation](https://www.chromatic.com/docs/)
- 🚀 [GitHub Action Docs](https://www.chromatic.com/docs/github-actions)
- 💬 [Chromatic Support](https://www.chromatic.com/support)

## Next Steps

After Chromatic is set up:
1. ✅ Update README.md with actual Storybook URL
2. ✅ Add more component stories
3. ✅ Share Storybook URL with team/community
4. ✅ Set up visual regression testing workflow
