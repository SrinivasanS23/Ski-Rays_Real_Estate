import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import Modal from '../components/Modal';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState("+91 88073 98966");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: MapPin, title: "Site Address", details: "Heaven City, Kodaikanal, Tamil Nadu, India", action: null },
    { icon: Phone, title: "Phone", details: "+91 88073 98966", action: () => setIsModalOpen(true) },
    { icon: Mail, title: "Email", details: "skirayshomess@gmail.com", action: "mailto:skirayshomess@gmail.com" }
  ];

  const directors = [
    { name: "MR. V.THANDAPANI", designation: "Managing Director", phone: "63845 54983" },
    { name: "MR.S. RADHAKRISHNAN", designation: "Director", phone: "63845 54983" },
    { name: "MR.T. KISHORE RAJ", designation: "Director", phone: "63845 54983" }
  ];

  const handlePhoneClick = (phone) => {
    setSelectedPhone(phone);
    setIsModalOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero 
        title="Contact Us" 
        subtitle="Get in touch with our experts to find your dream home."
        image="/images/hero_2.png"
        height="h-[50vh]"
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={typeof info.action === 'function' ? info.action : null}
                className={`glass-card p-8 rounded-2xl text-center flex flex-col items-center ${info.action ? 'cursor-pointer hover:border-brand-green/50 transition-colors group' : ''}`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-brand-dark border border-white/10 ${info.action ? 'group-hover:bg-brand-green/10 group-hover:border-brand-green/30 transition-colors' : ''}`}>
                  <info.icon size={24} className="text-brand-green" />
                </div>
                <h4 className="text-xl font-display font-semibold text-white mb-3">{info.title}</h4>
                {typeof info.action === 'string' ? (
                  <a href={info.action} className="text-gray-400 hover:text-white transition-colors">{info.details}</a>
                ) : (
                  <p className="text-gray-400">{info.details}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">Board of Directors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {directors.map((director, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 rounded-xl flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-dark flex items-center justify-center mb-4 border border-brand-green/30">
                    <span className="text-2xl font-bold text-brand-green">{director.name.split(' ')[1]?.charAt(0) || director.name.charAt(0)}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{director.name}</h4>
                  <p className="text-sm text-brand-green mb-4">{director.designation}</p>
                  <button 
                    onClick={() => handlePhoneClick(director.phone)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors glass px-4 py-2 rounded-full"
                  >
                    <Phone size={16} className="text-brand-green" />
                    <span>{director.phone}</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 lg:p-16 bg-gradient-to-br from-brand-dark to-brand-dark/50">
              <h2 className="text-3xl font-display font-bold text-white mb-2">Send us a message</h2>
              <p className="text-gray-400 mb-8 font-light">Fill out the form below and we'll get back to you shortly.</p>
              
              <AnimatePresence mode="wait">
                {showSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-64 text-center"
                  >
                    <CheckCircle2 size={64} className="text-brand-green mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-gray-400">Your message has been sent successfully. Our team will contact you soon.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows="4" 
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-brand-green hover:bg-emerald-600 text-white rounded-xl py-4 font-medium transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                    >
                      {isSubmitting ? (
                        <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
            
            <div className="lg:w-1/2 bg-black/40 relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Office" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">Visit Our Office</h3>
                  <p className="text-gray-300 font-light">
                    Experience the luxury first-hand. Schedule a site visit and let our executives guide you through your future home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Phone/WhatsApp */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-green/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Phone size={32} className="text-brand-green" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-2">Connect With Us</h3>
          <p className="text-gray-400 mb-8">Choose how you would like to reach our sales team.</p>
          
          <div className="flex flex-col space-y-4">
            <a 
              href={`tel:+91${selectedPhone.replace(/\D/g, '')}`} 
              className="flex items-center justify-center space-x-3 w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold"
            >
              <Phone size={20} />
              <span>Call {selectedPhone}</span>
            </a>
            
            <a 
              href={`https://wa.me/91${selectedPhone.replace(/\D/g, '')}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold"
            >
              {/* WhatsApp Icon placeholder */}
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(false)}
            className="mt-6 text-sm text-gray-400 hover:text-white underline decoration-gray-600 underline-offset-4"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </motion.div>
  );
};

export default Contact;
