import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profile from "@/assets/profile.png";
import { FaArrowDown, FaGithubAlt, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Variazioni Framer Motion per gli elementi figli (testo, bottoni, social)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Ritarda progressivo ai figli
        delayChildren: 0.5 // Anima i figli dopo 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.3 } }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-white overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Sfondo animato con sfere fluttuanti e sfera luminosa interattiva */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950"> {/* MODIFICATO: Sfondo leggermente più scuro per light mode */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 bg-blue-300/50 dark:bg-blue-300/20 rounded-full animate-pulse-slow`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/50 to-purple-400/50 dark:from-blue-600/40 dark:to-purple-600/40 blur-3xl transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Contenuto principale con Framer Motion */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20"
      >
        {/* Immagine profilo */}
        <motion.div
          variants={imageVariants}
          className="flex-shrink-0 order-1 md:order-2"
        >
          <img
            src={profile}
            alt="Stefania Deliso"
            className="rounded-full w-48 h-48 md:w-72 md:h-72 object-cover border-4 border-blue-400 dark:border-blue-500 shadow-xl"
          />
        </motion.div>

        {/* Testo e CTA - Colonna di sinistra su desktop, sopra immagine su mobile */}
        <div className="text-center md:text-left order-2 md:order-1">
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-medium mb-2 text-slate-700 dark:text-slate-300"
          >
            Ciao, sono Stefania!
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight mb-4"
          >
            <span className="block gradient-text">Creative</span>
            <span className="block text-slate-900 dark:text-white">Designer</span>
            <span className="block text-2xl md:text-4xl lg:text-5xl mt-4 text-slate-600 dark:text-slate-400 font-normal">
              & Frontend Developer
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-8"
          >
            10 anni di esperienza nel graphic design, 2 anni nel frontend development.
            Creo esperienze digitali che <span className="gradient-text font-semibold">ispirano</span> e
            <span className="gradient-text font-semibold"> coinvolgono</span>.
          </motion.p>

          {/* Bottoni CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8"
          >
            <a
              onClick={() => scrollToSection('projects')}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-white cursor-pointer transform hover:-translate-y-1"
            >
              <span className="relative z-10">Esplora i Progetti</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg cursor-pointer transform hover:-translate-y-1"
            >
              Iniziamo a Collaborare
            </a>
          </motion.div>

          {/* Social links con animazione */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start space-x-6 mt-8"
          >
            {[
              { icon: FaGithubAlt, href: "https://github.com/Darkmindy", label: "GitHub" },
              { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/stefaniad91/", label: "LinkedIn" },
              { icon: FaEnvelope, href: "mailto:stefania.deliso1@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center"
              >
                <Icon className="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                <span className="sr-only">{label}</span>
                <div className="absolute inset-0 rounded-full bg-blue-500/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll down icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, repeat: Infinity, repeatType: "reverse", duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 p-2 rounded-full bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm shadow-lg cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <FaArrowDown className="w-6 h-6 animate-pulse text-blue-600 dark:text-blue-400" />
      </motion.div>
    </section>
  );
}