import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFramer } from 'react-icons/si';

// Definisci le tue competenze con il nome e il livello
const skills = [
  { name: 'React', icon: FaReact, level: 7 },
  { name: 'JavaScript', icon: FaJs, level: 8 },
  { name: 'TypeScript', icon: SiTypescript, level: 7 },
  { name: 'HTML5', icon: FaHtml5, level: 9 },
  { name: 'CSS3', icon: FaCss3, level: 8 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 8 },
  { name: 'Git', icon: FaGitAlt, level: 7 },
  { name: 'Node.js', icon: FaNodeJs, level: 6 },
  { name: 'Framer Motion', icon: SiFramer, level: 7 },
  // Aggiungi altre competenze qui
];

const Skillset = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 px-0 max-w-5xl mx-auto bg-white dark:bg-slate-950 text-slate-900 dark:text-white my-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delayChildren: 0.2, staggerChildren: 0.1 }}
    >
      <h2 className="text-3xl font-serif font-bold mb-8 text-center text-slate-900 dark:text-white">My skill-set</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center p-4 rounded-md shadow-md border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-800"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <skill.icon className="text-4xl mb-2 text-cyan-500" />
            <span className="text-sm font-mono mb-1 text-slate-900 dark:text-slate-300">{skill.name}</span>
            <span className="bg-accent-secondary text-white text-xs font-bold px-2 py-1 rounded-full">
              Lv. {skill.level}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skillset;