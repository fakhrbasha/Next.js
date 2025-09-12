'use client';
import { Brand } from '@/interfaces';
import { apiServices } from '@/services/api';
import React, { useEffect, useState } from 'react';

export default function page() {
  const [brands, setBrands] = useState<Brand[]>([]);
  async function getBrands() {
    const response = await apiServices.getAllBrands();
    // console.log(response);
    setBrands(response.data);
  }
  useEffect(() => {
    getBrands();
  }, []);

  return <div>brands</div>;
}
