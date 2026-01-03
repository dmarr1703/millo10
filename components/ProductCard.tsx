'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add to cart logic - store in localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item: any) => item.productId === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        productId: product.id,
        product: product,
        quantity: 1,
      });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {product.stock < 10 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              Only {product.stock} left!
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="text-sm text-purple-600 font-medium mb-2">{product.category}</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</div>
              <div className="text-xs text-gray-500">by {product.sellerName}</div>
            </div>
            <button
              onClick={handleAddToCart}
              className="p-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
