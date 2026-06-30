import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'about', label: 'À Propos' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = ['hero', 'about', 'services', 'skills', 'projects', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0d0f14]/85 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          <motion.button onClick={() => scrollTo('hero')} whileHover={{ scale: 1.02 }} className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4ade80] to-[#22d3ee] flex items-center justify-center text-[0.8rem] font-extrabold text-[#0d0f14] font-display">RN</div>
            <span className="font-display font-bold text-base text-white tracking-tight">Rodrigue<span className="text-[#4ade80]">.</span></span>
          </motion.button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <motion.button key={link.id} onClick={() => scrollTo(link.id)} whileHover={{ y: -1 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive ? 'bg-white/[0.08] text-white font-semibold' : 'text-white/55 hover:text-white'}`}>
                  {link.label}
                </motion.button>
              );
            })}
          </nav>

          <motion.button onClick={() => setIsMenuOpen(!isMenuOpen)} whileTap={{ scale: 0.95 }}
            className="md:hidden w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/70">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (<><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>) : (<><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" /></>)}
            </svg>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0d0f14]/97 backdrop-blur-xl border-t border-white/[0.06] px-6 py-4">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.id;
              return (
                <motion.button key={link.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-[#4ade80]/10 text-[#4ade80] font-semibold' : 'text-white/65 hover:text-white'}`}>
                  {link.label}
                </motion.button>
              );
            })}
            <div className="mt-3 pt-3 border-t border-white/[0.06]">
              <a href="https://www.canva.com/design/DAGyrVVfur8/6VgU25AyyjxvB55KPsyV1Q/view" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#4ade80] text-[#0d0f14] font-bold text-sm uppercase tracking-wider w-full">
                Télécharger CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
