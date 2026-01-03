import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession, calculateCommission } from '@/lib/stripe';
import { createTransaction } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { items, buyerEmail } = await request.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'No items provided' }, { status: 400 });
    }

    // Create Stripe checkout session
    const session = await createCheckoutSession(
      items,
      `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      `${process.env.NEXT_PUBLIC_APP_URL}/cart`
    );

    // Create transactions for each item
    for (const item of items) {
      const totalAmount = item.price * item.quantity;
      const commission = calculateCommission(totalAmount);

      await createTransaction({
        productId: item.productId,
        sellerId: item.product.sellerId,
        buyerEmail: buyerEmail || 'guest@example.com',
        amount: commission.saleAmount,
        platformFee: commission.platformFee,
        sellerPayout: commission.sellerPayout,
        status: 'pending',
        stripePaymentId: session.id,
        createdAt: new Date(),
      });
    }

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
