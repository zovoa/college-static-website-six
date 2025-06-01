import React from 'react';
import { motion } from 'framer-motion';
import ChalkText from '../ui/ChalkText';
import { Book, Code, FlaskRound as Flask, Calculator, PenTool, Music, Microscope, Globe } from 'lucide-react';
import ChalkButton from '../ui/ChalkButton';
import { SubjectCard } from '../../types';

const subjects: SubjectCard[] = [
  {
    id: 1,
    title: 'Mathematics',
    description: 'Explore numbers, patterns, and problem-solving through interactive visualizations.',
    icon: 'Calculator',
    modelType: 'calculator',
  },
  {
    id: 2,
    title: 'Computer Science',
    description: 'Learn programming, algorithms, and digital literacy with hands-on projects.',
    icon: 'Code',
    modelType: 'computer',
  },
  {
    id: 3,
    title: 'Science',
    description: 'Discover the natural world through experiments and 3D molecular models.',
    icon: 'Flask',
    modelType: 'molecule',
  },
  {
    id: 4,
    title: 'Literature',
    description: 'Analyze classic and contemporary texts, developing critical reading skills.',
    icon: 'Book',
    modelType: 'book',
  },
  {
    id: 5,
    title: 'Art & Design',
    description: 'Express creativity through digital and traditional mediums and techniques.',
    icon: 'PenTool',
    modelType: 'palette',
  },
  {
    id: 6,
    title: 'Music',
    description: 'Explore rhythm, harmony, and composition through interactive audio experiences.',
    icon: 'Music',
    modelType: 'note',
  },
  {
    id: 7,
    title: 'Biology',
    description: 'Study living organisms with detailed 3D models of cells and systems.',
    icon: 'Microscope',
    modelType: 'dna',
  },
  {
    id: 8,
    title: 'Geography',
    description: 'Explore our planet with interactive maps and 3D geographical features.',
    icon: 'Globe',
    modelType: 'globe',
  },
];

const iconMap: Record<string, React.ReactNode> = {
  Calculator: <Calculator className="h-8 w-8" />,
  Code: <Code className="h-8 w-8" />,
  Flask: <Flask className="h-8 w-8" />,
  Book: <Book className="h-8 w-8" />,
  PenTool: <PenTool className="h-8 w-8" />,
  Music: <Music className="h-8 w-8" />,
  Microscope: <Microscope className="h-8 w-8" />,
  Globe: <Globe className="h-8 w-8" />,
};

const Subjects: React.FC = () => {
  const handleExploreCourse = (subjectId: number) => {
    // Course exploration logic here
    alert(`Exploring course ${subjectId} - Coming soon!`);
  };

  const handleViewAllSubjects = () => {
    // View all subjects logic here
    alert('View all subjects - Coming soon!');
  };

  return (
    <section id="subjects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 blackboard-panel opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <ChalkText
            text="Our Subjects"
            className="text-3xl md:text-4xl font-chalk mb-6"
            animated
          />
          <p className="text-chalk-white opacity-80 max-w-3xl mx-auto">
            Explore our diverse range of subjects taught using innovative 3D visualization
            techniques and interactive learning experiences. Each course is designed to
            engage students through multiple learning styles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="blackboard-panel h-full p-6 rounded-lg border border-chalk-white border-opacity-10 hover:border-opacity-30 transition-all duration-300 flex flex-col">
                <div className="bg-blackboard-surface p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto text-chalk-neon">
                  {iconMap[subject.icon]}
                </div>
                
                <h3 className="font-chalk text-xl text-center mb-3 text-chalk-white">{subject.title}</h3>
                
                <p className="text-chalk-white opacity-70 text-sm flex-grow mb-4">
                  {subject.description}
                </p>
                
                <ChalkButton 
                  variant="outline" 
                  className="mt-auto text-sm py-1.5 w-full"
                  onClick={() => handleExploreCourse(subject.id)}
                >
                  Explore Course
                </ChalkButton>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ChalkButton 
            variant="primary" 
            className="mx-auto"
            onClick={handleViewAllSubjects}
          >
            View All Subjects
          </ChalkButton>
        </div>
      </div>
    </section>
  );
};

export default Subjects;