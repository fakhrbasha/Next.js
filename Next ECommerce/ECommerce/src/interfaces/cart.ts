import { Brand } from "./brand";
import { Category, Subcategory } from "./category";

// Product inside the cart
interface CartProduct<T> {
  count: number;
  _id: string;
  product: T; // product id
  price: number;
}

// Cart details
interface CartData<T> {
  _id: string;
  cartOwner: string;
  products: CartProduct<T>[];
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
  data: CartData<string>;
}
export interface GetUserCartResponse {
  status: string;
  message: string;
  numOfCartItems: number;
  cartId: string;
  data: CartData<Product>;
}

export interface Product {
  subcategory: Subcategory[];
  _id: string;
  title: string;
  quantity: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  id: string;
}