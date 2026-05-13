import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, TreePine, MapPin, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import { Card, ImageCard } from '../components/Cards';
import CTA from '../components/CTA';

// Dummy data for demo
const features = [
  { icon: Building2, title: "Modern Architecture", description: "64 beautifully designed blocks featuring contemporary aesthetics and optimal space utilization." },
  { icon: ShieldCheck, title: "Gated Community", description: "24/7 security with CCTV surveillance ensuring a safe environment for your family." },
  { icon: TreePine, title: "Eco-Friendly", description: "Lush green landscapes across 16 acres, promoting a healthy and sustainable lifestyle." },
  { icon: MapPin, title: "Prime Location", description: "Situated in the serene hills of Kodaikanal, offering breathtaking views and tranquility." }
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Homeowner", content: "The attention to detail in Heaven City is remarkable. It truly feels like a premium living experience." },
  { name: "Priya Sharma", role: "Investor", content: "An excellent investment opportunity. The amenities and location are unmatched in Kodaikanal." },
  { name: "Anand Verma", role: "Resident", content: "Living here has been a dream. The community is peaceful, and the facilities are top-notch." }
];

const AnimatedCounter = ({ end, label, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const duration = 2000;
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-brand-green mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-400 text-sm tracking-widest uppercase">{label}</div>
    </div>
  );
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero 
        title="Heaven City" 
        subtitle="Experience luxury Apartment  living in the heart of Kodaikanal. A premium gated community designed for those who seek the extraordinary"
        image="/images/hero_1.png"
        isMain={true}
      />

      {/* Stats Section */}
      <section className="py-16 bg-brand-dark border-b border-white/5 relative z-10 -mt-10">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-2xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={16} label="Acres" suffix="+" />
            <AnimatedCounter end={512} label="Premium Flats" />
            <AnimatedCounter end={64} label="Blocks" />
            <AnimatedCounter end={20} label="Amenities" suffix="+" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm tracking-[0.3em] text-brand-green font-semibold uppercase mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Elevating Your Lifestyle</h3>
            <p className="text-gray-400 text-lg font-light">
              Heaven City offers a perfect blend of nature's tranquility and modern comforts. 
              Discover a life where every detail is crafted to perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm tracking-[0.3em] text-brand-green font-semibold uppercase mb-4">Gallery</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Glimpse of Paradise</h3>
            </div>
            <Link to="/gallery" className="mt-6 md:mt-0 flex items-center text-brand-green hover:text-emerald-400 transition-colors font-medium group">
              View Full Gallery 
              <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ImageCard 
              title="Exterior View" 
              subtitle="Architecture" 
              image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              index={0} 
            />
            <ImageCard 
              title="Living Room" 
              subtitle="Interior" 
              image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              index={1} 
            />
            <ImageCard 
              title="Clubhouse" 
              subtitle="Amenities" 
              image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              index={2} 
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm tracking-[0.3em] text-brand-green font-semibold uppercase mb-4">Testimonials</h2>
            <h3 className="text-4xl font-display font-bold text-white">What Our Clients Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card p-8 rounded-2xl relative"
              >
                <div className="flex space-x-1 mb-6 text-brand-green">
                  {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 font-light leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="text-white font-semibold font-display">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </motion.div>
  );
};

export default Home;
