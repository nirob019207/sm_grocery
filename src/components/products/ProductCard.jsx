import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 text-center">
      <img
        src={product.images?.[0] || 'placeholder-image-url'}
        alt={product.productName}
        className="w-full h-[208px] object-cover bg-slate-100  rounded-lg mb-4"
      />
      <Link to={`/products/${product.id}`}>
        <h4 className="font-semibold text-lg mb-2 hover:text-orange-500 transition">
          {product.productName}
        </h4>
      </Link>
      <p className="text-xl font-semi-bold text-bold-800 mb-2">${product.price}</p>
      <button className="bg-white w-full border-2 hover:text-white font-primary text-bold text-black px-6 py-2 text-sm rounded-md hover:bg-orange-500 shadow-sm transition duration-200 ease-in-out">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
