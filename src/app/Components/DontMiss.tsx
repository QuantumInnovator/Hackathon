import React from 'react';
import Image from 'next/image';

function DontMiss() {
  return (
    <div>
      <div className="text-start mx-auto p-4">
    
        <h2 className="text-2xl font-bold">Don't Miss</h2>
      </div>
      
      <div className="flex justify-center items-center">
        <Image
          src="/M2.png" // Path to your image
          alt="Promotional Image" // Provide a meaningful alt text
          width={1200} // Set a base width for the image
          height={600} // Set a base height for the image
          className="rounded-lg" // Optional: Add styles like rounded corners
          sizes="(max-width: 768px) 100vw, 
                 (max-width: 1200px) 50vw, 
                 33vw" // Specify responsive sizes
          priority // Preloads the image for better performance
        />
      </div>
    </div>
  );
}

export default DontMiss;
