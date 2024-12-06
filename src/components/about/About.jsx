import React from 'react';
import about from '../../assets/about.png';

export const About = () => {
  const aboutUs = [
    {
      title: "About Fresh Harvest",
      shortDescription:
        "Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.",
      image: about,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10 lg:py-16 " id="about">
      {aboutUs.map((item, index) => (
        <div
          key={index}
          className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16"
        >
               {/* Right Section: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Left Section: Text */}
          <div className="text-center lg:text-left max-w-lg">
          <h3 className="text-green-title bg-green-50 py-1 my-2 px-2 rounded-lg inline-block text-lg font-primary text-[20px]">
            Our Products
          </h3>
            <h2 className="text-xl lg:text-4xl font-bold font-primary text-black f">
              {item.title}
            </h2>
            <p className="mt-4 text-gray-600 text-lg font-primary leading-relaxed">
              {item.shortDescription}
            </p>
            <button className="mt-6 border-2 border-orange-400 text-orange-400  py-2 px-9 rounded-lg text-lg text-bold transition duration-200">
              Learn More
            </button>
          </div>

       
        </div>
      ))}
    </div>
  );
};
