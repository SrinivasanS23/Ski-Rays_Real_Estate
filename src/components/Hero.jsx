import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = ({ 
  title, 
  subtitle, 
  image = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  height = "h-screen",
  isMain = false
}) => {
  return (
    <div className={`relative ${height} w-full overflow-hidden flex items-center justify-center`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src={image} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark/95 z-10"></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {isMain && (
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full glass-dark border-brand-green/30 text-brand-green text-sm tracking-widest font-semibold uppercase">
              Welcome to Heaven City
            </div>
          )}
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
            {title}
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light drop-shadow-md">
            {subtitle}
          </p>

          {isMain && (
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/project" 
                className="px-8 py-4 bg-brand-green hover:bg-emerald-600 text-white rounded-full font-medium text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.4)] w-full sm:w-auto"
              >
                Explore Project
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-medium text-lg transition-all w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          )}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      {isMain && (
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-2">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-16 bg-gradient-to-b from-brand-green to-transparent"
          />
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
