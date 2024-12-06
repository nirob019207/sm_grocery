import React, { useState } from "react";
import { useProductsQuery } from "../../../store/api/products/productsApiSlice";
import { Link } from "react-router-dom";

export const Products = () => {
  const { data, error, isLoading } =useProductsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data?.data?.slice(indexOfFirstProduct, indexOfLastProduct);
  

  const totalPages = Math.ceil(data?.data?.length / productsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
    <div className="flex items-center justify-between border-b pb-4">
  <h2 className="text-xl font-bold text-gray-800">Product List</h2>
  <div>
    <Link 
      to="/dashboard/createProducts" 
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
    >
      Add Products
    </Link>
  </div>
</div>

      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
          <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Price</th>
            <th className="px-4 py-2 border">Stock</th>
            {/* <th className="px-4 py-2 border">Images</th> */}
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts?.map((product) => (
          <tr key={product.id}>
          <td className="px-4 py-2 border">{product.id}</td>
          <td className="px-4 py-2 border">{product.productName}</td>
          <td className="px-4 py-2 border">${product.price.toFixed(2)}</td>
          <td className="px-4 py-2 border">{product.stock}</td>
         
          <td className="px-4 py-2 border">
            <button
              onClick={() => handleEdit(product.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(product.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </td>
        </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`px-4 py-2 rounded ${pageNumber === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};
