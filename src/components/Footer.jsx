import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8 text-gray-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col items-start">
              <span className="text-3xl font-display font-bold tracking-widest text-white">SKI RAYS</span>
              <span className="text-xs tracking-[0.2em] text-brand-green uppercase font-semibold">Homess</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Innovation | Aspiration | Creation. <br/>
              Building premium communities that elevate your lifestyle. Heaven City, Kodaikanal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-green transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-green transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-green transition-colors text-white">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-brand-green transition-colors">About Us</Link></li>
              <li><Link to="/project" className="hover:text-brand-green transition-colors">Project Details</Link></li>
              <li><Link to="/amenities" className="hover:text-brand-green transition-colors">Amenities</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-green transition-colors">Gallery</Link></li>
              <li><Link to="/faq" className="hover:text-brand-green transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Project Details */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6 tracking-wide">Heaven City</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>512 Premium Flats</li>
              <li>64 Architectured Blocks</li>
              <li>16 Acres Gated Community</li>
              <li>1 BHK Luxury Apartments</li>
              <li>20+ World-class Amenities</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-brand-green shrink-0 mt-0.5" size={18} />
                <span className="text-gray-400">Heaven City, Kodaikanal,<br/>Tamil Nadu, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-brand-green shrink-0" size={18} />
                <a href="tel:8807398966" className="hover:text-white transition-colors">8807398966</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-brand-green shrink-0" size={18} />
                <a href="mailto:skirayshomess@gmail.com" className="hover:text-white transition-colors">skirayshomess@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ski Rays Homess Private Limited. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
