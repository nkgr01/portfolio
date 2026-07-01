import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionLabel } from '../ui/SectionLabel';
import type { Theme } from '../../hooks/useTheme';

const services = [
  { num: '01', label: 'Sites & Applications', title: 'Développement Web', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, color: '#60a5fa', desc: "Je crée des sites web et applications modernes, rapides et optimisés pour le référencement. Chaque projet est conçu pour convertir vos visiteurs en clients.", features: ['Sites vitrines premium', 'Applications SaaS', 'E-commerce performant', 'Progressive Web Apps'], tags: ['React', 'Next.js', 'PHP', 'Wordpress'] },
  { num: '02', label: 'iOS & Android', title: 'Applications Mobile', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>, color: '#16a34a', desc: "Des applications mobiles et cross-platform qui offrent une expérience utilisateur fluide et performante sur tous les appareils.", features: ['Apps iOS & Android', 'Design natif', 'Notifications push', 'Mode hors-ligne'], tags: ['Flutter'] },
  { num: '03', label: 'Design & Prototypage', title: 'UI/UX Design', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>, color: '#e879f9', desc: "Des interfaces intuitives et esthétiques qui placent l'utilisateur au centre. Du wireframe au prototype interactif, chaque pixel compte.", features: ['Design System complet', 'Prototypage Figma', 'Tests utilisateurs', 'Responsive Design'], tags: ['Figma', 'Adobe XD', 'Tailwind'] },
  { num: '04', label: 'Backend & Services', title: 'Intégration API', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, color: '#fb923c', desc: "Connexion et intégration d'APIs tierces, création d'APIs REST robustes, gestion de bases de données et services cloud.", features: ['API REST', 'Authentification JWT', 'Bases de données MySQL', 'Express.js'], tags: ['Node.js', 'Express', 'MySQL', 'PRISMA'] },
];

interface ServicesProps { theme: Theme; }

export default function Services({ theme }: ServicesProps) {
  const [active, setActive] = useState(0);
  const s = services[active];
  const isDark = theme === 'dark';

  const headingClass = isDark ? 'text-white' : 'text-slate-900';
  const subtitleClass = isDark ? 'text-white/45' : 'text-slate-500';

  const btnInactive = isDark
    ? 'border-transparent hover:bg-white/[0.02]'
    : 'border-transparent hover:bg-slate-50';

  const btnActive = isDark
    ? 'bg-white/[0.04] border border-white/[0.1]'
    : 'bg-white border border-slate-200 shadow-sm';

  const numClass = isDark ? 'text-white/30' : 'text-slate-400';
  const titleClass = (isActive: boolean) => isActive
    ? (isDark ? 'text-white' : 'text-slate-900')
    : (isDark ? 'text-white/60' : 'text-slate-500');
  const smallLabelClass = isDark ? 'text-white/30' : 'text-slate-400';

  const panelClass = isDark
    ? 'bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8'
    : 'bg-white border border-slate-200 rounded-2xl p-8 shadow-md';

  const descClass = isDark ? 'text-white/60' : 'text-slate-600';
  const featureClass = isDark ? 'text-white/70' : 'text-slate-700';
  const tagClass = isDark
    ? 'bg-white/[0.05] border border-white/[0.08] text-white/50'
    : 'bg-slate-100 border border-slate-200 text-slate-500';

  return (
    <section id="services" className="relative py-28 px-6 max-w-6xl mx-auto">
      <AnimatedSection className="mb-16">
        <SectionLabel theme={theme}>SERVICES</SectionLabel>
        <h2 className={`font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mt-4 ${headingClass}`}>
          Ce que je peux faire{' '}<span className="bg-gradient-to-r from-[#16a34a] to-[#0ea5e9] bg-clip-text text-transparent">pour vous</span>
        </h2>
        <p className={`text-sm mt-4 max-w-md ${subtitleClass}`}>Des solutions complètes, de l'idée au déploiement — toujours orientées résultat.</p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">
        <div className="flex flex-col gap-1.5">
          {services.map((svc, i) => {
            const isActive = i === active;
            return (
              <motion.button key={i} onClick={() => setActive(i)} whileHover={{ x: 4 }}
                className={`w-full text-left p-4 rounded-xl transition-all ${isActive ? `${btnActive} border-l-[3px]` : btnInactive}`}
                style={{ borderLeftColor: isActive ? svc.color : 'transparent' }}>
                <div className="flex items-center gap-4">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isActive ? 'border' : isDark ? 'bg-white/[0.04] border border-white/[0.08]' : 'bg-slate-100 border border-slate-200'}`}
                    style={{ background: isActive ? `${svc.color}15` : undefined, borderColor: isActive ? `${svc.color}40` : undefined, color: isActive ? svc.color : isDark ? 'rgba(255,255,255,0.4)' : '#64748b' }}>
                    {svc.icon}
                  </div>
                  <div>
                    <div className={`text-[0.68rem] font-mono ${numClass}`}>{svc.num}</div>
                    <div className={`font-display font-semibold text-sm transition-colors ${titleClass(isActive)}`}>{svc.title}</div>
                    <div className={`text-xs mt-0.5 ${smallLabelClass}`}>{svc.label}</div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        <AnimatedSection delay={0.2}>
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
              style={{ borderTop: `2px solid ${s.color}` }} className={panelClass}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center border" style={{ background: `${s.color}12`, borderColor: `${s.color}30`, color: s.color }}>{s.icon}</div>
                <div>
                  <h3 className={`font-display font-bold text-xl ${isDark ? 'text-white' : 'text-slate-900'}`}>{s.title}</h3>
                  <div className={`text-xs mt-1 ${smallLabelClass}`}>{s.label}</div>
                </div>
              </div>
              <p className={`leading-relaxed text-sm mb-6 ${descClass}`}>{s.desc}</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {s.features.map((f, i) => (
                  <div key={i} className={`flex items-center gap-2 text-sm ${featureClass}`}>
                    <span style={{ color: s.color }}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>
                    {f}
                  </div>
                ))}
              </div>
              <div className={`flex flex-wrap items-center justify-between gap-4 pt-5 border-t ${isDark ? 'border-white/[0.07]' : 'border-slate-100'}`}>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t, i) => (<span key={i} className={`px-3 py-1 rounded-md text-[0.72rem] font-mono uppercase tracking-wide ${tagClass}`}>{t}</span>))}
                </div>
                <motion.button whileHover={{ x: 4 }} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm font-semibold flex items-center gap-2 transition-all" style={{ color: s.color }}>Discuter du projet →</motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </section>
  );
}
