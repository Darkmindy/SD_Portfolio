// src/sections/Projects.tsx 

import { useState, useMemo } from 'react';
import { Project, projectsData as allProjects, ProjectCategory, allTags as allTechnologies } from '@/data/projectsData'; // Importa tutti i progetti e tutte le tecnologie
import { ProjectCard } from '@/components/projects/ProjectCard'; 
import { ProjectModal } from '@/components/projects/ProjectModal'; 
import { AnimatePresence } from 'framer-motion'; 

import { Container } from '../components/layout/Container'; 
import SectionIntro from '../components/layout/SectionIntro'; 


const projectCategories: ProjectCategory[] = [
  'Web Development', 'PWA', 'Games', 'UI/UX', 'Open Source'
];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'Tutti'>('Tutti');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    let filtered = allProjects;

    // Filtro per categoria
    if (selectedCategory !== 'Tutti') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Filtro per tecnologie
    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter(project =>
        selectedTechnologies.every(tech => project.technologies.includes(tech))
      );
    }

    // Ordina i featured in cima (i "featured" vanno per primi)
    return filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }, [selectedCategory, selectedTechnologies]);

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('Tutti');
    setSelectedTechnologies([]);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 text-slate-800 dark:text-white">
      <Container>
        <SectionIntro
          title={<>I miei <span className="gradient-text">Progetti</span></>}
          description="Una selezione dei miei lavori più significativi, con un focus sui problemi risolti, le soluzioni sviluppate e i risultati ottenuti."
        />

        {/* --- Sistema di Filtri Avanzato --- */}
        <div className="mb-12">
          {/* Filtri per Categoria */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Filtra per Categoria:</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('Tutti')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === 'Tutti' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
              >
                Tutti
              </button>
              {projectCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  {cat} {/* Il nome è già formattato */}
                </button>
              ))}
            </div>
          </div>

          {/* Filtri per Tecnologie */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Filtra per Tecnologie:</h3>
            <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-2"> {/* Aggiunto scroll per molte tech */}
              {allTechnologies.map(tech => (
                <button
                  key={tech}
                  onClick={() => toggleTechnology(tech)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedTechnologies.includes(tech) ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Contatore e Pulisci Filtri */}
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-slate-800 dark:text-white">
              Progetti trovati: {filteredProjects.length}
            </span>
            {(selectedCategory !== 'Tutti' || selectedTechnologies.length > 0) && (
              <button
                onClick={clearFilters}
                className="px-4 py-2 rounded-full bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors"
              >
                Pulisci Filtri
              </button>
            )}
          </div>
        </div>

        {/* --- Griglia delle Cards dei Progetti --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={setSelectedProject} // Quando clicchi, imposta il progetto per la modale
            />
          ))}
        </div>
      </Container>

      {/* --- Modale Dettaglio Progetto --- */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;