// Product inside the cart
interface CartProduct {
  count: number;
  _id: string;
  product: string; // product id
  price: number;
}

// Cart details
 interface CartData {
  _id: string;
  cartOwner: string;
  products: CartProduct[];
  createdAt: string;
  updatedAt: string;
  totalCartPrice: number;
}

// Whole API response
export interface AddToCartResponse {
  status: string;
  message: string;
  numOfCartItems: number;
  cartId: string;
  data: CartData;
}
