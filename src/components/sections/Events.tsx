import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ChalkText from '../ui/ChalkText';
import ChalkButton from '../ui/ChalkButton';
import { EventCard } from '../../types';
import { Calendar, ChevronRight, ChevronLeft } from 'lucide-react';

const events: EventCard[] = [
  {
    id: 1,
    title: "Open House Day",
    date: "April 15, 2025",
    description: "Tour our facilities, meet teachers, and experience our innovative learning environment firsthand.",
    badge: "Upcoming"
  },
  {
    id: 2,
    title: "Science Fair Exhibition",
    date: "May 10, 2025",
    description: "Students showcase their research projects and experiments using 3D visualization technology.",
    badge: "Featured"
  },
  {
    id: 3,
    title: "Digital Art Workshop",
    date: "May 25, 2025",
    description: "Learn digital illustration techniques from professional artists in an interactive session.",
    badge: "Workshop"
  },
  {
    id: 4,
    title: "Math Olympiad",
    date: "June 5, 2025",
    description: "Annual mathematics competition with challenging problems and puzzles for all skill levels.",
    badge: "Competition"
  },
  {
    id: 5,
    title: "Parent-Teacher Conference",
    date: "June 15, 2025",
    description: "Discuss student progress and view interactive demonstrations of student projects.",
    badge: "Important"
  },
  {
    id: 6,
    title: "Summer Coding Camp",
    date: "July 10-30, 2025",
    description: "Three-week intensive program teaching programming fundamentals through game development.",
    badge: "Camp"
  }
];

const EventItemCard: React.FC<{ event: EventCard }> = ({ event }) => {
  return (
    <motion.div
      className="blackboard-panel p-6 rounded-lg border border-chalk-white border-opacity-10 hover:border-opacity-30 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center text-chalk-neon">
          <Calendar className="h-5 w-5 mr-2" />
          <span className="font-chalk text-sm">{event.date}</span>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-chalk-white bg-opacity-20 text-chalk-neon">
          {event.badge}
        </span>
      </div>
      
      <h3 className="font-chalk text-xl mb-3 text-chalk-white">{event.title}</h3>
      
      <p className="text-chalk-white opacity-70 text-sm mb-4">
        {event.description}
      </p>
      
      <ChalkButton 
        variant="outline" 
        className="text-sm py-1.5"
        icon={<ChevronRight className="h-4 w-4" />}
      >
        Learn More
      </ChalkButton>
    </motion.div>
  );
};

const Events: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="events" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ChalkText
            text="Upcoming Events"
            className="text-3xl md:text-4xl font-chalk mb-6"
            animated
          />
          <p className="text-chalk-white opacity-80 max-w-3xl mx-auto">
            Join us for these exciting educational events designed to expand knowledge,
            foster community, and showcase student achievements. Mark your calendars!
          </p>
        </div>

        <div ref={ref}>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {events.map((event) => (
              <motion.div key={event.id} variants={itemVariants}>
                <EventItemCard event={event} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <ChalkButton 
            variant="secondary" 
            className="px-4"
            icon={<ChevronLeft className="h-4 w-4" />}
          >
            Previous
          </ChalkButton>
          
          <ChalkButton 
            variant="primary" 
            className="px-4"
            icon={<ChevronRight className="h-4 w-4" />}
          >
            Next
          </ChalkButton>
        </div>
      </div>
    </section>
  );
};

export default Events;