import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import { Dumbbell, Waves, TreeDeciduous, Coffee, Car, Shield, Wifi, Zap, Droplets, BookOpen, Music, Users } from 'lucide-react';

const Amenities = () => {
  const amenitiesList = [
    { icon: Waves, title: "Swimming Pool", desc: "Temperature controlled luxury pool" },
    { icon: Dumbbell, title: "Fitness Center", desc: "Fully equipped modern gymnasium" },
    { icon: TreeDeciduous, title: "Landscaped Gardens", desc: "Lush green walking trails" },
    { icon: Coffee, title: "Clubhouse", desc: "Premium recreational spaces" },
    { icon: Car, title: "Covered Parking", desc: "Dedicated secure parking slots" },
    { icon: Shield, title: "24/7 Security", desc: "CCTV surveillance & personnel" },
    { icon: Wifi, title: "Smart Home Ready", desc: "High-speed optical fiber network" },
    { icon: Zap, title: "Power Backup", desc: "100% DG backup for common areas" },
    { icon: Droplets, title: "Water Treatment", desc: "RO plant & sewage treatment" },
    { icon: BookOpen, title: "Library", desc: "Quiet reading and study rooms" },
    { icon: Music, title: "Amphitheater", desc: "Open-air entertainment area" },
    { icon: Users, title: "Community Hall", desc: "Spacious venue for events" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero 
        title="World-Class Amenities" 
        subtitle="Discover a lifestyle of unmatched comfort and convenience."
        image="/images/hero_2.png"
        height="h-[60vh]"
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm tracking-[0.3em] text-brand-green font-semibold uppercase mb-4">Features</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Designed for Excellence</h3>
            <p className="text-gray-400 text-lg font-light">
              With over 20+ premium amenities, Heaven City ensures that every moment you spend at home is like a vacation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {amenitiesList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center mb-6 border border-white/10 group-hover:border-brand-green/50 group-hover:bg-brand-green/10 transition-colors">
                  <item.icon size={24} className="text-brand-green" />
                </div>
                <h4 className="text-xl font-display font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-24 bg-brand-dark border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Featured Amenity</h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden group max-w-4xl mx-auto aspect-[16/9] md:aspect-[21/9] glass-dark border border-white/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Grand Club House" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 block"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-90 transition-opacity"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex flex-col md:flex-row md:items-end justify-between">
                <div>
                  <p className="text-brand-green font-medium text-sm tracking-widest uppercase mb-2">Premium Recreation</p>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Grand Club House</h3>
                </div>
                <div className="mt-4 md:mt-0 text-gray-300 text-sm max-w-sm">
                  Over 5000+ sq.ft of dedicated recreational space including indoor games, cafeteria, and a multipurpose hall.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </motion.div>
  );
};

export default Amenities;
