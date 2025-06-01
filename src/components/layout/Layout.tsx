import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChalkParticles from '../effects/ChalkParticles';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Background chalk particles */}
      <ChalkParticles />
      
      {/* Main content */}
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;