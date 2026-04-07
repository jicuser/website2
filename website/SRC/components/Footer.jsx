import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

const TikTokIcon = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94H10.5c-.45-.48-.88-.98-1.22-1.59-.75-1.31-1.09-2.77-1.2-4.27-.02-1.46-.03-2.92-.02-4.38-.01-1.51.32-2.98 1.05-4.28.72-1.29 1.8-2.3 3.08-2.95V.02z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-xl font-bold">Jamatia Islamic Centre</h3>
            </div>
            <p className="text-gray-300 mb-4">
              A place of worship, learning, and community service dedicated to spreading the message of peace and harmony.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/JICMasjid" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/@jicmasjid" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/@jicmasjid" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@JICMASJID" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-300 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://tiktok.com/@jicmasjid" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-300 hover:text-primary transition-colors">
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/prayer-times" className="text-gray-300 hover:text-primary transition-colors">Prayer Times</Link></li>
              <li><Link to="/madrassah" className="text-gray-300 hover:text-primary transition-colors">Madrassah</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-primary transition-colors">Meet the Team</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-300">179-183 Woodlands Rd, Birmingham B11 4ER</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300">0121 778 6612</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-gray-300">Open 24 hours</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Jamatia Islamic Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;