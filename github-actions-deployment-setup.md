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
**Migrated from gh-pages branch to GitHub Actions + modern hosting:**

**Previous Issues:**
- Used gh-pages branch checkout and manipulation
- Required `contents: write` permission
- Mixed deployment methods

**New Solution:**
- **Uses GitHub Actions** for build and deployment process
- **Multiple hosting options available** for isolated PR previews
- **Eliminates gh-pages branch usage** completely
- Uses only `contents: read` and `pull-requests: write` permissions
- Each PR gets its own URL

### 3. Updated Cleanup (`cleanup-preview.yml`) ✅
**Migrated from gh-pages branch to modern hosting management:**
- Removes deployments using hosting service APIs
- Uses minimal permissions
- No longer requires `contents: write` permission

## PR Preview Hosting Options

Choose one of these excellent alternatives:

### **Option 1: Netlify** 🌟 **Most Popular**
- **Pros:** Excellent GitHub integration, generous free tier, form handling, edge functions
- **Cons:** Can get expensive with high traffic
- **URL Pattern:** `https://pr-{number}--{site-name}.netlify.app`

**Required Secrets:**
- `NETLIFY_AUTH_TOKEN` - Personal access token from Netlify
- `NETLIFY_SITE_ID` - Site ID from Netlify dashboard
- `NETLIFY_SITE_NAME` - Your Netlify site name

**Setup:**
1. Create Netlify account and site
2. Generate personal access token
3. Add secrets to GitHub repository

### **Option 2: Vercel** 🌟 **Best for Next.js**
- **Pros:** Excellent Next.js optimization, edge functions, great DX
- **Cons:** Pricing can add up, more complex for non-Next.js projects
- **URL Pattern:** `https://pr-{number}-{repo}.vercel.app`

**Required Secrets:**
- `VERCEL_TOKEN` - Vercel API token
- `VERCEL_ORG_ID` - Organization ID from Vercel
- `VERCEL_PROJECT_ID` - Project ID from Vercel

**Setup:**
1. Create Vercel account and project
2. Get API token and IDs from Vercel dashboard
3. Add secrets to GitHub repository

### **Option 3: Firebase Hosting** 🌟 **Google's Solution**
- **Pros:** Great performance, tight Google Cloud integration, preview channels
- **Cons:** Requires Google account, more complex setup
- **URL Pattern:** `https://{project-id}--pr-{number}.web.app`

**Required Secrets:**
- `FIREBASE_SERVICE_ACCOUNT` - Service account JSON
- `FIREBASE_PROJECT_ID` - Firebase project ID

**Setup:**
1. Create Firebase project
2. Enable Hosting
3. Create service account with Hosting Admin role
4. Add secrets to GitHub repository

### **Option 4: Cloudflare Pages** 🌟 **Fast & Global**
- **Pros:** Excellent performance, global CDN, generous free tier
- **Cons:** Less mature ecosystem than others
- **URL Pattern:** `https://pr-{number}.{project}.pages.dev`

**Required Secrets:**
- `CLOUDFLARE_API_TOKEN` - API token with Pages permissions
- `CLOUDFLARE_ACCOUNT_ID` - Account ID from Cloudflare
- `CLOUDFLARE_PROJECT_NAME` - Pages project name

**Setup:**
1. Create Cloudflare account
2. Create Pages project
3. Generate API token with Pages permissions
4. Add secrets to GitHub repository

### **Option 5: Surge.sh** (Current) 💡 **Simple & Free**
- **Pros:** Simple setup, completely free, great for small projects
- **Cons:** Basic features, limited customization
- **URL Pattern:** `https://pr-{number}-{owner}-{repo}.surge.sh`

## Required GitHub Pages Setup (Production)

1. Go to **Settings > Pages** in your GitHub repository
2. Set **Source** to: **GitHub Actions**
3. No branch selection needed

## How It Works

### Production Deployment (main branch):
1. **Build Job:** Builds Next.js static site
2. **Deploy Job:** Deploys to GitHub Pages using GitHub Actions infrastructure
3. **Result:** Available at your GitHub Pages URL

### PR Preview Deployments:
1. **Build:** Uses GitHub Actions to build PR code
2. **Deploy:** Uses GitHub Actions to deploy to chosen hosting service
3. **Result:** Each PR gets unique URL based on chosen service
4. **Cleanup:** Automatically removes deployment when PR closes

## Benefits of This Setup

- ✅ **Fully GitHub Actions method** - No gh-pages branch usage anywhere
- ✅ **Consistent deployment approach** - GitHub Actions for everything
- ✅ **Better security** - Minimal permissions throughout
- ✅ **Isolated PR previews** - Each PR gets its own domain
- ✅ **Automatic cleanup** - Deployments removed when PRs close
- ✅ **No conflicts** - PR previews don't interfere with production site
- ✅ **Industry standard** - All options are widely used for PR previews
- ✅ **Choice** - Pick the hosting service that fits your needs and budget

## Switching Between Options

To switch between hosting options:
1. **Replace** your `preview.yml` with the desired option's workflow
2. **Update** GitHub secrets with the new service's requirements  
3. **Update** cleanup workflow if needed
4. **Test** with a new PR

Example workflows are provided as `.example` files in your `.github/workflows/` directory.

## Why These Alternatives?

GitHub Pages with GitHub Actions method is designed for single-site deployment. Using these hosting services for PR previews allows us to:
- Maintain GitHub Actions consistency
- Avoid overwriting the production site
- Provide isolated preview environments
- Use services designed for temporary/preview deployments

## URLs

- **Production:** Your GitHub Pages URL (e.g., `https://username.github.io/repo`)
- **PR Previews:** Varies by chosen hosting service (see options above)

## Next Steps

1. **Choose your preferred hosting option** from the alternatives above
2. **Set up the required secrets** for your chosen service
3. **Replace your preview workflow** with the chosen option
4. **Test with a PR** to verify preview deployment works
5. **Monitor workflows** in the Actions tab

## Technical Details

- **Production deployment:** GitHub Actions → GitHub Pages
- **PR preview deployment:** GitHub Actions → Chosen hosting service
- **Build output:** `./out` directory from Next.js static export
- **Permissions:** Minimal required permissions only
- **No gh-pages branch usage:** Completely eliminated