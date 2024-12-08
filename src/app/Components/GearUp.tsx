import React from 'react';
import Image from 'next/image';

function GearUp() {
  return (
    <div>
      <div className="bg-white">
        <h2 className="text-2xl font-bold p-4">Gear Up</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {/* Product 1 */}
          <div className="bg-gray-100 rounded-lg shadow-md">
            <div className="relative w-full h-80">
              <Image
                src="/1.png"
                alt="Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                priority // Ensures the image is preloaded
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Nike Dri-FIT ADV TechKnit Ultra</h3>
              <p className="text-gray-600">Men's Short-Sleeve Running Top</p>
              <p className="text-lg font-bold">₹ 3,895</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-gray-100 rounded-lg shadow-md">
            <div className="relative w-full h-80">
              <Image
                src="/2.png"
                alt="Nike Dri-FIT Challenger Men's 18cm (approx.) 2-in-1 Versatile Shorts"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Nike Dri-FIT Challenger</h3>
              <p className="text-gray-600">Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
              <p className="text-lg font-bold">₹ 2,495</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-gray-100 rounded-lg shadow-md">
            <div className="relative w-full h-80">
              <Image
                src="/3.png"
                alt="Nike Dri-FIT ADV Run Division Women's Long-Sleeve Running Top"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Nike Dri-FIT ADV Run Division</h3>
              <p className="text-gray-600">Women's Long-Sleeve Running Top</p>
              <p className="text-lg font-bold">₹ 5,295</p>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-gray-100 rounded-lg shadow-md">
            <div className="relative w-full h-80">
              <Image
                src="/4.png"
                alt="Nike Fast Women's Mid-Rise 7/8 Running Leggings with Pockets"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Nike Fast</h3>
              <p className="text-gray-600">Women's Mid-Rise 7/8 Running Leggings with Pockets</p>
              <p className="text-lg font-bold">₹ 3,795</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GearUp;
