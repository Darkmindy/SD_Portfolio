// src/components/projects/ProjectCard.tsx

import { Project } from '@/data/projectsData';
import { FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Props {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export function ProjectCard({ project, onViewDetails }: Props) {
  // Usa la prima immagine del carosello o imageUrl come immagine della card
  const cardImage = project.images && project.images.length > 0
    ? project.images[0]
    : project.imageUrl;

  return (
    <motion.div
      className="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden cursor-pointer
                 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
      onClick={() => onViewDetails(project)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {project.featured && (
        <span className="absolute top-0 left-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10 flex items-center">
          <FaStar className="mr-1 text-yellow-300" /> Featured
        </span>
      )}

      {cardImage && (
        <img
          src={cardImage}
          alt={project.title}
          className="w-full h-48 object-cover object-top" // Altezza fissa per le card
        />
      )}

      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, idx) => ( // Mostra solo 3 tecnologie per non appesantire
            <span
              key={idx}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={(e) => { e.stopPropagation(); onViewDetails(project); }}
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
          >
            Vedi Dettagli
          </button>
          <div className="flex gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Impedisce l'apertura della modale
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                aria-label="Codice GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Impedisce l'apertura della modale
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                aria-label="Demo Live"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}