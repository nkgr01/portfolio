import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-navy/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div 
          onClick={() => scrollToSection('hero')}
          className="text-green text-2xl font-bold font-mono cursor-pointer hover:text-green/80 transition-colors">
          <u>Mon profil</u>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-lightest-slate hover:text-green transition-colors duration-300">
              <span className="text-green font-mono">0{index + 1}.</span> {link.name}
            </button>
          ))}
          <a href="https://www.canva.com/design/DAGyrVVfur8/6VgU25AyyjxvB55KPsyV1Q/view" target="_blank" rel="#" className="border border-green text-green px-4 py-2 rounded hover:bg-green/10 transition-colors duration-300 font-mono">
            Voir mon CV
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-green focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-light-navy">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link, index) => (
                <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-lightest-slate hover:text-green transition-colors duration-300 w-full text-center py-2">
                <span className="text-green font-mono">0{index + 1}.</span> {link.name}
                </button>
            ))}
            <a href="https://www.canva.com/design/DAGyrVVfur8/6VgU25AyyjxvB55KPsyV1Q/view" target="_blank" rel="noopener noreferrer" className="border border-green text-green px-6 py-2 rounded hover:bg-green/10 transition-colors duration-300 font-mono">
                Voir mon CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;