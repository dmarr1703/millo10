import { Heart, Users, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Artisan Market</h1>
          <p className="text-xl text-purple-100">
            Connecting talented artisans with customers who appreciate quality handcrafted products
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe in empowering independent creators and artisans to build successful businesses. 
              Our platform provides a simple, affordable way to reach customers while keeping most of the profits 
              where they belong - with the creators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support Small Business</h3>
              <p className="text-gray-600">
                Every purchase directly supports independent artisans and small business owners pursuing their passion.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build Community</h3>
              <p className="text-gray-600">
                We're creating a community of makers and buyers who value quality, craftsmanship, and authenticity.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We curate unique, high-quality products that you won't find in traditional retail stores.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fair & Transparent</h3>
              <p className="text-gray-600">
                Simple pricing with just $25/month and 15% commission. No hidden fees or surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">By The Numbers</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-2">$25</div>
              <div className="text-gray-600">Monthly subscription fee</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-pink-600 mb-2">15%</div>
              <div className="text-gray-600">Commission per sale</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">You keep from each sale</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-xl text-purple-100 mb-8">
            Whether you're looking to buy unique products or start selling, we'd love to have you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="px-8 py-4 rounded-full bg-white text-purple-600 font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Products
            </a>
            <a
              href="/become-seller"
              className="px-8 py-4 rounded-full bg-purple-800 text-white font-semibold hover:bg-purple-900 transition-colors"
            >
              Become a Seller
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
