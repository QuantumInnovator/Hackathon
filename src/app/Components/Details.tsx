import React from 'react';

function Details() {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900 p-4 mt-10 flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900 dark:text-white">Icons</h3> {/* Added dark mode text color */}
            <ul className="space-y-4">
              <li className="mb-4 text-gray-700 dark:text-gray-300">Air Force 1</li> {/* Added dark mode text color */}
              <li className="text-gray-700 dark:text-gray-300">Huarache</li>
              <li className="text-gray-700 dark:text-gray-300">Air Max 90</li>
              <li className="text-gray-700 dark:text-gray-300">Air Max 95</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900 dark:text-white">Shoes</h3>
            <ul className="space-y-4">
              <li className="mb-4 text-gray-700 dark:text-gray-300">All Shoes</li>
              <li className="text-gray-700 dark:text-gray-300">Custom Shoes</li>
              <li className="text-gray-700 dark:text-gray-300">Jordan Shoes</li>
              <li className="text-gray-700 dark:text-gray-300">Running Shoes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900 dark:text-white">Clothing</h3>
            <ul className="space-y-4">
              <li className="mb-4 text-gray-700 dark:text-gray-300">All Clothing</li>
              <li className="text-gray-700 dark:text-gray-300">Modest Wear</li>
              <li className="text-gray-700 dark:text-gray-300">Hoodies & Pullovers</li>
              <li className="text-gray-700 dark:text-gray-300">Shirts & Tops</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900 dark:text-white">Kids'</h3>
            <ul className="space-y-4">
              <li className="mb-4 text-gray-700 dark:text-gray-300">Infant & Toddler Shoes</li>
              <li className="text-gray-700 dark:text-gray-300">Kids' Shoes</li>
              <li className="text-gray-700 dark:text-gray-300">Kids' Jordan Shoes</li>
              <li className="text-gray-700 dark:text-gray-300">Kids' Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
