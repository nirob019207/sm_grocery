import React from "react";

export const ProductImageGallery = ({ images, productName }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={images?.[0] || "placeholder-image-url"}
        alt={productName}
        className="w-full h-auto max-w-[400px] object-cover rounded-md shadow-md"
      />
      <div className="flex gap-4 mt-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${productName} thumbnail ${index}`}
            className="w-20 h-20 object-cover rounded-md cursor-pointer border hover:border-orange-500 transition"
          />
        ))}
      </div>
    </div>
  );
};
