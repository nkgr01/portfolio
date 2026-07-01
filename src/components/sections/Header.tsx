import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Theme } from '../../hooks/useTheme';

const navLinks = [
  { id: 'about', label: 'À Propos' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
];

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const isDark = theme === 'dark';

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

  const headerBg = isScrolled
    ? isDark
      ? 'bg-[#0d0f14]/90 backdrop-blur-xl border-b border-white/[0.06]'
      : 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm'
    : 'bg-transparent border-b border-transparent';

  const navTextClass = (isActive: boolean) => {
    if (isActive) return isDark ? 'bg-white/[0.08] text-white font-semibold' : 'bg-slate-100 text-slate-900 font-semibold';
    return isDark ? 'text-white/55 hover:text-white' : 'text-slate-500 hover:text-slate-900';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          <motion.button onClick={() => scrollTo('hero')} whileHover={{ scale: 1.02 }} className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4ade80] to-[#22d3ee] flex items-center justify-center text-[0.8rem] font-extrabold text-[#0d0f14] font-display">RN</div>
            <span className={`font-display font-bold text-base tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Rodrigue<span className="text-[#16a34a]">.</span>
            </span>
          </motion.button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <motion.button key={link.id} onClick={() => scrollTo(link.id)} whileHover={{ y: -1 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${navTextClass(isActive)}`}>
                  {link.label}
                </motion.button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isDark ? 'bg-white/[0.06] border border-white/[0.1] text-amber-300 hover:bg-white/[0.1]' : 'bg-slate-100 border border-slate-200 text-slate-600 hover:bg-slate-200'}`}
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </motion.button>

            <motion.button onClick={() => setIsMenuOpen(!isMenuOpen)} whileTap={{ scale: 0.95 }}
              className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-all ${isDark ? 'bg-white/[0.06] border border-white/[0.1] text-white/70' : 'bg-slate-100 border border-slate-200 text-slate-600'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMenuOpen ? (<><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>) : (<><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" /></>)}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}
            className={`md:hidden backdrop-blur-xl border-t px-6 py-4 ${isDark ? 'bg-[#0d0f14]/97 border-white/[0.06]' : 'bg-white/97 border-slate-100'}`}>
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.id;
              return (
                <motion.button key={link.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                    ? isDark ? 'bg-[#4ade80]/10 text-[#4ade80] font-semibold' : 'bg-[#16a34a]/10 text-[#16a34a] font-semibold'
                    : isDark ? 'text-white/65 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                  {link.label}
                </motion.button>
              );
            })}
            <div className="mt-3 pt-3 border-t" style={{ borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.08)' }}>
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
