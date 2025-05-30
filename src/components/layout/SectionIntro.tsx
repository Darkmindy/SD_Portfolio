import { motion } from 'framer-motion';
import React, { ReactNode } from 'react'; 

interface SectionIntroProps {
  title: ReactNode; 
  description?: string;
}

const sectionTitleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const SectionIntro: React.FC<SectionIntroProps> = ({ title, description }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={sectionTitleVariants}
      viewport={{ once: true }}
      className="text-center mb-12 sm:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionIntro;