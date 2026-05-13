import React, { useEffect, useRef, useState } from 'react';
import { getCloudinaryUrl } from '../utils/cloudinary';

const stats = [
  { value: '1 an',   label: "D'expérience",  sublabel: 'Développement actif' },
  { value: 'Abidjan',  label: "Côte d'Ivoire", sublabel: 'Disponible à distance' },
  { value: 'Ouvert',   label: 'Freelance',      sublabel: 'Contrat & Mission' },
];

const strengths = [
  { title: 'Adaptabilité',    desc: "Je m'intègre facilement dans différents contextes et m'ajuste aux situations nouvelles." },
  { title: 'Rigueur',         desc: 'Je travaille avec méthode et sérieux, en veillant à produire des résultats fiables.' },
  { title: 'Veille continue', desc: "Passionné par l'apprentissage continu des nouvelles technologies et tendances." },
  { title: 'Créativité',      desc: 'Les animés et la lecture nourrissent ma créativité et ma capacité à penser autrement.' },
];

const About: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const card: React.CSSProperties = {
    background: 'var(--bg-card)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '20px',
  };

  return (
    <section id="about" ref={ref} style={{
      padding: '100px 24px', maxWidth: '1200px', margin: '0 auto',
      opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', marginBottom: '56px' }}>
        <div>
          <div className="section-label" style={{ marginBottom: '14px' }}>À PROPOS DE MOI</div>
          <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontSize: 'clamp(1.9rem,4vw,2.8rem)', fontWeight: '800', lineHeight: 1.1, letterSpacing: '-0.03em', color: '#f1f5f9' }}>
            Développeur passionné<br />
            <span style={{ color: 'var(--accent-green)' }}>par l'excellence.</span>
          </h2>
        </div>
        <a href="mailto:kouameguyrodriguen@gmail.com"
          style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'11px 22px', borderRadius:'9999px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)', color:'#f1f5f9', textDecoration:'none', fontSize:'0.87rem', fontWeight:'500', transition:'all 0.25s ease', alignSelf:'flex-start' }}
          onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.1)'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.transform='translateY(0)'; }}
        >Collaborer avec moi ↗</a>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '28px', alignItems: 'start' }}>
        {/* Photo card */}
        <div style={{ ...card, overflow: 'hidden', position: 'relative' }}>
          <div style={{ position:'absolute', top:'14px', left:'14px', zIndex:2, display:'flex', alignItems:'center', gap:'7px', padding:'6px 13px', borderRadius:'9999px', background:'rgba(0,0,0,0.55)', backdropFilter:'blur(8px)', border:'1px solid rgba(74,222,128,0.25)', fontSize:'0.77rem', color:'#f1f5f9' }}>
            <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'var(--accent-green)', boxShadow:'0 0 8px rgba(74,222,128,0.8)' }} />
            Disponible
          </div>
          <img src={getCloudinaryUrl('court2_ncur3m.jpg')} alt="Rodrigue N'GUESSAN" style={{ width:'100%', height:'310px', objectFit:'cover', objectPosition:'center top', display:'block' }} />
          <div style={{ background:'linear-gradient(to top,rgba(13,15,20,0.95) 0%,rgba(13,15,20,0.4) 60%,transparent 100%)', padding:'36px 18px 18px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
              <div style={{ width:'30px', height:'30px', borderRadius:'50%', background:'linear-gradient(135deg,#4ade80,#22d3ee)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.6rem', fontWeight:'800', color:'#0d0f14', flexShrink:0 }}>RN</div>
              <div>
                <div style={{ fontFamily:'"Space Grotesk",sans-serif', fontWeight:'700', fontSize:'0.9rem', color:'#f1f5f9' }}>N'GUESSAN Rodrigue</div>
                <div style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.45)' }}>Développeur Web &amp; Mobile</div>
              </div>
            </div>
          </div>
        </div>

        {/* Approach + strengths */}
        <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
          <div style={{ ...card, padding: '26px' }}>
            <div style={{ fontSize:'0.68rem', fontFamily:'"JetBrains Mono",monospace', letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', marginBottom:'14px' }}>MON APPROCHE</div>
            <p style={{ color:'rgba(255,255,255,0.7)', lineHeight:'1.8', fontSize:'0.9rem', marginBottom:'12px' }}>
              Depuis longtemps fasciné par la technologie, j'ai découvert le code et compris que je pouvais moi-même créer ces outils. Ce qui était une curiosité est devenu une <strong style={{ color:'#f1f5f9' }}>véritable passion</strong>.
            </p>
            <p style={{ color:'rgba(255,255,255,0.7)', lineHeight:'1.8', fontSize:'0.9rem', margin:0 }}>
              Mon objectif&nbsp;: transformer des idées en applications <strong style={{ color:'#f1f5f9' }}>modernes, rapides et sécurisées</strong> que tout le monde peut utiliser facilement.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
            {strengths.map((s, i) => (
              <div key={i} style={{ ...card, padding:'16px', borderRadius:'14px', transition:'all 0.25s ease', cursor:'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(74,222,128,0.2)'; e.currentTarget.style.transform='translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.transform='none'; }}
              >
                <div style={{ color:'var(--accent-green)', fontWeight:'700', fontSize:'0.83rem', marginBottom:'5px', fontFamily:'"Space Grotesk",sans-serif' }}>{s.title}</div>
                <p style={{ color:'rgba(255,255,255,0.45)', fontSize:'0.76rem', lineHeight:'1.6', margin:0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))', gap:'14px', marginTop:'28px' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ ...card, padding:'20px 22px', display:'flex', alignItems:'center', gap:'14px', transition:'all 0.25s ease', cursor:'default' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.15)'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.transform='none'; }}
          >
            <div>
              <div style={{ fontFamily:'"Space Grotesk",sans-serif', fontWeight:'800', fontSize:'1.15rem', color:'#f1f5f9', lineHeight:1 }}>{s.value}</div>
              <div style={{ color:'rgba(255,255,255,0.5)', fontSize:'0.77rem', marginTop:'3px' }}>{s.label}</div>
              <div style={{ color:'rgba(255,255,255,0.3)', fontSize:'0.68rem', marginTop:'2px' }}>{s.sublabel}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
