import React, { useState, useEffect } from 'react';
import { FaBars, FaAngleDoubleRight, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import statueImage from '../assets/images/statue.jpg';
import './Home.css'; // Import the CSS file here
import service3 from '../assets/images/service3.jpg';
import service2 from '../assets/images/service2.jpg';
import service1 from '../assets/images/service1.jpg';
import Gallery from '../assets/images/Gallery.jpg';
import Gallery1 from '../assets/images/Gallery1.jpg';
import Gallery2 from '../assets/images/Gallery2.jpg';
import Gallery3 from '../assets/images/Gallery3.jpg';
import Gallery4 from '../assets/images/Gallery4.jpg';
import Gallery5 from '../assets/images/Gallery5.jpg';
import Gallery6 from '../assets/images/Gallery6.jpg';
import gain from '../assets/images/gain.jpg';
import image01 from '../assets/images/image01.jpg';
import image02 from '../assets/images/image02.jpg';
import image03 from '../assets/images/image03.jpg';
import { motion } from "framer-motion";


const Home = () => {
  const images = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Background Image Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          margin: 0,
          padding: 0,
          overflow: 'hidden',
        }}
      >
        {/* Main Container */}
        <div
          className="border-2 border-gray-500 mx-auto p-6 w-3/4 relative"
          style={{
            height: '90%',
            width: '80%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '20px',
            border: '2px solid #ffffff',
            padding: '1rem',
            margin: '0.5rem 2rem',
          }}
        >
          {/* Navigation and Hamburger */}
          <div className="flex justify-between items-center">
            {/* Hamburger Menu */}
            <FaBars className="text-white text-xl" style={{ marginLeft: '40px', marginTop: '10px' }} />

            {/* Navigation Inside Box */}
            <nav
              className="flex space-x-6 text-white font-bold"
              style={{ fontSize: '14px', textAlign: 'center', width: '100%', position: 'relative', top: '10px', left: '210px' }}
            >
              <a href="/" className="hover:underline">Home</a>

            {/* About Us Section */}
            <div className="relative group">
                <button className="hover:underline">About Us</button>
                <div className="absolute left-0 hidden group-hover:block bg-white text-black shadow-lg">
                  <a href="/WhoWeAre" className="block px-4 py-2 hover:bg-gray-200">WhoWeAre</a>
                  <a href="/Gallery" className="block px-4 py-2 hover:bg-gray-200">Gallery</a>
                </div>
              </div>

              <a href="/events" className="hover:underline">Events</a>

            {/* Charitable Work Section */}
            <div className="relative group">
                <button className="hover:underline">Charitable Work</button>
                <div className="absolute left-0 hidden group-hover:block bg-white text-black shadow-lg">
                  <a href="/Ongoing Projects" className="block px-4 py-2 hover:bg-gray-200">Ongoing Projects</a>
                  <a href="/Completed Projects" className="block px-4 py-2 hover:bg-gray-200">Completed Projects</a>
                </div>
              </div>

              <a href="/blog" className="hover:underline">Blogs</a>

              {/* Services Section */}
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

          {/* Welcome Text Positioned Between Navbar and Title */}
          <h1
            className="text-white font-bold text-left"
            style={{
              fontSize: '16px',
              marginTop: '10.5rem',
              marginLeft: '5%',
              position: 'relative',
            }}
          >
            ----- Welcome To Vimansa Meditation Centre -----
          </h1>

          {/* Main Title: A Centre for Mind & Body Balance */}
          <div className="absolute text-left" style={{ top: '50%', transform: 'translateY(-50%)', left: '5%' }}>
            <h2
              className="text-5xl font-bold text-left leading-tight text-white"
              style={{ fontSize: '70px', lineHeight: '60px' }}
            >
              A Centre for Mind &<br />Body Balance
            </h2>
          </div>

          {/* Make A Reservation Button (Main Button at the Bottom) */}
          <div
            className="absolute"
            style={{
              bottom: '165px',
              left: '5%',
            }}
          >
            <a href="/reservation"> 
  <motion.button
    className="bg-white text-green-600 border-2 border-white rounded px-4 py-4 flex items-center space-x-2"
    whileHover={{ 
      scale: 1.05, 
      backgroundColor: "#d1fae5", // Change to a light green on hover
      color: "#065f46"  // Dark green text color on hover
    }} 
    whileTap={{ 
      scale: 0.95, 
      backgroundColor: "#a7f3d0", // Change to an even lighter green on tap
      color: "#064e3b" // Even darker green text color on tap
    }} 
    transition={{ duration: 0.2 }}  // Smooth transition duration
  >
    <span className="text-green-600 text-sm font-bold">Make A Reservation</span>
    <FaAngleDoubleRight className="text-green-600" />
  </motion.button>
</a>


          </div>
        </div>

        {/* Right Sidebar for Contact Details */}
        <div
          className="absolute right-0 top-1/4 text-white"
          style={{
            whiteSpace: 'nowrap',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            fontSize: '14px',
            bottom: '100px',
            right: '40px',
          }}
        >
          <p>
            <FaEnvelope className="inline text-green-600" style={{ transform: 'rotate(90deg)', marginRight: '8px' }} />
            <span style={{ marginRight: '20px' }}>vimansameditation@gmail.com</span>
            <span style={{ color: 'gray', margin: '0 10px' }}>|</span>
            <FaMapMarkerAlt className="inline text-green-600" style={{ transform: 'rotate(90deg)', marginRight: '5px' }} />
            <span style={{ marginRight: '20px' }}>No.30 Keraminiya Road, Wathugedara, Ambalangoda 80300</span>
          </p>
        </div>
      </div>

      {/* Scrolling Effect Section */}
      <div className="white-background" style={{ paddingTop: '5rem', marginTop: '-180px' }}>
        {/* Curved Box with Image and Text */}
        
        <div className="curved-box p-8 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center mx-auto" 
        
        style={{ maxWidth: '900px', width: '90%', height: '350px'}}>
        
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={image2}
              alt="Monk"
              className="rounded-md w-full h-auto object-cover md:max-w-sm mx-auto mb-5 md:mb-0"
              style={{ maxWidth: '350px', maxHeight: '420px', borderRadius: '10px' }}
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left md:pl-50">
            <h1 className="text-1xl font-bold text-green-700">Vimansa Meditation Centre</h1>
            <h2 className="text-3xl font-bold text-black-600 my-4">A Centre for Mind & Body Balance</h2>
            <p className="text-gray-600 mb-6 text-justify">
              Vimansa is a meditation and holistic wellness centre in Sri Lanka's Southern Province providing a forum for instruction and practice in mindfulness traditions and holistic therapies.
            </p>
            <a
              href="#more"
              className="inline-block bg-white text-green-600 font-bold py-2 px-6 rounded border-2 border-green-600 transition-all duration-300 hover:bg-green-600 hover:text-white"
            >
              More About Us »
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center my-4">
        <h3 className="text-green-600 font-bold text-s" style={{ marginTop: '-150px', marginBottom: '20px' }}>
          Our Services
        </h3>
        <h4 className="text-black font-bold text-4xl" style={{ marginBottom: '40px' }}>
          What We Do
        </h4>
      </div>

      {/* New Images Section */}
<div className="flex flex-col md:flex-row justify-center mt-4 space-y-4 md:space-y-0 md:space-x-4 mx-auto" style={{ maxWidth: '900px' }}>
  {/* Image 1: Meditation */}
  <motion.div
    className="flex flex-col items-center"
    style={{ flex: '1 1 300px', maxWidth: '400px', margin: '0 18px' }}
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={service1} alt="Meditation" className="rounded-md w-full h-48 object-cover" />
    <h5 className="text-black font-bold text-2xl mt-5">MEDITATION</h5>
    <p className="text-gray-600 text-center text-xs mt-4 mb-1">Vimansa Meditation Centre serves its guests primarily as a retreat and meditation centre.</p>
    <a href="/meditation" className="mt-12">
      <button className="bg-white text-green-600 border-2 border-green-600 rounded px-4 py-2 flex items-center space-x-2 transition-all duration-300 hover:bg-green-600 hover:text-white" style={{ width: '140px', height: '60px' }}>
        <span className="text-sm font-bold">Read more</span>
        <FaAngleDoubleRight className="text-green-600" />
      </button>
    </a>
  </motion.div>

  {/* Image 2: Yoga */}
  <motion.div
    className="flex flex-col items-center"
    style={{ flex: '1 1 300px', maxWidth: '300px', margin: '0 18px' }}
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={service2} alt="Yoga" className="rounded-md w-full h-48 object-cover" />
    <h5 className="text-black font-bold text-2xl mt-5">YOGA</h5>
    <p className="text-gray-600 text-center text-xs mt-4 mb-1">Yoga is a group of physical, mental, and spiritual practices or disciplines.</p>
    <a href="/yoga" className="mt-12">
      <button className="bg-white text-green-600 border-2 border-green-600 rounded px-4 py-2 flex items-center space-x-2 transition-all duration-300 hover:bg-green-600 hover:text-white" style={{ width: '140px', height: '60px' }}>
        <span className="text-sm font-bold">Read more</span>
        <FaAngleDoubleRight className="text-green-600" />
      </button>
    </a>
  </motion.div>

  {/* Image 3: Accommodation */}
  <motion.div
    className="flex flex-col items-center"
    style={{ flex: '1 1 300px', maxWidth: '300px', margin: '0 18px' }}
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={service3} alt="Accommodation" className="rounded-md w-full h-48 object-cover" />
    <h5 className="text-black font-bold text-2xl mt-5">ACCOMMODATION</h5>
    <p className="text-gray-600 text-center text-xs mt-4 mb-1">A variety of comfort levels, from luxury to basic, & can also be utilized by guests on a budget who would opt to share rooms.</p>
    <a href="/accommodation" className="mt-8">
      <button className="bg-white text-green-600 border-2 border-green-600 rounded px-4 py-2 flex items-center space-x-2 transition-all duration-300 hover:bg-green-600 hover:text-white" style={{ width: '140px', height: '60px' }}>
        <span className="text-sm font-bold">Read more</span>
        <FaAngleDoubleRight className="text-green-600" />
      </button>
    </a>
  </motion.div>
</div>

      {/* New Statue Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 p-5">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Gallery}
            alt="StatueImage"
            className="rounded-md w-full h-auto object-cover max-w-2xl"
            style={{ maxWidth: '500px', maxHeight: '500px', marginLeft: '40px' }}
          />
        </div>
        <div className="ml-6 text-left relative" style={{ top: '-70px' }}>
          <h1 className="text-s font-bold text-green-600">Vimansa Meditation Centre</h1>
          <h2 className="text-5xl font-bold text-black my-2" style={{ marginTop: '20px' }}>Ayubowan</h2>
          <p className="text-gray-600 mb-6 text-justify mt-10"style={{ marginTop: '40px' }}>
            Vimansa is a space for exploration and connection with the self..
          </p>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="flex justify-center mt-10">
        <iframe
          width="2000"
          height="563"
          src="https://www.youtube.com/embed/5FmjbRCcKhM"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-md"
          style={{ marginLeft: '50px', maxWidth: '1000px' }}
        ></iframe>
      </div>

      {/* Gallery Section */}
<div className="text-center my-4">
  <h3 className="text-green-600 font-bold text-s" style={{ marginTop: '60px', marginBottom: '20px' }}>
    Discover More
  </h3>
  <h4 className="text-black font-bold text-4xl" style={{ marginBottom: '40px' }}>
    Gallery
  </h4>

  {/* Grid for images */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto" style={{ maxWidth: '1200px', marginBottom: '60px' }}>
  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={Gallery1} alt="Gallery 1" className="w-full h-64 object-cover" style={{ margin: '10px' }} />
  </motion.div>
  
  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={Gallery2} alt="Gallery 2" className="w-full h-64 object-cover" style={{ margin: '10px' }} />
  </motion.div>
  
  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={Gallery3} alt="Gallery 3" className="w-full h-64 object-cover" style={{ margin: '10px' }} />
  </motion.div>

  {/* Second Row */}
  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={Gallery4} alt="Gallery 4" className="w-full h-64 object-cover" style={{ margin: '10px' }} />
  </motion.div>
  
  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={Gallery5} alt="Gallery 5" className="w-full h-64 object-cover" style={{ margin: '10px' }} />
  </motion.div>
  
  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={Gallery6} alt="Gallery 6" className="w-full h-64 object-cover" style={{ margin: '10px' }} />
  </motion.div>
</div>

  {/* For More Button */}
  <button
    className="border border-green-600 text-green-600 font-bold py-4 px-6 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-300"
    style={{ marginTop: '-150px' }}
  >
    For More &gt;&gt;
  </button>
</div>

{/* Additional Section */}
<div className="bg-cover bg-center h-[400px] flex items-end" style={{ backgroundImage: `url(${gain})` }}>
        <div className="bg-black w-full py-0 px-6 md:px-16">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between text-white">
            
            {/* Column 1: About Vimansa Meditation */}
            <div className="md:w-1/3 flex flex-col space-y-4 mt-8">
              <h3 className="text-xl font-bold text-lime-400">About Vimansa Meditation</h3>
              <p>Vimansa is a meditation and holistic wellness center</p>
              <p>in Sri Lanka’s Southern Province, providing a forum</p>
              <p>for instruction and practice in mindfulness traditions</p>
              <p>and holistic therapies.</p>
            </div>

            {/* Column 2: Get In Touch! */}
            <div className="md:w-1/3 mb-8 md:mb-20 mt-8">
              <h3 className="text-xl font-bold text-lime-400">Get In Touch!</h3>
              <p className="mt-8">📍 No.30 Keraminiya Road, Wathugedara, Ambalangoda 80300</p>
              <p className="mt-2">📞 +94 76 78 71 444 / +94 91 22 52 696</p>
              <p className="mt-2">✉️ vimansameditation@gmail.com</p>
            </div>

            {/* Column 3: Gallery */}
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold text-lime-400 mt-8">Gallery</h3>
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
    </div>
  );
}

export default Home;