import React from 'react';

const CharitableWork = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Charitable Work
      </h1>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
        This is the Charitable Work page. We are committed to supporting various charitable initiatives and projects to help communities in need.
      </p>

      {/* Placeholder for sections about ongoing or completed charitable work */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-300 h-48">Ongoing Projects</div>
        <div className="bg-gray-300 h-48">Completed Projects</div>
      </div>
    </div>
  );
};

export default CharitableWork;
