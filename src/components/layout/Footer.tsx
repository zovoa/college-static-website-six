import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import ChalkText from '../ui/ChalkText';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Github className="h-5 w-5" />, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="relative py-12 mt-20 overflow-hidden">
      <div className="absolute inset-0 blackboard-panel opacity-70 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <ChalkText text="Digital Academy" className="text-2xl font-chalk mb-4" />
            <p className="text-chalk-white opacity-80 mb-4">
              Bringing innovative education to life through immersive digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-chalk-white hover:text-chalk-neon transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.2, 
                    filter: 'drop-shadow(0 0 8px rgba(57, 255, 20, 0.7))' 
                  }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <ChalkText text="Quick Links" className="text-xl font-chalk mb-4" />
            <ul className="space-y-2">
              {['Home', 'About', 'Subjects', 'Events', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-chalk-white opacity-80 hover:opacity-100 hover:text-chalk-neon transition-colors duration-300 chalk-stroke"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ChalkText text="Contact Us" className="text-xl font-chalk mb-4" />
            <address className="not-italic">
              <p className="text-chalk-white opacity-80 mb-2">123 Education Street</p>
              <p className="text-chalk-white opacity-80 mb-2">Learning City, LC 12345</p>
              <p className="text-chalk-white opacity-80 mb-2">
                Email: <a href="mailto:info@digitalacademy.edu" className="hover:text-chalk-neon transition-colors duration-300">info@digitalacademy.edu</a>
              </p>
              <p className="text-chalk-white opacity-80">
                Phone: <a href="tel:+1234567890" className="hover:text-chalk-neon transition-colors duration-300">(123) 456-7890</a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-chalk-white border-opacity-20 text-center">
          <p className="text-chalk-white opacity-70">
            © {new Date().getFullYear()} Digital Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;