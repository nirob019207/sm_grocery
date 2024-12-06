import React from "react";
import { useCategoryQuery } from "../../../store/api/category/categoryApiSlice";

export const Category = () => {
  const { data, error, isLoading } = useCategoryQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2 className="text-xl py-4 font-bold">Category List</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((category) => (
            <tr key={category.id}>
              <td className="px-4 py-2 border">{category.id}</td>
              <td className="px-4 py-2 border">{category.categoryName}</td>
              <td className="px-4 py-2 border">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


