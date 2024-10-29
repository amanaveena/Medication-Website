import React from 'react';

const CompletedProjects = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Completed Projects
      </h1>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
        These are the projects we have successfully completed over the years to benefit the community.
      </p>

      {/* List of completed projects */}
      <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base md:text-lg space-y-2">
        <li>Completed Project 1 - Clean Energy Initiative</li>
        <li>Completed Project 2 - Village Sanitation Program</li>
        <li>Completed Project 3 - Orphanage Support</li>
      </ul>
    </div>
  );
};

export default CompletedProjects;
