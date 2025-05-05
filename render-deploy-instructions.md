# Render Deployment Instructions for The Truth Networks Website

This file contains step-by-step instructions to successfully deploy your website on Render.

## Option 1: Deploy as a Static Site (Recommended)

1. Log in to your Render dashboard: https://dashboard.render.com/
2. Click "New" and select "Static Site"
3. Connect your GitHub repository or upload the zip file directly
4. Configure the following settings:
   - **Name**: `ttn-website` (or your preferred name)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Branch**: `main` (or whichever branch contains your code)
5. Click "Create Static Site"

## Option 2: Deploy as a Web Service

If you need server-side functionality:

1. Log in to your Render dashboard: https://dashboard.render.com/
2. Click "New" and select "Web Service"
3. Connect your GitHub repository or upload the zip file directly
4. Configure the following settings:
   - **Name**: `ttn-website` (or your preferred name)
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Branch**: `main` (or whichever branch contains your code)
5. Click "Create Web Service"

## Troubleshooting

If you encounter build errors:

1. Check your `package.json` to ensure all dependencies are correctly listed
2. Verify that the `type: module` property is included for ESM compatibility
3. Make sure your `vite.config.js` is configured correctly
4. Review the server logs in the Render dashboard to identify specific issues

## Optimization Tips

- Set up a custom domain in the Render dashboard
- Enable automatic HTTPS for secure connections
- Configure environment variables if needed for your application

For any issues, please refer to Render's documentation: https://render.com/docs