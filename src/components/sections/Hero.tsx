import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import ChalkText from '../ui/ChalkText';
import ChalkButton from '../ui/ChalkButton';
import { ArrowDown } from 'lucide-react';
import FloatingObjects from '../3d/FloatingObjects';

const Hero: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExplore = () => {
    document.getElementById('subjects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVirtualTour = () => {
    // Virtual tour logic here
    alert('Virtual tour coming soon!');
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 50 }}
          dpr={[1, 2]}
          style={{ 
            background: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={1}
          >
            <FloatingObjects />
          </Float>
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ChalkText
            text="Digital Academy"
            className="text-4xl md:text-6xl lg:text-7xl font-chalk text-chalk-white mb-4"
            animated
            delay={0.3}
          />
          
          <ChalkText
            text="Where Education Meets Innovation"
            className="text-xl md:text-2xl font-chalk text-chalk-neon mb-8"
            animated
            delay={1.2}
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 2, duration: 1 }}
            className="max-w-2xl mx-auto text-chalk-white text-lg mb-12"
          >
            Experience learning in a whole new dimension with our immersive
            digital classroom environment. Explore subjects through interactive
            3D elements and engaging content.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <ChalkButton 
              variant="primary" 
              className="min-w-40"
              onClick={handleExplore}
            >
              Explore Courses
            </ChalkButton>
            <ChalkButton 
              variant="outline" 
              className="min-w-40"
              onClick={handleVirtualTour}
            >
              Virtual Tour
            </ChalkButton>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <button
          onClick={scrollToContent}
          className="text-chalk-white animate-bounce p-2 rounded-full"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </motion.div>
      
      <div ref={scrollRef} />
    </section>
  );
};

export default Hero;