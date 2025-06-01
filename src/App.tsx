import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Subjects from './components/sections/Subjects';
import Events from './components/sections/Events';
import Contact from './components/sections/Contact';
import './styles/globals.css';

function App() {
 return (
  <BrowserRouter basename="/college-static-website-six">
    <Layout>
      <Hero />
      <About />
      <Subjects />
      <Events />
      <Contact />
    </Layout>
  </BrowserRouter>
);
}

export default App;