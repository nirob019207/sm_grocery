import React, { useState } from 'react';
import { useProductsQuery } from '../../store/api/products/productsApiSlice';
import { useCategoryQuery } from '../../store/api/category/categoryApiSlice';
import CategoryFilter from './CategoryFilter';
import ProductCard from './ProductCard';

export const Products = () => {
  const { data: productData, isLoading, isError } = useProductsQuery();
  const { data: categoryData, isLoading: categoryLoading, isError: categoryError } = useCategoryQuery();

  const products = productData?.data || [];
  const categories = categoryData?.data || [];

  const [activeCategory, setActiveCategory] = useState(0);

  const filteredProducts = activeCategory === 0
    ? products
    : products.filter((product) => product.categoryId === activeCategory);

  if (isLoading || categoryLoading) {
    return <div className="text-center py-10">Loading products and categories...</div>;
  }

  if (isError || categoryError) {
    return <div className="text-center py-10 text-red-500">Failed to load data. Please try again.</div>;
  }

  return (
    <div className="container py-5" id="shop">
      <div className="flex justify-center items-center text-center">
        <div>
          <h3 className="text-green-title bg-green-50 py-1 px-2 rounded-lg inline-block text-lg font-primary text-[20px]">
            Our Products
          </h3>
          <p className="text-[32px] font-primary font-bold mt-3">Our Fresh Products</p>
          <p className="text-md mt-4 lg:max-w-[420px] max-w-[350px] mx-auto text-center">
            We pride ourselves on offering a wide variety of fresh and flavorful products.
          </p>

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center items-center py-10">
        <button className="bg-orange-400 text-white hover:scale-105 shadow-md px-20 py-2 rounded-lg">
          See Products
        </button>
      </div>
    </div>
  );
};
