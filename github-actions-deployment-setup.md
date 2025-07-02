# GitHub Actions Deployment Configuration

## Summary

Your GitHub Actions workflows have been **fully migrated to the GitHub Actions deployment method**. Both production and PR preview deployments now use GitHub Actions instead of the gh-pages branch approach.

## Changes Made

### 1. Production Deployment (`deploy.yml`) ✅
**Already correctly configured** for GitHub Actions method:
- Uses `actions/configure-pages@v4`, `actions/upload-pages-artifact@v3`, `actions/deploy-pages@v4`
- Proper permissions: `pages: write`, `id-token: write`, `contents: read`
- Uses `github-pages` environment

### 2. Updated PR Preview Deployment (`preview.yml`) ✅
**Migrated from gh-pages branch to GitHub Actions + Surge.sh:**

**Previous Issues:**
- Used gh-pages branch checkout and manipulation
- Required `contents: write` permission
- Mixed deployment methods

**New Solution:**
- **Uses GitHub Actions** for build and deployment process
- **Deploys to Surge.sh** for isolated PR previews
- **Eliminates gh-pages branch usage** completely
- Uses only `contents: read` and `pull-requests: write` permissions
- Each PR gets its own URL: `https://pr-{number}-{owner}-{repo}.surge.sh`

### 3. Updated Cleanup (`cleanup-preview.yml`) ✅
**Migrated from gh-pages branch to Surge.sh management:**
- Removes Surge.sh deployments instead of gh-pages branch manipulation
- Uses `surge teardown` command
- No longer requires `contents: write` permission

## Required Setup

### GitHub Pages Settings (Production)
1. Go to **Settings > Pages** in your GitHub repository
2. Set **Source** to: **GitHub Actions**
3. No branch selection needed

### Surge.sh Setup (PR Previews)
1. **Create Surge.sh account** at [surge.sh](https://surge.sh)
2. **Get Surge token:**
   ```bash
   npm install -g surge
   surge login
   surge token
   ```
3. **Add GitHub secret:**
   - Go to repository **Settings > Secrets and variables > Actions**
   - Add new secret: `SURGE_TOKEN` with your Surge token value

## How It Works

### Production Deployment (main branch):
1. **Build Job:** Builds Next.js static site
2. **Deploy Job:** Deploys to GitHub Pages using GitHub Actions infrastructure
3. **Result:** Available at your GitHub Pages URL

### PR Preview Deployments:
1. **Build:** Uses GitHub Actions to build PR code
2. **Deploy:** Uses GitHub Actions to deploy to Surge.sh
3. **Result:** Each PR gets unique URL: `https://pr-{number}-{owner}-{repo}.surge.sh`
4. **Cleanup:** Automatically removes Surge deployment when PR closes

## Benefits of This Setup

- ✅ **Fully GitHub Actions method** - No gh-pages branch usage anywhere
- ✅ **Consistent deployment approach** - GitHub Actions for everything
- ✅ **Better security** - Minimal permissions throughout
- ✅ **Isolated PR previews** - Each PR gets its own domain
- ✅ **Automatic cleanup** - Surge deployments removed when PRs close
- ✅ **No conflicts** - PR previews don't interfere with production site
- ✅ **Industry standard** - Surge.sh is widely used for PR previews

## Why Surge.sh for PR Previews?

GitHub Pages with GitHub Actions method is designed for single-site deployment. Using Surge.sh for PR previews allows us to:
- Maintain GitHub Actions consistency
- Avoid overwriting the production site
- Provide isolated preview environments
- Use a service designed for temporary deployments

## URLs

- **Production:** Your GitHub Pages URL (e.g., `https://username.github.io/repo`)
- **PR Previews:** `https://pr-{number}-{owner}-{repo}.surge.sh`

## Next Steps

1. **Set up Surge.sh token** as described above
2. **Verify GitHub Pages settings** are set to "GitHub Actions"
3. **Test with a PR** to verify preview deployment works
4. **Monitor workflows** in the Actions tab

## Technical Details

- **Production deployment:** GitHub Actions → GitHub Pages
- **PR preview deployment:** GitHub Actions → Surge.sh
- **Build output:** `./out` directory from Next.js static export
- **Permissions:** Minimal required permissions only
- **No gh-pages branch usage:** Completely eliminated