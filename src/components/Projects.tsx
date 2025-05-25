import { Container } from "../components/layout/Container";
import ProjectGrid from "../components/projects/ProjectGrid";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 text-primary dark:text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif font-bold mb-3">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Una collezione dei miei lavori più recenti. Clicca su un progetto per scoprire di più!
          </p>
        </motion.div>

        <ProjectGrid />
      </Container>
    </section>
  );
}
