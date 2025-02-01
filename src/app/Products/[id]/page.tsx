'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getProductsById } from '../../../../sanityquerry';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface Ip {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string | number;
  status: string;
  description: string;
  image: string;
  discountPercentage: number;
}

const Page = () => {
  const params = useParams();
  const [data, setData] = useState<Ip | null>(null); // Change state type to Ip | null to handle no data cases
  const { id } = params;

  useEffect(() => {
    // Ensure `id` is a string before passing it to getProductsById
    const fetchProduct = async () => {
      if (typeof id === 'string') { // Type check for string
        const product = await getProductsById(id);
        setData(product);
      }
    };

    if (id) { // Only fetch if `id` is defined
      fetchProduct();
    }
  }, [id]); // Add `id` as a dependency to run when it changes

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center mb-6">Product Details</h1>
        {data ? (
          <div className="flex flex-col items-center md:flex-row gap-6">
            {/* Product Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={urlFor(data.image).url()}
                width={400}
                height={400}
                alt={data.productName}
                className="object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800">{data.productName}</h2>
              <p className="text-lg text-gray-600 mt-2">Category: {data.category}</p>
              <p className="text-xl text-green-600 font-semibold mt-2">${data.price}</p>
              <p className="text-md text-gray-500 mt-4">Inventory: {data.inventory}</p>
              <p className="text-sm text-gray-700 mt-4">{data.description}</p>
              <p className="text-sm text-gray-500 mt-2">Discount: {data.discountPercentage}%</p>
              <p className="text-sm text-gray-500 mt-2">Status: <span className="font-semibold">{data.status}</span></p>

              {/* Add to Cart Button */}
              <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-xl text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Page;
