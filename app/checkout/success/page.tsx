'use client';

import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CheckoutSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Clear cart on successful checkout
    localStorage.removeItem('cart');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your order has been received and will be processed shortly.
            You will receive a confirmation email with your order details.
          </p>

          <div className="bg-purple-50 rounded-xl p-6 mb-8">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> The seller received 85% of your purchase. We took 15% as our platform fee 
              to maintain and improve the marketplace.
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => router.push('/products')}
              className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg transition-all"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => router.push('/')}
              className="w-full px-6 py-3 rounded-full bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
