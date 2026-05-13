/**
 * Hero - Section principale avec fond étoilé, tags flottants, titre principal et CTAs
 */
import React, { useEffect, useRef } from 'react';

interface FloatingTag {
  label: string;
  top: string;
  left?: string;
  right?: string;
  animClass: string;
  delay: string;
}

const floatingTags: FloatingTag[] = [
  { label: 'React',      top: '18%',  left: '6%',   animClass: 'animate-float',      delay: '0s'    },
  { label: 'TypeScript', top: '58%',  left: '3%',   animClass: 'animate-float-slow', delay: '1s'    },
  { label: 'Flutter',    top: '76%',  left: '8%',   animClass: 'animate-float-rev',  delay: '0.5s'  },
  { label: 'Next.js',    top: '12%',  right: '7%',  animClass: 'animate-float-slow', delay: '0.3s'  },
  { label: 'Node.js',    top: '60%',  right: '3%',  animClass: 'animate-float',      delay: '1.5s'  },
  { label: 'PHP',    top: '74%',  right: '9%',  animClass: 'animate-float-rev',  delay: '0.8s'  },
  { label: 'Figma',      top: '30%',  left: '2%',   animClass: 'animate-float-fast', delay: '2s'    },
  { label: 'Elementor',  top: '24%',  right: '2%',  animClass: 'animate-float-fast', delay: '1.2s'  },
  { label: 'WordPress',  top: '40%',  right: '2%',  animClass: 'animate-float-fast', delay: '1.3s'  },
  { label: 'Tailwind',  top: '43%',  left: '2%',  animClass: 'animate-float-fast', delay: '1.4s'  },
];

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const ArrowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
  </svg>
);

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '100px 24px 60px',
      }}
    >
      {/* Floating skill tags */}
      {floatingTags.map((tag, i) => (
        <div
          key={i}
          className={`floating-tag ${tag.animClass}`}
          style={{
            top: tag.top,
            left: tag.left,
            right: tag.right,
            animationDelay: tag.delay,
            opacity: 0.8,
          }}
        >
          {tag.label}
        </div>
      ))}

      {/* Radial glow behind title */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(74,222,128,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Center content */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: '780px' }}>

        {/* Availability badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <div className="availability-badge animate-fade-in">
            <div className="dot" />
            <span>Disponible — Freelance &amp; Contrat</span>
          </div>
        </div>

        {/* Main title */}
        <h1
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: '800',
            fontSize: 'clamp(3.2rem, 8vw, 7rem)',
            lineHeight: '1.0',
            letterSpacing: '-0.03em',
            color: '#f1f5f9',
            marginBottom: '0',
            animation: 'fadeInUp 0.8s ease-out 0.1s both',
          }}
        >
          N'GUESSAN
        </h1>
        <h1
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: '800',
            fontSize: 'clamp(3.2rem, 8vw, 7rem)',
            lineHeight: '1.0',
            letterSpacing: '-0.03em',
            background: 'linear-gradient(135deg, #4ade80 0%, #22d3ee 60%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '32px',
            animation: 'fadeInUp 0.8s ease-out 0.2s both',
          }}
        >
          Rodrigue
        </h1>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-green)' }} />
          <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: '1.7',
            maxWidth: '520px',
            margin: '0 auto 40px',
            animation: 'fadeInUp 0.8s ease-out 0.35s both',
          }}
        >
          Je conçois des applications <strong style={{ color: 'rgba(255,255,255,0.85)' }}>web &amp; mobile</strong> sur mesure -
          modernes, performantes et pensées pour vos utilisateurs.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            marginBottom: '48px',
            animation: 'fadeInUp 0.8s ease-out 0.5s both',
          }}
        >
          <button onClick={() => scrollToSection('projects')} className="btn-primary">
            DÉCOUVRIR MES PROJETS
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
          <a
            href="https://www.canva.com/design/DAGyrVVfur8/6VgU25AyyjxvB55KPsyV1Q/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <ArrowDownIcon />
            Télécharger mon CV
          </a>
        </div>

        {/* Social Icons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            animation: 'fadeInUp 0.8s ease-out 0.65s both',
          }}
        >
          {[
            { href: 'https://github.com/nkgr01', icon: <GithubIcon />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/rodrigue-n-guessan/', icon: <LinkedinIcon />, label: 'LinkedIn' },
            { href: 'mailto:kouameguyrodriguen@gmail.com', icon: <MailIcon />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: '44px', height: '44px',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.5)',
                transition: 'all 0.25s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(74,222,128,0.1)';
                e.currentTarget.style.borderColor = 'rgba(74,222,128,0.3)';
                e.currentTarget.style.color = 'var(--accent-green)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        onClick={() => scrollToSection('about')}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          cursor: 'pointer',
          animation: 'fadeIn 1s ease-out 1.2s both',
          color: 'rgba(255,255,255,0.3)',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ animation: 'float 2s ease-in-out infinite' }}><ArrowDownIcon /></div>
      </div>
    </section>
  );
};

export default Hero;