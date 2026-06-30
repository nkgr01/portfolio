import { Scene } from './src/components/3d/Scene';
import Header from './src/components/sections/Header';
import Hero from './src/components/sections/Hero';
import About from './src/components/sections/About';
import Services from './src/components/sections/Services';
import Skills from './src/components/sections/Skills';
import Projects from './src/components/sections/Projects';
import Contact from './src/components/sections/Contact';
import Footer from './src/components/sections/Footer';
import { useLenis } from './src/hooks/useLenis';

const App = () => {
  useLenis();

  return (
    <div className="bg-[#0d0f14] text-white font-sans relative overflow-x-hidden min-h-screen">
      <Scene />
      <div className="relative z-10">
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
