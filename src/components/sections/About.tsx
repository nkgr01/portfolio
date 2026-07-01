import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionLabel } from '../ui/SectionLabel';
import { GlassCard } from '../ui/GlassCard';
import { getCloudinaryUrl } from '../../utils/cloudinary';
import type { Theme } from '../../hooks/useTheme';

const stats = [
  { value: '1 an', label: "D'expérience", sublabel: 'Développement actif' },
  { value: 'Abidjan', label: "Côte d'Ivoire", sublabel: 'Disponible à distance' },
  { value: 'Ouvert', label: 'Freelance', sublabel: 'Contrat & Mission' },
];

const strengths = [
  { title: 'Adaptabilité', desc: "Je m'intègre facilement dans différents contextes et m'ajuste aux situations nouvelles." },
  { title: 'Rigueur', desc: 'Je travaille avec méthode et sérieux, en veillant à produire des résultats fiables.' },
  { title: 'Veille continue', desc: "Passionné par l'apprentissage continu des nouvelles technologies et tendances." },
  { title: 'Créativité', desc: 'Les animés et la lecture nourrissent ma créativité et ma capacité à penser autrement.' },
];

interface AboutProps { theme: Theme; }

export default function About({ theme }: AboutProps) {
  const isDark = theme === 'dark';
  const headingClass = isDark ? 'text-white' : 'text-slate-900';
  const textClass = isDark ? 'text-white/70' : 'text-slate-600';
  const strongClass = isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold';
  const labelClass = isDark ? 'text-white/30' : 'text-slate-400';
  const statValueClass = isDark ? 'text-white' : 'text-slate-900';
  const statLabelClass = isDark ? 'text-white/50' : 'text-slate-500';
  const statSubClass = isDark ? 'text-white/30' : 'text-slate-400';
  const strengthTitleClass = 'text-[#16a34a] dark:text-[#4ade80]';
  const strengthDescClass = isDark ? 'text-white/45' : 'text-slate-500';

  return (
    <section id="about" className="relative py-28 px-6 max-w-6xl mx-auto">
      <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <SectionLabel theme={theme}>À PROPOS DE MOI</SectionLabel>
          <h2 className={`font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mt-4 ${headingClass}`}>
            Développeur passionné<br />
            <span className="bg-gradient-to-r from-[#16a34a] to-[#0ea5e9] bg-clip-text text-transparent">par l'excellence.</span>
          </h2>
        </div>
        <motion.a href="mailto:kouameguyrodriguen@gmail.com" whileHover={{ y: -2 }}
          className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${isDark ? 'bg-white/[0.06] border border-white/[0.12] text-white hover:bg-white/[0.1]' : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'}`}>
          Collaborer avec moi ↗
        </motion.a>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">
        <AnimatedSection delay={0.1}>
          <GlassCard theme={theme} className="relative overflow-hidden">
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-[#4ade80]/30 text-xs text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.8)]" />Disponible
            </div>
            <img src={getCloudinaryUrl('court2_ncur3m.jpg')} alt="Rodrigue N'GUESSAN" className="w-full h-80 object-cover object-top" />
            <div className="bg-gradient-to-t from-[#0d0f14]/95 via-[#0d0f14]/40 to-transparent p-6 pt-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4ade80] to-[#22d3ee] flex items-center justify-center text-[0.6rem] font-extrabold text-[#0d0f14]">RN</div>
                <div>
                  <div className="font-display font-bold text-sm text-white">N'GUESSAN Rodrigue</div>
                  <div className="text-xs text-white/45">Développeur Web & Mobile</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>

        <div className="flex flex-col gap-5">
          <AnimatedSection delay={0.2}>
            <GlassCard theme={theme} hover={false} className="p-7">
              <div className={`text-[0.68rem] font-mono uppercase tracking-[0.15em] mb-4 ${labelClass}`}>MON APPROCHE</div>
              <p className={`leading-relaxed text-sm mb-3 ${textClass}`}>
                Depuis longtemps fasciné par la technologie, j'ai découvert le code et compris que je pouvais moi-même créer ces outils. Ce qui était une curiosité est devenue une <strong className={strongClass}>véritable passion</strong>.
              </p>
              <p className={`leading-relaxed text-sm ${textClass}`}>
                Mon objectif : transformer des idées en applications <strong className={strongClass}>modernes, rapides et sécurisées</strong> que tout le monde peut utiliser facilement.
              </p>
            </GlassCard>
          </AnimatedSection>
          <div className="grid grid-cols-2 gap-3">
            {strengths.map((s, i) => (
              <AnimatedSection key={i} delay={0.3 + i * 0.1}>
                <GlassCard theme={theme} hover={true} glowColor="rgba(74, 222, 128, 0.12)" className="p-4">
                  <div className={`font-bold text-sm mb-1 font-display ${isDark ? 'text-[#4ade80]' : 'text-[#16a34a]'}`}>{s.title}</div>
                  <p className={`text-xs leading-relaxed ${strengthDescClass}`}>{s.desc}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        {stats.map((s, i) => (
          <AnimatedSection key={i} delay={0.5 + i * 0.1}>
            <GlassCard theme={theme} hover={true} className="p-5 flex items-center gap-4">
              <div>
                <div className={`font-display font-extrabold text-xl ${statValueClass}`}>{s.value}</div>
                <div className={`text-xs mt-1 ${statLabelClass}`}>{s.label}</div>
                <div className={`text-[0.68rem] mt-0.5 ${statSubClass}`}>{s.sublabel}</div>
              </div>
            </GlassCard>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
