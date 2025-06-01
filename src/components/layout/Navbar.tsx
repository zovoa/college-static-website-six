import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Home, Info, Calendar, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../../types';
import useSound from 'use-sound';
import ChalkText from '../ui/ChalkText';

const navItems: NavItem[] = [
  { label: 'Home', href: '#', icon: 'Home' },
  { label: 'About', href: '#about', icon: 'Info' },
  { label: 'Subjects', href: '#subjects', icon: 'BookOpen' },
  { label: 'Events', href: '#events', icon: 'Calendar' },
  { label: 'Contact', href: '#contact', icon: 'Mail' },
];

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="h-5 w-5" />,
  Info: <Info className="h-5 w-5" />,
  BookOpen: <BookOpen className="h-5 w-5" />,
  Calendar: <Calendar className="h-5 w-5" />,
  Mail: <Mail className="h-5 w-5" />,
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [playHover] = useSound('/sounds/chalk-hover.mp3', { volume: 0.5 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-blackboard-dark bg-opacity-90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <div className="relative h-10 w-10 mr-3">
              <BookOpen className="h-full w-full text-chalk-neon" />
              <div className="absolute inset-0 animate-pulse-glow opacity-50"></div>
            </div>
            <ChalkText
              text="Digital Academy"
              className="text-xl font-chalk text-chalk-white"
              animated
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-chalk text-chalk-white hover:text-chalk-neon transition-colors duration-300 chalk-stroke group flex items-center"
                onMouseEnter={() => playHover()}
              >
                <span className="mr-1 opacity-70 group-hover:opacity-100 transition-opacity">
                  {iconMap[item.icon]}
                </span>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-chalk-white p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden blackboard-panel"
          >
            <div className="px-4 py-5 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block font-chalk text-chalk-white hover:text-chalk-neon py-2 transition-colors duration-300 flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={() => playHover()}
                >
                  <span className="mr-3 opacity-70">{iconMap[item.icon]}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;