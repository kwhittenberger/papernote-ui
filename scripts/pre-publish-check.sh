#!/bin/bash
set -e

echo "======================================"
echo "Pre-Publish Validation Check"
echo "======================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
  echo "❌ Error: package.json not found. Run this script from the project root."
  exit 1
fi

PACKAGE_VERSION=$(node -p "require('./package.json').version")
echo "📦 Package version: $PACKAGE_VERSION"
echo ""

# Check for uncommitted changes
echo "🔍 Checking for uncommitted changes..."
if [ -n "$(git status --porcelain)" ]; then
  echo "❌ Error: You have uncommitted changes. Commit or stash them first."
  git status --short
  exit 1
fi
echo "✓ No uncommitted changes"
echo ""

# Check if current branch is main
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "🔍 Current branch: $CURRENT_BRANCH"
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "⚠️  Warning: You're not on the main branch. Releases should be from main."
  read -p "Continue anyway? (y/n) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
  fi
fi
echo ""

# Run type check
echo "🔍 Running type check..."
npm run typecheck
echo "✓ Type check passed"
echo ""

# Run linter
echo "🔍 Running linter..."
npm run lint
echo "✓ Linting passed"
echo ""

# Run build
echo "🔨 Building library..."
npm run build
echo "✓ Build successful"
echo ""

# Verify build output
echo "🔍 Verifying build output..."
if [ ! -f "dist/index.js" ]; then
  echo "❌ Error: dist/index.js not found"
  exit 1
fi
if [ ! -f "dist/index.esm.js" ]; then
  echo "❌ Error: dist/index.esm.js not found"
  exit 1
fi
if [ ! -f "dist/index.d.ts" ]; then
  echo "❌ Error: dist/index.d.ts not found"
  exit 1
fi
if [ ! -f "dist/styles.css" ]; then
  echo "❌ Error: dist/styles.css not found"
  exit 1
fi
echo "✓ All build outputs verified"
echo ""

# Check if tag already exists
TAG_NAME="v$PACKAGE_VERSION"
if git rev-parse "$TAG_NAME" >/dev/null 2>&1; then
  echo "❌ Error: Git tag $TAG_NAME already exists"
  echo "   Update the version in package.json before publishing"
  exit 1
fi
echo "✓ Tag $TAG_NAME does not exist yet"
echo ""

# Check if version exists on npm
echo "🔍 Checking if version $PACKAGE_VERSION exists on npm..."
if npm view @papernote/ui@$PACKAGE_VERSION version >/dev/null 2>&1; then
  echo "❌ Error: Version $PACKAGE_VERSION already exists on npm"
  echo "   Update the version in package.json before publishing"
  exit 1
fi
echo "✓ Version $PACKAGE_VERSION not yet published"
echo ""

echo "======================================"
echo "✅ All checks passed!"
echo "======================================"
echo ""
echo "Ready to publish @papernote/ui@$PACKAGE_VERSION"
echo ""
echo "Next steps:"
echo "  1. Create and push tag: npm version patch/minor/major"
echo "  2. Push tags: git push --tags"
echo "  3. Create GitHub release or wait for tag workflow"
echo ""
