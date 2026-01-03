# 🚀 Deployment Guide

## Quick Deploy to Vercel

1. **Push to GitHub** (Already done! ✅)

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository: `dmarr1703/millo10`
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**:
   Add these in Vercel's project settings:
   ```
   STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   ```

4. **Deploy**: Click "Deploy" and you're live!

## Stripe Configuration

### Get Your API Keys
1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Click "Developers" → "API Keys"
3. Copy your **Publishable key** and **Secret key**
4. For testing, use test mode keys (start with `pk_test_` and `sk_test_`)
5. For production, use live mode keys (start with `pk_live_` and `sk_live_`)

### Set Up Products
1. In Stripe Dashboard, go to "Products"
2. Create a product for the monthly subscription ($25 CAD)
3. Update the price ID in your code if needed

### Configure Webhooks (Optional but Recommended)
1. Go to "Developers" → "Webhooks"
2. Add endpoint: `https://your-domain.vercel.app/api/webhooks/stripe`
3. Select events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`

## Environment Variables

### Development (`.env.local`)
```env
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Production (Vercel)
```env
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

## Database Setup (For Production)

Currently using mock data. For production:

### Option 1: Vercel Postgres
```bash
npm install @vercel/postgres
```

### Option 2: Supabase
```bash
npm install @supabase/supabase-js
```

### Option 3: PlanetScale
```bash
npm install @planetscale/database
```

## Post-Deployment Checklist

- [ ] Test the homepage loads
- [ ] Browse products work
- [ ] Cart functionality works
- [ ] Stripe checkout redirects correctly
- [ ] Seller subscription flow works
- [ ] Seller dashboard displays correctly
- [ ] Mobile responsive on all pages
- [ ] SSL certificate active (automatic with Vercel)
- [ ] Environment variables set correctly
- [ ] Stripe webhooks configured (if using)

## Monitoring

- **Vercel Analytics**: Automatically enabled
- **Stripe Dashboard**: Monitor payments and subscriptions
- **Vercel Logs**: Check for errors in deployment logs

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify environment variables
3. Test Stripe keys in test mode first
4. Check browser console for client-side errors

---

**Your marketplace is ready to go live! 🎉**
