/**
 * Composant MobileApps - Affiche une section des applications mobiles développées
 * Permet aux utilisateurs de télécharger les fichiers APK
 */
import React from 'react';

interface MobileApp {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  apkFile: string;
  apkSize?: string;
}

const mobileApps: MobileApp[] = [
  {
    title: 'ChifLet',
    description: 'Application mobile (première creation) innovante développée en WinDev Mobile permettant la traduction de chiffres en lettres en français et en anglais, avec un système interactif d\'affichage de tables de multiplication.',
    tags: ['WinDev Mobile', 'Traduction', 'Éducation'],
    features: [
      'Traduction de chiffres en lettres (français)',
      'Traduction de chiffres en lettres (anglais)',
      'Affichage interactif des tables de multiplication',
      'Interface utilisateur intuitive'
    ],
    apkFile: 'ChifLet.apk',
    apkSize: '~ 40 MB'
  }
];

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <title>Télécharger</title>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const MobileAppCard: React.FC<{ app: MobileApp }> = ({ app }) => {
  return (
    <div className="bg-light-navy rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 duration-300 group border-l-4 border-green">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-lightest-slate mb-2 group-hover:text-green transition-colors duration-300">{app.title}</h3>
        <p className="text-slate mb-4 leading-relaxed">{app.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {app.tags.map(tag => (
            <span key={tag} className="bg-lightest-navy text-green text-xs font-mono px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Fonctionnalités */}
        <div className="mb-6">
          <h4 className="text-light-slate font-semibold mb-3">Fonctionnalités :</h4>
          <ul className="space-y-2">
            {app.features.map((feature, index) => (
              <li key={index} className="text-slate flex items-start">
                <span className="text-green mr-2">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Download Button */}
        <div className="flex items-center space-x-4 pt-4 border-t border-lightest-navy">
          <a
            href={`/${app.apkFile}`}
            download={app.apkFile}
            className="inline-flex items-center space-x-2 bg-green text-navy px-6 py-2 rounded-lg font-semibold hover:bg-green-dark transition-all duration-300 transform hover:scale-105"
          >
            <DownloadIcon />
            <span>Télécharger APK</span>
          </a>
          {app.apkSize && (
            <span className="text-slate text-sm font-mono">{app.apkSize}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const MobileApps: React.FC = () => {
  return (
    <section id="mobile-apps" className="py-24">
      <h2 className="text-3xl font-bold text-lightest-slate mb-8 flex items-center">
        <span className="text-green font-mono mr-4">📱</span>
        Applications Mobile
        <span className="h-px bg-lightest-navy w-32 md:w-64 ml-6"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mobileApps.map((app, index) => (
          <div key={index}>
            <MobileAppCard app={app} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileApps;
