import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const interval = 25;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  const floors = Array.from({ length: 5 }).map((_, i) => i);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      <div className="relative w-32 h-48 flex flex-col-reverse items-center justify-start border-b-4 border-brand-green pb-1">
        {floors.map((floor) => {
          const threshold = (floor + 1) * 20;
          const isVisible = progress >= threshold - 10;
          
          return (
            <motion.div
              key={floor}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, type: 'spring' }}
              className="w-24 h-8 bg-brand-blue border border-white/20 mb-1 rounded-sm shadow-[0_0_15px_rgba(16,185,129,0.2)] flex items-center justify-evenly relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]" />
              <div className="w-4 h-5 bg-yellow-100/80 rounded-sm shadow-[0_0_8px_rgba(254,240,138,0.6)]"></div>
              <div className="w-4 h-5 bg-yellow-100/80 rounded-sm shadow-[0_0_8px_rgba(254,240,138,0.6)]"></div>
              <div className="w-4 h-5 bg-yellow-100/80 rounded-sm shadow-[0_0_8px_rgba(254,240,138,0.6)]"></div>
            </motion.div>
          );
        })}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={progress >= 95 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="w-0 h-0 border-l-[54px] border-r-[54px] border-b-[24px] border-l-transparent border-r-transparent border-b-brand-green mb-1 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"
        />
      </div>
      
      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-4xl font-display font-bold tracking-wider text-white drop-shadow-lg">
          SKI RAYS
        </h2>
        <div className="text-brand-green text-sm tracking-[0.4em] mt-2 font-semibold">
          HOMESS
        </div>
        <div className="mt-8 text-6xl font-light font-display text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-300 to-white">
          {progress}%
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
