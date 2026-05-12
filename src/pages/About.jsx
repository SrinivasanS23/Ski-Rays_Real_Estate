import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const values = [
    { title: "Innovation", desc: "Pushing boundaries in architectural design and sustainable living." },
    { title: "Aspiration", desc: "Building homes that reflect your highest ambitions and desires." },
    { title: "Creation", desc: "Crafting spaces that turn ordinary moments into extraordinary memories." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero 
        title="About Us" 
        subtitle="Ski Rays Homess Private Limited"
        image="/images/hero_2.png"
        height="h-[60vh]"
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Company Vision" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-xl hidden md:block">
                  <div className="text-4xl font-display font-bold text-brand-green mb-1">10+</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Years of Excellence</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-sm tracking-[0.3em] text-brand-green font-semibold uppercase mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Building Dreams, <br/>Delivering Promises</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-6 text-lg">
                At Ski Rays Homess Private Limited, we don't just build apartments; we craft lifestyles. With a passion for excellence and a commitment to quality, we have established ourselves as a premier real estate developer.
              </p>
              <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
                Our flagship project, Heaven City in Kodaikanal, is a testament to our vision of creating luxurious, sustainable, and vibrant communities. We believe in transparency, customer satisfaction, and delivering projects that stand the test of time.
              </p>

              <div className="space-y-4">
                {[
                  "Uncompromising Quality Standards",
                  "Timely Project Delivery",
                  "Customer-Centric Approach",
                  "Sustainable Building Practices"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-brand-green" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm tracking-[0.3em] text-brand-green font-semibold uppercase mb-4">Our Core Values</h2>
            <h3 className="text-4xl font-display font-bold text-white">The Foundation of Our Success</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card p-10 rounded-2xl text-center border-t border-brand-green/20 hover:border-brand-green/50 transition-colors"
              >
                <h4 className="text-2xl font-display font-bold text-white mb-4">{value.title}</h4>
                <p className="text-gray-400 font-light leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </motion.div>
  );
};

export default About;
