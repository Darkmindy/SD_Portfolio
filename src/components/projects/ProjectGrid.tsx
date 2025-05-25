import { useState } from "react";
import { projects, Project } from "./projectData";
import { ProjectModal } from "./ProjectModal";

export default function ProjectGrid() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => setSelected(project)}
          className="cursor-pointer bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-primary dark:text-white">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {(project.tech || project.stack || []).map((tech, i) => (
                <span key={i} className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-xs px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
