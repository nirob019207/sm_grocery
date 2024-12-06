import React from 'react';
import about from '../../assets/fruit-bundle.jpg';
import CountdownBox from './CountdownBox'; // Import the reusable CountdownBox component

export const FoodBundle = () => {
  const foodBundles = [
    {
      title: "Seasonal Fruit Bundle",
      offer: "Discount Up to",
      offerCount: "80% off",
      image: about,
      specialOffer: "Special Offer",
      deadline: {
        days: 3,
        hours: 18,
        minutes: 20,
        seconds: 45,
      },
      code:"FRUITE28"
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10 lg:py-16">
      {foodBundles.map((bundle, index) => (
        <div key={index} className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-green-600 bg-green-50 py-1 my-2 px-2 rounded-lg inline-block text-lg font-primary text-[20px]">
              {bundle.specialOffer}
            </h3>
            <h2 className="text-5xl lg:text-7xl font-bold font-primary text-dark-bg">
              {bundle.title}
            </h2>
            <p className="mt-4 text-gray-600 text-2xl text-[40px] font-bold font-primary leading-relaxed">
              {bundle.offer} <span className="text-orange-400">{bundle.offerCount}</span>
            </p>

            {/* Countdown Section */}
            <div className="flex lg:justify-start justify-center items-center gap-3 mt-4">
              <CountdownBox value={`0${bundle.deadline.days}`} label="days" />
              <CountdownBox value={bundle.deadline.hours} label="hours" />
              <CountdownBox value={bundle.deadline.minutes} label="minutes" />
              <CountdownBox value={bundle.deadline.seconds} label="seconds" />
            </div>

       
    <button className="mt-16 border-2 font-primary bg-green-600 py-2  px-9 rounded-full text-white text-xl font-bold transition duration-200 hover:bg-orange-400 hover:text-white">
             CODE : <span className='text-orange-200 hover:text-white'>{bundle.code}</span>
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:w-[400px] w-[300px] lg:block hidden">
            <img
              src={bundle.image}
              alt={bundle.title}
              className="w-full h-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
};