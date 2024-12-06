import React from 'react';

const Countdownbox = ({ value, label }) => {
  return (
    <div className="bg-white py-5 lg:px-8 px-4 shadow-lg flex rounded-lg justify-center items-center">
      <div>
        <p className="text-center lg:text-6xl text-lg font-[500] font-primary">{value}</p>
        <span className="lg:text-xl text-lg my-4 text-center">{label}</span>
      </div>
    </div>
  );
};

export default Countdownbox;
