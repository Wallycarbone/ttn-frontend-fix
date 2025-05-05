# The Truth Networks Website

This repository contains the website for The Truth Networks, an organization dedicated to fighting misinformation and promoting media literacy in a digital age.

## Deployment Instructions for Render

1. Create a new Static Site service in Render
2. Connect this GitHub repository
3. Use the following build settings:
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`

## Development

To run the development server locally:

```bash
npm install
npm run dev
```

## Technology Stack

- React
- Vite
- CSS