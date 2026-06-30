import { motion } from 'framer-motion';

const navLinks = [
  { id: 'about', label: 'À Propos' }, { id: 'services', label: 'Services' }, { id: 'skills', label: 'Compétences' }, { id: 'projects', label: 'Projets' }, { id: 'contact', label: 'Contact' },
];

const socials = [
  { href: 'https://github.com/nkgr01', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/rodrigue-n-guessan/', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>, label: 'LinkedIn' },
  { href: 'mailto:kouameguyrodriguen@gmail.com', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="noone" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>, label: 'Email' },
];

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-white/[0.06] py-12 px-6 bg-[#0d0f14]/80">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <motion.button onClick={() => scrollTo('hero')} whileHover={{ scale: 1.02 }} className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4ade80] to-[#22d3ee] flex items-center justify-center text-[0.72rem] font-extrabold text-[#0d0f14] font-display">RN</div>
            <span className="font-display font-bold text-sm text-white tracking-tight">Rodrigue<span className="text-[#4ade80]">.</span></span>
          </motion.button>
          <nav className="flex flex-wrap gap-2 justify-center">
            {navLinks.map((link) => (
              <motion.button key={link.id} onClick={() => scrollTo(link.id)} whileHover={{ y: -1 }}
                className="px-3 py-1.5 rounded-md text-xs text-white/40 hover:text-white transition-colors">{link.label}</motion.button>
            ))}
          </nav>
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                whileHover={{ y: -2, backgroundColor: 'rgba(74, 222, 128, 0.1)', borderColor: 'rgba(74, 222, 128, 0.3)', color: '#4ade80' }}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/[0.05] border border-white/[0.08] text-white/40 transition-all">{s.icon}</motion.a>
            ))}
          </div>
        </div>
        <div className="h-px bg-white/[0.06] mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25 font-mono">
          <p>© {new Date().getFullYear()} N'GUESSAN Rodrigue. Tous droits réservés.</p>
          <p className="text-white/20">Conçu & développé avec React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
