import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const SendIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;

const contactInfo = [
  { icon: <MailIcon />, label: 'Email', value: 'kouameguyrodriguen@gmail.com', href: 'mailto:kouameguyrodriguen@gmail.com' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', value: 'linkedin.com/in/rodrigue-n-guessan', href: 'https://www.linkedin.com/in/rodrigue-n-guessan/' },
  { icon: <GithubIcon />, label: 'GitHub', value: 'github.com/nkgr01', href: 'https://github.com/nkgr01' },
  { icon: <MapPinIcon />, label: 'Localisation', value: 'Abidjan, Côte d\'Ivoire', href: null },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const form = useRef<HTMLFormElement>(null);
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (form.current) {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          { user_name: formData.nom, user_email: formData.email, message: formData.message, date: new Date().toLocaleString('fr-FR') },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRMATION_ID,
          { visitor_name: formData.nom, visitor_email: formData.email },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        setSent(true);
        setFormData({ nom: '', email: '', message: '' });
      }
    } catch (err) {
      setError('Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const card: React.CSSProperties = { background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px' };

  return (
    <section id="contact" ref={ref} style={{
      padding: '100px 24px', maxWidth: '1200px', margin: '0 auto',
      opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    }}>
      <div style={{ marginBottom: '56px' }}>
        <div className="section-label" style={{ marginBottom: '14px' }}>CONTACT</div>
        <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontSize: 'clamp(1.9rem,4vw,2.8rem)', fontWeight: '800', lineHeight: 1.1, letterSpacing: '-0.03em', color: '#f1f5f9' }}>
          Parlons de votre <span style={{ color: 'var(--accent-green)' }}>projet</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: '14px', fontSize: '0.92rem', maxWidth: '500px' }}>
          Je suis ouvert à de nouvelles opportunités. Que vous ayez une question ou souhaitiez collaborer, je vous répondrai rapidement.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '28px', alignItems: 'start' }}>
        {/* Info panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {contactInfo.map((item, i) => (
            <div key={i} style={{ ...card, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px', transition: 'all 0.25s ease', cursor: item.href ? 'pointer' : 'default' }}
              onClick={() => item.href && window.open(item.href, '_blank')}
              onMouseEnter={e => { if (item.href) { e.currentTarget.style.borderColor = 'rgba(74,222,128,0.2)'; e.currentTarget.style.transform = 'translateX(4px)'; } }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'none'; }}
            >
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)', flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', fontFamily: '"JetBrains Mono",monospace', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3px' }}>{item.label}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontWeight: '500' }}>{item.value}</div>
              </div>
            </div>
          ))}

          {/* Availability card */}
          <div style={{ ...card, padding: '20px', borderColor: 'rgba(74,222,128,0.15)', background: 'rgba(74,222,128,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-green)', boxShadow: '0 0 8px rgba(74,222,128,0.8)' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--accent-green)' }}>Disponible maintenant</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', lineHeight: '1.6', margin: 0 }}>
              Ouvert aux missions freelance et aux contrats. Disponible à distance depuis Abidjan.
            </p>
          </div>
        </div>

        {/* Form */}
        <div style={{ ...card, padding: '32px' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: '700', color: '#f1f5f9', marginBottom: '10px' }}>Message envoyé !</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Merci ! Je vous répondrai dans les meilleurs délais.</p>
              <button onClick={() => setSent(false)} style={{ marginTop: '20px', background: 'none', border: '1px solid rgba(74,222,128,0.3)', color: 'var(--accent-green)', padding: '8px 20px', borderRadius: '9999px', cursor: 'pointer', fontSize: '0.85rem' }}>
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form ref={form} onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginBottom: '7px', fontFamily: '"JetBrains Mono",monospace', letterSpacing: '0.05em' }}>NOM</label>
                  <input id="contact-nom" type="text" name="nom" value={formData.nom} onChange={handleChange} required placeholder="Votre nom" className="contact-input" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginBottom: '7px', fontFamily: '"JetBrains Mono",monospace', letterSpacing: '0.05em' }}>EMAIL</label>
                  <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="votre@email.com" className="contact-input" />
                </div>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginBottom: '7px', fontFamily: '"JetBrains Mono",monospace', letterSpacing: '0.05em' }}>MESSAGE</label>
                <textarea id="contact-message" name="message" rows={5} value={formData.message} onChange={handleChange} required placeholder="Décrivez votre projet ou votre demande..." className="contact-input" style={{ resize: 'vertical', minHeight: '130px' }} />
              </div>
              {error && <div style={{ color: '#f87171', fontSize: '0.82rem', marginBottom: '14px', padding: '10px 14px', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: '10px' }}>{error}</div>}
              <button id="contact-submit" type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
                <SendIcon />
                {loading ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
