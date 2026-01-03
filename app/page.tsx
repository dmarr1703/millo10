import Link from 'next/link';
import { getProducts } from '@/lib/db';
import { ShoppingBag, Store, TrendingUp } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

export default async function Home() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover Unique
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Handcrafted Products
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Shop from talented artisans and creators. Every purchase supports independent sellers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Link>
              <Link
                href="/become-seller"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-purple-600 font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all"
              >
                <Store className="mr-2 h-5 w-5" />
                Become a Seller
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <ShoppingBag className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated Products</h3>
              <p className="text-gray-600">Handpicked items from talented creators</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                <Store className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support Small Business</h3>
              <p className="text-gray-600">Every purchase helps independent sellers</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Grow Your Business</h3>
              <p className="text-gray-600">Sell for just $25 CAD/month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600">Check out our most popular items</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Seller CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Selling?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join our marketplace for just $25 CAD/month. We only take 15% per sale.
          </p>
          <Link
            href="/become-seller"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-purple-600 font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all"
          >
            <Store className="mr-2 h-5 w-5" />
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
