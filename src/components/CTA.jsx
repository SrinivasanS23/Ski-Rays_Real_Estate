import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[150%] bg-brand-green/5 rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[50%] h-[100%] bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[2rem] p-10 md:p-16 lg:p-20 text-center border-brand-green/20 relative overflow-hidden"
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to find your <span className="text-brand-green">dream home</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 font-light leading-relaxed">
              Experience luxury living at Heaven City, Kodaikanal. Book a site visit today and step into a world of elegance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/contact" 
                className="group px-8 py-4 bg-brand-green hover:bg-emerald-600 text-white rounded-full font-medium text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center w-full sm:w-auto justify-center"
              >
                Schedule a Visit
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:8807398966" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full font-medium text-lg transition-all w-full sm:w-auto text-center"
              >
                Call +91 88073 98966
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
