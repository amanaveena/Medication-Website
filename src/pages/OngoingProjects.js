// src/pages/OngoingProjects.js
import React from 'react';

const OngoingProjects = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Ongoing Projects</h1>
      <p>Here you can find a list of our current projects aimed at helping the community.</p>
      {/* You can add a list of projects here */}
      <ul className="list-disc pl-6">
        <li>Project 1 - Community Water Supply</li>
        <li>Project 2 - Educational Workshops</li>
        <li>Project 3 - Food Distribution</li>
      </ul>
    </div>
  );
};

export default OngoingProjects;
