'use client';
import { Button } from '@/components/ui/button';
import {
  decrement,
  increment,
  incrementByNum,
} from '@/redux/slices/counterSlice';
import { getAllProduct } from '@/redux/slices/productSlice';
import { AppDispatch, RootState } from '@/redux/store';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  // const { count } = useSelector((state: RootState) => state.counter);
  // const { products } = useSelector((state: RootState) => state.product);
  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(getAllProduct());
  // }, []);
  // console.log(products);
  return (
    <div className="container mx-auto px-4 py-40">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
          Welcome to Fakhr
        </h1>
        {/* <div className="flex gap-4 justify-center">
          <Button
            onClick={() => {
              dispatch(increment());
            }}
          >
            {' '}
            +{' '}
          </Button>
          <Button
            onClick={() => {
              dispatch(incrementByNum(5));
            }}
          >
            {' '}
            +++{' '}
          </Button>
          <Button
            onClick={() => {
              dispatch(decrement());
            }}
          >
            {' '}
            -{' '}
          </Button>
        </div> */}

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the latest technology, fashion, and lifestyle products.
          Quality guaranteed with fast shipping and excellent customer service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            <Link href={'/products'}>Shop Now </Link>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8">
            <Link href={'/categories'}>Browse Categories</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
