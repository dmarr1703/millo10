'use client';

import { useState } from 'react';
import { Store, DollarSign, TrendingUp, Shield, CheckCircle } from 'lucide-react';

export default function BecomeSellerPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Failed to start subscription');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Store className="h-16 w-16 text-purple-600 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Start Selling Today
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our marketplace and reach thousands of customers. Simple pricing, powerful platform.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Seller Subscription</h2>
              <div className="text-6xl font-bold mb-2">$25</div>
              <p className="text-xl text-purple-100">CAD per month</p>
            </div>
            
            <div className="p-12">
              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Low Monthly Fee</h3>
                    <p className="text-gray-600">Just $25 CAD per month to list unlimited products</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Only 15% Commission</h3>
                    <p className="text-gray-600">We take just 15% per sale - you keep 85%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Secure Payments</h3>
                    <p className="text-gray-600">Fast, secure payments via Stripe</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Easy Product Management</h3>
                    <p className="text-gray-600">Simple dashboard to manage your products and sales</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Reach More Customers</h3>
                    <p className="text-gray-600">Access to our growing customer base</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? 'Processing...' : 'Start Subscription'}
                </button>
              </form>

              <p className="text-sm text-gray-500 text-center mt-6">
                Cancel anytime. No long-term commitment required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Sell With Us?</h2>
            <p className="text-gray-600">Join hundreds of successful sellers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
                <DollarSign className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Keep More Money</h3>
              <p className="text-gray-600">
                With only 15% commission, you keep 85% of every sale. Lower fees mean more profit for you.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 rounded-full mb-6">
                <TrendingUp className="h-10 w-10 text-pink-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Grow Your Business</h3>
              <p className="text-gray-600">
                Access analytics and insights to understand your customers and grow your sales.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">
                Built on Stripe for secure payments and reliable transaction processing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
