import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithubAlt, FaLinkedinIn, FaBars, FaXmark, FaEnvelope } from "react-icons/fa6";
import logoColor from "../assets/icon_color.png";
import logoWhite from "../assets/icon.png";

const sections = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Gestione della visibilità della navbar (nascondi/mostra allo scroll)
      setVisible(currentY < lastScrollY || currentY < 100);
      setLastScrollY(currentY);

      // Gestione della trasparenza/solidità della navbar
      setIsScrolled(currentY > 50);

      // Aggiorna la sezione attiva in base allo scroll
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (currentY + 100 >= top && currentY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-950/90 shadow-md backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" onClick={closeMenu}>
            <img
              src={logoColor}
              alt="Logo"
              className="h-10 dark:hidden"
            />
            <img
              src={logoWhite}
              alt="Logo White"
              className="h-10 hidden dark:block"
            />
          </a>

          <ul className="hidden md:flex gap-6 font-mono text-sm">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`relative transition-colors duration-300 ${
                    activeSection === section
                      ? "text-cyan-600 dark:text-cyan-400"
                      : "text-slate-800 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400"
                  }`}
                >
                  {section.toUpperCase()}
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-500 animate-slide-in" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="md:hidden text-slate-800 dark:text-white">
            <button onClick={toggleMenu} aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}>
              {menuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-slate-950/95 text-white flex flex-col justify-center items-center z-40"
          >
            <ul className="space-y-8 text-3xl font-mono mb-12">
              {sections.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={closeMenu}
                    className="hover:text-cyan-400 transition-colors duration-300"
                  >
                    {section.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex space-x-6 mt-8">
              <a href="https://github.com/Darkmindy" target="_blank" rel="noreferrer" onClick={closeMenu}>
                <FaGithubAlt size={32} className="hover:text-cyan-400 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/stefaniad91/" target="_blank" rel="noreferrer" onClick={closeMenu}>
                <FaLinkedinIn size={32} className="hover:text-cyan-400 transition-colors" />
              </a>
              <a href="mailto:stefania.devgdi@gmail.com" target="_blank" rel="noreferrer" onClick={closeMenu}>
                <FaEnvelope size={32} className="hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;