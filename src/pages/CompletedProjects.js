// src/pages/CompletedProjects.js
import React from 'react';

const CompletedProjects = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Completed Projects</h1>
      <p>These are the projects we have successfully completed over the years to benefit the community.</p>
      {/* Add a list of completed projects */}
      <ul className="list-disc pl-6">
        <li>Completed Project 1 - Clean Energy Initiative</li>
        <li>Completed Project 2 - Village Sanitation Program</li>
        <li>Completed Project 3 - Orphanage Support</li>
      </ul>
    </div>
  );
};

export default CompletedProjects;
