import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Modal from '../components/Modal';
import { Layers, Home, Maximize, Compass } from 'lucide-react';

const Project = () => {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const specs = [
    { icon: Layers, label: "Total Area", value: "16 Acres" },
    { icon: Home, label: "Total Units", value: "512 Flats" },
    { icon: Maximize, label: "Blocks", value: "64 Blocks" },
    { icon: Compass, label: "Configuration", value: "1 BHK Luxury" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero 
        title="Project Details" 
        subtitle="Heaven City - A masterpiece of modern architecture"
        image="/images/hero_1.png"
        height="h-[60vh]"
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm tracking-[0.3em] text-brand-green font-semibold uppercase mb-4">Heaven City</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Redefining Luxury Living</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-6 text-lg">
                Heaven City is a meticulously planned residential enclave spread across 16 lush acres in Kodaikanal. Comprising 64 blocks with a total of 512 premium 1 BHK flats, the project is designed to offer a harmonious blend of aesthetics and functionality.
              </p>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                Every apartment is crafted to maximize natural light and ventilation, ensuring a refreshing living experience. The gated community features state-of-the-art infrastructure, landscaped gardens, and a host of amenities that cater to your every need.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {specs.map((spec, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl text-center">
                  <spec.icon size={32} className="text-brand-green mx-auto mb-4" />
                  <div className="text-2xl font-display font-bold text-white mb-1">{spec.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">{spec.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Master Plan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-dark rounded-[2rem] p-8 md:p-12 overflow-hidden relative"
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl font-display font-bold text-white mb-4">Master Plan Overview</h3>
              <p className="text-gray-400 max-w-2xl mx-auto font-light">
                A thoughtfully designed layout that prioritizes open spaces, greenery, and smooth connectivity within the community.
              </p>
            </div>
            
            <div 
              className="aspect-[16/9] w-full rounded-xl overflow-hidden relative group cursor-pointer"
              onClick={() => setIsPlanModalOpen(true)}
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Master Plan" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-6 py-3 glass rounded-full text-white font-medium">View Detailed Plan</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Modal isOpen={isPlanModalOpen} onClose={() => setIsPlanModalOpen(false)}>
        <div className="p-6 max-h-[85vh] overflow-y-auto custom-scrollbar">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Detailed Plan & Specifications</h3>
          
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Area Diagram" className="w-full rounded-xl mb-6 shadow-lg" />
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-brand-dark/50 p-4 rounded-xl border border-white/5">
              <div className="text-gray-400 text-sm mb-1">Built-up Area</div>
              <div className="text-xl font-bold text-brand-green">550 Sq.Ft</div>
            </div>
            <div className="bg-brand-dark/50 p-4 rounded-xl border border-white/5">
              <div className="text-gray-400 text-sm mb-1">UDS</div>
              <div className="text-xl font-bold text-brand-green">1000 Sq.Ft</div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">Specifications</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><strong className="text-white">Structure:</strong> RCC framed structure</li>
                <li><strong className="text-white">Wall Finish:</strong> Premium emulsion paint</li>
                <li><strong className="text-white">Floor Finish:</strong> Vitrified tiles</li>
                <li><strong className="text-white">Balcony:</strong> Anti-skid ceramic tiles</li>
                <li><strong className="text-white">Bathrooms:</strong> Premium CP fittings & sanitary wares</li>
                <li><strong className="text-white">Joinery:</strong> Teak wood main door, flush doors</li>
                <li><strong className="text-white">Electrical:</strong> Concealed copper wiring, modular switches</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">Payment Schedule</h4>
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-sm text-left text-gray-300 border-collapse">
                  <thead className="text-xs text-brand-dark uppercase bg-brand-green">
                    <tr>
                      <th className="px-4 py-3 font-bold">Stage / Timeline</th>
                      <th className="px-4 py-3 font-bold text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10 bg-brand-dark/50 hover:bg-brand-dark transition-colors">
                      <td className="px-4 py-3">Booking Advance – 1st Month</td>
                      <td className="px-4 py-3 text-right font-medium text-brand-green">₹5,000/-</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-brand-dark/50 hover:bg-brand-dark transition-colors">
                      <td className="px-4 py-3">2nd to 6th Month</td>
                      <td className="px-4 py-3 text-right font-medium text-brand-green">₹3,500/- (Per Month)</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-brand-dark/50 hover:bg-brand-dark transition-colors">
                      <td className="px-4 py-3">6th Month at the Time of Registration</td>
                      <td className="px-4 py-3 text-right font-medium text-brand-green">₹2,50,000/-</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-brand-dark/50 hover:bg-brand-dark transition-colors">
                      <td className="px-4 py-3">7th to 9th Month</td>
                      <td className="px-4 py-3 text-right font-medium text-brand-green">₹3,500/- (Per Month)</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-brand-dark/50 hover:bg-brand-dark transition-colors">
                      <td className="px-4 py-3">10th Month</td>
                      <td className="px-4 py-3 text-right font-medium text-brand-green">₹1,00,000/-</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-brand-dark/50 hover:bg-brand-dark transition-colors">
                      <td className="px-4 py-3">11th to 13th Month</td>
                      <td className="px-4 py-3 text-right font-medium text-brand-green">₹3,500/- (Per Month)</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-brand-dark/50 hover:bg-brand-dark transition-colors">
                      <td className="px-4 py-3">14th Month</td>
                      <td className="px-4 py-3 text-right font-medium text-brand-green">₹1,00,000/-</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-brand-dark/50 hover:bg-brand-dark transition-colors">
                      <td className="px-4 py-3">16th Month</td>
                      <td className="px-4 py-3 text-right font-medium text-brand-green">₹1,00,000/-</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-brand-dark/50 hover:bg-brand-dark transition-colors">
                      <td className="px-4 py-3">18th Month</td>
                      <td className="px-4 py-3 text-right font-medium text-brand-green">₹1,00,000/-</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-brand-dark/50 hover:bg-brand-dark transition-colors">
                      <td className="px-4 py-3">20th Month</td>
                      <td className="px-4 py-3 text-right font-medium text-brand-green">₹1,00,000/-</td>
                    </tr>
                    <tr className="bg-brand-dark/50 hover:bg-brand-dark transition-colors">
                      <td className="px-4 py-3">21st to 25th Month</td>
                      <td className="px-4 py-3 text-right font-medium text-brand-green">₹1,50,000/- (Per Month)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <CTA />
    </motion.div>
  );
};

export default Project;
