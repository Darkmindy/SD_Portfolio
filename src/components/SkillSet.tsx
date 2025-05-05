import html from '../assets/Icons/html.svg';
import css from '../assets/Icons/css.svg';
import javascript from '../assets/Icons/javascript.svg';
import react from '../assets/Icons/react.svg';
import typescript from '../assets/Icons/typescript.svg';
import tailwindcss from '../assets/Icons/tailwindcss.svg';

const skills = [
  { name: 'HTML', icon: html, level: 'Lv. 5' },
  { name: 'CSS', icon: css, level: 'Lv. 5' },
  { name: 'JavaScript', icon: javascript, level: 'Lv. 4' },
  { name: 'React', icon: react, level: 'Lv. 4' },
  { name: 'TypeScript', icon: typescript, level: 'Lv. 3' },
  { name: 'TailwindCSS', icon: tailwindcss, level: 'Lv. 3' },
  // aggiungi altre skill se vuoi
];

const SkillSet = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-white dark:bg-slate-950">
      <h2 className="text-3xl font-serif font-semibold text-center mb-12 text-primary dark:text-white">
        My Skill-Set
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center group relative">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 sm:w-20 sm:h-20 transition-transform group-hover:scale-110"
            />
            <p className="mt-3 text-base font-nanum-pen text-center text-primary dark:text-white">{skill.name}</p>

            {/* Pixel art badge modificato */}
            <div className="absolute top-0 right-0 translate-x-2 -translate-y-2 bg-accent text-white dark:bg-accent-secondary
             dark:text-white border-2 border-white dark:border-slate-900 text-base font-bold px-2 py-1 rounded shadow-md font-nanum-pen">
              {skill.level}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSet;