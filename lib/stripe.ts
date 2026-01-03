import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
});

export const PLATFORM_FEE_PERCENTAGE = 0.15; // 15%
export const MONTHLY_SUBSCRIPTION_FEE = 25; // CAD

export function calculateCommission(saleAmount: number) {
  const platformFee = saleAmount * PLATFORM_FEE_PERCENTAGE;
  const sellerPayout = saleAmount - platformFee;
  
  return {
    saleAmount,
    platformFee,
    sellerPayout,
  };
}

export async function createCheckoutSession(
  items: Array<{ productId: string; name: string; price: number; quantity: number }>,
  successUrl: string,
  cancelUrl: string
) {
  const lineItems = items.map(item => ({
    price_data: {
      currency: 'cad',
      product_data: {
        name: item.name,
      },
      unit_amount: Math.round(item.price * 100), // Convert to cents
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  return session;
}

export async function createSubscriptionCheckout(
  email: string,
  successUrl: string,
  cancelUrl: string
) {
  // Create or get price for monthly subscription
  const price = await stripe.prices.create({
    currency: 'cad',
    unit_amount: 2500, // $25 CAD in cents
    recurring: {
      interval: 'month',
    },
    product_data: {
      name: 'Seller Monthly Subscription',
      description: 'Sell your products on our marketplace for $25 CAD/month',
    },
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: price.id,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: successUrl,
    cancel_url: cancelUrl,
    customer_email: email,
  });

  return session;
}
