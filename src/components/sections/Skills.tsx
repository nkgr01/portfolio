import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionLabel } from '../ui/SectionLabel';
import { GlassCard } from '../ui/GlassCard';
import { getCloudinaryUrl } from '../../utils/cloudinary';
import type { Theme } from '../../hooks/useTheme';

const tabs = ['Frontend', 'Backend', 'CMS & Outils', 'Mobile'] as const;

const skillsData: Record<typeof tabs[number], { name: string; level: number; img: string; color: string }[]> = {
  Frontend: [
    { name: 'HTML & CSS', level: 100, img: getCloudinaryUrl('css_tu3umt'), color: '#e34f26' },
    { name: 'Tailwind CSS', level: 80, img: getCloudinaryUrl('tailwind_upsplv'), color: '#38bdf8' },
    { name: 'JavaScript ES6+', level: 60, img: getCloudinaryUrl('js_ptillk'), color: '#f59e0b' },
    { name: 'TypeScript', level: 50, img: getCloudinaryUrl('ts_iza9cl'), color: '#3178c6' },
    { name: 'React', level: 50, img: getCloudinaryUrl('react_fbkagi'), color: '#61dafb' },
    { name: 'Next.js', level: 45, img: getCloudinaryUrl('next_y9oaw0'), color: '#0f172a' },
  ],
  Backend: [
    { name: 'Node.js', level: 60, img: getCloudinaryUrl('node_rnrcpn'), color: '#8cc84b' },
    { name: 'PHP', level: 55, img: getCloudinaryUrl('php_ajb5sf'), color: '#8993be' },
    { name: 'MySQL', level: 50, img: getCloudinaryUrl('mysql_tstemj'), color: '#4479a1' },
    { name: 'MongoDB', level: 45, img: getCloudinaryUrl('node_rnrcpn'), color: '#13aa52' },
  ],
  'CMS & Outils': [
    { name: 'WordPress', level: 80, img: getCloudinaryUrl('wordpress_pqq0lr'), color: '#21759b' },
    { name: 'Figma', level: 60, img: getCloudinaryUrl('figma_znuajd'), color: '#f24e1e' },
    { name: 'Git', level: 60, img: getCloudinaryUrl('git_nnsztz'), color: '#f05032' },
    { name: 'Elementor', level: 90, img: getCloudinaryUrl('wordpress_pqq0lr'), color: '#92003b' },
  ],
  Mobile: [
    { name: 'WinDev Mobile', level: 65, img: getCloudinaryUrl('react_fbkagi'), color: '#0077b6' },
    { name: 'Flutter (bases)', level: 40, img: getCloudinaryUrl('react_fbkagi'), color: '#54c5f8' },
  ],
};

function LevelDots({ level, color }: { level: number; color: string }) {
  const filled = Math.round(level / 20);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="w-1.5 h-1.5 rounded-full transition-all" style={{ background: i <= filled ? color : 'rgba(100,116,139,0.2)' }} />
      ))}
    </div>
  );
}

interface SkillsProps { theme: Theme; }

export default function Skills({ theme }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('Frontend');
  const current = skillsData[activeTab];
  const isDark = theme === 'dark';

  const headingClass = isDark ? 'text-white' : 'text-slate-900';
  const skillNameClass = isDark ? 'text-white' : 'text-slate-800';
  const levelPctClass = isDark ? 'text-white/50' : 'text-slate-400';
  const barBgClass = isDark ? 'bg-white/[0.06]' : 'bg-slate-100';

  const tabActive = isDark
    ? 'bg-[#4ade80]/10 border border-[#4ade80]/30 text-[#4ade80]'
    : 'bg-[#16a34a]/10 border border-[#16a34a]/30 text-[#16a34a]';
  const tabInactive = isDark
    ? 'bg-transparent border border-white/[0.08] text-white/45 hover:text-white/70'
    : 'bg-transparent border border-slate-200 text-slate-400 hover:text-slate-700';

  return (
    <section id="skills" className="relative py-28 px-6 max-w-6xl mx-auto">
      <AnimatedSection className="mb-12">
        <SectionLabel theme={theme}>COMPÉTENCES</SectionLabel>
        <h2 className={`font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mt-4 ${headingClass}`}>
          Mes outils &{' '}<span className="bg-gradient-to-r from-[#16a34a] to-[#0ea5e9] bg-clip-text text-transparent">technologies</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="flex flex-wrap gap-2 mb-10">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <motion.button key={tab} onClick={() => setActiveTab(tab)} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${isActive ? tabActive : tabInactive}`}>
              {tab}
            </motion.button>
          );
        })}
      </AnimatedSection>

      <AnimatePresence mode="wait">
        <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {current.map((skill, i) => (
            <GlassCard key={skill.name} theme={theme} glowColor={`${skill.color}18`} className="p-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border overflow-hidden" style={{ background: `${skill.color}12`, borderColor: `${skill.color}30` }}>
                <img src={skill.img} alt={skill.name} className="w-8 h-8 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
              <div className={`font-display font-semibold text-sm mb-2 ${skillNameClass}`}>{skill.name}</div>
              <div className="flex items-center justify-between mb-3">
                <LevelDots level={skill.level} color={skill.color} />
                <span className={`text-xs font-mono ${levelPctClass}`}>{skill.level}%</span>
              </div>
              <div className={`w-full h-1 rounded-full overflow-hidden ${barBgClass}`}>
                <motion.div initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 0.8, delay: i * 0.05 }}
                  className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }} />
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
