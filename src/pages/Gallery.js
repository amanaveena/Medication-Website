// Gallery.js

import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import main from '../assets/images/main.jpg'; // Your background image path
import image01 from '../assets/images/image01.jpg';
import image02 from '../assets/images/image02.jpg';
import image03 from '../assets/images/image03.jpg';
import image04 from '../assets/images/image04.jpg';
import image05 from '../assets/images/image05.jpg';
import image06 from '../assets/images/image06.jpg';
import image07 from '../assets/images/image07.jpg';
import image08 from '../assets/images/image08.jpg';
import image09 from '../assets/images/image09.jpg';
import gain from '../assets/images/gain.jpg';
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <div className="relative">
      {/* Contact Info Bar */}
      <div className="bg-gray-800 text-white py-2 text-center">
        <div className="flex justify-center space-x-4">
          <span>vimansameditation@gmail.com</span>
          <span>+94767871444</span>
        </div>
      </div>

      {/* Navbar with Background Image */}
      <div
        className="flex flex-col items-center justify-center relative"
        style={{
          backgroundImage: `url(${main})`,
          backgroundSize: 'cover',
          height: '300px', // Adjust height as needed
          width: '100%',
        }}
      >
        {/* Navigation Links */}
        <nav className="flex space-x-6 text-white font-bold justify-center mt-4 p-4">
          <a href="/" className="hover:underline">Home</a>
          <div className="relative group">
            <button className="hover:underline">About Us</button>
            <div className="absolute left-0 hidden group-hover:block bg-white text-black shadow-lg">
              <a href="/WhoWeAre" className="block px-4 py-2 hover:bg-gray-200">Who We Are</a>
              <a href="/Gallery" className="block px-4 py-2 hover:bg-gray-200">Gallery</a>
            </div>
          </div>
          <a href="/events" className="hover:underline">Events</a>
          <div className="relative group">
            <button className="hover:underline">Charitable Work</button>
            <div className="absolute left-0 hidden group-hover:block bg-white text-black shadow-lg">
              <a href="/OngoingProjects" className="block px-4 py-2 hover:bg-gray-200">Ongoing Projects</a>
              <a href="/CompletedProjects" className="block px-4 py-2 hover:bg-gray-200">Completed Projects</a>
            </div>
          </div>
          <a href="/blog" className="hover:underline">Blogs</a>
          <div className="relative group">
            <button className="hover:underline">Services</button>
            <div className="absolute left-0 hidden group-hover:block bg-white text-black shadow-lg">
              <a href="/meditation" className="block px-4 py-2 hover:bg-gray-200">Meditation</a>
              <a href="/yoga" className="block px-4 py-2 hover:bg-gray-200">Yoga</a>
              <a href="/accommodation" className="block px-4 py-2 hover:bg-gray-200">Accommodation</a>
            </div>
          </div>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>

        {/* Gallery Title */}
        <h1 className="text-white text-5xl font-bold text-center mt-10">
          Gallery
        </h1>
        {/* Subtitle */}
        <p className="text-white text-lg text-center mt-2">
          Capturing Moments of Utility and Insight
        </p>

        {/* Make a Reservation Link (Top Corner) */}
        <div
          className="flex items-center text-white font-bold"
          style={{ whiteSpace: 'nowrap', fontSize: '11px', position: 'relative', top: '10px', right: '15px' }}
        >
          <a href="/reservation" className="flex items-center space-x-1 hover:underline">
            <span>Make a Reservation</span>
            <FaAngleDoubleRight className="text-green-500" />
          </a>
        </div>
      </div>

    {/* Gallery Section with Margin for White Space */}
<div className="gallery-grid grid grid-cols-3 gap-8 p-7 md:grid-cols-3 sm:grid-cols-1 mx-20">
  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
    <img src={image01} alt="Description of Image 1" className="w-full h-60 object-cover" />
  </motion.div>
  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
    <img src={image02} alt="Description of Image 2" className="w-full h-60 object-cover" />
  </motion.div>
  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
    <img src={image03} alt="Description of Image 3" className="w-full h-60 object-cover" />
  </motion.div>
  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
    <img src={image04} alt="Description of Image 4" className="w-full h-60 object-cover" />
  </motion.div>
  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
    <img src={image05} alt="Description of Image 5" className="w-full h-60 object-cover" />
  </motion.div>
  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
    <img src={image06} alt="Description of Image 6" className="w-full h-60 object-cover" />
  </motion.div>
  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
    <img src={image07} alt="Description of Image 7" className="w-full h-60 object-cover" />
  </motion.div>
  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
    <img src={image08} alt="Description of Image 8" className="w-full h-60 object-cover" />
  </motion.div>
  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
    <img src={image09} alt="Description of Image 9" className="w-full h-60 object-cover" />
  </motion.div>
</div>

      {/* Additional Section */}
      
        <div className="bg-black w-full py-10 px-6 md:px-16">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between text-white">
            
            {/* Column 1: About Vimansa Meditation */}
            <div className="md:w-1/3 flex flex-col space-y-4">
              <h3 className="text-xl font-bold text-lime-400">About Vimansa Meditation</h3>
              <p>Vimansa is a meditation and holistic wellness center</p>
              <p>in Sri Lanka’s Southern Province, providing a forum</p>
              <p>for instruction and practice in mindfulness traditions</p>
              <p>and holistic therapies.</p>
            </div>

            {/* Column 2: Get In Touch! */}
            <div className="md:w-1/3 mb-8 md:mb-20">
              <h3 className="text-xl font-bold text-lime-400">Get In Touch!</h3>
              <p className="mt-8">📍 No.30 Keraminiya Road, Wathugedara, Ambalangoda 80300</p>
              <p className="mt-2">📞 +94 76 78 71 444 / +94 91 22 52 696</p>
              <p className="mt-2">✉️ vimansameditation@gmail.com</p>
            </div>

            {/* Column 3: Gallery */}
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold text-lime-400">Gallery</h3>
              <div className="flex space-x-5 mt-8">
                <img src={image01} alt="Gallery Image 1" className="w-16 h-16 object-cover" />
                <img src={image02} alt="Gallery Image 2" className="w-16 h-16 object-cover" />
                <img src={image03} alt="Gallery Image 3" className="w-16 h-16 object-cover" />
              </div>
              <div className="mt-8 flex justify-center">
                <a href="#" className="block">
                  <button className="bg-transparent text-lime-400 border border-lime-400 px-4 py-2 rounded-lg hover:bg-lime-400 hover:text-black transition-all duration-300">
                    More
                    <span className="ml-1"> &gt;&gt; </span> 
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
