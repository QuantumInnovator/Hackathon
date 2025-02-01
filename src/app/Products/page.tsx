'use client';
import React, { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';
import Image from 'next/image';
import Link from 'next/link';

const sanity = sanityClient({
    projectId: 'z38cmub5',
    dataset: 'production',
    apiVersion: '2021-08-31',
    useCdn: true,
});

interface Product {
    _id: string; // Unique identifier
    productName: string; // Name of the product
    category: string; // Category of the product
    price: number; // Price of the product
    inventory: number; // Number of items in stock
    colors: string[]; // Available colors
    status: string; // Status (e.g., "Just In")
    description: string; // Detailed description
    image: string; // Resolved image URL from Sanity
    discountPercentage?: number; // Discount percentage (optional)
}

const ProductCards: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const query = `
            *[_type == "product"] {
                _id,
                productName,
                category,
                price,
                inventory,
                colors,
                status,
                description,
                "image": image.asset->url, // Resolve image URL from Sanity
                discountPercentage
            }`;
            const data = await sanity.fetch<Product[]>(query);
            setProducts(data);
        } catch (error) {
            console.error('Error Fetching Products:', error);
        }
    };

    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.productName} has been added to your cart`);
    };

    const truncateDescription = (description: string) =>
        description.length > 100 ? `${description.substring(0, 100)}...` : description;

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-center text-slate-800 mt-4 mb-4">Products From API Data</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                    >
                        <Image
                            src={product.image}
                            alt={product.productName}
                            width={300}
                            height={300}
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">{product.productName}</h2>
                            <p className="text-slate-800 mt-2 text-sm">
                                {truncateDescription(product.description)}
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <p className="text-slate-600 font-bold">
                                        ${product.price.toFixed(2)}
                                    </p>
                                    {product.discountPercentage && product.discountPercentage > 0 && (
                                        <p className="text-sm text-green-600">
                                            {product.discountPercentage}% OFF
                                        </p>
                                    )}
                                </div>

                                <Link href={`/Products/${product._id}`} className='text-blue-500 hover:text-blue-700 hover:text-lg transition-all duration-300'> View detail </Link>
                            </div>
                            {/* Add to Cart button */}
                            <button
                                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* Cart Summary */}
            <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
                {cart.length > 0 ? (
                    <ul className="space-y-4">
                        {cart.map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-white shadow p-4 rounded-md"
                            >
                                <div>
                                    <p className="font-medium text-slate-900">{item.productName}</p>
                                    <p className="text-sm text-blue-800">
                                        ${item.price.toFixed(2)}
                                    </p>
                                </div>
                                <Image
                                    src={item.image}
                                    alt={item.productName}
                                    width={50}
                                    height={50}
                                    className="rounded-md"
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-black">
                        Your Cart is Empty. Please Add Products.
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProductCards;
