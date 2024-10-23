import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/img01.jpg')",
      }}
    >
      {/* Add the overlay effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Centered text content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        <h1 className="text-5xl font-bold mb-4">A Centre for Mind & Body Balance</h1>
        <p className="text-lg">Welcome to Vimansa Meditation Centre</p>
        <button className="mt-6 px-8 py-3 bg-green-500 text-white font-semibold rounded-md">
          Make a Reservation
        </button>
      </div>

      {/* The vertical address on the right */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 rotate-90 text-white">
        N.30 Keraminiya Road, Wathugedara, Ambalangoda 80300
      </div>
    </section>
  );
};

export default Hero;
