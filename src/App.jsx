import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import FloatingButtons from './components/FloatingButtons';

import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Amenities from './pages/Amenities';
import GalleryPage from './pages/GalleryPage';
import Location from './pages/Location';
import FAQPage from './pages/FAQPage';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <div key="content" className="flex flex-col min-h-screen bg-brand-dark text-white font-sans">
            <Navbar />
            <main className="flex-grow pt-20"> {/* PT for fixed navbar */}
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/project" element={<Project />} />
                  <Route path="/amenities" element={<Amenities />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/location" element={<Location />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
            <FloatingButtons />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
