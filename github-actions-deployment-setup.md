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
**Migrated from gh-pages branch to GitHub Actions + Firebase Hosting:**

**Previous Issues:**
- Used gh-pages branch checkout and manipulation
- Required `contents: write` permission
- Mixed deployment methods

**New Solution:**
- **Uses GitHub Actions** for build and deployment process
- **Deploys to Firebase Hosting** using preview channels for isolated PR previews
- **Eliminates gh-pages branch usage** completely
- Uses only `contents: read` and `pull-requests: write` permissions
- Each PR gets its own URL: `https://{project-id}--pr-{number}.web.app`

### 3. Updated Cleanup (`cleanup-preview.yml`) ✅
**Migrated from gh-pages branch to Firebase auto-expiration:**
- Firebase preview channels automatically expire after 30 days
- No manual cleanup needed - Firebase handles it automatically
- Uses minimal permissions
- No longer requires `contents: write` permission

## Required Setup - Firebase Hosting

### **Step 1: Create Firebase Project**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"** or **"Add project"**
3. Enter your project name (e.g., `your-app-preview`)
4. Optionally enable Google Analytics
5. Click **"Create project"**

### **Step 2: Enable Firebase Hosting**
1. In your Firebase project dashboard, click **"Hosting"** in the left sidebar
2. Click **"Get started"**
3. Follow the setup wizard (you can skip the Firebase CLI installation for now)

### **Step 3: Create Service Account**
1. Go to **Project Settings** (gear icon) → **Service accounts**
2. Click **"Generate new private key"**
3. Save the JSON file securely - you'll need this for GitHub secrets

### **Step 4: Add GitHub Secrets**
Go to your GitHub repository **Settings > Secrets and variables > Actions** and add:

- **`FIREBASE_SERVICE_ACCOUNT`**: Paste the entire contents of the JSON file from Step 3
- **`FIREBASE_PROJECT_ID`**: Your Firebase project ID (found in Firebase Console project settings)

### **Step 5: Required GitHub Pages Setup (Production)**
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
2. **Deploy:** Uses GitHub Actions to deploy to Firebase Hosting preview channel
3. **Result:** Each PR gets unique URL: `https://{project-id}--pr-{number}.web.app`
4. **Cleanup:** Automatically expires after 30 days

## Benefits of This Setup

- ✅ **Fully GitHub Actions method** - No gh-pages branch usage anywhere
- ✅ **Consistent deployment approach** - GitHub Actions for everything
- ✅ **Better security** - Minimal permissions throughout
- ✅ **Isolated PR previews** - Each PR gets its own domain
- ✅ **Automatic cleanup** - Firebase handles expiration automatically
- ✅ **No conflicts** - PR previews don't interfere with production site
- ✅ **Industry standard** - Firebase Hosting is widely used and reliable
- ✅ **Great performance** - Firebase's global CDN ensures fast loading

## Why Firebase Hosting for PR Previews?

Firebase Hosting with preview channels is specifically designed for this use case:
- **Preview channels** - Built for temporary preview deployments
- **Automatic expiration** - No manual cleanup needed
- **GitHub integration** - Official Firebase GitHub Action
- **Performance** - Global CDN and optimized delivery
- **Reliability** - Google's infrastructure

## URLs

- **Production:** Your GitHub Pages URL (e.g., `https://username.github.io/repo`)
- **PR Previews:** `https://{firebase-project-id}--pr-{number}.web.app`

## File Added

- **`firebase.json`** - Configuration file for Firebase Hosting that specifies:
  - Build directory (`out`)
  - Rewrite rules for single-page application routing
  - Cache headers for static assets

## Next Steps

1. **Complete Firebase setup** as described above
2. **Add the two required GitHub secrets**
3. **Verify GitHub Pages settings** are set to "GitHub Actions"
4. **Test with a PR** to verify preview deployment works
5. **Monitor workflows** in the Actions tab

## Technical Details

- **Production deployment:** GitHub Actions → GitHub Pages
- **PR preview deployment:** GitHub Actions → Firebase Hosting (preview channels)
- **Build output:** `./out` directory from Next.js static export
- **Permissions:** Minimal required permissions only
- **Preview expiration:** 30 days (configurable)
- **No gh-pages branch usage:** Completely eliminated