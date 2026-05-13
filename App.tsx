import React from 'react';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Services from './src/components/Services';
import Skills from './src/components/Skills';
import Projects from './src/components/Projects';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';
import AnimatedBackground from './src/components/AnimatedBackground';

const App: React.FC = () => {
  return (
    <div style={{ background: '#0d0f14', color: '#f1f5f9', fontFamily: 'Inter, sans-serif', position: 'relative', overflowX: 'hidden', minHeight: '100vh' }}>
      {/* Fond étoilé */}
      <AnimatedBackground />

      {/* Contenu principal */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;