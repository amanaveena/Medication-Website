import React from 'react';

const Accommodation = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Accommodation Services
      </h1>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
        We offer comfortable and serene accommodation options to ensure a peaceful stay during your time with us.
      </p>
      
      {/* Placeholder for images or additional content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-300 h-48">Image/Content 1</div>
        <div className="bg-gray-300 h-48">Image/Content 2</div>
      </div>
    </div>
  );
};

export default Accommodation;
