import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import WhoWeAre from './pages/WhoWeAre';  // Importing new page
import Gallery from './pages/Gallery';    // Importing new page
import Events from './pages/Events';      // Importing Events page
import OngoingProjects from './pages/OngoingProjects'; // Importing Ongoing Projects
import CompletedProjects from './pages/CompletedProjects'; // Importing Completed Projects
import Blog from './pages/Blog';
import CharitableWork from './pages/CharitableWork'; // Updated path to CharitableWork
import Meditation from './pages/Meditation';  // Importing Service sub-pages
import Yoga from './pages/Yoga';
import Accommodation from './pages/Accommodation'; // Importing Accommodation page
import Contact from './pages/Contact';
import Reservation from './pages/Reservation'; // Importing Reservation page
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />  {/* New Route for Who We Are */}
        <Route path="/gallery" element={<Gallery />} />      {/* New Route for Gallery */}
        <Route path="/events" element={<Events />} />        {/* Events page */}
        
        {/* Charitable Work dropdown */}
        <Route path="/charitable-work" element={<CharitableWork />} />
        <Route path="/ongoing-projects" element={<OngoingProjects />} />
        <Route path="/completed-projects" element={<CompletedProjects />} />
        
        <Route path="/blog" element={<Blog />} />
        
        {/* Services dropdown */}
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/accommodation" element={<Accommodation />} /> {/* Accommodation Route */}

        <Route path="/contact" element={<Contact />} />

        {/* Reservation page */}
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
