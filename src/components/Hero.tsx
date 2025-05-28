import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profile from "@/assets/profile.png";
import { FaArrowDown, FaGithubAlt, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';

const rotatingTexts = [
  "Frontend Dev Artist",
  "React + Vite Lover",
  "WordPress Modder",
  "UI Enthusiast",
  "Problem Solver",
];

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // isLoaded rimosso
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Stato per il testo dinamico

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []); // Dipendenze vuote per eseguire una volta al mount

  // Effetto per cambiare il testo ogni 3 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000); // Cambia testo ogni 3 secondi

    return () => clearInterval(interval); // Pulisci l'intervallo alla dismount del componente
  }, []); // Dipendenze vuote per l'intervallo

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-20 text-slate-900 dark:text-white overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Sfondo animato */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
        {/* Forme geometriche fluttuanti */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-blue-400/30 dark:bg-blue-300/20 rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Sfera luminosa interattiva che segue il mouse */}
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 dark:from-blue-600/30 dark:to-purple-600/30 blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Contenuto principale con Framer Motion */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Immagine profilo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Stefania Deliso"
            className="rounded-full w-40 h-40 mt-16 md:w-64 md:h-64 object-cover md:mt-0"
          />
        </motion.div>

        {/* Testo */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6 leading-tight">
            Ciao, sono Stefania<br />
            {/* Testo dinamico */}
            <span className="text-cyan-500 inline-block opacity-80 h-12 overflow-hidden relative text-center md:text-left">
              <AnimatePresence mode='wait'>
                <motion.span
                  key={currentTextIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-block"
                >
                  {rotatingTexts[currentTextIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 font-sans">
            Costruisco applicazioni web{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              robuste
            </span>{" "}
            che combinano{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              design intuitivo
            </span>{" "}
            e{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              tecnologia all'avanguardia
            </span>.
          </p>

          {/* Bottoni CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <a
              onClick={() => scrollToSection('projects')}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-white cursor-pointer"
            >
              <span className="relative z-10">Esplora i Progetti</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              Iniziamo a Collaborare
            </a>
          </div>

          {/* Social links con animazione */}
          <div className="flex justify-center md:justify-start space-x-8 mt-8">
            {[
              { icon: FaGithubAlt, href: "https://github.com/Darkmindy", label: "GitHub" },
              { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/stefaniad91/", label: "LinkedIn" },
              { icon: FaEnvelope, href: "mailto:stefania.deliso1@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={label}
                href={href}
                className="group relative p-3 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                <span className="sr-only">{label}</span>
                <div className="absolute inset-0 rounded-full bg-blue-500/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

        </motion.div>
      </div>

      {/* Scroll down icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <FaArrowDown className="w-6 h-6 animate-bounce text-cyan-500" />
      </motion.div>
    </section>
  );
}