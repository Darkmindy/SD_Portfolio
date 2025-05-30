import { Project } from "../data/projectsData";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa'; // Importa FaTimes per il bottone di chiusura
// Se hai un componente Button, assicurati di importarlo qui:
// import { Button } from '../ui/Button'; 


interface Props {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Aggiunto per AnimatePresence nel caso tu volessi usarla qui
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 rounded-2xl p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto transform scale-100 opacity-100"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {/* Bottone di chiusura */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
          aria-label="Chiudi"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <h2 className="text-3xl md:text-4xl font-bold font-display gradient-text mb-4">
          {project.title}
        </h2>
        
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto rounded-lg mb-6 shadow-md"
        />
        
        <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
          {project.description}
        </p>
        
        {project.longDescription && (
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
            {project.longDescription}
          </p>
        )}

        <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">Tecnologie Utilizzate:</h3>
        <div className="flex flex-wrap gap-3 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-sm px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white rounded-full shadow-md hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200 font-semibold"
            >
              <FaGithub className="mr-2 w-5 h-5" /> Codice
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-semibold"
            >
              <FaExternalLinkAlt className="mr-2 w-5 h-5" /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}