import { Product, Seller, Transaction } from '@/types';

// Mock database - Replace with real database in production
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Handmade Ceramic Mug',
    description: 'Beautiful handcrafted ceramic mug, perfect for your morning coffee',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500',
    sellerId: 'seller1',
    sellerName: 'Artisan Crafts',
    category: 'Home & Kitchen',
    stock: 15,
    createdAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    name: 'Organic Leather Wallet',
    description: 'Premium leather wallet with RFID protection',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500',
    sellerId: 'seller2',
    sellerName: 'Leather Works',
    category: 'Accessories',
    stock: 8,
    createdAt: new Date('2024-01-05'),
  },
  {
    id: '3',
    name: 'Scented Soy Candle',
    description: 'Hand-poured soy candle with lavender scent',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1602874801006-2abc9c5d0f53?w=500',
    sellerId: 'seller1',
    sellerName: 'Artisan Crafts',
    category: 'Home & Garden',
    stock: 25,
    createdAt: new Date('2024-01-10'),
  },
  {
    id: '4',
    name: 'Vintage Style Notebook',
    description: 'Handbound notebook with recycled paper',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500',
    sellerId: 'seller3',
    sellerName: 'Paper & Co',
    category: 'Stationery',
    stock: 30,
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '5',
    name: 'Artisan Coffee Beans',
    description: 'Small-batch roasted specialty coffee beans',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
    sellerId: 'seller4',
    sellerName: 'Roast Masters',
    category: 'Food & Beverage',
    stock: 20,
    createdAt: new Date('2024-01-20'),
  },
  {
    id: '6',
    name: 'Handwoven Basket',
    description: 'Natural fiber basket, perfect for storage',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500',
    sellerId: 'seller2',
    sellerName: 'Leather Works',
    category: 'Home & Garden',
    stock: 12,
    createdAt: new Date('2024-01-25'),
  },
];

export const mockSellers: Seller[] = [
  {
    id: 'seller1',
    name: 'Artisan Crafts',
    email: 'artisan@example.com',
    subscriptionStatus: 'active',
    monthlyFee: 25,
    joinedAt: new Date('2024-01-01'),
  },
  {
    id: 'seller2',
    name: 'Leather Works',
    email: 'leather@example.com',
    subscriptionStatus: 'active',
    monthlyFee: 25,
    joinedAt: new Date('2024-01-05'),
  },
  {
    id: 'seller3',
    name: 'Paper & Co',
    email: 'paper@example.com',
    subscriptionStatus: 'active',
    monthlyFee: 25,
    joinedAt: new Date('2024-01-10'),
  },
  {
    id: 'seller4',
    name: 'Roast Masters',
    email: 'roast@example.com',
    subscriptionStatus: 'active',
    monthlyFee: 25,
    joinedAt: new Date('2024-01-15'),
  },
];

export const mockTransactions: Transaction[] = [];

// Database functions
export async function getProducts(): Promise<Product[]> {
  return mockProducts;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return mockProducts.find(p => p.id === id);
}

export async function getSellers(): Promise<Seller[]> {
  return mockSellers;
}

export async function getSellerById(id: string): Promise<Seller | undefined> {
  return mockSellers.find(s => s.id === id);
}

export async function createTransaction(transaction: Omit<Transaction, 'id'>): Promise<Transaction> {
  const newTransaction: Transaction = {
    ...transaction,
    id: `txn_${Date.now()}`,
  };
  mockTransactions.push(newTransaction);
  return newTransaction;
}

export async function getTransactionsBySeller(sellerId: string): Promise<Transaction[]> {
  return mockTransactions.filter(t => t.sellerId === sellerId);
}
