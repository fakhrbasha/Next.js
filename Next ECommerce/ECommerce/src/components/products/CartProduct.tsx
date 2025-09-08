'use client';

import { formatPrice } from '@/helpers/currency';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../ui';
import { Loader2, Minus, Plus, Trash2 } from 'lucide-react';
import { CartProduct as CartProductI, InnerProduct } from '@/interfaces';
import { apiServices } from '@/services/api';
import toast from 'react-hot-toast';

interface CartProductProps {
  item: CartProductI<InnerProduct>;
}
export default function CartProduct({ item }: CartProductProps) {
  const [isRemovingProduct, setIsRemovingProduct] = useState(false);
  async function handleRemoveCartProduct() {
    setIsRemovingProduct(true);
    const response = await apiServices.removeSpecificItem(item.product._id);
    console.log(response);
    toast.success('Product removed from cart', { position: 'bottom-right' });
    setIsRemovingProduct(false);
  }
  return (
    <div key={item._id} className="flex gap-4 p-4 border rounded-lg">
      <div className="relative w-20 h-20 flex-shrink-0">
        <Image
          src={item.product.imageCover}
          alt={item.product.title}
          fill
          className="object-cover rounded-md"
          sizes="80px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold line-clamp-2">
          <Link
            href={`/products/${item.product.id}`}
            className="hover:text-primary transition-colors"
          >
            {item.product.title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground">
          {item.product.brand?.name}
        </p>
        <p className="font-semibold text-primary mt-2">
          {formatPrice(item.price)}
        </p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <Button onClick={handleRemoveCartProduct} variant="ghost" size="sm">
          {isRemovingProduct ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Trash2 className="h-4 w-4" />
          )}
        </Button>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Minus className="h-4 w-4" />
          </Button>

          <span className="w-8 text-center">{item.count}</span>

          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
