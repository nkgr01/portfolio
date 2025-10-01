
import React from 'react';
import type { Project } from 'src/types';

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <title>GitHub</title>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <title>External Link</title>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);


const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a modern design, product management, user authentication, and a Stripe payment integration.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    imageUrl: 'https://picsum.photos/seed/project1/400/300',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Project Management Tool',
    description: 'A collaborative project management tool that helps teams organize tasks, track progress, and communicate effectively. Features include Kanban boards and real-time updates.',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'GraphQL'],
    imageUrl: 'https://picsum.photos/seed/project2/400/300',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'AI-Powered Content Generator',
    description: 'A web application that leverages the Gemini API to generate creative content such as blog posts, social media captions, and marketing copy based on user prompts.',
    tags: ['React', 'Gemini API', 'Node.js', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/seed/project3/400/300',
    liveUrl: '#',
    sourceUrl: '#',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-light-navy rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 duration-300 group">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-lightest-slate mb-2 group-hover:text-green transition-colors duration-300">{project.title}</h3>
        <p className="text-slate mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-lightest-navy text-green text-xs font-mono px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          {project.sourceUrl && (
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors duration-300">
              <GitHubIcon />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors duration-300">
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-bold text-lightest-slate mb-8 flex items-center">
        <span className="text-green font-mono mr-4">02.</span>
        Quelques Projets Réalisés
        <span className="h-px bg-lightest-navy w-32 md:w-64 ml-6"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
