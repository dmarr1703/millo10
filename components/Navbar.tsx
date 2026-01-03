'use client';

import Link from 'next/link';
import { ShoppingCart, Store, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">Artisan Market</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-purple-600 transition-colors">
              Products
            </Link>
            <Link href="/become-seller" className="text-gray-700 hover:text-purple-600 transition-colors">
              Sell
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link
              href="/cart"
              className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </Link>
            <Link
              href="/seller/dashboard"
              className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              Seller Dashboard
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/products"
              className="block text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/become-seller"
              className="block text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sell
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/cart"
              className="block text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
            </Link>
            <Link
              href="/seller/dashboard"
              className="block px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Seller Dashboard
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
