import React from 'react';

const Spotlight = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative z-10 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900">Spotlighted Content</h1>
        <p className="mt-2 text-gray-700">This content is in the spotlight!</p>
      </div>
      <div className="absolute inset-0 bg-black opacity-70"></div>
    </div>
  );
};

export default Spotlight;
