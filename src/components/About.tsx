
import React from 'react';
import { getCloudinaryUrl } from '../utils/cloudinary';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-bold text-lightest-slate mb-8 flex items-center">
        <span className="text-green font-mono mr-4">01.</span>
        A propos de moi
        <span className="h-px bg-lightest-navy w-32 md:w-64 ml-6"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-3 text-slate">
          <p className="mb-4">
           Depuis longtemps, je suis fasciné par la technologie et les sites web que j’utilisais chaque jour. Un jour, j’ai découvert le code et j’ai compris que je pouvais moi-même créer ces outils. Ce qui était au départ une curiosité est devenu une véritable passion.</p>
          <p className="mb-4">
           Aujourd’hui, je suis développeur web full-stack. Mon objectif est simple : transformer des idées en sites et applications modernes, rapides et sécurisés, que tout le monde peut utiliser facilement. Pour moi, coder, ce n’est pas seulement écrire des lignes de texte, c’est donner vie à des projets qui aident les gens dans leur quotidien.
           </p>
        </div>
        <div className="md:col-span-2 flex justify-center items-start">
            <div className="relative w-64 h-64 group">
              <div className="absolute inset-0 bg-green rounded-md transform translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <img 
                src={getCloudinaryUrl('vert_od5vlg.JPG')}
                alt="#" 
                className="relative w-full h-full object-cover rounded-md z-10 filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
