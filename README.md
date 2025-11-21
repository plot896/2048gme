# AI Email Template Builder

This repo contains a static prototype of the AI email template builder inspired by Hostinger Reach. It ships as plain HTML/CSS/JS and can be opened directly from disk or served from any static file host.

## Prerequisites
- PHP 8.0+ (only needed if you want to use the built-in dev server)
- A modern browser (Chrome, Edge, Firefox, or Safari)

## Quick start (PHP built-in server)
1. Clone or download this repository and open a terminal in the project root.
2. Start PHP's built-in server and point it at the current directory:
   ```bash
   php -S 0.0.0.0:8000 -t .
   ```
   - If port 8000 is busy, replace it with any open port (e.g., `8080`).
3. Visit the app in your browser at `http://localhost:8000` (or the port you chose).

> Tip: Leave the terminal running while you interact with the app. Use `Ctrl+C` to stop the server when you're done.

## Alternative: open directly
Because the project is static, you can also double-click `index.html` to open it directly in your browser. Use this method if you don't want to run PHP locally.

## Deploying
Upload `index.html`, `style.css`, and `app.js` to any static hosting provider (Netlify, Vercel, GitHub Pages, S3/CloudFront, etc.). No additional build steps are required.
