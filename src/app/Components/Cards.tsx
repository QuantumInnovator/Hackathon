import React from 'react'
import Image from 'next/image'; // Import Next.js Image component

function Cards() {
  return (
    <div>
      <div className="bg-white h-16 flex items-center justify-between px-10">
        <h1 className="text-xl font-bold">Best of Air Max</h1>
        <div className="flex items-center">
          <button className="bg-gray-200 hover:bg-gray-300 text-sm font-semibold px-4 py-2 rounded-l-md">Shop</button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 15.75l4.154-4.154m0 0a1.125 1.125 0 011.592-1.592l-4.154-4.154a1.125 1.125 0 011.592-1.592l4.154-4.154a1.125 1.125 0 01-1.592-1.592l-4.154 4.154a1.125 1.125 0 01-1.592 0L12 12z" />
          </svg>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md">
            <Image 
              src="/S1.png" 
              alt="Nike Air Max Pulse (Women's)" 
              width={500}  // Set the width of the image
              height={400} // Set the height of the image
              className="w-full h-auto object-cover rounded-t-lg" 
              layout="intrinsic" // Ensures the image maintains its aspect ratio
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Nike Air Max Pulse</h3>
              <p className="text-gray-600">Women's Shoes</p>
              <p className="text-lg font-bold">₹ 13,995</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md">
            <Image 
              src="/S2.png" 
              alt="Nike Air Max Pulse (Men's)" 
              width={500}  
              height={400} 
              className="w-full h-auto object-cover rounded-t-lg" 
              layout="intrinsic" 
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Nike Air Max Pulse</h3>
              <p className="text-gray-600">Men's Shoes</p>
              <p className="text-lg font-bold">₹ 13,995</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md">
            <Image 
              src="/S3.png" 
              alt="Nike Air Max 97 SE (Men's)" 
              width={500}  
              height={400} 
              className="w-full h-auto object-cover rounded-t-lg" 
              layout="intrinsic" 
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Nike Air Max 97 SE</h3>
              <p className="text-gray-600">Men's Shoes</p>
              <p className="text-lg font-bold">₹ 16,995</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards;