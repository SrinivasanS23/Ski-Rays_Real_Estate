import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ icon: Icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-card p-8 rounded-2xl group border-t border-brand-green/20"
    >
      <div className="w-14 h-14 bg-brand-dark/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green/20 transition-colors border border-white/5">
        <Icon size={28} className="text-brand-green" />
      </div>
      <h3 className="text-xl font-display font-semibold text-white mb-3 tracking-wide">{title}</h3>
      <p className="text-gray-400 leading-relaxed font-light">{description}</p>
    </motion.div>
  );
};

export const ImageCard = ({ image, title, subtitle, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[4/5] glass-dark"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      
      <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-brand-green font-medium text-sm tracking-widest uppercase mb-1">{subtitle}</p>
        <h3 className="text-2xl font-display font-bold text-white">{title}</h3>
      </div>
    </motion.div>
  );
};
