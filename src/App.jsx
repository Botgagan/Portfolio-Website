import React, { useRef } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
import Testimonial from './sections/Testimonial';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar refs={{ heroRef, aboutRef, projectsRef, contactRef }} />
      
      <section ref={heroRef}><Hero /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={projectsRef}><Projects /></section>
      
      {/* These stay as part of the continuous scroll */}
      <Experiences />
      <Testimonial />

      <section ref={contactRef}><Contact /></section>
      <Footer />
    </div>
  );
};

export default App;

