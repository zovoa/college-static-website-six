import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ChalkTextProps {
  text: string;
  className?: string;
  animated?: boolean;
  delay?: number;
}

const ChalkText: React.FC<ChalkTextProps> = ({ 
  text, 
  className = '', 
  animated = false,
  delay = 0 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  useEffect(() => {
    if (!animated || !containerRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-writing');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = containerRef.current.querySelectorAll('.chalk-animated');
    elements.forEach(el => observer.observe(el));
    
    return () => elements.forEach(el => observer.unobserve(el));
  }, [animated]);

  if (!animated) {
    return <div className={`${className}`}>{text}</div>;
  }

  return (
    <div ref={containerRef} className={`inline-flex ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className={`inline-block ${char === ' ' ? 'w-2' : ''} chalk-animated`}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default ChalkText;