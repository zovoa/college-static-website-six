import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ChalkText from '../ui/ChalkText';
import DrawingCanvas from '../ui/DrawingCanvas';
import { BookOpen, Award, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-chalk-neon" />,
      title: 'Modern Curriculum',
      description: 'Innovative teaching methods combined with traditional excellence.',
    },
    {
      icon: <Award className="h-8 w-8 text-chalk-blue" />,
      title: 'Expert Educators',
      description: 'Learn from industry professionals and experienced teachers.',
    },
    {
      icon: <Users className="h-8 w-8 text-chalk-pink" />,
      title: 'Small Class Sizes',
      description: 'Personalized attention in an interactive environment.',
    },
    {
      icon: <Globe className="h-8 w-8 text-chalk-yellow" />,
      title: 'Global Perspective',
      description: 'Preparing students for success in an interconnected world.',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ChalkText
            text="About Our Academy"
            className="text-3xl md:text-4xl font-chalk mb-6"
            animated
          />
          <p className="text-chalk-white opacity-80 max-w-3xl mx-auto">
            Digital Academy is revolutionizing education through immersive learning experiences.
            Our innovative approach combines traditional teaching methods with cutting-edge
            technology to create an engaging and effective educational environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div ref={ref}>
            <motion.div
              className="blackboard-panel p-8 rounded-lg relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-lg border border-chalk-white border-opacity-20 hover:border-opacity-40 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="mb-3">{feature.icon}</div>
                    <h3 className="font-chalk text-lg mb-2 text-chalk-white">{feature.title}</h3>
                    <p className="text-chalk-white opacity-70 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <ChalkText
              text="Try Our Interactive Board"
              className="text-xl font-chalk mb-4"
              animated
            />
            <DrawingCanvas 
              width={320} 
              height={240} 
              className="w-full max-w-md shadow-lg mb-4" 
            />
            <p className="text-center text-chalk-white opacity-70 mt-3 text-sm">
              Leave your mark on our digital blackboard!
              <br />
              Draw anything you'd like and erase when done.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;