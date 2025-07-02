# GitHub Actions Deployment Configuration

## Summary

Your GitHub Actions workflows have been properly configured for the **GitHub Actions deployment method**. The workflow now uses GitHub's native deployment infrastructure instead of the gh-pages branch.

## Changes Made

### 1. Fixed `deploy.yml` Workflow

**Problem:** The original workflow was mixing deployment methods incorrectly.

**Solution:** Configured proper GitHub Actions deployment method.

**Key Changes:**
- **Updated permissions:** Added `pages: write` and `id-token: write`, changed `contents: write` to `contents: read`
- **Separated jobs:** Split into `build` and `deploy` jobs for better workflow structure
- **Added proper steps:**
  - `actions/configure-pages@v4` - Sets up GitHub Pages configuration
  - `actions/upload-pages-artifact@v3` - Uploads the build artifact
  - `actions/deploy-pages@v4` - Deploys from the artifact
- **Added environment:** Uses `github-pages` environment for deployment

### 2. Current Workflow Structure

Your workflows now implement:

1. **`deploy.yml`** - Production deployment using GitHub Actions method
2. **`preview.yml`** - PR preview deployments to gh-pages branch `/preview` directory
3. **`cleanup-preview.yml`** - Cleanup preview deployments when PRs close

*Note: Preview deployments still use gh-pages branch method, which is a common pattern to separate production and preview deployments.*

## GitHub Pages Settings Required

To complete the GitHub Actions deployment setup, ensure your GitHub repository settings are configured:

1. Go to **Settings > Pages** in your GitHub repository
2. Set **Source** to: **GitHub Actions**
3. No branch selection needed (GitHub Actions handles deployment)

## How It Works

### Production Deployment (main branch):
1. **Build Job:**
   - Checks out code
   - Sets up Node.js
   - Installs dependencies
   - Optimizes images
   - Builds Next.js static site
   - Configures Pages settings
   - Uploads build artifact

2. **Deploy Job:**
   - Downloads the build artifact
   - Deploys to GitHub Pages using GitHub Actions infrastructure

### Preview Deployments (PRs):
- Still uses gh-pages branch method for isolated previews
- Creates `/preview` directory for PR previews
- Comments on PRs with preview URLs
- Cleans up when PRs are closed

## Benefits of This Setup

- ✅ **Native GitHub integration** - Uses GitHub's deployment infrastructure
- ✅ **Better security** - Minimal permissions, no branch access needed
- ✅ **Artifact-based deployment** - Clean separation of build and deploy
- ✅ **Environment protection** - Uses `github-pages` environment
- ✅ **PR previews** - Separate preview system using gh-pages
- ✅ **Automatic cleanup** - Preview deployments are removed when PRs close

## Verification

Your setup is now properly configured for GitHub Actions deployment method. The next deployment to `main` will:
1. Build your site in the build job
2. Upload the build as an artifact
3. Deploy the artifact using GitHub Actions
4. Be served by GitHub Pages

## Next Steps

1. **Verify GitHub Pages settings:** Ensure "Source" is set to "GitHub Actions"
2. **Test deployment:** Push a commit to `main` branch
3. **Check deployment:** Verify the site deploys correctly using GitHub Actions
4. **Monitor workflow:** Check the Actions tab for successful deployment runs

## Technical Details

- **Deployment method:** GitHub Actions (not deploy from branch)
- **Build output:** `./out` directory from Next.js static export
- **Artifact upload:** Uses `actions/upload-pages-artifact@v3`
- **Deployment:** Uses `actions/deploy-pages@v4`
- **Environment:** `github-pages` with deployment URL output