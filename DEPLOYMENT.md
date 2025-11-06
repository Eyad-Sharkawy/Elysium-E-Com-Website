# Production Deployment Guide

## 🚀 Quick Deploy

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist/` folder ready for deployment.

---

## 📦 Deployment Options

### 1. Vercel (Recommended - Easiest)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow the prompts

**Or via Vercel Dashboard:**
- Connect your Git repository
- Vercel auto-detects Vite projects
- Deploy automatically on push

### 2. Netlify

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Build: `npm run build`
3. Deploy: `netlify deploy --prod --dir=dist`

**Or via Netlify Dashboard:**
- Drag and drop the `dist/` folder
- Or connect Git for continuous deployment

### 3. GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

### 4. AWS S3 + CloudFront

1. Build: `npm run build`
2. Upload `dist/` contents to S3 bucket
3. Configure CloudFront for CDN
4. Set bucket policy for static website hosting

### 5. Apache Server

1. Build: `npm run build`
2. Copy `dist/` contents to Apache web root
3. `.htaccess` file included for optimizations
4. Configure virtual host

### 6. Nginx Server

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## ⚙️ Production Optimizations Applied

✅ **Code Splitting**: React and icons in separate chunks  
✅ **Tree Shaking**: Unused code removed  
✅ **Minification**: All code minified  
✅ **Asset Hashing**: Cache-busting for updates  
✅ **Console Removal**: Development console statements removed  
✅ **Source Maps**: Disabled for smaller bundle size  

---

## 🔒 Security Checklist

- [x] Security headers in `.htaccess`
- [x] HTTPS ready (configure SSL certificate)
- [ ] Set up Content Security Policy (CSP)
- [ ] Configure CORS if using API
- [ ] Set up rate limiting
- [ ] Configure firewall rules

---

## 📊 Post-Deployment

### Analytics Setup

1. Add Google Analytics in `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Tracking

Set up error tracking (e.g., Sentry) in `src/main.jsx`:

```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: "production",
});
```

### Performance Monitoring

Monitor with:
- Google PageSpeed Insights
- WebPageTest
- Lighthouse CI

---

## 🔄 Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 📈 Performance Tips

1. **Image Optimization**: Convert images to WebP format
2. **CDN**: Use a CDN for static assets
3. **Caching**: Configure proper cache headers
4. **Compression**: Enable gzip/brotli compression
5. **Lazy Loading**: Implement for images and routes

---

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (requires 16+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors

### 404 on Refresh
- Configure server to serve `index.html` for all routes
- Add redirect rules in `.htaccess` or nginx config

### Assets Not Loading
- Check base path in `vite.config.js` if deploying to subdirectory
- Verify asset paths are relative

---

## 📞 Support

For deployment issues, check:
- [Vite Deployment Docs](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)

