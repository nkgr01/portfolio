import React, { useState, useEffect, useRef } from 'react';
import { getCloudinaryUrl } from '../utils/cloudinary';

const tabs = ['Frontend', 'Backend', 'CMS & Outils', 'Mobile'];

const skillsData: Record<string, { name: string; level: number; img: string; color: string }[]> = {
  'Frontend': [
    { name: 'HTML & CSS',      level: 100, img: getCloudinaryUrl('css_tu3umt'),       color: '#e34f26' },
    { name: 'Tailwind CSS',    level: 80, img: getCloudinaryUrl('tailwind_upsplv'),  color: '#38bdf8' },
    { name: 'JavaScript ES6+', level: 60, img: getCloudinaryUrl('js_ptillk'),        color: '#f7df1e' },
    { name: 'TypeScript',      level: 50, img: getCloudinaryUrl('ts_iza9cl'),        color: '#3178c6' },
    { name: 'React',           level: 50, img: getCloudinaryUrl('react_fbkagi'),     color: '#61dafb' },
    { name: 'Next.js',         level: 45, img: getCloudinaryUrl('next_y9oaw0'),      color: '#f1f5f9' },
  ],
  'Backend': [
    { name: 'Node.js',  level: 60, img: getCloudinaryUrl('node_rnrcpn'), color: '#8cc84b' },
    { name: 'PHP',      level: 55, img: getCloudinaryUrl('php_ajb5sf'),  color: '#8993be' },
    { name: 'MySQL',    level: 50, img: getCloudinaryUrl('mysql_tstemj'),color: '#4479a1' },
    { name: 'MongoDB',  level: 45, img: getCloudinaryUrl('node_rnrcpn'), color: '#13aa52' },
  ],
  'CMS & Outils': [
    { name: 'WordPress', level: 80, img: getCloudinaryUrl('wordpress_pqq0lr'), color: '#21759b' },
    { name: 'Figma',     level: 60, img: getCloudinaryUrl('figma_znuajd'),     color: '#f24e1e' },
    { name: 'Git',       level: 60, img: getCloudinaryUrl('git_nnsztz'),       color: '#f05032' },
    { name: 'Elementor', level: 90, img: getCloudinaryUrl('wordpress_pqq0lr'), color: '#92003b' },
  ],
  'Mobile': [
    { name: 'WinDev Mobile',  level: 65, img: getCloudinaryUrl('react_fbkagi'), color: '#0077b6' },
    { name: 'Flutter (bases)',level: 40, img: getCloudinaryUrl('react_fbkagi'), color: '#54c5f8' },
  ],
};

const LevelDots: React.FC<{ level: number; color: string }> = ({ level, color }) => {
  const filled = Math.round(level / 20);
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {[1,2,3,4,5].map(i => (
        <div key={i} style={{
          width: '6px', height: '6px', borderRadius: '50%',
          background: i <= filled ? color : 'rgba(255,255,255,0.1)',
          transition: 'background 0.3s ease',
        }} />
      ))}
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Frontend');
  const [animating, setAnimating] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const switchTab = (tab: string) => {
    if (tab === activeTab) return;
    setAnimating(true);
    setTimeout(() => { setActiveTab(tab); setAnimating(false); }, 180);
  };

  const current = skillsData[activeTab] || [];

  return (
    <section id="skills" ref={ref} style={{
      padding: '100px 24px', maxWidth: '1200px', margin: '0 auto',
      opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    }}>
      <div style={{ marginBottom: '48px' }}>
        <div className="section-label" style={{ marginBottom: '14px' }}>COMPÉTENCES</div>
        <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontSize: 'clamp(1.9rem,4vw,2.8rem)', fontWeight: '800', lineHeight: 1.1, letterSpacing: '-0.03em', color: '#f1f5f9' }}>
          Mes outils &amp;{' '}
          <span style={{ color: 'var(--accent-green)' }}>technologies</span>
        </h2>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '36px' }}>
        {tabs.map(tab => (
          <button key={tab} onClick={() => switchTab(tab)} className="skill-tab" style={{
            background: activeTab === tab ? 'rgba(74,222,128,0.1)' : 'transparent',
            borderColor: activeTab === tab ? 'rgba(74,222,128,0.3)' : 'rgba(255,255,255,0.08)',
            color: activeTab === tab ? 'var(--accent-green)' : 'rgba(255,255,255,0.45)',
          }}>
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '14px',
        opacity: animating ? 0 : 1,
        transform: animating ? 'translateY(8px)' : 'none',
        transition: 'opacity 0.18s ease, transform 0.18s ease',
      }}>
        {current.map((skill, i) => (
          <div key={skill.name} className="skill-card" style={{ animationDelay: `${i * 0.05}s` }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = `${skill.color}33`;
              e.currentTarget.style.boxShadow = `0 0 24px ${skill.color}18`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Icon */}
            <div style={{
              width: '48px', height: '48px', borderRadius: '12px',
              background: `${skill.color}15`,
              border: `1px solid ${skill.color}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '14px',
              overflow: 'hidden',
            }}>
              <img src={skill.img} alt={skill.name}
                style={{ width: '30px', height: '30px', objectFit: 'contain' }}
                onError={e => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.style.background = `${skill.color}20`;
                }}
              />
            </div>

            {/* Name */}
            <div style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: '600', fontSize: '0.88rem', color: '#f1f5f9', marginBottom: '8px' }}>
              {skill.name}
            </div>

            {/* Level dots */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <LevelDots level={skill.level} color={skill.color} />
              <span style={{ fontSize: '0.72rem', fontFamily: '"JetBrains Mono",monospace', color: skill.color }}>{skill.level}%</span>
            </div>

            {/* Progress bar */}
            <div style={{ width: '100%', height: '3px', background: 'rgba(255,255,255,0.06)', borderRadius: '9999px', overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: '9999px',
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                width: `${skill.level}%`,
                transition: 'width 0.8s ease',
              }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;