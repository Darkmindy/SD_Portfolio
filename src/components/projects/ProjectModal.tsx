import { Project } from "./projectData";
import { motion } from "framer-motion";

interface Props {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 rounded-lg p-6 max-w-lg w-full shadow-xl relative"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-sm text-gray-400 hover:text-red-500"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <img src={project.imageUrl} alt={project.title} className="w-full h-auto rounded mb-4" />
        <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
        {project.text && <p className="text-sm text-gray-500 dark:text-gray-400">{project.text}</p>}

        <div className="flex flex-wrap gap-2 my-4">
          {(project.tech || project.stack || []).map((item, idx) => (
            <span key={idx} className="bg-cyan-100 dark:bg-cyan-800 text-xs px-2 py-1 rounded">
              {item}
            </span>
          ))}
        </div>

        <div className="flex justify-end gap-4 mt-4">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" className="text-blue-600 hover:underline">
              Codice
            </a>
          )}
          {project.liveUrl || project.demo ? (
            <a href={project.liveUrl || project.demo} target="_blank" className="text-blue-600 hover:underline">
              Demo
            </a>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}
