import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionLabel } from '../ui/SectionLabel';
import { getCloudinaryUrl } from '../../utils/cloudinary';

const allProjects = [
  { title: 'Journal Numérique', category: 'Web', description: "L'info en un éclair, vue sous tous les angles. Actualité fiable, analyse profonde et mise à jour quotidienne.", tags: ['WordPress', 'Elementor'], img: getCloudinaryUrl('20_Top_WordPress_Newspaper_Themes_2025_jugstp'), live: 'https://dupoclic.com/info/', github: null, accent: '#6cbc1b' },
  { title: 'Audify', category: 'Web', description: 'Plateforme simple et rapide pour partager vos enregistrements vocaux avec le monde entier.', tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'], img: getCloudinaryUrl('Capture_d_écran_108_qbktvq'), live: 'https://dupoclic.com/Audify/', github: null, accent: '#c81616' },
  { title: 'Ciné Now', category: 'Web', description: 'Plateforme de streaming avec recherche en temps réel de films et séries.', tags: ['Next.js', 'React', 'Tailwind CSS', 'API TMDB'], img: getCloudinaryUrl('Capture_d_ssyrfr'), live: 'https://cinema-now.vercel.app/', github: 'https://github.com/nkgr01/streaming-platform', accent: '#4ade80' },
  { title: 'Chatroom', category: 'Web', description: "Plateforme de tchat conviviale (En maintenance).", tags: ['Node.js', 'MongoDB', 'Prisma', 'Express'], img: getCloudinaryUrl('Calendar_schedule_ji97vc'), live: null, github: null, accent: '#60a5fa' },
  { title: 'ChifLet', category: 'Mobile', description: "Application mobile pour la traduction de chiffres en lettres.", tags: ['WinDev Mobile', 'Éducation'], img: getCloudinaryUrl('react_fbkagi'), live: null, github: null, isApk: true, accent: '#0077b6' },
];

const filters = ['Tous', 'Web', 'Mobile'] as const;

function ProjectCard({ project, index }: { project: typeof allProjects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
      <motion.div animate={{ rotateX: isHovered ? 5 : 0, rotateY: isHovered ? -5 : 0, scale: isHovered ? 1.02 : 1 }} transition={{ duration: 0.3 }}
        style={{ transformStyle: 'preserve-3d' }} className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.07] rounded-2xl overflow-hidden transition-all">
        <div className="relative overflow-hidden h-48">
          <motion.img src={project.img} alt={project.title} className="w-full h-full object-cover" animate={{ scale: isHovered ? 1.08 : 1 }} transition={{ duration: 0.4 }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14]/80 via-transparent to-transparent" />
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm border text-[0.68rem] font-mono uppercase tracking-wide"
            style={{ borderColor: `${project.accent}44`, color: project.accent }}>{project.category}</div>
        </div>
        <div className="p-5">
          <h3 className="font-display font-bold text-base text-white mb-2">{project.title}</h3>
          <p className="text-white/45 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((t, j) => (
              <span key={j} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[0.68rem] font-mono text-white/40 uppercase tracking-wide">{t}</span>
            ))}
          </div>
          <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
            {project.github && (
              <motion.a href={project.github} target="_blank" rel="noopener noreferrer" whileHover={{ x: 2 }}
                className="flex items-center gap-1.5 text-white/40 text-xs transition-colors hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                Code
              </motion.a>
            )}
            {project.live && (
              <motion.a href={project.live} target="_blank" rel="noopener noreferrer" whileHover={{ x: 2 }}
                className="flex items-center gap-1.5 text-xs transition-colors" style={{ color: isHovered ? project.accent : 'rgba(255,255,255,0.4)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Voir le projet
              </motion.a>
            )}
            {(project as any).isApk && (
              <motion.a href="/ChifLet.apk" download whileHover={{ x: 2 }}
                className="flex items-center gap-1.5 text-xs transition-colors" style={{ color: isHovered ? project.accent : 'rgba(255,255,255,0.4)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                APK (~40 MB)
              </motion.a>
            )}
            {!project.live && !project.github && !(project as any).isApk && (
              <span className="text-xs text-white/25 italic">En maintenance</span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<typeof filters[number]>('Tous');
  const displayed = filter === 'Tous' ? allProjects : allProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-28 px-6 max-w-6xl mx-auto">
      <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <SectionLabel>PROJETS</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white mt-4">
            Mes <span className="bg-gradient-to-r from-[#4ade80] to-[#22d3ee] bg-clip-text text-transparent">réalisations</span>
          </h2>
        </div>
        <div className="flex gap-2">
          {filters.map((f) => {
            const isActive = filter === f;
            return (
              <motion.button key={f} onClick={() => setFilter(f)} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive ? 'bg-[#4ade80]/10 border border-[#4ade80]/30 text-[#4ade80]' : 'bg-white/[0.04] border border-white/[0.08] text-white/45 hover:text-white/70'}`}>
                {f}
              </motion.button>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatePresence mode="wait">
        <motion.div key={filter} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
