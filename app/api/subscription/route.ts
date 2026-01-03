import { NextRequest, NextResponse } from 'next/server';
import { createSubscriptionCheckout } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Create Stripe subscription checkout session
    const session = await createSubscriptionCheckout(
      email,
      `${process.env.NEXT_PUBLIC_APP_URL}/seller/dashboard?subscribed=true`,
      `${process.env.NEXT_PUBLIC_APP_URL}/become-seller`
    );

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
