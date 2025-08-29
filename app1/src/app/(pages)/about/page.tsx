import { get } from 'http';
import Image from 'next/image';
import React from 'react';

export default async function About() {
  async function getProduct() {
    const response = await fetch(
      'https://ecommerce.routemisr.com/api/v1/products'
    ).then((res) => res.json());

    // console.log(response.data);
    return response.data;
  }
  const product = await getProduct();
  return (
    <div>
      <h1>About</h1>
      <div className="gird gap-4">
        {product.map((product: any) => {
          return (
            <div key={product.id} className="p-3 shadow-2xl rounded-2xl">
              <h1>{product.title}</h1>
              <Image
                height={1000}
                width={1000}
                src={product.imageCover}
                className="w-full h-100 object-cover "
                alt="image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
