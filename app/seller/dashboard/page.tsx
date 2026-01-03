'use client';

import { useState, useEffect } from 'react';
import { Package, DollarSign, TrendingUp, ShoppingBag } from 'lucide-react';

export default function SellerDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 6,
    totalSales: 142,
    totalRevenue: 4256.85,
    platformFees: 638.53,
    netEarnings: 3618.32,
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Seller Dashboard</h1>
          <p className="text-gray-600">Manage your products and track your sales</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Package className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.totalProducts}</div>
            <div className="text-sm text-gray-600">Total Products</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <ShoppingBag className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.totalSales}</div>
            <div className="text-sm text-gray-600">Total Sales</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              ${stats.totalRevenue.toFixed(2)}
            </div>
            <div className="text-sm text-gray-600">Total Revenue</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-pink-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-pink-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              ${stats.netEarnings.toFixed(2)}
            </div>
            <div className="text-sm text-gray-600">Net Earnings (85%)</div>
          </div>
        </div>

        {/* Commission Breakdown */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Commission Breakdown</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b">
              <span className="text-gray-600">Total Sales Revenue</span>
              <span className="text-xl font-bold text-gray-900">${stats.totalRevenue.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b">
              <span className="text-gray-600">Platform Fee (15%)</span>
              <span className="text-xl font-bold text-red-600">-${stats.platformFees.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b">
              <span className="text-gray-600">Monthly Subscription</span>
              <span className="text-xl font-bold text-red-600">-$25.00</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-lg font-semibold text-gray-900">Your Earnings</span>
              <span className="text-3xl font-bold text-green-600">${(stats.netEarnings - 25).toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Subscription Status */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-sm p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Subscription Status</h3>
              <p className="text-purple-100 mb-4">Your seller account is active</p>
              <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="font-semibold">Active - $25 CAD/month</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold mb-2">$25</div>
              <div className="text-purple-100">per month</div>
            </div>
          </div>
        </div>

        {/* How Commission Works */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">How Our Commission Works</h3>
          <div className="space-y-3 text-gray-700">
            <p>• You pay <strong>$25 CAD per month</strong> to maintain your seller account</p>
            <p>• We take <strong>15% commission</strong> on each sale</p>
            <p>• You keep <strong>85% of every sale</strong></p>
            <p>• Example: If you sell a product for $100, you receive $85 and we take $15</p>
            <p>• All payments are processed securely through Stripe</p>
            <p>• Earnings are deposited directly to your account</p>
          </div>
        </div>
      </div>
    </div>
  );
}
