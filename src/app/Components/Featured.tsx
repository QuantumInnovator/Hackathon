import React from 'react'
import Image from 'next/image'; // Import the Image component from Next.js

function Featured() {
  return (
    <div>
      <div className="bg-white h-16 flex items-center justify-between px-10">
        <h1 className="text-xl font-bold">Featured</h1>
      </div>

      {/* Image Section */}
      <div className="flex justify-center py-8">
        <Image 
          src="/M.png" 
          alt="Featured Product" 
          width={1200}  // Set a width for the image
          height={800}  // Set a height for the image
          className="w-full sm:w-2/3 md:w-1/2 lg:w-4/5 xl:w-5/6 2xl:w-5/6" 
          layout="intrinsic" // Ensures the image keeps its aspect ratio and resizes responsively
        />
      </div>
    </div>
  )
}

export default Featured;

