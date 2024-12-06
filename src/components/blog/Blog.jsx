import React from 'react';
import { FiArrowRight } from 'react-icons/fi'; // Import the right arrow icon
import blogImage from '../../assets/fruit-bundle.jpg';

const blogs = [
  {
    id: 1,
    image: blogImage,
    date: "December 5, 2024",
    title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
  },
  {
    id: 2,
    image: blogImage,
    date: "November 22, 2024",
    title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
  },
  {
    id: 3,
    image: blogImage,
    date: "October 15, 2024",
    title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
  },
];

export const Blog = () => {
  return (
    <div className="container mx-auto py-10 font-primary" id="blog">
      <div className="text-center">
        <h3 className="text-green-title bg-green-50 py-1 px-2 rounded-lg inline-block text-lg font-primary text-[20px]">
          Our Blog
        </h3>
        <p className="text-[32px] font-primary font-bold mt-3">
          Fresh Harvest Blog
        </p>
        <p className="text-md mt-4 lg:max-w-[720px] max-w-[350px] mx-auto text-center">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg  overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[260px] object-cover rounded-lg"
            />
            <div className="my-3">
              <p className="text-sm text-gray-500">{blog.date}</p>
              <h3 className="text-lg font-bold mt-2">{blog.title}</h3>
              <button className="mt-4 py-2 text-orange-500 text-lg rounded-lg flex items-center gap-2 transition">
                Read More
                <FiArrowRight className="text-orange-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
