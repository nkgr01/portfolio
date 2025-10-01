/**
 * Composant Hero - Section d'accueil du portfolio
 * Affiche une présentation personnelle avec photo et un appel à l'action
 */
import React from 'react';
import { getCloudinaryUrl } from '../utils/cloudinary';

const Hero: React.FC = () => {
  // Fonction pour faire défiler jusqu'à la section contact
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="max-w-4xl">
          <p className="mt-12 text-green text-sm font-mono mb-4">Hi, my name is</p>
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-lightest-slate">
            N'GUESSAN Kouamé Guy Rodrigue
          </h2>
          <h2 className="text-green text-3xl sm:text-4xl lg:text-4xl font-bold mt-2">
            Developpeur Web & Mobile junior
          </h2>
          <p className="text-white font-medium max-w-xl mt-6">
            Je suis un développeur web et mobile junior et j'aspire etre un <span className="text-green font-bold">full-stack</span>, déjà je suis passionné par la création de solutions numériques modernes et performantes. Mon objectif est de transformer des idées en expériences interactives accessibles et élégantes, tout en garantissant fluidité et sécurité.
          </p>
          <button 
            onClick={scrollToContact}
            className="mt-12 border border-green text-green px-8 py-4 rounded hover:bg-green/10 transition-colors duration-300 font-mono text-lg">
            Contact moi👌
          </button>
        </div>
        <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-green rounded-md transform translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <img 
                src={getCloudinaryUrl('court2_ncur3m.JPG')}
                alt="Profile" 
                className="relative w-full h-full object-cover rounded-md z-10 filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;