# Security Setup Guide

## Password Security Implementation

This application has been updated to use secure environment variables for password management instead of hardcoded values in the source code.

### Setup Instructions

1. **Copy the example environment file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Update the admin password:**
   Edit `.env.local` and replace the default password with a strong, secure password:
   ```
   ADMIN_PASSWORD=your_secure_password_here
   ```

3. **Important Security Notes:**
   - The `.env.local` file is automatically ignored by Git (see `.gitignore`)
   - Never commit passwords or secrets to version control
   - Use a strong password with a mix of letters, numbers, and special characters
   - Consider using a password manager to generate and store secure passwords

### How It Works

- **Server-side Authentication:** The password is stored and validated on the server side only
- **API Route:** `/api/auth/login` handles authentication securely
- **Environment Variables:** Passwords are stored in `ADMIN_PASSWORD` environment variable
- **No Client Exposure:** The actual password never reaches the client-side code

### Production Deployment

For production environments:

1. **Set environment variables** in your hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables
   - Railway: Project → Variables
   - Other platforms: Consult their documentation

2. **Use strong passwords** different from development

3. **Consider additional security measures:**
   - Rate limiting for login attempts
   - JWT tokens for session management
   - Two-factor authentication
   - Regular password rotation

### Development vs Production

- **Development:** Use `.env.local` file (never committed)
- **Production:** Set environment variables in your hosting platform
- **Example:** Always keep `.env.example` updated with required variables (without actual values)

### Troubleshooting

If you encounter authentication issues:

1. Verify `ADMIN_PASSWORD` is set in your environment
2. Check the browser console and server logs for errors
3. Ensure there are no extra spaces or characters in the password
4. Restart your development server after changing environment variables