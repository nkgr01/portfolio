import React from 'react';

interface Skill {
    name: string;
    level: number;
    imageUrl: string;
}

const skills: Skill[] = [
        { name: 'HTML & CSS', level: 98, imageUrl: './image/css.PNG' },
        { name: 'JavaScript (ES6+)', level: 60, imageUrl: './image/js.PNG' },
        { name: 'TypeScript', level: 50, imageUrl: './image/ts.PNG' },
        { name: 'PHP', level: 55, imageUrl: './image/php.PNG' },
        { name: 'MySQL', level: 70, imageUrl: './image/mysql.PNG' },
        { name: 'Node.js (MERN)', level: 80, imageUrl: './image/node.PNG' },
        { name: 'Next.js (notion et base)', level: 45, imageUrl: './image/next.PNG' },
    
        { name: 'React', level: 95, imageUrl: './image/react.PNG' },
        { name: 'Tailwind CSS', level: 92, imageUrl: './image/tailwind.png' },
        { name: 'CMS (Wordpress)', level: 75, imageUrl: './image/wordpress.PNG' },
    
    
        { name: 'Git & GitHub', level: 90, imageUrl: './image/git.PNG' },
        { name: 'Figma (Notion et base)', level: 60, imageUrl: './image/figma.PNG' }
    ];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24">
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