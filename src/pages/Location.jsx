import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import { MapPin, Navigation, Car, Plane, Train } from 'lucide-react';

const Location = () => {
  const distances = [
    { icon: MapPin, label: "Kodaikanal Lake", distance: "5km", time: "" },
    { icon: MapPin, label: "Naidu puram", distance: "3Km", time: "" },
    { icon: MapPin, label: "Kuringi Aandavar Temple", distance: "4km", time: "" },
    { icon: MapPin, label: "Kodaikanal Bus Stand", distance: "5.5km", time: "" },
    { icon: MapPin, label: "Clinic & Hospital", distance: "3km", time: "" },
    { icon: MapPin, label: "Schools", distance: "3km", time: "" },
    { icon: MapPin, label: "Theresa university", distance: "7km", time: "" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero 
        title="Location" 
        subtitle="Nestled in the Princess of Hill Stations"
        image="/images/hero_1.png"
        height="h-[60vh]"
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm tracking-[0.3em] text-brand-green font-semibold uppercase mb-4">Location Advantages</h2>
              <h3 className="text-4xl font-display font-bold text-white mb-6">Serene Yet Connected</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
                Heaven City is strategically located in Kodaikanal to offer you the perfect balance of peaceful living away from the city bustle, while keeping you well-connected to essential landmarks, hospitals, and schools.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {distances.map((item, i) => (
                  <div key={i} className="glass-card p-6 rounded-xl flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center shrink-0 border border-brand-green/30">
                      <item.icon size={20} className="text-brand-green" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.label}</h4>
                      <div className="text-sm text-gray-400 flex items-center space-x-2">
                        <span>{item.distance}</span>
                        {item.time && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                            <span>{item.time}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-4 rounded-2xl h-[500px] flex flex-col"
            >
              <div className="flex items-center space-x-2 px-4 py-3 border-b border-white/10 mb-4">
                <MapPin className="text-brand-green" />
                <span className="text-white font-medium">Heaven City, Kodaikanal, Tamil Nadu</span>
              </div>
              
              <h2 className="text-sm tracking-[0.3em] text-brand-green font-semibold uppercase mb-4 mt-6">Exact Location</h2>
              <div className="flex-1 w-full rounded-2xl overflow-hidden glass-card p-2 bg-white/5 relative min-h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125555.4518384976!2d77.42065870000001!3d10.2381136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0766637f0a0387%3A0x9dbfaae58bfa79f6!2sKodaikanal%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  className="w-full h-full absolute inset-0 border-0 rounded-xl" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ski Rays Location"
                ></iframe>
              </div>
              <div className="mt-4 px-2 flex justify-between items-center">
                <p className="text-sm text-gray-400 italic">Click map to interact.</p>
                <a 
                  href="https://www.google.com/maps/place/Kodaikanal,+Tamil+Nadu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-green hover:text-white text-sm font-medium transition-colors"
                >
                  Open in Maps &rarr;
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </motion.div>
  );
};

export default Location;
