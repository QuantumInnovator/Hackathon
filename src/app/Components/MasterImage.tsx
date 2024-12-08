import React from 'react'
import Image from 'next/image'

function MasterImage() {
  return (
    <div className="w-full mx-auto px-4 mt-10"> {/* Adds margin on sides and padding for responsiveness */}
        <Image 
          src="/image1.png" 
          alt="Description of image" 
          width={1200}  // Provide the original width of the image
          height={800}  // Provide the original height of the image
          layout="responsive" // Makes the image responsive
        />
    </div>
  )
}

export default MasterImage
