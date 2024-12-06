import React, { useState } from "react";
import { useCategoryQuery } from "../../../store/api/category/categoryApiSlice";
import { useAddProductsMutation } from "../../../store/api/products/productsApiSlice";

export const ProductsCreate = () => {
  const { data: categories, error, isLoading } = useCategoryQuery();
  const [addProduct, { isLoading: isAdding, error: addError }] = useAddProductsMutation();

  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
    images: "", // changed from "images" to "image"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] }); // Only take the first file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await addProduct(formData).unwrap(); // Corrected from 'fromData' to 'formData'
      console.log("Product added successfully:", response);
  
      // Reset form
      setFormData({
        productName: "",
        description: "",
        price: "",
        stock: "",
        categoryId: "",
        images: "", // reset image field
      });
    } catch (err) {
      console.error("Failed to add product:", err);
    }
  };
  

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Create Product</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div>
          <label htmlFor="productName" className="block font-medium mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product name"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product description"
          ></textarea>
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block font-medium mb-2">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter price"
          />
        </div>

        {/* Stock */}
        <div>
          <label htmlFor="stock" className="block font-medium mb-2">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter stock quantity"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="categoryId" className="block font-medium mb-2">
            Category
          </label>
          {isLoading && <div>Loading categories...</div>}
          {error && <div className="text-red-500">Error loading categories.</div>}
          {categories && (
            <select
              id="categoryId"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select Category --</option>
              {categories.data.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Image */}
        <div>
          <label htmlFor="image" className="block font-medium mb-2">
            Product Image
          </label>
          <input
            type="file"
            id="image"
            name="images"
            onChange={handleFileChange}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          disabled={isAdding}
        >
          {isAdding ? "Adding..." : "Create Product"}
        </button>
      </form>

      {/* Error Message */}
      {addError && <div className="text-red-500 mt-4">Error: {addError.data?.message || "Something went wrong."}</div>}
    </div>
  );
};
