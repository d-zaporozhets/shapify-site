# Deployment Guide

This project consists of two parts:
1. **Astro static site** - Frontend that fetches data from Payload CMS
2. **Payload CMS** - Headless CMS running on Next.js

## Development Setup

### 1. Start Payload CMS
```bash
cd payload
npm install
npm run dev
```
Payload will run on http://localhost:3002

### 2. Start Astro site
```bash
npm install
npm run dev
```
Astro will run on http://localhost:4321

### 3. Access Admin Panel
- Payload Admin: http://localhost:3002/admin
- Create admin user on first visit

## Production Deployment

### Option A: Separate Deployment (Recommended)

#### 1. Deploy Payload CMS
Deploy the `payload/` directory to a platform that supports Next.js:
- **Vercel** (recommended for Next.js)
- **Railway**
- **Render**
- **Fly.io**

**Environment variables needed:**
```env
PAYLOAD_SECRET=your-secret-key-here
DATABASE_URL=your-database-url
NEXT_PUBLIC_SERVER_URL=https://your-payload-domain.com
NEXT_PUBLIC_PAYLOAD_URL=https://your-payload-domain.com
```

#### 2. Deploy Astro Site
Deploy the root directory to Netlify:

**Environment variables needed:**
```env
PAYLOAD_URL=https://your-payload-domain.com
```

**Build command:**
```bash
npm run build
```

### Option B: Combined Deployment (Advanced)

For combined deployment, you would need to:
1. Configure Payload to build as a static API
2. Build Payload first, then build Astro
3. Serve both from the same domain

This is more complex and not recommended for beginners.

## Environment Variables

### For Payload CMS (`payload/.env`)
```env
PAYLOAD_SECRET=your-secret-key-here
DATABASE_URL=file:./data/payload.db  # For SQLite (local)
# OR for production:
# DATABASE_URL=postgresql://user:password@host:port/database
NEXT_PUBLIC_SERVER_URL=http://localhost:3002
NEXT_PUBLIC_PAYLOAD_URL=http://localhost:3002
```

### For Astro Site (`.env`)
```env
PAYLOAD_URL=http://localhost:3002  # Local development
# For production:
# PAYLOAD_URL=https://your-payload-domain.com
```

## Database

### Development
- Uses SQLite (file-based database)
- Database file: `payload/data/payload.db`

### Production
Recommended databases:
1. **PostgreSQL** (recommended)
2. **MongoDB**
3. **MySQL**

Update `DATABASE_URL` environment variable accordingly.

## Building for Production

### Build Astro Site
```bash
npm run build
```
Output: `dist/` directory

### Build Payload CMS
```bash
cd payload
npm run build
```
Output: `.next/` directory

## Testing Production Build Locally

1. Build Payload:
```bash
cd payload && npm run build && npm start
```

2. Build Astro:
```bash
PAYLOAD_URL=http://localhost:3002 npm run build
npm run preview
```

## Troubleshooting

### Common Issues

1. **Payload API not accessible**
   - Check if Payload is running (`curl http://localhost:3002/api/posts`)
   - Verify `PAYLOAD_URL` environment variable

2. **TypeScript errors**
   - Run `cd payload && npm run generate:types`
   - Run `cd payload && npm run generate:importmap`

3. **Database connection**
   - For SQLite: Ensure write permissions in `payload/data/`
   - For PostgreSQL: Check connection string and network access

4. **Build failures**
   - Clear node_modules: `rm -rf node_modules package-lock.json`
   - Reinstall: `npm install`
   - Clear Next.js cache: `cd payload && rm -rf .next`

## Security Notes

1. **Never commit `.env` files**
2. **Use strong `PAYLOAD_SECRET`**
3. **Enable HTTPS in production**
4. **Set up proper CORS if needed**
5. **Implement rate limiting for API**
6. **Regularly update dependencies**

## Monitoring

1. **Payload Admin Panel**: Check for errors in admin UI
2. **Server logs**: Monitor application logs
3. **Database**: Monitor connection pool and queries
4. **API endpoints**: Monitor response times and errors

## Backup Strategy

1. **Database backups**: Regular backups of production database
2. **Media files**: Backup uploaded files to cloud storage
3. **Configuration**: Backup environment variables and config files
4. **Version control**: All code should be in Git