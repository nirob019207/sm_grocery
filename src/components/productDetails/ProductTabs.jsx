import React from "react";

export const ProductTabs = ({ description }) => {
  return (
    <div className="mt-12">
      <ul className="flex border-b">
        <li className="mr-6">
          <button className="text-lg px-4 py-2 border-b-2 border-orange-500">
            Description
          </button>
        </li>
        {/* <li>
          <button className="text-lg px-4 py-2 hover:border-b-2 hover:border-orange-500">
            Reviews
          </button>
        </li> */}
      </ul>
      <div className="mt-6">
        <p className="text-gray-600">{description}</p>
        {/* <div className="mt-4">
          <h3 className="text-lg font-bold">Customer Reviews</h3>
          <p className="text-sm text-gray-500 mt-2">No reviews yet.</p>
        </div> */}
      </div>
    </div>
  );
};
