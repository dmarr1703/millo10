export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  sellerId: string;
  sellerName: string;
  category: string;
  stock: number;
  createdAt: Date;
}

export interface Seller {
  id: string;
  name: string;
  email: string;
  subscriptionStatus: 'active' | 'inactive' | 'cancelled';
  subscriptionId?: string;
  stripeAccountId?: string;
  monthlyFee: number; // 25 CAD
  joinedAt: Date;
}

export interface Transaction {
  id: string;
  productId: string;
  sellerId: string;
  buyerEmail: string;
  amount: number;
  platformFee: number; // 15% of sale
  sellerPayout: number; // 85% of sale
  status: 'pending' | 'completed' | 'refunded';
  stripePaymentId: string;
  createdAt: Date;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
