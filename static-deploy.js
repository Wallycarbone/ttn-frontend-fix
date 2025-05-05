// static-deploy.js - Helper script for static site deployment
import fs from 'fs';
import path from 'path';

// Create a public directory if it doesn't exist
const publicDir = path.resolve('./public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('Created public directory');
}

// Create a static HTML page that will serve as a fallback for SPA routing
const staticHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="refresh" content="0;url=/" />
    <title>The Truth Networks - Redirecting...</title>
  </head>
  <body>
    <p>Redirecting to homepage...</p>
    <script>window.location.href = '/';</script>
  </body>
</html>
`;

// Write the file
fs.writeFileSync(path.join(publicDir, '404.html'), staticHtml);
console.log('Created 404.html for SPA routing');

// Create a Render routes file for SPA
const routesJson = JSON.stringify({
  "routes": [
    { "src": "/*", "dest": "/index.html" }
  ]
});

fs.writeFileSync('./public/routes.json', routesJson);
console.log('Created routes.json for SPA routing');

console.log('Static deployment setup complete!');