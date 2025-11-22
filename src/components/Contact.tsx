
/**
 * Composant Contact - Formulaire de contact avec intégration EmailJS
 * Permet aux visiteurs d'envoyer des messages via un formulaire
 * Utilise EmailJS pour l'envoi des emails sans backend
 */
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  // État pour gérer les données du formulaire
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  // État pour gérer l'état de chargement pendant l'envoi
  const [loading, setLoading] = useState(false);
  // Référence vers le formulaire pour EmailJS
  const form = useRef<HTMLFormElement>(null);

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (form.current) {
        // Paramètres pour l'email reçu par vous
        const templateParamsToYou = {
          user_name: formData.nom,
          user_email: formData.email,
          message: formData.message,
          date: new Date().toLocaleString('fr-FR')
        };

        // Paramètres pour l'email de confirmation envoyé au visiteur
        const templateParamsToVisitor = {
          visitor_name: formData.nom,
          visitor_email: formData.email,
          confirmation_message: `Merci ${formData.nom} pour votre message ! J'ai bien reçu votre demande et je vous recontacterai dès que possible. À bientôt !`
        };

        // Envoyer l'email à vous
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParamsToYou,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        // Envoyer l'email de confirmation au visiteur
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRMATION_ID,
          templateParamsToVisitor,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        alert('Message envoyé avec succès ! Vous recevrez un email de confirmation.');
        setFormData({ nom: '', email: '', message: '' });
      }
    } catch (error) {
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }

  };

  return (
    <section id="contact" className="py-24 text-center">
     
      <h3 className="text-5xl font-bold text-green mb-4">04. Contactez-moi</h3>
      <p className="max-w-xl mx-auto text-slate mb-12">
        Je suis actuellement ouvert à de nouvelles opportunités et ma boîte mail est toujours disponible. Que vous ayez une question ou que vous souhaitiez simplement dire bonjour, je ferai de mon mieux pour vous répondre !
      </p>
            <form ref={form} onSubmit={handleSubmit} className="max-w-lg mx-auto text-left">
          <div className="mb-4">
              <label htmlFor="nom" className="block text-light-slate mb-2">Nom</label>
              <input 
                  type="text" 
                  id="nom" 
                  name="nom" 
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-light-navy border border-lightest-navy rounded focus:outline-none focus:border-green text-lightest-slate"
              />
          </div>
          <div className="mb-4">
              <label htmlFor="email" className="block text-light-slate mb-2">Email</label>
              <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-light-navy border border-lightest-navy rounded focus:outline-none focus:border-green text-lightest-slate"
              />
          </div>
          <div className="mb-6">
              <label htmlFor="message" className="block text-light-slate mb-2">Message</label>
              <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-light-navy border border-lightest-navy rounded focus:outline-none focus:border-green text-lightest-slate"
              ></textarea>
          </div>
          <div className="text-center">
              <button 
                  type="submit"
                  disabled={loading}
                  className={`border border-green text-green px-8 py-3 rounded hover:bg-green/10 transition-colors duration-300 font-mono text-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  {loading ? 'Envoi...' : 'Envoyer'}
              </button>
          </div>
      </form>
    </section>
  );
};

export default Contact;
