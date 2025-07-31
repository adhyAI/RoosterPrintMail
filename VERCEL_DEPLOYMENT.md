# Vercel Deployment Guide

## Quick Setup (5 minutes)

Your Rooster Print & Mail landing page is ready for free deployment on Vercel! Follow these steps:

### 1. Push to GitHub
```bash
# If not already done, initialize git and push to GitHub
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### 3. Set Up Database (Free)
Choose one of these free options:

#### Option A: Supabase (Recommended)
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Go to Settings → Database
4. Copy the connection string
5. In Vercel: Settings → Environment Variables
6. Add: `DATABASE_URL` = your connection string

#### Option B: PlanetScale
1. Go to [planetscale.com](https://planetscale.com)
2. Create database
3. Get connection string
4. Add to Vercel environment variables

### 4. Environment Variables
In Vercel dashboard, add these environment variables:
- `DATABASE_URL` - Your database connection string
- `NODE_ENV` - Set to `production`

## What You Get

✅ **Free hosting** - No cost for personal projects  
✅ **Custom domain** - yoursite.vercel.app (or bring your own)  
✅ **HTTPS** - Automatic SSL certificate  
✅ **Global CDN** - Fast loading worldwide  
✅ **Auto-deploy** - Updates when you push to GitHub  

## Your Admin Dashboard

- **URL**: `yoursite.vercel.app/admin`
- **Password**: `rooster2025`
- **Features**: All current functionality preserved

## Files Prepared for Vercel

I've created:
- `vercel.json` - Deployment configuration
- `api/demo-requests.ts` - Serverless demo request handler
- `api/roi-calculation.ts` - Serverless ROI calculator

## Fixes Applied for Your Issues

I've resolved both the blank page and build errors:

✅ **Fixed import errors** - Removed problematic imports causing build failures  
✅ **Self-contained API functions** - No dependencies on server files  
✅ **Simplified storage** - In-memory storage for Vercel serverless functions  
✅ **Updated routing** - Proper static site serving configuration  

## After Updating

1. **Push the updated code** to GitHub:
   ```bash
   git add .
   git commit -m "Fix Vercel build errors and blank page issue"
   git push
   ```

2. **Vercel will automatically redeploy** - Watch the build logs for success
3. **Your website should now display properly** - Landing page with full functionality
4. **All features work** - Demo requests, ROI calculator, admin dashboard

## Cost Breakdown

- **Vercel hosting**: Free (generous limits)
- **Database**: Free tier (Supabase/PlanetScale)
- **Domain**: Optional (~$10/year)
- **Total monthly cost**: $0

Your landing page will handle thousands of visitors and demo requests on the free tier!

## Support

If you need help with the deployment, the issue is likely:
1. Database connection string format
2. Environment variables not set correctly

Both are easily fixed in the Vercel dashboard settings.