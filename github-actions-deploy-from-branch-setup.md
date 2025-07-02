# GitHub Actions "Deploy from Branch" Configuration

## Summary

Your GitHub Actions workflows have been properly configured for the "deploy from branch" method. The main issue was a conflicting deployment setup in `deploy.yml` that has been resolved.

## Changes Made

### 1. Fixed `deploy.yml` Workflow

**Problem:** The original workflow was using both deployment methods:
- ✅ `peaceiris/actions-gh-pages` (for gh-pages branch deployment)
- ❌ `actions/deploy-pages` (for GitHub Actions source deployment)

**Solution:** Removed the conflicting deployment and kept only the gh-pages branch method.

**Key Changes:**
- Removed unnecessary permissions (`pages: write`, `id-token: write`)
- Removed the conflicting `deploy` job that used `actions/deploy-pages@v4`
- Added `force_orphan: true` to ensure clean deployments
- Kept only the `peaceiris/actions-gh-pages@v3` deployment

### 2. Current Workflow Structure

Your workflows now properly implement:

1. **`deploy.yml`** - Production deployment to gh-pages branch from main
2. **`preview.yml`** - PR preview deployments to gh-pages branch `/preview` directory
3. **`cleanup-preview.yml`** - Cleanup preview deployments when PRs close

## GitHub Pages Settings Required

To complete the "deploy from branch" setup, ensure your GitHub repository settings are configured:

1. Go to **Settings > Pages** in your GitHub repository
2. Set **Source** to: **Deploy from a branch**
3. Set **Branch** to: **gh-pages / (root)**

## How It Works

1. When code is pushed to `main` branch:
   - Workflow builds your Next.js static site
   - Deploys the `./out` directory to the `gh-pages` branch
   - GitHub Pages serves the site from the `gh-pages` branch

2. For Pull Requests:
   - Creates preview deployments in `/preview` directory
   - Comments on PR with preview URL
   - Cleans up when PR is closed

## Benefits of This Setup

- ✅ **Consistent deployment method** - Uses only gh-pages branch
- ✅ **PR previews** - Each PR gets its own preview URL
- ✅ **Automatic cleanup** - Preview deployments are removed when PRs close
- ✅ **Force orphan** - Prevents git history bloat in gh-pages branch
- ✅ **Proper permissions** - Minimal required permissions for security

## Verification

Your setup is now properly configured for "deploy from branch" method. The next deployment to `main` will:
1. Build your site
2. Deploy to the `gh-pages` branch
3. Be served by GitHub Pages from that branch

## Next Steps

1. Verify GitHub Pages settings in repository settings
2. Test by pushing a commit to `main` branch
3. Check that the site deploys correctly from the `gh-pages` branch