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
import { useTheme } from './src/hooks/useTheme';

const App = () => {
  useLenis();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative overflow-x-hidden min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Scene theme={theme} />
      <div className="relative z-10">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero theme={theme} />
          <About theme={theme} />
          <Services theme={theme} />
          <Skills theme={theme} />
          <Projects theme={theme} />
          <Contact theme={theme} />
        </main>
        <Footer theme={theme} />
      </div>
    </div>
  );
};

export default App;
