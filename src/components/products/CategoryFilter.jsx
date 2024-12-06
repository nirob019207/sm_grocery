import React from 'react';

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex gap-3 justify-center items-center flex-wrap font-primary my-[40px]">
      <button
        onClick={() => setActiveCategory(0)}
        className={`px-6 py-2 text-md font-medium shadow-sm border-2 transition duration-200 ease-in-out transform hover:scale-105 rounded-md ${
          activeCategory === 0 ? 'bg-green-600 text-white' : 'bg-white'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`px-6 py-2 text-md font-medium shadow-sm border-2 transition duration-200 ease-in-out transform hover:scale-105 rounded-md ${
            activeCategory === category.id ? 'bg-green-600 text-white' : 'bg-white'
          }`}
        >
          {category.categoryName}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
