import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

const faqData = [
  {
    question: "What is the exact location of Heaven City?",
    answer: "Heaven City is beautifully situated in the serene hills of Kodaikanal, offering easy access to the city center while maintaining a peaceful, nature-centric environment."
  },
  {
    question: "What configurations are available in Heaven City?",
    answer: "The project exclusively features premium 1 BHK luxury apartments, designed for optimum space utilization and modern living aesthetics. Total 512 flats across 64 blocks."
  },
  {
    question: "Is the project approved by necessary authorities?",
    answer: "Yes, Heaven City is fully approved by the local planning authorities and strictly adheres to all environmental and structural guidelines."
  },
  {
    question: "What are the security features in the gated community?",
    answer: "We offer 24/7 multi-tier security including trained personnel, comprehensive CCTV surveillance, secure entry/exit points, and intercom facilities in all apartments."
  },
  {
    question: "Are there any financing options available?",
    answer: "Yes, the project is approved by major leading banks and financial institutions. Our sales team can assist you with the home loan process."
  },
  {
    question: "When is the expected date of possession?",
    answer: "Please contact our sales team for the most up-to-date information regarding phase-wise completion and possession timelines."
  }
];

const FAQPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero 
        title="FAQ" 
        subtitle="Got questions? We've got answers."
        image="/images/hero_2.png"
        height="h-[50vh]"
      />

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-sm tracking-[0.3em] text-brand-green font-semibold uppercase mb-4">Common Queries</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Frequently Asked Questions</h3>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FAQ faqs={faqData} />
          </motion.div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <a href="mailto:skirayshomess@gmail.com" className="text-brand-green hover:text-white font-medium underline decoration-brand-green/30 underline-offset-4 transition-colors">
              skirayshomess@gmail.com
            </a>
          </div>
        </div>
      </section>
      
      <CTA />
    </motion.div>
  );
};

export default FAQPage;
