import React, { useState } from "react";

export const ProductInfo = ({ productName, stock, price, description }) => {
  const [quantity, setQuantity] = useState(1);

  // Function to handle increment
  const incrementQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  // Function to handle decrement
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-green-800">{productName}</h1>
      <p className="text-gray-500 text-sm mt-2">Stock: {stock}</p>
      <p className="text-xl font-semibold text-orange-600 mt-4">${price}</p>
      <p className="mt-4 text-gray-600">{description}</p>

      {/* Quantity Selector */}
      <div className="flex items-center mt-6">
        <button
          onClick={decrementQuantity}
          className={`px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 ${
            quantity === 1 ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={quantity === 1}
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          readOnly
          className="w-12 text-center mx-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={incrementQuantity}
          className={`px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 ${
            quantity === stock ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={quantity === stock}
        >
          +
        </button>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
          Add to Cart
        </button>
        <button className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition">
          Save as Favorite
        </button>
      </div>
    </div>
  );
};
