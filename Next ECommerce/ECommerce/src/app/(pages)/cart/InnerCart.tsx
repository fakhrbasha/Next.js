'use client';
import { Button } from '@/components';
import CartProduct from '@/components/products/CartProduct';
import { formatPrice } from '@/helpers/currency';
import { GetUserCartResponse } from '@/interfaces';
import { apiServices } from '@/services/api';
import { Separator } from '@radix-ui/react-separator';
import { Trash2 } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
interface cartDataProp {
  cartData: GetUserCartResponse;
}

export default function InnerCart({ cartData }: cartDataProp) {
  const [innerCartData, setInnerCartData] =
    useState<GetUserCartResponse>(cartData);

  async function handleRemoveCartProduct(
    productId: string,
    setIsRemovingProduct: (value: boolean) => void
  ) {
    setIsRemovingProduct(true);
    const response = await apiServices.removeSpecificItem(productId);
    console.log(response);

    const newProductCart = await apiServices.getUserCart();
    setInnerCartData(newProductCart);

    toast.success('Product removed from cart', { position: 'bottom-right' });
    setIsRemovingProduct(false);
  }
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
        {innerCartData.numOfCartItems > 0 && (
          <p className="text-muted-foreground">
            {innerCartData.numOfCartItems} item
            {innerCartData.numOfCartItems > 1 ? 's' : ''} in your cart
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {innerCartData.data.products.map((item) => (
              <CartProduct
                key={item._id}
                handleRemoveCartProduct={handleRemoveCartProduct}
                item={item}
              />
            ))}
          </div>

          {/* Clear Cart */}
          <div className="mt-6">
            <Button variant="outline">
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Cart
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 sticky top-20">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal ({innerCartData.numOfCartItems} items)</span>
                <span>{formatPrice(innerCartData.data.totalCartPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex justify-between font-semibold text-lg mb-6">
              <span>Total</span>
              <span>{formatPrice(innerCartData.data.totalCartPrice)}</span>
            </div>

            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>

            <Button variant="outline" className="w-full mt-2" asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
