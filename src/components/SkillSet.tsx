import html from '../assets/Icons/html.png';
import css from '../assets/Icons/css.png';
import javascript from '../assets/Icons/javascript.png';
import react from '../assets/Icons/react.png';
import typescript from '../assets/Icons/typescript.png';
import tailwindcss from '../assets/Icons/tailwindcss.svg';
import figma from '../assets/Icons/figma.svg';
import less from '../assets/Icons/less.svg';
import expressJs from '../assets/Icons/expressjs.svg';
import angular from '../assets/Icons/angularjs.svg';
import nodeJs from '../assets/Icons/node.png';
import mongoDb from '../assets/Icons/mongo.png';
import git from '../assets/Icons/git.png';
import github from '../assets/Icons/github.png';
import vitejs from '../assets/Icons/vite.png';
import bootstrap from '../assets/Icons/bootstrap.png';
import adobe from '../assets/Icons/adobe.svg';
import C from '../assets/Icons/c.png';
import firebase from '../assets/Icons/firebase.svg';
import wordpress from '../assets/Icons/wordpress.svg';
import VsCode from '../assets/Icons/vscode.png';
import Accessibility from '../assets/Icons/accessibility.svg';
import CommandLine from '../assets/Icons/window-terminal.svg';
import GenAI from '../assets/Icons/ai.svg';

interface Skill {
  name: string;
  icon: string;
  status?: string;
}

const skillsByCategory: { [key: string]: Skill[] } = {
  'Frontend': [
    { name: 'Accessibility', icon: Accessibility },
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JavaScript', icon: javascript },
    { name: 'TypeScript', icon: typescript },
    { name: 'Angular', icon: angular },
    { name: 'React', icon: react },
    { name: 'TailwindCSS', icon: tailwindcss },
    { name: 'Bootstrap', icon: bootstrap },
    { name: 'Less', icon: less },
    { name: 'ViteJS', icon: vitejs },
  ],
  'Backend': [
    { name: 'NodeJS', icon: nodeJs },
    { name: 'ExpressJS', icon: expressJs, status: '↑' },
    { name: 'MongoDB', icon: mongoDb },
    { name: 'Firebase', icon: firebase },
    { name: 'Wordpress', icon: wordpress },
  ],
  'Design & Tools': [
    { name: 'Figma', icon: figma, status: '↑' },
    { name: 'Adobe Creative Suite', icon: adobe },
    { name: 'Visual Studio Code', icon: VsCode },
    { name: 'Git', icon: git },
    { name: 'GitHub', icon: github },
    { name: 'C', icon: C, status: '↑' },
  ],
  'Tools & Workflow': [
    { name: 'Command Line', icon: CommandLine },
    { name: 'Generative AI', icon: GenAI, status: '↑' },
  ],
};

const softSkills = [
  'Ottime capacità di problem solving e attenzione ai dettagli',
  'Capacità di lavorare in modo autonomo e in team',
  'Gestione del proprio tempo nel rispetto di progetti e scadenze',
  'Flessibilità e adattabilità al cambiamento',
  'Propensione all\'apprendimento continuo',
  'Buone capacità comunicative',
];

const SkillSet = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-white dark:bg-slate-950">
      <h2 className="text-3xl font-serif font-semibold text-center mb-12 text-primary dark:text-white">
        My Skill-Set
      </h2>

      {Object.entries(skillsByCategory).map(([category, skills]) => (
        <div key={category} className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-primary dark:text-white">{category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center group relative">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`w-16 h-16 sm:w-20 sm:h-20 transition-transform group-hover:scale-110 ${
                    skill.icon.endsWith('.svg')
                      ? 'filter dark:invert brightness-0 dark:brightness-200'
                      : ''
                  }`}
                />
                <p className="mt-3 text-base font-nanum-pen text-center text-primary dark:text-white">{skill.name}</p>
                {skill.status && (
                  <div className="absolute top-0 right-0 translate-x-1 -translate-y-1 bg-green-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-sm">
                    {skill.status}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Soft Skills */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold mb-6 text-primary dark:text-white">Soft Skills</h3>
        <ul className="list-disc list-inside text-base font-serif text-primary dark:text-white">
          {softSkills.map((skill, index) => (
            <li key={index} className="mb-2">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillSet;