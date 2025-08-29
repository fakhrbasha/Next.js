'use client';
import { useParams } from 'next/navigation';
import React from 'react';

export default function productDetails() {
  const params = useParams();
  return (
    <div>
      <h1>productDetails</h1>
      <h2 className="text-3xl">URL : {params.productId}</h2>
    </div>
  );
}
