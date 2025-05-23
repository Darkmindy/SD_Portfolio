import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithubAlt, FaLinkedinIn, FaBars, FaXmark } from "react-icons/fa6";
import logo from "../assets/icon.png";

const sections = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY || currentY < 100);
      setLastScrollY(currentY);

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (currentY + 200 >= top && currentY < bottom) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-950/90 backdrop-blur-md shadow-md"
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#home">
            <img src={logo} alt="Logo" className="h-10 md:h-10" />
          </a>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6 font-mono text-sm">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`relative transition-colors duration-300 ${
                    activeSection === section
                      ? "text-cyan-600 dark:text-cyan-400"
                      : "text-slate-800 dark:text-white"
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

          {/* Mobile button */}
          <div className="md:hidden text-slate-800 dark:text-white">
            <button onClick={toggleMenu}>
              {menuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.3 }}
           className="fixed inset-0 bg-slate-900/90 text-white flex flex-col justify-center items-center z-40 glitch">
            <ul className="space-y-6 text-xl font-mono">
              {sections.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-cyan-400 transition-all"
                  >
                    {section.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-4 mt-12">
              <a href="https://github.com/Darkmindy" target="_blank" rel="noreferrer">
                <FaGithubAlt size={28} className="hover:text-cyan-400 transition" />
              </a>
              <a href="https://www.linkedin.com/in/stefaniad91/" target="_blank" rel="noreferrer">
                <FaLinkedinIn size={28} className="hover:text-cyan-400 transition" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
