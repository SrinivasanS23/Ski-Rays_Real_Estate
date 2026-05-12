import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X } from 'lucide-react';
import Modal from './Modal';

const FloatingButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/918807398966"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-green-500 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center justify-center text-white cursor-pointer"
        >
          <MessageCircle size={28} />
        </motion.a>

        {/* Phone Button */}
        <motion.button
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-brand-blue rounded-full shadow-[0_0_20px_rgba(30,58,138,0.4)] flex items-center justify-center text-white"
        >
          <Phone size={24} />
        </motion.button>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center p-6">
        <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-green/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          <Phone size={32} className="text-brand-green" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-2">Contact Sales</h3>
        <p className="text-gray-400 mb-8">Choose how you would like to connect with our real estate experts.</p>
        
        <div className="flex flex-col space-y-4">
          <a 
            href="tel:8807398966" 
            className="flex items-center justify-center space-x-3 w-full py-4 rounded-xl bg-brand-blue hover:bg-blue-800 transition-colors text-white font-semibold"
          >
            <Phone size={20} />
            <span>Call +91 88073 98966</span>
          </a>
          
          <a 
            href="https://wa.me/918807398966" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold"
          >
            <MessageCircle size={20} />
            <span>WhatsApp Us</span>
          </a>
        </div>
        
        <button 
          onClick={onClose}
          className="mt-6 text-sm text-gray-400 hover:text-white underline decoration-gray-600 underline-offset-4"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default FloatingButtons;
