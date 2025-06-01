import React from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

interface ChalkButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const ChalkButton: React.FC<ChalkButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  icon,
  type = 'button',
}) => {
  const [playClick] = useSound('/sounds/chalk-click.mp3', { volume: 0.5 });

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-chalk-neon bg-opacity-20 text-chalk-neon border-chalk-neon shadow-neon';
      case 'secondary':
        return 'bg-chalk-white bg-opacity-10 text-chalk-white border-chalk-white shadow-chalk';
      case 'outline':
        return 'bg-transparent text-chalk-white border-chalk-white hover:bg-chalk-white hover:bg-opacity-10';
      default:
        return 'bg-chalk-neon bg-opacity-20 text-chalk-neon border-chalk-neon shadow-neon';
    }
  };

  const handleClick = () => {
    playClick();
    if (onClick) onClick();
  };

  return (
    <motion.button
      type={type}
      onClick={handleClick}
      className={`relative px-6 py-2 rounded-md border-2 font-chalk transition-all duration-300 chalk-btn ${getVariantClasses()} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center justify-center">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </div>
    </motion.button>
  );
};

export default ChalkButton;