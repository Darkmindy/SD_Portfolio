import { motion, AnimatePresence } from 'framer-motion';
import SectionIntro from './layout/SectionIntro'; // Assicurati che il percorso sia corretto
import { allHardSkills, softSkillsPhrases, Skill } from '../data/skillsData'; // Assicurati che il percorso sia corretto

const SkillSet = () => {
  // Varianti per le icone delle Hard Skills (rimangono invariate rispetto alla precedente versione)
  const hardSkillIconVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        delay: 0.3 + i * 0.04,
      },
    }),
    hover: {
      scale: 1.18,
      rotate: [0, -3, 3, -3, 3, 0],
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 8,
        mass: 0.5,
      },
    },
  };

  // NUOVE Varianti per le card delle Soft Skills
  const softSkillCardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 }, // Partono leggermente da sotto e più piccole
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.3 + i * 0.06, // Ritardo per un'animazione a cascata
      },
    }),
    hover: {
      scale: 1.05, // Leggero ingrandimento
      y: -5, // Leggero sollevamento
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Ombra più pronunciata per profondità
      borderColor: ['#8B5CF6', '#EC4899'], // Bordo animato con gradiente (viola-rosa)
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        duration: 0.2, // Transizione più rapida
      },
    },
  };

  // Varianti per l'effetto "barattolo che si muove" (rimangono invariate)
  const jarShakeVariants = {
    initial: {},
    animate: {},
    hover: {
      x: [0, -2, 2, -2, 2, 0],
      rotate: [0, -0.5, 0.5, -0.5, 0.5, 0],
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        mass: 0.2,
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 0.3,
      },
    },
  };

  // Funzione per gli stili dello status badge (rimane invariata)
  const getStatusBadgeStyles = (status?: Skill['status']) => {
    switch (status) {
      case 'Ottimo':
        return 'bg-green-600/25 text-green-300 border border-green-600/40';
      case 'In Crescita':
        return 'bg-yellow-600/25 text-yellow-300 border border-yellow-600/40';
      case 'Base':
        return 'bg-blue-600/25 text-blue-300 border border-blue-600/40';
      default:
        return '';
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <SectionIntro
          title={
            <>
              Le Mie <span className="gradient-text">Competenze</span>
            </>
          }
          description="Un riassunto delle mie hard e soft skills che definiscono il mio profilo professionale."
        />

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-center items-stretch">

          {/* Barattolo Hard Skills */}
          <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={jarShakeVariants}
            className="relative flex flex-col items-center p-8 md:p-10 rounded-[3rem] border-4 border-blue-600 dark:border-blue-400 shadow-2xl overflow-hidden
                         bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-850
                         w-full md:w-1/2 min-h-[500px] h-auto transform perspective-[1000px] hover:rotateX-1 hover:rotateY-1
                         transition-all duration-300"
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400 font-display">
              Hard Skills
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10 justify-items-center w-full max-w-lg">
              <AnimatePresence>
                {allHardSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={hardSkillIconVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className="relative flex flex-col items-center justify-center text-center p-2 rounded-lg cursor-pointer
                               w-24 h-28 sm:w-28 sm:h-32 group"
                  >
                    <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`w-16 h-16 sm:w-20 sm:h-20 object-contain mb-2 transition-transform duration-300 group-hover:scale-105 ${
                      skill.icon.endsWith('.svg') ? 'invert dark:invert-0' : ''
                    }`}
                  />
                    <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200 leading-tight">
                      {skill.name}
                    </p>
                    {skill.status && (
                      <span
                        className={`absolute top-0 right-0 px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap shadow-sm ${getStatusBadgeStyles(skill.status)}`}
                      >
                        {skill.status}
                      </span>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Barattolo Soft Skills - Ridisegnato */}
          <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={jarShakeVariants}
            className="relative flex flex-col items-center p-8 md:p-10 rounded-[3rem] border-4 border-purple-600 dark:border-purple-400 shadow-2xl overflow-hidden
                         bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-850
                         w-full md:w-1/2 min-h-[500px] h-auto transform perspective-[1000px] hover:rotateX-1 hover:rotateY-1
                         transition-all duration-300"
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-purple-600 dark:text-purple-400 font-display">
              Soft Skills
            </h3>
            {/* Contenitore delle card delle soft skills - NUOVA GRIGLIA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 md:gap-x-8 md:gap-y-8 w-full max-w-lg">
              <AnimatePresence>
                {softSkillsPhrases.map((skill, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={softSkillCardVariants} // Utilizza le nuove varianti
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className="relative flex items-center justify-center p-4 rounded-xl border border-purple-300 dark:border-purple-700
                               bg-purple-50/50 dark:bg-purple-900/30 text-slate-800 dark:text-white
                               cursor-pointer shadow-md overflow-hidden
                               transition-all duration-300 text-center font-medium
                               hover:shadow-lg hover:border-purple-500 hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    <p className="text-base sm:text-lg md:text-xl font-semibold">
                      {skill.phrase}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SkillSet;