import React, { useState, useEffect, useRef } from 'react';
import { getCloudinaryUrl } from '../utils/cloudinary';

const GitHubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>;
const LinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;
const DownloadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;

const allProjects = [
  {
    title: 'Journal Numérique',
    category: 'Web',
    description: "L'info en un éclair, vue sous tous les angles. Actualité fiable, analyse profonde et mise à jour quotidienne. Une vision à 360° du monde qui bouge.",
    tags: ['WordPress', 'Elementor'],
    img: getCloudinaryUrl('20_Top_WordPress_Newspaper_Themes_2025_jugstp'),
    live: 'https://dupoclic.com/info/',
    github: null,
    accent: '#6cbc1bff',
  },
  {
    title: 'Audify',
    category: 'Web',
    description: 'Plateforme simple et rapide pour partager vos enregistrements vocaux avec le monde entier. Exprimez-vous sans limites.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    img: getCloudinaryUrl('Capture_d_écran_108_qbktvq'),
    live: 'https://dupoclic.com/Audify/',
    github: null,
    accent: '#c81616ff',
  },
  {
    title: 'Ciné Now',
    category: 'Web',
    description: 'Plateforme de streaming avec recherche en temps réel de films et séries, pages détail avec casting et bandes-annonces. Déployée sur Vercel.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'API TMDB'],
    img: getCloudinaryUrl('Capture_d_ssyrfr'),
    live: 'https://cinema-now.vercel.app/',
    github: 'https://github.com/nkgr01/streaming-platform',
    accent: '#4ade80',
  },
  {
    title: 'Chatroom',
    category: 'Web',
    description: "Plateforme de tchat conviviale permettant aux utilisateurs de se connecter avec des personnes partageant des intentions similaires. (En maintenance)",
    tags: ['Node.js', 'MongoDB', 'Prisma', 'Express'],
    img: getCloudinaryUrl('Calendar_schedule_ji97vc'),
    live: null,
    github: null,
    accent: '#60a5fa',
  },
  {
    title: 'ChifLet',
    category: 'Mobile',
    description: "Application mobile innovante (première création) permettant la traduction de chiffres en lettres en français et en anglais, avec affichage interactif des tables de multiplication.",
    tags: ['WinDev Mobile', 'Éducation'],
    img: getCloudinaryUrl('react_fbkagi'),
    live: null,
    github: null,
    isApk: true,
    accent: '#0077b6',
  },
];

const filters = ['Tous', 'Web', 'Mobile'];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Tous');
  const [animating, setAnimating] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const switchFilter = (f: string) => {
    if (f === filter) return;
    setAnimating(true);
    setTimeout(() => { setFilter(f); setAnimating(false); }, 180);
  };

  const displayed = filter === 'Tous' ? allProjects : allProjects.filter(p => p.category === filter);

  return (
    <section id="projects" ref={ref} style={{
      padding: '100px 24px', maxWidth: '1200px', margin: '0 auto',
      opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', marginBottom: '48px' }}>
        <div>
          <div className="section-label" style={{ marginBottom: '14px' }}>PROJETS</div>
          <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontSize: 'clamp(1.9rem,4vw,2.8rem)', fontWeight: '800', lineHeight: 1.1, letterSpacing: '-0.03em', color: '#f1f5f9' }}>
            Mes <span style={{ color: 'var(--accent-green)' }}>réalisations</span>
          </h2>
        </div>
        {/* Filter pills */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {filters.map(f => (
            <button key={f} onClick={() => switchFilter(f)} style={{
              padding: '7px 18px', borderRadius: '9999px', cursor: 'pointer',
              background: filter === f ? 'rgba(74,222,128,0.1)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${filter === f ? 'rgba(74,222,128,0.3)' : 'rgba(255,255,255,0.08)'}`,
              color: filter === f ? 'var(--accent-green)' : 'rgba(255,255,255,0.45)',
              fontSize: '0.82rem', fontWeight: '500',
              transition: 'all 0.2s ease',
            }}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '20px',
        opacity: animating ? 0 : 1, transform: animating ? 'translateY(8px)' : 'none',
        transition: 'opacity 0.18s ease, transform 0.18s ease',
      }}>
        {displayed.map((p, i) => (
          <div key={i} className="project-card"
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = `${p.accent}55`;
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${p.accent}22`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Image */}
            <div style={{ position: 'relative', overflow: 'hidden', height: '180px' }}>
              <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', display: 'block' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              {/* Gradient overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,15,20,0.8) 0%, transparent 50%)' }} />
              {/* Category badge */}
              <div style={{ position: 'absolute', top: '12px', right: '12px', padding: '3px 10px', borderRadius: '6px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', border: `1px solid ${p.accent}44`, fontSize: '0.68rem', fontFamily: '"JetBrains Mono",monospace', color: p.accent, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {p.category}
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '22px' }}>
              <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: '700', fontSize: '1rem', color: '#f1f5f9', marginBottom: '8px' }}>{p.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: '1.7', marginBottom: '16px' }}>{p.description}</p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                {p.tags.map((t, j) => (
                  <span key={j} style={{ padding: '3px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.68rem', fontFamily: '"JetBrains Mono",monospace', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{t}</span>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#f1f5f9')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  ><GitHubIcon /> Code</a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = p.accent)}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  ><LinkIcon /> Voir le projet</a>
                )}
                {(p as any).isApk && (
                  <a href="/ChifLet.apk" download style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = p.accent)}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  ><DownloadIcon /> APK (~40 MB)</a>
                )}
                {!p.live && !p.github && !(p as any).isApk && (
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', fontStyle: 'italic' }}>En maintenance</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
