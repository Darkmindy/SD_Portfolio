// src/components/projects/ProjectModal.tsx

import { Project } from '@/data/projectsData';
import { motion } from "framer-motion";
import { 
    FaExternalLinkAlt, 
    FaGithub, 
    FaTimes, 
    FaExclamationCircle, 
    FaLightbulb,       
    FaUserTie,         
    FaChartLine,       
    FaKey,             
    FaCheckCircle,     
    FaLaptopCode       
} from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  // Funzione per formattare il testo della categoria (es. "web-development" -> "Web Development")
  const formatCategoryName = (category: string) => {
    return category.replace('-', ' ')
                   .split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' ');
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto transform scale-100 opacity-100"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {/* Bottone di chiusura */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200 z-10"
          aria-label="Chiudi"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Header con gradient e info progetto */}
        <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-xl -mx-8 -mt-8 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
                {project.title}
            </h2>
            {/* Correzione applicata qui: rimosso project.type */}
            <p className="text-lg opacity-90 mt-1">
                {formatCategoryName(project.category)}
            </p>
        </div>

        {/* Galleria immagini (Swiper) */}
        {project.images && project.images.length > 0 ? (
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="my-6 rounded-lg shadow-md"
            >
                {project.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img 
                            src={image} 
                            alt={`Screenshot di ${project.title} ${index + 1}`} 
                            className="w-full h-auto rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        ) : (
            project.imageUrl && (
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-auto rounded-lg mb-6 shadow-md"
                />
            )
        )}
        
        {/* Contenuto principale della modale con padding */}
        <div className="px-2 pb-2">

            {/* Sezione Problema Risolto (Card colorata) */}
            {project.problem && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-100 dark:border-red-800">
                  <h3 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center">
                      <FaExclamationCircle className="mr-2 w-5 h-5" /> Problema Risolto:
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">{project.problem}</p>
              </div>
            )}

            {/* Sezione Soluzione Sviluppata (Card colorata) */}
            {project.solution && (
                <div className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-100 dark:border-green-800">
                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center">
                        <FaLightbulb className="mr-2 w-5 h-5" /> Soluzione Sviluppata:
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">{project.solution}</p>
                </div>
            )}

            {/* Sezione Il Mio Ruolo Specifico (Card colorata) */}
            {project.myRole && (
                <div className="mb-6 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950 border border-yellow-100 dark:border-yellow-800">
                    <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center">
                        <FaUserTie className="mr-2 w-5 h-5" /> Il Mio Ruolo Specifico:
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">{project.myRole}</p>
                </div>
            )}

            {/* Sezione Risultati Ottenuti (Card colorata e prominente) */}
            {project.result && (
                <div className="mb-6 p-4 rounded-lg bg-purple-50 dark:bg-purple-950 border border-purple-100 dark:border-purple-800 shadow-md">
                    <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center">
                        <FaChartLine className="mr-2 w-5 h-5" /> Risultati Ottenuti:
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-3">{project.result}</p>
                    {project.quantifiableResults && project.quantifiableResults.length > 0 && (
                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            {project.quantifiableResults.map((res, idx) => (
                                <div key={idx} className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-2 rounded-md flex items-center">
                                    <span className="font-semibold mr-1">✅ {res.label}:</span> {res.value}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Sezione Punti Chiave (Highlights) */}
            {project.highlights && project.highlights.length > 0 && (
                <div className="mb-6 p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950 border border-cyan-100 dark:border-cyan-800">
                    <h3 className="text-xl font-semibold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center">
                        <FaKey className="mr-2 w-5 h-5" /> Punti Chiave:
                    </h3>
                    <ul className="list-none space-y-2">
                        {project.highlights.map((point, idx) => (
                            <li key={idx} className="flex items-start text-slate-700 dark:text-slate-300">
                                <FaCheckCircle className="flex-shrink-0 mr-2 mt-1 text-cyan-600 dark:text-cyan-300" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Sezione Tecnologie Utilizzate */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 flex items-center">
                    <FaLaptopCode className="mr-2 w-5 h-5" /> Tecnologie Utilizzate:
                </h3>
                <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech: string, idx: number) => (
                        <span
                            key={idx}
                            className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-sm px-3 py-1 rounded-full font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Actions finali per Demo/Codice */}
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
        </div>
      </motion.div>
    </motion.div>
  );
}