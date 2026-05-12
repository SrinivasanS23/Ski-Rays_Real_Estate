import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Project', path: '/project' },
  { name: 'Amenities', path: '/amenities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Location', path: '/location' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/10 shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 z-50">
          <img src="/logo.png" alt="Ski Rays Logo" className="h-14 w-auto object-contain" />
          <div className="flex flex-col items-start">
            <span className="text-2xl font-display font-bold tracking-widest text-white leading-none mb-1">SKI RAYS</span>
            <span className="text-[10px] tracking-[0.2em] text-brand-green uppercase font-semibold leading-none">Homess</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-green ${
                location.pathname === link.path ? 'text-brand-green' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-6 py-2 bg-brand-green hover:bg-emerald-600 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.4)] cursor-pointer z-50 relative"
            onClick={() => window.scrollTo(0, 0)}
          >
            Enquire Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-lg pt-24 px-6 flex flex-col items-center space-y-6 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  to={link.path}
                  className={`text-2xl font-display tracking-wider ${
                    location.pathname === link.path ? 'text-brand-green font-bold' : 'text-white/80'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="mt-8"
            >
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-brand-green hover:bg-emerald-600 text-white rounded-full font-display tracking-widest transition-colors shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ENQUIRE NOW
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
