import React, { useState, useEffect, useRef } from 'react';

const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>;
const PenIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>;
const GlobeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;

const services = [
  {
    num: '01', label: 'Sites & Applications',
    title: 'Développement Web',
    icon: <CodeIcon />,
    color: 'var(--accent-blue)',
    bg: 'rgba(96,165,250,0.12)',
    border: 'rgba(96,165,250,0.3)',
    desc: "Je crée des sites web et applications modernes, rapides et optimisés pour le référencement. Chaque projet est conçu pour convertir vos visiteurs en clients.",
    features: ['Sites vitrines premium', 'Applications SaaS', 'E-commerce performant', 'Progressive Web Apps'],
    tags: ['React', 'Next.js', 'PHP', 'Wordpress'],
  },
  {
    num: '02', label: 'iOS & Android',
    title: 'Applications Mobile',
    icon: <PhoneIcon />,
    color: 'var(--accent-green)',
    bg: 'rgba(74,222,128,0.12)',
    border: 'rgba(74,222,128,0.3)',
    desc: "Des applications mobiles et cross-platform qui offrent une expérience utilisateur fluide et performante sur tous les appareils.",
    features: ['Apps iOS & Android', 'Design natif', 'Notifications push', 'Mode hors-ligne'],
    tags: ['Flutter'],
  },
  {
    num: '03', label: 'Design & Prototypage',
    title: 'UI/UX Design',
    icon: <PenIcon />,
    color: 'var(--accent-pink)',
    bg: 'rgba(232,121,249,0.12)',
    border: 'rgba(232,121,249,0.3)',
    desc: "Des interfaces intuitives et esthétiques qui placent l'utilisateur au centre. Du wireframe au prototype interactif, chaque pixel compte.",
    features: ['Design System complet', 'Prototypage Figma', 'Tests utilisateurs', 'Responsive Design'],
    tags: ['Figma', 'Adobe XD', 'Tailwind'],
  },
  {
    num: '04', label: 'Backend & Services',
    title: 'Intégration API',
    icon: <GlobeIcon />,
    color: 'var(--accent-orange)',
    bg: 'rgba(251,146,60,0.12)',
    border: 'rgba(251,146,60,0.3)',
    desc: "Connexion et intégration d'APIs tierces, création d'APIs REST robustes, gestion de bases de données et services cloud.",
    features: ['API REST', 'Authentification JWT', 'Bases de données MySQL', 'Express.js'],
    tags: ['Node.js', 'Express', 'MySQL', 'PRISMA'],
  },
];

const Services: React.FC = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const selectService = (i: number) => {
    if (i === active) return;
    setAnimating(true);
    setTimeout(() => { setActive(i); setAnimating(false); }, 200);
  };

  const s = services[active];

  return (
    <section id="services" ref={ref} style={{
      padding: '100px 24px', maxWidth: '1200px', margin: '0 auto',
      opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    }}>
      <div style={{ marginBottom: '56px' }}>
        <div className="section-label" style={{ marginBottom: '14px' }}>SERVICES</div>
        <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontSize: 'clamp(1.9rem,4vw,2.8rem)', fontWeight: '800', lineHeight: 1.1, letterSpacing: '-0.03em', color: '#f1f5f9' }}>
          Ce que je peux faire{' '}
          <span style={{ color: 'var(--accent-green)' }}>pour vous</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '14px', fontSize: '0.92rem', maxWidth: '480px' }}>
          Des solutions complètes, de l'idée au déploiement — toujours orientées résultat.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '28px', alignItems: 'start' }}>
        {/* Service list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {services.map((svc, i) => {
            const isActive = i === active;
            return (
              <div key={i} className="service-item" onClick={() => selectService(i)} style={{
                background: isActive ? 'rgba(26,29,39,0.9)' : 'transparent',
                borderColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                borderLeft: isActive ? `3px solid ${svc.color}` : '3px solid transparent',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
                    background: isActive ? svc.bg : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${isActive ? svc.border : 'rgba(255,255,255,0.08)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: isActive ? svc.color : 'rgba(255,255,255,0.4)',
                    transition: 'all 0.3s ease',
                  }}>
                    {svc.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontFamily: '"JetBrains Mono",monospace', color: 'rgba(255,255,255,0.3)', marginBottom: '2px' }}>{svc.num}</div>
                    <div style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: '600', fontSize: '0.92rem', color: isActive ? '#f1f5f9' : 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}>{svc.title}</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', marginTop: '1px' }}>{svc.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail panel */}
        <div style={{
          background: 'var(--bg-card)', border: `1px solid rgba(255,255,255,0.08)`,
          borderRadius: '20px', padding: '32px',
          opacity: animating ? 0 : 1, transform: animating ? 'translateX(10px)' : 'none',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          borderTop: `2px solid ${s.color}`,
        }}>
          {/* Icon + title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{
              width: '52px', height: '52px', borderRadius: '14px',
              background: s.bg, border: `1px solid ${s.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: s.color,
            }}>
              {React.cloneElement(s.icon as React.ReactElement, { width: 24, height: 24 })}
            </div>
            <div>
              <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: '700', fontSize: '1.2rem', color: '#f1f5f9', margin: 0 }}>{s.title}</h3>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '3px' }}>{s.label}</div>
            </div>
          </div>

          {/* Description */}
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', fontSize: '0.9rem', marginBottom: '24px' }}>{s.desc}</p>

          {/* Features 2x2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
            {s.features.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>
                <span style={{ color: s.color, flexShrink: 0 }}><CheckIcon /></span>
                {f}
              </div>
            ))}
          </div>

          {/* Tags + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {s.tags.map((t, i) => (
                <span key={i} style={{ padding: '4px 12px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.72rem', fontFamily: '"JetBrains Mono",monospace', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{t}</span>
              ))}
            </div>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: s.color, fontSize: '0.85rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 0', transition: 'gap 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.gap = '10px'; }}
              onMouseLeave={e => { e.currentTarget.style.gap = '6px'; }}
            >
              Discuter du projet →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
