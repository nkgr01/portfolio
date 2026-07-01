import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionLabel } from '../ui/SectionLabel';
import { GlassCard } from '../ui/GlassCard';
import type { Theme } from '../../hooks/useTheme';

const contactInfo = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>, label: 'Email', value: 'kouameguyrodriguen@gmail.com', href: 'mailto:kouameguyrodriguen@gmail.com' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>, label: 'LinkedIn', value: 'linkedin.com/in/rodrigue-n-guessan', href: 'https://www.linkedin.com/in/rodrigue-n-guessan/' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>, label: 'GitHub', value: 'github.com/nkgr01', href: 'https://github.com/nkgr01' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: 'Localisation', value: "Abidjan, Côte d'Ivoire", href: null },
];

interface ContactProps { theme: Theme; }

export default function Contact({ theme }: ContactProps) {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const form = useRef<HTMLFormElement>(null);
  const isDark = theme === 'dark';

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
        await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          { user_name: formData.nom, user_email: formData.email, message: formData.message, date: new Date().toLocaleString('fr-FR') },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
        setSent(true);
        setFormData({ nom: '', email: '', message: '' });
      }
    } catch (err) {
      setError("Erreur lors de l'envoi. Veuillez réessayer.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const headingClass = isDark ? 'text-white' : 'text-slate-900';
  const subtitleClass = isDark ? 'text-white/40' : 'text-slate-500';

  const infoCardClass = isDark
    ? 'p-4 flex items-center gap-4 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.07] transition-all'
    : 'p-4 flex items-center gap-4 rounded-xl bg-white border border-slate-200 shadow-sm transition-all';

  const infoIconClass = isDark
    ? 'w-9 h-9 rounded-lg bg-[#4ade80]/10 border border-[#4ade80]/20 text-[#4ade80]'
    : 'w-9 h-9 rounded-lg bg-[#16a34a]/10 border border-[#16a34a]/20 text-[#16a34a]';

  const infoLabelClass = isDark ? 'text-white/30' : 'text-slate-400';
  const infoValueClass = isDark ? 'text-white/70' : 'text-slate-700';

  const inputClass = isDark
    ? 'w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-all focus:border-[#4ade80]/40 focus:bg-[#4ade80]/5 focus:shadow-[0_0_0_3px_rgba(74,222,128,0.08)] placeholder:text-white/25'
    : 'w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 outline-none transition-all focus:border-[#16a34a]/40 focus:bg-[#16a34a]/5 focus:shadow-[0_0_0_3px_rgba(22,163,74,0.08)] placeholder:text-slate-400';

  const labelClass = isDark ? 'text-white/40' : 'text-slate-500';
  const sentTitleClass = isDark ? 'text-white' : 'text-slate-900';
  const sentSubClass = isDark ? 'text-white/50' : 'text-slate-500';
  const sentBtnClass = isDark ? 'border-[#4ade80]/30 text-[#4ade80] hover:bg-[#4ade80]/10' : 'border-[#16a34a]/30 text-[#16a34a] hover:bg-[#16a34a]/10';

  return (
    <section id="contact" className="relative py-28 px-6 max-w-6xl mx-auto">
      <AnimatedSection className="mb-16">
        <SectionLabel theme={theme}>CONTACT</SectionLabel>
        <h2 className={`font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mt-4 ${headingClass}`}>
          Parlons de votre <span className="bg-gradient-to-r from-[#16a34a] to-[#0ea5e9] bg-clip-text text-transparent">projet</span>
        </h2>
        <p className={`text-sm mt-4 max-w-md ${subtitleClass}`}>Je suis ouvert à de nouvelles opportunités. Que vous ayez une question ou souhaitiez collaborer, je vous répondrai rapidement.</p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">
        <div className="flex flex-col gap-3.5">
          {contactInfo.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div whileHover={{ x: 4 }} className={infoCardClass}
                style={{ cursor: item.href ? 'pointer' : 'default' }} onClick={() => item.href && window.open(item.href, '_blank')}>
                <div className={`${infoIconClass} flex items-center justify-center flex-shrink-0`}>{item.icon}</div>
                <div>
                  <div className={`text-[0.7rem] font-mono uppercase tracking-wide mb-1 ${infoLabelClass}`}>{item.label}</div>
                  <div className={`text-sm font-medium ${infoValueClass}`}>{item.value}</div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
          <AnimatedSection delay={0.4} className="mt-2">
            <GlassCard theme={theme} hover={false} glowColor="rgba(74, 222, 128, 0.12)"
              className={`p-5 ${isDark ? 'bg-[#4ade80]/5 border-[#4ade80]/15' : 'bg-[#16a34a]/5 border-[#16a34a]/15'}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
                </span>
                <span className={`text-xs font-semibold ${isDark ? 'text-[#4ade80]' : 'text-[#16a34a]'}`}>Disponible maintenant</span>
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-white/45' : 'text-slate-500'}`}>Ouvert aux missions freelance et aux contrats. Disponible à distance depuis Abidjan.</p>
            </GlassCard>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <GlassCard theme={theme} hover={false} className="p-8">
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className={`font-display font-bold text-lg mb-3 ${sentTitleClass}`}>Message envoyé !</h3>
                <p className={`text-sm ${sentSubClass}`}>Merci ! Je vous répondrai dans les meilleurs délais.</p>
                <button onClick={() => setSent(false)} className={`mt-6 px-5 py-2 rounded-full border text-sm font-medium transition-all ${sentBtnClass}`}>
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form ref={form} onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={`block text-xs font-mono uppercase tracking-wide mb-2 ${labelClass}`}>NOM</label>
                    <input id="contact-nom" type="text" name="nom" value={formData.nom} onChange={handleChange} required placeholder="Votre nom" className={inputClass} />
                  </div>
                  <div>
                    <label className={`block text-xs font-mono uppercase tracking-wide mb-2 ${labelClass}`}>EMAIL</label>
                    <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="votre@email.com" className={inputClass} />
                  </div>
                </div>
                <div className="mb-6">
                  <label className={`block text-xs font-mono uppercase tracking-wide mb-2 ${labelClass}`}>MESSAGE</label>
                  <textarea id="contact-message" name="message" rows={5} value={formData.message} onChange={handleChange} required placeholder="Décrivez votre projet ou votre demande..."
                    className={`${inputClass} resize-y min-h-[130px]`} />
                </div>
                {error && <div className="text-[#ef4444] text-xs mb-4 p-3 bg-[#ef4444]/10 border border-[#ef4444]/20 rounded-xl">{error}</div>}
                <motion.button id="contact-submit" type="submit" disabled={loading} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#4ade80] text-[#0d0f14] font-bold text-sm uppercase tracking-wider transition-all hover:bg-[#86efac] hover:shadow-[0_8px_24px_rgba(74,222,128,0.35)] disabled:opacity-70 disabled:cursor-not-allowed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                </motion.button>
              </form>
            )}
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}


export default Contact