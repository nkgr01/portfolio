/**
 * Composant Interests - Affiche une section des intérêts et atouts avec une timeline interactive
 * Utilise Intersection Observer pour détecter la position de défilement et mettre à jour l'indicateur
 */
import React, { useState, useEffect, useRef } from 'react';
import { getCloudinaryUrl } from '../utils/cloudinary';

// Données statiques des intérêts et atouts
const interestsData = [
  {
    title: 'Animés/ Mangas',
    description: 'Les animés et les mangas développent ma créativité et mon imagination. Ils m’inspirent à penser différemment, à explorer de nouvelles idées et à rester curieux face au monde.'
  },
  {
    title: 'La lecture',
    description: 'La lecture est une forme de méditation et de réflexion. Elle m\'aide à élargir mes connaissances et à nourrir ma réflexion. Elle renforce ma capacité à analyser, à apprendre rapidement et à mieux communiquer.'
  },
  {
    title: 'Adaptabilité à l’environnement',
    description: 'Je sais m’intégrer facilement dans différents contextes et m’ajuster aux situations nouvelles pour avancer efficacement.'
  },
  {
    title: 'Rigueur dans le travail',
    description: 'Je travaille avec méthode et sérieux, en veillant à produire des résultats fiables et de qualité.'
  }
];

const Interests: React.FC = () => {
  // État pour suivre l'élément actuellement visible
  const [activeIndex, setActiveIndex] = useState(0);
  // Références vers les éléments de la liste pour l'observation
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  // Position verticale du point indicateur
  const [dotTop, setDotTop] = useState(0);

  // Effet pour mettre à jour la position du point indicateur
  useEffect(() => {
    if (itemRefs.current[activeIndex]) {
      const topOffset = itemRefs.current[activeIndex]?.offsetTop || 0;
      // Ajout d'un petit décalage pour le centrage
      setDotTop(topOffset + 4);
    }
  }, [activeIndex]);

  // Configuration et initialisation de l'Intersection Observer
  useEffect(() => {
    // Création de l'observateur pour détecter les éléments visibles
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Mise à jour de l'index actif quand un élément devient visible
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      }
    );

    const currentRefs = itemRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="interests" className="py-24">
      <h2 className="text-2xl font-bold text-green mb-12 flex items-center">
        <span className="text-green font-mono mr-2">😌</span>
        Intérêts et Atouts
        <span className="h-px bg-lightest-navy w-32 md:w-64 ml-6"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <div className="relative">
            <div
              className="absolute w-4 h-4 rounded-full bg-green z-20"
              style={{
                left: '-1px',
                top: `${dotTop}px`,
                transition: 'top 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              aria-hidden="true"
            ></div>
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-lightest-navy" aria-hidden="true"></div>
            
            <ul className="list-none m-0 p-0">
              {interestsData.map((item, index) => (
                <li
                  key={index}
                 
                  ref={(el: HTMLLIElement | null) => { itemRefs.current[index] = el; }}
                  data-index={index}
                  className="pl-10 pb-16 relative"
                >
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-green bg-navy z-10" aria-hidden="true"></div>
                  
                  <h3 className="text-xl font-bold text-lightest-slate mb-2">{item.title}</h3>
                  <p className="text-slate">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="md:col-span-2 flex justify-center items-start">
            <div className="relative w-64 h-80 group mt-4">
              <div className="absolute inset-0 bg-green rounded-md transform translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <img 
                src={getCloudinaryUrl('profil.JPG')} 
                alt="Interests and Strengths" 
                className="relative w-full h-full object-cover rounded-md z-10 filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
        </div>
      </div>
    </section> 

  );
};

export default Interests;
