import { motion } from 'framer-motion';
import type { Theme } from '../../hooks/useTheme';

const floatingTags = [
  { label: 'React', top: '18%', left: '6%', delay: 0 },
  { label: 'TypeScript', top: '58%', left: '3%', delay: 1 },
  { label: 'Flutter', top: '76%', left: '8%', delay: 0.5 },
  { label: 'Next.js', top: '12%', right: '7%', delay: 0.3 },
  { label: 'Node.js', top: '60%', right: '3%', delay: 1.5 },
  { label: 'PHP', top: '74%', right: '9%', delay: 0.8 },
  { label: 'Figma', top: '30%', left: '2%', delay: 2 },
  { label: 'Elementor', top: '24%', right: '2%', delay: 1.2 },
  { label: 'WordPress', top: '40%', right: '2%', delay: 1.3 },
  { label: 'Tailwind', top: '43%', left: '2%', delay: 1.4 },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } } };

interface HeroProps { theme: Theme; }

export default function Hero({ theme }: HeroProps) {
  const isDark = theme === 'dark';
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const tagClass = isDark
    ? 'bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm text-white/60'
    : 'bg-white/80 border border-slate-200 backdrop-blur-sm text-slate-500 shadow-sm';

  const subtitleClass = isDark ? 'text-white/55' : 'text-slate-500';
  const strongClass = isDark ? 'text-white/85' : 'text-slate-800';
  const scrollHintClass = isDark ? 'text-white/30 hover:text-white/70' : 'text-slate-400 hover:text-slate-600';

  const cvBtnClass = isDark
    ? 'bg-white/[0.06] text-white border border-white/[0.12] hover:bg-white/[0.1]'
    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-sm';

  const socialBtnBase = isDark
    ? 'bg-white/[0.05] border-white/[0.1] text-white/50'
    : 'bg-white border-slate-200 text-slate-400 shadow-sm';

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-16">
      {floatingTags.map((tag, i) => (
        <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.6, scale: 1, y: [0, -15, 0] }}
          transition={{ duration: 0.5, delay: tag.delay + 1, y: { duration: 4, repeat: Infinity } }}
          className={`absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs ${tagClass}`}
          style={{ top: tag.top, left: tag.left, right: tag.right }} whileHover={{ scale: 1.1, opacity: 1 }}>
          <span className="text-[#16a34a]/70 font-semibold">+</span>{tag.label}
        </motion.div>
      ))}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.06)_0%,transparent_70%)] pointer-events-none" />

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div variants={itemVariants}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8 ${isDark ? 'bg-[#4ade80]/10 border border-[#4ade80]/20 text-white/75' : 'bg-[#16a34a]/8 border border-[#16a34a]/20 text-slate-600'}`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]"></span>
          </span>
          Disponible — Freelance & Contrat
        </motion.div>

        <motion.h1 variants={itemVariants}
          className={`font-display font-extrabold text-[clamp(3rem,10vw,7rem)] leading-[0.95] tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
          N'GUESSAN
        </motion.h1>
        <motion.h1 variants={itemVariants}
          className="font-display font-extrabold text-[clamp(3rem,10vw,7rem)] leading-[0.95] tracking-tighter bg-gradient-to-r from-[#16a34a] via-[#0ea5e9] to-[#6366f1] bg-clip-text text-transparent">
          Rodrigue
        </motion.h1>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 my-6">
          <div className={`w-10 h-px ${isDark ? 'bg-white/15' : 'bg-slate-300'}`} />
          <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
          <div className={`w-10 h-px ${isDark ? 'bg-white/15' : 'bg-slate-300'}`} />
        </motion.div>

        <motion.p variants={itemVariants} className={`text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-10 ${subtitleClass}`}>
          Je conçois des applications <strong className={`font-semibold ${strongClass}`}>web & mobile</strong> sur mesure - modernes, performantes et pensées pour vos utilisateurs.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <motion.button whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#4ade80] text-[#0d0f14] font-bold text-sm uppercase tracking-wider transition-all hover:bg-[#86efac] hover:shadow-[0_8px_24px_rgba(74,222,128,0.35)]">
            Découvrir mes projets
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </motion.button>
          <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} href="https://www.canva.com/design/DAGyrVVfur8/6VgU25AyyjxvB55KPsyV1Q/view" target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm transition-all ${cvBtnClass}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Télécharger mon CV
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-4">
          {[
            { href: 'https://github.com/nkgr01', label: 'GitHub', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> },
            { href: 'https://www.linkedin.com/in/rodrigue-n-guessan/', label: 'LinkedIn', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
            { href: 'mailto:kouameguyrodriguen@gmail.com', label: 'Email', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
          ].map(({ href, icon, label }) => (
            <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              whileHover={{ y: -3, backgroundColor: 'rgba(74, 222, 128, 0.1)', borderColor: 'rgba(74, 222, 128, 0.3)', color: '#4ade80' }}
              className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all ${socialBtnBase}`}>{icon}</motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.5 }} onClick={() => scrollToSection('about')}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer transition-colors ${scrollHintClass}`}>
        <span className="text-[0.65rem] uppercase tracking-[0.2em]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
