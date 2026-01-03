# 🛍️ Artisan Market - E-Commerce Marketplace

A beautiful, modern e-commerce marketplace platform built with Next.js 15, TypeScript, and Tailwind CSS. Sellers pay $25 CAD/month to list unlimited products, and the platform takes 15% commission on each sale.

## ✨ Features

### For Buyers
- 🏪 Browse handcrafted products from independent sellers
- 🛒 Shopping cart with real-time updates
- 💳 Secure checkout with Stripe
- 📱 Fully responsive design
- 🎨 Beautiful, modern UI with smooth animations

### For Sellers
- 💰 Simple pricing: $25 CAD/month subscription
- 📊 Seller dashboard with sales analytics
- 💵 Keep 85% of each sale (15% platform commission)
- 📦 Unlimited product listings
- 💳 Secure payments via Stripe

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Stripe account (for payment processing)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd webapp
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Stripe keys to `.env.local`:
```env
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 💰 Pricing Model

### For Sellers
- **Monthly Subscription**: $25 CAD/month
- **Commission**: 15% per sale
- **Seller Keeps**: 85% of each sale

### Example
If a seller makes a $100 sale:
- Platform fee (15%): $15
- Seller receives (85%): $85

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Payments**: Stripe
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
webapp/
├── app/                      # Next.js app router pages
│   ├── page.tsx             # Homepage
│   ├── products/            # Product listing & details
│   ├── cart/                # Shopping cart
│   ├── checkout/            # Checkout flow
│   ├── become-seller/       # Seller onboarding
│   ├── seller/              # Seller dashboard
│   ├── about/               # About page
│   └── api/                 # API routes
│       ├── checkout/        # Checkout API
│       ├── subscription/    # Subscription API
│       └── products/        # Product API
├── components/              # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── lib/                     # Utility functions
│   ├── db.ts               # Mock database
│   └── stripe.ts           # Stripe utilities
└── types/                   # TypeScript types
    └── index.ts
```

## 🔧 Configuration

### Stripe Setup

1. Create a [Stripe account](https://stripe.com)
2. Get your API keys from the Stripe dashboard
3. Add keys to `.env.local`
4. Configure webhook endpoints for production

### Database

Currently using a mock database (`lib/db.ts`). For production:
- Replace with PostgreSQL, MongoDB, or your preferred database
- Add proper authentication
- Implement user sessions

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🔐 Security Notes

- Current implementation uses mock data - add authentication for production
- Implement proper user sessions
- Add CSRF protection
- Validate all inputs server-side
- Use Stripe webhooks to verify payments
- Add rate limiting

## 📝 Future Enhancements

- [ ] User authentication (Auth0, NextAuth, etc.)
- [ ] Real database integration
- [ ] Product search and filters
- [ ] Seller analytics dashboard
- [ ] Order tracking
- [ ] Reviews and ratings
- [ ] Image uploads for products
- [ ] Email notifications
- [ ] Admin panel
- [ ] Multi-currency support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 💬 Support

For support, email support@artisanmarket.com or open an issue in the repository.

---

Made with ❤️ for artisans and creators everywhere.
