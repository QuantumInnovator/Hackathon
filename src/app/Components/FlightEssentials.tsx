import React from 'react';
import Image from 'next/image';

function FlightEssentials() {
  return (
    <div>
      <div className="bg-white">
        <h2 className="text-2xl font-bold text-start mx-auto p-4">The Essentials</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {/* Men's Essentials */}
          <div className="bg-gray-100 rounded-lg shadow-md relative">
            <div className="relative w-full h-72 sm:h-80 lg:h-96">
              <Image
                src="/Fr1.png" // Path to the image
                alt="Men's Essentials" // Provide descriptive alt text
                layout="fill" // Makes the image responsive
                objectFit="cover" // Ensures the image covers the container
                className="rounded-t-lg" // Adds rounded corners
                priority // Preloads the image for performance
              />
            </div>
            <button
              className="absolute bottom-4 right-4 bg-white text-black text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              Men's
            </button>
          </div>

          {/* Women's Essentials */}
          <div className="bg-gray-100 rounded-lg shadow-md relative">
            <div className="relative w-full h-72 sm:h-80 lg:h-96">
              <Image
                src="/Fr2.png"
                alt="Women's Essentials"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                priority
              />
            </div>
            <button
              className="absolute bottom-4 right-4 bg-white text-black text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              Women's
            </button>
          </div>

          {/* Kids' Essentials */}
          <div className="bg-gray-100 rounded-lg shadow-md relative">
            <div className="relative w-full h-72 sm:h-80 lg:h-96">
              <Image
                src="/Fr3.png"
                alt="Kids' Essentials"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                priority
              />
            </div>
            <button
              className="absolute bottom-4 right-4 bg-white text-black text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              Kids'
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightEssentials;