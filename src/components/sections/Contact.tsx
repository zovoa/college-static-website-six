import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ChalkText from '../ui/ChalkText';
import ChalkButton from '../ui/ChalkButton';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import useSound from 'use-sound';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [playHover] = useSound('/sounds/chalk-hover.mp3', { volume: 0.5 });
  const [playClick] = useSound('/sounds/chalk-click.mp3', { volume: 0.5 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 blackboard-panel opacity-40 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <ChalkText
            text="Contact Us"
            className="text-3xl md:text-4xl font-chalk mb-6"
            animated
          />
          <p className="text-chalk-white opacity-80 max-w-3xl mx-auto">
            Have questions about our programs or want to schedule a visit?
            Reach out to us using the form below or through our contact information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="blackboard-panel p-8 rounded-lg">
              <h3 className="font-chalk text-2xl mb-6 text-chalk-white">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-chalk-white opacity-80 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="chalk-input w-full bg-transparent border-2 border-chalk-white border-opacity-50 rounded-md p-3 text-chalk-white"
                    onMouseEnter={() => playHover()}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-chalk-white opacity-80 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="chalk-input w-full bg-transparent border-2 border-chalk-white border-opacity-50 rounded-md p-3 text-chalk-white"
                    onMouseEnter={() => playHover()}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-chalk-white opacity-80 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="chalk-input w-full bg-transparent border-2 border-chalk-white border-opacity-50 rounded-md p-3 text-chalk-white"
                    onMouseEnter={() => playHover()}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-chalk-white opacity-80 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="chalk-input w-full bg-transparent border-2 border-chalk-white border-opacity-50 rounded-md p-3 text-chalk-white"
                    onMouseEnter={() => playHover()}
                  ></textarea>
                </div>
                
                <ChalkButton 
                  type="submit" 
                  variant="primary" 
                  className="w-full"
                  icon={<Send className="h-5 w-5" />}
                >
                  Send Message
                </ChalkButton>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="blackboard-panel p-8 rounded-lg">
                <h3 className="font-chalk text-2xl mb-6 text-chalk-white">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blackboard-surface p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4 text-chalk-neon">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-chalk text-lg text-chalk-white mb-1">Our Location</h4>
                      <p className="text-chalk-white opacity-70">
                        123 Education Street<br />
                        Learning City, LC 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blackboard-surface p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4 text-chalk-blue">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-chalk text-lg text-chalk-white mb-1">Email Us</h4>
                      <p className="text-chalk-white opacity-70">
                        <a href="mailto:info@digitalacademy.edu" className="hover:text-chalk-neon transition-colors duration-300">
                          info@digitalacademy.edu
                        </a><br />
                        <a href="mailto:admissions@digitalacademy.edu" className="hover:text-chalk-neon transition-colors duration-300">
                          admissions@digitalacademy.edu
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blackboard-surface p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4 text-chalk-pink">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-chalk text-lg text-chalk-white mb-1">Call Us</h4>
                      <p className="text-chalk-white opacity-70">
                        <a href="tel:+1234567890" className="hover:text-chalk-neon transition-colors duration-300">
                          (123) 456-7890
                        </a><br />
                        <a href="tel:+1987654321" className="hover:text-chalk-neon transition-colors duration-300">
                          (987) 654-3210
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="blackboard-panel p-8 rounded-lg">
                <h3 className="font-chalk text-2xl mb-6 text-chalk-white">School Hours</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-chalk-white">Monday - Friday:</span>
                    <span className="font-chalk text-chalk-neon">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-chalk-white">Saturday:</span>
                    <span className="font-chalk text-chalk-neon">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-chalk-white">Sunday:</span>
                    <span className="font-chalk text-chalk-white">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;