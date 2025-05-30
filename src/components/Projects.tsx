import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./layout/Container";
import { ProjectModal } from "./projects/ProjectModal"; 
// Importa i dati e i tipi dal nuovo file creato
import { projects, Project, ProjectCategory } from "../data/projectsData"; 

// Rimosse le importazioni non usate e commentato l'import di Button se non presente
// import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; 
// import { Button } from './ui/Button'; 

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { id: 'all', label: 'Tutti' },
    { id: 'web-development', label: 'Web Dev' },
    { id: 'ui-ux-design', label: 'UI/UX Design' },
    { id: 'branding', label: 'Branding' },
    { id: 'mobile-design', label: 'Mobile Design' },
    { id: 'other', label: 'Altro' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    exit: { opacity: 0, y: -50, scale: 0.9 }
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">I miei <span className="gradient-text">lavori</span></h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Una selezione dei progetti più significativi che rappresentano il mio percorso creativo e professionale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16 px-4"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as ProjectCategory | 'all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-md ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-5 right-5">
                    <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-md ${
                      project.type === 'Design'
                        ? 'bg-purple-600/20 text-purple-300 border border-purple-600/30'
                        : 'bg-cyan-600/20 text-cyan-300 border border-cyan-600/30'
                    }`}>
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300 font-display">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-5 text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-200/60 dark:bg-slate-700/60 text-xs font-medium rounded-md text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-slate-200/60 dark:bg-slate-700/60 text-xs font-medium rounded-md text-slate-700 dark:text-slate-300">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </Container>
    </section>
  );
}