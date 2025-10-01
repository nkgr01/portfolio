import React from 'react';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import Interests from './src/components/Interests';
import About from './src/components/About';
import Projects from './src/components/Projects';
import Skills from './src/components/Skills';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';
import AnimatedSection from './src/components/AnimatedSection';

const App: React.FC = () => {
  return (
    <div className="bg-navy text-light-slate font-sans">
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Interests />
        </AnimatedSection>
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default App;