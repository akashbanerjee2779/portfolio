import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollAnimation from './components/ScrollAnimation';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="App">
      <ScrollAnimation />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Chatbot />
    </div>
  );
}

export default App;