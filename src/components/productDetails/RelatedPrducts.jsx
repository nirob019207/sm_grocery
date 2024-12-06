import React from 'react';
import { useProductsQuery } from '../../store/api/products/productsApiSlice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const RelatedProducts = ({ category }) => {
  // Fetch products using the useProductsQuery hook
  const { data: productData1, isLoading, isError } = useProductsQuery();

  const dispatch = useDispatch();
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));  // Dispatch the action when the button is clicked
  };

  // Filter products based on categoryId
  const filteredProducts = productData1?.data?.filter(product => product.categoryId === category);
  

  // Limit the filtered products to the first 3 products
  const limitedProducts = filteredProducts?.slice(0, 3);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="container mx-auto py-32 font-primary">
      <div className="text-center">
        <h3 className="text-green-title bg-green-50 py-1 px-2 rounded-lg inline-block text-lg font-primary text-[20px]">
          Our Products
        </h3>
        <p className="text-[32px] font-primary font-bold mt-3">
          Related Products
        </p>
        <p className="text-md mt-4 lg:max-w-[720px] max-w-[350px] mx-auto text-center">
          We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.
        </p>
      </div>

      {/* Related Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {limitedProducts?.map((product) => (
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 text-center" key={product.id}>
          <img
  src={product.images?.[0]} // Replace with the correct direct URL to the image
  alt="Product Name"
  className="w-full h-[208px] object-cover rounded-md mb-4"
/>

            <Link to={`/products/${product.id}`}>
              <h4 className="font-semibold text-lg mb-2 hover:text-orange-500 transition">
                {product.productName}
              </h4>
            </Link>
            <p className="text-xl font-semi-bold text-bold-800 mb-2">${product.price}</p>
            <button 
                          onClick={() => handleAddToCart(product)}  // Call this function on button click
                          className="bg-white w-full border-2 hover:text-white font-primary text-bold text-black px-6 py-2 text-sm rounded-md hover:bg-orange-500 shadow-sm transition duration-200 ease-in-out">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
