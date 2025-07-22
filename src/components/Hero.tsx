import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profile from "@/assets/profile.png";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleKeyPress = useCallback((e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  }, [scrollToSection]);

  useEffect(() => {
    setIsVisible(true);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  }), []);

  const imageVariants = useMemo(() => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.2 }
    }
  }), []);

  const socialLinks = useMemo(() => [
    { icon: Github, href: "https://github.com/Darkmindy", label: "GitHub", ariaLabel: "Visit my GitHub profile" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/stefaniad91/", label: "LinkedIn", ariaLabel: "Visit my LinkedIn profile" },
    { icon: Mail, href: "mailto:stefania.deliso1@gmail.com", label: "Email", ariaLabel: "Send me an email" }
  ], []);

  const floatingSpheres = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const count = isMobile ? 6 : 15;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 3,
      scale: 0.5 + Math.random() * 0.5
    }));
  }, []);

  const interactiveGlowStyle = useMemo(() => ({
    left: mousePosition.x - 200,
    top: mousePosition.y - 200,
    transform: 'translate3d(0, 0, 0)',
  }), [mousePosition]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-slate-900 dark:text-white overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900"
      role="banner"
      aria-label="Hero section"
    >
      {/* Animated Background */}
      <div className="absolute inset-0" aria-hidden="true">
        {floatingSpheres.map(sphere => (
          <div
            key={sphere.id}
            className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-blue-400/50 dark:bg-blue-300/40 rounded-full animate-pulse"
            style={{
              left: `${sphere.left}%`,
              top: `${sphere.top}%`,
              animationDelay: `${sphere.delay}s`,
              animationDuration: `${sphere.duration}s`,
              transform: `scale(${sphere.scale})`
            }}
          />
        ))}
        <div
          className="absolute w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/40 dark:from-blue-400/30 dark:to-purple-400/30 blur-3xl pointer-events-none"
          style={interactiveGlowStyle}
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12"
      >
        {/* Profile Image */}
        <motion.div variants={imageVariants} className="order-1">
          <div className="relative group">
            <img
              src={profile}
              alt="Stefania Deliso - Creative Designer & Frontend Developer"
              className="rounded-full w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover border-4 border-blue-400 shadow-2xl group-hover:scale-105 transition-transform duration-300"
              loading="eager"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="text-center lg:text-left order-2 max-w-2xl">
          <motion.p variants={itemVariants} className="text-base sm:text-lg font-medium mb-3 text-slate-700 dark:text-slate-200">
            Ciao, sono Stefania!
          </motion.p>

          <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6">
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">Creative</span>
            <span className="block text-slate-900 dark:text-white">Designer</span>
            <span className="block text-lg sm:text-2xl md:text-3xl mt-2 text-slate-600 dark:text-slate-300 font-normal">
              & Frontend Developer
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            10 anni di esperienza nel graphic design, 2 anni nel frontend development.
            Creo esperienze digitali che <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">ispirano</span> e <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">coinvolgono</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
            <button
              onClick={() => scrollToSection('projects')}
              onKeyDown={(e) => handleKeyPress(e, 'projects')}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-white transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 active:scale-95"
              aria-label="Scroll to projects section"
            >
              <span className="relative z-10">Esplora i Progetti</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              onKeyDown={(e) => handleKeyPress(e, 'contact')}
              className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-full border-2 border-slate-300 dark:border-slate-500 text-slate-700 dark:text-slate-200 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 active:scale-95"
              aria-label="Scroll to contact section"
            >
              Iniziamo a Collaborare
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start space-x-4" role="list" aria-label="Social media links">
            {socialLinks.map(({ icon: Icon, href, label, ariaLabel }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 sm:p-4 rounded-full bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm border border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-white dark:hover:bg-slate-600 transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                aria-label={ariaLabel}
                role="listitem"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 p-3 rounded-full bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-500/50 group"
        onClick={() => scrollToSection('about')}
        onKeyDown={(e) => handleKeyPress(e, 'about')}
        aria-label="Scroll to about section"
      >
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
        </motion.div>
      </motion.button>
    </section>
  );
}
