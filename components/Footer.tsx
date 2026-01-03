import Link from 'next/link';
import { Store, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Store className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white">Artisan Market</span>
            </div>
            <p className="text-sm">
              Connecting talented artisans with customers who appreciate quality handcrafted products.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="hover:text-purple-400 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=Home" className="hover:text-purple-400 transition-colors">
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link href="/products?category=Accessories" className="hover:text-purple-400 transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/products?category=Art" className="hover:text-purple-400 transition-colors">
                  Art & Crafts
                </Link>
              </li>
            </ul>
          </div>

          {/* Sellers */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Sellers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/become-seller" className="hover:text-purple-400 transition-colors">
                  Become a Seller
                </Link>
              </li>
              <li>
                <Link href="/seller/dashboard" className="hover:text-purple-400 transition-colors">
                  Seller Dashboard
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-purple-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/seller-guide" className="hover:text-purple-400 transition-colors">
                  Seller Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2024 Artisan Market. Made with <Heart className="inline h-4 w-4 text-red-500" /> by creators, for creators.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="mailto:support@artisanmarket.com" className="hover:text-purple-400 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
