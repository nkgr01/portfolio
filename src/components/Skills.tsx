/**
 * Composant Skills - Affiche la section des compétences avec des barres de progression
 * 
 * Ce composant présente une grille de compétences techniques avec :
 * - Une image représentative pour chaque compétence
 * - Une barre de progression indiquant le niveau de maîtrise
 * - Des indicateurs d'accessibilité pour les lecteurs d'écran
 */

import React from 'react';
import { getCloudinaryUrl } from '../utils/cloudinary';

/**
 * Interface définissant la structure d'une compétence
 * @interface Skill
 * @property {string} name - Nom de la compétence
 * @property {number} level - Niveau de maîtrise (0-100)
 * @property {string} imageUrl - Chemin vers l'icône de la compétence
 */
interface Skill {
    name: string;
    level: number;
    imageUrl: string;
}

/**
 * Liste des compétences avec leurs niveaux et images associées
 * Les niveaux sont définis sur une échelle de 0 à 100
 */
const skills: Skill[] = [
        { name: 'HTML & CSS', level: 90, imageUrl: getCloudinaryUrl('css_tu3umt') },
            { name: 'Tailwind CSS', level: 80, imageUrl: getCloudinaryUrl('tailwind_upsplv') },
        { name: 'CMS (Wordpress)', level: 80, imageUrl: getCloudinaryUrl('wordpress_pqq0lr') },
        { name: 'JavaScript (ES6+)', level: 60, imageUrl: getCloudinaryUrl('js_ptillk') },
         { name: 'Node.js (MERN)', level: 60, imageUrl: getCloudinaryUrl('node_rnrcpn') },
        
        { name: 'PHP (notion & base)', level: 55, imageUrl: getCloudinaryUrl('php_ajb5sf') },
       { name: 'TypeScript', level: 50, imageUrl: getCloudinaryUrl('ts_iza9cl') },
        { name: 'MySQL', level: 50, imageUrl: getCloudinaryUrl('mysql_tstemj') },
       { name: 'React (notion et base)', level: 50, imageUrl: getCloudinaryUrl('react_fbkagi') },
       { name: 'Next.js (notion et base)', level: 45, imageUrl: getCloudinaryUrl('next_y9oaw0') },
    
        { name: 'Git & GitHub', level: 60, imageUrl: getCloudinaryUrl('git_nnsztz') },
        { name: 'Figma (Notion et base)', level: 60, imageUrl: getCloudinaryUrl('figma_znuajd') }
    ];

/**
 * Composant principal Skills
 * Affiche une section responsive présentant les compétences techniques
 * @returns {JSX.Element} Section des compétences avec barres de progression
 */
const Skills: React.FC = () => {
    return (
        // Section principale avec espacement vertical
        <section id="skills" className="py-24">
            
            {/* Titre de section avec numérotation et ligne décorative */}
            <h2 className="text-3xl font-bold text-lightest-slate mb-8 flex items-center">
                <span className="text-green font-mono mr-4">04.</span>
                My Skills
                <span className="h-px bg-lightest-navy w-32 md:w-64 ml-6"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skill) => (
                    <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <img src={skill.imageUrl} alt={`${skill.name} logo`} className="w-8 h-8 rounded-full mr-3 object-cover" />
                                <span className="font-mono text-light-slate">{skill.name}</span>
                            </div>
                            <span className="font-mono text-green text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-lightest-navy rounded-full h-2.5">
                            <div
                                className="bg-green h-2.5 rounded-full"
                                style={{ width: `${skill.level}%` }}
                                role="progressbar"
                                aria-valuenow={skill.level}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label={`${skill.name} proficiency`}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;