import React from 'react';

function Details() {
  return (
    <div>
      <div className="bg-white p-4 mt-10 flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-semibold mt-4">Icons</h3> {/* Added margin-top for spacing */}
            <ul className="space-y-4">
              <li className="mb-4">Air Force 1</li> {/* Added margin-bottom to the first list item */}
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-4">Shoes</h3>
            <ul className="space-y-4">
              <li className="mb-4">All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-4">Clothing</h3>
            <ul className="space-y-4">
              <li className="mb-4">All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies & Pullovers</li>
              <li>Shirts & Tops</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-4">Kids'</h3>
            <ul className="space-y-4">
              <li className="mb-4">Infant & Toddler Shoes</li>
              <li>Kids' Shoes</li>
              <li>Kids' Jordan Shoes</li>
              <li>Kids' Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
